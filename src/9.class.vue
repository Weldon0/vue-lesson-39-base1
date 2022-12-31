<template>
  <div>
    <div class="container" :class="classes">
      传智教育
    </div>

    <button @click="show = !show">点击切换红色</button>
    <button @click="greenShow = !greenShow">点击切换绿色色</button>
  </div>
</template>

<script>

// 动态绑定class，对象{类名：类名是否生效的标识}
// 绑定数组,数组的成员就是类名
export default {
  data() {
    return {
      show: false,
      greenShow: false,
      classes: ['box', 'a', 'b', 'c']
    }
  },
}
</script>

<style scoped>
.red {
  color: red;
}

.green {
  color: green;
}
</style>
