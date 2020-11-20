<template>
  <div id="app">
    <div id="nav">
      <div class="fl jc-between header-content">
        <div class="fl align-center logo-name-location">
          <img class="logo" src="~@/assets/img/logo.png" alt="" />
          <img class="logo-name" src="~@/assets/img/logo-name.png" alt="" />
          <div class="location" @click="getLngLatLocation">
            <i class="el-icon-location-outline"></i>
            <span class="text">{{ locationInfo.city + " " }} </span>
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
          <el-menu-item index="/">
            <div>首页</div>
          </el-menu-item>
          <!-- <el-menu-item index="/freely-combine">
            <div>世隆房管</div>
          </el-menu-item> -->
          <el-menu-item index="/service">
            <div>服务</div>
          </el-menu-item>
          <el-menu-item index="/qi-yue-will">
            <div>世隆房管</div>
          </el-menu-item>
          <el-menu-item index="/join-us">
            <div>加入我们</div>
          </el-menu-item>

          <el-menu-item index="/download-app">
            <el-popover
              placement="bottom"
              trigger="hover"
              popper-class="popover-warp"
            >
              <div class="fl">
                <div v-for="item in codes" :key="item.id" class="for-codes">
                  <img :src="$baseUrl + item.image" alt="" class="code-img" />
                  <div class="code-title">{{ item.title }}</div>
                </div>
              </div>
              <div slot="reference">APP下载</div>
            </el-popover>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
    <router-view />
  </div>
</template>


<script>
import { appCode } from "@/api/api.js";
import axios from "axios";
import loadBMap from "./loadBMap.js";

export default {
  data() {
    return {
      activeIndex: "/",
      codes: [],
      locationInfo: {},
    };
  },

  created() {
    this.getCode();
    this.getLngLatLocation();
    //
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    // 二维码
    async getCode() {
      let { data } = await appCode();
      this.codes = data;
    },
    getLngLatLocation() {
      let url =
        "https://restapi.amap.com/v3/ip?key=d59d1b4870e9bcdd6e108a6d93c6309a";
      axios
        .get(url)
        .then(({ data }) => {
          if (data.info == "OK") {
            this.locationInfo = JSON.stringify(data);
            localStorage.setItem("location", this.locationInfo);
          } else {
            this.$message.error("定位失败");
          }
        })
        .then(() => {
          this.locationInfo = JSON.parse(this.locationInfo);
        });

      // return false;
      // let geolocation = new BMap.Geolocation();
      // geolocation.getCurrentPosition(position => {
      //   console.log(position)
      //   this.locationInfo = position.address
      //   if (position === null) {
      //     return false;
      //   }
      //   localStorage.setItem('location', this.locationInfo)
      // }, {
      //   enableHighAccuracy: true
      // })
    },
  },
};
</script>

<style lang="less">
@import "~@/assets/style/variable.less";
@import "~@/assets/style/common.less";
@import "~@/assets/style/reset.css";

.popover-warp {
  padding: 30px !important;

  .for-codes {
    text-align: center;

    .code-img {
      width: 137px;
      height: 137px;
    }

    .code-title {
      font-size: 18px;
      color: #646464;
      margin-top: 37px;
    }
  }
}

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
        padding: 0 15px;
        height: 26px;
        line-height: 26px;
        background: rgba(84, 84, 84, 0.7);
        border-radius: 13px;
        text-align: center;
        color: #fff;
        cursor: pointer;

        .text {
          margin-left: 10px;
        }
      }
    }

    .el-menu-demo {
      width: 100%;
      margin-left: 240px;
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
