webpackHotUpdate_N_E("pages/posts/[id]",{

/***/ "./services/projectservice.js":
/*!************************************!*\
  !*** ./services/projectservice.js ***!
  \************************************/
/*! exports provided: createProject, getProjects, getProjectById, removeProject, updateTaskStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createProject\", function() { return createProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProjects\", function() { return getProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProjectById\", function() { return getProjectById; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeProject\", function() { return removeProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateTaskStatus\", function() { return updateTaskStatus; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var _restservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./restservice */ \"./services/restservice.js\");\n\n\n\n\nvar cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_2__[\"Cookies\"]();\nfunction createProject(_x, _x2, _x3, _x4) {\n  return _createProject.apply(this, arguments);\n}\n\nfunction _createProject() {\n  _createProject = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(title, body, tags, images) {\n    var getCookies, newProject;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            getCookies = cookies.getAll(); // New Login Data request\n\n            _context.next = 3;\n            return fetch(_restservice__WEBPACK_IMPORTED_MODULE_3__[\"baseConfig\"].baseURL + '/projects', {\n              method: 'POST',\n              headers: {\n                \"Content-type\": \"application/json\",\n                \"Authorization\": \"Bearer \".concat(getCookies.accessToken)\n              },\n              body: JSON.stringify({\n                \"title\": title,\n                \"body\": body,\n                \"tags\": tags,\n                \"images\": images\n              })\n            }).then(function (response) {\n              return response.json();\n            })[\"catch\"](function (error) {\n              return error;\n            });\n\n          case 3:\n            newProject = _context.sent;\n\n            if (!newProject) {\n              _context.next = 6;\n              break;\n            }\n\n            return _context.abrupt(\"return\", newProject);\n\n          case 6:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _createProject.apply(this, arguments);\n}\n\nfunction getProjects(_x5) {\n  return _getProjects.apply(this, arguments);\n}\n\nfunction _getProjects() {\n  _getProjects = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(limit) {\n    var newTask;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return fetch(_restservice__WEBPACK_IMPORTED_MODULE_3__[\"baseConfig\"].baseURL + '/projects', {\n              method: 'GET',\n              headers: {\n                \"Content-type\": \"application/json\"\n              },\n              query: JSON.stringify({\n                \"limit\": limit\n              })\n            }).then(function (response) {\n              if (response.status == 403) {\n                return 'Not Authorized';\n              }\n\n              return response.json();\n            })[\"catch\"](function (error) {\n              return error;\n            });\n\n          case 2:\n            newTask = _context2.sent;\n\n            if (!newTask) {\n              _context2.next = 5;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", newTask);\n\n          case 5:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _getProjects.apply(this, arguments);\n}\n\nfunction getProjectById(_x6) {\n  return _getProjectById.apply(this, arguments);\n}\n\nfunction _getProjectById() {\n  _getProjectById = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(id) {\n    var newTask;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            // New Login Data request\n            console.log(process.env.PROJECTS_ROUTE);\n            _context3.next = 3;\n            return fetch(process.env.PROJECTS_ROUTE + '/' + id, {\n              method: 'GET',\n              headers: {\n                \"Content-type\": \"application/json\"\n              }\n            }).then(function (response) {\n              if (response.status == 403) {\n                return 'Not Authorized';\n              }\n\n              return response.json();\n            })[\"catch\"](function (error) {\n              return error;\n            });\n\n          case 3:\n            newTask = _context3.sent;\n\n            if (!newTask) {\n              _context3.next = 6;\n              break;\n            }\n\n            return _context3.abrupt(\"return\", newTask);\n\n          case 6:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _getProjectById.apply(this, arguments);\n}\n\nfunction removeProject(_x7) {\n  return _removeProject.apply(this, arguments);\n}\n\nfunction _removeProject() {\n  _removeProject = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(taskId) {\n    var getCookies, newTask;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            getCookies = cookies.getAll(); // New Login Data request\n\n            _context4.next = 3;\n            return fetch(\"http://localhost:3600/projects/\".concat(taskId), {\n              method: 'DELETE',\n              headers: {\n                \"Authorization\": \"Bearer \".concat(getCookies.accessToken ? getCookies.accessToken : token)\n              }\n            }).then(function (response) {\n              return response.json();\n            })[\"catch\"](function (error) {\n              return error;\n            });\n\n          case 3:\n            newTask = _context4.sent;\n\n            if (!newTask) {\n              _context4.next = 6;\n              break;\n            }\n\n            return _context4.abrupt(\"return\", newTask);\n\n          case 6:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n  return _removeProject.apply(this, arguments);\n}\n\nfunction updateTaskStatus(_x8, _x9) {\n  return _updateTaskStatus.apply(this, arguments);\n}\n\nfunction _updateTaskStatus() {\n  _updateTaskStatus = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(taskId, newstatus) {\n    var getCookies, newTask;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            getCookies = cookies.getAll(); // New Login Data request\n\n            _context5.next = 3;\n            return fetch(\"http://localhost:3600/tasks/\".concat(taskId), {\n              method: 'PATCH',\n              headers: {\n                \"Content-type\": \"application/json\",\n                \"Authorization\": \"Bearer \".concat(getCookies.accessToken ? getCookies.accessToken : token)\n              },\n              body: JSON.stringify({\n                \"status\": newstatus\n              })\n            }).then(function (response) {\n              return response.json();\n            })[\"catch\"](function (error) {\n              return error;\n            });\n\n          case 3:\n            newTask = _context5.sent;\n\n            if (!newTask) {\n              _context5.next = 6;\n              break;\n            }\n\n            return _context5.abrupt(\"return\", newTask);\n\n          case 6:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5);\n  }));\n  return _updateTaskStatus.apply(this, arguments);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvcHJvamVjdHNlcnZpY2UuanM/NDgwYiJdLCJuYW1lcyI6WyJjb29raWVzIiwiQ29va2llcyIsImNyZWF0ZVByb2plY3QiLCJ0aXRsZSIsImJvZHkiLCJ0YWdzIiwiaW1hZ2VzIiwiZ2V0Q29va2llcyIsImdldEFsbCIsImZldGNoIiwiYmFzZUNvbmZpZyIsImJhc2VVUkwiLCJtZXRob2QiLCJoZWFkZXJzIiwiYWNjZXNzVG9rZW4iLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImVycm9yIiwibmV3UHJvamVjdCIsImdldFByb2plY3RzIiwibGltaXQiLCJxdWVyeSIsInN0YXR1cyIsIm5ld1Rhc2siLCJnZXRQcm9qZWN0QnlJZCIsImlkIiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJlbnYiLCJQUk9KRUNUU19ST1VURSIsInJlbW92ZVByb2plY3QiLCJ0YXNrSWQiLCJ0b2tlbiIsInVwZGF0ZVRhc2tTdGF0dXMiLCJuZXdzdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHLElBQUlDLG9EQUFKLEVBQWhCO0FBRU8sU0FBZUMsYUFBdEI7QUFBQTtBQUFBOzs7b01BQU8saUJBQTZCQyxLQUE3QixFQUFvQ0MsSUFBcEMsRUFBMENDLElBQTFDLEVBQWdEQyxNQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFR0Msc0JBRkgsR0FFZ0JQLE9BQU8sQ0FBQ1EsTUFBUixFQUZoQixFQUdIOztBQUhHO0FBQUEsbUJBSXNCQyxLQUFLLENBQUNDLHVEQUFVLENBQUNDLE9BQVgsR0FBcUIsV0FBdEIsRUFBbUM7QUFDN0RDLG9CQUFNLEVBQUUsTUFEcUQ7QUFFN0RDLHFCQUFPLEVBQUU7QUFDTCxnQ0FBZ0Isa0JBRFg7QUFFTCxrREFBMkJOLFVBQVUsQ0FBQ08sV0FBdEM7QUFGSyxlQUZvRDtBQU03RFYsa0JBQUks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OztBQUFBO0FBSUdNLG1CQUpIOztBQUFBLGlCQW9CQUEsT0FwQkE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsOENBcUJRQSxPQXJCUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwiZmlsZSI6Ii4vc2VydmljZXMvcHJvamVjdHNlcnZpY2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJztcbmltcG9ydCB7IGJhc2VDb25maWcgfSBmcm9tICcuL3Jlc3RzZXJ2aWNlJyBcblxuY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlLCBib2R5LCB0YWdzLCBpbWFnZXMpIHtcbiAgICBcbiAgICBjb25zdCBnZXRDb29raWVzID0gY29va2llcy5nZXRBbGwoKVxuICAgIC8vIE5ldyBMb2dpbiBEYXRhIHJlcXVlc3RcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gYXdhaXQgZmV0Y2goYmFzZUNvbmZpZy5iYXNlVVJMICsgJy9wcm9qZWN0cycsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHtnZXRDb29raWVzLmFjY2Vzc1Rva2VufWBcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiB0aXRsZSxcbiAgICAgICAgICAgIFwiYm9keVwiOiBib2R5LFxuICAgICAgICAgICAgXCJ0YWdzXCI6IHRhZ3MsXG4gICAgICAgICAgICBcImltYWdlc1wiOiBpbWFnZXNcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSlcbiAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGVycm9yXG4gICAgfSk7XG4gICAgaWYobmV3UHJvamVjdCkge1xuICAgICAgICByZXR1cm4gbmV3UHJvamVjdFxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2plY3RzKGxpbWl0KSB7XG4gICAgLy8gTmV3IExvZ2luIERhdGEgcmVxdWVzdFxuICAgIGNvbnN0IG5ld1Rhc2sgPSBhd2FpdCBmZXRjaChiYXNlQ29uZmlnLmJhc2VVUkwgKyAnL3Byb2plY3RzJywge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICB9LFxuICAgICAgICBxdWVyeTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgXCJsaW1pdFwiOiBsaW1pdFxuICAgICAgICB9KVxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IDQwMykge1xuICAgICAgICAgICAgcmV0dXJuICdOb3QgQXV0aG9yaXplZCdcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pXG4gICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBlcnJvclxuICAgIH0pO1xuICAgIGlmKG5ld1Rhc2spIHtcbiAgICAgICAgcmV0dXJuIG5ld1Rhc2tcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9qZWN0QnlJZChpZCkge1xuICAgIC8vIE5ldyBMb2dpbiBEYXRhIHJlcXVlc3RcbiAgICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5QUk9KRUNUU19ST1VURSlcbiAgICBjb25zdCBuZXdUYXNrID0gYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuUFJPSkVDVFNfUk9VVEUgKyAnLycgKyBpZCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICB9XG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT0gNDAzKSB7XG4gICAgICAgICAgICByZXR1cm4gJ05vdCBBdXRob3JpemVkJ1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSlcbiAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGVycm9yXG4gICAgfSk7XG4gICAgaWYobmV3VGFzaykge1xuICAgICAgICByZXR1cm4gbmV3VGFza1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbW92ZVByb2plY3QodGFza0lkKSB7XG4gICAgXG4gICAgY29uc3QgZ2V0Q29va2llcyA9IGNvb2tpZXMuZ2V0QWxsKClcbiAgICAvLyBOZXcgTG9naW4gRGF0YSByZXF1ZXN0XG4gICAgY29uc3QgbmV3VGFzayA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjM2MDAvcHJvamVjdHMvJHt0YXNrSWR9YCwge1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYEJlYXJlciAke2dldENvb2tpZXMuYWNjZXNzVG9rZW4gPyBnZXRDb29raWVzLmFjY2Vzc1Rva2VuOiB0b2tlbn1gXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSlcbiAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGVycm9yXG4gICAgfSk7XG4gICAgaWYobmV3VGFzaykge1xuICAgICAgICByZXR1cm4gbmV3VGFza1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVRhc2tTdGF0dXModGFza0lkLCBuZXdzdGF0dXMpIHtcbiAgICBcbiAgICBjb25zdCBnZXRDb29raWVzID0gY29va2llcy5nZXRBbGwoKVxuICAgIC8vIE5ldyBMb2dpbiBEYXRhIHJlcXVlc3RcbiAgICBjb25zdCBuZXdUYXNrID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzYwMC90YXNrcy8ke3Rhc2tJZH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYEJlYXJlciAke2dldENvb2tpZXMuYWNjZXNzVG9rZW4gPyBnZXRDb29raWVzLmFjY2Vzc1Rva2VuOiB0b2tlbn1gXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIFwic3RhdHVzXCI6IG5ld3N0YXR1c1xuICAgICAgICB9KVxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KVxuICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICByZXR1cm4gZXJyb3JcbiAgICB9KTtcbiAgICBpZihuZXdUYXNrKSB7XG4gICAgICAgIHJldHVybiBuZXdUYXNrXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./services/projectservice.js\n");

/***/ })

})