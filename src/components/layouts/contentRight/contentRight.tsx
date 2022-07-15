import { defineComponent } from 'vue'
import './contentRight.scss'
import Ring from '@/components/contentRing/contentRing'
import WaterPolo from '@/components/waterPolo/waterPolo'
import Pie from '@/components/pie/pie'

const contentCenter = defineComponent({
  name: 'ContentRight',
  setup() {
    const peiList = [
      { name: '已闭环', value: 40, color: '#25be28' },
      { name: '未闭环', value: 60, color: '#ff6900' },
      { name: '已闭环', value: 40, color: '#25be28' },
      { name: '未闭环', value: 60, color: '#ff6900' },
    ]
    return () => (
      <div class='contentRight'>
        <div class='right-up'>
          <div class='real-name'>管控情况</div>
          <div class='ball'>
            <div class='ball-item'>
              <WaterPolo text='管控时间内' subtext='管控总数' value={0.5} color='#33fa96' />
              <p>管控时间内</p>
            </div>
            <div class='ball-item'>
              <WaterPolo text='管控时间内' subtext='管控总数' value={0.6} color='#30bdfa' />
              <p>管控时间内</p>
            </div>
          </div>
          <div class='pei'>
            {peiList.map((item) => {
              return (
                <div class='pei-item'>
                  <Pie seriesData={item} />
                </div>
              )
            })}
          </div>
        </div>
        <div class='right-down'>
          <div class='real-name'>违法数量</div>
          <Ring />
          <div class='bg' />
        </div>
      </div>
    )
  },
})

export default contentCenter
