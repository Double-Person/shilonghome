<template>
    <div>
        <el-carousel height="560px" :interval="4000">
            <el-carousel-item v-for="item in bannerList" :key="item.id">
                <img :src="$baseUrl + item.image" alt="" class="cover-img"/>
            </el-carousel-item>
        </el-carousel>
        <div class="platform-welfare">
            <h1 class="index-title">平台福利</h1>
            <div class="platform-welfare-list">
                <img src="~@/assets/img/navicon-fwpzpz.png" alt=""/>
                <div class="fl jc-between list">
                    <div v-for="item in 4" :key="item" class="flex-1">
                        <div class="over-ellipsis title">福利一</div>
                        <div class="over-ellipsis content">文字文字文字文字文字文字</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 产品展示 -->
        <div class="product-display">
            <h1 class="index-title">产品展示</h1>
        </div>
    </div>
</template>

<script>
  import {companyIndex, companyWelfare} from "@/api/api.js";

  export default {
    data() {
      return {
        bannerList: [],
        serviceData: []
      };
    },
    created() {
      this.getIndex();
      this.getCompanyWelfare();
    },
    methods: {
      // 轮播
      async getIndex() {
        let {data} = await companyIndex();
        this.bannerList = data;
      },
      // 服务项目
      async getCompanyWelfare() {
        let {data} = await companyWelfare();
        this.serviceData = data
          console.log(data);
      },
    },
  };
</script>

<style lang="less" scoped>
    @import "~@/assets/style/variable.less";

    // 平台福利
    .platform-welfare {
        width: @pageCenter;
        margin: 0 auto;
        padding-bottom: 91px;
        border-bottom: 2px solid #d6d6d6;

        h1 {
            margin: 85px auto 130px auto;
        }

        .platform-welfare-list {
            width: @pageCenter;
            margin: 0 auto;
            text-align: center;

            .list {
                text-align: center;

                .title {
                    font-size: 26px;
                    font-weight: bold;
                    color: #666666;
                    margin: 59px 0 13px 0;
                }

                .content {
                    font-size: 18px;
                    color: #656565;
                }
            }
        }
    }

    // 产品展示
    .product-display {
        width: @pageCenter;
        margin: 0 auto;

        .index-title {
            margin: 93px 0 66px 0;
        }
    }
</style>