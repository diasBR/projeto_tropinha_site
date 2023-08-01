var p=Object.defineProperty,h=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var u=(t,o,r)=>o in t?p(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,a=(t,o)=>{for(var r in o||(o={}))_.call(o,r)&&u(t,r,o[r]);if(i)for(var r of i(o))S.call(o,r)&&u(t,r,o[r]);return t},n=(t,o)=>h(t,m(o));import{d,f}from"./index.aff2f9f0.js";import{G as g,a as v}from"./Row.13b6f3f1.js";import{n as w}from"./vueComponentNormalizer.87056a83.js";var M=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("grid-row",{staticClass:"aioseo-separators"},[!t.showMoreSeparators&&t.hiddenSeparator?r("grid-column",{attrs:{xs:"2",sm:"1"}},[r("div",{staticClass:"active separator",domProps:{innerHTML:t._s(t.hiddenSeparator)}})]):t._e(),t._l(t.separators,function(s,e){return r("grid-column",{key:e,attrs:{xs:"2",sm:"1"}},[r("div",{staticClass:"separator",class:{active:t.optionsSeparator===s},domProps:{innerHTML:t._s(s)},on:{click:function(l){return t.setSeparator(s)}}})])}),t.showMoreSeparators?t._l(t.moreSeparators,function(s,e){return r("grid-column",{key:"m_"+e,attrs:{xs:"2",sm:"1"}},[r("div",{staticClass:"separator",class:{active:t.optionsSeparator===s},domProps:{innerHTML:t._s(s)},on:{click:function(l){return t.setSeparator(s)}}})])}):t._e(),t.showMoreSeparators?t._e():r("grid-column",{attrs:{xs:t.hiddenSeparator?"3":"4"}},[r("div",{staticClass:"show-more"},[r("a",{attrs:{href:"#"},on:{click:function(s){s.preventDefault(),t.showMoreSeparators=!0}}},[t._v(" "+t._s(t.strings.showMore)+"\u2026 ")])])]),t.showMoreSeparators?r("grid-column",[r("div",{staticClass:"custom-separator"},[t._v(" "+t._s(t.strings.custom)+" "),r("base-input",{attrs:{spellcheck:!1,size:"medium"},model:{value:t.customSeparator,callback:function(s){t.customSeparator=s},expression:"customSeparator"}})],1)]):t._e(),t.showMoreSeparators?r("grid-column",[r("div",{staticClass:"show-more"},[r("a",{attrs:{href:"#"},on:{click:function(s){s.preventDefault(),t.showMoreSeparators=!1}}},[t._v(" "+t._s(t.strings.showLess)+"\u2026 ")])])]):t._e()],2)},y=[];const x={components:{GridColumn:g,GridRow:v},props:{optionsSeparator:{type:String,required:!0},showMoreSlug:{type:String,required:!0}},data(){return{strings:{custom:"Custom separator:",showMore:"Show More",showLess:"Show Less"},showMoreSeparators:!1,showMoreInitial:!0,customSeparator:null,separators:["&ndash;","&raquo;","&rsaquo;","&#x2023;","&rarr;","&bull;","&#47;","&#124;"],moreSeparators:["&#45;","&mdash;","&laquo;","&larr;","&gt;","&ge;","&#92;","&#43;","&#9658;"]}},watch:{showMoreSeparators(t){if(this.showMoreInitial){this.showMoreInitial=!1;return}this.toggleRadio({slug:this.showMoreSlug,value:t})},customSeparator(t){t!==null&&(this.$emit("change",t),this.separators.concat(this.moreSeparators).includes(t)&&(this.customSeparator=null))}},computed:n(a({},d(["options","settings"])),{hiddenSeparator(){return this.optionsSeparator===this.customSeparator||this.moreSeparators.includes(this.optionsSeparator)?this.optionsSeparator:null}}),methods:n(a({},f(["toggleRadio"])),{setSeparator(t){this.customSeparator=null,this.$emit("change",t)}}),mounted(){this.showMoreSeparators=this.settings.toggledRadio[this.showMoreSlug],this.customSeparator=this.optionsSeparator.includes(this.separators.concat(this.moreSeparators))?null:this.optionsSeparator}},c={};var C=w(x,M,y,!1,k,null,null,null);function k(t){for(let o in c)this[o]=c[o]}var A=function(){return C.exports}();export{A as C};
