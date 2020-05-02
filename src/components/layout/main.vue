<template>
  <div>
    <header>
      <div id="we">
        <h2>
          <img src="../../assets/img/4.png" alt="" style="height: 5%;width:5%">
          萌新小队
        </h2>
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
          url: '/epidemicMap'
        },
        {
          name: '全民热搜',
          id: 2,
          url: '/hotSearch'
        },
        {
          name: '疫情趋势',
          url: '/epidemicTrend',
          id: 3,
        },
        {
          name: '疾病知识',
          url: '/diseaseKnowledge',
          id: 4,
        }
      ]
    }
  },
}
</script>
<style scoped>
header{
  background-color: #002d72;
  height: 6rem;
  line-height: 6rem;
}
nav{
  display: flex;
  justify-content: flex-end;
  margin-right: 30px;
  font-size: 1rem;
  font-weight: bolder;
  height: 1rem;
  margin-right: 10rem;
}
.item{
  color: #fff;
  margin: 0 20px;
  text-decoration-line: none;
  transition: 0.3s;
}
.item:hover{
  color: #f1c400
}
.main{
  background-color:#fff;
  height: 100vh;
}
#we{
  color: #fff;
  float: left;
  margin-left: 50px;
}
</style>