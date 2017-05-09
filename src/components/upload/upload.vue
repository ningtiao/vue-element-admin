<template>
  <div class="upload">
    <div>
      <h1 class="title">照片墙</h1>
    </div>
    <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :file-list="fileList2"
      :on-remove="handleRemove">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog v-model="dialogVisible" size="tiny">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        fileList2: [{name: 'dog.jpeg', url: '../../static/dog.png'}]
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
</style>