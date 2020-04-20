import { h } from '~/helpers/h'
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'index',
    setup() {
      const appName = 'poketto'
      return () => (
        <div>Hello {{ appName }}</div>
      )
    },
})
