"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynaLocalStorageData = void 0;
var DynaLocalStorageData = /** @class */ (function () {
    function DynaLocalStorageData(localStorageKey, defaultData) {
        this.localStorageKey = localStorageKey;
        this.data = defaultData;
        this.load();
        if (!this.data)
            this.data = JSON.parse(JSON.stringify(defaultData));
    }
    DynaLocalStorageData.prototype.load = function () {
        var storedMemory = localStorage.getItem(this.localStorageKey);
        if (storedMemory === null)
            return;
        try {
            this.data = JSON.parse(storedMemory);
        }
        catch (error) {
            // swallow the error, the default values will be applied
        }
    };
    DynaLocalStorageData.prototype.save = function () {
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.data));
    };
    DynaLocalStorageData.prototype.reload = function () {
        this.load();
        return !localStorage.getItem(this.localStorageKey);
    };
    return DynaLocalStorageData;
}());
exports.DynaLocalStorageData = DynaLocalStorageData;
//# sourceMappingURL=DynaLocalSrorageData.js.map