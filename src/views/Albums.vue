<template>
  <div>
    <h1>View Your Albums</h1>
    <h2>Click One to Make Notes</h2>

    <b-list-group horizontal="md">
      <router-link to="/form"
        ><b-list-group-item v-for="album in albums" :key="album.name">
          {{ album.album.name }}
        </b-list-group-item></router-link
      >
    </b-list-group>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
export default {
  data() {
    return {
      albums: [],
    };
  },
  name: "Albums",
  created() {},
  mounted() {
    const hash = window.location.hash.substr(1);
    const accessString = hash.indexOf("&");
    const accessToken = hash.substring(13, accessString);
    Vue.axios
      .get("https://api.spotify.com/v1/me/albums", {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      })
      .then((res) => {
        this.albums = res.data.items;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style></style>
