import { defineComponent, reactive } from 'vue'
import * as echarts from 'echarts'
import EchartBase from '../echartInit/index'

const histogram = defineComponent({
  name: 'HistogramBase',
  setup() {
    const className = 'histogram'
    const width = '100%'
    const height = '100%'
    const dataY = reactive<Array<number>>([120, 200, 150, 80, 70, 110, 130])
    const dataX = reactive<Array<string>>(['昆明市', '曲靖市', '玉溪市', '昭通市', '保山市', '丽江市', '普洱市'])
    const options = reactive({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
      },
      grid: {
        top: 20,
        left: 50,
        right: 50,
        bottom: 20,
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        splitLine: {
          show: false,
          color: '#333',
          width: 1,
          type: 'solid',
        },
        axisLabel: {
          color: 'rgba(255, 255, 255, 0.5)',
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.2)',
          },
        },
        data: dataX,
      },
      yAxis: {
        type: 'value',
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.2)',
            width: 1,
            type: 'dashed',
          },
        },
        axisLabel: {
          color: 'rgba(255, 255, 255, 0.5)',
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.2)',
          },
        },
      },
      series: [
        {
          data: dataY,
          type: 'bar',
          barWidth: '8%',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#248ff7',
              },
              {
                offset: 1,
                color: '#6851f1',
              },
            ]),
            borderRadius: 11,
          },
        },
      ],
    })
    setInterval(() => {
      dataY.shift()
      const value = Math.floor(Math.random() * 100)
      dataY.push(value)

      const last = dataX[0]
      dataX.shift()
      dataX.push(last)
      // console.log(options)
    }, 2000)

    return () => <EchartBase className={className} width={width} height={height} options={options} />
  },
})

export default histogram
