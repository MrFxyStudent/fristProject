<template>
<div>
  <router-view></router-view>
  <MentTab :dataFu="dataFu"></MentTab>
</div>
</template>
<script>
import MentTab from "./components/common/MentTab/MentTab"


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
    },
    created(){
    }
}
</script>
<style>
@import url('./assets/css/base.css');
</style>
