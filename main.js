const linkPrev = require('link-preview-js')
const URL = " https://www.instagram.com/artcartbydiksha/";
let count = 1;

setInterval(function () {
    console.log("Iteration:", count);
    linkPrev.getLinkPreview(URL, {
        headers: {
            "user-agent": "googlebot",
            "Accept-Language": "en-US",
        },
    }).then((data) =>
        console.debug(data)
    );
    count++;
}, 3000);
