<template>
    <div>
        <div id="navTop">
            <div class="left"><slot name="left"></slot></div>
            <div class="content" ><slot name="content"></slot></div>
             <div class="right" ><slot name="right"></slot></div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    methods:{},
    computed:{},
    watch:{},
    fliters:{},
    components:{},
    props:{}
}
</script>

<style>
#navTop{
    display: flex;
    line-height: 44px;
    position: fixed;
    top: 0;
    left: 0;
}
.left{
    width: 44px;
    height: 44px;
    background: red;
}
.content{
   flex: 1;
   text-align: center;
   background: yellow;
}
.right{
 width: 44px;
    background: blue;
}
</style>