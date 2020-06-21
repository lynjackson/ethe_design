webpackHotUpdate("static/development/pages/index.js",{

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
      lineNumber: 25
    },
    __self: this
  }, __jsx("h4", {
    className: "home-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "HEY, WE'RE ETHE."), __jsx("h1", {
    id: "above-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "We ", __jsx("span", {
    id: "team-up",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "team up"), " with ", __jsx("span", {
    id: "creatives",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "creatives"), " to make meaningful digital ", __jsx("span", {
    id: "dig-exp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
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
        lineNumber: 44
      },
      __self: this
    }, __jsx("img", {
      src: props.img,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), __jsx("div", {
      className: "service-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("h3", {
      className: "service-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, props.title), __jsx("p", {
      className: "service-para",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
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
      lineNumber: 55
    },
    __self: this
  }, __jsx(Service, {
    img: '/assets/icons/campaign.png',
    title: 'Crafting digital experiences',
    description: 'We aim to associate your brand with joy in the minds of users.',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx(Service, {
    img: '/assets/icons/report.png',
    title: 'Finding knowledge in data',
    description: 'Data adds science to your art, taking you from guesswork to informed decisions.',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx(Service, {
    img: '/assets/icons/speed.png',
    title: 'Improving through strategy',
    description: 'We analyze performance to enhance the experience further.',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
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
        lineNumber: 77
      },
      __self: this
    }, __jsx("a", {
      href: props.link,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, __jsx("div", {
      className: "overlay",
      style: {
        background: "linear-gradient(359deg, ".concat(props.color1, ", ").concat(props.color2, ")")
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, __jsx("img", {
      className: "logo",
      src: props.logo,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }), __jsx("h4", {
      className: "tagline",
      style: {
        color: props.textColor
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, props.tagline))));
  };

  return __jsx("div", {
    id: "projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("h4", {
    className: "home-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "CLIENT WORK"), __jsx("div", {
    id: "project-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
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
      lineNumber: 92
    },
    __self: this
  }, __jsx("a", {
    href: "https://lynjackson.github.io/bill_page",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("div", {
    className: "overlay",
    style: {
      background: "linear-gradient(359deg, ".concat('#000000B2', ", ", '#00000014', ")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("img", {
    className: "logo",
    src: '/assets/icons/bill.png',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), __jsx("h4", {
    className: "tagline",
    style: {
      color: '#FFFFFFC4'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
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
      lineNumber: 100
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
      lineNumber: 120
    },
    __self: this
  }, __jsx("h4", {
    className: "home-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "WE THINK"), window.innerWidth < 1024 ? __jsx("div", {
    id: "vision-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("h1", {
    id: "vision-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "Every interaction is a chance to captivate."), __jsx("div", {
    id: "vision-image",
    src: '/assets/images/puddle.jpeg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }), __jsx("p", {
    id: "vision-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "Customers remember how you make them feel. They expect intuitive products with useful information and capability. Our products aim to deliver in a way that maximizes positive feelings, which clients then associate with your brand.")) : __jsx("div", {
    id: "vision-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx("div", {
    id: "titleAndText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, __jsx("h1", {
    id: "vision-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "Every interaction is a chance to captivate."), __jsx("p", {
    id: "vision-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "Customers remember how you make them feel. They expect intuitive products with useful information and capability. Our products aim to deliver in a way that maximizes positive feelings, which clients then associate with your brand.")), __jsx("div", {
    id: "vision-image",
    src: '/assets/images/puddle.jpeg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  })), __jsx("a", {
    href: "/values",
    className: "nav-option",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx("h4", {
    className: "home-header",
    id: "more-values",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "MORE VALUES")));
};

/***/ })

})
//# sourceMappingURL=index.js.72bad9616ab2305603a9.hot-update.js.map