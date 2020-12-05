<template>
  <section class="container contact">
    <div class="columns is-vcentered is-desktop">
      <div class="column">
        <div class="columns">
          <div class="column is-two-thirds is-offset-1">
            <div class="has-text-left has-text-grey-light is-unselectable">
              <h1 class="title is-1 is-spaced ">
                <span class="has-underline">
                  {{ $t("contact.title") }}
                </span>
              </h1>
              <p class="is-size-5 block is-family-secondary">
                {{ $t("contact.subtitle") }}
              </p>
              <i18n
                class="is-size-5 is-family-secondary"
                path="contact.description"
                tag="p"
              >
                <template v-slot:email>
                  <a :href="email" class="has-text-primary-light fancy">
                    <span class="content">{{ $t("contact.email-link") }}</span>
                  </a>
                </template>
              </i18n>
            </div>
            <!-- social proof here -->
          </div>
          <div class="column"></div>
        </div>
      </div>
      <div class="column">
        <article class="message" :class="valid ? 'is-primary' : 'is-danger'">
          <div class="message-body">
            <StepForm
              honeypot
              :questions="questions"
              @form:submit="submitContactForm"
              @form:validate="onValidate"
            >
              <span>{{ $t("contact.thanks") }}</span>
            </StepForm>
            <!--LOADING MESSAGE-->
            <div v-if="loading">
              <p class="mb-3 is-family-secondary">
                {{ $t("contact.loading") }}
              </p>
              <button class="button is-loading is-text is-large"></button>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import * as axios from "axios";

import StepForm from "@/components/ui/StepForm.vue";
// import DataService from "@/shared/services/data.service.js";

export default {
  components: {
    StepForm
  },
  methods: {
    submitContactForm(data) {
      this.sendEmail(data);
    },
    onValidate(isValid) {
      this.valid = isValid;
    },
    sendEmail(data) {
      this.loading = true;
      data = data || this.getFormData();
      axios
        .post(this.formURL, data)
        .then((response) => this.resetForm(response))
        .catch((error) => this.onError(error));
    },
    getFormData() {
      return {
        name: this.name,
        email: this.email,
        _subject: `${this.subject} | jbonil.la `,
        message: this.message
      };
    },
    resetForm(response) {
      console.log(response);
      this.name = "";
      this.email = "";
      this.message = "";
      this.loading = false;
      //i redirect my app to '/success' route once payload completed.
      // this.$router.push({ path: "/" });
    },
    onError(error) {
      if (error.response) {
        // eslint-disable-next-line no-alert
        console.log(error.response.data); // => the response payload
      }
    }
  },
  data() {
    return {
      formURL: "https://formspree.io/f/mrgoldep",
      loading: false,
      valid: true,
      email: "mailto:jfbonillago@gmail.com",
      questions: [
        {
          label: "contact.subject",
          name: "_subject"
        },
        {
          label: "contact.details",
          name: "message"
        },
        {
          label: "contact.name",
          name: "name"
        },
        {
          label: "contact.email",
          name: "email",
          type: "email"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.message {
  transition: 0.33s all;
}
</style>
