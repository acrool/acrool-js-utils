# Acrool JS Utils / Date

<p>
    Handling date ranges, simplifying date display, converting total seconds into hours, minutes, and seconds, etc.
</p>



## Features

**simpleDate**

簡化顯示日期 ( 如果日期在當前年份，則僅顯示月和日。)

```ts
import {simpleDate} from '@acrool/js-utils/date'

simpleDate('2023-03-20 12:30:45')
// 2023/03/20
const currentYear = dayjs().year();
simpleDate(`${currentYear}-03-20 12:30:45`)
// 03/20
```

**simpleDateTime**

格式化日期和時間 ( 如果日期在當前年份，則僅顯示月和日。)

```ts
import {simpleDateTime} from '@acrool/js-utils/date'

simpleDateTime('2021-03-02 12:30:00')
// 2021/03/02 12:30
const currentYear = dayjs().year();
simpleDateTime(`${currentYear}-03-02 12:30:00`)
// 03/02 12:30
```

**rangeSimpleDate**

獲得日期範圍的簡化表示 ( 如果日期在當前年份，則僅顯示月和日。)

```ts
import {rangeSimpleDate} from '@acrool/js-utils/date'

rangeSimpleDate('2023-03-20' ,'2024-05-11')
// 2023/03/20 - 2024/05/11
rangeSimpleDate('2023-03-20' ,'2023-05-11')
// 2023/03/20 - 05/11
const currentYear = dayjs().year();
rangeSimpleDate(`${currentYear}-03-20'` ,`'${currentYear}-05-11`)
// 03/20 - 05/11
```

**formatTotalSeconds**

總秒數轉換時間物件

```ts
import {formatTotalSeconds} from '@acrool/js-utils/date'

formatTotalSeconds(104483)
// {days: 0, hours: 29, minutes: 1, seconds: 23}
formatTotalSeconds(104483, true)
// {days: 1, hours: 5, minutes: 1, seconds: 23}
```

**formatSecondToString**

總秒數轉換時間戳字串

```ts
import {formatSecondToString} from '@acrool/js-utils/date'

formatSecondToString(121)
// 00:02:01
formatSecondToString(121, true)
// 02:01
formatSecondToString(104483)
// 29:01:23
```