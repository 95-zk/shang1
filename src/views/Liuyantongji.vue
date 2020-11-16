<template>
  <div>
    <div class="tou">
      <p>留言报表</p>
    </div>
    <div class="tou2">
      <div class="tou2-tou">
        <p>留言报表</p>
        <div class="you11">
          <el-button :plain="true" @click="open" class="a1">导出数据</el-button>
          <el-button :plain="true" @click="open" class="a3">昨天</el-button>
          <el-button :plain="true" @click="open" class="a2">近7天</el-button>
          <el-button :plain="true" @click="open" class="a1">最近30天</el-button>
          <el-date-picker
            v-model="value2"
            type="monthrange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始月份"
            end-placeholder="结束月份"
            :picker-options="pickerOptions2"
            size="mini"
          ></el-date-picker>
        </div>
        <div class="p1">
            <p>总留言量</p>
            <p>200</p>
        </div>
        <div class="p2">
            <p>待处理留言数量</p>
            <p>5000</p>
        </div>
        <div class="p3">
            <p>已处理留言数量</p>
            <p>5000</p>
        </div>
      </div>
      <div class="tou3">
        <div class="tou3-tou">
          <p>留言来源</p>
        </div>
        <img src="../assets/1K@2WU)Y6NC@_YQOWVMM{K0.png" width="530" >
      </div>
      <div class="tou4">
        <div class="tou4-tou">
          <p>留言处理率</p>
        </div>
        <img src="../assets/]27F6`Y@EOZ}R0@D){A[QVF.png" width="530" >
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.p1{
    border: 1px solid rgb(184, 180, 180);
    width: 150px;
    height: 70px;
    margin: 20px 0 0 20px;
    /* text-align: center */
    float: left;
}
.p2{
    border: 1px solid rgb(184, 180, 180);
    width: 150px;
    height: 70px;
    margin: 20px 0 0 20px;
    /* text-align: center */
    float: left;
}
.p3{
    border: 1px solid rgb(184, 180, 180);
    width: 150px;
    height: 70px;
    margin: 16px 0 0 20px;
    /* text-align: center */
    float: left;
}
.a1 {
  border: 1px solid rgb(184, 180, 180);
  padding: 3px 6px;
  margin-right: 10px;
  margin-left: 0px;
  cursor: pointer;
}
.a2 {
  border: 1px solid rgb(184, 180, 180);
  padding: 3px 16px;
  cursor: pointer;
  margin-left: 0px;
}
.a3 {
  border: 1px solid rgb(184, 180, 180);
  padding: 3px 25px;
  margin-left: 10px;
  margin-left: 0px;
  cursor: pointer;
}
.you11 {
  float: right;
  margin-right: 10px;
  margin-top: -24px;
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
.tou2 {
  width: 1070px;
  height: 200px;
  border: 1px solid rgb(184, 180, 180);
  margin: 10px 0 0 185px;
}
.tou2-tou {
  width: 1070px;
  height: 35px;
  background-color: rgb(234, 237, 241);
  border-bottom: 1px solid rgb(184, 180, 180);
  margin-bottom: 10px;
}
.tou2-tou p {
  margin-left: 10px;
  padding-top: 7px;
}
.tou2-tou p span {
  background-color: rgb(238, 142, 16);
  border-radius: 50%;
  padding: 0px 6px;
  color: ghostwhite;
  margin-left: 5px;
}
.tou3 {
  width: 530px;
  height: 446px;
  border: 1px solid rgb(184, 180, 180);
  /* margin: 10px 0 0 185px; */
  margin-top: 175px;
  background-color: rgba(242, 242, 242);
}
.tou3-tou {
  width: 530px;
  height: 35px;
  background-color: rgb(234, 237, 241);
  border-bottom: 1px solid rgb(184, 180, 180);
  margin-bottom: 10px;
}
.tou3-tou p {
  margin-left: 10px;
  padding-top: 7px;
}

.tou4 {
  width: 530px;
  height: 446px;
  border: 1px solid rgb(184, 180, 180);
  /* margin: 10px 0 0 185px; */
  /* margin-top: 175px; */
  margin-left: 540px;
  margin-top: -448px;
  margin-bottom: 30px;
  background-color: rgba(242, 242, 242);
}
.tou4-tou {
  width: 530px;
  height: 35px;
  background-color: rgb(234, 237, 241);
  border-bottom: 1px solid rgb(184, 180, 180);
  margin-bottom: 10px;
}
.tou4-tou p {
  margin-left: 10px;
  padding-top: 7px;
}
</style>