  <template>
  <div>
    <div>
      <el-table
      :data="vm.filter(data => !search || data.UserName.toLowerCase().includes(search.toLowerCase()))"
      border
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="PassWord"
        label="密码"
        width="180">
      </el-table-column>
      <el-table-column
        prop="UserName"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="Age"
        label="年龄"
        sortable
        >
      </el-table-column>
      <el-table-column
      fixed="right"
      label="操作"
      width="180"
      prop='id'>
        <template slot-scope="scope">
          <el-button type="text" size="small">
            <router-link :to="{path:'/home/add'}">
              添加
            </router-link>
          </el-button>
          <el-button type="text" size="small" >
            <router-link :to="{path:'/home/change',query:{id:scope.row.id}}" tag="span">
              编辑
            </router-link>
            </el-button>
        </template>
      </el-table-column>

    <el-table-column>
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
    </el-table-column>

      </el-table>
     </div>
     <div>
       <!-- <router-view></router-view> -->
     </div>
     <div>
     </div>
     <div>
       <router-view/>
     </div>
  </div>


    <!-- <router-view></router-view>       -->
  </template>




<script>
import { readlink } from 'fs';
// import HomeChange from './HomeChange'
    export default {

      data(){
        return{
          vm:[],
          search:''
        }
      },
      methods:{
        indexs:function(){
          this.$ajax.get('/api').then(result => {
            // console.log(result.data)
            var data_conent = []
            for(var k=0;k<result.data.length;k++){
              var obj = {};
              obj.Age = result.data[k].fields.age;
              obj.UserName = result.data[k].fields.uasername;
              obj.PassWord = result.data[k].fields.password;
              obj.id = result.data[k].pk
              obj.model = result.data[k].model
              data_conent[k] = obj
            };
            this.vm=data_conent
          })
        },
      },
      created(){
        this.indexs();
      },
      watch:{
        '$route':'indexs'
      }
    }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>

