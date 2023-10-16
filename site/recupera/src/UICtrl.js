const UICtrl = (function () {
  const UISelectors = {
    userName: '#user-name',
    searchBtn: '.search-btn',
    itemList: '#item-list',
    listItems: '#item-list li',
    sendBtn: '#send-btn',
  }

  return {
    getSelectors: function () {
      return UISelectors
    },
    getItemsInput: function () {
      return {
        name: document.querySelector(UISelectors.userName).value,
      }
    },
    clearInput: function () {
      document.querySelector(UISelectors.userName).value = ''
    },
    populateItemList: function (items) {
      let id = 0
      let html = ''
      items.forEach(function (item) {
        id++
        html += `
        <li class="collection-item" id="item-${id}">
        <strong>Nome: </strong><em class="name">${item.name}</em> <strong>| E-mail: </strong><em class="email">${item.email}</em>
        <a href="#" id="send-btn-${id}" onClick="ItemCtrl.setDataToSend(this)" class="secondary-content">
            <i class="envia-email fa fa-paper-plane">
              Enviar senha para o e-mail</i
            >
          </a>
        </li>`
      })
      document.querySelector(UISelectors.itemList).innerHTML = html
    },
    showLoading: function (boolean) {
      if (boolean === true) {
        document.querySelector('#loading').style.display = 'block'
      } else {
        document.querySelector('#loading').style.display = 'none'
      }
    },
    message: function (msg) {
      let html = `
        <li class="collection-item">
        <strong>${msg}</strong>
        </li>`
      document.querySelector(UISelectors.itemList).innerHTML = html
    },
  }
})()
