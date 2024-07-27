let vw = window.innerWidth;
let vh = window.innerHeight;
let $history = [location.href];
let $$android = (() => /android/i.test(navigator.userAgent))();
let $$ios = (() => /iphone|ipad/i.test(navigator.userAgent))();
let $$mobile = $$android || $$ios;
let $$desktop = !$$mobile;
let $timer: any[];

window.onresize = function () {
    [vw, vh] = [window.innerWidth, window.innerHeight];
};

function _timeout(action: () => void, msec: number) {
    let timer = setTimeout(function () {
        clearTimeout(timer);
        action();
    }, msec);
    $timer.push(timer);
    return timer;
};

function _interval(action: () => void, msec: number) {
    let timer = setInterval(function () {
        clearInterval(timer);
        action();
    }, msec);
    $timer.push(timer);
    return timer;
};

function timer_() {
    $timer.forEach(e => {
        clearTimeout(e);
        clearInterval(e);
    });
};

function __(value?: string) {
    return eval(typeof value === "string" ? value : "");
};

function $$(value?: any) {
    return value !== null && value !== void 0;
};

function $$null(value?: any) {
    return !$$(value);
};

function $$str(value?: any) {
    return typeof value === "string";
};

function $$num(value?: any) {
    return typeof value === "number";
};

function $$bool(value?: any) {
    return typeof value === "boolean";
};

function $$ary(value?: any) {
    return Array.isArray(Array);
};

function $$obj(value?: any) {
    return typeof value === "object" && value != null && !$$ary(value);
};

function $$map(value?: any) {
    return value instanceof Map;
};

function $$func(value?: any) {
    return value instanceof Function;
};

function $$elm(value?: any) {
    return value instanceof Element;
};

function $cookie(key?: string) {
    let $COOKIE = `${document.cookie};`;
    let regexp = new RegExp(`${key}=([^ ;]+)?`);
    let results = $COOKIE.match(regexp) ?? [];
    let result = results[results.length - 1];

    if (results.length && result != null) {
        result = decodeURIComponent(results[results.length - 1]);
        try {
            return JSON.parse(result);
        } catch (err) {
            return result;
        };
    }
    else {
        return null;
    }
};

function _cookie(name: string, body: any, expire: number) {
    const now = new Date();
    const sec = now.getTime();

    let date: Date;

    if (typeof name !== "string" || String(name || "").trim().length < 1) {
        return;
    };

    if (typeof body === "object" && body != null) {
        body = JSON.stringify(body).trim();
    }
    else {
        body = String(body).trim();
    };

    if (typeof expire === "number") {
        date = new Date(sec + expire * 1000);
    }
    else {
        date = new Date(sec + 3600 * 1000);
    };

    // 設定 cookie
    document.cookie = `${name}=${body}; expires=${date.toUTCString()}; path=/`;;
};

