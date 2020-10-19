<template>
    <div class="service-project">
        <h1 class="index-title">服务项目</h1>
        <ul class="list fl jc-between">
            <li class="item" v-for="item in serviceData" :key="item.id" @click="toDetail(item.id)">
                <div class="img">
                    <img class="cover-img" v-if="item.image" :src="$baseUrl + item.image" alt=""/>
                    <img class="cover-img" v-if="!item.image" src="~@/assets/img/defaultImg.png" alt=""/>
                </div>
                <div class="title over-ellipsis">{{ item.title }}</div>
                <div class="sub-title over-ellipsis">{{ item.subtitle }}</div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {homeService} from "@/api/api.js";

    export default {
        data() {
            return {
                serviceData: [],
            };
        },
        created() {
            this.getHomeService();
        },
        methods: {
            // 服务项目
            async getHomeService() {
                let {data} = await homeService();
                this.serviceData = data;

                while (this.serviceData.length < 4) {
                    this.serviceData.push({
                        image: '',
                        subtitle: '',
                        title: ''
                    })
                }

            },
            // 跳转详情
            // /service-project-detail/:id
            toDetail(id) {
                this.$router.push('/service-project-detail/' + id)
            }
        },
    };
</script>

<style lang="less" scoped>
    @import "~@/assets/style/variable.less";
    // 服务项目
    .service-project {
        width: @pageCenter;
        margin: 0 auto;

        h1 {
            margin: 86px auto 48px auto;
        }

        .list {
            width: 100%;

            .item {
                width: 265px;
                cursor: pointer;

                .img {
                    border-radius: 4px;
                    height: 205px;
                    overflow: hidden;
                }

                .title {
                    font-size: 26px;
                    font-weight: bold;
                    color: #191f12;
                    margin: 25px 0 13px 0;
                }

                .sub-title {
                    font-size: 18px;
                    font-weight: 400;
                    color: #646464;
                }
            }
        }
    }
</style>