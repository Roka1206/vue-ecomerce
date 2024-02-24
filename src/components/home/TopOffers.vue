<template>
  <div class="top-offers bg-grey-lighten-4 py-9">
    <v-container fluid>
      <v-row>
        <v-col
          cols="4"
          class="py-0"
        >
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; height: 100%; border-radius: 10px"
            >
              <img
                src="@/assets/images/playstations.webp"
                alt=""
                :style="`width: 100%; height: 100%; cursor: pointer; transition: .3s all ease-in-out; scale: ${
                  isHovering ? 1.1 : 1
                }`"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col
          cols="4"
          class="py-0"
        >
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; height: 100%; border-radius: 10px"
            >
              <img
                src="@/assets/images/headset.webp"
                alt=""
                :style="`width: 100%; height: 100%; cursor: pointer; transition: .3s all ease-in-out; scale: ${
                  isHovering ? 1.1 : 1
                }`"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col
          cols="4"
          class="py-0"
        >
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; height: 100%; border-radius: 10px"
            >
              <img
                src="@/assets/images/chairs.webp"
                alt=""
                :style="`width: 100%; height: 100%; cursor: pointer; transition: .3s all ease-in-out; scale: ${
                  isHovering ? 1.1 : 1
                }`"
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
      <v-row class="mt-5">
        <v-col
          cols="6"
          class="mt-2"
        >
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent pr-2"
              v-bind="props"
              style="overflow: hidden; height: 100%; border-radius: 10px"
            >
              <img
                src="@/assets/images/iphones.webp"
                alt=""
                :style="`width: 100%; height: 100%; cursor: pointer; transition: .3s all ease-in-out; scale: ${
                  isHovering ? 1.05 : 1
                }`"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col
          cols="6"
          class="mt-2"
        >
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent pl-2"
              v-bind="props"
              style="overflow: hidden; height: 100%; border-radius: 10px"
            >
              <img
                src="@/assets/images/laptops.webp"
                alt=""
                :style="`width: 100%; height: 100%; cursor: pointer; transition: .3s all ease-in-out; scale: ${
                  isHovering ? 1.05 : 1
                }`"
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
