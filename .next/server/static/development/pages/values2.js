module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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

const Header = props => {
  //component variables
  const menuOpen = {
    height: '100vh',
    background: 'linear-gradient(#212121, #3D3D3D)'
  };
  const defaultHeader = {
    height: 58.67,
    background: props.headerBackground
  };
  const MenuButtonStyle = {
    display: 'flex',
    width: 26.63,
    height: 17.08,
    zIndex: 100
  };
  const closeXStyle = {
    display: 'flex',
    width: 18.83,
    height: 19.29,
    zIndex: 100
  }; //component state(s)

  const {
    0: navOpStyle,
    1: setNavOpStyle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    display: 'none',
    opacity: 0
  });
  const {
    0: headerStyle,
    1: setHeaderStyle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    height: 58.67,
    paddingTop: props.paddingTop,
    background: props.headerBackground
  });
  const {
    0: menuOption,
    1: changeMenuOption
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    // icon: 'assets/icons/header/menu.png',
    icon: props.menuIcon,
    style: {
      display: 'flex',
      width: 26.63,
      height: 17.08,
      zIndex: 100
    }
  }); //DOM work

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.getElementById('header').addEventListener('wheel', e => {
      if (headerStyle.height === '100vh') {
        e.preventDefault();
      }
    }, {
      passive: true
    });
    window.addEventListener('scroll', () => {
      window.pageYOffset > 5 && document.getElementById('above-fold') ? document.getElementById('logo2').style.opacity = 0 : document.getElementById('logo2').style.opacity = 1;
    });
  }); //rendered content

  return __jsx("div", {
    id: "header",
    style: headerStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx("div", {
    id: "header-items2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx("img", {
    src: props.logoImage,
    id: "logo2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  })), __jsx("img", {
    src: menuOption.icon,
    style: menuOption.style,
    onClick: () => {
      if (headerStyle.height === 58.67) {
        setHeaderStyle(menuOpen);
        setNavOpStyle({
          display: 'flex',
          opacity: 0
        });
        setTimeout(() => {
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
          icon: 'assets/icons/header/menu-black.png',
          style: MenuButtonStyle
        });
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  })), __jsx("div", {
    id: "nav-options",
    style: navOpStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, __jsx("a", {
    href: "/lyn",
    className: "nav-option",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, "our designer")), __jsx("hr", {
    id: "divider",
    style: {
      borderWidth: 1,
      borderColor: '#A3A3A3',
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }), __jsx("a", {
    href: "/values2",
    className: "nav-option",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, "our values"))));
};
const HomeHeader = () => {
  return __jsx(Header, {
    logoImage: "/assets/icons/header/logo-black.png",
    menuIcon: "assets/icons/header/menu-black.png",
    headerItemsJustifyContent: "space-between",
    headerBackground: "rgba(0,0,0,0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  });
};
const ValuesHeader = () => {
  return __jsx(Header, {
    logoImage: "/assets/icons/header/logo-white.png",
    menuIcon: "assets/icons/header/menu-white.png",
    logoDisplay: "flex",
    headerItemsJustifyContent: "space-between",
    headerBackground: "rgba(0,0,0,0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  });
};
const LynHeader = () => {
  return __jsx(Header, {
    logoImage: "/assets/icons/header/logo-white.png",
    menuIcon: "assets/icons/header/menu-white.png",
    logoDisplay: "flex",
    paddingTop: 22,
    headerItemsJustifyContent: "space-between",
    headerBackground: "linear-gradient(#212121, #3D3D3D)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  });
};
const HomeHeader2 = () => {
  const blackish = 'rgb(26,26,26)';
  const whitish = 'rgb(244,244,244)';
  const {
    0: headerBackground,
    1: setBack
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(window.location.pathname === '/ethe_design' && window.pageYOffset < 5 ? 'hsla(0,0,96, 1)' : blackish);
  const {
    0: headerHeight,
    1: setHeight
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(58.67);
  const {
    0: stateDisplay,
    1: setStateDisplay
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('none');
  const {
    0: stateJustify,
    1: setStateJustify
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('center');
  const {
    0: statePadding,
    1: setStatePadding
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: offset,
    1: setOffset
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: screenWidth,
    1: setScreenWidth
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(window.innerWidth);
  const {
    0: headerStyle,
    1: setHeaderStyle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    height: 58.67,
    justifyContent: 'center',
    paddingTop: 0,
    background: 'rgba(0,0,0,0)'
  });
  console.log(screenWidth, 'screenWidth');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('resize', e => {
      setScreenWidth(window.innerWidth);
    });
    window.addEventListener('scroll', e => {
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
      lineNumber: 155
    },
    __self: undefined
  }, __jsx("div", {
    id: "header-items2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: undefined
  }, __jsx("img", {
    src: 'assets/icons/header/menu.png',
    style: {
      display: 'flex'
    },
    id: "menu2",
    onClick: () => {
      if (headerHeight === 58.67) {
        setStateJustify('flex-start');
        setStatePadding(11);
        setHeight('100vh');
        setStateDisplay('flex');
      } else {
        setHeight(58.67);
        setStateDisplay('none');
        setTimeout(() => {
          setStateJustify('center');
          setStatePadding(0);
        }, 500);
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: undefined
  })), __jsx("div", {
    id: "nav-options",
    style: {
      display: stateDisplay
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }, __jsx(Link, {
    to: "/ethe_design/values",
    className: "nav-option",
    onClick: () => {
      setHeight(58.67);
      setBack(blackish);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: undefined
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: undefined
  }, "our values")), __jsx("hr", {
    id: "divider",
    style: {
      borderWidth: 1,
      borderColor: '#A3A3A3',
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: undefined
  }), __jsx(Link, {
    to: "/ethe_design/lyn",
    className: "nav-option",
    onClick: () => {
      setHeight(58.67);
      setBack(blackish);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: undefined
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: undefined
  }, "our designer"))));
};
const Headerz = () => {
  const blackish = 'rgb(26,26,26)';
  const whitish = 'rgb(244,244,244)';
  const {
    0: headerBackground,
    1: setBack
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(window.location.pathname === '/ethe_design' && window.pageYOffset < 5 ? 'hsla(0,0,96, 1)' : blackish);
  const {
    0: headerHeight,
    1: setHeight
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(58.67);
  const {
    0: stateDisplay,
    1: setStateDisplay
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('none');
  const {
    0: stateJustify,
    1: setStateJustify
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('center');
  const {
    0: statePadding,
    1: setStatePadding
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: offset,
    1: setOffset
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: screenWidth,
    1: setScreenWidth
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(window.innerWidth);
  console.log(screenWidth, 'screenWidth');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('resize', e => {
      setScreenWidth(window.innerWidth);
    });
    window.addEventListener('scroll', e => {
      setOffset(window.pageYOffset);
      console.log(offset, 'offset');
    });
    document.getElementById('header2').addEventListener('wheel', e => {
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
      lineNumber: 216
    },
    __self: undefined
  }, __jsx("div", {
    id: "header-items2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: undefined
  }, __jsx(Link, {
    to: "/ethe_design",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: undefined
  }, __jsx("img", {
    src: 'assets/icons/header/logo-semibold.png',
    id: "logo2",
    style: {
      filter: headerHeight === '100vh' || window.location.pathname !== '/ethe_design' ? 'invert(1)' : 'invert(0)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: undefined
  })), __jsx("img", {
    src: 'assets/icons/header/menu.png',
    style: {
      display: 'flex'
    },
    id: "menu2",
    onClick: () => {
      if (headerHeight === 58.67) {
        setStateDisplay('flex');
        setStateJustify('flex-start');
        setStatePadding(11);
        setHeight('100vh');
      } else {
        setHeight(58.67);
        setStateDisplay('none');
        setTimeout(() => {
          setStateJustify('center');
          setStatePadding(0);
        }, 500);
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: undefined
  })), __jsx("div", {
    id: "nav-options",
    style: {
      display: stateDisplay
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: undefined
  }, __jsx(Link, {
    to: "/ethe_design/values",
    className: "nav-option",
    onClick: () => {
      setHeight(58.67);
      setBack(blackish);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: undefined
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: undefined
  }, "our values")), __jsx("hr", {
    id: "divider",
    style: {
      borderWidth: 1,
      borderColor: '#A3A3A3',
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: undefined
  }), __jsx(Link, {
    to: "/ethe_design/lyn",
    className: "nav-option",
    onClick: () => {
      setHeight(58.67);
      setBack(blackish);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: undefined
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: undefined
  }, "our designer"))));
};

/***/ }),

/***/ "./pages/values2.js":
/*!**************************!*\
  !*** ./pages/values2.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_styles_css_values_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/styles/css/values.css */ "./public/styles/css/values.css");
/* harmony import */ var _public_styles_css_values_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_styles_css_values_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header2 */ "./components/header2.js");
var _jsxFileName = "/Users/Lyn/Desktop/Projects/ethe_design/pages/values2.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import '/assets/icons/values-down-arrow.png' from '/assets/icons/values-down-arrow.png'



const Values = () => {
  const {
    0: counter,
    1: setCounter
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: touchStartPoint,
    1: setTouchStartPoint
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const title = ['Openness', 'Service', 'Evaluation', 'experience', 'renounce', 'enjoy', 'diligence'];
  const text = ['Only by embracing the unknown and staying open are we free to find solutions we can’t initially imagine.', 'We try to empathize with the experiences of others, and help out where we can.', 'We regularly assess the productive value of things and adjust accordingly. We’re not that cool with convention.', 'Experience is all we really have. We don’t take our’s or others’ lightly.', 'We live for the process more than the result. And somehow, the result is usually better for it.', 'We try to find joy in whatever we do.', 'If something is worth doing, its worth doing wholeheartedly.'];

  const nextValue = () => {
    shrinkContent();
    setTimeout(() => {
      setCounter(counter + 1);
    }, 500);
  };

  const prevValue = () => {
    shrinkContent();
    setTimeout(() => {
      setCounter(counter - 1);
    }, 500);
  };

  const shrinkContent = () => {
    document.getElementById('value-text-div').style.width = 0;
    document.getElementById('value-text').style.bottom = '10px';
    document.getElementById('value-text').style.opacity = 0;
    document.getElementById('value-title').style.opacity = 0;
  };

  const readWheel = e => {
    if (document.getElementById('value-title')) {
      if (e.deltaY < 0 && counter <= 5) {
        nextValue();
        window.removeEventListener('wheel', readWheel);
      } else if (e.deltaY > 0 && counter >= 1) {
        prevValue();
        window.removeEventListener('wheel', readWheel);
      }
    }
  };

  const readSwipe = e => {
    // setTimeout(()=>{
    window.removeEventListener('touchend', readSwipe);

    if (e.changedTouches[0].screenY < touchStartPoint - 0 && counter <= 5) {
      nextValue();
    } else if (e.changedTouches[0].screenY > touchStartPoint + 0 && counter >= 1) {
      prevValue();
    }
  };

  const touchStart = e => {
    setTouchStartPoint(e.changedTouches[0].clientY);
  };

  const keyReaders = e => {
    window.removeEventListener('keyup', keyReaders);

    if (e.keyCode === 40 && counter <= 5) {
      nextValue();
    } else if (e.keyCode === 38 && counter >= 1) {
      prevValue();
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.getElementById('value-title').style.opacity = 1;
    document.getElementById('value-text').style.opacity = 1;
    document.getElementById('value-text-div').style.width = '92%';
    document.getElementById('value-text').style.bottom = '0px'; // 1. On render or state change, styles of changing content are set.

    window.removeEventListener('wheel', readWheel);
    window.removeEventListener('touchend', readSwipe);
    window.removeEventListener('touchstart', touchStart);
    window.removeEventListener('keyup', keyReaders);
    document.getElementById('down-arrow').removeEventListener('click', nextValue);
    setTimeout(() => {
      window.addEventListener('wheel', readWheel);
    }, 1250); // 2. After 1.5s, wheel event listener is added to the window.

    window.addEventListener('touchend', readSwipe);
    window.addEventListener('touchstart', touchStart);
    window.addEventListener('keyup', keyReaders);
    document.getElementById('down-arrow').addEventListener('click', nextValue);
  });
  return __jsx("div", {
    id: "page_value",
    className: "page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, __jsx(_components_header2__WEBPACK_IMPORTED_MODULE_2__["ValuesHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }), __jsx("div", {
    id: "value-con",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, __jsx("div", {
    id: "title-and-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, __jsx("h1", {
    id: "value-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, title[counter]), __jsx("div", {
    id: "value-text-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, __jsx("p", {
    id: "value-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, text[counter]))), __jsx("div", {
    id: "counterAndArrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, __jsx("h4", {
    id: "value-counter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, `0${counter + 1}`, "/07"), __jsx("img", {
    src: '/assets/icons/values-down-arrow.png',
    id: "down-arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Values);

/***/ }),

/***/ "./public/styles/css/header2.css":
/*!***************************************!*\
  !*** ./public/styles/css/header2.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/styles/css/values.css":
/*!**************************************!*\
  !*** ./public/styles/css/values.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 6:
/*!********************************!*\
  !*** multi ./pages/values2.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Lyn/Desktop/Projects/ethe_design/pages/values2.js */"./pages/values2.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=values2.js.map