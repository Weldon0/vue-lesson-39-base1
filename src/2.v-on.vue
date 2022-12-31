<template>
  <div>
    <button v-on:click="fn">点击打印内容</button>
    <button @click="fn">简写的事件绑定</button>

    <button @click="handleParamsFn(10, $event)">点击按钮传递了参数</button>
  </div>
</template>

<script>

// v-on的作用是什么？
// 绑定事件的

// 基础语法：v-on:事件名="事件处理函数或者简单的赋值语句"
// 简写语法：@事件名="事件处理函数或者简单的赋值语句"

// 1. 获取事件对象
//  绑定事件的时候，没有传递参数，那么事件对象，默认就是第一个参数
//  绑定事件的时候，传递了参数，通过$event进行显示的传递

//
export default {
  methods: {
    fn(e) {
      console.log(e)
      console.log('点击了button按钮')
    },
    handleParamsFn(count, e) {
      //   接受到的参数进行打印
      console.log(count)
      console.log(e)
    }
  }
}
</script>

<style scoped>

</style>
