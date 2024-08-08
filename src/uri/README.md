# Acrool JS Utils / Uri

<p>
    Handling URL-related tasks, such as encoding & decoding QueryString, obtaining the main domain, subdomain, and so on.
</p>



## Features

**encodeQueryString**

Obj to QueryString

```ts
import {encodeQueryString} from '@acrool/js-utils/uri'

encodeQueryString({keyword: '블랙프라이데이 (BlackFriday)', sex: 'F'})
// keyword=%EB%B8%94%EB%9E%99%ED%94%84%EB%9D%BC%EC%9D%B4%EB%8D%B0%EC%9D%B4%20(BlackFriday)&sex=F
```

**decodeQueryString**

Parse Search QueryString into object

```ts
import {decodeQueryString} from '@acrool/js-utils/uri'

decodeQueryString('?keyword=jack&sex=F')
// {keyword: 'jack', sex: 'F'}
```

**getProtocolDomain**

Get domain

```ts
import {getProtocolDomain} from '@acrool/js-utils/uri'

getProtocolDomain('http://www.google.com:8080/test?keyword=jack')
// http://www.google.com
```

**getMainDomain**

Obtain the main domain (secondary domain name)

```ts
import {getMainDomain} from '@acrool/js-utils/uri'

getMainDomain('http://www.google.com')
// google.com
```

**getSubDomain**

Get subdomain (last paragraph)

```ts
import {getSubDomain} from '@acrool/js-utils/uri'

getSubDomain('http://www.google.com')
// www
```

**urlJoin**

Combine strings into a complete URL

```ts
import {urlJoin} from '@acrool/js-utils/uri'

urlJoin('http://www.google.com/', 'foo/bar', '?test=123')
// http://www.google.com/foo/bar?test=123
```
