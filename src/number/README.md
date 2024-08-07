# Acrool JS Utils / Number

<p>
    Handling currency formatting, decimal point retention, and obtaining the difference between two ranges.
</p>



## Features

**numToDecimal2**

保留小數第二位

```ts
import {numToDecimal2} from '@acrool/js-utils/number'

numToDecimal2(2000)
// 2000.00
```

**formatCurrency**

千分位格式化

```ts
import {formatCurrency} from '@acrool/js-utils/number'

formatCurrency(2000)
// 2,000
formatCurrency(2000, true)
// 2,000.00
```

**intersectionMin**

取得數組中的交集最小範圍

```ts
import {intersectionMin} from '@acrool/js-utils/number'

intersectionMin([ [1, 20], [5, 24] ])
// {min: 5, max: 20}
```