<template>
  <div class="hello">{{msg}}</div>
</template>
<script>
import {requestLogin} from '../comm/utils/api-name';
export default {
  name: "Login",
  data() {
    return {
      msg: "login"
    };
  },
  methods: {
    getData() {
      const params = new URLSearchParams();
      params.append('param1', 'value1');
      params.append('param2', 'value2');
      requestLogin(params).then((res,url)=>{
        console.log(19999,res,url)
      }).catch((error)=>{
        
      })
    }
  },
  mounted() {
    // this.getData()
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
