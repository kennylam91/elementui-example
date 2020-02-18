
let Mock = require('mockjs')
let Random = Mock.Random
let data = [
  { appCode: 1, appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: 2, appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: 3, appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: 4, appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: 5, appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: 6, appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: 7, appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: 8, appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: 9, appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: 10, appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: 11, appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: 12, appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: 13, appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: 14, appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: 15, appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: 16, appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: 17, appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: 18, appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: 19, appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: 20, appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: 21, appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: 22, appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: 23, appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: 24, appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: 25, appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: 26, appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: 27, appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: 28, appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: 29, appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: 30, appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: 31, appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: 32, appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() }
]
let sortByAppCode = (app1, app2) => app1.appCode - app2.appCode
let sortByAppName = (app1, app2) => app1.appName.localeCompare(app2.appName)
const defaultPaginationLimit = 10
// get all apps
Mock.mock('/apps',
  {
    list: data.sort(sortByAppName).slice(0, defaultPaginationLimit),
    total: data.length
  })

// search apps
Mock.mock('/apps/search', (options) => {
  // let appSearch = options.body
  console.log(options.body)
  let { appCode, appName, pagination } = JSON.parse(options.body)
  console.log(appCode, appName, pagination)
  let listBeforePagination = data.filter(item => {
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
    .sort(sortByAppName)
  return {
    list: listBeforePagination.slice((pagination.page - 1) * pagination.limit, pagination.page * pagination.limit),
    total: listBeforePagination.length
  }
})
