import { defineComponent, reactive } from 'vue'
import EchartBase from '../echartInit/index'
import { getAssetsFile, getImgUrl, getMapByName } from '@/utils/asyncJsonFile'
import { Data } from '@/interface/interface'

const contentMap = defineComponent({
  name: 'ContentMap',
  components: {
    EchartBase,
  },
  setup() {
    const className = 'contentMap'
    const width = '100%'
    const height = '100%'
    let options = reactive({})

    const dataList: Data[] = reactive([
      { name: '昆明市', value: [102.712251, 25.040609] },
      { name: '曲靖市', value: [103.797851, 25.501557] },
      { name: '玉溪市', value: [102.543907, 24.350461] },
      { name: '保山市', value: [99.167133, 25.111802] },
      { name: '昭通市', value: [103.717216, 27.336999] },
      { name: '丽江市', value: [100.233026, 26.872108] },
      { name: '普洱市', value: [100.972344, 22.777321] },
      { name: '临沧市', value: [100.08697, 23.886567] },
      { name: '楚雄彝族自治州', value: [101.546046, 25.041988] },
      { name: '红河哈尼族彝族自治州', value: [103.384182, 23.366775] },
      { name: '文山壮族苗族自治州', value: [104.24401, 23.36951] },
      { name: '西双版纳傣族自治州', value: [100.797941, 22.001724] },
      { name: '大理白族自治州', value: [100.225668, 25.589449] },
      { name: '德宏傣族景颇族自治州', value: [98.578363, 24.436694] },
      { name: '怒江傈僳族自治州', value: [98.854304, 25.850949] },
      { name: '迪庆藏族自治州', value: [99.706463, 27.826853] },
    ])
    const initOptions = () => {
      options = {
        tooltip: {
          show: true,
        },
        visualMap: {
          show: true, //图注
          type: 'continuous',
          min: 0,
          max: 30,
          left: 'left',
          top: 'bottom',
          text: ['高', '低'], //取值范围的文字
          textStyle: {
            color: '#fff',
          },
          inRange: {
            // color: ['#e0ffff', '#006edd']//取值范围的颜色
            color: ['#65cff5', '#437ef6', '#5c62ea'],
          },
        },
        legend: {
          data: ['气象信息'], //与series的name属性对应
          left: 'right',
          top: 'bottom',
          textStyle: {
            color: '#fff',
          },
        },
        geo: {
          map: '云南省',
          roam: false, //不开启缩放和平移
          zoom: 1.23, //视角缩放比例
          selectedMode: false, //选中模式：single | multiple
          label: {
            show: false,
            fontSize: 10,
            color: 'rgba(0,0,0,0.7)',
          },
          itemStyle: {
            areaColor: 'transparent',
            borderColor: '#3fdaff',
            borderWidth: 1,
            shadowColor: 'rgba(63, 218, 255, 0.5)',
            shadowBlur: 10,
          },
        },
        series: [
          // {
          //   name: '热力信息',
          //   type: 'map',
          //   tooltip: {
          //     show: true,
          //     // //数据格式化
          //     formatter: (params: { name: string; data: { value: number[] } }) => {
          //       return `${params.name}: ${params?.data?.value[2] || 0} K`
          //     },
          //   },
          //   geoIndex: 0,
          //   data: dataList,
          // },

          // 浮点图类型
          {
            name: '气象信息',
            type: 'scatter',
            roam: false,
            coordinateSystem: 'geo',
            data: dataList,
            symbol: (params: any, api: { data: { img: string } }) => {
              const img = parseInt(api?.data?.img) || 1
              return `image://${getImgUrl(img)}`
            },
            symbolSize: [24, 24], // symbols图标大小
            label: {
              formatter: (params: { name: string }) => {
                return `${params.name}`
              },
              position: 'bottom',
              show: true,
              fontSize: 14,
            },
            tooltip: {
              show: true,
              trigger: 'item',
              enterable: true,
              alwaysShowContent: true,
              position: (point: any[]) => {
                const pointX = point[0] + 5
                const pointY = point[1] + 5
                return [pointX, pointY]
              },
              backgroundColor: 'rgba(0,0,0,0)',
              borderColor: 'rgba(0,0,0,0)',
              extraCssText: 'box-shadow: 0 0 0 rgba(0, 0, 0, 0);',

              //数据格式化
              formatter: (params: { data: { img: string }; name: string; value: any[] }) => {
                const img = parseInt(params?.data?.img) || 1
                return `<div
                        class="custom-tooltip"
                        style="border-radius: 5px;
                        border: 3px solid #023a7f;
                        background-color: rgba(0, 0, 0, 0.6);
                        color: #FFFFFF;
                        font-size: 16px;
                        padding: 10px"
                       >
                         <img src="${getImgUrl(img)}"
                         style="width: 24px; height: 24px" alt="" />
                         ${params.name} <br> ${params.value[2] ? params.value[2] : 0}℃
                       </div>`
              },
            },
            emphasis: {
              scale: false,
            },
          },
        ],
      }
    }

    const initData = async () => {
      // const data = await getMapByName('YunNan')
      // // console.log(data)
      // if (!data) {
      //   return
      // }
      // data?.default?.features.forEach((item: any, index: number) => {
      //   dataList[index] = {
      //     name: item.properties.name,
      //
      //     // center里存的是 经纬度
      //     value: item.properties.center,
      //   }
      // })
      // console.log(dataList)
      initOptions()
    }

    initData()

    return () => <EchartBase className={className} width={width} height={height} options={options} />
  },
})

export default contentMap
