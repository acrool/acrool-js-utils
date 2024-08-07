# Acrool JS Utils / Object

<p>
    Handling enhanced type support for Object.keys, retaining true properties in an Object, inverting objects, and so on.
</p>



## Features

**filterIsTrue**

過濾物件 Value 等於 true 的收集為陣列

```ts
import {filterIsTrue} from '@acrool/js-utils/object'

filterIsTrue({_1: true, _2: false, _3: true})
// [1, 3]
```

**autoMapper**

物件對應轉換

```ts
import {autoMapper} from '@acrool/js-utils/object'

autoMapper({name: 'jack', age: 30}, {name: 'id', data: 'body'})
// {id: 'jack', age: 30}
```

**reverseObj**

反轉物件    

```ts
import {reverseObj} from '@acrool/js-utils/object'

reverseObj({name: 'jack'})
// {jack: 'name'}
```

**objectKeys**

將物件的 key 轉成陣列

```ts
import {objectKeys} from '@acrool/js-utils/object'

objectKeys({name: 'jack', year: 12})
// ['name', 'year']
```

**objToFormData**

將物件資料轉成 FormData (最多兩層)

```ts
import {objToFormData} from '@acrool/js-utils/object'

objToFormData({profile: {name: 'jack'}})
// FormData {}
```