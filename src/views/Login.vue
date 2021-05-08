<template>
  <div>
    <img alt="EchoBind logo" src="../assets/logo.png" />
    <h1>Spotify Album Notes App Login</h1>

    <a
      href="https://accounts.spotify.com/authorize?client_id=c5c79022e6054488a48a75140a35c988&redirect_uri=http://localhost:8080/callback/%23/albums&scope=user-library-read&response_type=token"
      >Login to Spotify</a
    >
    <!-- <button
      :class="{ display: display }"
      @click="getAuth()"
    >
      Login to Spotify <i class="fa fa-spotify"></i>
    </button> -->
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
export default {
  name: "Login",
  // methods: {
  //   login(callback) {
  //     var CLIENT_ID = "c5c79022e6054488a48a75140a35c988";
  //     var REDIRECT_URI = "http://localhost:8080/callback/#/albums";

  //     function getLoginURL(scopes) {
  //       return (
  //         "https://accounts.spotify.com/authorize?client_id=" +
  //         CLIENT_ID +
  //         "&redirect_uri=" +
  //         encodeURIComponent(REDIRECT_URI) +
  //         "&scope=" +
  //         encodeURIComponent(scopes.join(" ")) +
  //         "&response_type=token"
  //       );
  //     }

  //     var url = getLoginURL(["user-library-read"]);

  //     window.addEventListener(
  //       "message",
  //       function (event) {
  //         var hash = JSON.parse(event.data);
  //         if (hash.type == "access_token") {
  //           callback(hash.access_token);
  //         }
  //       },
  //       false
  //     );

  //     var w = window.open(url);
  //   },

  //   getUserData(accessToken) {
  //     axios({
  //       method: "get",
  //       url: "https://api.spotify.com/v1/me",
  //       headers: {
  //         Authorization: "Bearer " + accessToken,
  //       },
  //     });
  //   },

  //   getAuth() {
  //     this.login(function (accessToken) {
  //       this.getUserData(accessToken).then(function (response) {
  //         console.log(response);
  //         this.display = true;
  //       });
  //     });
  //   },
  // },
};
</script>

<style></style>
