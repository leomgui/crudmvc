// view.js
class ItemView {
  constructor() {
    this.itemList = document.getElementById("item-list");
  }

  renderItems(items) {
    this.itemList.innerHTML = "";
    items.forEach((item, index) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <input type="checkbox" id="item-${index}">
        <label for="item-${index}">${item}</label>
        <button onclick="controller.deleteItem(${index})">Delete</button>
        <button onclick="controller.editItem(${index})">Edit</button>
      `;
      this.itemList.appendChild(listItem);
    });
  }

  clearInput() {
    document.getElementById("item-input").value = "";
  }
}
