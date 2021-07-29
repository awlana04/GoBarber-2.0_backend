/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/hooks/auth.tsx":
/*!****************************!*\
  !*** ./src/hooks/auth.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; },\n/* harmony export */   \"useAuth\": function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api */ \"./src/services/api.ts\");\n\nvar _jsxFileName = \"/home/lon1/Documents/scripts/www/GoBarber-2.0/web/src/hooks/auth.tsx\";\n\n\nconst AuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst AuthProvider = ({\n  children\n}) => {\n  const {\n    0: data,\n    1: setData\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(() => {\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n      const token = localStorage.getItem('@GoBarber:token');\n      const user = localStorage.getItem('@GoBarber:user');\n\n      if (token && user) {\n        return {\n          token,\n          user: JSON.parse(user)\n        };\n      }\n    }, []);\n    return {};\n  });\n  const signIn = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ({\n    email,\n    password\n  }) => {\n    const response = await _services_api__WEBPACK_IMPORTED_MODULE_2__.default.post('sessions', {\n      email,\n      password\n    });\n    const {\n      token,\n      user\n    } = response.data;\n    localStorage.setItem('@GoBarber:token', token);\n    localStorage.setItem('@GoBarber:user', JSON.stringify(user));\n    setData({\n      token,\n      user\n    });\n  }, []);\n  const signOut = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {\n    localStorage.removeItem('@GoBarber:token');\n    localStorage.removeItem('@GoBarber:user');\n    setData({});\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n    value: {\n      user: data.user,\n      signIn,\n      signOut\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 5\n  }, undefined);\n};\nfunction useAuth() {\n  const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n\n  if (!context) {\n    throw new Error('useAuth must be used within an AuthProvider');\n  }\n\n  return context;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9zcmMvaG9va3MvYXV0aC50c3g/M2EwYSJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImRhdGEiLCJzZXREYXRhIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VyIiwiSlNPTiIsInBhcnNlIiwic2lnbkluIiwidXNlQ2FsbGJhY2siLCJlbWFpbCIsInBhc3N3b3JkIiwicmVzcG9uc2UiLCJhcGkiLCJzZXRJdGVtIiwic3RyaW5naWZ5Iiwic2lnbk91dCIsInJlbW92ZUl0ZW0iLCJ1c2VBdXRoIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQWtCQSxNQUFNQSxXQUFXLGdCQUFHQyxvREFBYSxDQUFrQixFQUFsQixDQUFqQztBQUVPLE1BQU1DLFlBQXNCLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDdEQsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQywrQ0FBUSxDQUFZLE1BQU07QUFDaERDLG9EQUFTLENBQUMsTUFBTTtBQUNkLFlBQU1DLEtBQUssR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGlCQUFyQixDQUFkO0FBQ0EsWUFBTUMsSUFBSSxHQUFHRixZQUFZLENBQUNDLE9BQWIsQ0FBcUIsZ0JBQXJCLENBQWI7O0FBRUEsVUFBSUYsS0FBSyxJQUFJRyxJQUFiLEVBQW1CO0FBQ2pCLGVBQU87QUFBRUgsZUFBRjtBQUFTRyxjQUFJLEVBQUVDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRixJQUFYO0FBQWYsU0FBUDtBQUNEO0FBQ0YsS0FQUSxFQU9OLEVBUE0sQ0FBVDtBQVNBLFdBQU8sRUFBUDtBQUNELEdBWCtCLENBQWhDO0FBYUEsUUFBTUcsTUFBTSxHQUFHQyxrREFBVyxDQUFDLE9BQU87QUFBRUMsU0FBRjtBQUFTQztBQUFULEdBQVAsS0FBK0I7QUFDeEQsVUFBTUMsUUFBUSxHQUFHLE1BQU1DLHVEQUFBLENBQVMsVUFBVCxFQUFxQjtBQUMxQ0gsV0FEMEM7QUFFMUNDO0FBRjBDLEtBQXJCLENBQXZCO0FBS0EsVUFBTTtBQUFFVCxXQUFGO0FBQVNHO0FBQVQsUUFBa0JPLFFBQVEsQ0FBQ2QsSUFBakM7QUFFQUssZ0JBQVksQ0FBQ1csT0FBYixDQUFxQixpQkFBckIsRUFBd0NaLEtBQXhDO0FBQ0FDLGdCQUFZLENBQUNXLE9BQWIsQ0FBcUIsZ0JBQXJCLEVBQXVDUixJQUFJLENBQUNTLFNBQUwsQ0FBZVYsSUFBZixDQUF2QztBQUVBTixXQUFPLENBQUM7QUFBRUcsV0FBRjtBQUFTRztBQUFULEtBQUQsQ0FBUDtBQUNELEdBWnlCLEVBWXZCLEVBWnVCLENBQTFCO0FBY0EsUUFBTVcsT0FBTyxHQUFHUCxrREFBVyxDQUFDLE1BQU07QUFDaENOLGdCQUFZLENBQUNjLFVBQWIsQ0FBd0IsaUJBQXhCO0FBQ0FkLGdCQUFZLENBQUNjLFVBQWIsQ0FBd0IsZ0JBQXhCO0FBRUFsQixXQUFPLENBQUMsRUFBRCxDQUFQO0FBQ0QsR0FMMEIsRUFLeEIsRUFMd0IsQ0FBM0I7QUFPQSxzQkFDRSw4REFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUU7QUFBRU0sVUFBSSxFQUFFUCxJQUFJLENBQUNPLElBQWI7QUFBbUJHLFlBQW5CO0FBQTJCUTtBQUEzQixLQUE3QjtBQUFBLGNBQ0duQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUtELENBeENNO0FBMENBLFNBQVNxQixPQUFULEdBQW9DO0FBQ3pDLFFBQU1DLE9BQU8sR0FBR0MsaURBQVUsQ0FBQzFCLFdBQUQsQ0FBMUI7O0FBRUEsTUFBSSxDQUFDeUIsT0FBTCxFQUFjO0FBQ1osVUFBTSxJQUFJRSxLQUFKLENBQVUsNkNBQVYsQ0FBTjtBQUNEOztBQUVELFNBQU9GLE9BQVA7QUFDRCIsImZpbGUiOiIuL3NyYy9ob29rcy9hdXRoLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGFwaSBmcm9tICcuLi9zZXJ2aWNlcy9hcGknO1xuXG5pbnRlcmZhY2UgQXV0aFN0YXRlIHtcbiAgdG9rZW46IHN0cmluZztcbiAgdXNlcjogb2JqZWN0O1xufVxuXG5pbnRlcmZhY2UgU2lnbkluQ3JlZGVudGlhbHMge1xuICBlbWFpbDogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgQXV0aENvbnRleHREYXRhIHtcbiAgdXNlcjogb2JqZWN0O1xuICBzaWduSW4oY3JlZGVudGlhbHM6IFNpZ25JbkNyZWRlbnRpYWxzKTogUHJvbWlzZTx2b2lkPjtcbiAgc2lnbk91dCgpOiB2b2lkO1xufVxuXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8QXV0aENvbnRleHREYXRhPih7fSBhcyBBdXRoQ29udGV4dERhdGEpO1xuXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8QXV0aFN0YXRlPigoKSA9PiB7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0BHb0JhcmJlcjp0b2tlbicpO1xuICAgICAgY29uc3QgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdAR29CYXJiZXI6dXNlcicpO1xuXG4gICAgICBpZiAodG9rZW4gJiYgdXNlcikge1xuICAgICAgICByZXR1cm4geyB0b2tlbiwgdXNlcjogSlNPTi5wYXJzZSh1c2VyKSB9O1xuICAgICAgfVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIHt9IGFzIEF1dGhTdGF0ZTtcbiAgfSlcblxuICBjb25zdCBzaWduSW4gPSB1c2VDYWxsYmFjayhhc3luYyAoeyBlbWFpbCwgcGFzc3dvcmQgfSkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoJ3Nlc3Npb25zJywge1xuICAgICAgZW1haWwsXG4gICAgICBwYXNzd29yZFxuICAgIH0pXG5cbiAgICBjb25zdCB7IHRva2VuLCB1c2VyIH0gPSByZXNwb25zZS5kYXRhO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0BHb0JhcmJlcjp0b2tlbicsIHRva2VuKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnQEdvQmFyYmVyOnVzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XG5cbiAgICBzZXREYXRhKHsgdG9rZW4sIHVzZXIgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBzaWduT3V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdAR29CYXJiZXI6dG9rZW4nKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnQEdvQmFyYmVyOnVzZXInKTtcblxuICAgIHNldERhdGEoe30gYXMgQXV0aFN0YXRlKTtcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlcjogZGF0YS51c2VyLCBzaWduSW4sIHNpZ25PdXQgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQXV0aCgpOiBBdXRoQ29udGV4dERhdGEge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG5cbiAgaWYgKCFjb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VBdXRoIG11c3QgYmUgdXNlZCB3aXRoaW4gYW4gQXV0aFByb3ZpZGVyJyk7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/auth.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/auth */ \"./src/hooks/auth.tsx\");\n/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/global */ \"./src/styles/global.tsx\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/theme */ \"./src/styles/theme.tsx\");\n\n\nvar _jsxFileName = \"/home/lon1/Documents/scripts/www/GoBarber-2.0/web/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.AuthProvider, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n      theme: _styles_theme__WEBPACK_IMPORTED_MODULE_5__.default,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, undefined)\n}, void 0, false);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBeUIsR0FBRyxDQUFDO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFELGtCQUNoQztBQUFBLHlCQUNFLDhEQUFDLHFEQUFEO0FBQUEsMkJBQ0UsOERBQUMsNERBQUQ7QUFBZSxXQUFLLEVBQUVDLGtEQUF0QjtBQUFBLDhCQUNFLDhEQUFDLFNBQUQsb0JBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLDhEQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGlCQURGOztBQVdBLCtEQUFlRixLQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL19hcHAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnLi4vaG9va3MvYXV0aCc7XG5cbmltcG9ydCBHbG9iYWxTdHlsZSBmcm9tICcuLi9zdHlsZXMvZ2xvYmFsJztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnO1xuXG5jb25zdCBNeUFwcDogUmVhY3QuRkM8QXBwUHJvcHM+ID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4gKFxuICA8PlxuICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDxHbG9iYWxTdHlsZSAvPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvQXV0aFByb3ZpZGVyPlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n  baseURL: 'http://localhost:3333'\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (api);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9zcmMvc2VydmljZXMvYXBpLnRzPzBlOWQiXSwibmFtZXMiOlsiYXBpIiwiYXhpb3MiLCJiYXNlVVJMIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUVBLE1BQU1BLEdBQUcsR0FBR0MsbURBQUEsQ0FBYTtBQUN2QkMsU0FBTyxFQUFFO0FBRGMsQ0FBYixDQUFaO0FBSUEsK0RBQWVGLEdBQWYiLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzMzMydcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGFwaTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/api.ts\n");

