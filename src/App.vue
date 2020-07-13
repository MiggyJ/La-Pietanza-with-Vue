<template>
  <v-app>
    <Toolbar />
    <v-main>
      <SideNav />
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from  '@/components/templates/Footer'
import Toolbar from '@/components/templates/Toolbar'
import SideNav from '@/components/templates/SideNav'

export default {
  name: 'App',

  components: {
    Toolbar,
    SideNav,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>

