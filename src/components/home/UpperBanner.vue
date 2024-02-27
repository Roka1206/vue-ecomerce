<template>
  <div class="banner">
    <div class="parent">
      <v-container>
        <v-row>
          <v-col cols="6">
            <div class="cont">
              <h3><span>Huge Saving</span> on UHD Televisions</h3>
              <p class="hint">Sale up to 70% off on selected items*</p>
              <v-btn
                variant="outlined"
                height="50"
                width="160"
                denisity="combact"
                style="border-radius: 30px; text-transform: none"
                >Shop Now</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.parent {
  height: 480px;
  background-image: url(../../assets/images/banner-bg.jpg);
  background-size: cover;
  background-position: -30px top;

  .cont {
    color: white;
    padding: 40px 0 0 100px;
    h3 {
      font-size: 45px;
      font-weight: 900;

      span {
        color: rgb(45, 251, 223);
      }
    }
    .hint {
      margin: 20px 0 40px;
    }
  }
}
</style>
