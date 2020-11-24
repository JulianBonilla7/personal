import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faExclamationTriangle,
  faGlobe,
  faHome,
  faEnvelope,
  faBriefcase,
  faUserCircle,
  faFeatherAlt,
  faChevronRight,
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faStackOverflow,
  faTwitter,
  faJira
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faExclamationTriangle,
  faGlobe,
  faHome,
  faEnvelope,
  faBriefcase,
  faFeatherAlt,
  faChevronRight,
  faAngleRight,
  faUserCircle,
  faGithub,
  faLinkedinIn,
  faStackOverflow,
  faTwitter,
  faJira
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
