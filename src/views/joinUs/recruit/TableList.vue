<template>
  <div class="table">
    <el-table
      :data="searchList"
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
            查看详情
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    searchList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  methods: {
    handleClick(row) {
      console.log(row);
      this.$emit('clickInfo', row)
    },
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
</style>