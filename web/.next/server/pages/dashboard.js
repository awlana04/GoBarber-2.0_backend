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
exports.id = "pages/dashboard";
exports.ids = ["pages/dashboard"];
exports.modules = {

/***/ "./src/hooks/auth.tsx":
/*!****************************!*\
  !*** ./src/hooks/auth.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; },\n/* harmony export */   \"useAuth\": function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api */ \"./src/services/api.ts\");\n\nvar _jsxFileName = \"/home/lon1/Documents/scripts/www/GoBarber-2.0/web/src/hooks/auth.tsx\";\n\n\nconst AuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst AuthProvider = ({\n  children\n}) => {\n  const {\n    0: data,\n    1: setData\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(() => {\n    if (false) {}\n\n    return {};\n  });\n  const signIn = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ({\n    email,\n    password\n  }) => {\n    const response = await _services_api__WEBPACK_IMPORTED_MODULE_2__.default.post('sessions', {\n      email,\n      password\n    });\n    const {\n      token,\n      user\n    } = response.data;\n    localStorage.setItem('@GoBarber:token', token);\n    localStorage.setItem('@GoBarber:user', JSON.stringify(user));\n    setData({\n      token,\n      user\n    });\n  }, []);\n  const signOut = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {\n    localStorage.removeItem('@GoBarber:token');\n    localStorage.removeItem('@GoBarber:user');\n    setData({});\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n    value: {\n      user: data.user,\n      signIn,\n      signOut\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 5\n  }, undefined);\n};\nfunction useAuth() {\n  const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n\n  if (!context) {\n    throw new Error('useAuth must be used within an AuthProvider');\n  }\n\n  return context;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9zcmMvaG9va3MvYXV0aC50c3g/M2EwYSJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImRhdGEiLCJzZXREYXRhIiwidXNlU3RhdGUiLCJzaWduSW4iLCJ1c2VDYWxsYmFjayIsImVtYWlsIiwicGFzc3dvcmQiLCJyZXNwb25zZSIsImFwaSIsInRva2VuIiwidXNlciIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5Iiwic2lnbk91dCIsInJlbW92ZUl0ZW0iLCJ1c2VBdXRoIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQWtCQSxNQUFNQSxXQUFXLGdCQUFHQyxvREFBYSxDQUFrQixFQUFsQixDQUFqQztBQUVPLE1BQU1DLFlBQXNCLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDdEQsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQywrQ0FBUSxDQUFZLE1BQU07QUFDaEQsZUFBbUMsRUFPbEM7O0FBRUQsV0FBTyxFQUFQO0FBQ0QsR0FYK0IsQ0FBaEM7QUFhQSxRQUFNQyxNQUFNLEdBQUdDLGtEQUFXLENBQUMsT0FBTztBQUFFQyxTQUFGO0FBQVNDO0FBQVQsR0FBUCxLQUErQjtBQUN4RCxVQUFNQyxRQUFRLEdBQUcsTUFBTUMsdURBQUEsQ0FBUyxVQUFULEVBQXFCO0FBQzFDSCxXQUQwQztBQUUxQ0M7QUFGMEMsS0FBckIsQ0FBdkI7QUFLQSxVQUFNO0FBQUVHLFdBQUY7QUFBU0M7QUFBVCxRQUFrQkgsUUFBUSxDQUFDUCxJQUFqQztBQUVBVyxnQkFBWSxDQUFDQyxPQUFiLENBQXFCLGlCQUFyQixFQUF3Q0gsS0FBeEM7QUFDQUUsZ0JBQVksQ0FBQ0MsT0FBYixDQUFxQixnQkFBckIsRUFBdUNDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixJQUFmLENBQXZDO0FBRUFULFdBQU8sQ0FBQztBQUFFUSxXQUFGO0FBQVNDO0FBQVQsS0FBRCxDQUFQO0FBQ0QsR0FaeUIsRUFZdkIsRUFadUIsQ0FBMUI7QUFjQSxRQUFNSyxPQUFPLEdBQUdYLGtEQUFXLENBQUMsTUFBTTtBQUNoQ08sZ0JBQVksQ0FBQ0ssVUFBYixDQUF3QixpQkFBeEI7QUFDQUwsZ0JBQVksQ0FBQ0ssVUFBYixDQUF3QixnQkFBeEI7QUFFQWYsV0FBTyxDQUFDLEVBQUQsQ0FBUDtBQUNELEdBTDBCLEVBS3hCLEVBTHdCLENBQTNCO0FBT0Esc0JBQ0UsOERBQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFO0FBQUVTLFVBQUksRUFBRVYsSUFBSSxDQUFDVSxJQUFiO0FBQW1CUCxZQUFuQjtBQUEyQlk7QUFBM0IsS0FBN0I7QUFBQSxjQUNHaEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFLRCxDQXhDTTtBQTBDQSxTQUFTa0IsT0FBVCxHQUFvQztBQUN6QyxRQUFNQyxPQUFPLEdBQUdDLGlEQUFVLENBQUN2QixXQUFELENBQTFCOztBQUVBLE1BQUksQ0FBQ3NCLE9BQUwsRUFBYztBQUNaLFVBQU0sSUFBSUUsS0FBSixDQUFVLDZDQUFWLENBQU47QUFDRDs7QUFFRCxTQUFPRixPQUFQO0FBQ0QiLCJmaWxlIjoiLi9zcmMvaG9va3MvYXV0aC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGFwaSBmcm9tICcuLi9zZXJ2aWNlcy9hcGknO1xuXG5pbnRlcmZhY2UgQXV0aFN0YXRlIHtcbiAgdG9rZW46IHN0cmluZztcbiAgdXNlcjogb2JqZWN0O1xufVxuXG5pbnRlcmZhY2UgQXV0aENvbnRleHREYXRhIHtcbiAgdXNlcjogb2JqZWN0O1xuICBzaWduSW4oY3JlZGVudGlhbHM6IFNpZ25JbkNyZWRlbnRpYWxzKTogUHJvbWlzZTx2b2lkPjtcbiAgc2lnbk91dCgpOiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgU2lnbkluQ3JlZGVudGlhbHMge1xuICBlbWFpbDogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xufVxuXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8QXV0aENvbnRleHREYXRhPih7fSBhcyBBdXRoQ29udGV4dERhdGEpO1xuXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8QXV0aFN0YXRlPigoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zdCB0b2tlbiA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQEdvQmFyYmVyOnRva2VuJyk7XG4gICAgICBjb25zdCB1c2VyID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdAR29CYXJiZXI6dXNlcicpO1xuXG4gICAgICBpZiAodG9rZW4gJiYgdXNlcikge1xuICAgICAgICByZXR1cm4geyB0b2tlbiwgdXNlcjogSlNPTi5wYXJzZSh1c2VyKSB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7fSBhcyBBdXRoU3RhdGU7XG4gIH0pXG5cbiAgY29uc3Qgc2lnbkluID0gdXNlQ2FsbGJhY2soYXN5bmMgKHsgZW1haWwsIHBhc3N3b3JkIH0pID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KCdzZXNzaW9ucycsIHtcbiAgICAgIGVtYWlsLFxuICAgICAgcGFzc3dvcmRcbiAgICB9KVxuXG4gICAgY29uc3QgeyB0b2tlbiwgdXNlciB9ID0gcmVzcG9uc2UuZGF0YTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdAR29CYXJiZXI6dG9rZW4nLCB0b2tlbik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0BHb0JhcmJlcjp1c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuXG4gICAgc2V0RGF0YSh7IHRva2VuLCB1c2VyIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgc2lnbk91dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnQEdvQmFyYmVyOnRva2VuJyk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ0BHb0JhcmJlcjp1c2VyJyk7XG5cbiAgICBzZXREYXRhKHt9IGFzIEF1dGhTdGF0ZSk7XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXI6IGRhdGEudXNlciwgc2lnbkluLCBzaWduT3V0IH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUF1dGgoKTogQXV0aENvbnRleHREYXRhIHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuXG4gIGlmICghY29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXNlQXV0aCBtdXN0IGJlIHVzZWQgd2l0aGluIGFuIEF1dGhQcm92aWRlcicpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/auth.tsx\n");

