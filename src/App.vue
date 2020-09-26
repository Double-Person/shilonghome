<template>
  <div id="app">
    <div id="nav">
      <div class="fl jc-between header-content">
        <div class="fl align-center logo-name-location">
          <img class="logo" src="~@/assets/img/logo.png" alt="" />
          <img class="logo-name" src="~@/assets/img/logo-name.png" alt="" />
          <div class="location">
            <i class="el-icon-location-outline"></i>
            <span class="text">北京</span>
          </div>
        </div>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          router
          text-color="#ffffff"
          active-text-color="#ffffff"
          @select="handleSelect"
        >
          <el-menu-item index="/"><div>首页</div></el-menu-item>
          <el-menu-item index="/freely-combine"><div>自如寓</div></el-menu-item>
          <el-menu-item index="/service"><div>服务</div></el-menu-item>
          <el-menu-item index="/qi-yue-will"><div>企悦会</div> </el-menu-item>
          <el-menu-item index="/join-us"> <div>加入我们</div> </el-menu-item>
          <el-menu-item index="/download-app">
            <div>APP下载</div>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less">
@import "~@/assets/style/variable.less";
@import "~@/assets/style/common.less";
@import "~@/assets/style/reset.css";
#nav {
  height: 60px;
  width: 100%;
  background: rgba(84, 84, 84, 0.6);
  position: fixed;
  top: 0;
  z-index: 9;
  .header-content {
    width: @pageCenter;
    margin: 0 auto;
    .logo-name-location {
      .logo {
        width: 40px;
        height: 40px;
      }
      .logo-name {
        width: 118px;
        height: 23px;
        margin: 0 37px 0 7px;
      }
      .location {
        width: 70px;
        height: 26px;
        line-height: 26px;
        background: rgba(84, 84, 84, 0.7);
        border-radius: 13px;
        text-align: center;
        color: #fff;
        .text {
          margin-left: 10px;
        }
      }
    }
    .el-menu-demo {
      width: 100%;
      margin-left: 181px;
      border: none;
      display: flex;
      .el-menu-item {
        flex: 1;
        text-align: center;
        border: none;
        div {
          display: inline-block;
          height: 44px;
          line-height: 44px;
          padding: 0 16px;
        }
        &:hover {
          background: rgba(255, 255, 255, 0) !important;
        }
      }
      .is-active {
        background: rgba(255, 255, 255, 0) !important;
        border: none;
        div {
          border-bottom: 2px solid #fff;
        }
      }
    }
  }
}

.el-menu {
  background: rgba(255, 255, 255, 0) !important;
}
</style>
