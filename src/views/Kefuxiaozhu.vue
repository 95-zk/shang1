<template>
  <div>
    <div class="tou">
      <p>客服小组</p>
    </div>
    <div class="tou2">
      <div class="tou2-tou">
        <p class="el-icon-search">筛选查询</p>
      </div>
      <div class="sai">
        筛选：
        <input placeholder="输入账号/昵称/姓名/手机" />
        <el-button class="cha" size="mini">查询结果</el-button>
      </div>
    </div>
    <div class="tou2">
      <div class="tou2-tou">
        <p class="el-icon-s-fold">筛选查询</p>
        <div class="you">
          <el-button
            type="text"
            @click="dialogFormVisible = true"
            class="el-icon-refresh"
            id="tian"
            size="mini"
          >添加分组</el-button>
          <el-dialog title="添加分组" :visible.sync="dialogFormVisible" class="w">
            <el-form :model="form" class="q">
              <p>
                分组名称：
                <input placeholder="填写客服分组名称" />
              </p>
              <p>
                组长姓名：
                <input placeholder="填写分组负责人姓名" />
              </p>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
          </el-dialog>
          <el-dialog title="编辑分组" :visible.sync="dialogFormVisible1" class="w">
            <el-form :model="form" class="q">
              <p>
                分组名称：
                <input placeholder="填写客服分组名称" />
              </p>
              <p>
                组长姓名：
                <input placeholder="填写分组负责人姓名" />
              </p>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
          </el-dialog>
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
           <el-table-column prop="name1" label="小组名称" align="center"></el-table-column>
          <el-table-column prop="date" label="小组成员数" align="center"></el-table-column>
          <el-table-column prop="name3" label="组长" align="center"></el-table-column>
          <el-table-column prop="name4" label="所属" align="center"></el-table-column>
          <el-table-column label="操作" width="120" align="center">
            <el-button type="text" @click="dialogFormVisible1 = true">编辑</el-button>
            <el-button type="text" @click="open">删除</el-button>
          </el-table-column>
        </el-table>
        <!-- <el-switch v-model="valueaa" active-color="#13ce66" inactive-color="#ff4949"></el-switch> -->
      </div>
      <div class="xia">
        <div class="ab">
          <input type="checkbox" v-model="quan" @click="toggleSelection(tableData)"/> 全选
          <el-button type="text" @click="open2">批量删除</el-button>
        </div>
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
    <!-- <div class="tou2">
      <div class="tou2-tou">
        <p class="el-icon-s-fold">筛选查询</p>
        
    </div>-->
    
  </div>
</template>
<script>
export default {
  methods: {
      open2() {
      this.aaa = true;
      if (this.quan == true) {
        this.$confirm("是否永久删除全部文件?", "提示", {
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
      } else {
        alert("没执行！未选中！");
      }
    },
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
    },
   toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
    
  },
  data() {
    return {
        
        quan: false,
      //   value123: true,
       value: '100',
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
          name1: "客服小组",
          date: "10",
          name3: "符号",
          name4: "平台",
        },
        {
          name1: "客服小组",
          date: "10",
          name3: "符号",
          name4: "平台",
        },
        {
          name1: "客服小组",
          date: "10",
          name3: "符号",
          name4: "平台",
        },
        {
          name1: "客服小组",
          date: "10",
          name3: "符号",
          name4: "平台",
        },
        {
          name1: "客服小组",
          date: "10",
          name3: "符号",
          name4: "平台",
        },
        {
          name1: "客服小组",
          date: "10",
          name3: "符号",
          name4: "平台",
        },
        {
          name1: "客服小组",
          date: "10",
          name3: "符号",
          name4: "平台",
        },
        {
          name1: "客服小组",
          date: "10",
          name3: "符号",
          name4: "平台",
        },
        {
          name1: "客服小组",
          date: "10",
          name3: "符号",
          name4: "平台",
        },
        {
          name1: "客服小组",
          date: "10",
          name3: "符号",
          name4: "平台",
        },
        {
          name1: "客服小组",
          date: "10",
          name3: "符号",
          name4: "平台",
        },
      ]
    //   is-checked: false,
    };
  }
};
</script>
<style scoped>
.block {
  float: right;
  margin-top: -30px;
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
.xiala {
  width: 167px;
}
.q {
  margin-top: -20px;
  text-align: center;
}
/* .q input{
    width: 200px;;
} */
.w {
  width: 800px;
  margin-left: 250px;
}
.shu {
  margin: -10px 0;
  width: 400px;
}
#tian {
  height: 30px;
  border: 1px solid rgb(184, 180, 180);
  color: rgb(66, 64, 64);
  padding: 0 4px;
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