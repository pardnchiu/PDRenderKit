interface Window {
    PD: any; // 全域變數，用於存取 PD 物件。
    _SVGListener: () => void; // 初始化 SVG 觀察者的函數。
    _LazyListener: () => void; // 初始化懶載觀察者的函數。
    _Listener: (target?: any) => void; // 初始化觀察者的函數，可以接受目標參數。
    $key: (length: number) => string; // 生成指定長度隨機字串的函數。
    $file: (file: any) => Promise<any>; // 讀取檔案並回傳 Promise 的函數。
    $imageFromImageFile: (file: any) => Promise<any>; // 從圖像檔案生成圖片並回傳 Promise 的函數。
    $imageFromVideoFile: (file: any) => Promise<any>; // 從影片檔案生成圖片並回傳 Promise 的函數。
    $blob: (base64: any, mimeType: string) => Blob; // 將 base64 字串轉換為 Blob 物件的函數。
    $cookie: (key: string) => any; // 獲取指定名稱的 Cookie 值。
    _cookie: (name: string, body: any, expire: number) => void; // 設置 Cookie 的函數。
    $: (value: string) => Element; // 選取 DOM 元素的函數。
    $all: (value: string) => Element[]; // 選取所有符合條件的 DOM 元素的函數。
    $url: (value: string) => URL; // 將字串轉換為 URL 物件的函數。
    _child: (value: ChildNode | Element | string | number | (ChildNode | Element | string | number)[], before: ChildNode | Element | number | undefined) => void;
    __child: (value: ChildNode | Element | string | number | (ChildNode | Element | string | number)[]) => void
}

interface String {
    $len: number; // 字串長度
    $num: number | undefined; // 轉換為數字後的值，若無法轉換則為 undefined
    $json: JSON | undefined; // 轉換為 JSON 後的值，若無法轉換則為 undefined
    $html: string; // 轉換為 HTML 實體編碼後的值
    $img: Promise<any>; // 轉換為圖片並回傳 Promise
    $$json: boolean; // 是否為 JSON 格式
    $$mt: boolean; // 是否為空字串

    convertText: (key?: string, value?: string) => string; // 將模板字串中的變數替換為指定值

    __: (target?: string | RegExp, replace?: string) => string; // 替換字串中符合條件的部分
    $ary: (target?: string | RegExp) => string[]; // 將字串切割為陣列
    $regexp: (flags?: string) => RegExp; // 生成正則表達式
    $fit: (regex: RegExp) => string | string[] | undefined; // 符合條件的子字串或陣列
    $en: (component: Boolean) => String; // 編碼 URI (true: 完整編碼, false: 部分編碼)
    $de: (component: Boolean) => String; // 解碼 URI (true: 完整解碼, false: 部分解碼)
    $copy: () => any; // 將字串複製到剪貼簿
    $$: (equalTo?: String | RegExp) => boolean; // 是否等於指定的字串或符合正則表達式
    $$200: (isImage?: Boolean) => Promise<any>; // 確認字串為有效 URL，並回傳 Promise

    $url: URL; // 將字串轉換為 URL 物件
    $queryAll: { [key: string]: string }; // 解析 URL 中的查詢參數

    $req: (body: { [key: string]: string }) => void; // 發送 HTTP 請求
    _history: (title?: string) => URL; // 推送歷史紀錄並更新 URL
    __history: (title?: string) => URL; // 替換歷史紀錄並更新 URL
    _query: (value?: { [key: string]: string }) => URL; // 更新 URL 查詢參數
    __query: (value?: { [key: string]: string }) => URL; // 移除 URL 查詢參數
    query_: (value?: string | string[]) => URL; // 新增查詢參數
    query__: (value?: string | string[]) => URL; // 刪除查詢參數
    $query: (key?: string) => string; // 取得指定查詢參數的值

    _fa: Element; // Font Awesome 圖標元素
    $: Element; // 轉換為 DOM 元素
    $all: Element[]; // 轉換為 DOM 元素陣列

    _: (val0?: any, val1?: any) => Element; // 生成 DOM 元素
};

