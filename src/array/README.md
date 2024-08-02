# Bear JS Utils / Array

<p>
    Methods related to handling arrays, such as groupBy, unique, deleting arrays, and immutable methods for adding to arrays.
</p>



## Features

**pull**

插入資料到陣列的第一筆

```ts
import {pull} from '@acrool/js-utils/array'

pull(['A', 'B'], 'C')
// ['C', 'A', 'B']
```

**push**

插入資料到陣列的最後一筆

```ts
import {push} from '@acrool/js-utils/array'

push(['A', 'B'], 'C')
// ['A', 'B', 'C']
```

**insert**

插入資料到陣列中

```ts
import {insert} from '@acrool/js-utils/array'

insert(['A', 'B', 'C'], 1, 'D')
// ['A', 'D', 'B', 'C']
```

**move**

移動陣列順序

```ts
import {move} from '@acrool/js-utils/array'

move(['A', 'B', 'C'], 1, 2)
// ['A', 'C', 'B']
```

**removeFind**

刪除陣列中的一筆資料

```ts
import {removeFind} from '@acrool/js-utils/array'

removeFind([
    {id: 1, name: 'jack'}, 
    {id: 2, name: 'imagine'},
    {id: 3, name: 'gary'},
], row => row.id === 2)
// [
// {id: 1, name: 'jack'}, 
// {id: 3, name: 'gary'}
// ]
```

**updateFind**

更改陣列中的一筆資料

```ts
import {updateFind} from '@acrool/js-utils/array'

updateFind([
    {id: 1, name: 'jack'},
    {id: 2, name: 'imagine'},
    {id: 3, name: 'gary'}, 
], { 
    finder: row => row.id === 1,
    updater: row => row.name = 'jack wu'
})
// [ 
// {id: 1, name: 'jack wu'}, 
// {id: 2, name: 'imagine'}, 
// {id: 3, name: 'gary'} 
// ]
```

**removeByIndex**

刪除陣列中的一筆資料

```ts
import {removeByIndex} from '@acrool/js-utils/array'

removeByIndex(['A', 'B', 'C'], 1)
// ['A', 'C']
```

**updateByIndex**

更改陣列中的一筆資料

```ts
import {updateByIndex} from '@acrool/js-utils/array'

updateByIndex([
    {id: 1, name: 'jack'},
    {id: 2, name: 'imagine'},
    {id: 3, name: 'gary'},
], 0, row => row.name = 'jack wu')
// [ 
// {id: 1, name: 'jack wu'}, 
// {id: 2, name: 'imagine'}, 
// {id: 3, name: 'gary'} 
// ]
```

**unique**

取得陣列中的唯一值

```ts
import {unique} from '@acrool/js-utils/array'

unique(['a', 'b', 'b', 'c', 'c'])
// ['a', 'b', 'c']
```

**arrayJoin**

陣列轉字串

```ts
import {arrayJoin} from '@acrool/js-utils/array'

arrayJoin(['uploads', 'profile'], '/')
// uploads/profile
```

**splitArray**

分割陣列

```ts
import {splitArray} from '@acrool/js-utils/array'

splitArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)
// [ [1,2], [3,4], [5,6], [7,8], [9] ]
```

**groupBy**

將陣列裡的資料分類

```ts
import {groupBy} from '@acrool/js-utils/array'

groupBy([
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'Alice'},
    {id: 4, name: 'Charlie'},
],(item) => item.name)
// {
//     Alice: [
//     {id: 1, name: 'Alice'},
//     {id: 3, name: 'Alice'},
// ],
//     Bob: [
//     {id: 2, name: 'Bob'},
// ],
//     Charlie: [
//     {id: 4, name: 'Charlie'},
// ],
// }
```

**groupTreeBy**

將陣列裡的資料分類

```ts
import {groupTreeBy} from '@acrool/js-utils/array'

groupTreeBy([
    {id: 1, name: 'Alice', team: {id: 'A', name: 'frontend'}},
    {id: 2, name: 'Bob', team: {id: 'A', name: 'frontend'}},
    {id: 3, name: 'Alice', team: {id: 'B', name: 'backend'}},
    {id: 4, name: 'Charlie', team: {id: 'B', name: 'backend'}},
], (item) => {
    const {team, ...child} = item;
    return {
        groupKey: team.id,
        groupData: {
            id: team.id,
            text: team.name
        },
        child: {
            id: item.id,
            nickName: item.name,
        },
    };
})
// [
//   {
//     id: 'A',
//     text: 'frontend',
//     children: [
//         {id: 1, nickName: 'Alice'},
//         {id: 2, nickName: 'Bob'}
//     ],
//   },
//   {
//     id: 'B',
//     text: 'backend',
//     children: [
//         {id: 3, nickName: 'Alice'},
//         {id: 4, nickName: 'Charlie'}
//     ],
//   }
// ]
```

**sort**

將陣列依順序排列

```ts
import {sort} from '@acrool/js-utils/array'

sort([
      {id: 1, name: 'jack'},
      {id: 3, name: 'gary'},
      {id: 2, name: 'imagine'},
], (a, b) => a.id - b.id)
// [
//   {id: 1, name: 'jack'},
//   {id: 2, name: 'imagine'},
//   {id: 3, name: 'gary'},
// ]
```

**generateSortByProperty**

生成排序方法後比對資料排序

```ts
import {generateSortByProperty} from '@acrool/js-utils/array'

interface ISourceArray {
    id: number,
    name: string
    team: {id: string, name: string}
}

const arrayData: ISourceArray[] = [
    {id: 1, name: 'Alice', team: {id: 'A', name: 'frontend'}},
    {id: 2, name: 'Bob', team: {id: 'A', name: 'frontend'}},
    {id: 3, name: 'Alice', team: {id: 'B', name: 'backend'}},
    {id: 4, name: 'Charlie', team: {id: 'B', name: 'backend'}},
];

const fn = generateSortByProperty<ISourceArray>((item) => item.id, 'ASC');

fn(arrayData[0], arrayData[1]);
// -1
fn(arrayData[2], arrayData[1]);
// 1
```