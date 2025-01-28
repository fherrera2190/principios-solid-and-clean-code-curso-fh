type Size = "" | "S" | "M" | "L" | "XL";
class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}

  isProductReady(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case "string":
          if ((<string>this[key]).length <= 0)
            throw new Error(`${key} is empty`);
          break;
        case "number":
          if (<number>this[key] <= 0) throw new Error(`${key} is zero`);
          break;
        default:
          throw new Error(`${key} is not a valid value`);
      }
    }
    return true;
  }

  toString() {
    // No dry
    // if (this.name.length < 0) throw new Error("Product name is empty");
    // if (this.price <= 0) throw new Error("Product price is zero");
    // if (this.size.length <= 0) throw new Error("Product size is empty");

    if (!this.isProductReady()) return;

    return `${this.name} (${this.price}, ${this.size})`;
  }
}

(() => {
  const bluePants = new Product("blue pants", 10, "XL");
  console.log(bluePants.toString());
})();
