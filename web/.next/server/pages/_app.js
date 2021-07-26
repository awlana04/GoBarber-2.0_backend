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

/***/ "./src/hooks/auth.ts":
/*!***************************!*\
  !*** ./src/hooks/auth.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client/link/error */ \"@apollo/client/link/error\");\n/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-link-context */ \"apollo-link-context\");\n/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_link_context__WEBPACK_IMPORTED_MODULE_2__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst httpLink = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.HttpLink({\n  uri: \"http://localhost:4000\"\n});\nconst errorLink = (0,_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_1__.onError)(({\n  graphQLErrors,\n  networkError\n}) => {\n  if (graphQLErrors) graphQLErrors.forEach(({\n    message,\n    locations,\n    path\n  }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));\n  if (networkError) console.log(`[Network error]: ${networkError}`);\n});\nconst authLink = (0,apollo_link_context__WEBPACK_IMPORTED_MODULE_2__.setContext)(async (request, {\n  headers\n}) => {\n  const token = localStorage.getItem('token');\n  return _objectSpread(_objectSpread({}, headers), {}, {\n    headers: {\n      Authorization: token ? `Bearer ${token}` : null\n    }\n  });\n});\nconst link = authLink.concat(httpLink);\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n  link: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.from)([errorLink, link]),\n  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (client);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9zcmMvaG9va3MvYXV0aC50cz9mMjYxIl0sIm5hbWVzIjpbImh0dHBMaW5rIiwiSHR0cExpbmsiLCJ1cmkiLCJlcnJvckxpbmsiLCJvbkVycm9yIiwiZ3JhcGhRTEVycm9ycyIsIm5ldHdvcmtFcnJvciIsImZvckVhY2giLCJtZXNzYWdlIiwibG9jYXRpb25zIiwicGF0aCIsImNvbnNvbGUiLCJsb2ciLCJhdXRoTGluayIsInNldENvbnRleHQiLCJyZXF1ZXN0IiwiaGVhZGVycyIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkF1dGhvcml6YXRpb24iLCJsaW5rIiwiY29uY2F0IiwiY2xpZW50IiwiQXBvbGxvQ2xpZW50IiwiZnJvbSIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFFBQVEsR0FBRyxJQUFJQyxvREFBSixDQUFhO0FBQUVDLEtBQUcsRUFBRTtBQUFQLENBQWIsQ0FBakI7QUFFQSxNQUFNQyxTQUFTLEdBQUdDLGtFQUFPLENBQUMsQ0FBQztBQUFFQyxlQUFGO0FBQWlCQztBQUFqQixDQUFELEtBQXFDO0FBQzdELE1BQUlELGFBQUosRUFDRUEsYUFBYSxDQUFDRSxPQUFkLENBQXNCLENBQUM7QUFBRUMsV0FBRjtBQUFXQyxhQUFYO0FBQXNCQztBQUF0QixHQUFELEtBQ3BCQyxPQUFPLENBQUNDLEdBQVIsQ0FDRyw2QkFBNEJKLE9BQVEsZUFBY0MsU0FBVSxXQUFVQyxJQUFLLEVBRDlFLENBREY7QUFNRixNQUFJSixZQUFKLEVBQWtCSyxPQUFPLENBQUNDLEdBQVIsQ0FBYSxvQkFBbUJOLFlBQWEsRUFBN0M7QUFDbkIsQ0FUd0IsQ0FBekI7QUFXQSxNQUFNTyxRQUFRLEdBQUdDLCtEQUFVLENBQUMsT0FBT0MsT0FBUCxFQUFnQjtBQUFFQztBQUFGLENBQWhCLEtBQWdDO0FBQzFELFFBQU1DLEtBQUssR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBQWQ7QUFFQSx5Q0FDS0gsT0FETDtBQUVFQSxXQUFPLEVBQUU7QUFDUEksbUJBQWEsRUFBRUgsS0FBSyxHQUFJLFVBQVNBLEtBQU0sRUFBbkIsR0FBdUI7QUFEcEM7QUFGWDtBQU1ELENBVDBCLENBQTNCO0FBV0EsTUFBTUksSUFBSSxHQUFHUixRQUFRLENBQUNTLE1BQVQsQ0FBZ0J0QixRQUFoQixDQUFiO0FBRUEsTUFBTXVCLE1BQU0sR0FBRyxJQUFJQyx3REFBSixDQUFpQjtBQUM5QkgsTUFBSSxFQUFFSSxvREFBSSxDQUFDLENBQUN0QixTQUFELEVBQVlrQixJQUFaLENBQUQsQ0FEb0I7QUFFOUJLLE9BQUssRUFBRSxJQUFJQyx5REFBSjtBQUZ1QixDQUFqQixDQUFmO0FBS0EsK0RBQWVKLE1BQWYiLCJmaWxlIjoiLi9zcmMvaG9va3MvYXV0aC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZSwgSHR0cExpbmssIGZyb20gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgeyBvbkVycm9yIH0gZnJvbSAnQGFwb2xsby9jbGllbnQvbGluay9lcnJvcic7XG5pbXBvcnQgeyBzZXRDb250ZXh0IH0gZnJvbSAnYXBvbGxvLWxpbmstY29udGV4dCc7XG5cbmNvbnN0IGh0dHBMaW5rID0gbmV3IEh0dHBMaW5rKHsgdXJpOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMFwiIH0pO1xuXG5jb25zdCBlcnJvckxpbmsgPSBvbkVycm9yKCh7IGdyYXBoUUxFcnJvcnMsIG5ldHdvcmtFcnJvciB9KSA9PiB7XG4gIGlmIChncmFwaFFMRXJyb3JzKVxuICAgIGdyYXBoUUxFcnJvcnMuZm9yRWFjaCgoeyBtZXNzYWdlLCBsb2NhdGlvbnMsIHBhdGggfSkgPT5cbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBgW0dyYXBoUUwgZXJyb3JdOiBNZXNzYWdlOiAke21lc3NhZ2V9LCBMb2NhdGlvbjogJHtsb2NhdGlvbnN9LCBQYXRoOiAke3BhdGh9YCxcbiAgICAgICksXG4gICAgKTtcblxuICBpZiAobmV0d29ya0Vycm9yKSBjb25zb2xlLmxvZyhgW05ldHdvcmsgZXJyb3JdOiAke25ldHdvcmtFcnJvcn1gKTtcbn0pO1xuXG5jb25zdCBhdXRoTGluayA9IHNldENvbnRleHQoYXN5bmMgKHJlcXVlc3QsIHsgaGVhZGVycyB9KSA9PiB7XG4gIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5oZWFkZXJzLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIEF1dGhvcml6YXRpb246IHRva2VuID8gYEJlYXJlciAke3Rva2VufWAgOiBudWxsLFxuICAgIH0sXG4gIH07XG59KTtcblxuY29uc3QgbGluayA9IGF1dGhMaW5rLmNvbmNhdChodHRwTGluayBhcyBhbnkpO1xuXG5jb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgbGluazogZnJvbShbZXJyb3JMaW5rLCBsaW5rIGFzIGFueV0pLFxuICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGllbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/auth.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hooks_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/auth */ \"./src/hooks/auth.ts\");\n/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/global */ \"./src/styles/global.tsx\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/theme */ \"./src/styles/theme.tsx\");\n\n\nvar _jsxFileName = \"/home/lon1/Documents/scripts/www/GoBarber-2.0/web/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloProvider, {\n    client: _hooks_auth__WEBPACK_IMPORTED_MODULE_4__.default,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n      theme: _styles_theme__WEBPACK_IMPORTED_MODULE_6__.default,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, undefined)\n}, void 0, false);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNsaWVudCIsInRoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUVBLE1BQU1BLEtBQXlCLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBRCxrQkFDaEM7QUFBQSx5QkFDRSw4REFBQywwREFBRDtBQUFnQixVQUFNLEVBQUVDLGdEQUF4QjtBQUFBLDJCQUNFLDhEQUFDLDREQUFEO0FBQWUsV0FBSyxFQUFFQyxrREFBdEI7QUFBQSw4QkFDRSw4REFBQyxTQUFELG9CQUFlRixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSw4REFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixpQkFERjs7QUFXQSwrREFBZUYsS0FBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9fYXBwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IGNsaWVudCBmcm9tICcuLi9ob29rcy9hdXRoJztcblxuaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gJy4uL3N0eWxlcy9nbG9iYWwnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSc7XG5cbmNvbnN0IE15QXBwOiBSZWFjdC5GQzxBcHBQcm9wcz4gPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiAoXG4gIDw+XG4gICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgPC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

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

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "@apollo/client/link/error":
/*!********************************************!*\
  !*** external "@apollo/client/link/error" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client/link/error");;

/***/ }),

/***/ "apollo-link-context":
/*!**************************************!*\
  !*** external "apollo-link-context" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("apollo-link-context");;

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