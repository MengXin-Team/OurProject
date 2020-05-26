<template>
  <div id='homePage'>
      <!--动态将图片轮播图的容器高度设置成与图片一致-->
    <el-carousel :interval="4000" type="card"  height="zmdHeight + 'px'">
      <el-carousel-item v-for="item in imagebox" :key="item.id">
        <img :src="item.idView" class="image">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
  export default{
    name:'zmd',
    data(){
      return {
        imagebox:[
          {id:0, idView:require('@/assets/img/1.jpg')}, 
          {id:1, idView:require('@/assets/img/2.jpg')}, 
          {id:2, idView:require('@/assets/img/3.png')}
        ],
         // 图片父容器高度
        zmdHeight: 700,
        // 浏览器宽度
        screenWidth: 0
      }
    },
     methods:{
              setSize:function () {
                // 通过浏览器宽度(图片宽度)计算高度
                this.bannerHeight = 400 / 1920 * this.screenWidth;
              },
            },
          mounted() {
              // 首次加载时,需要调用一次
              this.screenWidth =  window.innerWidth;
              this.setSize();
              // 窗口大小发生改变时,调用一次
              window.onresize = () =>{
              this.screenWidth =  window.innerWidth;
              this.setSize();
            }
          }
  }
</script>
<style scoped>
    #homePage{
        margin-top:50px;
    }
    img{
     /*设置图片宽度和浏览器宽度一致*/
      width:100%;
      height:inherit;
    }
</style>