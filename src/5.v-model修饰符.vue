<template>
  <div>
    <input type="text" v-model.number="count">
    <button @click="getCount">点击</button>


    <input type="text" v-model.trim="msg">
    <button @click="getMsg">点击</button>


    <hr>
    <h1>
      {{info}}
    </h1>
    <input type="text" v-model.lazy="info">
  </div>
</template>

<script>

/**
 * 1. number修饰符  把v-model绑定的内容转化为number类型
 * 2. trim修饰符，把v-model绑定的内容去除两端的空格
 * 3. lazy修饰符 v-model默认更新数据在输入框实时输入的时候(input事件)，change的时候更新数据加lazy就可以
 */
export default {
  data() {
    return {
      count: 0,
      msg: '信息',
      info: ''
    }
  },
  methods: {
    getCount() {
      // 想要拿到number型
      console.log(this.count)
    },
    getMsg() {
      console.log(this.msg.length)
    }
  },
}
</script>

<style scoped>

</style>
