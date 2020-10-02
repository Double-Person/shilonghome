<template>
  <div>
    <el-carousel height="560px" :interval="4000">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <!-- $baseUrl +  -->
        <img :src="item.image" alt="" class="cover-img" />
      </el-carousel-item>
    </el-carousel>
    <div class="content">
      文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
      文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
      文字文字文字文字文字文字文字文字文字文字
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceProjectDetail",
  data() {
    return {
      bannerList: [
        {
          id: 1,
          image:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
        },
      ],
    };
  },
  created() {
    console.log(this.$route.params.id);
  },
};
</script>

<style lang="less" scoped>
.content {
  width: 720px;
  margin: 117px auto;
}
</style>