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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client/link/error */ \"@apollo/client/link/error\");\n/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-link-context */ \"apollo-link-context\");\n/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_link_context__WEBPACK_IMPORTED_MODULE_2__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst httpLink = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.HttpLink({\n  uri: 'http://localhost:4000'\n});\nconst errorLink = (0,_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_1__.onError)(({\n  graphQLErrors,\n  networkError\n}) => {\n  if (graphQLErrors) {\n    graphQLErrors.forEach(({\n      message,\n      locations,\n      path\n    }) => {\n      console.log(`[GraphQLError]: Message: ${message}, location: ${locations}, path: ${path}`);\n    });\n  }\n\n  if (networkError) {\n    console.log(`[NetworkError]: ${networkError}`);\n  }\n});\nconst authLink = (0,apollo_link_context__WEBPACK_IMPORTED_MODULE_2__.setContext)(async (request, {\n  headers\n}) => {\n  const token = localStorage.getItem('token');\n  return _objectSpread(_objectSpread({}, headers), {}, {\n    headers: {\n      Authorization: token ? `Bearer ${token}` : null\n    }\n  });\n});\nconst link = authLink.concat(httpLink);\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n  link: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.from)([errorLink, link]),\n  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (client);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9zcmMvaG9va3MvYXV0aC50cz9mMjYxIl0sIm5hbWVzIjpbImh0dHBMaW5rIiwiSHR0cExpbmsiLCJ1cmkiLCJlcnJvckxpbmsiLCJvbkVycm9yIiwiZ3JhcGhRTEVycm9ycyIsIm5ldHdvcmtFcnJvciIsImZvckVhY2giLCJtZXNzYWdlIiwibG9jYXRpb25zIiwicGF0aCIsImNvbnNvbGUiLCJsb2ciLCJhdXRoTGluayIsInNldENvbnRleHQiLCJyZXF1ZXN0IiwiaGVhZGVycyIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkF1dGhvcml6YXRpb24iLCJsaW5rIiwiY29uY2F0IiwiY2xpZW50IiwiQXBvbGxvQ2xpZW50IiwiZnJvbSIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFFBQVEsR0FBRyxJQUFJQyxvREFBSixDQUFhO0FBQUVDLEtBQUcsRUFBRTtBQUFQLENBQWIsQ0FBakI7QUFFQSxNQUFNQyxTQUFTLEdBQUdDLGtFQUFPLENBQUMsQ0FBQztBQUFFQyxlQUFGO0FBQWlCQztBQUFqQixDQUFELEtBQXFDO0FBQzdELE1BQUlELGFBQUosRUFBbUI7QUFDakJBLGlCQUFhLENBQUNFLE9BQWQsQ0FBc0IsQ0FBQztBQUFFQyxhQUFGO0FBQVdDLGVBQVg7QUFBc0JDO0FBQXRCLEtBQUQsS0FBa0M7QUFDdERDLGFBQU8sQ0FBQ0MsR0FBUixDQUNHLDRCQUEyQkosT0FBUSxlQUFjQyxTQUFVLFdBQVVDLElBQUssRUFEN0U7QUFHRCxLQUpEO0FBS0Q7O0FBRUQsTUFBSUosWUFBSixFQUFrQjtBQUNoQkssV0FBTyxDQUFDQyxHQUFSLENBQWEsbUJBQWtCTixZQUFhLEVBQTVDO0FBQ0Q7QUFDRixDQVp3QixDQUF6QjtBQWNBLE1BQU1PLFFBQVEsR0FBR0MsK0RBQVUsQ0FBQyxPQUFPQyxPQUFQLEVBQWdCO0FBQUVDO0FBQUYsQ0FBaEIsS0FBZ0M7QUFDMUQsUUFBTUMsS0FBSyxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FBZDtBQUVBLHlDQUNLSCxPQURMO0FBRUVBLFdBQU8sRUFBRTtBQUNQSSxtQkFBYSxFQUFFSCxLQUFLLEdBQUksVUFBU0EsS0FBTSxFQUFuQixHQUF1QjtBQURwQztBQUZYO0FBTUQsQ0FUMEIsQ0FBM0I7QUFXQSxNQUFNSSxJQUFJLEdBQUdSLFFBQVEsQ0FBQ1MsTUFBVCxDQUFnQnRCLFFBQWhCLENBQWI7QUFFQSxNQUFNdUIsTUFBTSxHQUFHLElBQUlDLHdEQUFKLENBQWlCO0FBQzlCSCxNQUFJLEVBQUVJLG9EQUFJLENBQUMsQ0FBQ3RCLFNBQUQsRUFBWWtCLElBQVosQ0FBRCxDQURvQjtBQUU5QkssT0FBSyxFQUFFLElBQUlDLHlEQUFKO0FBRnVCLENBQWpCLENBQWY7QUFLQSwrREFBZUosTUFBZiIsImZpbGUiOiIuL3NyYy9ob29rcy9hdXRoLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBJbk1lbW9yeUNhY2hlLCBIdHRwTGluaywgZnJvbSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCB7IG9uRXJyb3IgfSBmcm9tICdAYXBvbGxvL2NsaWVudC9saW5rL2Vycm9yJztcbmltcG9ydCB7IHNldENvbnRleHQgfSBmcm9tICdhcG9sbG8tbGluay1jb250ZXh0JztcblxuY29uc3QgaHR0cExpbmsgPSBuZXcgSHR0cExpbmsoeyB1cmk6ICdodHRwOi8vbG9jYWxob3N0OjQwMDAnIH0pO1xuXG5jb25zdCBlcnJvckxpbmsgPSBvbkVycm9yKCh7IGdyYXBoUUxFcnJvcnMsIG5ldHdvcmtFcnJvciB9KSA9PiB7XG4gIGlmIChncmFwaFFMRXJyb3JzKSB7XG4gICAgZ3JhcGhRTEVycm9ycy5mb3JFYWNoKCh7IG1lc3NhZ2UsIGxvY2F0aW9ucywgcGF0aCB9KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgYFtHcmFwaFFMRXJyb3JdOiBNZXNzYWdlOiAke21lc3NhZ2V9LCBsb2NhdGlvbjogJHtsb2NhdGlvbnN9LCBwYXRoOiAke3BhdGh9YFxuICAgICAgKTtcbiAgICB9KVxuICB9XG5cbiAgaWYgKG5ldHdvcmtFcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGBbTmV0d29ya0Vycm9yXTogJHtuZXR3b3JrRXJyb3J9YCk7XG4gIH1cbn0pXG5cbmNvbnN0IGF1dGhMaW5rID0gc2V0Q29udGV4dChhc3luYyAocmVxdWVzdCwgeyBoZWFkZXJzIH0pID0+IHtcbiAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcblxuICByZXR1cm4ge1xuICAgIC4uLmhlYWRlcnMsXG4gICAgaGVhZGVyczoge1xuICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW4gPyBgQmVhcmVyICR7dG9rZW59YCA6IG51bGwsXG4gICAgfVxuICB9XG59KVxuXG5jb25zdCBsaW5rID0gYXV0aExpbmsuY29uY2F0KGh0dHBMaW5rIGFzIGFueSk7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICBsaW5rOiBmcm9tKFtlcnJvckxpbmssIGxpbmsgYXMgYW55XSksXG4gIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxufSlcblxuZXhwb3J0IGRlZmF1bHQgY2xpZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/auth.ts\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    margin-top: 15%;\n\n    font: 400 16px 'Roboto Slab', sans-serif;\n\n    display: flex;\n    justify-content: center;\n  }\n\n  *, button, input {\n    font-family: 'Roboto Slab', sans-serif;\n\n    border: 0;\n    outline: 0;\n  }\n\n  button {\n    cursor: pointer;\n  }\n\n  a {\n    color: ${({\n  theme\n}) => theme.fonts.dark};\n    font-size: 0.8rem;\n    font-weight: 700;\n\n    cursor: pointer;\n    text-align: center;\n    text-decoration: none;\n\n    display: flex;\n    align-items: center;\n\n    &:hover {\n    text-decoration: underline;\n    }\n  }\n`);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9zcmMvc3R5bGVzL2dsb2JhbC50c3g/OWM5MCJdLCJuYW1lcyI6WyJjcmVhdGVHbG9iYWxTdHlsZSIsInRoZW1lIiwiZm9udHMiLCJkYXJrIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUVBLCtEQUFlQSxnRUFBa0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsSUFBSztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0EzQ0EiLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2dsb2JhbC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlR2xvYmFsU3R5bGVgXG4gICoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICBib2R5IHtcbiAgICBtYXJnaW4tdG9wOiAxNSU7XG5cbiAgICBmb250OiA0MDAgMTZweCAnUm9ib3RvIFNsYWInLCBzYW5zLXNlcmlmO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gICosIGJ1dHRvbiwgaW5wdXQge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzYW5zLXNlcmlmO1xuXG4gICAgYm9yZGVyOiAwO1xuICAgIG91dGxpbmU6IDA7XG4gIH1cblxuICBidXR0b24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIGEge1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRzLmRhcmt9O1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG5cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICY6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cbiAgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/global.tsx\n");

