<template>
  <div class="py-6">
    <h1 class="title">{{ $t("common.appname") }}</h1>
    <p class="subtitle is-family-secondary">
      <!-- {{ $t("hello", { name: "Vue.js" }) }} -->
      {{ $t("progress") }}
    </p>
    <!-- <span class="icon">
      <i class="devicon-amazonwebservices-plain-wordmark colored"></i>
    </span>
    <p>{{ $tc("text", 2) }}</p>
    <p>{{ $tc("wolves", 5) }}</p> -->
  </div>
</template>

<script>
export default {
  name: "HelloI18n"
};
</script>

<i18n>
{
  "en": {
    "hello": "Hello @:common.appname",
    "text": "flower | flowers",
    "wolves": "no wolf | one wolf | a pack of {n} wolves"
  },
  "es": {
    "hello": "Hola @:common.appname",
    "text": "flor | flores",
    "wolves": "no hay lobo | un lobo | un grupo de {n} lobos"
  }
}
</i18n>
