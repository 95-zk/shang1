<template>
  <div>
    <div class="tou">
      <p>总览统计</p>
    </div>
    <div class="tou2">
      <div class="tou2-tou">
        <p>
          在线服务数据
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
            <span>会话量</span>
            <br />
            <span>200</span>
          </p>
        </div>
        <div>
          <p class="p1">接入率 &nbsp;&nbsp; --</p>
          <p class="p2">转接量 &nbsp;&nbsp; 0</p>
        </div>
      </div>
      <div class="tou2-ti">
        <div class="shang">
          <p>
            <span>总消息量</span>
            <br />
            <span>5000</span>
          </p>
        </div>
        <div>
          <p class="p1">答问比 &nbsp;&nbsp; --</p>
          <p class="p2">30s应答率 &nbsp;&nbsp; --</p>
        </div>
      </div>
      <div class="tou2-ti">
        <div class="shang">
          <p>
            <span>平均会话时长</span>
            <br />
            <span>--</span>
          </p>
        </div>
        <div>
          <p class="p1">平均首次响应时间 &nbsp;&nbsp; --</p>
          <p class="p2">平均响应时间 &nbsp;&nbsp; --</p>
        </div>
      </div>
      <div class="tou2-ti">
        <div class="shang">
          <p>
            <span>相对满意度</span>
            <br />
            <span>--</span>
          </p>
        </div>
        <div class="xia">
          <p>参评率 &nbsp;&nbsp; --</p>
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
    <div class="tou4">
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
      <img src="../assets/99[X]Q)@PHD[R72NU6PINAM.png" width="1060" />
      <div style="margin-left: 15px"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value1: "",
      value2: "",
      pickerOptions2: {
        shortcuts: [
          {
            text: "本月",
            onClick(picker) {
              picker.$emit("pick", [new Date(), new Date()]);
            }
          },
          {
            text: "今年至今",
            onClick(picker) {
              const end = new Date();
              const start = new Date(new Date().getFullYear(), 0);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近六个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setMonth(start.getMonth() - 6);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value1: "",
      value2: ""
    };
  }
  // methods: {
  //     open() {
  //       this.$message('这是一条消息提示');
  //     },
  //   }
};
</script>
<style  scoped>
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
.tou2-ti {
  width: 230px;
  height: 140px;
  margin-left: 29px;
  float: left;
  border: 1px solid rgb(184, 180, 180);
}

.shang p {
  font-size: 15px;
  padding-top: 10px;
  margin-left: 70px;
  margin-top: 5px;
}
.shang {
  height: 75px;
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
.tou4 {
  width: 1070px;
  /* height: 370px; */
  border: 1px solid rgb(184, 180, 180);
  margin: 10px 0 0 185px;
}
.tou4-tou p {
  margin-left: 10px;
  padding-top: 7px;
}
.tou4-tou {
  width: 1070px;
  height: 35px;
  background-color: rgb(234, 237, 241);
  border-bottom: 1px solid rgb(184, 180, 180);
  margin-bottom: 10px;
}
</style>