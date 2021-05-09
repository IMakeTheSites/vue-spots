<template>
  <div>
    <h1>View Your Albums</h1>
    <h2>Click One to Make Notes</h2>

    <ul>
      <router-link to="/form"
        ><li v-for="album in albums" :key="album.name">
          {{ album.album.name }}
        </li></router-link
      >
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
// const accessToken =

Vue.use(VueAxios, axios);
export default {
  data() {
    return {
      albums: [],
    };
  },
  name: "Albums",
  mounted() {
    Vue.axios
      .get("https://api.spotify.com/v1/me/albums", {
        headers: {
          Authorization:
            "Bearer " +
            "BQALNT3oiMM6a8nOPjzS1r837qj9a7y-zP-mUzi9sB0HeQ66g6eShkJSXc8JiXNWgFAhCMTmFMCeRDTLMDum_rXyohXHXL2S0A45BnCkkUsTWM0PTOmktGaPH4gqzeRKfDJu9wU_GBtmcV8rZoimTrgS0FUBLTeqTyagoR1Wyw",
        },
      })
      .then((res) => {
        // console.log(res.data.items);
        this.albums = res.data.items;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style></style>
