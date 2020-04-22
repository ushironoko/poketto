import { h } from '~/helpers/h'
import { defineComponent } from 'vue'
export const Index = defineComponent({
    name: 'index',
    setup() {
      const appName = 'poketto'
      return () => (
        <div>Hello {{ appName }}</div>
      )
    },
})
