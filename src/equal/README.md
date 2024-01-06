# Bear JS Utils / Equal

<p>
    Determining if it's empty (including 0, empty array, blank string, null, empty object), whether it's JSON, and Compose matching.
</p>


## Features

**isEmpty**

```ts
import {isEmpty} from 'bear-jsutils/equal';

isEmpty('');
// true

isEmpty(0);
// true

isEmpty(undefined);
// true

isEmpty(null);
// true

isEmpty([]);
// true

isEmpty({});
// true
```

