webpackHotUpdate("static/development/pages/posts/[id].js",{

/***/ "./components/ColumnSpan.js":
/*!**********************************!*\
  !*** ./components/ColumnSpan.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColumnSpan; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/zuckerscharffa/Dev/podofmadness/components/ColumnSpan.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function ColumnSpan(_ref) {
  var children = _ref.children,
      spanCount = _ref.spanCount,
      className = _ref.className;
  var spanSize = "span".concat(spanCount, " ");
  spanSize += className ? className : "";
  return __jsx("div", {
    className: spanSize,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }, children);
}

/***/ }),

/***/ "./components/metaHead.js":
/*!********************************!*\
  !*** ./components/metaHead.js ***!
  \********************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MetaHead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_jsonLD__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/jsonLD */ "./lib/jsonLD.js");

var _jsxFileName = "/Users/zuckerscharffa/Dev/podofmadness/components/metaHead.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function MetaHead(_ref) {
  var _this = this;

  var pageType = _ref.pageType,
      headline = _ref.headline,
      description = _ref.description,
      datePublished = _ref.datePublished,
      previewImage = _ref.previewImage,
      buildDate = _ref.buildDate,
      keywords = _ref.keywords,
      urlId = _ref.urlId,
      extendedData = _ref.extendedData,
      children = _ref.children;
  return function (buildDate) {
    if (!buildDate) {
      var buildDate = new Date();
    }

    var jsonLD = Object(_lib_jsonLD__WEBPACK_IMPORTED_MODULE_3__["default"])({
      pageType: pageType,
      headline: headline,
      description: description,
      urlId: urlId,
      datePublished: datePublished,
      previewImage: previewImage,
      buildDate: buildDate,
      extendedData: extendedData
    });
    var jsonLDAsString = JSON.stringify(jsonLD);
    console.log("JSON LD as String", jsonLDAsString);
    return __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 3
      }
    }, __jsx("title", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 4
      }
    }, headline ? headline : "Pod of Madness"), __jsx("link", {
      key: "meta-icon",
      rel: "icon",
      href: "/favicon.ico",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 4
      }
    }), __jsx("meta", {
      key: "meta-keywords",
      name: "keywords",
      content: keywords.join(", "),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 4
      }
    }), __jsx("meta", {
      key: "meta-author",
      name: "author",
      content: "Jordan Gass-Poore'",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 4
      }
    }), __jsx("meta", {
      key: "meta-og-title",
      property: "og:title",
      content: headline ? headline : "Pod of Madness",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 4
      }
    }), __jsx("meta", {
      key: "meta-og-site_name",
      property: "og:site_name",
      content: "The Pod of Madness Podcast",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 4
      }
    }), __jsx("meta", {
      key: "meta-og-description",
      property: "og:description",
      content: description ? description : "Life is Mad.",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 4
      }
    }), __jsx("meta", {
      key: "meta-og-url",
      property: "og:url",
      content: "https://podofmadness.com" + (urlId ? urlId : ""),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 4
      }
    }), __jsx("meta", {
      key: "meta-og-locale",
      property: "og:locale",
      content: "en_US",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 4
      }
    }), __jsx("meta", {
      key: "meta-twitter-site",
      name: "twitter:site",
      content: "@podofmadness",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 4
      }
    }), __jsx("meta", {
      key: "meta-twitter-description",
      name: "twitter:description",
      content: description ? description : "Life is Mad.",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 4
      }
    }), __jsx("meta", {
      key: "meta-twitter-card",
      name: "twitter:card",
      content: "summary_large_image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 4
      }
    }), __jsx("meta", {
      key: "meta-twitter-creator",
      name: "twitter:creator",
      content: "@podofmadness",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 4
      }
    }), __jsx("meta", {
      key: "meta-twitter-title",
      name: "twitter:title",
      content: headline ? headline : "Pod of Madness",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 4
      }
    }), __jsx("meta", {
      key: "meta-og-image",
      property: "og:image",
      content: previewImage ? previewImage : "https://podofmadness.com/assets/logo-white-bg.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 4
      }
    }), __jsx("meta", {
      key: "meta-twitter-image",
      name: "twitter:image",
      content: previewImage ? previewImage : "https://podofmadness.com/assets/logo-white-bg.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 4
      }
    }), __jsx("link", {
      rel: "alternate",
      type: "application/rss+xml",
      title: "RSS Feed for podofmadness.com",
      href: "/feed.xml",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 4
      }
    }), __jsx("script", {
      key: "meta-ld-json",
      type: "application/ld+json",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 4
      }
    }, jsonLDAsString), children);
  }(buildDate);
}
function getStaticProps() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getStaticProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", {
            props: {
              buildDate: new Date().toString()
            }
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

/***/ })

})
//# sourceMappingURL=[id].js.d4653b66039b9f17f8ff.hot-update.js.map