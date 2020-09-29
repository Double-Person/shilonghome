<template>
  <div>
    <el-carousel height="560px" :interval="4000">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="$baseUrl + item.image" alt="" class="cover-img" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>


<script>
import { appBanner, appCode } from "@/api/api.js";

export default {
  data() {
    return {
      bannerList: [],
    };
  },
  created() {
    this.getBanner();
    this.getCode();
  },
  methods: {
    // 轮播
    async getBanner() {
      let { data } = await appBanner();
      this.bannerList = data;
    },
    // 二维码
    async getCode() {
      let { data } = await appCode();
      // this.bannerList = data;
      console.log(data);
    },
  },
};
</script>
