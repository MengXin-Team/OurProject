<template>
  <div>
    <div class="number_container">
      <div class="number_block">
        <div class="increase_block" style="color:#FF6A57">{{number.addecon_new}}</div>
        <div class="number" style="color:#FF6A57;font-size: 25px;">{{number.currentConfirmedNum}}</div>
        <div class="title">现有确诊</div>
      </div>
      <div class="number_block">
        <div class="increase_block" style="color:#EC9217">{{number.addasymptom}}</div>
        <div class="number" style="color:#EC9217;font-size: 25px;">{{number.asymptomNum}}</div>
        <div class="title">无症状感染者</div>
      </div>
      <div class="number_block">
        <div class="increase_block" style="color:#476DA0">{{number.addjwsr}}</div>
        <div class="number" style="color:#476DA0;font-size: 25px;">{{number.jwsrNum}}</div>
        <div class="title">境外输入</div>
      </div>
    </div>
    <div class="number_container">
      <div class="number_block">
        <div class="increase_block" style="color:#E83132">{{number.addcon_new}}</div>
        <div class="number" style="color:#E83132;font-size: 25px;">{{number.confirmedNum}}</div>
        <div class="title">累计确诊</div>
      </div>
      <div class="number_block">
        <div class="increase_block" style="color:#10AEB5">{{number.addcure_new}}</div>
        <div class="number" style="color:#10AEB5;font-size: 25px;">{{number.curedNum}}</div>
        <div class="title">累计治愈</div>
      </div>
      <div class="number_block">
        <div class="increase_block" style="color:#4E5054">{{number.adddeath_new}}</div>
        <div class="number" style="color:#4E5054;font-size: 25px;">{{number.deadNum}}</div>
        <div class="title">累计死亡</div>
      </div>
    </div>

    <div class="index_switch_buttons">
      <div class="index_button" :class="isTotal==1 ?'checked':''"  @click="change(1)">累计确诊</div>
      <div class="index_button" :class="isTotal==2 ?'checked':'' "  @click="change(2)">现有确诊</div>
      <div class="index_button" :class="isTotal==3 ?'checked':'' "  @click="change(3)">累计治愈</div>
    </div>

    <!-- 初始化echarts需要有个宽高的盒子 -->
    <div ref='mapbox' class='china'></div>
  </div>
  
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china.js'
// eslint-disable-next-line no-unused-vars
import jsonp from 'jsonp'
const option = { 
    title: {
        text: '中国疫情图',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['中国疫情图']
      },
    roamController: {
        show: true,
        left: 'right',
        mapTypeControl: {
          'china': true
        }
      },
    series: [
        {
          name: '累计确诊数',
          type: 'map',
          mapType: 'china',
          top:40,
          roam: false,
          label: {
            show: true,
            color: 'rgb(249, 249, 249)'
          },
          data: []
        }
      ],
    visualMap: {
        type: 'piecewise',
        pieces: [
          { min: 10000, label: '大于等于1000人' },
          { min: 1000, max: 9999, label: '确诊1000-9999人' },
          { min: 100, max: 999, label: '确诊100-999人' },
          { min: 10, max: 99, label: '确诊10-99人' },
          { min: 1, max: 9, label: '确诊1-9人'},
        ],
        inRange:{
          symbol:'rect',
          color:['#ffc0b1','#9c0505']
        }
        // color: ['#E0022B', '#E09107', '#A3E00B']
      },
  
    data:[],//用来展示后台给的数据
    
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      }
};

export default {
  mounted(){
    this.getData();
    this.mychart = echarts.init(this.$refs.mapbox);
    this.setOption(option);
  },
  methods:{
    getData(){
        jsonp('https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427',{},(err,data)=>{
          if(!err){
            //代表请求数据成功
            // eslint-disable-next-line no-unused-vars
            this.number.currentConfirmedNum = data.data.econNum;
            this.number.addecon_new = data.data.add_daily.addecon_new;
            
            this.number.asymptomNum = data.data.asymptomNum;
            this.number.addasymptom = data.data.add_daily.addasymptom;

            this.number.jwsrNum = data.data.jwsrNum;
            this.number.addjwsr = data.data.add_daily.addjwsr;

            this.number.confirmedNum = data.data.gntotal;
            this.number.addcon_new = data.data.add_daily.addcon_new;

            this.number.curedNum = data.data.curetotal;
            this.number.addcure_new = data.data.add_daily.addcure_new;

            this.number.deadNum = data.data.deathtotal;
            this.number.adddeath_new = data.data.add_daily.adddeath_new;
          }
        })
        if(this.isTotal==1){
          jsonp('https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427',{},(err,data)=>{
          if(!err){
            //代表请求数据成功
            console.log(data);
            // eslint-disable-next-line no-unused-vars
            let list = data.data.list.map(item=>({name:item.name,value:item.value}))
            option.series[0].data = list;
            option.series[0].name = '累计确诊';
            this.mychart.setOption(option) 
          //这行代码能执行的前提是 Dom已渲染完成，只有Dom渲染完成才能执行echarts初始化
          }
        })
        }
        else if(this.isTotal==2){
          jsonp('https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427',{},(err,data)=>{
          if(!err){
            //代表请求数据成功
            console.log(data);
            // eslint-disable-next-line no-unused-vars
            let list = data.data.list.map(item=>({name:item.name,value:item.econNum}))
            option.series[0].data = list;
            option.series[0].name = '现有确诊';
            this.mychart.setOption(option) 
          //这行代码能执行的前提是 Dom已渲染完成，只有Dom渲染完成才能执行echarts初始化
          }
        })
        }
        else{
          jsonp('https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427',{},(err,data)=>{
          if(!err){
            //代表请求数据成功
            console.log(data);
            // eslint-disable-next-line no-unused-vars
            let list = data.data.list.map(item=>({name:item.name,value:item.cureNum}))
            option.series[0].data = list;
            option.series[0].name = '累计治愈';
            this.mychart.setOption(option) 
          //这行代码能执行的前提是 Dom已渲染完成，只有Dom渲染完成才能执行echarts初始化
          }
        })
        }
    },
    change(isTotal) {
      this.isTotal = isTotal;
      this.getData();
    },
    setOption() {}
  },
  data(){
    return{
       isTotal:1,
       number: {
        currentConfirmedNum: 0,//现有确诊
        asymptomNum: 0,//无症状感染者
        jwsrNum: 0,//境外输入
        confirmedNum: 0,//累计确诊
        curedNum: 0,//累计治愈
        deadNum: 0,//累计死亡

        addecon_new:0,
        addasymptom:0,
        addjwsr:0,
        addcon_new:0,
        addcure_new:0,
        adddeath_new:0,
      }
    }
  }
}
//https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427
</script>
<style scoped>
  .china{
    height:500px;
    width:600px;
    margin:auto;
  }

  .index_switch_buttons {
  width: 100%;
  display: flex;
  border-radius: 10px;
  background: #ddd;
  margin: 16px;
  flex-direction: row;
}
.index_switch_buttons .index_button {
  flex: 1;
  padding: 12px;
  border-radius: 10px;
  font-size: 16px;
  text-align: center;
}
.index_switch_buttons .checked {
  background: #efefef;
  font-weight: bold;
}

  .number_container {
  padding: 10px;
  display: flex;
  flex: 1;
  width: 100%;
}
.number_block {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.number_block .title {
  font-size: 12px;
  color: #000;
  background: #f2f2f2;
  border-radius: 3px;
  padding: 2px;
  margin: 4px;
}
.number_block .increase_block {
  display: flex;
  flex-direction: row;
  font-size: 12px;
}
</style>
