<template>
  <section class="container about">
    <div class="columns is-vcentered">
      <div class="column">
        <div class="px-3">
          <h1 class="title is-size-2">{{ $t("about.title") }}</h1>
          <i18n
            path="about.description"
            tag="p"
            class="pre-formatted is-family-secondary is-size-5"
          >
            <template v-slot:cv>
              <a :href="url" class="has-text-link" target="_blank">{{
                $t("about.cv")
              }}</a>
            </template>
          </i18n>
        </div>
        <h2 class="is-size-3 title">{{ $t("about.skills") }}</h2>
        <h3 class="is-size-5 subtitle is-family-secondary">
          {{ $t("about.instructions") }}
        </h3>
        <dl class="skills">
          <template v-for="category in skills">
            <dt class="is-size-5 is-family-secondary" :key="category.level">
              {{ $t(`about.${category.level}`) }}
            </dt>
            <dd v-for="skill in category.items" :key="skill.key" class="skill">
              <IconTooltip
                :text="skill.key"
                :size="skill.size"
                :type="skill.type"
                :icon="skill.icon"
              />
            </dd>
          </template>
        </dl>
      </div>
      <div class="column">
        <h2 class="is-size-3 title">Experience</h2>
        <div class="tile is-ancestor">
          <div class="tile is-parent is-vertical">
            <article
              class="tile is-child notification is-dark"
              v-for="item in experience"
              :key="item.companyName"
            >
              <div class="level">
                <div class="level-left">
                  <div class="level-item">
                    <h3>{{ item.role }}</h3>
                  </div>
                  <div class="level-item">
                    <a
                      class="has-text-info-dark"
                      target="_blank"
                      :href="item.companyURL"
                      >{{ item.companyName }}</a
                    >
                  </div>
                </div>
                <div class="level-right">
                  <div class="level-item">
                    <span>{{ item.startDate }} - {{ item.endDate }}</span>
                  </div>
                </div>
              </div>
              <p class="is-family-secondary">{{ item.description }}</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<i18n>
{
  "en": {
    "welcome": "Welcome to my about page!"
  },
  "es": {
    "welcome": "¡Bienvenido a mi página!"
  }
}
</i18n>

<script>
import IconTooltip from "@/components/common/IconTooltip.vue";

import experience from "@/shared/constants/experience";
import skills from "@/shared/constants/skills";

export default {
  components: {
    IconTooltip
  },
  data() {
    return {
      experience: experience,
      skills: skills
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
