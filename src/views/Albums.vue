<template>
  <div>
    <h1>View Your Albums</h1>
    <h2>Click One to Make Notes</h2>

    <ul>
      <li v-for="album in albums" :key="album.name">{{ album.album.name }}</li>
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
            "BQBBYumZ72Z988m2MlVI3xAhy5LnQLM2VHMblQuqQ7jsoCqF29cT2k1NRmK99KGNY5Rd_g2NbwoEW2jg8MNtaZ3_JD9kE57QHBylpTtHbP_anzB1hIkUyAoJQZHKIFXcETwBGOKraEr-v2zgVGhETBYw_6Xrvf6FFMdbvJ5hhQ",
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
