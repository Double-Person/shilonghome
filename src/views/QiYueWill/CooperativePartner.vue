<template>
  <div class="warp" v-loading="loading">
    <div class="cooperative-partner">
      <h1 class="index-title">合作伙伴</h1>
      <ul class="list fl fl-warp jc-between">
        <li v-for="item in cooperative" :key="item.id" class="item">
          <img :src="$baseUrl + item.image" alt="" class="cover-img" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { companyPartner } from "@/api/api.js";
export default {
  data() {
    return {
      cooperative: [],
      loading: true
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      let { data } = await companyPartner();
      this.cooperative = data;
      this.loading = false
    },
  },
};
</script>


<style lang="less" scoped>
@import "~@/assets/style/variable.less";
.warp {
  background: #eee;
  .cooperative-partner {
    width: @pageCenter;
    margin: 0 auto;
    padding-top: 71px;

    .index-title {
      // padding: 71px 0 52px 0;
      margin: 0 0 52px 0;
    }

    .list {
      padding-bottom: 81px;
      .item {
        width: 263px;
        height: 125px;
        margin-bottom: 30px;
      }
    }
  }
}
</style>