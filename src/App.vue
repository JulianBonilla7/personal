<template>
  <div id="app" class="hero is-fullheight is-dark is-bold">
    <header class="hero-head">
      <AppHeader />
    </header>
    <main class="hero-body">
      <router-view />
    </main>
    <!-- <footer class="hero-foot"></footer> -->
  </div>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss">
@import "@/styles/index.scss";

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
}
</style>
