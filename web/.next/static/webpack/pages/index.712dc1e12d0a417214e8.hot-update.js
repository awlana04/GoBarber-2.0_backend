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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_lon1_Documents_scripts_www_GoBarber_2_0_web_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_lon1_Documents_scripts_www_GoBarber_2_0_web_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _unform_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @unform/core */ \"./node_modules/@unform/core/dist/index.es.js\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ \"./src/components/Input/styles.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/home/lon1/Documents/scripts/www/GoBarber-2.0/web/src/components/Input/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_lon1_Documents_scripts_www_GoBarber_2_0_web_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar Input = function Input(_ref) {\n  _s();\n\n  var name = _ref.name,\n      Icon = _ref.icon,\n      rest = (0,_home_lon1_Documents_scripts_www_GoBarber_2_0_web_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(_ref, [\"name\", \"icon\"]);\n\n  var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      isFocused = _useState[0],\n      setIsFocused = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      isFilled = _useState2[0],\n      setIsFilled = _useState2[1];\n\n  var _useField = (0,_unform_core__WEBPACK_IMPORTED_MODULE_4__.useField)(name),\n      fieldName = _useField.fieldName,\n      defaultValue = _useField.defaultValue,\n      error = _useField.error,\n      registerField = _useField.registerField;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    registerField({\n      name: fieldName,\n      ref: inputRef.current,\n      path: 'value'\n    });\n  }, [registerField, fieldName]);\n  var handleInputFocus = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function () {\n    setIsFocused(true);\n  }, []);\n  var handleInputBlur = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function () {\n    var _inputRef$current;\n\n    setIsFocused(false);\n    setIsFilled(!!((_inputRef$current = inputRef.current) !== null && _inputRef$current !== void 0 && _inputRef$current.value));\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.Container, {\n    isFocused: isFocused,\n    isFilled: isFilled,\n    isErrored: !!error,\n    children: [Icon && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Icon, {\n      size: 24\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 16\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", _objectSpread({\n      ref: inputRef,\n      defaultValue: defaultValue,\n      onFocus: handleInputFocus,\n      onBlur: handleInputBlur\n    }, rest), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, _this), error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Error, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__.FiAlertCircle, {\n        size: \"24\",\n        color: \"#c53030\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Input, \"PBfmpX6trTOHDMKEAnGCYTlof2o=\", false, function () {\n  return [_unform_core__WEBPACK_IMPORTED_MODULE_4__.useField];\n});\n\n_c = Input;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\n\nvar _c;\n\n$RefreshReg$(_c, \"Input\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSW5wdXQvaW5kZXgudHN4PzhlYzAiXSwibmFtZXMiOlsiSW5wdXQiLCJuYW1lIiwiSWNvbiIsImljb24iLCJyZXN0IiwiaW5wdXRSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImlzRm9jdXNlZCIsInNldElzRm9jdXNlZCIsImlzRmlsbGVkIiwic2V0SXNGaWxsZWQiLCJ1c2VGaWVsZCIsImZpZWxkTmFtZSIsImRlZmF1bHRWYWx1ZSIsImVycm9yIiwicmVnaXN0ZXJGaWVsZCIsInVzZUVmZmVjdCIsInJlZiIsImN1cnJlbnQiLCJwYXRoIiwiaGFuZGxlSW5wdXRGb2N1cyIsInVzZUNhbGxiYWNrIiwiaGFuZGxlSW5wdXRCbHVyIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7O0FBT0EsSUFBTUEsS0FBMkIsR0FBRyxTQUE5QkEsS0FBOEIsT0FBbUM7QUFBQTs7QUFBQSxNQUFoQ0MsSUFBZ0MsUUFBaENBLElBQWdDO0FBQUEsTUFBcEJDLElBQW9CLFFBQTFCQyxJQUEwQjtBQUFBLE1BQVhDLElBQVc7O0FBQ3JFLE1BQU1DLFFBQVEsR0FBR0MsNkNBQU0sQ0FBbUIsSUFBbkIsQ0FBdkI7O0FBRHFFLGtCQUduQ0MsK0NBQVEsQ0FBQyxLQUFELENBSDJCO0FBQUEsTUFHOURDLFNBSDhEO0FBQUEsTUFHbkRDLFlBSG1EOztBQUFBLG1CQUlyQ0YsK0NBQVEsQ0FBQyxLQUFELENBSjZCO0FBQUEsTUFJOURHLFFBSjhEO0FBQUEsTUFJcERDLFdBSm9EOztBQUFBLGtCQU1YQyxzREFBUSxDQUFDWCxJQUFELENBTkc7QUFBQSxNQU03RFksU0FONkQsYUFNN0RBLFNBTjZEO0FBQUEsTUFNbERDLFlBTmtELGFBTWxEQSxZQU5rRDtBQUFBLE1BTXBDQyxLQU5vQyxhQU1wQ0EsS0FOb0M7QUFBQSxNQU03QkMsYUFONkIsYUFNN0JBLGFBTjZCOztBQVFyRUMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RELGlCQUFhLENBQUM7QUFDWmYsVUFBSSxFQUFFWSxTQURNO0FBRVpLLFNBQUcsRUFBRWIsUUFBUSxDQUFDYyxPQUZGO0FBR1pDLFVBQUksRUFBRTtBQUhNLEtBQUQsQ0FBYjtBQUtELEdBTlEsRUFNTixDQUFDSixhQUFELEVBQWdCSCxTQUFoQixDQU5NLENBQVQ7QUFRQSxNQUFNUSxnQkFBZ0IsR0FBR0Msa0RBQVcsQ0FBQyxZQUFNO0FBQ3pDYixnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNELEdBRm1DLEVBRWpDLEVBRmlDLENBQXBDO0FBSUEsTUFBTWMsZUFBZSxHQUFHRCxrREFBVyxDQUFDLFlBQU07QUFBQTs7QUFDeENiLGdCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0FFLGVBQVcsQ0FBQyxDQUFDLHVCQUFDTixRQUFRLENBQUNjLE9BQVYsOENBQUMsa0JBQWtCSyxLQUFuQixDQUFGLENBQVg7QUFDRCxHQUhrQyxFQUdoQyxFQUhnQyxDQUFuQztBQUtBLHNCQUNFLDhEQUFDLDhDQUFEO0FBQVcsYUFBUyxFQUFFaEIsU0FBdEI7QUFBaUMsWUFBUSxFQUFFRSxRQUEzQztBQUFxRCxhQUFTLEVBQUUsQ0FBQyxDQUFDSyxLQUFsRTtBQUFBLGVBQ0diLElBQUksaUJBQUksOERBQUMsSUFBRDtBQUFNLFVBQUksRUFBRTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEWCxlQUdFO0FBQU8sU0FBRyxFQUFFRyxRQUFaO0FBQXNCLGtCQUFZLEVBQUVTLFlBQXBDO0FBQWtELGFBQU8sRUFBRU8sZ0JBQTNEO0FBQTZFLFlBQU0sRUFBRUU7QUFBckYsT0FBMEduQixJQUExRztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsRUFLR1csS0FBSyxpQkFDSiw4REFBQyxLQUFEO0FBQUEsNkJBQ0UsOERBQUMseURBQUQ7QUFBZSxZQUFJLEVBQUMsSUFBcEI7QUFBeUIsYUFBSyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFhRCxDQXRDRDs7R0FBTWYsSztVQU1zRFksa0Q7OztLQU50RFosSztBQXdDTiwrREFBZUEsS0FBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0lucHV0L2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBJbnB1dEhUTUxBdHRyaWJ1dGVzLCB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRmllbGQgfSBmcm9tICdAdW5mb3JtL2NvcmUnO1xuaW1wb3J0IHsgSWNvbkJhc2VQcm9wcyB9IGZyb20gJ3JlYWN0LWljb25zJztcbmltcG9ydCB7IEZpQWxlcnRDaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9maSc7XG5cbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4vc3R5bGVzJztcblxuaW50ZXJmYWNlIElucHV0UHJvcHMgZXh0ZW5kcyBJbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+IHtcbiAgbmFtZTogc3RyaW5nO1xuICBpY29uOiBSZWFjdC5Db21wb25lbnRUeXBlPEljb25CYXNlUHJvcHM+O1xufVxuXG5jb25zdCBJbnB1dDogUmVhY3QuRkM8SW5wdXRQcm9wcz4gPSAoeyBuYW1lLCBpY29uOiBJY29uLCAuLi5yZXN0IH0pID0+IHtcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3QgW2lzRm9jdXNlZCwgc2V0SXNGb2N1c2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzRmlsbGVkLCBzZXRJc0ZpbGxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgeyBmaWVsZE5hbWUsIGRlZmF1bHRWYWx1ZSwgZXJyb3IsIHJlZ2lzdGVyRmllbGQgfSA9IHVzZUZpZWxkKG5hbWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmVnaXN0ZXJGaWVsZCh7XG4gICAgICBuYW1lOiBmaWVsZE5hbWUsXG4gICAgICByZWY6IGlucHV0UmVmLmN1cnJlbnQsXG4gICAgICBwYXRoOiAndmFsdWUnXG4gICAgfSlcbiAgfSwgW3JlZ2lzdGVyRmllbGQsIGZpZWxkTmFtZV0pXG5cbiAgY29uc3QgaGFuZGxlSW5wdXRGb2N1cyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRJc0ZvY3VzZWQodHJ1ZSk7XG4gIH0sIFtdKVxuXG4gIGNvbnN0IGhhbmRsZUlucHV0Qmx1ciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRJc0ZvY3VzZWQoZmFsc2UpO1xuICAgIHNldElzRmlsbGVkKCEhaW5wdXRSZWYuY3VycmVudD8udmFsdWUpO1xuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgaXNGb2N1c2VkPXtpc0ZvY3VzZWR9IGlzRmlsbGVkPXtpc0ZpbGxlZH0gaXNFcnJvcmVkPXshIWVycm9yfT5cbiAgICAgIHtJY29uICYmIDxJY29uIHNpemU9ezI0fSAvPn1cblxuICAgICAgPGlucHV0IHJlZj17aW5wdXRSZWZ9IGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlfSBvbkZvY3VzPXtoYW5kbGVJbnB1dEZvY3VzfSBvbkJsdXI9e2hhbmRsZUlucHV0Qmx1cn0gey4uLnJlc3R9IC8+XG5cbiAgICAgIHtlcnJvciAmJiAoXG4gICAgICAgIDxFcnJvcj5cbiAgICAgICAgICA8RmlBbGVydENpcmNsZSBzaXplPVwiMjRcIiBjb2xvcj1cIiNjNTMwMzBcIiAvPlxuICAgICAgICA8L0Vycm9yPlxuICAgICAgKX1cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Input/index.tsx\n");

/***/ })

});