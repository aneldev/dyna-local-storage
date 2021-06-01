var DynaLocalStorage = /** @class */ (function () {
    function DynaLocalStorage(namespace) {
        if (namespace === void 0) { namespace = "dyna-local-storage"; }
        this.namespace = namespace;
    }
    DynaLocalStorage.prototype._getFullStorageKey = function (key) {
        return this.namespace + "/" + key;
    };
    DynaLocalStorage.prototype.setItem = function (key, value) {
        localStorage.setItem(this._getFullStorageKey(key), JSON.stringify(value));
    };
    DynaLocalStorage.prototype.getItem = function (key, defaultValue) {
        var storedDateValue = localStorage.getItem(this._getFullStorageKey(key));
        if (storedDateValue === null)
            return defaultValue;
        return JSON.parse(storedDateValue);
    };
    DynaLocalStorage.prototype.setDate = function (key, date) {
        this.setItem(key, Number(new Date(date)));
    };
    DynaLocalStorage.prototype.getDate = function (key, defaultValue) {
        var savedValue = this.getItem(key, -9845245);
        if (savedValue === -9845245) {
            this.setDate(key, defaultValue);
            return defaultValue;
        }
        return new Date(savedValue);
    };
    return DynaLocalStorage;
}());
export { DynaLocalStorage };
//# sourceMappingURL=DynaLocalStorage.js.map