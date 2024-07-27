"use strict";
let vw = window.innerWidth;
let vh = window.innerHeight;
let $history = [location.href];
let $$android = (() => /android/i.test(navigator.userAgent))();
let $$ios = (() => /iphone|ipad/i.test(navigator.userAgent))();
let $$mobile = $$android || $$ios;
let $$desktop = !$$mobile;
let $timer;
window.onresize = function () {
    [vw, vh] = [window.innerWidth, window.innerHeight];
};
function _timeout(action, msec) {
    let timer = setTimeout(function () {
        clearTimeout(timer);
        action();
    }, msec);
    $timer.push(timer);
    return timer;
}
;
function _interval(action, msec) {
    let timer = setInterval(function () {
        clearInterval(timer);
        action();
    }, msec);
    $timer.push(timer);
    return timer;
}
;
function timer_() {
    $timer.forEach(e => {
        clearTimeout(e);
        clearInterval(e);
    });
}
;
function __(value) {
    return eval(typeof value === "string" ? value : "");
}
;
function $$(value) {
    return value !== null && value !== void 0;
}
;
function $$null(value) {
    return !$$(value);
}
;
function $$str(value) {
    return typeof value === "string";
}
;
function $$num(value) {
    return typeof value === "number";
}
;
function $$bool(value) {
    return typeof value === "boolean";
}
;
function $$ary(value) {
    return Array.isArray(Array);
}
;
function $$obj(value) {
    return typeof value === "object" && value != null && !$$ary(value);
}
;
function $$map(value) {
    return value instanceof Map;
}
;
function $$func(value) {
    return value instanceof Function;
}
;
function $$elm(value) {
    return value instanceof Element;
}
;
function $cookie(key) {
    let $COOKIE = `${document.cookie};`;
    let regexp = new RegExp(`${key}=([^ ;]+)?`);
    let results = $COOKIE.match(regexp) ?? [];
    let result = results[results.length - 1];
    if (results.length && result != null) {
        result = decodeURIComponent(results[results.length - 1]);
        try {
            return JSON.parse(result);
        }
        catch (err) {
            return result;
        }
        ;
    }
    else {
        return null;
    }
}
;
function _cookie(name, body, expire) {
    const now = new Date();
    const sec = now.getTime();
    let date;
    if (typeof name !== "string" || String(name || "").trim().length < 1) {
        return;
    }
    ;
    if (typeof body === "object" && body != null) {
        body = JSON.stringify(body).trim();
    }
    else {
        body = String(body).trim();
    }
    ;
    if (typeof expire === "number") {
        date = new Date(sec + expire * 1000);
    }
    else {
        date = new Date(sec + 3600 * 1000);
    }
    ;
    // 設定 cookie
    document.cookie = `${name}=${body}; expires=${date.toUTCString()}; path=/`;
    ;
}
;
function $key(length) {
    let chars = "abcdefghijklmnopurstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
    let total = chars.length;
    let ary = [];
    if (typeof length === "number") {
        for (let i = 0; i < length; i++) {
            ary.push(chars[Math.floor(Math.random() * total)]);
        }
        ;
    }
    ;
    return ary.join("");
}
;
function $file(file) {
    return new Promise((res, rej) => {
        if (!file)
            return () => rej();
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => res(e);
        reader.onerror = (e) => rej(e);
    });
}
;
function $imageFromImageFile(file) {
    return new Promise((res, rej) => {
        if (!file)
            return () => rej();
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            if (!e.target)
                return () => rej();
            let img = new Image();
            img.src = String(e.target.result);
            img.onload = () => res(img);
            img.onerror = (e) => rej(e);
        };
    });
}
;
function $imageFromVideoFile(file) {
    return new Promise((res, rej) => {
        if (!file)
            return () => rej();
        let reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = function () {
            if (!reader.result)
                return () => rej();
            let blob = new Blob([reader.result], { type: file.type });
            let url = URL.createObjectURL(blob);
            let video = document.createElement('video');
            video.preload = "metadata";
            video.src = url;
            video.muted = true;
            video.playsInline = true;
            video.onloadeddata = function () {
                let canvas = document.createElement('canvas');
                let ctx = canvas.getContext('2d');
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                if (!ctx)
                    return () => rej();
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                let image = canvas.toDataURL("image/jpg");
                let img = new Image();
                img.src = image;
                img.onload = () => res(img);
                img.onerror = (e) => rej(e);
                video.ontimeupdate = null;
                video.pause();
            };
            video.onerror = (e) => rej(e);
            video.play();
        };
    });
}
;
function $blob(base64, mimeType) {
    let bytes = window.atob(base64.split(',')[1]);
    let aryBuffer = new ArrayBuffer(bytes.length);
    let unit8Ary = new Uint8Array(aryBuffer);
    for (let i = 0; i < bytes.length; i++) {
        unit8Ary[i] = bytes.charCodeAt(i);
    }
    ;
    return new Blob([aryBuffer], { type: mimeType });
}
;
let _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _0_, _1_, _2_, _3_, _4_, _5_, _6_, _7_, _8_, _9_, __0, __1, __2, __3, __4, __5, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $0_, $1_, $2_, $3_, $4_, $5_, $6_, $7_, $8_, $9_, $_0, $_1, $_2, $_3, $_4, $_5;
let _chars = Array
    .from({ length: 26 }, (_, i) => String.fromCharCode(97 + i))
    .map((e, i) => {
    let isNum = i < 10;
    let is10 = i >= 10 && i < 20;
    let is20 = i >= 20;
    let str = String(i);
    let num = str.charAt(str.length - 1);
    let txt = (bool) => `${bool ? "$" : "_"}${is20 ? "_" : ""}${num}${is10 ? "_" : ""} = "${bool ? e.toUpperCase() : e}";`;
    return `${txt(0)}${txt(1)}${isNum ? `_${e} = ${i};` : ""}`;
})
    .join('');
