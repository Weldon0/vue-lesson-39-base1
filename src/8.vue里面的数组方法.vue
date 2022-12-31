<template>
  <div>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        {{ item }}
        <input type="text">
      </li>
    </ul>
    <button @click="changeArr">数组第一项添加一个元素</button>
    <button @click="sliceBtn">截取数组的前三项</button>
  </div>
</template>

<script>

// 虚拟dom
// template里面的内容，需要vue进行二次处理，二次编译的
// 编译成虚拟dom
// 本质上是一个js对象，描述真实的dom结构的
// 数据更新的时候，需要进行对比
// 用新的虚拟dom结构和老的虚拟dom结构，进行对比，对比出的差异更新的真实的dom上
// 如果数据没有发生变化，不会进行dom的更新的
// 虚拟dom为了最小化的更新
//

// const vnode = {
//   tag: 'div',
//   props: {
//     style: {
//       color: 'red'
//     }
//   },
//   children: [
//     '你好'
//   ]
// }
//
// const vnode = {
//   tag: 'div',
//   props: {
//     style: {
//       color: 'red'
//     }
//   },
//   children: [
//     '你好1'
//   ]
// }


// v-for，重复创建谁，就加到谁的身上
// 修改了数组，界面就会响应式的更新

// 数组的第一项出现在最后，依次循环

// 修改数组的时候，只有改变了原数组，界面才会更新，其他的方法，如果没有修改原数组，界面是不会更新的
// 都改变修改原数组

// 1、只有可以改变原数组的7个数组方法是响应式，其他的都不是响应式的
/**
 * push()
 * pop()
 * shift()
 * unshift()
 * splice()
 * sort()
 * reverse()
 */

// 2、如果直接通过索引号修改数组成员，界面是不会更新的.
//  解决方案：使用$set方法

export default {
  data() {
    return {
      arr: [4, 5, 6, 2, 3, 7, 8],
    }
  },
  methods: {
    changeArr() {
      this.arr.unshift(20)
      // 并没有真实的直接更新dom
      // 基于最新的数据，先生成一个虚拟dom结构


      // 新的虚拟dom结构和老的虚拟dom结构进行对比，对比出差异之后，真实的更新到dom结构里面
      // 每次直接操作真实dom消耗性能

      // 如果添加了key，key就是当前节点的唯一标识，对比的过程当中会找key相同的节点进行复用


      // //   数组的最后面添加一项
      // this.arr.push(this.arr[0])
      // //   每添加完一次，第一项需要删除掉,数组的shift方法
      // this.arr.shift()
    },
    sliceBtn() {
      // this.arr[1] = 1000
      // this.$set(this.arr, 1, 100)
      // 截取数组的前三项
      // slice返回了一个新的数组，没有改变原数组
      // this.arr.slice(0, 3)

      // // 返回了一个新数组，对原数组没有任何影响
      // this.arr.filter(item => item > 9)
    }
  },
}

// 什么叫做虚拟dom？
// 概念：虚拟dom本质上是一个js对象，用于描述真实的dom结构的。
// 数据更新的时候，根据老的虚拟dom结构和新的虚拟dom结构，进行对比，找出差异（需要更新的地方），真实的更新的dom结构里面（打补丁）
// 使用v-for的时候，如果添加了key为当前数据的唯一标识的时候，domdiff的时候，就能找到可以复用的元素，最小化dom的更新

// vue数据更新的时候，先对比虚拟dom（diff算法）, 再更新真实dom
</script>

<style scoped>

</style>
