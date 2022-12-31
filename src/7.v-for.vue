<template>
  <div>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        {{ item.title }}
      </li>
    </ul>

    <hr>
    <h4>渲染郭兵的信息</h4>
    <ul>
      <li v-for="(value, key) in obj">
        {{ value }}--{{ key }}
      </li>
    </ul>

    <div v-for="(item, index) in count">你好-{{item}}--{{index}}</div>
  </div>
</template>
<script>


// 1、v-for循环
//   作用：进行遍历的
//      数组/对象/数字

// 遍历数组
// 基础语法：v-for="(item, index) in arr"
// arr是待遍历的数据
// item是遍历的数据的每一项
// index遍历的索引号

// for的时候每次必须添加一个key，这里的key最好是数据的唯一标识
// 如果没有唯一标识，可以使用索引号（如果不写key会报错），但是不推荐使用索引号

// 2、遍历对象 v-for="(value, key) in obj"
// 3、遍历数字 v-for="(item, index) in count"  item从1开始，index从0开始
export default {
  data() {
    return {
      count: 10,
      obj: {
        name: '郭兵',
        age: 18,
        msg: '前端开发'
      },
      arr: [
        {
          id: 0,
          title: '学习'
        },
        {
          id: 1,
          title: '打王者'
        },
        {
          id: 2,
          title: '打cf'
        },
        {
          id: 3,
          title: '连连看'
        },
        {
          id: 4,
          title: '推箱子'
        },
        {
          id: 5,
          title: '俄罗斯方块'
        },
      ]
    }
  },
  methods: {},
}
</script>

<style scoped>

</style>
