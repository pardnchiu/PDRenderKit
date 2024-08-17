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
    // 轉換為 JSON 後的值，若無法轉換則為 undefined
    // Converts the string to JSON, returning undefined if conversion fails
    // Example: console.log('{"key":"value"}'.$json);
    $json: JSON | undefined;

    // 轉換為 HTML 實體編碼後的值
    // Converts the string to HTML entity encoding
    // Example: console.log('<div>'.$html);
    $html: string;

    // 轉換為圖片並回傳 Promise
    // Converts the string to an image and returns a Promise
    // Example: 'image_url'.$img.then(img => document.body.appendChild(img));
    $img: Promise<HTMLImageElement | undefined>;

    // 是否為 JSON 格式
    // Checks if the string is in JSON format
    // Example: console.log('{"key":"value"}'.$$json);
    $$json: boolean;

    // 是否為空字串
    // Checks if the string is empty
    // Example: console.log(''.$$empty);
    $$empty: boolean;                               // 是否為空字串

    convertText: (key?: string, value?: string) => string;

    // 替換字串中符合條件的部分
    // Replaces parts of the string that match the condition
    // Example: console.log('Hello, World'.__('World', 'Everyone'));
    __: (target?: RegExp | string, replace?: string) => string;

    // 生成正則表達式
    // Generates a regular expression from the string
    // Example: console.log('pattern'.$regexp('g'));
    $regexp: (flags?: string) => RegExp;

    // 編碼 URI (true: 完整編碼, false: 部分編碼)
    // Encodes the string as a URI (true: full encoding, false: partial encoding)
    // Example: console.log('http://example.com/?q=hello world'.$en(true));
    $en: (component?: Boolean) => String;

    // 解碼 URI (true: 完整解碼, false: 部分解碼)
    // Decodes the string as a URI (true: full decoding, false: partial decoding)
    // Example: console.log('http%3A%2F%2Fexample.com'.$de(true));
    $de: (component?: Boolean) => String;

    // 將字串複製到剪貼簿
    // Copies the string to the clipboard
    // Example: 'Hello, World'.$copy();
    $copy: () => any;

    // 是否等於指定的字串或符合正則表達式
    // Checks if the string is equal to the specified string or matches the regex
    // Example: console.log('Hello'.$$('Hello'));
    $$: (equalTo?: RegExp | String) => boolean;

    // 確認字串為有效 URL，並回傳 Promise
    // Verifies if the string is a valid URL and returns a Promise
    // Example: 'http://example.com'.$$200().then(response => console.log(response));
    $$200: (isImage?: Boolean) => Promise<any>;

    // URL Extension
    // URL 操作
    // URL Operations

    // 將字串轉換為 URL 物件
    // Converts the string to a URL object
    // Example: console.log('http://example.com'.$url);
    $url: URL;

    // 解析 URL 中的查詢參數
    // Parses query parameters from the URL
    // Example: console.log('http://example.com?q=test'.$queryAll);
    $queryAll: { [key: string]: string };

    // 發送 HTTP 請求
    // Sends an HTTP request
    // Example: 'http://example.com'.$req({ method: 'GET' });
    $req: (body: { [key: string]: string }) => void;

    // 推送歷史紀錄並更新 URL
    // Pushes a new history record and updates the URL
    // Example: 'http://example.com'.$history('New Title');
    _history: (title?: string) => URL;

    // 替換歷史紀錄並更新 URL
    // Replaces the current history record and updates the URL
    // Example: 'http://example.com'.$history('New Title');
    __history: (title?: string) => URL;

    // 更新 URL 查詢參數
    // Updates the URL query parameters
    // Example: 'http://example.com'.$query({ key: 'value' });
    _query: (value?: { [key: string]: string }) => URL;

    // 移除 URL 查詢參數
    // Removes URL query parameters
    // Example: 'http://example.com'.$query({ key: 'value' });
    __query: (value?: { [key: string]: string }) => URL;

    // 新增查詢參數
    // Adds query parameters
    // Example: 'http://example.com'.$query_('key', 'value');
    query_: (value?: string | string[]) => URL;

    // 刪除查詢參數
    // Deletes query parameters
    // Example: 'http://example.com'.$query__('key');
    query__: (value?: string | string[]) => URL;

    // 取得指定查詢參數的值
    // Retrieves the value of a specific query parameter
    // Example: console.log('http://example.com?q=test'.$query('q'));
    $query: (key?: string) => string;

    // Element Extension
    // Element 操作
    // Element Operations

    // Font Awesome 圖標元素
    // Font Awesome icon element
    // Example: console.log('fa-camera'.$fa);
    _fa: Element;

    // 轉換為 DOM 元素
    // Converts the string to a single DOM element using querySelector
    // Example: console.log('#element'.$);
    $: Element;

    // 轉換為 DOM 元素陣列
    // Converts the string to an array of DOM elements using querySelectorAll
    // Example: console.log('.elements'.$all);
    $all: Element[];

    // 生成 DOM 元素
    // Generates a DOM element
    // Example: console.log('div#myDiv.class'._('Hello, World'));
    _: (val0?: any, val1?: any) => Element;

    // 預計於 2.*.* 版移除
    // Marked for removal in version 2.*.*

    // 轉換為數字後的值，若無法轉換則為 undefined
    // Converts the string to a number, returning undefined if conversion fails
    // Example: console.log('123'.$num);
    $num: number | undefined;

    // 字串長度
    // Returns the length of the string
    // Example: console.log('Hello'.$len);
    $len: number;

    // 是否為空字串
    // Checks if the string is empty
    // Example: console.log(''.$mt);
    $$mt: boolean;

    // 將字串切割為陣列
    // Splits the string into an array
    // Example: console.log('Hello, World'.$ary(' '));
    $ary: (target?: string | RegExp) => string[];

    // 符合條件的子字串或陣列
    // Returns a matching substring or array
    // Example: console.log('Hello, World'.$fit(/H\w+/));
    $fit: (regex: RegExp) => string | string[] | undefined;
};