function $key(length?: number) {
    let chars = "abcdefghijklmnopurstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
    let total = chars.length;
    let ary = [];
    if (typeof length === "number") {
        for (let i = 0; i < length; i++) {
            ary.push(chars[Math.floor(Math.random() * total)]);
        };
    };
    return ary.join("");
};
function $file(file: any) {
    return new Promise((res, rej) => {
        if (!file) return () => rej();

        let reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = (e) => res(e);
        reader.onerror = (e) => rej(e);
    });
};
function $imageFromImageFile(file: any) {
    return new Promise((res, rej) => {
        if (!file) return () => rej();

        let reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = function (e) {
            if (!e.target) return () => rej();

            let img = new Image();

            img.src = String(e.target.result);
            img.onload = () => res(img);
            img.onerror = (e) => rej(e);
        };
    });
};
function $imageFromVideoFile(file: any) {
    return new Promise((res, rej) => {
        if (!file) return () => rej();

        let reader = new FileReader();

        reader.readAsArrayBuffer(file);
        reader.onload = function () {
            if (!reader.result) return () => rej();

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

                if (!ctx) return () => rej();

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
};
function $blob(base64: any, mimeType: string) {
    let bytes = window.atob(base64.split(',')[1]);
    let aryBuffer = new ArrayBuffer(bytes.length);
    let unit8Ary = new Uint8Array(aryBuffer);

    for (let i = 0; i < bytes.length; i++) {
        unit8Ary[i] = bytes.charCodeAt(i)
    };

    return new Blob([aryBuffer], { type: mimeType });
};

let _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _0_, _1_, _2_, _3_, _4_, _5_, _6_, _7_, _8_, _9_, __0, __1, __2, __3, __4, __5, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $0_, $1_, $2_, $3_, $4_, $5_, $6_, $7_, $8_, $9_, $_0, $_1, $_2, $_3, $_4, $_5;
let _chars = Array
    .from({ length: 26 }, (_, i) => String.fromCharCode(97 + i))
    .map((e, i) => {
        let isNum = i < 10;
        let is10 = i >= 10 && i < 20;
        let is20 = i >= 20;
        let str = String(i);
        let num = str.charAt(str.length - 1);
        let txt = (bool?: number) => `${bool ? "$" : "_"}${is20 ? "_" : ""}${num}${is10 ? "_" : ""} = "${bool ? e.toUpperCase() : e}";`;
        return `${txt(0)}${txt(1)}${isNum ? `_${e} = ${i};` : ""}`;
    })
    .join('');

(function (_document, _href) {
    __(_chars);

    (function (_0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, _nsbp, _lpar, _rpar, _lcub, _rcub, _dollar, _lowbar, _dash, _period, _colon, _semi, _ldquo, _excl, _commat, _percent) {
        let join = (ary: any[]) => ary.join("");
        let regexp = (str: string) => {
            var str = str;
            for (const e of "^$*+?!.[](){}|=:") {
                let regexp = new RegExp(`\\${e}`, "g");
                str = str.replace(regexp, `\\${e}`);
            };
            let regexp = new RegExp(str);
            return regexp;
        };
        let _currentScript = _c! + _u! + _r! + _r! + _e! + _n! + _t! + _S! + _c! + _r! + _i! + _p! + _t!;
        let _parentNode = _p! + _a! + _r! + _e! + _n! + _t! + _N! + _o! + _d! + _e!;
        let _removeChild = _r! + _e! + _m! + _o! + _v! + _e! + _C! + _h! + _i! + _l! + _d!;
        let _getAttribute = _g! + _e! + _t! + _A! + _t! + _t! + _r! + _i! + _b! + _u! + _t! + _e!;
        let _copyright = _c! + _o! + _p! + _y! + _r! + _i! + _g! + _h! + _t!;
        let _body = _b! + _o! + _d! + _y!;
        let _filter = _f! + _i! + _l! + _t! + _e! + _r!;
        let _test = _t! + _e! + _s! + _t!;
        let _length = _l! + _e! + _n! + _g! + _t! + _h!;
        let _addEventListener = _a! + _d! + _d! + _E! + _v! + _e! + _n! + _t! + _L! + _i! + _s! + _t! + _e! + _n! + _e! + _r!;
        let _removeEventListener = _r! + _e! + _m! + _o! + _v! + _e! + _E! + _v! + _e! + _n! + _t! + _L! + _i! + _s! + _t! + _e! + _n! + _e! + _r!;
        let _DOMContentLoaded = _D! + _O! + _M! + _C! + _o! + _n! + _t! + _e! + _n! + _t! + _L! + _o! + _a! + _d! + _e! + _d!;
        let _localhost = String(_l! + _o! + _c! + _a! + _l! + _h! + _o! + _s! + _t!);
        let _pardnchiu$github$io = _p! + _a! + _r! + _d! + _n! + _c! + _h! + _i! + _u! + _period! + _g! + _i! + _t! + _h! + _u! + _b! + _period! + _i! + _o!;
        let _pardn$io = _p! + _a! + _r! + _d! + _n! + _period! + _i! + _o!;
        let _pardn$ltd = _p! + _a! + _r! + _d! + _n! + _period! + _l! + _t! + _d!;
        let _joball$tw = _j! + _o! + _b! + _a! + _l! + _l! + _period! + _t! + _w!;
        let _ntu$edu$tw = _n! + _t! + _u! + _period! + _e! + _d! + _u! + _period! + _t! + _w!;
        let _mandala$com$tw = _m! + _a! + _n! + _d! + _a! + _l! + _a! + _period! + _c! + _o! + _m! + _period! + _t! + _w!;
        let _regex_localhost = regexp(_localhost);
        let _regex_ip = /[^3-689]{3}(\.[^1-9]){2}(\.[^2-90])/;
        let _regex_pardnchiu$github$io = regexp(_pardnchiu$github$io);
        let _regex_pardn$io = regexp(_pardn$io);
        let _regex_pardn$ltd = regexp(_pardn$ltd);
        let _regex_joball$tw = regexp(_joball$tw);
        let _regex_ntu$edu$tw = regexp(_ntu$edu$tw);
        let _regex_mandala$com$tw = regexp(_mandala$com$tw);
        let _createElement = _c! + _r! + _e! + _a! + _t! + _e! + _E! + _l! + _e! + _m! + _e! + _n! + _t!;
        let _style = _s! + _t! + _y! + _l! + _e!;
        let _innerHTML = _i! + _n! + _n! + _e! + _r! + _H! + _T! + _M! + _L!;
        let _head = _h! + _e! + _a! + _d!;
        let _appendChild = _a! + _p! + _p! + _e! + _n! + _d! + _C! + _h! + _i! + _l! + _d!;
        let _body_after = _b! + _o! + _d! + _y! + _colon! + _colon! + _a! + _f! + _t! + _e! + _r!;
        let _important = _nsbp! + _excl! + _i! + _m! + _p! + _o! + _r! + _t! + _a! + _n! + _t!;
        let _content = _c! + _o! + _n! + _t! + _e! + _n! + _t! + _colon! + _ldquo! + _R! + _e! + _n! + _d! + _e! + _r! + _e! + _d! + _nsbp! + _b! + _y! + _nsbp! + _P! + _D! + _E! + _x! + _t! + _e! + _n! + _s! + _i! + _o! + _n! + _dash! + _j! + _s! + _ldquo! + _important! + _semi!;
        let _position = _p! + _o! + _s! + _i! + _t! + _i! + _o! + _n! + _colon! + _f! + _i! + _x! + _e! + _d! + _important! + _semi!;
        let _zindex = _z! + _dash! + _i! + _n! + _d! + _e! + _x! + _colon! + _1! + _0! + _0! + _0! + _0! + _important! + _semi!;
        let _bottom = _b! + _o! + _t! + _t! + _o! + _m! + _colon! + _0! + _important! + _semi!;
        let _left = _l! + _e! + _f! + _t! + _colon! + _0! + _important! + _semi!;
        let _right = _r! + _i! + _g! + _h! + _t! + _colon! + _0! + _important! + _semi!;
        let _margin = _m! + _a! + _r! + _g! + _i! + _n! + _colon! + _0! + _nsbp! + _a! + _u! + _t! + _o! + _important! + _semi!;
        let _width = _w! + _i! + _d! + _t! + _h! + _colon! + _1! + _0! + _0! + _percent + _important! + _semi!;
        let _textAlign = _t! + _e! + _x! + _t! + _dash! + _a! + _l! + _i! + _g! + _n! + _colon! + _c! + _e! + _n! + _t! + _e! + _r! + _important! + _semi!;
        let _color = _c! + _o! + _l! + _o! + _r! + _colon! + _l! + _i! + _g! + _h! + _t! + _g! + _r! + _a! + _y! + _important! + _semi!;
        let _opacity = _o! + _p! + _a! + _c! + _i! + _t! + _y! + _colon! + _1! + _important! + _semi!;
        let _clear = _d! + _o! + _c! + _u! + _m! + _e! + _n! + _t! + _period! + _body! + _period! + _r! + _e! + _m! + _o! + _v! + _e! + _lpar! + _rpar!;
        let _$init = _dollar! + _i! + _n! + _i! + _t!;
        let _pardn_ltd = _P! + _a! + _r! + _d! + _n! + _nsbp! + _L! + _t! + _d!;
        let copyright = (_document as any)[_currentScript][_getAttribute](_copyright);
        let isInit = true;

        // let listener = (_document as any)[_addEventListener](_DOMContentLoaded, function () {
        //     (_document as any)[_removeEventListener](_DOMContentLoaded, listener);

        /* 用於檢查是否包含copyright */
        if (isInit) {
            isInit = false;
            // 檢查
            if (copyright && copyright === _pardn_ltd) {
                (_document as any)[_$init] = 1;


                if (([_regex_localhost, _regex_ip, _regex_joball$tw, _regex_pardnchiu$github$io, _regex_pardn$io, _regex_pardn$ltd, _regex_ntu$edu$tw, _regex_mandala$com$tw] as any)[_filter]((e: any) => e.test(_href))[_length] > 0) {
                    return;
                };

                let style = (_document as any)[_createElement](_style);
                (style as any)[_innerHTML] = join([_body_after, _lcub, _content, _position, _zindex, _bottom, _left, _right, _margin, _width, _textAlign, _color, _opacity, _rcub]);
                (_document as any)[_head][_appendChild](style);
            }
            else {
                (_document as any)[_currentScript][_parentNode][_removeChild]((_document as any)[_currentScript]);
            };

        };
        // });

    }(_a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _0_, _1_, _2_, _3_, _4_, _5_, _6_, _7_, _8_, _9_, __0, __1, __2, __3, __4, __5, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $0_, $1_, $2_, $3_, $4_, $5_, $6_, $7_, $8_, $9_, $_0, $_1, $_2, $_3, $_4, $_5, " ", "(", ")", "{", "}", "$", "_", "-", ".", ":", ";", "\"", "!", "@", "%"));
}(document, location.href));