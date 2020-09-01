<template>
  <div class="container">
    <div class="buttons is-centered has-addons mb-1">
      <a
        v-for="item in socials"
        :key="item.name"
        :href="item.url"
        :aria-label="item.name"
        target="_blank"
        rel="noopener noreferrer"
        class="button is-text is-outlined is-rounded is-medium"
      >
        <span class="icon">
          <font-awesome-icon :icon="['fab', item.icon]"></font-awesome-icon>
        </span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        {
          name: "github",
          url: "https://github.com/JulianBonilla7",
          icon: "github",
        },
        {
          name: "linkedin",
          url: "https://www.linkedin.com/in/juli%C3%A1n-bonilla/",
          icon: "linkedin-in",
        },
        {
          name: "twitter",
          url: "https://twitter.com/jboni11a",
          icon: "twitter",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
