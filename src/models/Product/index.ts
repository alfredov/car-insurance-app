export type PriceRule = (isExpired: boolean, price: number, sellIn: number) => number

export default class Product {
  name: string
  sellIn: number
  price: number
  applyPriceRule?: PriceRule

  constructor(name: string, sellIn: number, price: number) {
    this.name = name
    this.sellIn = sellIn
    this.price = price
  }

  updatePrice() {
    if (this.applyPriceRule) {
      const isExpired = this.sellIn <= 0
      const newPrice = this.applyPriceRule(isExpired, this.price, this.sellIn)
      if (newPrice < 0) {
        this.price = 0
      } else {
        if (newPrice > 50) {
          this.price = 50
        } else {
          this.price = newPrice
        }
      }
  
      this.sellIn = this.sellIn - 1
    }
  }
}
