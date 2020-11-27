<template>
  <div class="quality-service">
    <h1 class="index-title">优质服务</h1>
    <div class="fl jc-between" v-if="category.length">
      <div class="left-meau">
        <div class="fl jc-between left-top">
          <div class="left-meau-left">
            <div
              class="item"
              :class="{ 'is-active': active == index }"
              v-for="(item, index) in category"
              :key="item.id"
              @click="changeActive(index)"
            >
              {{ item.name }}
            </div>
          </div>
          <div class="left-meau-scrool">
            <i class="el-icon-caret-top" @click="direction('top')"></i>

            <div class="warp">
              <div
                class="progress"
                :style="{
                  height:
                    (active == 0 && '33%') ||
                    (active == 1 && '66%') ||
                    (active == 2 && '100%'),
                }"
              ></div>
            </div>
            <i class="el-icon-caret-bottom" @click="direction('bottom')"></i>
          </div>
        </div>

        <div class="title">{{ category[active].title }}</div>
        <div class="sub-title">{{ category[active].subtitle }}</div>
      </div>
      <div class="right-img">
        <img
          v-if="category[active].image"
          :src="$baseUrl + category[active].image"
          alt=""
        />
        <img
          v-if="!category[active].image"
          src="~@/assets/img/defaultImg.png"
          alt=""
        />
      </div>
    </div>

    <div class="content" v-if="category.length">
      {{ category[active].detail }}
    </div>
  </div>
</template>

<script>
import { homeCategory } from "@/api/api.js";
export default {
  data() {
    return {
      category: [],
      active: 0,
    };
  },
  created() {
    this.getHomeCategory();
  },
  methods: {
    // 优质服务
    async getHomeCategory() {
      let { data } = await homeCategory();
      this.category = data;
      while (this.category.length < 3) {
        this.category.push({
          image: "",
          name: "--",
        });
      }
      this.category = this.category.splice(0, 3);
      console.log(this.category);
    },
    changeActive(index) {
      this.active = index;
    },
    direction(type) {
      if(type == 'top') {
        this.active <= 0 ? (this.active = 0) : (this.active --) 
      }
      if(type == 'bottom') {
        this.active >= 3 ? (this.active = 3) : (this.active ++) 
      }
    }
  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/variable.less";
.quality-service {
  width: @pageCenter;
  margin: 0 auto;
  h1 {
    margin: 26px 0 48px 0;
  }

  .left-meau {
    width: 230px;

    .left-top {
      height: 381px;
      overflow-y: hidden;
      display: flex;
      justify-content: space-between;
      width: 275px;
     
      .left-meau-left {
        .item {
          font-size: 24px;
          font-weight: 400;
          color: #646464;
          cursor: pointer;
          &:nth-of-type(1) {
            margin-top: 37px;
          }
          &:nth-of-type(2) {
            margin: 115px 0;
          }
        }
        .is-active {
          color: #191f12;
          border-bottom: 10px solid red;
        }
      }
      .left-meau-scrool {
        height: 381px;
        width: 60px;

        display: flex;
        flex-direction: column;
        align-items: center;
        i {
          font-size: 30px;
           margin: 20 auto;
          // color: red;
        }
        .warp {
          background: rgb(199, 199, 199);
          width: 10px;
          height: 300px;
          border-radius: 10px;
          .progress {
            width: 10px;
            border-radius: 10px;
            background: rgb(76, 76, 76);
          }
        }
      }
    }

    .title {
      margin: 82px 0 23px 0;
      font-size: 30px;
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
