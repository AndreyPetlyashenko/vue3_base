import { createApp } from "vue";

import App from "./App.vue";
import components from "./components/UI/";

const app = createApp(App);

components.forEach((uicomponent: any) => {  
  app.component(uicomponent.name,uicomponent);
}) as Array<any>;

app.mount("#app");
