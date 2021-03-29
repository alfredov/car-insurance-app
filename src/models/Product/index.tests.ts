import Product from './index'
import { specialFullCoverageRule, fullCoverageRule } from './rulesTemplate'

describe('models::Product', () => {
  it('should NOT update price and sellIn when it has not priceRule', () => {
    const product = new Product('Mega Coverage', 0, 80)
    product.updatePrice()
    expect(product.sellIn).toBe(0)
    expect(product.price).toBe(80)
  })

  it('should Product price get updated to 0 when it is already expired', () => {
    const product = new Product('Special Full Coverage', 0, 5)
    product.applyPriceRule = specialFullCoverageRule
    product.updatePrice()
    expect(product.price).toEqual(0)
  })

  it('should Product price stay in Max=50', () => {
    const product = new Product('Product x', 0, 50)
    product.applyPriceRule = fullCoverageRule
    product.updatePrice()

    expect(product.price).toBe(50)
  })

  it('should Product price get initialize when newPrice is negative', () => {
    const product = new Product('Product X', 0, -20)
    product.applyPriceRule = (isExpired, price) => isExpired ? -1 : price
    product.updatePrice()

    expect(product.price).toBe(0)
  })
})
