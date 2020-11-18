<template>
  <div>
    <div class="tou">
      <p>客户列表</p>
    </div>
    <div class="tou2">
      <div class="tou2-tou">
        <p class="el-icon-search">筛选查询</p>
      </div>
      <div class="sai">
        筛选客户：
        <el-input v-model="inputa" placeholder="输入用户名称" class="xialak" size="mini"></el-input>
        <el-button class="cha" size="mini">查询结果</el-button>
        <div class="you11">
          <el-button :plain="true" class="a3">导出数据</el-button>
        </div>
      </div>
    </div>
    <div class="tou2">
      <div class="tou2-tou">
        <p class="el-icon-s-fold">客户列表</p>
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
          <el-table-column prop="name1" label="姓名" align="center"></el-table-column>
          <el-table-column prop="date" label="手机" align="center"></el-table-column>
          <el-table-column prop="name3" label="邮箱" align="center"></el-table-column>
          <el-table-column prop="name4" label="地址" align="center"></el-table-column>
          <el-table-column prop="name5" label="创建时间" align="center"></el-table-column>
          <el-table-column prop="name6" label="更新时间" align="center"></el-table-column>
          <el-table-column prop="name7" label="访客备注" align="center"></el-table-column>
          <el-table-column label="操作" width="100" align="center">
            <!-- <el-button type="text" @click="open1">查看</el-button> -->
            <el-button @click="drawer = true" type="primary" id="chakn">查看</el-button>
          </el-table-column>
        </el-table>
        <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false" size="600px">
          <div class="zuo">
            <p class="zuo-yonghu">用户信息</p>
            <div class="div">
              <p style="margin-left: 5px;">个人信息</p>
              <p class="namein">
                姓名：
                <input placeholder="符号"/>
              </p>
              <p class="namein">
                手机：
                <input placeholder="159****5311"/>
              </p>
              <p class="namein">
                邮箱：
                <input placeholder="输入邮箱"/>
              </p>
              <p class="namein">
                地址：
                <input placeholder="输入地址"/>
              </p>
              <div class="namein" style="margin-top: 33px;">
                跟进备注：<br>
                  <textarea rows="4" cols="20" class="shuru" placeholder="跟进备注"></textarea>
              </div>
              <el-button type="success" size="mini" style="margin:30px 0 0 100px;">保存</el-button>
            </div>
          </div>
          <div class="you">
            <p class="zuo-yonghu">历史会话</p>
            <img src="../assets/saDFGHJKL.png" width="297">
          </div>
        </el-drawer>

        <!-- <el-switch v-model="valueaa" active-color="#13ce66" inactive-color="#ff4949"></el-switch> -->
      </div>
      <div class="ab">
        <input type="checkbox" v-model="quan" @click="toggleSelection(tableData)" /> 全选
        <el-button type="text" @click="dialogFormVisible = true" class="qunfa">群发短信</el-button>

        <el-dialog title="群发短信" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="发送对象：" :label-width="formLabelWidth">{{abc}}</el-form-item>
            <el-form-item label="短信内容：" :label-width="formLabelWidth">
              <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                v-model="textarea"
                class="input-kuan"
              ></el-input>
            </el-form-item>
            <p class="qunfa-span">
              发送时系统会自动在结尾追加【云客服】，请勿重复添加。
              <br />内容上限不能超过500字，当前已输入x字，将作为1条发送
            </p>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>

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
    open1() {
      this.$alert("这是一段内容", "标题名称", {
        confirmButtonText: "确定"
      });
    }
  },
  data() {
    return {
      drawer: false,
      centerDialogVisible: false,
      abc: "共20个用户",
      textarea: "",
      currentPage3: 5,
      value4: "",
      inputa: "",
      tableData: [
        {
          name1: "符号",
          date: "159****5311",
          name3: "-",
          name4: "-",
          name5: "04-25 18:34",
          name6: "04-25 18:34",
          name7: "-",
        },
        {
          name1: "符号",
          date: "159****5311",
          name3: "-",
          name4: "-",
          name5: "04-25 18:34",
          name6: "04-25 18:34",
          name7: "-",
        },
        {
          name1: "符号",
          date: "159****5311",
          name3: "-",
          name4: "-",
          name5: "04-25 18:34",
          name6: "04-25 18:34",
          name7: "-",
        },
        {
          name1: "符号",
          date: "159****5311",
          name3: "-",
          name4: "-",
          name5: "04-25 18:34",
          name6: "04-25 18:34",
          name7: "-",
        },
        {
          name1: "符号",
          date: "159****5311",
          name3: "-",
          name4: "-",
          name5: "04-25 18:34",
          name6: "04-25 18:34",
          name7: "-",
        },
        {
          name1: "符号",
          date: "159****5311",
          name3: "-",
          name4: "-",
          name5: "04-25 18:34",
          name6: "04-25 18:34",
          name7: "-",
        },
        {
          name1: "符号",
          date: "159****5311",
          name3: "-",
          name4: "-",
          name5: "04-25 18:34",
          name6: "04-25 18:34",
          name7: "-",
        },
        {
          name1: "符号",
          date: "159****5311",
          name3: "-",
          name4: "-",
          name5: "04-25 18:34",
          name6: "04-25 18:34",
          name7: "-",
        },
        {
          name1: "符号",
          date: "159****5311",
          name3: "-",
          name4: "-",
          name5: "04-25 18:34",
          name6: "04-25 18:34",
          name7: "-",
        },
        {
          name1: "符号",
          date: "159****5311",
          name3: "-",
          name4: "-",
          name5: "04-25 18:34",
          name6: "04-25 18:34",
          name7: "-",
        },
        {
          name1: "符号",
          date: "159****5311",
          name3: "-",
          name4: "-",
          name5: "04-25 18:34",
          name6: "04-25 18:34",
          name7: "-",
        }
      ],
      
      dialogTableVisible: false,
      dialogFormVisible: false,
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
      formLabelWidth: "120px"
    };
  }
};
</script>
<style scoped>
#chakn{
    color: rgb(112, 109, 243);
}
.shuru{
    margin-left: 83px;
    margin-top: -30px;
}
.div {
  margin-left: 30px;
  margin-top: 40px;
  color: rgb(66, 66, 66);
}
.div p{
  margin: 10px 0;
  margin-left: 33px;
}
.namein input:focus {
  /* outline-color:red; */
  outline: medium;
  border-bottom: 1px solid rgb(184, 180, 180);
  border-left: none;
  border-right: none;
  border-top: none;
}
.namein input {
  /* outline-color:red; */
  /* outline:medium; */
  width: 140px;
  border-bottom: 1px solid rgb(184, 180, 180);
  border-left: none;
  border-right: none;
  border-top: none;
}
.zuo-yonghu {
  padding-left: 20px;
  /* margin-top: 6px; */
  line-height: 35px;
  height: 35px;
  border-bottom: 1px solid rgb(184, 180, 180);
}
.zuo {
  width: 300px;
  height: 587px;
  float: left;
  border-right: 1px solid rgb(184, 180, 180);
  /* background-color: darkkhaki; */
}
.you {
  float: left;
  width: 300px;
  height: 587px;
  padding: 0 3px 0 0;
  /* border: 1px solid rgb(75, 143, 120); */
  /* background-color: blue */
}

.el-button--primary {
  color: rgb(77, 75, 75);
  background-color: transparent;
  border-color: transparent;
}
.asdf {
  position: fixed;
  width: 300px;
  right: 0px;
}
.qunfa-span {
  margin-left: 80px;
  color: rgb(184, 180, 180);
}
.input-kuan {
  width: 300px;
  /* height: 200px; */
}
.ab {
  height: 35px;
  padding-top: 10px;
  margin-left: 10px;
}
.qunfa {
  border: 1px solid rgb(184, 180, 180);
  padding: 5px 10px;
}
.block {
  float: right;
  margin-top: -3px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.a3 {
  border: 1px solid rgb(184, 180, 180);
  padding: 5px 10px;
  cursor: pointer;
}
.you11 {
  float: right;
  margin-right: 10px;
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