<template>
  <div id="app">
    <intro
      firstName="Mario"
      submissionDate="12th November 2021"
      v-if="$store.state.showIntro"
    />
    <template v-else>
      <button @click="returnToIntro()" class="btn btn-primary intro-btn">
        Return to intro
      </button>
      <LoanApp />
    </template>
  </div>
</template>

<script>
import LoanApp from "./components/LoanApp";
import intro from "./intro.vue";

export default {
  name: "App",
  components: {
    LoanApp,
    intro,
  },
  methods: {
    returnToIntro() {
      this.$store.commit("toggleIntro");
    },
  },
};
</script>

<style>
#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.intro-btn {
  margin: 20px;
}
</style>

