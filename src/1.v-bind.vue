<template>
  <div>
    <img width="200" v-bind:src="imgUrl" alt="">
    <img width="200" :src="imgUrl" alt="">
    <a :href="url">点击跳转百度</a>
  </div>
</template>

<script>

// v-bind的作用：
// 动态的绑定标签属性，必须要用到v-bind
// 给标签属性添加了v-bind的时候，会把标签属性对应的值，当做变量解析

// 基本语法 => v-bind:属性名="属性值"
// 简写的形式 => :属性名="属性值"
export default {
  data() {
    return {
      imgUrl: 'http://weldon.net.cn/blog/logo.svg',
      url: 'https://www.baidu.com'
    }
  },
}
</script>

<style scoped>

</style>
