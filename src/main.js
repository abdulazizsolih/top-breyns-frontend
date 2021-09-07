import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import App from './App.vue';
import router from './router';
import store from './store';
import components from "./components/components";
import '@/assets/scss/app.scss';

const app = createApp(App)
const head = createHead()

// Registering components
components.forEach(component => {
    app.component(component.name, component)
})

app
    .use(head)
    .use(store)
    .use(router)
    .mount('#app')
