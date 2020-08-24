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
  spanSize += className;
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

/***/ "./components/audio.js":
/*!*****************************!*\
  !*** ./components/audio.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Audio; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/zuckerscharffa/Dev/podofmadness/components/audio.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

// https://stackoverflow.com/questions/6108819/javascript-timestamp-to-relative-time
function timeDifference(current, previous) {
  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;
  var elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + " seconds ago";
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + " minutes ago";
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + " hours ago";
  } else if (elapsed < msPerMonth) {
    return "approximately " + Math.round(elapsed / msPerDay) + " days ago";
  } else if (elapsed < msPerYear) {
    return "approximately " + Math.round(elapsed / msPerMonth) + " months ago";
  } else {
    return "approximately " + Math.round(elapsed / msPerYear) + " years ago";
  }
}

function Audio(_ref) {
  var contentUrl = _ref.contentUrl,
      datePublished = _ref.datePublished,
      minutesRequired = _ref.minutesRequired;
  var relativeTime = timeDifference(Date.parse(Date.now()), Date.parse(datePublished));
  var dateTimeCode = "PT";
  var datetimeString = "";
  var intMinutes = parseInt(minutesRequired, 10);

  if (intMinutes >= 60) {
    var hours = Math.floor(intMinutes / 60);
    var minutes = intMinutes - hours * 60;
    dateTimeCode += hours + "H" + minutes + "M";
    datetimeString = hours + " hours and " + minutes + "minutes";
  } else {
    dateTimeCode += minutesRequired + "M";
    datetimeString = minutesRequired + " minutes";
  }

  console.log("Audio data", contentUrl, datePublished, minutesRequired);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("audio", {
    controls: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 4
    }
  }, __jsx("source", {
    src: contentUrl,
    type: "audio/mpeg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  })), __jsx("small", {
    className: "hidden",
    itemProp: "datePublished",
    dateTime: datePublished,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 4
    }
  }, relativeTime), __jsx("small", {
    className: "hidden",
    itemProp: "timeRequired",
    dateTime: dateTimeCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 4
    }
  }, datetimeString));
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
    }), __jsx("script", {
      key: "meta-ld-json",
      type: "application/ld+json",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
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

/***/ }),

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
  }, post.title)))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 3
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }
  }, newPrompt, __jsx("span", {
    itemProp: "name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, post.title)), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 4
    }
  }, post.subtitle), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 4
    }
  }));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "episode__entry",
    itemScope: true,
    itemType: "http://schema.org/PodcastEpisode",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 4
    }
  }, headLine, __jsx("div", {
    itemProp: "associatedMedia",
    itemScope: true,
    itemType: "http://schema.org/MediaObject",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 6
    }
  }, __jsx(_audio__WEBPACK_IMPORTED_MODULE_2__["default"], {
    contentUrl: post.contentUrl,
    datePublished: post.date,
    minutesRequired: post.minutesRequired,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  })), __jsx("p", {
    className: "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 6
    }
  }, __jsx("a", {
    itemProp: "contentUrl",
    href: post.contentUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, "Download")), __jsx("p", {
    itemProp: "description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 6
    }
  }, post.description))), frontSocial);
}

/***/ }),

/***/ "./lib/jsonLD.js":
/*!***********************!*\
  !*** ./lib/jsonLD.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getJsonLd; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function getJsonLd(_ref) {
  var pageType = _ref.pageType,
      headline = _ref.headline,
      description = _ref.description,
      datePublished = _ref.datePublished,
      previewImage = _ref.previewImage,
      buildDate = _ref.buildDate,
      extendedData = _ref.extendedData;

  var jsonLD = _objectSpread({
    "@context": "http://schema.org",
    "@type": pageType ? pageType : "CollectionPage",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://podofmadness.com"
    },
    headline: headline ? headline : "Pod of Madness.",
    datePublished: datePublished ? datePublished : "2020-06-22 7:00:51 -0400",
    dateModified: buildDate.toISOString(),
    description: description ? description : "A horror-comedy podcast that makes about as much sense as the genre itself.",
    isPartOf: {
      "@type": ["CreativeWork", "Product", "Blog"],
      name: "Pod of Madness",
      productID: "https://podofmadness.com"
    },
    image: previewImage ? [previewImage] : ["https://podofmadness.com/assets/logo-white-bg.png"],
    isAccessibleForFree: true,
    author: {
      "@type": "Person",
      name: "Jordan Gass-Poore'",
      description: "Jordan Gass-Poore' is a journalist and podcaster.",
      sameAs: "http://jgasspoore.com/",
      image: {
        "@type": "ImageObject",
        url: "https://pbs.twimg.com/profile_images/1237825194225553410/vwm8F8EE_400x400.jpg"
      },
      givenName: "Jordan",
      familyName: "Gass-Poore'"
    },
    publisher: {
      "@type": "Project",
      name: "Pod of Madness",
      url: "https://podofmadness.com",
      foundingDate: "2020-1-01",
      logo: {
        "@type": "ImageObject",
        url: "https://podofmadness.com/assets/logo-white-bg.png"
      }
    }
  }, extendedData);

  switch (pageType) {
    case "episode":
      jsonLD["@type"] = "PodcastEpisode";
      break;

    default:
      break;
  } // console.log("JSON LD ", jsonLD)


  return jsonLD;
}

/***/ })

})
//# sourceMappingURL=[id].js.07cc5489f36a3611993d.hot-update.js.map