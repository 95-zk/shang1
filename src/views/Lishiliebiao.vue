<template>
  <div>
    <div class="tou">
      <p>历史会话</p>
    </div>
    <div class="tou2">
      <div class="tou2-tou">
        <p class="el-icon-search">筛选查询</p>
      </div>
      <div class="sai">
        筛选：
        <el-select v-model="select" slot="prepend" placeholder="请选择筛选条件" size="mini" class="xialak">
          <el-option label="1" value="1"></el-option>
          <el-option label="2" value="2"></el-option>
          <el-option label="3" value="3"></el-option>
        </el-select>
        <el-select v-model="select1" slot="prepend" placeholder="请选择分组" size="mini" class="xialak">
          <el-option label="1" value="1"></el-option>
          <el-option label="2" value="2"></el-option>
          <el-option label="3" value="3"></el-option>
        </el-select>
        <!-- <input placeholder="输入用户名称/接待客服" /> -->
        <el-input v-model="inputa" placeholder="输入用户名称" class="xialak" size="mini"></el-input>
        <el-button class="cha" size="mini">查询结果</el-button>
        <div class="you11">
          <el-button :plain="true" @click="open" class="a3">昨天</el-button>
          <el-button :plain="true" @click="open" class="a2">近7天</el-button>
          <el-button :plain="true" @click="open" class="a1">最近30天</el-button>
          <el-date-picker type="dates" v-model="value4" placeholder="选择一个或多个日期" size="mini"></el-date-picker>
        </div>
      </div>
    </div>
    <div class="tou3">
      <div class="tou2-tou">
        <p class="el-icon-s-fold">会话列表</p>
      </div>
      <div>
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column prop="name1" label="用户名" align="center"></el-table-column>
          <el-table-column prop="date" label="会话开始时间" align="center"></el-table-column>
          <el-table-column prop="name3" label="接待客服" align="center"></el-table-column>
          <el-table-column prop="name4" label="来源终端" align="center"></el-table-column>
          <el-table-column prop="name5" label="用户IP地址" align="center"></el-table-column>
          <el-table-column prop="name6" label="来源页面" align="center"></el-table-column>
          <el-table-column prop="name7" label="状态" align="center"></el-table-column>
          <el-table-column prop="name8" label="满意度" align="center"></el-table-column>
          <el-table-column label="操作" width="100" align="center">
            <el-button type="text" @click="open1">查看</el-button>
          </el-table-column>
        </el-table>
        <!-- <el-switch v-model="valueaa" active-color="#13ce66" inactive-color="#ff4949"></el-switch> -->
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
export default {
  methods: {
    open1() {
      this.$alert("这是一段内容", "标题名称", {
        confirmButtonText: "确定"
      });
    }
  },
  data() {
    return {
      currentPage3: 5,
      value4: "",
      inputa: "",
      select: "",
      select1: "",
      tableData: [
        {
          name1: "游客",
          date: "04-25 18:38",
          name3: "符号",
          name4: "web端",
          name5: "北京 福州",
          name6: "商城首页",
          name7: "已解决",
          name8: "满意"
        },
        {
          name1: "游客",
          date: "04-25 18:38",
          name3: "符号",
          name4: "web端",
          name5: "北京 福州",
          name6: "商城首页",
          name7: "已解决",
          name8: "满意"
        },
        {
          name1: "游客",
          date: "04-25 18:38",
          name3: "符号",
          name4: "web端",
          name5: "北京 福州",
          name6: "商城首页",
          name7: "已解决",
          name8: "满意"
        },
        {
          name1: "游客",
          date: "04-25 18:38",
          name3: "符号",
          name4: "web端",
          name5: "北京 福州",
          name6: "商城首页",
          name7: "已解决",
          name8: "满意"
        },
        {
          name1: "游客",
          date: "04-25 18:38",
          name3: "符号",
          name4: "web端",
          name5: "北京 福州",
          name6: "商城首页",
          name7: "已解决",
          name8: "满意"
        },
        {
          name1: "游客",
          date: "04-25 18:38",
          name3: "符号",
          name4: "web端",
          name5: "北京 福州",
          name6: "商城首页",
          name7: "已解决",
          name8: "满意"
        },
        {
          name1: "游客",
          date: "04-25 18:38",
          name3: "符号",
          name4: "web端",
          name5: "北京 福州",
          name6: "商城首页",
          name7: "已解决",
          name8: "满意"
        },
        {
          name1: "游客",
          date: "04-25 18:38",
          name3: "符号",
          name4: "web端",
          name5: "北京 福州",
          name6: "商城首页",
          name7: "已解决",
          name8: "满意"
        },
        {
          name1: "游客",
          date: "04-25 18:38",
          name3: "符号",
          name4: "web端",
          name5: "北京 福州",
          name6: "商城首页",
          name7: "已解决",
          name8: "满意"
        },
        {
          name1: "游客",
          date: "04-25 18:38",
          name3: "符号",
          name4: "web端",
          name5: "北京 福州",
          name6: "商城首页",
          name7: "已解决",
          name8: "满意"
        },
        {
          name1: "游客",
          date: "04-25 18:38",
          name3: "符号",
          name4: "web端",
          name5: "北京 福州",
          name6: "商城首页",
          name7: "已解决",
          name8: "满意"
        }
      ]
    };
  }
};
</script>
<style scoped>
.block {
  float: right;
  margin-top: 15px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.a1 {
  border: 1px solid rgb(184, 180, 180);
  padding: 3px 6px;
  margin-right: 5px;
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
  margin-right: 5px;
  /* margin-top: 6px; */
}
.xialak {
  margin: 0 3px;
  width: 145px;
}

.cha {
  height: 24px;
  /* width: 73px;
  padding: 0 -2px; */
  margin-left: 10px;
  margin-right: 10px;
  /* margin-top: 5px; */
}
.sai {
  margin-bottom: 10px;
  margin-left: 10px;
  /* padding-top: 3px; */
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
  /* height: 200px; */
  border: 1px solid rgb(184, 180, 180);
  margin: 10px 0 0 185px;
  /* padding-bottom: 60px; */
}
.tou3 {
  width: 1070px;
  /* height: 200px; */
  border: 1px solid rgb(184, 180, 180);
  margin: 10px 0 0 185px;
  padding-bottom: 60px;
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
</style>