import { defineComponent } from 'vue'
import './contentLeft.scss'
import { getImgUrl } from '@/utils/asyncJsonFile'

const contentCenter = defineComponent({
  name: 'ContentLeft',
  setup() {
    const arr = [
      {
        img: 'total-car',
        color: '#ffff3f',
        title: '实时车辆',
        total: 195,
      },
      {
        img: 'online-car',
        color: '#32eedf',
        title: '当前驾驶车辆',
        total: 225,
      },
      {
        img: 'risk-point',
        color: '#fd5968',
        title: '危险驾驶车辆',
        total: 367,
      },
      {
        img: 'parking-point',
        color: '#f6c847',
        title: '停车场车辆',
        total: 156,
      },
      {
        img: 'weather',
        color: '#ff6102',
        title: '天气情况',
        total: 851,
      },
      {
        img: 'volumn',
        color: '#00c7fe',
        title: '呼叫车辆',
        total: 741,
      },
      {
        img: 'disaster',
        color: '#ff2625',
        title: '天气警报',
        total: 321,
      },
    ]
    return () => (
      <div class='contentLeft'>
        <div class='real-name'>大数据实时统计</div>
        <ul class='statis'>
          {arr.map((item) => {
            return (
              <li class='statis-item'>
                <div class='statis-item_img'>
                  <img src={getImgUrl(item.img)} alt='' />
                </div>
                <div class='statis-item_detail'>
                  <span class='title'>{item.title}</span>
                  <span class='total' style={{ color: item.color }}>
                    {item.total}
                  </span>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  },
})

export default contentCenter
