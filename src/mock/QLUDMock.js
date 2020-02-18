
let Mock = require('mockjs')
let Random = Mock.Random
let data = [
  { 'appCode': 1, 'appName': Random.sentence(2, 4), 'creator': Random.name() },
  { 'appCode': 2, 'appName': Random.sentence(2, 4), 'creator': Random.name() },
  { 'appCode': 3, 'appName': Random.sentence(2, 4), 'creator': Random.name() },
  { 'appCode': 4, 'appName': Random.sentence(2, 4), 'creator': Random.name() },
  { 'appCode': 5, 'appName': Random.sentence(2, 4), 'creator': Random.name() },
]
Mock.mock('/apps', data)
Mock.mock('/apps/search', (options) => {
  // let appSearch = options.body
  console.log(options.body)
  let { appCode, appName } = JSON.parse(options.body)
  console.log(appCode, appName)
  return data.filter(item => {
    let filterByAppCode = true
    let filterByAppName = true
    if (appCode) {
      filterByAppCode = (item.appCode + '' === appCode)
    }
    if (appName) {
      filterByAppName = (item.appName.includes(appName))
    }
    return filterByAppCode && filterByAppName
  })
})
