
let Mock = require('mockjs')
let Random = Mock.Random
let data = [
  { appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() }
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
