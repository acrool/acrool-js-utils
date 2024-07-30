# Bear JS Utils / String

<p>
    Processing of strings, such as case conversion to camel case, enhanced string splitting, and so on.
</p>


## Features

**每個單詞以大寫字母開頭**

```ts
import {toCapitalize} from '@acrool/js-utils/String';

toCapitalize('helloWorld');
// HelloWorld
```

**大寫底線轉小駝峰**

```ts
import {upperLineToLowerCase} from '@acrool/js-utils/String';

upperLineToLowerCase('Hello_World');
// helloWorld
```

**-轉小駝峰**

```ts
import {dashToLowerCase} from '@acrool/js-utils/String';

dashToLowerCase('Hello-World');
// helloWorld
```

**語言代碼格式轉換**

```ts
import {lowerLocaleToISOCode} from '@acrool/js-utils/String';

lowerLocaleToISOCode('en-us');
// en-US
```

**小駝峰轉大寫底線**

```ts
import {lowerCaseToUpLineCase} from '@acrool/js-utils/String';

lowerCaseToUpLineCase('helloWorld');
// HELLO_WORLD
```

**字串分割**

```ts
import {stringSplit} from '@acrool/js-utils/String';

stringSplit('a-b-c', '-');
// ['a', 'b', 'c']
```

**Json Decode**

```ts
import {jsonDecode} from '@acrool/js-utils/String';

jsonDecode('{"name":"jack"}');
// { name: 'jack' }
```

**去頭去尾**

```ts
import {removeStartEnd} from '@acrool/js-utils/String';

removeStartEnd('---text---', '---', '---');
// text
```

**去除 Html tag**

```ts
import {removeHtmlTag} from '@acrool/js-utils/String';

removeHtmlTag('<div>Hello <span>World</span></div>', ['span']);
// Hello <span>World</span>
```

**將純數字的字串轉成數字**

```ts
import {filterNumber} from '@acrool/js-utils/String';

filterNumber('asd1234', '0');
filterNumber('1234', '0');
// 0
// 1234
```

**解析分離字串和數字**

```ts
import {decodeStrAndNumber} from '@acrool/js-utils/String';

decodeStrAndNumber('b-12.31-22.11 a45.22-35.21');
// ['b a', -12.31, -22.11, 45.22, -35.21]
```

**解析分離以字母為首的字串**

```ts
import {decodeStrAndNumberGroup} from '@acrool/js-utils/String';

decodeStrAndNumberGroup('b-12.31-22.11 a45.22-35.21');
// ['b-12.31-22.11', 'a45.22-35.21']
```
