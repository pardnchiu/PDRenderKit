interface $JSON_array extends Array<$JSON_type> { }

type $JSON_type = string | number | boolean | $JSON | $JSON_array | null;

interface $JSON {
    [key: string]: $JSON_type;
}

interface Window {
    // 全域變數，用於存取 PD 物件。
    // Global variable for accessing the PD object.
    PD: any;

    // 初始化觀察者的函數，可以接受目標參數。
    // Function to initialize observers, optionally accepting a target parameter.
    _Listener: (target?: any) => void;

    // 生成指定長度隨機字串的函數。
    // Function to generate a random string of a specified length.
    $key: (length: number) => string;

    // 讀取檔案並回傳 Promise 的函數。
    // Function to read a file and return a Promise.
    $file: (file: any) => Promise<any>;

    // 從圖像檔案生成圖片並回傳 Promise 的函數。
    // Function to generate an image from an image file and return a Promise.
    $imageFromImageFile: (file: any) => Promise<any>;

    // 從影片檔案生成圖片並回傳 Promise 的函數。
    // Function to generate an image from a video file and return a Promise.
    $imageFromVideoFile: (file: any) => Promise<any>;

    // 將 base64 字串轉換為 Blob 物件的函數。
    // Function to convert a base64 string to a Blob object.
    $blob: (base64: any, mimeType: string) => Blob;

    // 獲取指定名稱的 Cookie 值。
    // Function to get the value of a cookie by name.
    $cookie: (key: string) => any;

    // 設置 Cookie 的函數。
    // Function to set a cookie.
    _cookie: (name: string, body: any, expire: number) => void;

    // 選取 DOM 元素的函數。
    // Function to select a single DOM element.
    $: (value: string) => Element;

    // 選取所有符合條件的 DOM 元素的函數。
    // Function to select all DOM elements that match a selector.
    $all: (value: string) => Element[];

    // 將字串轉換為 URL 物件的函數。
    // Function to convert a string to a URL object.
    $url: (value: string) => URL;

    // 添加子元素的函數。
    // Function to add child elements.
    _child: (value: ChildNode | Element | string | number | (ChildNode | Element | string | number)[], before: ChildNode | Element | number | undefined) => void;

    // 覆蓋子元素的函數。
    // Function to replace child elements.
    __child: (value: ChildNode | Element | string | number | (ChildNode | Element | string | number)[]) => void;

    // 預計於 2.*.* 版移除
    // Marked for removal in version 2.*.*

    // 初始化 SVG 觀察者的函數。
    // Function to initialize the SVG observer.
    _SVGListener: () => void;

    // 初始化懶載觀察者的函數。
    // Function to initialize the lazy load observer.
    _LazyListener: () => void; // 初始化懶載觀察者的函數。
};

interface String {
    // 轉換為 JSON，失敗時返回 undefined
    $json: $JSON | undefined;
    // 轉換為 HTML 實體編碼
    $html: string;
    // 檢查是否為 JSON 格式
    $$json: boolean;
    // 檢查是否為空字串
    $$empty: boolean;
    // 複製到剪貼簿
    copy: () => any;
    // 替換字串中的指定部分
    __: (target?: RegExp | string, replace?: string) => string;
    // 生成正則表達式
    $regexp: (flags?: string) => RegExp;
    // URI 編碼
    $en: (component?: Boolean) => String;
    // URI 解碼
    $de: (component?: Boolean) => String;
    // 檢查字串是否等於指定值或匹配正則
    $$: (equalTo?: RegExp | String) => boolean;

    // URL 相關操作
    // 轉換為 URL 物件
    $url: URL;
    // 轉換為圖片元素的 Promise
    $img: Promise<HTMLImageElement | undefined>;
    // 解析 URL 查詢參數
    $queryAll: { [key: string]: string };
    // 驗證 URL 有效性
    $$200: (isImage?: Boolean) => Promise<any>;
    // 發送 HTTP 請求
    $req: (body: $JSON) => void;
    // 推送歷史記錄並更新 URL
    _history: (title?: string) => URL;
    // 替換歷史記錄並更新 URL
    __history: (title?: string) => URL;
    // 更新 URL 查詢參數
    _query: (value?: { [key: string]: string }) => URL;
    // 移除 URL 查詢參數
    __query: (value?: { [key: string]: string }) => URL;
    // 刪除指定查詢參數
    query_: (value?: string | string[]) => URL;
    // 清除所有查詢參數
    query__: () => URL;
    // 取得指定查詢參數的值
    $query: (key?: string) => string;

