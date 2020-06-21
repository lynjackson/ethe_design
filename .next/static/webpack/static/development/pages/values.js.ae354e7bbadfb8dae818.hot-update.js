webpackHotUpdate("static/development/pages/values.js",{

/***/ "./pages/values.js":
/*!*************************!*\
  !*** ./pages/values.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_styles_css_values_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/styles/css/values.css */ "./public/styles/css/values.css");
/* harmony import */ var _public_styles_css_values_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_styles_css_values_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header2 */ "./components/header2.js");
var _jsxFileName = "/Users/Lyn/Desktop/Projects/ethe_design/pages/values.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import '/assets/icons/values-down-arrow.png' from '/assets/icons/values-down-arrow.png'



var Values = function Values() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('no'),
      loadStatus = _useState[0],
      setLoad = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      counter = _useState2[0],
      setCounter = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      touchStartPoint = _useState3[0],
      setTouchStartPoint = _useState3[1];

  var title = ['diligence', 'joy', 'service', 'courage', 'receptivity'];
  var text = ['If doing something, do it all the way.', 'We try to focus on the pleasant elements.', 'Let’s empathize with the experiences of others, and help out where we can.', 'Though the future is ours to shape, we acknowledge the present as it is.', 'Only by embracing the unknown are we free to find solutions we can’t initially imagine.'];

  var nextValue = function nextValue() {
    shrinkContent();
    setTimeout(function () {
      setCounter(counter + 1);
    }, 500);
  };

  var prevValue = function prevValue() {
    shrinkContent();
    setTimeout(function () {
      setCounter(counter - 1);
    }, 500);
  };

  var shrinkContent = function shrinkContent() {
    document.getElementById('value-text-div').style.width = 0;
    document.getElementById('value-text').style.bottom = '10px';
    document.getElementById('value-text').style.opacity = 0;
    document.getElementById('value-title').style.opacity = 0;
  };

  var readWheel = function readWheel(e) {
    if (document.getElementById('value-title')) {
      if (e.deltaY > 0 && counter <= 3) {
        nextValue();
        window.removeEventListener('wheel', readWheel);
      } else if (e.deltaY < 0 && counter >= 1) {
        prevValue();
        window.removeEventListener('wheel', readWheel);
      }
    }
  };

  var readSwipe = function readSwipe(e) {
    // setTimeout(()=>{
    window.removeEventListener('touchend', readSwipe);

    if (e.changedTouches[0].screenY < touchStartPoint - 0 && counter <= 3) {
      nextValue();
    } else if (e.changedTouches[0].screenY > touchStartPoint + 0 && counter >= 1) {
      prevValue();
    }
  };

  var touchStart = function touchStart(e) {
    setTouchStartPoint(e.changedTouches[0].clientY);
  };

  var keyReaders = function keyReaders(e) {
    window.removeEventListener('keyup', keyReaders);

    if (e.keyCode === 40 && counter <= 3) {
      nextValue();
    } else if (e.keyCode === 38 && counter >= 1) {
      prevValue();
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.getElementById('value-title').style.opacity = 1;
    document.getElementById('value-text').style.opacity = 1;
    document.getElementById('value-text-div').style.width = '92%';
    document.getElementById('value-text').style.bottom = '0px'; // 1. On render or state change, styles of changing content are set.

    window.removeEventListener('wheel', readWheel);
    window.removeEventListener('touchend', readSwipe);
    window.removeEventListener('touchstart', touchStart);
    window.removeEventListener('keyup', keyReaders);
    document.getElementById('down-arrow').removeEventListener('click', nextValue);
    setTimeout(function () {
      window.addEventListener('wheel', readWheel);
    }, 1250); // 2. After 1.5s, wheel event listener is added to the window.

    window.addEventListener('touchend', readSwipe);
    window.addEventListener('touchstart', touchStart);
    window.addEventListener('keyup', keyReaders);
    document.getElementById('down-arrow').addEventListener('click', nextValue);
  }); // if(loadStatus === 'no'){
  //   return (
  //     <div style={{height:'100vh', width:'100vw', background:'linear-gradient(#212121, #3D3D3D)'}}><h1>loading</h1></div>
  //   )
  // }

  return __jsx("div", {
    id: "page_value",
    className: "page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx(_components_header2__WEBPACK_IMPORTED_MODULE_2__["ValuesHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), __jsx("div", {
    id: "value-con",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("div", {
    id: "title-and-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("h1", {
    id: "value-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, title[counter]), __jsx("div", {
    id: "value-text-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("p", {
    id: "value-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, text[counter]))), __jsx("div", {
    id: "counterAndArrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("h4", {
    id: "value-counter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "0".concat(counter + 1), "/07"), __jsx("img", {
    src: '/assets/icons/values-down-arrow.png',
    id: "down-arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Values);

/***/ })

})
//# sourceMappingURL=values.js.ae354e7bbadfb8dae818.hot-update.js.map