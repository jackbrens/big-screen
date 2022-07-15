import { defineComponent, reactive } from 'vue'
import EchartBase from '../echartInit/index'
import 'echarts-liquidfill'

// 定义类型设置为只读
const PropsType = {
  // 标题
  text: {
    type: String,
    default: '',
  },

  // 副标题
  subtext: {
    type: String,
    default: '',
  },

  // 值
  value: {
    type: Number,
    default: 0,
  },

  // 水球颜色
  color: {
    type: String,
    default: 'green', // 默认绿色
  },
}

const waterPolo = defineComponent({
  name: 'WaterPolo',
  props: PropsType,
  setup(props) {
    const className = 'waterPolo'
    const width = '100%'
    const height = '100%'
    const options = reactive({
      title: {
        text: `${props.value * 100} %`,
        left: 'center',
        top: '25%',
        textStyle: {
          fontWeight: 'bold',
          fontSize: 24,
          color: 'rgba(255,255,255, 1)',
        },
        subtext: props.subtext, //副标题
        subtextStyle: {
          fontWeight: 'normal',
          fontSize: 16,
          color: 'rgba(255,255,255, 1)',
        },
      },
      series: [
        {
          type: 'liquidFill',
          data: [props.value],
          itemStyle: {
            shadowBlur: 0,
          },
          label: {
            show: false,
            // formatter: function (param) {
            //   return param.value * 100 + '%' + '\n'
            //     + param.seriesName;
            // },
            // fontSize: 16
          },

          // 大小
          radius: '65%',

          // 水球位置
          center: ['50%', '40%'],
          // 水球颜色
          color: [props.color],
          backgroundStyle: {
            color: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.5,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(255, 255, 0, 0)', // 0% 处的颜色
                },
                {
                  offset: 0.5,
                  color: 'rgba(255, 255, 0, 0)', // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: props.color, // 100% 处的颜色
                },
              ],
              globalCoord: false, // 缺省为 false
            },
          },

          // 外边线
          outline: {
            itemStyle: {
              borderWidth: 1,
              borderColor: props.color,
              borderType: 'dashed',
            },
          },
        },
      ],
    })
    return () => <EchartBase className={className} width={width} height={height} options={options} />
  },
})

export default waterPolo
