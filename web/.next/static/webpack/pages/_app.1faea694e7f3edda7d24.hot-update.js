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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/dist/react-spring.esm.js\");\n/* harmony import */ var _Toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Toast */ \"./src/components/ToastContainer/Toast/index.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ \"./src/components/ToastContainer/styles.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/lon1/Documents/scripts/www/GoBarber-2.0/web/src/components/ToastContainer/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar ToastContainer = function ToastContainer(_ref) {\n  _s();\n\n  var messages = _ref.messages;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      show = _useState[0],\n      set = _useState[1];\n\n  var messagesWithTransition = (0,react_spring__WEBPACK_IMPORTED_MODULE_2__.useTransition)(show, {\n    from: {\n      right: '-120%'\n    },\n    enter: {\n      right: '0%'\n    },\n    leave: {\n      right: '-120%'\n    },\n    reverse: show,\n    onRest: function onRest() {\n      return set(!show);\n    }\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spring__WEBPACK_IMPORTED_MODULE_2__.Transition, {\n    items: show,\n    from: {\n      right: '-120%'\n    },\n    enter: {\n      right: '0%'\n    },\n    leave: {\n      right: '-120%'\n    },\n    reverse: show,\n    onRest: function onRest() {\n      return set(!show);\n    },\n    children: function children(styles, item) {\n      return item && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spring__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n        style: styles,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Container, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Toast__WEBPACK_IMPORTED_MODULE_3__.default, {\n            message: styles\n          }, key, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 17\n      }, _this);\n    }\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, _this); // return (\n  //   <Container>\n  //     {messages.map(({ item, key, props }) => (\n  //       item && <animated.div style={props}>\n  //         <Toast key={key} message={item} />\n  //       </animated.div>\n  //     ))}\n  //   </Container>\n  // )\n};\n\n_s(ToastContainer, \"NozbYJSwSERyKgTZ9tTZp9d4XT0=\", false, function () {\n  return [react_spring__WEBPACK_IMPORTED_MODULE_2__.useTransition];\n});\n\n_c = ToastContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToastContainer);\n\nvar _c;\n\n$RefreshReg$(_c, \"ToastContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVG9hc3RDb250YWluZXIvaW5kZXgudHN4PzEwZWEiXSwibmFtZXMiOlsiVG9hc3RDb250YWluZXIiLCJtZXNzYWdlcyIsInVzZVN0YXRlIiwic2hvdyIsInNldCIsIm1lc3NhZ2VzV2l0aFRyYW5zaXRpb24iLCJ1c2VUcmFuc2l0aW9uIiwiZnJvbSIsInJpZ2h0IiwiZW50ZXIiLCJsZWF2ZSIsInJldmVyc2UiLCJvblJlc3QiLCJzdHlsZXMiLCJpdGVtIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBSUE7QUFFQTs7QUFNQSxJQUFNQSxjQUE2QyxHQUFHLFNBQWhEQSxjQUFnRCxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxrQkFDbERDLCtDQUFRLENBQUMsS0FBRCxDQUQwQztBQUFBLE1BQy9EQyxJQUQrRDtBQUFBLE1BQ3pEQyxHQUR5RDs7QUFHdEUsTUFBTUMsc0JBQXNCLEdBQUdDLDJEQUFhLENBQUNILElBQUQsRUFBTztBQUNqREksUUFBSSxFQUFFO0FBQUVDLFdBQUssRUFBRTtBQUFULEtBRDJDO0FBRWpEQyxTQUFLLEVBQUU7QUFBRUQsV0FBSyxFQUFFO0FBQVQsS0FGMEM7QUFHakRFLFNBQUssRUFBRTtBQUFFRixXQUFLLEVBQUU7QUFBVCxLQUgwQztBQUlqREcsV0FBTyxFQUFFUixJQUp3QztBQUtqRFMsVUFBTSxFQUFFO0FBQUEsYUFBTVIsR0FBRyxDQUFDLENBQUNELElBQUYsQ0FBVDtBQUFBO0FBTHlDLEdBQVAsQ0FBNUM7QUFRQSxzQkFDRSw4REFBQyxvREFBRDtBQUNFLFNBQUssRUFBRUEsSUFEVDtBQUVFLFFBQUksRUFBRTtBQUFFSyxXQUFLLEVBQUU7QUFBVCxLQUZSO0FBR0UsU0FBSyxFQUFFO0FBQUVBLFdBQUssRUFBRTtBQUFULEtBSFQ7QUFJRSxTQUFLLEVBQUU7QUFBRUEsV0FBSyxFQUFFO0FBQVQsS0FKVDtBQUtFLFdBQU8sRUFBRUwsSUFMWDtBQU1FLFVBQU0sRUFBRTtBQUFBLGFBQU1DLEdBQUcsQ0FBQyxDQUFDRCxJQUFGLENBQVQ7QUFBQSxLQU5WO0FBQUEsY0FRRyxrQkFBQ1UsTUFBRCxFQUFTQyxJQUFUO0FBQUEsYUFDQ0EsSUFBSSxpQkFBSSw4REFBQyxzREFBRDtBQUFjLGFBQUssRUFBRUQsTUFBckI7QUFBQSwrQkFDTiw4REFBQyw4Q0FBRDtBQUFBLGlDQUNFLDhEQUFDLDJDQUFEO0FBQWlCLG1CQUFPLEVBQUVBO0FBQTFCLGFBQVlFLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFQ7QUFBQTtBQVJIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERixDQVhzRSxDQThCdEU7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsQ0F4Q0Q7O0dBQU1mLGM7VUFHMkJNLHVEOzs7S0FIM0JOLGM7QUEwQ04sK0RBQWVBLGNBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ub2FzdENvbnRhaW5lci9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2l0aW9uLCBhbmltYXRlZCwgVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXNwcmluZyc7XG5cbmltcG9ydCB7IFRvYXN0TWVzc2FnZSB9IGZyb20gJy4uLy4uL2hvb2tzL3RvYXN0JztcblxuaW1wb3J0IFRvYXN0IGZyb20gJy4vVG9hc3QnO1xuXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL3N0eWxlcyc7XG5cbmludGVyZmFjZSBUb2FzdENvbnRhaW5lclByb3BzIHtcbiAgbWVzc2FnZXM6IFRvYXN0TWVzc2FnZVtdO1xufVxuXG5jb25zdCBUb2FzdENvbnRhaW5lcjogUmVhY3QuRkM8VG9hc3RDb250YWluZXJQcm9wcz4gPSAoeyBtZXNzYWdlcyB9KSA9PiB7XG4gIGNvbnN0IFtzaG93LCBzZXRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG1lc3NhZ2VzV2l0aFRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKHNob3csIHtcbiAgICBmcm9tOiB7IHJpZ2h0OiAnLTEyMCUnIH0sXG4gICAgZW50ZXI6IHsgcmlnaHQ6ICcwJScgfSxcbiAgICBsZWF2ZTogeyByaWdodDogJy0xMjAlJyB9LFxuICAgIHJldmVyc2U6IHNob3csXG4gICAgb25SZXN0OiAoKSA9PiBzZXQoIXNob3cpLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxUcmFuc2l0aW9uXG4gICAgICBpdGVtcz17c2hvd31cbiAgICAgIGZyb209e3sgcmlnaHQ6ICctMTIwJScgfX1cbiAgICAgIGVudGVyPXt7IHJpZ2h0OiAnMCUnIH19XG4gICAgICBsZWF2ZT17eyByaWdodDogJy0xMjAlJyB9fVxuICAgICAgcmV2ZXJzZT17c2hvd31cbiAgICAgIG9uUmVzdD17KCkgPT4gc2V0KCFzaG93KVxuICAgICAgfT5cbiAgICAgIHsoc3R5bGVzLCBpdGVtKSA9PlxuICAgICAgICBpdGVtICYmIDxhbmltYXRlZC5kaXYgc3R5bGU9e3N0eWxlc30+XG4gICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxUb2FzdCBrZXk9e2tleX0gbWVzc2FnZT17c3R5bGVzfSAvPlxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L2FuaW1hdGVkLmRpdj5cbiAgICAgIH1cbiAgICA8L1RyYW5zaXRpb24+XG4gIClcblxuICAvLyByZXR1cm4gKFxuICAvLyAgIDxDb250YWluZXI+XG4gIC8vICAgICB7bWVzc2FnZXMubWFwKCh7IGl0ZW0sIGtleSwgcHJvcHMgfSkgPT4gKFxuICAvLyAgICAgICBpdGVtICYmIDxhbmltYXRlZC5kaXYgc3R5bGU9e3Byb3BzfT5cblxuICAvLyAgICAgICAgIDxUb2FzdCBrZXk9e2tleX0gbWVzc2FnZT17aXRlbX0gLz5cbiAgLy8gICAgICAgPC9hbmltYXRlZC5kaXY+XG4gIC8vICAgICApKX1cbiAgLy8gICA8L0NvbnRhaW5lcj5cbiAgLy8gKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2FzdENvbnRhaW5lcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ToastContainer/index.tsx\n");

/***/ })

});