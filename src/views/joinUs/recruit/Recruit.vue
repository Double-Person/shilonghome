<template>
  <div>
    <el-carousel height="560px" :interval="4000">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="$baseUrl + item.image" alt="" class="cover-img" />
      </el-carousel-item>
    </el-carousel>
    <div class="search-select">
      
      <el-input
        placeholder="请输入内容"
        v-model="name"
        class="input-with-select"
      >
        <el-button slot="append" @click="searchInput">搜索</el-button>
      </el-input>
    </div>


    <table-list
      v-show="isShowTable"
      :searchList="searchList"
      @clickInfo="clickInfo"
    />
    <detail v-show="!isShowTable" ref="detail" />

    <comme-footer :isShowDownloadCode="false"></comme-footer>
  </div>
</template>

<script>
import CommeFooter from '@/components/CommeFooter'
import { appBanner, appCode, jonLike } from "@/api/api.js";
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
      name: "", // 搜索框
      searchList: [],
      select: "",
      listData: {
        one: "",
      },
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
      ],
    };
  },
  created() {
    this.getBanner();
    this.searchInput();
  },
  methods: {
    // 轮播
    async getBanner() {
      let { data } = await appBanner();
      this.bannerList = data;
    },
    // 搜索按钮
    async searchInput() {
      console.log(this.name);
      let { data } = await jonLike({ name: this.name });
      this.searchList = data;
    },
    clickInfo(val) {
      
      let arr = [val];
      this.$refs.detail.getInfoData(arr);
      this.isShowTable = false;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/variable.less";
.search-select {
  width: @pageCenter;
  margin: 30px auto 0 auto;
  // margin-top: 30px;
  text-align: center;
  .el-input-group {
    width: 884px;
  }
}


</style>