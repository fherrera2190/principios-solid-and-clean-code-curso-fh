class Product {
  constructor(public name: string = "") {}

  toString() {
    if (this.name.length < 0) throw new Error("Product name is empty");
    return `${this.name}`;
  }
}

(() => {
  const bluePants = new Product("blue pants");
  console.log(bluePants.toString());
})();
