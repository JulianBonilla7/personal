<template>
  <div class="container">
    <div class="columns is-vcentered">
      <div class="column">
        <img alt="Vue logo" src="@/assets/logo.png" />
      </div>
      <div class="column">
        <HelloI18n />
        <div class="buttons has-addons is-centered">
          <button class="button is-outlined is-primary">
            {{ $t("menu.contact") }}
          </button>
          <button class="button is-outlined is-info">
            {{ $t("menu.portfolio") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloI18n from "@/components/HelloI18n.vue";

export default {
  name: "Home",
  components: {
    HelloI18n
  }
};
</script>