interface Number {
    $str: string; // 轉換為字串
    $num: number; // 原始數字
    $date: Date; // 轉換為日期物件
    $y: number; // 完整年份
    $yy: string; // 年份的最後兩位數 (字串)
    $yyyy: number; // 完整年份
    $M: number; // 月份 (1-12)
    $MM: string; // 月份 (01-12)
    $D: number; // 日期 (1-31)
    $DD: string; // 日期 (01-31)
    $d: number; // 星期幾 (0-6)
    $dd: string; // 星期幾 (字串)
    $H: number; // 24小時制的時 (0-23)
    $HH: string; // 24小時制的時 (00-23)
    $h: number; // 12小時制的時 (1-12)
    $hh: string; // 12小時制的時 (01-12)
    $a: string; // 上下午 (am/pm)
    $A: string; // 上下午 (AM/PM)
    $m: number; // 分鐘 (0-59)
    $mm: string; // 分鐘 (00-59)
    $s: number; // 秒數 (0-59)
    $ss: string; // 秒數 (00-59)
    $gone: string; // 計算經過的時間，回傳相對時間的字串

    $format: (format: string) => string; // 依指定格式轉換為字串
}

interface Array<T> {
    $len: number; // 陣列長度
    $map: Map<any, number>; // 將陣列轉換為 Map，鍵是元素，值是索引
    $random: any[]; // 隨機排序陣列
    $$mt: boolean; // 檢查陣列是否為空

    _: (value?: any | any[]) => any[]; // 將值添加到陣列
    _$: (value?: (e: any, i: number) => any) => any[]; // 根據函數轉換陣列元素並返回新陣列
    $: (index?: number) => any; // 按索引返回陣列元素
    $i: (value?: any) => number; // 返回指定值的索引
    $str: (char?: string) => string; // 將陣列連接成字串
    $req: (body: { [key: string]: string }) => void; // 發送 HTTP 請求
    $_: (index?: number) => any[]; // 刪除指定索引的元素並返回新陣列
    $$: (value: any) => boolean; // 檢查陣列是否包含指定值
};

interface Object {
    $map: Map<string, any>; // 返回包含對象所有鍵和值的 Map 物件
    $keys: string[]; // 返回包含對象所有鍵的陣列
    $vals: any[]; // 返回包含對象所有值的陣列
    $: (key?: string) => any; // 根據鍵返回對象中的值，未指定鍵則返回整個物件
    $$: (key?: string) => boolean; // 檢查對象是否包含指定鍵
    $forEach: (value: (key: string, val: any) => void) => void; // 遍歷對象的每個鍵/值對並執行指定操作
};

interface Map<K, V> {
    $obj: { [key: string]: any }; // 返回 Map 物件的 JavaScript 物件表示
    $len: number; // 返回 Map 物件的數量
    $mt: boolean; // 檢查 Map 物件是否為空，返回布林值

    _: (key?: any, value?: any) => Map<any, any>; // 用於將新的鍵值對添加到 Map 中
    $: (key?: any) => any; // 用於根據鍵檢索 Map 中的值
};

interface Date {
    $y: number; // 完整年份
    $yy: string; // 年份的最後兩位數 (字串)
    $yyyy: number; // 完整年份
    $M: number; // 月份 (1-12)
    $MM: string; // 月份 (01-12)
    $D: number; // 日期 (1-31)
    $DD: string; // 日期 (01-31)
    $d: number; // 星期幾 (0-6)
    $dd: string; // 星期幾 (字串)
    $H: number; // 24小時制的時 (0-23)
    $HH: string; // 24小時制的時 (00-23)
    $h: number; // 12小時制的時 (1-12)
    $hh: string; // 12小時制的時 (01-12)
    $a: string; // 上下午 (am/pm)
    $A: string; // 上下午 (AM/PM)
    $m: number; // 分鐘 (0-59)
    $mm: string; // 分鐘 (00-59)
    $s: number; // 秒數 (0-59)
    $ss: string; // 秒數 (00-59)
    $timestamp: number; // Unix 時間戳記
    $gone: string; // 計算經過的時間，回傳相對時間的字串

