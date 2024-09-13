# Acrool JS Utils / Object

<p>
    Handling enhanced type support for Object.keys, retaining true properties in an Object, inverting objects, and so on.
</p>



## Features

**filterIsTrue**

Filter objects whose Value is equal to true and collect them into arrays

```ts
import {filterIsTrue} from '@acrool/js-utils/object'

filterIsTrue({_1: true, _2: false, _3: true})
// [1, 3]
```

**autoMapper**

Object mapping conversion

```ts
import {autoMapper} from '@acrool/js-utils/object'

autoMapper({name: 'jack', age: 30}, {name: 'id', data: 'body'})
// {id: 'jack', age: 30}
```

**reverseObj**

Invert object

```ts
import {reverseObj} from '@acrool/js-utils/object'

reverseObj({name: 'jack'})
// {jack: 'name'}
```

**objectKeys**

Convert the object's key to an array

```ts
import {objectKeys} from '@acrool/js-utils/object'

objectKeys({name: 'jack', year: 12})
// ['name', 'year']
```
