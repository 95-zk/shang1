<template>
  <div>
    <div class="tou">
      <p>分类管理</p>
    </div>
    <div class="tou2">
      <div class="tou2-tou">
        <p class="el-icon-s-unfold">分类列表</p>
        <el-button plain size="mini" class="pushu" @click="dialogFormVisible = true">添加分类</el-button>
        <el-dialog title="添加分类" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="分类名称：" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off" class="w"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="name4" label="发布人员" align="center"></el-table-column>
        <el-table-column prop="name5" label="接收对象" align="center"></el-table-column>
        <el-table-column label="操作" width="100" align="center">
          <el-button type="text" @click="dialogFormVisible = true">查看</el-button>
          <el-button type="text" @click="open">删除</el-button>
        </el-table-column>
      </el-table>
    </div>
    <div class="xia">
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
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
      tableData: [
        {
          name4: "常用语",
          name5: "10"
        },
        {
          name4: "常用语",
          name5: "10"
        },
        {
          name4: "常用语",
          name5: "10"
        },
        {
          name4: "常用语",
          name5: "10"
        },
        {
          name4: "常用语",
          name5: "10"
        },
        {
          name4: "常用语",
          name5: "10"
        }
      ]
    };
  }
};
</script>
<style scoped>
.block {
  float: right;
  margin-right: 20px;
}
.w {
  width: 300px;
}
.pushu {
  float: right;
  margin: 3px 10px 0 0;
}
.xia {
  width: 1070px;
  height: 33px;
  border: 1px solid rgb(184, 180, 180);
  margin: 10px 0 20px 185px;
}
.tou2 {
  width: 1070px;
  /* height: 200px; */
  border: 1px solid rgb(184, 180, 180);
  margin: 10px 0 0 185px;
  /* padding-bottom: 60px; */
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
  margin-left: 20px;
  padding-left: 5px;
  border-left: 4px solid rgb(88, 173, 3);
  color: rgb(158, 158, 158);
}
</style>