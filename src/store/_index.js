export const store = {
  state: {
    count: 0,
    orderList: []
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  getters: {
    orderListCount: state => {
      return state.orderList.length
    },
    orderListUnPay: state => {
      state.orderList.filter(item => {
        return item.pay === false
      })
    }
  },
  action: {
    asynOrderList ({state, commit}) {
      window.setTimeout(() => {
        state.orderList = [{
          index: 0,
          pay: true,
          amount: 100,
          date: '2017-11-30'
        }, {
          index: 1,
          pay: false,
          amount: 110,
          date: '2017-12-01'
        }, {
          index: 2,
          pay: true,
          amount: 210,
          date: '2017-12-02'
        }]
      }, 2000)
    }
  }
}
