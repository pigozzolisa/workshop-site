webpackHotUpdate_N_E("pages/position",{

/***/ "./node_modules/google-maps-react/dist/GoogleApiComponent.js":
false,

/***/ "./node_modules/google-maps-react/dist/components/Circle.js":
false,

/***/ "./node_modules/google-maps-react/dist/components/HeatMap.js":
false,

/***/ "./node_modules/google-maps-react/dist/components/InfoWindow.js":
false,

/***/ "./node_modules/google-maps-react/dist/components/Marker.js":
false,

/***/ "./node_modules/google-maps-react/dist/components/Polygon.js":
false,

/***/ "./node_modules/google-maps-react/dist/components/Polyline.js":
false,

/***/ "./node_modules/google-maps-react/dist/components/Rectangle.js":
false,

/***/ "./node_modules/google-maps-react/dist/index.js":
false,

/***/ "./node_modules/google-maps-react/dist/lib/GoogleApi.js":
false,

/***/ "./node_modules/google-maps-react/dist/lib/ScriptCache.js":
false,

/***/ "./node_modules/google-maps-react/dist/lib/String.js":
false,

/***/ "./node_modules/google-maps-react/dist/lib/areBoundsEqual.js":
false,

/***/ "./node_modules/google-maps-react/dist/lib/arePathsEqual.js":
false,

/***/ "./node_modules/google-maps-react/dist/lib/cancelablePromise.js":
false,

/***/ "./node_modules/google-maps-react/dist/lib/windowOrGlobal.js":
false,

/***/ "./node_modules/prop-types/checkPropTypes.js":
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
false,

/***/ "./node_modules/react-dom/cjs/react-dom-server.browser.development.js":
false,

/***/ "./node_modules/react-dom/cjs/react-dom.development.js":
false,

/***/ "./node_modules/react-dom/index.js":
false,

/***/ "./node_modules/react-dom/server.browser.js":
false,

/***/ "./node_modules/scheduler/cjs/scheduler-tracing.development.js":
false,

/***/ "./node_modules/scheduler/cjs/scheduler.development.js":
false,

/***/ "./node_modules/scheduler/index.js":
false,

/***/ "./node_modules/scheduler/tracing.js":
false,

/***/ "./node_modules/webpack/buildin/global.js":
false,

/***/ "./src/MapContainer.js":
/*!*****************************!*\
  !*** ./src/MapContainer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MapContainer; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/lisapigozzo/Documents/GitHub/workshop-site1/src/MapContainer.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n // import { Map, GoogleApiWrapper, InfoWindow } from 'google-maps-react';\n\nvar API_KEY = 'AIzaSyB_dgZnBaGT1Cc5n_tmpKVoO_MMGmv1TrA';\n\nvar loadJS = function loadJS(src) {\n  var ref = window.document.getElementsByTagName('script')[0];\n  var script = window.document.createElement('script');\n  script.src = src;\n  script.async = true;\n  ref.parentNode.insertBefore(script, ref);\n};\n\nvar MapContainer = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(MapContainer, _React$Component);\n\n  var _super = _createSuper(MapContainer);\n\n  function MapContainer(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, MapContainer);\n\n    _this = _super.call(this, props);\n    _this.mapRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();\n    _this.initMap = _this.initMap.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(MapContainer, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      if (window.google) {\n        // script has been loaded already\n        this.initMap();\n      } else {\n        window.initMap = this.initMap;\n        loadJS(\"https://maps.googleapis.com/maps/api/js?key=\".concat(API_KEY, \"&callback=initMap\"));\n      }\n    }\n  }, {\n    key: \"initMap\",\n    value: function initMap() {\n      var g = window.google;\n      var map = new g.maps.Map(this.mapRef.current, {\n        zoom: 17,\n        center: {\n          lat: 45.161712,\n          lng: 11.4518353\n        }\n      });\n      /* draw markers or polygon here */\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"div\", {\n        style: {\n          width: 500,\n          height: 500\n        },\n        ref: this.mapRef\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 7\n      }, this);\n    }\n  }]);\n\n  return MapContainer;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component); // const mapStyles = {\n//   width: '100%',\n//   height: '100%'\n// };\n// export class MapContainer extends Component {\n//    initMap() {\n//     const merlara = { lat: 45.161712,lng: 11.4518353 };\n//     const map = new google.maps.Map(document.getElementById(\"map\"), {\n//       zoom: 14,\n//       center: merlara,\n//     });\n//     const contentString =\n//       '<div id=\"content\">' +\n//       '<h1 id=\"firstHeading\" class=\"firstHeading\">Merlara</h1>' +\n//       \"<p><b>via Stradona, 808</b></p>\" +\n//       \"</div>\";\n//     const infowindow = new google.maps.InfoWindow({\n//       content: contentString,\n//     });\n//     const marker = new google.maps.Marker({\n//       position: merlara,\n//       map,\n//       title: \"Autofficina\",\n//     });\n//     marker.addListener(\"click\", () => {\n//       infowindow.open(map, marker);\n//     });\n//   }\n//   render() {\n//     return (\n//       <Map \n//         visible={true}\n//         google={this.props.google}\n//         // onReady={this.initMap}\n//         zoom={14}\n//         style={mapStyles}\n//         initialCenter={\n//           {\n//             lat: 45.161712,lng: 11.4518353\n//           }\n//         }\n//       />\n//     );\n//   }\n// }\n// // export class MapContainer extends Component {\n// //   state = {\n// //       selectedPlace: ''\n// //   }\n// //   onMarkerClick = (e) => {\n// //       this.setState({selectedPlace: e.Name});\n// //   }\n// //   render() {\n// //     return (\n// //       <div style={{width: '10%', height: '10%'}}>\n// //         <Map google={window.google} zoom={14} initialCenter={{\n// //           lat: 45.161712,lng: 11.4518353}}>\n// //         </Map>\n// //       </div>\n// //     )\n// //   }\n// // }\n// export default GoogleApiWrapper({\n//   apiKey: 'AIzaSyB_dgZnBaGT1Cc5n_tmpKVoO_MMGmv1TrA',\n//   language: 'IT'\n// })(MapContainer);\n\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL01hcENvbnRhaW5lci5qcz85MjU3Il0sIm5hbWVzIjpbIkFQSV9LRVkiLCJsb2FkSlMiLCJzcmMiLCJyZWYiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2NyaXB0IiwiY3JlYXRlRWxlbWVudCIsImFzeW5jIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIk1hcENvbnRhaW5lciIsInByb3BzIiwibWFwUmVmIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJpbml0TWFwIiwiYmluZCIsImdvb2dsZSIsImciLCJtYXAiLCJtYXBzIiwiTWFwIiwiY3VycmVudCIsInpvb20iLCJjZW50ZXIiLCJsYXQiLCJsbmciLCJ3aWR0aCIsImhlaWdodCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUVBLElBQU1BLE9BQU8sR0FBRyx5Q0FBaEI7O0FBRUEsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsR0FBRCxFQUFTO0FBQ3RCLE1BQU1DLEdBQUcsR0FBR0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxvQkFBaEIsQ0FBcUMsUUFBckMsRUFBK0MsQ0FBL0MsQ0FBWjtBQUNBLE1BQU1DLE1BQU0sR0FBR0gsTUFBTSxDQUFDQyxRQUFQLENBQWdCRyxhQUFoQixDQUE4QixRQUE5QixDQUFmO0FBQ0FELFFBQU0sQ0FBQ0wsR0FBUCxHQUFhQSxHQUFiO0FBQ0FLLFFBQU0sQ0FBQ0UsS0FBUCxHQUFlLElBQWY7QUFDQU4sS0FBRyxDQUFDTyxVQUFKLENBQWVDLFlBQWYsQ0FBNEJKLE1BQTVCLEVBQW9DSixHQUFwQztBQUNELENBTkQ7O0lBUXFCUyxZOzs7OztBQUNuQix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLE1BQUwsZ0JBQWNDLDRDQUFLLENBQUNDLFNBQU4sRUFBZDtBQUNBLFVBQUtDLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFDLElBQWIseUdBQWY7QUFIaUI7QUFJbEI7Ozs7d0NBRW1CO0FBQ2xCLFVBQUlkLE1BQU0sQ0FBQ2UsTUFBWCxFQUFtQjtBQUNqQjtBQUNBLGFBQUtGLE9BQUw7QUFDRCxPQUhELE1BR087QUFDTGIsY0FBTSxDQUFDYSxPQUFQLEdBQWlCLEtBQUtBLE9BQXRCO0FBQ0FoQixjQUFNLHVEQUFnREQsT0FBaEQsdUJBQU47QUFDRDtBQUNGOzs7OEJBRVM7QUFDUixVQUFNb0IsQ0FBQyxHQUFHaEIsTUFBTSxDQUFDZSxNQUFqQjtBQUNBLFVBQU1FLEdBQUcsR0FBRyxJQUFJRCxDQUFDLENBQUNFLElBQUYsQ0FBT0MsR0FBWCxDQUFlLEtBQUtULE1BQUwsQ0FBWVUsT0FBM0IsRUFBb0M7QUFDOUNDLFlBQUksRUFBRSxFQUR3QztBQUU5Q0MsY0FBTSxFQUFFO0FBQ05DLGFBQUcsRUFBRSxTQURDO0FBQ1NDLGFBQUcsRUFBRTtBQURkO0FBRnNDLE9BQXBDLENBQVo7QUFNQTtBQUNEOzs7NkJBRVE7QUFDUCwwQkFDRTtBQUFLLGFBQUssRUFBRTtBQUFFQyxlQUFLLEVBQUUsR0FBVDtBQUFjQyxnQkFBTSxFQUFFO0FBQXRCLFNBQVo7QUFBeUMsV0FBRyxFQUFFLEtBQUtoQjtBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFLRDs7OztFQWxDdUNDLDRDQUFLLENBQUNnQixTLEdBb0NoRDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEiLCJmaWxlIjoiLi9zcmMvTWFwQ29udGFpbmVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IHsgTWFwLCBHb29nbGVBcGlXcmFwcGVyLCBJbmZvV2luZG93IH0gZnJvbSAnZ29vZ2xlLW1hcHMtcmVhY3QnO1xuXG5jb25zdCBBUElfS0VZID0gJ0FJemFTeUJfZGdabkJhR1QxQ2M1bl90bXBLVm9PX01NR212MVRyQSc7XG5cbmNvbnN0IGxvYWRKUyA9IChzcmMpID0+IHtcbiAgY29uc3QgcmVmID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcbiAgY29uc3Qgc2NyaXB0ID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICBzY3JpcHQuc3JjID0gc3JjO1xuICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuICByZWYucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2NyaXB0LCByZWYpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5tYXBSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICB0aGlzLmluaXRNYXAgPSB0aGlzLmluaXRNYXAuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh3aW5kb3cuZ29vZ2xlKSB7XG4gICAgICAvLyBzY3JpcHQgaGFzIGJlZW4gbG9hZGVkIGFscmVhZHlcbiAgICAgIHRoaXMuaW5pdE1hcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cuaW5pdE1hcCA9IHRoaXMuaW5pdE1hcDtcbiAgICAgIGxvYWRKUyhgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP2tleT0ke0FQSV9LRVl9JmNhbGxiYWNrPWluaXRNYXBgKTtcbiAgICB9XG4gIH1cblxuICBpbml0TWFwKCkge1xuICAgIGNvbnN0IGcgPSB3aW5kb3cuZ29vZ2xlO1xuICAgIGNvbnN0IG1hcCA9IG5ldyBnLm1hcHMuTWFwKHRoaXMubWFwUmVmLmN1cnJlbnQsIHtcbiAgICAgIHpvb206IDE3LFxuICAgICAgY2VudGVyOiB7XG4gICAgICAgIGxhdDogNDUuMTYxNzEyLGxuZzogMTEuNDUxODM1M1xuICAgICAgfSxcbiAgICB9KTtcbiAgICAvKiBkcmF3IG1hcmtlcnMgb3IgcG9seWdvbiBoZXJlICovXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDUwMCwgaGVpZ2h0OiA1MDAgfX0gcmVmPXt0aGlzLm1hcFJlZn0+XG4gICAgICAgIHsvKiBtYXAgcmVuZGVyZWQgaGVyZSAqL31cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbi8vIGNvbnN0IG1hcFN0eWxlcyA9IHtcbi8vICAgd2lkdGg6ICcxMDAlJyxcbi8vICAgaGVpZ2h0OiAnMTAwJSdcbi8vIH07XG5cbi8vIGV4cG9ydCBjbGFzcyBNYXBDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuLy8gICAgaW5pdE1hcCgpIHtcbi8vICAgICBjb25zdCBtZXJsYXJhID0geyBsYXQ6IDQ1LjE2MTcxMixsbmc6IDExLjQ1MTgzNTMgfTtcbi8vICAgICBjb25zdCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFwXCIpLCB7XG4vLyAgICAgICB6b29tOiAxNCxcbi8vICAgICAgIGNlbnRlcjogbWVybGFyYSxcbi8vICAgICB9KTtcbi8vICAgICBjb25zdCBjb250ZW50U3RyaW5nID1cbi8vICAgICAgICc8ZGl2IGlkPVwiY29udGVudFwiPicgK1xuLy8gICAgICAgJzxoMSBpZD1cImZpcnN0SGVhZGluZ1wiIGNsYXNzPVwiZmlyc3RIZWFkaW5nXCI+TWVybGFyYTwvaDE+JyArXG4vLyAgICAgICBcIjxwPjxiPnZpYSBTdHJhZG9uYSwgODA4PC9iPjwvcD5cIiArXG4vLyAgICAgICBcIjwvZGl2PlwiO1xuLy8gICAgIGNvbnN0IGluZm93aW5kb3cgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XG4vLyAgICAgICBjb250ZW50OiBjb250ZW50U3RyaW5nLFxuLy8gICAgIH0pO1xuLy8gICAgIGNvbnN0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuLy8gICAgICAgcG9zaXRpb246IG1lcmxhcmEsXG4vLyAgICAgICBtYXAsXG4vLyAgICAgICB0aXRsZTogXCJBdXRvZmZpY2luYVwiLFxuLy8gICAgIH0pO1xuLy8gICAgIG1hcmtlci5hZGRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbi8vICAgICAgIGluZm93aW5kb3cub3BlbihtYXAsIG1hcmtlcik7XG4vLyAgICAgfSk7XG4vLyAgIH1cbi8vICAgcmVuZGVyKCkge1xuXG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgIDxNYXAgXG4vLyAgICAgICAgIHZpc2libGU9e3RydWV9XG4vLyAgICAgICAgIGdvb2dsZT17dGhpcy5wcm9wcy5nb29nbGV9XG4vLyAgICAgICAgIC8vIG9uUmVhZHk9e3RoaXMuaW5pdE1hcH1cbi8vICAgICAgICAgem9vbT17MTR9XG4vLyAgICAgICAgIHN0eWxlPXttYXBTdHlsZXN9XG4vLyAgICAgICAgIGluaXRpYWxDZW50ZXI9e1xuLy8gICAgICAgICAgIHtcbi8vICAgICAgICAgICAgIGxhdDogNDUuMTYxNzEyLGxuZzogMTEuNDUxODM1M1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgICAgLz5cbiBcbi8vICAgICApO1xuLy8gICB9XG4vLyB9XG5cbi8vIC8vIGV4cG9ydCBjbGFzcyBNYXBDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4vLyAvLyAgIHN0YXRlID0ge1xuLy8gLy8gICAgICAgc2VsZWN0ZWRQbGFjZTogJydcbi8vIC8vICAgfVxuXG4vLyAvLyAgIG9uTWFya2VyQ2xpY2sgPSAoZSkgPT4ge1xuLy8gLy8gICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRQbGFjZTogZS5OYW1lfSk7XG4vLyAvLyAgIH1cbi8vIC8vICAgcmVuZGVyKCkge1xuLy8gLy8gICAgIHJldHVybiAoXG4vLyAvLyAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6ICcxMCUnLCBoZWlnaHQ6ICcxMCUnfX0+XG4vLyAvLyAgICAgICAgIDxNYXAgZ29vZ2xlPXt3aW5kb3cuZ29vZ2xlfSB6b29tPXsxNH0gaW5pdGlhbENlbnRlcj17e1xuLy8gLy8gICAgICAgICAgIGxhdDogNDUuMTYxNzEyLGxuZzogMTEuNDUxODM1M319PlxuLy8gLy8gICAgICAgICA8L01hcD5cbi8vIC8vICAgICAgIDwvZGl2PlxuLy8gLy8gICAgIClcbi8vIC8vICAgfVxuLy8gLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBHb29nbGVBcGlXcmFwcGVyKHtcbi8vICAgYXBpS2V5OiAnQUl6YVN5Ql9kZ1puQmFHVDFDYzVuX3RtcEtWb09fTU1HbXYxVHJBJyxcbi8vICAgbGFuZ3VhZ2U6ICdJVCdcbiAgXG4vLyB9KShNYXBDb250YWluZXIpO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/MapContainer.js\n");

/***/ })

})