/***/ }),

/***/ "./src/pages/dashboard.tsx":
/*!*********************************!*\
  !*** ./src/pages/dashboard.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/auth */ \"./src/hooks/auth.tsx\");\n\nvar _jsxFileName = \"/home/lon1/Documents/scripts/www/GoBarber-2.0/web/src/pages/dashboard.tsx\";\n\n\n\n\nconst Dashboard = () => {\n  const {\n    user\n  } = (0,_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuth)();\n  const Router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    if (user === undefined) {\n      Router.push('/');\n    }\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: \"Dashboard\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9zcmMvcGFnZXMvZGFzaGJvYXJkLnRzeD85YjMxIl0sIm5hbWVzIjpbIkRhc2hib2FyZCIsInVzZXIiLCJ1c2VBdXRoIiwiUm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidW5kZWZpbmVkIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNQSxTQUFtQixHQUFHLE1BQU07QUFDaEMsUUFBTTtBQUFFQztBQUFGLE1BQVdDLG9EQUFPLEVBQXhCO0FBRUEsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUVBQyxrREFBUyxDQUFDLE1BQU07QUFDZCxRQUFJSixJQUFJLEtBQUtLLFNBQWIsRUFBd0I7QUFDdEJILFlBQU0sQ0FBQ0ksSUFBUCxDQUFZLEdBQVo7QUFDRDtBQUNGLEdBSlEsQ0FBVDtBQU1BLHNCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFHRCxDQWREOztBQWdCQSwrREFBZVAsU0FBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9kYXNoYm9hcmQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uL2hvb2tzL2F1dGgnO1xuXG5jb25zdCBEYXNoYm9hcmQ6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7IHVzZXIgfSA9IHVzZUF1dGgoKTtcblxuICBjb25zdCBSb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIFJvdXRlci5wdXNoKCcvJyk7XG4gICAgfVxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPHA+RGFzaGJvYXJkPC9wPlxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/dashboard.tsx\n");

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n  baseURL: 'http://localhost:3333'\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (api);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9zcmMvc2VydmljZXMvYXBpLnRzPzBlOWQiXSwibmFtZXMiOlsiYXBpIiwiYXhpb3MiLCJiYXNlVVJMIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUVBLE1BQU1BLEdBQUcsR0FBR0MsbURBQUEsQ0FBYTtBQUN2QkMsU0FBTyxFQUFFO0FBRGMsQ0FBYixDQUFaO0FBSUEsK0RBQWVGLEdBQWYiLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzMzMydcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGFwaTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/api.ts\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/dashboard.tsx"));
module.exports = __webpack_exports__;

})();