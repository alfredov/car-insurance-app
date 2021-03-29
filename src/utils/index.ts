import colors from 'colors'

import { Product } from '../models';

const productPrinter = function (product: Product) {
  console.log(`${product.name},`, `${product.sellIn}, ${product.price}`.yellow)
}

export const printProductDetails = (day: number, products: Product[]) => {
  console.log(colors.blue(`-------- day ${day} --------`))
  console.log(colors.green('name, sellIn, price'))
  products.forEach(productPrinter)
  console.log('')
}