(function (_document, _href) {
    __(_chars);
    (function (_0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, _nsbp, _lpar, _rpar, _lcub, _rcub, _dollar, _lowbar, _dash, _period, _colon, _semi, _ldquo, _excl, _commat, _percent) {
        let join = (ary) => ary.join("");
        let regexp = (str) => {
            var str = str;
            for (const e of "^$*+?!.[](){}|=:") {
                let regexp = new RegExp(`\\${e}`, "g");
                str = str.replace(regexp, `\\${e}`);
            }
            ;
            let regexp = new RegExp(str);
            return regexp;
        };
        let _currentScript = _c + _u + _r + _r + _e + _n + _t + _S + _c + _r + _i + _p + _t;
        let _parentNode = _p + _a + _r + _e + _n + _t + _N + _o + _d + _e;
        let _removeChild = _r + _e + _m + _o + _v + _e + _C + _h + _i + _l + _d;
        let _getAttribute = _g + _e + _t + _A + _t + _t + _r + _i + _b + _u + _t + _e;
        let _copyright = _c + _o + _p + _y + _r + _i + _g + _h + _t;
        let _body = _b + _o + _d + _y;
        let _filter = _f + _i + _l + _t + _e + _r;
        let _test = _t + _e + _s + _t;
        let _length = _l + _e + _n + _g + _t + _h;
        let _addEventListener = _a + _d + _d + _E + _v + _e + _n + _t + _L + _i + _s + _t + _e + _n + _e + _r;
        let _removeEventListener = _r + _e + _m + _o + _v + _e + _E + _v + _e + _n + _t + _L + _i + _s + _t + _e + _n + _e + _r;
        let _DOMContentLoaded = _D + _O + _M + _C + _o + _n + _t + _e + _n + _t + _L + _o + _a + _d + _e + _d;
        let _localhost = String(_l + _o + _c + _a + _l + _h + _o + _s + _t);
        let _pardnchiu$github$io = _p + _a + _r + _d + _n + _c + _h + _i + _u + _period + _g + _i + _t + _h + _u + _b + _period + _i + _o;
        let _pardn$io = _p + _a + _r + _d + _n + _period + _i + _o;
        let _pardn$ltd = _p + _a + _r + _d + _n + _period + _l + _t + _d;
        let _joball$tw = _j + _o + _b + _a + _l + _l + _period + _t + _w;
        let _ntu$edu$tw = _n + _t + _u + _period + _e + _d + _u + _period + _t + _w;
        let _mandala$com$tw = _m + _a + _n + _d + _a + _l + _a + _period + _c + _o + _m + _period + _t + _w;
        let _regex_localhost = regexp(_localhost);
        let _regex_ip = /[^3-689]{3}(\.[^1-9]){2}(\.[^2-90])/;
        let _regex_pardnchiu$github$io = regexp(_pardnchiu$github$io);
        let _regex_pardn$io = regexp(_pardn$io);
        let _regex_pardn$ltd = regexp(_pardn$ltd);
        let _regex_joball$tw = regexp(_joball$tw);
        let _regex_ntu$edu$tw = regexp(_ntu$edu$tw);
        let _regex_mandala$com$tw = regexp(_mandala$com$tw);
        let _createElement = _c + _r + _e + _a + _t + _e + _E + _l + _e + _m + _e + _n + _t;
        let _style = _s + _t + _y + _l + _e;
        let _innerHTML = _i + _n + _n + _e + _r + _H + _T + _M + _L;
        let _head = _h + _e + _a + _d;
        let _appendChild = _a + _p + _p + _e + _n + _d + _C + _h + _i + _l + _d;
        let _body_after = _b + _o + _d + _y + _colon + _colon + _a + _f + _t + _e + _r;
        let _important = _nsbp + _excl + _i + _m + _p + _o + _r + _t + _a + _n + _t;
        let _content = _c + _o + _n + _t + _e + _n + _t + _colon + _ldquo + _R + _e + _n + _d + _e + _r + _e + _d + _nsbp + _b + _y + _nsbp + _P + _D + _E + _x + _t + _e + _n + _s + _i + _o + _n + _dash + _j + _s + _ldquo + _important + _semi;
        let _position = _p + _o + _s + _i + _t + _i + _o + _n + _colon + _f + _i + _x + _e + _d + _important + _semi;
        let _zindex = _z + _dash + _i + _n + _d + _e + _x + _colon + _1 + _0 + _0 + _0 + _0 + _important + _semi;
        let _bottom = _b + _o + _t + _t + _o + _m + _colon + _0 + _important + _semi;
        let _left = _l + _e + _f + _t + _colon + _0 + _important + _semi;
        let _right = _r + _i + _g + _h + _t + _colon + _0 + _important + _semi;
        let _margin = _m + _a + _r + _g + _i + _n + _colon + _0 + _nsbp + _a + _u + _t + _o + _important + _semi;
        let _width = _w + _i + _d + _t + _h + _colon + _1 + _0 + _0 + _percent + _important + _semi;
        let _textAlign = _t + _e + _x + _t + _dash + _a + _l + _i + _g + _n + _colon + _c + _e + _n + _t + _e + _r + _important + _semi;
        let _color = _c + _o + _l + _o + _r + _colon + _l + _i + _g + _h + _t + _g + _r + _a + _y + _important + _semi;
        let _opacity = _o + _p + _a + _c + _i + _t + _y + _colon + _1 + _important + _semi;
        let _clear = _d + _o + _c + _u + _m + _e + _n + _t + _period + _body + _period + _r + _e + _m + _o + _v + _e + _lpar + _rpar;
        let _$init = _dollar + _i + _n + _i + _t;
        let _pardn_ltd = _P + _a + _r + _d + _n + _nsbp + _L + _t + _d;
        let copyright = _document[_currentScript][_getAttribute](_copyright);
        let isInit = true;
        // let listener = (_document as any)[_addEventListener](_DOMContentLoaded, function () {
        //     (_document as any)[_removeEventListener](_DOMContentLoaded, listener);
        /* 用於檢查是否包含copyright */
        if (isInit) {
            isInit = false;
            // 檢查
            if (copyright && copyright === _pardn_ltd) {
                _document[_$init] = 1;
                if ([_regex_localhost, _regex_ip, _regex_joball$tw, _regex_pardnchiu$github$io, _regex_pardn$io, _regex_pardn$ltd, _regex_ntu$edu$tw, _regex_mandala$com$tw][_filter]((e) => e.test(_href))[_length] > 0) {
                    return;
                }
                ;
                let style = _document[_createElement](_style);
                style[_innerHTML] = join([_body_after, _lcub, _content, _position, _zindex, _bottom, _left, _right, _margin, _width, _textAlign, _color, _opacity, _rcub]);
                _document[_head][_appendChild](style);
            }
            else {
                _document[_currentScript][_parentNode][_removeChild](_document[_currentScript]);
            }
            ;
        }
        ;
        // });
    }(_a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _0_, _1_, _2_, _3_, _4_, _5_, _6_, _7_, _8_, _9_, __0, __1, __2, __3, __4, __5, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $0_, $1_, $2_, $3_, $4_, $5_, $6_, $7_, $8_, $9_, $_0, $_1, $_2, $_3, $_4, $_5, " ", "(", ")", "{", "}", "$", "_", "-", ".", ":", ";", "\"", "!", "@", "%"));
}(document, location.href));
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
            this.forEach((e, index) => map.set(e, index));
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
        value: function (value) {
            let ary = this;
            if (Array.isArray(value)) {
                ary = ary.concat(value);
            }
            else if (value != null) {
                ary.push(value);
            }
            ;
            return ary;
        }
    });
    _def(_this, _$, {
        value: function (value) {
            if (value == null) {
                return this;
            }
            ;
            let ary = [];
            this.forEach((e, i) => {
                const newValue = value(e, i);
                if (newValue == null) {
                    return;
                }
                ;
                ary.push(newValue);
            });
            return ary;
        }
    });
    _def(_this, $, {
        value: function (index) {
            const length = this.length;
            if (typeof index !== "number" || Math.abs(index) > length) {
                return null;
            }
            ;
            return this[(index < 0 ? length : 0) + index];
        }
    });
    _def(_this, $i, {
        value: function (value) {
            const index = this.indexOf(value);
            if (index == -1) {
                return null;
            }
            ;
            return index;
        }
    });
    _def(_this, $str, {
        value: function (char) {
            if (typeof char !== "string" && typeof char !== "number") {
                return this.join("");
            }
            ;
            return this.join(String(char).toString());
        }
    });
    // string 延伸
    _def(_this, $req, {
        value: function (body = {}) {
            return `/${_this.$str("/")}`.replace(/[\/]+/g, "/").$req(body);
        }
    });
    _def(_this, $_, {
        value: function (index) {
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
            }
            ;
        }
    });
    _def(_this, $$, {
        value: function (value) {
            return this.indexOf(value) !== -1;
        }
    });
}(Object.defineProperty, Array.prototype));
(function (_def, _this) {
    const $yyyy = "$yyyy", $yy = "$yy", $y = "$y", $MM = "$MM", $M = "$M", $DD = "$DD", $D = "$D", $dd = "$dd", $d = "$d", $HH = "$HH", $H = "$H", $hh = "$hh", $h = "$h", $A = "$A", $a = "$a", $mm = "$mm", $m = "$m", $ss = "$ss", $s = "$s", $timestamp = "$timestamp", $date = "$date", $format = "$format";
    _def(_this, $yyyy, {
        get: function () {
            return this.getFullYear();
        }
    });
    _def(_this, $yy, {
        get: function () {
            const value = this.getFullYear().toString();
            return value.slice(-2);
        }
    });
    _def(_this, $y, {
        get: function () {
            return this.getFullYear();
        }
    });
    _def(_this, $MM, {
        get: function () {
            const value = this.$M;
            return `${value < 10 ? "0" : ""}${value}`;
        }
    });
    _def(_this, $M, {
        get: function () {
            return this.getMonth() + 1;
        }
    });
    _def(_this, $DD, {
        get: function () {
            const value = this.$D;
            return `${value < 10 ? "0" : ""}${value}`;
        }
    });
    _def(_this, $D, {
        get: function () {
            return this.getDate();
        }
    });
    _def(_this, $dd, {
        get: function () {
            const value = this.$d;
            return (value === 0) ? "Sun" :
                (value === 1) ? "Mon" :
                    (value === 2) ? "Tue" :
                        (value === 3) ? "Wed" :
                            (value === 4) ? "Thu" :
                                (value === 5) ? "Fri" :
                                    (value === 6) ? "Sat" : "NaN";
        }
    });
    _def(_this, $d, {
        get: function () {
            return this.getDay();
        }
    });
    _def(_this, $HH, {
        get: function () {
            const value = this.$H;
            return `${value < 10 ? "0" : ""}${value}`;
        }
    });
    _def(_this, $H, {
        get: function () {
            return this.getHours();
        }
    });
    _def(_this, $hh, {
        get: function () {
            const value = this.$h;
            return `${value < 10 ? "0" : ""}${value}`;
        }
    });
    _def(_this, $h, {
        get: function () {
            let value = this.$H;
            value = value % 12;
            value = value || 12;
            return value;
        }
    });
    _def(_this, $A, {
        get: function () {
            return this.$H >= 12 ? 'PM' : 'AM';
        }
    });
    _def(_this, $a, {
        get: function () {
            return this.$H >= 12 ? 'pm' : 'am';
        }
    });
    _def(_this, $mm, {
        get: function () {
            const value = this.$m;
            return `${value < 10 ? "0" : ""}${value}`;
        }
    });
    _def(_this, $m, {
        get: function () {
            return this.getMinutes();
        }
    });
    _def(_this, $ss, {
        get: function () {
            const value = this.$s;
            return `${value < 10 ? "0" : ""}${value}`;
        }
    });
    _def(_this, $s, {
        get: function () {
            return this.getSeconds();
        }
    });
    _def(_this, $timestamp, {
        get: function () {
            return Math.floor(this.getTime() / 1000);
        }
    });
    _def(_this, $date, {
        value: function (body) {
            const isObject = typeof body === "object" && body != null;
            const year = this.$y;
            const month = this.$M - 1;
            if (!isObject) {
                return new Date();
            }
            ;
            // const isStartBoolean = typeof body.start === "boolean";
            // const isEndBoolean = typeof body.end === "boolean";
            const isPreObject = typeof body.pre === "object" && body.pre != null;
            if (Boolean(body.start) && body.start) {
                return new Date(year, month, 1);
            }
            else if (Boolean(body.end) && body.end) {
                return new Date(year, month - 1, 0);
            }
            else if (isPreObject) {
                // const isPreStartBoolean = typeof body.pre.start === "boolean";
                // const isPreEndBoolean = typeof body.pre.end === "boolean";
                if (Boolean(body.pre.start) && body.pre.start) {
                    return new Date(year, month - 1, 1);
                }
                else if (Boolean(body.pre.end) && body.pre.end) {
                    return new Date(year, month, 0);
                }
                else {
                    return new Date();
                }
                ;
            }
            else {
                return new Date();
            }
            ;
        }
    });
    _def(_this, $format, {
        value: function (format) {
            format = format
                // A | a
                .replace(/A{1}/g, "%A%")
                .replace(/a{1}/g, "%a%")
                // YYYY | YY | Y
                .replace(/Y{4}/gi, "%yearL%")
                .replace(/Y{2}/gi, "%yearS%")
                .replace(/Y{1}/gi, "%yearL%")
                // ss | s
                .replace(/s{2,}/g, "%secL%")
                .replace(/s{1}/g, "%secS%")
                // MM | M
                .replace(/M{2,}/g, "%monthL%")
                .replace(/M{1}/g, "%monthS%")
                // dd | d
                .replace(/d{2,}/g, "%dayL%")
                .replace(/d{1}/g, "%dayS%")
                // DD | D
                .replace(/D{2,}/g, "%dateL%")
                .replace(/D{1}/g, "%dateS%")
                // hh | h
                .replace(/h{2,}/g, "%hourL%")
                .replace(/h{1}/g, "%hourS%")
                // HH | H
                .replace(/H{2,}/g, "%hour24L%")
                .replace(/H{1}/g, "%hour24S%")
                // mm | m
                .replace(/m{2,}/g, "%minL%")
                .replace(/m{1}/g, "%minS%");
            return format.replace(/\%yearL\%/g, this.$yyyy)
                .replace(/\%yearS\%/g, this.$yy)
                .replace(/\%monthL\%/g, this.$MM)
                .replace(/\%monthS\%/g, this.$M)
                .replace(/\%dateL\%/g, this.$DD)
                .replace(/\%dateS\%/g, this.$D)
                .replace(/\%dayL\%/g, this.$dd)
                .replace(/\%dayS\%/g, this.$d)
                .replace(/\%hour24L\%/g, this.$HH)
                .replace(/\%hour24S\%/g, this.$H)
                .replace(/\%hourL\%/g, this.$hh)
                .replace(/\%hourS\%/g, this.$h)
                .replace(/\%minL\%/g, this.$mm)
                .replace(/\%minS\%/g, this.$m)
                .replace(/\%secL\%/g, this.$ss)
                .replace(/\%secS\%/g, this.$s);
        }
    });
}(Object.defineProperty, Date.prototype));
const textAllRegexp = /\{\{\s*([\w\.]+(\s*[\+\-\*\/\%]\s*[0-9]+)?)\s*\}\}/gi;
const textRegexp = /{{\s*([\w\.]+(\s*[\+\-\*\/\%]\s*[0-9]+)?)\s*}}/i;
// [VAL0] in val1 / ([VAL0], val1) in val2
const val0Regexp = /^\(?\s*([\w]+)(\s*\,|\s+)?/i;
// (val0, [VAL1]) in val2 
const val1Regexp = /\,\s*([\w]+)\s*\)/i;
// (val0, val1) in [VAL2]
const val2Regexp = /\s+([\w\.]+)\s*$/i;
// A [==] B / A [>=] B / A [>] B
const regexCompare = /\s*[\!\>\<\=]+\=*\s*/;
// A [+] B / A [-] B / A [*] B
const regexOperator = /\s*[\+\-\*\/\%]\s*/;
(function (_def, _this) {
    const convertText = "convertText";
    _def(_this, convertText, {
        value: function (key, value) {
            key = key?.__(/(\?|\.|\+|\*)/g, "\\$1");
            const newValue = this.replace(`{{\\s*?${key}\\s*?}}`.$regexp("i"), value);
            return newValue == null ? "" : newValue;
        }
    });
}(Object.defineProperty, String.prototype));
class PD {
    dom;
    path;
    data;
    event;
    done = false;
    constructor(body = {}) {
        if ($Lazy_Observer == null) {
            _LazyListener();
        }
        ;
        if ($SVG_Observer == null) {
            _SVGListener();
        }
        ;
        // // 避免數字初始化為 undefined
        // Object.keys(body.data ?? {}).forEach(e => {
        //     if (typeof body.data[e] === "number") body.data[e] = body.data[e].$str;
        // });
        const dom = typeof body.id === "string" ? `#${body.id}`.$ : null;
        if (!(dom instanceof Element)) {
            return;
        }
        ;
        this.dom = dom;
        this.path = {};
        this.data = body.data;
        this.event = body.event ?? {};
        this.initChild(dom, body.data ?? {});
        let timer = setInterval(() => {
            if (!this.done) {
                return;
            }
            ;
            clearInterval(timer);
            if (body.next == null) {
                return;
            }
            ;
            body.next(this.dom);
        }, 100);
    }
    ;
    dataListener(key, item, cb) {
        let value = item[key];
        if (value != null && typeof value === "object" && value != null && !Array.isArray(value)) {
            value.$keys.forEach((key) => {
                this.dataListener(key, value, cb);
            });
        }
        else if (value != null) {
            /**
             * 監聽陣列資料變動
             */
            Object.defineProperty(item, key, {
                get: () => {
                    return value;
                },
                set: (newValue) => {
                    value = newValue;
                    cb(newValue);
                }
            });
        }
        ;
    }
    ;
    // 針對 [For] 子迴圈的陣列傳遞使用 isChild 判斷
    initChild(dom, data = {}, type = {}) {
        const _document = document;
        const _PATH = ":path";
        const _FOR = ":for";
        const _IF = ":if";
        const _ELSE_IF = ":else-if";
        const _ELSE = ":else";
        const _MODEL = ":model";
        const _ID = ":id";
        const _CLASS = ":class";
        const _SRC = ":src";
        const _ALT = ":alt";
        const _HREF = ":href";
        const _HTML = ":html";
        const $init = "$init";
        const check = _document[$init];
        if (!check) {
            return dom;
        }
        ;
        const setPath = async (dom, data = {}, type = {}) => {
            const parent = dom.$parent();
            const attrs = dom.$attrAll;
            const target = attrs[_PATH];
            if (parent == null || target == null) {
                return;
            }
            ;
            if (this.path[target] == null) {
                this.path[target] = parent;
            }
            else if (this.path[target] == parent) {
                return;
            }
            ;
            fetch(target).then(async (r) => {
                const txt = await r.text();
                // 添加內容至區塊 (有 script 時純添加，不執行)
                "div"._(txt).$nodeAll.forEach(e => dom._child(e));
                // 分析內容 (不包含 PDView 時，直接渲染內容)
                if (!txt.$$(/new\s+\$dom/))
                    this.initChild(dom, data, type);
                // 移出內容 (有 script 時執行)
                dom.$nodeAll.forEach(e => {
                    const isScript = e instanceof HTMLScriptElement;
                    // 內容是 script, 移動至 body 區塊的底部
                    if (isScript)
                        document.body._child("script"._(e.$));
                    // 移動內容至區塊的前方
                    else
                        parent._child(e, dom);
                });
                // 移除區塊
                dom.$rm();
            }).catch(() => dom.$rm());
        };
        /**
         *
         * 迴圈 [:for]
         *
         */
        const setFor = (dom, data = {}, type = {}) => {
            const domParent = dom.$parent(0);
            const attrVal = (dom.$attr(_FOR) ?? "").trim();
            ;
            /**
             * 父元素不存在
             * 迴圈 [:for] 不存在
             *
             * -> 結束
             */
            if (domParent == null || attrVal.$$mt) {
                return;
            }
            ;
            const domTag = $key(20);
            /**
             * 儲存初始 -> 用於重新渲染
             */
            const domDemo = dom._$(true)._attr({ "dom-tag": domTag });
            /**
             * 暫存元素
             */
            const domTemp = "temp"._();
            const domNext = dom.$next(0);
            /**
             * 移除當前元素
             */
            dom.$rm();
            /**
             * (val0, val1) in val2
             */
            const val0 = attrVal?.match(/^\(?\s*(\w+)/)?.$(1);
            const val1 = attrVal?.match(/\,\s*(\w+)/)?.$(1);
            const val2 = attrVal?.match(val2Regexp)?.$(1);
            const dataVal = fitValue(val2, data, (newValue) => {
                /**
                 * 獲取 tag = domTag 的項目位置索引
                 */
                const index = domParent.$sel(`*[dom-tag='${domTag}']`)?.$i;
                /**
                 * 移除全部 tag = domTag 的項目
                 */
                domParent.$selAll(`*[dom-tag='${domTag}']`).forEach(e => e.$rm());
                /**
                 * 拷貝Demo元素並插入 -> 用於重新渲染
                 */
                domParent._child(domDemo._$(true), index);
                /**
                 * 重新渲染
                 */
                this.initChild(domParent, data, { isFor: true });
            });
            /**
             * 資料為陣列
             */
            if (Array.isArray(dataVal)) {
                dataVal.forEach((item, index) => {
                    /**
                     * 拷貝Demo元素 -> 用於渲染
                     */
                    const domClone = domDemo._$(true);
                    /**
                     * 插入暫存元素
                     */
                    domTemp._child(domClone);
                    const subItem = { [`${val0}`]: item, [`${val1}`]: index };
                    /**
                     * 如果資料為物件
                     */
                    if (typeof item === "object" && item != null) {
                        item.$keys.forEach((key) => {
                            /**
                             * 監聽資料變動
                             * 針對特定元素標籤更新
                             */
                            this.dataListener(key, item, () => {
                                /**
                                 * 獲取 tag = domTag 的項目位置索引
                                 */
                                const index = domParent.$sel(`*[dom-tag='${domTag}']`)?.$i;
                                /**
                                 * 移除全部 tag = domTag 的項目
                                 */
                                domParent.$selAll(`*[dom-tag='${domTag}']`).forEach(e => e.$rm());
                                /**
                                 * 拷貝Demo元素並插入 -> 用於重新渲染
                                 */
                                domParent._child(domDemo._$(true), index);
                                /**
                                 * 重新渲染
                                 */
                                this.initChild(domParent, data, { isFor: true });
                            });
                        });
                        /**
                         * 傳遞自訂物件名稱 [val0] 自訂索引名稱 [val1] 渲染子內容
                         */
                        setAttr(domClone, subItem);
                        setEvent(domClone, subItem, { isFor: true, isAry: true });
                        setForAryText(domClone, subItem);
                        /**
                         * 渲染子內容
                         */
                        this.initChild(domClone, subItem, { isFor: true });
                    }
                    else {
                        /**
                         * 傳遞自訂物件名稱 [val0] 自訂索引名稱 [val1] 渲染子內容
                         */
                        setAttr(domClone, subItem);
                        setEvent(domClone, subItem, { isFor: true, isAry: true });
                        setForAryText(domClone, subItem);
                    }
                    ;
                });
            }
            else if (typeof dataVal === "object" && dataVal != null) {
                dataVal.$keys.forEach((subKey) => {
                    /**
                     * 拷貝Demo元素 -> 用於渲染
                     */
                    const domClone = domDemo._$(true);
                    /**
                     * 插入暫存元素
                     */
                    domTemp._child(domClone);
                    /**
                     * 監聽資料變動
                     */
                    this.dataListener(subKey, dataVal, () => {
                        /**
                         * 獲取 tag = domTag 的項目位置索引
                         */
                        const index = domParent.$sel(`*[dom-tag='${domTag}']`)?.$i;
                        /**
                         * 移除全部 tag = domTag 的項目
                         */
                        domParent.$selAll(`*[dom-tag='${domTag}']`).forEach(e => e.$rm());
                        /**
                         * 拷貝Demo元素並插入 -> 用於重新渲染
                         */
                        domParent._child(domDemo._$(true), index);
                        /**
                         * 重新渲染
                         */
                        this.initChild(domParent, data, { isFor: true });
                    });
                    const subVal = dataVal[subKey];
                    const subItem = { [`${val0}`]: subKey, [`${val1}`]: subVal };
                    setAttr(domClone, subItem);
                    setEvent(domClone, subItem, { isFor: true, isObj: true });
                    setForObjText(domClone, subItem);
                    /**
                     * 傳遞自訂物件key名稱 [val0] 自訂物件value名稱 [val1] 渲染子內容
                     */
                    this.initChild(domClone, subItem, { isFor: true, isAry: Array.isArray(subVal) });
                });
            }
            ;
            /**
             * 插入最終元素
             * domNext存在 -> 插入domClone至domNext前方
             * domNext不存在 -> 添加domClone
             */
            domParent._child(domTemp, domNext);
        };
        const setIf = (dom, data = {}, type = {}) => {
            const domParent = dom.$parent();
            const domIndex = dom.$i;
            const attrIF = (dom.$attr(_IF) ?? "").trim();
            /**
             * 父元素不存在
             * 迴圈 [:if] 不存在
             *
             * -> 結束
             */
            if (domParent == null || attrIF.$$mt) {
                return;
            }
            ;
            let ary = [dom];
            let domNext = dom.$next(0);
            let isElseIf = domNext?.$attr(_ELSE_IF) != null;
            let isElse = domNext?.$attr(_ELSE) != null;
            while (domNext != null && (isElseIf || isElse)) {
                ary.push(domNext);
                domNext = domNext.$next(0);
                isElseIf = domNext?.$attr(_ELSE_IF) != null;
                isElse = domNext?.$attr(_ELSE) != null;
            }
            ;
            const domTag = $key(20);
            /**
             * 儲存初始 -> 用於重新渲染
             */
            const domDemo = "temp"._(ary._$(e => e._$(true)._attr({ "dom-tag": domTag })));
            let isFit = false;
            ary.forEach(e => {
                e._attr({ "dom-tag": domTag });
                /**
                 * 已有符合的，後續一律移除
                 */
                if (isFit) {
                    return e.$rm();
                }
                ;
                const attrVal = e.$attr(_IF) || e.$attr(_ELSE_IF) || e.$attr(_ELSE);
                const isElse = e.$attr(_ELSE) != null;
                /**
                 * val0 [><=]* val1
                 */
                const val0 = attrVal?.$ary(regexCompare).$(0);
                const val1 = attrVal?.$ary(regexCompare).$(1);
                const compare = attrVal?.match(regexCompare)?.$(0).trim();
                const dataVal = fitValue(val0, data, (newValue) => {
                    /**
                     * 獲取 tag = domTag 的項目位置索引
                     */
                    /**
                     * 移除全部 tag = domTag 的項目
                     */
                    domParent.$selAll(`*[dom-tag='${domTag}']`).forEach(e => e.$rm());
                    /**
                     * 拷貝Demo元素並插入 -> 用於重新渲染
                     */
                    domParent._child(domDemo._$(true), domIndex);
                    /**
                     * 重新渲染
                     */
                    this.initChild(domParent, data, { isFor: true });
                });
                /**
                 * Operator不存在，直接判斷布林值
                 */
                if (compare == null) {
                    isFit = Boolean(dataVal);
                }
                /**
                 * Compare為 [>]，判斷數值大小
                 */
                else if (compare === ">") {
                    isFit = (Number(dataVal) || 0) > (Number(val1) || 0);
                }
                /**
                 * Compare為 [<]，判斷數值大小
                 */
                else if (compare === "<") {
                    isFit = (Number(dataVal) || 0) < (Number(val1) || 0);
                }
                /**
                 * Compare為 [>=]，判斷數值大小
                 */
                else if (compare === ">=" || compare === ">==") {
                    isFit = (Number(dataVal) || 0) >= (Number(val1) || 0);
                }
                /**
                 * Compare為 [<=]，判斷數值大小
                 */
                else if (compare === "<=" || compare === "<==") {
                    isFit = (Number(dataVal) || 0) <= (Number(val1) || 0);
                }
                /**
                 * Compare為 [==]
                 */
                else if (compare === "==" || compare === "===") {
                    /**
                     * 數值為null -> 判斷是否為空
                     */
                    if (val1 == "null") {
                        isFit = dataVal == null;
                    }
                    else if (val1 == "true") {
                        isFit = Boolean(dataVal);
                    }
                    else if (val1 == "false") {
                        isFit = !Boolean(dataVal);
                    }
                    else if (val1 == "empty") {
                        isFit = String(dataVal ?? "").length < 1;
                    }
                    /**
                     * 數值不為null -> 判斷是否符合
                     */
                    else {
                        isFit = String(dataVal ?? "") == String(val1);
                    }
                    ;
                }
                /**
                 * Compare為 [!=]
                 */
                else if (compare === "!=" || compare === "!==") {
                    /**
                     * 數值為null -> 判斷是否為空
                     */
                    if (val1 == "null") {
                        isFit = dataVal != null;
                    }
                    else if (val1 == "true") {
                        isFit = !Boolean(dataVal);
                    }
                    else if (val1 == "false") {
                        isFit = Boolean(dataVal);
                    }
                    else if (val1 == "empty") {
                        isFit = String(dataVal ?? "").length > 0;
                    }
                    /**
                     * 數值不為null -> 判斷是否符合
                     */
                    else {
                        isFit = String(dataVal ?? "") != String(val1);
                    }
                    ;
                }
                ;
                e.attr_(_IF).attr_(_ELSE_IF).attr_(_ELSE);
                if (!isFit && !isElse) {
                    e.$rm();
                }
                else if (isFit) {
                    e.class_("dom-temp");
                }
            });
            this.initChild(domParent, data, type);
        };
        /**
         *
         * 綁定Value
         *
         */
        const setModel = (dom, data = {}) => {
            const parent = dom.$parent();
            const attrModel = dom.$attr(_MODEL)?.trim();
            dom.attr_(_MODEL);
            const dataVal = fitValue(attrModel, data, (newValue) => {
                dom.value = newValue;
            });
            if (parent == null || attrModel == null || attrModel.$$mt)
                return;
            const isInput = dom instanceof HTMLInputElement;
            const isTextarea = dom instanceof HTMLTextAreaElement;
            const isSelect = dom instanceof HTMLSelectElement;
            if (isInput || isTextarea)
                dom.addEventListener("keyup", (e) => {
                    data[attrModel] = e.target.value;
                }),
                    dom.addEventListener("change", (e) => {
                        data[attrModel] = e.target.value;
                    });
            else if (isSelect)
                dom.addEventListener("change", (e) => {
                    data[attrModel] = e.target.value;
                });
        };
        /**
         *
         * 設定Attribute
         *
         */
        const setAttr = (dom, data = {}) => {
            const domTag = dom.$attr("dom-tag");
            const attrTagAry = dom.$attrAll.$keys
                /**
                 * 格式為 :test, :test-data...
                 */
                .filter(e => e.$$(/^:[\w\-]+$/))
                /**
                 * 不包含 [:path, :for, :if, :else-if, :else, :model]
                 */
                .filter(e => !e.$$(/\:(path|for|if|else\-if|else|model)/));
            if (attrTagAry.$$mt)
                return;
            attrTagAry.forEach(e => {
                const attrVal = (dom.$attr(e) ?? "").trim();
                const newValue = fitValue(attrVal, data, (newValue) => {
                    /**
                     * 所有符合domTag的項目
                     */
                    const ary = document.body.$selAll(`*[dom-tag='${domTag}']`);
                    if (ary.$$mt)
                        return;
                    /**
                     * 設定Attribute
                     */
                    ary.forEach(e => {
                        setAttribute(dom, newValue);
                    });
                });
                /**
                 * 設定Attribute
                 */
                setAttribute(dom, newValue);
                /**
                 * 移除標籤
                 */
                dom.attr_(e);
                function setAttribute(dom, newValue = "") {
                    if (e === _ID) {
                        dom.id = newValue;
                    }
                    else if (e === _CLASS) {
                        dom._class(newValue);
                    }
                    else if (e === _SRC) {
                        dom.src = newValue;
                    }
                    else if (e === _ALT) {
                        dom.alt = newValue;
                    }
                    else if (e === _HREF) {
                        dom.href = newValue;
                    }
                    else if (e === _HTML) {
                        dom.innerHTML = newValue;
                    }
                    else if (e === ":bgcolor") {
                        if (newValue == null || newValue.length < 1) {
                            dom.style.backgroundColor = attrVal;
                        }
                        else {
                            dom.style.backgroundColor = newValue;
                        }
                        ;
                    }
                    else if (e === ":color") {
                        if (newValue == null || newValue.length < 1) {
                            dom.style.color = attrVal;
                        }
                        else {
                            dom.style.color = newValue;
                        }
                        ;
                    }
                    /**
                     * newValue不存在 -> 移除Attribute
                     */
                    else if (newValue == null || newValue.$$mt) {
                        dom.attr_(`${e.__(/^:/, "")}`);
                    }
                    /**
                     * newValue不存在 -> 添加Attribute
                     */
                    else {
                        dom._attr({ [`${e.__(/^:/, "")}`]: newValue });
                    }
                    ;
                }
                ;
            });
        };
        /**
         *
         * 設定Event
         *
         */
        const setEvent = (dom, data = {}, type = {}) => {
            (() => {
                const parent = dom.$parent();
                const ary = dom.$attrAll.$keys.filter(e => e.$$(/^@[\w]+$/));
                if (parent == null || ary.$$mt)
                    return;
                ary.forEach(e => {
                    const event = e.__(/\@/, "on");
                    const method = dom.$attr(e);
                    dom.attr_(e);
                    if (method) {
                        dom[event] = this.event[method];
                    }
                    ;
                });
            })();
            (() => {
                if (!Boolean(type.isFor))
                    return;
                const attrFor = dom.$attr(_FOR);
                const val0 = attrFor?.match(/^\(?\s*(\w+)/)?.$(1);
                const val1 = attrFor?.match(/\,\s*(\w+)/)?.$(1);
                dom.$attrAll.$keys
                    .filter(e => e.$$(/^:@[\w]+$/))
                    .forEach(attrTag => {
                    const event = attrTag.__(/^\:\@/, "on");
                    const method = dom.$attr(attrTag);
                    let methodAry = method?.$ary(".");
                    let eventObj = data;
                    let eventKey = methodAry?.$(0);
                    let eventVal = eventObj[eventKey];
                    methodAry?.shift();
                    if ((Boolean(type.isAry) && eventKey != val0) ||
                        (Boolean(type.isObj) && eventKey != val1))
                        return;
                    while ((methodAry ?? []).length > 0) {
                        eventObj = eventVal;
                        eventKey = methodAry?.$(0);
                        eventVal = eventObj[eventKey];
                        methodAry?.shift();
                    }
                    ;
                    if (eventVal == null)
                        return;
                    dom[event] = this.event[eventVal];
                });
            })();
        };
        /**
         *
         * 設定innerText
         *
         */
        const setText = (dom, data = {}, type = {}) => {
            const domTag = dom.$attr("dom-tag") || $key(20);
            dom._attr({ "dom-tag": domTag });
            const domDemo = dom._$(true);
            const domParent = dom.$parent();
            const domIndex = dom.$i;
            // 保留初始 innerHTML
            const init = dom.innerHTML;
            // 偵測是否有符合 {{ any }} 的項目
            const isTarget = init.$$(/\{\{\s*([\w\.]+(\s*[\+\-\*\/\%]\s*[0-9]+)?)\s*\}\}/gi);
            // 父元素不存在或內容為空.__(/[\u00A0\u0020]/g, "\u0020");
            if (parent == null || !isTarget)
                return;
            dom.$nodeAll.
                filter(e => e.parentElement === dom && e.nodeType === Node.TEXT_NODE).
                forEach(e => {
                e.textContent?.
                    // 符合 {{ any }} 的項目
                    match(/\{\{\s*([\w\.]+(\s*[\+\-\*\/\%]\s*[0-9]+)?)\s*\}\}/gi)?.
                    forEach(text => {
                    const target = text.match(textRegexp)?.$(1);
                    // {{ any }} 解析失敗
                    if (target == null)
                        return;
                    // 讀取資料
                    // let ary = target.$ary(".")
                    // let obj = data;
                    // let key = ary.$(0);
                    // let val = data[key];
                    // ary.shift();
                    // while (ary.length > 0) {
                    //     obj = val;
                    //     key = ary.$(0);
                    //     val = val[key];
                    //     ary.shift();
                    // };
                    // const key = target?.$ary(".").$(1);
                    // let ary = target?.$ary(".").splice(2, target?.$ary(".").length);
                    // let value =
                    //     data[key] ? data[key] :
                    //         data.$system && data.$system[key] ? data.$system[key] : "";
                    // while (ary.length > 0 && typeof value === "object") {
                    //     const key = ary.$(0);
                    //     value = value[key];
                    //     ary.shift();
                    // };
                    // const key = target.$ary(".").$(-1);
                    // let value =
                    //     data[key] ? data[key] :
                    //         data.$system && data.$system[key] ? data.$system[key] : "";
                    // if (!type.isFor && target.$ary(".").length > 1) {
                    //     value = data;
                    //     target.$ary(".").forEach((e: string) => {
                    //         if (value[e] == null) return value = "";
                    //         value = value[e];
                    //     });
                    // };
                    // 偵測資料變動
                    // if (!Object.getOwnPropertyDescriptor(data, target)) {
                    //     // Object.defineProperty(data, target, {
                    //     //     get: () => value,
                    //     //     set: (newValue) => {
                    //     //         value = newValue;
                    //     //         dom.__(init);
                    //     //         setText(dom, data, type);
                    //     //     }
                    //     // });
                    // };
                    const newValue = fitValue(target, data, (newValue) => {
                        const domOld = document.body.$sel(`*[dom-tag='${domTag}']`);
                        if (domOld == null || domParent == null)
                            return;
                        domParent._child(domDemo._$(true), domIndex);
                        domOld.$rm();
                        this.initChild(domParent, data);
                    });
                    // 更新文字
                    e.textContent = e.textContent?.convertText(target, newValue) ?? "";
                });
            });
        };
        const setForAryText = (dom, data = {}) => {
            const attr = dom.$attr(_FOR);
            const _val0 = attr?.match(val0Regexp)?.$(1);
            const _val1 = attr?.match(val1Regexp)?.$(1);
            let index = data[_val1];
            dom.attr_(_FOR);
            dom.$nodeAll.
                filter(e => e.parentElement === dom && e.nodeType === Node.TEXT_NODE).
                forEach(node => {
                node.textContent?.match(/\{\{\s*([\w\.]+(\s*[\+\-\*\/\%]\s*[0-9]+)?)\s*\}\}/gi)?.forEach((text) => {
                    let target = text.match(textRegexp)?.$(1);
                    let ary = target.$ary(".");
                    let obj = data;
                    let key = ary.$(0);
                    let val = obj[key];
                    ary.shift();
                    // {{ item }}
                    if (key === _val0) {
                        while (ary.length > 0) {
                            obj = val;
                            key = ary.$(0);
                            val = obj[key];
                            ary.shift();
                        }
                        ;
                        target = target.__(/(\?|\.|\+|\*)/g, "\\$1");
                        let newValue = node.textContent?.__(`{{\\s*?${target}\\s*?}}`.$regexp("i"), val);
                        if (newValue == null)
                            newValue = "";
                        node.textContent = newValue;
                    }
                    ;
                    // {{ index }}
                    const operator = key.$ary(regexOperator).$(0);
                    const num = key.$ary(regexOperator).$(1);
                    if (operator === _val1) {
                        if (key == null)
                            index = index;
                        else if (key.$$(/\+/))
                            index = index + (Number(num) || 0);
                        else if (key.$$(/\-/))
                            index = index - (Number(num) || 0);
                        else if (key.$$(/\*/))
                            index = index * (Number(num) || 0);
                        else if (key.$$(/\//))
                            index = index / (Number(num) || 0);
                        else if (key.$$(/\%/))
                            index = index % (Number(num) || 0);
                        target = target.__(/(\?|\.|\+|\*)/g, "\\$1");
                        let newValue = node.textContent?.__(`{{\\s*?${target}\\s*?}}`.$regexp("i"), index);
                        if (newValue == null)
                            newValue = "";
                        node.textContent = newValue;
                    }
                    ;
                });
            });
            this.initChild(dom, data, { isFor: true });
        };
        const setForObjText = (dom, data = {}) => {
            const _for = dom.$attr(_FOR);
            const _val0 = _for?.match(val0Regexp)?.$(1);
            const _val1 = _for?.match(val1Regexp)?.$(1);
            dom.attr_(_FOR);
            dom.$nodeAll
                .filter(e => e.parentElement === dom && e.nodeType === Node.TEXT_NODE)
                .forEach(node => {
                node.textContent?.match(/\{\{\s*([\w\.]+(\s*[\+\-\*\/\%]\s*[0-9]+)?)\s*\}\}/gi)?.forEach((text) => {
                    // const target = text.match(textRegexp)?.$(1);
                    // const _item = target?.$ary(".").$(0);
                    // const _key = target?.$ary(".").$(1);
                    // let newValue: string | undefined;
                    // // {{ key }}
                    // if (_item === _val0) {
                    //     newValue = node.textContent?.convertText(target, key);
                    // };
                    // // {{ value.key }}
                    // if (_item === _val1 && _key != null) {
                    //     let repl = value[_key];
                    //     newValue = node.textContent?.convertText(target, repl == null ? "" : repl);
                    // }
                    // else if (_item === _val1) {
                    //     newValue = node.textContent?.convertText(target, value);
                    // };
                    // if (newValue == null) return;
                    // node.textContent = newValue;
                    let target = text.match(textRegexp)?.$(1);
                    let ary = target.$ary(".");
                    let obj = data;
                    let key = ary.$(0);
                    let val = obj[key];
                    ary.shift();
                    // {{ key }}
                    if (key === _val0) {
                        target = target.__(/(\?|\.|\+|\*)/g, "\\$1");
                        let newValue = node.textContent?.__(`{{\\s*?${target}\\s*?}}`.$regexp("i"), val);
                        if (newValue == null)
                            newValue = "";
                        node.textContent = newValue;
                    }
                    ;
                    // {{ value }}
                    if (key === _val1) {
                        while (ary.length > 0) {
                            obj = val;
                            key = ary.$(0);
                            val = obj[key];
                            ary.shift();
                        }
                        ;
                        target = target.__(/(\?|\.|\+|\*)/g, "\\$1");
                        let newValue = node.textContent?.__(`{{\\s*?${target}\\s*?}}`.$regexp("i"), val == null ? "" : val);
                        if (newValue == null)
                            newValue = "";
                        node.textContent = newValue;
                    }
                    ;
                });
            });
            this.initChild(dom, data, { isFor: true });
        };
        const fitValue = (name = "", data = {}, cb) => {
            if (name.$$mt) {
                return;
            }
            ;
            const is_length = /^LENGTH\(.+\)/.test(name);
            name = name.__(/^LENGTH\(|\)$/g, "");
            let keyAry = name.$ary(".");
            let targetObj = data;
            let targetKey = keyAry.$(0);
            let targetVal = targetObj[targetKey];
            keyAry.shift();
            while (keyAry.length > 0) {
                targetObj = targetVal;
                targetKey = keyAry.$(0);
                targetVal = targetObj[targetKey];
                keyAry.shift();
            }
            ;
            /**
             * 監聽資料變動
             * 針對特定元素標籤更新
             */
            this.dataListener(targetKey, targetObj, (newValue) => {
                cb(newValue);
            });
            if (is_length) {
                return targetVal.length;
            }
            ;
            return targetVal;
        };
        this.done = false;
        dom.$childAll.forEach((childDom) => {
            const attrs = childDom.$attrAll;
            if (childDom.$$class("lazyload"))
                $Lazy_Observer.observe(childDom);
            if (childDom.$$class("svg") && childDom.tagName === "SPAN")
                $SVG_Observer.observe(childDom);
            if (childDom.$parent() == null)
                return;
            if (attrs[_ELSE_IF] != null || attrs[_ELSE] != null)
                return;
            if (attrs[_PATH])
                return setPath(childDom, data, type);
            if (attrs[_FOR])
                return setFor(childDom, data, type);
            setIf(childDom, data, type);
            setModel(childDom, data);
            setAttr(childDom, data);
            setEvent(childDom, data, type);
            setText(childDom, data, type);
            this.initChild(childDom, data, type);
        });
        dom.class_("dom-temp");
        this.done = true;
    }
    ;
}
;
(function (_def, _this) {
    const $ = "$", $x = "$x", $y = "$y", $w = "$w", $h = "$h", $sw = "$sw", $sh = "$sh", $nw = "$nw", $nh = "$nh", $len = "$len", $i = "$i", $classAll = "$classAll", $attrAll = "$attrAll", $childAll = "$childAll", $nodeAll = "$nodeAll", $text = "$text", $html = "$html", _ = "_", __ = "__", _$ = "_$", _x = "_x", _y = "_y", _w = "_w", _h = "_h", _pt = "_pt", _pl = "_pl", _pb = "_pb", _pr = "_pr", _mt = "_mt", _ml = "_ml", _mb = "_mb", _mr = "_mr", style_ = "style_", _style = "_style", $style = "$style", class_ = "class_", class__ = "class__", _class = "_class", __class = "__class", $$class = "$$class", $$class_ = "$$class_", $$_class = "$$_class", data_ = "data_", _data = "_data", attr_ = "attr_", _attr = "_attr", $attr = "$attr", $$attr = "$$attr", _child = "_child", __child = "__child", $child = "$child", $parent = "$parent", $pre = "$pre", $next = "$next", $sel = "$sel", $selAll = "$selAll", $rm = "$rm", _go = "_go", _open = "_open", _video = "_video", _display = "_display", scrollToX = "scrollToX", scrollToY = "scrollToY", scrollToBottom = "scrollToBottom", events = ["load", "click", "dblclick", "scroll", "mousedown", "mouseup", "mouseenter", "mouseleave", "mouseover", "mouseout", "mousemove", "touchstart", "touchmove", "touchenter", "touchleave", "touchend", "touchup", "drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "focus", "blur", "input", "keydown", "keyup", "change", "contextmenu", "cut", "paste"];
    _def(_this, $, {
        get: function () {
            return this.innerHTML;
        }
    });
    _def(_this, $x, {
        get: function () {
            return this.scrollLeft;
        }
    });
    _def(_this, $y, {
        get: function () {
            return this.scrollTop;
        }
    });
    _def(_this, $w, {
        get: function () {
            return this.clientWidth;
        }
    });
    _def(_this, $h, {
        get: function () {
            return this.clientHeight;
        }
    });
    _def(_this, $sw, {
        get: function () {
            return this.scrollWidth;
        }
    });
    _def(_this, $sh, {
        get: function () {
            return this.scrollHeight;
        }
    });
    _def(_this, $nw, {
        get: function () {
            return this.naturalWidth;
        }
    });
    _def(_this, $nh, {
        get: function () {
            return this.naturalHeight;
        }
    });
    _def(_this, $len, {
        get: function () {
            return this.children.length;
        }
    });
    _def(_this, $i, {
        get: function () {
            const parent = this.parentElement;
            return parent instanceof Element ? [...parent.children].indexOf(this) : -1;
        }
    });
    _def(_this, $classAll, {
        get: function () {
            return [...this.classList];
        }
    });
    _def(_this, $attrAll, {
        get: function () {
            let map = new Map();
            for (const e of this.attributes) {
                map.set(e.name, e.value.trim());
            }
            ;
            return Object.fromEntries(map);
        }
    });
    _def(_this, $childAll, {
        get: function () {
            return [...this.children];
        }
    });
    _def(_this, $nodeAll, {
        get: function () {
            return [...this.childNodes];
        }
    });
    _def(_this, $text, {
        get: function () {
            let ary = [];
            [...this.childNodes].
                filter(e => e.nodeType === Node.TEXT_NODE && e.textContent.trim().length > 0).
                forEach(e => ary.push(e.textContent.trim()));
            return ary.join(" ");
        }
    });
    _def(_this, $html, {
        get: function () {
            return this.outerHTML;
        }
    });
    _def(_this, _, {
        value: function (innerHTML = "") {
            this.innerHTML += String(innerHTML);
            return this;
        }
    });
    _def(_this, __, {
        value: function (innerHTML = "") {
            this.innerHTML = String(innerHTML);
            return this;
        }
    });
    _def(_this, _$, {
        value: function (deep = false) {
            return this.cloneNode(Boolean(deep));
        }
    });
    _def(_this, _x, {
        value: function (value = NaN) {
            value = Number(value);
            if (!isNaN(value))
                this.scrollLeft = value;
            return this;
        }
    });
    _def(_this, _y, {
        value: function (value = NaN) {
            value = Number(value);
            if (!isNaN(value))
                this.scrollTop = value;
            return this;
        }
    });
    _def(_this, _w, {
        value: function (value) {
            if (value != null)
                this.style.width =
                    typeof value === "string" && value.trim().length > 0 ? value :
                        typeof value === "number" ? value + "px" : "";
            return this;
        }
    });
    _def(_this, _h, {
        value: function (value) {
            if (value != null)
                this.style.height =
                    typeof value === "string" && value.trim().length > 0 ? value :
                        typeof value === "number" ? value + "px" : "";
            return this;
        }
    });
    _def(_this, _pt, {
        value: function (value) {
            if (value != null)
                this.style.paddingTop =
                    typeof value === "string" && value.trim().length > 0 ? value :
                        typeof value === "number" ? value + "px" : "";
            return this;
        }
    });
    _def(_this, _pl, {
        value: function (value) {
            if (value != null)
                this.style.paddingLeft =
                    typeof value === "string" && value.trim().length > 0 ? value :
                        typeof value === "number" ? value + "px" : "";
            return this;
        }
    });
    _def(_this, _pb, {
        value: function (value) {
            if (value != null)
                this.style.paddingBottom =
                    typeof value === "string" && value.trim().length > 0 ? value :
                        typeof value === "number" ? value + "px" : "";
            return this;
        }
    });
    _def(_this, _pr, {
        value: function (value) {
            if (value != null)
                this.style.paddingRight =
                    typeof value === "string" && value.trim().length > 0 ? value :
                        typeof value === "number" ? value + "px" : "";
            return this;
        }
    });
    _def(_this, _mt, {
        value: function (value) {
            if (value != null)
                this.style.marginTop =
                    typeof value === "string" && value.trim().length > 0 ? value :
                        typeof value === "number" ? value + "px" : "";
            return this;
        }
    });
    _def(_this, _ml, {
        value: function (value) {
            if (value != null)
                this.style.marginLeft =
                    typeof value === "string" && value.trim().length > 0 ? value :
                        typeof value === "number" ? value + "px" : "";
            return this;
        }
    });
    _def(_this, _mb, {
        value: function (value) {
            if (value != null)
                this.style.marginBottom =
                    typeof value === "string" && value.trim().length > 0 ? value :
                        typeof value === "number" ? value + "px" : "";
            return this;
        }
    });
    _def(_this, _mr, {
        value: function (value) {
            if (value != null)
                this.style.marginRight =
                    typeof value === "string" && value.trim().length > 0 ? value :
                        typeof value === "number" ? value + "px" : "";
            return this;
        }
    });
    _def(_this, class_, {
        value: function (value = []) {
            const list = Array.isArray(value) ? value :
                typeof value === "string" && value.trim().length > 0 ? value.split(/[,. ]/) : [];
            list.
                filter((e) => typeof e === "string" && e.trim().length > 0).
                forEach(e => this.classList.remove(e));
            return this;
        }
    });
    _def(_this, class__, {
        value: function () {
            this.className = "";
            return this;
        }
    });
    _def(_this, _class, {
        value: function (value = []) {
            const list = Array.isArray(value) ? value :
                typeof value === "string" && value.trim().length > 0 ? value.split(/[,. ]/) : [];
            list.
                filter((e) => typeof e === "string" && e.trim().length > 0).
                forEach(e => this.classList.add(e));
            return this;
        }
    });
    _def(_this, __class, {
        value: function (value = []) {
            this.class__()._class(value);
            return this;
        }
    });
    _def(_this, $$class, {
        value: function (value = "") {
            return typeof value === "string" && value.trim().length > 0 ? this.classList.contains(value) : false;
        }
    });
    _def(_this, $$class_, {
        value: function (bool = false, value = []) {
            Boolean(bool) && typeof value === "string" && value.trim().length > 0 ? this.class_(value) : this._class(value);
            return this;
        }
    });
    _def(_this, $$_class, {
        value: function (bool = false, value = []) {
            Boolean(bool) && typeof value === "string" && value.trim().length > 0 ? this._class(value) : this.class_(value);
            return this;
        }
    });
    _def(_this, style_, {
        value: function (value = []) {
            const list = Array.isArray(value) ? value :
                typeof value === "string" && value.trim().length > 0 ? value.split(/[,. ]/) : [];
            list.
                filter(key => typeof key === "string" && key.trim().length > 0 && /^[\w\-]+$/.test(key)).
                forEach(key => this.style[key] = "");
            return this;
        }
    });
    _def(_this, _style, {
        value: function (value = {}) {
            (typeof value === "object" && value != null && !Array.isArray(value) ? Object.keys(value) : []).
                filter(key => typeof key === "string" && key.trim().length > 0 && /^[\w\-]+$/.test(key)).
                forEach(key => this.style[key] = value[key]);
            return this;
        }
    });
    _def(_this, $style, {
        value: function (key = "") {
            return typeof key === "string" && key.trim().length > 0 && /^[\w\-]+$/.test(key) ? this.style[key] : null;
        }
    });
    _def(_this, data_, {
        value: function (value = []) {
            const list = Array.isArray(value) ? value :
                typeof value === "string" && value.trim().length > 0 ? value.split(/[,. ]/) : [];
            (list).
                filter(e => typeof e === "string" && e.trim().length > 0).
                forEach(e => delete this.dataset[`${e}`]);
            return this;
        }
    });
    _def(_this, _data, {
        value: function (value = {}) {
            (typeof value === "object" && value != null && !Array.isArray(value) ? Object.keys(value) : []).
                filter(e => typeof e === "string" && e.trim().length > 0).
                forEach(e => this.dataset[`${e}`] = value[e]);
            return this;
        }
    });
    _def(_this, attr_, {
        value: function (value = []) {
            const list = Array.isArray(value) ? value :
                typeof value === "string" && value.trim().length > 0 ? value.split(/[,. ]/) : [];
            (list).
                filter(e => typeof e === "string" && e.trim().length > 0).
                forEach(e => this.removeAttribute(e));
            return this;
        }
    });
    _def(_this, _attr, {
        value: function (value = {}) {
            (typeof value === "object" && value != null && !Array.isArray(value) ? Object.keys(value) : []).
                filter(e => typeof e === "string" && e.trim().length > 0).
                forEach(key => this.setAttribute(key, value[key]));
            return this;
        }
    });
    _def(_this, $attr, {
        value: function (key = "") {
            return typeof key === "string" && key.trim().length > 0 ? this.getAttribute(key) ?? null : null;
        }
    });
    _def(_this, $$attr, {
        value: function (key = "") {
            if (typeof key === "string" && key.trim().length > 0) {
                const value = this.getAttribute(key);
                return value != null ? !value.trim().$$mt : false;
            }
            return false;
        }
    });
    _def(_this, _child, {
        value: function (value = [], before) {
            if (typeof value === "string" && value.trim().length > 0 || typeof value === "number")
                this.innerHTML += value;
            else if (Array.isArray(value) && value.length > 1)
                value.forEach(e => {
                    if (typeof e === "string" && e.trim().length > 0 || typeof e === "number")
                        this.innerHTML += e;
                    else if (e != null)
                        this.appendChild(e);
                });
            else if (Array.isArray(value) && value.length === 1) {
                if (before instanceof Element && before.parentElement === this)
                    this.insertBefore(value[0], before);
                else if (typeof before === "number" && Math.abs(before) <= this.children.length)
                    this.insertBefore(value[0], this.children[before]);
                else if (value[0] != null)
                    this.appendChild(value[0]);
            }
            else if (before instanceof Element && before.parentElement === this)
                this.insertBefore(value, before);
            else if (typeof before === "number" && Math.abs(before) <= this.children.length)
                this.insertBefore(value, this.children[before]);
            else if (value != null)
                this.appendChild(value);
            return this;
        }
    });
    // _child 延伸
    _def(_this, __child, {
        value: function (value = []) {
            this.__()._child(value);
            return this;
        }
    });
    _def(_this, $child, {
        value: function (value = []) {
            let dom = this;
            if (Array.isArray(value))
                value.forEach(e => {
                    if (typeof e === "string" && e.trim().length > 0)
                        dom = dom.querySelector(e);
                    else if (typeof e === "number" && Math.abs(e) <= dom.children.length)
                        dom = dom.children[(e < 0 ? dom.children.length : 0) + e];
                });
            else if (typeof value === "string" && value.trim().length > 0)
                dom = this.querySelector(value);
            else if (typeof value === "number" && Math.abs(value) <= this.children.length)
                dom = this.children[(value < 0 ? this.children.length : 0) + value];
            return (dom === this) ? undefined : dom;
        }
    });
    _def(_this, $parent, {
        value: function (layer = 0) {
            let dom = this.parentElement;
            if (typeof layer === "number" && layer > 0)
                for (var i = 0; i < layer; i++) {
                    if (dom == null)
                        break;
                    dom = dom.parentElement;
                }
            ;
            return dom;
        }
    });
    _def(_this, $pre, {
        value: function (index = 0) {
            let dom = this.previousElementSibling;
            if (typeof index === "number" && index > 0)
                for (var i = 0; i < index; i++) {
                    if (dom == null)
                        break;
                    dom = dom.previousElementSibling;
                }
            ;
            return dom;
        }
    });
    _def(_this, $next, {
        value: function (index = 0) {
            let dom = this.nextElementSibling;
            if (typeof index === "number" && index > 0)
                for (var i = 0; i < index; i++) {
                    if (dom == null)
                        break;
                    dom = dom.nextElementSibling;
                }
            ;
            return dom;
        }
    });
    _def(_this, $sel, {
        value: function (filter = "") {
            return typeof filter === "string" && filter.trim().length > 0 ? this.querySelector(filter) : null;
        }
    });
    _def(_this, $selAll, {
        value: function (filter = "") {
            return typeof filter === "string" && filter.trim().length > 0 ? this.querySelectorAll(filter) ?? [] : [];
        }
    });
    _def(_this, $rm, {
        value: function () {
            this.remove();
        }
    });
    _def(_this, _go, {
        value: function (href = "") {
            if (typeof href === "string" && href.trim().length > 0)
                this.href = href;
            this.target = "_self";
            return this;
        }
    });
    _def(_this, _open, {
        value: function (href = "") {
            if (typeof href === "string" && href.trim().length > 0)
                this.href = href;
            this.target = "_blank";
            return this;
        }
    });
    events.forEach(e => _def(_this, `_${e}`, {
        value: function (event) {
            if (event instanceof Function) {
                this[`on${e}`] = event;
            }
            else {
                this[`on${e}`] = null;
            }
            return this;
        }
    }));
    _def(_this, _video, {
        value: function (value = {}) {
            if (this instanceof HTMLVideoElement) {
                this._attr({ controlsList: ["nodownload", "noremoteplayback"].join(",") });
                if (typeof value.preload === "string")
                    this.preload = value.preload;
                if (typeof value.loop === "boolean")
                    this.loop = value.loop;
                if (typeof value.muted === "boolean")
                    this.muted = value.muted;
                if (typeof value.controls === "boolean")
                    this.controls = value.controls;
                if (typeof value.playsinline === "boolean" && value.playsinline)
                    this._attr({ playsinline: "" });
                if (typeof value.download === "boolean" || typeof value.remote === "boolean") {
                    let ary = [];
                    if (!value.download)
                        ary.push("nodownload");
                    if (!value.remote)
                        ary.push("noremoteplayback");
                    this._attr({ controlsList: ary.join(" ") });
                }
                ;
            }
            ;
            return this;
        }
    });
    _def(_this, _display, {
        value: function (value = "") {
            const isStr = typeof value === "string" && value.trim().length > 0;
            if (isStr)
                this._style({ display: value });
            return this;
        }
    });
    let scrollTimer;
    _def(_this, scrollToX, {
        value: function (value, next) {
            if (typeof value !== "number") {
                return this;
            }
            ;
            const clientWidth = this.clientWidth;
            const scrollWidth = this.scrollWidth;
            let offsetEnd = scrollWidth - value < clientWidth ? scrollWidth - clientWidth : value;
            this.scrollTo({
                left: offsetEnd,
                behavior: "smooth"
            });
            return this;
            // if (typeof value !== "number") return;
            // clearInterval(scrollTimer);
            // let offsetStart = this.scrollLeft;
            // let offsetEnd = value;
            // let scrollMax = Math.abs(offsetEnd - offsetStart);
            // let move = Math.ceil(scrollMax / 100);
            // scrollTimer = setInterval(() => {
            //     if (offsetStart > offsetEnd && this.scrollLeft > offsetEnd)
            //         return this.scrollLeft -= move;
            //     else if (offsetStart < offsetEnd && this.scrollLeft < offsetEnd)
            //         return this.scrollLeft += move;
            //     clearInterval(scrollTimer);
            //     this.scrollLeft = offsetEnd;
            //     if (next != null) next();
            // }, 1);
            // return this;
        }
    });
    _def(_this, scrollToY, {
        value: function (value, next) {
            if (typeof value !== "number") {
                return this;
            }
            ;
            const clientHeight = this.clientHeight;
            const scrollHeight = this.scrollHeight;
            let offsetEnd = scrollHeight - value < clientHeight ? scrollHeight - clientHeight : value;
            this.scrollTo({
                top: offsetEnd,
                behavior: "smooth"
            });
            return this;
            // if (typeof value !== "number") return;
            // clearInterval(scrollTimer);
            // const clientHeight = this.clientHeight;
            // const scrollHeight = this.scrollHeight;
            // let offsetStart = this.scrollTop;
            // let offsetEnd = scrollHeight - value < clientHeight ? scrollHeight - clientHeight : value;
            // let scrollMax = Math.abs(offsetEnd - offsetStart);
            // let move = Math.ceil(scrollMax / 100);
            // scrollTimer = setInterval(() => {
            //     if (offsetStart > offsetEnd && this.scrollTop > offsetEnd)
            //         return this.scrollTop -= move;
            //     else if (offsetStart < offsetEnd && this.scrollTop < offsetEnd)
            //         return this.scrollTop += move;
            //     clearInterval(scrollTimer);
            //     this.scrollTop = offsetEnd;
            //     if (next != null) next();
            // }, 1);
            // return this;
        }
    });
    _def(_this, scrollToBottom, {
        value: function () {
            let offsetEnd = this.scrollHeight - this.clientHeight;
            this.scrollTo({
                top: offsetEnd,
                behavior: "smooth"
            });
            return this;
            // let counter = this.scrollTop;
            // let offsetEnd = this.scrollHeight - this.clientHeight;
            // clearInterval(scrollTimer);
            // scrollTimer = setInterval(() => {
            //     let scrollMax = offsetEnd - this.scrollTop;
            //     let move = Math.ceil(scrollMax / 6);
            //     counter += move;
            //     if (counter < offsetEnd) return this.scrollTop += move;
            //     clearInterval(scrollTimer);
            //     this.scrollTop = offsetEnd;
            // }, 6);
            // return this;
        }
    });
}(Object.defineProperty, Element.prototype));
function _child(value = [], before) {
    document.body._child(value, before);
}
;
function __child(value = []) {
    document.body.__child(value);
}
;
(function (_def, _this) {
    const $len = "$len", $childAll = "$childAll", $nodeAll = "$nodeAll", $text = "$text", $str = "$str", $html = "$html", _$ = "_$", _child = "_child";
    _def(_this, $len, {
        get: function () {
            return this.children.length;
        }
    });
    _def(_this, $childAll, {
        get: function () {
            return [...this.children];
        }
    });
    _def(_this, $nodeAll, {
        get: function () {
            return [...this.childNodes];
        }
    });
    _def(_this, $str, {
        get: function () {
            // let clone = this.cloneNode(true);
            let dom = "div"._();
            dom.appendChild(this);
            return dom.innerHTML;
        }
    });
    _def(_this, $html, {
        get: function () {
            // let clone = this.cloneNode(true);
            let dom = "div"._();
            dom.appendChild(this);
            return dom.innerHTML;
        }
    });
    _def(_this, _$, {
        value: function (deep = false) {
            return this.cloneNode(Boolean(deep));
        }
    });
    _def(_this, _child, {
        value: function (value = []) {
            if (typeof value === "string" && value.trim().length > 0 || typeof value === "number")
                this.appendChild(document.createTextNode(String(value)));
            else if (Array.isArray(value) && value.length > 1)
                value.forEach(e => {
                    if (typeof e === "string" && e.trim().length > 0 || typeof e === "number")
                        this.appendChild(document.createTextNode(String(e)));
                    else if (e != null)
                        this.appendChild(e);
                });
            else if (Array.isArray(value) && value.length === 1)
                this.appendChild(value[0]);
            else if (value != null)
                this.appendChild(value);
            return this;
        }
    });
}(Object.defineProperty, DocumentFragment.prototype));
(function (_def, _this) {
    const $jpg = "$jpg", $png = "$png", $base64 = "$base64", $blob = "$blob", _downloadJPG = "_downloadJPG", _downloadPNG = "_downloadPNG";
    _def(_this, $jpg, {
        value: function (size) {
            const isNumber = typeof size === "number";
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            const width = parseInt(this.width);
            const height = parseInt(this.height);
            if (!ctx)
                return;
            /**
             * size存在，且size < 最長邊寬
             */
            if (isNumber && size < Math.max(width, height)) {
                /**
                 * 圖片比例
                 */
                const ratio = width / height;
                /**
                 * 縮放比例
                 */
                const scale = size / Math.max(width, height);
                /**
                 * 調整大小
                 */
                canvas.width = Math.floor(ratio * height * scale);
                canvas.height = Math.floor(width / ratio * scale);
            }
            else {
                /**
                 * 原始圖片大小
                 */
                canvas.width = width;
                canvas.height = height;
            }
            ;
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
            return canvas.toDataURL("image/jpeg", 1.0);
        }
    });
    _def(_this, $png, {
        value: function (size) {
            const isNumber = typeof size === "number";
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            const width = parseInt(this.width);
            const height = parseInt(this.height);
            if (!ctx)
                return;
            /**
             * size存在，且size < 最長邊寬
             */
            if (isNumber && size < Math.max(width, height)) {
                /**
                 * 圖片比例
                 */
                const ratio = width / height;
                /**
                 * 縮放比例
                 */
                const scale = size / Math.max(width, height);
                /**
                 * 調整大小
                 */
                canvas.width = Math.floor(ratio * height * scale);
                canvas.height = Math.floor(width / ratio * scale);
            }
            else {
                /**
                 * 原始圖片大小
                 */
                canvas.width = width;
                canvas.height = height;
            }
            ;
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
            return canvas.toDataURL("image/png", 1.0);
        }
    });
    _def(_this, $base64, {
        value: function (mime = "image/jpeg") {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            if (!ctx)
                return;
            canvas.width = this.width;
            canvas.height = this.height;
            ctx.drawImage(this, 0, 0);
            return canvas.toDataURL(mime, 1.0);
        }
    });
    _def(_this, $blob, {
        value: function (mime = "image/jpeg") {
            const parts = this.$base64(mime).split(";base64,");
            const contentType = parts[0].split(':')[1];
            const raw = window.atob(parts[1]);
            const rawLength = raw.length;
            const uInt8Array = new Uint8Array(rawLength);
            for (let i = 0; i < rawLength; ++i) {
                uInt8Array[i] = raw.charCodeAt(i);
            }
            ;
            return new Blob([uInt8Array], {
                type: contentType
            });
        }
    });
    _def(_this, _downloadJPG, {
        value: function (filename) {
            const name = (() => {
                if (this.src == null)
                    return "image.jpg";
                return this.src.substring(this.src.lastIndexOf("/") + 1);
            })();
            const link = "a"._();
            const url = URL.createObjectURL(this.$blob("image/jpeg"));
            link.href = url;
            link.download = filename == null ? name : filename;
            link._attr({ "type": "application/octet-stream" });
            document.body._child(link);
            link.click();
            link.$rm();
            URL.revokeObjectURL(url);
        }
    });
    _def(_this, _downloadPNG, {
        value: function (filename) {
            const name = (() => {
                if (this.src == null)
                    return "image.png";
                return this.src.substring(this.src.lastIndexOf("/") + 1);
            })();
            const link = "a"._();
            const url = URL.createObjectURL(this.$blob("image/png"));
            link.href = url;
            link.download = filename == null ? name : filename;
            link._attr({ "type": "application/octet-stream" });
            document.body._child(link);
            link.click();
            link.$rm();
            URL.revokeObjectURL(url);
        }
    });
}(Object.defineProperty, Image.prototype));
;
;
;
;
;
;
;
;
;
;
;
class $listener {
    observer;
    constructor(body) {
        body = body ?? {};
        this.observer = new IntersectionObserver(entries => {
            entries.forEach((e) => {
                if (!e.isIntersecting)
                    return;
                if (body.do instanceof Function)
                    body.do(e.target);
            });
        });
        if (typeof body.selector === "string") {
            [].slice.call(document.querySelectorAll(body.selector)).forEach(e => this.observe(e));
        }
        ;
    }
    ;
    observe(dom) {
        this.observer.observe(dom);
    }
    ;
    unobserve(dom) {
        this.observer.unobserve(dom);
    }
    ;
}
;
(function (_def, _this) {
    const $obj = "$obj", $len = "$len", $$mt = "$$mt", _ = "_", $ = "$";
    _def(_this, $obj, {
        get: function () {
            return Object.fromEntries(this);
        }
    });
    _def(_this, $len, {
        get: function () {
            return this.size;
        }
    });
    _def(_this, $$mt, {
        get: function () {
            return this.size === 0;
        }
    });
    _def(_this, _, {
        value: function (key, value) {
            const map = new Map(this);
            map.set(key, value);
            return map;
        }
    });
    _def(_this, $, {
        value: function (key) {
            return this.get(key);
        }
    });
}(Object.defineProperty, Map.prototype));
(function (_def, _this) {
    const $str = "$str", $num = "$num", $date = "$date", $gone = "$gone", $loop = "$loop", $y = "$y", $M = "$M", $MM = "$MM", $D = "$D", $DD = "$DD", $d = "$d", $dd = "$dd", $h = "$h", $hh = "$hh", $m = "$m", $mm = "$mm", $s = "$s", $ss = "$ss";
    _def(_this, $str, {
        get: function () {
            return String(this).toString();
        }
    });
    _def(_this, $num, {
        get: function () {
            return Number(this);
        }
    });
    _def(_this, $date, {
        get: function () {
            return new Date(this * 1000);
        }
    });
    _def(_this, $gone, {
        get: function () {
            const nowDate = Math.floor(Date.now() / 1000);
            const date = parseInt(this);
            const gone = Math.abs(nowDate - date);
            const isGone = nowDate > date;
            const front = isGone ? "" : "還有";
            const tail = isGone ? "前" : "";
            if (gone >= 86400 * 365) {
                return `${front}${Math.floor(gone / (86400 * 365))}年${tail}`;
            }
            else if (gone >= 86400 * 30) {
                return `${front}${Math.floor(gone / (86400 * 30))}個月${tail}`;
            }
            else if (gone >= 86400 * 7) {
                return `${front}${Math.floor(gone / (86400 * 7))}週${tail}`;
            }
            else if (gone >= 86400) {
                return `${front}${Math.floor(gone / 86400)}天${tail}`;
            }
            else if (gone >= 3600) {
                return `${front}${Math.floor(gone / 3600)}小時${tail}`;
            }
            else if (gone >= 60) {
                return `${front}${Math.floor(gone / 60)}分鐘${tail}`;
            }
            else {
                return "剛剛";
            }
            ;
        }
    });
    _def(_this, $loop, {
        value: function (value) {
            if (value instanceof Function) {
                for (let i = 0; i < this; i++) {
                    value(i);
                }
                ;
            }
            ;
        }
    });
    _def(_this, $y, {
        value: function () {
            const sec = parseInt(this);
            return sec.$date.getFullYear();
        }
    });
    _def(_this, $M, {
        value: function () {
            const sec = parseInt(this);
            return sec.$date.getMonth() + 1;
        }
    });
    _def(_this, $MM, {
        value: function () {
            const sec = parseInt(this);
            const num = sec.$date.getMonth() + 1;
            return num < 10 ? `0${num}` : String(num);
        }
    });
    _def(_this, $D, {
        value: function () {
            const sec = parseInt(this);
            return sec.$date.getDate();
        }
    });
    _def(_this, $DD, {
        value: function () {
            const sec = parseInt(this);
            const num = sec.$date.getDate();
            return num < 10 ? `0${num}` : String(num);
        }
    });
    _def(_this, $d, {
        value: function () {
            const sec = parseInt(this);
            return sec.$date.getDay();
        }
    });
    _def(_this, $dd, {
        value: function () {
            const sec = parseInt(this);
            const num = sec.$date.getDay();
            if (num === 0) {
                return "星期日";
            }
            else if (num === 1) {
                return "星期一";
            }
            else if (num === 2) {
                return "星期二";
            }
            else if (num === 3) {
                return "星期三";
            }
            else if (num === 4) {
                return "星期四";
            }
            else if (num === 5) {
                return "星期五";
            }
            else if (num === 6) {
                return "星期六";
            }
            else {
                return null;
            }
        }
    });
    _def(_this, $h, {
        value: function () {
            const sec = parseInt(this);
            return sec.$date.getHours();
        }
    });
    _def(_this, $hh, {
        value: function () {
            const sec = parseInt(this);
            const num = sec.$date.getHours();
            return num < 10 ? `0${num}` : String(num);
        }
    });
    _def(_this, $m, {
        value: function () {
            const sec = parseInt(this);
            return sec.$date.getMinutes();
        }
    });
    _def(_this, $mm, {
        value: function () {
            const sec = parseInt(this);
            const num = sec.$date.getMinutes();
            return num < 10 ? `0${num}` : String(num);
        }
    });
    _def(_this, $s, {
        value: function () {
            const sec = parseInt(this);
            return sec.$date.getSeconds();
        }
    });
    _def(_this, $ss, {
        value: function () {
            const sec = parseInt(this);
            const num = sec.$date.getSeconds();
            return num < 10 ? `0${num}` : String(num);
        }
    });
}(Object.defineProperty, Number.prototype));
(function (_def, _this) {
    const $map = "$map", $keys = "$keys", $vals = "$vals", $ = "$", $$ = "$$", $forEach = "$forEach";
    _def(_this, $map, {
        get: function () {
            const map = new Map();
            for (const key in this) {
                if (this.hasOwnProperty(key)) {
                    map.set(key, this[key]);
                }
                ;
            }
            ;
            return map;
        }
    });
    _def(_this, $keys, {
        get: function () {
            return Object.keys(this);
        }
    });
    _def(_this, $vals, {
        get: function () {
            return Object.values(this);
        }
    });
    _def(_this, $, {
        value: function (key) {
            /**
             * 未提供 key
             */
            if (key == null) {
                return null;
            }
            else {
                return this[String(key)];
            }
            ;
        }
    });
    _def(_this, $$, {
        value: function (key) {
            /**
             * 未提供 key
             */
            if (key == null) {
                return false;
            }
            /**
             * value 不存在
             */
            else if (this[String(key)] == null) {
                return false;
            }
            else {
                return true;
            }
            ;
        }
    });
    _def(_this, $forEach, {
        value: function (value) {
            if (value instanceof Function) {
                for (const key in this) {
                    if (this.hasOwnProperty(key)) {
                        value(key, this[key]);
                    }
                    ;
                }
                ;
            }
            ;
        }
    });
}(Object.defineProperty, Object.prototype));
(function (_def, _this, _document) {
    const $camel = "$camel", $len = "$len", $num = "$num", $json = "$json", $img = "$img", $html = "$html", $$json = "$$json", $$mt = "$$mt", __ = "__", $ary = "$ary", $regexp = "$regexp", $$200 = "$$200", $req = "$req", $$ = "$$", $fit = "$fit", $en = "$en", $de = "$de", $copy = "$copy";
    _def(_this, $camel, {
        get: function () {
            // 使用正則表達式將連字符轉換為空格
            let spacedStr = this.toString().replace(/-+/g, ' ');
            // 將每個單詞的首字母轉換為大寫
            let camelCaseStr = spacedStr.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
                return index === 0 ? word.toLowerCase() : word.toUpperCase();
            });
            // 移除空格
            return camelCaseStr.replace(/\s+/g, '');
        }
    });
    _def(_this, $len, {
        get: function () {
            return this.toString().length;
        }
    });
    _def(_this, $num, {
        get: function () {
            const _this = this.toString();
            const num = Number(_this.replace(/\,/g, ""));
            /**
             * 結果為NaN -> 回傳undefined
             */
            if (isNaN(num)) {
                console.error(`${_this}: 非數字.`);
                return undefined;
            }
            /**
             * 結果為數字 -> 回傳結果
             */
            else {
                return num;
            }
            ;
        }
    });
    _def(_this, $json, {
        get: function () {
            const _this = this.toString();
            try {
                /**
                 * 可解析為JOSN -> 回傳JOSN
                 */
                return JSON.parse(_this);
            }
            catch (err) {
                console.error(`${_this}: 非JSON.`);
                /**
                 * 不可解析為JOSN -> 回傳undefined
                 */
                return undefined;
            }
            ;
        }
    });
    _def(_this, $html, {
        get: function () {
            const obj = {
                " ": '&nbsp;',
                "<": '&lt;',
                ">": '&gt;',
                // "&": '&amp;',
                '"': '&quot;',
                "'": '&apos;'
            };
            // return this.toString().replace(/[\<\>\&\"\']/g, (e: string) => obj[e]);
            return this.toString().replace(/[  \<\>\"\']/g, (e) => obj[e]);
        }
    });
    _def(_this, $img, {
        get: async function () {
            return new Promise((cb, rej) => {
                let img = new Image();
                img.src = this.toString();
                img.crossOrigin = "anonymous";
                img.onload = () => {
                    cb(img);
                };
                img.onerror = rej;
            });
        }
    });
    _def(_this, $$json, {
        get: function () {
            try {
                JSON.parse(this.toString());
                return true;
            }
            catch (err) {
                return false;
            }
            ;
        }
    });
    _def(_this, $$mt, {
        get: function () {
            return this.toString().trim().length === 0;
        }
    });
    // ---------- 分割線 ----------
    _def(_this, __, {
        value: function (target = "", replace = "") {
            return this.toString().replace(target instanceof RegExp ? target : String(target), String(replace));
        }
    });
    _def(_this, $ary, {
        value: function (target = "") {
            return this.toString().split(target instanceof RegExp ? target : String(target));
        }
    });
    // 內文搜索需搭配 .__(/(\?|\.|\+|\*)/g, "\\$1")
    _def(_this, $regexp, {
        value: function (flags = "") {
            return new RegExp(this.toString(), String(flags));
        }
    });
    let $$reqSending = false;
    _def(_this, $req, {
        value: function (body = {}) {
            if (body == null)
                return;
            const link = this.toString();
            const isJsonObject = typeof body.json === "object" && body.json != null && !Array.isArray(body.json);
            let reqBody;
            if (body.files && body.tag) {
                reqBody = new FormData();
                if (isJsonObject)
                    Object.keys(body.json).forEach(e => reqBody.append(e, body.json[e]));
                body.files.forEach((e) => reqBody.append(body.tag, e));
            }
            else if (isJsonObject) {
                reqBody = JSON.stringify(body.json);
            }
            return new Promise((res, rej) => {
                if ($$reqSending)
                    return rej("等待請求完成.");
                $$reqSending = true;
                const httpReq = new XMLHttpRequest();
                httpReq.open(body.method ?? "GET", link);
                if (body.header)
                    Object.keys(body.header).forEach((e) => {
                        httpReq.setRequestHeader(e, body.header[e]);
                    });
                httpReq.withCredentials = Boolean(body.credentials) ?? false;
                httpReq.onreadystatechange = () => {
                    switch (httpReq.readyState) {
                        case 1: /* opened */
                        case 2: /* received */
                        case 3: /* loading */
                            break;
                        case 4: /* done */
                            $$reqSending = false;
                            const txt = httpReq.responseText;
                            if (/^(4|5)[0-9]{2}/.test(String(httpReq.status))) {
                                return rej(txt);
                            }
                            ;
                            try {
                                res(JSON.parse(txt), httpReq.status);
                            }
                            catch (err) {
                                res(txt, httpReq.status);
                            }
                            ;
                    }
                    ;
                };
                httpReq.send(reqBody);
            });
        }
    });
    _def(_this, $fit, {
        value: function (regex) {
            /**
             * 參數不存在 -> 回傳 null
             */
            if (regex == null) {
                return undefined;
            }
            ;
            return this.toString().match(regex);
        },
    });
    _def(_this, $en, {
        value: function (component) {
            if (component == null || !component)
                return encodeURI(this.toString());
            return encodeURIComponent(this.toString());
        },
    });
    _def(_this, $de, {
        value: function (component) {
            if (component == null || !component)
                return decodeURI(this.toString());
            return decodeURIComponent(this.toString());
        },
    });
    _def(_this, $copy, {
        value: async function () {
            try {
                await navigator.clipboard.writeText(this.toString());
            }
            catch (err) {
                console.error(err);
            }
            ;
        },
    });
    _def(_this, $$, {
        value: function (equalTo) {
            const boolean = typeof equalTo === "string" ? equalTo.trim() === this.toString().trim() :
                equalTo instanceof RegExp ? equalTo.test(this.toString()) : this.toString().trim().length > 0;
            return boolean;
        },
    });
    _def(_this, $$200, {
        value: async function () {
            return new Promise((res, rej) => {
                const img = new Image();
                img.src = this.toString();
                img.onload = (e) => res(e);
                img.onerror = (e) => rej(e);
            });
        }
    });
    // Url
    const $url = "$url", $queryAll = "$queryAll", _history = "_history", __history = "__history", query_ = "query_", query__ = "query__", _query = "_query", __query = "__query", $query = "$query";
    _def(_this, $url, {
        get: function () {
            try {
                return new URL(this.toString());
            }
            catch (e) {
                return new URL(`${location.origin}${this.toString()}`);
            }
            ;
        }
    });
    _def(_this, $queryAll, {
        get: function () {
            return this.toString().$url.$queryAll;
        }
    });
    [_history, __history, query_, query__, _query, __query, $query].forEach(e => _def(_this, e, {
        value: function () {
            const url = this.toString().$url;
            return url[e].apply(url, Object.values(arguments));
        }
    }));
    // Element
    const _fa = "_fa", $ = "$", $all = "$all", $init = "$init", _ = "_";
    _def(_this, _fa, {
        get: function () {
            return `i.${this.toString().replace(/\s/, ".")}`._();
        }
    });
    _def(_this, $, {
        get: function () {
            if (this.toString().startsWith("#"))
                return document.getElementById(this.substring(1));
            else if (/[\.\[\]]/.test(this.toString()))
                return document.querySelector(this.toString());
            else
                return document.getElementById(this.toString()) ?? document.querySelector(this.toString());
        }
    });
    _def(_this, $all, {
        get: function () {
            return document.querySelectorAll(this.toString());
        }
    });
    _def(_this, _, {
        value: function (val0, val1) {
            const svgRegexp = /^(svg|rect|circle|ellipse|line|polyline|polygon|path|text|tspan|g|defs|symbol|image|use|clipPath|mask|linearGradient|radialGradient)$/i;
            const tagRegexp = /^\w+(?=[\#\.]*)/i;
            const idRegexp = /\#([\w_-]+)?/i;
            const classRegexp = /\.([\w_-]+)?/gi;
            const fitTag = tagRegexp.test(this) ? this.match(tagRegexp)[0] : null;
            const fitSvg = svgRegexp.test(fitTag);
            const isTemp = this.toString() === "temp";
            const isTxt = this.toString() === "txt";
            const dom = isTemp ? document.createDocumentFragment() :
                isTxt ? document.createTextNode(String(val0)) :
                    fitSvg ? _document.createElementNS("http://www.w3.org/2000/svg", fitTag) : _document.createElement(fitTag);
            const classList = (classRegexp.test(this) ? this.match(classRegexp) : []);
            const idMatch = this.match(idRegexp);
            if (isTxt)
                return dom;
            if (idMatch) {
                dom.id = idMatch[1];
            }
            ;
            classList.forEach((e) => dom.classList.add(e.replace(/^\./, "")));
            const check = _document[$init];
            if (!check) {
                return dom;
            }
            ;
            const isSpanSvg = /^span\.svg/i.test(this);
            if (isSpanSvg && $SVG_Observer) {
                $SVG_Observer.observe(dom);
            }
            ;
            if (val0 == null && val1 != null) {
                [val0, val1] = [val1, null];
            }
            ;
            let attrs;
            let children;
            if (val0 != null && val1 != null) {
                [attrs, children] = [val0, val1];
            }
            else if (val1 == null) {
                if (typeof val0 === "string" || typeof val0 === "number" || Array.isArray(val0)) {
                    children = val0;
                }
                else {
                    attrs = val0;
                }
                ;
            }
            else if (val0 == null) {
                return dom;
            }
            ;
            const isInput = fitTag === "input";
            const isTextarea = fitTag === "textarea";
            if (isInput || isTextarea) {
                const placeholderRegexp = /\s(.+)/i;
                const fitPlaceholder = this.match(placeholderRegexp);
                dom.placeholder = fitPlaceholder ? fitPlaceholder[1] : "";
                const typeRegexp = /\@(\w+)/i;
                const fitType = this.match(typeRegexp);
                if (isInput)
                    dom.type = fitType ? fitType[1] : "test";
            }
            ;
            if (typeof attrs === "object" && attrs != null) {
                Object.keys(attrs).forEach((e) => {
                    const value = attrs[e];
                    if (["value", "innerText", "innerHTML", "textContent", "contentEditable",].includes(e))
                        dom[e] = value;
                    else if (["color", "backgroundColor"].includes(e))
                        dom.style[e] = value;
                    else if (e === "style")
                        Object.keys(value).forEach((e) => dom.style[e] = value[e]);
                    else if (e === "lazyload") {
                        if ($Lazy_Observer) {
                            dom.classList.add("lazyload");
                            dom.setAttribute('data-src', value);
                            $Lazy_Observer.observe(dom);
                        }
                        else
                            dom.src = value;
                    }
                    else if (value != null)
                        dom.setAttribute(e, value);
                });
            }
            ;
            if (children != null) {
                const isString = typeof children === "string";
                const isNumber = typeof children === "number";
                const isArray = Array.isArray(children);
                if (isString || isNumber) {
                    const value = String(children);
                    const isImg = fitTag === "img";
                    const isSource = fitTag === "source";
                    if (isImg) {
                        dom.src = value;
                    }
                    else if (isSource) {
                        dom.src = value;
                    }
                    else {
                        dom.innerHTML = value;
                    }
                    ;
                }
                else if (isArray)
                    children.forEach((e) => {
                        const isString = typeof e === "string";
                        const isNumber = typeof e === "number";
                        const isElement = e instanceof Element;
                        if (isString || isNumber) {
                            if (isTemp) {
                                dom.appendChild(document.createTextNode(String(e)));
                            }
                            else {
                                dom.innerHTML += e;
                            }
                        }
                        else if (isElement) {
                            dom.appendChild(e);
                        }
                        ;
                    });
            }
            ;
            return dom;
        }
    });
}(Object.defineProperty, String.prototype, document));
let $SVG_Observer;
function _SVGListener() {
    let ary = [].slice.call(document.querySelectorAll("span.svg"));
    $SVG_Observer = new IntersectionObserver(entries => {
        entries.forEach((e) => {
            if (!e.isIntersecting)
                return;
            let elm = e.target;
            let path = elm.getAttribute("src") ?? "";
            if (path.length)
                path.$$200().then((r) => {
                    $SVG_Observer.unobserve(elm);
                    fetch(path).then(async (r) => {
                        let txt = await r.text();
                        let div = document.createElement("div");
                        div.innerHTML = txt;
                        let svg = div.children[0];
                        elm.classList.forEach(e => svg.classList.add(e));
                        svg.id = elm.id;
                        svg.onclick = elm.onclick;
                        if (elm.parentElement instanceof HTMLElement)
                            elm.parentElement.insertBefore(svg, elm);
                        elm.remove();
                    });
                }).catch((err) => {
                    $SVG_Observer.unobserve(elm);
                    elm.innerHTML = "☒";
                });
        });
    });
    ary.forEach(e => $SVG_Observer.observe(e));
}
;
let $Lazy_Observer;
function _LazyListener() {
    const ary = [].slice.call(document.querySelectorAll("img.lazyload"));
    $Lazy_Observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((e) => {
            const dom = e.target;
            if (e.isIntersecting) {
                // if (dom.classList.contains("out") && dom.src != null) return dom.classList.remove("out");
                const parent = dom.parentElement;
                const src = dom.dataset.src ?? "";
                const isFit = dom.$$class("fit");
                const isFitP = dom.$$class("fit-p");
                $Lazy_Observer.unobserve(dom);
                dom.src = src;
                dom.classList.remove("lazyload");
                if ((isFit || isFitP) && src.length > 0)
                    src.$$200().then((r) => {
                        if (isFit) {
                            parent.style["aspect-ratio"] = `${r.target.$nw} / ${r.target.$nh}`;
                        }
                        ;
                        if (isFitP) {
                            parent.style["aspect-ratio"] = `${r.target.$nw} / ${r.target.$nh}`;
                        }
                        ;
                    }).catch((err) => {
                    });
            }
            else {
                // dom.classList.add("out");
                // dom.src = (dom.dataset.src ?? "").split(/\?/)[0] + "?s=1&q=1";
            }
        });
    });
    ary.forEach(e => $Lazy_Observer.observe(e));
}
;
// 延伸
function $(value) {
    return typeof value === "string" && value.trim().length > 0 ? value.$ : undefined;
}
;
function $sel(value) {
    return document.body.querySelector(value);
}
;
function $selAll(value) {
    return document.body.querySelectorAll(value);
}
;
function $url(value) {
    return typeof value === "string" && value.trim().length > 0 ? value.$url : location.href.$url;
}
;
(function (_def, _this) {
    const $queryAll = "$queryAll";
    const _history = "_history";
    const __history = "__history";
    const _query = "_query";
    const __query = "__query";
    const query_ = "query_";
    const query__ = "query__";
    const $query = "$query";
    _def(_this, $queryAll, {
        get: function () {
            const params = new URLSearchParams(this.search);
            const map = new Map();
            params.forEach((key, val) => {
                map.set(key, val);
            });
            return Object.fromEntries(map);
        }
    });
    _def(_this, _history, {
        value: function (title) {
            const href = this.href;
            $history.push(href);
            history.pushState(null, "", href);
            if (typeof title === "string" && title.trim().length > 0) {
                document.title = title;
            }
            ;
            return this;
        }
    });
    _def(_this, __history, {
        value: function (title) {
            const href = this.href;
            $history.pop();
            $history.push(href);
            history.replaceState(null, "", href);
            if (typeof title === "string" && title.trim().length > 0) {
                document.title = title;
            }
            ;
            return this;
        }
    });
    _def(_this, query_, {
        value: function (value) {
            let url = this.origin + this.pathname;
            let obj = this.$queryAll;
            if (typeof value === "string" && value.trim().length > 0) {
                obj[value] = null;
            }
            else if (Array.isArray(value)) {
                value.forEach(e => {
                    obj[String(e)] = null;
                });
            }
            ;
            Object.keys(obj).forEach((e, i) => {
                url += `${i == 0 ? "?" : "&"}${e}=${obj[e]}`;
            });
            return new URL(url);
        }
    });
    _def(_this, query__, {
        value: function () {
            return new URL(this.origin + this.pathname);
        }
    });
    _def(_this, _query, {
        value: function (value) {
            let url = this.origin + this.pathname;
            let obj = this.$queryAll;
            if (typeof value === "object" && value != null && !Array.isArray(value)) {
                Object.keys(value).forEach(e => obj[e] = value[e]);
            }
            ;
            Object.keys(obj).forEach((e, i) => url += `${i == 0 ? "?" : "&"}${e}=${obj[e]}`);
            return new URL(url);
        }
    });
    _def(_this, __query, {
        value: function (value) {
            return this.query__()._query(value);
        }
    });
    _def(_this, $query, {
        value: function (key) {
            return this.searchParams.get(key);
        }
    });
}(Object.defineProperty, URL.prototype));
