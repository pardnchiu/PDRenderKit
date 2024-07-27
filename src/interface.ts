interface String {
    // getParams: any[];
    convertText: (key?: string, value?: string) => string;
};

interface String {
    $camel: string;
    /**
     * 返回字符串長度.
     * ex. "test".$len; 返回 4.
     */
    $len: number;
    /**
     * 將字符串轉換為數字並返回結果.
     * ex. "1,000".$num; 返回 1000.
     * ex. "test".$num; 返回 0.
     */
    $num: number | undefined;
    /**
     * 將字符串轉換為JSON對象並返回結果.
     * ex. '{ "test": "1" }'.$json; 返回 { test: "1" }.
     * 
     * 如果字符串不是有效的JSON，則返回空對象.
     * ex. "test".$json; 返回 {}.
     */
    $json: JSON | undefined;
    /**
     * 將字符串轉換為HTML字符。
     * ex. "<div>test</div>".$html; 返回 &lt;div&gt;test&lt;/div&gt;
     */
    $html: string;
    /**
     * 將字符串轉為URL並讀取連結圖片與返回Promise.
     * ex. "test".$img.then(img => {
     *      // Do something with img.
     * })
     */
    $img: Promise<any>;
    /**
     * 檢查字符串是否可以解析為有效的JSON並返回布林值.
     */
    $$json: boolean;
    /**
     * 檢查字符串是否為空。
     * ex. "     ".$$mt; 返回true.
     * ex. "   1  ".$$mt; 返回false.
     */
    $$mt: boolean;

    // ---------- 分割線 ----------

    /**
     * 使用提供的目標（字符串或正則表達式）替換字符串的內容.
     */
    __: (target?: string | RegExp, replace?: string) => string;
    /**
     * 使用指定的分隔符（字符串或正則表達式）將字符串拆分為數組。
     * ex. "test1,test2,test3".$ary(","); 返回 ["test1", "test2", "test3"];
     * ex. "text1, test2.test3".$ary(/[\,\.\s]+/); 返回 ["text1", "test2", "test3"];
     */
    $ary: (target?: string | RegExp) => string[];
    // 將字符串轉換為正則表達式。
    $regexp: (flags?: string) => RegExp;
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
    $fit: (regex: RegExp) => string | string[] | undefined;
    $en: (component: Boolean) => String;
    $de: (component: Boolean) => String;
    $copy: () => any;
    /**
     * 比較字符串與目標（字符串或正則表達式）或檢查字符串是否為空。返回布林值。
     * ex. "test".$$("test"); 返回 true;
     * ex. "test".$$(/\./); 返回 false;
     * ex. "test".$$(); 返回 true;
     */
    $$: (equalTo?: String | RegExp) => boolean;
    // 將字符串轉換為URL並檢查是否可以成功連接。
    $$200: () => Promise<any>;

    /**
     * 將字符串轉換為URL對象。
     * ex. "https://joball.tw".$url; 等於 URL("https://joball.tw");
     * ex. "/test".$url; 等於 URL("location.origin/test");
     */
    $url: URL;
    // 以對象形式返回URL的搜索參數。
    $queryAll: { [key: string]: string };
    // 歷史記錄中添加新條目。
    _history: (title?: string) => URL;
    // 歷史記錄中替換當前條目。
    __history: (title?: string) => URL;
    // 從URL的查詢參數中刪除特定值。
    query_: (value?: string | string[]) => URL;
    // 清除URL的所有查詢參數。
    query__: (value?: string | string[]) => URL;
    // URL中添加或更新查詢參數。
    _query: (value?: { [key: string]: string }) => URL;
    // 替換URL中的查詢參數。
    __query: (value?: { [key: string]: string }) => URL;
    // 從URL中獲取特定查詢參數的值。
    $query: (key?: string) => string;

