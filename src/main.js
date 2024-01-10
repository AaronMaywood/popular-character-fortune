import "./assets/reset.css";
import "./assets/style.css";
import "./assets/pc.css";
import "./assets/tb.css";
import "./assets/sp.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";

createApp(App).use(router).use(createPinia()).mount("#app");
