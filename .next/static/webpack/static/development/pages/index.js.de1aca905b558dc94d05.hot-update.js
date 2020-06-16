webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header2 */ "./components/header2.js");
/* harmony import */ var _public_styles_css_app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/styles/css/app.css */ "./public/styles/css/app.css");
/* harmony import */ var _public_styles_css_app_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_styles_css_app_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_styles_css_home_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/styles/css/home.css */ "./public/styles/css/home.css");
/* harmony import */ var _public_styles_css_home_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_styles_css_home_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_styles_css_pages_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/styles/css/pages.css */ "./public/styles/css/pages.css");
/* harmony import */ var _public_styles_css_pages_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_styles_css_pages_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_homeComponents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/homeComponents */ "./components/homeComponents.js");

var _jsxFileName = "/Users/Lyn/Desktop/Projects/ethe_design/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




 // import { selectBook, overlay, menu, valueNextPage, valuePrevPage, defaultView, defaultHeader, invertHeader, menuHeader, scrollHeader, values} from '../actions/index.js'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux';
// import {Services} from '../components/homeComponents';



var Home2 = function Home2(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('no'),
      loadStatus = _useState[0],
      setLoad = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.onload = function () {
      setLoad('yes');
      console.log('loaded!');
    };

    setTimeout(function () {
      if (loadStatus === 'no') {
        setLoad('yes');
      }
    }, 2000);
    window.scrollTo(0, 0);
    console.log(loadStatus, 'load');
    document.getElementsByTagName("html")[0].style.backgroundImage = 'url(/assets/images/back_home.jpg)';
  });

  if (loadStatus === 'no') {
    var _jsx;

    return __jsx("div", {
      style: {
        height: '100vh',
        width: '100vw',
        background: 'linear-gradient(#212121, #3D3D3D)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "loading"), __jsx("img", (_jsx = {
      id: "triangle",
      width: 30,
      src: '/assets/icons/header/triangle.png',
      style: {
        alignSelf: 'center'
      }
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "id", "logo2"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
      fileName: _jsxFileName,
      lineNumber: 35
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), _jsx)), __jsx("div", {
      id: "load-bar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }));
  }

  return __jsx("div", {
    id: "home",
    className: "page",
    style: {
      opacity: loadStatus === 'yes' ? 1 : 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_components_header2__WEBPACK_IMPORTED_MODULE_2__["HomeHeader"], {
    logoVis: "hidden",
    headerItemsJustifyContent: "flex-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx(_components_homeComponents__WEBPACK_IMPORTED_MODULE_6__["AboveFold"], {
    appState: props,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx(_components_homeComponents__WEBPACK_IMPORTED_MODULE_6__["Projects"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx(_components_homeComponents__WEBPACK_IMPORTED_MODULE_6__["Vision"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home2);

/***/ })

})
//# sourceMappingURL=index.js.de1aca905b558dc94d05.hot-update.js.map