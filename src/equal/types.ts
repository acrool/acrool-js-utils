export type Empty = null | undefined | false | '' | 0;

export type TObjsComposeByKey<P = any> = <K extends keyof P>(keyColumn: K) => (prev: P[] | undefined, next: P[] | undefined) => boolean;
export type TObjsComposeById = <P>(prev: Record<'id', P>[] | undefined, next: Record<'id', P>[] | undefined) => boolean;
export type TObjsComposeByCode = <P>(prev: Record<'code', P>[] | undefined, next: Record<'code', P>[] | undefined) => boolean;

