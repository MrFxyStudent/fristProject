<template>
    <div id="two">
        <h1 id="hhh" v-show="false">{{comImgNumTime}}</h1>
        <nav-top>
            <div slot='left'>nihao</div>
            <div slot='content'>nihao</div>
            <div slot='right'>nihao</div>
        </nav-top>
        <scroll class="twoContent" ref="scroll" @LoadingAxios="LoadingAxios">
            <!-- <div>{{bannerData.list}}</div> -->
            <two-Banner :bannerData=bannerData @bannerImgLoad="bannerImgLoad"></two-Banner>
            <two-recommend :recommend=recommend></two-recommend>
            <two-feature></two-feature>
            <two-tabcontrol :tabTextlist="['流行','新款','精选']" @typeFun="getType" ref="tabcontrol"></two-tabcontrol>
            <two-classification :twoClassificationData="twoClassificationData"></two-classification>
        </scroll>
        <two-scroll-top @click.native="scrollTopFun"></two-scroll-top>
    </div>
</template>

<script>
import scroll from '../components/common/scroll'
import {oneRequest,dataRequest} from "../network/home.js"
import {debonuse} from '../common/utils/debonuse'
import navTop from "../components/common/navTop/navTop"
import twoScrollTop from '../components/common/scrollTop/scrollTop'
import twoBanner from '../components/content/two/banner'
import twoRecommend from '../components/content/two/recommend'
import twoFeature from '../components/content/two/feature'
import twoTabcontrol from '../components/content/two/tabcontrol'
import twoClassification from '../components/content/two/classification'

export default {
    name:'twoview',
    data(){
        return {
        bannerData:'',
        recommend:'',
        feature:'',
        twoClassificationData:[],
        tabType:'pop',
        pageNum:1,
        isBoolerTabType:true,
        imgNumTime:-1,
        debonuseRow:function(){},
        tabcontrolHeight:0
        }
    },
    computed:{    
        comImgNumTime(){
            if(typeof(this.$refs.scroll)=='undefined'){
                return this.$store.state.imgNum
            }else{
                // this.$refs.scroll.scrollrefresh()
                this.debonuseRow()
                return this.$store.state.imgNum
            }
        }
    },
    methods:{
        //请求
        oneRequest(){
            oneRequest().then(res =>{
                this.bannerData = res.data.data.banner
                this.recommend = res.data.data.recommend
            }).catch(err =>{
                console.log(err);
            })
        },
        dataRequest(){
            dataRequest(this.tabType,this.pageNum).then(res=>{
                if(this.isBoolerTabType){
                    this.twoClassificationData = res.data.data.list
                    this.isBoolerTabType = false;
                }else{
                     this.twoClassificationData = this.twoClassificationData.concat(res.data.data.list)
                      this.isBoolerTabType = false;
                }
            }).catch(err=>{
                console.log(err);
            })
        },
        //普通函数
        getType(typeData){
            this.tabType = typeData;
            this.isBoolerTabType = true;
            this.dataRequest(this.tabType);
        },
        scrollTopFun(){
            this.$refs.scroll.scrollTopTo();
        },
        LoadingAxios(a){
            this.pageNum++;
            this.dataRequest()
        },
        bannerImgLoad(){
            this.tabcontrolHeight = this.$refs.tabcontrol.$el.offsetTop;
        },
    },
    watch:{},
    filters:{},
    props:{},
    components:{
        navTop,
        twoBanner,
        twoRecommend,
        twoFeature,
        twoTabcontrol,
        twoClassification,
        scroll,
        twoScrollTop
    },
    created(){
        this.oneRequest()
        this.dataRequest()
        // this.$bus.$on('imgLoadFunEmit',(res)=>{
        //     console.log(res);
        // })
    },
    mounted(){
        this.debonuseRow = debonuse(this.$refs.scroll.scrollrefresh,100)
    }
}
</script>

<style scoped>
#two{
    position: relative;
    height: 100vh;
    overflow: hidden;
}
#hhh{
    position:fixed;
    left:100px;
    top:200px;
    z-index:999;
}


</style>