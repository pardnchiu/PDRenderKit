# PDRenderKit 

![](https://img.shields.io/github/v/release/pardnchiu/PDRenderKit?color=bb4444) ![](https://img.shields.io/npm/v/pdrenderkit?color=44bb44) ![](https://img.shields.io/github/size/pardnchiu/PDRenderKit/dist%2FPDRenderKit.js?color=4444bb) ![](https://img.shields.io/github/license/pardnchiu/PDRenderKit?color=bbbb44)<br>
![](https://img.shields.io/badge/tag-JavaScript%20Library-44bbbb) ![](https://img.shields.io/badge/creator-邱敬幃%20Pardn%20Chiu-bb44bb)

PDRenderKit 是一個輕量化前端框架，主旨在分離前端用戶界面和資料邏輯。<br>
提高代碼的可維護性和可讀性的同時，同時降低開發的複雜性。<br>
PDRenderKit contains a lightweight front-end framework designed to separate the front-end user interface and data logic.<br>
Improving code maintainability and readability while reducing development complexity.

## 特點 / Feature

- ### UI和數據邏輯分離 / Separation of UI and Data Logic:
    將前端畫面與資料邏輯分離，創建更清晰的結構，簡化維護工作。<br>
    Segregates front-end presentation from data logic, creating a clearer structure and simplifying maintenance tasks.

- ### 減少重複代碼 / Reduction of Repetitive Code:
    提供工具和實用功能使重複的代碼段最小化，提高代碼簡潔性。<br>
    Provides tools and utilities to minimize repetitive code sections, improving code conciseness.

- ### 提高代碼可讀性 / Improved Code Readability:
    模塊化設計增強代碼可讀性，使其更易於理解和協作。<br>
    Modular design enhances code readability, making it easier to understand and collaborate on.

- ### 監聽數據變化 / Data Change Monitoring:
    根據數據變化自動實時更新用戶畫面，減少手動DOM操作步驟。<br>
    Automatically updates the user interface in real-time based on data changes, reducing manual DOM manipulation steps.

- ### 自動渲染 / Automatic Rendering:
    減少手動DOM操作，讓你更多地專注於應用的核心邏輯。<br>
    Reduces manual DOM manipulation, allowing you to focus more on the core logic of your application.

- ### 輕量級 / Lightweight:
    輕量化設計，壓縮至35KB，減少不必要的複雜性，提供更大靈活性，讓你輕鬆在網站中做使用。<br>
    Lightweight design, compressed to `35KB`, reduces unnecessary complexity, offering greater flexibility for easy use on websites.

## 範例 / Example

- [Website Template 25](https://github.com/pardnchiu/website-template-25)

- [Website Template 26](https://github.com/pardnchiu/website-template-26)

## 如何使用 / How to use

- ### 可直接下載套件
```Shell
npm install pdrenderkit
```

- ### 或是透過 `cdn.jsdelivr.new` 加入網站
```HTML
<script src="https://cdn.jsdelivr.net/gh/pardnchiu/PDRenderKit@[VERSION]/dist/PDRenderKit.js" copyright="Pardn Ltd">
```

- ### PD (原先命名$dom)
    自動渲染: 加載自動渲染，並在檢測到變化後自動渲染數據。
    Auto Rendering: Load auto-rendering and automatically render data changes after detection.
    | 標籤 / tag | 描述 / description |
    | --- | --- |
    | {{value}} | 將文本插入HTML標籤，並根據數據變化更新值。<br>Insert text into HTML tag and update the value based on data changes. |
    | :path | 從外部文件加載HTML片段到當前頁面。<br>Load HTML fragments from external files into the current page. |
    | :html | 使用文本替換元素的innerHTML。<br>Replace innerHTML of an element with text. |
    | :for | 遍歷數據集合，為重複數據生成對應的HTML元素。<br>支持 item in items, (item, index) in items, (key, value) in object.<br>Iterate through a data collection and generate corresponding HTML elements for repetitive data display.<br>Supports item in items, (item, index) in items, (key, value) in object. |
    | :if<br>:else-if<br>:else | 根據指定條件顯示或隱藏元素，為實現分支邏輯添加多個選項。<br> Show or hide elements based on specified conditions, adding multiple options for implementing branching logic. |
    | :model | 將數據綁定到表單元素（例如input），當輸入變化時自動更新數據。<br>Bind data to form elements (e.g., input), automatically updating the data when input changes. |
    | :[attr] | 設置元素屬性，例如ID、class、圖片來源等。<br>例如: :id/:class/:src/:alt/:href..<br>Set element attributes such as ID, class, image source, etc.<br>For example: :id/:class/:src/:alt/:href... |
    | @[event] | 添加事件監聽器，在觸發事件時執行指定操作。<br>例如: @click/@input/@mousedown...<br>Add event listeners to execute specified actions when events are triggered.<br>For example: @click/@input/@mousedown... |
    | :@[event] | 為循環內的單個元素設置事件處理程序，允許每個元素有不同的事件處理。<br>Set event handlers for individual elements within a loop, allowing different event handling for each element. |

    - #### 函式 `LENGTH()`: 
        若 `data.array = [1, 2, 3, 4];`
        則 `<p>共有 {{ LENGTH(array) }} 項</p>`
        為 `<p>共有 4 項</p>`
      
    - #### `:path` / `:html` 範例
        *確保在測試 ':path' 時禁用瀏覽器的本地文件限制。<br>Make sure to disable local file restrictions in your browser or use a live server when you are testing ':path'.*
        - ##### test.html
            ```html
            <h1>path heading</h1>
            <p>path content</p>
            ```
        - ##### index.html
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
        - ##### Result
            ```html
            <body id="app">
                <h1>path heading</h1>
                <p>path content</p>
                <section>
                    <b>innerHtml</b>
                </section>
            </body>
            ```
    - #### `:for` 範例
        - ##### index.html
            ```html
            <body id="app">
                <ul>
                    <li :for="(item, index) in ary" :id="item" :index="index">{{ item }} {{ index + 1 }}</li>
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
        - ##### Result
            ```html
            <body id="app">
                <li id="test1" index="0">test1 1</li>
                <li id="test2" index="1">test1 2</li>
                <li id="test3" index="2">test1 3</li>
            </body>
            ```
    - #### `:for` 嵌套循環範例
        - ##### index.html
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
                                    {{ index1 + 1 }}. {{ item1.name }} - {{ item1.price }}元
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
                                name: "食品",
                                ary: [
                                    {
                                        name: '零食',
                                        ary1: [
                                            { name: '薯片', price: 10 },
                                            { name: '巧克力', price: 8 }
                                        ]
                                    },
                                    {
                                        name: '飲料',
                                        ary1: [
                                            { name: '果汁', price: 5 },
                                            { name: '茶', price: 3 }
                                        ]
                                    }
                                ]
                            },
                            home: {
                                name: '家居',
                                ary: [
                                    {
                                        name: '家具',
                                        ary1: [
                                            { name: '沙發', price: 300 },
                                            { name: '桌子', price: 150 }
                                        ]
                                    },
                                    {
                                        name: '裝飾',
                                        ary1: [
                                            { name: '畫框', price: 20 },
                                            { name: '花瓶', price: 15 }
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                });
            </script>
            ```
        - ##### Result
            ```html
            <body id="app">
            <ul>
                <li>food: 食品
                    <ul>
                        <li>零食
                           <ul>
                                <li>1. 薯片 - 10元</li>
                                <li>2. 巧克力 - 8元</li>
                            </ul>
                            </li>
                        <li>飲料
                            <ul>
                                <li>1. 果汁 - 5元</li>
                                <li>2. 茶 - 3元</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>home: 家居
                    <ul>
                        <li>家具
                            <ul>
                                <li>1. 沙發 - 300元</li>
                                <li>2. 桌子 - 150元</li>
                            </ul>
                        </li>
                        <li>裝飾
                            <ul>
                                <li>1. 畫框 - 20元</li>
                                <li>2. 花瓶 - 15元</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            </body>
            ```
    - #### `:if` 範例
        - ##### index.html
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
        - ##### Result: heading = 1
            ```html
            <body id="app">
                <h1>test 1</h1>
            </body>
            ```
        - ##### Result: heading = null && isH2 = true
            ```html
            <body id="app">
                <h2>test </h2>
            </body>
            ```
        - ##### Result: heading = 3 && isH2 = null
            ```html
            <body id="app">
                <h3>test 3</h3>
            </body>
            ```
        - ##### Result: heading = null && isH2 = null
            ```html
            <body id="app">
                <h4>test </h4>
            </body>
            ```
    - #### `@event` 範例
        - ##### index.html
            ```html
            <body id="app">
                <button @click="test">test</button>
            </body>
            <script>
                const app = new PD({
                    id: "app",
                    event: {
                        test: function(){
                            console.log(this);
                        }
                    }
                });
            </script>
            ```
    - #### Rendering completed 範例
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

## 擴展 / Extension

- ### Before
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
    input.placeholder = "輸入你的內容";
    input.type = "email";
    section.appendChild(input);
    ```
- ### After
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
            })._click(function(){
                alert("test")
            }, [
                // or "<span>test</span> button"
                "span"._("test"),
                " button"
            ]),
            "span.svg:._({ path: "https://xxxxxx" }),
            // 無 Lazy Loading => "img"._("https://xxxxxx"),
            "img"._({ lazyload: "https://xxxxxx" }),
            "input@email 輸入你的內容"._()
        ])
    );

    // 添加 SVG Listener, 轉換 span.svg 至 svg 標籤
    _SVGListener();

    // 添加 Lazy Listener, Lazy Loading 圖片
    _LazyListener();
    ```
    
- ### 獲取 / Get Element
    - #### Before
        ```javascript
        document.getElementById("test");
        document.querySelector("div.test");
        document.querySelectorAll("div.test");
        document.querySelector("input[name='test']");
        ```
    - #### After
        ```javascript
        "#test".$;
        "div.test".$;
        "div.test".$all;
        "input[name='test']".$;
        ```

- ### 新增 / Add Element
    - #### Before
        ```html
        <div class="test" style="width: 5rem; height: 80px;" test="test">
            <button>
                <img src="https://xxxxxx">
            </button>
        </div>
        ```
    - #### After
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

©️ 2023 [Pardn Chiu](https://www.linkedin.com/in/pardnchiu)
