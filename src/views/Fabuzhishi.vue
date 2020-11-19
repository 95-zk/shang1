<template>
  <div>
    <div class="tou">
      <p>发布知识</p>
    </div>
    <router-link class="ming1" tag="button" to="/zhishiliebiao" id="tian">发布问题</router-link>
    <div class="kuang">
      <p class="shu1">
        <span class="span">问题：</span>
        <el-input placeholder="您好" size="mini" class="wemti"></el-input>
      </p>
      <p class="shu2">
        <span class="span">相似问题：</span>
        <el-input placeholder="亲" size="mini" class="wemti"></el-input>
      </p>

      <p class="shu3">
        <el-input placeholder="Hi" size="mini" class="wemti"></el-input>
      </p>
      <p class="shu3">
        <el-input placeholder="你好" size="mini" class="wemti"></el-input>
      </p>
      <div class="shu3">
        <p class="el1">+ 添加相似问题</p>
      </div>
      <div class="shu4">
        <span class="span">分类：</span>
        <el-select v-model="select" slot="prepend" placeholder="请选择分组" size="mini">
          <el-option label="1" value="1"></el-option>
          <el-option label="2" value="2"></el-option>
          <el-option label="3" value="3"></el-option>
        </el-select>
      </div>
      <div class="shu4">
        <span class="span">状态：</span>
        <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </div>
      <div class="shu2">
        <span class="span">相似问题：</span>
       
          <img src="../assets/_R[A1(633XY]JL{DF)8}IDJ.png" width="360" /><br>
          <textarea rows="4" cols="20" class="input-kuan" placeholder="输入内容"></textarea><br>
          <el-button type="success" size="mini" class="button">提交</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: true
    };
  }
};
</script>
<style scoped>
.button{
    margin-left: 70px;
    margin-top: 10px;
}
.input-kuan {
  width: 358px;
  height: 190px;
  margin-left: 75px;
  margin-top: -4px;
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
.el1 {
  border: 2px solid rgb(79, 155, 4);
  width: 90px;
  color: rgb(40, 209, 6);
  font-size: 12px;
  cursor: pointer;
}
.shu1 {
  margin: 30px 0 0 200px;
}
.shu2 {
  margin: 30px 0 0 200px;
}
.shu3 {
  margin: 10px 0 0 275px;
}
.shu4 {
  margin: 10px 0 0 227px;
}
.wemti {
  width: 200px;
}
.span {
  font-size: 14px;
  margin-left: 5px;
}
.kuang {
  width: 900px;
  height: 630px;
  border: 1px solid rgb(184, 180, 180);
  margin: 10px 0 10px 270px;
}
#tian {
  height: 30px;
  margin-top: -37px;
  border-radius: 5px;
  border: 1px solid rgb(184, 180, 180);
  color: rgb(66, 64, 64);
  padding: 0 4px;
  /* margin-left: 300px; */
  float: right;
  margin-right: 30px;
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