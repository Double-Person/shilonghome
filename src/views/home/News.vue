<template>
    <div class="news">
        <h1 class="index-title">新闻动态</h1>
        <div class="fl jc-between content">
            <div class="left" v-if="list.length" @click="detail(list[active].id)">
                <img
                        v-if="list[active].image"
                        class="cover-img"
                        :src="$baseUrl + list[active].image"
                        alt=""
                />
                <img v-if="!list[active].image" class="cover-img" src="~@/assets/img/defaultImg.png" alt=""/>

                <div class="info">
                    <img src="~@/assets/img/info.png" alt=""/>
                    <div class="text">查看详情</div>
                </div>
            </div>

            <ul class="right">
                <li v-for="(item, index) in list" :key="item.id" @click="changeActive(index)">
                    <h2 class="title">{{item.title}}</h2>
                    <div class="over-ellipsis-2 text" v-html="item.detail"></div>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
    import {homeNews, homeNewsDetail} from "@/api/api.js";

    export default {
        data() {
            return {
                list: [],
                active: 0
            };
        },
        created() {
            this.getHomeNews();
        },
        methods: {
            async getHomeNews() {
                let {data} = await homeNews();
                this.list = data;
                while (this.list.length < 3) {
                    this.list.push({
                        image: '',
                        subtitle: '副标题',
                        title: '标题',
                        detail: '<div></div>'
                    })
                }

            },
            changeActive(index) {
                this.active = index
            },
            detail(id) {
                if (id === undefined) return false;
                this.$router.push('/New-detail/' + id)
            }
        },
    };
</script>

<style lang="less" scoped>
    @import "~@/assets/style/variable.less";

    .news {
        margin: 95px auto 57px auto;
        width: @pageCenter;

        .index-title {
            margin-bottom: 57px;
        }

        .content {
            height: 411px;

            .left {
                width: 635px;
                position: relative;

                .info {
                    cursor: pointer;
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
                height: 411px;
                overflow: hidden;

                li {
                    display: block;
                    cursor: pointer;
                    height: 120px;
                    overflow: hidden;

                    &:nth-of-type(2) {
                        margin: 25px 0;
                    }

                    .title {
                        font-size: 26px;
                        font-weight: bold;
                        color: #191f12;
                    }

                    .icon-info {
                        font-size: 30px;
                        font-weight: bold;
                        cursor: pointer;
                    }


                    .text {
                        font-size: 18px;
                        margin-top: 28px;
                        color: #646464;
                        line-height: 30px;
                        max-height: 105px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;

                        /deep/ p {

                            width: 100%;
                        }
                    }
                }
            }
        }
    }
</style>