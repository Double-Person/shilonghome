<template>
  <div class="index">
    <img
      src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
      class="banner"
      alt=""
    />

    <div class="recruitment-position">
      <h1 class="inswx-title">招聘岗位</h1>
      <ul class="position-list fl jc-between">
        <li class="item" v-for="item in 3" :key="item">
          <img src="~@/assets/img/more.png" alt="" />
        </li>
        <li class="item">
          <img src="~@/assets/img/more.png" alt="" />
        </li>
      </ul>
    </div>

    <div class="employee-care">
      <h1 class="inswx-title">员工关怀</h1>
      <div class="fl jc-between">
        <div class="left icon"><i class="el-icon-arrow-left"></i></div>
      <ul class="img-list fl">
        <li class="item" v-for="item in 8" :key="item">
          <img src="~@/assets/img/more.png" alt="" />
        </li>
      
      </ul>
      <div class="right icon"><i class="el-icon-arrow-right"></i></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/variable.less";
.index {
  .banner {
    width: 100%;
  }
  /*招聘岗位*/
  .recruitment-position {
    width: @pageCenter;
    margin: 72px auto 0 auto;
    .position-list {
      margin-top: 55px;
      padding-bottom: 85px;
      border-bottom: 2px solid #d6d6d6;
    }
  }
  /*员工关怀*/
  .employee-care {
    width: @pageCenter;
    margin: 72px auto 0 auto;
    overflow: hidden;
    .icon{
      width: 54px;
    }
    .img-list{
      width: 1051px;
      .item{
        width: 337px;

        height: 337px;
        flex: 1;
      }
    }
  }
}
</style>