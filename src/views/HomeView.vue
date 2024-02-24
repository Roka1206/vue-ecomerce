<template>
  <div class="home"></div>
  <UpperBanner />
  <TheFeatures />
  <TopOffers />
  <ProductsSwiper :products="flashDeals" />
  <TopCategories />
  <NewProducts :products="newProducts" />
</template>

<script>
import UpperBanner from '@/components/home/UpperBanner.vue';
import TheFeatures from '@/components/home/TheFeatures.vue';
import TopOffers from '@/components/home/TopOffers.vue';
import ProductsSwiper from '@/components/home/ProductsSwiper.vue';
import TopCategories from '@/components/home/TopCategories.vue';
import NewProducts from '@/components/home/NewProducts.vue';
import { productsModule } from '@/stores/products';
import { mapActions, mapState } from 'pinia';

export default {
  name: 'HomeView',
  components: {
    UpperBanner,
    TheFeatures,
    TopOffers,
    ProductsSwiper,
    TopCategories,
    NewProducts,
  },
  computed: {
    ...mapState(productsModule, ['flashDeals', 'newProducts']),
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
