(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./components/header2.js":
/*!*******************************!*\
  !*** ./components/header2.js ***!
  \*******************************/
/*! exports provided: Header, HomeHeader, ValuesHeader, LynHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeHeader", function() { return HomeHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValuesHeader", function() { return ValuesHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LynHeader", function() { return LynHeader; });
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
    logo: props.logo
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
    logo: window.location.pathname === '/' ? '/assets/icons/header/logo-white.png' : props.logoImage,
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
    logo: "/assets/icons/header/logo-white.png",
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
    logo: "/assets/icons/header/logo-white.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  });
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

var AboveFold = function AboveFold(props) {
  var topSpace = window.pageYOffset;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      state = _useState[0],
      setState = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setTimeout(function () {
      window.addEventListener('scroll', function () {
        if (window.pageYOffset < 5) {
          document.getElementById('above-title').style.opacity = 1;
        } else {
          document.getElementById('above-title').style.opacity = .1;
        }
      }), 3000;
    });
    window.addEventListener('resize', function () {
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
    __self: this
  }, __jsx("h4", {
    className: "home-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "HEY, WE'RE ETHE."), __jsx("h1", {
    id: "above-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "We ", __jsx("span", {
    id: "team-up",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "team up"), " with ", __jsx("span", {
    id: "creatives",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "creatives"), " to make meaningful digital ", __jsx("span", {
    id: "dig-exp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "experiences")));
};
var Services = function Services() {
  // const [servicesOpacity, setOpacity] = useState(.18)
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener('scroll', function () {
      window.pageYOffset > 5 && window.pageYOffset < 500 ? document.getElementById('services').style.opacity = 1 : document.getElementById('services').style.opacity = .18;
    });
  });

  var Service = function Service(props) {
    return __jsx("div", {
      className: "service",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx("img", {
      src: props.img,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), __jsx("div", {
      className: "service-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx("h3", {
      className: "service-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, props.title), __jsx("p", {
      className: "service-para",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
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
    __self: this
  }, __jsx(Service, {
    img: '/assets/icons/campaign.png',
    title: 'Crafting digital experiences',
    description: 'We aim to associate your brand with joy in the minds of users.',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx(Service, {
    img: '/assets/icons/report.png',
    title: 'Finding knowledge in data',
    description: 'Data adds science to your art, taking you from guesswork to informed decisions.',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), __jsx(Service, {
    img: '/assets/icons/speed.png',
    title: 'Improving through strategy',
    description: 'We analyze performance to enhance the experience further.',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }));
};
var Projects = function Projects() {
  // const [stateOpacity, setOpacity] = useState(.18)
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener('scroll', function () {
      document.getElementById('projects') && window.pageYOffset > 3 && window.pageYOffset < document.getElementById('projects').offsetTop + 100 ? document.getElementById('project-container').style.opacity = 1 : document.getElementById('project-container').style.opacity = .19;
    });
    document.getElementById('project-container').style.opacity = .18;
  });

  var Project = function Project(props) {
    return __jsx("div", {
      className: "project",
      style: {
        backgroundImage: "url(".concat(props.background, ")"),
        color: props.textColor
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, __jsx("a", {
      href: props.link,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, __jsx("div", {
      className: "overlay",
      style: {
        background: "linear-gradient(359deg, ".concat(props.color1, ", ").concat(props.color2, ")")
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, __jsx("img", {
      className: "logo",
      src: props.logo,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }), __jsx("h4", {
      className: "tagline",
      style: {
        color: props.textColor
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, props.tagline))));
  };

  return __jsx("div", {
    id: "projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx("h4", {
    className: "home-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "CLIENT WORK"), __jsx("div", {
    id: "project-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx("div", {
    className: "project",
    style: {
      backgroundImage: "url(".concat('/assets/images/bill-background.jpeg', ")"),
      color: '#FFFFFFC4'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("a", {
    href: "https://lynjackson.github.io/bill_page",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx("div", {
    className: "overlay",
    style: {
      background: "linear-gradient(359deg, ".concat('#000000B2', ", ", '#00000014', ")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("img", {
    className: "logo",
    src: '/assets/icons/bill.png',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }), __jsx("h4", {
    className: "tagline",
    style: {
      color: '#FFFFFFC4'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
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
    __self: this
  })));
};
var Vision = function Vision() {
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      state = _useState2[0],
      stateRefresh = _useState2[1]; // const [stateOpacity, setOpacity] = useState(.18)


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener('scroll', function () {
      document.getElementById('vision') && window.pageYOffset > document.getElementById('vision').offsetTop - 423 ? document.getElementById('vision').style.opacity = 1 : document.getElementById('vision').style.opacity = .18;
    });
    window.addEventListener('resize', function () {
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
    __self: this
  }, __jsx("h4", {
    className: "home-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "WE THINK"), window.innerWidth < 1024 ? __jsx("div", {
    id: "vision-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx("h1", {
    id: "vision-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "Every interaction is a chance to captivate."), __jsx("div", {
    id: "vision-image",
    src: '/assets/images/puddle.jpeg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }), __jsx("p", {
    id: "vision-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "Customers remember how you make them feel. They expect intuitive products with useful information and capability. Our products aim to deliver in a way that maximizes positive feelings, which clients then associate with your brand.")) : __jsx("div", {
    id: "vision-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx("div", {
    id: "titleAndText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx("h1", {
    id: "vision-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "Every interaction is a chance to captivate."), __jsx("p", {
    id: "vision-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "Customers remember how you make them feel. They expect intuitive products with useful information and capability. Our products aim to deliver in a way that maximizes positive feelings, which clients then associate with your brand.")), __jsx("div", {
    id: "vision-image",
    src: '/assets/images/puddle.jpeg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  })), __jsx("a", {
    href: "/ethe_design/values",
    className: "nav-option",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx("h4", {
    className: "home-header",
    id: "more-values",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "MORE VALUES")));
};

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2FLyn%2FDesktop%2FProjects%2Fethe_design%2Fpages%2Findex.js!./":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2FLyn%2FDesktop%2FProjects%2Fethe_design%2Fpages%2Findex.js ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_e9ad7d891b372a4221cf ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_e9ad7d891b372a4221cf */ "dll-reference dll_e9ad7d891b372a4221cf"))("./node_modules/react/index.js");

/***/ }),

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
        background: 'linear-gradient(#FFFFFF, #BDBDBD)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("img", {
      id: "triangle",
      width: 30,
      src: '/assets/icons/header/triangle.png',
      style: {
        alignSelf: 'center'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
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

/***/ }),

/***/ 0:
/*!*************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2FLyn%2FDesktop%2FProjects%2Fethe_design%2Fpages%2Findex.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2FLyn%2FDesktop%2FProjects%2Fethe_design%2Fpages%2Findex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2FLyn%2FDesktop%2FProjects%2Fethe_design%2Fpages%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_e9ad7d891b372a4221cf":
/*!*******************************************!*\
  !*** external "dll_e9ad7d891b372a4221cf" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_e9ad7d891b372a4221cf;

/***/ })

},[[0,"static/runtime/webpack.js","styles"]]]);
//# sourceMappingURL=index.js.map