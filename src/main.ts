import App from "./App.vue"
import { createApp } from "vue"
import {createPinia} from 'pinia'
import ElementPlus from "element-plus"
import "element-plus/dist/index.css";
const pinia=createPinia();
const app=createApp(App)
app.use(ElementPlus)
app.use(pinia)
app.mount("#app");