import {
  mediumCoverageRule,
  fullCoverageRule,
  lowCoverageRule,
  specialFullCoverageRule,
  superSaleRule
} from './models/Product/rulesTemplate'

import { Product, CarInsurance } from './models'
import { printProductDetails } from './utils'

const product1 = new Product('Medium Coverage', 10, 20)
product1.applyPriceRule = mediumCoverageRule

const product2 = new Product('Full Coverage', 2, 0)
product2.applyPriceRule = fullCoverageRule

const product3 = new Product('Low Coverage', 5, 7)
product3.applyPriceRule = lowCoverageRule

const product4 = new Product('Special Full Coverage', 15, 20)
product4.applyPriceRule = specialFullCoverageRule

const product5 = new Product('Special Full Coverage', 10, 49)
product5.applyPriceRule = specialFullCoverageRule

const product6 = new Product('Special Full Coverage', 5, 49)
product6.applyPriceRule = specialFullCoverageRule

const product7 = new Product('Super Sale', 3, 6)
product7.applyPriceRule = superSaleRule

const productsAtDayZero = [
  product1,
  product2,
  product3,
  new Product('Mega Coverage', 0, 80),
  new Product('Mega Coverage', -1, 80),
  product4,
  product5,
  product6,
  product7
]

const carInsurance = new CarInsurance(productsAtDayZero)
printProductDetails(0, productsAtDayZero)

for (let i = 1; i <= 30; i += 1) {
  const productsUpdated = carInsurance.updatePrice()
  printProductDetails(i, productsUpdated)
}
