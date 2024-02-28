import { defineStore } from 'pinia';
import axios from 'axios';

export const productsModule = defineStore('productsModule', {
  state: () => ({
    flashDeals: [],
    newProducts: [],
    mobilePhones: [],
    fragrances: [],
    groceries: [],
    categoryProducts: [],
    singelProduct: [],
    categories: [
      {
        title: 'Smart Phones',
        route: 'smartphones',
      },
      {
        title: 'Laptops',
        route: 'laptops',
      },
      {
        title: 'Fragrances',
        route: 'fragrances',
      },
      {
        title: 'Skincare',
        route: 'skincare',
      },
      {
        title: 'Groceries',
        route: 'groceries',
      },
      {
        title: 'Home Decoration',
        route: 'home-decoration',
      },
      {
        title: 'Furniture',
        route: 'furniture',
      },
      {
        title: 'Tops',
        route: 'tops',
      },
      /*      {
        title: 'Womens Dresses',
        route: 'womens-dresses',
      },
      {
        title: 'Womens Shoes',
        route: 'womens-shoes',
      },
      {
        title: 'Mens Shirts',
        route: 'mens-shirts',
      },
         {
        title: 'Mens Shoes',
        route: 'mens-shoes',
      },
      {
        title: 'Mens Watches',
        route: 'mens-watches',
      },
      {
        title: 'Womens Watches',
        route: 'womens-watches',
      },
      {
        title: 'Womens Bags',
        route: 'womens-bags',
      },
      {
        title: 'Womens Jewellery',
        route: 'womens-jewellery',
      },
      {
        title: 'Sunglasses',
        route: 'sunglasses',
      },
      {
        title: 'Automotive',
        route: 'automotive',
      }, */
    ],
  }),
  actions: {
    async getProducts() {
      await axios
        .get('https://dummyjson.com/products')
        .then((res) => {
          this.newProducts = res.data.products.filter(
            (el) => el.category === 'laptops',
          );
          this.flashDeals = res.data.products.slice(0, 8);
          this.mobilePhones = res.data.products.filter(
            (el) => el.category === 'smartphones',
          );
          this.fragrances = res.data.products.filter(
            (el) => el.category === 'fragrances',
          );
          this.groceries = res.data.products.filter(
            (el) => el.category === 'groceries',
          );
        })
        .catch((err) => console.log(err));
    },

    async getProductsByCategory(category) {
      await axios
        .get(`https://dummyjson.com/products/category/${category}?limit=20`)
        .then((res) => (this.categoryProducts = res.data));
    },

    async getSingleProduct(productId) {
      await axios
        .get(`https://dummyjson.com/products/${productId}`)
        .then((res) => (this.singelProduct = res.data));
    },
  },
});
