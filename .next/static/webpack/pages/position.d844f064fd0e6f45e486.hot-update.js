webpackHotUpdate_N_E("pages/position",{

/***/ "./src/MapContainer.js":
/*!*****************************!*\
  !*** ./src/MapContainer.js ***!
  \*****************************/
/*! exports provided: MapContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MapContainer\", function() { return MapContainer; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! google-maps-react */ \"./node_modules/google-maps-react/dist/index.js\");\n/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(google_maps_react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/lisapigozzo/Documents/GitHub/workshop-site1/src/MapContainer.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar mapStyles = {\n  width: '100%',\n  height: '100%'\n};\nvar MapContainer = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(MapContainer, _Component);\n\n  var _super = _createSuper(MapContainer);\n\n  function MapContainer() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, MapContainer);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(MapContainer, [{\n    key: \"initMap\",\n    value: function initMap() {\n      var merlara = {\n        lat: 45.161712,\n        lng: 11.4518353\n      };\n      var map = new google.maps.Map(document.getElementById(\"map\"), {\n        zoom: 4,\n        center: merlara\n      });\n      var contentString = '<div id=\"content\">' + '<div id=\"siteNotice\">' + \"</div>\" + '<h1 id=\"firstHeading\" class=\"firstHeading\">Merlara</h1>' + '<div id=\"bodyContent\">' + \"<p><b>via Stradona, 808</b></p>\" + \"</div>\" + \"</div>\";\n      var infowindow = new google.maps.InfoWindow({\n        content: contentString\n      });\n      var marker = new google.maps.Marker({\n        position: merlara,\n        map: map,\n        title: \"Autofficina\"\n      });\n      marker.addListener(\"click\", function () {\n        infowindow.open(map, marker);\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(google_maps_react__WEBPACK_IMPORTED_MODULE_7__[\"Map\"], {\n        visible: true,\n        google: this.props.google,\n        onReady: this.initMap(),\n        zoom: 14,\n        style: mapStyles,\n        initialCenter: {\n          lat: 45.161712,\n          lng: 11.4518353\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 7\n      }, this);\n    }\n  }]);\n\n  return MapContainer;\n}(react__WEBPACK_IMPORTED_MODULE_6__[\"Component\"]); // export class MapContainer extends Component {\n//   state = {\n//       selectedPlace: ''\n//   }\n//   onMarkerClick = (e) => {\n//       this.setState({selectedPlace: e.Name});\n//   }\n//   render() {\n//     return (\n//       <div style={{width: '10%', height: '10%'}}>\n//         <Map google={window.google} zoom={14} initialCenter={{\n//           lat: 45.161712,lng: 11.4518353}}>\n//         </Map>\n//       </div>\n//     )\n//   }\n// }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(google_maps_react__WEBPACK_IMPORTED_MODULE_7__[\"GoogleApiWrapper\"])({\n  apiKey: 'AIzaSyB_dgZnBaGT1Cc5n_tmpKVoO_MMGmv1TrA',\n  language: 'IT'\n})(MapContainer));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL01hcENvbnRhaW5lci5qcz85MjU3Il0sIm5hbWVzIjpbIm1hcFN0eWxlcyIsIndpZHRoIiwiaGVpZ2h0IiwiTWFwQ29udGFpbmVyIiwibWVybGFyYSIsImxhdCIsImxuZyIsIm1hcCIsImdvb2dsZSIsIm1hcHMiLCJNYXAiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiem9vbSIsImNlbnRlciIsImNvbnRlbnRTdHJpbmciLCJpbmZvd2luZG93IiwiSW5mb1dpbmRvdyIsImNvbnRlbnQiLCJtYXJrZXIiLCJNYXJrZXIiLCJwb3NpdGlvbiIsInRpdGxlIiwiYWRkTGlzdGVuZXIiLCJvcGVuIiwicHJvcHMiLCJpbml0TWFwIiwiQ29tcG9uZW50IiwiR29vZ2xlQXBpV3JhcHBlciIsImFwaUtleSIsImxhbmd1YWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBRztBQUNoQkMsT0FBSyxFQUFFLE1BRFM7QUFFaEJDLFFBQU0sRUFBRTtBQUZRLENBQWxCO0FBS08sSUFBTUMsWUFBYjtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsOEJBQ2E7QUFDVCxVQUFNQyxPQUFPLEdBQUc7QUFBRUMsV0FBRyxFQUFFLFNBQVA7QUFBaUJDLFdBQUcsRUFBRTtBQUF0QixPQUFoQjtBQUNBLFVBQU1DLEdBQUcsR0FBRyxJQUFJQyxNQUFNLENBQUNDLElBQVAsQ0FBWUMsR0FBaEIsQ0FBb0JDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUF4QixDQUFwQixFQUFvRDtBQUM5REMsWUFBSSxFQUFFLENBRHdEO0FBRTlEQyxjQUFNLEVBQUVWO0FBRnNELE9BQXBELENBQVo7QUFJQSxVQUFNVyxhQUFhLEdBQ2pCLHVCQUNBLHVCQURBLEdBRUEsUUFGQSxHQUdBLHlEQUhBLEdBSUEsd0JBSkEsR0FLQSxpQ0FMQSxHQU1BLFFBTkEsR0FPQSxRQVJGO0FBU0EsVUFBTUMsVUFBVSxHQUFHLElBQUlSLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZUSxVQUFoQixDQUEyQjtBQUM1Q0MsZUFBTyxFQUFFSDtBQURtQyxPQUEzQixDQUFuQjtBQUdBLFVBQU1JLE1BQU0sR0FBRyxJQUFJWCxNQUFNLENBQUNDLElBQVAsQ0FBWVcsTUFBaEIsQ0FBdUI7QUFDcENDLGdCQUFRLEVBQUVqQixPQUQwQjtBQUVwQ0csV0FBRyxFQUFIQSxHQUZvQztBQUdwQ2UsYUFBSyxFQUFFO0FBSDZCLE9BQXZCLENBQWY7QUFLQUgsWUFBTSxDQUFDSSxXQUFQLENBQW1CLE9BQW5CLEVBQTRCLFlBQU07QUFDaENQLGtCQUFVLENBQUNRLElBQVgsQ0FBZ0JqQixHQUFoQixFQUFxQlksTUFBckI7QUFDRCxPQUZEO0FBR0Q7QUEzQkg7QUFBQTtBQUFBLDZCQTRCVztBQUNQLDBCQUNFLHFFQUFDLHFEQUFEO0FBQ0UsZUFBTyxFQUFFLElBRFg7QUFFRSxjQUFNLEVBQUUsS0FBS00sS0FBTCxDQUFXakIsTUFGckI7QUFHRSxlQUFPLEVBQUUsS0FBS2tCLE9BQUwsRUFIWDtBQUlFLFlBQUksRUFBRSxFQUpSO0FBS0UsYUFBSyxFQUFFMUIsU0FMVDtBQU1FLHFCQUFhLEVBQ1g7QUFDRUssYUFBRyxFQUFFLFNBRFA7QUFDaUJDLGFBQUcsRUFBRTtBQUR0QjtBQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQWVEO0FBNUNIOztBQUFBO0FBQUEsRUFBa0NxQiwrQ0FBbEMsRSxDQStDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlQyx5SUFBZ0IsQ0FBQztBQUM5QkMsUUFBTSxFQUFFLHlDQURzQjtBQUU5QkMsVUFBUSxFQUFFO0FBRm9CLENBQUQsQ0FBaEIsQ0FJWjNCLFlBSlksQ0FBZiIsImZpbGUiOiIuL3NyYy9NYXBDb250YWluZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNYXAsIEdvb2dsZUFwaVdyYXBwZXIsIEluZm9XaW5kb3cgfSBmcm9tICdnb29nbGUtbWFwcy1yZWFjdCc7XG5cbmNvbnN0IG1hcFN0eWxlcyA9IHtcbiAgd2lkdGg6ICcxMDAlJyxcbiAgaGVpZ2h0OiAnMTAwJSdcbn07XG5cbmV4cG9ydCBjbGFzcyBNYXBDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgaW5pdE1hcCgpIHtcbiAgICBjb25zdCBtZXJsYXJhID0geyBsYXQ6IDQ1LjE2MTcxMixsbmc6IDExLjQ1MTgzNTMgfTtcbiAgICBjb25zdCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFwXCIpLCB7XG4gICAgICB6b29tOiA0LFxuICAgICAgY2VudGVyOiBtZXJsYXJhLFxuICAgIH0pO1xuICAgIGNvbnN0IGNvbnRlbnRTdHJpbmcgPVxuICAgICAgJzxkaXYgaWQ9XCJjb250ZW50XCI+JyArXG4gICAgICAnPGRpdiBpZD1cInNpdGVOb3RpY2VcIj4nICtcbiAgICAgIFwiPC9kaXY+XCIgK1xuICAgICAgJzxoMSBpZD1cImZpcnN0SGVhZGluZ1wiIGNsYXNzPVwiZmlyc3RIZWFkaW5nXCI+TWVybGFyYTwvaDE+JyArXG4gICAgICAnPGRpdiBpZD1cImJvZHlDb250ZW50XCI+JyArXG4gICAgICBcIjxwPjxiPnZpYSBTdHJhZG9uYSwgODA4PC9iPjwvcD5cIiArXG4gICAgICBcIjwvZGl2PlwiICtcbiAgICAgIFwiPC9kaXY+XCI7XG4gICAgY29uc3QgaW5mb3dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KHtcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnRTdHJpbmcsXG4gICAgfSk7XG4gICAgY29uc3QgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICBwb3NpdGlvbjogbWVybGFyYSxcbiAgICAgIG1hcCxcbiAgICAgIHRpdGxlOiBcIkF1dG9mZmljaW5hXCIsXG4gICAgfSk7XG4gICAgbWFya2VyLmFkZExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaW5mb3dpbmRvdy5vcGVuKG1hcCwgbWFya2VyKTtcbiAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNYXAgXG4gICAgICAgIHZpc2libGU9e3RydWV9XG4gICAgICAgIGdvb2dsZT17dGhpcy5wcm9wcy5nb29nbGV9XG4gICAgICAgIG9uUmVhZHk9e3RoaXMuaW5pdE1hcCgpfVxuICAgICAgICB6b29tPXsxNH1cbiAgICAgICAgc3R5bGU9e21hcFN0eWxlc31cbiAgICAgICAgaW5pdGlhbENlbnRlcj17XG4gICAgICAgICAge1xuICAgICAgICAgICAgbGF0OiA0NS4xNjE3MTIsbG5nOiAxMS40NTE4MzUzXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAvPlxuIFxuICAgICk7XG4gIH1cbn1cblxuLy8gZXhwb3J0IGNsYXNzIE1hcENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG5cbi8vICAgc3RhdGUgPSB7XG4vLyAgICAgICBzZWxlY3RlZFBsYWNlOiAnJ1xuLy8gICB9XG5cbi8vICAgb25NYXJrZXJDbGljayA9IChlKSA9PiB7XG4vLyAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZFBsYWNlOiBlLk5hbWV9KTtcbi8vICAgfVxuLy8gICByZW5kZXIoKSB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogJzEwJScsIGhlaWdodDogJzEwJSd9fT5cbi8vICAgICAgICAgPE1hcCBnb29nbGU9e3dpbmRvdy5nb29nbGV9IHpvb209ezE0fSBpbml0aWFsQ2VudGVyPXt7XG4vLyAgICAgICAgICAgbGF0OiA0NS4xNjE3MTIsbG5nOiAxMS40NTE4MzUzfX0+XG4vLyAgICAgICAgIDwvTWFwPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgKVxuLy8gICB9XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IEdvb2dsZUFwaVdyYXBwZXIoe1xuICBhcGlLZXk6ICdBSXphU3lCX2RnWm5CYUdUMUNjNW5fdG1wS1ZvT19NTUdtdjFUckEnLFxuICBsYW5ndWFnZTogJ0lUJ1xuICBcbn0pKE1hcENvbnRhaW5lcik7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/MapContainer.js\n");

/***/ })

})