/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/ToastContainer/Toast/index.tsx":
/*!*******************************************************!*\
  !*** ./src/components/ToastContainer/Toast/index.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var _hooks_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/toast */ \"./src/hooks/toast.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./src/components/ToastContainer/Toast/styles.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/lon1/Documents/scripts/www/GoBarber-2.0/web/src/components/ToastContainer/Toast/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Toast = function Toast(_ref) {\n  _s();\n\n  var message = _ref.message;\n\n  var _useToast = (0,_hooks_toast__WEBPACK_IMPORTED_MODULE_2__.useToast)(),\n      removeToast = _useToast.removeToast;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var timer = setTimeout(function () {\n      removeToast(message.id);\n    }, 3000);\n  }, [message.id]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Container, {\n    type: message.type,\n    hasDescription: !!message.description,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiAlertCircle, {\n      size: \"20\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n        children: message.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, _this), message.description && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: message.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 33\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      onClick: function onClick() {\n        return removeToast(message.id);\n      },\n      type: \"button\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiXCircle, {\n        size: \"18\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Toast, \"cVj1SZxNljqa99jAg6KZVb19d6w=\", false, function () {\n  return [_hooks_toast__WEBPACK_IMPORTED_MODULE_2__.useToast];\n});\n\n_c = Toast;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Toast);\n\nvar _c;\n\n$RefreshReg$(_c, \"Toast\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVG9hc3RDb250YWluZXIvVG9hc3QvaW5kZXgudHN4P2VhZDQiXSwibmFtZXMiOlsiVG9hc3QiLCJtZXNzYWdlIiwidXNlVG9hc3QiLCJyZW1vdmVUb2FzdCIsInVzZUVmZmVjdCIsInRpbWVyIiwic2V0VGltZW91dCIsImlkIiwidHlwZSIsImRlc2NyaXB0aW9uIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBOztBQU1BLElBQU1BLEtBQTJCLEdBQUcsU0FBOUJBLEtBQThCLE9BQWlCO0FBQUE7O0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjOztBQUFBLGtCQUMzQkMsc0RBQVEsRUFEbUI7QUFBQSxNQUMzQ0MsV0FEMkMsYUFDM0NBLFdBRDJDOztBQUduREMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsS0FBSyxHQUFHQyxVQUFVLENBQUMsWUFBTTtBQUM3QkgsaUJBQVcsQ0FBQ0YsT0FBTyxDQUFDTSxFQUFULENBQVg7QUFDRCxLQUZ1QixFQUVyQixJQUZxQixDQUF4QjtBQUdELEdBSlEsRUFJTixDQUFDTixPQUFPLENBQUNNLEVBQVQsQ0FKTSxDQUFUO0FBTUEsc0JBQ0UsOERBQUMsOENBQUQ7QUFBVyxRQUFJLEVBQUVOLE9BQU8sQ0FBQ08sSUFBekI7QUFBK0Isa0JBQWMsRUFBRSxDQUFDLENBQUNQLE9BQU8sQ0FBQ1EsV0FBekQ7QUFBQSw0QkFDRSw4REFBQyx5REFBRDtBQUFlLFVBQUksRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFHRTtBQUFBLDhCQUNFO0FBQUEsa0JBQVNSLE9BQU8sQ0FBQ1M7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBRUdULE9BQU8sQ0FBQ1EsV0FBUixpQkFBdUI7QUFBQSxrQkFBSVIsT0FBTyxDQUFDUTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFRRTtBQUFRLGFBQU8sRUFBRTtBQUFBLGVBQU1OLFdBQVcsQ0FBQ0YsT0FBTyxDQUFDTSxFQUFULENBQWpCO0FBQUEsT0FBakI7QUFBZ0QsVUFBSSxFQUFDLFFBQXJEO0FBQUEsNkJBQ0UsOERBQUMscURBQUQ7QUFBVyxZQUFJLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWNELENBdkJEOztHQUFNUCxLO1VBQ29CRSxrRDs7O0tBRHBCRixLO0FBMEJOLCtEQUFlQSxLQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvVG9hc3RDb250YWluZXIvVG9hc3QvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZpQWxlcnRDaXJjbGUsIEZpWENpcmNsZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJztcblxuaW1wb3J0IHsgVG9hc3RNZXNzYWdlLCB1c2VUb2FzdCB9IGZyb20gJy4uLy4uLy4uL2hvb2tzL3RvYXN0JztcblxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9zdHlsZXMnO1xuXG5pbnRlcmZhY2UgVG9hc3RQcm9wcyB7XG4gIG1lc3NhZ2U6IFRvYXN0TWVzc2FnZTtcbn1cblxuY29uc3QgVG9hc3Q6IFJlYWN0LkZDPFRvYXN0UHJvcHM+ID0gKHsgbWVzc2FnZSB9KSA9PiB7XG4gIGNvbnN0IHsgcmVtb3ZlVG9hc3QgfSA9IHVzZVRvYXN0KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVtb3ZlVG9hc3QobWVzc2FnZS5pZCk7XG4gICAgfSwgMzAwMClcbiAgfSwgW21lc3NhZ2UuaWRdKVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciB0eXBlPXttZXNzYWdlLnR5cGV9IGhhc0Rlc2NyaXB0aW9uPXshIW1lc3NhZ2UuZGVzY3JpcHRpb259PlxuICAgICAgPEZpQWxlcnRDaXJjbGUgc2l6ZT1cIjIwXCIgLz5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPHN0cm9uZz57bWVzc2FnZS50aXRsZX08L3N0cm9uZz5cbiAgICAgICAge21lc3NhZ2UuZGVzY3JpcHRpb24gJiYgPHA+e21lc3NhZ2UuZGVzY3JpcHRpb259PC9wPn1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJlbW92ZVRvYXN0KG1lc3NhZ2UuaWQpfSB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgIDxGaVhDaXJjbGUgc2l6ZT0nMTgnIC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBUb2FzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ToastContainer/Toast/index.tsx\n");

/***/ })

});