<template>
  <div>
    <div class="tou">
      <p>公告列表</p>
    </div>
    <div class="zuo">
      <el-input
        v-model="input"
        placeholder="请输入内容"
        suffix-icon="el-icon-search"
        size="mini"
        class="zuo-shou"
      ></el-input>
      <p class="zuo-hui">会话列表</p>
      <p class="zuo-jie"><span>当前接待人数：1</span></p>
      <img src="../assets/ETG496O[9XEZNISJ[VV0DPI.png" width="190">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: ""
    };
  }
};
</script>
<style scoped>
.zuo-jie{
    font-size: 13px;
    background-color:  rgb(199, 198, 198);
    width: 180px;
    height: 20px;
    /* padding: 1px 5px; */
    margin-left: 8px;
}
.zuo-jie span{
    float: right;
    margin-right: 8px;
    color: rgb(85, 83, 83);
}
.zuo-hui{
    padding: 10px 0;
    margin-left: 10px;
    font-size: 15px;
   color:  rgb(110, 107, 107);
}
.zuo-shou {
  width: 170px;
  margin: 5px 0 0 15px;
}
.tou {
  width: 1085px;
  height: 30px;
  background-color: rgb(234, 237, 241);
  margin-left: 176px;
  border-left: 2px solid rgb(231, 224, 224);
  padding-top: 13px;
  border-bottom: 1px solid rgb(184, 180, 180);
}
.tou p {
  /* line-height: 28px; */
  margin-left: 20px;
  padding-left: 5px;
  border-left: 4px solid rgb(88, 173, 3);
  color: rgb(158, 158, 158);
}
.zuo {
  width: 200px;
  height: 500px;
  /* background-color: rgb(248, 250, 250); */
  border: 1px solid rgb(228, 225, 225);
  margin: 10px 0 0 185px;
}
</style>