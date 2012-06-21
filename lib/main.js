var pageMod = require("page-mod");
var data = require("self").data;

pageMod.PageMod({
   include: "*",
   contentScript: "var imgs = document.querySelectorAll('img'); for(var i = 0; i < imgs.length; ++i) {imgs[i].src = '" + data.url('aj929630c_zoom.jpg') + "'}"
});

console.log("The add-on is running.");
