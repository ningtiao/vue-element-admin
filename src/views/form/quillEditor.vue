<template>
    <div class="app-container">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 表单</el-breadcrumb-item>
                <el-breadcrumb-item>编辑器</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="plugins-tips">
                Vue-Quill-Editor：基于Quill、适用于Vue2的富文本编辑器。
                访问地址：<a href="https://quilljs.com/docs/api/#content" target="_blank">vue-quill-editor</a>
            </div>
            <quill-editor ref="myTextEditor" v-model="content" :options="editorOption"></quill-editor>
            <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
        </div>
    </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
export default {
  name: 'editor',
  data: function() {
    return {
      content: '',
      editorOption: {
        placeholder: 'Hello World'
      }
    }
  },
  components: {
    quillEditor
  },
  methods: {
    onEditorChange({ editor, html, text }) {
      this.content = html
    },
    submit() {
      console.log(this.content)
      this.$message.success('提交成功！')
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .editor-btn{
        margin-top: 20px;
    }
    .crumbs,.plugins-tips {
       margin-bottom: 20px
    }
    .container {
      padding: 30px;
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 5px
    }
</style>