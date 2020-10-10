<template>
    <div class="quality-case">
        <h1 class="index-title">优质案例</h1>

        <div class="photo-list fl fl-warp">
            <div class="item" v-for="item in category" :key="item.id">
                <img
                        class="cover-img"
                        :src="$baseUrl + item.image"
                        alt=""
                />
            </div>
            <div class="video-warp">
                <img
                        class="video-btn"
                        src="~@/assets/img/video-btn.png"
                        alt=""
                />
                <video :src="$baseUrl + propVideo.vediofile" v-if="propVideo.id"></video>
            </div>
        </div>
    </div>
</template>

<script>
    import {homeCase} from "@/api/api.js";

    export default {
        props: {
            propVideo: {
                type: Object,
                default: () => {
                }
            }
        },
        data() {
            return {
                category: [],
            };
        },
        created() {
            this.getHomeCase();
        },
        methods: {
            // 优质服务
            async getHomeCase() {
                let {data} = await homeCase();
                console.log(data)
                for (let i = 0; i < 8; i++) {
                    // data.push(...data)
                    let obj = {
                        creatime: "1601281421",
                        detail: "长虹物业绵阳公司防水维修工程",
                        id: i,
                        image: "/uploads/20201009/d2e669c024e016a8d3dfc73bd0d35ff8.jpg",
                    }
                    this.category.push(obj)
                }
                // this.category = data.slice(0,8);
                this.category = this.category.slice(0, 8);

            },

        },
    };
</script>

<style lang="less" scoped>
    @import "~@/assets/style/variable.less";
    .quality-case {
        margin: 154px auto 81px auto;

        h1 {
            width: @pageCenter;
            margin: 0 auto 81px auto;
        }

        .video-warp {
            width: 40%;
            height: 100%;
            position: relative;
            float: left;

            .video-btn {
                position: absolute;
                z-index: 2;
                bottom: 78px;
                margin-left: 50%;
                transform: translateX(-50%);
                width: 117px;
                height: 167px;
                cursor: pointer;
            }

            video {
                width: 100%;
            }
        }

        .photo-list {
            .item {
                width: 20%;
            }
        }
    }
</style>