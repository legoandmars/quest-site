webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./layouts/model-list.js":
/*!*******************************!*\
  !*** ./layouts/model-list.js ***!
  \*******************************/
/*! exports provided: default, modelPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modelPage", function() { return modelPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layouts_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layouts/header */ "./layouts/header.js");
var _jsxFileName = "C:\\Users\\Isaac\\Desktop\\quest-site\\layouts\\model-list.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function getCard(imageName, downloadName, endpoint) {
  return __jsx("div", {
    "class": "col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("div", {
    "class": "card mb-4 box-shadow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("img", {
    "class": "card-img-top",
    src: "./".concat(imageName),
    alt: "Card image cap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"], {
    className: "d-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "w-100",
    type: "button",
    variant: "dark",
    href: "./".concat(downloadName),
    download: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, "Download"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "w-100",
    type: "button",
    variant: "dark",
    href: "./".concat(endpoint),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, "Details"))));
}
function modelPage(allModels, modelType) {
  var modelElementList = []; // send it off to be rendered by model-list;

  for (var i = 0; i < allModels.length; i++) {
    var model = allModels[i];

    if ((model.type == modelType || modelType == "all Model") && !model.hidden) {
      modelElementList.push(getCard(model["image_name"], model["file_name"], model.endpoint));
    }
  }

  function getDescription() {
    if (modelType.toLowerCase() !== "all model") {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("meta", {
        content: modelType.charAt(0).toUpperCase() + modelType.slice(1) + "s",
        property: "og:title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 17
        }
      }), __jsx("meta", {
        content: "Download Bobbie's Custom ".concat(modelType.charAt(0).toUpperCase() + modelType.slice(1) + "s", " for Beat Saber."),
        property: "og:description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 17
        }
      }));
    } else {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("meta", {
        content: "Bobbie's Model Site",
        property: "og:title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }
      }), __jsx("meta", {
        content: "Download Bobbie's model packs, notes, walls, and more!",
        property: "og:description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 17
        }
      }), __jsx("meta", {
        content: "https://bobbie.dev/bobbie.png",
        property: "og:image",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 17
        }
      }));
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_layouts_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }), __jsx("style", {
    type: "text/css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, "\n                :root {\n                --jumbotron-padding-y: 3rem;\n                }\n                .jumbotron {\n                padding-top: var(--jumbotron-padding-y);\n                padding-bottom: var(--jumbotron-padding-y);\n                margin-bottom: 0;\n                background-color: #fff;\n                }\n                @media (min-width: 768px) {\n                .jumbotron {\n                    padding-top: calc(var(--jumbotron-padding-y) * 2);\n                    padding-bottom: calc(var(--jumbotron-padding-y) * 2);\n                }\n                }\n    \n                .jumbotron p:last-child {\n                margin-bottom: 0;\n                }\n    \n                .jumbotron-heading {\n                font-weight: 300;\n                }\n    \n                .jumbotron .container {\n                    max-width: 40rem;\n                }\n                .container{\n                }\n                footer {\n                padding-top: 3rem;\n                padding-bottom: 3rem;\n                }\n    \n                footer p {\n                margin-bottom: .25rem;\n                }\n    \n                .box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }\n    \n                .album {\n                    background-color: #202020;\n                }\n                body{\n                    background-color: #202020;\n                }\n                .card-title{\n                    font-size:2rem;\n                    text-align: center;\n                    margin-bottom: .2rem;\n                }\n                .btn{\n                    font-size: 1.5rem;\n                }\n                .card{\n                    background-color: #303030;\n                }\n                .btn{\n                    background-color: #000000;\n                    border-color: #4d4d4d;\n                }\n                ::-webkit-scrollbar {\n                    width: 8px;\n                    background-color: transparent;\n                    -webkit-border-radius: 100px;\n                }\n                ::-webkit-scrollbar:hover {\n                    background-color: rgba(0, 0, 0, 0.09);\n                }\n                ::-webkit-scrollbar-thumb:vertical {\n                    background: rgba(0,0,0,0.5);\n                    -webkit-border-radius: 100px;\n                }\n                ::-webkit-scrollbar-thumb:vertical:active {\n                    background: rgba(0,0,0,0.61);\n                    -webkit-border-radius: 100px;\n                }\n                .arrow-button{\n                    background-color: #000000;\n                    border-radius: 0.5vw;\n                    border: 0.10vw solid #4d4d4d;\n                    width:3vw;\n                    height:3vw;\n                    top: calc(90% + 0.2vw);\n                    left: calc(55% - 3.0vw);\n                    outline: none !important;\n                    padding:0;\n                    margin:0px;\n                    float: right;\n                }\n                .left-arrow-button{\n                    background-color: #000000;\n                    border-radius: 0.5vw;\n                    border: 0.10vw solid #4d4d4d;\n                    width:3vw;\n                    height:3vw;\n                    top: calc(90% + 0.2vw);\n                    left: 0;\n                    outline: none !important;\n                    padding:0;\n                    margin:0;\n                }\n                .arrow{\n                    left:0.375vw;\n                    top:0.375vw;\n                    width:2.25vw;\n                    height:2.25vw;\n                }\n                .arrowleft{\n                    right:0.375vw;\n                    top:0.375vw;\n                    width:2.25vw;\n                    height:2.25vw;\n                }\n                .descriptiontext{\n                    position:absolute;\n                    font-size:1.5vw;\n                    text-align: center;\n                    margin-top: 0.5vw;\n                    margin-bottom: 0.5vw;\n                    margin-left: 0.75vw;\n                    margin-right: 0.75vw;\n                    left: calc(50% - 1.5vw*2);\n                }\n            "), __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 17
    }
  }, modelType.charAt(0).toUpperCase() + modelType.slice(1) + "s"), __jsx("meta", {
    content: "bobbie.dev",
    property: "og:site_name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 17
    }
  }), __jsx("meta", {
    content: "#96e3ff",
    name: "theme-color",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 17
    }
  }), getDescription()), __jsx("div", {
    "class": "album py-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 13
    }
  }, __jsx("div", {
    "class": "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 17
    }
  }, __jsx("div", {
    "class": "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 21
    }
  }, modelElementList), __jsx("p", {
    "class": "text-light descriptiontext",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 21
    }
  }, "Page 50"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "dark",
    "class": "left-arrow-button",
    size: "lg",
    onClick: function onClick() {
      return previousImage();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    "class": "arrowleft",
    src: "arrow-left.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 25
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "dark",
    "class": "arrow-button",
    size: "lg",
    onClick: function onClick() {
      return nextImage();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    "class": "arrow",
    src: "arrow.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 25
    }
  })))));
}
/*[{
    "image_name": "testimage.png",
    "file_name": "Diamond Ore.pixie",
    "type": "wall",
    "endpoint": "DiamondOre"
}]*/

/***/ })

})
//# sourceMappingURL=index.js.045041fe76c89aa82174.hot-update.js.map