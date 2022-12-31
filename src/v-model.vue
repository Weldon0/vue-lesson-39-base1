<template>
  <div>
    <h1>{{ msg }}</h1>
    <input type="text" v-model="msg">

    <input type="checkbox" v-model="flag">



    <button @click="flag = !flag">点击切换复选框的选中状态</button>
  </div>
</template>

<script>
// v-model 数据的双向绑定
//  数据变化 => 影响视图
//  视图修改 => 影响数据
export default {
  data() {
    return {
      msg: '我是欢迎信息',
      flag: true
    }
  },
}
</script>

<style scoped>

</style>
