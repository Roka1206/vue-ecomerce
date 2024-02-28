<template>
  <div class="drawer">
    <v-navigation-drawer
      v-model="drawer"
      location="right"
      temporary
      width="370"
      class="cart-drawer pr-1"
    >
      <v-card
        class="px-0"
        elevation="0"
      >
        <v-card-title
          class="pl-0 pr-2 d-flex justify-space-between align-center w-100"
          style="font-size: 17px; font-weight: bold"
          >Shopping Cart
          <v-icon @click="drawer = false">mdi-close</v-icon>
        </v-card-title>
        <v-card-text
          class="px-0 py-0"
          style="color: #6f6f6f"
        >
          {{ cartItems.length }} Items
        </v-card-text>
        <v-card-text
          class="px-0"
          style="color: #6f6f6f"
          v-if="!cartItems.length"
          >Free shipping for all order over $800.00
        </v-card-text>
        <v-card-text
          class="px-0 text-center"
          style="color: #6f6f6f"
          v-if="!cartItems.length"
          >Your cart is empty.
        </v-card-text>
        <v-card-actions v-if="!cartItems.length">
          <v-btn
            style="
              text-transform: none;
              border-radius: 30px;
              border-color: rgb(199, 199, 199);
            "
            class="w-100"
            variant="outlined"
            density="compact"
            height="45"
            >Continue Shopping</v-btn
          >
        </v-card-actions>
      </v-card>
      <v-card
        class="pa-0 mt-5"
        elevation="0"
        v-if="cartItems.length"
        max-height="200"
        style="overflow-y: auto"
      >
        <div class="bar-parent mt-4 position-relative">
          <v-progress-linear
            color="red"
            height="10"
            model-value="50"
            striped
          ></v-progress-linear>
        </div>
        <v-card-text
          class="px-0 pt-2"
          style="color: #6f6f6f"
          v-if="cartItems.length"
          >Only ${{ calcTotalPrice }} away from Free Shipping</v-card-text
        >
        <v-container class="px-1">
          <v-row
            v-for="item in cartItems"
            :key="item.id"
            class="align-center mb-3"
          >
            <v-col cols="5">
              <img
                :src="item.thumbail"
                class="w-100"
                alt=""
              />
            </v-col>
            <v-cols cols="7">
              <v-card-title
                class="px-0"
                style="white-space: pre-wrap; font-size: 14px; line-height: 1.2"
              >
                {{ item.title }} Sample - {{ item.category }}
              </v-card-title>
              <v-card-text
                class="px-0"
                style="color: #6f6f6f"
              >
                Category: {{ item.category }}
              </v-card-text>
              <div class="item-footer d-flex justify-space-betwen align-center">
                <v-card-text class="px-0 pt-2 font-weight-bold">
                  ${{
                    Math.ceil(
                      item.price - item.price * (item.discountPercentage / 100),
                    ) * item.quantity
                  }}
                  <div
                    class="counter px-1"
                    style="
                      border-radius: 30px;
                      border: 1px solid rgb(201, 201, 201);
                      width: fit-content;
                      font-size: 15px;
                    "
                  >
                    <v-icon
                      size="19"
                      @click="item.quantity > 1 ? item.quantity-- : false"
                      >mdi-minus</v-icon
                    >
                    <input
                      type="number"
                      style="
                        border: none;
                        outline: none;
                        width: 35px;
                        font-size: 12px;
                      "
                      class="text-center py-2"
                      min="1"
                      v-model="item.quantity"
                    />
                    <v-icon
                      size="19"
                      @click="item.quantity++"
                      >mdi-plus</v-icon
                    >
                  </div>
                  <v-icon
                    size="22"
                    @click="deleteItem(item.id)"
                    >mdi-close</v-icon
                  >
                </v-card-text>
              </div>
            </v-cols>
          </v-row>
        </v-container>
        <v-card-actions
          class="flex-column justify-center align-center"
          style="gap: 15px"
        >
          <v-btn
            style="
              text-transform: none;
              border-radius: 30px;
              border-color: rgb(199, 199, 199);
            "
            variant="elevated"
            density="compact"
            height="45"
            class="w-100"
            elevation="0"
            color="blue"
            >Check Out
          </v-btn>
          <v-btn
            style="
              text-transform: none;
              border-radius: 30px;
              border-color: rgb(199, 199, 199);
            "
            variant="outlined"
            density="compact"
            height="45"
            class="w-100 mx-0"
            color="blue"
            @click="$route.push({ name: 'cart-page' })"
            >View Cart
          </v-btn>
        </v-card-actions>
        ${{ calcTotalPrice }}
      </v-card>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { cartStore } from '@/stores/cart';
import { mapState, mapActions } from 'pinia';
export default {
  inject: ['Emitter'],
  data: () => ({
    drawer: false,
  }),
  computed: {
    ...mapState(cartStore, ['cartItems']),
    calcTotalPrice() {
      let total = 0;
      this.cartItems.forEach((product) => {
        total +=
          Math.ceil(
            product.price - product.price * (product.discountPercentage / 100),
          ) * product.quantity;
      });
      return total;
    },
  },
  methods: {
    ...mapActions(cartStore, ['getCartItems', 'deleteItem']),
  },
  mounted() {
    this.Emitter.on('openCart', () => {
      this.drawer = true;
    });
    this.getCartItems();
  },
};
</script>

<style lang="scss">
.v-navigation-drawer__content {
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: rgb(150, 150, 150);
  }
  &::-webkit-scrollbar-track {
    width: 5px;
    background-color: rgb(200, 200, 200);
  }
}
</style>