interface Number {
    // sec 轉換為日期物件
    // Converts seconds to a Date object
    // Example: console.log((1609459200).$date); // Outputs: Date object representing 2021-01-01T00:00:00Z
    $date: Date;

    // 計算經過的 sec，回傳相對時間的字串
    // Calculates elapsed seconds and returns a relative time string
    // Example: console.log((1609459200).$gone); // Outputs: "2 years ago" (example output)
    $gone: string;

    // Date Extension

    // 完整年份
    // Full year (e.g., 2024)
    // Example: console.log((1609459200).$y);
    $y: number;

    // 年份的最後兩位數 (字串)
    // Last two digits of the year (string)
    // Example: console.log((1609459200).$yy);
    $yy: string;

    // 完整年份
    // Full year (e.g., 2024)
    // Example: console.log((1609459200).$yyyy);
    $yyyy: number;

    // 月份 (1-12)
    // Month (1-12)
    // Example: console.log((1609459200).$M);
    $M: number;

    // 月份 (01-12)
    // Month with leading zero (01-12)
    // Example: console.log((1609459200).$MM);
    $MM: string;

    // 日期 (1-31)
    // Day of the month (1-31)
    // Example: console.log((1609459200).$D);
    $D: number;

    // 日期 (01-31)
    // Day of the month with leading zero (01-31)
    // Example: console.log((1609459200).$DD);
    $DD: string;

    // 星期幾 (0-6)
    // Day of the week (0-6, where 0 is Sunday)
    // Example: console.log((1609459200).$d);
    $d: number;

    // 星期幾 (字串)
    // Day of the week (string, e.g., "Sun", "Mon")
    // Example: console.log((1609459200).$dd);
    $dd: string;

    // 24小時制的時 (0-23)
    // Hours in 24-hour format (0-23)
    // Example: console.log((1609459200).$H);
    $H: number;

    // 24小時制的時 (00-23)
    // Hours in 24-hour format with leading zero (00-23)
    // Example: console.log((1609459200).$HH);
    $HH: string;

    // 12小時制的時 (1-12)
    // Hours in 12-hour format (1-12)
    // Example: console.log((1609459200).$h);
    $h: number;

