webpackHotUpdate_N_E("pages/backend_host_controller",{

/***/ "./services/apiservice.js":
/*!********************************!*\
  !*** ./services/apiservice.js ***!
  \********************************/
/*! exports provided: createProfile, loginRequest, Logout, submitContact, createTask, getTasks, removeTask, updateTaskStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createProfile\", function() { return createProfile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginRequest\", function() { return loginRequest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Logout\", function() { return Logout; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"submitContact\", function() { return submitContact; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTask\", function() { return createTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTasks\", function() { return getTasks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeTask\", function() { return removeTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateTaskStatus\", function() { return updateTaskStatus; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* harmony import */ var _restservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./restservice */ \"./services/restservice.js\");\n\n\n\n\n\n\nvar cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_3__[\"Cookies\"]();\nfunction createProfile(_x, _x2, _x3, _x4) {\n  return _createProfile.apply(this, arguments);\n}\n\nfunction _createProfile() {\n  _createProfile = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(firstname, lastname, email, password) {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            // Request data to post to createprofile route on rest api\n            fetch(_restservice__WEBPACK_IMPORTED_MODULE_5__[\"baseConfig\"].baseURL + '/users', {\n              method: 'POST',\n              headers: {\n                \"Content-type\": \"application/json\"\n              },\n              body: JSON.stringify({\n                \"firstName\": firstname,\n                \"lastName\": lastname,\n                \"email\": email,\n                \"password\": password\n              })\n            }).then(function (response) {\n              return response.json();\n            }).then(function (data) {\n              console.log('Request succeeded with JSON response', data);\n            })[\"catch\"](function (error) {\n              console.log('Request failed', error);\n            });\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _createProfile.apply(this, arguments);\n}\n\nfunction loginRequest(_x5, _x6) {\n  return _loginRequest.apply(this, arguments);\n}\n\nfunction _loginRequest() {\n  _loginRequest = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(email, password) {\n    var newLogin;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return fetch(_restservice__WEBPACK_IMPORTED_MODULE_5__[\"baseConfig\"].baseURL + '/auth', {\n              method: 'POST',\n              headers: {\n                \"Content-type\": \"application/json\"\n              },\n              body: JSON.stringify({\n                \"email\": email,\n                \"password\": password\n              })\n            }).then(function (response) {\n              return response.json();\n            }).then(function (data) {\n              cookies.set('accessToken', data.accessToken);\n              cookies.set('refreshToken', data.refreshToken);\n              var decoded = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(data.accessToken);\n              cookies.set('name', decoded.name);\n              cookies.set('email', decoded.email);\n              cookies.set('refreshKey', decoded.refreshKey);\n              cookies.set('permission_level', decoded.permissionLevel);\n              cookies.set('userId', decoded.userId);\n              next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push(\"/\");\n            })[\"catch\"](function (error) {\n              return error;\n            });\n\n          case 2:\n            newLogin = _context2.sent;\n\n            if (!newLogin) {\n              _context2.next = 5;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", \"Username/Password does not match our records!\");\n\n          case 5:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _loginRequest.apply(this, arguments);\n}\n\nfunction Logout() {\n  return _Logout.apply(this, arguments);\n}\n_c2 = Logout;\n\nfunction _Logout() {\n  _Logout = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            cookies.remove('accessToken');\n            cookies.remove('permission_level');\n            cookies.remove('refreshToken');\n            cookies.remove('name');\n            cookies.remove('email');\n            cookies.remove('refreshKey');\n            cookies.remove('userId');\n            _context3.next = 9;\n            return next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push(\"/login\");\n\n          case 9:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _Logout.apply(this, arguments);\n}\n\n_c = Logout;\nfunction submitContact(_x7, _x8, _x9, _x10) {\n  return _submitContact.apply(this, arguments);\n}\n\nfunction _submitContact() {\n  _submitContact = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(name, message, email, cellphone) {\n    var newfetch;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            _context4.next = 2;\n            return fetch(_restservice__WEBPACK_IMPORTED_MODULE_5__[\"baseConfig\"].baseURL + '/contact', {\n              method: 'POST',\n              headers: {\n                \"Content-type\": \"application/json\"\n              },\n              body: JSON.stringify({\n                \"name\": name,\n                \"message\": message,\n                \"cellphone\": cellphone,\n                \"email\": email\n              })\n            }).then(function (res) {\n              return res.status;\n            })[\"catch\"](function (error) {\n              console.log('Request failed', error);\n            });\n\n          case 2:\n            newfetch = _context4.sent;\n\n            if (!newfetch) {\n              _context4.next = 7;\n              break;\n            }\n\n            return _context4.abrupt(\"return\", newfetch);\n\n          case 7:\n            return _context4.abrupt(\"return\", 404);\n\n          case 8:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n  return _submitContact.apply(this, arguments);\n}\n\nfunction createTask(_x11, _x12) {\n  return _createTask.apply(this, arguments);\n}\n\nfunction _createTask() {\n  _createTask = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(objective, status) {\n    var getCookies, newTask;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            getCookies = cookies.getAll(); // New Login Data request\n\n            _context5.next = 3;\n            return fetch('http://localhost:3600/tasks', {\n              method: 'POST',\n              headers: {\n                \"Content-type\": \"application/json\",\n                \"Authorization\": \"Bearer \".concat(getCookies.accessToken)\n              },\n              body: JSON.stringify({\n                \"objective\": objective,\n                \"status\": status\n              })\n            }).then(function (response) {\n              return response.json();\n            })[\"catch\"](function (error) {\n              return error;\n            });\n\n          case 3:\n            newTask = _context5.sent;\n\n            if (!newTask) {\n              _context5.next = 6;\n              break;\n            }\n\n            return _context5.abrupt(\"return\", newTask);\n\n          case 6:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5);\n  }));\n  return _createTask.apply(this, arguments);\n}\n\nfunction getTasks(_x13, _x14) {\n  return _getTasks.apply(this, arguments);\n}\n\nfunction _getTasks() {\n  _getTasks = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(limit, token) {\n    var getCookies, newTask;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {\n      while (1) {\n        switch (_context6.prev = _context6.next) {\n          case 0:\n            getCookies = cookies.getAll(); // New Login Data request\n\n            _context6.next = 3;\n            return fetch('http://localhost:3600/tasks', {\n              method: 'GET',\n              headers: {\n                \"Content-type\": \"application/json\",\n                \"Authorization\": \"Bearer \".concat(getCookies.accessToken ? getCookies.accessToken : token)\n              },\n              query: JSON.stringify({\n                \"limit\": limit\n              })\n            }).then(function (response) {\n              if (response.status == 403) {\n                return 'Not Authorized';\n              }\n\n              return response.json();\n            })[\"catch\"](function (error) {\n              return error;\n            });\n\n          case 3:\n            newTask = _context6.sent;\n\n            if (!newTask) {\n              _context6.next = 6;\n              break;\n            }\n\n            return _context6.abrupt(\"return\", newTask);\n\n          case 6:\n          case \"end\":\n            return _context6.stop();\n        }\n      }\n    }, _callee6);\n  }));\n  return _getTasks.apply(this, arguments);\n}\n\nfunction removeTask(_x15) {\n  return _removeTask.apply(this, arguments);\n}\n\nfunction _removeTask() {\n  _removeTask = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(taskId) {\n    var getCookies, newTask;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {\n      while (1) {\n        switch (_context7.prev = _context7.next) {\n          case 0:\n            getCookies = cookies.getAll(); // New Login Data request\n\n            _context7.next = 3;\n            return fetch(\"http://localhost:3600/tasks/\".concat(taskId), {\n              method: 'DELETE',\n              headers: {\n                \"Authorization\": \"Bearer \".concat(getCookies.accessToken ? getCookies.accessToken : token)\n              }\n            }).then(function (response) {\n              return response.json();\n            })[\"catch\"](function (error) {\n              return error;\n            });\n\n          case 3:\n            newTask = _context7.sent;\n\n            if (!newTask) {\n              _context7.next = 6;\n              break;\n            }\n\n            return _context7.abrupt(\"return\", newTask);\n\n          case 6:\n          case \"end\":\n            return _context7.stop();\n        }\n      }\n    }, _callee7);\n  }));\n  return _removeTask.apply(this, arguments);\n}\n\nfunction updateTaskStatus(_x16, _x17) {\n  return _updateTaskStatus.apply(this, arguments);\n}\n\nfunction _updateTaskStatus() {\n  _updateTaskStatus = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(taskId, newstatus) {\n    var getCookies, newTask;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {\n      while (1) {\n        switch (_context8.prev = _context8.next) {\n          case 0:\n            getCookies = cookies.getAll(); // New Login Data request\n\n            _context8.next = 3;\n            return fetch(\"http://localhost:3600/tasks/\".concat(taskId), {\n              method: 'PATCH',\n              headers: {\n                \"Content-type\": \"application/json\",\n                \"Authorization\": \"Bearer \".concat(getCookies.accessToken ? getCookies.accessToken : token)\n              },\n              body: JSON.stringify({\n                \"status\": newstatus\n              })\n            }).then(function (response) {\n              return response.json();\n            })[\"catch\"](function (error) {\n              return error;\n            });\n\n          case 3:\n            newTask = _context8.sent;\n\n            if (!newTask) {\n              _context8.next = 6;\n              break;\n            }\n\n            return _context8.abrupt(\"return\", newTask);\n\n          case 6:\n          case \"end\":\n            return _context8.stop();\n        }\n      }\n    }, _callee8);\n  }));\n  return _updateTaskStatus.apply(this, arguments);\n}\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Logout\");\n$RefreshReg$(_c2, \"Logout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvYXBpc2VydmljZS5qcz8yMzQzIl0sIm5hbWVzIjpbImNvb2tpZXMiLCJDb29raWVzIiwiY3JlYXRlUHJvZmlsZSIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImZldGNoIiwiYmFzZUNvbmZpZyIsImJhc2VVUkwiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImxvZ2luUmVxdWVzdCIsInNldCIsImFjY2Vzc1Rva2VuIiwicmVmcmVzaFRva2VuIiwiZGVjb2RlZCIsImp3dF9kZWNvZGUiLCJuYW1lIiwicmVmcmVzaEtleSIsInBlcm1pc3Npb25MZXZlbCIsInVzZXJJZCIsIlJvdXRlciIsInB1c2giLCJuZXdMb2dpbiIsIkxvZ291dCIsInJlbW92ZSIsInN1Ym1pdENvbnRhY3QiLCJtZXNzYWdlIiwiY2VsbHBob25lIiwicmVzIiwic3RhdHVzIiwibmV3ZmV0Y2giLCJjcmVhdGVUYXNrIiwib2JqZWN0aXZlIiwiZ2V0Q29va2llcyIsImdldEFsbCIsIm5ld1Rhc2siLCJnZXRUYXNrcyIsImxpbWl0IiwidG9rZW4iLCJxdWVyeSIsInJlbW92ZVRhc2siLCJ0YXNrSWQiLCJ1cGRhdGVUYXNrU3RhdHVzIiwibmV3c3RhdHVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUcsSUFBSUMsb0RBQUosRUFBaEI7QUFFTyxTQUFlQyxhQUF0QjtBQUFBO0FBQUE7OztvTUFBTyxpQkFBNkJDLFNBQTdCLEVBQXdDQyxRQUF4QyxFQUFrREMsS0FBbEQsRUFBeURDLFFBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSDtBQUNBQyxpQkFBSyxDQUFDQyx1REFBVSxDQUFDQyxP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Z0I7QUFDbkIscUJBQU9BLEtBQVA7QUFDSCxhQVhxQixDQUpuQjs7QUFBQTtBQUlHMEIsbUJBSkg7O0FBQUEsaUJBZ0JBQSxPQWhCQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSw4Q0FpQlFBLE9BakJSOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFxQkEsU0FBZU8sZ0JBQXRCO0FBQUE7QUFBQTs7O3VNQUFPLGtCQUFnQ0QsTUFBaEMsRUFBd0NFLFNBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVHVixzQkFGSCxHQUVnQjdDLE9BQU8sQ0FBQzhDLE1BQVIsRUFGaEIsRUFHSDs7QUFIRztBQUFBLG1CQUltQnZDLEtBQUssdUNBQWdDOEMsTUFBaEMsR0FBMEM7QUFDakUzQyxvQkFBTSxFQUFFLE9BRHlEO0FBRWpFQyxxQkFBTyxFQUFFO0FBQ0wsZ0NBQWdCLGtCQURYO0FBRUwsa0RBQTJCa0MsVUFBVSxDQUFDckIsV0FBWCxHQUF5QnFCLFVBQVUsQ0FBQ3JCLFdBQXBDLEdBQWlEMEIsS0FBNUU7QUFGSyxlQUZ3RDtBQU1qRXRDLGtCQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ2pCLDBCQUFVeUM7QUFETyxlQUFmO0FBTjJELGFBQTFDLENBQUwsQ0FVckJ4QyxJQVZxQixDQVVoQixVQUFTQyxRQUFULEVBQW1CO0FBQ3JCLHFCQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNILGFBWnFCLFdBYWYsVUFBU0ksS0FBVCxFQUFnQjtBQUNuQixxQkFBT0EsS0FBUDtBQUNILGFBZnFCLENBSm5COztBQUFBO0FBSUcwQixtQkFKSDs7QUFBQSxpQkFvQkFBLE9BcEJBO0FBQUE7QUFBQTtBQUFBOztBQUFBLDhDQXFCUUEsT0FyQlI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsImZpbGUiOiIuL3NlcnZpY2VzL2FwaXNlcnZpY2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IENvb2tpZXMgfSBmcm9tICdyZWFjdC1jb29raWUnO1xuaW1wb3J0IGp3dF9kZWNvZGUgZnJvbSAnand0LWRlY29kZSc7XG5pbXBvcnQgeyBiYXNlQ29uZmlnIH0gZnJvbSAnLi9yZXN0c2VydmljZSc7XG5cbmNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHJvZmlsZShmaXJzdG5hbWUsIGxhc3RuYW1lLCBlbWFpbCwgcGFzc3dvcmQpIHtcbiAgICAvLyBSZXF1ZXN0IGRhdGEgdG8gcG9zdCB0byBjcmVhdGVwcm9maWxlIHJvdXRlIG9uIHJlc3QgYXBpXG4gICAgZmV0Y2goYmFzZUNvbmZpZy5iYXNlVVJMICsgJy91c2VycycsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIFwiZmlyc3ROYW1lXCI6IGZpcnN0bmFtZSxcbiAgICAgICAgICAgIFwibGFzdE5hbWVcIjogbGFzdG5hbWUsXG4gICAgICAgICAgICBcImVtYWlsXCI6IGVtYWlsLFxuICAgICAgICAgICAgXCJwYXNzd29yZFwiOiBwYXNzd29yZFxuICAgICAgICB9KVxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1JlcXVlc3Qgc3VjY2VlZGVkIHdpdGggSlNPTiByZXNwb25zZScsIGRhdGEpO1xuICAgIH0pXG4gICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXF1ZXN0IGZhaWxlZCcsIGVycm9yKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luUmVxdWVzdChlbWFpbCwgcGFzc3dvcmQpIHtcbiAgICAvLyBOZXcgTG9naW4gRGF0YSByZXF1ZXN0XG4gICAgY29uc3QgbmV3TG9naW4gPSBhd2FpdCBmZXRjaChiYXNlQ29uZmlnLmJhc2VVUkwgKyAnL2F1dGgnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBcImVtYWlsXCI6IGVtYWlsLFxuICAgICAgICAgICAgXCJwYXNzd29yZFwiOiBwYXNzd29yZFxuICAgICAgICB9KVxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgY29va2llcy5zZXQoJ2FjY2Vzc1Rva2VuJywgZGF0YS5hY2Nlc3NUb2tlbik7XG4gICAgICAgIGNvb2tpZXMuc2V0KCdyZWZyZXNoVG9rZW4nLCBkYXRhLnJlZnJlc2hUb2tlbik7XG4gICAgICAgIGNvbnN0IGRlY29kZWQgPSBqd3RfZGVjb2RlKGRhdGEuYWNjZXNzVG9rZW4pO1xuICAgICAgICBjb29raWVzLnNldCgnbmFtZScsIGRlY29kZWQubmFtZSlcbiAgICAgICAgY29va2llcy5zZXQoJ2VtYWlsJywgZGVjb2RlZC5lbWFpbClcbiAgICAgICAgY29va2llcy5zZXQoJ3JlZnJlc2hLZXknLCBkZWNvZGVkLnJlZnJlc2hLZXkpXG4gICAgICAgIGNvb2tpZXMuc2V0KCdwZXJtaXNzaW9uX2xldmVsJywgZGVjb2RlZC5wZXJtaXNzaW9uTGV2ZWwpXG4gICAgICAgIGNvb2tpZXMuc2V0KCd1c2VySWQnLCBkZWNvZGVkLnVzZXJJZClcbiAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpXG4gICAgfSlcbiAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGVycm9yXG4gICAgfSk7XG4gICAgaWYobmV3TG9naW4pIHtcbiAgICAgICAgcmV0dXJuIFwiVXNlcm5hbWUvUGFzc3dvcmQgZG9lcyBub3QgbWF0Y2ggb3VyIHJlY29yZHMhXCJcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBMb2dvdXQoKSB7XG4gICAgY29va2llcy5yZW1vdmUoJ2FjY2Vzc1Rva2VuJyk7XG4gICAgY29va2llcy5yZW1vdmUoJ3Blcm1pc3Npb25fbGV2ZWwnKVxuICAgIGNvb2tpZXMucmVtb3ZlKCdyZWZyZXNoVG9rZW4nKTtcbiAgICBjb29raWVzLnJlbW92ZSgnbmFtZScpXG4gICAgY29va2llcy5yZW1vdmUoJ2VtYWlsJylcbiAgICBjb29raWVzLnJlbW92ZSgncmVmcmVzaEtleScpXG4gICAgY29va2llcy5yZW1vdmUoJ3VzZXJJZCcpXG4gICAgYXdhaXQgUm91dGVyLnB1c2goXCIvbG9naW5cIik7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdWJtaXRDb250YWN0KG5hbWUsIG1lc3NhZ2UsIGVtYWlsLCBjZWxscGhvbmUpIHtcbiAgICAvLyBSZXF1ZXN0IGRhdGEgdG8gcG9zdCB0byBjcmVhdGVwcm9maWxlIHJvdXRlIG9uIHJlc3QgYXBpXG4gICAgY29uc3QgbmV3ZmV0Y2ggPSBhd2FpdCBmZXRjaChiYXNlQ29uZmlnLmJhc2VVUkwgKyAnL2NvbnRhY3QnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBcIm5hbWVcIjogbmFtZSxcbiAgICAgICAgICAgIFwibWVzc2FnZVwiOiBtZXNzYWdlLFxuICAgICAgICAgICAgXCJjZWxscGhvbmVcIjogY2VsbHBob25lLFxuICAgICAgICAgICAgXCJlbWFpbFwiOiBlbWFpbFxuICAgICAgICB9KVxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzXG4gICAgfSlcbiAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1JlcXVlc3QgZmFpbGVkJywgZXJyb3IpO1xuICAgIH0pO1xuXG4gICAgaWYobmV3ZmV0Y2gpIHtcbiAgICAgICAgcmV0dXJuIG5ld2ZldGNoXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDQwNFxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVRhc2sob2JqZWN0aXZlLCBzdGF0dXMpIHtcbiAgICBcbiAgICBjb25zdCBnZXRDb29raWVzID0gY29va2llcy5nZXRBbGwoKVxuICAgIC8vIE5ldyBMb2dpbiBEYXRhIHJlcXVlc3RcbiAgICBjb25zdCBuZXdUYXNrID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzYwMC90YXNrcycsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHtnZXRDb29raWVzLmFjY2Vzc1Rva2VufWBcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgXCJvYmplY3RpdmVcIjogb2JqZWN0aXZlLFxuICAgICAgICAgICAgXCJzdGF0dXNcIjogc3RhdHVzXG4gICAgICAgIH0pXG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pXG4gICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBlcnJvclxuICAgIH0pO1xuICAgIGlmKG5ld1Rhc2spIHtcbiAgICAgICAgcmV0dXJuIG5ld1Rhc2tcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUYXNrcyhsaW1pdCwgdG9rZW4pIHtcbiAgICBcbiAgICBjb25zdCBnZXRDb29raWVzID0gY29va2llcy5nZXRBbGwoKVxuICAgIC8vIE5ldyBMb2dpbiBEYXRhIHJlcXVlc3RcbiAgICBjb25zdCBuZXdUYXNrID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzYwMC90YXNrcycsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYEJlYXJlciAke2dldENvb2tpZXMuYWNjZXNzVG9rZW4gPyBnZXRDb29raWVzLmFjY2Vzc1Rva2VuOiB0b2tlbn1gXG4gICAgICAgIH0sXG4gICAgICAgIHF1ZXJ5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBcImxpbWl0XCI6IGxpbWl0XG4gICAgICAgIH0pXG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT0gNDAzKSB7XG4gICAgICAgICAgICByZXR1cm4gJ05vdCBBdXRob3JpemVkJ1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSlcbiAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGVycm9yXG4gICAgfSk7XG4gICAgaWYobmV3VGFzaykge1xuICAgICAgICByZXR1cm4gbmV3VGFza1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbW92ZVRhc2sodGFza0lkKSB7XG4gICAgXG4gICAgY29uc3QgZ2V0Q29va2llcyA9IGNvb2tpZXMuZ2V0QWxsKClcbiAgICAvLyBOZXcgTG9naW4gRGF0YSByZXF1ZXN0XG4gICAgY29uc3QgbmV3VGFzayA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjM2MDAvdGFza3MvJHt0YXNrSWR9YCwge1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYEJlYXJlciAke2dldENvb2tpZXMuYWNjZXNzVG9rZW4gPyBnZXRDb29raWVzLmFjY2Vzc1Rva2VuOiB0b2tlbn1gXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSlcbiAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGVycm9yXG4gICAgfSk7XG4gICAgaWYobmV3VGFzaykge1xuICAgICAgICByZXR1cm4gbmV3VGFza1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVRhc2tTdGF0dXModGFza0lkLCBuZXdzdGF0dXMpIHtcbiAgICBcbiAgICBjb25zdCBnZXRDb29raWVzID0gY29va2llcy5nZXRBbGwoKVxuICAgIC8vIE5ldyBMb2dpbiBEYXRhIHJlcXVlc3RcbiAgICBjb25zdCBuZXdUYXNrID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzYwMC90YXNrcy8ke3Rhc2tJZH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYEJlYXJlciAke2dldENvb2tpZXMuYWNjZXNzVG9rZW4gPyBnZXRDb29raWVzLmFjY2Vzc1Rva2VuOiB0b2tlbn1gXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIFwic3RhdHVzXCI6IG5ld3N0YXR1c1xuICAgICAgICB9KVxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KVxuICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICByZXR1cm4gZXJyb3JcbiAgICB9KTtcbiAgICBpZihuZXdUYXNrKSB7XG4gICAgICAgIHJldHVybiBuZXdUYXNrXG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/apiservice.js\n");

/***/ })

})