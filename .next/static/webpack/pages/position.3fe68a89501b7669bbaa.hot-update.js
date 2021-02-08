webpackHotUpdate_N_E("pages/position",{

/***/ "./src/MapContainer.js":
/*!*****************************!*\
  !*** ./src/MapContainer.js ***!
  \*****************************/
/*! exports provided: MapContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MapContainer\", function() { return MapContainer; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! google-maps-react */ \"./node_modules/google-maps-react/dist/index.js\");\n/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(google_maps_react__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/lisapigozzo/Documents/GitHub/workshop-site1/src/MapContainer.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar mapStyles = {\n  width: '100%',\n  height: '100%'\n};\nvar MapContainer = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(MapContainer, _Component);\n\n  var _super = _createSuper(MapContainer);\n\n  function MapContainer() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, MapContainer);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      selectedPlace: 'Via Stradona, 808'\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"onMarkerClick\", function (e) {\n      _this.setState({\n        selectedPlace: e.Name\n      });\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(MapContainer, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(google_maps_react__WEBPACK_IMPORTED_MODULE_9__[\"Map\"], {\n        visible: true,\n        google: this.props.google,\n        zoom: 14,\n        style: mapStyles,\n        initialCenter: {\n          lat: 45.161712,\n          lng: 11.4518353\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 7\n      }, this);\n    }\n  }]);\n\n  return MapContainer;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]); // export class MapContainer extends Component {\n//   state = {\n//       selectedPlace: ''\n//   }\n//   onMarkerClick = (e) => {\n//       this.setState({selectedPlace: e.Name});\n//   }\n//   render() {\n//     return (\n//       <div style={{width: '10%', height: '10%'}}>\n//         <Map google={window.google} zoom={14} initialCenter={{\n//           lat: 45.161712,lng: 11.4518353}}>\n//         </Map>\n//       </div>\n//     )\n//   }\n// }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(google_maps_react__WEBPACK_IMPORTED_MODULE_9__[\"GoogleApiWrapper\"])({\n  apiKey: 'AIzaSyB_dgZnBaGT1Cc5n_tmpKVoO_MMGmv1TrA',\n  language: 'IT'\n})(MapContainer));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL01hcENvbnRhaW5lci5qcz85MjU3Il0sIm5hbWVzIjpbIm1hcFN0eWxlcyIsIndpZHRoIiwiaGVpZ2h0IiwiTWFwQ29udGFpbmVyIiwic2VsZWN0ZWRQbGFjZSIsImUiLCJzZXRTdGF0ZSIsIk5hbWUiLCJwcm9wcyIsImdvb2dsZSIsImxhdCIsImxuZyIsIkNvbXBvbmVudCIsIkdvb2dsZUFwaVdyYXBwZXIiLCJhcGlLZXkiLCJsYW5ndWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2hCQyxPQUFLLEVBQUUsTUFEUztBQUVoQkMsUUFBTSxFQUFFO0FBRlEsQ0FBbEI7QUFLTyxJQUFNQyxZQUFiO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUEsZ05BQ1U7QUFDQUMsbUJBQWEsRUFBRTtBQURmLEtBRFY7O0FBQUEsd05BS3NCLFVBQUNDLENBQUQsRUFBTztBQUNuQixZQUFLQyxRQUFMLENBQWM7QUFBQ0YscUJBQWEsRUFBRUMsQ0FBQyxDQUFDRTtBQUFsQixPQUFkO0FBQ0gsS0FQUDs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSw2QkFRVztBQUNQLDBCQUVFLHFFQUFDLHFEQUFEO0FBQ0UsZUFBTyxFQUFFLElBRFg7QUFFRSxjQUFNLEVBQUUsS0FBS0MsS0FBTCxDQUFXQyxNQUZyQjtBQUdFLFlBQUksRUFBRSxFQUhSO0FBSUUsYUFBSyxFQUFFVCxTQUpUO0FBS0UscUJBQWEsRUFDWDtBQUNFVSxhQUFHLEVBQUUsU0FEUDtBQUNpQkMsYUFBRyxFQUFFO0FBRHRCO0FBTko7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBZUQ7QUF4Qkg7O0FBQUE7QUFBQSxFQUFrQ0MsK0NBQWxDLEUsQ0EyQkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZUMseUlBQWdCLENBQUM7QUFDOUJDLFFBQU0sRUFBRSx5Q0FEc0I7QUFFOUJDLFVBQVEsRUFBRTtBQUZvQixDQUFELENBQWhCLENBSVpaLFlBSlksQ0FBZiIsImZpbGUiOiIuL3NyYy9NYXBDb250YWluZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNYXAsIEdvb2dsZUFwaVdyYXBwZXIsIEluZm9XaW5kb3cgfSBmcm9tICdnb29nbGUtbWFwcy1yZWFjdCc7XG5cbmNvbnN0IG1hcFN0eWxlcyA9IHtcbiAgd2lkdGg6ICcxMDAlJyxcbiAgaGVpZ2h0OiAnMTAwJSdcbn07XG5cbmV4cG9ydCBjbGFzcyBNYXBDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICAgICAgICBzZWxlY3RlZFBsYWNlOiAnVmlhIFN0cmFkb25hLCA4MDgnXG4gICAgICB9XG4gICAgXG4gICAgICBvbk1hcmtlckNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZFBsYWNlOiBlLk5hbWV9KTtcbiAgICAgIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxNYXAgXG4gICAgICAgIHZpc2libGU9e3RydWV9XG4gICAgICAgIGdvb2dsZT17dGhpcy5wcm9wcy5nb29nbGV9XG4gICAgICAgIHpvb209ezE0fVxuICAgICAgICBzdHlsZT17bWFwU3R5bGVzfVxuICAgICAgICBpbml0aWFsQ2VudGVyPXtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYXQ6IDQ1LjE2MTcxMixsbmc6IDExLjQ1MTgzNTNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIC8+XG4gXG4gICAgKTtcbiAgfVxufVxuXG4vLyBleHBvcnQgY2xhc3MgTWFwQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuLy8gICBzdGF0ZSA9IHtcbi8vICAgICAgIHNlbGVjdGVkUGxhY2U6ICcnXG4vLyAgIH1cblxuLy8gICBvbk1hcmtlckNsaWNrID0gKGUpID0+IHtcbi8vICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkUGxhY2U6IGUuTmFtZX0pO1xuLy8gICB9XG4vLyAgIHJlbmRlcigpIHtcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnMTAlJywgaGVpZ2h0OiAnMTAlJ319PlxuLy8gICAgICAgICA8TWFwIGdvb2dsZT17d2luZG93Lmdvb2dsZX0gem9vbT17MTR9IGluaXRpYWxDZW50ZXI9e3tcbi8vICAgICAgICAgICBsYXQ6IDQ1LjE2MTcxMixsbmc6IDExLjQ1MTgzNTN9fT5cbi8vICAgICAgICAgPC9NYXA+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICApXG4vLyAgIH1cbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgR29vZ2xlQXBpV3JhcHBlcih7XG4gIGFwaUtleTogJ0FJemFTeUJfZGdabkJhR1QxQ2M1bl90bXBLVm9PX01NR212MVRyQScsXG4gIGxhbmd1YWdlOiAnSVQnXG4gIFxufSkoTWFwQ29udGFpbmVyKTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/MapContainer.js\n");

/***/ })

})