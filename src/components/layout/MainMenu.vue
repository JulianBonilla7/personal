<template>
  <div class="navbar-start">
    <router-link class="navbar-item" to="/">
      <!-- <font-awesome-icon icon="save" /> -->
      <span>
        {{ $t("menu.home") }}
      </span>
    </router-link>
    <router-link class="navbar-item" to="/about">
      <!-- <font-awesome-icon icon="save" /> -->
      <span>
        {{ $t("menu.about") }}
      </span>
    </router-link>
    <router-link class="navbar-item" to="/contact">
      <!-- <font-awesome-icon icon="save" /> -->
      <span>
        {{ $t("menu.contact") }}
      </span>
    </router-link>
    <router-link class="navbar-item" to="/portfolio">
      <!-- <font-awesome-icon icon="save" /> -->
      <span>
        {{ $t("menu.portfolio") }}
      </span>
    </router-link>
    <router-link class="navbar-item" to="/blog">
      <!-- <font-awesome-icon icon="save" /> -->
      <span>
        {{ $t("menu.blog") }}
      </span>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
#nav {
  .router-link-exact-active {
    color: #fff;
    border-bottom: 2px solid #fff;
  }
}
a.navbar-item:focus {
  background-color: #292929;
}
.navbar-start {
  .navbar-item {
    // width: 5em;
    // text-align: center;
    // display: flex;
    // align-items: center;
    // span {
    //   display: inline-block;
    // }
    // svg,
    // span {
    //   transition: 0.3s all;
    // }
    // svg {
    //   opacity: 0;
    // }
    // span {
    //   opacity: 1;
    // }
    // &:hover {
    //   svg {
    //     opacity: 1;
    //   }
    //   span {
    //     opacity: 0;
    //   }
    // }
  }
}
</style>
