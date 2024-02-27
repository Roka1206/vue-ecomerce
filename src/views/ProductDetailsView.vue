<template>
  <div class="product-details mt-16">
    <h1>Product Details</h1>
    <v-container fluid>
      <v-row>
        <v-col cols="7">
          <img
            :src="tab ? tab : singleProduct.thumbnail"
            alt=""
            class="w-100"
            height="500"
          />
          <v-tabs
            center-active
            height="220"
            v-model="tab"
            class="mt-10"
          >
            <v-tab
              v-for="(img, i) in singleProduct.images"
              :key="i"
              class="mx-10"
              :value="img"
            >
              <img
                :src="img"
                alt=""
                width="100"
                height="100"
            /></v-tab>
          </v-tabs>
        </v-col>
        <v-col
          cols="5"
          class="pt-0 pl-6"
        >
          <v-card elevation="0">
            <v-card-title
              class="px-8"
              style="font-size: 18px; font-weight: bold"
              >{{ singleProduct.title }} Sample -
              {{ singleProduct.category }} For Sale</v-card-title
            >
            <div
              class="rating-parent d-flex align-center"
              style="gap: 10px"
            >
              <v-rating
                v-model="singleProduct.rating"
                half-increments
                readonly
                color="yellow-darken-2"
                size="x-small"
                density="cobact"
              >
              </v-rating>
              <span
                class="mt-1"
                style="font-size: 14px; color: rgb(96, 96, 96)"
                >Stock: {{ singleProduct.stock }}</span
              >
            </div>
            <v-card-text
              class="px-0"
              style="font-size: 14px; color: rgb(96, 96, 96)"
              >{{ singleProduct.description }}</v-card-text
            >
            <v-card-text
              class="px-0 pt-0"
              style="font-size: 14px; color: rgb(96, 96, 96)"
              >Brand: {{ singleProduct.brand }}</v-card-text
            >
            <v-card-text
              class="px-0 pt-0"
              style="font-size: 14px; color: rgb(96, 96, 96)"
              >Availabilty:
              {{
                singleProduct.stock > 0 ? 'In Stock' : 'Out of Stock'
              }}</v-card-text
            >
            <v-card-text class="pl-0 pt-0">
              <del>${{ singleProduct.price }}</del> From
              <span
                class="text-red"
                style="font-weight: 900; font-size: 16px"
              >
                ${{
                  Math.ceil(
                    singleProduct.price -
                      singleProduct.price *
                        (singleProduct.discountPercentage / 100),
                  )
                }}
              </span>
            </v-card-text>
            <v-card-text class="pl-0 pt-0"> Quantity </v-card-text>
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
                size="22"
                @click="quantity > 1 ? quantity-- : false"
                >mdi-minus</v-icon
              >
              <input
                type="number"
                style="border: none; outline: none; width: 60px"
                class="text-center py-2"
                min="1"
                v-model="quantity"
              />
              <v-icon
                size="22"
                @click="quantity++"
                >mdi-plus</v-icon
              >
            </div>
            <v-card-actions class="mt-7 w-100 px-0">
              <v-btn
                variant="outlined"
                style="
                  text-transform: none;
                  border-radius: 30px;
                  background-color: rgb(20, 20, 20);
                "
                class="w-75 text-white"
                density="compact"
                height="50"
                >Add to Cart</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { productsModule } from '@/stores/products';
import { mapActions, mapState } from 'pinia';
export default {
  computed: {
    ...mapState(productsModule, ['singleProduct']),
  },
  methods: {
    ...mapActions(productsModule, ['getSingleProduct']),
  },
  /*  data: () => ({
    tab: '',
    quantity: 1,
    product: {
      id: 2,
      title: 'iPhone X',
      description:
        'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: 'https://cdn.dummyjson.com/product-images/2/thumbnail.jpg',
      images: [
        'https://cdn.dummyjson.com/product-images/2/1.jpg',
        'https://cdn.dummyjson.com/product-images/2/2.jpg',
        'https://cdn.dummyjson.com/product-images/2/3.jpg',
        'https://cdn.dummyjson.com/product-images/2/thumbnail.jpg',
      ],
    },
  }), */
  async mounted() {
    await this.getSingleProduct(tjis.$route.params.productId);
  },
};
</script>

<style lang="scss"></style>
