<template>
  <div>
    <div class='dataCenter'>
      <div class='dataOne'>
        <router-link to='/chinaTrend' tag='div' class='china'>国内疫情趋势</router-link>
      </div>
      <div class='dataTwo'>
        <div>
          <router-link to='/worldTrend' tag='div' class='world'>世界疫情趋势</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>

  /* 导航栏 */
  .dataCenter{
  background-color: #01050a;
  height: 4.5rem;
  line-height: 5rem;
  font-size: 1rem;
  font-weight: bolder;
}
.dataOne {
  height: 3.5rem;
  width:50%;
  float: left;
}
.dataOne div{
  background-color: #002d72;
  color: #fff;
  height:3.5rem;
  margin:0.5rem;
  text-align: center;
  line-height: 3.5rem;
}
.dataCenter .dataOne div:hover{
  background-color:dodgerblue;
}
.dataTwo {
  height: 3.5rem;
  width:50%;
  float: left;
}
.dataTwo div{
  background-color: #002d72;
  color: #fff;
  height:3.5rem;
  margin:0.5rem;
  text-align: center;
  line-height: 3.5rem;
}
.dataCenter .dataTwo div:hover{
  background-color:dodgerblue;
}
.china{
  background-color: #002d72;
  color: #fff;
  height:3.5rem;
  margin:0.5rem;
  text-align: center;
  line-height: 3.5rem;
}
.china:hover{
  background-color:dodgerblue;
}

.world{
  background-color: #002d72;
  color: #fff;
  height:3.5rem;
  margin:0.5rem;
  text-align: center;
  line-height: 3.5rem;
}
.world:hover{
  background-color:dodgerblue;
}

</style>