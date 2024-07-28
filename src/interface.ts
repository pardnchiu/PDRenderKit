interface String {
    // getParams: any[];
    convertText: (key?: string, value?: string) => string;
};

interface String {
    $len: number;
    $num: number | undefined;
    $json: JSON | undefined;
    $html: string;
    $img: Promise<any>;
    $$json: boolean;
    $$mt: boolean;

    __: (target?: string | RegExp, replace?: string) => string;
    $ary: (target?: string | RegExp) => string[];
    $regexp: (flags?: string) => RegExp;
    $fit: (regex: RegExp) => string | string[] | undefined;
    $en: (component: Boolean) => String;
    $de: (component: Boolean) => String;
    $copy: () => any;
    $$: (equalTo?: String | RegExp) => boolean;
    $$200: () => Promise<any>;

    // URL 操作
    $url: URL;
    $queryAll: { [key: string]: string };

    $req: (body: { [key: string]: string }) => void;
    _history: (title?: string) => URL;
    __history: (title?: string) => URL;
    _query: (value?: { [key: string]: string }) => URL;
    __query: (value?: { [key: string]: string }) => URL;
    query_: (value?: string | string[]) => URL;
    query__: (value?: string | string[]) => URL;
    $query: (key?: string) => string;

    // Element 操作
    _fa: Element;
    $: Element;
    $all: Element[];
    
    _: (val0?: any, val1?: any) => Element;
};

interface Number {
    $str: string;
    $num: number;
    $date: Date;
    $y: number;
    $yy: string;
    $yyyy: number;
    $M: number;
    $MM: string;
    $D: number;
    $DD: string;
    $d: number;
    $dd: string;
    $H: number;
    $HH: string;
    $h: number;
    $hh: string;
    $a: string;
    $A: string;
    $m: number;
    $mm: string;
    $s: number;
    $ss: string;
    $gone: string;

    $format: (format: string) => string;
};

interface Array<T> {
    // 返回陣列的長度。
    $len: number;
    // 將陣列轉換為 Map 並返回，其中 Map 的鍵是陣列的元素，值是元素的索引。
    $map: Map<any, number>;
    // 返回隨機排序的陣列，將陣列中的元素隨機排列。
    $random: any[];
    // 檢查陣列是否為空，返回布林值。
    $$mt: boolean;

    /**
     * 將值添加到陣列中，可以是單個值或陣列。
     * 例如：[123]._("123"); 返回 [123, "123"];
     * 例如：[123]._([456, 789]); 返回 [123, 456, 789];
     */
    _: (value?: any | any[]) => any[];
    /**
     * 根據提供的函數對陣列中的每個元素進行轉換，並返回轉換後的新陣列。
     * 例如：["test1", "test2", "test3"]._$((e, i) => { name: e, index: i });
     * 返回 [
     * 		{ name: "test1", index: 0 },
     * 		{ name: "test2", index: 1 },
     * 		{ name: "test3", index: 2 }
     * ];
     */
    _$: (value?: (e: any, i: number) => any) => any[];
    /**
     * 按索引返回陣列中的元素。如果索引為負數，則從末尾開始計算。
     * 例如：["test1", "test2", "test3"].$(0); 返回 "test1";
     * 例如：["test1", "test2", "test3"].$(-1); 返回 "test3";
     */
    $: (index?: number) => any;
    // 返回指定值在陣列中的第一個出現的索引，如果沒有找到則返回 -1。
    $i: (value?: any) => number;
    // 將陣列中的元素連接成一個字串，可指定連接字元。
    $str: (char?: string) => string;
    // 將陣列轉換為 URL 並根據提供的配置發送 HTTP 請求。 
    $req: (body: { [key: string]: string }) => void;
    // 根據索引從陣列中刪除元素，並返回修改後的陣列。
    $_: (index?: number) => any[];
    // 檢查陣列中是否包含指定的值，返回布林值。
    $$: (value: any) => boolean;
};

interface Object {
    // 返回一個Map物件，其中包含了對象的所有鍵和值。
    $map: Map<string, any>;
    //  返回一個包含對象所有鍵的陣列。
    $keys: string[];
    //  返回一個包含對象所有值的陣列。
    $vals: any[];
    // 根據給定的鍵返回對象中的值，如果未指定鍵，則返回整個物件。
    $: (key?: string) => any;
    // 
    $$: (key?: string) => boolean;
    // 遍歷對象的每個鍵/值對，並對它們執行指定的操作。
    $forEach: (value: (key: string, val: any) => void) => void;
};

interface Map<K, V> {
    // 返回 Map 物件的 JavaScript 物件表示。
    $obj: { [key: string]: any };
    // 返回 Map 物件的數量。
    $len: number;
    // 檢查 Map 物件是否為空，返回布林值。
    $mt: boolean;

    // 用於將新的鍵值對添加到 Map 中。
    _: (key?: any, value?: any) => Map<any, any>;
    // 用於根據鍵檢索 Map 中的值。
    $: (key?: any) => any;
};

