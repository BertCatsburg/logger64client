"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meta = void 0;
class Meta {
    static putMeta(m) {
        Meta.meta = Object.assign(Object.assign({}, Meta.meta), { meta: m });
        return;
    }
    static dropMeta(key) {
        Meta.meta = Object.keys(Meta.meta).filter((k) => {
            return k !== key;
        });
    }
    static getMeta() {
        return Meta.meta;
    }
}
exports.Meta = Meta;
Meta.meta = {};
//# sourceMappingURL=meta.js.map