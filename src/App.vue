<template>
  <v-app>
    <side-bar></side-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import SideBar from "./components/SideBar";
export default {
  name: "App",
  components: { SideBar },
  data: () => ({})
};
</script>

<style>
@import "assets/css/style.css";
</style>
