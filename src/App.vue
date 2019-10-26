<template>
<v-app>
  <v-navigation-drawer app>
    Side Bar place
  </v-navigation-drawer>

  <v-content>
    <router-view></router-view>
  </v-content>

</v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    // HelloWorld,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
  @import "assets/css/style.css";
</style>