    $format: (format: string) => string; // 依指定格式轉換為字串
    $date: (body?: { [key: string]: any }) => Date; // 根據提供的配置生成新的日期物件
};

interface Image {
    $jpg: (size: number) => string; // 產生 JPEG 圖片的 base64 編碼
    $png: (size: number) => string; // 產生 PNG 圖片的 base64 編碼
    $base64: (mime?: string) => string; // 產生圖片的 base64 編碼（默認為 image/jpeg）
    $blob: (mime?: string) => Blob; // 產生圖片的 Blob 物件（默認為 image/jpeg）
    _downloadJPG: (filename?: string) => void; // 下載 JPEG 格式的圖片
    _downloadPNG: (filename?: string) => void; // 下載 PNG 格式的圖片
};

interface URL {
    $queryAll: { [key: string]: string }; // 解析 URL 中的所有查詢參數

    /**
     * 將字符串轉換為 URL 並根據提供的配置發送 HTTP 請求。
     * ex.
     * "URL".$req({
     *     method: "POST",
     *     json: { test: "test" },
     *     header: {
     *         "Content-Type": "application/json;charset=UTF-8"
     *     }
     * }).then(res => {
     *     console.log("Success:", res);
     * }).catch(err => {
     *     console.error("Error:", err);
     * });
     * 
     * "URL".$req({
     *     method: "POST",
     *     json: { test: "test" },
     *     files: [FILES],
     *     tag: "files[]"
     * }).then(res => {
     *     console.log("Success:", res);
     * }).catch(err => {
     *     console.error("Error:", err);
     * });
     */
    $req: (body: { [key: string]: string }) => void; // 發送 HTTP 請求

    _history: (title?: string) => URL; // 推送歷史紀錄並更新 URL
    __history: (title?: string) => URL; // 替換歷史紀錄並更新 URL
    _query: (value?: { [key: string]: string }) => URL; // 新增或更新 URL 查詢參數
    __query: (value?: { [key: string]: string }) => URL; // 移除 URL 查詢參數
    query_: (value?: string | string[]) => URL; // 新增查詢參數
    query__: (value?: string | string[]) => URL; // 刪除查詢參數
    $query: (key?: string) => string | null; // 取得指定查詢參數的值
};


interface Element {
    $: string; // 返回元素的 innerHTML
    $x: number; // 返回元素的 scrollLeft
    $y: number; // 返回元素的 scrollTop
    $w: number; // 返回元素的 clientWidth
    $h: number; // 返回元素的 clientHeight
    $sw: number; // 返回元素的 scrollWidth
    $sh: number; // 返回元素的 scrollHeight
    $nw: number; // 返回元素的 naturalWidth
    $nh: number; // 返回元素的 naturalHeight
    $len: number; // 返回子元素的數量
    $i: number; // 返回在父元素中的索引
    $classAll: string[]; // 返回元素的 classList 的陣列
    $attrAll: { [key: string]: string }; // 返回元素的 attributes 的陣列
    $childAll: Element[]; // 返回子元素的陣列
    $nodeAll: ChildNode[]; // 返回子節點的陣列
    $text: string; // 返回純文字的內容
    $html: string; // 返回元素的 innerHTML

