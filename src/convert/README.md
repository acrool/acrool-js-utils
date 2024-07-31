# Bear JS Utils / Convert

<p>
    Type conversion, color code format conversion, file to base64, base64 to blob.
</p>



## Features

**rgbToHex**

RGB轉HEX(16進位)色碼

```ts
import {rgbToHex} from '@acrool/js-utils/convert'

rgbToHex('rgb(0,0,0)')
// #000000
```

**hexToRGB**

HEX(16進位)色碼轉 RGB，若提供透明度參數轉 RGBA

```ts
import {hexToRGB} from '@acrool/js-utils/convert'

hexToRGB('#ffffff')
// rgb(255,255,255)
hexToRGB('#000000', .7)
// rgba(0,0,0,.7)
```

**emptyToNull**

空值轉Null

```ts
import {emptyToNull} from '@acrool/js-utils/convert'

emptyToNull('')
// null
emptyToNull(undefined)
// null
```

**anyToNumber**

將value轉數字

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

轉布林

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

File 轉 Base64Str

```ts
import {fileToBase64} from '@acrool/js-utils/convert'

fileToBase64(file)
// data:image/jpeg;base64,kZJRgABAQAAkACQAAD...
```

**base64ToBlob**

Base64 轉 Blob

```ts
import {base64ToBlob} from '@acrool/js-utils/convert'

base64ToBlob('JVBERi0xLjYNJeL...', 'data:application/acrobat;base64')
// Blob {size: 11, type: 'data:application/acrobat;base64'}
```

**base64ToBlobWithContentType**

Base64 轉 Blob (包含 contentType)

```ts
import {base64ToBlobWithContentType} from '@acrool/js-utils/convert'

base64ToBlobWithContentType('data:application/acrobat;base64, JVBERi0xLjYNJeL...')
// Blob {size: 11, type: 'application/acrobat'}
```