
let Mock = require('mockjs')
let Random = Mock.Random
let data = [
  { status: true, appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { status: true, appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { status: true, appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { status: true, appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { status: true, appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { status: true, appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { status: true, appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { status: true, appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { status: true, appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { status: true, appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { status: true, appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { status: true, appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { status: true, appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { status: true, appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { status: true, appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { status: true, appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { status: true, appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { status: true, appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { status: true, appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { status: true, appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { status: true, appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { status: true, appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { status: true, appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { status: true, appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { status: true, appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { status: true, appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { status: true, appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { status: true, appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { status: true, appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { status: true, appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { status: true, appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() },
  { status: true, appCode: Random.sentence(1), appName: Random.sentence(2, 4), creator: Random.name(), appLink: Random.url() }
]
// let sortByAppCode = (app1, app2) => app1.appCode - app2.appCode
let sortByAppName = (app1, app2) => app1.appName.localeCompare(app2.appName)
let filterActiveApp = (app) => app.status === true
const defaultPaginationLimit = 10
// get all apps
Mock.mock('/apps', (options) => {
  console.log('api /apps')
  console.log(options)
  // get all apps
  if (options.type === 'GET') {
    return {
      list: data.filter(filterActiveApp).sort(sortByAppName).slice(0, defaultPaginationLimit),
      total: data.length
    }
  }
  // delete app
  if (options.type === 'DELETE') {
    let deletedAppCode = options.body
    data.find(item => item.appCode === deletedAppCode).status = false
    return {
      list: data.filter(filterActiveApp).sort(sortByAppName).slice(0, defaultPaginationLimit),
      total: data.length
    }
  }
}
)
// delete app

// search apps
Mock.mock('/apps/search', (options) => {
  // let appSearch = options.body
  console.log(options.body)
  let { appCode, appName, pagination } = JSON.parse(options.body)
  console.log(appCode, appName, pagination)
  let listBeforePagination = data.filter(filterActiveApp)
    .filter(item => {
      let filterByAppCode = true
      let filterByAppName = true
      if (appCode) {
        filterByAppCode = (item.appCode.includes(appCode))
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
