<template>
  <div class="service-project" v-loading="loading">
    <h1 class="index-title">服务项目</h1>
    <ul class="list fl jc-between">
      <li
        class="item"
        v-for="item in serviceData"
        :key="item.id"
        @click="toDetail(item.id)"
      >
        <div class="img">
          <img
            class="cover-img"
            v-if="item.image"
            :src="$baseUrl + item.image"
            alt=""
          />
          <img
            class="cover-img"
            v-if="!item.image"
            src="~@/assets/img/defaultImg.png"
            alt=""
          />
        </div>
        <div class="title-content">
          <div class="title over-ellipsis">{{ item.title }}</div>
          <div class="sub-title over-ellipsis">{{ item.subtitle }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { homeService } from "@/api/api.js";

export default {
  data() {
    return {
      serviceData: [],
      loading: true
    };
  },
  created() {
    this.getHomeService();
  },
  methods: {
    // 服务项目
    async getHomeService() {
      let { data } = await homeService();
      this.serviceData = data;
      this.loading = false

      while (this.serviceData.length < 4) {
        this.serviceData.push({
          image: "",
          subtitle: "",
          title: "",
        });
      }
    },
    // 跳转详情
    // /service-project-detail/:id
    toDetail(id) {
      this.$router.push("/service-project-detail/" + id);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/variable.less";
// 服务项目
.service-project {
  width: @pageCenter;
  margin: 0 auto;

  h1 {
    margin: 60px auto 48px auto;
  }

  .list {
    width: 100%;

    .item {
      width: 265px;
      cursor: pointer;
      text-align: center;
      position: relative;

      .img {
        border-radius: 4px;
        height: 205px;
        overflow: hidden;
      }

      .title-content {
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);
        border-radius: 2px;
        padding: 20px 0;
        position: absolute;
        bottom: -43px;
        background-color: #fff;
        margin-left: 10%;
        z-index: 2;
        width: 80%;
        .title {
          font-size: 24px;
          font-weight: bold;
          color: #191f12;
        }

        .sub-title {
          font-size: 15px;
          font-weight: 400;
          color: #646464;
        }
      }
    }
  }
}
</style>