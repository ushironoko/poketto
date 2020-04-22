import { h } from '~/helpers/h'
import { createApp, defineComponent, App } from 'vue'
import { route, routerHistory } from '~/router'
declare global {
  interface Window {
    // h: HTML5History
    h: typeof routerHistory
    r: typeof route
    vm: ReturnType<App['mount']>
  }
}

const App = defineComponent({
  name: 'App',
  render() {
    return (
      <div>
        <router-view />
      </div>
    )
  }
})


const app = createApp(App)
app.use(route)
app.mount('#root')
