/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/ToastContainer/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/ToastContainer/index.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/dist/react-spring.esm.js\");\n/* harmony import */ var _Toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Toast */ \"./src/components/ToastContainer/Toast/index.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ \"./src/components/ToastContainer/styles.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/lon1/Documents/scripts/www/GoBarber-2.0/web/src/components/ToastContainer/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar ToastContainer = function ToastContainer(_ref) {\n  _s();\n\n  var messages = _ref.messages;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      show = _useState[0],\n      set = _useState[1];\n\n  var messagesWithTransition = (0,react_spring__WEBPACK_IMPORTED_MODULE_2__.useTransition)(show, {\n    from: {\n      right: '-120%'\n    },\n    enter: {\n      right: '0%'\n    },\n    leave: {\n      right: '-120%'\n    },\n    reverse: show,\n    onRest: function onRest() {\n      return set(!show);\n    }\n  });\n  return messagesWithTransition( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Container, {\n    children: messagesWithTransition.map(function (_ref2) {\n      var key = _ref2.key,\n          item = _ref2.item;\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Toast__WEBPACK_IMPORTED_MODULE_3__.default, {\n        message: item\n      }, key, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, _this));\n};\n\n_s(ToastContainer, \"NozbYJSwSERyKgTZ9tTZp9d4XT0=\", false, function () {\n  return [react_spring__WEBPACK_IMPORTED_MODULE_2__.useTransition];\n});\n\n_c = ToastContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToastContainer);\n\nvar _c;\n\n$RefreshReg$(_c, \"ToastContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVG9hc3RDb250YWluZXIvaW5kZXgudHN4PzEwZWEiXSwibmFtZXMiOlsiVG9hc3RDb250YWluZXIiLCJtZXNzYWdlcyIsInVzZVN0YXRlIiwic2hvdyIsInNldCIsIm1lc3NhZ2VzV2l0aFRyYW5zaXRpb24iLCJ1c2VUcmFuc2l0aW9uIiwiZnJvbSIsInJpZ2h0IiwiZW50ZXIiLCJsZWF2ZSIsInJldmVyc2UiLCJvblJlc3QiLCJtYXAiLCJrZXkiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBSUE7QUFFQTs7QUFNQSxJQUFNQSxjQUE2QyxHQUFHLFNBQWhEQSxjQUFnRCxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxrQkFDbERDLCtDQUFRLENBQUMsS0FBRCxDQUQwQztBQUFBLE1BQy9EQyxJQUQrRDtBQUFBLE1BQ3pEQyxHQUR5RDs7QUFHdEUsTUFBTUMsc0JBQXNCLEdBQUdDLDJEQUFhLENBQUNILElBQUQsRUFBTztBQUNqREksUUFBSSxFQUFFO0FBQUVDLFdBQUssRUFBRTtBQUFULEtBRDJDO0FBRWpEQyxTQUFLLEVBQUU7QUFBRUQsV0FBSyxFQUFFO0FBQVQsS0FGMEM7QUFHakRFLFNBQUssRUFBRTtBQUFFRixXQUFLLEVBQUU7QUFBVCxLQUgwQztBQUlqREcsV0FBTyxFQUFFUixJQUp3QztBQUtqRFMsVUFBTSxFQUFFO0FBQUEsYUFBTVIsR0FBRyxDQUFDLENBQUNELElBQUYsQ0FBVDtBQUFBO0FBTHlDLEdBQVAsQ0FBNUM7QUFRQSxTQUFPRSxzQkFBc0IsZUFDM0IsOERBQUMsOENBQUQ7QUFBQSxjQUNHQSxzQkFBc0IsQ0FBQ1EsR0FBdkIsQ0FBMkI7QUFBQSxVQUFHQyxHQUFILFNBQUdBLEdBQUg7QUFBQSxVQUFRQyxJQUFSLFNBQVFBLElBQVI7QUFBQSwwQkFDMUIsOERBQUMsMkNBQUQ7QUFBaUIsZUFBTyxFQUFFQTtBQUExQixTQUFZRCxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEMEI7QUFBQSxLQUEzQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEMkIsQ0FBN0I7QUFPRCxDQWxCRDs7R0FBTWQsYztVQUcyQk0sdUQ7OztLQUgzQk4sYztBQW9CTiwrREFBZUEsY0FBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1RvYXN0Q29udGFpbmVyL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zaXRpb24gfSBmcm9tICdyZWFjdC1zcHJpbmcnO1xuXG5pbXBvcnQgeyBUb2FzdE1lc3NhZ2UgfSBmcm9tICcuLi8uLi9ob29rcy90b2FzdCc7XG5cbmltcG9ydCBUb2FzdCBmcm9tICcuL1RvYXN0JztcblxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9zdHlsZXMnO1xuXG5pbnRlcmZhY2UgVG9hc3RDb250YWluZXJQcm9wcyB7XG4gIG1lc3NhZ2VzOiBUb2FzdE1lc3NhZ2VbXTtcbn1cblxuY29uc3QgVG9hc3RDb250YWluZXI6IFJlYWN0LkZDPFRvYXN0Q29udGFpbmVyUHJvcHM+ID0gKHsgbWVzc2FnZXMgfSkgPT4ge1xuICBjb25zdCBbc2hvdywgc2V0XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBtZXNzYWdlc1dpdGhUcmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbihzaG93LCB7XG4gICAgZnJvbTogeyByaWdodDogJy0xMjAlJyB9LFxuICAgIGVudGVyOiB7IHJpZ2h0OiAnMCUnIH0sXG4gICAgbGVhdmU6IHsgcmlnaHQ6ICctMTIwJScgfSxcbiAgICByZXZlcnNlOiBzaG93LFxuICAgIG9uUmVzdDogKCkgPT4gc2V0KCFzaG93KSxcbiAgfSk7XG5cbiAgcmV0dXJuIG1lc3NhZ2VzV2l0aFRyYW5zaXRpb24oXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIHttZXNzYWdlc1dpdGhUcmFuc2l0aW9uLm1hcCgoeyBrZXksIGl0ZW0gfSkgPT4gKFxuICAgICAgICA8VG9hc3Qga2V5PXtrZXl9IG1lc3NhZ2U9e2l0ZW19IC8+XG4gICAgICApKX1cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2FzdENvbnRhaW5lcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ToastContainer/index.tsx\n");

/***/ })

});