<template>
  <div class="collapse-container">
    <a class="has-text-info-light fancy block" @click="toggle">
      <span class="content is-flex is-align-items-center">
        <font-awesome-icon class="mr-2" :icon="icon"></font-awesome-icon>
        {{ label }}
      </span>
    </a>
    <transition name="slide-up">
      <slot v-if="open"></slot>
    </transition>
  </div>
</template>

<script>
export default {
  name: "CollapsibleSection",
  props: {
    show: {
      type: String,
      default: ""
    },
    hide: {
      type: String,
      default: ""
    }
  },
  computed: {
    label() {
      const label = this.open ? this.hide : this.show;
      return this.$i18n.t(label);
    },
    icon() {
      return this.open ? "chevron-up" : "chevron-down";
    }
  },
  data() {
    return { open: false };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
  }
};
</script>
