"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var image_1 = __importDefault(require("next/image"));
var page_module_css_1 = __importDefault(require("./page.module.css"));
function Home() {
    return ((0, jsx_runtime_1.jsxs)("main", __assign({ className: page_module_css_1.default.main }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: page_module_css_1.default.description }, { children: [(0, jsx_runtime_1.jsxs)("p", { children: ["Get started by editing\u00A0", (0, jsx_runtime_1.jsx)("code", __assign({ className: page_module_css_1.default.code }, { children: "src/app/page.tsx" }))] }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("a", __assign({ href: "https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app", target: "_blank", rel: "noopener noreferrer" }, { children: ["By", " ", (0, jsx_runtime_1.jsx)(image_1.default, { src: "/vercel.svg", alt: "Vercel Logo", className: page_module_css_1.default.vercelLogo, width: 100, height: 24, priority: true })] })) })] })), (0, jsx_runtime_1.jsx)("div", __assign({ className: page_module_css_1.default.center }, { children: (0, jsx_runtime_1.jsx)(image_1.default, { className: page_module_css_1.default.logo, src: "/next.svg", alt: "Next.js Logo", width: 180, height: 37, priority: true }) })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: page_module_css_1.default.grid }, { children: [(0, jsx_runtime_1.jsxs)("a", __assign({ href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app", className: page_module_css_1.default.card, target: "_blank", rel: "noopener noreferrer" }, { children: [(0, jsx_runtime_1.jsxs)("h2", { children: ["Docs ", (0, jsx_runtime_1.jsx)("span", { children: "->" })] }), (0, jsx_runtime_1.jsx)("p", { children: "Find in-depth information about Next.js features and API." })] })), (0, jsx_runtime_1.jsxs)("a", __assign({ href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app", className: page_module_css_1.default.card, target: "_blank", rel: "noopener noreferrer" }, { children: [(0, jsx_runtime_1.jsxs)("h2", { children: ["Learn ", (0, jsx_runtime_1.jsx)("span", { children: "->" })] }), (0, jsx_runtime_1.jsx)("p", { children: "Learn about Next.js in an interactive course with\u00A0quizzes!" })] })), (0, jsx_runtime_1.jsxs)("a", __assign({ href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app", className: page_module_css_1.default.card, target: "_blank", rel: "noopener noreferrer" }, { children: [(0, jsx_runtime_1.jsxs)("h2", { children: ["Templates ", (0, jsx_runtime_1.jsx)("span", { children: "->" })] }), (0, jsx_runtime_1.jsx)("p", { children: "Explore starter templates for Next.js." })] })), (0, jsx_runtime_1.jsxs)("a", __assign({ href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app", className: page_module_css_1.default.card, target: "_blank", rel: "noopener noreferrer" }, { children: [(0, jsx_runtime_1.jsxs)("h2", { children: ["Deploy ", (0, jsx_runtime_1.jsx)("span", { children: "->" })] }), (0, jsx_runtime_1.jsx)("p", { children: "Instantly deploy your Next.js site to a shareable URL with Vercel." })] }))] }))] })));
}
exports.default = Home;
