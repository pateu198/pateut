import {R as c, g as f, r as I} from "./chunks/index.77b27c10.js";
import {j as n} from "./chunks/jsx-runtime.c2e5f40e.js";
import {m as u, A as j} from "./chunks/index.f2d96c43.js";
var v = [{
    id: "fa",
    name: "Font Awesome",
    projectUrl: "https://fontawesome.com/",
    license: "CC BY 4.0 License",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/"
}, {
    id: "io",
    name: "Ionicons 4",
    projectUrl: "https://ionicons.com/",
    license: "MIT",
    licenseUrl: "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
}, {
    id: "io5",
    name: "Ionicons 5",
    projectUrl: "https://ionicons.com/",
    license: "MIT",
    licenseUrl: "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
}, {
    id: "md",
    name: "Material Design icons",
    projectUrl: "http://google.github.io/material-design-icons/",
    license: "Apache License Version 2.0",
    licenseUrl: "https://github.com/google/material-design-icons/blob/master/LICENSE"
}, {
    id: "ti",
    name: "Typicons",
    projectUrl: "http://s-ings.com/typicons/",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/"
}, {
    id: "go",
    name: "Github Octicons icons",
    projectUrl: "https://octicons.github.com/",
    license: "MIT",
    licenseUrl: "https://github.com/primer/octicons/blob/master/LICENSE"
}, {
    id: "fi",
    name: "Feather",
    projectUrl: "https://feathericons.com/",
    license: "MIT",
    licenseUrl: "https://github.com/feathericons/feather/blob/master/LICENSE"
}, {
    id: "gi",
    name: "Game Icons",
    projectUrl: "https://game-icons.net/",
    license: "CC BY 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0/"
}, {
    id: "wi",
    name: "Weather Icons",
    projectUrl: "https://erikflowers.github.io/weather-icons/",
    license: "SIL OFL 1.1",
    licenseUrl: "http://scripts.sil.org/OFL"
}, {
    id: "di",
    name: "Devicons",
    projectUrl: "https://vorillaz.github.io/devicons/",
    license: "MIT",
    licenseUrl: "https://opensource.org/licenses/MIT"
}, {
    id: "ai",
    name: "Ant Design Icons",
    projectUrl: "https://github.com/ant-design/ant-design-icons",
    license: "MIT",
    licenseUrl: "https://opensource.org/licenses/MIT"
}, {
    id: "bs",
    name: "Bootstrap Icons",
    projectUrl: "https://github.com/twbs/icons",
    license: "MIT",
    licenseUrl: "https://opensource.org/licenses/MIT"
}, {
    id: "ri",
    name: "Remix Icon",
    projectUrl: "https://github.com/Remix-Design/RemixIcon",
    license: "Apache License Version 2.0",
    licenseUrl: "http://www.apache.org/licenses/"
}, {
    id: "fc",
    name: "Flat Color Icons",
    projectUrl: "https://github.com/icons8/flat-color-icons",
    license: "MIT",
    licenseUrl: "https://opensource.org/licenses/MIT"
}, {
    id: "gr",
    name: "Grommet-Icons",
    projectUrl: "https://github.com/grommet/grommet-icons",
    license: "Apache License Version 2.0",
    licenseUrl: "http://www.apache.org/licenses/"
}, {
    id: "hi",
    name: "Heroicons",
    projectUrl: "https://github.com/tailwindlabs/heroicons",
    license: "MIT",
    licenseUrl: "https://opensource.org/licenses/MIT"
}, {
    id: "si",
    name: "Simple Icons",
    projectUrl: "https://simpleicons.org/",
    license: "CC0 1.0 Universal",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/"
}, {
    id: "im",
    name: "IcoMoon Free",
    projectUrl: "https://github.com/Keyamoon/IcoMoon-Free",
    license: "CC BY 4.0 License"
}, {
    id: "bi",
    name: "BoxIcons",
    projectUrl: "https://github.com/atisawd/boxicons",
    license: "CC BY 4.0 License"
}, {
    id: "cg",
    name: "css.gg",
    projectUrl: "https://github.com/astrit/css.gg",
    license: "MIT",
    licenseUrl: "https://opensource.org/licenses/MIT"
}, {
    id: "vsc",
    name: "VS Code Icons",
    projectUrl: "https://github.com/microsoft/vscode-codicons",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/"
}, {
    id: "tb",
    name: "Tabler Icons",
    projectUrl: "https://github.com/tabler/tabler-icons",
    license: "MIT",
    licenseUrl: "https://opensource.org/licenses/MIT"
}]
  , m = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
}
  , a = c.createContext && c.createContext(m)
  , r = globalThis && globalThis.__assign || function() {
    return r = Object.assign || function(e) {
        for (var t, s = 1, o = arguments.length; s < o; s++) {
            t = arguments[s];
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
        }
        return e
    }
    ,
    r.apply(this, arguments)
}
  , U = globalThis && globalThis.__rest || function(e, t) {
    var s = {};
    for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, o = Object.getOwnPropertySymbols(e); i < o.length; i++)
            t.indexOf(o[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[i]) && (s[o[i]] = e[o[i]]);
    return s
}
;
function d(e) {
    return e && e.map(function(t, s) {
        return c.createElement(t.tag, r({
            key: s
        }, t.attr), d(t.child))
    })
}
function w(e) {
    return function(t) {
        return c.createElement(g, r({
            attr: r({}, e.attr)
        }, t), d(e.child))
    }
}
function g(e) {
    var t = function(s) {
        var o = e.attr, i = e.size, p = e.title, x = U(e, ["attr", "size", "title"]), h = i || s.size || "1em", l;
        return s.className && (l = s.className),
        e.className && (l = (l ? l + " " : "") + e.className),
        c.createElement("svg", r({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, s.attr, o, x, {
            className: l,
            style: r(r({
                color: e.color || s.color
            }, s.style), e.style),
            height: h,
            width: h,
            xmlns: "http://www.w3.org/2000/svg"
        }), p && c.createElement("title", null, p), e.children)
    };
    return a !== void 0 ? c.createElement(a.Consumer, null, function(s) {
        return t(s)
    }) : t(m)
}
const y = Object.freeze(Object.defineProperty({
    __proto__: null,
    IconsManifest: v,
    GenIcon: w,
    IconBase: g,
    DefaultContext: m,
    IconContext: a
}, Symbol.toStringTag, {
    value: "Module"
}))
  , b = f(y);
var C = b.GenIcon
  , N = function(t) {
    return C({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
            }
        }, {
            tag: "polyline",
            attr: {
                points: "15 3 21 3 21 9"
            }
        }, {
            tag: "line",
            attr: {
                x1: "10",
                y1: "14",
                x2: "21",
                y2: "3"
            }
        }]
    })(t)
}
  , T = b.GenIcon
  , M = function(t) {
    return T({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"
            }
        }]
    })(t)
};
function L(e) {
    const [t,s] = I.exports.useState(!1);
    return n.exports.jsxs(u.div, {
        animate: {
            height: t ? "auto" : "178px"
        },
        className: "bg-white bg-opacity-10 border border-white border-opacity-20 rounded-md w-full shadow",
        children: [n.exports.jsx("img", {
            src: e.thumbnail,
            alt: `${e.title} thumbnail`,
            className: "w-full h-[128px] object-cover object-top rounded-t-md"
        }), n.exports.jsxs("div", {
            className: "flex items-center px-4",
            children: [n.exports.jsx("div", {
                className: "w-full",
                children: n.exports.jsx("div", {
                    className: "flex items-center space-x-3 h-[50px]",
                    children: n.exports.jsx("h1", {
                        className: "text-lg font-medium",
                        children: e.title
                    })
                })
            }), n.exports.jsx("button", {
                className: "hover:bg-white/10 p-2 rounded-full",
                onClick: ()=>s(!t),
                children: n.exports.jsx(M, {
                    className: `transition-transform ${t && "rotate-180"}`
                })
            })]
        }), n.exports.jsx(j, {
            children: t && n.exports.jsxs(u.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    duration: .2
                },
                className: "mb-3 border-t border-white/20 px-4",
                children: [n.exports.jsx("p", {
                    className: "text-gray-300 mt-3",
                    children: e.description
                }), n.exports.jsx("div", {
                    className: "flex flex-row items-center space-x-2",
                    children: e.buttons.map((o,i)=>n.exports.jsxs("a", {
                        className: "flex items-center w-fit space-x-1 bg-white bg-opacity-20 rounded-full px-5 py-2 text-sm mt-3 transition-transform hover:scale-[102%]",
                        href: o.url,
                        target: "_blank",
                        rel: "noreferrer",
                        children: [n.exports.jsx("span", {
                            children: o.name
                        }), n.exports.jsx(N, {})]
                    }, i))
                })]
            })
        })]
    })
}
const E = [{
    name: "CatSploit",
    description: "Very epic Roblox Exploit!",
    thumbnail: "/assets/catsploit.png",
    buttons: [{
        name: "Website",
        url: "https://catsploit.ariez.codes/"
    }]
}, {
    name: "meowra1n",
    description: "the best jailbreak...",
    thumbnail: "/assets/catsploit.png",
    buttons: [{
        name: "coming soon",
        url: "about:blank"
    }]
}];
function _() {
    return n.exports.jsx(n.exports.Fragment, {
        children: n.exports.jsx("div", {
            className: "grid md:grid-cols-2 gap-4",
            children: E.map((e,t)=>n.exports.jsx(L, {
                title: e.name,
                description: e.description,
                thumbnail: e.thumbnail,
                buttons: e.buttons
            }, t))
        })
    })
}
export {_ as default};
