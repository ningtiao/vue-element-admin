<template>
  <div id="app">
    <h2>上传之前先<a class='link' href='http://jssdk.demo.qiniu.io/uptoken'>点击我</a>获取最新token把Qiniu.uploader({uptoken: 'xxx'})替换下</h2>
    <span id='pickfiles'>上传按钮</span>
    <div class="progress">{{progress}}</div>
    <el-upload
      class="avatar-uploader"
      action="''"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
  data() {
    return {
      progress: '',
      imageUrl: '',
      dataParam: ''
    }
  },
  mounted() {
    this.initQiniu()
  },
  methods: {
    initQiniu() {
      console.log(1)
      /* eslint-disable */
      Qiniu.uploader({
        runtimes: 'html5,flash,html4',
        browse_button: 'pickfiles',
        flash_swf_url: 'https://cdn.bootcss.com/plupload/2.1.1/Moxie.swf',
        chunk_size: '4mb',
        uptoken: 'anEC5u_72gw1kZPSy3Dsq1lo_DPXyvuPDaj4ePkN:UQXiGIgZWbLbSaR2AlreHmUHGtY=:eyJkZWxldGVBZnRlckRheXMiOjEsInNjb3BlIjoianNzZGsiLCJkZWFkbGluZSI6MTUzNzAyNzAzN30=',
        // uptoken_url: 'http://jssdk.demo.qiniu.io/uptoken',
        domain: '7fvhtu.com1.z0.glb.clouddn.com',
        get_new_uptoken: false,
        // unique_names: true,
        auto_start: true,
        max_retries: 3,
        filters: {
          max_file_size: '10000mb',
          prevent_duplicates: false
          // Specify what files to browse for
          // mime_types: [
          //     {title : 'apk files', extensions : 'apk'} // 限定apk后缀上传格式上传
          // ]
        },
        init: {
          'FilesAdded': (up, files) => {
              console.log('文件就绪', files)
          },
          BeforeUpload: (up, file) => {
            console.log('上传之前', file)
          },
          UploadProgress: (up, file) => {
            console.log('上传中 file',file)
            this.progress = file.percent + '%'
          },
          FileUploaded: (up, file, info) => {
            console.log('文件上传完毕')
            console.log(info)
          },
          Error: (up, err, errTip) => {
            console.log('上传失败', err)
          },
          Key: (up, file) => {}
        }
      })
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    update(file){        
      let param = new FormData() // 创建form对象
      param.append('key',file.name);// 通过append向form对象添加数据
      param.append('chunk','0') // 添加form表单中其他数据
      param.append('token', 'anEC5u_72gw1kZPSy3Dsq1lo_DPXyvuPDaj4ePkN:wn3ej1PbkdtA4WyWDQFcqsHxoDs=:eyJkZWxldGVBZnRlckRheXMiOjEsInNjb3BlIjoianNzZGsiLCJkZWFkbGluZSI6MTUzNzAyODU0M30=')
      console.log(param.get('file')) // FormData私有类对象，访问不到，可以通过get判断值是否传进去
      let config = {
        headers:{'Content-Type':'multipart/form-data'}
      };  //添加请求头
      console.log(param)
    },
    beforeAvatarUpload(file) {
      console.log(file)
      let param = new FormData() // 创建form对象
      param.append('key',file.name);// 通过append向form对象添加数据
      param.append('token', 'HZwZZ2-pm3JThoqcnHi9U7F_3L94DhLLQ7ovbKvc:GsXoDub_Feyl-5bT7arOfOSx5FY=:eyJzY29wZSI6InN1cGVyc2hvcGVyIiwiZGVhZGxpbmUiOjE1MzcwNjM0NTh9')
      console.log(param)
      let config = {
        headers:{'Content-Type':'multipart/form-data'}
      };  //添加请求头
      axios.post('http://7fvhtu.com1.z0.glb.clouddn.com', param, config)
      .then(response=>{
        console.log(response)
      })
      // const isJPG = file.type === 'image/jpeg';
      // const isLt2M = file.size / 1024 / 1024 < 2;
      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!');
      // }
      // if (!isLt2M) {
      //   this.$message.error('上传头像图片大小不能超过 2MB!');
      // }
      // return isJPG && isLt2M;         
    }
  }
}
</script>

<style>
  /* #pickfiles {
    padding: 10px;
    background: #000;
    border-radius: 5px;
    color: #fff;
  } */
  .link {
    color: red;
  }
  .progress {
    color: red;
    font-size: 30px;
    margin-top: 20px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>