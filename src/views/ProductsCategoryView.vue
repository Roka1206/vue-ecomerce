<template>
  <div class="products-category mt-10">
    <h1 class="text-center mb-7">{{ $route.params.title }}</h1>
    <v-container>
      <v-card
        :loading="loading"
        class="pt-5"
        min-height="700px"
      >
        <v-row v-if="loading">
          <v-col
            cols="3"
            v-for="num in 4"
            :key="num"
          >
            <VSkeletonLoader type="image, article, button"></VSkeletonLoader>
          </v-col>
        </v-row>
        <v-row v-if="!loading">
          <v-col
            cols="3"
            v-for="item in categoryProducts.products"
            :key="item.id"
            class="px-3"
          >
            <v-lazy>
              <v-card
                elevation="0"
                class="pb-3"
              >
                <v-hover v-slot="{ isHovering, props }">
                  <div
                    class="img-parent"
                    style="height: 160px"
                  >
                    <img
                      :src="
                        showenItem[item.title]
                          ? showenItem[item.title]
                          : item.thumbnail
                      "
                      alt=""
                      class="w-100"
                      :style="`height: 200px; transition: 0.5s all ease-in-out; scale: ${
                        isHovering ? 1.05 : 1
                      }; cursor: pointer`"
                      v-bind="props"
                    />
                  </div>
                </v-hover>
                <v-card-text class="pl-0 pb-1">
                  {{
                    `(${item.title}) ${item.description}`.length <= 45
                      ? `(${item.title}) ${item.description}`
                      : `(${item.title}) ${item.description}`.substring(0, 45) +
                        '...'
                  }}
                </v-card-text>
                <v-rating
                  v-model="item.rating"
                  half-increments
                  readonly
                  color="yellow-darken-2"
                  size="x-small"
                  density="cobact"
                >
                </v-rating>
                <v-card-text class="pl-0 pt-0">
                  <del>${{ item.price }}</del> From
                  <span
                    class="text-red"
                    style="font-weight: 900; font-size: 16px"
                  >
                    ${{
                      Math.ceil(
                        item.price -
                          item.price * (item.discountPercentage / 100),
                      )
                    }}
                  </span>
                </v-card-text>
                <v-btn-toggle v-model="showenItem[item.title]">
                  <v-btn
                    v-for="(pic, i) in item.images"
                    :values="pic"
                    :key="i"
                    size="x-small"
                    rounded="xl"
                    :ripple="false"
                  >
                    <img
                      :src="pic"
                      alt=""
                      width="30"
                      height="30"
                      style="
                        border-radius: 50%;
                        border: 1px solid rgb(135, 135, 135);
                      "
                    />
                  </v-btn>
                </v-btn-toggle>
                <div class="mt-5">
                  <v-btn
                    density="combact"
                    class="py-2 px-4"
                    style="text-transform: none; border-radius: 30px"
                    variant="outlined"
                  >
                    Choose Options
                  </v-btn>
                </div>
              </v-card>
            </v-lazy>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { productsModule } from '@/stores/products';
import { mapActions, mapState } from 'pinia';
import { VSkeletonLoader } from 'vuetify/lib/components/index.mjs';

export default {
  components: {
    VSkeletonLoader,
  },
  data: () => ({
    showenItem: {},
    loading: false,
  }),
  methods: {
    ...mapActions(productsModule, ['getProductsByCategory']),
  },
  computed: {
    ...mapState(productsModule, ['categoryProducts']),
  },
  watch: {
    async $route() {
      document.documentElement.scrollTo(0, 0);
      this.loading = true;
      await this.getProductsByCategory(this.$route.params.category);
      this.loading = false;
    },
  },
  async mounted() {
    this.loading = true;
    await this.getProductsByCategory(this.$route.params.category);
    this.loading = false;
  },
};
</script>

<style lang="scss"></style>
