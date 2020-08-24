webpackHotUpdate("static/development/pages/index.js",{

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
      urlId = _ref.urlId,
      extendedData = _ref.extendedData;

  var jsonLD = _objectSpread({
    "@context": "http://schema.org",
    "@type": pageType ? pageType : "CollectionPage",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://podofmadness.com" + urlId
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
//# sourceMappingURL=index.js.afc4b99add98c27d55ce.hot-update.js.map