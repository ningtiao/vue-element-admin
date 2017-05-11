<template>
    <div class="login-wrap">
      <el-form  label-position="left" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm login-container">
        <h3 class="title">用户登录</h3>
        <el-form-item prop="username">
          <el-input type="text" v-model="ruleForm.username"  auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password"  v-model="ruleForm.password" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-checkbox class="remember">记住密码</el-checkbox>
        <el-form-item style="width:100%;">
          <el-button type="primary" style="width:100%;"  @click="submitForm('ruleForm')" :loading="logining">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script type="text/ecmascript-6">
import { requestLogin } from '../api/api';
const ERR_OK = 0;
export default {
  data() {
    return {
      logining: false, //定义loading默认为false
      ruleForm: {            //username和password默认为空
        username: '',
        password:''
      },
      rules: {          //rules前端验证
          username: [
            { required: true, message: '请输入账号', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ]        
      }
    }
  },
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.logining = true;
            setTimeout(() => {
              this.logining = false;
              this.$router.push({ path: '/table' });//如果请求成功就让他3秒跳转路由
            }, 2000);
          } else {
            this.$ruleForm.error({
              title: '错误',
              message: '请输入正确的用户名密码',
              offset: 100
            });
            console.log('error submit!!');
            return false;
          }
        });
      },
  }
}
</script>

<style lang="less" scoped>
.login-container {
    box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.06);
    border-radius: 5px;
    margin: 180px auto;
    width: 350px;
    padding: 30px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember{
      margin: 0px 0px 35px 0px;
    }
</style>