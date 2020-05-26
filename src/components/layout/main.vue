<template>
  <div>
    <header>
      <div id="we">
        <h2>MXteam</h2>
      </div>
      <nav>
        <router-link
          class="item"
          v-for="item in nvaList"
          :key="item.id"
          :to = item.url>{{item.name}}</router-link>
      </nav>
    </header>
    
    <router-view class="main"></router-view>
  </div>
</template>
<script>

export default {
  data() {
    return {
      nvaList:[
        {
          name:'首页',
          id: 0,
          url:'/homepage'
        },
        {
          name: '疫情分布',
          id: 1,
          url: '/chinaMap'
        },
        {
          name: '全民热搜',
          id: 2,
          url: '/hotSearch'
        },
        {
          name: '疫情趋势',
          url: '/chinaTrend',
          id: 3,
        },
        {
          name: '疾病知识',
          url: '/diseaseKnowledge',
          id: 4,
        },
        {
          name:'实时播报',
          url:'/realTimeBroadcast',
          id:5
        }
      ]
    }
  },
}
</script>
<style scoped>
header{
  background-color: #4d4c7d;
  height: 6rem;
  line-height: 6rem;
}
nav{
  display: flex;
  justify-content: flex-end;
  /* margin-right: 30px; */
  font-size: 1rem;
  font-weight: bolder;
  height: 1rem;
}
.item{
  color: #EEEEEE;
  margin: 0 20px;
  text-decoration-line: none;
  transition: 0.3s;
  font-weight: 545;
  font-size: 1.1em;
}
.item:hover{
  color: #b1bdf5
}
.main{
  background-color:#fff;
}
#we{
  color: #fff;
  float: left;
  margin-left: 50px;
  font-style: italic;
  font-size: 1.7em;
  font-family: Raleway,'Times New Roman',serif;

}
</style>

