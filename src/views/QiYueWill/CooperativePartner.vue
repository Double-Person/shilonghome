<template>
  <div class="warp" v-loading="loading">
    <div class="cooperative-partner">
      <h1 class="index-title">合作伙伴</h1>
      <!-- jc-around jc-between -->
      <ul
        class="list fl fl-warp"
        :class="cooperative.length < 6 ? 'jc-around' : 'jc-between'"
      >
        <li v-for="(item, index) in cooperative" :key="item.id" class="item">
          <img
            v-show="!errList.some((e) => e == index)"
            :src="$baseUrl + item.image"
            alt=""
            class="cover-img"
            @error="errList.push(index)"
          />
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
      errList: [],
      loading: true,
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      let { data } = await companyPartner();
      this.cooperative = data;
      this.loading = false;
      if (this.cooperative.length > 6) {
        let less = 6 - (this.cooperative.length % 6);
        
        if (less == 6) return false;
        for (let i = 0; i < less; i++)
          this.cooperative.push({ id: Math.random() });
      }
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
      // justify-content: space-around;
      .item {
        width: 180px;
        height: 70px;
        margin-bottom: 30px;
      }
    }
  }
}
</style>