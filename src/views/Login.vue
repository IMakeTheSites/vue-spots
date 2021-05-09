<template>
  <div>
    <img alt="EchoBind logo" src="../assets/logo.png" />
    <h1>Spotify Album Notes App Login</h1>

    <b-button variant="outline-primary"
      ><a
        href="https://accounts.spotify.com/authorize?client_id=c5c79022e6054488a48a75140a35c988&redirect_uri=http://localhost:8080/albums&scope=user-library-read&response_type=token"
        >Login to Spotify</a
      ></b-button
    >
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
export default {
  name: "Login",
};
</script>

<style></style>
