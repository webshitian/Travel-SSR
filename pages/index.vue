<template>
  <div class="container">
        <!-- 轮播图 -->
        <!--:interval:相隔时间
        arrow:是否显示左右的箭头-->
        <el-carousel 
        :interval="5000" 
        arrow="always">
            <el-carousel-item 
            v-for="(item, index) in banners" 
            :key="index">
                <div class="banner-image" 
                :style="`
                background:url(${item.url}) center center no-repeat;
                background-size:contain contain;
                `">
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
  data(){
    return{
      banners:[
      {url:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3246446161,4096884020&fm=26&gp=0.jpg"},
      {url:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3487005246,2909598293&fm=26&gp=0.jpg"},
      {url:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=285860789,4153913836&fm=26&gp=0.jpg"}
    ]
    }
  }
}
</script>

<style scoped lang="less">
  .container{
    min-width:1000px;
    margin: 0 auto;
    position: relative;

    /deep/ .el-carousel__container{
      height: 700px;
    }

    .banner-image{
      width:100%;
      height: 100%;
    }
  }
</style>
