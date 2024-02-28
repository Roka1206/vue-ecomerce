import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/products/:category/:title',
    name: 'products_category',
    component: () => import('@/views/ProductsCategoryView'),
  },
  {
    path: '/products/product-details/:productId',
    name: 'products_details',
    component: () => import('@/views/ProductDetailsView'),
  },
  {
    path: '/cart-page',
    name: 'cart_page',
    component: () => import('@/views/CartView'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
