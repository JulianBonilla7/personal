<template>
  <div
    id="app"
    class="hero is-fullheight is-dark is-bold"
    v-touch:swipe="onSwipe"
  >
    <header class="hero-head">
      <AppHeader />
    </header>
    <main class="hero-body">
      <transition :name="transitionName" mode="out-in">
        <router-view />
      </transition>
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
  },
  data() {
    return {
      transitionName: "slide"
    };
  },
  methods: {
    onSwipe(direction) {
      console.log("swipe", direction);
    }
  },
  watch: {
    $route(to, from) {
      const { order: origin } = from.meta;
      const { order: destination } = to.meta;
      this.transitionName = destination < origin ? "slide-left" : "slide-right";
    }
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
