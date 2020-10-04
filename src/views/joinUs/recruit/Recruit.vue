<template>
  <div>
    <el-carousel height="560px" :interval="4000">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="$baseUrl + item.image" alt="" class="cover-img" />
      </el-carousel-item>
    </el-carousel>
    <div class="search-select">
      <el-select v-model="select" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-input
        placeholder="请输入内容"
        v-model="searchValue"
        class="input-with-select"
      >
        <el-button slot="append">搜索</el-button>
      </el-input>
    </div>

    <table-list />
    <detail></detail>
  </div>
</template>

<script>
import { appBanner, appCode } from "@/api/api.js";
import TableList from "@/views/joinUs/recruit/TableList";
import Detail from "@/views/joinUs/recruit/Detail";
export default {
  name: "Recruit",
  components: {
    TableList,
    Detail,
  },

  data() {
    return {
      bannerList: [],
      searchValue: "",
      select: "",
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
  },
  methods: {
    // 轮播
    async getBanner() {
      let { data } = await appBanner();
      this.bannerList = data;
    },
  },
};
</script>

<style lang="less" scoped>
.search-select {
  margin-top: 30px;
  text-align: center;
  .el-input-group {
    width: 500px;
  }
}
</style>