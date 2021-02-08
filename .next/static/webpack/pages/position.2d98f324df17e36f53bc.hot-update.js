webpackHotUpdate_N_E("pages/position",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false,

/***/ "./src/MapContainer.js":
/*!*****************************!*\
  !*** ./src/MapContainer.js ***!
  \*****************************/
/*! exports provided: MapContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MapContainer\", function() { return MapContainer; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! google-maps-react */ \"./node_modules/google-maps-react/dist/index.js\");\n/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(google_maps_react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/lisapigozzo/Documents/GitHub/workshop-site1/src/MapContainer.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar mapStyles = {\n  width: '100%',\n  height: '100%'\n};\nvar MapContainer = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(MapContainer, _Component);\n\n  var _super = _createSuper(MapContainer);\n\n  function MapContainer() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, MapContainer);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(MapContainer, [{\n    key: \"initMap\",\n    value: function initMap() {\n      var uluru = {\n        lat: -25.363,\n        lng: 131.044\n      };\n      var map = new google.maps.Map(document.getElementById(\"map\"), {\n        zoom: 4,\n        center: uluru\n      });\n      var contentString = '<div id=\"content\">' + '<div id=\"siteNotice\">' + \"</div>\" + '<h1 id=\"firstHeading\" class=\"firstHeading\">Uluru</h1>' + '<div id=\"bodyContent\">' + \"<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large \" + \"sandstone rock formation in the southern part of the \" + \"Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) \" + \"south west of the nearest large town, Alice Springs; 450&#160;km \" + \"(280&#160;mi) by road. Kata Tjuta and Uluru are the two major \" + \"features of the Uluru - Kata Tjuta National Park. Uluru is \" + \"sacred to the Pitjantjatjara and Yankunytjatjara, the \" + \"Aboriginal people of the area. It has many springs, waterholes, \" + \"rock caves and ancient paintings. Uluru is listed as a World \" + \"Heritage Site.</p>\" + '<p>Attribution: Uluru, <a href=\"https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194\">' + \"https://en.wikipedia.org/w/index.php?title=Uluru</a> \" + \"(last visited June 22, 2009).</p>\" + \"</div>\" + \"</div>\";\n      var infowindow = new google.maps.InfoWindow({\n        content: contentString\n      });\n      var marker = new google.maps.Marker({\n        position: uluru,\n        map: map,\n        title: \"Uluru (Ayers Rock)\"\n      });\n      marker.addListener(\"click\", function () {\n        infowindow.open(map, marker);\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(google_maps_react__WEBPACK_IMPORTED_MODULE_7__[\"Map\"], {\n        visible: true,\n        google: this.props.google,\n        zoom: 14,\n        style: mapStyles,\n        initialCenter: {\n          lat: 45.161712,\n          lng: 11.4518353\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 7\n      }, this);\n    }\n  }]);\n\n  return MapContainer;\n}(react__WEBPACK_IMPORTED_MODULE_6__[\"Component\"]); // export class MapContainer extends Component {\n//   state = {\n//       selectedPlace: ''\n//   }\n//   onMarkerClick = (e) => {\n//       this.setState({selectedPlace: e.Name});\n//   }\n//   render() {\n//     return (\n//       <div style={{width: '10%', height: '10%'}}>\n//         <Map google={window.google} zoom={14} initialCenter={{\n//           lat: 45.161712,lng: 11.4518353}}>\n//         </Map>\n//       </div>\n//     )\n//   }\n// }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(google_maps_react__WEBPACK_IMPORTED_MODULE_7__[\"GoogleApiWrapper\"])({\n  apiKey: 'AIzaSyB_dgZnBaGT1Cc5n_tmpKVoO_MMGmv1TrA',\n  language: 'IT'\n})(MapContainer));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL01hcENvbnRhaW5lci5qcz85MjU3Il0sIm5hbWVzIjpbIm1hcFN0eWxlcyIsIndpZHRoIiwiaGVpZ2h0IiwiTWFwQ29udGFpbmVyIiwidWx1cnUiLCJsYXQiLCJsbmciLCJtYXAiLCJnb29nbGUiLCJtYXBzIiwiTWFwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInpvb20iLCJjZW50ZXIiLCJjb250ZW50U3RyaW5nIiwiaW5mb3dpbmRvdyIsIkluZm9XaW5kb3ciLCJjb250ZW50IiwibWFya2VyIiwiTWFya2VyIiwicG9zaXRpb24iLCJ0aXRsZSIsImFkZExpc3RlbmVyIiwib3BlbiIsInByb3BzIiwiQ29tcG9uZW50IiwiR29vZ2xlQXBpV3JhcHBlciIsImFwaUtleSIsImxhbmd1YWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBRztBQUNoQkMsT0FBSyxFQUFFLE1BRFM7QUFFaEJDLFFBQU0sRUFBRTtBQUZRLENBQWxCO0FBS08sSUFBTUMsWUFBYjtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsOEJBQ2E7QUFDVCxVQUFNQyxLQUFLLEdBQUc7QUFBRUMsV0FBRyxFQUFFLENBQUMsTUFBUjtBQUFnQkMsV0FBRyxFQUFFO0FBQXJCLE9BQWQ7QUFDQSxVQUFNQyxHQUFHLEdBQUcsSUFBSUMsTUFBTSxDQUFDQyxJQUFQLENBQVlDLEdBQWhCLENBQW9CQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBcEIsRUFBb0Q7QUFDOURDLFlBQUksRUFBRSxDQUR3RDtBQUU5REMsY0FBTSxFQUFFVjtBQUZzRCxPQUFwRCxDQUFaO0FBSUEsVUFBTVcsYUFBYSxHQUNqQix1QkFDQSx1QkFEQSxHQUVBLFFBRkEsR0FHQSx1REFIQSxHQUlBLHdCQUpBLEdBS0EscUVBTEEsR0FNQSx1REFOQSxHQU9BLDJFQVBBLEdBUUEsbUVBUkEsR0FTQSxnRUFUQSxHQVVBLDZEQVZBLEdBV0Esd0RBWEEsR0FZQSxrRUFaQSxHQWFBLCtEQWJBLEdBY0Esb0JBZEEsR0FlQSxvR0FmQSxHQWdCQSx1REFoQkEsR0FpQkEsbUNBakJBLEdBa0JBLFFBbEJBLEdBbUJBLFFBcEJGO0FBcUJBLFVBQU1DLFVBQVUsR0FBRyxJQUFJUixNQUFNLENBQUNDLElBQVAsQ0FBWVEsVUFBaEIsQ0FBMkI7QUFDNUNDLGVBQU8sRUFBRUg7QUFEbUMsT0FBM0IsQ0FBbkI7QUFHQSxVQUFNSSxNQUFNLEdBQUcsSUFBSVgsTUFBTSxDQUFDQyxJQUFQLENBQVlXLE1BQWhCLENBQXVCO0FBQ3BDQyxnQkFBUSxFQUFFakIsS0FEMEI7QUFFcENHLFdBQUcsRUFBSEEsR0FGb0M7QUFHcENlLGFBQUssRUFBRTtBQUg2QixPQUF2QixDQUFmO0FBS0FILFlBQU0sQ0FBQ0ksV0FBUCxDQUFtQixPQUFuQixFQUE0QixZQUFNO0FBQ2hDUCxrQkFBVSxDQUFDUSxJQUFYLENBQWdCakIsR0FBaEIsRUFBcUJZLE1BQXJCO0FBQ0QsT0FGRDtBQUdEO0FBdkNIO0FBQUE7QUFBQSw2QkF3Q1c7QUFDUCwwQkFFRSxxRUFBQyxxREFBRDtBQUNFLGVBQU8sRUFBRSxJQURYO0FBRUUsY0FBTSxFQUFFLEtBQUtNLEtBQUwsQ0FBV2pCLE1BRnJCO0FBR0UsWUFBSSxFQUFFLEVBSFI7QUFJRSxhQUFLLEVBQUVSLFNBSlQ7QUFLRSxxQkFBYSxFQUNYO0FBQ0VLLGFBQUcsRUFBRSxTQURQO0FBQ2lCQyxhQUFHLEVBQUU7QUFEdEI7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFlRDtBQXhESDs7QUFBQTtBQUFBLEVBQWtDb0IsK0NBQWxDLEUsQ0EyREE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZUMseUlBQWdCLENBQUM7QUFDOUJDLFFBQU0sRUFBRSx5Q0FEc0I7QUFFOUJDLFVBQVEsRUFBRTtBQUZvQixDQUFELENBQWhCLENBSVoxQixZQUpZLENBQWYiLCJmaWxlIjoiLi9zcmMvTWFwQ29udGFpbmVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWFwLCBHb29nbGVBcGlXcmFwcGVyLCBJbmZvV2luZG93IH0gZnJvbSAnZ29vZ2xlLW1hcHMtcmVhY3QnO1xuXG5jb25zdCBtYXBTdHlsZXMgPSB7XG4gIHdpZHRoOiAnMTAwJScsXG4gIGhlaWdodDogJzEwMCUnXG59O1xuXG5leHBvcnQgY2xhc3MgTWFwQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgIGluaXRNYXAoKSB7XG4gICAgY29uc3QgdWx1cnUgPSB7IGxhdDogLTI1LjM2MywgbG5nOiAxMzEuMDQ0IH07XG4gICAgY29uc3QgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcFwiKSwge1xuICAgICAgem9vbTogNCxcbiAgICAgIGNlbnRlcjogdWx1cnUsXG4gICAgfSk7XG4gICAgY29uc3QgY29udGVudFN0cmluZyA9XG4gICAgICAnPGRpdiBpZD1cImNvbnRlbnRcIj4nICtcbiAgICAgICc8ZGl2IGlkPVwic2l0ZU5vdGljZVwiPicgK1xuICAgICAgXCI8L2Rpdj5cIiArXG4gICAgICAnPGgxIGlkPVwiZmlyc3RIZWFkaW5nXCIgY2xhc3M9XCJmaXJzdEhlYWRpbmdcIj5VbHVydTwvaDE+JyArXG4gICAgICAnPGRpdiBpZD1cImJvZHlDb250ZW50XCI+JyArXG4gICAgICBcIjxwPjxiPlVsdXJ1PC9iPiwgYWxzbyByZWZlcnJlZCB0byBhcyA8Yj5BeWVycyBSb2NrPC9iPiwgaXMgYSBsYXJnZSBcIiArXG4gICAgICBcInNhbmRzdG9uZSByb2NrIGZvcm1hdGlvbiBpbiB0aGUgc291dGhlcm4gcGFydCBvZiB0aGUgXCIgK1xuICAgICAgXCJOb3J0aGVybiBUZXJyaXRvcnksIGNlbnRyYWwgQXVzdHJhbGlhLiBJdCBsaWVzIDMzNSYjMTYwO2ttICgyMDgmIzE2MDttaSkgXCIgK1xuICAgICAgXCJzb3V0aCB3ZXN0IG9mIHRoZSBuZWFyZXN0IGxhcmdlIHRvd24sIEFsaWNlIFNwcmluZ3M7IDQ1MCYjMTYwO2ttIFwiICtcbiAgICAgIFwiKDI4MCYjMTYwO21pKSBieSByb2FkLiBLYXRhIFRqdXRhIGFuZCBVbHVydSBhcmUgdGhlIHR3byBtYWpvciBcIiArXG4gICAgICBcImZlYXR1cmVzIG9mIHRoZSBVbHVydSAtIEthdGEgVGp1dGEgTmF0aW9uYWwgUGFyay4gVWx1cnUgaXMgXCIgK1xuICAgICAgXCJzYWNyZWQgdG8gdGhlIFBpdGphbnRqYXRqYXJhIGFuZCBZYW5rdW55dGphdGphcmEsIHRoZSBcIiArXG4gICAgICBcIkFib3JpZ2luYWwgcGVvcGxlIG9mIHRoZSBhcmVhLiBJdCBoYXMgbWFueSBzcHJpbmdzLCB3YXRlcmhvbGVzLCBcIiArXG4gICAgICBcInJvY2sgY2F2ZXMgYW5kIGFuY2llbnQgcGFpbnRpbmdzLiBVbHVydSBpcyBsaXN0ZWQgYXMgYSBXb3JsZCBcIiArXG4gICAgICBcIkhlcml0YWdlIFNpdGUuPC9wPlwiICtcbiAgICAgICc8cD5BdHRyaWJ1dGlvbjogVWx1cnUsIDxhIGhyZWY9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvdy9pbmRleC5waHA/dGl0bGU9VWx1cnUmb2xkaWQ9Mjk3ODgyMTk0XCI+JyArXG4gICAgICBcImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93L2luZGV4LnBocD90aXRsZT1VbHVydTwvYT4gXCIgK1xuICAgICAgXCIobGFzdCB2aXNpdGVkIEp1bmUgMjIsIDIwMDkpLjwvcD5cIiArXG4gICAgICBcIjwvZGl2PlwiICtcbiAgICAgIFwiPC9kaXY+XCI7XG4gICAgY29uc3QgaW5mb3dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KHtcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnRTdHJpbmcsXG4gICAgfSk7XG4gICAgY29uc3QgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICBwb3NpdGlvbjogdWx1cnUsXG4gICAgICBtYXAsXG4gICAgICB0aXRsZTogXCJVbHVydSAoQXllcnMgUm9jaylcIixcbiAgICB9KTtcbiAgICBtYXJrZXIuYWRkTGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpbmZvd2luZG93Lm9wZW4obWFwLCBtYXJrZXIpO1xuICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8TWFwIFxuICAgICAgICB2aXNpYmxlPXt0cnVlfVxuICAgICAgICBnb29nbGU9e3RoaXMucHJvcHMuZ29vZ2xlfVxuICAgICAgICB6b29tPXsxNH1cbiAgICAgICAgc3R5bGU9e21hcFN0eWxlc31cbiAgICAgICAgaW5pdGlhbENlbnRlcj17XG4gICAgICAgICAge1xuICAgICAgICAgICAgbGF0OiA0NS4xNjE3MTIsbG5nOiAxMS40NTE4MzUzXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAvPlxuIFxuICAgICk7XG4gIH1cbn1cblxuLy8gZXhwb3J0IGNsYXNzIE1hcENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG5cbi8vICAgc3RhdGUgPSB7XG4vLyAgICAgICBzZWxlY3RlZFBsYWNlOiAnJ1xuLy8gICB9XG5cbi8vICAgb25NYXJrZXJDbGljayA9IChlKSA9PiB7XG4vLyAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZFBsYWNlOiBlLk5hbWV9KTtcbi8vICAgfVxuLy8gICByZW5kZXIoKSB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogJzEwJScsIGhlaWdodDogJzEwJSd9fT5cbi8vICAgICAgICAgPE1hcCBnb29nbGU9e3dpbmRvdy5nb29nbGV9IHpvb209ezE0fSBpbml0aWFsQ2VudGVyPXt7XG4vLyAgICAgICAgICAgbGF0OiA0NS4xNjE3MTIsbG5nOiAxMS40NTE4MzUzfX0+XG4vLyAgICAgICAgIDwvTWFwPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgKVxuLy8gICB9XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IEdvb2dsZUFwaVdyYXBwZXIoe1xuICBhcGlLZXk6ICdBSXphU3lCX2RnWm5CYUdUMUNjNW5fdG1wS1ZvT19NTUdtdjFUckEnLFxuICBsYW5ndWFnZTogJ0lUJ1xuICBcbn0pKE1hcENvbnRhaW5lcik7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/MapContainer.js\n");

/***/ })

})