/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/hooks/toast.tsx":
/*!*****************************!*\
  !*** ./src/hooks/toast.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ToastContext\": function() { return /* binding */ ToastContext; },\n/* harmony export */   \"ToastProvider\": function() { return /* binding */ ToastProvider; },\n/* harmony export */   \"useToast\": function() { return /* binding */ useToast; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_lon1_Documents_scripts_www_GoBarber_2_0_web_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var uuidv4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuidv4 */ \"./node_modules/uuidv4/build/lib/uuidv4.js\");\n/* harmony import */ var _components_ToastContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ToastContainer */ \"./src/components/ToastContainer/index.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/lon1/Documents/scripts/www/GoBarber-2.0/web/src/hooks/toast.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\nvar ToastContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({});\nvar ToastProvider = function ToastProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      messages = _useState[0],\n      setMessages = _useState[1];\n\n  var addToast = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (_ref2) {\n    var type = _ref2.type,\n        title = _ref2.title,\n        description = _ref2.description;\n    var id = (0,uuidv4__WEBPACK_IMPORTED_MODULE_3__.uuid)();\n    var toast = {\n      id: id,\n      type: type,\n      title: title,\n      description: description\n    };\n    setMessages(function (state) {\n      return [].concat((0,_home_lon1_Documents_scripts_www_GoBarber_2_0_web_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(state), [toast]);\n    });\n  }, [messages]);\n  var removeToast = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {}, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ToastContext.Provider, {\n    value: {\n      addToast: addToast,\n      removeToast: removeToast\n    },\n    children: [children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ToastContainer__WEBPACK_IMPORTED_MODULE_4__.default, {\n      messages: messages\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ToastProvider, \"B21RFwG32JC+fV89pZ9By69CAIM=\");\n\n_c = ToastProvider;\nfunction useToast() {\n  _s2();\n\n  var context = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(ToastContext);\n\n  if (!context) {\n    throw new Error('useToast must be used within a ToastProvider');\n  }\n\n  return context;\n}\n\n_s2(useToast, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"ToastProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3RvYXN0LnRzeD9lNjAzIl0sIm5hbWVzIjpbIlRvYXN0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJUb2FzdFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJhZGRUb2FzdCIsInVzZUNhbGxiYWNrIiwidHlwZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpZCIsInV1aWQiLCJ0b2FzdCIsInN0YXRlIiwicmVtb3ZlVG9hc3QiLCJ1c2VUb2FzdCIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFjTyxJQUFNQSxZQUFZLGdCQUFHQyxvREFBYSxDQUFtQixFQUFuQixDQUFsQztBQUVBLElBQU1DLGFBQXVCLEdBQUcsU0FBMUJBLGFBQTBCLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLGtCQUN2QkMsK0NBQVEsQ0FBaUIsRUFBakIsQ0FEZTtBQUFBLE1BQ2hEQyxRQURnRDtBQUFBLE1BQ3RDQyxXQURzQzs7QUFHdkQsTUFBTUMsUUFBUSxHQUFHQyxrREFBVyxDQUFDLGlCQUE0RDtBQUFBLFFBQXpEQyxJQUF5RCxTQUF6REEsSUFBeUQ7QUFBQSxRQUFuREMsS0FBbUQsU0FBbkRBLEtBQW1EO0FBQUEsUUFBNUNDLFdBQTRDLFNBQTVDQSxXQUE0QztBQUN2RixRQUFNQyxFQUFFLEdBQUdDLDRDQUFJLEVBQWY7QUFFQSxRQUFNQyxLQUFLLEdBQUc7QUFDWkYsUUFBRSxFQUFGQSxFQURZO0FBRVpILFVBQUksRUFBSkEsSUFGWTtBQUdaQyxXQUFLLEVBQUxBLEtBSFk7QUFJWkMsaUJBQVcsRUFBWEE7QUFKWSxLQUFkO0FBT0FMLGVBQVcsQ0FBQyxVQUFBUyxLQUFLO0FBQUEsNkxBQVFBLEtBQVIsSUFBZUQsS0FBZjtBQUFBLEtBQU4sQ0FBWDtBQUNELEdBWDJCLEVBV3pCLENBQUNULFFBQUQsQ0FYeUIsQ0FBNUI7QUFhQSxNQUFNVyxXQUFXLEdBQUdSLGtEQUFXLENBQUMsWUFBTSxDQUFHLENBQVYsRUFBWSxFQUFaLENBQS9CO0FBRUEsc0JBQ0UsOERBQUMsWUFBRCxDQUFjLFFBQWQ7QUFBdUIsU0FBSyxFQUFFO0FBQUVELGNBQVEsRUFBUkEsUUFBRjtBQUFZUyxpQkFBVyxFQUFYQTtBQUFaLEtBQTlCO0FBQUEsZUFDR2IsUUFESCxlQUVFLDhEQUFDLCtEQUFEO0FBQWdCLGNBQVEsRUFBRUU7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBTUQsQ0F4Qk07O0dBQU1ILGE7O0tBQUFBLGE7QUEwQk4sU0FBU2UsUUFBVCxHQUFzQztBQUFBOztBQUMzQyxNQUFNQyxPQUFPLEdBQUdDLGlEQUFVLENBQUNuQixZQUFELENBQTFCOztBQUVBLE1BQUksQ0FBQ2tCLE9BQUwsRUFBYztBQUNaLFVBQU0sSUFBSUUsS0FBSixDQUFVLDhDQUFWLENBQU47QUFDRDs7QUFFRCxTQUFPRixPQUFQO0FBQ0Q7O0lBUmVELFEiLCJmaWxlIjoiLi9zcmMvaG9va3MvdG9hc3QudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHV1aWQgfSBmcm9tICd1dWlkdjQnO1xuXG5pbXBvcnQgVG9hc3RDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Ub2FzdENvbnRhaW5lcic7XG5cbmludGVyZmFjZSBUb2FzdENvbnRleHREYXRhIHtcbiAgYWRkVG9hc3QobWVzc2FnZTogT21pdDxUb2FzdE1lc3NhZ2UsICdpZCc+KTogdm9pZDtcbiAgcmVtb3ZlVG9hc3QoKTogdm9pZDtcbn1cblxuaW50ZXJmYWNlIFRvYXN0TWVzc2FnZSB7XG4gIGlkOiBzdHJpbmc7XG4gIHR5cGU/OiAnaW5mbycgfCAnc3VjY2VzcycgfCAnZXJyb3InO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IFRvYXN0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8VG9hc3RDb250ZXh0RGF0YT4oe30gYXMgVG9hc3RDb250ZXh0RGF0YSk7XG5cbmV4cG9ydCBjb25zdCBUb2FzdFByb3ZpZGVyOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZTxUb2FzdE1lc3NhZ2VbXT4oW10pO1xuXG4gIGNvbnN0IGFkZFRvYXN0ID0gdXNlQ2FsbGJhY2soKHsgdHlwZSwgdGl0bGUsIGRlc2NyaXB0aW9uIH06IE9taXQ8VG9hc3RNZXNzYWdlLCAnaWQnPikgPT4ge1xuICAgIGNvbnN0IGlkID0gdXVpZCgpO1xuXG4gICAgY29uc3QgdG9hc3QgPSB7XG4gICAgICBpZCxcbiAgICAgIHR5cGUsXG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgIH1cblxuICAgIHNldE1lc3NhZ2VzKHN0YXRlID0+IFsuLi5zdGF0ZSwgdG9hc3RdKTtcbiAgfSwgW21lc3NhZ2VzXSk7XG5cbiAgY29uc3QgcmVtb3ZlVG9hc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7IH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxUb2FzdENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgYWRkVG9hc3QsIHJlbW92ZVRvYXN0IH19PlxuICAgICAge2NoaWxkcmVufVxuICAgICAgPFRvYXN0Q29udGFpbmVyIG1lc3NhZ2VzPXttZXNzYWdlc30gLz5cbiAgICA8L1RvYXN0Q29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVG9hc3QoKTogVG9hc3RDb250ZXh0RGF0YSB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KFRvYXN0Q29udGV4dCk7XG5cbiAgaWYgKCFjb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VUb2FzdCBtdXN0IGJlIHVzZWQgd2l0aGluIGEgVG9hc3RQcm92aWRlcicpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/toast.tsx\n");

/***/ })

});