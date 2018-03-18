# About

Simplifies the usage of localStorage.

Read and write objects to `localStorage`.

Is written in TypeScript, you can read and write and types.

# Example

```
// Native JS example
const myStore = new DynaLocalStorage();
myStore.setItem('user-details', user);
myStore.getItem('user-details'); // returns the user

// Typescript example
const myStore = new DynaLocalStorage();
myStore.setItem<IPerson>('user-details', user);
myStore.getItem<IPerson>('user-details'); // returns the user
```

# v1

Only for web browsers

# Methods

## constructor(namespace: string = "dyna-local-storage")

## setItem<TData>(key: string, data: TData): void

## getItem<TData>(key: string, defaultValue?: TData): TData

## setDate(key: string, value: Date): void

## getDate(key: string, defaultValue?: Date): Date
