# Acrool JS Utils / Convert

<p>
    Type conversion, color code format conversion, file to base64, base64 to blob.
</p>



## Features

**rgbToHex**

RGB to HEX (hexadecimal) color code

```ts
import {rgbToHex} from '@acrool/js-utils/convert'

rgbToHex('rgb(0,0,0)')
// #000000
```

**hexToRGB**

Convert HEX (hexadecimal) color code to RGB, if transparency parameter is provided, convert to RGBA

```ts
import {hexToRGB} from '@acrool/js-utils/convert'

hexToRGB('#ffffff')
// rgb(255,255,255)
hexToRGB('#000000', .7)
// rgba(0,0,0,.7)
```

**emptyToNull**

Convert empty value to Null

```ts
import {emptyToNull} from '@acrool/js-utils/convert'

emptyToNull('')
// null
emptyToNull(undefined)
// null
```

**anyToNumber**

Convert value to number

```ts
import {anyToNumber} from '@acrool/js-utils/convert'

anyToNumber(1234)
// 1234
anyToNumber('1234')
// 1234
anyToNumber('test')
// 0
```

**anyToBoolean**

transfer brin

```ts
import {anyToBoolean} from '@acrool/js-utils/convert'

anyToBoolean(true)
// true
anyToBoolean('false')
// false
anyToBoolean(1)
// true
anyToBoolean(7)
// undefined
```

**fileToBase64**

File to Base64Str

```ts
import {fileToBase64} from '@acrool/js-utils/convert'

fileToBase64(file)
// data:image/jpeg;base64,kZJRgABAQAAkACQAAD...
```

**base64ToBlob**

Base64 to Blob

```ts
import {base64ToBlob} from '@acrool/js-utils/convert'

base64ToBlob('JVBERi0xLjYNJeL...', 'data:application/acrobat;base64')
// Blob {size: 11, type: 'data:application/acrobat;base64'}
```

**base64ToBlobWithContentType**

Base64 to Blob (including contentType)

```ts
import {base64ToBlobWithContentType} from '@acrool/js-utils/convert'

base64ToBlobWithContentType('data:application/acrobat;base64, JVBERi0xLjYNJeL...')
// Blob {size: 11, type: 'application/acrobat'}
```



**objToFormData**

Convert object data to FormData (up to two levels)

> This is useful when the API interface format is formData

```ts
import {objToFormData} from '@acrool/js-utils/object'

objToFormData({profile: {name: 'jack'}})
// FormData {}
```
