<template>
  <form
    id="theForm"
    class="simform"
    autocomplete="off"
    @keydown="disableTab"
    :class="{ 'show-next': isAnimating }"
  >
    <div class="simform-inner" :class="{ hide: submitted }">
      <ol class="questions">
        <li
          v-for="(question, index) in questions"
          :key="question.name"
          :class="{ current: current === index }"
        >
          <span>
            <label :for="question.name" class="is-unselectable">{{
              question.label
            }}</label>
          </span>
          <input
            :type="question.type || 'text'"
            :name="question.name"
            :id="question.name"
            @focus.once="onFocus"
          />
        </li>
      </ol>
      <input
        v-if="honeypot"
        type="hidden"
        name="_gotcha"
        style="display:none"
      />
      <!-- /questions -->
      <button class="submit" type="submit">Send answers</button>
      <div class="controls">
        <button
          class="next"
          @click.prevent="nextQuestion"
          :class="{ show: focused }"
        >
          <span class="icon is-small">
            <font-awesome-icon icon="chevron-right"></font-awesome-icon>
          </span>
        </button>

        <div class="sf-progress" :style="{ width: progressSize }"></div>
        <span class="sf-number is-unselectable">
          <span class="number-current">
            <v-number v-model="stepCount"></v-number>
          </span>
          <span class="number-total">{{ totalQuestions }}</span>
        </span>
        <span class="error-message" :class="{ show: invalid }">
          {{ error }}
        </span>
      </div>
      <!-- / controls -->
    </div>
    <!-- /simform-inner -->
    <span class="final-message" :class="{ show: submitted }">
      <slot></slot>
      <button class="button is-text">Reset form</button>
    </span>
  </form>
</template>

<script>
import { VNumber } from "@maxflex/v-number";
import * as EmailValidator from "email-validator";

export default {
  name: "StepForm",
  components: {
    VNumber
  },
  props: {
    questions: {
      type: Array,
      default: () => []
    },
    honeypot: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    totalQuestions() {
      return this.questions.length;
    },
    stepCount() {
      return this.current + 1;
    },
    isLastQuestion() {
      return this.current === this.totalQuestions - 1;
    },
    progressSize() {
      const progress = this.current * (100 / (this.totalQuestions - 1));
      return (progress < 100 ? progress : 100) + "%";
    }
  },
  data() {
    return {
      current: 0,
      focused: false,
      invalid: false,
      isAnimating: false,
      submitted: false,
      error: ""
    };
  },
  methods: {
    init() {},
    onFocus() {
      this.focused = true;
    },
    onSubmit() {
      console.log("submit handler");
      this.$emit("form:submit", new FormData(this.$el));
    },
    onTransitionEnd() {
      console.log("transition ended");
      // progress.removeEventListener('transitionend', )
      if (!this.submitted) {
        this.isAnimating = false;
        this.getCurrentInput().focus();
      }
    },
    getCurrentInput() {
      return this.$el.querySelector(".current input");
    },
    nextQuestion() {
      if (!this.validate()) {
        return false;
      }
      if (!this.isLastQuestion) {
        // do something
        this.isAnimating = true;
        this.current += 1;
        console.log("next question...");
      } else {
        console.log("there are no more questions");
        this.submitted = true;
        this.submit();
      }
    },
    submit() {
      this.onSubmit();
    },
    validate() {
      const value = this.getCurrentInput().value;
      if (value === "") {
        this._setErrorMessage("EMPTYSTR");
        this.invalid = true;
      } else if (
        this.getCurrentInput().type === "email" &&
        !EmailValidator.validate(value)
      ) {
        this._setErrorMessage("INVALIDEMAIL");
        this.invalid = true;
      } else {
        this.invalid = false;
        this.error = "";
      }
      this.$emit("form:validate", !this.invalid);
      return !this.invalid;
    },
    _setErrorMessage(err) {
      switch (err) {
        case "EMPTYSTR":
          this.error = "Please fill the field before continuing";
          break;
        case "INVALIDEMAIL":
          this.error = "Please fill a valid email address";
          break;
        default:
          break;
      }
    },
    clearError() {},
    // ACCESSIBILITY CONCERNS ABOUT THIS ONE
    disableTab(e) {
      if (e.key !== "Tab") {
        return false;
      }
      e.preventDefault();
      console.log("disabling tab", e);
    }
  },
  updated() {
    if (this.isAnimating) {
      console.log("boo");
    }
  },
  mounted() {
    document.addEventListener("keydown", e => {
      if (e.key === "Enter") {
        e.preventDefault();
        this.nextQuestion();
      }
    });
    const progressEl = this.$el.querySelector(".sf-progress");
    progressEl.addEventListener("transitionend", this.onTransitionEnd);
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_stepform";
</style>
