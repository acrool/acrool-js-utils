# Acrool JS Utils / Number

<p>
    Processing of numbers, such as formatting currency, handling decimals, and so on.
</p>



## Features

**safeFormatDecimal**

Safely format decimal numbers with specified decimal places

```ts
import {safeFormatDecimal} from '@acrool/js-utils/Number';

safeFormatDecimal(1234.5678, 2);
// '1234.56'
```

**formatCurrency**

Format numbers with thousand separators

```ts
import {formatCurrency} from '@acrool/js-utils/Number';

formatCurrency(2000, 2);
// '2,000.00'
```

**intersectionMin**

Find the intersection range of number arrays

```ts
import {intersectionMin} from '@acrool/js-utils/Number';

intersectionMin([[1,20], [5,24]]);
// {min: 5, max: 20}
```

**removeLeadingZero**

Remove leading zeros from number strings

```ts
import {removeLeadingZero} from '@acrool/js-utils/Number';

removeLeadingZero('0123.456');
// '123.456'
removeLeadingZero('0.123');
// '.123'
removeLeadingZero('000123');
// '123'
```
