<template>
  <div class="vtl__container">
    <ul class="vtl">
      <li
        class="vtl__entry"
        v-for="(item, index) in items"
        :key="item.companyName"
      >
        <input
          v-model="picked"
          class="vtl__radio"
          :id="`trigger${index}`"
          name="trigger"
          type="radio"
          :value="index"
        />
        <div class="vtl__wrapper">
          <label class="vtl__tag" :for="`trigger${index}`">
            <span>
              {{ item.companyName }}
            </span>
          </label>
          <span class="vtl__date">{{ item.startDate }}</span>
          <span class="vtl__circle"></span>
        </div>
        <div class="vtl__content py-4 px-5">
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <div>
                  <h3 class="title is-size-4">{{ item.role }}</h3>
                </div>
              </div>
              <div class="level-item">
                <a
                  class="has-text-primary subtitle is-size-6"
                  target="_blank"
                  :href="item.companyURL"
                  >{{ item.companyName }}</a
                >
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <span class="is-size-6"
                  >{{ item.startDate }} - {{ item.endDate }}</span
                >
              </div>
            </div>
          </div>
          <p class="is-family-secondary">{{ item.description }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      picked: 0
    };
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
$vtl-bg: $dark;
$vtl-white: #eee9dc;
$vtl-indicator: $primary;

@import "@/styles/_timeline";
</style>
