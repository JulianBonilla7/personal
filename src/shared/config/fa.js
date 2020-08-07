import { library } from "@fortawesome/fontawesome-svg-core";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faSave);

Vue.component("font-awesome-icon", FontAwesomeIcon);
