<template>
  <div class="index">
    <div class="banner-warp" v-if="menuList.length" v-loading="loadingBanner">
      <img :src="$baseUrl + menuList[active].image" class="banner" alt="" />
      <ul class="menu" v-if="false">
        <li
          class="menu-item"
          v-for="(item, index) in menuList"
          :key="item.id"
          @click="changeMenu(index)"
        >
          <div>
            <div style="display: inline-block">
              <div>{{ item.name }}</div>
              <span
                class="border-bottom"
                :style="{ opacity: active === index ? 1 : 0 }"
              ></span>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="recruitment-position" v-loading="loadingPosition">
      <h1 class="index-title">招聘岗位</h1>
      <ul class="position-list fl jc-between">
        <li class="item" v-for="item in joinRecruitList" :key="item.id">
          <img :src="$baseUrl + item.image" alt="" />
          <span>{{ item.name }}</span>
        </li>
        <li class="item" @click="loadMore">
          <img src="~@/assets/img/more.png" alt="" />
        </li>
      </ul>
    </div>
    <!-- 员工关怀 -->
    <employee-care />
    <!-- 公司活动展示 -->
    <div class="company-activities" v-loading="loadingActivity">
      <!-- 展示 -->
      <h1 class="index-title">公司活动</h1>
      <div class="fl jc-between list">
        <div v-for="item in joinActivityList" :key="item.id" class="item">
          <img class="bg-img" :src="$baseUrl + item.image" alt="" />
          <div class="mask">
            <div class="icon">
              <i class="el-icon-d-arrow-right"></i>
            </div>

            <div class="item-title">{{ item.title }}</div>

            <div class="item-content">
              <div class="item-content-title">{{ item.title }}</div>
              <div class="line"></div>

              <div class="content-content">
                {{ item.detail }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="photo-list" v-loading="loadingCulture">
      <!-- <img class="bg-img" src="~@/assets/img/join-us-bg.png" alt="" /> -->
      <img class="bg-img" src="~@/assets/img/join-us-bg.png" alt="" />

      <div class="title-warp">
        <h1 class="index-title">公司文化</h1>
      </div>
      <ul class="img-list fl">
        <li class="item" v-for="(item, index) in joinCultureList" :key="index">
          <img :src="$baseUrl + item.image" alt="" />
          <div class="over-ellipsis text">{{ item.title }}</div>
        </li>
      </ul>
    </div>

    <div class="card-banner">
      <div class="warp" v-loading="loadingTeam">
        <h1 class="index-title">我的团队</h1>
        <el-carousel :interval="4000" type="card" height="580px">
          <el-carousel-item v-for="item in joinTeamList" :key="item.id">
            <div class="team">
              <img :src="item.image" class="item-img" alt="" />
              <div class="content">
                <div class="over-ellipsis title">{{ item.title }}</div>
                <div class="over-ellipsis-2 detail">{{ item.detail }}</div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <comme-footer :isShowDownloadCode="false" />
  </div>
</template>

<script>
import {
  joinBanner,
  joinRecruit,
  joinActivity,
  joinCulture,
  joinTeam,
} from "@/api/api.js";
import EmployeeCare from "@/views/joinUs/EmployeeCare";
import CommeFooter from "@/components/CommeFooter";
export default {
  components: {
    EmployeeCare,
    CommeFooter,
  },
  data() {
    return {
      active: 0,
      menuList: [],
      joinRecruitList: [],
      joinActivityList: [],
      joinCultureList: [],
      joinTeamList: [],
      loadingBanner: true, // 轮播
      loadingPosition: true, // 招聘岗位
      loadingActivity: true, // 公司活动
      loadingCulture: true, // 公司活动
      loadingTeam: true, // 我的团队
    };
  },
  created() {
    this.getMenuList();
    this.getJoinRecruit();
    this.getJoinActivity();
    this.getJoinCulture();
    this.getJoinTeam();
  },
  methods: {
    loadMore() {
      this.$router.push("/recruit");
    },
    async getMenuList() {
      let { data } = await joinBanner();
      this.menuList = data;
      this.loadingBanner = false;
    },
    changeMenu(index) {
      this.active = index;
    },

    // 招聘岗位
    async getJoinRecruit() {
      let { data } = await joinRecruit();
      this.joinRecruitList = data.slice(0, 3);
      this.loadingPosition = false;
    },

    //  活动展示
    async getJoinActivity() {
      let { data } = await joinActivity();
      this.joinActivityList = data;
      this.loadingActivity = false;
    },
    // 文化
    async getJoinCulture() {
      let { data } = await joinCulture();
      this.joinCultureList = data;
      this.loadingCulture = false;
    },

    // 团队
    async getJoinTeam() {
      let { data } = await joinTeam();
      console.log(data);
      this.joinTeamList = data;
      this.loadingTeam = false;
      while (this.joinTeamList.length < 3) {
        this.joinTeamList.push({
          image: require("../../assets/img/defaultImg.png"),
          id: -1,
          title: "标题",
          detail: "详情",
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/variable.less";
.index {
  .banner-warp {
    position: relative;
    .banner {
      width: 100%;
    }
    .menu {
      width: @pageCenter;
      margin: 0 auto;
      position: absolute;
      top: 135px;
      left: calc((100% - @pageCenter) / 2);
      z-index: 2;
      font-size: 26px;
      font-weight: bold;
      color: #ffffff;
      .menu-item {
        margin-bottom: 37px;
        cursor: pointer;
        .border-bottom {
          display: inline-block;
          width: 100%;
          height: 30px;
          background: #01ac66;
        }
      }
    }
  }

  /*招聘岗位*/
  .recruitment-position {
    width: @pageCenter;
    margin: 72px auto 0 auto;
    .position-list {
      margin-top: 55px;
      padding-bottom: 85px;
      border-bottom: @borderColor 2px solid;
      .item {
        width: 203px;
        text-align: center;
        line-height: 203px;
        font-size: 26px;
        cursor: pointer;
        position: relative;
        img {
          height: 203px;
          width: 203px;
          border-radius: 50%;
          object-fit: cover;
        }
        span {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          // top: 50%;
          z-index: 3;
          font-size: 26px;
          font-weight: 800;
          color: #ffffff;
        }
      }
    }
  }

  .company-activities {
    width: @pageCenter;
    margin: 70px auto 0 auto;
    .index-title {
      margin-bottom: 50px;
    }
    .list {
      flex-wrap: wrap;
      .item {
        width: 567px;
        height: 408px;
        margin-bottom: 38px;
        border-radius: 10px;
        overflow: hidden;
        position: relative;
        .bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .mask {
          height: 517px;
          width: 100%;
          position: absolute;
          top: 299px;
          z-index: 2;
          color: #fff;
          background: rgba(95, 95, 95, 0.7);

          border-radius: 10px;
          transition: 1s linear;
          overflow: hidden;
          &:hover {
            top: -109px;
          }

          .icon {
            height: 60px;
            line-height: 60px;

            font-weight: 600;
            font-size: 28px;
            text-align: center;
            .el-icon-d-arrow-right {
              cursor: pointer;
              transform: rotate(-90deg);
              -ms-transform: rotate(-90deg); /* IE 9 */
              -moz-transform: rotate(-90deg); /* Firefox */
              -webkit-transform: rotate(-90deg); /* Safari 和 Chrome */
              -o-transform: rotate(-90deg); /* Opera */
            }
          }

          .item-title {
            height: 49px;
            font-size: 26px;
            text-align: center;
            font-weight: bold;
          }

          .item-content {
            height: 408px;
            padding: 48px 92px 65px 92px;
            .item-content-title {
              text-align: center;
              font-size: 26px;
              font-family: Source Han Sans CN;
              font-weight: bold;
              line-height: 48px;
            }
            .line {
              width: 69px;
              height: 6px;
              background: #ffffff;
              margin: 16px auto 39px auto;
            }
            .content-content {
              font-size: 18px;
              line-height: 25px;
            }
          }
        }
      }
    }
  }

  .photo-list {
    width: 100%;
    position: relative;
    .bg-img {
      width: 100%;
      position: absolute;
      top: 0;
      z-index: -1;
    }
    .title-warp {
      // padding-top: 283px;
      padding-top: 138px;
      .index-title {
        
        margin-top: 20px;
        &::before{
          left: 45.5%;
        }
      }
    }

    .img-list {
      flex-wrap: wrap;
      // padding-top: 283px;
      padding-top: 23px;
      width: @pageCenter;
      margin: 0 auto;

      .item {
        width: 25%;
        height: 291px;
        position: relative;
        img {
          width: 100%;
          height: 291px;
          vertical-align: middle;
        }
        .text {
          width: 100%;
          position: absolute;
          z-index: 2;
          top: 50%;
          transform: translateY(-50%);
          text-align: center;
          font-size: 37px;
          font-weight: 800;
          color: #ffffff;
        }
      }
    }
  }

  .card-banner {
    margin-bottom: 106px;
    .warp {
      width: @pageCenter;
      margin: 0 auto;
      .index-title {
        margin: 103px auto 40px auto;
      }
    }
    .el-carousel__item .item-img {
      width: 436px;
      height: 580px;
      color: #475669;
      object-fit: cover;
      margin: 0;
    }
    .team {
      position: relative;
      width: 100%;

      .content {
        color: #fff;
        text-align: center;
        position: absolute;
        z-index: 2;
        bottom: 0;
        width: 436px;
        height: 196px;
        background: rgba(100, 100, 100, 0.8);
        .title {
          font-size: 26px;
          font-weight: bold;
          margin: 47px 0 31px 0;
        }
        .detail {
          font-size: 18px;
          line-height: 25px;
        }
      }
    }
  }
}
</style>