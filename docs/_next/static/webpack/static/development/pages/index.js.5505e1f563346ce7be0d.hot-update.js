webpackHotUpdate("static/development/pages/index.js",{

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

  if (elapsed < 0) {
    return "1 second ago";
  }

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
      lineNumber: 48,
      columnNumber: 4
    }
  }, __jsx("source", {
    src: contentUrl,
    type: "audio/mpeg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  })), __jsx("small", {
    className: "hidden",
    itemProp: "datePublished",
    dateTime: datePublished,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 4
    }
  }, relativeTime), __jsx("small", {
    className: "hidden",
    itemProp: "timeRequired",
    dateTime: dateTimeCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 4
    }
  }, datetimeString));
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
  }, post.title, " ", post.subtitle ? ": " + post.subtitle : "")))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
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

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_ATweet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ATweet */ "./components/ATweet.js");
/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/post */ "./components/post.js");
/* harmony import */ var _components_metaHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/metaHead */ "./components/metaHead.js");
/* harmony import */ var _components_SiteNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SiteNav */ "./components/SiteNav.js");
/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/MainContainer */ "./components/MainContainer.js");
/* harmony import */ var _components_Jumbotron__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Jumbotron */ "./components/Jumbotron.js");
/* harmony import */ var _components_Row__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Row */ "./components/Row.js");
/* harmony import */ var _components_ColumnSpan__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/ColumnSpan */ "./components/ColumnSpan.js");
var _jsxFileName = "/Users/zuckerscharffa/Dev/podofmadness/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