    // Element 相關操作
    // 創建 Font Awesome 圖標元素
    _fa: Element;
    // 選擇單個 DOM 元素
    $: Element;
    // 選擇多個 DOM 元素
    $all: Element[];
    // 生成 DOM 元素
    _: (val0?: any, val1?: any) => Element;

    // 轉換為數字，失敗時返回 undefined
    // ! 預計於 2.*.* 版移除
    $num: number | undefined;
    // 獲取字串長度
    // ! 預計於 2.*.* 版移除
    $len: number;
    // 檢查是否為空字串
    // ! 預計於 2.*.* 版移除
    $$mt: boolean;
    // 將字串分割為陣列
    // ! 預計於 2.*.* 版移除
    $ary: (target?: string | RegExp) => string[];
    // 匹配正則並返回結果
    // ! 預計於 2.*.* 版移除
    $fit: (regex: RegExp) => string | string[] | undefined;
    // 複製到剪貼簿
    // ! 預計於 2.*.* 版移除
    $copy: () => any;
};

interface Number {
    // Date 擴展

    // 將秒數轉換為 Date 對象
    $date: Date;

    // 計算經過時間，返回相對時間字串
    $gone: string;

    // 年份後兩位數 (字串，如 "24")
    $y: string;

    // 年份後兩位數 (字串，如 "24")
    $yy: string;

    // 完整年份 (如 2024)
    $yyyy: number;

    // 月份 (1-12)
    $M: number;

    // 月份 (01-12，補零)
    $MM: string;

    // 日期 (1-31)
    $D: number;

    // 日期 (01-31，補零)
    $DD: string;

    // 星期幾 (0-6，0 為週日)
    $d: number;

    // 星期幾 (簡寫，如 "Su", "Mo")
    $dd: string;

    // 星期幾 (縮寫，如 "Sun", "Mon")
    $ddd: string;

    // 星期幾 (全稱，如 "Sunday", "Monday")
    $dddd: string;

    // 小時，24小時制 (0-23)
    $H: number;

    // 小時，24小時制 (00-23，補零)
    $HH: string;

    // 小時，12小時制 (1-12)
    $h: number;

    // 小時，12小時制 (01-12，補零)
    $hh: string;

    // 上下午 (am/pm)
    $a: string;

    // 上下午 (AM/PM)
    $A: string;

    // 分鐘 (0-59)
    $m: number;

    // 分鐘 (00-59，補零)
    $mm: string;

    // 秒 (0-59)
    $s: number;

    // 秒 (00-59，補零)
    $ss: string;

    // 百毫秒 (0-9)
    $S: string;

    // 十毫秒 (00-99)
    $SS: string;

    // 毫秒 (000-999)
    $SSS: string;

    // 按指定格式轉換為字串 (預設 yyyy/MM/DD (ddd) HH:mm:ss)
    $format: (format: string) => string;

    // 轉換為字串
    // ! 預計於 2.*.* 版移除
    $str: string;

    // 返回原始數字
    // ! 預計於 2.*.* 版移除
    $num: number;
};

interface Array<T> {
    // 將陣列轉換為 Map（鍵：元素，值：索引）
    $map: Map<any, number>;

    // 隨機排序陣列
    $random: any[];

    // 檢查陣列是否為空
    $$empty: boolean;

    // 添加值到陣列
    _: (value?: any | any[]) => any[];

    // 按索引獲取元素
    $: (index?: number) => any;

    // 獲取指定值的索引
    $i: (value?: any) => number;

    // 刪除指定索引的元素並返回新陣列
    $_: (index?: number) => any[];

    // 檢查陣列是否包含指定值
    $$: (value: any) => boolean;

    // 發送 HTTP 請求（使用陣列作為字串）
    $req: (body: { [key: string]: string }) => void;

    // 獲取陣列長度
    // ! 預計於 2.*.* 版移除
    $len: number;

    // 檢查陣列是否為空（將被 $$empty 替代）
    // ! 預計於 2.*.* 版移除
    $$mt: boolean;

