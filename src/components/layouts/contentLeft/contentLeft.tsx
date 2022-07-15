import { defineComponent } from 'vue'
import './contentLeft.scss'

const contentCenter = defineComponent({
  name: 'ContentLeft',
  setup() {
    const arr = [
      {
        img: 'src/assets/images/total-car.png',
        color: '#ffff3f',
        title: '总车辆数',
        total: 195,
      },
      {
        img: 'src/assets/images/online-car.png',
        color: '#32eedf',
        title: '当前在线数(辆)',
        total: 225,
      },
      {
        img: 'src/assets/images/risk-point.png',
        color: '#fd5968',
        title: '道路风险点',
        total: 367,
      },
      {
        img: 'src/assets/images/parking-point.png',
        color: '#f6c847',
        title: '重点停车点关注点',
        total: 156,
      },
      {
        img: 'src/assets/images/weather.png',
        color: '#ff6102',
        title: '气象预警发布',
        total: 851,
      },
      {
        img: 'src/assets/images/volumn.png',
        color: '#00c7fe',
        title: '语音播报下发',
        total: 741,
      },
      {
        img: 'src/assets/images/disaster.png',
        color: '#ff2625',
        title: '气象灾害预警',
        total: 321,
      },
    ]
    return () => (
      <div class='contentLeft'>
        <div class='real-name'>实时统计</div>
        <ul class='statis'>
          {arr.map((item) => {
            return (
              <li class='statis-item'>
                <div class='statis-item_img'>
                  <img src={item.img} alt='' />
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