    // 12小時制的時 (01-12)
    // Hours in 12-hour format with leading zero (01-12)
    // Example: console.log((1609459200).$hh);
    $hh: string;

    // 上下午 (am/pm)
    // AM/PM (lowercase)
    // Example: console.log((1609459200).$a);
    $a: string;

    // 上下午 (AM/PM)
    // AM/PM (uppercase)
    // Example: console.log((1609459200).$A);
    $A: string;

    // 分鐘 (0-59)
    // Minutes (0-59)
    // Example: console.log((1609459200).$m);
    $m: number;

    // 分鐘 (00-59)
    // Minutes with leading zero (00-59)
    // Example: console.log((1609459200).$mm);
    $mm: string;

    // 秒數 (0-59)
    // Seconds (0-59)
    // Example: console.log((1609459200).$s);
    $s: number;

    // 秒數 (00-59)
    // Seconds with leading zero (00-59)
    // Example: console.log((1609459200).$ss);
    $ss: string;

    // 依指定格式轉換為字串
    // Formats the date as a string according to the specified format
    // Example: console.log((1609459200).$format("YYYY-MM-DD HH:mm:ss"));
    $format: (format: string) => string;

    // 預計於 2.*.* 版移除
    // Marked for removal in version 2.*.*

    // 轉換為字串
    // Converts the number to a string
    // Example: console.log((1609459200).$str);
    $str: string;

    // 原始數字
    // Returns the original number
    // Example: console.log((1609459200).$num);
    $num: number;
};

interface Array<T> {
    // 將陣列轉換為 Map，鍵是元素，值是索引
    // Converts the array into a Map, where the keys are elements and the values are their indices
    // Example: console.log(array.$map);
    $map: Map<any, number>;

    // 隨機排序陣列
    // Shuffles the array randomly
    // Example: console.log(array.$random);
    $random: any[];

    // 是否為空陣列
    // Checks if the array is empty
    // Example: console.log(array.$$empty);
    $$empty: boolean;

    // 將值添加到陣列
    // Adds a value or values to the array
    // Example: array._('newValue');
    _: (value?: any | any[]) => any[];

    // 按索引返回陣列元素
    // Returns an element by its index
    // Example: console.log(array.$(0));
    $: (index?: number) => any;

    // 返回指定值的索引
    // Returns the index of the specified value
    // Example: console.log(array.$i('value'));
    $i: (value?: any) => number;

    // 刪除指定索引的元素並返回新陣列
    // Removes the element at the specified index and returns a new array
    // Example: array.$_(0);
    $_: (index?: number) => any[];

    // 檢查陣列是否包含指定值
    // Checks if the array contains the specified value
    // Example: console.log(array.$$('value'));
    $$: (value: any) => boolean;

    // 發送 HTTP 請求
    // Sends an HTTP request using the array as a string
    // Example: array.$req({ key: 'value' });
    $req: (body: { [key: string]: string }) => void;

    // 預計於 2.*.* 版移除
    // Marked for removal in version 2.*.*

    // 陣列長度
    // Returns the length of the array
    // Example: console.log(array.$len);
    $len: number;

    // 檢查陣列是否為空
    // Checks if the array is empty
    // Example: console.log(array.$$mt);
    $$mt: boolean;

    // 將陣列連接成字串
    // Joins the array into a string, optionally using a separator
    // Example: console.log(array.$str(', '));
    $str: (char?: string) => string;

    // 根據函數轉換陣列元素並返回新陣列
    // Transforms the array elements based on a function and returns a new array
    // Example: const newArray = array._$(e => e * 2);
    _$: (value?: (e: any, i: number) => any) => any[];
};

interface Object {
    // 返回包含對象所有鍵和值的 Map 物件
    // Returns a Map object containing all keys and values of the object
    // Example: console.log(obj.$map);
    $map: Map<string, any>;

    // 返回包含對象所有鍵的陣列
    // Returns an array containing all keys of the object
    // Example: console.log(obj.$keys);
    $keys: string[];

    // 返回包含對象所有值的陣列
    // Returns an array containing all values of the object
    // Example: console.log(obj.$vals);
    $vals: any[];

