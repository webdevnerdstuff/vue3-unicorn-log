/**
 * @name vue3-unicorn-log
 * @version 1.0.0
 * @description A magical 🦄 plugin to make coloring the console output easier and more flexible.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2023, WebDevNerdStuff
 * @homepage https://github.com/webdevnerdstuff/vue3-unicorn-log
 * @repository https://github.com/webdevnerdstuff/vue3-unicorn-log
 * @license MIT License
 */
import{ref as t,reactive as o}from"vue";const s=["magic","magical","prism","psychedelic","rainbow","trippy","unicorn"];class e{options;defaultStyles;callback=()=>{};errors=!1;outputResults=null;constructor(t,o){this.options=t,this.defaultStyles=o}prefix(){const t=this.options.logPrefix;t&&(this.options.text="string"==typeof t?`${t} ${this.options.text}`:`${this.options.name} ${this.options.text}`)}styles(){const t=this.options;let o=t.styles;o="log"!==t.type&&"info"!==t.type||!s.includes(t.styles)&&!t.magical?""===o&&"info"===t.type?this.defaultStyles.info.join(";"):o||this.defaultStyles.log.join(";"):this.defaultStyles.goNuts.join(";"),Array.isArray(o)&&(o=o.join(";")),this.options.styles=o}output(){const t=this.options,o=["%c%s",t.styles],s=[];t.text&&s.push(t.text),t.array.length&&s.push(t.array),Object.keys(t.objects).length&&s.push(t.objects);const e=[...o,...s];this.options.logOutput=e}}var r={run(t,o){const s=new e(t,o),r=Object.getOwnPropertyNames(e.prototype);return Object.values(r).map((t=>{"constructor"!==t&&s[t]()})),s.options}};const i=["clear","count","countReset","debug","dir","error","group","groupCollapsed","groupEnd","info","log","table","time","timeEnd","timeLog","trace","warn"];class n{options={};callback=null;errors=t(!1);name=t("");constructor(t,o){this.options=t,this.callback=o,this.name.value=t.name}type(){if(!i.includes(this.options.type))return"dirXml"===this.options.type?(this.errors.value=!0,this.callback("console.dir() is not supported console method.","warn"),!1):(this.errors.value=!0,this.callback(`console.${this.options.type}() is not supported at this time or is not a valid console method.`,"warn"),!1)}styles(){const t=this.options.styles;t instanceof Array||"object"!=typeof t&&!Number.isInteger(t)||(this.errors.value=!0,this.callback('The "styles" option is not a String or an Array.',"error"))}logPrefix(){const t=this.options.logPrefix;("object"==typeof t||t instanceof Boolean)&&(this.errors.value=!0,this.callback('The "logPrefix" option is not a string or boolean.',"error"))}text(){"string"!=typeof this.options.text&&(this.errors.value=!0,this.callback('The "text" option is not a string.',"error"))}objects(){const t=this.options.objects;(t instanceof Array||"string"==typeof t||Number.isInteger(t))&&(this.errors.value=!0,this.callback('The "objects" option is not an object.',"error"))}array(){const t=this.options.array;t instanceof Array&&"string"!=typeof t&&!Number.isInteger(t)||(this.errors.value=!0,this.callback('The "array" option is not an array.',"error"))}}var l={run(t,o){const s=new n(t,o),e=Object.getOwnPropertyNames(n.prototype);return Object.values(e).map((t=>{"constructor"!==t&&s[t]()})),s.errors.value}};let a=o({array:[],defaultStyles:{},disabled:!1,globalOptions:!1,logOutput:[],logPrefix:!1,magical:!1,name:"[UnicornLog]:",objects:{},styles:"",text:"🦄",type:"log"});const c="linear-gradient(to right,\n\thsl(0, 100%, 50%),\n\thsl(39, 100%, 50%),\n\thsl(60, 100%, 50%),\n\thsl(120, 100%, 50%),\n\thsl(180, 100%, 50%),\n\thsl(240, 100%, 50%),\n\thsl(300, 100%, 50%),\n\thsl(360, 100%, 50%)\n)";class p{pluginOptions={...a};logOutput=t([]);defaultStyles={log:["background-color: black",`border-image: ${c} 1`,"border-style: solid","border-width: 4px","color: #fff","font-weight: normal","padding: 8px"],info:["background-color: hsla(225, 100%, 8%, 1)","box-shadow: 999px 0 0 hsla(225, 100%, 8%, 1)","color: hsla(225, 100%, 85%, 1)","display: block","padding: 2px"],goNuts:[`background: ${c}`,"color: #f7f7f7","display: block",'font-family: "Helvetica", "Arial"',"font-size: 15px","font-weight: bold","margin: 5px 0","padding: 10px","text-shadow: 1px 1px 2px #000"]};errors=t(!1);constructor(t){this.pluginOptions={...this.pluginOptions,...t}}init(){if(this.pluginOptions.disabled)return!1;this.defaultStyles={...this.defaultStyles,...this.pluginOptions.defaultStyles};const t=l.run(this.pluginOptions,this.logger);return this.errors.value=t,this.pluginOptions=r.run(this.pluginOptions,this.defaultStyles),this.errors.value||this.consoleOutput(),!1}consoleDir(){const t=this.pluginOptions,o={objects:{},array:[]};return Object.keys(t.objects).length&&(Object.keys(t.array).length?o.objects=t.objects:Object.assign(o,t.objects)),Object.keys(t.array).length&&(Object.keys(t.objects).length?o.array=t.array:Object.assign(o,t.array)),Object.keys(o).length?(this.logger("console.dir() does not support colors.","info"),o):this.logger('console.dir() expects the "objects" and/or array option value to be set.',"error")}consoleTable(){return this.logger("console.table() does not support colors.","info"),this.pluginOptions.array}consoleMethodNotSupported(t){this.errors.value=!0,this.logger(`console.${t}() does not support colors.`,"info")}consoleOutput(){const t=this.pluginOptions.type;this.logOutput.value=this.pluginOptions.logOutput,"dir"===t&&(this.logOutput.value=[this.consoleDir()]),"table"===t&&(this.logOutput.value=[this.consoleTable()]),"count"!==t&&"countReset"!==t&&"time"!==t&&"timeEnd"!==t&&"timeLog"!==t||(this.logOutput.value=[this.consoleMethodNotSupported(t)]),this.errors.value||console[t](...this.logOutput.value)}logger(t="An error has occurred.",o="log"){const s=o.charAt(0).toUpperCase()+o.slice(1);let e="";"error"===o&&(this.errors.value=!0),"info"===o&&(e=this.defaultStyles.info.join(";")),console[o]("%c%s",e,`[UnicornLog ${s}]: ${t}`)}}const u=(t={})=>{if(t.globalOptions)return void(a={...a,...t});new p(t).init()},h={install(t,o){t.provide("$unicornLog",u);const s={globalOptions:!0,...o};t.config.globalProperties.$unicornLog=u(s)}};export{h as default};
