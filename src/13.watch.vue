<template>
  <div>
    <input type="text" placeholder="女朋友的名字" v-model="friend.name">
  </div>
</template>

<script>

// computed
// 计算属性
// 已有属性经过计算 ==> 计算属性
//  计算属性里面不能有异步操作

// watch
// 侦听器
// 作用：监听现有属性变化的，当属性发生变化之后做一些其他操作
// 监听现有属性的变化 ==> 做一些其他操作

// 默认情况下，watch首次不执行
// 需求：需要首次执行一下

// 默认监听的是复杂数据类型 ==> 地址是否发生变化
// 深度监听 ==> 不管它内部的任何属性发生变化，我都想要监听到
// deep: true // 实现深度监听


// computed
// 计算属性


// watch
// 侦听器

// computed: 被动计算
// watch 主动监听


export default {
  data() {
    return {
      friend: {
        name: ''
      }
    }
  },
  watch: {
    // 1、直接写一个函数
    // friend(newValue, oldValue) {
    //   console.log('newValue:' + newValue)
    //   console.log('oldValue:' + oldValue)
    // }
    // 2、写成对象的形式
    friend: {
      //   处理函数使用handler进行声明
      handler(newValue, oldValue) {
        console.log('-----------------')
        console.log(newValue.name)
        console.log(oldValue.name)

        // console.log('newValue:' + newValue)
        // console.log('oldValue:' + oldValue)
      },
      deep: true, // 开启深度监听，如果不开启默认情况下监听的是对象的地址是否发生变化
      // immediate: true, // 开启首次监听
    }
  }
}
</script>

<style scoped>

</style>
