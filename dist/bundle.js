!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Embed=t():e.Embed=t()}(self,(()=>(()=>{var e={387:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(81),i=r.n(n),o=r(645),a=r.n(o)()(i());a.push([e.id,".embed-tool--loading .embed-tool__caption {\n      display: none;\n    }\n\n    .embed-tool--loading .embed-tool__preloader {\n      display: block;\n    }\n\n    .embed-tool--loading .embed-tool__content {\n      display: none;\n    }\n  .embed-tool__preloader {\n    display: none;\n    position: relative;\n    height: 200px;\n    box-sizing: border-box;\n    border-radius: 5px;\n    border: 1px solid #e6e9eb;\n  }\n  .embed-tool__preloader::before {\n      content: '';\n      position: absolute;\n      z-index: 3;\n      left: 50%;\n      top: 50%;\n      width: 30px;\n      height: 30px;\n      margin-top: -25px;\n      margin-left: -15px;\n      border-radius: 50%;\n      border: 2px solid #cdd1e0;\n      border-top-color: #388ae5;\n      box-sizing: border-box;\n      animation: embed-preloader-spin 2s infinite linear;\n    }\n  .embed-tool__url {\n    position: absolute;\n    bottom: 20px;\n    left: 50%;\n    transform: translateX(-50%);\n    max-width: 250px;\n    color: #7b7e89;\n    font-size: 11px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .embed-tool__content {\n    width: 100%;\n  }\n  .embed-tool__caption {\n    margin-top: 7px;\n  }\n  .embed-tool__caption[contentEditable=true][data-placeholder]::before{\n      position: absolute;\n      content: attr(data-placeholder);\n      color: #707684;\n      font-weight: normal;\n      opacity: 0;\n    }\n  .embed-tool__caption[contentEditable=true][data-placeholder]:empty::before {\n         opacity: 1;\n      }\n  .embed-tool__caption[contentEditable=true][data-placeholder]:empty:focus::before {\n        opacity: 0;\n      }\n\n@keyframes embed-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n",""]);const l=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(n)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(a[s]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);n&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),t.push(d))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},296:e=>{function t(e,t,r){var n,i,o,a,l;function s(){var c=Date.now()-a;c<t&&c>=0?n=setTimeout(s,t-c):(n=null,r||(l=e.apply(o,i),o=i=null))}null==t&&(t=100);var c=function(){o=this,i=arguments,a=Date.now();var c=r&&!n;return n||(n=setTimeout(s,t)),c&&(l=e.apply(o,i),o=i=null),l};return c.clear=function(){n&&(clearTimeout(n),n=null)},c.flush=function(){n&&(l=e.apply(o,i),o=i=null,clearTimeout(n),n=null)},c}t.debounce=t,e.exports=t},379:e=>{"use strict";var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var o={},a=[],l=0;l<e.length;l++){var s=e[l],c=n.base?s[0]+n.base:s[0],d=o[c]||0,u="".concat(c," ").concat(d);o[c]=d+1;var h=r(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==h)t[h].references++,t[h].updater(m);else{var p=i(m,n);n.byIndex=l,t.splice(l,0,{identifier:u,updater:p,references:1})}a.push(u)}return a}function i(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,i){var o=n(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var l=r(o[a]);t[l].references--}for(var s=n(e,i),c=0;c<o.length;c++){var d=r(o[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=s}}},569:e=>{"use strict";var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{"use strict";e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var i=void 0!==r.layer;i&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,i&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={id:n,exports:{}};return e[n](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0;var n={};return(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o,a,l=[],s=!0,c=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=o.call(r)).done)&&(l.push(n.value),l.length!==t);s=!0);}catch(e){c=!0,i=e}finally{try{if(!s&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw i}}return l}}(e,r)||function(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,r){for(var n=0;n<r.length;n++){var i=r[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(o=i.key,a=void 0,a=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),"symbol"===e(a)?a:String(a)),i)}var o,a}r.d(n,{default:()=>_});const a={vimeo:{regex:/(?:http[s]?:\/\/)?(?:www.)?(?:player.)?vimeo\.co(?:.+\/([^\/]\d+)(?:#t=[\d]+)?s?$)/,embedUrl:"https://player.vimeo.com/video/<%= remote_id %>?title=0&byline=0",html:'<iframe style="width:100%;" height="320" frameborder="0"></iframe>',height:320,width:580},youtube:{regex:/(?:https?:\/\/)?(?:www\.)?(?:(?:youtu\.be\/)|(?:youtube\.com)\/(?:v\/|u\/\w\/|embed\/|watch))(?:(?:\?v=)?([^#&?=]*))?((?:[?&]\w*=[-\w]*)*)/,embedUrl:"https://www.youtube.com/embed/<%= remote_id %>",html:'<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',height:320,width:580,id:function(e){var t=i(e,2),r=t[0],n=t[1];if(!n&&r)return r;var o={start:"start",end:"end",t:"start",time_continue:"start",list:"list"};return n=n.slice(1).split("&").map((function(e){var t=i(e.split("="),2),n=t[0],a=t[1];return r||"v"!==n?o[n]?"LL"===a||a.startsWith("RDMM")||a.startsWith("FL")?null:"".concat(o[n],"=").concat(a):null:(r=a,null)})).filter((function(e){return!!e})),r+"?"+n.join("&")}},coub:{regex:/https?:\/\/coub\.com\/view\/([^\/\?\&]+)/,embedUrl:"https://coub.com/embed/<%= remote_id %>",html:'<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',height:320,width:580},vine:{regex:/https?:\/\/vine\.co\/v\/([^\/\?\&]+)/,embedUrl:"https://vine.co/v/<%= remote_id %>/embed/simple/",html:'<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',height:320,width:580},imgur:{regex:/https?:\/\/(?:i\.)?imgur\.com.*\/([a-zA-Z0-9]+)(?:\.gifv)?/,embedUrl:"http://imgur.com/<%= remote_id %>/embed",html:'<iframe allowfullscreen="true" scrolling="no" id="imgur-embed-iframe-pub-<%= remote_id %>" class="imgur-embed-iframe-pub" style="height: 500px; width: 100%; border: 1px solid #000"></iframe>',height:500,width:540},gfycat:{regex:/https?:\/\/gfycat\.com(?:\/detail)?\/([a-zA-Z]+)/,embedUrl:"https://gfycat.com/ifr/<%= remote_id %>",html:"<iframe frameborder='0' scrolling='no' style=\"width:100%;\" height='436' allowfullscreen ></iframe>",height:436,width:580},"twitch-channel":{regex:/https?:\/\/www\.twitch\.tv\/([^\/\?\&]*)\/?$/,embedUrl:"https://player.twitch.tv/?channel=<%= remote_id %>",html:'<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',height:366,width:600},"twitch-video":{regex:/https?:\/\/www\.twitch\.tv\/(?:[^\/\?\&]*\/v|videos)\/([0-9]*)/,embedUrl:"https://player.twitch.tv/?video=v<%= remote_id %>",html:'<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',height:366,width:600},"yandex-music-album":{regex:/https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/?$/,embedUrl:"https://music.yandex.ru/iframe/#album/<%= remote_id %>/",html:'<iframe frameborder="0" style="border:none;width:540px;height:400px;" style="width:100%;" height="400"></iframe>',height:400,width:540},"yandex-music-track":{regex:/https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/track\/([0-9]*)/,embedUrl:"https://music.yandex.ru/iframe/#track/<%= remote_id %>/",html:'<iframe frameborder="0" style="border:none;width:540px;height:100px;" style="width:100%;" height="100"></iframe>',height:100,width:540,id:function(e){return e.join("/")}},"yandex-music-playlist":{regex:/https?:\/\/music\.yandex\.ru\/users\/([^\/\?\&]*)\/playlists\/([0-9]*)/,embedUrl:"https://music.yandex.ru/iframe/#playlist/<%= remote_id %>/show/cover/description/",html:'<iframe frameborder="0" style="border:none;width:540px;height:400px;" width="540" height="400"></iframe>',height:400,width:540,id:function(e){return e.join("/")}},codepen:{regex:/https?:\/\/codepen\.io\/([^\/\?\&]*)\/pen\/([^\/\?\&]*)/,embedUrl:"https://codepen.io/<%= remote_id %>?height=300&theme-id=0&default-tab=css,result&embed-version=2",html:"<iframe height='300' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",height:300,width:600,id:function(e){return e.join("/embed/")}},instagram:{regex:/https?:\/\/www\.instagram\.com\/p\/([^\/\?\&]+)\/?.*/,embedUrl:"https://www.instagram.com/p/<%= remote_id %>/embed",html:'<iframe width="400" height="505" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',height:505,width:400},twitter:{regex:/^https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(?:es)?\/(\d+?.*)?$/,embedUrl:"https://twitframe.com/show?url=https://twitter.com/<%= remote_id %>",html:'<iframe width="600" height="600" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',height:300,width:600,id:function(e){return e.join("/status/")}},pinterest:{regex:/https?:\/\/([^\/\?\&]*).pinterest.com\/pin\/([^\/\?\&]*)\/?$/,embedUrl:"https://assets.pinterest.com/ext/embed.html?id=<%= remote_id %>",html:"<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 400px; max-height: 1000px;'></iframe>",id:function(e){return e[1]}},facebook:{regex:/https?:\/\/www.facebook.com\/([^\/\?\&]*)\/(.*)/,embedUrl:"https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/<%= remote_id %>&width=500",html:"<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 500px; max-height: 1000px;'></iframe>",id:function(e){return e.join("/")}},aparat:{regex:/(?:http[s]?:\/\/)?(?:www.)?aparat\.com\/v\/([^\/\?\&]+)\/?/,embedUrl:"https://www.aparat.com/video/video/embed/videohash/<%= remote_id %>/vt/frame",html:'<iframe width="600" height="300" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',height:300,width:600},miro:{regex:/https:\/\/miro.com\/\S+(\S{12})\/(\S+)?/,embedUrl:"https://miro.com/app/live-embed/<%= remote_id %>",html:'<iframe width="700" height="500" style="margin: 0 auto;" allowFullScreen frameBorder="0" scrolling="no"></iframe>'}};var l=r(379),s=r.n(l),c=r(795),d=r.n(c),u=r(569),h=r.n(u),m=r(565),p=r.n(m),f=r(216),b=r.n(f),v=r(589),y=r.n(v),g=r(387),w={};w.styleTagTransform=y(),w.setAttributes=p(),w.insert=h().bind(null,"head"),w.domAPI=d(),w.insertStyleElement=b(),s()(g.Z,w),g.Z&&g.Z.locals&&g.Z.locals;var x=r(296),_=function(){function t(e){var r=e.data,n=e.api,i=e.readOnly;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.api=n,this._data={},this.element=null,this.readOnly=i,this.data=r}var r,n,l;return r=t,l=[{key:"prepare",value:function(r){var n=r.config,o=(void 0===n?{}:n).services,l=void 0===o?{}:o,s=Object.entries(a),c=Object.entries(l).filter((function(e){var t=i(e,2),r=(t[0],t[1]);return"boolean"==typeof r&&!0===r})).map((function(e){return i(e,1)[0]})),d=Object.entries(l).filter((function(t){var r=i(t,2);return r[0],"object"===e(r[1])})).filter((function(e){var r=i(e,2),n=(r[0],r[1]);return t.checkServiceConfig(n)})).map((function(e){var t=i(e,2),r=t[0],n=t[1];return[r,{regex:n.regex,embedUrl:n.embedUrl,html:n.html,height:n.height,width:n.width,id:n.id}]}));c.length&&(s=s.filter((function(e){var t=i(e,1)[0];return c.includes(t)}))),s=s.concat(d),t.services=s.reduce((function(e,t){var r=i(t,2),n=r[0],o=r[1];return n in e?(e[n]=Object.assign({},e[n],o),e):(e[n]=o,e)}),{}),t.patterns=s.reduce((function(e,t){var r=i(t,2),n=r[0],o=r[1];return e[n]=o.regex,e}),{})}},{key:"checkServiceConfig",value:function(e){var t=e.regex,r=e.embedUrl,n=e.html,i=e.height,o=e.width,a=e.id,l=t&&t instanceof RegExp&&r&&"string"==typeof r&&n&&"string"==typeof n;return(l=(l=l&&(void 0===a||a instanceof Function))&&(void 0===i||Number.isFinite(i)))&&(void 0===o||Number.isFinite(o))}},{key:"pasteConfig",get:function(){return{patterns:t.patterns}}},{key:"isReadOnlySupported",get:function(){return!0}}],(n=[{key:"data",get:function(){if(this.element){var e=this.element.querySelector(".".concat(this.api.styles.input));this._data.caption=e?e.innerHTML:""}return this._data},set:function(e){if(!(e instanceof Object))throw Error("Embed Tool data should be object");var t=e.service,r=e.source,n=e.embed,i=e.width,o=e.height,a=e.caption,l=void 0===a?"":a;this._data={service:t||this.data.service,source:r||this.data.source,embed:n||this.data.embed,width:i||this.data.width,height:o||this.data.height,caption:l||this.data.caption||""};var s=this.element;s&&s.parentNode.replaceChild(this.render(),s)}},{key:"CSS",get:function(){return{baseClass:this.api.styles.block,input:this.api.styles.input,container:"embed-tool",containerLoading:"embed-tool--loading",preloader:"embed-tool__preloader",caption:"embed-tool__caption",url:"embed-tool__url",content:"embed-tool__content"}}},{key:"render",value:function(){var e=this;if(!this.data.service){var r=document.createElement("div");return this.element=r,r}var n=t.services[this.data.service].html,i=document.createElement("div"),o=document.createElement("div"),a=document.createElement("template"),l=this.createPreloader();i.classList.add(this.CSS.baseClass,this.CSS.container,this.CSS.containerLoading),o.classList.add(this.CSS.input,this.CSS.caption),i.appendChild(l),o.contentEditable=!this.readOnly,o.dataset.placeholder=this.api.i18n.t("Enter a caption"),o.innerHTML=this.data.caption||"",a.innerHTML=n,a.content.firstChild.setAttribute("src",this.data.embed),a.content.firstChild.classList.add(this.CSS.content);var s=this.embedIsReady(i);return i.appendChild(a.content.firstChild),i.appendChild(o),s.then((function(){i.classList.remove(e.CSS.containerLoading)})),this.element=i,i}},{key:"createPreloader",value:function(){var e=document.createElement("preloader"),t=document.createElement("div");return t.textContent=this.data.source,e.classList.add(this.CSS.preloader),t.classList.add(this.CSS.url),e.appendChild(t),e}},{key:"save",value:function(){return this.data}},{key:"onPaste",value:function(e){var r=e.detail,n=r.key,i=r.data,o=t.services[n],a=o.regex,l=o.embedUrl,s=o.width,c=o.height,d=o.id,u=void 0===d?function(e){return e.shift()}:d,h=a.exec(i).slice(1),m=l.replace(/<%= remote_id %>/g,u(h));this.data={service:n,source:i,embed:m,width:s,height:c}}},{key:"embedIsReady",value:function(e){var t=null;return new Promise((function(r,n){(t=new MutationObserver((0,x.debounce)(r,450))).observe(e,{childList:!0,subtree:!0})})).then((function(){t.disconnect()}))}}])&&o(r.prototype,n),l&&o(r,l),Object.defineProperty(r,"prototype",{writable:!1}),t}()})(),n.default})()));