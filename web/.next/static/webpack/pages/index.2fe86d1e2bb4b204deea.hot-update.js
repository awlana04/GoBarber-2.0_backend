/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ToastContainer/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/ToastContainer/index.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/dist/react-spring.esm.js\");\n/* harmony import */ var _Toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Toast */ \"./src/components/ToastContainer/Toast/index.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ \"./src/components/ToastContainer/styles.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/lon1/Documents/scripts/www/GoBarber-2.0/web/src/components/ToastContainer/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar ToastContainer = function ToastContainer(_ref) {\n  _s();\n\n  var messages = _ref.messages;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      show = _useState[0],\n      set = _useState[1];\n\n  var messagesWithTransition = (0,react_spring__WEBPACK_IMPORTED_MODULE_2__.useTransition)(show, {\n    from: {\n      right: '-120%'\n    },\n    enter: {\n      right: '0%'\n    },\n    leave: {\n      right: '-120%'\n    },\n    reverse: show,\n    onRest: function onRest() {\n      return set(!show);\n    }\n  });\n  return;\n  messagesWithTransition.map(function (_ref2) {\n    var item = _ref2.item,\n        key = _ref2.key,\n        props = _ref2.props;\n    return item && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spring__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n      style: props,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Container, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Toast__WEBPACK_IMPORTED_MODULE_3__.default, {\n          message: item\n        }, key, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 15\n    }, _this);\n  });\n};\n\n_s(ToastContainer, \"NozbYJSwSERyKgTZ9tTZp9d4XT0=\", false, function () {\n  return [react_spring__WEBPACK_IMPORTED_MODULE_2__.useTransition];\n});\n\n_c = ToastContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToastContainer);\n\nvar _c;\n\n$RefreshReg$(_c, \"ToastContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVG9hc3RDb250YWluZXIvaW5kZXgudHN4PzEwZWEiXSwibmFtZXMiOlsiVG9hc3RDb250YWluZXIiLCJtZXNzYWdlcyIsInVzZVN0YXRlIiwic2hvdyIsInNldCIsIm1lc3NhZ2VzV2l0aFRyYW5zaXRpb24iLCJ1c2VUcmFuc2l0aW9uIiwiZnJvbSIsInJpZ2h0IiwiZW50ZXIiLCJsZWF2ZSIsInJldmVyc2UiLCJvblJlc3QiLCJtYXAiLCJpdGVtIiwia2V5IiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFJQTtBQUVBOztBQU1BLElBQU1BLGNBQTZDLEdBQUcsU0FBaERBLGNBQWdELE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLGtCQUNsREMsK0NBQVEsQ0FBQyxLQUFELENBRDBDO0FBQUEsTUFDL0RDLElBRCtEO0FBQUEsTUFDekRDLEdBRHlEOztBQUd0RSxNQUFNQyxzQkFBc0IsR0FBR0MsMkRBQWEsQ0FBQ0gsSUFBRCxFQUFPO0FBQ2pESSxRQUFJLEVBQUU7QUFBRUMsV0FBSyxFQUFFO0FBQVQsS0FEMkM7QUFFakRDLFNBQUssRUFBRTtBQUFFRCxXQUFLLEVBQUU7QUFBVCxLQUYwQztBQUdqREUsU0FBSyxFQUFFO0FBQUVGLFdBQUssRUFBRTtBQUFULEtBSDBDO0FBSWpERyxXQUFPLEVBQUVSLElBSndDO0FBS2pEUyxVQUFNLEVBQUU7QUFBQSxhQUFNUixHQUFHLENBQUMsQ0FBQ0QsSUFBRixDQUFUO0FBQUE7QUFMeUMsR0FBUCxDQUE1QztBQVFBO0FBRUVFLHdCQUFzQixDQUFDUSxHQUF2QixDQUEyQjtBQUFBLFFBQUdDLElBQUgsU0FBR0EsSUFBSDtBQUFBLFFBQVNDLEdBQVQsU0FBU0EsR0FBVDtBQUFBLFFBQWNDLEtBQWQsU0FBY0EsS0FBZDtBQUFBLFdBQ3pCRixJQUFJLGlCQUFJLDhEQUFDLHNEQUFEO0FBQWMsV0FBSyxFQUFFRSxLQUFyQjtBQUFBLDZCQUNOLDhEQUFDLDhDQUFEO0FBQUEsK0JBQ0UsOERBQUMsMkNBQUQ7QUFBaUIsaUJBQU8sRUFBRUY7QUFBMUIsV0FBWUMsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURNO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEaUI7QUFBQSxHQUEzQixDQURGO0FBVUQsQ0F0QkQ7O0dBQU1mLGM7VUFHMkJNLHVEOzs7S0FIM0JOLGM7QUF3Qk4sK0RBQWVBLGNBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ub2FzdENvbnRhaW5lci9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2l0aW9uLCBhbmltYXRlZCB9IGZyb20gJ3JlYWN0LXNwcmluZyc7XG5cbmltcG9ydCB7IFRvYXN0TWVzc2FnZSB9IGZyb20gJy4uLy4uL2hvb2tzL3RvYXN0JztcblxuaW1wb3J0IFRvYXN0IGZyb20gJy4vVG9hc3QnO1xuXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL3N0eWxlcyc7XG5cbmludGVyZmFjZSBUb2FzdENvbnRhaW5lclByb3BzIHtcbiAgbWVzc2FnZXM6IFRvYXN0TWVzc2FnZVtdO1xufVxuXG5jb25zdCBUb2FzdENvbnRhaW5lcjogUmVhY3QuRkM8VG9hc3RDb250YWluZXJQcm9wcz4gPSAoeyBtZXNzYWdlcyB9KSA9PiB7XG4gIGNvbnN0IFtzaG93LCBzZXRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG1lc3NhZ2VzV2l0aFRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKHNob3csIHtcbiAgICBmcm9tOiB7IHJpZ2h0OiAnLTEyMCUnIH0sXG4gICAgZW50ZXI6IHsgcmlnaHQ6ICcwJScgfSxcbiAgICBsZWF2ZTogeyByaWdodDogJy0xMjAlJyB9LFxuICAgIHJldmVyc2U6IHNob3csXG4gICAgb25SZXN0OiAoKSA9PiBzZXQoIXNob3cpLFxuICB9KTtcblxuICByZXR1cm5cbiAgKFxuICAgIG1lc3NhZ2VzV2l0aFRyYW5zaXRpb24ubWFwKCh7IGl0ZW0sIGtleSwgcHJvcHMgfSkgPT4gKFxuICAgICAgaXRlbSAmJiA8YW5pbWF0ZWQuZGl2IHN0eWxlPXtwcm9wc30+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPFRvYXN0IGtleT17a2V5fSBtZXNzYWdlPXtpdGVtfSAvPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvYW5pbWF0ZWQuZGl2PlxuICAgICkpXG5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2FzdENvbnRhaW5lcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ToastContainer/index.tsx\n");

/***/ })

});