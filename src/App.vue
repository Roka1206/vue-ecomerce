<template>
  <app-layout>
    <router-view />
    <QuickComponents />
    <v-snackbar
      v-model="bar"
      location="left botton"
      max-width="300"
      timeout="3000"
    >
      {{ itemTitle }} has been added to your cart succesfuly!
      <template v-slot:actions>
        <v-icon @click="bar = false">mdi-close</v-icon>
      </template>
    </v-snackbar>
  </app-layout>
</template>

<script>
import AppLayout from './components/layout/AppLayout.vue';
import QuickComponents from '@/components/QuickComponents.vue';

export default {
  inject: ['Emitter'],
  components: { AppLayout, QuickComponents },

  data: () => ({ bar: false, itemTitle: '' }),

  mounted() {
    this.Emitter.on('showMsg', (data) => {
      this.itemTitle = data;
      this.bar = true;
    });
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.v-rating_wrapper {
  margin-right: 5px;
}

input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
