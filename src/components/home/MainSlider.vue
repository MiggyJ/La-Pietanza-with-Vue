<template>
  <div class="MainSlider">
      
  <v-carousel
    cycle
    height="580"
    hide-delimiters
    :show-arrows="false"
    class="justify-center"
  >
    <v-overlay :absolute=true opacity="0.5" overlay="true">
     <v-img src="@/assets/images/Logo 5.png" width="700"></v-img>
    </v-overlay>
    <v-carousel-item
      v-for="(image, i) in images"
      :key="i"
      :src="image.src"
    >
    </v-carousel-item>
  </v-carousel>
  </div>
</template>

<script>
  export default {
    name: 'MainSlider',
    data () {
      return {
        images: [
          {src: require('@/assets/images/carousel1.jpg')},
          {src: require('@/assets/images/carousel2.jpg')},
          {src: require('@/assets/images/carousel3.jpg')},
        ],
      }
    },
  }
</script>

<style>
</style>
