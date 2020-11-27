<template>
  <div>
    <!-- <el-carousel height="560px" :interval="4000">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.image" alt="" class="cover-img" />
      </el-carousel-item>
    </el-carousel> -->
    <img :src="$baseUrl + info.banner_image" alt="" class="banner-img" v-if="info.banner_image" />

    <div class="warp">
      <div class="title">{{info.title}}</div>
      <div class="subtitle">{{info.subtitle}}</div>
      <img :src="$baseUrl + info.image" alt="" class="cover-img" />
      <div v-html="info.detail" class="content"></div>
    </div>
  </div>
</template>

<script>
import { serviceDetail } from "@/api/api.js";
export default {
  name: "ServiceProjectDetail",
  data() {
    return {
      info: {}
    };
  },
  created() {
    console.log(this.$route.params.id);
    this._serviceDetail(this.$route.params.id)
  },
  methods: {
     async _serviceDetail(id) {
      let { data } = await serviceDetail({ id });
      this.info = data;
      console.log(this.info)
    },
  }
};
</script>

<style lang="less" scoped>
.banner-img{
  width: 100%;
}
.warp {
  width: 720px;
  margin: 117px auto;
  .title {
        font-size: 37px;
    font-weight: 800;
    color: #192013;
    margin: 117px auto 21px auto;
    text-align: center;
  }
  .subtitle{
    font-size: 26px;
    font-weight: bold;
    color: #646464;
    margin-bottom: 67px;
    text-align: center;
  }
  .content{
    margin-top: 30px;
  }
}
</style>