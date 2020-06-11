<template>
  <div>
    <div class="block">
        <el-timeline>
          <el-timeline-item v-for="item in newsList" :key="item.id" size="large">
            <div class="newsitem">
              <p>
                {{item.pubDate}}（{{ item.pubDateStr }}）
              </p>
              <el-card>
                <p style="font-weight:bold">
                  {{item.title}}
                </p>
                <p class="newscontent">{{ item.summary }}</p>
                <div class="newsfooter">
                  <p></p>
                  <p>
                    来源:<span class="origin">{{ item.infoSource }}</span>
                  </p>
                </div>
              </el-card>
            </div>
          </el-timeline-item>
        </el-timeline>
    </div>

  </div>
</template>
<script>

import axios from 'axios'
import dayjs from 'dayjs'
const APIKEY = '964dc226dd5b57e892e6199735b6c55f'

export default{
  data(){
    return{
      newsList : []
    }
  },
  methods:{
    getData(){
      axios({
        method: 'get',
        url: `http://api.tianapi.com/txapi/ncov/index?key=${APIKEY}`
      }).then(res=>{
        console.log(res);

        if (res.status === 200) {
        const { news } = res.data.newslist[0]
        news.forEach((item) => {
          item.pubDate = dayjs(item.pubDate).format('YYYY年MM月DD日 HH:mm')
        })
        this.newsList = news
        console.log(this.newsList);
        
      }

      })
    }
  },
  mounted(){
    this.getData();
  }
}
</script>
<style scoped>
.block{
  margin-left: 20px;
  margin-top: 20px;
}
.newsitem{
    /* margin-top: 30px; */
    width: 100%;
    background-color: #fff;
}
.newscontent{
    overflow: hidden;
}
.newsfooter{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
}
.origin{
    color: #6C63FF;
    padding-left: 5px;
}
</style>