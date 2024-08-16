# PDRenderKit (JavaScript Library)

![](https://img.shields.io/github/v/release/pardnchiu/PDRenderKit?color=bb4444) ![](https://img.shields.io/npm/v/pdrenderkit?color=44bb44) ![](https://img.shields.io/github/size/pardnchiu/PDRenderKit/dist%2FPDRenderKit.js?color=4444bb) ![](https://img.shields.io/github/license/pardnchiu/PDRenderKit?color=bbbb44)<br>
![](https://img.shields.io/badge/tag-JavaScript%20Library-44bbbb) ![](https://img.shields.io/badge/creator-Pardn%20Chiu-bb44bb)

PDRenderKit contains a lightweight front-end framework designed to separate the front-end user interface and data logic.<br>
Improving code maintainability and readability while reducing development complexity.

## Feature

- ### Separation of UI and Data Logic:
    Segregates front-end presentation from data logic, creating a clearer structure and simplifying maintenance tasks.

- ### Reduction of Repetitive Code:
    Provides tools and utilities to minimize repetitive code sections, improving code conciseness.

- ### Improved Code Readability:
    Modular design enhances code readability, making it easier to understand and collaborate on.

- ### Data Change Monitoring:
    Automatically updates the user interface in real-time based on data changes, reducing manual DOM manipulation steps.

- ### Automatic Rendering:
    Reduces manual DOM manipulation, allowing you to focus more on the core logic of your application.

- ### Lightweight:
    Full functionality is achieved with only `35KB`, ensuring efficient and effortless use on your website.

## Creator

<img src="https://pardn.io/image/head-s.jpg" align="left" width="128" height="128" style="margin-right: 0.5rem;">

### 邱敬幃 Pardn Chiu

[![](https://pardn.io/image/mail.svg)](mailto:mail@pardn.ltd) [![](https://skillicons.dev/icons?i=linkedin)](https://linkedin.com/in/pardnchiu) 

## License

This source code project is licensed under the [GPL-3.0](https://github.com/pardnchiu/PDMarkdownKit/blob/main/LICENSE) license.

## How to use

- ### Directly Download the Package
    ```Shell
    npm install pdrenderkit
    ```

- ### Or Include via `cdn.jsdelivr.new`
    ```HTML
    <script src="https://cdn.jsdelivr.net/gh/pardnchiu/PDRenderKit@[VERSION]/dist/PDRenderKit.js" copyright="Pardn Ltd">
    ```

- ### PD (formerly named $dom)
    Auto Rendering: Load auto-rendering and automatically render data changes after detection.
    | tag | description |
    | --- | --- |
    | {{value}} | Insert text into HTML tag and update the value based on data changes. |
    | :path | Load HTML fragments from external files into the current page. |
    | :html | Replace innerHTML of an element with text. |
    | :for | Supports item in items, (item, index) in items, (key, value) in object.<br>Iterate through a data collection and generate corresponding HTML elements for repetitive data display.<br>Supports item in items, (item, index) in items, (key, value) in object. |
    | :if<br>:else-if<br>:else | Show or hide elements based on specified conditions, adding multiple options for implementing branching logic. |
    | :model | Bind data to form elements (e.g., input), automatically updating the data when input changes. |
    | :[attr] | Set element attributes such as ID, class, image source, etc.<br>For example: :id/:class/:src/:alt/:href... |
    | @[event] | Add event listeners to execute specified actions when events are triggered.<br>For example: @click/@input/@mousedown... |
    | :@[event] | Set event handlers for individual elements within a loop, allowing different event handling for each element. |

    - #### Function 
      - `LENGTH()`:
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
      - `CALC()`:
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
      - `UPPER()` / `LOWER()`
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
      - `DATE(num, format)`:
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
    - #### `:path` / `:html`
        *Make sure to disable local file restrictions in your browser or use a live server when you are testing ':path'.*
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
    - #### `:for`
        - ##### index.html
            ```html
            <body id="app">
                <ul>
                    <li :for="(item, index) in ary" :id="item" :index="index">{{ item }} {{ CALC(index1 + 1) }}</li>
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
    - #### Nested `:for` Loop
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
        - ##### Result
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
    - #### `:if`
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
    - #### `@event` Example
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
    - #### Rendering completed Example
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

## Extension

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
    input.placeholder = "type";
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
    
- ### Get Element
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

- ### Add Element
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

*All translations powered by ChatGPT*

***

©️ 2023 [邱敬幃 Pardn Chiu](https://www.linkedin.com/in/pardnchiu)

