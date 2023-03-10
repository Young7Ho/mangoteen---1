import { createApp } from 'vue'
import {App} from './App'
import { createRouter , createWebHashHistory } from 'vue-router'
import { routes } from './route/routes';
import { history } from './shared/history';
import '@svgstore'
import { fetchMe, mePromise } from './shared/me';

fetchMe()

const whiteList: Record<string, 'exact' | 'startsWith'> = {
  '/': 'exact',
  '/items': 'exact',
  '/welcome': 'startsWith',
  '/sign_in': 'startsWith',
}

  const router = createRouter ({
    history,
    routes, 
  })

router.beforeEach(async (to,from) => {
  if(to.path === '/' || to.path.startsWith('/welcome') || to.path.startsWith('/sign_in') || to.path === '/start'){
    return true
  }else {
    const path = await mePromise!.then(
      () => true,
      () => '/sign_in?return_to' + to.path
    )
    return path
  }

})

const app = createApp(App)

app.use(router)

.mount('#app')
