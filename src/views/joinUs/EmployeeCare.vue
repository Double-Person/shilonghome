<template>
  <div class="employee-care">
    <h1 class="index-title">员工关怀</h1>
    <div class="fl jc-between">
      <div class="left icon">
        <i class="el-icon-arrow-left icon-item" @click="scrollView('left')"></i>
      </div>
      <div class="ul-warp">
        <ul class="img-list fl" ref="imgList">
          <!-- joinStaffList -->
          <li
            class="item"
            v-for="(item, index) in joinStaffList"
            :key="item.id"
            :id="'itemList' + index"
          >
            <img :src="$baseUrl + item.image" v-if="item.image" alt="" />
            <img src="~@/assets/img/defaultImg.png" v-if="!item.image" alt="" />


            <div class="text-descrition">
              <div class="over-ellipsis title">{{ item.title }}</div>
              <div class="over-ellipsis-2 desc">{{ item.detail }}</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="right icon">
        <i
          class="el-icon-arrow-right icon-item"
          @click="scrollView('right')"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
import { joinStaff } from "@/api/api.js";
export default {
  data() {
    return {
      joinStaffList: [],
      marginLeft: 0,
    };
  },
  created() {
    this.getJoinStaff();
  },
  methods: {
    scrollView(direction) {
      let ele = document.getElementById("itemList0");
      if (direction === "left") {
        if (this.marginLeft <= 0) return false;
        this.marginLeft -= 355;
        ele.style.marginLeft = `-${this.marginLeft}px`;
      } else {
        if (this.joinStaffList.length <= 3) return false;
        if (this.marginLeft >= (this.joinStaffList.length - 3) * 355)
          return false;
        this.marginLeft += 355;
        ele.style.marginLeft = `-${this.marginLeft}px`;
      }
    },
    // 员工关怀  joinStaff
    async getJoinStaff() {
      let { data } = await joinStaff();
      while (data.length < 3) {
        data.push({
          image: '',
          detail: '',
          title: ''
        })
      }
      this.joinStaffList = data.slice(0, 3);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/variable.less";
/*员工关怀*/
.employee-care {
  width: @pageCenter;
  margin: 37px auto 0 auto;
  overflow: hidden;
  padding-bottom: 97px;
  border-bottom: @borderColor 2px solid;
  position: relative;
  .index-title{
    margin-bottom: 68px;
  }
  .icon {
    width: 54px;
    line-height: 337px;
    text-align: center;
    .icon-item {
      font-size: 40px;
      font-weight: bold;
    }
  }
  .ul-warp {
    position: absolute;
    left: 54px;
    right: 54px;
    z-index: 0;

    height: 337px;
    width: 1051px;
    .img-list {
      width: 1051px;
      overflow: hidden;
      .item {
        display: inline-block;
        width: 337px;
        height: 337px;
        margin-right: 18px;
        position: relative;

        img {
          width: 337px;
          height: 337px;
          vertical-align: middle;
          object-fit: cover;
          border: none;
        }
        .text-descrition {
          position: absolute;
          top: 217px;
          color: #fff;
          padding: 0 35px 0 14px;
          .title {
            font-size: 26px;
            font-weight: bold;
            margin-bottom: 17px;
          }
          .desc {
            font-size: 18px;
            line-height: 25px;
          }
        }
      }
    }
  }
}
</style>
