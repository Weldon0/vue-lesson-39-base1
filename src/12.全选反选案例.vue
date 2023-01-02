<template>
  <div>
    <span>全选:</span>
    <input type="checkbox" v-model="isCheckAll"/>
    <button @click="reverse">反选</button>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        <input type="checkbox" v-model="item.c"/>
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>

/**
 * 1、渲染数据 v-for
 * 2、动态绑定选中状态 复选框添加v-model属性
 * 3、全选按钮的状态展示
 */
export default {
  computed: {
    isCheckAll: {
      get() {
        return this.arr.every(item => item.c === true)
      },
      // 修改计算属性的时候，会触发set逻辑
      set(newValue) {
      //   所有子项的选中状态跟全选框保持一致
      //   遍历所有的数据，让每一项的c属性和全选框最新的值保持一致
        this.arr.forEach(item => {
          // 让每一项的选中状态和全选框的最新的值保持一致
          item.c  = newValue
        })
      }
    }
    // isCheckAll() {
    //   // 动态计算，计算arr里面的所有项里面的c属性是不是全部为true，如果全部为true，返回true
    //   // 如果有任何一项为false，返回false
    //
    //   // 用到了every方法:全部满足条件返回true，如果有任何一个不满足，返回false
    //
    //   // 数组里面所有的c属性全部等于true，返回true
    //   // 如果有任意一项的c属性不为true，返回false
    //   return this.arr.every(item => item.c === true)
    // }
  },
  methods: {
    reverse() {
      // 所有的子项全部反选
      // 遍历数据，把每一项c属性的值取反
      this.arr.forEach(item => {
        item.c = !item.c
      })
    }
  },
  data() {
    return {
      arr: [
        {
          name: "猪八戒",
          c: false,
        },
        {
          name: "孙悟空",
          c: false,
        },
        {
          name: "唐僧",
          c: true,
        },
        {
          name: "白龙马",
          c: false,
        },
      ],
    };
  }
};
</script>

<style>
</style>
