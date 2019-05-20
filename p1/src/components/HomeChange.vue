<template>
  <div>
    <div>
      <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
          <el-form-item
            label="年龄"
            prop="age"
            :rules="[
              { required: true, message: '年龄不能为空'},
              { type: 'string', message: '年龄必须为数字值'}
            ]"
          >
            <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item
            label="用户名"
            prop="uasername"
            :rules="[
              { required: true, message: '用户名不能为空'},
            ]"
          >
            <el-input  v-model="numberValidateForm.uasername" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
            <el-button @click="resetForm('numberValidateForm')">重置</el-button>
            <el-button type="primary" @click="submitDele">删除</el-button>
          </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// import { constants } from 'fs';
// import { constants } from 'fs';
export default {
  name: 'HomeChange',
  methods:{
    get_id:function(){
      this.id=this.$route.query.id;
      var url = '/api/change/' + this.id
      this.$ajax.get(url).then(result => {
        result.data[0].fields.id = result.data[0].pk;
        result.data[0].fields.model = result.data[0].model;
        this.numberValidateForm = result.data[0].fields
      })
    },
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var url = '/api/change/' + this.id
            this.$ajax.post(url,this.qs.stringify(this.numberValidateForm)).then(
              res =>{
                if(res.data == '200'){
                  this.$router.push('/home')
                }
              }
            )
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    submitDele(){
      const del_url = '/api/delete/' + this.id
      this.$ajax.post(del_url).then(res =>{
        if(res.data == '200'){
            this.$router.push('/home')
        }
      })
    }
  },
  data(){
    return{
      id:'',
      numberValidateForm: {
      },
    }
  },
  created(){
    // console.log(this.$router.params)
    this.get_id();
  },
  watch:{
    '$route':'get_id'
  }
}
</script>
