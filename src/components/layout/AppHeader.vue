<template>
  <nav class="navbar" role="navigation" aria-label="main navigation" id="nav">
    <div class="navbar-brand">
      <a href="/" class="navbar-item"
        ><img src="https://via.placeholder.com/150" alt="logo"
      /></a>
      <BurgerMenu target="nav-menu" />
    </div>
    <div id="nav-menu" class="navbar-menu">
      <MainMenu />
      <div class="navbar-end">
        <LocaleSwitch class="navbar-item" />
      </div>
    </div>
  </nav>
</template>

<script>
import LocaleSwitch from "@/components/LocaleSwitch.vue";
import MainMenu from "@/components/MainMenu.vue";
import BurgerMenu from "@/components/ui/BurgerMenu.vue";

export default {
  name: "AppHeader",
  components: {
    LocaleSwitch,
    MainMenu,
    BurgerMenu,
  },
};
</script>

<style lang="scss" scoped>
#nav {
  a {
    font-weight: bold;
    // color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
