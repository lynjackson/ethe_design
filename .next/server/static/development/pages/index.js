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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

/***/ "./components/homeComponents.js":
/*!**************************************!*\
  !*** ./components/homeComponents.js ***!
  \**************************************/
/*! exports provided: AboveFold, Services, Projects, Vision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboveFold", function() { return AboveFold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Services", function() { return Services; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Projects", function() { return Projects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vision", function() { return Vision; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_styles_css_home_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/styles/css/home.css */ "./public/styles/css/home.css");
/* harmony import */ var _public_styles_css_home_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_styles_css_home_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Lyn/Desktop/Projects/ethe_design/components/homeComponents.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import '../../styles/home/aboveFold.css';

 // import { HashRouter, Switch, Link, Route, Redirect } from "react-router-dom";
// import Experiences from '/assets/icons/campaign.png';
// import Data from '/assets/icons/report.png';
// import Performance from '/assets/icons/speed.png';
// import art from '/assets/images/cover.jpeg'
// import bill_back from '/assets/images/bill-background.jpeg'
// import studio from '/assets/images/studio.png'
// import puddle from '/assets/images/puddle.jpeg'
// import bill_logo from '../public/assets/icons/bill.png'

const AboveFold = props => {
  const topSpace = window.pageYOffset;
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setTimeout(() => {
      window.addEventListener('scroll', () => {
        if (window.pageYOffset < 5) {
          document.getElementById('above-title').style.opacity = 1;
        } else {
          document.getElementById('above-title').style.opacity = .1;
        }
      }), 3000;
    });
    window.addEventListener('resize', () => {
      setState(state + 1);
    });
  });
  return __jsx("div", {
    id: "above-fold",
    style: {
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx("h4", {
    className: "home-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "HEY, WE'RE ETHE."), __jsx("h1", {
    id: "above-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "We ", __jsx("span", {
    id: "team-up",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "team up"), " with ", __jsx("span", {
    id: "creatives",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "creatives"), " to make meaningful digital ", __jsx("span", {
    id: "dig-exp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "experiences")));
};
const Services = () => {
  // const [servicesOpacity, setOpacity] = useState(.18)
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('scroll', () => {
      window.pageYOffset > 5 && window.pageYOffset < 500 ? document.getElementById('services').style.opacity = 1 : document.getElementById('services').style.opacity = .18;
    });
  });

  const Service = props => {
    return __jsx("div", {
      className: "service",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: undefined
    }, __jsx("img", {
      src: props.img,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: undefined
    }), __jsx("div", {
      className: "service-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: undefined
    }, __jsx("h3", {
      className: "service-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: undefined
    }, props.title), __jsx("p", {
      className: "service-para",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: undefined
    }, props.description)));
  };

  return __jsx("div", {
    id: "services",
    style: {
      opacity: .18
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx(Service, {
    img: '/assets/icons/campaign.png',
    title: 'Crafting digital experiences',
    description: 'We aim to associate your brand with joy in the minds of users.',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }), __jsx(Service, {
    img: '/assets/icons/report.png',
    title: 'Finding knowledge in data',
    description: 'Data adds science to your art, taking you from guesswork to informed decisions.',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }), __jsx(Service, {
    img: '/assets/icons/speed.png',
    title: 'Improving through strategy',
    description: 'We analyze performance to enhance the experience further.',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }));
};
const Projects = () => {
  // const [stateOpacity, setOpacity] = useState(.18)
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('scroll', () => {
      document.getElementById('projects') && window.pageYOffset > 3 && window.pageYOffset < document.getElementById('projects').offsetTop + 100 ? document.getElementById('project-container').style.opacity = 1 : document.getElementById('project-container').style.opacity = .19;
    });
    document.getElementById('project-container').style.opacity = .18;
  });

  const Project = props => {
    return __jsx("div", {
      className: "project",
      style: {
        backgroundImage: `url(${props.background})`,
        color: props.textColor
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: undefined
    }, __jsx("a", {
      href: props.link,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: undefined
    }, __jsx("div", {
      className: "overlay",
      style: {
        background: `linear-gradient(359deg, ${props.color1}, ${props.color2})`
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: undefined
    }, __jsx("img", {
      className: "logo",
      src: props.logo,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: undefined
    }), __jsx("h4", {
      className: "tagline",
      style: {
        color: props.textColor
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: undefined
    }, props.tagline))));
  };

  return __jsx("div", {
    id: "projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, __jsx("h4", {
    className: "home-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, "CLIENT WORK"), __jsx("div", {
    id: "project-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, __jsx("div", {
    className: "project",
    style: {
      backgroundImage: `url(${'/assets/images/bill-background.jpeg'})`,
      color: '#FFFFFFC4'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, __jsx("a", {
    href: "https://lynjackson.github.io/bill_page",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, __jsx("div", {
    className: "overlay",
    style: {
      background: `linear-gradient(359deg, ${'#000000B2'}, ${'#00000014'})`
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, __jsx("img", {
    className: "logo",
    src: '/assets/icons/bill.png',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }), __jsx("h4", {
    className: "tagline",
    style: {
      color: '#FFFFFFC4'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, 'A better way to order')))), __jsx(Project, {
    background: '/assets/images/cover.jpeg',
    logo: '/assets/images/studio.png',
    tagline: 'The creative space',
    color1: '#FFFFFFC4',
    color2: '#FFFFFF14',
    textColor: '#000000B2',
    link: 'https://ptstudio.ljoconnor5.now.sh/',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  })));
};
const Vision = () => {
  const {
    0: state,
    1: stateRefresh
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0); // const [stateOpacity, setOpacity] = useState(.18)

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('scroll', () => {
      document.getElementById('vision') && window.pageYOffset > document.getElementById('vision').offsetTop - 423 ? document.getElementById('vision').style.opacity = 1 : document.getElementById('vision').style.opacity = .18;
    });
    window.addEventListener('resize', () => {
      stateRefresh(state + 1);
    });
  });
  return __jsx("div", {
    id: "vision",
    style: {
      opacity: .18
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }, __jsx("h4", {
    className: "home-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }, "WE THINK"), window.innerWidth < 1024 ? __jsx("div", {
    id: "vision-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }, __jsx("h1", {
    id: "vision-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  }, "Every interaction is a chance to captivate."), __jsx("div", {
    id: "vision-image",
    src: '/assets/images/puddle.jpeg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }), __jsx("p", {
    id: "vision-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  }, "Customers remember how you make them feel. They expect intuitive products with useful information and capability. Our products aim to deliver in a way that maximizes positive feelings, which clients then associate with your brand.")) : __jsx("div", {
    id: "vision-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, __jsx("div", {
    id: "titleAndText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }, __jsx("h1", {
    id: "vision-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  }, "Every interaction is a chance to captivate."), __jsx("p", {
    id: "vision-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }, "Customers remember how you make them feel. They expect intuitive products with useful information and capability. Our products aim to deliver in a way that maximizes positive feelings, which clients then associate with your brand.")), __jsx("div", {
    id: "vision-image",
    src: '/assets/images/puddle.jpeg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  })), __jsx("a", {
    href: "/ethe_design/values",
    className: "nav-option",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: undefined
  }, __jsx("h4", {
    className: "home-header",
    id: "more-values",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: undefined
  }, "MORE VALUES")));
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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



const Home2 = props => {
  const {
    0: loadStatus,
    1: setLoad
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('no');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // window.onload = ()=>{setLoad('yes')}
    if (loadStatus === 'no') {
      window.addEventListener('load', () => {
        setLoad('yes');
      });
    }

    window.scrollTo(0, 0);
    console.log(loadStatus, 'load');
    document.getElementsByTagName("html")[0].style.backgroundImage = 'url(/assets/images/back_home.jpg)';
  });

  if (loadStatus === 'no') {
    return __jsx("div", {
      style: {
        height: '100vh',
        width: '100vw',
        background: 'linear-gradient(#212121, #3D3D3D)'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: undefined
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: undefined
    }, "loading"));
  }

  return __jsx("div", {
    id: "home",
    className: "page",
    style: {
      opacity: loadStatus === 'yes' ? 1 : 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx(_components_header2__WEBPACK_IMPORTED_MODULE_1__["HomeHeader"], {
    logoVis: "hidden",
    headerItemsJustifyContent: "flex-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), __jsx(_components_homeComponents__WEBPACK_IMPORTED_MODULE_5__["AboveFold"], {
    appState: props,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), __jsx(_components_homeComponents__WEBPACK_IMPORTED_MODULE_5__["Projects"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }), __jsx(_components_homeComponents__WEBPACK_IMPORTED_MODULE_5__["Vision"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home2);

/***/ }),

/***/ "./public/styles/css/app.css":
/*!***********************************!*\
  !*** ./public/styles/css/app.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/styles/css/header2.css":
/*!***************************************!*\
  !*** ./public/styles/css/header2.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/styles/css/home.css":
/*!************************************!*\
  !*** ./public/styles/css/home.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/styles/css/pages.css":
/*!*************************************!*\
  !*** ./public/styles/css/pages.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Lyn/Desktop/Projects/ethe_design/pages/index.js */"./pages/index.js");


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
//# sourceMappingURL=index.js.map