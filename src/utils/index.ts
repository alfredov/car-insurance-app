import { Product } from '../models';

const productPrinter = function (product: Product) {
  console.log(`${product.name}, ${product.sellIn}, ${product.price}`)
}

export const printProductDetails = (day: number, products: Product[]): void => {
  console.log(`Day ${day}`)
  console.log('name, sellIn, price')
  products.forEach(productPrinter)
  console.log('')
}
