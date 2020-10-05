<template>
  <tippy
    :content="$t(`skills.${text}`)"
    arrow
    :delay="[300, 0]"
    animation="scale"
    aria="describedby"
  >
    <span slot="trigger" class="icon is-large">
      <font-awesome-icon
        v-if="type === 'fa'"
        :icon="icon"
        size="2x"
      ></font-awesome-icon>
      <i v-else class="is-size-3" :class="icon"></i>
    </span>
  </tippy>
</template>

<script>
export default {
  name: "IconTooltip",
  props: {
    size: {
      type: String,
      default: "large"
    },
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "devicon"
    },
    icon: {
      required: true
    }
  },
  computed: {
    locale() {
      return this.key;
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
  i,
  svg {
    transition: all 0.3s ease-out;
    cursor: pointer;
    &:hover,
    &:focus {
      transform: scale(1.5);
      color: $primary;
    }
  }
}
</style>
