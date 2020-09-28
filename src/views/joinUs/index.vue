<template>
  <div class="index">
    <img
      src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
      class="banner"
      alt=""
    />

    <div class="recruitment-position">
      <h1 class="index-title">招聘岗位</h1>
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
        <div class="left icon">
          <i class="el-icon-arrow-left icon-item"></i>
        </div>
        <ul class="img-list fl">
          <li class="item" v-for="item in 8" :key="item">
            <img src="~@/assets/img/more.png" alt="" />
          </li>
        </ul>
        <div class="right icon">
          <i class="el-icon-arrow-right icon-item"></i>
        </div>
      </div>
    </div>
    <!-- 公司活动展示 -->
    <div class="company-activities">
      <h1 class="index-title">公司活动展示</h1>
      <div class="fl jc-between list">
        <div v-for="item in 4" :key="item" class="item">
          <img
            class="bg-img"
            src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
            alt=""
          />
          <div class="mask">
            <div class="icon">
              <i class="el-icon-d-arrow-right"></i>
            </div>

            <div class="item-title">活动标题文字</div>

            <div class="item-content">
              <div class="item-content-title">活动标题文字</div>
              <div class="line"></div>

              <div class="content-content">
                福利文字福利文字福利文字福利文字福利文字福利文字福利文字福利文字福利文字福利文字福利文字福利文字福利文字福利文字福利文字福利文字字福利文字
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="photo-list">
      <img class="bg-img" src="~@/assets/img/join-us-bg.png" alt="" />
      <ul class="img-list fl jc-between">
        <li class="item" v-for="item in 8" :key="item">
          <img
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            alt=""
          />
        </li>
      </ul>
    </div>

    <div class="card-banner">
      <div class="warp">
        <h1 class="index-title">我的团队</h1>
        <el-carousel :interval="4000" type="card" height="580px">
          <el-carousel-item v-for="item in 6" :key="item">
            <img
      src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
      class="item-img"
      alt=""
    />
          </el-carousel-item>
        </el-carousel>
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
      border-bottom: @borderColor 2px solid;
    }
  }
  /*员工关怀*/
  .employee-care {
    width: @pageCenter;
    margin: 72px auto 0 auto;
    overflow: hidden;
    padding-bottom: 97px;
    border-bottom: @borderColor 2px solid;
    .icon {
      width: 54px;
      line-height: 337px;
      text-align: center;
      .icon-item {
        font-size: 40px;
        font-weight: bold;
      }
    }
    .img-list {
      width: 1051px;
      flex-wrap: wrap;
      height: 337px;
      overflow: hidden;
      .item {
        width: 337px;
        height: 337px;
        flex: 1;
        img {
          width: 337px;
          height: 337px;
        }
      }
    }
  }

  .company-activities {
    width: @pageCenter;
    margin: 70px auto 0 auto;
    .list {
      flex-wrap: wrap;
      .item {
        width: 567px;
        height: 408px;
        margin-bottom: 38px;
        border-radius: 10px;
        overflow: hidden;
        position: relative;
        .bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .mask {
          height: 517px;
          width: 100%;
          position: absolute;
          top: 299px;
          z-index: 2;
          color: #fff;
          background: rgba(95, 95, 95, 0.7);

          border-radius: 10px;
          transition: 1s linear;
          &:hover {
            top: -109px;
          }

          .icon {
            height: 60px;
            line-height: 60px;

            font-weight: 600;
            font-size: 28px;
            text-align: center;
            .el-icon-d-arrow-right {
              cursor: pointer;
              transform: rotate(-90deg);
              -ms-transform: rotate(-90deg); /* IE 9 */
              -moz-transform: rotate(-90deg); /* Firefox */
              -webkit-transform: rotate(-90deg); /* Safari 和 Chrome */
              -o-transform: rotate(-90deg); /* Opera */
            }
          }

          .item-title {
            height: 49px;
            font-size: 26px;
            text-align: center;
            font-weight: bold;
          }

          .item-content {
            height: 408px;
            padding: 48px 92px 65px 92px;
            .item-content-title {
              text-align: center;
              font-size: 26px;
              font-family: Source Han Sans CN;
              font-weight: bold;
              line-height: 48px;
            }
            .line {
              width: 69px;
              height: 6px;
              background: #ffffff;
              margin: 16px auto 39px auto;
            }
            .content-content {
              font-size: 18px;
              line-height: 25px;
            }
          }
        }
      }
    }
  }

  .photo-list {
    width: 100%;
    position: relative;
    .bg-img {
      width: 100%;
      position: absolute;
      top: 0;
      z-index: -1;
    }
    .img-list {
      flex-wrap: wrap;

      width: @pageCenter;
      margin: 0 auto;
      padding-top: 283px;
      .item {
        width: 25%;
        height: 291px;
        
        img {
          width: 100%;
          height: 291px;
          vertical-align: middle;
        }
      }
    }
  }

  .card-banner {
    .warp {
      width: @pageCenter;
      margin: 0 auto;
      .index-title {
        margin: 103px auto 40px auto;
      }
    }
    .el-carousel__item .item-img {
      width: 436px;
      height: 580px;
      color: #475669;
      object-fit: cover;
      margin: 0;
    }

  }
}
</style>