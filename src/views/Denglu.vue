<template>
  <div class="bei">
    <div class="denglu">
      <img src="../assets/2.png" />
      <h3>WEB在线客服管理系统</h3>
      <el-input
        placeholder="请输入内容"
        v-model="name"
        clearable
        prefix-icon="el-icon-s-custom"
        class="inp"
      ></el-input>
      <el-input
        placeholder="请输入密码"
        v-model="password"
        show-password
        prefix-icon="el-icon-s-goods"
        class="inp2"
      ></el-input>
      
      <el-button type="success" class="button" @click="denglu1()">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      password: "",
    };
  },
  methods: {
    denglu1(){
      if(this.name==''||this.password==''){
        alert("账号或密码不能为空");
      }
      if(this.name=='admin'||this.password=='123'){
         this.$router.push({
          path:'/xitongshouye',
          
        })
        
      }
    }
  }
};
</script>
<style scoped>
.bei {
  width: 100%;
  height: 587px;
  background: url("../assets/1.png");
  background-repeat: no-repeat;
}
.denglu {
  width: 370px;
  height: 440px;
  background-color: rgba(255, 255, 255, 0.4);
  position: absolute;
  left: 450px;
  top: 100px;
}
.denglu img {
  width: 80px;
  margin: 30px 0 0 150px;
}
.denglu h3 {
  text-align: center;
}
.button {
  width: 300px;
  height: 40px;
  margin: 20px 35px;
  background-color: lightgreen;
  /* text-align: center; */
}
.inp {
  width: 300px;
  height: 40px;
  margin: 50px 0 0 35px;
  background-color: transparent;
}
.inp2{
  width: 300px;
  height: 40px;
  margin: 20px 0 0 35px;
}
</style>