    // 根據鍵返回對象中的值，未指定鍵則返回整個物件
    // Returns the value of the object for the specified key, or the entire object if no key is specified
    // Example: console.log(obj.$('key1'));
    $: (key?: string) => any;

    // 檢查對象是否包含指定鍵
    // Checks if the object contains the specified key
    // Example: console.log(obj.$$('key1'));
    $$: (key?: string) => boolean;

    // 遍歷對象的每個鍵/值對並執行指定操作
    // Iterates over each key/value pair of the object and executes the specified function
    // Example: obj.$forEach((key, value) => console.log(key, value));
    $forEach: (value: (key: string, val: any) => void) => void;
};

interface Map<K, V> {
    // 返回 Map 物件的 JavaScript 物件表示
    // Returns a JavaScript object representation of the Map
    // Example: console.log(map.$obj);
    $obj: { [key: string]: any };

    // 檢查 Map 物件是否為空，返回布林值
    // Checks if the Map object is empty, returning a boolean value
    // Example: console.log(map.$$empty);
    $$empty: boolean;

    // 返回 Map 物件的數量
    // Returns the number of key-value pairs in the Map
    // Example: console.log(map.length);
    length: number;

    // 用於將新的鍵值對添加到 Map 中
    // Adds a new key-value pair to the Map
    // Example: map._('newKey', 'newValue');
    _: (key?: any, value?: any) => Map<any, any>;

    // 用於根據鍵檢索 Map 中的值
    // Retrieves a value from the Map based on its key
    // Example: console.log(map.$('key'));
    $: (key?: any) => any;

    // 預計於 2.*.* 版移除
    // Marked for removal in version 2.*.*

    // 返回 Map 物件的數量
    // Returns the number of key-value pairs in the Map
    // Example: console.log(map.$len);
    $len: number;

    // 檢查 Map 物件是否為空，返回布林值
    // Checks if the Map object is empty, returning a boolean value
    // Example: console.log(map.$mt);
    $mt: boolean;
};

interface Date {
    // 完整年份
    // Full year (e.g., 2024)
    // Example: console.log(date.$y);
    $y: number;

    // 年份的最後兩位數 (字串)
    // Last two digits of the year (string)
    // Example: console.log(date.$yy);
    $yy: string;

    // 完整年份
    // Full year (e.g., 2024)
    // Example: console.log(date.$yyyy);
    $yyyy: number;

    // 月份 (1-12)
    // Month (1-12)
    // Example: console.log(date.$M);
    $M: number;

    // 月份 (01-12)
    // Month with leading zero (01-12)
    // Example: console.log(date.$MM);
    $MM: string;

    // 日期 (1-31)
    // Day of the month (1-31)
    // Example: console.log(date.$D);
    $D: number;

    // 日期 (01-31)
    // Day of the month with leading zero (01-31)
    // Example: console.log(date.$DD);
    $DD: string;

    // 星期幾 (0-6)
    // Day of the week (0-6, where 0 is Sunday)
    // Example: console.log(date.$d);
    $d: number;

    // 星期幾 (字串)
    // Day of the week (string, e.g., "Sun", "Mon")
    // Example: console.log(date.$dd);
    $dd: string;

    // 24小時制的時 (0-23)
    // Hours in 24-hour format (0-23)
    // Example: console.log(date.$H);
    $H: number;

    // 24小時制的時 (00-23)
    // Hours in 24-hour format with leading zero (00-23)
    // Example: console.log(date.$HH);
    $HH: string;

    // 12小時制的時 (1-12)
    // Hours in 12-hour format (1-12)
    // Example: console.log(date.$h);
    $h: number;

    // 12小時制的時 (01-12)
    // Hours in 12-hour format with leading zero (01-12)
    // Example: console.log(date.$hh);
    $hh: string;

    // 上下午 (am/pm)
    // AM/PM (lowercase)
    // Example: console.log(date.$a);
    $a: string;

    // 上下午 (AM/PM)
    // AM/PM (uppercase)
    // Example: console.log(date.$A);
    $A: string;

    // 分鐘 (0-59)
    // Minutes (0-59)
    // Example: console.log(date.$m);
    $m: number;

