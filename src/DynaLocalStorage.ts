export class DynaLocalStorage {
	constructor(private namespace: string = "dyna-local-storage") {
	}

	private _getFullStorageKey(key: string): string {
		return `${this.namespace}/${key}`;
	}

	public setItem<TData>(key: string, data: TData): void {
		localStorage.setItem(this._getFullStorageKey(key), JSON.stringify(data));
	}

	public getItem<TData>(key: string, defaultValue?: TData): TData {
		const storedDateValue: string = localStorage.getItem(this._getFullStorageKey(key));
		if (!storedDateValue) return defaultValue;
		return JSON.parse(storedDateValue);
	}

	public setDate(key: string, value: Date): void {
		this.setItem(key, Number(new Date(value)));
	}

	public getDate(key: string, defaultValue?: Date): Date {
		const storedDateValue: number = this.getItem(key, null);
		let date: Date = storedDateValue != null && new Date(storedDateValue) || defaultValue;
		this.setDate(key, date);
		return date;
	}
}


