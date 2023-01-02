<template>
  <div>
    第一个数字 <input type="text" v-model.number="num1">
    第二个数字 <input type="text" v-model.number="num2">

    <h3>
      两个数字的和： {{ fullName }} {{ fullName }} {{ fullName }} {{ fullName }} {{ fullName }}{{ fullName }}{{ fullName }}
      {{ getTotalFn() }}
      {{ getTotalFn() }}
      {{ getTotalFn() }}
      {{ getTotalFn() }}
      {{ getTotalFn() }}
      {{ getTotalFn() }}
      {{ getTotalFn() }}
      {{ getTotalFn() }}
    </h3>

    <hr>
    <input type="text" v-model="msg">
    <h3>{{ reverseMsg }}</h3>

    <hr>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        {{ item }}
      </li>
    </ul>
    <h4>
      {{ total }}
    </h4>
  </div>
</template>

<script>

// 使用计算属性
// --> 基本用法：
// 【场景：我们想使用的值，根据已有的属性计算得出的，就会用到计算属性】
// 使用computed定义计算属性
// 定义的计算属性是函数，返回一个计算的结果(return出来一个值)
// 使用的过程中，当做属性去使用(不要加括号调用)
// 计算属性，只要他依赖的值发生变化的时候，才会重新计算
// 翻转字符串

// --> 总结一下computed和methods的区别？
// methods: 只要当前组件的任何数据有更新，methods肯定要执行
// computed: 就算当前组件的数据有更新，如果当前计算属性依赖的值没有更新，不会重新计算

// --> 计算属性：可以缓存
// 【计算一次之后，结果会缓存起来，下一次用到的时候，直接使用缓存的结果（而不是重新计算）】
// 什么时候会重新计算：【计算属性依赖的值发生变化的时候，会重新计算】

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
      console.log("computed:计算属性计算")
      return this.num1 + this.num2
    },
    // 展示翻转的内容
    reverseMsg() {
      return this.msg.split('').reverse().join('')
    }
  },
  methods: {
    getTotalFn() {
      console.log('methods: 开始计算值')
      // 把两个值相加return
      return this.num1 + this.num2
    }
  }
}
</script>

<style scoped>

</style>
