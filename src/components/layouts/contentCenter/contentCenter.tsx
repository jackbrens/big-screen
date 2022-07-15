import { defineComponent } from 'vue'
import './contentCenter.scss'
import ContentMap from '@/components/contentMap/contentMap'

const contentCenter = defineComponent({
  name: 'ContentCenter',
  setup() {
    return () => (
      <div class='contentCenter'>
        <ContentMap class='map' />
      </div>
    )
  },
})

export default contentCenter
