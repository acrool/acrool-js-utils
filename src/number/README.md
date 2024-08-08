# Acrool JS Utils / Number

<p>
    Handling currency formatting, decimal point retention, and obtaining the difference between two ranges.
</p>



## Features

**numToDecimal2**

Keep the second decimal place

```ts
import {numToDecimal2} from '@acrool/js-utils/number'

numToDecimal2(2000)
// 2000.00
```

**formatCurrency**

Thousands formatting

```ts
import {formatCurrency} from '@acrool/js-utils/number'

formatCurrency(2000)
// 2,000
formatCurrency(2000, true)
// 2,000.00
```

**intersectionMin**

Get the minimum range of intersection in an array

```ts
import {intersectionMin} from '@acrool/js-utils/number'

intersectionMin([ [1, 20], [5, 24] ])
// {min: 5, max: 20}
```
