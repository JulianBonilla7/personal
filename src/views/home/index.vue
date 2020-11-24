<template>
  <div class="container">
    <div class="columns is-vcentered is-desktop">
      <div class="column notification">
        <img alt="Vue logo" src="@/assets/img/home.jpg" />
      </div>
      <div class="column">
        <p id="welcome" class="is-family-code title">
          {{ $t("home.welcome") }}
        </p>
        <div class="box has-background-grey-dark">
          <h1 class="title">{{ $t("common.appname") }}</h1>
          <p class="has-text-light is-family-secondary">
            {{ $t("home.description") }}
          </p>
        </div>
        <div class="buttons has-addons is-centered">
          <router-link
            tag="button"
            class="button is-outlined is-primary"
            :to="'contact'"
          >
            <span>{{ $t("menu.contact") }}</span>
          </router-link>
          <router-link
            tag="button"
            class="button is-outlined is-info"
            :to="'portfolio'"
          >
            <span>{{ $t("menu.portfolio") }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
