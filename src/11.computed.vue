<template>
  <div>
    第一个数字 <input type="text" v-model.number="num1">
    第二个数字 <input type="text" v-model.number="num2">

    <h3>
      {{ fullName }}
    </h3>

    <hr>
    <input type="text" v-model="msg">
    <h3>{{ reverseMsg }}</h3>

    <hr>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        {{item}}
      </li>
    </ul>
    <h4>
      {{total}}
    </h4>
  </div>
</template>

<script>

// 使用计算属性
// *** 我们想使用的值，根据已有的属性计算得出的，就会用到计算属性
// 使用computed定义计算属性
// 定义的计算属性是函数，返回一个计算的结果(return出来一个值)
// 使用的过程中，当做属性去使用(不要加括号调用)
// 计算属性，只要他依赖的值发生变化的时候，才会重新计算
// 翻转字符串

export default {
  data() {
    return {
      num1: 0,
      num2: 0,
      msg: '',
      arr: [4, 4, 5, 6, 7, 7, 3]
    }
  },
  computed: {
    total() {
      // 把arr进行累加，最终的结果返回去
      return this.arr.reduce((prev, curr) => {
        return prev + curr
      }, 0)
    },
    fullName() {
      return this.num1 + this.num2
    },
    // 展示翻转的内容
    reverseMsg() {
      return this.msg.split('').reverse().join('')
    }
  }
}
</script>

<style scoped>

</style>
