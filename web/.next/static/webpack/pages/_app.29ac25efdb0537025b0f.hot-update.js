/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/hooks/auth.tsx":
/*!****************************!*\
  !*** ./src/hooks/auth.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_lon1_Documents_scripts_www_GoBarber_2_0_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_lon1_Documents_scripts_www_GoBarber_2_0_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_lon1_Documents_scripts_www_GoBarber_2_0_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_lon1_Documents_scripts_www_GoBarber_2_0_web_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api */ \"./src/services/api.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/home/lon1/Documents/scripts/www/GoBarber-2.0/web/src/hooks/auth.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar AuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)({});\nvar AuthProvider = function AuthProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(function () {\n    var token = localStorage.getItem('@GoBarber:token');\n    var user = localStorage.getItem('@GoBarber:user');\n\n    if (token && user) {\n      return {\n        token: token,\n        user: JSON.parse(user)\n      };\n    }\n\n    return {};\n  }),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var signIn = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)( /*#__PURE__*/function () {\n    var _ref3 = (0,_home_lon1_Documents_scripts_www_GoBarber_2_0_web_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_lon1_Documents_scripts_www_GoBarber_2_0_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(_ref2) {\n      var email, password, response, _response$data, token, user;\n\n      return _home_lon1_Documents_scripts_www_GoBarber_2_0_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              email = _ref2.email, password = _ref2.password;\n              _context.next = 3;\n              return _services_api__WEBPACK_IMPORTED_MODULE_4__.default.post('sessions', {\n                email: email,\n                password: password\n              });\n\n            case 3:\n              response = _context.sent;\n              _response$data = response.data, token = _response$data.token, user = _response$data.user;\n              localStorage.setItem('@GoBarber:token', token);\n              localStorage.setItem('@GoBarber:user', JSON.stringify(user));\n              setData({\n                token: token,\n                user: user\n              });\n\n            case 8:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref3.apply(this, arguments);\n    };\n  }(), []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n    value: {\n      user: data.user,\n      signIn: signIn\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AuthProvider, \"phUXaY/9Ef3Fx0375e0BWTYir0w=\");\n\n_c = AuthProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"AuthProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL2F1dGgudHN4PzNhMGEiXSwibmFtZXMiOlsiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZXIiLCJKU09OIiwicGFyc2UiLCJkYXRhIiwic2V0RGF0YSIsInNpZ25JbiIsInVzZUNhbGxiYWNrIiwiZW1haWwiLCJwYXNzd29yZCIsImFwaSIsInJlc3BvbnNlIiwic2V0SXRlbSIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQWlCQSxJQUFNQSxXQUFXLGdCQUFHQyxvREFBYSxDQUFrQixFQUFsQixDQUFqQztBQUVPLElBQU1DLFlBQXNCLEdBQUcsU0FBekJBLFlBQXlCLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLGtCQUM5QkMsK0NBQVEsQ0FBWSxZQUFNO0FBQ2hELFFBQU1DLEtBQUssR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGlCQUFyQixDQUFkO0FBQ0EsUUFBTUMsSUFBSSxHQUFHRixZQUFZLENBQUNDLE9BQWIsQ0FBcUIsZ0JBQXJCLENBQWI7O0FBRUEsUUFBSUYsS0FBSyxJQUFJRyxJQUFiLEVBQW1CO0FBQ2pCLGFBQU87QUFBRUgsYUFBSyxFQUFMQSxLQUFGO0FBQVNHLFlBQUksRUFBRUMsSUFBSSxDQUFDQyxLQUFMLENBQVdGLElBQVg7QUFBZixPQUFQO0FBQ0Q7O0FBRUQsV0FBTyxFQUFQO0FBQ0QsR0FUK0IsQ0FEc0I7QUFBQSxNQUMvQ0csSUFEK0M7QUFBQSxNQUN6Q0MsT0FEeUM7O0FBWXRELE1BQU1DLE1BQU0sR0FBR0Msa0RBQVc7QUFBQSwwVkFBQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVNDLG1CQUFULFNBQVNBLEtBQVQsRUFBZ0JDLFFBQWhCLFNBQWdCQSxRQUFoQjtBQUFBO0FBQUEscUJBQ0ZDLHVEQUFBLENBQVMsVUFBVCxFQUFxQjtBQUMxQ0YscUJBQUssRUFBTEEsS0FEMEM7QUFFMUNDLHdCQUFRLEVBQVJBO0FBRjBDLGVBQXJCLENBREU7O0FBQUE7QUFDbkJFLHNCQURtQjtBQUFBLCtCQU1EQSxRQUFRLENBQUNQLElBTlIsRUFNakJOLEtBTmlCLGtCQU1qQkEsS0FOaUIsRUFNVkcsSUFOVSxrQkFNVkEsSUFOVTtBQVF6QkYsMEJBQVksQ0FBQ2EsT0FBYixDQUFxQixpQkFBckIsRUFBd0NkLEtBQXhDO0FBQ0FDLDBCQUFZLENBQUNhLE9BQWIsQ0FBcUIsZ0JBQXJCLEVBQXVDVixJQUFJLENBQUNXLFNBQUwsQ0FBZVosSUFBZixDQUF2QztBQUVBSSxxQkFBTyxDQUFDO0FBQUVQLHFCQUFLLEVBQUxBLEtBQUY7QUFBU0csb0JBQUksRUFBSkE7QUFBVCxlQUFELENBQVA7O0FBWHlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUQ7O0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FZdkIsRUFadUIsQ0FBMUI7QUFjQSxzQkFDRSw4REFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUU7QUFBRUEsVUFBSSxFQUFFRyxJQUFJLENBQUNILElBQWI7QUFBbUJLLFlBQU0sRUFBTkE7QUFBbkIsS0FBN0I7QUFBQSxjQUNHVjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBL0JNOztHQUFNRCxZOztLQUFBQSxZIiwiZmlsZSI6Ii4vc3JjL2hvb2tzL2F1dGgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGFwaSBmcm9tICcuLi9zZXJ2aWNlcy9hcGknO1xuXG5pbnRlcmZhY2UgQXV0aFN0YXRlIHtcbiAgdG9rZW46IHN0cmluZztcbiAgdXNlcjogb2JqZWN0O1xufVxuXG5pbnRlcmZhY2UgU2lnbkluQ3JlZGVudGlhbHMge1xuICBlbWFpbDogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgQXV0aENvbnRleHREYXRhIHtcbiAgdXNlcjogb2JqZWN0O1xuICBzaWduSW4oY3JlZGVudGlhbHM6IFNpZ25JbkNyZWRlbnRpYWxzKTogUHJvbWlzZTx2b2lkPjtcbn1cblxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PEF1dGhDb250ZXh0RGF0YT4oe30gYXMgQXV0aENvbnRleHREYXRhKTtcblxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlcjogUmVhY3QuRkMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPEF1dGhTdGF0ZT4oKCkgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0BHb0JhcmJlcjp0b2tlbicpO1xuICAgIGNvbnN0IHVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQEdvQmFyYmVyOnVzZXInKTtcblxuICAgIGlmICh0b2tlbiAmJiB1c2VyKSB7XG4gICAgICByZXR1cm4geyB0b2tlbiwgdXNlcjogSlNPTi5wYXJzZSh1c2VyKSB9O1xuICAgIH1cblxuICAgIHJldHVybiB7fSBhcyBBdXRoU3RhdGU7XG4gIH0pXG5cbiAgY29uc3Qgc2lnbkluID0gdXNlQ2FsbGJhY2soYXN5bmMgKHsgZW1haWwsIHBhc3N3b3JkIH0pID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KCdzZXNzaW9ucycsIHtcbiAgICAgIGVtYWlsLFxuICAgICAgcGFzc3dvcmRcbiAgICB9KVxuXG4gICAgY29uc3QgeyB0b2tlbiwgdXNlciB9ID0gcmVzcG9uc2UuZGF0YTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdAR29CYXJiZXI6dG9rZW4nLCB0b2tlbik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0BHb0JhcmJlcjp1c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuXG4gICAgc2V0RGF0YSh7IHRva2VuLCB1c2VyIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlcjogZGF0YS51c2VyLCBzaWduSW4gfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/auth.tsx\n");

/***/ })

});