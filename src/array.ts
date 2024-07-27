(function (_def, _this) {
    const $len = "$len";
    const $map = "$map";
    const $random = "$random";
    const $$mt = "$$mt";
    const _ = "_";
    const _$ = "_$";
    const $ = "$";
    const $i = "$i";
    const $str = "$str";
    const $req = "$req";
    const $_ = "$_";
    const $$ = "$$";

    _def(_this, $len, {
        get: function () {
            return this.length;
        }
    });

    _def(_this, $map, {
        get: function () {
            const map = new Map();

            this.forEach((e: any, index: number) => map.set(e, index));

            return map;
        }
    });

    _def(_this, $random, {
        get: function () {
            return this.sort(() => Math.random() - 0.5);
        }
    });

    _def(_this, $$mt, {
        get: function () {
            return this.length < 1;
        }
    });

    _def(_this, _, {
        value: function (value?: any | any[]) {
            let ary = this;

            if (Array.isArray(value)) {
                ary = ary.concat(value);
            }
            else if (value != null) {
                ary.push(value);
            };

            return ary;
        }
    });

    _def(_this, _$, {
        value: function (value?: (e: any, i: number) => any) {
            if (value == null) {
                return this;
            };

            let ary: any[] = [];

            this.forEach((e: any, i: number) => {
                const newValue = value(e, i);

                if (newValue == null) {
                    return;
                };

                ary.push(newValue);
            });

            return ary;
        }
    });

    _def(_this, $, {
        value: function (index?: number) {
            const length = this.length;

            if (typeof index !== "number" || Math.abs(index) > length) {
                return null;
            };

            return this[(index < 0 ? length : 0) + index];

        }
    });

    _def(_this, $i, {
        value: function (value?: any) {
            const index = this.indexOf(value);

            if (index == -1) {
                return null;
            };

            return index;
        }
    });

    _def(_this, $str, {
        value: function (char?: string) {
            if (typeof char !== "string" && typeof char !== "number") {
                return this.join("");
            };

            return this.join(String(char).toString());
        }
    });

    // string 延伸
    _def(_this, $req, {
        value: function (body: { [key: string]: string } = {}) {
            return `/${_this.$str("/")}`.replace(/[\/]+/g, "/").$req(body);
        }
    });

    _def(_this, $_, {
        value: function (index?: number) {
            const length = this.length;
            let ary = this;

            if (typeof index !== "number" || Math.abs(index) > length) {
                return ary;
            }
            else if (index === -1) {
                ary.pop();
                return ary;
            }
            else if (index === 0) {
                ary.shift();
                return ary;
            }
            else {
                ary = ary.splice((index < 0 ? length : 0) + index, 1);
                return ary;
            };
        }
    });

    _def(_this, $$, {
        value: function (value?: any) {
            return this.indexOf(value) !== -1;
        }
    });
}(Object.defineProperty, Array.prototype));