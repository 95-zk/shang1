<template>
  <div>
    <div class="tou">
      <p>机器人服务数据</p>
    </div>
    <div class="tou2">
      <div class="tou2-tou">
        <p>
          机器人服务数据
          <span>?</span>
        </p>
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
      </div>
      <div class="tou2-ti">
        <div class="shang">
          <p>
            <span>总会话量</span>
            <br />
            <span>200</span>
          </p>
        </div>
        <div>
          <p class="p1">有效会话量 &nbsp;&nbsp; 0</p>
          <p class="p2">无效会话量 &nbsp;&nbsp; 0</p>
        </div>
      </div>
      <div class="tou2-ti">
        <div class="shang">
          <p>
            <span>有效会话量</span>
            <br />
            <span>5000</span>
          </p>
        </div>
        <div>
          <p class="p1">解决量 &nbsp;&nbsp; 0</p>
          <p class="p2">解决率 &nbsp;&nbsp; --</p>
        </div>
      </div>
      <div class="tou2-ti">
        <div class="shang">
          <p>
            <span>无效会话量</span>
            <br />
            <span>0</span>
          </p>
        </div>
        <div>
          <p class="p1">用户直接离开 &nbsp;&nbsp; 0</p>
          <p class="p2">用户转接人工 &nbsp;&nbsp; 0</p>
        </div>
      </div>
      <div class="tou2-ti">
        <div class="shang">
          <p>
            <span>提问总数</span>
            <br />
            <span>0</span>
          </p>
        </div>
        <div>
          <p class="p1">匹配提问数 &nbsp;&nbsp; 0</p>
          <p class="p2">匹配率 &nbsp;&nbsp; --</p>
        </div>
      </div>
      <div style="clear: both"></div>
    </div>
    <div class="tou3">
      <!-- <div class="tou3-tou">
        <p>在线服务数据趋势</p>
      </div>-->
      <div class="tou2-tou">
        <p>
          会话量
          <span>?</span>
        </p>
      </div>
      <div class="you-shang">
        <!-- <span class="active">aaa</span> -->
        <el-date-picker
          v-model="value2"
          align="right"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions"
        ></el-date-picker>
      </div>
      <img
        src="../assets/E@BE8}31M{NQHXS(ZNL3TW3.png"
        width="1060"
        height="300"
        style="margin:50px 0 0 5px;"
      />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
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
.block {
  margin-left: 500px;
  margin-top: 20px;
  margin-bottom: 10px;
}
.you-shang {
  float: right;
  margin-right: 20px;
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
  height: 190px;
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
.tou2-ti {
  width: 190px;
  height: 130px;
  margin-left: 29px;
  float: left;
  border: 1px solid rgb(184, 180, 180);
}

.shang p {
  font-size: 15px;
  text-align: center;
  padding-top: 10px;
  /* margin-left: 70px;
  margin-top: 5px; */
}
.shang {
  height: 65px;
  border-bottom: 1px solid rgb(184, 180, 180);
}
.p1 {
  margin-top: 10px;
  font-size: 14px;
  margin-left: 10px;
}
.p2 {
  /* margin-top: 10px; */
  font-size: 14px;
  margin-left: 10px;
}
.xia p {
  font-size: 14px;
  margin-top: 20px;
  margin-left: 10px;
}
.tou3 {
  width: 1070px;
  height: 450px;
  border: 1px solid rgb(184, 180, 180);
  margin: 10px 0 0 185px;
}
.tou3-tou p {
  margin-left: 10px;
  padding-top: 7px;
}
.tou3-tou {
  width: 1070px;
  height: 35px;
  background-color: rgb(234, 237, 241);
  border-bottom: 1px solid rgb(184, 180, 180);
  margin-bottom: 10px;
}
</style>