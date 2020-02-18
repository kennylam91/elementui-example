import { Random } from 'mockjs'

var Mock = require('mockjs')
export default Mock.mock(/\.json/, {
  'list|30-50': [{
    'appCode|+1': 1,
    'appName': '@string',
    'creator': '@string'
  }]
})