    // 將陣列連接為字串
    // ! 預計於 2.*.* 版移除
    $str: (char?: string) => string;

    // 轉換陣列元素並返回新陣列
    // ! 預計於 2.*.* 版移除
    _$: (value?: (e: any, i: number) => any) => any[];
};

interface Object {
    // 將對象轉換為 Map
    $map: Map<string, any>;

    // 獲取對象所有鍵的陣列
    $keys: string[];

    // 獲取對象所有值的陣列
    $vals: any[];

    // 根據鍵獲取值，無鍵則返回整個對象
    $: (key?: string) => any;

    // 檢查對象是否包含指定鍵
    $$: (key?: string) => boolean;

    // 遍歷對象的鍵值對並執行指定函數
    forEach: (value: (key: string, val: any) => void) => void;

    // 遍歷對象的鍵值對並執行指定函數
    // ! 預計於 2.*.* 版移除
    $forEach: (value: (key: string, val: any) => void) => void;
};

interface Map<K, V> {
    // 轉換為 JSON 對象
    $json: $JSON;

    // 獲取所有鍵的陣列
    $keys: any[];

    // 獲取所有值的陣列
    $vals: any[];

    // 檢查是否為空
    $$empty: boolean;

    // 獲取鍵值對數量
    length: number;

    // 添加新鍵值對
    _: (key?: any, value?: any) => Map<any, any>;

    // 根據鍵獲取值
    $: (key?: any) => any;

    // 刪除指定鍵的元素並返回新 Map
    $_: (key?: any) => Map<any, any>;

    // 檢查是否包含指定值
    $$: (value: any) => boolean;

    // 獲取鍵值對數量（替代為 length）
    // ! 預計於 2.*.* 版移除
    $len: number;

    // 檢查是否為空（替代為 $$empty）
    // ! 預計於 2.*.* 版移除
    $mt: boolean;

    // 轉換為普通 JS 對象（替代為 $json）
    // ! 預計於 2.*.* 版移除
    $obj: { [key: string]: any };
};

interface FormData {
    // 將 FormData 轉換為 Map 對象
    $map: Map<string, any>;

    // 將 FormData 轉換為 JSON 對象
    $json: $JSON;
}

interface Date {
    // 年份
    $y: string;    // 年份後兩位 ("24")
    $yy: string;   // 年份後兩位 ("24")
    $yyyy: number; // 完整年份 (2024)

    // 月份
    $M: number;    // 月份 (1-12)
    $MM: string;   // 月份 (01-12，補零)

    // 日期
    $D: number;    // 日期 (1-31)
    $DD: string;   // 日期 (01-31，補零)

    // 星期
    $d: number;    // 星期 (0-6，0為週日)
    $dd: string;   // 星期極簡稱 ("Su", "Mo")
    $ddd: string;  // 星期簡稱 ("Sun", "Mon")
    $dddd: string; // 星期全稱 ("Sunday", "Monday")

    // 24小時制
    $H: number;    // 小時 (0-23)
    $HH: string;   // 小時 (00-23，補零)

    // 12小時制
    $h: number;    // 小時 (1-12)
    $hh: string;   // 小時 (01-12，補零)

    // 上午/下午
    $a: string;    // am/pm (小寫)
    $A: string;    // AM/PM (大寫)

    // 分鐘
    $m: number;    // 分鐘 (0-59)
    $mm: string;   // 分鐘 (00-59，補零)

    // 秒數
    $s: number;    // 秒數 (0-59)
    $ss: string;   // 秒數 (00-59，補零)

    // 毫秒
    $S: string;    // 毫秒 (百位數，0-9)
    $SS: string;   // 毫秒 (十位數，00-99)
    $SSS: string;  // 毫秒 (全位數，000-999)

    $timestamp: number; // Unix 時間戳

    $gone: string; // 相對時間字串

    $format: (format: string) => string; // 自定義格式化

    /**
     * 生成新日期對象
     * 
     * 例：
     * - 當月首日：$date({ start: true })
     * - 當月末日：$date({ end: true })
     * - 上月首日：$date({ pre: { start: true } })
     * - 上月末日：$date({ pre: { end: true } })
     */
    $date: (body?: { [key: string]: any }) => Date;
};

interface URL {
    // 獲取所有查詢參數
    $queryAll: { [key: string]: string };

