<template>
<div>
  <router-view></router-view>
  <nav-top>
        <div slot='left'>nihao</div>
        <div slot='content'>nihao</div>
        <div slot='right'>nihao</div>
  </nav-top>
  <MentTab :dataFu="dataFu"></MentTab>
</div>
</template>
<script>
import MentTab from "./components/common/MentTab/MentTab"
import navTop from "./components/common/navTop/navTop"
import axios from 'axios'
import {request} from "./network/request"

// class className {
//   constructor(name,age){
//     this.name = name;
//     this.age = age
//   }
// }
// const one = new className('fdt',20)
// console.log(one);


export default {
  data(){
    return {
      dataFu:'dataFu'
    }
  },
    methods:{},
    watch:{},
    filters:{},
    computed:{},
    props:{},
    components:{
      MentTab,
      navTop
    },
    created(){
      console.log(request);
      request({
        url:'/home/multidata',
        params:{
          tepe:'sell',
          page:1
        }
      })
    }

}
</script>
<style>
@import url('./assets/css/base.css');
</style>
