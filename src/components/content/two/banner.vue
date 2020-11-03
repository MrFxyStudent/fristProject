<template>
    <div class="banner">
        <div class="bannerRow">
            <div class="bannerA">
                <img v-for="(bannerData,i) in bannerData.list" :key="i" :src="bannerData.image"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    props:['bannerData']
}
</script>

<style scoped>
.banner{
    overflow: hidden;
    overflow-x:scroll;

}
.bannerRow{
    width: 1500px;
    display: flex;
    flex-direction:row;
    flex-wrap: nowrap;
}
.bannerA{
    flex: 1;
}
.bannerRow .bannerA img{
    width: 375px;
}

</style>