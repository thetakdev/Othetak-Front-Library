"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Home;
var _image = _interopRequireDefault(require("next/image"));
var _pageModule = _interopRequireDefault(require("./page.module.css"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Home() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("main", {
    className: _pageModule.default.main,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: _pageModule.default.description,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
        children: ["Get started by editing\xA0", /*#__PURE__*/(0, _jsxRuntime.jsx)("code", {
          className: _pageModule.default.code,
          children: "src/app/page.tsx"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
          href: "https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
          target: "_blank",
          rel: "noopener noreferrer",
          children: ["By", " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_image.default, {
            src: "/vercel.svg",
            alt: "Vercel Logo",
            className: _pageModule.default.vercelLogo,
            width: 100,
            height: 24,
            priority: true
          })]
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: _pageModule.default.center,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_image.default, {
        className: _pageModule.default.logo,
        src: "/next.svg",
        alt: "Next.js Logo",
        width: 180,
        height: 37,
        priority: true
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: _pageModule.default.grid,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
        href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
        className: _pageModule.default.card,
        target: "_blank",
        rel: "noopener noreferrer",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h2", {
          children: ["Docs ", /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: "->"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: "Find in-depth information about Next.js features and API."
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
        href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
        className: _pageModule.default.card,
        target: "_blank",
        rel: "noopener noreferrer",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h2", {
          children: ["Learn ", /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: "->"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: "Learn about Next.js in an interactive course with\xA0quizzes!"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
        href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
        className: _pageModule.default.card,
        target: "_blank",
        rel: "noopener noreferrer",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h2", {
          children: ["Templates ", /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: "->"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: "Explore starter templates for Next.js."
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
        href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
        className: _pageModule.default.card,
        target: "_blank",
        rel: "noopener noreferrer",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h2", {
          children: ["Deploy ", /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: "->"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: "Instantly deploy your Next.js site to a shareable URL with Vercel."
        })]
      })]
    })]
  });
}