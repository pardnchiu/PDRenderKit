// 導入 Markdown Viewer 的實現
import { viewer as MDViewer } from "https://cdn.jsdelivr.net/gh/pardnchiu/PDMarkdownKit@1.0.1/dist/PDMarkdownKit.js";

// 等待 DOM 元素載入後，開始執行程式碼
document.addEventListener("DOMContentLoaded", async _ => {
    // 初始化一個空字符串用於存儲 Markdown 文檔的內容
    let pre = "";

    // 將 README.md 檔案的內容讀取並保存至 pre 字符串中
    await fetch('./README.md')
        .then(response => response.text())
        .then(data => {
            // 將讀取到的 Markdown 文檔的內容保存至 pre 字符串中
            pre = data;
        })
        .catch(error => {
            // 如果讀取文件時出錯，則將錯誤信息輸出到控制台中
            console.error(error);
        });

    // 創建一個新的 PD 物件，並指定其 ID 和 next 函式的回調函數
    const app = new PD({
        id: "app",
        next: _ => {
            // 創建一個新的 Markdown Viewer 的實現物件
            const viewer = new MDViewer({
                delay: 50, // 設定初始延遲時間為 50ms
                pre: pre // 導入 Markdown 文檔的內容
            });

            // 將 Markdown Viewer 的實現物件添加至 HTML 頁面的 body 元素中
            document.body.appendChild(viewer.body);

            // 啟動 Markdown Viewer 的初始函數以進行渲染
            viewer.init();

            // 設定 Markdown Viewer 的實現物件的最大寬度為 1024px
            viewer.body.style.maxWidth = 1024 + "px";

            // 對 Markdown Viewer 的實現物件添加滾動事件，以進行類型切換
            viewer.body.addEventListener("scroll", function () {
                // 根據滾動的位置切換導航欄位的最小寬度
                "nav".$.$$_class(this.scrollTop > 0, "min");
            });
        }
    });
});
