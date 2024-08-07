# Acrool JS Utils / Dom

<p>
    Handling functions related to the DOM, such as manipulating Class, inserting iFrame, inserting Script, copying to clipboard, downloading blob.
</p>



## Features

**hasClass**

判斷 elements 中的 css class

```tsx
<div className="App">
    <div id="test" className='test'>test</div> 
</div>
```
```tsx
import {hasClass} from '@acrool/js-utils/dom';

var dom = document.getElementById('test');
console.log(hasClass(dom, 'test'));
// true
```

**addClass**

在 elements 中新增 css class

```tsx
<div className="App">
    <div id="test">test</div>
</div>
```

```tsx
import {addClass} from '@acrool/js-utils/dom';

var dom = document.getElementById('test');
addClass(dom, 'test');
```
output
```tsx
<div className="App">
    <div id="test" className="test">test</div>
</div>
```

**removeClass**

刪除 elements 中的 css class
```tsx
<div className="App">
    <div className="test">test</div>
</div>
```
```tsx
import {removeClass} from '@acrool/js-utils/dom';

var dom = document.getElementsByClassName('test');
removeClass(dom, 'test');
```
output
```tsx
<div className="App">
    <div>test</div>
</div>
````

**insertIFrame**

插入IFrame

```tsx
import {insertIFrame} from '@acrool/js-utils/dom';

insertIFrame('iframe', 'https://www.google.com/');
```

output
```tsx
<html>
    <body>
        <iframe id="iframe" src="https://www.google.com/" scrolling="no" width="0" height="0"></iframe> {/* <~ add this */}
    </body>
</html>
```

**insertScriptContent**

插入Script

```tsx
import {insertScriptContent} from '@acrool/js-utils/dom';

insertScriptContent('content', 'test content');
```
output
```tsx
<html>
    <head>
        <script id="content">test content</script> {/* <~ add this */}
    </head>
</html>
```

**insertScriptSrc**

插入Script

```tsx
import {insertScriptSrc} from '@acrool/js-utils/dom';

insertScriptSrc('content', 'https://www.google.com/');
```
output
```tsx
<html>
    <body>
        <script type="module" src="/src/main.tsx?t=1722597359935"></script> {/* <~ add this */}
    </body>
</html>
```

**copyToClipboard**

複製字串到剪貼簿

```ts
import {copyToClipboard} from '@acrool/js-utils/dom';

copyToClipboard('abcd');
//'abcd'為複製的內容
```

**downloadBlob**

下載 Blob

```tsx
import {downloadBlob} from '@acrool/js-utils/dom';
import {base64ToBlob} from '@acrool/js-utils/convert';

const blod = base64ToBlob('data:image/jpeg;base64,kZJRgABAQAAkACQAAD...');
downloadBlob(blob);
```

**downloadUrl**

下載 Url

```ts
import {downloadUrl} from '@acrool/js-utils/dom';

downloadUrl('data:image/jpeg;base64,kZJRgABAQAAkACQAAD...', 'name');
```

**getVisiblePosition**

取得適合的顯示位置  
ex: 取得下拉選單位置，並判斷上下位置哪邊較大

```ts
import {getVisiblePosition} from '@acrool/js-utils/dom';

const select = document.getElementsByClassName("select");
getVisiblePosition(select);
// bottom or top
```

**activeElementBlur**

讓注視中的元素 失去焦點

```ts
import {activeElementBlur} from '@acrool/js-utils/dom';

activeElementBlur();
```