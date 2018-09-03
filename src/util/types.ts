export type Partial<T> = {
    [P in keyof T]?: T[P];
}

export type Nullable<T> = {
    [P in keyof T]: T[P] | null;
}
