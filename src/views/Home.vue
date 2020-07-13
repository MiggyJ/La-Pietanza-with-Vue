<template>
  <div class="home">
    <MainSlider />
    <Welcome class="mt-9" />
    <TodaySpecial />
    
  </div>
</template>

<script>
// @ is an alias to /src
import MainSlider from '@/components/home/MainSlider.vue'
import TodaySpecial from '@/components/home/TodaySpecial.vue'
import Welcome from '@/components/home/Welcome.vue'

export default {
  name: 'Home',
  components: {
    MainSlider,
    TodaySpecial,
    Welcome
  }
}
</script>
