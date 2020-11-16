<template>
  <div class="app">
    <div class="add">
      
      <div class="tou">
        <img src="../assets/2.png" />
        <span>WEB在线客服管理系统</span>
      </div>
      <div class="ding">
        <div class="you">
          <p @click="tab=1" :class="{one:tab==1}">首页</p>
          <p @click="tab=2" :class="{one:tab==2}">统计</p>
          <p @click="tab=3" :class="{one:tab==3}">客服</p>
          <p @click="tab=4" :class="{one:tab==4}">历史</p>
          <p @click="tab=5" :class="{one:tab==5}">客户</p>
          <p @click="tab=6" :class="{one:tab==6}">公告</p>
          <p @click="tab=7" :class="{one:tab==7}">知识</p>
          <p @click="tab=8" :class="{one:tab==8}">对话</p>
          <p @click="tab=9" :class="{one:tab==9}">权限</p>
          <p @click="tab=10" :class="{one:tab==10}">设置</p>
        </div>
        <div class="you2" v-show="tab==1">
          <p class="ming">系统首页</p>
          <router-link class="ming1" tag="p" to="/xitongshouye">系统首页</router-link>
          <router-link class="ming1" tag="p" to="/gerenzhiliao">个人资料设置</router-link>
          <router-link class="ming1" tag="p" to="/xiaoxizhongxin">消息中心</router-link>
          <router-link class="ming1" tag="p" to="/denglurzi">登录日志</router-link>
        </div>
        <div class="you2" v-show="tab==2">
          <p class="ming">统计分析</p>
          <router-link class="ming1" tag="p" to="/zonglantongji">总览统计</router-link>
          <router-link class="ming1" tag="p" to="/kefutongji">客服统计</router-link>
          <router-link class="ming1" tag="p" to="/liuyantongji">留言统计</router-link>
          <router-link class="ming1" tag="p" to="/jiqiren">机器人统计</router-link>
        </div>
        <div class="you2" v-show="tab==3">
          <p class="ming">客服管理</p>
          <router-link class="ming1" tag="p" to="/liebiao">客服列表</router-link>
          <router-link class="ming1" tag="p" to="/xiaozhu">客服小组</router-link>
        </div>
        <div class="you2" v-show="tab==4">
          <p class="ming">历史管理</p>
          <p class="ming1">历史列表</p>
        </div>
        <div class="you2" v-show="tab==5">
          <p class="ming">客户管理</p>
          <p class="ming1">客户列表</p>
        </div>
        <div class="you2" v-show="tab==6">
          <p class="ming">公告管理</p>
          <p class="ming1">公告列表</p>
        </div>
        <div class="you2" v-show="tab==7">
          <p class="ming">知识管理</p>
          <p class="ming1">知识列表</p>
          <p class="ming1">发布知识</p>
          <p class="ming1">分类管理</p>
        </div>
        <div class="you2" v-show="tab==8">
          <p class="ming">对话平台</p>
          <p class="ming1">当前会话</p>
          <p class="ming1">呼叫中心</p>
          <p class="ming1">留言管理</p>
          <p class="ming1">工单管理</p>
          <p class="ming1">发布工单</p>
        </div>
        <div class="you2" v-show="tab==9">
          <p class="ming">权限管理</p>
          <p class="ming1">角色管理</p>
          <p class="ming1">成员管理</p>
          <p class="ming1">角色说明</p>
          <p class="ming1">操作日志</p>
        </div>
        <div class="you2" v-show="tab==10">
          <p class="ming">客服设置</p>
          <p class="ming1">快捷回复</p>
          <p class="ming1">绩效设置</p>
          <p class="ming1">站点设置</p>
          <p class="ming1">短信设置</p>
        </div>
      </div>
    </div>
    <div class="kong"></div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "gongyong",
  data() {
    return {
      tab: "1"
    };
  }
};
</script>
<style scoped>
.kong{
  padding-top: 40px;
}
.ding {
  position: fixed;
  top:40px;
}
.one {
  color: rgb(0, 0, 8) !important;
  background-color: rgb(234, 237, 241);
}
.tou {
  width: 1280px;
  height: 40px;
  background-color: rgb(18, 233, 161);
  line-height: 40px;
  color: rgb(252, 248, 248);
  position: fixed;
  z-index: 10;
}
.tou img {
  width: 20px;
  margin: 0 20px;
  /* display: none */
}
.you {
  width: 65px;
  height: 547px;
  background-color: rgb(83, 82, 82);
  color: rgb(247, 244, 244);
  /* padding-top: 10px; */
  float: left;
}
.you p {
  cursor: pointer;
  padding: 10px 0 10px 10px;
}
.you2 {
  width: 110px;
  height: 545px;
  float: left;
  background-color: rgb(234, 237, 241);
  /* padding-left: 10px; */
  border-right: 1px solid rgb(184, 180, 180);
}
.ming {
  padding: 10px 20px;
  font-size: 17px;
  color: rgb(158, 158, 158);
  border-bottom: 2px solid rgb(231, 224, 224);
}
.ming1 {
  padding: 10px 0px;
  text-align: center;
  font-size: 14px;
  border-bottom: 2px solid rgb(231, 224, 224);
  cursor: pointer;
  color: rgb(158, 158, 158);
}
</style>