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
        value: function (key?: string, value?: string) {
            key = key?.__(/(\?|\.|\+|\*)/g, "\\$1");
            const newValue = this.replace(`{{\\s*?${key}\\s*?}}`.$regexp("i"), value);
            return newValue == null ? "" : newValue;
        }
    });

}(Object.defineProperty, String.prototype));

class PD {

    dom: any;
    path: any;
    data: any;
    event: any;
    done: boolean = false;

    constructor(body: { [key: string]: any } = {}) {
        if ($Lazy_Observer == null) {
            _LazyListener();
        };

        if ($SVG_Observer == null) {
            _SVGListener();
        };

        // // 避免數字初始化為 undefined
        // Object.keys(body.data ?? {}).forEach(e => {
        //     if (typeof body.data[e] === "number") body.data[e] = body.data[e].$str;
        // });
        const dom = typeof body.id === "string" ? `#${body.id}`.$ : null;
        if (!(dom instanceof Element)) {
            return;
        };

        this.dom = dom;
        this.path = {};
        this.data = body.data;
        this.event = body.event ?? {};
        this.initChild(dom, body.data ?? {});

        let timer = setInterval(() => {
            if (!this.done) {
                return;
            };

            clearInterval(timer);

            if (body.next == null) {
                return;
            };

            body.next(this.dom);
        }, 100);
    };