    /**
     * 發送 HTTP 請求
     * 
     * 示例：
     * URL.$req({
     *     method: "POST",
     *     json: { test: "test" },
     *     header: {
     *         "Content-Type": "application/json;charset=UTF-8"
     *     }
     * }).then(res => console.log("成功:", res))
     *   .catch(err => console.error("錯誤:", err));
     * 
     * URL.$req({
     *     method: "POST",
     *     json: { test: "test" },
     *     files: [FILES],
     *     tag: "files[]"
     * }).then(res => console.log("成功:", res))
     *   .catch(err => console.error("錯誤:", err));
     */
    $req: (body: $JSON, once?: boolean) => void;

    // 推送新歷史記錄
    _history: (title?: string) => URL;

    // 替換當前歷史記錄
    __history: (title?: string) => URL;

    // 添加查詢參數
    _query: (value?: { [key: string]: string }) => URL;

    // 更新查詢參數
    __query: (value?: { [key: string]: string }) => URL;

    // 移除指定查詢參數
    query_: (value?: string | string[]) => URL;

    // 清空所有查詢參數
    query__: () => URL;

    // 獲取指定查詢參數值
    $query: (key?: string) => string | undefined;
};

interface Image {
    // 產生圖片的 base64 編碼（默認為 image/jpeg）
    // Generates a base64-encoded string of the image (default is image/jpeg)
    // Example: console.log(image.$base64('image/png', 100));
    $base64: (mime: string, size?: number) => string;

    // 產生圖片的 Blob 物件（默認為 image/jpeg）
    // Generates a Blob object of the image (default is image/jpeg)
    // Example: const blob = image.$blob('image/png', 100);
    $blob: (mime: string, size?: number) => Blob;

    // 下載圖片
    // Downloads the image
    // Example: image.download('image/png', 'myImage.png');
    download: (mime: string, filename?: string) => void;

    // 預計於 2.*.* 版移除
    // 產生 JPEG 圖片的 base64 編碼
    // Generates a base64-encoded string of the image in JPEG format
    // Example: console.log(image.$jpg(100));
    $jpg: (size: number) => string;

    // 預計於 2.*.* 版移除
    // 產生 PNG 圖片的 base64 編碼
    // Generates a base64-encoded string of the image in PNG format
    // Example: console.log(image.$png(100));
    $png: (size: number) => string;

    // 預計於 2.*.* 版移除
    // 下載 JPEG 格式的圖片
    // Downloads the image in JPEG format
    // Example: image._downloadJPG('myImage.jpg');
    _downloadJPG: (filename?: string) => void;

    // 預計於 2.*.* 版移除
    // 下載 PNG 格式的圖片
    // Downloads the image in PNG format
    // Example: image._downloadPNG('myImage.png');
    _downloadPNG: (filename?: string) => void;

    // 預計於 2.*.* 版移除
    // 下載圖片
    // Downloads the image
    // Example: image._download('image/png', 'myImage.png');
    _download: (mime: string, filename?: string) => void;
};

interface Element {
    // 返回元素的 innerHTML
    // Returns the innerHTML of the element
    // Example: console.log(element.$);
    $: string;

    // 返回純文字的內容
    // Returns the text content of the element
    // Example: console.log(element.$text);
    $text: string;

    // 返回元素的 outerHTML
    // Returns the outerHTML of the element
    // Example: console.log(element.$html);
    $html: string;

    // 返回元素的 FormData
    $formData: FormData | undefined;

    // 返回元素的 FormData 並轉成 JSON
    $map: Map<string, any> | undefined;

    // 返回元素的 FormData 並轉成 JSON
    $json: $JSON | undefined;

    // 返回元素的 scrollLeft
    // Returns the scrollLeft value of the element
    // Example: console.log(element.$x);
    $x: number;

    // 返回元素的 scrollTop
    // Returns the scrollTop value of the element
    // Example: console.log(element.$y);
    $y: number;

    // 返回元素的 clientWidth
    // Returns the clientWidth of the element
    // Example: console.log(element.$w);
    $w: number;

    // 返回元素的 clientHeight
    // Returns the clientHeight of the element
    // Example: console.log(element.$h);
    $h: number;

