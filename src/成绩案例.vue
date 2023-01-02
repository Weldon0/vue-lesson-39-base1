<template>
  <div class="score-case">
    <div class="table">
      <table>
        <thead>
        <tr>
          <th>编号</th>
          <th>科目</th>
          <th>成绩</th>
          <th>考试时间</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody v-if="list.length">
        <tr v-for="(item, index) in list" :key="item.id">
          <td>{{ index + 1 }}</td>
          <td>{{ item.subject }}</td>
          <td :class="{red: item.score < 60}">{{ item.score }}</td>
          <td>{{ formatDate(item.date) }}</td>
          <td><a href="#" @click.prevent="del(item.id)">删除</a></td>
        </tr>
        </tbody>
        <tbody v-else>
        <tr>
          <td colspan="5">
            <span class="none">暂无数据</span>
          </td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
          <td colSpan="5">
            <span>总分：321</span>
            <span style="margin-left:50px">平均分：80.25</span>
          </td>
        </tr>
        </tfoot>
      </table>
    </div>
    <div class="form">
      <div class="form-item">
        <div class="label">科目：</div>
        <div class="input">
          <input v-model="subject" type="text" placeholder="请输入科目"/>
        </div>
      </div>
      <div class="form-item">
        <div class="label">分数：</div>
        <div class="input">
          <input v-model.number="score" type="text" placeholder="请输入分数"/>
        </div>
      </div>
      <div class="form-item">
        <div class="label"></div>
        <div class="input">
          <button class="submit" @click="add">添加</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// 1 、引入第三方包
import moment from "moment";

// 1、基础渲染
//   数据渲染到页面里面，如果分数小于60，字体变红色

export default {
  name: 'ScoreCase',
  data() {
    return {
      list: [
        {id: 4, subject: '语文', score: 89, date: new Date('2022/06/07 10:00:00')},
        {id: 5, subject: '数学', score: 100, date: new Date('2022/06/07 15:00:00')},
        {id: 6, subject: '英语', score: 56, date: new Date('2022/06/08 10:00:00')},
        {id: 7, subject: '物理', score: 76, date: new Date('2022/06/08 10:00:00')}
      ],
      subject: '', // 科目
      score: '' // 分数
    }
  },
  methods: {
    // 定义一个格式化时间的方法
    formatDate(date) {
      // 接收一个时间的参数，格式化成我们预期想要的格式
      return moment(date).format('YYYY-MM-DD hh:mm:ss')
    },
    del(id) {
      // console.log('删除功能')
      // 点击删除的时候，把当前点击的这条数据删除
      console.log(id)
      // 根据当前数据的id，到数组里面，把这条数据删除
      this.list = this.list.filter(item => item.id !== id)
    },
    add() {
      // 打印用户输入的内容
      console.log(this.subject)
      console.log(this.score)
      // 如果用户没有输入内容，或者输入的分数不合法的情况下，进行弹框提示
      if (!this.subject || this.score < 0 || this.score > 100) {
        alert('输入不合法')
        return
      }

      //   可以进行数据的添加
      // at方法可以接受负数，表示从后往前数
      this.list.push({
        id: this.list.at(-1).id + 1,
        subject: this.subject,
        score: this.score,
        date: new Date()
      })

      //   输入框清空
      this.subject = ''
      this.score = ''
    }
  },
};
</script>

<style lang="less">
.score-case {
  width: 1000px;
  margin: 50px auto;
  display: flex;

  .table {
    flex: 4;

    table {
      width: 100%;
      border-spacing: 0;
      border-top: 1px solid #ccc;
      border-left: 1px solid #ccc;

      th {
        background: #f5f5f5;
      }

      tr:hover td {
        background: #f5f5f5;
      }

      td,
      th {
        border-bottom: 1px solid #ccc;
        border-right: 1px solid #ccc;
        text-align: center;
        padding: 10px;

        &.red {
          color: red;
        }
      }
    }

    .none {
      height: 100px;
      line-height: 100px;
      color: #999;
    }
  }

  .form {
    flex: 1;
    padding: 20px;

    .form-item {
      display: flex;
      margin-bottom: 20px;
      align-items: center;
    }

    .form-item .label {
      width: 60px;
      text-align: right;
      font-size: 14px;
    }

    .form-item .input {
      flex: 1;
    }

    .form-item input,
    .form-item select {
      appearance: none;
      outline: none;
      border: 1px solid #ccc;
      width: 200px;
      height: 40px;
      box-sizing: border-box;
      padding: 10px;
      color: #666;
    }

    .form-item input::placeholder {
      color: #666;
    }

    .form-item .cancel,
    .form-item .submit {
      appearance: none;
      outline: none;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 4px 10px;
      margin-right: 10px;
      font-size: 12px;
      background: #ccc;
    }

    .form-item .submit {
      border-color: #069;
      background: #069;
      color: #fff;
    }
  }
}
</style>
