<template>
  <div>
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <v-container>
      <v-img
      class="image mt-4 mb-4 mx-10"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
    >
     
      </v-img>
    </v-container>
  </div>
</template>
 
<script>
  import VueGallery from 'vue-gallery';
  
  export default {
    name: 'Gallery',
    data: function () {
      return {
        images: [
          require('@/assets/images/g1.jpg'),
          require('@/assets/images/g2.jpg'),
          require('@/assets/images/g3.jpg'),
          require('@/assets/images/g4.jpg'),
          require('@/assets/images/g5.jpg'),
          require('@/assets/images/g6.jpg'),
          require('@/assets/images/g7.jpg'),
          require('@/assets/images/g8.jpg'),
          require('@/assets/images/g9.jpg')
        ],
        index: null
      };
    },
 
    components: {
      'gallery': VueGallery
    },
  }
</script> 
 
<style scoped>
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
</style> 