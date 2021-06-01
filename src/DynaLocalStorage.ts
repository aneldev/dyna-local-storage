export class DynaLocalStorage {
  constructor(private namespace: string = "dyna-local-storage") {
  }

  private _getFullStorageKey(key: string): string {
    return `${this.namespace}/${key}`;
  }

  public setItem<TData = string>(key: string, value: TData): void {
    localStorage.setItem(this._getFullStorageKey(key), JSON.stringify(value));
  }

  public getItem<TData = string>(key: string, defaultValue: TData): TData {
    const storedDateValue: string | null = localStorage.getItem(this._getFullStorageKey(key));
    if (storedDateValue === null) return defaultValue;
    return JSON.parse(storedDateValue);
  }

  public setDate(key: string, date: Date): void {
    this.setItem(key, Number(new Date(date)));
  }

  public getDate(key: string, defaultValue: Date): Date {
    const savedValue: number = this.getItem<number>(key, -9845245);
    if (savedValue === -9845245) {
      this.setDate(key, defaultValue);
      return defaultValue;
    }
    return new Date(savedValue);
  }
}


