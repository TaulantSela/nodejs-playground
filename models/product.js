const products = [];

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    products.push(this);
  }

  // static -> not when instatiation object
  static fetchAll() {
    return products;
  }
};
