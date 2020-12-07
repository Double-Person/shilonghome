<template>
  <div class="index">
    <el-carousel height="560px" :interval="4000" v-loading="loadingCarousel">
      <el-carousel-item v-for="item in list" :key="item.id">
        <img :src="$baseUrl + item.image" alt="" class="cover-img" />
      </el-carousel-item>
    </el-carousel>

    <!-- <div class="my-project">
      <div class="bg-img">
        <img src="~@/assets/img/shilong.png" alt="" />
      </div>
      <ul class="fl jc-between">
        <li v-for="item in myProjet" :key="item.id">
          <h1>{{ item.title }}</h1>
          <div>{{ item.introduce }}</div>
        </li>
      </ul>
    </div> -->
    <!-- 关键词 -->
    <div class="fl jc-between projrct-list" v-loading="loadingKeyword">
      <div class="projrct-list-item" v-for="item in keywordList" :key="item.id">
        <img :src="$baseUrl + item.image" alt="" v-if="item.image" />
        <img v-if="!item.image" src="~@/assets/img/defaultImg.png" alt="" />

        <el-popover
          placement="top-start"
          width="300"
          trigger="hover"
          :content="item.name"
        >
          <div slot="reference" class="over-ellipsis fl keywords">
            {{ item.name }}
          </div>
        </el-popover>
      </div>
    </div>

    <div class="our-growth" v-loading="loadingGrowth">
      <h1 class="index-title">我的成长</h1>
      <ul class="timer">
        <li class="fl jc-center" v-for="(item, index) in group" :key="index.id">
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
    <div class="mouth-selected" v-loading="loadingMouth">
      <!-- <img src="~@/assets/img/shilong.png" class="mouth-selected-bg" alt="" /> -->
      <h1 class="index-title">口碑精选</h1>
      <div class="fl jc-between selected-list">
        <div class="item" v-for="item in evaluate" :key="item.id">
          
           <el-popover
            placement="top-start"
            width="200"
            trigger="hover"
            :content="item.name"
          >
            <div slot="reference" class="over-ellipsis selected-title">
              {{ item.name }}
            </div>
          </el-popover>

          <el-popover
            placement="top-start"
            width="200"
            trigger="hover"
            :content="item.detail"
          >
            <div slot="reference" class="over-ellipsis-4 selected-content">
              {{ item.detail }}
            </div>
          </el-popover>
        </div>
      </div>
    </div>

    <comme-footer :isShowDownloadCode="false" />
  </div>
</template>

<script>
import {
  serviceIndex,
  serviceProject,
  serviceImport,
  serviceGroup,
  serviceEvaluate,
} from "@/api/api.js";
import CommeFooter from "@/components/CommeFooter";
export default {
  components: {
    CommeFooter,
  },
  data() {
    return {
      list: [],
      group: [],
      myProjet: [],
      keywordList: [],
      evaluate: [],
      loadingCarousel: true,
      loadingKeyword: true,
      loadingGrowth: true,
      loadingMouth: true,
    };
  },
  created() {
    this.getList();
    this.getServiceProject();
    this.getServiceImport();
    this.getServiceGroup();
    this.getServiceEvaluate();
  },
  methods: {
    // 轮播
    async getList() {
      let { data } = await serviceIndex();
      this.list = data;
      this.loadingCarousel = false;
    },
    // 轮播下方 我的项目
    async getServiceProject() {
      let { data } = await serviceProject();
      this.myProjet = data;
      while (this.myProjet.length < 3) {
        this.myProjet.push({
          title: "--",
          introduce: "--",
        });
      }
    },
    // 我的项目下方 关键词
    async getServiceImport() {
      let { data } = await serviceImport();
      this.keywordList = data;
      console.log(this.keywordList);
      this.loadingKeyword = false;
      while (this.keywordList.length < 4) {
        this.keywordList.push({
          name: "--",
          image: "",
        });
      }
    },
    // 我的成长
    async getServiceGroup() {
      let { data } = await serviceGroup();
      this.loadingGrowth = false;
      this.group = data;
    },
    // 评论
    async getServiceEvaluate() {
      let { data } = await serviceEvaluate();
      this.evaluate = data;
      this.loadingMouth = false;
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
      flex: 1;
      text-align: center;
      h1 {
        font-size: 24px;
        font-weight: 800;
        color: #191f12;
        margin-bottom: 22px;
      }
    }
  }
  .projrct-list {
    margin-top: 120px;
    .projrct-list-item {
      position: relative;
      width: 22%;
      /*height: calc( 100vw / 4 );*/
      // height: 0;
      // padding-bottom: 25%;
      img {
        width: 100%;
        height: 100%;
        // height: auto;
        /*min-height: 230px;*/
        object-fit: cover;
      }
      .keywords {
        position: absolute;
        // top: 101px;
        height: 80px;
        right: 32px;
        bottom: 50px;
        left: 32px;
        background: rgba(255, 255, 255, 0.6);

        justify-content: center;
        align-items: center;
        font-size: 25px;
        overflow: hidden;
        border-radius: 5px;

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
            font-size: 24px;

            font-weight: 800;
            color: #191f12;
            line-height: 48px;
          }
          .text {
            margin-top: 25px;
            font-size: 15px;
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
    margin: 0 auto 127px auto;
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