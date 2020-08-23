<template>
  <div class="field locale-switch">
    <div class="control has-icons-left">
      <div class="select is-small is-primary">
        <label for="language-select" class="is-sr-only">{{
          $t("current-language")
        }}</label>
        <select
          id="language-select"
          v-model="$i18n.locale"
          @change="updatePageLanguage"
        >
          <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{
            $t(`lang.${lang}`)
          }}</option>
        </select>
      </div>
      <div class="icon is-small is-left has-text-primary">
        <font-awesome-icon icon="globe"></font-awesome-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LocaleSwitch",
  data() {
    return {
      langs: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(","),
    };
  },
  methods: {
    updatePageLanguage({ target }) {
      document.documentElement.setAttribute("lang", target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.locale-switch {
  display: inline-block;
}
.select {
  &:not(.is-multiple):not(.is-loading):hover::after {
    border-color: darken($color: $primary, $amount: 5%);
  }
  &:hover select {
    color: $white;
  }
  select {
    text-align: center;
    text-align-last: center;
    background: transparent;
    color: rgba($white, 0.7);
  }
}
option {
  color: initial;
}
</style>
