<template>
  <div class="home">
      首页组件
      <br>
      <hr>
      <button @click="getData">请求数据</button>
      <hr>
      <br>
      <ul>
          <li v-for="item in list">
            {{item.title}}
          </li>
      </ul>
  </div>
</template>

<script>
export default {

  data(){
    return {
      list:[]
    }
  },
  methods: {
    getData(){
      //请求数据
      // var api="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1"
    
      // this.$http.get(api).then((response)=>{
      //   console.log(response);
      //   this.list = response.body.result
      // }),function(err){
      //   console.log(err)
      // }
      fetch("http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1")
      .then((response)=>{
        return response.json();
      })
      .then((obj)=>{
        console.log(obj)
        this.list = obj.result
      })


    }
  },
  mounted() {
    this.getData();
  },

}
</script>

<style >

</style>

