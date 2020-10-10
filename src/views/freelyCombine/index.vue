<template>
  <el-carousel height="100vh" :interval="4000">
    <el-carousel-item v-for="item in list" :key="item.id">
      <img :src="$baseUrl + item.image" alt="" class="cover-img"/>
    </el-carousel-item>
  </el-carousel>
</template>


<script>
  import { freelyBanner } from "@/api/api.js";
  export default {
    data() {
      return {
        list: [],
      };
    },
    created() {
      this.getList();
    },
    methods: {
      async getList() {
        let { data } = await freelyBanner();
        this.list = data;
      },

    },
  };
</script>
