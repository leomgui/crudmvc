// controller.js
class ItemController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  addItem(item) {
    this.model.addItem(item);
    this.view.clearInput();
    this.updateView();
  }

  deleteItem(index) {
    this.model.deleteItem(index);
    this.updateView();
  }

  editItem(index) {
    const newItem = prompt("Edit item:", this.model.getItems()[index]);
    if (newItem !== null) {
      this.model.updateItem(index, newItem);
      this.updateView();
    }
  }

  sortItems() {
    this.model.sortItems();
    this.updateView();
  }

  updateView() {
    const items = this.model.getItems();
    this.view.renderItems(items);
  }
}
