export class DynaLocalStorageData<TData> {
	public data: TData;

	constructor(
		private readonly localStorageKey: string,
		defaultData: TData = {} as TData,
	) {
		this.load();
		if (!this.data) this.data = JSON.parse(JSON.stringify(defaultData));
	}

	private load(): void {
		this.data = null;
		let storedMemory: string = localStorage.getItem(this.localStorageKey);
		try {
			this.data = JSON.parse(storedMemory) as TData;
		}
		catch (error) {
			// swallow the error, the default values will be applied
		}
	}

	public save(): void {
		localStorage.setItem(this.localStorageKey, JSON.stringify(this.data));
	}
}
