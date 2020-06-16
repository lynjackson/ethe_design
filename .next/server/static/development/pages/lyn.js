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
/*! exports provided: Header, HomeHeader, ValuesHeader, LynHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeHeader", function() { return HomeHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValuesHeader", function() { return ValuesHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LynHeader", function() { return LynHeader; });
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
    background: 'linear-gradient(#212121, #3D3D3D)',
    logo: props.logo
  };
  const defaultHeader = {
    height: 58.67,
    background: props.headerBackground,
    paddingTop: props.paddingTop,
    logo: props.logoImage
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
    background: props.headerBackground,
    logo: props.logoImage
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
      lineNumber: 52
    },
    __self: undefined
  }, __jsx("div", {
    id: "header-items2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx("img", {
    src: headerStyle.logo,
    id: "logo2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
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
          icon: props.menuIcon,
          style: MenuButtonStyle
        });
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  })), __jsx("div", {
    id: "nav-options",
    style: navOpStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx("a", {
    href: "/values2",
    className: "nav-option",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
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
    __self: undefined
  }), __jsx("a", {
    href: "/lyn",
    className: "nav-option",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, "creator"))));
};
const HomeHeader = () => {
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
    logo: "/assets/icons/header/logo-white.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
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
    logo: "/assets/icons/header/logo-white.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  });
};

/***/ }),

/***/ "./components/lyn-components.js":
/*!**************************************!*\
  !*** ./components/lyn-components.js ***!
  \**************************************/
