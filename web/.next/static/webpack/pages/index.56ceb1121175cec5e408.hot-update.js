/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/hooks/auth.tsx":
/*!****************************!*\
  !*** ./src/hooks/auth.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; },\n/* harmony export */   \"useAuth\": function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_lon1_Documents_scripts_www_GoBarber_2_0_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_lon1_Documents_scripts_www_GoBarber_2_0_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_lon1_Documents_scripts_www_GoBarber_2_0_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_lon1_Documents_scripts_www_GoBarber_2_0_web_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api */ \"./src/services/api.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/home/lon1/Documents/scripts/www/GoBarber-2.0/web/src/hooks/auth.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\nvar AuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)({});\nvar AuthProvider = function AuthProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(function () {\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n      var token = localStorage.getItem('@GoBarber:token');\n      var user = localStorage.getItem('@GoBarber:user');\n\n      if (token && user) {\n        return {\n          token: token,\n          user: JSON.parse(user)\n        };\n      }\n    }, []);\n    return {};\n  }),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var signIn = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)( /*#__PURE__*/function () {\n    var _ref3 = (0,_home_lon1_Documents_scripts_www_GoBarber_2_0_web_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_lon1_Documents_scripts_www_GoBarber_2_0_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(_ref2) {\n      var email, password, response, _response$data, token, user;\n\n      return _home_lon1_Documents_scripts_www_GoBarber_2_0_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              email = _ref2.email, password = _ref2.password;\n              _context.next = 3;\n              return _services_api__WEBPACK_IMPORTED_MODULE_4__.default.post('sessions', {\n                email: email,\n                password: password\n              });\n\n            case 3:\n              response = _context.sent;\n              _response$data = response.data, token = _response$data.token, user = _response$data.user;\n              localStorage.setItem('@GoBarber:token', token);\n              localStorage.setItem('@GoBarber:user', JSON.stringify(user));\n              setData({\n                token: token,\n                user: user\n              });\n\n            case 8:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref3.apply(this, arguments);\n    };\n  }(), []);\n  var signOut = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function () {\n    localStorage.removeItem('@GoBarber:token');\n    localStorage.removeItem('@GoBarber:user');\n    setData({});\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n    value: {\n      user: data.user,\n      signIn: signIn\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 58,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AuthProvider, \"TQk7M03eqXuWYF/hFzSNWVuINHs=\");\n\n_c = AuthProvider;\nfunction useAuth() {\n  _s2();\n\n  var context = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(AuthContext);\n\n  if (!context) {\n    throw new Error('useAuth must be used within an AuthProvider');\n  }\n\n  return context;\n}\n\n_s2(useAuth, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"AuthProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL2F1dGgudHN4PzNhMGEiXSwibmFtZXMiOlsiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZXIiLCJKU09OIiwicGFyc2UiLCJkYXRhIiwic2V0RGF0YSIsInNpZ25JbiIsInVzZUNhbGxiYWNrIiwiZW1haWwiLCJwYXNzd29yZCIsImFwaSIsInJlc3BvbnNlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInNpZ25PdXQiLCJyZW1vdmVJdGVtIiwidXNlQXV0aCIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQWlCQSxJQUFNQSxXQUFXLGdCQUFHQyxvREFBYSxDQUFrQixFQUFsQixDQUFqQztBQUVPLElBQU1DLFlBQXNCLEdBQUcsU0FBekJBLFlBQXlCLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLGtCQUM5QkMsK0NBQVEsQ0FBWSxZQUFNO0FBQ2hEQyxvREFBUyxDQUFDLFlBQU07QUFDZCxVQUFNQyxLQUFLLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixpQkFBckIsQ0FBZDtBQUNBLFVBQU1DLElBQUksR0FBR0YsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGdCQUFyQixDQUFiOztBQUVBLFVBQUlGLEtBQUssSUFBSUcsSUFBYixFQUFtQjtBQUNqQixlQUFPO0FBQUVILGVBQUssRUFBTEEsS0FBRjtBQUFTRyxjQUFJLEVBQUVDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRixJQUFYO0FBQWYsU0FBUDtBQUNEO0FBQ0YsS0FQUSxFQU9OLEVBUE0sQ0FBVDtBQVNBLFdBQU8sRUFBUDtBQUNELEdBWCtCLENBRHNCO0FBQUEsTUFDL0NHLElBRCtDO0FBQUEsTUFDekNDLE9BRHlDOztBQWN0RCxNQUFNQyxNQUFNLEdBQUdDLGtEQUFXO0FBQUEsMFZBQUM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTQyxtQkFBVCxTQUFTQSxLQUFULEVBQWdCQyxRQUFoQixTQUFnQkEsUUFBaEI7QUFBQTtBQUFBLHFCQUNGQyx1REFBQSxDQUFTLFVBQVQsRUFBcUI7QUFDMUNGLHFCQUFLLEVBQUxBLEtBRDBDO0FBRTFDQyx3QkFBUSxFQUFSQTtBQUYwQyxlQUFyQixDQURFOztBQUFBO0FBQ25CRSxzQkFEbUI7QUFBQSwrQkFNREEsUUFBUSxDQUFDUCxJQU5SLEVBTWpCTixLQU5pQixrQkFNakJBLEtBTmlCLEVBTVZHLElBTlUsa0JBTVZBLElBTlU7QUFRekJGLDBCQUFZLENBQUNhLE9BQWIsQ0FBcUIsaUJBQXJCLEVBQXdDZCxLQUF4QztBQUNBQywwQkFBWSxDQUFDYSxPQUFiLENBQXFCLGdCQUFyQixFQUF1Q1YsSUFBSSxDQUFDVyxTQUFMLENBQWVaLElBQWYsQ0FBdkM7QUFFQUkscUJBQU8sQ0FBQztBQUFFUCxxQkFBSyxFQUFMQSxLQUFGO0FBQVNHLG9CQUFJLEVBQUpBO0FBQVQsZUFBRCxDQUFQOztBQVh5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFEOztBQUFBO0FBQUE7QUFBQTtBQUFBLE9BWXZCLEVBWnVCLENBQTFCO0FBY0EsTUFBTWEsT0FBTyxHQUFHUCxrREFBVyxDQUFDLFlBQU07QUFDaENSLGdCQUFZLENBQUNnQixVQUFiLENBQXdCLGlCQUF4QjtBQUNBaEIsZ0JBQVksQ0FBQ2dCLFVBQWIsQ0FBd0IsZ0JBQXhCO0FBRUFWLFdBQU8sQ0FBQyxFQUFELENBQVA7QUFDRCxHQUwwQixFQUt4QixFQUx3QixDQUEzQjtBQU9BLHNCQUNFLDhEQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRTtBQUFFSixVQUFJLEVBQUVHLElBQUksQ0FBQ0gsSUFBYjtBQUFtQkssWUFBTSxFQUFOQTtBQUFuQixLQUE3QjtBQUFBLGNBQ0dYO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0F4Q007O0dBQU1ELFk7O0tBQUFBLFk7QUEwQ04sU0FBU3NCLE9BQVQsR0FBb0M7QUFBQTs7QUFDekMsTUFBTUMsT0FBTyxHQUFHQyxpREFBVSxDQUFDMUIsV0FBRCxDQUExQjs7QUFFQSxNQUFJLENBQUN5QixPQUFMLEVBQWM7QUFDWixVQUFNLElBQUlFLEtBQUosQ0FBVSw2Q0FBVixDQUFOO0FBQ0Q7O0FBRUQsU0FBT0YsT0FBUDtBQUNEOztJQVJlRCxPIiwiZmlsZSI6Ii4vc3JjL2hvb2tzL2F1dGgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgYXBpIGZyb20gJy4uL3NlcnZpY2VzL2FwaSc7XG5cbmludGVyZmFjZSBBdXRoU3RhdGUge1xuICB0b2tlbjogc3RyaW5nO1xuICB1c2VyOiBvYmplY3Q7XG59XG5cbmludGVyZmFjZSBTaWduSW5DcmVkZW50aWFscyB7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBBdXRoQ29udGV4dERhdGEge1xuICB1c2VyOiBvYmplY3Q7XG4gIHNpZ25JbihjcmVkZW50aWFsczogU2lnbkluQ3JlZGVudGlhbHMpOiBQcm9taXNlPHZvaWQ+O1xufVxuXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8QXV0aENvbnRleHREYXRhPih7fSBhcyBBdXRoQ29udGV4dERhdGEpO1xuXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8QXV0aFN0YXRlPigoKSA9PiB7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0BHb0JhcmJlcjp0b2tlbicpO1xuICAgICAgY29uc3QgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdAR29CYXJiZXI6dXNlcicpO1xuXG4gICAgICBpZiAodG9rZW4gJiYgdXNlcikge1xuICAgICAgICByZXR1cm4geyB0b2tlbiwgdXNlcjogSlNPTi5wYXJzZSh1c2VyKSB9O1xuICAgICAgfVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIHt9IGFzIEF1dGhTdGF0ZTtcbiAgfSlcblxuICBjb25zdCBzaWduSW4gPSB1c2VDYWxsYmFjayhhc3luYyAoeyBlbWFpbCwgcGFzc3dvcmQgfSkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoJ3Nlc3Npb25zJywge1xuICAgICAgZW1haWwsXG4gICAgICBwYXNzd29yZFxuICAgIH0pXG5cbiAgICBjb25zdCB7IHRva2VuLCB1c2VyIH0gPSByZXNwb25zZS5kYXRhO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0BHb0JhcmJlcjp0b2tlbicsIHRva2VuKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnQEdvQmFyYmVyOnVzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XG5cbiAgICBzZXREYXRhKHsgdG9rZW4sIHVzZXIgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBzaWduT3V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdAR29CYXJiZXI6dG9rZW4nKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnQEdvQmFyYmVyOnVzZXInKTtcblxuICAgIHNldERhdGEoe30pO1xuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyOiBkYXRhLnVzZXIsIHNpZ25JbiB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBdXRoKCk6IEF1dGhDb250ZXh0RGF0YSB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcblxuICBpZiAoIWNvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZUF1dGggbXVzdCBiZSB1c2VkIHdpdGhpbiBhbiBBdXRoUHJvdmlkZXInKTtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/auth.tsx\n");

/***/ })

});