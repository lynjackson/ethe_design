webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header2 */ "./components/header2.js");
/* harmony import */ var _public_styles_css_app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/styles/css/app.css */ "./public/styles/css/app.css");
/* harmony import */ var _public_styles_css_app_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_styles_css_app_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_styles_css_home_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/styles/css/home.css */ "./public/styles/css/home.css");
/* harmony import */ var _public_styles_css_home_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_styles_css_home_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_styles_css_pages_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/styles/css/pages.css */ "./public/styles/css/pages.css");
/* harmony import */ var _public_styles_css_pages_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_styles_css_pages_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_homeComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/homeComponents */ "./components/homeComponents.js");
var _jsxFileName = "/Users/Lyn/Desktop/Projects/ethe_design/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // import { selectBook, overlay, menu, valueNextPage, valuePrevPage, defaultView, defaultHeader, invertHeader, menuHeader, scrollHeader, values} from '../actions/index.js'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux';
// import {Services} from '../components/homeComponents';



var Home2 = function Home2(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('no'),
      loadStatus = _useState[0],
      setLoad = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
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
    }, "loading"), __jsx("img", {
      width: 30,
      src: '/assets/icons/header/triangle.png',
      id: "logo2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), __jsx("div", {
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
  }, __jsx(_components_header2__WEBPACK_IMPORTED_MODULE_1__["HomeHeader"], {
    logoVis: "hidden",
    headerItemsJustifyContent: "flex-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx(_components_homeComponents__WEBPACK_IMPORTED_MODULE_5__["AboveFold"], {
    appState: props,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx(_components_homeComponents__WEBPACK_IMPORTED_MODULE_5__["Projects"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx(_components_homeComponents__WEBPACK_IMPORTED_MODULE_5__["Vision"], {
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
//# sourceMappingURL=index.js.2e52363d5d32b71b4ed3.hot-update.js.map