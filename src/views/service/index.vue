<template>
  <div class="index">
    <img
      src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
      class="banner"
      alt=""
    />

    <div class="my-project">
      <div class="bg-img">
        <img src="~@/assets/img/shilong.png" alt="" />
      </div>
      <ul class="fl jc-between">
        <li v-for="item in 3" :key="item">
          <h1>我们的项目 {{ item }}</h1>
          <div>项目名称介绍</div>
        </li>
      </ul>
    </div>
    <div class="fl jc-between projrct-list">
      <div class="projrct-list-item" v-for="item in 4" :key="item">
        <img
          src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
          alt=""
        />
        <div class="keywords">关键字 {{ item }}</div>
      </div>
    </div>

    <div class="our-growth">
      <h1 class="index-title">我们的成长</h1>
      <ul class="timer">
        <li
          class="fl jc-center"
          v-for="(item, index) in activities"
          :key="index"
        >
          <div class="content left">
            <h3 class="timestamp">{{ item.timestamp }}</h3>
            <div class="text">{{ item.content }}</div>
          </div>
          <div class="line-circle">
            <img src="~@/assets/img/time-circle.png" alt="" />
            <div class="line"></div>
          </div>
          <div class="content right">
            <h3 class="timestamp">{{ item.timestamp }}</h3>
            <div class="text">{{ item.content }}</div>
          </div>
        </li>
      </ul>
    </div>

    <!-- 口碑精选 -->
    <div class="mouth-selected">
      <img src="~@/assets/img/shilong.png" class="mouth-selected-bg" alt="" />
      <h1 class="index-title">口碑精选</h1>
      <div class="fl jc-between selected-list">
        <div class="item" v-for="item in 4" :key="item">
          <div class="over-ellipsis selected-title">用户姓名</div>
          <div class="selected-content">
            师傅服务热情，周到，下雨
            天搬家，我东西还多，师傅毫无怨言，真是辛苦了！超 级感谢
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activities: [
        {
          content: "支持自定义颜色",
          timestamp: "2018-04-03 20:46",
        },
        {
          content: "支持自定义尺寸",
          timestamp: "2018-04-03 20:46",
        },
        {
          content: "默认样式的节点",
          timestamp: "2018-04-03 20:46",
        },
        {
          content: "默认样式的节点",
          timestamp: "2018-04-03 20:46",
        },
        {
          content: "默认样式的节点",
          timestamp: "2018-04-03 20:46",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/variable.less";
.index {
  .banner {
    width: 100%;
  }

  .my-project {
    width: @pageCenter;
    margin: 140px auto 35px auto;
    position: relative;
    .bg-img {
      width: 911px;
      margin-left: 50%;
      transform: translateX(-50%);
      position: absolute;
      z-index: -1;
      top: -70px;
      img {
        width: 100%;
      }
    }
    li {
      h1 {
        font-size: 37px;
        font-weight: 800;
        color: #191f12;
        margin-bottom: 22px;
      }
    }
  }
  .projrct-list {
    .projrct-list-item {
      position: relative;
      width: 25%;
      // height: 0;
      // padding-bottom: 25%;
      img {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
      .keywords {
        position: absolute;
        top: 101px;
        right: 82px;
        bottom: 101px;
        left: 82px;
        background: rgba(255, 255, 255, 0.6);

        justify-content: center;
        display: flex;
        align-items: center;
        font-size: 37px;

        font-weight: 800;
        color: #191f12;
      }
    }
  }
  // 我们的成长
  .our-growth {
    width: @pageCenter;
    margin: 0 auto;
    h1 {
      margin: 86px 0 79px 0;
    }
    .timer {
      text-align: center;
      li {
        .content {
          .timestamp {
            font-size: 28px;

            font-weight: 800;
            color: #191f12;
            line-height: 48px;
          }
          .text {
            margin-top: 25px;
            font-size: 18px;
            color: #646464;
            line-height: 30px;
          }
        }
        .left {
          text-align: right;
        }
        .right {
          text-align: left;
        }
        .line-circle {
          width: 124px;
          height: 130px;
          img {
            position: relative;
            z-index: 2;
            width: 40px;
            height: 40px;
          }
          .line {
            width: 50%;
            border-right: 1px solid #a2a2a2;
            transform: translateX(-1px);
            height: 100%;
          }
        }
        // 奇数
        &:nth-child(odd) {
          .right {
            opacity: 0;
          }
        }
        // 偶数
        &:nth-child(even) {
          .left {
            opacity: 0;
          }
        }

        &:last-child {
          .line-circle > .line {
            display: none;
          }
        }
      }
    }
  }

  // 口碑精选
  .mouth-selected {
    width: @pageCenter;
    margin: 0 auto;
    position: relative;
    .mouth-selected-bg {
      position: absolute;
      width: 911px;
      height: 154px;
      margin-left: 50%;
      transform: translateX(-50%);
      z-index: -1;
    }
    .index-title {
      margin: 202px 0 61px 0;
    }
    .selected-list {
      .item {
        width: 264px;
        height: 216px;
        background: #ffffff;
        border: 2px solid #d6d6d6;
        border-radius: 10px;

        // padding: 28px 25px 31px 25px;
        .selected-title {
          font-size: 24px;

          color: #646464;
          line-height: 30px;
          padding: 28px 0 26px 25px;
        }
        .selected-content {
          padding: 0 25px;

          font-size: 18px;

          color: #646464;
          line-height: 30px;
        }
      }
    }
  }
}
</style>