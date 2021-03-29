import { PriceRule } from '../'

export const mediumCoverageRule: PriceRule = (isExpired, price) => {
  if (isExpired) return price - 2
  return price - 1
}

export const fullCoverageRule: PriceRule = (isExpired, price) => {
  if (isExpired) return price + 2
  return price + 1
}

export const lowCoverageRule: PriceRule = (isExpired, price) => {
  if (isExpired) return 0
  return price - 1
}

export const specialFullCoverageRule: PriceRule = (isExpired, price, sellIn) => {
  if (isExpired) return 0
  if (sellIn <= 5) return price + 3
  if (sellIn <= 10) return price + 2
  return price + 1
}

export const superSaleRule: PriceRule = (isExpired, price, sellIn) => {
  if (isExpired) return 0
  return price - 2
}