    _: (innerHTML?: string) => Element; // 添加內容至元素的 innerHTML
    __: (innerHTML?: string) => Element; // 覆蓋元素的 innerHTML 內容
    _$: (deep?: boolean) => Element; // 複製元素
    _x: (value?: number) => Element; // 更新元素的 scrollLeft
    _y: (value?: number) => Element; // 更新元素的 scrollTop
    _w: (value?: number | string) => Element; // 更新元素的 style.width
    _h: (value?: number | string) => Element; // 更新元素的 style.height
    /**
     * 批量設置內邊距
     * 例如：
     * ```
     * element._p(10); // 設置四個方向的內邊距為 10
     * element._p(10, 20); // 設置上下內邊距為 10，左右內邊距為 20
     * element._p(10, 20, 30); // 設置上內邊距為 10，左右內邊距為 20，下內邊距為 30
     * element._p(10, 20, 30, 40); // 設置上內邊距為 10，右內邊距為 20，下內邊距為 30，左內邊距為 40
     * ```
     */
    _p: (top?: number | string, right?: number | string, bottom?: number | string, left?: number | string) => Element;
    _pt: (value?: number | string) => Element; // 更新元素的內邊距: 上
    _pl: (value?: number | string) => Element; // 更新元素的內邊距: 左
    _pb: (value?: number | string) => Element; // 更新元素的內邊距: 下
    _pr: (value?: number | string) => Element; // 更新元素的內邊距: 右
    /**
      * 批量設置邊距
      * 例如：
      * ```
      * element._m(10); // 設置四個方向的邊距為 10
      * element._m(10, 20); // 設置上下邊距為 10，左右邊距為 20
      * element._m(10, 20, 30); // 設置上邊距為 10，左右邊距為 20，下邊距為 30
      * element._m(10, 20, 30, 40); // 設置上邊距為 10，右邊距為 20，下邊距為 30，左邊距為 40
      * ```
      */
    _m: (top?: number | string, right?: number | string, bottom?: number | string, left?: number | string) => Element;
    _mt: (value?: number | string) => Element; // 更新元素的外邊距: 上
    _ml: (value?: number | string) => Element; // 更新元素的外邊距: 左
    _mb: (value?: number | string) => Element; // 更新元素的外邊距: 下
    _mr: (value?: number | string) => Element; // 更新元素的外邊距: 右

    class_: (value?: string | string[]) => Element; // 移除 class
    class__: () => Element; // 清除 class
    _class: (value?: string | string[]) => Element; // 添加 class
    __class: (value?: string | string[]) => Element; // 覆蓋 class
    $$class: (value?: string) => boolean; // 判斷 class 是否存在
    $$class_: (bool?: boolean, value?: string | string[]) => Element; // 假如 true 則移除 class
    $$_class: (bool?: boolean, value?: string | string[]) => Element; // 假如 true 則添加 class

    style_: (key?: string | string[]) => Element; // 移除 style
    _style: (value?: { [key: string]: string }) => Element; // 添加 style
    $style: (key?: string) => string | undefined; // 取得 style

    data_: (key?: string | string[]) => Element; // 移除 data
    _data: (value?: { [key: string]: string | number }) => Element; // 添加 data

    attr_: (key?: string | string[]) => Element; // 移除 attribute
    _attr: (value?: { [key: string]: string | number }) => Element; // 添加 attribute
    $attr: (key?: string) => string | null; // 取得 attribute
    $$attr: (key?: string) => boolean; // 判斷 attribute 是否存在

    _child: (value?: ChildNode | Element | string | number | (ChildNode | Element | string | number)[], before?: ChildNode | Element | number) => Element; // 添加元素
    __child: (value?: ChildNode | Element | string | number | (ChildNode | Element | string | number)[]) => Element; // 覆蓋內容
    $child: (value?: string | number | (string | number)[]) => Element | undefined; // 取得子元素
    $parent: (layer?: number) => Element | undefined; // 取得父元素
    $pre: (index?: number) => Element | undefined; // 取得前元素
    $next: (index?: number) => Element | undefined; // 取得後元素

    $rm: () => void; // 移除元素

    $sel: (filter?: string) => Element | undefined; // 選擇器 querySelector
    $selAll: (filter?: string) => Element[]; // 選擇器 querySelectorAll

    _video: (value: { [key: string]: any }) => Element; // 設定 video 屬性

    _display: (value: string) => Element; // 擴展 style 顯示屬性
};

interface DocumentFragment {
    $len: number; // 返回子元素的數量
    $childAll: Element[]; // 返回子元素的陣列
    $nodeAll: ChildNode[]; // 返回子節點的陣列
    $text: string; // 返回純文字的內容
    $html: string; // 返回 innerHTML 的內容
    $str: string; // 返回 DocumentFragment 的字串表示

    _$: (deep?: boolean) => Element; // 複製元素
    _child: (value?: ChildNode | Element | string | number | (ChildNode | Element | string | number)[]) => DocumentFragment; // 添加元素
    $child: (value?: string | number | (string | number)[]) => Element | undefined; // 取得子元素
}