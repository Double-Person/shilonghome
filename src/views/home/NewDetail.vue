<template>
  <div>
    <img class="img" :src="$baseUrl + info.banner_image" alt="" />
    <div class="news">
      <h1 class="title">{{ info.title }}</h1>
      <h2 class="subtitle" v-if="info.subtitle">{{ info.subtitle }}</h2>
      <img class="img" :src="$baseUrl + info.image" alt="" />
      <div class="innerHTML" v-html="info.detail"></div>
    </div>
  </div>
</template>


<script>
import { homeNewsDetail } from "@/api/api.js";

export default {
  name: "NewDetail",
  data() {
    return {
      info: {},
    };
  },
  created() {
    let id = this.$route.params.id;
    this.getHomeNewsDetail(id);
  },
  methods: {
    async getHomeNewsDetail(id) {
      let { data } = await homeNewsDetail({ id });
      this.info = data;
      console.log(this.info)
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/variable.less";

.img {
  width: 100%;
}

.news {
  margin: 95px auto 57px auto;
  width: @pageCenter;

  .title {
    font-size: 37px;
    font-weight: 800;
    color: #192013;
    margin: 117px auto 21px auto;
    text-align: center;
  }

  .subtitle {
    font-size: 26px;
    font-weight: bold;
    color: #646464;
    margin-bottom: 67px;
    text-align: center;
  }
  .innerHTML{
    margin-top: 30px;
  }
}
</style>