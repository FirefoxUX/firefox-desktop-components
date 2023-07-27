(self.webpackChunkbrowser_storybook=self.webpackChunkbrowser_storybook||[]).push([[179],{346:(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(645),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__)()((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.id,"/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n\n.addon-panel-body {\n  box-sizing: border-box;\n}\n\n.addon-panel-message {\n  background: #FFF5CF;\n  color: #333333;\n  padding: 10px 15px;\n  line-height: 20px;\n  box-shadow: rgba(0,0,0,.1) 0 -1px 0 0 inset;\n  font-size: 13px;\n}\n\n.addon-panel-table {\n  border-collapse: collapse;\n  border-spacing: 0;\n  color: #333333;\n  font-size: 13px;\n  line-height: 20px;\n  text-align: left;\n  width: 100%;\n  margin: 0;\n}\n\n.addon-panel-table-head {\n  color: rgba(51,51,51,0.75);\n}\n\n.addon-panel-table-head th {\n  padding: 10px 15px;\n  border: none;\n  vertical-align: top;\n}\n\n.addon-panel-table-head th:first-of-type, .addon-panel-table-body td:first-of-type {\n  width: 25%;\n  padding-left: 20px;\n}\n\n.addon-panel-table-head th:last-of-type, .addon-panel-table-body td:last-of-type {\n  padding-right: 20px;\n}\n\n.addon-panel-table-body {\n  border-radius: 4px;\n}\n\n.addon-panel-table-body tr {\n  overflow: hidden;\n  border-top: 1px solid #e6e6e6;\n}\n\n.addon-panel-table-body td {\n  padding: 10px 15px;\n  font-weight: bold;\n}\n\n.addon-panel-table-body label {\n  display: flex;\n}\n\n.addon-panel-table-body textarea {\n  height: fit-content;\n  appearance: none;\n  border: none;\n  box-sizing: inherit;\n  display: block;\n  margin: 0;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 10px;\n  color: #333333;\n  box-shadow: rgba(0,0,0,.1) 0 0 0 1px inset;\n  border-radius: 4px;\n  line-height: 20px;\n  flex: 1;\n  text-align: left;\n  overflow: visible;\n  max-height: 400px;\n}\n",""]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},24654:()=>{},16228:(__unused_webpack___webpack_module__,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var react=__webpack_require__(67294),esm=__webpack_require__(32605),types=__webpack_require__(96899),TOOL_ID="".concat("addon-component-status","/statusIndicator"),dist_esm=(__webpack_require__(82526),__webpack_require__(41817),__webpack_require__(86141)),index_681e4b07=__webpack_require__(94601),VALID_STATUS_MAP={stable:{label:"Stable",badgeType:"positive",description:"This component is widely used in Firefox, in both the chrome and in-content pages."},"in-development":{label:"In Development",badgeType:"warning",description:"This component is in active development and starting to be used in Firefox. It may not yet be usable in both the chrome and in-content pages."},unstable:{label:"Unstable",badgeType:"negative",description:"This component is still in the early stages of development and may not be ready for general use in Firefox."}},StatusIndicator=function StatusIndicator(){var _componentStatus$type,componentStatus=(0,dist_esm.Ut)("status",null),statusData=VALID_STATUS_MAP[null!==(_componentStatus$type=null==componentStatus?void 0:componentStatus.type)&&void 0!==_componentStatus$type?_componentStatus$type:componentStatus];if(!componentStatus||!statusData)return"";var description=componentStatus.description||statusData.description,links=componentStatus.links||[];return react.createElement(index_681e4b07.W,{key:TOOL_ID,placement:"top",trigger:"click",style:{display:"flex"},onVisibilityChange:function onVisibilityChange(isVisible){var button=document.getElementById("statusButton");isVisible?button.setAttribute("aria-describedby","statusMessage"):button.removeAttribute("aria-describedby")},tooltip:function tooltip(){return react.createElement("div",{id:"statusMessage"},react.createElement(index_681e4b07.ab,{title:statusData.label,desc:description,links}))}},react.createElement(index_681e4b07.ah,{id:"statusButton",title:"Component status: ".concat(statusData.label)},react.createElement(index_681e4b07.a2,{status:statusData.badgeType,style:{boxShadow:"currentColor 0 0 0 1px inset"}},statusData.label)))};esm.KP.register("addon-component-status",(function(){esm.KP.add(TOOL_ID,{type:types.V.TOOL,title:"Pseudo Localization",render:StatusIndicator})}))},188:(__unused_webpack___webpack_module__,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__(4723),__webpack_require__(74916);var _DIRECTION_BY_STRATEG,react=__webpack_require__(67294),esm=__webpack_require__(32605),types=__webpack_require__(96899),PANEL_ID="".concat("addon-fluent","/fluentPanel"),TOOL_ID="".concat("addon-fluent","/toolbarButton"),PSEUDO_STRATEGIES=["default","accented","bidi"],DIRECTIONS_ltr="ltr",DIRECTIONS_rtl="rtl",dist_esm=((_DIRECTION_BY_STRATEG={}).default=DIRECTIONS_ltr,_DIRECTION_BY_STRATEG.accented=DIRECTIONS_ltr,_DIRECTION_BY_STRATEG.bidi=DIRECTIONS_rtl,__webpack_require__(21249),__webpack_require__(47042),__webpack_require__(79753),__webpack_require__(82526),__webpack_require__(41817),__webpack_require__(41539),__webpack_require__(32165),__webpack_require__(78783),__webpack_require__(66992),__webpack_require__(33948),__webpack_require__(68309),__webpack_require__(91038),__webpack_require__(86141)),index_681e4b07=__webpack_require__(94601);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var PseudoLocalizationButton=function PseudoLocalizationButton(){var _useGlobals2=_slicedToArray((0,dist_esm.kO)(),2),_useGlobals2$0$pseudo=_useGlobals2[0].pseudoStrategy,pseudoStrategy=void 0===_useGlobals2$0$pseudo?"default":_useGlobals2$0$pseudo,updateGlobals=_useGlobals2[1],getTooltipLinks=function getTooltipLinks(_ref){var onHide=_ref.onHide;return PSEUDO_STRATEGIES.map((function(strategy){return{id:strategy,title:strategy.charAt(0).toUpperCase()+strategy.slice(1),onClick:function onClick(){!function updatePseudoStrategy(strategy){updateGlobals({pseudoStrategy:strategy})}(strategy),onHide()},active:pseudoStrategy===strategy}}))};return react.createElement(index_681e4b07.W,{placement:"top",trigger:"click",tooltip:function tooltip(props){return react.createElement(index_681e4b07.ac,{links:getTooltipLinks(props)})}},react.createElement(index_681e4b07.ah,{key:TOOL_ID,active:pseudoStrategy&&"default"!==pseudoStrategy,title:"Apply pseudo localization"},react.createElement(index_681e4b07.I,{icon:"transfer"})))},injectStylesIntoStyleTag=(__webpack_require__(19601),__webpack_require__(69600),__webpack_require__(92222),__webpack_require__(23157),__webpack_require__(23123),__webpack_require__(73210),__webpack_require__(68304),__webpack_require__(24812),__webpack_require__(30489),__webpack_require__(12419),__webpack_require__(78011),__webpack_require__(69070),__webpack_require__(96649),__webpack_require__(96078),__webpack_require__(9653),__webpack_require__(379)),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),fluent_panel=__webpack_require__(346),options={insert:"head",singleton:!1};injectStylesIntoStyleTag_default()(fluent_panel.Z,options);fluent_panel.Z.locals;function FluentPanel_slicedToArray(arr,i){return function FluentPanel_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function FluentPanel_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||FluentPanel_unsupportedIterableToArray(arr,i)||function FluentPanel_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function FluentPanel_unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return FluentPanel_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?FluentPanel_arrayLikeToArray(o,minLen):void 0}}function FluentPanel_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"==typeof call||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var FluentPanel=function(_React$Component){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(FluentPanel,_React$Component);var _super=_createSuper(FluentPanel);function FluentPanel(props){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,FluentPanel),(_this=_super.call(this,props)).handleFluentChanged=function(strings){var storyData=_this.props.api.getCurrentStoryData(),fileName="".concat(storyData.component,".ftl");_this.setState((function(state){return Object.assign({},state,{strings,fileName})}))},_this.onInput=function(e){_this.setState((function(state){var _Object$assign,_step,strings=[],_iterator=function _createForOfIteratorHelper(o,allowArrayLike){var it="undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=FluentPanel_unsupportedIterableToArray(o))||allowArrayLike&&o&&"number"==typeof o.length){it&&(o=it);var i=0,F=function F(){};return{s:F,n:function n(){return i>=o.length?{done:!0}:{done:!1,value:o[i++]}},e:function e(_e2){throw _e2},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var err,normalCompletion=!0,didErr=!1;return{s:function s(){it=it.call(o)},n:function n(){var step=it.next();return normalCompletion=step.done,step},e:function e(_e3){didErr=!0,err=_e3},f:function f(){try{normalCompletion||null==it.return||it.return()}finally{if(didErr)throw err}}}}(state.strings);try{for(_iterator.s();!(_step=_iterator.n()).done;){var _ref2=FluentPanel_slicedToArray(_step.value,2),key=_ref2[0],value=_ref2[1];if(key==e.target.name){var stringValue=e.target.value;stringValue.startsWith(".")&&(stringValue="\n"+stringValue),strings.push([key,stringValue])}else strings.push([key,value])}}catch(err){_iterator.e(err)}finally{_iterator.f()}var stringified=strings.map((function(_ref3){var _ref4=FluentPanel_slicedToArray(_ref3,2),key=_ref4[0],value=_ref4[1];return"".concat(key," = ").concat(value)})).join("\n");_this.channel.emit("fluent-set-strings",stringified);var fluentStrings=_this.props.api.getGlobals().fluentStrings;return _this.props.api.updateGlobals({fluentStrings:Object.assign({},fluentStrings,(_Object$assign={},_Object$assign[state.fileName]=strings,_Object$assign))}),Object.assign({},state,{strings})}))},_this.channel=esm.KP.getChannel(),_this.state={name:null,strings:[]},_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(FluentPanel,[{key:"componentDidMount",value:function componentDidMount(){this.props.api.on("fluent-changed",this.handleFluentChanged)}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.props.api.off("fluent-changed",this.handleFluentChanged)}},{key:"render",value:function render(){var _this2=this,_this$props=this.props,api=_this$props.api,active=_this$props.active,strings=this.state.strings;return 0===strings.length?react.createElement(index_681e4b07.an,{active:!!active,api},react.createElement("div",{className:"addon-panel-body"},react.createElement("div",{className:"addon-panel-message"},"This story is not configured to use Fluent."))):react.createElement(index_681e4b07.an,{active:!!active,api},react.createElement("div",{className:"addon-panel-body"},react.createElement("table",{"aria-hidden":"false",className:"addon-panel-table"},react.createElement("thead",{className:"addon-panel-table-head"},react.createElement("tr",null,react.createElement("th",null,react.createElement("span",null,"Identifier")),react.createElement("th",null,react.createElement("span",null,"String")))),react.createElement("tbody",{className:"addon-panel-table-body"},strings.map((function(_ref5){var _ref6=FluentPanel_slicedToArray(_ref5,2),identifier=_ref6[0],value=_ref6[1];return react.createElement("tr",{key:identifier},react.createElement("td",null,react.createElement("span",null,identifier)),react.createElement("td",null,react.createElement("label",null,react.createElement("textarea",{name:identifier,onInput:_this2.onInput,defaultValue:value.trim().split("\n").map((function(s){return s.trim()})).join("\n")}))))}))))))}}]),FluentPanel}(react.Component);esm.KP.register("addon-fluent",(function(api){esm.KP.add(TOOL_ID,{type:types.V.TOOL,title:"Pseudo Localization",match:function match(_ref){var viewMode=_ref.viewMode;return!(!viewMode||!viewMode.match(/^story$/))},render:PseudoLocalizationButton}),esm.KP.add(PANEL_ID,{title:"Fluent",type:types.V.PANEL,render:function render(_ref2){var active=_ref2.active,key=_ref2.key;return react.createElement(FluentPanel,{active,api,key})}})}))}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[993],(()=>(__webpack_exec__(37707),__webpack_exec__(7967),__webpack_exec__(78295),__webpack_exec__(15887),__webpack_exec__(59288),__webpack_exec__(24203),__webpack_exec__(75259),__webpack_exec__(57464),__webpack_exec__(1498),__webpack_exec__(188),__webpack_exec__(16228))));__webpack_require__.O()}]);