# Acrool JS Utils / Date

<p>
    Handling date ranges, simplifying date display, converting total seconds into hours, minutes, and seconds, etc.
</p>



## Features

**simpleDate**

Simplified display of dates (If the date is in the current year, only the month and day are displayed.)

```ts
import {simpleDate} from '@acrool/js-utils/date'

simpleDate('2023-03-20 12:30:45')
// 2023/03/20
const currentYear = dayjs().year();
simpleDate(`${currentYear}-03-20 12:30:45`)
// 03/20
```

**simpleDateTime**

Format date and time (If the date is in the current year, only the month and day are displayed.)

```ts
import {simpleDateTime} from '@acrool/js-utils/date'

simpleDateTime('2021-03-02 12:30:00')
// 2021/03/02 12:30
const currentYear = dayjs().year();
simpleDateTime(`${currentYear}-03-02 12:30:00`)
// 03/02 12:30
```

**rangeSimpleDate**

Gets a simplified representation of the date range (If the date is in the current year, only the month and day are displayed.)

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

Total seconds converted time object

```ts
import {formatTotalSeconds} from '@acrool/js-utils/date'

formatTotalSeconds(104483)
// {days: 0, hours: 29, minutes: 1, seconds: 23}
formatTotalSeconds(104483, true)
// {days: 1, hours: 5, minutes: 1, seconds: 23}
```

**formatSecondToString**

Convert total seconds to timestamp string

```ts
import {formatSecondToString} from '@acrool/js-utils/date'

formatSecondToString(121)
// 00:02:01
formatSecondToString(121, true)
// 02:01
formatSecondToString(104483)
// 29:01:23
```


**millisecondToSeconds**

Convert millisecond to seconds

```ts
import {millisecondToSeconds} from '@acrool/js-utils/date'

millisecondToSeconds(3500)
// 3.5
millisecondToSeconds(35000, true)
// 3
```


**minuteToMillisecond**

Convert minute to millisecond

```ts
import {minuteToMillisecond} from '@acrool/js-utils/date'

minuteToMillisecond(1)
// 60000
```


**hourToMillisecond**

Convert hour to millisecond

```ts
import {hourToMillisecond} from '@acrool/js-utils/date'

hourToMillisecond(1)
// 3600000
```


**dayToMillisecond**

Convert day to millisecond

```ts
import {dayToMillisecond} from '@acrool/js-utils/date'

dayToMillisecond(1)
// 86400000
```
