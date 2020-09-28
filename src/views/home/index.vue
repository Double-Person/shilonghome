<template>
  <div class="home">
    <el-carousel height="560px" :interval="4000">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="$baseUrl + item.image" alt="" />
      </el-carousel-item>
    </el-carousel>

    <!-- 服务项目 -->
    <div class="service-project">
      <h1 class="index-title">服务项目</h1>
      <ul class="list fl jc-between">
        <li class="item" v-for="item in 4" :key="item">
          <div class="img">
            <img
              src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
              alt=""
            />
          </div>
          <div class="title over-ellipsis">项目名称</div>
          <div class="sub-title over-ellipsis">项目名称副标题</div>
        </li>
      </ul>
    </div>

    <!-- 视频 -->
    <video-item></video-item>

    <div class="bg-img">
      <!-- 优质服务 -->
      <quality-service></quality-service>

      <!-- 优质案例 -->
      <quality-case></quality-case>

      <!-- 新闻动态 -->
      <news></news>
    </div>
  </div>
</template>

<script>
import { homeIndex, homeService } from "@/api/api.js";
import VideoItem from "@/views/home/VideoItem";
import QualityService from "@/views/home/QualityService";
import QualityCase from "@/views/home/QualityCase";
import News from "@/views/home/News";
export default {
  name: "Index",
  components: {
    VideoItem,
    QualityService,
    QualityCase,
    News,
  },
  data() {
    return {
      bannerList: [],
    };
  },
  created() {
    this.getHomeIndex();
    this.getHomeService();
  },
  methods: {
    // 轮播
    async getHomeIndex() {
      let { data } = await homeIndex();
      this.bannerList = data;
    },
    // 服务项目
    async getHomeService() {
      let { data } = await homeService();
      console.log(data);
      //  this.bannerList = data
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
    margin: 86px auto 48px auto;
  }
  .list {
    width: 100%;
    .item {
      width: 265px;
      .img {
        border-radius: 4px;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .title {
        font-size: 26px;
        font-weight: bold;
        color: #191f12;
        margin: 25px 0 13px 0;
      }
      .sub-title {
        font-size: 18px;
        font-weight: 400;
        color: #646464;
      }
    }
  }
}

.bg-img {
  background-image: url("~@/assets/img/index-bgc.png");
  background-size: 1437;
}
</style>