<template>
  <div></div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
const access_token =
  BQCwkj5OH7khQ_on3aqG9kFAwvxkkAeE0hUHSXV1NC0bWDO4n -
  XSVnvLmUO2HfXz8XJenKI -
  Lv9aPmCiYZDT0f0Hw2SRlpnE3fEy1KCfyZrkM1fF1N3ft_L8lJgeuQSg2fTBYCZHWcG6JmluLkHg5kbSGoEA7jTPWgyEt8fHfw;
Vue.use(VueAxios, axios);
export default {
  name: "Spotty",
  mounted() {
    Vue.axios
      .get("https://api.spotify.com/v1/me/albums", {})
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