    // 返回元素的 scrollWidth
    // Returns the scrollWidth of the element
    // Example: console.log(element.$sw);
    $sw: number;

    // 返回元素的 scrollHeight
    // Returns the scrollHeight of the element
    // Example: console.log(element.$sh);
    $sh: number;

    // 返回元素的 naturalWidth
    // Returns the naturalWidth of the element (for images)
    // Example: console.log(element.$nw);
    $nw: number;

    // 返回元素的 naturalHeight
    // Returns the naturalHeight of the element (for images)
    // Example: console.log(element.$nh);
    $nh: number;

    // 返回在父元素中的索引
    // Returns the index of the element within its parent
    // Example: console.log(element.$i);
    $i: number;

    // 返回元素的 attributes 的陣列
    // Returns a map of the element's attributes
    // Example: console.log(element.$attributes);
    $attributes: { [key: string]: string };

    // 返回元素的 classList 的陣列
    // Returns the classList of the element as an array
    // Example: console.log(element.$classList);
    $classList: string[];

    // 返回子元素的陣列
    // Returns an array of child elements
    // Example: console.log(element.$children);
    $children: Element[];

    // 返回子節點的陣列
    // Returns an array of child nodes
    // Example: console.log(element.$childNodes);
    $childNodes: ChildNode[];

    // 返回子元素的數量
    // Returns the number of child elements
    // Example: console.log(element.length);
    length: number;

    // 添加內容至元素的 innerHTML
    // Adds content to the element's innerHTML
    // Example: element._('<div>New Content</div>');
    _: (innerHTML?: string) => Element;

    // 覆蓋元素的 innerHTML 內容
    // Replaces the element's innerHTML with new content
    // Example: element.__('<div>New Content</div>');
    __: (innerHTML?: string) => Element;

    // 複製元素
    // Clones the element
    // Example: const clone = element._$(true);
    _$: (deep?: boolean) => Element;

    // 更新元素的 scrollLeft
    // Updates the scrollLeft value of the element
    // Example: element._x(100);
    _x: (value?: number) => Element;

    // 更新元素的 scrollTop
    // Updates the scrollTop value of the element
    // Example: element._y(100);
    _y: (value?: number) => Element;

    // 更新元素的 style.width
    // Updates the style.width of the element
    // Example: element._w('100%');
    _w: (value?: number | string) => Element;

    // 更新元素的 style.height
    // Updates the style.height of the element
    // Example: element._h('100%');
    _h: (value?: number | string) => Element;

    /**
     * 批量設置內邊距
     * Sets the padding of the element in bulk
     * Example:
     * ```
     * element._p(10); // 設置四個方向的內邊距為 10
     * element._p(10, 20); // 設置上下內邊距為 10，左右內邊距為 20
     * element._p(10, 20, 30); // 設置上內邊距為 10，左右內邊距為 20，下內邊距為 30
     * element._p(10, 20, 30, 40); // 設置上內邊距為 10，右內邊距為 20，下內邊距為 30，左內邊距為 40
     * ```
     */
    _p: (top?: number | string, right?: number | string, bottom?: number | string, left?: number | string) => Element;

    // 更新元素的內邊距: 上
    // Updates the padding-top of the element
    // Example: element._pt(10);
    _pt: (value?: number | string) => Element;

    // 更新元素的內邊距: 左
    // Updates the padding-left of the element
    // Example: element._pl(10);
    _pl: (value?: number | string) => Element;

    // 更新元素的內邊距: 下
    // Updates the padding-bottom of the element
    // Example: element._pb(10);
    _pb: (value?: number | string) => Element;

    // 更新元素的內邊距: 右
    // Updates the padding-right of the element
    // Example: element._pr(10);
    _pr: (value?: number | string) => Element;

    /**
      * 批量設置邊距
      * Sets the margin of the element in bulk
      * Example:
      * ```
      * element._m(10); // 設置四個方向的邊距為 10
      * element._m(10, 20); // 設置上下邊距為 10，左右邊距為 20
      * element._m(10, 20, 30); // 設置上邊距為 10，左右邊距為 20，下邊距為 30
      * element._m(10, 20, 30, 40); // 設置上邊距為 10，右邊距為 20，下邊距為 30，左邊距為 40
      * ```
      */
    _m: (top?: number | string, right?: number | string, bottom?: number | string, left?: number | string) => Element;

