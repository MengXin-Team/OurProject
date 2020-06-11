<template>
  <div>
    <div class="block">
        <el-timeline>
          <el-timeline-item v-for="item in newsList" :key="item.id" size="large">
            <div class="newsitem">
              <el-card>
                <p style="font-weight:bold">
                  {{item.hotword}}
                </p>
              </el-card>
            </div>
          </el-timeline-item>
        </el-timeline>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
const APIKEY = 'f57d0d110d0035b288b30711f26dffd9'
export default {
  data(){
    return{
      newsList : []
    }
  },
  mounted(){
    this.getData();
  },
  methods:{
    getData(){
    axios({
        method: 'get',
        url: `http://api.tianapi.com/txapi/weibohot/index?key=${APIKEY}`
      }).then(res=>{
        console.log(res)
        this.newsList=res.data.newslist
    })
  }
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

</style>