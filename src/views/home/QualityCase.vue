<template>
  <div class="quality-case"  v-loading="loading">
    <h1 class="index-title">优质案例</h1>

    <div class="photo-list fl fl-warp">
      <div class="item" v-for="item in category" :key="item.id">
<!--        <img class="cover-img" :src="item.image ? ($baseUrl + item.image) :  '~@/assets/img/defaultImg.png'" alt="" />-->
        <img class="cover-img" :src="$baseUrl + item.image" v-if="item.image" alt="" />
        <img class="cover-img" src="~@/assets/img/defaultImg.png" v-if="!item.image" alt="" />
      </div>
      <div class="video-warp">
        <img
          @click="clickPlayBtn"
          class="video-btn"
          src="~@/assets/img/video-btn.png"
          alt=""
        />
        <video
          :src="$baseUrl + propVideo.vediofile"
          v-if="propVideo.id"
        ></video>
      </div>
    </div>
  </div>
</template>

<script>
import { homeCase } from "@/api/api.js";

export default {
  props: {
    propVideo: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      category: [],
      loading: true
    };
  },
  created() {
    this.getHomeCase();
  },
  methods: {
    // 优质服务
    async getHomeCase() {
      let { data } = await homeCase();
      this.loading = false;
      while (data.length < 8) {
        data.push({
          image: '',
          creatime: "1601281421",
          detail: "--",
          id: Math.random(),
        })
      }

      this.category = data.slice(0,8);

    },
    clickPlayBtn() {
        this.$emit('qualityCaseVideo', this.propVideo.vediofile)
    }
  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/variable.less";
.quality-case {
  margin: 154px auto 81px auto;

  h1 {
    width: @pageCenter;
    margin: 0 auto 81px auto;
  }

  .video-warp {
    width: 40%;
    // height: 100%;
    height: calc( 100vw / 5 );
    overflow: hidden;
    position: relative;
    float: left;

    .video-btn {
      position: absolute;
      z-index: 2;
      bottom: 78px;
      margin-left: 50%;
      transform: translateX(-50%);
      width: 58.5px;
      height: 83.5px;
      cursor: pointer;
    }

    video {
      width: 100%;
    }
  }

  .photo-list {
    .item {
      width: 20%;
      img{
          width: 100%;
          height: calc( 100vw / 5 );
      }
    }
  }
}
</style>