    // 更新元素的外邊距: 上
    // Updates the margin-top of the element
    // Example: element._mt(10);
    _mt: (value?: number | string) => Element;

    // 更新元素的外邊距: 左
    // Updates the margin-left of the element
    // Example: element._ml(10);
    _ml: (value?: number | string) => Element;

    // 更新元素的外邊距: 下
    // Updates the margin-bottom of the element
    // Example: element._mb(10);
    _mb: (value?: number | string) => Element;

    // 更新元素的外邊距: 右
    // Updates the margin-right of the element
    // Example: element._mr(10);
    _mr: (value?: number | string) => Element;

    // 移除 class
    // Removes a class or classes from the element
    // Example: element.class_('my-class');
    class_: (value?: string | string[]) => Element;

    // 清除 class
    // Clears all classes from the element
    // Example: element.class__();
    class__: () => Element;

    // 添加 class
    // Adds a class or classes to the element
    // Example: element._class('new-class');
    _class: (value?: string | string[]) => Element;

    // 覆蓋 class
    // Replaces the element's classes with new ones
    // Example: element.__class('new-class');
    __class: (value?: string | string[]) => Element;

    // 判斷 class 是否存在
    // Checks if the element has a certain class
    // Example: console.log(element.$$class('my-class'));
    $$class: (value?: string) => boolean;

    // 假如 true 則移除 class
    // Adds or removes a class based on a boolean
    // Example: element.$$class_(true, 'my-class');
    $$class_: (bool?: boolean, value?: string | string[]) => Element;

    // 假如 true 則添加 class
    // Adds or removes a class based on a boolean
    // Example: element.$$_class(true, 'my-class');
    $$_class: (bool?: boolean, value?: string | string[]) => Element;

    // 移除 style
    // Removes a style property or properties from the element
    // Example: element.style_('color');
    style_: (key?: string | string[]) => Element;

    // 添加 style
    // Adds a style property or properties to the element
    // Example: element._style({ color: 'red' });
    _style: (value?: { [key: string]: string }) => Element;

    // 取得 style
    // Gets the value of a style property
    // Example: console.log(element.$style('color'));
    $style: (key?: string) => string | undefined;

    // 移除 data
    // Removes a data attribute or attributes from the element
    // Example: element.data_('key');
    data_: (key?: string | string[]) => Element;

    // 添加 data
    // Adds a data attribute or attributes to the element
    // Example: element._data({ key: 'value' });
    _data: (value?: { [key: string]: string | number }) => Element;

    // 移除 attribute
    // Removes an attribute or attributes from the element
    // Example: element.attr_('key');
    attr_: (key?: string | string[]) => Element;

    // 添加 attribute
    // Adds an attribute or attributes to the element
    // Example: element._attr({ key: 'value' });
    _attr: (value?: { [key: string]: string | number }) => Element;

    // 取得 attribute
    // Gets the value of an attribute
    // Example: console.log(element.$attr('key'));
    $attr: (key?: string) => string | null;

    // 判斷 attribute 是否存在
    // Checks if an attribute exists
    // Example: console.log(element.$$attr('key'));
    $$attr: (key?: string) => boolean;

    // 添加元素
    // Adds a child element or content
    // Example: element._child('div'._("Content"));
    _child: (value?: ChildNode | Element | string | number | (ChildNode | Element | string | number)[], before?: ChildNode | Element | number) => Element;

    // 覆蓋內容
    // Replaces the content of the element
    // Example: element.__child('div'._("Content"));
    __child: (value?: ChildNode | Element | string | number | (ChildNode | Element | string | number)[]) => Element;

    // 取得子元素
    // Gets a child element by index or selector
    // Example: console.log(element.$child(0));
    $child: (value?: string | number | (string | number)[]) => Element | undefined;

    // 取得父元素
    // Gets the parent element, optionally several layers up
    // Example: console.log(element.$parent(1));
    $parent: (layer?: number) => Element | undefined;

    // 取得前元素
    // Gets the previous sibling element
    // Example: console.log(element.$pre());
    $pre: (index?: number) => Element | undefined;

    // 取得後元素
    // Gets the next sibling element
    // Example: console.log(element.$next());
    $next: (index?: number) => Element | undefined;

