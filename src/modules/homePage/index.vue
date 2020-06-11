<template>
  <div id='home'>
    <el-carousel :interval="4000" type="card" height="400px">
    <el-carousel-item v-for="item in rumoursList" :key="item.id">
      <div>
          <img :src="item.imgsrc" style="height:200px;width=100%;opacity: 0.8;" />
          <div class="roumorcontent">
            <p class="romortitle">{{ item.title }}</p>
            <p>{{ item.desc }}</p>
          </div>
        </div>
        <img class="roumorimg" v-if="item.explain === '谣言' || item.explain === '伪科学' || item.explain === '有失实'" src="https://assets.dxycdn.com/gitrepo/ncov-mobile/dist/static/badge-big@2x.5395c013.png" alt="谣言">
        <img class="roumorimg" v-if="item.explain === '尚无定论'" src="https://assets.dxycdn.com/gitrepo/ncov-mobile/dist/static/badge-y-big@2x.c0fd84da.png" alt="尚无定论">
    </el-carousel-item>
  </el-carousel>
  </div>
</template>


<script>
import axios from 'axios'
const APIKEY = '964dc226dd5b57e892e6199735b6c55f'
export default{
  data(){
    return {
        rumoursList : []
      }
  },
  mounted() {
    this.getData()
  },
  methods:{
    getData(){
        axios({
            method: 'get',
            url: `http://api.tianapi.com/txapi/rumour/index?key=${APIKEY}`
        }).then(res=>{
            console.log(res)
            this.rumoursList=res.data.newslist
      })
      }
  },
}
</script>
<style scoped>
  #home{
    margin-top: 30px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .roumorcontent {
  padding: 24px;
}
.romortitle {
  font-size: 16px;
  color: #37474f;
  font-weight: 400;
}
.roumorimg{
    position: absolute;
    width: 150px;
    height: 150px;
    top:5%;
    left: 28%;
}
</style>