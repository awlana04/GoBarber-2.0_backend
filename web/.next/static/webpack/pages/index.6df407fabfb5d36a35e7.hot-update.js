/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Input/index.tsx":
/*!****************************************!*\
  !*** ./src/components/Input/index.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_lon1_Documents_scripts_www_GoBarber_2_0_web_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_lon1_Documents_scripts_www_GoBarber_2_0_web_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _unform_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @unform/core */ \"./node_modules/@unform/core/dist/index.es.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ \"./src/components/Input/styles.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/home/lon1/Documents/scripts/www/GoBarber-2.0/web/src/components/Input/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_lon1_Documents_scripts_www_GoBarber_2_0_web_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar Input = function Input(_ref) {\n  _s();\n\n  var name = _ref.name,\n      Icon = _ref.icon,\n      rest = (0,_home_lon1_Documents_scripts_www_GoBarber_2_0_web_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(_ref, [\"name\", \"icon\"]);\n\n  var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      isFocused = _useState[0],\n      setIsFocused = _useState[1];\n\n  var _useField = (0,_unform_core__WEBPACK_IMPORTED_MODULE_4__.useField)(name),\n      fieldName = _useField.fieldName,\n      defaultValue = _useField.defaultValue,\n      error = _useField.error,\n      registerField = _useField.registerField;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    registerField({\n      name: fieldName,\n      ref: inputRef.current,\n      path: 'value'\n    });\n  }, [registerField, fieldName]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.Container, {\n    children: [Icon && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Icon, {\n      size: 24\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 16\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.InputField, _objectSpread({\n      ref: inputRef,\n      defaultValue: defaultValue,\n      onFocus: function onFocus() {\n        return setIsFocused(true);\n      },\n      onBlur: setIsFocused(false)\n    }, rest), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Input, \"0iYh/wZqPMLdN2D4P/s0oVxIbUM=\", false, function () {\n  return [_unform_core__WEBPACK_IMPORTED_MODULE_4__.useField];\n});\n\n_c = Input;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\n\nvar _c;\n\n$RefreshReg$(_c, \"Input\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSW5wdXQvaW5kZXgudHN4PzhlYzAiXSwibmFtZXMiOlsiSW5wdXQiLCJuYW1lIiwiSWNvbiIsImljb24iLCJyZXN0IiwiaW5wdXRSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImlzRm9jdXNlZCIsInNldElzRm9jdXNlZCIsInVzZUZpZWxkIiwiZmllbGROYW1lIiwiZGVmYXVsdFZhbHVlIiwiZXJyb3IiLCJyZWdpc3RlckZpZWxkIiwidXNlRWZmZWN0IiwicmVmIiwiY3VycmVudCIsInBhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7O0FBT0EsSUFBTUEsS0FBMkIsR0FBRyxTQUE5QkEsS0FBOEIsT0FBbUM7QUFBQTs7QUFBQSxNQUFoQ0MsSUFBZ0MsUUFBaENBLElBQWdDO0FBQUEsTUFBcEJDLElBQW9CLFFBQTFCQyxJQUEwQjtBQUFBLE1BQVhDLElBQVc7O0FBQ3JFLE1BQU1DLFFBQVEsR0FBR0MsNkNBQU0sQ0FBQyxJQUFELENBQXZCOztBQURxRSxrQkFHbkNDLCtDQUFRLENBQUMsS0FBRCxDQUgyQjtBQUFBLE1BRzlEQyxTQUg4RDtBQUFBLE1BR25EQyxZQUhtRDs7QUFBQSxrQkFLWEMsc0RBQVEsQ0FBQ1QsSUFBRCxDQUxHO0FBQUEsTUFLN0RVLFNBTDZELGFBSzdEQSxTQUw2RDtBQUFBLE1BS2xEQyxZQUxrRCxhQUtsREEsWUFMa0Q7QUFBQSxNQUtwQ0MsS0FMb0MsYUFLcENBLEtBTG9DO0FBQUEsTUFLN0JDLGFBTDZCLGFBSzdCQSxhQUw2Qjs7QUFPckVDLGtEQUFTLENBQUMsWUFBTTtBQUNkRCxpQkFBYSxDQUFDO0FBQ1piLFVBQUksRUFBRVUsU0FETTtBQUVaSyxTQUFHLEVBQUVYLFFBQVEsQ0FBQ1ksT0FGRjtBQUdaQyxVQUFJLEVBQUU7QUFITSxLQUFELENBQWI7QUFLRCxHQU5RLEVBTU4sQ0FBQ0osYUFBRCxFQUFnQkgsU0FBaEIsQ0FOTSxDQUFUO0FBUUEsc0JBQ0UsOERBQUMsOENBQUQ7QUFBQSxlQUNHVCxJQUFJLGlCQUFJLDhEQUFDLElBQUQ7QUFBTSxVQUFJLEVBQUU7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRFgsZUFHRSw4REFBQywrQ0FBRDtBQUFZLFNBQUcsRUFBRUcsUUFBakI7QUFBMkIsa0JBQVksRUFBRU8sWUFBekM7QUFBdUQsYUFBTyxFQUFFO0FBQUEsZUFBTUgsWUFBWSxDQUFDLElBQUQsQ0FBbEI7QUFBQSxPQUFoRTtBQUEwRixZQUFNLEVBQUVBLFlBQVksQ0FBQyxLQUFEO0FBQTlHLE9BQTJITCxJQUEzSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFPRCxDQXRCRDs7R0FBTUosSztVQUtzRFUsa0Q7OztLQUx0RFYsSztBQXdCTiwrREFBZUEsS0FBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0lucHV0L2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBJbnB1dEhUTUxBdHRyaWJ1dGVzLCB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGaWVsZCB9IGZyb20gJ0B1bmZvcm0vY29yZSc7XG5pbXBvcnQgeyBJY29uQmFzZVByb3BzIH0gZnJvbSAncmVhY3QtaWNvbnMnO1xuXG5pbXBvcnQgeyBDb250YWluZXIsIElucHV0RmllbGQgfSBmcm9tICcuL3N0eWxlcyc7XG5cbmludGVyZmFjZSBJbnB1dFByb3BzIGV4dGVuZHMgSW5wdXRIVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50PiB7XG4gIG5hbWU6IHN0cmluZztcbiAgaWNvbjogUmVhY3QuQ29tcG9uZW50VHlwZTxJY29uQmFzZVByb3BzPjtcbn1cblxuY29uc3QgSW5wdXQ6IFJlYWN0LkZDPElucHV0UHJvcHM+ID0gKHsgbmFtZSwgaWNvbjogSWNvbiwgLi4ucmVzdCB9KSA9PiB7XG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IFtpc0ZvY3VzZWQsIHNldElzRm9jdXNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgeyBmaWVsZE5hbWUsIGRlZmF1bHRWYWx1ZSwgZXJyb3IsIHJlZ2lzdGVyRmllbGQgfSA9IHVzZUZpZWxkKG5hbWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmVnaXN0ZXJGaWVsZCh7XG4gICAgICBuYW1lOiBmaWVsZE5hbWUsXG4gICAgICByZWY6IGlucHV0UmVmLmN1cnJlbnQsXG4gICAgICBwYXRoOiAndmFsdWUnXG4gICAgfSlcbiAgfSwgW3JlZ2lzdGVyRmllbGQsIGZpZWxkTmFtZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAge0ljb24gJiYgPEljb24gc2l6ZT17MjR9IC8+fVxuXG4gICAgICA8SW5wdXRGaWVsZCByZWY9e2lucHV0UmVmfSBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX0gb25Gb2N1cz17KCkgPT4gc2V0SXNGb2N1c2VkKHRydWUpfSBvbkJsdXI9e3NldElzRm9jdXNlZChmYWxzZSl9IHsuLi5yZXN0fSAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Input/index.tsx\n");

/***/ })

});