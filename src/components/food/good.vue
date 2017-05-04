<template>
  <div>
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-date"></i> 组件</el-breadcrumb-item>
            <el-breadcrumb-item>子组件</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="审核意见" prop="region">
          <el-select  v-model="value" placeholder="请选择" @change="selectVal">
            <el-option v-for="(item, index) in options"  :label="item.label" :key="index" :value="item.value"></el-option>
          </el-select>
      </el-form-item>
      <el-form-item label="审核内容">
          <el-input type="textarea" @change="onChange" v-model="textarea" :disabled="btnshow"></el-input>
      </el-form-item>
       <el-form-item>
        <el-button type="primary" @click="sendMsgTogood" :disabled="onChang">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      options: {
        type: Array
      }
    },
    data() {
      return {
        ruleForm: {
          region: '',
          desc: ''
        },
        textarea:'',
        onChang: true,
        btnshow: false,
        value:[],
        msg:[]
      }
    },
    methods: {
        submitForm() {
          console.log('submit!');
        },
        sendMsgTogood() {
          this.$emit("listen","我是子组件")
          console.log("提交")
        },
        onChange(){
          if(this.value === "2" && this.textarea !== ''){
            this.onChang = false
            console.log(this.textarea+"5555")
          } else if (this.value === "2" && this.textarea === '') {
            this.onChang = true
            console.log(this.textarea+"5555")
          }
        },
      selectVal: function(val) {
          console.log(this.value)
            if (val === "2") {
            this.textarea = '',
            this.onChang = true,
            this.btnshow = false
          } else if (val === "0") {
            this.textarea = '',
            this.onChang = true,
            this.btnshow = false
          } else if (val === "1"){
            this.textarea = '',
            this.onChang = false,
            this.btnshow = false
          }
        }
      }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>