webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/post.js":
/*!****************************!*\
  !*** ./components/post.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audio */ "./components/audio.js");
/* harmony import */ var _socialPrompt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./socialPrompt */ "./components/socialPrompt.js");
var _jsxFileName = "/Users/zuckerscharffa/Dev/podofmadness/components/post.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Post(_ref) {
  var post = _ref.post,
      isNew = _ref.isNew,
      isSocial = _ref.isSocial,
      isFull = _ref.isFull,
      isFront = _ref.isFront;
  var newPrompt = isNew ? __jsx("img", {
    src: "https://podofmadness.com/assets/new.gif",
    style: {
      marginRight: ".4em"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }) : "";
  var frontSocial = isSocial ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 3
    }
  }, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }
  }), __jsx(_socialPrompt__WEBPACK_IMPORTED_MODULE_3__["default"], {
    tweetUrl: post.socialPrompt,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }
  })) : "";
  var headLine = isFront ? __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 3
    }
  }, newPrompt, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/posts/".concat(post.id),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }
  }, __jsx("a", {
    itemProp: "url",
    title: "Download podcast",
    className: "title-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("span", {
    itemProp: "name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 6
    }
  }, post.title, ": ", post.subtitle ? post.subtitle : "")))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 3
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }
  }, newPrompt, __jsx("span", {
    itemProp: "name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, post.title)), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }
  }, post.subtitle), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 4
    }
  }));
  var description = isFront ? __jsx("p", {
    itemProp: "description",
    dangerouslySetInnerHTML: {
      __html: post.description
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 3
    }
  }) : __jsx("div", {
    itemProp: "description",
    dangerouslySetInnerHTML: {
      __html: post.contentHtml
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 3
    }
  });
  var classNameOfPost = "episode__entry" + (isFront ? " front-post" : " full-post");
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: classNameOfPost,
    itemScope: true,
    itemType: "http://schema.org/PodcastEpisode",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 4
    }
  }, headLine, __jsx("div", {
    itemProp: "associatedMedia",
    itemScope: true,
    itemType: "http://schema.org/MediaObject",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 6
    }
  }, __jsx(_audio__WEBPACK_IMPORTED_MODULE_2__["default"], {
    contentUrl: post.contentUrl,
    datePublished: post.date,
    minutesRequired: post.minutesRequired,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  })), __jsx("p", {
    className: "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 6
    }
  }, __jsx("a", {
    itemProp: "contentUrl",
    href: post.contentUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, "Download")), description)), frontSocial);
}

/***/ })

})
//# sourceMappingURL=index.js.91e0501992e788c7b200.hot-update.js.map