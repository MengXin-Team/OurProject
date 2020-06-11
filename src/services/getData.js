import axios from 'axios'
const APIKEY = '964dc226dd5b57e892e6199735b6c55f'
export function getData() {
  return axios({
    method: 'get',
    url: `http://api.tianapi.com/txapi/ncov/index?key=${APIKEY}`
  })
}

// 获取疫情统计数据


