import { defineComponent, reactive } from 'vue'
import EchartBase from '../echartInit/index'
import { RingData } from '@/interface/interface'
// @ts-ignore
import { getPie3D } from '@/utils/ringCharts.js'
import 'echarts-gl'

const contentRing = defineComponent({
  name: 'ContentRing',
  setup() {
    const className = 'contentRing'
    const width = '100%'
    const height = '100%'
    const dataList: RingData[] = [
      {
        name: '超速',
        value: 366,
      },
      {
        name: '违停',
        value: 621,
      },
      {
        name: '闯红灯',
        value: 180,
      },
      {
        name: '压线',
        value: 356,
      },
    ]
    const color = ['#005aff', '#f8b551', '#25be28', '#00f3e0']

    const setLabel = () => {
      dataList.forEach((item, index) => {
        item.itemStyle = {
          color: color[index],
        }
        item.label = {
          show: true,
          color: color[index],
          formatter: [
            '{b|{b}}',
            // '{c|{c}}{b|台}',
            '{c|{c}}{b|个}',
            '{d|{d}%}',
          ].join('\n'), // 用\n来换行
          rich: {
            b: {
              color: '#fff',
              lineHeight: 25,
              align: 'left',
            },
            c: {
              fontSize: 22,
              color: '#fff',
              textShadowColor: '#1c90a6',
              textShadowOffsetX: 0,
              textShadowOffsetY: 2,
              textShadowBlur: 5,
            },
            d: {
              color: color[index],
              align: 'left',
            },
          },
        }
        item.labelLine = {
          lineStyle: {
            width: 1,
            color: 'rgba(255,255,255,0.7)',
          },
        }
      })
    }
    setLabel()
    let options = reactive({})
    options = getPie3D(dataList, 0.8, 240, 28, 26, 0.5)
    // // 是否需要label指引线，如果要就添加一个透明的2d饼状图并调整角度使得labelLine和3d的饼状图对齐，并再次setOption
    // @ts-ignore
    options.series.push({
      name: 'pie2d', //自己根据场景修改
      backgroundColor: 'transparent',
      type: 'pie',
      label: {
        opacity: 1,
        fontSize: 13,
        lineHeight: 20,
      },
      startAngle: -40, // 起始角度，支持范围[0, 360]。
      clockwise: false, // 饼图的扇区是否是顺时针排布。上述这两项配置主要是为了对齐3d的样式
      radius: ['20%', '50%'],
      center: ['50%', '45%'],
      data: dataList,
      itemStyle: {
        opacity: 0, //这里必须是0，不然2d的图会覆盖在表面
      },
    })

    return () => <EchartBase className={className} width={width} height={height} options={options} />
  },
})

export default contentRing
