import { defineComponent } from 'vue'
import './contentRight.scss'
import '@/assets/style/common.scss'
import Ring from '@/components/contentRing/contentRing'
import WaterPolo from '@/components/waterPolo/waterPolo'
import Pie from '@/components/pie/pie'

const contentCenter = defineComponent({
  name: 'ContentRight',
  setup() {
    const peiList = [
      { name: '已控制', value: 40, color: '#25be28' },
      { name: '未控制', value: 60, color: '#ff6900' },
      { name: '已控制', value: 40, color: '#25be28' },
      { name: '未控制', value: 60, color: '#ff6900' },
    ]
    return () => (
      <div class='contentRight'>
        <div class='right-up borderOne'>
          <div class='real-name'>大数据监控</div>
          <div class='ball'>
            <div class='ball-item'>
              <WaterPolo text='监控时间占比' subtext='监控百分比' value={0.5} color='#33fa96' />
              <p>监控时间占比(%)</p>
            </div>
            <div class='ball-item'>
              <WaterPolo text='监控时间占比' subtext='监控百分比' value={0.6} color='#30bdfa' />
              <p>监控时间占比(%)</p>
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
        <div class='right-down borderOne'>
          <div class='real-name'>违法数量</div>
          <Ring />
          <div class='bg' />
        </div>
      </div>
    )
  },
})

export default contentCenter
