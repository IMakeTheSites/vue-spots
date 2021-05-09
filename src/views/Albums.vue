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
            "BQC6FMG_98amhJlqJDNK28u4FxkU2V3VnLP6xmCgOxZZ6l4_L8kPT4YJ-rjEhHWABODDyeqjIY2tU76WVKtl5L0D62bqD0f2f7eCdado8StjoKiOFF_Np-9H5HJr9IgycRLwffMFHYlss4lFuVOtOERJ3H2wde6GZGNB95WZnw",
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
