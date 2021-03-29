# car-insurance-app
The aproach that I brought was applying ***price rules*** to every product.
So, it give us some benefit to customize new/old products adding new rules to it.

This is an example of adding a ***price rule*** for then get update by day:
```js
const product = new Product('X Coverage', 10, 20);

product.applyPriceRule = (isExpired, price, sellIn) => {
  if (isExpired) return price - 2;
  return price - 1;
}

product.updatePrice();
```
The `applyPriceRule` is executed when product update its price.

So, in summary, for every Product price rule, you can add any constraint that you need to.

Due the code challenge, I implemented several price rules template as well. To products like:
-  Full Coverage
- Special Full Coverage
- Super Sale

  you can check it [here](./src/models/Product/rulesTemplate/index.ts)

## How to isntall/run
__1)__ Install dependencies
```bash
yarn
```
or
```
npm install
```

__2)__ To generate the Price Log/history
```bash
yarn after-30-days
```

__3)__ Tests.
```bash
yarn test
```