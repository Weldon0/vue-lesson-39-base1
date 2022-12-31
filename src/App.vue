<template>
  <!--  只能有一个根元素-->
  <div class="container">
    <h1 class="box">开始学习vue基础</h1>
    <h2>
      {{ msg }}
    </h2>
    <h4>
      {{ userInfo.age}}
    </h4>
    <h4>
      {{userInfo.hello.toUpperCase()}}
    </h4>
    <h4>
      {{ userInfo.age >= 18 ? '成年' : '小年轻'}}
    </h4>

  </div>
</template>

<script>
// 写js
// template只能有一个根元素，写多个会报错
// 提供数据：data配置项提供数据，data是一个函数，这个函数返回一个对象，对象里面就是我们提供的数据
// 提供的数据要想在模板里面渲染，用的是插值表达式 {{ }}

// 差值表达式可以调用方法，可以写三元表达式
export default {
  data() {
    return {
      msg: '我是黑马程序员',
      userInfo: {
        age: 18,
        hello: 'world'
      }
    }
  }
}
</script>

<style lang="less">
.container {
  .box {
    color: red;
  }
}
</style>
