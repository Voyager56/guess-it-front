import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import router from "@/router/index";
import { defineRule } from "vee-validate";
import AllRules from "@vee-validate/rules";

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

createApp(App).use(router).mount("#app");
