// model.js
class ItemModel {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  deleteItem(index) {
    this.items.splice(index, 1);
  }

  updateItem(index, newItem) {
    this.items[index] = newItem;
  }

  getItems() {
    return this.items;
  }

  sortItems() {
    this.items.sort();
  }
}
