<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-progress type="circle" :percentage="0"></el-progress>
    <el-progress type="circle" :percentage="25"></el-progress>
    <el-progress type="circle" :percentage="100" status="success"></el-progress>
    <el-progress type="circle" :percentage="50" status="exception"></el-progress>
  </div>
</template>
 
<script>
export default {
  name: 'HelloWorld',
  
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  }
}
</Script>
