<template>
  <div class="member-news">
    <h1 class="index-title">会员动态</h1>
    <ul class="fl jc-between list">
      <li class="item" v-for="item in memberNews" :key="item.id">
        <div class="icon-time fl align-center">
          <i class="el-icon-location-outline icon"></i>
          <div class="time">{{ item.creatime }}</div>
        </div>
        <div class="title over-ellipsis">{{ item.title }}</div>
        <div class="over-ellipsis-3 detail">{{ item.detail }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { companyUser } from "@/api/api.js";
export default {
  data() {
    return {
      memberNews: [],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      let { data } = await companyUser();
      this.memberNews = data;
      console.log(data);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/variable.less";
.member-news {
  width: @pageCenter;
  margin: 0 auto 114px auto;
  .index-title {
    margin: 66px 0 80px 0;
  }
  .list {
    .item {
      width: 22%;
      .icon-time {
        .icon {
          font-size: 31px;
          color: #01ac66;
          margin-right: 16px;
        }
        .time {
          font-size: 26px;
          color: #646464;
        }
      }
      .title {
        font-size: 26px;
        font-weight: bold;
        color: #191f12;
        height: 61px;
        line-height: 61px;
        border-bottom: 2px solid @borderColor;
      }
      .detail {
        margin-top: 15px;
        font-size: 14px;
        color: #646464;
        line-height: 28px;
        text-align: left;
      }
    }
  }
}
</style>