const App = (function () {
  const loadEventListeners = function () {
    const UISelectors = UICtrl.getSelectors()

    const searchEmailBtn = async function (e) {
      e.preventDefault()
      UICtrl.showLoading(true)
      const user = UICtrl.getItemsInput()

      try {
        UICtrl.message('Procurando. Aguarde!')
        await ItemCtrl.updateItems()
        await ItemCtrl.getEmailByName(user.name)
        const items = ItemCtrl.getItems()
        UICtrl.populateItemList(items)
        let id = 0
        items.forEach(function (item) {
          id++
          document
            .querySelector(`#send-btn-${id}`)
            .addEventListener('click', sendEmailBtn)
        })
      } catch (error) {
        UICtrl.message('Ops! Nome não localizado.')
      }

      UICtrl.showLoading(false)
    }

    const sendEmailBtn = async function (e) {
      await StorageCtrl.sendEmail()
      UICtrl.message('E-mail enviado com sucesso!')
      e.preventDefault()
    }

    document
      .querySelector(UISelectors.searchBtn)
      .addEventListener('click', searchEmailBtn)
  }

  // Disable submit on enter
  document.addEventListener('keypress', function (e) {
    if (e.keyCode === 13 || e.wich === 13) {
      e.preventDefault()
      return false
    }
  })

  return {
    init: async function () {
      //await ItemCtrl.updateItems()
      //await ItemCtrl.getEmailByName('Vagner')

      //const items = ItemCtrl.getItems()

      //console.dir(items)

      //UICtrl.populateItemList(items)

      //UICtrl.clearEditState()
      UICtrl.showLoading(false)
      loadEventListeners()
    },
  }
})()

App.init()