    // 選擇器 querySelector
    // Uses querySelector to find a child element
    // Example: console.log(element.$sel('.child'));
    $sel: (filter?: string) => Element | undefined;

    // 選擇器 querySelectorAll
    // Uses querySelectorAll to find child elements
    // Example: console.log(element.$selAll('.child'));
    $selAll: (filter?: string) => Element[];

    // 設定 video 屬性
    // Sets properties for a video element
    // Example: element._video({ controls: true });
    _video: (value: { [key: string]: any }) => Element;

    // 擴展 style 顯示屬性
    // Sets the display style property of the element
    // Example: element._display('block');
    _display: (value: string) => Element;

    // 滾動到指定 X 座標
    // Scrolls the element to a specific X position
    // Example: element.scrollToX(100);
    scrollToX: (value: number) => Element;

    // 滾動到指定 Y 座標
    // Scrolls the element to a specific Y position
    // Example: element.scrollToY(100);
    scrollToY: (value: number) => Element;

    // 滾動到頂部
    // Scrolls the element to the top
    // Example: element.scrollToT();
    scrollToT: () => Element;

    // 滾動到左側
    // Scrolls the element to the left side
    // Example: element.scrollToL();
    scrollToL: () => Element;

    // 滾動到底部
    // Scrolls the element to the bottom
    // Example: element.scrollToB();
    scrollToB: () => Element;

    // 滾動到右側
    // Scrolls the element to the right side
    // Example: element.scrollToR();
    scrollToR: () => Element;

    // 預計於 2.*.* 版移除 
    // Marked for removal in version 2.*.*

    // 返回子元素的數量
    // Returns the number of child elements
    // Example: console.log(element.$len);
    $len: number;

    // 返回元素的 attributes 的陣列
    // Returns a map of the element's attributes
    // Example: console.log(element.$attrAll);
    $attrAll: { [key: string]: string };

    // 返回元素的 classList 的陣列
    // Returns the classList of the element as an array
    // Example: console.log(element.$classAll);
    $classAll: string[];

    // 返回子元素的陣列
    // Returns an array of child elements
    // Example: console.log(element.$childAll);
    $childAll: Element[];

    // 返回子節點的陣列
    // Returns an array of child nodes
    // Example: console.log(element.$nodeAll);
    $nodeAll: ChildNode[];

    // 移除元素
    // Removes the element from the DOM
    // Example: element.$rm();
    $rm: () => void;
};

interface DocumentFragment {
    // 返回 DocumentFragment 的 HTML 字串表示
    // Returns the HTML string representation of the DocumentFragment
    // Example: console.log(fragment.$html);
    $html: string;

    // 返回子元素的陣列
    // Returns an array of child elements
    // Example: console.log(fragment.$children);
    $children: Element[];

    // 返回子節點的陣列
    // Returns an array of child nodes
    // Example: console.log(fragment.$childNodes);
    $childNodes: ChildNode[];

    // 返回子元素的數量
    // Returns the number of child elements
    // Example: console.log(fragment.length);
    length: number;

    // 複製元素，可選擇深層複製
    // Clones the element, with an option for deep cloning
    // Example: const clonedFragment = fragment._$(true);
    _$: (deep?: boolean) => Element;

    // 添加元素
    // Adds a child element or text
    // Example: fragment._child('Text Content'); 
    // Example: fragment._child([document.createElement('div'), 'More Text']);
    _child: (value?: ChildNode | Element | string | number | (ChildNode | Element | string | number)[]) => DocumentFragment;



    // 預計於 2.*.* 版移除 
    // Marked for removal in version 2.*.*

    // 返回子元素的數量，將被移除
    // Returns the number of child elements, to be removed
    // Example: console.log(fragment.$len); 
    $len: number;

    // 返回子元素的陣列，將被移除
    // Returns an array of child elements, to be removed
    // Example: console.log(fragment.$childAll);
    $childAll: Element[];

    // 返回子節點的陣列，將被移除
    // Returns an array of child nodes, to be removed
    // Example: console.log(fragment.$nodeAll);
    $nodeAll: ChildNode[];

    // 返回 DocumentFragment 的 HTML 字串表示，將被移除
    // Returns the HTML string representation of the DocumentFragment, to be removed
    // Example: console.log(fragment.$str);
    $str: string;
};