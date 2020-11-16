<template>
  <div>
    <div class="tou">
      <p>消息中心</p>
    </div>
    <div class="tou4">
      <div class="tou4-tou">
        <p>列表</p>
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
          <el-table-column prop="name1" label="消息标题" width="390" align="center"></el-table-column>
          <el-table-column prop="date" label="发布时间" width="250" align="center"></el-table-column>
          <el-table-column prop="name3" label="发布人员" width="250" align="center"></el-table-column>
          <el-table-column label="操作" width="120" align="center">
            <!-- <span class="chakan" @click="chakan()">查看</span> -->
            <el-button type="text" @click="open1">查看</el-button>
            <el-button type="text" @click="open">删除</el-button>
            <!-- <span class="shanchu" @click="shanchu()">删除</span> -->
          </el-table-column>
        </el-table>
      </div>
      <div class="xia">
        <div>
          <input type="checkbox" v-model="quan" @click="toggleSelection(tableData)"/> 全选
          <el-button type="text" @click="open2">批量删除</el-button>
          <!-- <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox> -->
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          name1: "客服绩效评定说明！",
          date: "2016-05-02",
          name3: "admin"
        },
        {
          name1: "客服绩效评定说明！",
          date: "2016-05-02",
          name3: "admin"
        },
        {
          name1: "客服绩效评定说明！",
          date: "2016-05-02",
          name3: "admin"
        },
        {
          name1: "客服绩效评定说明！",
          date: "2016-05-02",
          name3: "admin"
        },
        {
          name1: "客服绩效评定说明！",
          date: "2016-05-02",
          name3: "admin"
        },
        {
          name1: "客服绩效评定说明！",
          date: "2016-05-02",
          name3: "admin"
        },
        {
          name1: "客服绩效评定说明！",
          date: "2016-05-02",
          name3: "admin"
        },
        {
          name1: "客服绩效评定说明！",
          date: "2016-05-02",
          name3: "admin"
        },
        {
          name1: "客服绩效评定说明！",
          date: "2016-05-02",
          name3: "admin"
        },
        {
          name1: "客服绩效评定说明！",
          date: "2016-05-02",
          name3: "admin"
        },
        {
          name1: "客服绩效评定说明！",
          date: "2016-05-02",
          name3: "admin"
        },
        {
          name1: "客服绩效评定说明！",
          date: "2016-05-02",
          name3: "admin"
        },
        {
          name1: "客服绩效评定说明！",
          date: "2016-05-02",
          name3: "admin"
        },
        {
          name1: "客服绩效评定说明！",
          date: "2016-05-02",
          name3: "admin"
        },
        {
          name1: "客服绩效评定说明！",
          date: "2016-05-02",
          name3: "admin"
        },
        {
          name1: "客服绩效评定说明！",
          date: "2016-05-02",
          name3: "admin"
        },
        {
          name1: "客服绩效评定说明！",
          date: "2016-05-02",
          name3: "admin"
        },
        {
          name1: "客服绩效评定说明！",
          date: "2016-05-02",
          name3: "admin"
        },
        {
          name1: "客服绩效评定说明！",
          date: "2016-05-02",
          name3: "admin"
        },
        {
          name1: "客服绩效评定说明！",
          date: "2016-05-02",
          name3: "admin"
        },
        {
          name1: "客服绩效评定说明！",
          date: "2016-05-02",
          name3: "admin"
        },
        {
          name1: "客服绩效评定说明！",
          date: "2016-05-02",
          name3: "admin"
        },
        {
          name1: "客服绩效评定说明！",
          date: "2016-05-02",
          name3: "admin"
        },
        {
          name1: "客服绩效评定说明！",
          date: "2016-05-02",
          name3: "admin"
        },
        {
          name1: "客服绩效评定说明！",
          date: "2016-05-02",
          name3: "admin"
        },
        {
          name1: "客服绩效评定说明！",
          date: "2016-05-02",
          name3: "admin"
        },
        {
          name1: "客服绩效评定说明！",
          date: "2016-05-02",
          name3: "admin"
        }
      ],
      quan: false
      // aria-hidden:false
      // aaa:'',
      // selection:true
    };
  },
  dianji() {},
  methods: {
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
    open1() {
      this.$alert("这是一段内容", "标题名称", {
        confirmButtonText: "确定"
        //   callback: action => {
        //     this.$message({
        //       type: 'info',
        //     //   message: `action: ${ action }`
        //     });
        //   }
      });
    }
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
.shanchu {
  margin-left: 10px;
  cursor: pointer;
}
.chakan {
  cursor: pointer;
}
.tou {
  width: 1085px;
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