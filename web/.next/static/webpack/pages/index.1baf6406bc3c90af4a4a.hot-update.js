/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/hooks/toast.tsx":
/*!*****************************!*\
  !*** ./src/hooks/toast.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ToastContext\": function() { return /* binding */ ToastContext; },\n/* harmony export */   \"ToastProvider\": function() { return /* binding */ ToastProvider; },\n/* harmony export */   \"useToast\": function() { return /* binding */ useToast; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ToastContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ToastContainer */ \"./src/components/ToastContainer/index.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/lon1/Documents/scripts/www/GoBarber-2.0/web/src/hooks/toast.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\nvar ToastContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nvar ToastProvider = function ToastProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      messages = _useState[0],\n      setMessages = _useState[1];\n\n  var addToast = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {}, []);\n  var removeToast = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {}, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ToastContext.Provider, {\n    value: {\n      addToast: addToast,\n      removeToast: removeToast\n    },\n    children: [children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ToastContainer__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ToastProvider, \"B21RFwG32JC+fV89pZ9By69CAIM=\");\n\n_c = ToastProvider;\nfunction useToast() {\n  _s2();\n\n  var context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ToastContext);\n\n  if (!context) {\n    throw new Error('useToast must be used within a ToastProvider');\n  }\n\n  return context;\n}\n\n_s2(useToast, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"ToastProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3RvYXN0LnRzeD9lNjAzIl0sIm5hbWVzIjpbIlRvYXN0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJUb2FzdFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJhZGRUb2FzdCIsInVzZUNhbGxiYWNrIiwicmVtb3ZlVG9hc3QiLCJ1c2VUb2FzdCIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBY08sSUFBTUEsWUFBWSxnQkFBR0Msb0RBQWEsQ0FBbUIsRUFBbkIsQ0FBbEM7QUFFQSxJQUFNQyxhQUF1QixHQUFHLFNBQTFCQSxhQUEwQixPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxrQkFDdkJDLCtDQUFRLENBQUMsRUFBRCxDQURlO0FBQUEsTUFDaERDLFFBRGdEO0FBQUEsTUFDdENDLFdBRHNDOztBQUd2RCxNQUFNQyxRQUFRLEdBQUdDLGtEQUFXLENBQUMsWUFBTSxDQUFHLENBQVYsRUFBWSxFQUFaLENBQTVCO0FBRUEsTUFBTUMsV0FBVyxHQUFHRCxrREFBVyxDQUFDLFlBQU0sQ0FBRyxDQUFWLEVBQVksRUFBWixDQUEvQjtBQUVBLHNCQUNFLDhEQUFDLFlBQUQsQ0FBYyxRQUFkO0FBQXVCLFNBQUssRUFBRTtBQUFFRCxjQUFRLEVBQVJBLFFBQUY7QUFBWUUsaUJBQVcsRUFBWEE7QUFBWixLQUE5QjtBQUFBLGVBQ0dOLFFBREgsZUFFRSw4REFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFNRCxDQWJNOztHQUFNRCxhOztLQUFBQSxhO0FBZU4sU0FBU1EsUUFBVCxHQUFzQztBQUFBOztBQUMzQyxNQUFNQyxPQUFPLEdBQUdDLGlEQUFVLENBQUNaLFlBQUQsQ0FBMUI7O0FBRUEsTUFBSSxDQUFDVyxPQUFMLEVBQWM7QUFDWixVQUFNLElBQUlFLEtBQUosQ0FBVSw4Q0FBVixDQUFOO0FBQ0Q7O0FBRUQsU0FBT0YsT0FBUDtBQUNEOztJQVJlRCxRIiwiZmlsZSI6Ii4vc3JjL2hvb2tzL3RvYXN0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBUb2FzdENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL1RvYXN0Q29udGFpbmVyJztcblxuaW50ZXJmYWNlIFRvYXN0Q29udGV4dERhdGEge1xuICBhZGRUb2FzdCgpOiB2b2lkO1xuICByZW1vdmVUb2FzdCgpOiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgVG9hc3RNZXNzYWdlIHtcbiAgaWQ6IHN0cmluZztcbiAgdHlwZT86ICdpbmZvJyB8ICdzdWNjZXNzJyB8ICdlcnJvcic7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgVG9hc3RDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxUb2FzdENvbnRleHREYXRhPih7fSBhcyBUb2FzdENvbnRleHREYXRhKTtcblxuZXhwb3J0IGNvbnN0IFRvYXN0UHJvdmlkZXI6IFJlYWN0LkZDID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBhZGRUb2FzdCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgfSwgW10pO1xuXG4gIGNvbnN0IHJlbW92ZVRvYXN0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VG9hc3RDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGFkZFRvYXN0LCByZW1vdmVUb2FzdCB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxuICAgIDwvVG9hc3RDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUb2FzdCgpOiBUb2FzdENvbnRleHREYXRhIHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoVG9hc3RDb250ZXh0KTtcblxuICBpZiAoIWNvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZVRvYXN0IG11c3QgYmUgdXNlZCB3aXRoaW4gYSBUb2FzdFByb3ZpZGVyJyk7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/toast.tsx\n");

/***/ })

});