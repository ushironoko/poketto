import { createApp, defineComponent } from 'vue'
import { h } from '~/helpers/h'
import { route } from '~/router'

const App = defineComponent({
  name: 'App',
  render() {
    return (
      <router-view></router-view>
    )
  }
})

const app = createApp(App)
app.use(route)
app.mount('#root')
