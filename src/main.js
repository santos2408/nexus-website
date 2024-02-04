import "./index.css";
import "./assets/css/layout.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { register } from "swiper/element/bundle";

import {
  faTwitter,
  faFacebook,
  faInstagram,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";

library.add(faTwitter, faFacebook, faInstagram, faPinterestP);

import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();

register();

app.use(pinia);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.mount("#app");
