
<template>
    <div class="app-container">
      <code>
    富文本是管理后台一个核心的功能，但同时又是一个有很多坑的地方。在选择富文本的过程中我也走了不少的弯路，市面上常见的富文本都基本用过了，最终权衡了一下选择了Tinymce。更详细的富文本比较和介绍见
      <a target="_blank" class="link-type" href="https://panjiachen.github.io/vue-element-admin-site/#/rich-editor"> 文档</a>
    </code>
    <div>
      <tinymce class="editor" :value="content"  :setting="editorSetting" @input="(content)=> content = content"></tinymce>
    </div>
    <div class="editor-content" v-html="content"></div>
  </div>
</template>
<script>
import Tinymce from '@/components/Tinymce'
export default {
  name: 'editor-demo',
  data: function() {
    return {
      content: `
        <img style="float:right" src='https://www.tinymce.com/images/glyph-tinymce@2x.png' alt="TinyMCE" height='150px'/><h2>The world’s first rich text editor in the cloud</h2><p>
        Have you heard about Tiny Cloud? 
        It’s the first step in our journey to help you deliver great content creation experiences, no matter your level of expertise. 
        50,000 developers already agree. 
        They get free access to our global CDN, image proxy services and auto updates to the TinyMCE editor. 
        They’re also ready for some exciting updates coming soon.
        </p>
      `,
      // tinymce的配置信息 参考官方文档 https://www.tinymce.com/docs/configure/integration-and-setup/
      editorSetting: {
        height: 400
      }
    }
  },
  components: {
    Tinymce
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
code {
    background: #eef1f6;
    padding: 15px 16px;
    margin-bottom: 20px;
    display: block;
    line-height: 36px;
    font-size: 15px;
    font-family: Source Sans Pro,Helvetica Neue,Arial,sans-serif;
}
.editor-content{
  margin-top: 20px;
}
</style>