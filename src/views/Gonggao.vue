<template>
  <div>
    <div class="tou">
      <p>公告列表</p>
    </div>
    <div class="tou2">
      <div class="tou2-tou">
        <p class="el-icon-search">筛选查询</p>
      </div>
      <div class="sai">
        <span class="span">消息标题：</span>
        <el-input v-model="inputa" placeholder="输入用户名称" class="xialak" size="mini"></el-input>
        <el-button class="cha" size="mini">查询结果</el-button>
        <span class="span">发布人员：</span>
        <el-select v-model="select1" slot="prepend" placeholder="请选择分组" size="mini" class="xialak">
          <el-option label="1" value="1"></el-option>
          <el-option label="2" value="2"></el-option>
          <el-option label="3" value="3"></el-option>
        </el-select>
        <span class="span">发布时间：</span>
        <el-date-picker v-model="value1" type="date" placeholder="选择日期" size="mini"></el-date-picker>
      </div>
    </div>
    <div class="tou3">
      <div class="tou2-tou">
        <p class="el-icon-s-fold">公告列表</p>

        <div class="you">
          <el-button type="text" @click="dialogFormVisible = true" id="tian" size="mini">发布消息</el-button>
          <el-dialog title="发送站内息" :visible.sync="dialogFormVisible" class="w">
            <el-form :model="form" >
              <div class="e">
                <p class="fas">
                  发送对象：
                  <el-select
                    v-model="select"
                    slot="prepend"
                    placeholder="请选择分组"
                    size="mini"
                    class="xialak1"
                  >
                    <el-option label="所有人" value="1"></el-option>
                    <el-option label="分组1" value="2"></el-option>
                    <el-option label="分组2" value="3"></el-option>
                    <el-option label="分组3" value="4"></el-option>
                  </el-select>
                </p>
                <p>
                  标题：
                  <input placeholder="站内信标题不能超过20个字，内容不能超过100个字" class="biaoti" />
                </p>
                <p>
                  内容：
                  <img src="../assets/_R[A1(633XY]JL{DF)8}IDJ.png" width="360" />
                  <textarea rows="4" cols="20" class="input-kuan" placeholder="输入内容"></textarea>
                </p>
              </div>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
          </el-dialog>
          <el-dialog title="查看消息" :visible.sync="dialogFormVisible1" class="w">
            <el-form :model="form" class="q">
              <div class="xiaxi">
                <h3 style="margin-left: 15px;">客服绩效评定规则说明！</h3>
                <p>2017-08-02 15:47:44</p>
                <hr style=" margin:5px 0;">
                <p>客服绩效评定规则说明！客服绩效评定规则说明！</p>
                <p>客服绩效评定规则说明！客服绩效评定规则说明！</p>
                <p>客服绩效评定规则说明！客服绩效评定规则说明！</p>
                <p>客服绩效评定规则说明！客服绩效评定规则说明！</p>
                <p>客服绩效评定规则说明！客服绩效评定规则说明！</p>
                <p>客服绩效评定规则说明！客服绩效评定规则说明！</p>
                <p>客服绩效评定规则说明！客服绩效评定规则说明！</p>
                
              </div>
            </el-form>
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
          <el-table-column prop="name1" label="编号" align="center"></el-table-column>
          <el-table-column prop="date" label="消息标题" width="300px" align="center"></el-table-column>
          <el-table-column prop="name3" label="发布时间" width="230px" align="center"></el-table-column>
          <el-table-column prop="name4" label="发布人员" align="center"></el-table-column>
          <el-table-column prop="name5" label="接收对象" align="center"></el-table-column>
          <el-table-column label="操作" width="100" align="center">
            <el-button type="text" @click="dialogFormVisible1 = true">查看</el-button>
            <el-button type="text" @click="open">删除</el-button>
          </el-table-column>
        </el-table>
      </div>
      <div class="quanxun">
        <input type="checkbox" v-model="quan" @click="toggleSelection(tableData)" /> 全选
        <el-button type="text" @click="open2">批量删除</el-button>
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
    }
  },
  data() {
    return {
      currentPage3: 5,
      value1: "",
      inputa: "",
      select: "",
      select1: "",
      dialogFormVisible: false,
      dialogFormVisible1: false,
      tableData: [
        {
          name1: "1000001",
          date: "客服绩效评定规则说明！",
          name3: "2019-07-22 14:36:21",
          name4: "admin",
          name5: "200人"
        },
        {
          name1: "1000001",
          date: "客服绩效评定规则说明！",
          name3: "2019-07-22 14:36:21",
          name4: "admin",
          name5: "200人"
        },
        {
          name1: "1000001",
          date: "客服绩效评定规则说明！",
          name3: "2019-07-22 14:36:21",
          name4: "admin",
          name5: "200人"
        },
        {
          name1: "1000001",
          date: "客服绩效评定规则说明！",
          name3: "2019-07-22 14:36:21",
          name4: "admin",
          name5: "200人"
        },
        {
          name1: "1000001",
          date: "客服绩效评定规则说明！",
          name3: "2019-07-22 14:36:21",
          name4: "admin",
          name5: "200人"
        },
        {
          name1: "1000001",
          date: "客服绩效评定规则说明！",
          name3: "2019-07-22 14:36:21",
          name4: "admin",
          name5: "200人"
        },
        {
          name1: "1000001",
          date: "客服绩效评定规则说明！",
          name3: "2019-07-22 14:36:21",
          name4: "admin",
          name5: "200人"
        },
        {
          name1: "1000001",
          date: "客服绩效评定规则说明！",
          name3: "2019-07-22 14:36:21",
          name4: "admin",
          name5: "200人"
        },
      ]
    };
  }
};
</script>
<style scoped>
.quanxun{
    margin-left: 10px;
}
.xiaxi {
    margin: 0 auto;
    margin-top: -20px;
  text-align: center;   
  width: 450px;;
}
.biaoti {
  border: 1px solid rgb(210, 211, 212);
  height: 30px;
  width: 358px;
}
.input-kuan {
  width: 358px;
  height: 150px;
  margin-left: 46px;
  margin-top: -3px;
  padding-top: 5px;
  border: 1px solid rgb(192, 193, 194);
  border-top: none;
  /* height: 200px; */
}
.input-kuan:focus {
  border-top: none;
  outline: medium;
  /* height: 200px; */
}
.e {
  margin-top: -20px;
  margin-left: 70px;
}
.e p {
  margin: 10px 0;
}
.e p:nth-of-type(2),
.e p:nth-of-type(3) {
  margin-left: 38px;
}
.span {
  font-size: 14px;
  margin-left: 5px;
}
#tian {
  height: 30px;
  border: 1px solid rgb(184, 180, 180);
  color: rgb(66, 64, 64);
  padding: 0 4px;
}
.w {
  width: 1300px;
  /* margin-left: 250px; */
}
.you {
  float: right;
  margin-top: 3px;
  margin-right: 10px;
}
.block {
  float: right;
  margin-top: -35px;
  margin-right: 20px;
  /* margin-bottom: 20px; */
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
.xialak1 {
  /* margin: 0 3px; */
  width: 200px;
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
  margin: 10px 0 10px 185px;
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
</style>