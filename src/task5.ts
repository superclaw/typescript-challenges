export type Diff<T, U> = {
  [K in Exclude<keyof T, keyof U> | Exclude<keyof U, keyof T>]: K extends keyof T
    ? T[K]
    : K extends keyof U
      ? U[K]
      : never;
};
