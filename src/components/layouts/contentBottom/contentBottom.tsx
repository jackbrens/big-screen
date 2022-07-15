import { defineComponent } from 'vue'
import './contentBottom.scss'
import Histogram from '@/components/histogram/histogram'

const contentCenter = defineComponent({
  name: 'ContentBottom',
  setup() {
    return () => (
      <div class='contentBottom'>
        <Histogram />
      </div>
    )
  },
})

export default contentCenter
