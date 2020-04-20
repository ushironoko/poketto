import { h } from '~/helpers/h'
import { createApp, defineComponent } from 'vue'
import Router from 'vue-router'
import { route } from '~/route'


const App = defineComponent({
  name: 'App',
  router: route,
  render() {
    return (
      <div>
        <router-view />
      </div>
    )
  }
})

const app = createApp(App)
app.use(Router)
app.mount('#root')
