<template>
  <div>
    <el-dialog
      :visible.sync="dialogFormVisible"
      :show-close="false"
      width="861px"
    >
      <div slot="title" class="title">世隆管家 职位申请</div>
      <el-form :model="form">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input
            v-model="form.name"
            autocomplete="off"
            placeholder="请输入姓名"
          ></el-input>
        </el-form-item>

        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-select v-model="form.sex" placeholder="请选择性别">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="生日" :label-width="formLabelWidth">
          <el-date-picker
            v-model="form.birthday"
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="毕业院校" :label-width="formLabelWidth">
          <el-input
            v-model="form.school"
            autocomplete="off"
            placeholder="请输入毕业院校"
          ></el-input>
        </el-form-item>
        <el-form-item label="学历" :label-width="formLabelWidth">
          <el-input
            v-model="form.education"
            autocomplete="off"
            placeholder="请输入学历"
          ></el-input>
        </el-form-item>
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input
            v-model="form.phone"
            autocomplete="off"
            placeholder="请输入手机号"
          ></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input
            v-model="form.email"
            autocomplete="off"
            placeholder="请输入邮箱"
          ></el-input>
        </el-form-item>
        <el-form-item label="简历" :label-width="formLabelWidth">
          <el-upload
            class="upload-demo"
            action
            :limit="1"
            :show-file-list="false"
            :before-upload="beforeUpload"
            :http-request="fileUpload"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              支持格式：DOC、DOCX、PDF、JPG、PNG，最大支持2MB
            </div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button class="btn btns-close" @click="closeFrom">取 消</el-button>
        <el-button class="btn btns-submit" @click="submitForm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { uploadFile, joinSign } from "@/api/api.js";
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: "",
        sex: "",
        birthday: "",
        school: "",
        education: "",
        phone: "",
        email: "",
      },
      url: "",
      formLabelWidth: "120px", //
    };
  },

  methods: {
    showForm() {
      this.dialogFormVisible = true;
    },
    submitForm() {
      this.form.resume = this.url;
      joinSign({ ...this.form }).then(({ code, msg }) => {
        if (code === 1) {
          this.$message({
            message: msg,
            type: "success",
          });
          this.closeFrom();
        }
      });
    },
    closeFrom() {
      this.form = {};
      this.url = "";
      this.dialogFormVisible = false;
    },
    beforeUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isLt2M;
    },
    fileUpload(file) {
      let form = new FormData();
      form.append("file", file.file);
      uploadFile(form).then(({msg, data: {url}}) => {
        this.url = url;
        this.$message({
            message: msg,
            type: "success",
          });
      });
    },
  },
};
</script>

<style lang="less" scoped>
/deep/ .el-dialog__header {
  background: #01ac66;
  font-size: 18px;
  color: #ffffff;
  padding: 20px;
}
/deep/ .el-input {
  width: 610px;

  .el-input__inner {
    border-radius: 25px;
  }
}
/deep/ .upload-demo {
  .el-button {
    width: 190px;
    height: 40px;
    background: #01ac66;
    border-radius: 25px;
    font-size: 16px;
    border: none;
  }
}
/deep/ .dialog-footer {
  text-align: left;
  padding: 38px 0 38px 160px;
  .btns-close {
    border: 2px solid #a8a8a8;
    color: #646464;
  }
  .btns-submit {
    background: #01ac66;

    color: #ffffff;
  }
}
</style>