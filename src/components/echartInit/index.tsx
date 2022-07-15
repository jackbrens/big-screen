/**
 * @Auth: jack
 * @Date: 2022年7月11日15:32:42
 * 中间echarts地图
 */
import { defineComponent, onMounted, ref, watch } from 'vue'
import * as echarts from 'echarts'
import { getAssetsFile, getMapByName } from '@/utils/asyncJsonFile'
type EChartsOption = echarts.EChartsOption

type DataList = {
  name: string
  value: number
}
// 定义类型设置为只读
const PropsType = {
  // 图表类名
  className: {
    type: String,
    default: 'charts',
  },
  // 图表宽度
  width: {
    type: String,
    require: true,
  },
  // 图表高度
  height: {
    type: String,
    require: true,
  },
  // 图表数据项
  options: {
    type: Object,
    default: () => {},
  },
}
const index = defineComponent({
  name: 'ChartInit',
  props: PropsType,
  setup(props) {
    const myChart = ref<HTMLElement>()
    const myCharts = ref()
    /**
     * 初始化echart
     * @param data 数据项
     * @param clearCaching 是否清缓存
     */
    const initChart = (clearCaching = false, data?: EChartsOption) => {
      if (data || props.options) {
        myCharts.value.setOption(data || props.options, clearCaching)
      }
    }

    const initMap = async () => {
      const data = await getMapByName('YunNan')
      myCharts.value = echarts.init(myChart.value!)
      echarts.registerMap('云南省', data?.default as any)
      myCharts.value.setOption(props.options)
    }
    onMounted(() => {
      if (props.className !== 'contentMap') {
        myCharts.value = echarts.init(myChart.value!)
        initChart()
        return
      }

      initMap()
    })

    // 深度监听options
    watch(
      () => props.options,
      (newValue, oldValue) => {
        initChart(false, newValue)
      },
      { deep: true }
    )

    return () => (
      <div
        ref={myChart}
        class={props.className}
        style={{
          width: props.width,
          height: props.height,
        }}
      />
    )
  },
})
export default index
