<template>
  <div>
    <div class="box" :style="[mainStyle, otherStyle]">
      传智教育
    </div>
  </div>
</template>

<script>

// 动态绑定style:对象格式，可以是数组格式


/**
 * 语法 :style="objStyle" :style="[objStyle1, objStyle2, ...]"
 */
export default {
  data() {
    return {
      mainStyle: {
        color: 'red',
        fontSize: '20px',
        fontWeight: 'bold'
      },
      otherStyle: {
        background: 'green'
      }
    }
  },
}
</script>

<style scoped>

</style>
