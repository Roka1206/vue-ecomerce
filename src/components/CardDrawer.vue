<template>
  <div class="drawer">
    <v-navigation-drawer
      v-model="drawer"
      location="right"
      temporary
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        quisquam reiciendis ut sint cupiditate nemo perspiciatis ipsa omnis
        adipisci eius. Architecto, obcaecati ipsam doloremque consequatur sequi
        facere. Repellendus, velit ut?
      </p>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  inject: ['Emitter'],
  data: () => ({
    drawer: false,
  }),
  mounted() {
    this.Emitter.on('openCart', () => {
      this.drawer = true;
    });
  },
};
</script>

<style lang="scss" scoped></style>
