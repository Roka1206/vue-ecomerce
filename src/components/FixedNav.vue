<template>
  <div class="fixed-nav">
    <v-app-bar color="#02218f">
      <v-container fluid>
        <v-row>
          <v-col cols="2">
            <router-link :to="'/'">
              <img
                class="w-50"
                src="@/assets/images/logo.png"
                alt="logo"
              />
            </router-link>
          </v-col>
          <v-col cols="7">
            <ul
              class="links d-flex text-white justify-space-between"
              style="list-style: none"
            >
              <li
                v-for="category in categories"
                :key="category.title"
              >
                <router-link
                  :to="{
                    name: 'products_category',
                    params: { category: category.route, title: category.title },
                  }"
                  style="color: white; text-decoration: none"
                  >{{ category.title }}</router-link
                >
              </li>
            </ul>
          </v-col>
          <v-col
            cols="3"
            class="d-flex justify-end align-center"
            style="gap: 20px"
          >
            <svg
              data-icon="search"
              viewBox="0 0 512 512"
              width="20"
            >
              <path
                fill="white"
                d="M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5   S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9   C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z"
              ></path>
            </svg>
            <div
              class="wishlists d-flex flex-column align-center"
              :style="`cursor: pointer; pointer-events: ${
                $route.name == 'cart_page' ? 'none' : 'unset'
              }`"
              @click="openCart"
            >
              <v-badge
                location="right top"
                :content="cartItems.length"
                color="#ffb547"
                offset-x="-14"
                v-if="cartItems.length"
              >
                <v-icon>mdi-cart-outline</v-icon>
              </v-badge>
              <!-- <span class="mt-1">Cart</span> -->
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import { productsModule } from '@/stores/products';
import { mapState } from 'pinia';
import { cartStore } from '@/stores/cart';
export default {
  inject: ['Emitter'],
  methods: {
    openCart() {
      this.Emitter.emit('openCart');
    },
  },
  computed: {
    ...mapState(productsModule, ['categories']),
    ...mapState(cartStore, ['cartItems']),
  },
};
</script>

<style lang="scss" scoped></style>
