window.visitorConfig = {
  baseURL: 'http://47.115.140.192:8763/api/campus/visitor/v2.0/m/',
  visitReasonGroup: [{
    label: '拜访',
    value: 1
  }, {
    label: '面试',
    value: 2
  }, {
    label: '其他',
    value: 3
  }],
  statusDictionary: {
    1: '待审核',
    2: '待访问',
    3: '已完成',
    4: '已失效'
  }
}
