!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Embed=t():e.Embed=t()}(self,(()=>(()=>{var e={387:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(537),i=n.n(r),o=n(645),a=n.n(o)()(i());a.push([e.id,".embed-tool--loading .embed-tool__caption {\n      display: none;\n    }\n\n    .embed-tool--loading .embed-tool__preloader {\n      display: block;\n    }\n\n    .embed-tool--loading .embed-tool__content {\n      display: none;\n    }\n  .embed-tool__preloader {\n    display: none;\n    position: relative;\n    height: 200px;\n    box-sizing: border-box;\n    border-radius: 5px;\n    border: 1px solid #e6e9eb;\n  }\n  .embed-tool__preloader::before {\n      content: '';\n      position: absolute;\n      z-index: 3;\n      left: 50%;\n      top: 50%;\n      width: 30px;\n      height: 30px;\n      margin-top: -25px;\n      margin-left: -15px;\n      border-radius: 50%;\n      border: 2px solid #cdd1e0;\n      border-top-color: #388ae5;\n      box-sizing: border-box;\n      animation: embed-preloader-spin 2s infinite linear;\n    }\n  .embed-tool__url {\n    position: absolute;\n    bottom: 20px;\n    left: 50%;\n    transform: translateX(-50%);\n    max-width: 250px;\n    color: #7b7e89;\n    font-size: 11px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .embed-tool__content {\n    width: 100%;\n  }\n  .embed-tool__caption {\n    margin-top: 7px;\n  }\n  .embed-tool__caption[contentEditable=true][data-placeholder]::before{\n      position: absolute;\n      content: attr(data-placeholder);\n      color: #707684;\n      font-weight: normal;\n      opacity: 0;\n    }\n  .embed-tool__caption[contentEditable=true][data-placeholder]:empty::before {\n         opacity: 1;\n      }\n  .embed-tool__caption[contentEditable=true][data-placeholder]:empty:focus::before {\n        opacity: 0;\n      }\n\n@keyframes embed-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n","",{version:3,sources:["webpack://./src/index.css"],names:[],mappings:"AAGI;MACE,aAAa;IACf;;IAEA;MACE,cAAc;IAChB;;IAEA;MACE,aAAa;IACf;EAGF;IACE,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,yBAAyB;EAkB3B;EAhBE;MACE,WAAW;MACX,kBAAkB;MAClB,UAAU;MACV,SAAS;MACT,QAAQ;MACR,WAAW;MACX,YAAY;MACZ,iBAAiB;MACjB,kBAAkB;MAClB,kBAAkB;MAClB,yBAAyB;MACzB,yBAAyB;MACzB,sBAAsB;MACtB,kDAAkD;IACpD;EAGF;IACE,kBAAkB;IAClB,YAAY;IACZ,SAAS;IACT,2BAA2B;IAC3B,gBAAgB;IAChB,cAAc;IACd,eAAe;IACf,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;EACzB;EAEA;IACE,WAAW;EACb;EAEA;IACE,eAAe;EAoBjB;EAjBE;MACE,kBAAkB;MAClB,+BAA+B;MAC/B,cAAc;MACd,mBAAmB;MACnB,UAAU;IACZ;EAGE;SACG,UAAU;MACb;EAEA;QACE,UAAU;MACZ;;AAKN;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF",sourcesContent:[".embed-tool {\n  &--loading {\n\n    ^&__caption {\n      display: none;\n    }\n\n    ^&__preloader {\n      display: block;\n    }\n\n    ^&__content {\n      display: none;\n    }\n  }\n\n  &__preloader {\n    display: none;\n    position: relative;\n    height: 200px;\n    box-sizing: border-box;\n    border-radius: 5px;\n    border: 1px solid #e6e9eb;\n\n    &::before {\n      content: '';\n      position: absolute;\n      z-index: 3;\n      left: 50%;\n      top: 50%;\n      width: 30px;\n      height: 30px;\n      margin-top: -25px;\n      margin-left: -15px;\n      border-radius: 50%;\n      border: 2px solid #cdd1e0;\n      border-top-color: #388ae5;\n      box-sizing: border-box;\n      animation: embed-preloader-spin 2s infinite linear;\n    }\n  }\n\n  &__url {\n    position: absolute;\n    bottom: 20px;\n    left: 50%;\n    transform: translateX(-50%);\n    max-width: 250px;\n    color: #7b7e89;\n    font-size: 11px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  &__content {\n    width: 100%;\n  }\n\n  &__caption {\n    margin-top: 7px;\n\n\n    &[contentEditable=true][data-placeholder]::before{\n      position: absolute;\n      content: attr(data-placeholder);\n      color: #707684;\n      font-weight: normal;\n      opacity: 0;\n    }\n\n    &[contentEditable=true][data-placeholder]:empty {\n      &::before {\n         opacity: 1;\n      }\n\n      &:focus::before {\n        opacity: 0;\n      }\n    }\n  }\n}\n\n@keyframes embed-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n"],sourceRoot:""}]);const l=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(a[s]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),t.push(d))}},t}},537:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(i," */");return[t].concat([o]).join("\n")}return[t].join("\n")}},296:e=>{function t(e,t,n){var r,i,o,a,l;function s(){var c=Date.now()-a;c<t&&c>=0?r=setTimeout(s,t-c):(r=null,n||(l=e.apply(o,i),o=i=null))}null==t&&(t=100);var c=function(){o=this,i=arguments,a=Date.now();var c=n&&!r;return r||(r=setTimeout(s,t)),c&&(l=e.apply(o,i),o=i=null),l};return c.clear=function(){r&&(clearTimeout(r),r=null)},c.flush=function(){r&&(l=e.apply(o,i),o=i=null,clearTimeout(r),r=null)},c}t.debounce=t,e.exports=t},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},a=[],l=0;l<e.length;l++){var s=e[l],c=r.base?s[0]+r.base:s[0],d=o[c]||0,u="".concat(c," ").concat(d);o[c]=d+1;var m=n(u),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)t[m].references++,t[m].updater(h);else{var p=i(h,r);r.byIndex=l,t.splice(l,0,{identifier:u,updater:p,references:1})}a.push(u)}return a}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var l=n(o[a]);t[l].references--}for(var s=r(e,i),c=0;c<o.length;c++){var d=n(o[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=s}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var r={};return(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,l=[],s=!0,c=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){c=!0,i=e}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return l}}(e,n)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(o=i.key,a=void 0,a=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,"string");if("object"!==e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),"symbol"===e(a)?a:String(a)),i)}var o,a}n.d(r,{default:()=>x});const a={vimeo:{regex:/(?:http[s]?:\/\/)?(?:www.)?(?:player.)?vimeo\.co(?:.+\/([^\/]\d+)(?:#t=[\d]+)?s?$)/,embedUrl:"https://player.vimeo.com/video/<%= remote_id %>?title=0&byline=0",html:'<iframe style="width:100%;" height="320" frameborder="0"></iframe>',height:320,width:580},youtube:{regex:/(?:https?:\/\/)?(?:www\.)?(?:(?:youtu\.be\/)|(?:youtube\.com)\/(?:v\/|u\/\w\/|embed\/|watch))(?:(?:\?v=)?([^#&?=]*))?((?:[?&]\w*=[-%\w]*)*)/,embedUrl:"https://www.youtube.com/embed/<%= remote_id %>",html:'<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',height:320,width:580,id:function(e){var t=i(e,2),n=t[0],r=t[1];if(!r&&n)return n;var o={start:"start",end:"end",t:"start",time_continue:"start",list:"list"};return r=r.slice(1).split("&").map((function(e){var t=i(e.split("="),2),r=t[0],a=t[1];return n||"v"!==r?o[r]?"LL"===a||a.startsWith("RDMM")||a.startsWith("FL")?null:"".concat(o[r],"=").concat(a):null:(n=a,null)})).filter((function(e){return!!e})),n+"?"+r.join("&")}},coub:{regex:/https?:\/\/coub\.com\/view\/([^\/\?\&]+)/,embedUrl:"https://coub.com/embed/<%= remote_id %>",html:'<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',height:320,width:580},vine:{regex:/https?:\/\/vine\.co\/v\/([^\/\?\&]+)/,embedUrl:"https://vine.co/v/<%= remote_id %>/embed/simple/",html:'<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',height:320,width:580},imgur:{regex:/https?:\/\/(?:i\.)?imgur\.com.*\/([a-zA-Z0-9]+)(?:\.gifv)?/,embedUrl:"http://imgur.com/<%= remote_id %>/embed",html:'<iframe allowfullscreen="true" scrolling="no" id="imgur-embed-iframe-pub-<%= remote_id %>" class="imgur-embed-iframe-pub" style="height: 500px; width: 100%; border: 1px solid #000"></iframe>',height:500,width:540},gfycat:{regex:/https?:\/\/gfycat\.com(?:\/detail)?\/([a-zA-Z]+)/,embedUrl:"https://gfycat.com/ifr/<%= remote_id %>",html:"<iframe frameborder='0' scrolling='no' style=\"width:100%;\" height='436' allowfullscreen ></iframe>",height:436,width:580},"twitch-channel":{regex:/https?:\/\/www\.twitch\.tv\/([^\/\?\&]*)\/?$/,embedUrl:"https://player.twitch.tv/?channel=<%= remote_id %>",html:'<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',height:366,width:600},"twitch-video":{regex:/https?:\/\/www\.twitch\.tv\/(?:[^\/\?\&]*\/v|videos)\/([0-9]*)/,embedUrl:"https://player.twitch.tv/?video=v<%= remote_id %>",html:'<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',height:366,width:600},"yandex-music-album":{regex:/https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/?$/,embedUrl:"https://music.yandex.ru/iframe/#album/<%= remote_id %>/",html:'<iframe frameborder="0" style="border:none;width:540px;height:400px;" style="width:100%;" height="400"></iframe>',height:400,width:540},"yandex-music-track":{regex:/https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/track\/([0-9]*)/,embedUrl:"https://music.yandex.ru/iframe/#track/<%= remote_id %>/",html:'<iframe frameborder="0" style="border:none;width:540px;height:100px;" style="width:100%;" height="100"></iframe>',height:100,width:540,id:function(e){return e.join("/")}},"yandex-music-playlist":{regex:/https?:\/\/music\.yandex\.ru\/users\/([^\/\?\&]*)\/playlists\/([0-9]*)/,embedUrl:"https://music.yandex.ru/iframe/#playlist/<%= remote_id %>/show/cover/description/",html:'<iframe frameborder="0" style="border:none;width:540px;height:400px;" width="540" height="400"></iframe>',height:400,width:540,id:function(e){return e.join("/")}},codepen:{regex:/https?:\/\/codepen\.io\/([^\/\?\&]*)\/pen\/([^\/\?\&]*)/,embedUrl:"https://codepen.io/<%= remote_id %>?height=300&theme-id=0&default-tab=css,result&embed-version=2",html:"<iframe height='300' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",height:300,width:600,id:function(e){return e.join("/embed/")}},instagram:{regex:/https?:\/\/www\.instagram\.com\/p\/([^\/\?\&]+)\/?.*/,embedUrl:"https://www.instagram.com/p/<%= remote_id %>/embed",html:'<iframe width="400" height="505" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',height:505,width:400},twitter:{regex:/^https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(?:es)?\/(\d+?.*)?$/,embedUrl:"https://twitframe.com/show?url=https://twitter.com/<%= remote_id %>",html:'<iframe width="600" height="600" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',height:300,width:600,id:function(e){return e.join("/status/")}},pinterest:{regex:/https?:\/\/([^\/\?\&]*).pinterest.com\/pin\/([^\/\?\&]*)\/?$/,embedUrl:"https://assets.pinterest.com/ext/embed.html?id=<%= remote_id %>",html:"<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 400px; max-height: 1000px;'></iframe>",id:function(e){return e[1]}},facebook:{regex:/https?:\/\/www.facebook.com\/([^\/\?\&]*)\/(.*)/,embedUrl:"https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/<%= remote_id %>&width=500",html:"<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 500px; max-height: 1000px;'></iframe>",id:function(e){return e.join("/")}},aparat:{regex:/(?:http[s]?:\/\/)?(?:www.)?aparat\.com\/v\/([^\/\?\&]+)\/?/,embedUrl:"https://www.aparat.com/video/video/embed/videohash/<%= remote_id %>/vt/frame",html:'<iframe width="600" height="300" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',height:300,width:600},miro:{regex:/https:\/\/miro.com\/\S+(\S{12})\/(\S+)?/,embedUrl:"https://miro.com/app/live-embed/<%= remote_id %>",html:'<iframe width="700" height="500" style="margin: 0 auto;" allowFullScreen frameBorder="0" scrolling="no"></iframe>'}};var l=n(379),s=n.n(l),c=n(795),d=n.n(c),u=n(569),m=n.n(u),h=n(565),p=n.n(h),f=n(216),b=n.n(f),A=n(589),y=n.n(A),g=n(387),v={};v.styleTagTransform=y(),v.setAttributes=p(),v.insert=m().bind(null,"head"),v.domAPI=d(),v.insertStyleElement=b(),s()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals;var w=n(296),x=function(){function t(e){var n=e.data,r=e.api,i=e.readOnly;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.api=r,this._data={},this.element=null,this.readOnly=i,this.data=n}var n,r,l;return n=t,l=[{key:"prepare",value:function(n){var r=n.config,o=(void 0===r?{}:r).services,l=void 0===o?{}:o,s=Object.entries(a),c=Object.entries(l).filter((function(e){var t=i(e,2),n=(t[0],t[1]);return"boolean"==typeof n&&!0===n})).map((function(e){return i(e,1)[0]})),d=Object.entries(l).filter((function(t){var n=i(t,2);return n[0],"object"===e(n[1])})).filter((function(e){var n=i(e,2),r=(n[0],n[1]);return t.checkServiceConfig(r)})).map((function(e){var t=i(e,2),n=t[0],r=t[1];return[n,{regex:r.regex,embedUrl:r.embedUrl,html:r.html,height:r.height,width:r.width,id:r.id}]}));c.length&&(s=s.filter((function(e){var t=i(e,1)[0];return c.includes(t)}))),s=s.concat(d),t.services=s.reduce((function(e,t){var n=i(t,2),r=n[0],o=n[1];return r in e?(e[r]=Object.assign({},e[r],o),e):(e[r]=o,e)}),{}),t.patterns=s.reduce((function(e,t){var n=i(t,2),r=n[0],o=n[1];return e[r]=o.regex,e}),{})}},{key:"checkServiceConfig",value:function(e){var t=e.regex,n=e.embedUrl,r=e.html,i=e.height,o=e.width,a=e.id,l=t&&t instanceof RegExp&&n&&"string"==typeof n&&r&&"string"==typeof r;return(l=(l=l&&(void 0===a||a instanceof Function))&&(void 0===i||Number.isFinite(i)))&&(void 0===o||Number.isFinite(o))}},{key:"pasteConfig",get:function(){return{patterns:t.patterns}}},{key:"isReadOnlySupported",get:function(){return!0}}],(r=[{key:"data",get:function(){if(this.element){var e=this.element.querySelector(".".concat(this.api.styles.input));this._data.caption=e?e.innerHTML:""}return this._data},set:function(e){if(!(e instanceof Object))throw Error("Embed Tool data should be object");var t=e.service,n=e.source,r=e.embed,i=e.width,o=e.height,a=e.caption,l=void 0===a?"":a;this._data={service:t||this.data.service,source:n||this.data.source,embed:r||this.data.embed,width:i||this.data.width,height:o||this.data.height,caption:l||this.data.caption||""};var s=this.element;s&&s.parentNode.replaceChild(this.render(),s)}},{key:"CSS",get:function(){return{baseClass:this.api.styles.block,input:this.api.styles.input,container:"embed-tool",containerLoading:"embed-tool--loading",preloader:"embed-tool__preloader",caption:"embed-tool__caption",url:"embed-tool__url",content:"embed-tool__content"}}},{key:"render",value:function(){var e=this;if(!this.data.service){var n=document.createElement("div");return this.element=n,n}var r=t.services[this.data.service].html,i=document.createElement("div"),o=document.createElement("div"),a=document.createElement("template"),l=this.createPreloader();i.classList.add(this.CSS.baseClass,this.CSS.container,this.CSS.containerLoading),o.classList.add(this.CSS.input,this.CSS.caption),i.appendChild(l),o.contentEditable=!this.readOnly,o.dataset.placeholder=this.api.i18n.t("Enter a caption"),o.innerHTML=this.data.caption||"",a.innerHTML=r,a.content.firstChild.setAttribute("src",this.data.embed),a.content.firstChild.classList.add(this.CSS.content);var s=this.embedIsReady(i);return i.appendChild(a.content.firstChild),i.appendChild(o),s.then((function(){i.classList.remove(e.CSS.containerLoading)})),this.element=i,i}},{key:"createPreloader",value:function(){var e=document.createElement("preloader"),t=document.createElement("div");return t.textContent=this.data.source,e.classList.add(this.CSS.preloader),t.classList.add(this.CSS.url),e.appendChild(t),e}},{key:"save",value:function(){return this.data}},{key:"onPaste",value:function(e){var n=e.detail,r=n.key,i=n.data,o=t.services[r],a=o.regex,l=o.embedUrl,s=o.width,c=o.height,d=o.id,u=void 0===d?function(e){return e.shift()}:d,m=a.exec(i).slice(1),h=l.replace(/<%= remote_id %>/g,u(m));this.data={service:r,source:i,embed:h,width:s,height:c}}},{key:"embedIsReady",value:function(e){var t=null;return new Promise((function(n,r){(t=new MutationObserver((0,w.debounce)(n,450))).observe(e,{childList:!0,subtree:!0})})).then((function(){t.disconnect()}))}}])&&o(n.prototype,r),l&&o(n,l),Object.defineProperty(n,"prototype",{writable:!1}),t}()})(),r.default})()));
//# sourceMappingURL=bundle.js.map