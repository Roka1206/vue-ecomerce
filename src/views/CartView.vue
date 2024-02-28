<template>
  <div class="cart-view">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-breadcrumbs
            :items="['Home', 'Your cart']"
            style="font-size: 13px"
          >
            <template v-slot:divider>
              <v-icon color="#878484">mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
        </v-col>
        <v-col
          cols="12"
          class="pb-0 px-0"
        >
          <v-card-title
            class="pl-0 pr-2 d-flex justify-space-between align-center w-100"
            style="font-size: 35px; font-weight: bold"
            >Cart Your
          </v-card-title>
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
                    style="
                      white-space: pre-wrap;
                      font-size: 14px;
                      line-height: 1.2;
                    "
                  >
                    {{ item.title }} Sample - {{ item.category }}
                  </v-card-title>
                  <v-card-text
                    class="px-0"
                    style="color: #6f6f6f"
                  >
                    Category: {{ item.category }}
                  </v-card-text>
                  <div
                    class="item-footer d-flex justify-space-betwen align-center"
                  >
                    <v-card-text class="px-0 pt-2 font-weight-bold">
                      ${{
                        Math.ceil(
                          item.price -
                            item.price * (item.discountPercentage / 100),
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
                class="w-100"
                color="blue"
                >View Cart
              </v-btn>
            </v-card-actions>
            ${{ calcTotalPrice }}
          </v-card>
          <v-card-text
            class="px-0 pt-2"
            style="color: #6f6f6f"
            v-if="cartItems.length"
            >Only ${{ calcTotalPrice }} away from Free Shipping</v-card-text
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { cartStore } from '@/stores/cart';
import { mapState, mapActions } from 'pinia';

export default {
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
};
</script>

<style lang="scss"></style>
