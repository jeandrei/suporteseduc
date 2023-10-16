const ItemCtrl = (function () {
  const Item = function (name, email) {
    this.name = name
    this.email = email
  }

  const data = {
    items: null,
    currentName: null,
    currentEmail: null,
  }

  return {
    /* 03 get items */
    getItems: function () {
      return data.items
    },
    logData: function () {
      return data
    },
    /* 02 get items from the spreadsheet and update data.items */
    updateItems: async function () {
      let items = await StorageCtrl.getItems()
      data.items = await items
    },
    getEmailByName: async function (name) {
      let items = await StorageCtrl.getUserEmail(name)
      data.items = await items
    },
    //define o nome e email do current para depois enviar o email
    setDataToSend: function (obj) {
      ;(data.currentName = obj.parentNode.querySelector('.name').textContent),
        (data.currentEmail = obj.parentNode.querySelector('.email').textContent)
    },
    setCurrentItem: function (item) {
      data.currentName = item.name
      data.currentEmail = item.email
    },
    // Get current Item
    getCurrentItem: function () {
      return {
        name: data.currentEmail,
        email: data.currentEmail,
      }
    },
    getItemByEmail: function (id) {
      let found = null
      // Loop through items
      data.items.forEach(function (item) {
        if (item.id === id) {
          found = item
        }
      })
      return found
    },
  }
})()
