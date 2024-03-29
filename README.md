# Bear JS Utils

<p align="center">
    This is a commonly used JS toolbox, designed to facilitate rapid daily development.
</p>

<div align="center">

[![NPM](https://img.shields.io/npm/v/bear-jsutils.svg?style=for-the-badge)](https://www.npmjs.com/package/bear-jsutils)
[![npm downloads](https://img.shields.io/npm/dm/bear-jsutils.svg?style=for-the-badge)](https://www.npmjs.com/package/bear-jsutils)
[![npm](https://img.shields.io/npm/dt/bear-jsutils.svg?style=for-the-badge)](https://www.npmjs.com/package/bear-jsutils)
[![npm](https://img.shields.io/npm/l/bear-jsutils?style=for-the-badge)](https://github.com/imagine10255/bear-jsutils/blob/main/LICENSE)

</div>


## Features

type use `strictNullChecks` and `strictNullChecks`

- **[Array](/src/array)** - Methods related to handling arrays, such as groupBy, unique, deleting arrays, and immutable methods for adding to arrays.
- **[Browser](/src/browser)** - Queries related to browser functionalities, such as console.log, scroll height, window clientHeight.
- **[Convert](/src/convert)** - Type conversion, color code format conversion, file to base64, base64 to blob.
- **[Date](/src/date)** - Handling date ranges, simplifying date display, converting total seconds into hours, minutes, and seconds, etc.
- **[Dom](/src/dom)** - Handling functions related to the DOM, such as manipulating Class, inserting iFrame, inserting Script, copying to clipboard, downloading blob.
- **[Equal](/src/equal)** - Determining if it's empty (including 0, empty array, blank string, null, empty object), whether it's JSON, and Compose matching.
- **[Number](/src/number)** - Handling currency formatting, decimal point retention, and obtaining the difference between two ranges.
- **[Object](/src/object)** - Handling enhanced type support for Object.keys, retaining true properties in an Object, inverting objects, and so on.
- **[String](/src/string)** - Processing of strings, such as case conversion to camel case, enhanced string splitting, and so on.
- **[Uri](/src/uri)** - Handling URL-related tasks, such as encoding & decoding QueryString, obtaining the main domain, subdomain, and so on.

## Installation

date peerDependencies [dayjs](https://day.js.org/) library

```bash
yarn add dayjs bear-jsutils
```

## Examples

These are examples of imports for various types. Refer to the documentation inside each library for other methods.

```tsx
import {groupBy} from 'bear-jsutils/array';
import {getScrollHeight} from 'bear-jsutils/browser';
import {emptyToNull} from 'bear-jsutils/convert';
import {simpleDate} from 'bear-jsutils/date';
import {copyToClipboard} from 'bear-jsutils/dom';
import {isEmpty, isNotEmpty} from 'bear-jsutils/equal';
import {formatCurrency} from 'bear-jsutils/number';
import {objectKeys} from 'bear-jsutils/object';
import {removeHtmlTag} from 'bear-jsutils/string';
import {decodeQueryString} from 'bear-jsutils/uri';
import {delay} from 'bear-jsutils/prmoise';
```

## Add module
./build-post-processors.js

## License

MIT © [imagine10255](https://github.com/imagine10255)