/***/ }),

/***/ "./src/styles/global.tsx":
/*!*******************************!*\
  !*** ./src/styles/global.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n\n    font-family: 'Roboto Slab', sans-serif;\n\n    border: 0;\n    outline: 0;\n  }\n\n  button {\n    cursor: pointer;\n  }\n\n  a {\n    text-decoration: none;\n    color: ${({\n  theme\n}) => theme.fonts.white}\n  }\n`);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9zcmMvc3R5bGVzL2dsb2JhbC50c3g/OWM5MCJdLCJuYW1lcyI6WyJjcmVhdGVHbG9iYWxTdHlsZSIsInRoZW1lIiwiZm9udHMiLCJ3aGl0ZSJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFFQSwrREFBZUEsZ0VBQWtCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxLQUFNO0FBQzlDO0FBQ0EsQ0FwQkEiLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2dsb2JhbC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlR2xvYmFsU3R5bGVgXG4gICoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2Fucy1zZXJpZjtcblxuICAgIGJvcmRlcjogMDtcbiAgICBvdXRsaW5lOiAwO1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udHMud2hpdGV9XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/global.tsx\n");

/***/ }),

/***/ "./src/styles/theme.tsx":
/*!******************************!*\
  !*** ./src/styles/theme.tsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst theme = {\n  colors: {\n    primary: '#FF9000',\n    background: '#312E38'\n  },\n  elements: {\n    border: '#9F9F9F',\n    borderFocus: '#E0AAFF',\n    buttonDisabled: '#7D8597'\n  },\n  fonts: {\n    dark: '#312E38',\n    white: '#F4EDE8',\n    placeholder: '#666360',\n    grayHard: '#232129'\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9zcmMvc3R5bGVzL3RoZW1lLnRzeD82N2EyIl0sIm5hbWVzIjpbInRoZW1lIiwiY29sb3JzIiwicHJpbWFyeSIsImJhY2tncm91bmQiLCJlbGVtZW50cyIsImJvcmRlciIsImJvcmRlckZvY3VzIiwiYnV0dG9uRGlzYWJsZWQiLCJmb250cyIsImRhcmsiLCJ3aGl0ZSIsInBsYWNlaG9sZGVyIiwiZ3JheUhhcmQiXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxLQUFLLEdBQUc7QUFDWkMsUUFBTSxFQUFFO0FBQ05DLFdBQU8sRUFBRSxTQURIO0FBRU5DLGNBQVUsRUFBRTtBQUZOLEdBREk7QUFLWkMsVUFBUSxFQUFFO0FBQ1JDLFVBQU0sRUFBRSxTQURBO0FBRVJDLGVBQVcsRUFBRSxTQUZMO0FBR1JDLGtCQUFjLEVBQUU7QUFIUixHQUxFO0FBVVpDLE9BQUssRUFBRTtBQUNMQyxRQUFJLEVBQUUsU0FERDtBQUVMQyxTQUFLLEVBQUUsU0FGRjtBQUdMQyxlQUFXLEVBQUUsU0FIUjtBQUlMQyxZQUFRLEVBQUU7QUFKTDtBQVZLLENBQWQ7QUFrQkEsK0RBQWVaLEtBQWYiLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3RoZW1lLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRoZW1lID0ge1xuICBjb2xvcnM6IHtcbiAgICBwcmltYXJ5OiAnI0ZGOTAwMCcsXG4gICAgYmFja2dyb3VuZDogJyMzMTJFMzgnLFxuICB9LFxuICBlbGVtZW50czoge1xuICAgIGJvcmRlcjogJyM5RjlGOUYnLFxuICAgIGJvcmRlckZvY3VzOiAnI0UwQUFGRicsXG4gICAgYnV0dG9uRGlzYWJsZWQ6ICcjN0Q4NTk3JyxcbiAgfSxcbiAgZm9udHM6IHtcbiAgICBkYXJrOiAnIzMxMkUzOCcsXG4gICAgd2hpdGU6ICcjRjRFREU4JyxcbiAgICBwbGFjZWhvbGRlcjogJyM2NjYzNjAnLFxuICAgIGdyYXlIYXJkOiAnIzIzMjEyOSdcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/theme.tsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();