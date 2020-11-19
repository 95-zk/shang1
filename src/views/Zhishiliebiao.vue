<template>
  <div>
    <div class="tou">
      <p>知识列表</p>
    </div>
    <div class="tou2">
      <div class="tou2-tou">
        <p class="el-icon-search">筛选查询</p>
      </div>
      <div class="sai">
        <span class="span">问题标题：</span>
        <el-input v-model="inputwen" placeholder="请输入内容" size="mini" class="wemti"></el-input>
        <span class="span">问题分类：</span>
        <el-select v-model="select" slot="prepend" placeholder="请选择分组" size="mini">
          <el-option label="1" value="1"></el-option>
          <el-option label="2" value="2"></el-option>
          <el-option label="3" value="3"></el-option>
        </el-select>
        <el-button class="cha" size="mini">查询结果</el-button>
      </div>
    </div>
    <div class="tou2">
      <div class="tou2-tou">
        <p class="el-icon-s-fold">问题列表(知识库越丰富,机器客服越智能)</p>
        <div class="you">
          <router-link class="ming1" tag="button" to="/fabuzhishi" id="tian">发布问题</router-link>
          <router-link class="ming1" tag="button" to="/fenleiguanli" id="tian">分类管理</router-link>
        </div>
      </div>
      <div>
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="name1" label="问题标题" align="center" width="300px"></el-table-column>
          <el-table-column prop="date" label="分类" align="center"></el-table-column>
          <el-table-column prop="name3" label="创建时间" align="center"></el-table-column>
          <el-table-column label="状态" align="center">
            <template scope="scope">
              <el-switch
                v-model="scope.row.value"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-value="100"
                inactive-value="0"
              ></el-switch>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="120" align="center">
            <router-link class="ming1" tag="span" to="/fabuzhishi">编辑</router-link>
            <el-button type="text" @click="open">删除</el-button>
          </el-table-column>
        </el-table>
      </div>
      <div class="xia">
        <div class="block">
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
  methods: {
    open() {
      this.$confirm("是否永久删除该文件?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  data() {
    return {
      inputwen: "",
      quan: false,
      //   value123: true,
      value: "100",
      select: "",
      select1: "",
      dialogFormVisible: false,
      dialogFormVisible1: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },

      formLabelWidth: "120px",
      tableData: [
        {
          name1: "你好",
          date: "常用语",
          name3: "04-17 16:37"
          // value:true,
        },
        {
          name1: "你好",
          date: "常用语",
          name3: "04-17 16:37"
        },
        {
          name1: "你好",
          date: "常用语",
          name3: "04-17 16:37"
        },
        {
          name1: "你好",
          date: "常用语",
          name3: "04-17 16:37"
        },
        {
          name1: "你好",
          date: "常用语",
          name3: "04-17 16:37"
        }
      ]
    };
  }
};
</script>
<style scoped>
.ming1 {
  color: rgb(86, 169, 247);
  margin: -2px 3px 0 0;
  cursor: pointer;
}
.span {
  font-size: 14px;
  margin-left: 5px;
}
.block {
  /* float: right; */
  margin-left: 530px;
}
.xia {
  padding: 15px 15px;
}
#touxiang span {
  margin-left: -170px;
}
#touxiang img {
  margin-top: -30px;
  margin-left: -30px;
  cursor: pointer;
}
#chu {
  margin-left: -20px;
}
#tian {
  height: 30px;
  margin-top: 0 px;
  border-radius: 5px;
  border: 1px solid rgb(184, 180, 180);
  color: rgb(66, 64, 64);
  padding: 0 4px;
  margin-left: 3px;
}
.you {
  float: right;
  margin-top: 3px;
  margin-right: 10px;
}
.cha {
  margin-left: 10px;
  margin-right: 10px;
}
.wemti {
  width: 180px;
}
.sai {
  margin-bottom: 10px;
  margin-left: 10px;
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