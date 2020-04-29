<template>
  <div>
    <div class='dataCenter'>
      <div class='dataOne'>
        <router-link to='/chinaMap' tag='div' class='china'>国内疫情</router-link>
      </div>
      <div class='dataTwo'>
        <div>
          <router-link to='/worldMap' tag='div' class='world'>世界疫情</router-link>
        </div>
      </div>
      <div class="dataThree">
          <router-link to='/fuJianMap' tag='div' class='fj'>福建疫情</router-link>
      </div>
    </div>
    <router-view></router-view>

  </div>
</template>

<script>

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
  width:33.3%;
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
  width:33.3%;
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
.dataThree {
  height: 3.5rem;
  width:33.3%;
  float: left;
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
.fj{
  background-color: #002d72;
  color: #fff;
  height:3.5rem;
  margin:0.5rem;
  text-align: center;
  line-height: 3.5rem;
}
.fj:hover{
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
