<template>
  <div class="home">
    <el-carousel height="560px" :interval="4000">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="$baseUrl + item.image" alt="" class="cover-img" />
      </el-carousel-item>
    </el-carousel>
    <!-- 服务项目 -->
    <service-project />
    <!-- 视频 -->

    <div class="video-warp" @click="playVideo(videos.vediofile)" v-loading="loadingVideo">
      <img
        class="video-btn"
        src="~@/assets/img/video-btn.png"
        alt=""
        @click="playVideo(videos.vediofile)"
      />
      <video :src="$baseUrl + videos.vediofile" class="cover-img video-class"></video>
    </div>

    <div class="bg-img">
      <!-- 优质服务 -->
      <quality-service />
      <!-- 优质案例 -->
      <quality-case :propVideo="propVideo" @qualityCaseVideo="qualityCaseVideo" />
      <!-- 新闻动态 -->
      <news />
    </div>
    <comme-footer />
    <!-- 视频播放蒙版 -->
    <div
      class="play-video-mask"
      v-show="isShowMsk"
      @click.stop.capture="isShowMsk = false"
    >
      <video
        :src="$baseUrl + finallyVideoUrl"
        class="cover-img-mask"
        controls
        ref="video"
      ></video>
    </div>
  </div>
</template>

<script>
import { homeIndex, homeVideo } from "@/api/api.js";
import ServiceProject from "@/views/home/ServiceProject";
import QualityService from "@/views/home/QualityService";
import QualityCase from "@/views/home/QualityCase";
import News from "@/views/home/News";
import CommeFooter from "@/components/CommeFooter";

export default {
  name: "Index",
  components: {
    ServiceProject,
    QualityService,
    QualityCase,
    News,
    CommeFooter,
  },
  data() {
    return {
      loadingVideo: true,
      isShowMsk: false,
      bannerList: [],
      serviceData: [],
      videos: {},
      propVideo: {},
      finallyVideoUrl: ''
    };
  },
  watch: {
    isShowMsk(oldVal, newVal) {
      if (oldVal) {
        this.$refs.video.play();
      } else {
        this.$refs.video.pause();
      }
    },
  },
  created() {
    this.getHomeIndex();
    this.getVideo();
  },
  methods: {
    // 轮播
    async getHomeIndex() {
      let { data } = await homeIndex();
      this.bannerList = data;
    },
    async getVideo() {
      let { data } = await homeVideo();
      this.videos = data[0];
      this.loadingVideo = false;
      if (data.length > 1) {
        this.propVideo = data[1]
      }

    },
    playVideo(url) {
      this.isShowMsk = true;
      this.finallyVideoUrl = url
      // document.onmousewheel = (e) => {
      //   console.log('-----')
      //   var e = e || window.event;
      //   if(e.wheelDelta && event.ctrlKey){
      //       event.returnValue = false
      //   }else if ( e && e.preventDefault ){
      //       e.preventDefault();
      //   }if(e.detail){
      //       event.returnValue = false;
      //   }

      // }
      // document.onscroll = () => {
      //   console.log('***********')
      // }
    },

    qualityCaseVideo(url) {
      this.playVideo(url)
    }
  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/variable.less";
.video-warp {
  margin-top: 86px;
  width: 100%;
  height: 525px;
  position: relative;
  .video-btn {
    position: absolute;
    z-index: 2;
    bottom: 78px;
    margin-left: 50%;
    transform: translateX(-50%);
    width: 59px;
    height: 88px;
    cursor: pointer;
  }
  .video-class{
        object-fit: fill;
  }
}

.play-video-mask {
  background: rgba(190, 204, 224, 0.4);
  position: fixed;
  left: 0;
  // right: 0;
  top: 0;
  // bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 8;
  .cover-img-mask {
    width: 1390px;
    height: 522px;
    object-fit: fill;
    position: relative;
    z-index: 7;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    // margin-left: 50%;
    // margin-top: 5vh;
    // transform: translateX(-50%);
  }
}
.bg-img {
  margin-top: 86px;
  // background-image: url("~@/assets/img/index-bgc.png");
  // background-size: 93%;
}
</style>