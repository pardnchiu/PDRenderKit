# PDRenderKit (JavaScript Library)

![](https://img.shields.io/badge/tag-JavaScript%20Library-bb4444) ![](https://img.shields.io/github/license/pardnchiu/PDRenderKit?color=44bb44) ![](https://img.shields.io/badge/creator-Pardn%20Chiu-4444bb)<br>
![](https://img.shields.io/github/v/release/pardnchiu/PDRenderKit?color=bbbb44) ![](https://img.shields.io/npm/v/pdrenderkit?color=44bbbb) ![](https://img.shields.io/github/size/pardnchiu/PDRenderKit/dist%2FPDRenderKit.js?color=bb44bb)<br>
[![](https://img.shields.io/badge/read-English%20Version-ffffff)](https://github.com/pardnchiu/PDRenderKit/blob/main/README.md)

PDRenderKit 是一個輕量化的前端框架，用於分離前端介面和資料邏輯<br>
提高代碼的可維護性和可讀性，同時減少開發複雜度。

## Feature

- ### UI 和資料邏輯分離
    將前端介面與資料邏輯分開，創建更清晰的結構，簡化維護工作。

- ### 減少重複代碼
    減少重複的代碼段，提高代碼簡潔性。

- ### 提高代碼可讀性
    模組化設計提升代碼可讀性，使其更易於理解和協作。

- ### 監控資料變更
    基於資料變更自動更新用戶介面，減少手動 DOM 操作步驟。

- ### 自動渲染
    減少手動 DOM 操作，專注於應用的邏輯。

- ### 輕量化
    保證全功能的同時，最小化對網站速度的影響。

### 創建者

<img src="https://pardn.io/image/head-s.jpg" align="left" style="float: left; margin-right: 0.5rem; width: 96px; height: 96px;" />

<h4 style="padding-top: 0">邱敬幃 Pardn Chiu</h4>

[![](https://pardn.io/image/mail.svg)](mailto:mail@pardn.ltd) [![](https://skillicons.dev/icons?i=linkedin)](https://linkedin.com/in/pardnchiu) 

### 許可證

此源代碼專案已根據 [GPL-3.0](https://github.com/pardnchiu/PDRenderKit/blob/main/LICENSE) 許可證授權。

### 使用方法

- #### 直接下載套件
    ```Shell
    npm install pdrenderkit
    ```

- #### 或通過 `cdn.jsdelivr.new` 引入
    ```HTML
    <script src="https://cdn.jsdelivr.net/gh/pardnchiu/PDRenderKit@[VERSION]/dist/PDRenderKit.js" copyright="Pardn Ltd">
    ```

- #### PD (formerly named $dom)
    自動渲染：加載自動渲染並在檢測到資料變更後自動渲染。
    | tag | description |
    | --- | --- |
    | {{value}} | 將文字插入到 HTML 標籤中，並根據資料變更更新值。 |
    | :path | 將外部文件中的 HTML 片段加載到當前頁面。 |
    | :html | 使用文字替換元素的 innerHTML。 |
    | :for | 支持 item in items、(item, index) in items、(key, value) in object。<br>遍歷數據集合，為重複數據顯示生成相應的 HTML 元素。 |
    | :if<br>:else-if<br>:else | 根據指定條件顯示或隱藏元素，為實現分支邏輯添加多種選項。 |
    | :model | 將資料綁定到表單元素（如 input），當輸入更改時自動更新資料。 |
    | :hide | 隱藏元素，根據特定條件顯示它們。 |
    | :once | 只執行一次綁定或操作。 |
    | :[attr] | 設定元素屬性，例如 ID、class、圖像來源等。<br>例如：:id/:class/:src/:alt/:href... |
    | @[event] | 添加事件監聽器，當事件觸發時執行指定操作。<br>例如：@click/@input/@mousedown... |
    | :@[event] | 為迴圈內的單個元素設置事件處理程序，允許為每個元素設置不同的事件處理。 |
    - ##### `:path` / `:html`
        *確保在測試 `:path` 時禁用瀏覽器中的本地文件限制或使用實時服務器。*
        - test.html
            ```html
            <h1>path heading</h1>
            <p>path content</p>
            ```
        - index.html
            ```html
            <body id="app">
                <section :path="./test.html"></section>
                <section :html="html"></section>
            </body>
            <script>
                const app = new PD({
                    id: "app",
                    data: {
                        html: "<b>innerHtml</b>"
                    }
                });
            </script>
            ```
        - Result
            ```html
            <body id="app">
                <h1>path heading</h1>
                <p>path content</p>
                <section>
                    <b>innerHtml</b>
                </section>
            </body>
            ```
    - ##### `:for`
        - index.html
            ```html
            <body id="app">
                <ul>
                    <li :for="(item, index) in ary" :id="item" :index="index">{{ item }} {{ CALC(index + 1) }}</li>
                </ul>
            </body>
            <script>
                const app = new PD({
                    id: "app",
                    data: {
                        ary: ["test1", "test2", "test3"]
                    }
                });
            </script>
            ```
        - Result
            ```html
            <body id="app">
                <li id="test1" index="0">test1 1</li>
                <li id="test2" index="1">test2 2</li>
                <li id="test3" index="2">test3 3</li>
            </body>
            ```
    - ##### 嵌套 `:for` 迴圈 
        - index.html
            ```html
            <body id="app">
            <ul>
                <li :for="(key, val) in obj">
                    {{ key }}: {{ val.name }}
                    <ul>
                        <li :for="item in val.ary">
                            {{ item.name }}
                            <ul>
                                <li :for="(item1, index1) in item.ary1">
                                    {{ CALC(index1 + 1) }}. {{ item1.name }} - ${{ item1.price }}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            </body>
            <script>
                const app = new PD({
                    id: "app",
                    data: {
                        obj: {
                            food: {
                                name: "Food",
                                ary: [
                                    {
                                        name: 'Snacks',
                                        ary1: [
                                            { name: 'Potato Chips', price: 10 },
                                            { name: 'Chocolate', price: 8 }
                                        ]
                                    },
                                    {
                                        name: 'Beverages',
                                        ary1: [
                                            { name: 'Juice', price: 5 },
                                            { name: 'Tea', price: 3 }
                                        ]
                                    }
                                ]
                            },
                            home: {
                                name: 'Home',
                                ary: [
                                    {
                                        name: 'Furniture',
                                        ary1: [
                                            { name: 'Sofa', price: 300 },
                                            { name: 'Table', price: 150 }
                                        ]
                                    },
                                    {
                                        name: 'Decorations',
                                        ary1: [
                                            { name: 'Picture Frame', price: 20 },
                                            { name: 'Vase', price: 15 }
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                });
            </script>
            ```
        - Result
            ```html
            <body id="app">
            <ul>
                <li>food: Food
                    <ul>
                        <li>Snacks
                           <ul>
                                <li>1. Potato Chips - $10</li>
                                <li>2. Chocolate - $8</li>
                            </ul>
                            </li>
                        <li>Beverages
                            <ul>
                                <li>1. Juice - $5</li>
                                <li>2. Tea - $3</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>home: Home
                    <ul>
                        <li>Furniture
                            <ul>
                                <li>1. Sofa - $300</li>
                                <li>2. Table - $150</li>
                            </ul>
                        </li>
                        <li>Decorations
                            <ul>
                                <li>1. Picture Frame - $20</li>
                                <li>2. Vase - $15</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            </body>
            ```
    - ##### `:if`
        - index.html
            ```html
            <body id="app">
                <h1 :if="heading == 1">{{ title }} {{ heading }}</h1>
                <h2 :else-if="isH2">{{ title }} {{ heading }}</h2>
                <h3 :else-if="heading == 3">{{ title }} {{ heading }}</h3>
                <h4 :else>{{ title }} {{ heading }}</h4>
            </body>
            <script>
                const app = new PD({
                    id: "app",
                    data: {
                        heading: [Number|null],
                        isH2: [Boolean|null],
                        title: "test"
                    }
                });
            </script>
            ```
        - Result: `heading = 1`
            ```html
            <body id="app">
                <h1>test 1</h1>
            </body>
            ```
        - Result: `heading = null && isH2 = true`
            ```html
            <body id="app">
                <h2>test </h2>
            </body>
            ```
        - Result: `heading = 3 && isH2 = null`
            ```html
            <body id="app">
                <h3>test 3</h3>
            </body>
            ```
        - Result: `heading = null && isH2 = null`
            ```html
            <body id="app">
                <h4>test </h4>
            </body>
            ```
    - ##### `@event`
        - index.html
            ```html
            <body id="app">
                <button @click="test">test</button>
            </body>
            <script>
                const app = new PD({
                    id: "app",
                    event: {
                        test: function(e){
                            alert(e.target.innerText + " clicked");
                        }
                    }
                });
            </script>
            ```
    - ##### 更多屬性
        `:padding`, `:margin`, `:border`, `:border-radius`, `:outline`, `:box-sahdow`, `:bg-image`, `:bg-attachment`, `:bg-blend-mode`, `:bg-clip`, `:bg-origin`, `:bg-position`, `:bg-position-x`, `:bg-position-y`, `:bg-repeat`, `:bg-size`, `:bg-color`, `:color`
    - ##### 函式
        - ###### `LENGTH()`:
            - index.html
                ```HTML
                <body id="app">
                    <p>Total: {{ LENGTH(array) }}</p>
                </body>
                <script>
                    const app = new PD({
                        id: "app",
                        data: {
                            array: [1, 2, 3, 4]
                        }
                    });
                </script>
                ```
            - result
                ```HTML
                <body id="app">
                    <p>Total: 4</p>
                </body>
                ```
        - ###### `CALC()`:
            - index.html
                ```HTML
                <body id="app">
                    <p>calc: {{ CALC(num * 10) }}</p>
                </body>
                <script>
                    const app = new PD({
                        id: "app",
                        data: {
                            num: 1
                        }
                    });
                </script>
                ```
            - result
                ```HTML
                <body id="app">
                    <p>calc: 10</p>
                </body>
                ```
        - ###### `UPPER()` / `LOWER()`
            - index.html
                ```HTML
                <body id="app">
                    <p>{{ UPPER(test1) }} {{ LOWER(test2) }}</p>
                </body>
                <script>
                    const app = new PD({
                        id: "app",
                        data: {
                            test1: "upper",
                            test2: "LOWER"
                        }
                    });
                </script>
                ```
            - result
                ```HTML
                <body id="app">
                    <p>UPPER lower</p>
                </body>
                ```
        - ###### `DATE(num, format)`:
            - index.html
                ```HTML
                <body id="app">
                    <p>{{ DATE(now, YYYY-MM-DD hh:mm:ss) }}</p>
                </body>
                <script>
                    const app = new PD({
                        id: "app",
                        data: {
                            now: Math.floor(Date.now() / 1000)
                        }
                    });
                </script>
                ```
            - result
                ```HTML
                <body id="app">
                    <p>2024-08-17 03:40:47</p>
                </body>
                ```
    - ##### 渲染完成
        ```html
        <body id="app"></body>
        <script>
            const app = new PD({
                id: "app",
                next: function () {
                    console.log("Rendering completed");
                }
            });
        </script>
        ```

### 擴展

- #### Before
    ```javascript
    let section = document.createElement("section");
    section.id = "#test";
    document.body.appendChild(section);

    let button = document.createElement("button");
    button.style.width = "10rem";
    button.style.height = "2rem";
    button.style.backgroundColor = "steelblue";
    button.style.color = "fff";
    button.onclick = function(){
        alert("test")
    };
    button.innerHTML = "<span>test</span> button";
    section.appendChild(button);

    let svg = document.createElement("span");
    span.classList.add("svg");
    span.setAttribute("path", "https://xxxxxx");
    section.appendChild(span);

    let img = document.createElement("img");
    img.classList.add("lazyload");
    img.dataset.src = "https://xxxxxx";
    section.appendChild(img);

    let input = document.createElement("input");
    input.placeholder = "type";
    input.type = "email";
    section.appendChild(input);
    ```
- #### After
    ```javascript
    document.body._child(
        "section#test"._([
            "button"._({
                style: {
                    width: "10rem",
                    hright: "2rem",
                    backgroundColor: "steelblue",
                    color: "#fff"
                }
            }, [
                // or "<span>test</span> button"
                "span"._("test"),
                " button"
            ])._click(function(){
                alert("test")
            }),
            "span.svg:._({ path: "https://xxxxxx" }),
            // No Lazy Loading => "img"._("https://xxxxxx"),
            "img"._({ lazyload: "https://xxxxxx" }),
            "input@email type"._()
        ])
    );

    _Listener({
        svg: true,     // Add SVGListener, convert span.svg to svg tag
        lazyload: true // Add Lazy Listener, Lazy Loading images
    });
    ```
    
- #### 獲取元素
    - Before
        ```javascript
        document.getElementById("test");
        document.querySelector("div.test");
        document.querySelectorAll("div.test");
        document.querySelector("input[name='test']");
        ```
    - After
        ```javascript
        "#test".$;
        "div.test".$;
        "div.test".$all;
        "input[name='test']".$;
        ```

- #### 添加元素
    - Before
        ```html
        <div class="test" style="width: 5rem; height: 80px;" test="test">
            <button>
                <img src="https://xxxxxx">
            </button>
        </div>
        ```
    - After
        ```Javascript
        "div.test"._({
            style: {
                width: "5rem",
                height: 80,
            },
            test: "test"
        }, [
            "button"._([
                "img"._("https://xxxxxx")
            ])
        ]);
        ```

***

©️ 2023 [邱敬幃 Pardn Chiu](https://www.linkedin.com/in/pardnchiu)

