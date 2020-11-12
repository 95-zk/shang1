<template>
  <div class="abb">
    <div class="tou">
      <p>系统首页</p>
    </div>
    <div class="tou2">
      <div class="tou2-tou">
        <p>
          数据总览
          <span>?</span>
        </p>
      </div>
      <div class="tou2-ti">
        <div class="shang">
          <img src="../assets/6@DR}99X@ER%TKU7N$44MVK.png" />
          <p>
            <span>正在咨询人数</span>
            <br />
            <span>0.00%</span>
          </p>
        </div>
        <div class="xia">
          <p>当前在线客服数 &nbsp;&nbsp; 200</p>
        </div>
      </div>
      <div class="tou2-ti">
        <div class="shang">
          <img src="../assets/%8XYRNK(UAD0$F~K1WV)2JI.png" />
          <p>
            <span>正在排队人数</span>
            <br />
            <span>5000</span>
          </p>
        </div>
        <div class>
          <p class="p1">今日平均排队时长 &nbsp;&nbsp; --</p>
          <p class="p2">今日平均排队总数 &nbsp;&nbsp; 0</p>
        </div>
      </div>
      <div class="tou2-ti">
        <div class="shang">
          <img src="../assets/9AES(]N]HZ7CH3K3@8HK3BY.png" />
          <p>
            <span>今日会话量</span>
            <br />
            <span>5000</span>
          </p>
        </div>
        <div class="xia">
          <p>今日平均会话时长 &nbsp;&nbsp; --</p>
        </div>
      </div>
      <div class="tou2-ti">
        <div class="shang">
          <img src="../assets/K0~~6IYN`7W)`KQFJX_4@FY.png" />
          <p>
            <span>今日接入会话量</span>
            <br />
            <span>1000</span>
          </p>
        </div>
        <div class="xia">
          <p>接入率 &nbsp;&nbsp; 0.00%</p>
        </div>
      </div>
      <div class="tou2-ti">
        <div class="shang">
          <img src="../assets/4CWTHAX@9@EN1DK)`C58YZI.png" />
          <p>
            <span>今日相对满意度</span>
            <br />
            <span>0.00%</span>
          </p>
        </div>
        <div class="xia">
          <p>参评率 &nbsp; &nbsp; 0.00%</p>
        </div>
      </div>
      <div style="clear: both"></div>
    </div>
    <div class="tou3">
      <div class="tou3-tou">
        <p>在线服务数据趋势</p>
      </div>
      <div class="you-shang">
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
      <div class="tou4-tou">
        <p>在线服务数据趋势</p>
      </div>
      <div style="margin-left: 15px">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="name" label="客服" align="center"></el-table-column>
          <el-table-column prop="name1" label="在线状态" align="center"></el-table-column>
          <el-table-column prop="address" label="当前接待量" align="center"></el-table-column>
          <el-table-column prop="address2" label="累计会话量" align="center"></el-table-column>
          <el-table-column prop="address3" label="累计消息量" align="center"></el-table-column>
          <el-table-column prop="address4" label="相对满意量" align="center"></el-table-column>
          <el-table-column prop="address5" label="累计在线时间" align="center"></el-table-column>
          <el-table-column prop="address6" label="累计休息时长" align="center"></el-table-column>
        </el-table>
      </div>
      <div class="block">
        <!-- <span class="demonstration">直接前往</span> -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage3"
          :page-size="100"
          layout="prev, pager, next, jumper"
          :total="1000"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
// import Gongyong from '../components/Gongyong.vue'
export default {
  // name: "xitongshouye",
  // components:{
  //     Gongyong
  // }
  methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
  data() {
    return {
      currentPage3: 5,
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
      tableData: [
        {
        //   date: "2016-05-02",
          name: "符号",
          name1: "在线(1小时18分)",
          address: "0",
          address2: "0",
          address3: "0",
          address4: "10%",
          address5: "1小时18分",
          address6: "1小时18分",
        },
        {
        //   date: "2016-05-04",
          name: "符号",
          name1: "在线(1小时18分)",
          address: "0",
          address2: "0",
          address3: "0",
          address4: "10%",
          address5: "1小时18分",
          address6: "1小时18分",
        },
        {
        //   date: "2016-05-01",
          name: "符号",
          name1: "在线(1小时18分)",
          address: "0",
          address2: "0",
          address3: "0",
          address4: "10%",
          address5: "1小时18分",
          address6: "1小时18分",
        },
        {
        //   date: "2016-05-03",
          name: "符号",
          name1: "在线(1小时18分)",
          address: "0",
          address2: "0",
          address3: "0",
          address4: "10%",
          address5: "1小时18分",
          address6: "1小时18分",
        },
        {
        //   date: "2016-05-03",
          name: "符号",
          name1: "在线(1小时18分)",
          address: "0",
          address2: "0",
          address3: "0",
          address4: "10%",
          address5: "1小时18分",
          address6: "1小时18分",
        }
      ]
    };
  }
};
</script>
<style scoped>
.block{
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
.tou2-tou span {
  background-color: rgb(238, 142, 16);
  border-radius: 50%;
  padding: 0px 6px;
  color: ghostwhite;
  margin-left: 5px;
}
.tou2-ti {
  width: 200px;
  height: 140px;
  margin-left: 10px;
  float: left;
  border: 1px solid rgb(184, 180, 180);
}
.tou2-ti img {
  width: 60px;
  height: 50px;
  float: left;
}
.shang p {
  font-size: 14px;
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

