import { createApp, defineComponent, App } from 'vue'
import { useRoute } from 'vue-router'
import { h } from '~/helpers/h'
import { route } from '~/router'

const App = defineComponent({
  name: 'App',
  render() {
    return (
      <div>
        <router-view></router-view>
        { useRoute().fullPath }
      </div>
    )
  }
})

const app = createApp(App)
app.use(route)
app.mount('#root')