    dataListener(key: string, item: any, cb: (newValue: any) => void) {
        let value = item[key];

        if (value != null && typeof value === "object" && value != null && !Array.isArray(value)) {
            value.$keys.forEach((key: string) => {
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
        };
    };

    // 針對 [For] 子迴圈的陣列傳遞使用 isChild 判斷
    initChild(dom: Element, data: { [key: string]: any } = {}, type: any = {}) {
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
        const check = (_document as any)[$init];

        if (!check) {
            return dom;
        };

        const setPath = async (dom: Element, data: { [key: string]: any } = {}, type: any = {}) => {
            const parent = dom.$parent();
            const attrs = dom.$attrAll;
            const target = attrs[_PATH];

            if (parent == null || target == null) {
                return;
            };

            if (this.path[target] == null) {
                this.path[target] = parent;
            }
            else if (this.path[target] == parent) {
                return;
            };

            fetch(target).then(async r => {
                const txt = await r.text();

                // 添加內容至區塊 (有 script 時純添加，不執行)
                "div"._(txt).$nodeAll.forEach(e => dom._child(e));

                // 分析內容 (不包含 PDView 時，直接渲染內容)
                if (!txt.$$(/new\s+\$dom/)) this.initChild(dom, data, type);

                // 移出內容 (有 script 時執行)
                dom.$nodeAll.forEach(e => {
                    const isScript = e instanceof HTMLScriptElement;

                    // 內容是 script, 移動至 body 區塊的底部
                    if (isScript) document.body._child("script"._(e.$));

                    // 移動內容至區塊的前方
                    else parent._child(e, dom);
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
        const setFor = (dom: Element, data: { [key: string]: any } = {}, type: any = {}) => {
            const domParent = dom.$parent(0);
            const attrVal = (dom.$attr(_FOR) ?? "").trim();;

            /**
             * 父元素不存在
             * 迴圈 [:for] 不存在
             *  
             * -> 結束
             */
            if (domParent == null || attrVal.$$mt) {
                return;
            };

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

            const dataVal = fitValue(val2, data, (newValue: any) => {
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
                dataVal.forEach((item: any, index: number) => {
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
                        item.$keys.forEach((key: string) => {
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
                    };
                });
            }
            else if (typeof dataVal === "object" && dataVal != null) {
                dataVal.$keys.forEach((subKey: string) => {
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
            };
            /**
             * 插入最終元素
             * domNext存在 -> 插入domClone至domNext前方
             * domNext不存在 -> 添加domClone
             */
            domParent._child(domTemp, domNext);
        };

        const setIf = (dom: Element, data: { [key: string]: any } = {}, type: any = {}) => {
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
            };

            let ary = [dom];
            let domNext = dom.$next(0);
            let isElseIf = domNext?.$attr(_ELSE_IF) != null;
            let isElse = domNext?.$attr(_ELSE) != null;

            while (domNext != null && (isElseIf || isElse)) {
                ary.push(domNext);
                domNext = domNext.$next(0);
                isElseIf = domNext?.$attr(_ELSE_IF) != null;
                isElse = domNext?.$attr(_ELSE) != null;
            };

            const domTag = $key(20);
            /**
             * 儲存初始 -> 用於重新渲染
             */
            const domDemo = "temp"._(
                ary._$(e => e._$(true)._attr({ "dom-tag": domTag }))
            );

            let isFit = false;

            ary.forEach(e => {
                e._attr({ "dom-tag": domTag });

                /**
                 * 已有符合的，後續一律移除
                 */
                if (isFit) {
                    return e.$rm();
                };

                const attrVal = e.$attr(_IF) || e.$attr(_ELSE_IF) || e.$attr(_ELSE);
                const isElse = e.$attr(_ELSE) != null;
                /**
                 * val0 [><=]* val1
                 */
                const val0 = attrVal?.$ary(regexCompare).$(0);
                const val1 = attrVal?.$ary(regexCompare).$(1);
                const compare = attrVal?.match(regexCompare)?.$(0).trim();
                const dataVal = fitValue(val0, data, (newValue: any) => {
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
                    };
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
                    };
                };

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
        const setModel = (dom: Element, data: { [key: string]: any } = {}) => {
            const parent = dom.$parent();
            const attrModel = dom.$attr(_MODEL)?.trim();
            dom.attr_(_MODEL);

            const dataVal = fitValue(attrModel, data, (newValue: any) => {
                (dom as HTMLInputElement).value = newValue;
            });

            if (parent == null || attrModel == null || attrModel.$$mt) return;

            const isInput = dom instanceof HTMLInputElement;
            const isTextarea = dom instanceof HTMLTextAreaElement;
            const isSelect = dom instanceof HTMLSelectElement;

            if (isInput || isTextarea)
                dom.addEventListener("keyup", (e) => {
                    (data as any)[attrModel] = (e.target as HTMLInputElement).value;
                }),
                    dom.addEventListener("change", (e) => {
                        (data as any)[attrModel] = (e.target as HTMLInputElement).value;
                    });
            else if (isSelect)
                dom.addEventListener("change", (e) => {
                    (data as any)[attrModel] = (e.target as HTMLInputElement).value;
                });
        };

        /**
         * 
         * 設定Attribute
         * 
         */
        const setAttr = (dom: Element, data: { [key: string]: any } = {}) => {
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

            if (attrTagAry.$$mt) return;

            attrTagAry.forEach(e => {
                const attrVal = (dom.$attr(e) ?? "").trim();
                const newValue = fitValue(attrVal, data, (newValue: any) => {
                    /**
                     * 所有符合domTag的項目
                     */
                    const ary = document.body.$selAll(`*[dom-tag='${domTag}']`);

                    if (ary.$$mt) return;

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

                function setAttribute(dom: Element, newValue: string = "") {
                    if (e === _ID) {
                        dom.id = newValue;
                    }
                    else if (e === _CLASS) {
                        dom._class(newValue);
                    }
                    else if (e === _SRC) {
                        (dom as HTMLImageElement).src = newValue;
                    }
                    else if (e === _ALT) {
                        (dom as HTMLImageElement).alt = newValue;
                    }
                    else if (e === _HREF) {
                        (dom as HTMLLinkElement).href = newValue;
                    }
                    else if (e === _HTML) {
                        dom.innerHTML = newValue;
                    }
                    else if (e === ":bgcolor") {
                        if (newValue == null || newValue.length < 1) {
                            (dom as HTMLElement).style.backgroundColor = attrVal;
                        }
                        else {
                            (dom as HTMLElement).style.backgroundColor = newValue;
                        };
                    }
                    else if (e === ":color") {
                        if (newValue == null || newValue.length < 1) {
                            (dom as HTMLElement).style.color = attrVal;
                        }
                        else {
                            (dom as HTMLElement).style.color = newValue;
                        };
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
                    };
                };
            });
        };

        /**
         * 
         * 設定Event
         * 
         */
        const setEvent = (dom: Element, data: { [key: string]: any } = {}, type: any = {}) => {
            (() => {
                const parent = dom.$parent();
                const ary = dom.$attrAll.$keys.filter(e => e.$$(/^@[\w]+$/));

                if (parent == null || ary.$$mt) return;

                ary.forEach(e => {
                    const event = e.__(/\@/, "on");
                    const method = dom.$attr(e);
                    dom.attr_(e);
                    if (method) {
                        (dom as any)[event] = this.event[method];
                    };
                });
            })();

            (() => {
                if (!Boolean(type.isFor)) return;

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

                        if (
                            (Boolean(type.isAry) && eventKey != val0) ||
                            (Boolean(type.isObj) && eventKey != val1)
                        ) return;

                        while ((methodAry ?? []).length > 0) {
                            eventObj = eventVal;
                            eventKey = methodAry?.$(0);
                            eventVal = eventObj[eventKey];
                            methodAry?.shift();
                        };

                        if (eventVal == null) return;

                        (dom as any)[event] = this.event[eventVal];
                    });
            })();
        };

        /**
         * 
         * 設定innerText
         * 
         */
        const setText = (dom: Element, data: { [key: string]: any } = {}, type: any = {}) => {
            const domTag = dom.$attr("dom-tag") || $key(20);

            dom._attr({ "dom-tag": domTag });

            const domDemo = dom._$(true);
            const domParent = dom.$parent();
            const domIndex = dom.$i;
            // 保留初始 innerHTML
            const init = dom.innerHTML
            // 偵測是否有符合 {{ any }} 的項目
            const isTarget = init.$$(/\{\{\s*([\w\.]+(\s*[\+\-\*\/\%]\s*[0-9]+)?)\s*\}\}/gi);
            // 父元素不存在或內容為空.__(/[\u00A0\u0020]/g, "\u0020");
            if (parent == null || !isTarget) return;

            dom.$nodeAll.
                filter(e => e.parentElement === dom && e.nodeType === Node.TEXT_NODE).
                forEach(e => {
                    e.textContent?.
                        // 符合 {{ any }} 的項目
                        match(/\{\{\s*([\w\.]+(\s*[\+\-\*\/\%]\s*[0-9]+)?)\s*\}\}/gi)?.
                        forEach(text => {
                            const target = text.match(textRegexp)?.$(1);
                            // {{ any }} 解析失敗
                            if (target == null) return;
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

        const setForAryText = (dom: Element, data: { [key: string]: any } = {}) => {
            const attr = dom.$attr(_FOR);
            const _val0 = attr?.match(val0Regexp)?.$(1);
            const _val1 = attr?.match(val1Regexp)?.$(1);

            let index = data[_val1];

            dom.attr_(_FOR);

            dom.$nodeAll.
                filter(e => e.parentElement === dom && e.nodeType === Node.TEXT_NODE).
                forEach(node => {
                    node.textContent?.match(/\{\{\s*([\w\.]+(\s*[\+\-\*\/\%]\s*[0-9]+)?)\s*\}\}/gi)?.forEach((text: string) => {
                        let target = text.match(textRegexp)?.$(1);

                        let ary = target.$ary(".")
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
                            };

                            target = target.__(/(\?|\.|\+|\*)/g, "\\$1");
                            let newValue = node.textContent?.__(`{{\\s*?${target}\\s*?}}`.$regexp("i"), val);

                            if (newValue == null) newValue = "";

                            node.textContent = newValue;
                        };

                        // {{ index }}
                        const operator = key.$ary(regexOperator).$(0);
                        const num = key.$ary(regexOperator).$(1);
                        if (operator === _val1) {
                            if (key == null) index = index;
                            else if (key.$$(/\+/)) index = index + (Number(num) || 0);
                            else if (key.$$(/\-/)) index = index - (Number(num) || 0);
                            else if (key.$$(/\*/)) index = index * (Number(num) || 0);
                            else if (key.$$(/\//)) index = index / (Number(num) || 0);
                            else if (key.$$(/\%/)) index = index % (Number(num) || 0);

                            target = target.__(/(\?|\.|\+|\*)/g, "\\$1");
                            let newValue = node.textContent?.__(`{{\\s*?${target}\\s*?}}`.$regexp("i"), index);

                            if (newValue == null) newValue = "";

                            node.textContent = newValue;
                        };
                    });
                });

            this.initChild(dom, data, { isFor: true });
        };

        const setForObjText = (dom: Element, data: { [key: string]: any } = {}) => {
            const _for = dom.$attr(_FOR);
            const _val0 = _for?.match(val0Regexp)?.$(1);
            const _val1 = _for?.match(val1Regexp)?.$(1);

            dom.attr_(_FOR);

            dom.$nodeAll
                .filter(e => e.parentElement === dom && e.nodeType === Node.TEXT_NODE)
                .forEach(node => {
                    node.textContent?.match(/\{\{\s*([\w\.]+(\s*[\+\-\*\/\%]\s*[0-9]+)?)\s*\}\}/gi)?.forEach((text: string) => {
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

                            if (newValue == null) newValue = "";

                            node.textContent = newValue;
                        };

                        // {{ value }}
                        if (key === _val1) {
                            while (ary.length > 0) {
                                obj = val;
                                key = ary.$(0);
                                val = obj[key];
                                ary.shift();
                            };

                            target = target.__(/(\?|\.|\+|\*)/g, "\\$1");
                            let newValue = node.textContent?.__(`{{\\s*?${target}\\s*?}}`.$regexp("i"), val == null ? "" : val);

                            if (newValue == null) newValue = "";

                            node.textContent = newValue;
                        };
                    });
                });

            this.initChild(dom, data, { isFor: true });
        };

        const fitValue = (name: string = "", data: { [key: string]: any } = {}, cb: (newValue: any) => void) => {
            if (name.$$mt) {
                return;
            };
            
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
            };

            /**
             * 監聽資料變動
             * 針對特定元素標籤更新
             */
            this.dataListener(targetKey, targetObj, (newValue: any) => {
                cb(newValue);
            });

            if (is_length) {
                return targetVal.length;
            };

            return targetVal;
        };

        this.done = false;

        dom.$childAll.forEach((childDom: Element) => {
            const attrs = childDom.$attrAll;

            if (childDom.$$class("lazyload")) $Lazy_Observer.observe(childDom);
            if (childDom.$$class("svg") && childDom.tagName === "SPAN") $SVG_Observer.observe(childDom)

            if (childDom.$parent() == null) return;
            if (attrs[_ELSE_IF] != null || attrs[_ELSE] != null) return;
            if (attrs[_PATH]) return setPath(childDom, data, type);
            if (attrs[_FOR]) return setFor(childDom, data, type);

            setIf(childDom, data, type);
            setModel(childDom, data);
            setAttr(childDom, data);
            setEvent(childDom, data, type);
            setText(childDom, data, type);
            this.initChild(childDom, data, type);
        });

        dom.class_("dom-temp")

        this.done = true;
    };
};