    /**
     * 將字符串轉換為Font Awesome圖標元素。
     * "fa-brands fa-font-awesome".$fa(); 返回 <i class="fa-brands fa-font-awesome"></i>
     */
    _fa: Element;
    /**
     * 使用ID或CSS選擇器選擇單個DOM元素。
     * "#test".$; 等於 document.getElementById("test");
     * "div.test".$; 等於 document.querySelector("div.test");
     */
    $: Element;
    /**
     * 使用CSS選擇器選擇多個DOM元素。
     * "div.test".$all; 等於 document.querySelectorAll("div.test");
     */
    $all: Element[];
    /**
     * 創建帶有可選屬性和子元素的新DOM元素。
     * ex.
     * document.body._child(
     * 		"div#test"._({
     * 			// setAttribute("test", "1")
     * 			test: 1,
     * 			onclick: function(){ 
     * 				alert("test")
     * 			},
     * 			style: {
     * 				backgroundColor: "red";
     * 			}
     * 		}, [
     * 			"p.test"._({
     * 				style: {
     * 					color: "#fff"
     * 				}
     * 			}, "這是一個 id 為 test, 且背景為紅色, 文字為白色且文字 class 為 test 的可點選範例")
     * 		]);
     * );
     */
    _: (val0?: any, val1?: any) => Element;
};

interface Number {
    // 返回數字的字串表示形式。
    $str: string;
    $num: number;
    // 返回了以秒為單位的數字的對應日期。
    $date: Date;
    /**
     * 返回對應日期與當前時間的差距。
     * 年/月/週/日/時/分/秒
     * ex. 
     * [NUMBER].$date;
     * 若NUMBER小於當前時間一天, 則返回"還有1天"
     * 若NUMBER大於當前時間一週, 則返回"1週前"
     */
    $gone: string;
    $y: number;
    $M: number;
    $MM: string;
    $D: number;
    $DD: string;
    $d: number;
    $dd: string;
    $h: number;
    $hh: string;
    $m: number;
    $mm: string;
    $s: number;
    $ss: string;

    // 用於從0到該數字之間的範圍內循環執行一個回調函數。
    $loop: (value: (i: number) => void) => void;
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
    /**
     * 四位數年份
     * @example 2024
     */
    $yyyy: number;

    /**
     * 兩位數年份
     * @example "24"
     */
    $yy: string;

    /**
     * 四位數年份（與 $yyyy 相同）
     * @example 2024
     */
    $y: number;

    /**
     * 兩位數月份，補零
     * @example "07"
     */
    $MM: string;

    /**
     * 月份，不補零
     * @example 7
     */
    $M: number;

    /**
     * 兩位數日期，補零
     * @example "25"
     */
    $DD: string;

    /**
     * 日期，不補零
     * @example 25
     */
    $D: number;

    /**
     * 星期縮寫
     * @example "Thu"
     */
    $dd: string;

    /**
     * 星期數字（0-6）
     * @example 4
     */
    $d: number;

    /**
     * 兩位數24小時制，補零
     * @example "08"
     */
    $HH: string;

    /**
     * 24小時制，不補零
     * @example 8
     */
    $H: number;

    /**
     * 兩位數12小時制，補零
     * @example "08"
     */
    $hh: string;

    /**
     * 12小時制，不補零
     * @example 8
     */
    $h: number;

    /**
     * 上下午標示（大寫）
     * @example "AM"
     */
    $A: string;

    /**
     * 上下午標示（小寫）
     * @example "am"
     */
    $a: string;

    /**
     * 兩位數分鐘，補零
     * @example "09"
     */
    $mm: string;

    /**
     * 分鐘，不補零
     * @example 9
     */
    $m: number;

    /**
     * 兩位數秒數，補零
     * @example "05"
     */
    $ss: string;

    /**
     * 秒數，不補零
     * @example 5
     */
    $s: number;

    /**
     * Unix 時間戳（秒）
     * @example 1690303195
     */
    $timestamp: number;

    /**
     * 根據傳入的 body 參數創建新的 Date 物件。
     * 
     * @param body 設置日期的參數對象
     * @returns Date 物件
     * 
     * @example
     * // 返回當月的第一天
     * date.$date({ start: true });
     * 
     * @example
     * // 返回上個月的最後一天
     * date.$date({ end: true });
     * 
     * @example
     * // 返回上個月的第一天
     * date.$date({ pre: { start: true } });
     */
    $date: (body?: { [key: string]: any }) => Date;

    /**
     * 根據指定的格式輸出日期字串
     * 
     * @param format 日期格式
     * @returns 格式化的日期字串
     * 
     * @example
     * // 返回 "2024-07-25 08:09:05"
     * date.$format("YYYY-MM-DD HH:mm:ss");
     * 
     * @example
     * // 返回 "Thu, 24"
     * date.$format("dd, D");
     */
    $format: (format: string) => String;
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