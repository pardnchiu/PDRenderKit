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
    // 將字串解析為 JSON 物件，解析失敗時返回 undefined
    $json: $JSON | undefined;
    // 將字串轉換為 HTML 安全的實體編碼
    $html: string;
    // 檢查字串是否可以被解析為有效的 JSON
    $$json: boolean;
    // 檢查字串是否為空（去除首尾空白後長度為 0）
    $$empty: boolean;
    // 將字串內容複製到系統剪貼簿
    copy: () => any;
    // 替換字串中的指定內容，如果搜索值為空則返回原字串
    __: (search_value: RegExp | string, replace_value: string) => string;
    // 將字串轉換為正則表達式，可選擇指定標誌
    $regexp: (flags?: string) => RegExp;
    // 檢查字串是否完全匹配指定的字串或正則表達式
    $$: (search_value?: RegExp | String) => boolean;
    // 對字串進行 URI 編碼
    $en: (include_component?: Boolean) => String;
    // 對字串進行 URI 解碼
    $de: (include_component?: Boolean) => String;

    // * URL 擴展

    // 將字串解析為 URL 物件
    $url: URL;
    // 將字串轉換為 Image 物件並返回 Promise
    $img: Promise<HTMLImageElement | undefined>;
    // 解析 URL 的所有查詢參數為物件
    $queryAll: { [key: string]: string };
    // 驗證 URL 是否可訪問（HTTP 狀態 200），圖片 URL 會返回 Image 物件
    $$200: (isImage?: Boolean) => Promise<any>;
    // 向 URL 發送 HTTP 請求
    $req: (request_body: $JSON) => void;
    // 將當前 URL 推入瀏覽器歷史記錄
    _history: (page_title?: string) => URL;
    // 替換當前瀏覽器歷史記錄項
    __history: (page_title?: string) => URL;
    // 更新或添加 URL 查詢參數
    _query: (query_value?: { [key: string]: string }) => URL;
    // 重置 URL 查詢參數
    __query: (query_value?: { [key: string]: string }) => URL;
    // 從 URL 中刪除指定的查詢參數
    query_: (target_value?: string | string[]) => URL;
    // 清除 URL 中的所有查詢參數
    query__: () => URL;
    // 獲取 URL 中指定查詢參數的值
    $query: (target_key?: string) => string;

    // * Element 擴展

    // 創建 Font Awesome 圖標元素
    _fa: Element;
    // 選擇單個 DOM 元素（支援 ID 和 CSS 選擇器）
    $: Element;
    // 選擇多個 DOM 元素（返回陣列）
    $all: Element[];
    // 根據字串描述創建 DOM 元素，支援屬性和子元素設置
    _: (val0?: any, val1?: any) => Element;

    // 將字串轉換為數字，轉換失敗時返回 undefined
    // ! 預計於 2.*.* 版移除
    $num: number | undefined;
    // 獲取字串的字元長度
    // ! 預計於 2.*.* 版移除
    $len: number;
    // 檢查字串是否為空（用 $$empty 替代）
    // ! 預計於 2.*.* 版移除
    $$mt: boolean;
    // 將字串分割為陣列
    // ! 預計於 2.*.* 版移除
    $ary: (target?: string | RegExp) => string[];
    // 使用正則表達式匹配字串並返回結果
    // ! 預計於 2.*.* 版移除
    $fit: (regex: RegExp) => string | string[] | undefined;
    // 複製字串到剪貼簿（用 copy 替代）
    // ! 預計於 2.*.* 版移除
    $copy: () => any;
};

interface Number {

    $random: string;

    $ASCII: string;

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

    // 計算陣列所有數值元素的總和
    $sum: number;

    // 返回隨機打亂元素順序後的新陣列
    $shuffle: any[];

    // 將陣列轉換為 Map 對象，其中鍵為元素值，值為該元素在陣列中的索引
    $map: Map<any, number>;

    // 檢查陣列是否為空
    $$empty: boolean;

    // 在指定索引處插入單個值或陣列，若未指定索引則添加到陣列末尾
    _: (insert_value: any | any[], insert_index?: number) => any[];

    // 根據給定索引獲取元素，支持負數索引（從陣列末尾開始計數）
    $: (value_index: number) => any;

