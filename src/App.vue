<template>
  <div id="app" class="hero is-fullheight is-dark is-bold">
    <header class="hero-head">
      <AppHeader />
    </header>
    <main class="hero-body">
      <router-view />
    </main>
    <footer class="hero-foot">
      <SocialMedia />
    </footer>
  </div>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader.vue";
import SocialMedia from "@/components/ui/SocialMedia.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    SocialMedia
  }
};
</script>

<style lang="scss">
@import "@/styles/index.scss";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
