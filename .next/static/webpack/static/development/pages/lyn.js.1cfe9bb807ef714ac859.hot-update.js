webpackHotUpdate("static/development/pages/lyn.js",{

/***/ "./components/header2.js":
/*!*******************************!*\
  !*** ./components/header2.js ***!
  \*******************************/
/*! exports provided: Header, HomeHeader, ValuesHeader, LynHeader, HomeHeader2, Headerz */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeHeader", function() { return HomeHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValuesHeader", function() { return ValuesHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LynHeader", function() { return LynHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeHeader2", function() { return HomeHeader2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headerz", function() { return Headerz; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_styles_css_header2_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/styles/css/header2.css */ "./public/styles/css/header2.css");
/* harmony import */ var _public_styles_css_header2_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_styles_css_header2_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Lyn/Desktop/Projects/ethe_design/components/header2.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import { HashRouter, Switch, Link, Route, Redirect } from "react-router-dom";
// import ethey from 'assets/icons/header/logo-semibold.png';
// import menuButton from 'assets/icons/header/menu.png'
// import closeX from 'assets/icons/header/closeX.png'
// import plus from '../assets/images/plus-sign.png';

var Header = function Header(props) {
  //component variables
  var menuOpen = {
    height: '100vh',
    background: 'linear-gradient(#212121, #3D3D3D)',
    logo: window.location.pathname === '/' ? '/assets/icons/header/logo-white.png' : props.logoImage
  };
  var defaultHeader = {
    height: 58.67,
    background: props.headerBackground,
    paddingTop: props.paddingTop,
    logo: props.logoImage
  };
  var MenuButtonStyle = {
    display: 'flex',
    width: 26.63,
    height: 17.08,
    zIndex: 100
  };
  var closeXStyle = {
    display: 'flex',
    width: 18.83,
    height: 19.29,
    zIndex: 100
  }; //component state(s)

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    display: 'none',
    opacity: 0
  }),
      navOpStyle = _useState[0],
      setNavOpStyle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    height: 58.67,
    paddingTop: props.paddingTop,
    background: props.headerBackground,
    logo: props.logoImage
  }),
      headerStyle = _useState2[0],
      setHeaderStyle = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    // icon: 'assets/icons/header/menu.png',
    icon: props.menuIcon,
    style: {
      display: 'flex',
      width: 26.63,
      height: 17.08,
      zIndex: 100
    }
  }),
      menuOption = _useState3[0],
      changeMenuOption = _useState3[1]; //DOM work


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.getElementById('header').addEventListener('wheel', function (e) {
      if (headerStyle.height === '100vh') {
        e.preventDefault();
      }
    }, {
      passive: true
    });
    window.addEventListener('scroll', function () {
      window.pageYOffset > 5 && document.getElementById('above-fold') ? document.getElementById('logo2').style.opacity = 0 : document.getElementById('logo2').style.opacity = 1;
    });
  }); //rendered content

  return __jsx("div", {
    id: "header",
    style: headerStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("div", {
    id: "header-items2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("img", {
    src: headerStyle.logo,
    id: "logo2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  })), __jsx("img", {
    src: menuOption.icon,
    style: menuOption.style,
    onClick: function onClick() {
      if (headerStyle.height === 58.67) {
        setHeaderStyle(menuOpen);
        setNavOpStyle({
          display: 'flex',
          opacity: 0
        });
        setTimeout(function () {
          setNavOpStyle({
            opacity: 1
          });
          changeMenuOption({
            icon: 'assets/icons/header/closeX.png',
            style: closeXStyle
          });
        }, 250);
      } else {
        setHeaderStyle(defaultHeader);
        setNavOpStyle({
          display: 'none',
          opacity: 0
        });
        changeMenuOption({
          icon: props.menuIcon,
          style: MenuButtonStyle
        });
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  })), __jsx("div", {
    id: "nav-options",
    style: navOpStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("a", {
    href: "/values2",
    className: "nav-option",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "values")), __jsx("hr", {
    id: "divider",
    style: {
      borderWidth: 1,
      borderColor: '#A3A3A3',
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), __jsx("a", {
    href: "/lyn",
    className: "nav-option",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "creator"))));
};
var HomeHeader = function HomeHeader() {
  return __jsx(Header, {
    logoImage: "/assets/icons/header/logo-black.png",
    menuIcon: "assets/icons/header/menu-black.png",
    headerItemsJustifyContent: "space-between",
    headerBackground: "rgba(0,0,0,0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  });
};
var ValuesHeader = function ValuesHeader() {
  return __jsx(Header, {
    logoImage: "/assets/icons/header/logo-white.png",
    menuIcon: "assets/icons/header/menu-white.png",
    logoDisplay: "flex",
    headerItemsJustifyContent: "space-between",
    headerBackground: "rgba(0,0,0,0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  });
};
var LynHeader = function LynHeader() {
  return __jsx(Header, {
    logoImage: "/assets/icons/header/logo-white.png",
    menuIcon: "assets/icons/header/menu-white.png",
    logoDisplay: "flex",
    paddingTop: 22,
    headerItemsJustifyContent: "space-between",
    headerBackground: "linear-gradient(#212121, #3D3D3D)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  });
};
var HomeHeader2 = function HomeHeader2() {
  var blackish = 'rgb(26,26,26)';
  var whitish = 'rgb(244,244,244)';

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(window.location.pathname === '/ethe_design' && window.pageYOffset < 5 ? 'hsla(0,0,96, 1)' : blackish),
      headerBackground = _useState4[0],
      setBack = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(58.67),
      headerHeight = _useState5[0],
      setHeight = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('none'),
      stateDisplay = _useState6[0],
      setStateDisplay = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('center'),
      stateJustify = _useState7[0],
      setStateJustify = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      statePadding = _useState8[0],
      setStatePadding = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      offset = _useState9[0],
      setOffset = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(window.innerWidth),
      screenWidth = _useState10[0],
      setScreenWidth = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    height: 58.67,
    justifyContent: 'center',
    paddingTop: 0,
    background: 'rgba(0,0,0,0)'
  }),
      headerStyle = _useState11[0],
      setHeaderStyle = _useState11[1];

  console.log(screenWidth, 'screenWidth');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener('resize', function (e) {
      setScreenWidth(window.innerWidth);
    });
    window.addEventListener('scroll', function (e) {
      setOffset(window.pageYOffset);
      console.log(offset, 'offset');
    }); // document.getElementById('home-header').addEventListener('wheel', (e)=>{
    //   if(headerHeight === '100vh'){ e.preventDefault() }
    // })
  });
  return __jsx("div", {
    id: "home-header",
    style: {
      height: headerHeight,
      justifyContent: stateJustify,
      paddingTop: statePadding,
      background: headerHeight < 60 && window.location.pathname === '/ethe_design' ? 'rgba(0,0,0,0)' : 'linear-gradient(red, blue)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx("div", {
    id: "header-items2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, __jsx("img", {
    src: 'assets/icons/header/menu.png',
    style: {
      display: 'flex'
    },
    id: "menu2",
    onClick: function onClick() {
      if (headerHeight === 58.67) {
        setStateJustify('flex-start');
        setStatePadding(11);
        setHeight('100vh');
        setStateDisplay('flex');
      } else {
        setHeight(58.67);
        setStateDisplay('none');
        setTimeout(function () {
          setStateJustify('center');
          setStatePadding(0);
        }, 500);
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  })), __jsx("div", {
    id: "nav-options",
    style: {
      display: stateDisplay
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, __jsx(Link, {
    to: "/ethe_design/values",
    className: "nav-option",
    onClick: function onClick() {
      setHeight(58.67);
      setBack(blackish);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "our values")), __jsx("hr", {
    id: "divider",
    style: {
      borderWidth: 1,
      borderColor: '#A3A3A3',
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }), __jsx(Link, {
    to: "/ethe_design/lyn",
    className: "nav-option",
    onClick: function onClick() {
      setHeight(58.67);
      setBack(blackish);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, "our designer"))));
};
var Headerz = function Headerz() {
  var blackish = 'rgb(26,26,26)';
  var whitish = 'rgb(244,244,244)';

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(window.location.pathname === '/ethe_design' && window.pageYOffset < 5 ? 'hsla(0,0,96, 1)' : blackish),
      headerBackground = _useState12[0],
      setBack = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(58.67),
      headerHeight = _useState13[0],
      setHeight = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('none'),
      stateDisplay = _useState14[0],
      setStateDisplay = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('center'),
      stateJustify = _useState15[0],
      setStateJustify = _useState15[1];

  var _useState16 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      statePadding = _useState16[0],
      setStatePadding = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      offset = _useState17[0],
      setOffset = _useState17[1];

  var _useState18 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(window.innerWidth),
      screenWidth = _useState18[0],
      setScreenWidth = _useState18[1];

  console.log(screenWidth, 'screenWidth');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener('resize', function (e) {
      setScreenWidth(window.innerWidth);
    });
    window.addEventListener('scroll', function (e) {
      setOffset(window.pageYOffset);
      console.log(offset, 'offset');
    });
    document.getElementById('header2').addEventListener('wheel', function (e) {
      if (headerHeight === '100vh') {
        e.preventDefault();
      }
    });
  });
  return __jsx("div", {
    id: "header2",
    style: {
      height: headerHeight,
      justifyContent: stateJustify,
      paddingTop: statePadding,
      backgroundColor: headerHeight < 60 && window.location.pathname === '/ethe_design' ? whitish : blackish
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, __jsx("div", {
    id: "header-items2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, __jsx(Link, {
    to: "/ethe_design",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, __jsx("img", {
    src: 'assets/icons/header/logo-semibold.png',
    id: "logo2",
    style: {
      filter: headerHeight === '100vh' || window.location.pathname !== '/ethe_design' ? 'invert(1)' : 'invert(0)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  })), __jsx("img", {
    src: 'assets/icons/header/menu.png',
    style: {
      display: 'flex'
    },
    id: "menu2",
    onClick: function onClick() {
      if (headerHeight === 58.67) {
        setStateDisplay('flex');
        setStateJustify('flex-start');
        setStatePadding(11);
        setHeight('100vh');
      } else {
        setHeight(58.67);
        setStateDisplay('none');
        setTimeout(function () {
          setStateJustify('center');
          setStatePadding(0);
        }, 500);
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  })), __jsx("div", {
    id: "nav-options",
    style: {
      display: stateDisplay
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, __jsx(Link, {
    to: "/ethe_design/values",
    className: "nav-option",
    onClick: function onClick() {
      setHeight(58.67);
      setBack(blackish);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, "our values")), __jsx("hr", {
    id: "divider",
    style: {
      borderWidth: 1,
      borderColor: '#A3A3A3',
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }), __jsx(Link, {
    to: "/ethe_design/lyn",
    className: "nav-option",
    onClick: function onClick() {
      setHeight(58.67);
      setBack(blackish);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, "our designer"))));
};

/***/ })

})
//# sourceMappingURL=lyn.js.1cfe9bb807ef714ac859.hot-update.js.map