    // 查找指定值在陣列中的索引，如果不存在則返回 undefined
    $i: (target_value: any) => number;

    // 刪除指定索引處的元素並返回修改後的新陣列
    $_: (value_index: number) => any[];

    /// 檢查陣列是否包含指定值，若不提供參數則檢查陣列是否為非空
    $$: (target_value?: any) => boolean;

    // * String 擴展

    // 使用陣列元素作為 URL 路徑發送 HTTP 請求
    $req: (body: $JSON) => void;

    // 獲取陣列長度
    // ! 預計於 2.*.* 版移除
    $len: number;

    // 檢查陣列是否為空（將被 $$empty 替代）
    // ! 預計於 2.*.* 版移除
    $$mt: boolean;

    // 隨機排序陣列（將被 $shuffle 替代）
    // ! 預計於 2.*.* 版移除
    $random: any[];

    // 將陣列元素連接為字串，可指定分隔符
    // ! 預計於 2.*.* 版移除
    $str: (char?: string) => string;

    // 對陣列每個元素應用轉換函數並返回新陣列
    // ! 預計於 2.*.* 版移除
    _$: (value?: (e: any, i: number) => any) => any[];
};

interface Object {

    // 返回一個包含物件所有可枚舉屬性鍵名的陣列
    $keys: string[];

    // 返回一個包含物件所有可枚舉屬性值的陣列
    $vals: any[];

    // 將物件轉換為 Map 物件，鍵為屬性名，值為屬性值
    $map: Map<string, any>;

    // 設置或更新物件指定鍵的值，預設會替換已存在的值
    _: (target_key: string | number, target_value: any, replace_value?: boolean) => { [key: string]: any };

    // 檢查物件是否包含指定的鍵。如果未提供鍵，則檢查物件是否為空
    $$: (target_key?: string | number) => boolean;

    // 遍歷物件的可枚舉屬性，對每個鍵值對執行指定的回調函數
    forEach: (callback_function: (key: string, val: any) => void) => void;

    // 與 forEach 功能相同，用於向後兼容
    // ! 預計於 2.*.* 版移除
    $forEach: (callback_function: (key: string, val: any) => void) => void;
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

    // 獲取鍵值對數量（用 length 替代）
    // ! 預計於 2.*.* 版移除
    $len: number;

    // 檢查是否為空（用 $$empty 替代）
    // ! 預計於 2.*.* 版移除
    $mt: boolean;

    // 轉換為普通 JS 對象（用 $json 替代）
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
    // 獲取元素的 innerHTML 內容
    $: string;

    // 獲取元素的完整 HTML 結構，包括元素本身
    $html: string;

    // 獲取元素的水平滾動位置
    $x: number;

    // 獲取元素的垂直滾動位置
    $y: number;

    // 獲取元素的可視寬度
    $w: number;

    // 獲取元素的可視高度
    $h: number;

    // 獲取元素的完整滾動寬度，包括不可見部分
    $sw: number;

    // 獲取元素的完整滾動高度，包括不可見部分
    $sh: number;

    // 獲取圖片元素的原始寬度
    $nw: number;

    // 獲取圖片元素的原始高度
    $nh: number;

    // 獲取元素的純文字內容，去除 HTML 標籤 (不包含子元素)
    $text: string;

    // 獲取元素在其父元素中的索引位置
    $i: number;

    // 獲取元素的所有屬性，以物件形式返回
    $attributes: { [key: string]: string };

    // 獲取元素的所有類別名稱，以陣列形式返回
    $classList: string[];

    // 獲取元素的所有子元素，以陣列形式返回
    $children: Element[];

    // 獲取元素的所有子節點，包括文字節點和註釋節點
    $childNodes: ChildNode[];

    // 獲取元素子元素的數量
    length: number;

    // 在元素的 innerHTML 末尾添加內容
    _: (insert_value: any) => Element;

    // 清空並重新設置元素的 innerHTML 內容
    __: (insert_value?: any) => Element;

    // 複製元素，可選擇是否深度複製
    _$: (clone_deep?: boolean) => Element;

    // 設置元素的水平滾動位置
    _x: (scroll_value?: number) => Element;

    // 設置元素的垂直滾動位置
    _y: (scroll_value?: number) => Element;

