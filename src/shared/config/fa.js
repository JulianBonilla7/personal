import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSave,
  faExclamationTriangle,
  faGlobe
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faStackOverflow,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faSave,
  faExclamationTriangle,
  faGlobe,
  faGithub,
  faLinkedinIn,
  faStackOverflow,
  faTwitter
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
