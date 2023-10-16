/* apiplan4 */
const URLAPI =
  'https://script.google.com/macros/s/AKfycby__tFYibpVXtxE4SagsuW6GT-DAGcu-Ob7ppW4m2WpJTeCRBBQG2Io9XduAYbuaxO2lQ/exec'

const http = new EasyHTTP()

const StorageCtrl = (function () {
  return {
    /* 01 get items */
    getItems: async function () {
      const items = await http.get(URLAPI)
      return items[0].data
    },
    getUserEmail: async function (name) {
      const URLBUSCA = URLAPI + `?name=${name}`
      const items = await http.get(URLBUSCA)
      return items[0].data
    },
    sendEmail: async function () {
      UICtrl.showLoading(true)
      const user = ItemCtrl.getCurrentItem()
      const URLEMAIL = URLAPI + `?email=${user.email}`
      const items = await http.get(URLEMAIL)
      UICtrl.showLoading(false)
    },
  }
})()
