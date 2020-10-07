<template>
  <div class="table">
    <el-table
      :data="table"
      style="width: 100%"
      className="test"
      header-align="center"
    >
      <el-table-column prop="name" label="职位名称" align="center">
      </el-table-column>
      <el-table-column label="职位类别" align="center">
        <template slot-scope="scope">
          <div v-html="scope.row.operating_duty"></div>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="工作地点" align="center">
      </el-table-column>
      <el-table-column prop="num" label="招聘人数" align="center">
      </el-table-column>
      <el-table-column prop="creatime" label="发布时间" align="center">
      </el-table-column>
      <el-table-column prop="endtime" label="截止时间" align="center">
      </el-table-column>
      <el-table-column label="" width="150">
        <template slot-scope="scope">
          <div
            class="info-btn"
            @click="handleClick(scope.row)"
            type="text"
            size="small"
          >
            返回
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div class="fl info" v-if="table.length">
      <div class="info-div left">
        <p class="title">工作职责</p>
        <div v-html="table[0].operating_duty"></div>
      </div>
      <div class="info-div right">
        <p class="title">任职要求</p>
        <div v-html="table[0].job_requirements"></div>
      </div>
    </div>

    <div class="sign-up-btn" @click="signUp">申请职位</div>
    <sign-up ref="signUp" />
  </div>
</template>

<script>
import SignUp from "@/views/joinUs/recruit/SignUp";
export default {
  components: {
    SignUp,
  },
  data() {
    return {
      table: [],
    };
  },
  methods: {
    getInfoData(data) {
      this.table = data;
    },
    handleClick(row) {
      this.$parent.isShowTable = true;
    },
    signUp() {
      this.$refs.signUp.showForm()
    }
  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/variable.less";
.table {
  width: @pageCenter;
  margin: 58px auto 0 auto;
  /deep/ thead .is-leaf {
    background: #f4f4f4;
    font-size: 20px;
    font-weight: 800;
    height: 105px;
  }
  .info-btn {
    display: inline-block;
    padding: 10px 20px;
    background: #01ac66;
    border-radius: 25px;
    color: #fff;
    text-align: center;
    cursor: pointer;
  }
}

.info {
  .info-div {
    width: 50%;
    .title {
      font-size: 20px;
      font-weight: 800;
      color: #191f12;
      margin: 30px 0;
    }
  }
}
.sign-up-btn {
  margin: 140px auto 0 auto;
  width: 426px;
  height: 52px;
  line-height: 52px;
  background: #01ac66;
  border-radius: 26px;
  color: #fff;
  font-size: 18px;
  font-weight: 800;
  text-align: center;
  cursor: pointer;
}
</style>