var __N_SSG = true;
function Home(_ref) {
  var _this = this;

  var allPostsData = _ref.allPostsData,
      allSocialData = _ref.allSocialData,
      buildDate = _ref.buildDate;
  var buildDateObj = new Date(buildDate);
  var morePosts;

  if (allPostsData.length > 1) {
    var postList = allPostsData.map(function (aPost) {
      return __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 5
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/posts/".concat(aPost.id),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 6
        }
      }, __jsx("a", {
        title: "Download podcast",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 7
        }
      }, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 8
        }
      }, aPost.title))));
    });
    delete postList[0];
    morePosts = __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 4
      }
    }, __jsx("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 5
      }
    }, "Previous Episodes"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 5
      }
    }, postList), __jsx("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }
    }, "More episodes coming soon!"));
  } else {
    morePosts = __jsx("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 15
      }
    }, "More episodes coming soon!");
  }

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 3
    }
  }, __jsx(_components_metaHead__WEBPACK_IMPORTED_MODULE_7__["default"], {
    pageType: "CollectionPage",
    buildDate: buildDateObj,
    keywords: ["horror", "zombies", "covid-19", "coronavirus", "podcast"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }
  }), __jsx(_components_SiteNav__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 4
    }
  }), __jsx(_components_MainContainer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 4
    }
  }, __jsx(_components_Jumbotron__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx(_components_Row__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 6
    }
  }, __jsx(_components_ColumnSpan__WEBPACK_IMPORTED_MODULE_12__["default"], {
    spanCount: "6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "jsx-3595280105",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 8
    }
  }, "Pod of Madness"), __jsx("p", {
    className: "jsx-3595280105" + " " + "lead",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 8
    }
  }, "Life is Mad")), __jsx(_components_ColumnSpan__WEBPACK_IMPORTED_MODULE_12__["default"], {
    spanCount: "6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx("center", {
    className: "jsx-3595280105" + " " + "fun",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "jsx-3595280105" + " " + "toaster animated",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  })), __jsx("center", {
    className: "jsx-3595280105" + " " + "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 8
    }
  }, __jsx("img", {
    src: "https://podofmadness.com/assets/logo-transparent.png",
    className: "jsx-3595280105",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }))))), __jsx(_components_Row__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, __jsx(_components_ColumnSpan__WEBPACK_IMPORTED_MODULE_12__["default"], {
    spanCount: "12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 6
    }
  }, __jsx("h4", {
    className: "jsx-3595280105",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, "Pod of Madness is a horror-comedy show that proves life is mad."), __jsx("hr", {
    className: "jsx-3595280105",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }))), __jsx(_components_Row__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "main-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }, __jsx(_components_ColumnSpan__WEBPACK_IMPORTED_MODULE_12__["default"], {
    spanCount: "6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 6
    }
  }, __jsx(_components_post__WEBPACK_IMPORTED_MODULE_6__["default"], {
    post: allPostsData[0],
    isNew: true,
    isFull: false,
    isSocial: true,
    isFront: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  })), __jsx(_components_ColumnSpan__WEBPACK_IMPORTED_MODULE_12__["default"], {
    spanCount: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 6
    }
  }, __jsx("h4", {
    className: "jsx-3595280105",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, "Listen to our Social SoundBites:"), __jsx(_components_ATweet__WEBPACK_IMPORTED_MODULE_5__["default"], {
    twitterUrl: allSocialData[0].socialPrompt,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  })), __jsx(_components_ColumnSpan__WEBPACK_IMPORTED_MODULE_12__["default"], {
    spanCount: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 6
    }
  }, morePosts))), __jsx("footer", {
    className: "jsx-3595280105",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 4
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1694180938",
    __self: this
  }, "code.jsx-3595280105{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}@media (max-width:600px){code.jsx-3595280105{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96dWNrZXJzY2hhcmZmYS9EZXYvcG9kb2ZtYWRuZXNzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRGZSxBQUd5QixBQVVQLFdBQ1osUUFWa0Isa0JBQ0YsZ0JBQ0MsaUJBRWtELHlIQUNwRSIsImZpbGUiOiIvVXNlcnMvenVja2Vyc2NoYXJmZmEvRGV2L3BvZG9mbWFkbmVzcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgeyBnZXRTb3J0ZWRQb3N0c0RhdGEgfSBmcm9tIFwiLi4vbGliL3Bvc3RzXCJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCJcbmltcG9ydCBBVHdlZXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQVR3ZWV0XCJcbmltcG9ydCBQb3N0IGZyb20gXCIuLi9jb21wb25lbnRzL3Bvc3RcIlxuaW1wb3J0IE1ldGFIZWFkIGZyb20gXCIuLi9jb21wb25lbnRzL21ldGFIZWFkXCJcbmltcG9ydCBTaXRlTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL1NpdGVOYXZcIlxuaW1wb3J0IE1haW5Db250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTWFpbkNvbnRhaW5lclwiXG5pbXBvcnQgSnVtYm90cm9uIGZyb20gXCIuLi9jb21wb25lbnRzL0p1bWJvdHJvblwiXG5pbXBvcnQgUm93IGZyb20gXCIuLi9jb21wb25lbnRzL1Jvd1wiXG5pbXBvcnQgQ29sdW1uU3BhbiBmcm9tIFwiLi4vY29tcG9uZW50cy9Db2x1bW5TcGFuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGFsbFBvc3RzRGF0YSwgYWxsU29jaWFsRGF0YSwgYnVpbGREYXRlIH0pIHtcblx0dmFyIGJ1aWxkRGF0ZU9iaiA9IG5ldyBEYXRlKGJ1aWxkRGF0ZSlcblx0bGV0IG1vcmVQb3N0c1xuXHRpZiAoYWxsUG9zdHNEYXRhLmxlbmd0aCA+IDEpIHtcblx0XHR2YXIgcG9zdExpc3QgPSBhbGxQb3N0c0RhdGEubWFwKChhUG9zdCkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9e2AvcG9zdHMvJHthUG9zdC5pZH1gfT5cblx0XHRcdFx0XHRcdDxhIHRpdGxlPVwiRG93bmxvYWQgcG9kY2FzdFwiPlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj57YVBvc3QudGl0bGV9PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PC9saT5cblx0XHRcdClcblx0XHR9KVxuXHRcdGRlbGV0ZSBwb3N0TGlzdFswXVxuXHRcdG1vcmVQb3N0cyA9IChcblx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0PGg0PlByZXZpb3VzIEVwaXNvZGVzPC9oND5cblx0XHRcdFx0PHVsPntwb3N0TGlzdH08L3VsPlxuXHRcdFx0XHQ8aDQ+TW9yZSBlcGlzb2RlcyBjb21pbmcgc29vbiE8L2g0PlxuXHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHQpXG5cdH0gZWxzZSB7XG5cdFx0bW9yZVBvc3RzID0gPGg0Pk1vcmUgZXBpc29kZXMgY29taW5nIHNvb24hPC9oND5cblx0fVxuXHRyZXR1cm4gKFxuXHRcdDxMYXlvdXQ+XG5cdFx0XHQ8TWV0YUhlYWRcblx0XHRcdFx0cGFnZVR5cGU9XCJDb2xsZWN0aW9uUGFnZVwiXG5cdFx0XHRcdGJ1aWxkRGF0ZT17YnVpbGREYXRlT2JqfVxuXHRcdFx0XHRrZXl3b3Jkcz17W1wiaG9ycm9yXCIsIFwiem9tYmllc1wiLCBcImNvdmlkLTE5XCIsIFwiY29yb25hdmlydXNcIiwgXCJwb2RjYXN0XCJdfVxuXHRcdFx0PjwvTWV0YUhlYWQ+XG5cdFx0XHQ8U2l0ZU5hdiAvPlxuXHRcdFx0PE1haW5Db250YWluZXI+XG5cdFx0XHRcdDxKdW1ib3Ryb24+XG5cdFx0XHRcdFx0PFJvdz5cblx0XHRcdFx0XHRcdDxDb2x1bW5TcGFuIHNwYW5Db3VudD1cIjZcIj5cblx0XHRcdFx0XHRcdFx0PGgxPlBvZCBvZiBNYWRuZXNzPC9oMT5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibGVhZFwiPkxpZmUgaXMgTWFkPC9wPlxuXHRcdFx0XHRcdFx0PC9Db2x1bW5TcGFuPlxuXHRcdFx0XHRcdFx0PENvbHVtblNwYW4gc3BhbkNvdW50PVwiNlwiPlxuXHRcdFx0XHRcdFx0XHQ8Y2VudGVyIGNsYXNzTmFtZT1cImZ1blwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidG9hc3RlciBhbmltYXRlZFwiPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2NlbnRlcj5cblx0XHRcdFx0XHRcdFx0PGNlbnRlciBjbGFzc05hbWU9XCJsb2dvXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCJodHRwczovL3BvZG9mbWFkbmVzcy5jb20vYXNzZXRzL2xvZ28tdHJhbnNwYXJlbnQucG5nXCIgLz5cblx0XHRcdFx0XHRcdFx0PC9jZW50ZXI+XG5cdFx0XHRcdFx0XHQ8L0NvbHVtblNwYW4+XG5cdFx0XHRcdFx0PC9Sb3c+XG5cdFx0XHRcdDwvSnVtYm90cm9uPlxuXHRcdFx0XHQ8Um93PlxuXHRcdFx0XHRcdDxDb2x1bW5TcGFuIHNwYW5Db3VudD1cIjEyXCI+XG5cdFx0XHRcdFx0XHQ8aDQ+XG5cdFx0XHRcdFx0XHRcdFBvZCBvZiBNYWRuZXNzIGlzIGEgaG9ycm9yLWNvbWVkeSBzaG93IHRoYXQgcHJvdmVzIGxpZmUgaXMgbWFkLlxuXHRcdFx0XHRcdFx0PC9oND5cblx0XHRcdFx0XHRcdDxociAvPlxuXHRcdFx0XHRcdDwvQ29sdW1uU3Bhbj5cblx0XHRcdFx0PC9Sb3c+XG5cdFx0XHRcdDxSb3cgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50XCI+XG5cdFx0XHRcdFx0PENvbHVtblNwYW4gc3BhbkNvdW50PVwiNlwiPlxuXHRcdFx0XHRcdFx0PFBvc3Rcblx0XHRcdFx0XHRcdFx0cG9zdD17YWxsUG9zdHNEYXRhWzBdfVxuXHRcdFx0XHRcdFx0XHRpc05ldz17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0aXNGdWxsPXtmYWxzZX1cblx0XHRcdFx0XHRcdFx0aXNTb2NpYWw9e3RydWV9XG5cdFx0XHRcdFx0XHRcdGlzRnJvbnQ9e3RydWV9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvQ29sdW1uU3Bhbj5cblx0XHRcdFx0XHQ8Q29sdW1uU3BhbiBzcGFuQ291bnQ9XCI0XCI+XG5cdFx0XHRcdFx0XHQ8aDQ+TGlzdGVuIHRvIG91ciBTb2NpYWwgU291bmRCaXRlczo8L2g0PlxuXHRcdFx0XHRcdFx0PEFUd2VldCB0d2l0dGVyVXJsPXthbGxTb2NpYWxEYXRhWzBdLnNvY2lhbFByb21wdH0gLz5cblx0XHRcdFx0XHQ8L0NvbHVtblNwYW4+XG5cdFx0XHRcdFx0PENvbHVtblNwYW4gc3BhbkNvdW50PVwiMlwiPnttb3JlUG9zdHN9PC9Db2x1bW5TcGFuPlxuXHRcdFx0XHQ8L1Jvdz5cblx0XHRcdDwvTWFpbkNvbnRhaW5lcj5cblxuXHRcdFx0PGZvb3Rlcj48L2Zvb3Rlcj5cblxuXHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRjb2RlIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDVweDtcblx0XHRcdFx0XHRwYWRkaW5nOiAwLjc1cmVtO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMS4xcmVtO1xuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCBMdWNpZGEgQ29uc29sZSwgTGliZXJhdGlvbiBNb25vLFxuXHRcdFx0XHRcdFx0RGVqYVZ1IFNhbnMgTW9ubywgQml0c3RyZWFtIFZlcmEgU2FucyBNb25vLCBDb3VyaWVyIE5ldywgbW9ub3NwYWNlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cdFx0XHRcdFx0Y29kZSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblxuXHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2BgfTwvc3R5bGU+XG5cdFx0PC9MYXlvdXQ+XG5cdClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuXHRjb25zdCBhbGxQb3N0c0RhdGEgPSBnZXRTb3J0ZWRQb3N0c0RhdGEoXCJlcGlzb2RlXCIpXG5cdGNvbnN0IGFsbFNvY2lhbERhdGEgPSBnZXRTb3J0ZWRQb3N0c0RhdGEoXCJzb2NpYWxTb3VuZEJpdGVcIilcblx0Y29uc29sZS5sb2coXCJhbGxQb3N0c0RhdGFcIiwgYWxsUG9zdHNEYXRhWzBdKVxuXHRyZXR1cm4ge1xuXHRcdHByb3BzOiB7XG5cdFx0XHRhbGxQb3N0c0RhdGEsXG5cdFx0XHRhbGxTb2NpYWxEYXRhLFxuXHRcdFx0YnVpbGREYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXG5cdFx0fSxcblx0fVxufVxuIl19 */\n/*@ sourceURL=/Users/zuckerscharffa/Dev/podofmadness/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2085888330",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96dWNrZXJzY2hhcmZmYS9EZXYvcG9kb2ZtYWRuZXNzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZHc0IiLCJmaWxlIjoiL1VzZXJzL3p1Y2tlcnNjaGFyZmZhL0Rldi9wb2RvZm1hZG5lc3MvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgZ2V0U29ydGVkUG9zdHNEYXRhIH0gZnJvbSBcIi4uL2xpYi9wb3N0c1wiXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiXG5pbXBvcnQgQVR3ZWV0IGZyb20gXCIuLi9jb21wb25lbnRzL0FUd2VldFwiXG5pbXBvcnQgUG9zdCBmcm9tIFwiLi4vY29tcG9uZW50cy9wb3N0XCJcbmltcG9ydCBNZXRhSGVhZCBmcm9tIFwiLi4vY29tcG9uZW50cy9tZXRhSGVhZFwiXG5pbXBvcnQgU2l0ZU5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9TaXRlTmF2XCJcbmltcG9ydCBNYWluQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL01haW5Db250YWluZXJcIlxuaW1wb3J0IEp1bWJvdHJvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9KdW1ib3Ryb25cIlxuaW1wb3J0IFJvdyBmcm9tIFwiLi4vY29tcG9uZW50cy9Sb3dcIlxuaW1wb3J0IENvbHVtblNwYW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29sdW1uU3BhblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBhbGxQb3N0c0RhdGEsIGFsbFNvY2lhbERhdGEsIGJ1aWxkRGF0ZSB9KSB7XG5cdHZhciBidWlsZERhdGVPYmogPSBuZXcgRGF0ZShidWlsZERhdGUpXG5cdGxldCBtb3JlUG9zdHNcblx0aWYgKGFsbFBvc3RzRGF0YS5sZW5ndGggPiAxKSB7XG5cdFx0dmFyIHBvc3RMaXN0ID0gYWxsUG9zdHNEYXRhLm1hcCgoYVBvc3QpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxsaT5cblx0XHRcdFx0XHQ8TGluayBocmVmPXtgL3Bvc3RzLyR7YVBvc3QuaWR9YH0+XG5cdFx0XHRcdFx0XHQ8YSB0aXRsZT1cIkRvd25sb2FkIHBvZGNhc3RcIj5cblx0XHRcdFx0XHRcdFx0PHNwYW4+e2FQb3N0LnRpdGxlfTwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvbGk+XG5cdFx0XHQpXG5cdFx0fSlcblx0XHRkZWxldGUgcG9zdExpc3RbMF1cblx0XHRtb3JlUG9zdHMgPSAoXG5cdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdDxoND5QcmV2aW91cyBFcGlzb2RlczwvaDQ+XG5cdFx0XHRcdDx1bD57cG9zdExpc3R9PC91bD5cblx0XHRcdFx0PGg0Pk1vcmUgZXBpc29kZXMgY29taW5nIHNvb24hPC9oND5cblx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0KVxuXHR9IGVsc2Uge1xuXHRcdG1vcmVQb3N0cyA9IDxoND5Nb3JlIGVwaXNvZGVzIGNvbWluZyBzb29uITwvaDQ+XG5cdH1cblx0cmV0dXJuIChcblx0XHQ8TGF5b3V0PlxuXHRcdFx0PE1ldGFIZWFkXG5cdFx0XHRcdHBhZ2VUeXBlPVwiQ29sbGVjdGlvblBhZ2VcIlxuXHRcdFx0XHRidWlsZERhdGU9e2J1aWxkRGF0ZU9ian1cblx0XHRcdFx0a2V5d29yZHM9e1tcImhvcnJvclwiLCBcInpvbWJpZXNcIiwgXCJjb3ZpZC0xOVwiLCBcImNvcm9uYXZpcnVzXCIsIFwicG9kY2FzdFwiXX1cblx0XHRcdD48L01ldGFIZWFkPlxuXHRcdFx0PFNpdGVOYXYgLz5cblx0XHRcdDxNYWluQ29udGFpbmVyPlxuXHRcdFx0XHQ8SnVtYm90cm9uPlxuXHRcdFx0XHRcdDxSb3c+XG5cdFx0XHRcdFx0XHQ8Q29sdW1uU3BhbiBzcGFuQ291bnQ9XCI2XCI+XG5cdFx0XHRcdFx0XHRcdDxoMT5Qb2Qgb2YgTWFkbmVzczwvaDE+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxlYWRcIj5MaWZlIGlzIE1hZDwvcD5cblx0XHRcdFx0XHRcdDwvQ29sdW1uU3Bhbj5cblx0XHRcdFx0XHRcdDxDb2x1bW5TcGFuIHNwYW5Db3VudD1cIjZcIj5cblx0XHRcdFx0XHRcdFx0PGNlbnRlciBjbGFzc05hbWU9XCJmdW5cIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvYXN0ZXIgYW5pbWF0ZWRcIj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9jZW50ZXI+XG5cdFx0XHRcdFx0XHRcdDxjZW50ZXIgY2xhc3NOYW1lPVwibG9nb1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiaHR0cHM6Ly9wb2RvZm1hZG5lc3MuY29tL2Fzc2V0cy9sb2dvLXRyYW5zcGFyZW50LnBuZ1wiIC8+XG5cdFx0XHRcdFx0XHRcdDwvY2VudGVyPlxuXHRcdFx0XHRcdFx0PC9Db2x1bW5TcGFuPlxuXHRcdFx0XHRcdDwvUm93PlxuXHRcdFx0XHQ8L0p1bWJvdHJvbj5cblx0XHRcdFx0PFJvdz5cblx0XHRcdFx0XHQ8Q29sdW1uU3BhbiBzcGFuQ291bnQ9XCIxMlwiPlxuXHRcdFx0XHRcdFx0PGg0PlxuXHRcdFx0XHRcdFx0XHRQb2Qgb2YgTWFkbmVzcyBpcyBhIGhvcnJvci1jb21lZHkgc2hvdyB0aGF0IHByb3ZlcyBsaWZlIGlzIG1hZC5cblx0XHRcdFx0XHRcdDwvaDQ+XG5cdFx0XHRcdFx0XHQ8aHIgLz5cblx0XHRcdFx0XHQ8L0NvbHVtblNwYW4+XG5cdFx0XHRcdDwvUm93PlxuXHRcdFx0XHQ8Um93IGNsYXNzTmFtZT1cIm1haW4tY29udGVudFwiPlxuXHRcdFx0XHRcdDxDb2x1bW5TcGFuIHNwYW5Db3VudD1cIjZcIj5cblx0XHRcdFx0XHRcdDxQb3N0XG5cdFx0XHRcdFx0XHRcdHBvc3Q9e2FsbFBvc3RzRGF0YVswXX1cblx0XHRcdFx0XHRcdFx0aXNOZXc9e3RydWV9XG5cdFx0XHRcdFx0XHRcdGlzRnVsbD17ZmFsc2V9XG5cdFx0XHRcdFx0XHRcdGlzU29jaWFsPXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRpc0Zyb250PXt0cnVlfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0NvbHVtblNwYW4+XG5cdFx0XHRcdFx0PENvbHVtblNwYW4gc3BhbkNvdW50PVwiNFwiPlxuXHRcdFx0XHRcdFx0PGg0Pkxpc3RlbiB0byBvdXIgU29jaWFsIFNvdW5kQml0ZXM6PC9oND5cblx0XHRcdFx0XHRcdDxBVHdlZXQgdHdpdHRlclVybD17YWxsU29jaWFsRGF0YVswXS5zb2NpYWxQcm9tcHR9IC8+XG5cdFx0XHRcdFx0PC9Db2x1bW5TcGFuPlxuXHRcdFx0XHRcdDxDb2x1bW5TcGFuIHNwYW5Db3VudD1cIjJcIj57bW9yZVBvc3RzfTwvQ29sdW1uU3Bhbj5cblx0XHRcdFx0PC9Sb3c+XG5cdFx0XHQ8L01haW5Db250YWluZXI+XG5cblx0XHRcdDxmb290ZXI+PC9mb290ZXI+XG5cblx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0Y29kZSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZhZmFmYTtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdFx0XHRcdFx0cGFkZGluZzogMC43NXJlbTtcblx0XHRcdFx0XHRmb250LXNpemU6IDEuMXJlbTtcblx0XHRcdFx0XHRmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgTHVjaWRhIENvbnNvbGUsIExpYmVyYXRpb24gTW9ubyxcblx0XHRcdFx0XHRcdERlamFWdSBTYW5zIE1vbm8sIEJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubywgQ291cmllciBOZXcsIG1vbm9zcGFjZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuXHRcdFx0XHRcdGNvZGUge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cblx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgYH08L3N0eWxlPlxuXHRcdDwvTGF5b3V0PlxuXHQpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcblx0Y29uc3QgYWxsUG9zdHNEYXRhID0gZ2V0U29ydGVkUG9zdHNEYXRhKFwiZXBpc29kZVwiKVxuXHRjb25zdCBhbGxTb2NpYWxEYXRhID0gZ2V0U29ydGVkUG9zdHNEYXRhKFwic29jaWFsU291bmRCaXRlXCIpXG5cdGNvbnNvbGUubG9nKFwiYWxsUG9zdHNEYXRhXCIsIGFsbFBvc3RzRGF0YVswXSlcblx0cmV0dXJuIHtcblx0XHRwcm9wczoge1xuXHRcdFx0YWxsUG9zdHNEYXRhLFxuXHRcdFx0YWxsU29jaWFsRGF0YSxcblx0XHRcdGJ1aWxkRGF0ZTogbmV3IERhdGUoKS50b1N0cmluZygpLFxuXHRcdH0sXG5cdH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/zuckerscharffa/Dev/podofmadness/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.5505e1f563346ce7be0d.hot-update.js.map