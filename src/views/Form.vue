<template>
  <div>
    <form v-on:submit.prevent="submitForm">
      <label for="comment">Comment</label>
      <input type="text" required />
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  name: "Form",
  data() {
    return {
      form: {
        comment: "",
      },
    };
  },
  methods: {
    submitForm() {
      Vue.axios
        .post("http://jsonplaceholder.typicode.com/posts", this.form)
        .then((response) => {
          console.log(response);
        }, this.$router.push({ name: "Albums" }))
        .catch((error) => {
          console.log(error);
        }, this.$router.push({ name: "Form" }));
    },
  },
};
</script>

<style></style>
