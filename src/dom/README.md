# Acrool JS Utils / Dom

<p>
    Handling functions related to the DOM, such as manipulating Class, inserting iFrame, inserting Script, copying to clipboard, downloading blob.
</p>



## Features

**hasClass**

Determine the css class in elements

```html
<div id="testEl" class="promotion_wrapper">test</div> 
```

```tsx
import {hasClass} from '@acrool/js-utils/dom';

var dom = document.getElementById('testEl');
console.log(hasClass(dom, 'promotion_wrapper'));
// true
```

**addClass**

Add css class in elements

```html
<div id="testEl">MyName</div>
```

```tsx
import {addClass} from '@acrool/js-utils/dom';

var dom = document.getElementById('testEl');
addClass(dom, 'promotion_wrapper');
```

output
```html
<div id="testEl" class="promotion_wrapper">MyName</div>
```

**removeClass**

Delete css class in elements

```html
<div id="testEl" class="promotion_wrapper hidden">MyName</div>
```
```tsx
import {removeClass} from '@acrool/js-utils/dom';

var dom = document.getElementsByClassName('testEl');
removeClass(dom, 'hidden');
```
output
```html
<div id="testEl" class="promotion_wrapper">MyName</div>
````

**insertIFrame**

Insert iframe in <body>x</body>

```tsx
import {insertIFrame} from '@acrool/js-utils/dom';

insertIFrame('promotion', 'https://www.google.com/');
```

output

```html
<html>
    <body>
        <iframe id="promotion" src="https://www.google.com/" scrolling="no" width="0" height="0"/>
    </body>
</html>
```

**insertScriptContent**

Insert script content in <head>x</head>

```tsx
import {insertScriptContent} from '@acrool/js-utils/dom';

insertScriptContent('info', 'console.log("version: v5.0.0")');
```
output

```html
<html>
    <head>
        <script id="info">
            console.log("version: v5.0.0")
        </script>
    </head>
</html>
```

**insertScriptSrc**

Insert script in <body>x</body>

```tsx
import {insertScriptSrc} from '@acrool/js-utils/dom';

insertScriptSrc('content', 'https://www.google.com/');
```

output
```html
<html>
    <body>
        <script type="module" src="/src/main.tsx?t=1722597359935"></script> {/* <~ add this */}
    </body>
</html>
```

**copyToClipboard**

Copy string to clipboard

```ts
import {copyToClipboard} from '@acrool/js-utils/dom';

copyToClipboard('abcd');

// Ctrl + V
// > abcd
```

**downloadBlob**

Download blob

```tsx
import {downloadBlob} from '@acrool/js-utils/dom';
import {base64ToBlob} from '@acrool/js-utils/convert';

const blod = base64ToBlob('data:image/jpeg;base64,kZJRgABAQAAkACQAAD...');
downloadBlob(blob);
```

**downloadUrl**

Download url

```ts
import {downloadUrl} from '@acrool/js-utils/dom';

downloadUrl('data:image/jpeg;base64,kZJRgABAQAAkACQAAD...', 'name');
```

**getVisiblePosition**

Get a suitable display position
ex: Get the position of the drop-down menu and determine which side of the upper and lower positions is larger

```ts
import {getVisiblePosition} from '@acrool/js-utils/dom';

const select = document.getElementsById('categorySelect');

getVisiblePosition(select);

// bottom or top
```

**activeElementBlur**

Make the element you are looking at lose focus

```ts
import {activeElementBlur} from '@acrool/js-utils/dom';

activeElementBlur();
```
