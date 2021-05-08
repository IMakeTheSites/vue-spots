<template>
  <div>
    <h1>View Your Albums</h1>
    <h2>Click One to Make Notes</h2>
    <h3>{{ $route.params.access_token }}</h3>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
// const accessToken =

Vue.use(VueAxios, axios);
export default {
  name: "Albums",
  mounted() {
    console.log(this.$route.params.access_token);
    Vue.axios
      .get("https://api.spotify.com/v1/me/albums", {
        headers: {},
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style></style>
