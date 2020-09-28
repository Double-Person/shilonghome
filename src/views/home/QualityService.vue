<template>
  <div class="quality-service">
    <h1 class="index-title">优质服务</h1>
    <div class="fl jc-between">
      <div class="left-meau">
        <div class="fl jc-between left-top">
          <div class="left-meau-left" v-for="(item, index) in category" :key="item.id">
            <div class="item" :class="{'is-active': active == index}">{{item.name}}</div>
          </div>
          <div class="left-meau-scrool"></div>
        </div>

        <div class="title">{{category[active].title}}</div>
        <div class="sub-title">{{category[active].subtitle}}</div>
      </div>
      <div class="right-img">
        <img
          :src="$baseUrl + category[active].image"
          alt=""
        />
      </div>
    </div>

    <div class="content">{{category[active].detail}}</div>
  </div>
</template>

<script>
import { homeCategory } from "@/api/api.js";
export default {
  data() {
    return {
      category: [],
      active:0
    };
  },
  created() {
    this.getHomeCategory();
  },
  methods: {
    // 优质服务
    async getHomeCategory() {
      let { data } = await homeCategory();
      this.category = data;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/variable.less";
.quality-service {
  width: @pageCenter;
  margin: 0 auto;
  h1 {
    margin: 26px 0 48px 0;
  }

  .left-meau {
    .left-top {
      height: 381px;
      overflow-y: auto;
      .left-meau-left {
        .item {
          font-size: 26px;
          font-weight: bold;
          color: #646464;
          &:nth-of-type(1) {
            margin-top: 37px;
          }
          &:nth-of-type(2) {
            margin: 115px 0;
          }
        }
        .is-active {
          color: #191f12;
          border-bottom: 10px solid rgb(0, 174, 102);
        }
      }
      .left-meau-scrool {
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
    width: 832px;
    height: 576px;
    box-shadow: 0px 0px 16px 0px rgba(208, 208, 208, 0.56);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .content {
    margin-top: 57px;
    width: 719px;
    font-size: 18px;
    font-weight: 400;
    color: #646464;
    line-height: 35px;
  }
}
</style>