<template>
  <div>
    <!-- <div class='dataCenter'> -->
      <div class='dataOne'>
        <router-link to='/chinaMap' tag='div' class='china'>国内疫情</router-link>
      </div>
      <div class='dataTwo'>
          <router-link to='/worldMap' tag='div' class='world'>世界疫情</router-link>
      </div>
      <div class="dataThree">
          <router-link to='/fuJianMap' tag='div' class='fj'>福建疫情</router-link>
      </div>
    <!-- </div> -->
    <router-view></router-view>

  </div>
</template>

<script>

</script>
<style scoped>

  /* 导航栏 */

/* .dataOne {
  height: 3.5rem;
  width:33.33333333%;
  float: left;
}
.dataTwo {
  height: 3.5rem;
  width:33.33333333%;
  float: left;
}
.dataThree {
  height: 3.5rem;
  width:33.33333333%;
  float: left;
} */
.china{
  width:33.33333333%;
  float: left;
  background-color: #2c003e;
  color: #fff;
  height:58px;
  /* margin:0.5rem; */
  text-align: center;
  line-height: 3.5rem;
}
.china:hover{
  background-color:#6983aa;
}
.fj{
  width:33.33333333%;
  float: left;
  background-color: #2c003e;
  color: #fff;
  height:58px;
  /* margin:0.5rem; */
  text-align: center;
  line-height: 3.5rem;
}
.fj:hover{
  background-color:#6983aa;
}
.world{
  width:33.33333333%;
  float: left;
  background-color: #2c003e;
  color: #fff;
  height:58px;
  /* margin:0.5rem; */
  text-align: center;
  line-height: 3.5rem;
}
.world:hover{
  background-color:#6983aa;
}

</style>
