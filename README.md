# PDRenderKit (JavaScript Library)

![](https://img.shields.io/badge/tag-JavaScript%20Library-bb4444) ![](https://img.shields.io/github/license/pardnchiu/PDRenderKit?color=44bb44) ![](https://img.shields.io/badge/creator-Pardn%20Chiu-4444bb)<br>
![](https://img.shields.io/github/v/release/pardnchiu/PDRenderKit?color=bbbb44) ![](https://img.shields.io/npm/v/pdrenderkit?color=44bbbb) ![](https://img.shields.io/github/size/pardnchiu/PDRenderKit/dist%2FPDRenderKit.js?color=bb44bb)

PDRenderKit 是一個輕量化的前端框架，用於分離前端介面和資料邏輯<br>
PDRenderKit contains a lightweight front-end framework designed to separate the front-end user interface and data logic.<br>
提高代碼的可維護性和可讀性，同時減少開發複雜度。<br>
Improving code maintainability and readability while reducing development complexity.

## Feature

- ### UI 和資料邏輯分離 / Separation of UI and Data Logic:
    <span>將前端介面與資料邏輯分開，創建更清晰的結構，簡化維護工作。</span><br>
    Segregates front-end presentation from data logic, creating a clearer structure and simplifying maintenance tasks.

- ### 減少重複代碼 / Reduction of Repetitive Code:
    <span>減少重複的代碼段，提高代碼簡潔性。</span><br>
    Provides tools and utilities to minimize repetitive code sections, improving code conciseness.

- ### 提高代碼可讀性 / Improved Code Readability:
    <span>模組化設計提升代碼可讀性，使其更易於理解和協作。</span><br>
    Modular design enhances code readability, making it easier to understand and collaborate on.

- ### 監控資料變更 / Data Change Monitoring:
    <span>基於資料變更自動更新用戶介面，減少手動 DOM 操作步驟。</span><br>
    Automatically updates the user interface in real-time based on data changes, reducing manual DOM manipulation steps.

- ### 自動渲染 / Automatic Rendering:
    <span>減少手動 DOM 操作，專注於應用的邏輯。</span><br>
    Reduces manual DOM manipulation, allowing you to focus more on the core logic of your application.

- ### 輕量化 / Lightweight:
    <span>保證全功能的同時，最小化對網站速度的影響。</span><br>
    Ensuring full functionality with minimal impact on your website's speed.

### 創建者 / Creator

<img src="https://pardn.io/image/head-s.jpg" align="left" style="float: left; margin-right: 0.5rem; width: 96px; height: 96px;" />

<h4 style="padding-top: 0">邱敬幃 Pardn Chiu</h4>

[![](https://pardn.io/image/mail.svg)](mailto:mail@pardn.ltd) [![](https://skillicons.dev/icons?i=linkedin)](https://linkedin.com/in/pardnchiu) 

### 許可證 / License

此源代碼專案已根據 [GPL-3.0](https://github.com/pardnchiu/PDRenderKit/blob/main/LICENSE) 許可證授權。<br>
This source code project is licensed under the [GPL-3.0](https://github.com/pardnchiu/PDRenderKit/blob/main/LICENSE) license.

### 使用方法 / How to use

- #### 直接下載套件 / Directly Download the Package
    ```Shell
    npm install pdrenderkit
    ```

- #### 或通過 `cdn.jsdelivr.new` 引入 / Or Include via `cdn.jsdelivr.new`
    ```HTML
    <script src="https://cdn.jsdelivr.net/gh/pardnchiu/PDRenderKit@[VERSION]/dist/PDRenderKit.js" copyright="Pardn Ltd">
    ```

- #### PD (formerly named $dom)
    <span>自動渲染：加載自動渲染並在檢測到資料變更後自動渲染。</span><br>
    Auto Rendering: Load auto-rendering and automatically render data changes after detection.
    | tag | description |
    | --- | --- |
    | {{value}} | 將文字插入到 HTML 標籤中，並根據資料變更更新值。<br>Insert text into HTML tag and update the value based on data changes. |
    | :path | 將外部文件中的 HTML 片段加載到當前頁面。<br>Load HTML fragments from external files into the current page. |
    | :html | 使用文字替換元素的 innerHTML。<br>Replace innerHTML of an element with text. |
    | :for | 支持 item in items、(item, index) in items、(key, value) in object。<br>Supports item in items, (item, index) in items, (key, value) in object.<br>遍歷數據集合，為重複數據顯示生成相應的 HTML 元素。<br>Iterate through a data collection and generate corresponding HTML elements for repetitive data display. |
    | :if<br>:else-if<br>:else | 根據指定條件顯示或隱藏元素，為實現分支邏輯添加多種選項。<br>Show or hide elements based on specified conditions, adding multiple options for implementing branching logic. |
    | :model | 將資料綁定到表單元素（如 input），當輸入更改時自動更新資料。<br>Bind data to form elements (e.g., input), automatically updating the data when input changes. |
    | :hide | 隱藏元素，根據特定條件顯示它們。<br>Hides elements, conditionally displaying them based on specific criteria. |
    | :once | 只執行一次綁定或操作。<br>Executes the binding or operation only once. |
    | :[attr] | 設定元素屬性，例如 ID、class、圖像來源等。<br>Set element attributes such as ID, class, image source, etc.<br>例如：:id/:class/:src/:alt/:href...<br>For example: :id/:class/:src/:alt/:href... |
    | @[event] | 添加事件監聽器，當事件觸發時執行指定操作。<br>Add event listeners to execute specified actions when events are triggered.<br>例如：@click/@input/@mousedown...<br>For example: @click/@input/@mousedown... |
    | :@[event] | 為迴圈內的單個元素設置事件處理程序，允許為每個元素設置不同的事件處理。<br>Set event handlers for individual elements within a loop, allowing different event handling for each element. |
    - ##### `:path` / `:html`
        *確保在測試 `:path` 時禁用瀏覽器中的本地文件限制或使用實時服務器。*
        *Make sure to disable local file restrictions in your browser or use a live server when you are testing `:path`.*
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
    - ##### 嵌套 `:for` 迴圈 / Nested `:for` Loop
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
    - ##### 更多屬性 / More Attributes
        `:padding`, `:margin`, `:border`, `:border-radius`, `:outline`, `:box-sahdow`, `:bg-image`, `:bg-attachment`, `:bg-blend-mode`, `:bg-clip`, `:bg-origin`, `:bg-position`, `:bg-position-x`, `:bg-position-y`, `:bg-repeat`, `:bg-size`, `:bg-color`, `:color`
    - ##### 函式 / Function 
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
    - ##### 渲染完成 / Rendering completed
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

### 擴展 / Extension

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
    
- #### 獲取元素 / Get Element
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

- #### 添加元素 / Add Element
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

*All translations powered by ChatGPT*

***

©️ 2023 [邱敬幃 Pardn Chiu](https://www.linkedin.com/in/pardnchiu)

