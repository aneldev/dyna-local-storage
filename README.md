# About

Simplifies the usage of the localStorage.

Read and write objects to `localStorage`.

Written in TypeScript. You can read and write and typed vakues.

Only for web browsers

# DynaLocalStorage

## Example

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

## Methods

### constructor(namespace: string = "dyna-local-storage")

### setItem<TData = string>(key: string, data: TData): void

### getItem<TData = string>(key: string, defaultData: TData): TData

### setDate(key: string, date: Date): void

### getDate(key: string, defaultValue: Date): Date

# DynaLocalStorageData

`DynaLocalStorageData` is much simpler and ready to use. Just give it the `key` and then assign your data to the `data` property and call `save()` to save it. Nothing else is needed.

## Example

```
// Native JS example
const mem = new DynaLocalStorageData("user-details", {name: null});
mem.data.name = "Anny";
mem.save();

// Typescript example
interface IUser {
  name: string;
  age: number;
}
const mem = new DynaLocalStorageData<IUser>(
  'ls1',
  {
    name: '',
    age: 0,
  },
mem.data.name = "Anny";
mem.save();
```

## Methods / Properties

### constructor(localStorageKey: string, defaultData: TData)

The `defaultValue` is used when the key doesn't exist in local storage.

### data

After the initialization, the data contains the loaded data from the local storage. If the local storage doesn't have this key, the default value will be applied by default.

### save(): void

Call save() to save the `data` to local storage.

### reload(): boolean

In case the localstorage key is update by an external tool (i.e. for testing)

# Change log

## 1.1.0

First version

## 2.0.0

### DynaLocalStorage

Default values are required

### DynaLocalStorageData

`reload()` method
