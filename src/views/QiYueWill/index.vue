<template>
  <div>
    <el-carousel height="560px" :interval="4000" v-loading="loadingCarousel">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="$baseUrl + item.image" alt="" class="cover-img" />
      </el-carousel-item>
    </el-carousel>
    <div class="platform-welfare" v-loading="loadingWelfare">
      <h1 class="index-title">平台福利</h1>
      <div class="platform-welfare-list">
        <div class="fl list">
          <div v-for="item in welfare" :key="item.id" class="item">
            <img :src="$baseUrl + item.image" alt="" v-if="item.image" />
            <img v-if="!item.image" src="~@/assets/img/defaultImg.png" alt="" />
            <div class="over-ellipsis title">{{ item.title }}</div>
            
            <el-popover
              placement="top-start"
              width="200"
              trigger="hover"
              :content="item.detail"
            >
              <div slot="reference" class="over-ellipsis content">
                {{ item.detail }}
              </div>
            </el-popover>
          </div>
        </div>
      </div>
    </div>

    <!-- 产品展示 -->
    <div class="product-display" v-loading="loadingService">
      <h1 class="index-title">产品展示</h1>
      <div class="fl jc-between" v-if="serviceData.length">
        <div class="left-meau">
          <div class="fl jc-between left-top">
            <div class="left-meau-left">
              <div
                class="item"
                :class="{ 'is-active': active == index }"
                v-for="(item, index) in serviceData"
                :key="item.id"
                @click="changeActive(index)"
              >
                {{ item.title }}
              </div>
            </div>
            <div class="left-meau-scrool"></div>
          </div>

          <!-- <div class="title">{{ serviceData[active].title }}</div>
          <div class="sub-title">{{ serviceData[active].subtitle }}</div> -->
        </div>
        <div class="right-img">
          <img :src="$baseUrl + serviceData[active].image" alt="" />
        </div>
      </div>

      <div class="content" v-if="serviceData.length">
        {{ serviceData[active].detail }}
      </div>
    </div>

    <!-- 会员动态 -->
    <member-news></member-news>
    <!-- 合作伙伴 -->
    <cooperative-partner />
  </div>
</template>

<script>
import { companyIndex, companyProduct, companyWelfare } from "@/api/api.js";
import MemberNews from "@/views/QiYueWill/MemberNews";
import CooperativePartner from "@/views/QiYueWill/CooperativePartner";

export default {
  components: {
    MemberNews,
    CooperativePartner,
  },
  data() {
    return {
      bannerList: [],
      welfare: [],
      serviceData: [],
      active: 0,
      loadingCarousel: true,
      loadingWelfare: true, // 平台福利
      loadingService: true, // 产品展示
    };
  },
  created() {
    this.getIndex();
    this.getCompanyWelfare();

    this.getCompanyProduct();
  },
  methods: {
    // 轮播
    async getIndex() {
      let { data } = await companyIndex();
      this.bannerList = data;
      this.loadingCarousel = false;
    },
    //
    //  平台福利
    async getCompanyWelfare() {
      let { data } = await companyWelfare();
      this.welfare = data;
      this.loadingWelfare = false;
      while (this.welfare.length < 4) {
        this.welfare.push({
          image: "",
          detail: "--",
          title: "--",
        });
      }
    },
    async getCompanyProduct() {
      let { data } = await companyProduct();
      this.serviceData = data.slice(0, 2);
      this.loadingService = false;
    },
    // 服务项目
    changeActive(index) {
      this.active = index;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/variable.less";

// 平台福利
.platform-welfare {
  width: @pageCenter;
  margin: 0 auto;
  padding-bottom: 91px;
  border-bottom: 2px solid #d6d6d6;

  h1 {
    margin: 60px auto 60px auto;
  }

  .platform-welfare-list {
    width: @pageCenter;
    margin: 0 auto;
    text-align: center;

    .list {
      text-align: center;
      .item {
        width: 25%;
        img {
          height: 139px;
        }
      }
      .title {
        font-size: 26px;
        font-weight: bold;
        color: #666666;
        margin: 59px 0 13px 0;
      }

      .content {
        font-size: 18px;
        color: #656565;
      }
    }
  }
}

// 产品展示
.product-display {
  width: @pageCenter;
  margin: 0 auto;
  padding-bottom: 90px;
  border-bottom: solid 2px @borderColor;

  .index-title {
    margin: 93px 0 66px 0;
  }

  .left-meau {
    .left-top {
      height: 381px;
      overflow-y: hidden;
      .left-meau-left {
        .item {
          font-size: 24px;
          font-weight: bold;
          color: #646464;
          cursor: pointer;
          &:nth-of-type(1) {
            margin-top: 14px;
          }
          &:nth-of-type(2) {
            margin: 115px 0;
          }
        }
        .is-active {
          color: #191f12;
          // border-bottom: 10px solid rgb(0, 174, 102);
          border-bottom: 10px solid rgb(255, 174, 59);
        }
      }
    }

    .title {
      margin: 82px 0 23px 0;
      font-size: 37px;
      font-weight: 800;
      color: #191f12;
    }
    .sub-title {
      font-size: 26px;
      font-weight: bold;
      color: #646464;
    }
  }

  .right-img {
    width: 790px;
    height: 343px;
    box-shadow: 0px 0px 16px 0px rgba(208, 208, 208, 0.56);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .content {
    margin-top: 57px;
    /*width: 832px;*/
    width: 790px;
    margin-left: calc(@pageCenter - 790px);
    font-size: 18px;
    font-weight: 400;
    color: #646464;
    line-height: 35px;
  }
}
</style>