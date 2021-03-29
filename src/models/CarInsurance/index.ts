import Product from '../Product'

export default class CarInsurance {
  private products: Product[]

  constructor(products: Product[] = []) {
    this.products = products
  }

  updatePrice(): Product[] {
    for (var i = 0; i < this.products.length; i++) {
      this.products[i].updatePrice()
    }

    return this.products
  }
}
