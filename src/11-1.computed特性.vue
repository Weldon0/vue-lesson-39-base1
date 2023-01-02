<template>
  <div>
    <input type="text" v-model.number="currentAge">
    <!--    <h1>明年的年龄: {{ nextAge }}</h1>-->
    <input type="text" placeholder="明年的年龄" v-model="nextAge">
  </div>
</template>

<script>

// computed: 计算属性
// 场景：使用的数据根据现有的数据可以计算得出，购物车
// 特点：
// 什么时候会进行计算：【当计算属性依赖的数据发生变化的时候，会重新计算】
// 如果页面里面多次用到了同一个计算属性，不会多次计算 --> 有【缓存】
//
// --> 计算属性可能会被修改

// 【默认情况下】，计算性不能被修改，如果被修改，报错
// --> 报错内容：计算属性被修改了，但是没有提供对应的setter方法

// 计算属性的第二种写法
// 不仅可以获取值，还可以设置值

// 【计算属性写成一个对象】
// 提供get方法和set方法
// get方法用于计算当前计算属性的值
// set方法：当修改计算属性的值的时候会触发，可以通过形参获取到修改之后的最新的值


export default {
  computed: {
    // 没有提供当nextage被修改的处理函数
    // nextAge() {
    //   return this.currentAge + 1
    // }
    nextAge: {
      // get方法什么时候触发的 ==> 依赖的数据变化的时候，会调用get计算当前计算属性的值
      get() {
        return this.currentAge + 1
      },
      // 修改计算属性的值的时候会触发set
      set(newValue) {
        // 获取到的值，就是修改的最新的值
        console.log(newValue)
        this.currentAge = newValue - 1
      }
    }
  },
  data() {
    return {
      currentAge: 18
    }
  },
}
</script>

<style scoped>

</style>
