export type TGroupByFn<T> = (item: T) => string | number;
export type TGroupTreeBy<T, D, C> = (item: T) => { groupKey: string | number, groupData: D, child: C };
export type SortByFn<T> = (a: T, b: T) => number;
export type SortOrder = 'ASC' | 'DESC';
