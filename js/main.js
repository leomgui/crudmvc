// main.js
const model = new ItemModel();
const view = new ItemView();
const controller = new ItemController(model, view);

document.getElementById("add-button").addEventListener("click", () => {
  const item = document.getElementById("item-input").value;
  if (item.trim() !== "") {
    controller.addItem(item);
  }
});

document.getElementById("sort-button").addEventListener("click", () => {
  controller.sortItems();
});

controller.updateView();
