<template>
  <div id="app">
    <h3>案例：折叠面板</h3>
    <div class="box">
      <div class="title">
        <h4>芙蓉楼送辛渐</h4>
        <!-- 按钮位置 -->
        <span class="btn" @click="show = !show">
          {{ show ? '收起' : '展示'}}
        </span>
      </div>

      <!-- 切换显示隐藏的部分  -->
      <div class="container" v-show="show">
        <p>寒雨连江夜入吴,</p>
        <p>平明送客楚山孤。</p>
        <p>洛阳亲友如相问，</p>
        <p>一片冰心在玉壶。</p>
      </div>
    </div>
  </div>
</template>

<script>
// 1、点击按钮的时候，需要切换内容区域的显示或者隐藏
// 2、切换显示隐藏的时候，按钮展示的文字也需要动态的变化
export default {
  data() {
    return {
      show: true
    }
  }
}
</script>

<style lang="less">
body {
  background-color: #ccc;
  #app {
    width: 400px;
    height: 320px;
    margin: 20px auto;
    background-color: #fff;
    border: 4px solid blueviolet;
    border-radius: 1em;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
    padding: 1em 2em 2em;
    h3 {
      text-align: center;
    }
    .box {
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.5);
      border-radius: 4px;
      border: 1px solid #ebeef5;
      background-color: #fff;
      overflow: hidden;
      color: #303133;
      transition: .3s;
    }
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;
    }
    .title h4 {
      line-height: 2;
      margin: 0;
    }
    .container {
      padding: 0 20px;
      border-top: 1px solid #ccc;
    }
    .btn {
      /* 鼠标改成手的形状 */
      cursor: pointer;
    }
  }
}
</style>
