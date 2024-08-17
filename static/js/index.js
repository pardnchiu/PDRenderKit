import { viewer as MDViewer } from "https://cdn.jsdelivr.net/gh/pardnchiu/PDMarkdownKit@1.0.1/dist/PDMarkdownKit.js";

document.addEventListener("DOMContentLoaded", async _ => {
    let pre = "";

    await fetch('./README.md')
        .then(response => response.text())
        .then(data => {
            pre = data;
        })
        .catch(error => {
            console.error(error);
        });

    const app = new PD({
        id: "app",
        next: _ => {
            const viewer = new MDViewer({
                delay: 50,
                pre: pre
            });

            document.body.appendChild(viewer.body);

            viewer.init();

            viewer.body.style.maxWidth = 1024 + "px";

            viewer.body.addEventListener("scroll", function () {
                "nav".$.$$_class(this.scrollTop > 0, "min");
            });
        }
    });
})