<template>
  <div class="home"></div>
  <UpperBanner />
  <TheFeatures />
  <TopOffers />
  <ProductsComponent
    :products="flashDeals"
    title="Flash Deals"
    titleColor="red"
  />
  <TopCategories />
  <NewProducts :products="newProducts" />
  <QualityFeatures />
  <ProductsComponent
    :products="mobilePhones"
    title="Top Mobile Phones"
    titleColor="#404040"
  />
  <v-container fluid>
    <v-row>
      <v-col
        cols="6"
        class="pr-4"
      >
        <img
          src="@/assets/images/band-left-cover.webp"
          alt=""
          class="w-100"
        />
      </v-col>
      <v-col
        cols="6"
        class="pl-4"
      >
        <img
          src="@/assets/images/band-right-cover.webp"
          alt=""
          class="w-100"
        />
      </v-col>
    </v-row>
  </v-container>
  <ProductsComponent
    :products="fragrances"
    title="Top Fragrances"
    titleColor="#404040"
  />
  <img
    src="@/assets/images/tv-banner.webp"
    alt=""
    class="w-100"
  />
  <ProductsComponent
    :products="groceries"
    title="Top Groceries"
    titleColor="#404040"
  />
  <WhyShopwithus />
</template>

<script>
import UpperBanner from '@/components/home/UpperBanner.vue';
import TheFeatures from '@/components/home/TheFeatures.vue';
import TopOffers from '@/components/home/TopOffers.vue';
import ProductsComponent from '@/components/home/ProductsComponent.vue';
import TopCategories from '@/components/home/TopCategories.vue';
import NewProducts from '@/components/home/NewProducts.vue';
import QualityFeatures from '@/components/home/QualityFeatures.vue';
import WhyShopwithus from '@/components/home/WhyShopwithus';
import { productsModule } from '@/stores/products';
import { mapActions, mapState } from 'pinia';

export default {
  name: 'HomeView',
  components: {
    UpperBanner,
    TheFeatures,
    TopOffers,
    ProductsComponent,
    TopCategories,
    NewProducts,
    QualityFeatures,
    WhyShopwithus,
  },
  computed: {
    ...mapState(productsModule, [
      'flashDeals',
      'newProducts',
      'mobilePhones',
      'fragrances',
      'groceries',
    ]),
  },
  methods: {
    ...mapActions(productsModule, ['getProducts']),
  },
  async mounted() {
    await this.getProducts();
    console.log(this.flashDeals);
  },
};
</script>
