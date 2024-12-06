// import { viewer } from "https://cdn.jsdelivr.net/npm/pdmarkdownkit@1.6.0/dist/PDMarkdownKit.module.js";

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

    const app = "app".RJS({
        when: {
            rendered: e => {
                // const img = "img"._({
                //     // lazyload: "https://pixabay.com/get/ga47dc8f1d65f24c5ab2f2009bcb121dae7e329f676e4396286ebeafd947604cb9f9219449bffcda7b69459b7a4062e46f5832d76bb011a9d431cc5b10f4b247dd7a550aea82df691beebfd0853fc7825_640.jpg",
                //     style: {
                //         padding: "2rem 4rem",
                //         backgroundColor: "red"
                //     }
                // });
                // document.body._child([
                //     "div"._([
                //         img,
                //     "13123123123",
                //     false
                //     ])
                // ])
                // const dom = new MDViewer({
                //     id: "PDMDViewer",
                //     emptyContent: pre,
                //     sync: {
                //         delay: 50
                //     }
                // });

                // document.body._child([
                //     dom.body._style({
                //         margin: "0 auto",
                //         padding: "2rem 2rem 50vh",
                //         maxWidth: 1024 + "px",
                //         backgroundColor: "#fff"
                //     })._scroll(e => {
                //         const _this = e.target;
                //         "nav".$.$$_class(_this.scrollTop > 0, "min");
                //     })
                // ]);

                // dom.init();
            }
        }

        // setTimeout(() => {
        //     app.renew()
        // }, 1000);
        // let text = "";
        // "app".$.margin(10, 20, 30, 40)
        // const temp = "temp"._();
        // temp._child([
        //     "div"._("test")
        // ]);
        // console.log(temp.innerHTML)
    });
});
