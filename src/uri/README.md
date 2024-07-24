# Acrool JS Utils / Uri

<p>
    Handling URL-related tasks, such as encoding & decoding QueryString, obtaining the main domain, subdomain, and so on.
</p>



## Features

**encodeQueryString**

Obj 轉 QueryString

```ts
import {encodeQueryString} from '@acrool/js-utils/uri'

encodeQueryString({keyword: '블랙프라이데이 (BlackFriday)', sex: 'F'})
// keyword=%EB%B8%94%EB%9E%99%ED%94%84%EB%9D%BC%EC%9D%B4%EB%8D%B0%EC%9D%B4%20(BlackFriday)&sex=F
```
