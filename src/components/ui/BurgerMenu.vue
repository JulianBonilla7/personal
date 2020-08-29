<template>
  <a
    role="button"
    class="navbar-burger burger has-text-light"
    aria-label="menu"
    aria-expanded="false"
    :data-target="target"
    @click="triggerMenu"
  >
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </a>
</template>

<script>
export default {
  name: "BurgerMenu",
  props: {
    target: {
      type: String,
      default: "",
    },
  },
  methods: {
    triggerMenu: ({ target }) => {
      if (target) {
        target.classList.toggle("is-active");
        const $target = document.querySelector(`#${target.dataset.target}`);
        if ($target) $target.classList.toggle("is-active");
      }
    },
  },
};
</script>
