<template>
  <div class="index">
    <el-carousel height="560px" :interval="4000">
      <el-carousel-item v-for="item in list" :key="item.id">
        <img :src="$baseUrl + item.image" alt="" class="cover-img"/>
      </el-carousel-item>
    </el-carousel>

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
          v-for="(item, index) in group"
          :key="index.id"
        >
          <div class="content left">
            <h3 class="timestamp">{{ item.creatime }}</h3>
            <div class="text">{{ item.title }}</div>
          </div>
          <div class="line-circle">
            <img src="~@/assets/img/time-circle.png" alt="" />
            <div class="line"></div>
          </div>
          <div class="content right">
            <h3 class="timestamp">{{ item.creatime }}</h3>
            <div class="text">{{ item.title }}</div>
          </div>
        </li>
      </ul>
    </div>

    <!-- 口碑精选 -->
    <div class="mouth-selected">
      <img src="~@/assets/img/shilong.png" class="mouth-selected-bg" alt="" />
      <h1 class="index-title">口碑精选</h1>
      <div class="fl jc-between selected-list">
        <div class="item" v-for="item in evaluate" :key="item.id">
          <div class="over-ellipsis selected-title">{{item.name}}</div>
          <div class="selected-content">{{item.detail}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { serviceIndex, serviceProject, serviceGroup, serviceEvaluate } from "@/api/api.js";
export default {
  data() {
    return {
      list:[],
      group: [],
      evaluate: []
    };
  },
  created() {
    this.getList();
    this.getServiceProject();
    this.getServiceGroup();
    this.getServiceEvaluate();
  },
  methods: {
    // 轮播
    async getList() {
      let { data } = await serviceIndex();
      this.list = data;
    },
    async getServiceProject() {
      let { data } = await serviceProject();

      // console.log(data);
    },
    // 我们的成长
    async getServiceGroup() {
      let { data } = await serviceGroup();
      this.group = data
    },
    // 评论
    async getServiceEvaluate() {
      let { data } = await serviceEvaluate();
      this.evaluate = data
      console.log(data);
    },


  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/variable.less";
.index {
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