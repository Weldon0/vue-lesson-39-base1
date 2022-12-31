<template>
  <div class="article-case">
    <div class="form-preview" v-if="!isEdit">
      <h2>{{ article.title }}</h2>
      <small>{{ article.channel }}</small>
      <a class="btn-edit" href="#" @click="editFn">编辑</a>
    </div>
    <div class="form-edit" v-else>
      <div class="form-item">
        <div class="label">标题：</div>
        <div class="input">
          <input type="text" v-model="form.title" placeholder="请输入标题"/>
        </div>
      </div>
      <div class="form-item">
        <div class="label">频道：</div>
        <div class="input">
          <select v-model="form.channel">
            <option value="">请选择频道</option>
            <option value="前端">前端</option>
            <option value="运维">运维</option>
            <option value="测试">测试</option>
          </select>
        </div>
      </div>
      <div class="form-item">
        <div class="label"></div>
        <div class="input">
          <button class="cancel" @click="cancel">取消</button>
          <button class="submit" @click="confirm">确认</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleCase',
  data() {
    return {
      // 是否处于编辑状态
      isEdit: false,
      article: {
        title: '如何成为一名前端老鸟？',
        channel: '前端',
      },
      form: {
        title: '',
        channel: '',
      },
    };
  },
  methods: {
    editFn() {
      //   点击了编辑的时候
      //   当前的状态的处于编辑
      this.isEdit = true
      //   把预览区域的值同步到表单区域
      this.form.title = this.article.title
      this.form.channel = this.article.channel
    },
    // 用户点击了确定的时候触发的方法
    confirm() {
      //   用户输入的内容展示到预览区域
      //   同时表单区域隐藏，预览区域展示
      this.article.title = this.form.title
      this.article.channel = this.form.channel
      // 关闭编辑状态，展示预览区域
      this.isEdit = false
    },
    cancel() {
      // 关闭表单区域
      this.isEdit = false
    }
  },
};
</script>

<style scoped lang="less">
.form-preview {
  position: relative;
  display: flex;
  align-items: center;
}

.form-preview h2 {
  font-size: 18px;
  font-weight: normal;
}

.form-preview small {
  font-size: 12px;
  display: inline-block;
  padding: 2px 6px;
  background: #27ba9b;
  color: #fff;
  border-radius: 2px;
  transform: scale(0.8);
}

.form-preview .btn-edit {
  font-size: 12px;
  display: none;
  text-decoration: none;
  color: #069;
  margin-left: 20px;
}

.form-preview:hover .btn-edit {
  display: block;
}

.form-edit {
  padding-top: 20px;
}

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
</style>
