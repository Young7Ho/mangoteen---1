import { createApp } from 'vue'
import {App} from './App'
import { createRouter , createWebHashHistory } from 'vue-router'
import { routes } from './route/routes';
import { history } from './shared/history';


  const router = createRouter ({
    history,
    routes, 
  })
const app = createApp(App)

app.use(router)

.mount('#app')
