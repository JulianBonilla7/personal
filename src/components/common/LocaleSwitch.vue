<template>
  <div class="locale-switch">
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{
        lang
      }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "LocaleSwitch",
  data() {
    return {
      langs: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(",")
    };
  }
};
</script>
