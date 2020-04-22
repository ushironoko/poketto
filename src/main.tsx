import { h } from '~/helpers/h'
import { createApp, defineComponent } from 'vue'
import { route } from '~/router'


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
