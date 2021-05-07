<template>
  <div class="home">
    <img alt="EchoBind logo" src="../assets/logo.png" />
    <h1>Spotify Album Notes App</h1>
    <a
      href="https://accounts.spotify.com/authorize?client_id=c5c79022e6054488a48a75140a35c988&redirect_uri=http://localhost:8080/callback/&scope=user-library-read&response_type=token"
    >
      Login to Spotify
    </a>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
};
</script>
