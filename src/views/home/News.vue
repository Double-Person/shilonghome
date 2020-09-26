<template>
  <div class="news">
    <h1 class="index-title">新闻动态</h1>
    <div class="fl jc-between content">
      <div class="left">
        <img
          src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
          alt=""
        />

        <div class="info">
          <img src="~@/assets/img/info.png" alt="" />
          <div class="text">查看详情</div>
        </div>
      </div>

      <ul class="fl jc-between right">
        <li v-for="item in 3" :key="item">
          <div class="top fl jc-between align-center">
            <h2 class="title">新闻标题文字</h2>
            <i class="el-icon-right icon-info"></i>
          </div>
          <div class="over-ellipsis-2 text">
            文字文字文字文字文字文字文字文字文字文字文字文字文字
            文字文字文字文字文字文文字文字文字
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "~@/assets/style/variable.less";
.news {
  margin: 95px auto 57px auto;
  width: @pageCenter;
  .content {
    height: 411px;
    .left {
      width: 635px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .info {
        text-align: center;
        position: absolute;
        z-index: 2;
        width: 112px;
        height: 100%;
        left: 0;
        top: 0;

        background-color: rgba(1, 172, 102, 0.7);
        img {
          width: 37px;
          height: 37px;
          margin: 188px auto 18px auto;
          vertical-align: middle;
        }
        .text {
          font-size: 18px;

          color: #ffffff;
        }
      }
    }
    .right {
      width: 467px;
      flex-direction: column;
      li {
        display: block;
        .top{
          h2 {
          font-size: 26px;
          font-weight: bold;
          color: #191f12;
        }
        .icon-info{
          font-size: 30px;
          font-weight: bold;
        }
        }

        .text {
          font-size: 18px;
          margin-top: 28px;
          color: #646464;
          line-height: 30px;
        }
      }
    }
  }
}
</style>