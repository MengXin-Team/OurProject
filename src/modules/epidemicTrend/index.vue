<template>
  <div>
      <div class='dataOne'>
        <router-link to='/chinaTrend' tag='div' class='china'>国内疫情趋势</router-link>
      </div>
      <div class='dataTwo'>
          <router-link to='/worldTrend' tag='div' class='world'>世界疫情趋势</router-link>
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

/* .dataOne {
  height: 58px;
  width:50%;
  float: left;
}
.dataTwo {
  height: 3.5rem;
  width:50%;
  float: left;
} */
.china{
  float: left;
  width: 50%;
  background-color: #2c003e;
  color: #fff;
  height:58px;
  text-align: center;
  line-height: 3.5rem;
}
.china:hover{
  background-color:#6983aa;
}

.world{
  float: left;
  width: 50%;
  background-color: #2c003e;
  color: #fff;
  height:58px;
  text-align: center;
  line-height: 3.5rem;
}
.world:hover{
  background-color:#6983aa;
}

</style>