interface Date {
    $y: number;
    $yy: string;
    $yyyy: number;
    $M: number;
    $MM: string;
    $D: number;
    $DD: string;
    $d: number;
    $dd: string;
    $H: number;
    $HH: string;
    $h: number;
    $hh: string;
    $a: string;
    $A: string;
    $m: number;
    $mm: string;
    $s: number;
    $ss: string;
    $timestamp: number;
    $gone: string;

    $format: (format: string) => String;
    $date: (body?: { [key: string]: any }) => Date;
};

interface Image {
    // 產生 JPEG 圖片的 base64 編碼
    $jpg: (size: number) => string;
    // 產生 PNG 圖片的 base64 編碼
    $png: (size: number) => string;
    // 產生圖片的 base64 編碼（可以指定 MIME 類型，默認為 image/jpeg）
    $base64: (mime?: string) => string;
    // 產生圖片的 Blob 物件（可以指定 MIME 類型，默認為 image/jpeg）
    $blob: (mime?: string) => string;
    // 下載 JPEG 格式的圖片
    _downloadJPG: (filename?: string) => void;
    // 下載 PNG 格式的圖片
    _downloadPNG: (filename?: string) => void;
};

interface URL {
    $queryAll: { [key: string]: string };
    /**
     * 將字符串轉換為URL並根據提供的配置發送HTTP請求。 
     * ex. 
     * "URL".$req({
     * 		method: "POST",
     * 		json: { test: "test" },
     * 		header: {
     * 			"Content-Type": "application/json;charset=UTF-8"
     * 		}
     * }).then(res => {
     * 		console.log("Success:", res);
     * }).catch(err => {
     * 		console.error("Error:", err);
     * });
     * 
     * "URL".$req({
     * 		method: "POST",
     * 		json: { test: "test" },
     * 		files: [FILES],
     * 		tag: "files[]"
     * }).then(res => {
     * 		console.log("Success:", res);
     * }).catch(err => {
     * 		console.error("Error:", err);
     * });
     */
    $req: (body: { [key: string]: string }) => void;
    _history: (title?: string) => URL;
    __history: (title?: string) => URL;
    _query: (value?: { [key: string]: string }) => URL;
    __query: (value?: { [key: string]: string }) => URL;
    query_: (value?: string | string[]) => URL;
    query__: (value?: string | string[]) => URL;
    $query: (key?: string) => string | null;
};

interface Element {
    // 返回元素的 innerHTML。
    $: string;
    // 返回元素的 scrollLeft。
    $x: number;
    // 返回元素的 scrollTop。
    $y: number;
    // 返回元素的 clientWidth。
    $w: number;
    // 返回元素的 clientHeight。
    $h: number;
    // 返回元素的 scrollWidth。
    $sw: number;
    // 返回元素的 scrollHeight。
    $sh: number;
    // 返回元素的 naturalWidth。
    $nw: number;
    // 返回元素的 naturalHeight。
    $nh: number;
    // 返回子元素的數量。
    $len: number;
    // 返回在父元素中的索引。
    $i: number;
    // 返回元素的 classList 的陣列。
    $classAll: string[];
    // 返回元素的 attributes 的陣列。
    $attrAll: { [key: string]: string };
    // 返回子元素的陣列。
    $childAll: Element[];
    // 返回子節點的陣列。
    $nodeAll: ChildNode[];
    // 返回純文字的內容。
    $text: string;
    $html: string;

    // 添加內容至元素的 innerHTML。
    _: (innerHTML?: string) => Element;
    // 覆蓋元素的 innerHTML 內容。
    __: (innerHTML?: string) => Element;
    // 複製元素。
    _$: (deep?: boolean) => Element;
    // 更新元素的 scrollLeft。
    _x: (value?: number) => Element;
    // 更新元素的 scrollTop。
    _y: (value?: number) => Element;
    // 更新元素的 style.width
    _w: (value?: number | string) => Element;
    // 更新元素的 style.height。
    _h: (value?: number | string) => Element;
    // 更新元素的內邊距: 上。
    _pt: (value?: number | string) => Element;
    // 更新元素的內邊距: 左。
    _pl: (value?: number | string) => Element;
    // 更新元素的內邊距: 下。
    _pb: (value?: number | string) => Element;
    // 更新元素的內邊距: 右。
    _pr: (value?: number | string) => Element;
    // 更新元素的外邊距: 上。
    _mt: (value?: number | string) => Element;
    // 更新元素的外邊距: 左。
    _ml: (value?: number | string) => Element;
    // 更新元素的外邊距: 下。
    _mb: (value?: number | string) => Element;
    // 更新元素的外邊距: 右。
    _mr: (value?: number | string) => Element;

