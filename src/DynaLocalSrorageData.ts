export class DynaLocalStorageData<TData> {
  public data: TData;

  constructor(
    private readonly localStorageKey: string,
    defaultData: TData,
  ) {
    this.data = defaultData;
    this.load();
    if (!this.data) this.data = JSON.parse(JSON.stringify(defaultData));
  }

  private load(): void {
    const storedMemory: string | null = localStorage.getItem(this.localStorageKey);
    if (storedMemory === null) return;
    try {
      this.data = JSON.parse(storedMemory) as TData;
    } catch (error) {
      // swallow the error, the default values will be applied
    }
  }

  public save(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.data));
  }

  public reload(): boolean {
    this.load();
    return !localStorage.getItem(this.localStorageKey);
  }
}
