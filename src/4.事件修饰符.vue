<template>
  <div>
    <h1>展示的内容: {{ showMsg }}</h1>
    <input type="text" @keyup.enter="changeShowMsg">

    <hr>

    <img :src="imgUrl" width="200" alt=""> <br>
    <input type="file" @change="changeFile">
  </div>
</template>

<script>

//  事件修饰符
// .pevent 阻止默认行为
// .stop 阻止冒泡行为

// 需求：input框里面输入内容，输入完内容按下回车的时候，输入的内容展示在h1标签里面，同时input输入框的内容清空
// 文件选择框可以选择一个图片，选择的图片可以在界面里面进行预览

// 实现图片的预览功能

// 1、文件选择框
// 2、如果用户选择了文件，获取到选择的这个文件
// 3、如何获取：监听文件选择框的change事件
// 4、打印事件对象, e.target.files[0] => 用户选择的文件对象
// 5、调用URL.createObjectUrl生成一个可以预览的链接
// 6、只需要赋值给img的src属性进行预览

export default {
  data() {
    return {
      showMsg: '',
      imgUrl: ''
    }
  },
  methods: {
    changeShowMsg(e) {
      // 利用了事件对象获取到input的原生dom
      this.showMsg = e.target.value
      e.target.value = ''
    },
    changeFile(e) {
      const imgFile = e.target.files[0]
      // 传入一个文件对象，获取一个本地可以访问的预览地址
      this.imgUrl = URL.createObjectURL(imgFile)
    }
  },
}
</script>

<style scoped>

</style>