    // 設置元素的寬度樣式
    _w: (targt_value?: number | string) => Element;

    // 設置元素的高度樣式
    _h: (targt_value?: number | string) => Element;

    // 設置元素的上內邊距
    _paddingT: (change_value?: number | string) => Element;

    // 設置元素的左內邊距
    _paddingL: (change_value?: number | string) => Element;

    // 設置元素的下內邊距
    _paddingB: (change_value?: number | string) => Element;

    // 設置元素的右內邊距
    _paddingR: (change_value?: number | string) => Element;

    // 設置元素的上外邊距
    _marginT: (change_value?: number | string) => Element;

    // 設置元素的左外邊距
    _marginL: (change_value?: number | string) => Element;

    // 設置元素的下外邊距
    _marginB: (change_value?: number | string) => Element;

    // 設置元素的右外邊距
    _marginR: (change_value?: number | string) => Element;

    // 一次性設置元素的所有內邊距
    _padding: (top_value: number | string, right_value?: number | string, bottom_value?: number | string, left_value?: number | string) => Element;

    // 一次性設置元素的所有外邊距
    _margin: (top_value: number | string, right_value?: number | string, bottom_value?: number | string, left_value?: number | string) => Element;

    // 批量添加或修改元素的樣式
    _style: (change_value: { [key: string]: string }) => Element;

    // 批量添加或修改元素的 data 屬性
    _data: (change_value: { [key: string]: string | number }) => Element;

    // 批量添加或修改元素的屬性
    _attr: (change_value: { [key: string]: string | number }) => Element;

    // 添加一個或多個類別名稱到元素
    _class: (change_value: string | string[]) => Element;

    // 從元素中移除一個或多個類別名稱
    class_: (change_value: string | string[]) => Element;

    // 從元素中移除指定的樣式
    style_: (change_value: string | string[]) => Element;

    // 從元素中移除指定的 data 屬性
    data_: (change_value: string | string[]) => Element;

    // 從元素中移除指定的屬性
    attr_: (change_value: string | string[]) => Element;

    // 獲取元素指定樣式的值
    $style: (target_value: string) => string | undefined;

    // 獲取元素指定屬性的值
    $attr: (target_value: string) => string | undefined;

    // 獲取元素指定 data 屬性的值
    $data: (target_value: string) => string | undefined;

    // 移除元素的所有類別名稱
    class__: () => Element;

    // 清空並重新設置元素的類別名稱
    __class: (class_value?: string | string[]) => Element;

    // 檢查元素是否包含指定的類別名稱
    $$class: (value: string) => boolean;

    // 根據條件添加或移除類別名稱
    $$class_: (check_bool?: boolean, class_value?: string | string[]) => Element;

    // 檢查元素是否包含指定的 data 屬性，或其值是否符合指定值
    $$data: (key: string, value?: string) => boolean;

    // 檢查元素是否包含指定的屬性，或其值是否符合指定值
    $$attr: (key: string, value?: string) => boolean;

    // 添加子元素或內容到元素中
    _child: (value?: ChildNode | Element | string | number | (ChildNode | Element | string | number)[], before?: ChildNode | Element | number) => Element;

    // 清空並重新設置元素的子元素或內容
    __child: (value?: ChildNode | Element | string | number | (ChildNode | Element | string | number)[]) => Element;

    // 獲取指定的子元素
    $child: (value?: string | number | (string | number)[]) => Element | undefined;

    // 獲取元素的父元素，可指定層級
    $parent: (layer_count?: number) => Element | undefined;

    // 獲取元素的前一個兄弟元素，可指定偏移量
    $pre: (layer_count?: number) => Element | undefined;

    // 獲取元素的後一個兄弟元素，可指定偏移量
    $next: (layer_count?: number) => Element | undefined;

    // 使用 CSS 選擇器查找單個元素
    $sel: (querySelector: string) => Element | undefined;

    // 使用 CSS 選擇器查找多個元素
    $selAll: (querySelector: string) => Element[];

    // 設置元素的 href 屬性並將 target 設為 _self
    _go: (href_value: string) => Element;

    // 設置元素的 href 屬性並將 target 設為 _blank
    _open: (href_value: string) => Element;

    // 設置 video 元素的屬性
    _video: (value: { [key: string]: any }) => Element;

