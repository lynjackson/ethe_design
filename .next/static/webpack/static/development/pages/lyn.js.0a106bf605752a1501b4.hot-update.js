webpackHotUpdate("static/development/pages/lyn.js",{

/***/ "./pages/lyn.js":
/*!**********************!*\
  !*** ./pages/lyn.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header2 */ "./components/header2.js");
/* harmony import */ var _components_lyn_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/lyn-components */ "./components/lyn-components.js");
var _jsxFileName = "/Users/Lyn/Desktop/Projects/ethe_design/pages/lyn.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import { selectBook, overlay, menu, valueNextPage, valuePrevPage, defaultView, defaultHeader, invertHeader, menuHeader, scrollHeader, values} from '../actions/index.js'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux';



var Lyn2 = function Lyn2() {
  // useEffect(()=>{
  //   window.removeEventListener('scroll', ()=>{
  //     (window.pageYOffset > document.getElementById('projects').offsetTop - 423) ? setOpacity(1) : setOpacity(.18)
  //   })
  // })
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('no'),
      loadStatus = _useState[0],
      setLoadStatus = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.onload = function () {
      setLoadStatus('yes');
    };

    setTimeout(function () {
      if (loadStatus === 'no') {
        setLoadStatus('yes');
      }
    }, 2000);
    document.getElementsByTagName("html")[0].style.backgroundImage = 'url(/assets/images/back_lyn.jpg)';
  });

  if (loadStatus === 'no') {
    return __jsx("div", {
      style: {
        height: '100vh',
        width: '100vw',
        backgroundColor: 'green'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "loading"));
  }

  return __jsx("div", {
    id: "page_lyn",
    className: "page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_components_header2__WEBPACK_IMPORTED_MODULE_1__["LynHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx(_components_lyn_components__WEBPACK_IMPORTED_MODULE_2__["Profile"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("div", {
    id: "right-side",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(_components_lyn_components__WEBPACK_IMPORTED_MODULE_2__["Portfolio"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx(_components_lyn_components__WEBPACK_IMPORTED_MODULE_2__["Experience"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx(_components_lyn_components__WEBPACK_IMPORTED_MODULE_2__["Education"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx(_components_lyn_components__WEBPACK_IMPORTED_MODULE_2__["More"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Lyn2);

/***/ })

})
//# sourceMappingURL=lyn.js.0a106bf605752a1501b4.hot-update.js.map