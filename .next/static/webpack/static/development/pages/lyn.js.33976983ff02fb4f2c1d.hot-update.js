webpackHotUpdate("static/development/pages/lyn.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_styles_css_lyn_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/styles/css/lyn.css */ "./public/styles/css/lyn.css");
/* harmony import */ var _public_styles_css_lyn_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_styles_css_lyn_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Lyn/Desktop/Projects/ethe_design/components/lyn-components.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Profile = function Profile() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('auto'),
      height = _useState[0],
      setHeight = _useState[1];

  return __jsx("div", {
    id: "profile",
    className: "lyn-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    id: "image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx("div", {
    id: "nameTitleLocation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("h2", {
    id: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Lyn O'Connor"), __jsx("h2", {
    id: "title",
    className: "grey-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "UI Developer"), __jsx("div", {
    id: "contact-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("a", {
    className: "contact-link",
    href: "mailto:ljoconnor5@gmail.com",
    id: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "ljoconnor5@gmail.com"), __jsx("a", {
    className: "contact-link",
    href: "tel:+2672438796",
    id: "phone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "267.243.8796"), __jsx("a", {
    className: "contact-link",
    href: "https://www.linkedin.com/in/lyndon-jackson-541a5b18/",
    target: "_blank",
    id: "linkedin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "LinkedIn"))));
};
var Portfolio = function Portfolio() {
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('auto'),
      stateHeight = _useState2[0],
      setStateHeight = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('rotate(0deg)'),
      arrowPos = _useState3[0],
      setArrowPos = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    height: 'auto',
    transform: 'rotate(0deg)',
    marginBottom: 49
  }),
      tabStyle = _useState4[0],
      setTabStyle = _useState4[1];

  var toggleTab = function toggleTab() {
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

  var Project = function Project(props) {
    return __jsx("div", {
      className: "portfolio-project",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("a", {
      className: "project-image-link",
      href: props.imageLink,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("img", {
      className: "portfolio-image",
      src: props.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    })), __jsx("div", {
      className: "project-info-div",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("a", {
      href: props.imageLink,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("h3", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, props.projectName)), __jsx("h5", {
      className: "tech",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, props.projectTech), __jsx("a", {
      href: props.xdLink,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("div", {
      className: "design-doc-div",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("img", {
      className: "xd-icon",
      src: '/assets/icons/lyn-page/xd-icon.png',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), __jsx("h5", {
      className: "design-doc-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "Design Documents")))));
  };

  return __jsx(LynTab, {
    title: 'Projects',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(Project, {
    image: '/assets/images/ethe.png',
    projectName: 'Ethe Design Site',
    projectTech: 'Interface with React and Sass in Next.js architecture. Redux managed state. Optimized with React.lazy & Webpack.',
    imageLink: '/',
    xdLink: 'https://xd.adobe.com/view/5c54b440-3964-4159-7353-f2eb278083b7-2a65/grid/',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx(Project, {
    image: '/assets/images/phone2.png',
    projectName: 'Divy Mobile App',
    projectTech: 'Built with React Native on Expo. Fetches REST API data and uses global Redux state and Firebase database.',
    imageLink: 'https://lynjackson.github.io/bill_page',
    xdLink: 'https://xd.adobe.com/view/5ec009d3-2a06-4639-40a6-b639838c3164-28f1/grid/',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx(Project, {
    image: '/assets/images/ptstudio.jpeg',
    projectName: 'Perfect Touch Studio Site',
    projectTech: 'Interface built with React and CSS from Adobe XD mockups. Next.js architecture. State managed with Redux and optimized with Webpack.',
    imageLink: 'https://ptstudio.ljoconnor5.now.sh/',
    xdLink: 'https://xd.adobe.com/view/6f8d950c-f4fb-489c-41da-49f00099f610-19bc/grid/',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }));
};
var Experience = function Experience(props) {
  var ExperienceItem = function ExperienceItem(props) {
    return __jsx("div", {
      className: "experience-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("div", {
      className: "item-stats",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, __jsx("h3", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, props.title), __jsx("h3", {
      className: "place",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, props.place), __jsx("h5", {
      className: "time",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, props.time)), __jsx("p", {
      className: "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, props.description));
  };

  return __jsx(LynTab, {
    title: 'Experience',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(ExperienceItem, {
    place: "Bill, Inc.",
    title: "UI Developer",
    time: "09/18 - 06/20",
    description: "Leading a team of three creating an application that allows restaurant diners to pay with mobile devices. We used a human centered design process to devise the app\u2019s flow. I created wireframes using UI design principles and Adobe XD, then translated them into React Native syntax down to the pixel. I connected and manage the app\u2019s REST API and Firebase database. I\u2019m continuously learning about mobile UI design and development, and how it differs from browser focused development.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), __jsx(ExperienceItem, {
    place: "Freelance",
    title: "Frontend Developer",
    time: "07/17 - 09/18",
    description: "I designed and built websites for several clients. For each project, I designed the interface with Adobe XD, and built the views with React. Each project was built responsively using 375px and 2560px as general outer limits. I used a variety of other technologies for each project, depending on need. These projects helped me develop a nuanced understanding of React\u2019s lifecycle and data flow. I learned to skillfully write functional JavaScript and efficient and responsive CSS using Sass. ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), __jsx(ExperienceItem, {
    place: "Jones Day",
    title: "Counsel",
    time: "10/15 - 01/18",
    description: "I led large teams of lawyers in identifying potential legal issues and creating company snapshots for corporate transactions. Teams usually changed from deal to deal, so quickly learning to work with people was important. I usually served as a principal point of communication between my team and our clients. My experience taught me the meaning of professionalism, and the importance of owning the larger mission and being a good teammate.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }));
};
var Education = function Education(props) {
  var EducationItem = function EducationItem(props) {
    return __jsx("div", {
      className: "education-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, __jsx("h3", {
      className: "school",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, props.school), __jsx("h3", {
      className: "degree",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, props.degree));
  };

  return __jsx(LynTab, {
    title: 'Education',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx(EducationItem, {
    school: "J.D., 2015",
    degree: "University of Pennsylvania",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), __jsx(EducationItem, {
    school: "B.A., 2012",
    degree: "Johns Hopkins University",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }));
};
var More = function More(props) {
  return __jsx(LynTab, {
    title: 'More',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "My driving force as a developer is the idea that others might find what I make useful and delightful. An interface can give users actual joy, or cause them intense frustration. I believe we should strive for the former, not just because it endears customers to our products and brands, but because it\u2019s our opportunity to make the world more pleasant to live in."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "I\u2019m at my best when working on a team that\u2019s committed to its mission. I thrive on the sense of accountability to my teammates and believe professionalism comes down to bringing 100% every day, good and bad. Extensive experience contributing large, time-sensitive projects has taught me to own my part, communicate well and often, and cherish opportunities to learn from those around me."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "I\u2019m a disciple of both development and design, adherent to best practices in code and UI design principles. I strive for mastery of the frontend landscape, always open to new tech and creative solutions to speed up applications and implement designs with precision. I\u2019m committed to thinking my way around problems, and try to live with a balance of openness, diligence, courage and joy. "));
};

var LynTab = function LynTab(props) {
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('auto'),
      stateHeight = _useState5[0],
      setStateHeight = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('rotate(0deg)'),
      arrowPos = _useState6[0],
      setArrowPos = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    height: 'auto',
    transform: 'rotate(0deg)',
    marginBottom: 49
  }),
      tabStyle = _useState7[0],
      setTabStyle = _useState7[1];

  var toggleTab = function toggleTab() {
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
      lineNumber: 128
    },
    __self: this
  }, __jsx("div", {
    id: "portfolio-tab",
    className: "tab",
    onClick: function onClick() {
      toggleTab();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, " ", __jsx("h2", {
    className: "grey-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, props.title), " ", __jsx("img", {
    className: "little-arrow",
    src: '/assets/icons/dropArrow.png',
    style: {
      transform: tabStyle.transform
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }), " "), props.children);
};

/***/ })

})
//# sourceMappingURL=lyn.js.33976983ff02fb4f2c1d.hot-update.js.map