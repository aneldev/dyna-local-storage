export declare class DynaLocalStorage {
    private namespace;
    constructor(namespace?: string);
    private _getFullStorageKey(key);
    setItem<TData>(key: string, data: TData): void;
    getItem<TData>(key: string, defaultValue?: TData): TData;
    setDate(key: string, value: Date): void;
    getDate(key: string, defaultValue?: Date): Date;
}
