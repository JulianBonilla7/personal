<template>
  <section class="container about">
    <div class="columns is-centered">
      <div class="column is-half">
        <h1 class="title is-size-1">
          <span class="has-underline">
            {{ $t("about.title") }}
          </span>
        </h1>
        <button class="button is-text is-small" @click="expanded = !expanded">
          Show more
        </button>
        <transition name="slide-up">
          <div v-if="expanded" class="px-3 has-text-left">
            <i18n
              path="about.description"
              tag="p"
              class="pre-formatted is-family-secondary is-size-6 has-text-grey-light"
            >
              <template v-slot:cv>
                <a
                  :href="url"
                  class="has-text-primary-light fancy"
                  target="_blank"
                >
                  <span class="content">
                    {{ $t("about.cv") }}
                  </span>
                </a>
              </template>
            </i18n>
          </div>
        </transition>
      </div>
    </div>
    <div class="columns is-desktop">
      <div class="column">
        <h2 class="is-size-3 title">
          <span class="has-underline">
            {{ $t("about.skills") }}
          </span>
        </h2>
        <h3 class="is-size-6 subtitle is-family-secondary has-text-grey-light">
          {{ $t("about.instructions") }}
        </h3>
        <dl class="skills">
          <template v-for="category in skills">
            <div class="block" :key="category.level">
              <dt class="is-size-6">
                <span>
                  {{ $t(`about.${category.level}`) }}
                </span>
              </dt>
              <dd
                v-for="skill in category.items"
                :key="skill.key"
                class="skill has-text-grey-light"
              >
                <IconTooltip
                  :text="skill.key"
                  :size="skill.size"
                  :type="skill.type"
                  :icon="skill.icon"
                />
              </dd>
            </div>
          </template>
        </dl>
      </div>
      <div class="column">
        <h2 class="is-size-3 title">
          <span class="has-underline">
            Experience
          </span>
        </h2>
        <Timeline :items="experience" />
      </div>
    </div>
  </section>
</template>

<script>
import IconTooltip from "@/components/common/IconTooltip.vue";
import Timeline from "@/components/common/TimelineCard.vue";

import experience from "@/shared/constants/experience";
import skills from "@/shared/constants/skills";

export default {
  components: {
    IconTooltip,
    Timeline
  },
  data() {
    return {
      experience: experience,
      skills: skills,
      expanded: false
    };
  },
  computed: {
    url() {
      const resumeEn =
        "https://drive.google.com/file/d/19D7D-ZwgO9eULpD8FXgfsn-H_ZZQNOz6/view?usp=sharing";
      const resumeEs =
        "https://drive.google.com/file/d/1uKt5NdB0QVrpBMOShA1AVT01LkUwNrGo/view?usp=sharing";
      return this.$i18n.locale === "es" ? resumeEs : resumeEn;
    }
  }
};
</script>

<style lang="scss" scoped>
dd {
  display: inline-block;
}
.pre-formatted {
  white-space: pre-wrap;
}
</style>
