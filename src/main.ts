import { createApp } from "vue";

import App from "./App.vue";
import components from "@/components/UI/";
import router from "@/router/router";
import directives from '@/directives/'
const app = createApp(App);

directives.forEach(directive=>{
  console.log(directive);
  app.directive(directive.name, directive);
})

components.forEach((uicomponent: any) => {
  app.component(uicomponent.name, uicomponent);
}) as Array<any>;

app.use(router).mount("#app");
