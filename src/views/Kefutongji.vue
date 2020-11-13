<template>
  <div>
    <div class="tou">
      <p>客服统计</p>
    </div>
    <div class="tou2">
      <div class="tou2-tou">
        <p>在线服务数据</p>
      </div>
      <div class="bian">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="工作量" name="first">
            工作量
            <span class="wen">?</span>
            <div class="ju">
              <el-button :plain="true" @click="open" class="a1">导出数据</el-button>
              <el-button :plain="true" @click="open" class="a3">昨天</el-button>
              <el-button :plain="true" @click="open" class="a2">近7天</el-button>
              <el-button :plain="true" @click="open" class="a1">最近30天</el-button>
              <el-date-picker
                type="dates"
                v-model="value4"
                placeholder="选择一个或多个日期"
                size="mini"
                class="q1"
              ></el-date-picker>
              <el-input
                v-model="input"
                placeholder="请输入内容"
                suffix-icon="el-icon-search"
                size="mini"
                class="q"
              ></el-input>
            </div>
            <div class="qwes">
              <el-table
                :data="tableData"
                style="width: 100%"
                :default-sort="{prop: 'date', order: 'descending'}"
                size="mini"
                fit="true"
                border="true"
                class="aaaaa"
                :cell-style="{padding:'0px'}"
                :row-style="{size:'10px'}"
              >
                <el-table-column prop="name1" label="姓名" width="60px" align="center"></el-table-column>
                <el-table-column prop="name2" label="接入会话量" sortable width="106px" align="center"></el-table-column>
                <el-table-column prop="name3" label="未回复会话量" sortable width="118px" align="center"></el-table-column>
                <el-table-column prop="name4" label="未回复率" sortable width="95px" align="center"></el-table-column>
                <el-table-column prop="name5" label="转接量" sortable width="85px" align="center"></el-table-column>
                <el-table-column prop="name6" label="无效会话量" sortable width="106px" align="center"></el-table-column>
                <el-table-column prop="name7" label="留言处理量" sortable width="106px" align="center"></el-table-column>
                <el-table-column prop="name8" label="登录总时长" sortable width="106px" align="center"></el-table-column>
                <el-table-column prop="name9" label="在线总时长" sortable width="106px" align="center"></el-table-column>
                <el-table-column prop="name10" label="在线时长占比" sortable width="118px" align="center"></el-table-column>
                <el-table-column prop="name11" label="离开总时长" sortable width="106px" align="center"></el-table-column>
                <el-table-column prop="name12" label="离开起时长占比" sortable width="130px" align="center"></el-table-column>
                <el-table-column prop="name13" label="休息总时长" sortable width="106px" align="center"></el-table-column>
                <el-table-column
                  prop="address"
                  label="休息总时长好占比"
                  :formatter="formatter"
                  width="120px"
                ></el-table-column>
              </el-table>
            </div>
          </el-tab-pane>
          <el-tab-pane label="工作质量" name="second">
            工作质量报表
            <div class="ju">
              <el-button :plain="true" @click="open" class="a1">导出数据</el-button>
              <el-button :plain="true" @click="open" class="a3">昨天</el-button>
              <el-button :plain="true" @click="open" class="a2">近7天</el-button>
              <el-button :plain="true" @click="open" class="a1">最近30天</el-button>
              <el-date-picker
                type="dates"
                v-model="value4"
                placeholder="选择一个或多个日期"
                size="mini"
                class="q1"
              ></el-date-picker>
              <el-input
                v-model="input"
                placeholder="请输入内容"
                suffix-icon="el-icon-search"
                size="mini"
                class="q"
              ></el-input>
            </div>
            <div class="qwes">
              <el-table
                :data="tableData2"
                style="width: 100%"
                :default-sort="{prop: 'date', order: 'descending'}"
                size="mini"
                fit="true"
                border="true"
                class="aaaaa"
                :cell-style="{padding:'0px'}"
                :row-style="{size:'10px'}"
              >
                <el-table-column prop="name1" label="姓名" align="center"></el-table-column>
                <el-table-column prop="name2" label="平均首次响应时间" sortable align="center"></el-table-column>
                <el-table-column prop="name3" label="平均响应时间" sortable align="center"></el-table-column>
                <el-table-column prop="name4" label="平均会话时长" sortable align="center"></el-table-column>
                <el-table-column prop="name5" label="相对满意度" sortable align="center"></el-table-column>
                <el-table-column prop="name6" label="问题解决率" sortable align="center"></el-table-column>
              </el-table>
            </div>
          </el-tab-pane>
          <el-tab-pane label="绩效报表" name="third">
            绩效报表
            <span class="wen">?</span>
            <div class="ju">
              <el-button :plain="true" @click="open" class="a1">导出数据</el-button>
              <el-button :plain="true" @click="open" class="a3">昨天</el-button>
              <el-button :plain="true" @click="open" class="a2">近7天</el-button>
              <el-button :plain="true" @click="open" class="a1">最近30天</el-button>
              <el-date-picker
                type="dates"
                v-model="value4"
                placeholder="选择一个或多个日期"
                size="mini"
                class="q1"
              ></el-date-picker>
              <el-input
                v-model="input"
                placeholder="请输入内容"
                suffix-icon="el-icon-search"
                size="mini"
                class="q"
              ></el-input>
            </div>
            <div class="qwes">
              <el-table
                :data="tableData3"
                style="width: 100%"
                :default-sort="{prop: 'date', order: 'descending'}"
                size="mini"
                fit="true"
                border="true"
                class="aaaaa"
                :cell-style="{padding:'0px'}"
                :row-style="{size:'10px'}"
              >
                <el-table-column prop="name1" label="排名" align="center"></el-table-column>
                <el-table-column prop="name2" label="姓名" align="center"></el-table-column>
                <el-table-column prop="name3" label="总分" sortable align="center"></el-table-column>
                <el-table-column prop="name4" label="转化订单数"  align="center">
                  <el-table-column prop="name41" label="数量(单)" width="120" align="center"></el-table-column>
                  <el-table-column prop="name42" label="得分" width="120" align="center"></el-table-column>
                </el-table-column>
                <el-table-column prop="name5" label="转化订单金额"  align="center">
                    <el-table-column prop="name51" label="金额(元)" width="120" align="center"></el-table-column>
                  <el-table-column prop="name52" label="得分" width="120" align="center"></el-table-column>
                </el-table-column>
                <el-table-column prop="name6" label="接入会话量"  align="center">
                    <el-table-column prop="name61" label="数量(条)" width="120" align="center"></el-table-column>
                  <el-table-column prop="name62" label="得分" width="120" align="center"></el-table-column>
                </el-table-column>
                <el-table-column prop="name7" label="平均首次响应时间"  width="106px" align="center">
                    <el-table-column prop="name71" label="时间(秒)" width="120" align="center"></el-table-column>
                  <el-table-column prop="name72" label="得分" width="120" align="center"></el-table-column>
                </el-table-column>
                <el-table-column prop="name8" label="平均响应时间"  width="106px" align="center">
                    <el-table-column prop="name81" label="时间(秒)" width="120" align="center"></el-table-column>
                  <el-table-column prop="name82" label="得分" width="120" align="center"></el-table-column>
                </el-table-column>
                <el-table-column prop="name9" label="平均会话时间"  width="106px" align="center">
                    <el-table-column prop="name91" label="时间(秒)" width="120" align="center"></el-table-column>
                  <el-table-column prop="name92" label="得分" width="120" align="center"></el-table-column>
                </el-table-column>
                <el-table-column prop="name10" label="服务满意度"  width="118px" align="center">
                    <el-table-column prop="name101" label="百分比(%)" width="120" align="center"></el-table-column>
                  <el-table-column prop="name102" label="得分" width="120" align="center"></el-table-column>
                </el-table-column>
              </el-table>
            </div>
          </el-tab-pane>
        </el-tabs>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      value4: "",
      input: "",
      //   tabindex: "0",
      activeName: "first",
      tableData: [
        {
          name1: "符号",
          name2: "32",
          name3: "2",
          name4: "33%",
          name5: "0",
          name6: "2",
          name7: "3",
          name8: "26小时36分",
          name9: "16小时36分",
          name10: "43%",
          name11: "6小时36分",
          name12: "22%",
          name13: "6小时36分",
          address: "22%"
        },
        {
          name1: "符号",
          name2: "32",
          name3: "2",
          name4: "33%",
          name5: "0",
          name6: "2",
          name7: "3",
          name8: "26小时36分",
          name9: "16小时36分",
          name10: "43%",
          name11: "6小时36分",
          name12: "22%",
          name13: "6小时36分",
          address: "22%"
        },
        {
          name1: "符号",
          name2: "32",
          name3: "2",
          name4: "33%",
          name5: "0",
          name6: "2",
          name7: "3",
          name8: "26小时36分",
          name9: "16小时36分",
          name10: "43%",
          name11: "6小时36分",
          name12: "22%",
          name13: "6小时36分",
          address: "22%"
        },
        {
          name1: "符号",
          name2: "32",
          name3: "2",
          name4: "33%",
          name5: "0",
          name6: "2",
          name7: "3",
          name8: "26小时36分",
          name9: "16小时36分",
          name10: "43%",
          name11: "6小时36分",
          name12: "22%",
          name13: "6小时36分",
          address: "22%"
        },
        {
          name1: "符号",
          name2: "32",
          name3: "2",
          name4: "33%",
          name5: "0",
          name6: "2",
          name7: "3",
          name8: "26小时36分",
          name9: "16小时36分",
          name10: "43%",
          name11: "6小时36分",
          name12: "22%",
          name13: "6小时36分",
          address: "22%"
        },
        {
          name1: "符号",
          name2: "32",
          name3: "2",
          name4: "33%",
          name5: "0",
          name6: "2",
          name7: "3",
          name8: "26小时36分",
          name9: "16小时36分",
          name10: "43%",
          name11: "6小时36分",
          name12: "22%",
          name13: "6小时36分",
          address: "22%"
        },
        {
          name1: "符号",
          name2: "32",
          name3: "2",
          name4: "33%",
          name5: "0",
          name6: "2",
          name7: "3",
          name8: "26小时36分",
          name9: "16小时36分",
          name10: "43%",
          name11: "6小时36分",
          name12: "22%",
          name13: "6小时36分",
          address: "22%"
        },
        {
          name1: "符号",
          name2: "32",
          name3: "2",
          name4: "33%",
          name5: "0",
          name6: "2",
          name7: "3",
          name8: "26小时36分",
          name9: "16小时36分",
          name10: "43%",
          name11: "6小时36分",
          name12: "22%",
          name13: "6小时36分",
          address: "22%"
        },
        {
          name1: "符号",
          name2: "32",
          name3: "2",
          name4: "33%",
          name5: "0",
          name6: "2",
          name7: "3",
          name8: "26小时36分",
          name9: "16小时36分",
          name10: "43%",
          name11: "6小时36分",
          name12: "22%",
          name13: "6小时36分",
          address: "22%"
        },
        {
          name1: "符号",
          name2: "32",
          name3: "2",
          name4: "33%",
          name5: "0",
          name6: "2",
          name7: "3",
          name8: "26小时36分",
          name9: "16小时36分",
          name10: "43%",
          name11: "6小时36分",
          name12: "22%",
          name13: "6小时36分",
          address: "22%"
        },
        {
          name1: "符号",
          name2: "32",
          name3: "2",
          name4: "33%",
          name5: "0",
          name6: "2",
          name7: "3",
          name8: "26小时36分",
          name9: "16小时36分",
          name10: "43%",
          name11: "6小时36分",
          name12: "22%",
          name13: "6小时36分",
          address: "22%"
        },
        {
          name1: "符号",
          name2: "32",
          name3: "2",
          name4: "33%",
          name5: "0",
          name6: "2",
          name7: "3",
          name8: "26小时36分",
          name9: "16小时36分",
          name10: "43%",
          name11: "6小时36分",
          name12: "22%",
          name13: "6小时36分",
          address: "22%"
        },
        {
          name1: "符号",
          name2: "32",
          name3: "2",
          name4: "33%",
          name5: "0",
          name6: "2",
          name7: "3",
          name8: "26小时36分",
          name9: "16小时36分",
          name10: "43%",
          name11: "6小时36分",
          name12: "22%",
          name13: "6小时36分",
          address: "22%"
        }
      ],

      tableData2: [
        {
          name1: "符号",
          name2: "32秒",
          name3: "32秒",
          name4: "4分33秒",
          name5: "100%",
          name6: "22%"
        },{
          name1: "符号",
          name2: "32秒",
          name3: "32秒",
          name4: "4分33秒",
          name5: "100%",
          name6: "22%"
        },{
          name1: "符号",
          name2: "32秒",
          name3: "32秒",
          name4: "4分33秒",
          name5: "100%",
          name6: "22%"
        },{
          name1: "符号",
          name2: "32秒",
          name3: "32秒",
          name4: "4分33秒",
          name5: "100%",
          name6: "22%"
        },{
          name1: "符号",
          name2: "32秒",
          name3: "32秒",
          name4: "4分33秒",
          name5: "100%",
          name6: "22%"
        },{
          name1: "符号",
          name2: "32秒",
          name3: "32秒",
          name4: "4分33秒",
          name5: "100%",
          name6: "22%"
        },{
          name1: "符号",
          name2: "32秒",
          name3: "32秒",
          name4: "4分33秒",
          name5: "100%",
          name6: "22%"
        },{
          name1: "符号",
          name2: "32秒",
          name3: "32秒",
          name4: "4分33秒",
          name5: "100%",
          name6: "22%"
        },{
          name1: "符号",
          name2: "32秒",
          name3: "32秒",
          name4: "4分33秒",
          name5: "100%",
          name6: "22%"
        },{
          name1: "符号",
          name2: "32秒",
          name3: "32秒",
          name4: "4分33秒",
          name5: "100%",
          name6: "22%"
        },
      ],

      tableData3: [
        {
          name1: "1",
          name2: "符号",
          name3: "90.00",
          name41: "3",
          name51: "300",
          name61: "3",
          name71: "10",
          name81: "85",
          name91: "94",
          name101: "100",
          name42: "5.00",
          name52: "5.00",
          name62: "30.00",
          name72: "10.00",
          name82: "10.00",
          name92: "10.00",
          name102: "20.00"
        },{
          name1: "1",
          name2: "符号",
          name3: "90.00",
          name41: "3",
          name51: "300",
          name61: "3",
          name71: "10",
          name81: "85",
          name91: "94",
          name101: "100",
          name42: "5.00",
          name52: "5.00",
          name62: "30.00",
          name72: "10.00",
          name82: "10.00",
          name92: "10.00",
          name102: "20.00"
        },{
          name1: "1",
          name2: "符号",
          name3: "90.00",
          name41: "3",
          name51: "300",
          name61: "3",
          name71: "10",
          name81: "85",
          name91: "94",
          name101: "100",
          name42: "5.00",
          name52: "5.00",
          name62: "30.00",
          name72: "10.00",
          name82: "10.00",
          name92: "10.00",
          name102: "20.00"
        },{
          name1: "1",
          name2: "符号",
          name3: "90.00",
          name41: "3",
          name51: "300",
          name61: "3",
          name71: "10",
          name81: "85",
          name91: "94",
          name101: "100",
          name42: "5.00",
          name52: "5.00",
          name62: "30.00",
          name72: "10.00",
          name82: "10.00",
          name92: "10.00",
          name102: "20.00"
        },{
          name1: "1",
          name2: "符号",
          name3: "90.00",
          name41: "3",
          name51: "300",
          name61: "3",
          name71: "10",
          name81: "85",
          name91: "94",
          name101: "100",
          name42: "5.00",
          name52: "5.00",
          name62: "30.00",
          name72: "10.00",
          name82: "10.00",
          name92: "10.00",
          name102: "20.00"
        },{
          name1: "1",
          name2: "符号",
          name3: "90.00",
          name41: "3",
          name51: "300",
          name61: "3",
          name71: "10",
          name81: "85",
          name91: "94",
          name101: "100",
          name42: "5.00",
          name52: "5.00",
          name62: "30.00",
          name72: "10.00",
          name82: "10.00",
          name92: "10.00",
          name102: "20.00"
        },{
          name1: "1",
          name2: "符号",
          name3: "90.00",
          name41: "3",
          name51: "300",
          name61: "3",
          name71: "10",
          name81: "85",
          name91: "94",
          name101: "100",
          name42: "5.00",
          name52: "5.00",
          name62: "30.00",
          name72: "10.00",
          name82: "10.00",
          name92: "10.00",
          name102: "20.00"
        },{
          name1: "1",
          name2: "符号",
          name3: "90.00",
          name41: "3",
          name51: "300",
          name61: "3",
          name71: "10",
          name81: "85",
          name91: "94",
          name101: "100",
          name42: "5.00",
          name52: "5.00",
          name62: "30.00",
          name72: "10.00",
          name82: "10.00",
          name92: "10.00",
          name102: "20.00"
        },{
          name1: "1",
          name2: "符号",
          name3: "90.00",
          name41: "3",
          name51: "300",
          name61: "3",
          name71: "10",
          name81: "85",
          name91: "94",
          name101: "100",
          name42: "5.00",
          name52: "5.00",
          name62: "30.00",
          name72: "10.00",
          name82: "10.00",
          name92: "10.00",
          name102: "20.00"
        },{
          name1: "1",
          name2: "符号",
          name3: "90.00",
          name41: "3",
          name51: "300",
          name61: "3",
          name71: "10",
          name81: "85",
          name91: "94",
          name101: "100",
          name42: "5.00",
          name52: "5.00",
          name62: "30.00",
          name72: "10.00",
          name82: "10.00",
          name92: "10.00",
          name102: "20.00"
        },{
          name1: "1",
          name2: "符号",
          name3: "90.00",
          name41: "3",
          name51: "300",
          name61: "3",
          name71: "10",
          name81: "85",
          name91: "94",
          name101: "100",
          name42: "5.00",
          name52: "5.00",
          name62: "30.00",
          name72: "10.00",
          name82: "10.00",
          name92: "10.00",
          name102: "20.00"
        },{
          name1: "1",
          name2: "符号",
          name3: "90.00",
          name41: "3",
          name51: "300",
          name61: "3",
          name71: "10",
          name81: "85",
          name91: "94",
          name101: "100",
          name42: "5.00",
          name52: "5.00",
          name62: "30.00",
          name72: "10.00",
          name82: "10.00",
          name92: "10.00",
          name102: "20.00"
        },{
          name1: "1",
          name2: "符号",
          name3: "90.00",
          name41: "3",
          name51: "300",
          name61: "3",
          name71: "10",
          name81: "85",
          name91: "94",
          name101: "100",
          name42: "5.00",
          name52: "5.00",
          name62: "30.00",
          name72: "10.00",
          name82: "10.00",
          name92: "10.00",
          name102: "20.00"
        },{
          name1: "1",
          name2: "符号",
          name3: "90.00",
          name41: "3",
          name51: "300",
          name61: "3",
          name71: "10",
          name81: "85",
          name91: "94",
          name101: "100",
          name42: "5.00",
          name52: "5.00",
          name62: "30.00",
          name72: "10.00",
          name82: "10.00",
          name92: "10.00",
          name102: "20.00"
        },{
          name1: "1",
          name2: "符号",
          name3: "90.00",
          name41: "3",
          name51: "300",
          name61: "3",
          name71: "10",
          name81: "85",
          name91: "94",
          name101: "100",
          name42: "5.00",
          name52: "5.00",
          name62: "30.00",
          name72: "10.00",
          name82: "10.00",
          name92: "10.00",
          name102: "20.00"
        },
      ]
    };
  },
  methods: {
    formatter(row, column) {
      return row.address;
    }
  }
};
</script>
<style scoped>

.block {
  float: right;
  padding: 5px 8px;
}
.av td {
  border: 1px solid red;
}
.aaaaa {
  font-size: 12px;
}
.bian {
  margin-left: 15px;
}
.q {
  width: 150px;
  margin-left: 5px;
}
.q1 {
  width: 200px;
}
.wen {
  background-color: rgb(223, 154, 7);
  padding: 0px 7px;
  border-radius: 50%;
  margin: 0 0px 0 5px;
  color: aliceblue;
}
.ju {
  float: right;
  margin-right: 10px;
  margin-bottom: 10px;
}
.qwes >>> .el-table th > .cell {
  font-weight: normal !important;
  /* font-size: 12px; */
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
  height: 700px;
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
</style>