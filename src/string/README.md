# Acrool JS Utils / String

<p>
    Processing of strings, such as case conversion to camel case, enhanced string splitting, and so on.
</p>


## Features

**toCapitalize**

Each word begins with a capital letter

```ts
import {toCapitalize} from '@acrool/js-utils/String';

toCapitalize('helloWorld');
// HelloWorld
```

**upperLineToLowerCase**

capital base to small hump

```ts
import {upperLineToLowerCase} from '@acrool/js-utils/String';

upperLineToLowerCase('Hello_World');
// helloWorld
```

**-dashToLowerCase**

turn small hump

```ts
import {dashToLowerCase} from '@acrool/js-utils/String';

dashToLowerCase('Hello-World');
// helloWorld
```

**lowerLocaleToISOCode**

Language code format conversion

```ts
import {lowerLocaleToISOCode} from '@acrool/js-utils/String';

lowerLocaleToISOCode('en-us');
// en-US
```

**lowerCaseToUpLineCase**

Small hump to capital base

```ts
import {lowerCaseToUpLineCase} from '@acrool/js-utils/String';

lowerCaseToUpLineCase('helloWorld');
// HELLO_WORLD
```

**stringSplit**

String splitting

```ts
import {stringSplit} from '@acrool/js-utils/String';

stringSplit('a-b-c', '-');
// ['a', 'b', 'c']
```

**jsonDecode**

Json Decode

> Additional checks for null and undefined are added to avoid errors during parsing

```ts
import {jsonDecode} from '@acrool/js-utils/String';

jsonDecode('{"name":"jack"}');
// { name: 'jack' }
```

**removeStartEnd**

Remove the head and tail

> This is useful when parsing crawler data

```ts
import {removeStartEnd} from '@acrool/js-utils/String';

removeStartEnd('---text---', '---', '---');
// text
```

**removeHtmlTag**

Remove HTML tag

> This is useful when parsing crawler data

```ts
import {removeHtmlTag} from '@acrool/js-utils/String';

removeHtmlTag('<div>Hello <span>World</span></div>', ['span']);
// Hello <span>World</span>
```

**filterNumber**

Convert a purely numeric string into a number

```ts
import {filterNumber} from '@acrool/js-utils/String';

filterNumber('asd1234', '0');
filterNumber('1234', '0');
// 0
// 1234
```

**decodeStrAndNumber**

Parse and separate strings and numbers

```ts
import {decodeStrAndNumber} from '@acrool/js-utils/String';

decodeStrAndNumber('b-12.31-22.11 a45.22-35.21');
// ['b a', -12.31, -22.11, 45.22, -35.21]
```

**decodeStrAndNumberGroup**

Parse and separate strings starting with letters

```ts
import {decodeStrAndNumberGroup} from '@acrool/js-utils/String';

decodeStrAndNumberGroup('b-12.31-22.11 a45.22-35.21');
// ['b-12.31-22.11', 'a45.22-35.21']
```
