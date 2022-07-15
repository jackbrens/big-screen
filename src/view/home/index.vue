<template>
  <div ref="appRef" class="home">
    <div class="header">实时数据监控平台</div>
    <div class="container">
      <content-left class="left" />
      <content-center class="center" />
      <content-right class="right" />
    </div>
    <div class="footer">
      <content-bottom class="bottom" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ContentLeft from '@/components/layouts/contentLeft/contentLeft'
import ContentCenter from '@/components/layouts/contentCenter/contentCenter'
import ContentRight from '@/components/layouts/contentRight/contentRight'
import ContentBottom from '@/components/layouts/contentBottom/contentBottom'
import responsive from '@/utils/responsive'
import { onMounted, ref } from 'vue'

const { appRef, calcRate, windowDraw } = responsive()
onMounted(() => {
  // todo 屏幕适应
  windowDraw()
  calcRate()
})
</script>

<style lang="scss" scoped>
.home {
  width: 1920px;
  height: 1080px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: left top;
  .header {
    height: 10%;
    background: url('@/assets/images/headerBg.png') no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #a5ccf2;
    font-size: 35px;
  }
  .container {
    width: 100%;
    height: 60%;
    display: flex;
    .left,
    .right {
      flex: 1;
    }
    .left {
      background: url('@/assets/images/real-time.png') no-repeat;
      background-size: 100% 100%;
    }
    .right {
      //background: url('@/assets/images/real-time.png') no-repeat;
      //background-size: 100% 100%;
    }
    .center {
      flex: 3;
      margin: 0 20px;
    }
  }
  .footer {
    width: 100%;
    height: 28%;
    margin-top: 1%;
    .bottom {
      height: 100%;
      background: url('@/assets/images/bg-footer.png') no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>
