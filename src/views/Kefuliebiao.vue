<template>
  <div>
    <div class="tou">
      <p>客服列表</p>
    </div>
    <div class="tou2">
      <div class="tou2-tou">
        <p class="el-icon-search">筛选查询</p>
      </div>
      <div class="sai">
        筛选：
        <input placeholder="输入账号/昵称/姓名/手机" />
        <el-button class="cha" size="mini">查询结果</el-button>
        <el-select v-model="select" slot="prepend" placeholder="请选择分组" size="mini">
          <el-option label="1" value="1"></el-option>
          <el-option label="2" value="2"></el-option>
          <el-option label="3" value="3"></el-option>
        </el-select>
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
          >添加客服</el-button>
          <el-dialog title="添加客服" :visible.sync="dialogFormVisible" class="w">
            <el-form :model="form" class="q">
              <p id="touxiang">
                <span>头像：</span>
                <br />
                <img src="../assets/HG2}53U1_)9@X}0{L51}CAD.png" width="85px" />
              </p>
              <p>
                账号：
                <input placeholder="须为字母或数字，用于登录和密码" />
              </p>
              <p>
                姓名：
                <input placeholder="用于报表和历史会话的显示" />
              </p>
              <p>
                昵称：
                <input placeholder="用于访客端聊天窗口的显示" />
              </p>
              <p>
                手机：
                <input placeholder="用于企业内部通讯" />
              </p>
              <p>
                邮箱：
                <input placeholder="请输入邮箱地址" />
              </p>
              <p id="chu">
                初始密码：
                <input placeholder="请输入6到16个字符" type="password" />
              </p>
              <p id="chu">
                选择分组：
                <select v-model="select1" placeholder="请选择分组" class="xiala">
                  <option label="请选择分组" value="0">请选择分组</option>
                  <option label="1" value="1"></option>
                  <option label="2" value="2"></option>
                  <option label="3" value="3"></option>
                </select>
              </p>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
          </el-dialog>
          <el-dialog title="编辑客服" :visible.sync="dialogFormVisible1" class="w">
            <el-form :model="form" class="q">
              <p id="touxiang">
                <span>头像：</span>
                <br />
                <img src="../assets/HG2}53U1_)9@X}0{L51}CAD.png" width="85px" />
              </p>
              <p>
                账号：
                <input placeholder="须为字母或数字，用于登录和密码" />
              </p>
              <p>
                姓名：
                <input placeholder="用于报表和历史会话的显示" />
              </p>
              <p>
                昵称：
                <input placeholder="用于访客端聊天窗口的显示" />
              </p>
              <p>
                手机：
                <input placeholder="用于企业内部通讯" />
              </p>
              <p>
                邮箱：
                <input placeholder="请输入邮箱地址" />
              </p>
              <p id="chu">
                初始密码：
                <input placeholder="请输入6到16个字符" type="password" />
              </p>
              <p id="chu">
                选择分组：
                <select v-model="select1" placeholder="请选择分组" class="xiala">
                  <option label="请选择分组" value="0">请选择分组</option>
                  <option label="1" value="1"></option>
                  <option label="2" value="2"></option>
                  <option label="3" value="3"></option>
                </select>
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
        <!-- <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"  v-model="quan"></el-table-column>
          <el-checkbox v-model="quan">备选项</el-checkbox>
          <el-table-column prop="name1" label="昵称" align="center"></el-table-column>
          <el-table-column prop="date" label="姓名" align="center"></el-table-column>
          <el-table-column prop="name3" label="账号" align="center"></el-table-column>
          <el-table-column prop="name4" label="手机号" align="center"></el-table-column>
          <el-table-column prop="name5" label="客服分组" align="center"></el-table-column>
          <el-table-column label="账户启用状态" align="center">
            <el-tooltip :content="'Switch value: ' + value" placement="top">
              <el-switch
                v-model="value"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-value="100"
                inactive-value="0"
              ></el-switch>
            </el-tooltip>
            
          </el-table-column>

          <el-table-column label="操作" width="120" align="center">
            <el-button type="text" @click="dialogFormVisible1 = true">编辑
                
            </el-button>
            <el-button type="text" @click="open">删除</el-button>
          </el-table-column>
        </el-table> -->
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"></el-table-column>
           <el-table-column prop="name1" label="昵称" align="center"></el-table-column>
          <el-table-column prop="date" label="姓名" align="center"></el-table-column>
          <el-table-column prop="name3" label="账号" align="center"></el-table-column>
          <el-table-column prop="name4" label="手机号" align="center"></el-table-column>
          <el-table-column prop="name5" label="客服分组" align="center"></el-table-column>
          <el-table-column label="账户启用状态" align="center">
            <el-tooltip :content="'Switch value: ' + value" placement="top">
              <el-switch
                v-model="value"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-value="100"
                inactive-value="0"
              ></el-switch>
            </el-tooltip>
          </el-table-column>
          <el-table-column label="操作" width="120" align="center">
            <!-- <span class="chakan" @click="chakan()">查看</span> -->
            <el-button type="text" @click="dialogFormVisible1 = true">编辑</el-button>
            <el-button type="text" @click="open">删除</el-button>
            <!-- <span class="shanchu" @click="shanchu()">删除</span> -->
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
          name1: "符号",
          date: "符号",
          name3: "fuhao",
          name4: "159****5311",
          name5: "客服1",
          value: '100',
        },
        {
          name1: "符号",
          date: "符号",
          name3: "fuhao",
          name4: "159****5311",
          name5: "客服1",
          value: '0',
        },
        {
          name1: "符号",
          date: "符号",
          name3: "fuhao",
          name4: "159****5311",
          name5: "客服1",
        },
        {
          name1: "符号",
          date: "符号",
          name3: "fuhao",
          name4: "159****5311",
          name5: "客服1",
        },
        {
          name1: "符号",
          date: "符号",
          name3: "fuhao",
          name4: "159****5311",
          name5: "客服1",
        },
        {
          name1: "符号",
          date: "符号",
          name3: "fuhao",
          name4: "159****5311",
          name5: "客服1",
        },
        {
          name1: "符号",
          date: "符号",
          name3: "fuhao",
          name4: "159****5311",
          name5: "客服1",
        },
        {
          name1: "符号",
          date: "符号",
          name3: "fuhao",
          name4: "159****5311",
          name5: "客服1",
        },
        {
          name1: "符号",
          date: "符号",
          name3: "fuhao",
          name4: "159****5311",
          name5: "客服1",
        },
        {
          name1: "符号",
          date: "符号",
          name3: "fuhao",
          name4: "159****5311",
          name5: "客服1",
        },
        {
          name1: "符号",
          date: "符号",
          name3: "fuhao",
          name4: "159****5311",
          name5: "客服1",
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