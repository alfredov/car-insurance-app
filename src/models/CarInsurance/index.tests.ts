import CarInsurance from './index'
import Product from './../Product'

describe('models::CarInsurance', () => {
  it('should return empty products when trying update product prices that still don not exist', () => {
    const carInsurance = new CarInsurance()
    expect(carInsurance.updatePrice().length).toEqual(0)
  })

  it('should update product prices', () => {
    const products = [
      new Product('P1', 2, 10),
      new Product('P2', 3, 0),
      new Product('P3', 0, 0),
    ]
    const carInsurance = new CarInsurance(products)

    expect(carInsurance.updatePrice()).toEqual(products)
  })
})
