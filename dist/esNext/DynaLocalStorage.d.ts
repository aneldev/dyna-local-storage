export declare class DynaLocalStorage {
    private namespace;
    constructor(namespace?: string);
    private _getFullStorageKey;
    setItem<TData = string>(key: string, value: TData): void;
    getItem<TData = string>(key: string, defaultValue: TData): TData;
    setDate(key: string, date: Date): void;
    getDate(key: string, defaultValue: Date): Date;
}
