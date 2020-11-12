<template>
  <div>
    <div class="tou">
      <p>个人资料设置</p>
    </div>
    <div class="shenzi">
      <p>
        账号：
        <el-input placeholder="请输入内容" v-model="input" :disabled="true" class="in"></el-input>
      </p>
      <p>
        手机号：
        <el-input v-model="input1" placeholder="请输入内容" class="in" readonly="false"></el-input>
      </p>
      <p>
        邮箱：
        <el-input v-model="input2" placeholder="请输入内容" class="in"></el-input>
      </p>
      <p>
        昵称：
        <el-input v-model="input3" placeholder="请输入内容" class="in"></el-input>
      </p>
      <p>
        旧密码：
        <el-input v-model="input4" placeholder="请输入内容" class="in"></el-input>
      </p>
      <p>
        新密码：
        <el-input v-model="input5" placeholder="请输入内容" class="in"></el-input>
      </p>
      <p>
        确认密码：
        <el-input v-model="input6" placeholder="请输入内容" class="in"></el-input>
      </p>
      <p>
          <!-- <el-button type="success" class="button" @click="tijiao()">登录</el-button> -->
        <el-button type="success" class="tijiao" @click.native="tijiao()">提交</el-button>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "admin",
      input1: "159****5311",
      input2: "984424170@.qq.com",
      input3: "符号",
      input4: "",
      input5: "",
      input6: ""
    };
    
  },
  methods:{
     
    tijiao() {
        // alert("请填写完整信息！");
      if (
        this.input == "" ||
        this.input1 == "" ||
        this.input2 == "" ||
        this.input3 == "" ||
        this.input4 == "" ||
        this.input5 == "" ||
        this.input6 == ""
      ) {
        alert("请填写完整信息！");
      }else{
        alert("设置成功");
      }
      
    }
  }
};
</script>
<style scoped>
/* *{
  border: 1px solid red
} */
.tou {
  width: 1100px;
  height: 30px;
  background-color: rgb(234, 237, 241);
  margin-left: 176px;
  border-left: 2px solid rgb(231, 224, 224);
  padding-top: 13px;
  /* margin-top: 40px; */
  border-bottom: 1px solid rgb(184, 180, 180);
}
.tou p {
  /* line-height: 28px; */
  margin-left: 20px;
  padding-left: 5px;
  border-left: 4px solid rgb(88, 173, 3);
  color: rgb(158, 158, 158);
}
.shenzi {
  width: 430px;
  height: 450px;
  /* border: 1px solid red; */
  margin-left: 450px;
  padding-top: 50px;
}
.in {
  width: 280px;
  float: right;
  margin-top: -10px;
  margin-left: 20px;
}
.shenzi p {
  float: right;
  margin-top: 20px;
  text-align: center;
}
.tijiao {
  margin-right: 120px;
  /* float: right; */
  /* z-index: 10; */
}
</style>