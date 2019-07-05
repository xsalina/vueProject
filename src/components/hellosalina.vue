<template>
  <div >
      <div @click="chooseTab">{{msg}}</div>
      <div @click="jumptologin">{{jumpto}}</div>

  </div>
  
</template>
<script>
export default {
  name: "HelloSalina",
  data() {
    return {
      msg: "Welcome to salina",
      jumpto:'按我跳转到登录页面'
    };
  },
  methods:{
      chooseTab(){
          this.msg = '乌拉拉了'
      },
      jumptologin(){
           this.$router.push({  
            path: '/login',   
            name: 'Login',  
            params: {   
                key: 'key',   
                msgKey: this.jumpto  
            }  
             
        }) 
      }
      
  }
};
</script>  
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>