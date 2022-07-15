type Data = {
  name: string
  value: number | [number, number]
}
type RingData = Data & {
  itemStyle?: { color: string }
  label?: {
    formatter: string
    color: string
    show: boolean
    rich?: {
      b: { color: string; lineHeight: number; align: string }
      c: {
        color: string
        textShadowColor: string
        fontSize: number
        textShadowOffsetX: number
        textShadowOffsetY: number
        textShadowBlur: number
      }
      d: { color: string; align: string }
    }
  }
  labelLine?: { lineStyle: { color: string; width: number } }
}

export { Data, RingData }
