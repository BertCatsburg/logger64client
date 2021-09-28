export class Meta {
    static meta = {};

    static putMeta(m: any) {
        Meta.meta = {
            ...Meta.meta,
            meta: m
        }
        return;
    }

    static dropMeta(key: string) {
        Meta.meta = Object.keys(Meta.meta).filter((k)=> {
            return k !== key
        });
    }

    static getMeta() {
        return Meta.meta;
    }

}
