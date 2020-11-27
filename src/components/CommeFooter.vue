<template>
  <footer class="footer">
    <div class="warp-menu">
      <ul class="menu fl align-center">
        <li v-for="(item, index) in menuList" :key="index" @click="network(item.href)">{{ item.name }}</li>
      </ul>
    </div>
    <!-- margin: 53px auto 101px auto; -->
    <div class="web-info fl" :style="{ 'margin-bottom': isShowDownloadCode ? '101px' : '74px' }">
      <div class="logo-img fl align-center">
        <img class="logo" src="~@/assets/img/logo.png" alt="" />
        <div>世隆房管</div>
      </div>
      <div class="introduce">
        <div>{{footerInfo.title}}</div>
        <div>{{footerInfo.name }}</div>
        <div>
          违法和不良信息举报电话：{{footerInfo.phone }}
          违法和不良信息举报邮箱：{{footerInfo.email }}
        </div>
      </div>
    </div>

    <div class="download" v-if="isShowDownloadCode" v-show="showDownLoad">
      <div class="download-warp">
        <div class="title">扫描下载APP</div>
        <div class="code-warp">
          <div v-for="item in codes" :key="item.id" class="code-list">
            <img :src="$baseUrl + item.image" alt="" class="code-img" />
            <div class="code-title">{{ item.title }}</div>
          </div>
        </div>

        <div class="close" @click="closeDownLoad">
          <i class="el-icon-close"></i>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { appCode, homeHref, homeBottom } from "@/api/api.js";
export default {
  props: {
    isShowDownloadCode: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      menuList: [],
      codes: [],
      footerInfo: {},
      showDownLoad: true
    };
  },
  created() {
    this.getCode();
    this.getMenuList();
    this.getBottom();
  },
  methods: {
    // 二维码
    async getCode() {
      let { data } = await appCode();
      this.codes = data;
    },
    async getMenuList() {
      let { data } = await homeHref()
      this.menuList = data
    },
   async getBottom() {
      let { data } = await homeBottom()
      this.footerInfo = data[0];
   },
    network(path) {
      console.log(path);
      let url = 'http://' + path
      window.open(url, '_back')

      // window.location.href = url
    },

    closeDownLoad() {
      this.showDownLoad = false;
    }
  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/variable.less";
.footer {
  width: 100%;

  .warp-menu {
    border-top: 2px solid @borderColor;
    border-bottom: 2px solid @borderColor;
    height: 94px;
    .menu {
      width: @pageCenter;
      margin: 0 auto;
      height: 100%;
      li {
        margin-right: 77px;
        line-height: 100%;
        font-size: 24px;
        color: #646464;
        cursor: pointer;
      }
    }
  }

  .web-info {
    justify-content: baseline;
    width: @pageCenter;
    margin: 53px auto 101px auto;
    padding-bottom: 148px;
    .logo-img {
      height: 41px;
      .logo {
        width: 40px;
        height: 40px;
      }
      div {
        font-size: 31px;
        font-family: FZTanHeiS-B-GB;
        font-weight: 400;
        color: #646464;
        margin: 0 34px 0 23px;
      }
    }
    .introduce {
      font-size: 18px;
      color: #646464;
      height: 80px;
      justify-content: space-between;
      flex-direction: column;
    }
  }

  .download {
    height: 130px;
    background: #ffffff;
    position: fixed;
    z-index: 8;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0px 0px 16px 0px rgba(162, 162, 162, 0.56);
    .download-warp {
      position: relative;
      width: @pageCenter;
      margin: 0 auto;

      .close{
        position: absolute;
        top: 20px;
        right: 0;
        cursor: pointer;
      }
      .title {
        font-size: 24px;
        font-weight: 500;
        color: #192013;
        line-height: 148px;
      }

      .code-warp {
        position: absolute;
        left: 175px;
        bottom: 0;
        height: 125px;

        .code-list {
          height: 125px;
          margin-right: 28px;
          .code-img {
            vertical-align: middle;
            width: 82px;
            height: 82px;
            box-shadow: 0px 0px 16px 0px rgba(162, 162, 162, 0.56);
          }
          .code-title {
            font-size: 15px;
            color: #646464;
            text-align: center;
            height: 50px;
            line-height: 30px;
          }
        }
      }
    }
  }
}
</style>