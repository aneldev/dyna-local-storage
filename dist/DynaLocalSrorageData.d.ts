export declare class DynaLocalStorageData<TData> {
    private readonly localStorageKey;
    data: TData;
    constructor(localStorageKey: string, defaultData?: TData);
    private load();
    save(): void;
}