/***/ }),

/***/ "./src/styles/theme.tsx":
/*!******************************!*\
  !*** ./src/styles/theme.tsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst theme = {\n  colors: {\n    background: '#F2F2F2'\n  },\n  elements: {\n    border: '#9F9F9F',\n    borderFocus: '#E0AAFF',\n    buttonDisabled: '#7D8597'\n  },\n  fonts: {\n    dark: '#353535',\n    white: '#ffffff',\n    graySemiLight: '#595959',\n    grayLight: '#7F7F7F',\n    placeholder: '#9F9F9F'\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9zcmMvc3R5bGVzL3RoZW1lLnRzeD82N2EyIl0sIm5hbWVzIjpbInRoZW1lIiwiY29sb3JzIiwiYmFja2dyb3VuZCIsImVsZW1lbnRzIiwiYm9yZGVyIiwiYm9yZGVyRm9jdXMiLCJidXR0b25EaXNhYmxlZCIsImZvbnRzIiwiZGFyayIsIndoaXRlIiwiZ3JheVNlbWlMaWdodCIsImdyYXlMaWdodCIsInBsYWNlaG9sZGVyIl0sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsS0FBSyxHQUFHO0FBQ1pDLFFBQU0sRUFBRTtBQUNOQyxjQUFVLEVBQUU7QUFETixHQURJO0FBSVpDLFVBQVEsRUFBRTtBQUNSQyxVQUFNLEVBQUUsU0FEQTtBQUVSQyxlQUFXLEVBQUUsU0FGTDtBQUdSQyxrQkFBYyxFQUFFO0FBSFIsR0FKRTtBQVNaQyxPQUFLLEVBQUU7QUFDTEMsUUFBSSxFQUFFLFNBREQ7QUFFTEMsU0FBSyxFQUFFLFNBRkY7QUFHTEMsaUJBQWEsRUFBRSxTQUhWO0FBSUxDLGFBQVMsRUFBRSxTQUpOO0FBS0xDLGVBQVcsRUFBRTtBQUxSO0FBVEssQ0FBZDtBQWtCQSwrREFBZVosS0FBZiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvdGhlbWUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGhlbWUgPSB7XG4gIGNvbG9yczoge1xuICAgIGJhY2tncm91bmQ6ICcjRjJGMkYyJyxcbiAgfSxcbiAgZWxlbWVudHM6IHtcbiAgICBib3JkZXI6ICcjOUY5RjlGJyxcbiAgICBib3JkZXJGb2N1czogJyNFMEFBRkYnLFxuICAgIGJ1dHRvbkRpc2FibGVkOiAnIzdEODU5NycsXG4gIH0sXG4gIGZvbnRzOiB7XG4gICAgZGFyazogJyMzNTM1MzUnLFxuICAgIHdoaXRlOiAnI2ZmZmZmZicsXG4gICAgZ3JheVNlbWlMaWdodDogJyM1OTU5NTknLFxuICAgIGdyYXlMaWdodDogJyM3RjdGN0YnLFxuICAgIHBsYWNlaG9sZGVyOiAnIzlGOUY5RicsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/theme.tsx\n");

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