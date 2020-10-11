<template>
  <div>
    <el-carousel height="560px" :interval="4000">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="$baseUrl + item.image" alt="" class="cover-img" />
      </el-carousel-item>
    </el-carousel>
   


    <table-list
      v-show="isShowTable"
      @clickInfo="clickInfo"
    />
    <detail v-show="!isShowTable" ref="detail" />

    <comme-footer :isShowDownloadCode="false"></comme-footer>
  </div>
</template>

<script>
import CommeFooter from '@/components/CommeFooter'
import { appBanner, appCode } from "@/api/api.js";
import TableList from "@/views/joinUs/recruit/TableList";
import Detail from "@/views/joinUs/recruit/Detail";
export default {
  name: "Recruit",
  components: {
    TableList,
    Detail,
    CommeFooter
  },

  data() {
    return {
      isShowTable: true,
      bannerList: [],
     
     
    };
  },
  created() {
    this.getBanner();
  },
  methods: {
    // 轮播
    async getBanner() {
      let { data } = await appBanner();
      this.bannerList = data;
    },
   
    clickInfo(val) {
      let arr = [val];
      this.$refs.detail.getInfoData(arr);
      this.isShowTable = false;
    },
  },
};
</script>