    // 分鐘 (00-59)
    // Minutes with leading zero (00-59)
    // Example: console.log(date.$mm);
    $mm: string;

    // 秒數 (0-59)
    // Seconds (0-59)
    // Example: console.log(date.$s);
    $s: number;

    // 秒數 (00-59)
    // Seconds with leading zero (00-59)
    // Example: console.log(date.$ss);
    $ss: string;

    // Unix 時間戳記
    // Unix timestamp
    // Example: console.log(date.$timestamp);
    $timestamp: number;

    // 計算經過的時間，回傳相對時間的字串
    // Calculates the elapsed time, returning a relative time string
    // Example: console.log(date.$gone);
    $gone: string;

    // 依指定格式轉換為字串
    // Formats the date as a string according to the specified format
    // Example: console.log(date.$format("YYYY-MM-DD HH:mm:ss"));
    $format: (format: string) => string;

    // 根據提供的配置生成新的日期物件
    // Generates a new Date object based on the provided configuration
    /**
     * Example: 
     * 返回當前月份的第一天
     * const newDate = date.$date({ 
     *     start: true
     * });
     * 返回當前月份的最後一天
     * const newDate = date.$date({ 
     *     end: true
     * });
     * 返回上個月份的第一天
     * const newDate = date.$date({ 
     *     pre: {
     *         start: true
     *     }
     * });
     * 返回上個月份的最後一天
     * const newDate = date.$date({ 
     *     pre: {
     *         end: true
     *     }
     * });
     */
    $date: (body?: { [key: string]: any }) => Date;
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
    // Marked for removal in version 2.*.*

    // 產生 JPEG 圖片的 base64 編碼
    // Generates a base64-encoded string of the image in JPEG format
    // Example: console.log(image.$jpg(100));
    $jpg: (size: number) => string;

    // 產生 PNG 圖片的 base64 編碼
    // Generates a base64-encoded string of the image in PNG format
    // Example: console.log(image.$png(100));
    $png: (size: number) => string;

    // 下載 JPEG 格式的圖片
    // Downloads the image in JPEG format
    // Example: image._downloadJPG('myImage.jpg');
    _downloadJPG: (filename?: string) => void;

    // 下載 PNG 格式的圖片
    // Downloads the image in PNG format
    // Example: image._downloadPNG('myImage.png');
    _downloadPNG: (filename?: string) => void;

    // 下載圖片
    // Downloads the image
    // Example: image._download('image/png', 'myImage.png');
    _download: (mime: string, filename?: string) => void;
};

interface URL {
    // 解析 URL 中的所有查詢參數
    // Parses all query parameters in the URL
    // Example: console.log(url.$queryAll);
    $queryAll: { [key: string]: string };

    /**
     * 根據提供的配置發送 HTTP 請求。
     * Sends an HTTP request using the provided configuration.
     * Example:
     * URL.$req({
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
     * URL.$req({
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
    $req: (body: { [key: string]: string }, once?: boolean) => void;

    // 推送歷史紀錄並更新 URL
    // Pushes a new history record and updates the URL
    // Example: url._history("New Title");
    _history: (title?: string) => URL;

    // 替換歷史紀錄並更新 URL
    // Replaces the current history record and updates the URL
    // Example: url.__history("New Title");
    __history: (title?: string) => URL;

    // 新增 URL 查詢參數
    // Adds or updates query parameters in the URL
    // Example: url._query({ key: "value" });
    _query: (value?: { [key: string]: string }) => URL;

    // 更新 URL 查詢參數
    // Adds or updates query parameters in the URL
    // Example: url._query({ key: "value" });
    __query: (value?: { [key: string]: string }) => URL;

    // 移除 URL 查詢參數
    // Removes query parameters from the URL
    // Example: url.__query({ key: "value" });
    query_: (value?: string | string[]) => URL;

    // 刪除查詢參數
    // Deletes query parameters from the URL
    // Example: url.query__({ key: "value" });
    query__: (value?: string | string[]) => URL;

    // 取得指定查詢參數的值
    // Retrieves the value of a specific query parameter
    // Example: console.log(url.$query("key"));
    $query: (key?: string) => string | null;
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