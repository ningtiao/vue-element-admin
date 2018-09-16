<template>
  <div class="container">
    <div class="title"><h2>ElementUI的Upload上传图片到七牛云</h2></div>
    <el-upload
      class="upload-demo"
      drag
      :action="upload_qiniu_url"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :on-error="handleError"
      :before-upload="beforeAvatarUpload"
      :data="qiniuData">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <div v-else class="el-default">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      </div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过2MB</div>
    </el-upload>
  </div>
</template>

<script>
export default {
  data() {
    return {
      qiniuData: {
        key: '',
        token: ''
      },
      // 七牛云上传储存区域的上传域名（华东、华北、华南、北美、东南亚）
      upload_qiniu_url: 'http://up-z0.qiniup.com',
      // 七牛云返回储存图片的子域名
      upload_qiniu_addr: 'http://up-z0.qiniup.com',
      imageUrl: '',
      Global: {
        dataUrl: 'http://yoursite.com'
      }
    }
  },
  created() {
    this.getQiniuToken()
  },
  methods: {
    getQiniuToken: function() {
      const _this = this
      _this.qiniuData.token = 'anEC5u_72gw1kZPSy3Dsq1lo_DPXyvuPDaj4ePkN:UF5dBGuGCoaVvAsm6rRbFCE-rNE=:eyJkZWxldGVBZnRlckRheXMiOjEsInNjb3BlIjoianNzZGsiLCJkZWFkbGluZSI6MTUzNzA3MjE3NH0='
    },
    beforeAvatarUpload: function(file) {
      this.qiniuData.key = file.name
      const isJPG = file.type === 'image/jpeg'
      const isPNG = file.type === 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG && !isPNG) {
        this.$message.error('图片只能是 JPG/PNG 格式!')
        return false
      }
      if (!isLt2M) {
        this.$message.error('图片大小不能超过 2MB!')
        return false
      }
    },
    handleAvatarSuccess: function(res, file) {
      this.imageUrl = this.upload_qiniu_addr + res.key
      console.log(this.imageUrl)
    },
    handleError: function(res) {
      this.$message({
        message: '上传失败',
        duration: 2000,
        type: 'warning'
      })
    }
  }
}
</script>

<style scode>
.title{
  margin:90px 0 40px 0;
}
.el-default .el-icon-upload {
  margin-top: 125px;
}
.el-upload-dragger {
  width: 350px;
  height: 350px;
}
.avatar {
  width: 350px;
  height: 350px;
  display: block;
}
</style>