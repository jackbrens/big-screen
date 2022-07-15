import { defineComponent, reactive } from 'vue'
import EchartBase from '../echartInit/index'

// 定义类型设置为只读
const PropsType = {
  seriesData: {
    type: Object,
    default: () => {},
  },
}
const pie = defineComponent({
  name: 'Pie',
  props: PropsType,
  setup(props) {
    const className = 'pie'
    const width = '100%'
    const height = '100%'
    const color = [
      ['#25be28', '#00266c'],
      ['#ff6900', '#00266c'],
    ]
    const dataList = []
    dataList.push(
      {
        value: props.seriesData.value,
        itemStyle: {
          color: props.seriesData.color,
        },
      },
      {
        value: 100,
        itemStyle: {
          color: '#00266c',
        },
      }
    )
    const options = reactive({
      title: {
        text: props.seriesData.value + '\n' + props.seriesData.name,
        left: 'center',
        top: '30%',
        textStyle: {
          fontWeight: 'normal',
          fontSize: 14,
          color: '#FFFFFF',
        },
      },
      series: [
        {
          type: 'pie',
          //环形显示饼状图，实际上显示的是50-80之间的部分
          radius: ['60%', '70%'],
          data: dataList,
          label: {
            //将视觉引导图关闭
            show: false,
          },
        },
      ],
    })
    return () => <EchartBase className={className} width={width} height={height} options={options} />
  },
})

export default pie
