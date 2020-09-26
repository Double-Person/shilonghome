<template>
  <div class="quality-case">
    <h1 class="index-title">优质案例</h1>
    <div class="photo-list fl fl-warp">
        <div class="item" v-for="item in 10" :key="item"> 
          <img
          src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
          alt=""
        />
        </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "~@/assets/style/variable.less";
.quality-case {
  margin: 154px auto 81px auto;
  h1 {
    width: @pageCenter;
    margin: 0 auto;
  }
  .photo-list{
    .item{
      width: 20%;
      img{
        width: 100%;
        vertical-align: middle;
      }
    }
  }
}
</style>