<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="reverseUpper">点击翻转字符串，同时转大写</button>
    <button @click="reverseLowCase">点击翻转字符串，同时转小写</button>
  </div>
</template>

<script>


// 重复的逻辑进行函数的封装
function reverse(str) {
  //   实现翻转的逻辑
  return str.split('').reverse().join('')
}

// 翻转字符串
export default {
  data() {
    return {
      msg: "hello world",
      arr: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    // 翻转字符串，同时转大写
    reverseUpper() {
      // 翻转字符串
      //   字符串没有方法可以让我们翻转
      //   数组有翻转的方法 通过reverse进行翻转

      // 1、字符串转成数组 --> 数组可以翻转了 --> 翻转之后的结果转回字符串
      // hello world -> split -> ['h', 'e', 'l', 'l', ...]
      // reverse -> ['d', 'l', 'r', 'o', 'w', ....]
      // join -> dlrow, olleh
      this.msg = reverse(this.msg).toUpperCase();
    },
    // 翻转字符串，同时转小写
    reverseLowCase() {
      this.msg = reverse(this.msg).toLowerCase()
    }
  },
}
</script>

<style scoped>

</style>
