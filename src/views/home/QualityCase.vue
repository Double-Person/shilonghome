<template>
  <div class="quality-case">
    <h1 class="index-title">优质案例</h1>
    <div class="photo-list fl fl-warp">
        <div class="item" v-for="item in category" :key="item.id">
          <img
                  class="cover-img"
                  :src="$baseUrl + item.image"
          alt=""
        />
        </div>
    </div>
  </div>
</template>

<script>
    import { homeCase } from "@/api/api.js";
    export default {
        data() {
            return {
                category: [],
            };
        },
        created() {
            this.getHomeCase();
        },
        methods: {
            // 优质服务
            async getHomeCase() {
                let { data } = await homeCase();
                this.category = data;
            },

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
  .photo-list{
    .item{
      width: 20%;
    }
  }
}
</style>