# Acrool JS Utils

<a href="https://acrool-js-utils.pages.dev/" title="Acrool JS Utils - This is a commonly used JS toolbox, designed to facilitate rapid daily development.">
    <img src="https://raw.githubusercontent.com/acrool/acrool-js-utils/main/example/public/og.webp" alt="Acrool JS Utils Logo"/>
</a>

<p align="center">
    This is a commonly used JS toolbox, designed to facilitate rapid daily development.
</p>

<div align="center">

[![NPM](https://img.shields.io/npm/v/@acrool/js-utils.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/js-utils)
[![npm](https://img.shields.io/npm/l/@acrool/js-utils?style=for-the-badge)](https://github.com/acrool/acrool-js-utils/blob/main/LICENSE)

[![npm downloads](https://img.shields.io/npm/dm/@acrool/js-utils.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/js-utils)
[![npm](https://img.shields.io/npm/dt/@acrool/js-utils.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/js-utils)

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

date dependencies [dayjs](https://day.js.org/) library

```bash
yarn add @acrool/js-utils
```

## Examples

These are examples of imports for various types. Refer to the documentation inside each library for other methods.

```tsx
import {groupBy} from '@acrool/js-utils/array';
import {getScrollHeight} from '@acrool/js-utils/browser';
import {emptyToNull} from '@acrool/js-utils/convert';
import {simpleDate} from '@acrool/js-utils/date';
import {copyToClipboard} from '@acrool/js-utils/dom';
import {isEmpty, isNotEmpty} from '@acrool/js-utils/equal';
import {formatCurrency} from '@acrool/js-utils/number';
import {objectKeys} from '@acrool/js-utils/object';
import {removeHtmlTag} from '@acrool/js-utils/string';
import {decodeQueryString} from '@acrool/js-utils/uri';
import {delay} from '@acrool/js-utils/prmoise';
```

## Add module
./build-post-processors.js


# Publishing

```bash
$ yarn build && npm publish ./dist --access=public
```

## License

MIT © [Acrool](https://github.com/acrool) & [Imagine](https://github.com/imagine10255)