/*! exports provided: Profile, Portfolio, Experience, Education, More */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Portfolio", function() { return Portfolio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Experience", function() { return Experience; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Education", function() { return Education; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "More", function() { return More; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_styles_css_lyn_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/styles/css/lyn.css */ "./public/styles/css/lyn.css");
/* harmony import */ var _public_styles_css_lyn_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_styles_css_lyn_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Lyn/Desktop/Projects/ethe_design/components/lyn-components.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import {ContactLink} from './lyn/contact-link';

 // import LynImage from '../assets/images/lyn2.jpg';

const Profile = () => {
  const {
    0: height,
    1: setHeight
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('auto');
  return __jsx("div", {
    id: "profile",
    className: "lyn-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("div", {
    id: "image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), __jsx("div", {
    id: "nameTitleLocation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("h2", {
    id: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "Lyn O'Connor"), __jsx("h2", {
    id: "title",
    className: "grey-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "UI Developer"), __jsx("div", {
    id: "contact-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("a", {
    className: "contact-link",
    href: "mailto:ljoconnor5@gmail.com",
    id: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "ljoconnor5@gmail.com"), __jsx("a", {
    className: "contact-link",
    href: "tel:+2672438796",
    id: "phone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "267.243.8796"), __jsx("a", {
    className: "contact-link",
    href: "https://www.linkedin.com/in/lyndon-jackson-541a5b18/",
    target: "_blank",
    id: "linkedin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "LinkedIn"))));
};
const Portfolio = () => {
  const {
    0: stateHeight,
    1: setStateHeight
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('auto');
  const {
    0: arrowPos,
    1: setArrowPos
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('rotate(0deg)');
  const {
    0: tabStyle,
    1: setTabStyle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    height: 'auto',
    transform: 'rotate(0deg)',
    marginBottom: 49
  });

  const toggleTab = () => {
    tabStyle.height === 'auto' ? setTabStyle({
      height: 69,
      transform: 'rotate(-90deg)',
      marginBottom: 0
    }) : setTabStyle({
      height: 'auto',
      transform: 'rotate(0deg)',
      marginBottom: 49
    });
  };

  const Project = props => {
    return __jsx("div", {
      className: "portfolio-project",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: undefined
    }, __jsx("a", {
      className: "project-image-link",
      href: props.imageLink,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: undefined
    }, __jsx("img", {
      className: "portfolio-image",
      src: props.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: undefined
    })), __jsx("div", {
      className: "project-info-div",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: undefined
    }, __jsx("a", {
      href: props.imageLink,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: undefined
    }, __jsx("h3", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: undefined
    }, props.projectName)), __jsx("h5", {
      className: "tech",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: undefined
    }, props.projectTech), __jsx("a", {
      href: props.xdLink,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: undefined
    }, __jsx("div", {
      className: "design-doc-div",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: undefined
    }, __jsx("img", {
      className: "xd-icon",
      src: '/assets/icons/lyn-page/xd-icon.png',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: undefined
    }), __jsx("h5", {
      className: "design-doc-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: undefined
    }, "Design Documents")))));
  };

  return __jsx(LynTab, {
    title: 'Projects',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx(Project, {
    image: '/assets/images/ethe.png',
    projectName: 'Ethe Design Site',
    projectTech: 'Built view layer with React and Sass. Optimized with React.lazy. Hosted with Next.js.',
    imageLink: '/ethe_design',
    xdLink: 'https://xd.adobe.com/view/5c54b440-3964-4159-7353-f2eb278083b7-2a65/screen/26a9b51d-f537-4eb0-be5c-214f3870daf8/Vision-15-1',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }), __jsx(Project, {
    image: '/assets/images/phone2.png',
    projectName: 'Diner Android App',
    projectTech: 'Built with React Native. Fetches REST API menu data and uses global Redux state and Firebase Database.',
    imageLink: 'https://lynjackson.github.io/bill_page',
    xdLink: 'https://xd.adobe.com/view/5ec009d3-2a06-4639-40a6-b639838c3164-28f1/',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }), __jsx(Project, {
    image: '/assets/images/ptstudio.jpeg',
    projectName: 'Perfect Touch Studio Site',
    projectTech: 'Designed in Adobe XD. Built view layer with React and Sass. Used Next.js as a framework.',
    imageLink: 'https://ptstudio.ljoconnor5.now.sh/',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }));
};
const Experience = props => {
  const ExperienceItem = props => {
    return __jsx("div", {
      className: "experience-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: undefined
    }, __jsx("div", {
      className: "item-stats",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: undefined
    }, __jsx("h3", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: undefined
    }, props.title), __jsx("h3", {
      className: "place",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: undefined
    }, props.place), __jsx("h5", {
      className: "time",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: undefined
    }, props.time)), __jsx("p", {
      className: "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: undefined
    }, props.description));
  };

  return __jsx(LynTab, {
    title: 'Experience',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, __jsx(ExperienceItem, {
    place: "Bill, Inc.",
    title: "UI Developer",
    time: "12/19 - 05/19",
    description: "I lead a team of three creating an iOS/Android application that allows restaurant diners to pay with mobile devices. We used a human centered design process to devise the app\u2019s flow. I created wireframes using UI design principles and Adobe XD, then translated them into React Native syntax down to the pixel. I connected and manage the app\u2019s REST API and Firebase database. I\u2019m continuously learning about mobile UI design and development, and how it differs from browser focused development.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }), __jsx(ExperienceItem, {
    place: "Freelance",
    title: "Frontend Developer",
    time: "12/18 - 07/19",
    description: "I designed and built websites for several clients. For each project, I designed the interface with Adobe XD, and built the views with React. Each project was built responsively using 375px and 2560px as general outer limits. I used a variety of other technologies for each project, depending on need. These projects helped me develop a nuanced understanding of React\u2019s lifecycle and data flow. I learned to skillfully write functional JavaScript and efficient and responsive CSS using Sass. ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }), __jsx(ExperienceItem, {
    place: "Jones Day",
    title: "Counsel",
    time: "10/15 - 06/18",
    description: "I led large teams of lawyers in identifying potential legal issues and creating company snapshots for corporate transactions. Teams usually changed from deal to deal, so quickly learning to work with people was important. I usually served as a principal point of communication between my team and our clients. My experience taught me the meaning of professionalism, and the importance of owning the larger mission and being a good teammate.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }));
};
const Education = props => {
  const EducationItem = props => {
    return __jsx("div", {
      className: "education-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: undefined
    }, __jsx("h3", {
      className: "school",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: undefined
    }, props.school), __jsx("h3", {
      className: "degree",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: undefined
    }, props.degree));
  };

  return __jsx(LynTab, {
    title: 'Education',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, __jsx(EducationItem, {
    school: "University of Pennsylvania",
    degree: "Juris Doctor, 2015",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }), __jsx(EducationItem, {
    school: "Johns Hopkins University",
    degree: "B.A., 2012",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }));
};
const More = props => {
  return __jsx(LynTab, {
    title: 'More',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, "I believe in the power of the interface to influence the hearts and minds of users. I strive to create fast, useful products that give users a sense of ease, and enjoy working with individuals who think similarly. I am always trying to grow my body of knowledge, and have committed to thinking my way around problems. "), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, "I\u2019m a student of both development and design; adherent to UI principles and best practices of development. Developers are users too, perhaps not of the product, but of the code that comprises it. It\u2019s important to me that code be clean, efficient and readable."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, "I enjoy working as part of team, collectively trying to solve a problem we all care about. I understand the importance of communication and flexibility in teamwork, and prioritize and enjoy finding ways to streamline my workflow. "), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, "I try to learn from my mistakes, and live with a balance of humility, diligence, empathy and patience. "));
};

const LynTab = props => {
  const {
    0: stateHeight,
    1: setStateHeight
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('auto');
  const {
    0: arrowPos,
    1: setArrowPos
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('rotate(0deg)');
  const {
    0: tabStyle,
    1: setTabStyle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    height: 'auto',
    transform: 'rotate(0deg)',
    marginBottom: 49
  });

  const toggleTab = () => {
    tabStyle.height === 'auto' ? setTabStyle({
      height: 69,
      transform: 'rotate(-90deg)',
      marginBottom: 0
    }) : setTabStyle({
      height: 'auto',
      transform: 'rotate(0deg)',
      marginBottom: 49
    });
  };

  return __jsx("div", {
    className: "lyn-section",
    style: {
      height: tabStyle.height,
      marginBottom: tabStyle.marginBottom
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }, __jsx("div", {
    id: "portfolio-tab",
    className: "tab",
    onClick: () => {
      toggleTab();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }, " ", __jsx("h2", {
    className: "grey-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }, props.title), " ", __jsx("img", {
    className: "little-arrow",
    src: '/assets/icons/dropArrow.png',
    style: {
      transform: tabStyle.transform
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }), " "), props.children);
};

/***/ }),

/***/ "./pages/lyn.js":
/*!**********************!*\
  !*** ./pages/lyn.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header2 */ "./components/header2.js");
/* harmony import */ var _components_lyn_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/lyn-components */ "./components/lyn-components.js");
var _jsxFileName = "/Users/Lyn/Desktop/Projects/ethe_design/pages/lyn.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import { selectBook, overlay, menu, valueNextPage, valuePrevPage, defaultView, defaultHeader, invertHeader, menuHeader, scrollHeader, values} from '../actions/index.js'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux';



const Lyn2 = () => {
  // useEffect(()=>{
  //   window.removeEventListener('scroll', ()=>{
  //     (window.pageYOffset > document.getElementById('projects').offsetTop - 423) ? setOpacity(1) : setOpacity(.18)
  //   })
  // })
  const {
    0: loadStatus,
    1: setLoadStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('no');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.onload = () => {
      setLoadStatus('yes');
    };

    setTimeout(() => {
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
      __self: undefined
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: undefined
    }, "loading"));
  }

  return __jsx("div", {
    id: "page_lyn",
    className: "page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx(_components_header2__WEBPACK_IMPORTED_MODULE_1__["LynHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), __jsx(_components_lyn_components__WEBPACK_IMPORTED_MODULE_2__["Profile"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }), __jsx("div", {
    id: "right-side",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx(_components_lyn_components__WEBPACK_IMPORTED_MODULE_2__["Portfolio"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), __jsx(_components_lyn_components__WEBPACK_IMPORTED_MODULE_2__["Experience"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }), __jsx(_components_lyn_components__WEBPACK_IMPORTED_MODULE_2__["Education"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }), __jsx(_components_lyn_components__WEBPACK_IMPORTED_MODULE_2__["More"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Lyn2);

/***/ }),

/***/ "./public/styles/css/header2.css":
/*!***************************************!*\
  !*** ./public/styles/css/header2.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/styles/css/lyn.css":
/*!***********************************!*\
  !*** ./public/styles/css/lyn.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 5:
/*!****************************!*\
  !*** multi ./pages/lyn.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Lyn/Desktop/Projects/ethe_design/pages/lyn.js */"./pages/lyn.js");


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
//# sourceMappingURL=lyn.js.map