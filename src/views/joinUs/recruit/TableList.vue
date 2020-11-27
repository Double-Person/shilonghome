<template>
  <div class="table">
    <div class="search-select">
      <el-input
        placeholder="请输入内容"
        v-model="name"
        class="input-with-select"
      >
        <el-button slot="append" @click="searchInput">搜索</el-button>
      </el-input>
    </div>
    <el-table
      :data="showList"
      v-loading="loading"
      style="width: 100%"
      className="test"
      header-align="center"
    >
      <el-table-column prop="name" label="职位名称" align="center">
      </el-table-column>
      <el-table-column prop="u_name" label="职位类别" align="center">
      </el-table-column>
<!--      <el-table-column label="职位类别" align="center">-->
<!--        <template slot-scope="scope">-->
<!--          <div v-html="scope.row.operating_duty"></div>-->
<!--        </template>-->
<!--      </el-table-column>-->
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

    <div class="pag">
      <el-pagination
        layout="prev, pager, next"
        :total="total"
        :page-size="pageSize"
        @current-change="currentChange"
        @prev-click="prevClick"
        @next-click="nextClick"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { jonLike } from "@/api/api.js";
export default {
  data() {
    return {
      name: "", // 搜索框
      searchList: [],
      showList: [],
      loading: true,
      pageSize: 15,
      total: 0,
    };
  },
  created() {
    this.searchInput();
  },

  methods: {
    // 搜索按钮
    async searchInput() {
      let { data } = await jonLike({ name: this.name });
      this.searchList = data;
      this.total = this.searchList.length;
      this.showList = this.searchList.slice(0, this.pageSize);
      this.loading = false
    },
    handleClick(row) {
      this.$emit("clickInfo", row);
    },
    currentChange(val) {
      this.showList = this.searchList.slice(
        this.pageSize * (val - 1),
        this.pageSize * (val - 1) + this.pageSize
      );
    },
    prevClick(val) {
      this.showList = this.searchList.slice(
        this.pageSize * (val - 1),
        this.pageSize * (val - 1) + this.pageSize
      );
    },
    nextClick(val) {
      this.showList = this.searchList.slice(
        this.pageSize * (val - 1),
        this.pageSize * (val - 1) + this.pageSize
      );
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/variable.less";
.search-select {
  width: @pageCenter;
  margin: 30px auto;
  text-align: center;
  .el-input-group {
    width: 884px;
  }
}
.table {
  width: @pageCenter;
  margin: 58px auto 100px auto;
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
.pag {
  margin: 30px auto;
  text-align: center;
}
</style>