    // 移除 class
    class_: (value?: string | string[]) => Element;
    // 清除 class
    class__: () => Element;
    /**
     * 添加 class
     * 例如：dom._class("test"); 設置 dom.classList.add("test");
     * 例如：dom._class("test1.test2"); 設置 dom.classList.add("test1"), dom.classList.add("test2");
     * 例如：dom._class("test1 test2"); 設置 dom.classList.add("test1"), dom.classList.add("test2");
     * 例如：dom._class(["test1", "test2"]); 設置 dom.classList.add("test1"), dom.classList.add("test2");
     */
    _class: (value?: string | string[]) => Element;
    // 覆蓋 class
    __class: (value?: string | string[]) => Element;
    // 判斷 class 是否存在
    $$class: (value?: string) => boolean;
    // 假如 true 則移除 class
    $$class_: (bool?: boolean, value?: string | string[]) => Element;
    // 假如 true 則添加 class
    $$_class: (bool?: boolean, value?: string | string[]) => Element;

    // 移除 style
    style_: (key?: string | string[]) => Element;
    /**
     * 添加 style
     * 例如：dom._style({ backgroundColor: "red" }); 設置 dom.style.backgroundColor = "red";
     * 例如：dom._style({ backgroundColor: "red", color: "#fff" }); 設置 dom.style.backgroundColor = "red", dom.style.color = "#fff";
     */
    _style: (value?: { [key: string]: string }) => Element;
    // 取得 style
    $style: (key?: string) => string | undefined;

    data_: (key?: string | string[]) => Element;

    _data: (value?: { [key: string]: string | number }) => Element;

    // 移除 attribute
    attr_: (key?: string | string[]) => Element;
    /**
     * 添加 attribute
     * 例如：dom._attr({ test: 1 }); 設置 dom.setAttribute("test", "1");
     * 例如：dom._attr({ test1: 1, test2: 2 }); 設置 dom.setAttribute("test1", "1"), dom.setAttribute("test2", "2");
     */
    _attr: (value?: { [key: string]: string | number }) => Element;
    // 取得 attribute
    $attr: (key?: string) => string | null;
    // 判斷 attribute 是否存在
    $$attr: (key?: string) => boolean;

    // 添加元素
    _child: (value?: ChildNode | Element | string | number | (ChildNode | Element | string | number)[], before?: ChildNode | Element | number) => Element;
    // 覆蓋內容
    __child: (value?: ChildNode | Element | string | number | (ChildNode | Element | string | number)[]) => Element;
    /**
     * 取得子元素
     * 例如：dom.$child(0); // 取得第一個子元素;
     * 例如：dom.$child([0, 1]); // 取得第一個子元素中的第二個子元素;
     * 例如：dom.$child("button.add"); // 取得子元素中符合 button.add 的元素;
     * 例如：dom.$child([0, 1, "button.add"]); // 取得第一個子元素中的第二個子元素中符合 button.add 的元素;
     */
    $child: (value?: string | number | (string | number)[]) => Element | undefined;
    /**
     * 取得父元素
     * 例如：dom.$parent(); // 取得 dom.parentElement;
     * 例如：dom.$parent(1); // 取得 dom.parentElement.parentElement;
     */
    $parent: (layer?: number) => Element | undefined;
    /**
     * 取得前元素
     * 例如：dom.$pre(0); // 取得 dom.previousElementSibling;
     * 例如：dom.$pre(1); // 取得 dom.previousElementSibling.previousElementSibling;
     */
    $pre: (index?: number) => Element | undefined;
    /**
     * 取得後元素
     * 例如：dom.$next(0); // 取得 dom.nextElementSibling;
     * 例如：dom.$next(1); // 取得 dom.nextElementSibling.nextElementSibling;
     */
    $next: (index?: number) => Element | undefined;

    // 移除元素
    $rm: () => void;

    // 選擇器 querySelector
    $sel: (filter?: string) => Element | undefined;
    // 選擇器 querySelectorAll
    $selAll: (filter?: string) => Element[];

    /**
     * 設定 video 屬性
     * preload: "" | "none" | "metadata" | "auto";
     * loop: true | false;
     * muted: true | false;
     * controls: true | false;
     * playsinline: true | false;
     * download: true | false;
     * remote: true | false;
     */
    _video: (value: { [key: string]: any }) => Element;

    // 擴展 style
    _display: (value: string) => Element;
};

interface DocumentFragment {
    // 返回子元素的數量。
    $len: number;
    // 返回子元素的陣列。
    $childAll: Element[];
    // 返回子節點的陣列。
    $nodeAll: ChildNode[];
    // 返回純文字的內容。
    $text: string;
    // 返回innerHTML的內容。
    $html: string;
    $str: string;

    // 複製元素。
    _$: (deep?: boolean) => Element;
    // 添加元素
    _child: (value?: ChildNode | Element | string | number | (ChildNode | Element | string | number)[]) => DocumentFragment;
    /**
     * 取得子元素
     * 例如：dom.$child(0); // 取得第一個子元素;
     * 例如：dom.$child([0, 1]); // 取得第一個子元素中的第二個子元素;
     * 例如：dom.$child("button.add"); // 取得子元素中符合 button.add 的元素;
     * 例如：dom.$child([0, 1, "button.add"]); // 取得第一個子元素中的第二個子元素中符合 button.add 的元素;
     */
    $child: (value?: string | number | (string | number)[]) => Element | undefined;
};