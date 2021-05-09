# vue-spots

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

Final Notes: I used Vue.js to produce this app. Initially I was unsure which version of Vue to use, but once I decided to use the combination of Vue 3, Spotify-graphql-api(old, poorly documented, and the examples include graphql queries inside .ts files instead of graphql files) and axios, I started receiving errors that have been reported as issues with Vue 3 compatibility. After that, I also decided it would be better to use the Spotify REST API queries rather than graphql, so my app is built on Vue 2 without Graphql, but it uses Vue-Router for routing and Bootstrap-vue for styling.

I used Postman for building the login GET request to Spotify, Axios for sending the GET requests to Spotify, and Axios again for sending the POST request to jsonplaceholder for submitting the comment.

Because this app only involved a single permission request and very limited interaction with Spotify, I only used the Implicit Grant Authorization Flow, which did not require submitting or storing refresh tokens, or even extended usage of the one access_token returned from Spotify.

If you have any questions or comments, please let me know.
