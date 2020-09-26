<template>
  <div class="quality-service">
    <h1 class="index-title">优质服务</h1>
    <div class="fl jc-between">
      <div class="left-meau">
        <div class="fl jc-between left-top">
          <div class="left-meau-left">
            <div class="item is-active">服务一</div>
            <div class="item">服务二</div>
            <div class="item">服务三</div>
          </div>
          <div class="left-meau-scrool"></div>
        </div>

        <div class="title">图文介绍标题</div>
        <div class="sub-title">图文副标题文字</div>
      </div>
      <div class="right-img">
        <img
          src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
          alt=""
        />
      </div>
    </div>

    <div class="content">
      文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
      文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
      文字文字文字文字文字文字文字文字文字文字
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "~@/assets/style/variable.less";
.quality-service {
  width: @pageCenter;
  margin: 0 auto;
  h1 {
    margin: 26px 0 48px 0;
  }

  .left-meau {
    .left-top {
      height: 381px;
      overflow-y: auto;
      .left-meau-left {
        .item {
          font-size: 26px;
          font-weight: bold;
          color: #646464;
          &:nth-of-type(1) {
            margin-top: 37px;
          }
          &:nth-of-type(2) {
            margin: 115px 0;
          }
        }
        .is-active {
          color: #191f12;
          border-bottom: 10px solid rgb(0, 174, 102);
        }
      }
      .left-meau-scrool {
      }
    }

    .title {
      margin: 82px 0 23px 0;
      font-size: 37px;
      font-weight: 800;
      color: #191f12;
    }
    .sub-title {
      font-size: 26px;
      font-weight: bold;
      color: #646464;
    }
  }

  .right-img {
    width: 832px;
    height: 576px;
    box-shadow: 0px 0px 16px 0px rgba(208, 208, 208, 0.56);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .content {
    margin-top: 57px;
    width: 719px;
    font-size: 18px;
    font-weight: 400;
    color: #646464;
    line-height: 35px;
  }
}
</style>