    // 設置元素的 display 樣式
    _display: (value: string) => Element;

    // 將元素水平滾動到指定位置
    scrollToX: (offset_value: number) => Element;

    // 將元素垂直滾動到指定位置
    scrollToY: (offset_value: number) => Element;

    // 將元素滾動到頂部
    scrollToT: () => Element;

    // 將元素滾動到最左側
    scrollToL: () => Element;

    // 將元素滾動到底部
    scrollToB: () => Element;

    // 將元素滾動到最右側
    scrollToR: () => Element;

    // * FormData 擴展

    // 獲取表單元素的 FormData 對象
    $formData: FormData | undefined;

    // 將表單元素的 FormData 轉換為 Map 對象
    $map: Map<string, any> | undefined;

    // 將表單元素的 FormData 轉換為 JSON 對象
    $json: $JSON | undefined;

    // ! 待移除

    // 獲取子元素數量
    // ! 預計於 2.*.* 版移除
    $len: number;

    // 獲取元素的所有屬性，以物件形式返回
    // ! 預計於 2.*.* 版移除
    $attrAll: { [key: string]: string };

    // 獲取元素的所有類別名稱，以陣列形式返回
    // ! 預計於 2.*.* 版移除
    $classAll: string[];

    // 獲取元素的所有子元素，以陣列形式返回
    // ! 預計於 2.*.* 版移除
    $childAll: Element[];

    // 獲取元素的所有子節點，包括文字節點和註釋節點
    // ! 預計於 2.*.* 版移除
    $nodeAll: ChildNode[];

    // 一次性設置元素的所有內邊距
    // ! 預計於 2.*.* 版移除
    _p: (top?: number | string, right?: number | string, bottom?: number | string, left?: number | string) => Element;

    // 設置元素的上內邊距
    // ! 預計於 2.*.* 版移除
    _pt: (value?: number | string) => Element;

    // 設置元素的左內邊距
    // ! 預計於 2.*.* 版移除
    _pl: (value?: number | string) => Element;

    // 設置元素的下內邊距
    // ! 預計於 2.*.* 版移除
    _pb: (value?: number | string) => Element;

    // 設置元素的右內邊距
    // ! 預計於 2.*.* 版移除
    _pr: (value?: number | string) => Element;

    // 一次性設置元素的所有外邊距
    // ! 預計於 2.*.* 版移除
    _m: (top?: number | string, right?: number | string, bottom?: number | string, left?: number | string) => Element;

    // 設置元素的上外邊距
    // ! 預計於 2.*.* 版移除
    _mt: (value?: number | string) => Element;

    // 設置元素的左外邊距
    // ! 預計於 2.*.* 版移除
    _ml: (value?: number | string) => Element;

    // 設置元素的下外邊距
    // ! 預計於 2.*.* 版移除
    _mb: (value?: number | string) => Element;

    // 設置元素的右外邊距
    // ! 預計於 2.*.* 版移除
    _mr: (value?: number | string) => Element;

    // 移除元素
    // ! 預計於 2.*.* 版移除
    $rm: () => void;

    // 根據條件添加類別名稱
    // ! 預計於 2.*.* 版移除
    $$_class: (bool?: boolean, value?: string | string[]) => Element;
};

interface DocumentFragment {
    // 返回 DocumentFragment 的 HTML 字串表示
    $html: string;

    // 返回子元素的陣列
    $children: Element[];

    // 返回子節點的陣列
    $childNodes: ChildNode[];

    // 返回子元素的數量
    length: number;

    // 複製元素，可選擇深層複製
    _$: (deep?: boolean) => Element;

    // 添加元素
    _child: (value?: ChildNode | Element | string | number | (ChildNode | Element | string | number)[]) => DocumentFragment;

    // 返回子元素的數量，將被移除
    // ! 預計於 2.*.* 版移除 
    $len: number;

    // 返回子元素的陣列，將被移除
    // ! 預計於 2.*.* 版移除 
    $childAll: Element[];

    // 返回子節點的陣列，將被移除
    // ! 預計於 2.*.* 版移除 
    $nodeAll: ChildNode[];

    // 返回 DocumentFragment 的 HTML 字串表示，將被移除
    // ! 預計於 2.*.* 版移除 
    $str: string;
};