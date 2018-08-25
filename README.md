# About

Simplifies the usage of localStorage.

Read and write objects to `localStorage`.

Is written in TypeScript, you can read and write and types.

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

### setItem<TData>(key: string, data: TData): void

### getItem<TData>(key: string, defaultValue?: TData): TData

### setDate(key: string, value: Date): void

### getDate(key: string, defaultValue?: Date): Date

# DynaLocalStorageData

`DynaLocalStorageData` is much simpler and ready to use. Just give it the `key` and then assign your data to the `data` property and call `save()` to save it. Nothing else is needed.

## Example

```
// Native JS example
const mem = new DynaLocalStorageData("user-details", {name: null});
mem.data.name = "Anny";
mem.save();

// Typescript example
const mem = new DynaLocalStorageData<IUser>("user-details");
mem.data.name = "Anny";
mem.save();
```

## Methods / Properties

### constructor(localStorageKey: string, defaultValue: any)

The `defaultValue` is used when the key doesn't exist in local storage.

### data

After the initialization, the data contains the loaded data from the local storage. If the local storage doesn't have have data with this key, the detault value will be applied by default.

### save(): void

Call save to save the `data` to local storage.

