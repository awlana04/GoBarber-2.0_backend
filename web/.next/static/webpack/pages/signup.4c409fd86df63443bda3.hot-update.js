/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./src/components/Input/index.tsx":
/*!****************************************!*\
  !*** ./src/components/Input/index.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_lon1_Documents_scripts_www_GoBarber_2_0_web_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_lon1_Documents_scripts_www_GoBarber_2_0_web_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _unform_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @unform/core */ \"./node_modules/@unform/core/dist/index.es.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ \"./src/components/Input/styles.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/home/lon1/Documents/scripts/www/GoBarber-2.0/web/src/components/Input/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_lon1_Documents_scripts_www_GoBarber_2_0_web_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar Input = function Input(_ref) {\n  _s();\n\n  var name = _ref.name,\n      Icon = _ref.icon,\n      rest = (0,_home_lon1_Documents_scripts_www_GoBarber_2_0_web_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(_ref, [\"name\", \"icon\"]);\n\n  var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      isFocused = _useState[0],\n      setIsFocused = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      isFilled = _useState2[0],\n      setIsFilled = _useState2[1];\n\n  var _useField = (0,_unform_core__WEBPACK_IMPORTED_MODULE_4__.useField)(name),\n      fieldName = _useField.fieldName,\n      defaultValue = _useField.defaultValue,\n      error = _useField.error,\n      registerField = _useField.registerField;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    registerField({\n      name: fieldName,\n      ref: inputRef.current,\n      path: 'value'\n    });\n  }, [registerField, fieldName]);\n  var handleInputBlur = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function () {\n    var _inputRef$current;\n\n    setIsFocused(false);\n    setIsFilled(!!((_inputRef$current = inputRef.current) !== null && _inputRef$current !== void 0 && _inputRef$current.value));\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.Container, {\n    isFocused: isFocused,\n    isFilled: isFilled,\n    children: [Icon && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Icon, {\n      size: 24\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 16\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", _objectSpread({\n      ref: inputRef,\n      defaultValue: defaultValue,\n      onFocus: function onFocus() {\n        return setIsFocused(true);\n      },\n      onBlur: handleInputBlur\n    }, rest), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Input, \"/dw0ZD8+RmB/TvMAqOgjJEWnZ/U=\", false, function () {\n  return [_unform_core__WEBPACK_IMPORTED_MODULE_4__.useField];\n});\n\n_c = Input;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\n\nvar _c;\n\n$RefreshReg$(_c, \"Input\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSW5wdXQvaW5kZXgudHN4PzhlYzAiXSwibmFtZXMiOlsiSW5wdXQiLCJuYW1lIiwiSWNvbiIsImljb24iLCJyZXN0IiwiaW5wdXRSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImlzRm9jdXNlZCIsInNldElzRm9jdXNlZCIsImlzRmlsbGVkIiwic2V0SXNGaWxsZWQiLCJ1c2VGaWVsZCIsImZpZWxkTmFtZSIsImRlZmF1bHRWYWx1ZSIsImVycm9yIiwicmVnaXN0ZXJGaWVsZCIsInVzZUVmZmVjdCIsInJlZiIsImN1cnJlbnQiLCJwYXRoIiwiaGFuZGxlSW5wdXRCbHVyIiwidXNlQ2FsbGJhY2siLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTs7QUFPQSxJQUFNQSxLQUEyQixHQUFHLFNBQTlCQSxLQUE4QixPQUFtQztBQUFBOztBQUFBLE1BQWhDQyxJQUFnQyxRQUFoQ0EsSUFBZ0M7QUFBQSxNQUFwQkMsSUFBb0IsUUFBMUJDLElBQTBCO0FBQUEsTUFBWEMsSUFBVzs7QUFDckUsTUFBTUMsUUFBUSxHQUFHQyw2Q0FBTSxDQUFtQixJQUFuQixDQUF2Qjs7QUFEcUUsa0JBR25DQywrQ0FBUSxDQUFDLEtBQUQsQ0FIMkI7QUFBQSxNQUc5REMsU0FIOEQ7QUFBQSxNQUduREMsWUFIbUQ7O0FBQUEsbUJBSXJDRiwrQ0FBUSxDQUFDLEtBQUQsQ0FKNkI7QUFBQSxNQUk5REcsUUFKOEQ7QUFBQSxNQUlwREMsV0FKb0Q7O0FBQUEsa0JBTVhDLHNEQUFRLENBQUNYLElBQUQsQ0FORztBQUFBLE1BTTdEWSxTQU42RCxhQU03REEsU0FONkQ7QUFBQSxNQU1sREMsWUFOa0QsYUFNbERBLFlBTmtEO0FBQUEsTUFNcENDLEtBTm9DLGFBTXBDQSxLQU5vQztBQUFBLE1BTTdCQyxhQU42QixhQU03QkEsYUFONkI7O0FBUXJFQyxrREFBUyxDQUFDLFlBQU07QUFDZEQsaUJBQWEsQ0FBQztBQUNaZixVQUFJLEVBQUVZLFNBRE07QUFFWkssU0FBRyxFQUFFYixRQUFRLENBQUNjLE9BRkY7QUFHWkMsVUFBSSxFQUFFO0FBSE0sS0FBRCxDQUFiO0FBS0QsR0FOUSxFQU1OLENBQUNKLGFBQUQsRUFBZ0JILFNBQWhCLENBTk0sQ0FBVDtBQVFBLE1BQU1RLGVBQWUsR0FBR0Msa0RBQVcsQ0FBQyxZQUFNO0FBQUE7O0FBQ3hDYixnQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNBRSxlQUFXLENBQUMsQ0FBQyx1QkFBQ04sUUFBUSxDQUFDYyxPQUFWLDhDQUFDLGtCQUFrQkksS0FBbkIsQ0FBRixDQUFYO0FBQ0QsR0FIa0MsRUFHaEMsRUFIZ0MsQ0FBbkM7QUFLQSxzQkFDRSw4REFBQyw4Q0FBRDtBQUFXLGFBQVMsRUFBRWYsU0FBdEI7QUFBaUMsWUFBUSxFQUFFRSxRQUEzQztBQUFBLGVBQ0dSLElBQUksaUJBQUksOERBQUMsSUFBRDtBQUFNLFVBQUksRUFBRTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEWCxlQUdFO0FBQU8sU0FBRyxFQUFFRyxRQUFaO0FBQXNCLGtCQUFZLEVBQUVTLFlBQXBDO0FBQWtELGFBQU8sRUFBRTtBQUFBLGVBQU1MLFlBQVksQ0FBQyxJQUFELENBQWxCO0FBQUEsT0FBM0Q7QUFBcUYsWUFBTSxFQUFFWTtBQUE3RixPQUFrSGpCLElBQWxIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU9ELENBNUJEOztHQUFNSixLO1VBTXNEWSxrRDs7O0tBTnREWixLO0FBOEJOLCtEQUFlQSxLQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvSW5wdXQvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IElucHV0SFRNTEF0dHJpYnV0ZXMsIHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGaWVsZCB9IGZyb20gJ0B1bmZvcm0vY29yZSc7XG5pbXBvcnQgeyBJY29uQmFzZVByb3BzIH0gZnJvbSAncmVhY3QtaWNvbnMnO1xuXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL3N0eWxlcyc7XG5cbmludGVyZmFjZSBJbnB1dFByb3BzIGV4dGVuZHMgSW5wdXRIVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50PiB7XG4gIG5hbWU6IHN0cmluZztcbiAgaWNvbjogUmVhY3QuQ29tcG9uZW50VHlwZTxJY29uQmFzZVByb3BzPjtcbn1cblxuY29uc3QgSW5wdXQ6IFJlYWN0LkZDPElucHV0UHJvcHM+ID0gKHsgbmFtZSwgaWNvbjogSWNvbiwgLi4ucmVzdCB9KSA9PiB7XG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IFtpc0ZvY3VzZWQsIHNldElzRm9jdXNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0ZpbGxlZCwgc2V0SXNGaWxsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHsgZmllbGROYW1lLCBkZWZhdWx0VmFsdWUsIGVycm9yLCByZWdpc3RlckZpZWxkIH0gPSB1c2VGaWVsZChuYW1lKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlZ2lzdGVyRmllbGQoe1xuICAgICAgbmFtZTogZmllbGROYW1lLFxuICAgICAgcmVmOiBpbnB1dFJlZi5jdXJyZW50LFxuICAgICAgcGF0aDogJ3ZhbHVlJ1xuICAgIH0pXG4gIH0sIFtyZWdpc3RlckZpZWxkLCBmaWVsZE5hbWVdKVxuXG4gIGNvbnN0IGhhbmRsZUlucHV0Qmx1ciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRJc0ZvY3VzZWQoZmFsc2UpO1xuICAgIHNldElzRmlsbGVkKCEhaW5wdXRSZWYuY3VycmVudD8udmFsdWUpO1xuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgaXNGb2N1c2VkPXtpc0ZvY3VzZWR9IGlzRmlsbGVkPXtpc0ZpbGxlZH0+XG4gICAgICB7SWNvbiAmJiA8SWNvbiBzaXplPXsyNH0gLz59XG5cbiAgICAgIDxpbnB1dCByZWY9e2lucHV0UmVmfSBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX0gb25Gb2N1cz17KCkgPT4gc2V0SXNGb2N1c2VkKHRydWUpfSBvbkJsdXI9e2hhbmRsZUlucHV0Qmx1cn0gey4uLnJlc3R9IC8+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Input/index.tsx\n");

/***/ })

});