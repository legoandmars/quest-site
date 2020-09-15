webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./layouts/header.js":
/*!***************************!*\
  !*** ./layouts/header.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header.module.css */ "./layouts/header.module.css");
/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_header_module_css__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\Isaac\\Desktop\\quest-site\\layouts\\header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

 //import Collapse from 'react-bootstrap/Collapse';




function Header() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("style", {
    type: "text/css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "\n            .navbar-brand {\n                font-size: 1.25vw;\n                font-weight: bold;\n                /*padding-right: .45vw;\n                padding-left: .45vw; */   \n                padding-right: 0.3vw!important;\n                padding-left: 0.3vw!important;  \n                margin-right:1vw;\n            }\n            .navbar-nav{\n                font-size: 1.05vw;\n                background-color: transparent;\n                color: #ffffff;\n            }\n            .navbar{\n                margin-left:10%;\n                height:100%;\n                margin-right:5rem;\n                white-space: nowrap;\n                width: 80%;\n                background-color: #2d3135!important;\n                padding: 0px;\n            }\n            .navcontainer{\n                width:100%;\n                height:3.25vw;\n                background-color: #2d3135!important;\n            }\n            .twitter{\n                /*margin-left: 1rem*/;\n                opacity: 50%;\n            }\n            .mr-auto{\n                padding: 0px;\n            }\n            .nav-link{\n                padding: 0vw;\n                padding-right: 0.45vw!important;\n                padding-left: 0.45vw!important;\n            }\n            .twitterimg{\n                width:1.82vw;\n                height:1.82vw;\n            }\n            .donate{\n                padding-left: 53.75vw!important;\n                padding-right: 0!important;\n            }\n            @media (max-aspect-ratio: 1/1) {\n                .navcontainer {\n                    height:6.5vw;\n                }\n                .navbar-brand {\n                    font-size: 2.5vw;\n                }\n                .navbar-nav {\n                    font-size: 2.10vw;\n                    padding-top:0.25vw;\n                }\n                .donate{\n                    padding-left: 30.75vw!important;\n                    padding-right: 0!important;\n                }    \n                .twitterimg{\n                    width:3.64vw;\n                    height:3.64vw;\n                }    \n            }\n            "), __jsx("div", {
    "class": "navcontainer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    bg: "dark",
    variant: "dark",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Brand, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, "Bobbie"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "mr-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "/notes",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }, "Notes"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "/walls",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }, "Walls"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "/walls",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  }, "PC Models"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    href: "https://ko-fi.com/bobbievr",
    className: "donate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }, "Donate")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Brand, {
    className: "twitter",
    href: "https://twitter.com/VRBobbie",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/twitterlogo.png",
    className: "d-inline-block align-top twitterimg",
    alt: "Twitter Link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  }))))));
}
;

/***/ })

})
//# sourceMappingURL=index.js.5c952ddf4c1983d76209.hot-update.js.map