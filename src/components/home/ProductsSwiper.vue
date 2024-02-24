<template>
  <div class="products-swiper pt-16">
    <div class="title mb-10 px-5 d-flex align-center justify-space-between">
      <h2
        style="font-weight: 900 font-size: 30px"
        class="text-red"
      >
        Flash Deals
      </h2>
      <a
        href="#"
        class="text-black"
        style="font-size: 14px"
        >Shop All</a
      >
    </div>
    <Swiper
      :pagination="{ el: '.swiper-pagination', clickable: true }"
      :modules="modules"
      :slides-per-view="4"
      :space-between="35"
      class="pb-10 px-5"
      :navigation="{ prevIcon: '.swiper-prev', nextIcon: '.swiper-next' }"
      :autoplay="{ delay: 3000 }"
    >
      <SwiperSlide
        v-for="item in products"
        :key="item.id"
      >
        <v-card
          elevation="0"
          class="pb-5"
        >
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="img-parent"
              style="height: 200px"
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
            ({{ item.title }})
            {{
              item.description.split('').length <= 7
                ? item.description
                : item.description.split(' ').slice(0, 7).join(' ') + '...'
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
                  item.price - item.price * (item.discountPercentage / 100),
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
                style="border-radius: 50%; border: 1px solid rgb(135, 135, 135)"
              />
            </v-btn>
          </v-btn-toggle>
          <div class="mt-5">
            <v-btn
              density="combact"
              class="py-2 px-12"
              style="text-transform: none; border-radius: 30px"
              variant="outlined"
            >
              Choose Options
            </v-btn>
          </div>
        </v-card>
      </SwiperSlide>
      <div class="swiper-prev"></div>
      <div class="swiper-next"></div>
      <div class="swiper-pagination"></div>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import { Pagination, Navigation, Autoplay } from 'swiper';
export default {
  props: {
    products: {
      type: Array,
    },
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data: () => ({
    showenItem: {},
  }),
};
</script>

<style lang="scss">
.products-swiper {
  .swiper-button-next,
  .swiper-button-prev {
    width: 35px;
    height: 35px;
    border: 2px solid black;
    border-radius: 50%;
    background-color: white;
    top: 43%;
    &::after {
      font-size: 13px;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      color: black;
      font-weight: 900;
    }
  }
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
  }
}
</style>
