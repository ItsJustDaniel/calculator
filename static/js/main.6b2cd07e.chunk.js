(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_aliceli_Desktop_Programming_Projects_FreeCodeCamp_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),_Users_aliceli_Desktop_Programming_Projects_FreeCodeCamp_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_Users_aliceli_Desktop_Programming_Projects_FreeCodeCamp_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9),_Users_aliceli_Desktop_Programming_Projects_FreeCodeCamp_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_App_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(16),_App_css__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__),_components_buttons__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(6),_components_display__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(7),App=function(_React$Component){Object(_Users_aliceli_Desktop_Programming_Projects_FreeCodeCamp_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(App,_React$Component);var _super=Object(_Users_aliceli_Desktop_Programming_Projects_FreeCodeCamp_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(App);function App(){var _this;Object(_Users_aliceli_Desktop_Programming_Projects_FreeCodeCamp_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_super.call.apply(_super,[this].concat(args)),_this.state={input:"0",inputArr:[],buttonId:["clear","divide","multiply","nine","eight","seven","subtract","six","five","four","add","three","two","one","equals","zero","decimal"],buttonValue:["AC"," / "," x ","9","8","7"," - ","6","5","4"," + ","3","2","1","=","0","."]},_this.onButtonClick=function(e){var regex=/([.]{2,})|(?<=[.]\d+)[.]{1,}/g,input=_this.state.input,inputArr=_this.state.inputArr,value=e.target.value;"0"===_this.state.input?_this.setState({input:value}):regex.test(input+value)?console.log("hello"):_this.setState({input:input+value,inputArr:inputArr.concat(value)},(function(){console.log(inputArr)})),"="===value?_this.setState({input:String(eval(input)),inputArr:[String(eval(input))]}):" x "===e.target.value?_this.setState({input:input+" * ",inputArr:_this.state.inputArr.concat(" * ")}):"AC"===e.target.value?_this.setState({input:"0",inputArr:[]}):" + "!==inputArr[inputArr.length-1]&&" - "!==inputArr[inputArr.length-1]&&" / "!==inputArr[inputArr.length-1]&&" * "!==inputArr[inputArr.length-1]||" + "!==value&&" / "!==value&&" * "!==value||_this.setState({input:input.split("").filter((function(_){return console.log(_),"+"!==_&&"-"!==_&&"/"!==_&&"*"!==_&&" "!==_})).join("").concat(value)})},_this}return Object(_Users_aliceli_Desktop_Programming_Projects_FreeCodeCamp_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){var _=this.state.input,e=this.state.buttonId.slice(),t=this.state.buttonValue.slice();return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"App",id:"root-container"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{id:"calculator"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_display__WEBPACK_IMPORTED_MODULE_7__.a,{input:_}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_buttons__WEBPACK_IMPORTED_MODULE_6__.a,{value:t,id:e,onButtonClick:this.onButtonClick})))}}]),App}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);__webpack_exports__.a=App},,,function(_,e,t){"use strict";var r=t(0),a=t.n(r);t(17);e.a=function(_){var e=_.id.map((function(e,t){return a.a.createElement("button",{id:e,key:t,value:_.value[t],onClick:_.onButtonClick,className:"buttons"},_.value[t])}));return a.a.createElement("div",{id:"buttons-container"},e)}},function(_,e,t){"use strict";var r=t(0),a=t.n(r);t(18);e.a=function(_){return a.a.createElement("div",{id:"display"},a.a.createElement("h3",null,_.input))}},,,function(_,e,t){_.exports=t(19)},,,,,function(_,e,t){},function(_,e,t){},function(_,e,t){},function(_,e,t){},function(_,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),n=t(2),o=t.n(n),s=(t(15),t(3));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(s.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(_){_.unregister()})).catch((function(_){console.error(_.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.6b2cd07e.chunk.js.map