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

/***/ })

})
//# sourceMappingURL=index.js.cc5fb5cdaf55029f74db.hot-update.js.map