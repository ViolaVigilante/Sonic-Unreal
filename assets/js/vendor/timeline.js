/*! For license information please see timeline.js.LICENSE.txt */
var TL;
(() => {
    var t = {
            142: () => {
                var t = function() {
                    function t(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var a = e[i];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                        }
                    }
                    return function(e, i, a) {
                        return i && t(e.prototype, i), a && t(e, a), e
                    }
                }();

                function e(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }! function() {
                    if ("undefined" != typeof window) {
                        var i = Array.prototype.slice,
                            a = Element.prototype.matches || Element.prototype.msMatchesSelector,
                            s = ["a[href]", "area[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "details", "summary", "iframe", "object", "embed", "[contenteditable]"].join(","),
                            n = function() {
                                function n(t, i) {
                                    e(this, n), this._inertManager = i, this._rootElement = t, this._managedNodes = new Set, this._rootElement.hasAttribute("aria-hidden") ? this._savedAriaHidden = this._rootElement.getAttribute("aria-hidden") : this._savedAriaHidden = null, this._rootElement.setAttribute("aria-hidden", "true"), this._makeSubtreeUnfocusable(this._rootElement), this._observer = new MutationObserver(this._onMutation.bind(this)), this._observer.observe(this._rootElement, {
                                        attributes: !0,
                                        childList: !0,
                                        subtree: !0
                                    })
                                }
                                return t(n, [{
                                    key: "destructor",
                                    value: function() {
                                        this._observer.disconnect(), this._rootElement && (null !== this._savedAriaHidden ? this._rootElement.setAttribute("aria-hidden", this._savedAriaHidden) : this._rootElement.removeAttribute("aria-hidden")), this._managedNodes.forEach((function(t) {
                                            this._unmanageNode(t.node)
                                        }), this), this._observer = null, this._rootElement = null, this._managedNodes = null, this._inertManager = null
                                    }
                                }, {
                                    key: "_makeSubtreeUnfocusable",
                                    value: function(t) {
                                        var e = this;
                                        h(t, (function(t) {
                                            return e._visitNode(t)
                                        }));
                                        var i = document.activeElement;
                                        if (!document.body.contains(t)) {
                                            for (var a = t, s = void 0; a;) {
                                                if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                                    s = a;
                                                    break
                                                }
                                                a = a.parentNode
                                            }
                                            s && (i = s.activeElement)
                                        }
                                        t.contains(i) && (i.blur(), i === document.activeElement && document.body.focus())
                                    }
                                }, {
                                    key: "_visitNode",
                                    value: function(t) {
                                        if (t.nodeType === Node.ELEMENT_NODE) {
                                            var e = t;
                                            e !== this._rootElement && e.hasAttribute("inert") && this._adoptInertRoot(e), (a.call(e, s) || e.hasAttribute("tabindex")) && this._manageNode(e)
                                        }
                                    }
                                }, {
                                    key: "_manageNode",
                                    value: function(t) {
                                        var e = this._inertManager.register(t, this);
                                        this._managedNodes.add(e)
                                    }
                                }, {
                                    key: "_unmanageNode",
                                    value: function(t) {
                                        var e = this._inertManager.deregister(t, this);
                                        e && this._managedNodes.delete(e)
                                    }
                                }, {
                                    key: "_unmanageSubtree",
                                    value: function(t) {
                                        var e = this;
                                        h(t, (function(t) {
                                            return e._unmanageNode(t)
                                        }))
                                    }
                                }, {
                                    key: "_adoptInertRoot",
                                    value: function(t) {
                                        var e = this._inertManager.getInertRoot(t);
                                        e || (this._inertManager.setInert(t, !0), e = this._inertManager.getInertRoot(t)), e.managedNodes.forEach((function(t) {
                                            this._manageNode(t.node)
                                        }), this)
                                    }
                                }, {
                                    key: "_onMutation",
                                    value: function(t, e) {
                                        t.forEach((function(t) {
                                            var e = t.target;
                                            if ("childList" === t.type) i.call(t.addedNodes).forEach((function(t) {
                                                this._makeSubtreeUnfocusable(t)
                                            }), this), i.call(t.removedNodes).forEach((function(t) {
                                                this._unmanageSubtree(t)
                                            }), this);
                                            else if ("attributes" === t.type)
                                                if ("tabindex" === t.attributeName) this._manageNode(e);
                                                else if (e !== this._rootElement && "inert" === t.attributeName && e.hasAttribute("inert")) {
                                                this._adoptInertRoot(e);
                                                var a = this._inertManager.getInertRoot(e);
                                                this._managedNodes.forEach((function(t) {
                                                    e.contains(t.node) && a._manageNode(t.node)
                                                }))
                                            }
                                        }), this)
                                    }
                                }, {
                                    key: "managedNodes",
                                    get: function() {
                                        return new Set(this._managedNodes)
                                    }
                                }, {
                                    key: "hasSavedAriaHidden",
                                    get: function() {
                                        return null !== this._savedAriaHidden
                                    }
                                }, {
                                    key: "savedAriaHidden",
                                    set: function(t) {
                                        this._savedAriaHidden = t
                                    },
                                    get: function() {
                                        return this._savedAriaHidden
                                    }
                                }]), n
                            }(),
                            o = function() {
                                function i(t, a) {
                                    e(this, i), this._node = t, this._overrodeFocusMethod = !1, this._inertRoots = new Set([a]), this._savedTabIndex = null, this._destroyed = !1, this.ensureUntabbable()
                                }
                                return t(i, [{
                                    key: "destructor",
                                    value: function() {
                                        if (this._throwIfDestroyed(), this._node && this._node.nodeType === Node.ELEMENT_NODE) {
                                            var t = this._node;
                                            null !== this._savedTabIndex ? t.setAttribute("tabindex", this._savedTabIndex) : t.removeAttribute("tabindex"), this._overrodeFocusMethod && delete t.focus
                                        }
                                        this._node = null, this._inertRoots = null, this._destroyed = !0
                                    }
                                }, {
                                    key: "_throwIfDestroyed",
                                    value: function() {
                                        if (this.destroyed) throw new Error("Trying to access destroyed InertNode")
                                    }
                                }, {
                                    key: "ensureUntabbable",
                                    value: function() {
                                        if (this.node.nodeType === Node.ELEMENT_NODE) {
                                            var t = this.node;
                                            if (a.call(t, s)) {
                                                if (-1 === t.tabIndex && this.hasSavedTabIndex) return;
                                                t.hasAttribute("tabindex") && (this._savedTabIndex = t.tabIndex), t.setAttribute("tabindex", "-1"), t.nodeType === Node.ELEMENT_NODE && (t.focus = function() {}, this._overrodeFocusMethod = !0)
                                            } else t.hasAttribute("tabindex") && (this._savedTabIndex = t.tabIndex, t.removeAttribute("tabindex"))
                                        }
                                    }
                                }, {
                                    key: "addInertRoot",
                                    value: function(t) {
                                        this._throwIfDestroyed(), this._inertRoots.add(t)
                                    }
                                }, {
                                    key: "removeInertRoot",
                                    value: function(t) {
                                        this._throwIfDestroyed(), this._inertRoots.delete(t), 0 === this._inertRoots.size && this.destructor()
                                    }
                                }, {
                                    key: "destroyed",
                                    get: function() {
                                        return this._destroyed
                                    }
                                }, {
                                    key: "hasSavedTabIndex",
                                    get: function() {
                                        return null !== this._savedTabIndex
                                    }
                                }, {
                                    key: "node",
                                    get: function() {
                                        return this._throwIfDestroyed(), this._node
                                    }
                                }, {
                                    key: "savedTabIndex",
                                    set: function(t) {
                                        this._throwIfDestroyed(), this._savedTabIndex = t
                                    },
                                    get: function() {
                                        return this._throwIfDestroyed(), this._savedTabIndex
                                    }
                                }]), i
                            }(),
                            r = function() {
                                function s(t) {
                                    if (e(this, s), !t) throw new Error("Missing required argument; InertManager needs to wrap a document.");
                                    this._document = t, this._managedNodes = new Map, this._inertRoots = new Map, this._observer = new MutationObserver(this._watchForInert.bind(this)), d(t.head || t.body || t.documentElement), "loading" === t.readyState ? t.addEventListener("DOMContentLoaded", this._onDocumentLoaded.bind(this)) : this._onDocumentLoaded()
                                }
                                return t(s, [{
                                    key: "setInert",
                                    value: function(t, e) {
                                        if (e) {
                                            if (this._inertRoots.has(t)) return;
                                            var i = new n(t, this);
                                            if (t.setAttribute("inert", ""), this._inertRoots.set(t, i), !this._document.body.contains(t))
                                                for (var a = t.parentNode; a;) 11 === a.nodeType && d(a), a = a.parentNode
                                        } else {
                                            if (!this._inertRoots.has(t)) return;
                                            this._inertRoots.get(t).destructor(), this._inertRoots.delete(t), t.removeAttribute("inert")
                                        }
                                    }
                                }, {
                                    key: "getInertRoot",
                                    value: function(t) {
                                        return this._inertRoots.get(t)
                                    }
                                }, {
                                    key: "register",
                                    value: function(t, e) {
                                        var i = this._managedNodes.get(t);
                                        return void 0 !== i ? i.addInertRoot(e) : i = new o(t, e), this._managedNodes.set(t, i), i
                                    }
                                }, {
                                    key: "deregister",
                                    value: function(t, e) {
                                        var i = this._managedNodes.get(t);
                                        return i ? (i.removeInertRoot(e), i.destroyed && this._managedNodes.delete(t), i) : null
                                    }
                                }, {
                                    key: "_onDocumentLoaded",
                                    value: function() {
                                        i.call(this._document.querySelectorAll("[inert]")).forEach((function(t) {
                                            this.setInert(t, !0)
                                        }), this), this._observer.observe(this._document.body || this._document.documentElement, {
                                            attributes: !0,
                                            subtree: !0,
                                            childList: !0
                                        })
                                    }
                                }, {
                                    key: "_watchForInert",
                                    value: function(t, e) {
                                        var s = this;
                                        t.forEach((function(t) {
                                            switch (t.type) {
                                                case "childList":
                                                    i.call(t.addedNodes).forEach((function(t) {
                                                        if (t.nodeType === Node.ELEMENT_NODE) {
                                                            var e = i.call(t.querySelectorAll("[inert]"));
                                                            a.call(t, "[inert]") && e.unshift(t), e.forEach((function(t) {
                                                                this.setInert(t, !0)
                                                            }), s)
                                                        }
                                                    }), s);
                                                    break;
                                                case "attributes":
                                                    if ("inert" !== t.attributeName) return;
                                                    var e = t.target,
                                                        n = e.hasAttribute("inert");
                                                    s.setInert(e, n)
                                            }
                                        }), this)
                                    }
                                }]), s
                            }();
                        if (!HTMLElement.prototype.hasOwnProperty("inert")) {
                            var l = new r(document);
                            Object.defineProperty(HTMLElement.prototype, "inert", {
                                enumerable: !0,
                                get: function() {
                                    return this.hasAttribute("inert")
                                },
                                set: function(t) {
                                    l.setInert(this, t)
                                }
                            })
                        }
                    }

                    function h(t, e, i) {
                        if (t.nodeType == Node.ELEMENT_NODE) {
                            var a = t;
                            e && e(a);
                            var s = a.shadowRoot;
                            if (s) return void h(s, e, s);
                            if ("content" == a.localName) {
                                for (var n = a, o = n.getDistributedNodes ? n.getDistributedNodes() : [], r = 0; r < o.length; r++) h(o[r], e, i);
                                return
                            }
                            if ("slot" == a.localName) {
                                for (var l = a, d = l.assignedNodes ? l.assignedNodes({
                                        flatten: !0
                                    }) : [], c = 0; c < d.length; c++) h(d[c], e, i);
                                return
                            }
                        }
                        for (var u = t.firstChild; null != u;) h(u, e, i), u = u.nextSibling
                    }

                    function d(t) {
                        if (!t.querySelector("style#inert-style, link#inert-style")) {
                            var e = document.createElement("style");
                            e.setAttribute("id", "inert-style"), e.textContent = "\n[inert] {\n  pointer-events: none;\n  cursor: default;\n}\n\n[inert], [inert] * {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n", t.appendChild(e)
                        }
                    }
                }()
            }
        },
        e = {};

    function i(a) {
        var s = e[a];
        if (void 0 !== s) return s.exports;
        var n = e[a] = {
            exports: {}
        };
        return t[a](n, n.exports, i), n.exports
    }
    i.d = (t, e) => {
        for (var a in e) i.o(e, a) && !i.o(t, a) && Object.defineProperty(t, a, {
            enumerable: !0,
            get: e[a]
        })
    }, i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), i.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    };
    var a = {};
    (() => {
        "use strict";
        i.r(a), i.d(a, {
            Timeline: () => Zi,
            exportJSON: () => Vi,
            lookupMediaType: () => Hi,
            parseGoogleSpreadsheetURL: () => Xe
        });
        const t = navigator ? navigator.userAgent.toLowerCase() : "no-user-agent-specified",
            e = document ? document.documentElement : null,
            s = !!t && -1 !== t.indexOf("phantom"),
            o = window && "ActiveXObject" in window,
            r = (Boolean(o && t.match(/MSIE 9/i)), o && document && document.addEventListener, -1 !== t.indexOf("webkit")),
            l = (t.indexOf("android"), -1 !== t.search("android [23]")),
            h = !!window && void 0 !== window.orientation,
            d = !(!navigator || !window) && navigator.msPointerEnabled && navigator.msMaxTouchPoints && !window.PointerEvent,
            c = navigator && window ? window.PointerEvent && navigator.pointerEnabled && navigator.maxTouchPoints : d,
            u = !!window && window.opera,
            m = (t.indexOf("gecko"), -1 !== t.indexOf("gecko") && !r && !u && !o),
            _ = (t.indexOf("chrome"), -1 !== t.indexOf("edge/"));
        !!e && o && e.style, !!window && "WebKitCSSMatrix" in window && new window.WebKitCSSMatrix, !!e && e.style, !!e && e.style;
        window && window.L_DISABLE_3D, h && window.opera;
        let p = !!window && "devicePixelRatio" in window && window.devicePixelRatio > 1;
        if (!p && window && "matchMedia" in window) {
            let t = window.matchMedia("(min-resolution:144dpi)");
            p = t && t.matches
        }
        const f = window && !window.L_NO_TOUCH && !s && (c || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch);

        function g(t) {
            return "string" == typeof t ? document.getElementById(t) : t
        }

        function v(t, e, i) {
            var a = document.createElement(t);
            return a.className = e, i && i.appendChild(a), a
        }

        function y(t, e) {
            var i = v("button", t, e);
            return i.type = "button", i
        }

        function b(t) {
            for (var e = {
                    x: 0,
                    y: 0
                }; t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop);) e.x += t.offsetLeft, e.y += t.offsetTop, t = t.offsetParent;
            return e
        }

        function w(t) {
            for (var e = document.documentElement.style, i = 0; i < t.length; i++)
                if (t[i] in e) return t[i];
            return !1
        }
        w(["transition", "webkitTransition", "OTransition", "MozTransition", "msTransition"]), w(["transformProperty", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]);
        class x extends Error {
            constructor(t, e) {
                super(), this.name = "TLError", this.message = t || "error", this.message_key = this.message, this.detail = e || ""
            }
        }
        const T = {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            indianred: "#cd5c5c",
            indigo: "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            lavender: "#e6e6fa",
            lavenderblush: "#fff0f5",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrodyellow: "#fafad2",
            lightgray: "#d3d3d3",
            lightgreen: "#90ee90",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370db",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#db7093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00",
            yellowgreen: "#9acd32"
        };

        function M(t) {
            T[t.toLowerCase()] && (t = T[t.toLowerCase()]), t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(t, e, i, a) {
                return e + e + i + i + a + a
            }));
            var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
            return e ? {
                r: parseInt(e[1], 16),
                g: parseInt(e[2], 16),
                b: parseInt(e[3], 16)
            } : null
        }

        function E(t, e) {
            var i;
            for (i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
        }

        function L(t) {
            for (var e = Array.prototype.slice.call(arguments, 1), i = 0, a = e.length; i < a; i++) E(t, e[i] || {});
            return t
        }
        const S = [];

        function D(t) {
            S.forEach((e => {
                try {
                    e(t)
                } catch (t) {
                    console && console.log && console.log("Error handling trace", t)
                }
            }))
        }

        function N(t, e) {
            for (t = String(t), e = e || 2; t.length < e;) t = "0" + t;
            return t
        }
        const A = (I = 0, C = "_tl_id", function(t) {
            return t[C] = t[C] || ++I, t[C]
        });
        var I, C;

        function O(t) {
            return t && "function" == typeof t.replace ? t.replace(/^\s+|\s+$/g, "") : ""
        }

        function R(t, ...e) {
            for (let a of e)
                for (var i of Object.getOwnPropertyNames(a.prototype)) t.prototype[i] = a.prototype[i]
        }

        function j(t) {
            t = (t = O(t)).toLowerCase();
            for (var e = 0; e < 31; e++) t = t.replace(new RegExp("ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;".charAt(e), "g"), "aaaaaeeeeeiiiiooooouuuunc------".charAt(e));
            return (t = t.replace(/[^a-z0-9 -]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-")).replace(/^([0-9])/, "_$1")
        }

        function z(t, e) {
            var i = function(t) {
                for (var e = "", i = 0; i < t; i++) e += "abcdefghijklmnopqurstuvwxyz".substr(Math.floor(32 * Math.random()), 1);
                return e
            };
            return e ? e + "-" + i(t) : "tl-" + i(t)
        }

        function P(t) {
            return t == parseFloat(t) ? !(t % 2) : void 0
        }

        function H(t, e, i, a) {
            for (var s = a || 0, n = 0; n < e.length; n++) e[n].data[i] == t && (s = n);
            return s
        }

        function F(t) {
            return t ? t = (t = t.replace(/<a\b[^>]*>/i, "")).replace(/<\/a>/i, "") : t
        }

        function q(t) {
            return (t = t.replace(/(<[^>]*>)+/g, "")).replace('"', "'")
        }

        function $(t, e, i) {
            var a = function(t, e, i) {
                return i || (i = ""), e && e.length > 30 && (e = e.substring(0, 30) + "…"), i + "<a class='tl-makelink' href='" + t + "' onclick='void(0)'>" + e + "</a>"
            };
            return t.replace(/\b(?:https?|ftp):\/\/([a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|])/gim, (function(t, e, i, s) {
                if (i > 0) {
                    var n = s[i - 1];
                    if ('"' == n || "'" == n || "=" == n) return t
                }
                return a(t, e)
            })).replace(/(^|[^\/>])(www\.[\S]+(\b|$))/gim, (function(t, e, i, s, n) {
                return a("http://" + i, i, e)
            })).replace(/([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)/gim, (function(t, e, i, s) {
                return a("mailto:" + e, e)
            }))
        }

        function U(t) {
            return t.replace(/(.*)www.dropbox.com\/(.*)/, "$1dl.dropboxusercontent.com/$2")
        }
        const B = t => {
                var e = {
                    w: 0,
                    h: 0
                };
                return t.w > t.h && t.h > 0 ? (e.h = t.h, e.w = t.h) : (e.w = t.w, e.h = t.w), e
            },
            W = t => null !== t.w && "" !== t.w ? Math.round(t.w / 16 * 9) : null !== t.h && "" !== t.h ? Math.round(t.h / 9 * 16) : 0;
        let G = (Z = (Y = "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ").length, {
            encode: function(t) {
                if ("number" != typeof t || t !== parseInt(t)) throw '"encode" only accepts integers.';
                for (var e = ""; t;) {
                    var i = t % Z;
                    t = Math.floor(t / Z), e = Y[i].toString() + e
                }
                return e
            },
            decode: function(t) {
                if ("string" != typeof t) throw '"decode" only accepts strings.';
                for (var e = 0; t;) {
                    var i = Y.indexOf(t[0]);
                    if (i < 0) throw '"decode" can\'t find "' + t[0] + '" in the alphabet: "' + Y + '"';
                    var a = t.length - 1;
                    e += i * Math.pow(Z, a), t = t.substring(1)
                }
                return e
            }
        });
        var Y, Z;

        function V(t) {
            if ("string" == typeof t) {
                let a = t.match(/^\s*(\d+h)?(\d+m)?(\d+s)?\s*/i);
                if (a) {
                    var e = parseInt(a[1]) || 0,
                        i = parseInt(a[2]) || 0;
                    return (parseInt(a[3]) || 0) + 60 * i + 60 * e * 60
                }
            } else if ("number" == typeof t) return t;
            return 0
        }

        function X(t) {
            return (new DOMParser).parseFromString(t, "text/html").body.textContent || ""
        }
        const J = [.42, 0, 1, 1];

        function K(t) {}

        function Q(t) {
            return new K(J).get(t)
        }

        function tt(t) {
            return 1 == t ? 1 : 1 - Math.pow(2, -10 * t)
        }

        function et(t) {
            return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
        }
        let it = function() {};
        it.extend = function(t) {
            var e = function() {
                    this.initialize && this.initialize.apply(this, arguments)
                },
                i = function() {};
            i.prototype = this.prototype;
            var a = new i;
            for (var s in a.constructor = e, e.prototype = a, e.superclass = this.prototype, this) this.hasOwnProperty(s) && "prototype" !== s && "superclass" !== s && (e[s] = this[s]);
            return t.statics && (L(e, t.statics), delete t.statics), t.includes && (L.apply(null, [a].concat(t.includes)), delete t.includes), t.options && a.options && (t.options = L({}, a.options, t.options)), L(a, t), e.extend = it.extend, e.include = function(t) {
                L(this.prototype, t)
            }, e
        };
        class at {
            on(t, e, i) {
                if (!e) throw new x("No callback function provided");
                var a = this._tl_events = this._tl_events || {};
                return a[t] = a[t] || [], a[t].push({
                    action: e,
                    context: i || this
                }), this
            }
            addEventListener(t, e, i) {
                return this.on(t, e, i)
            }
            hasEventListeners(t) {
                var e = "_tl_events";
                return e in this && t in this[e] && this[e][t].length > 0
            }
            removeEventListener(t, e, i) {
                if (!this.hasEventListeners(t)) return this;
                for (var a = 0, s = this._tl_events, n = s[t].length; a < n; a++)
                    if (s[t][a].action === e && (!i || s[t][a].context === i)) return s[t].splice(a, 1), this;
                return this
            }
            off(t, e, i) {
                return this.removeEventListener(t, e, i)
            }
            fire(t, e) {
                if (!this.hasEventListeners(t)) return this;
                for (var i = E({
                        type: t,
                        target: this
                    }, e), a = this._tl_events[t].slice(), s = 0, n = a.length; s < n; s++) a[s].action ? a[s].action.call(a[s].context || this, i) : D(`no action defined for ${t} listener`);
                return this
            }
        }

        function st(t, e) {
            return nt(t, e)
        }
        const nt = function() {
            var t = document,
                e = window,
                i = e.performance,
                a = i && (i.now || i.webkitNow || i.msNow || i.mozNow),
                s = a ? function() {
                    return a.call(i)
                } : function() {
                    return +new Date
                },
                n = t.documentElement,
                o = !1,
                r = 1e3,
                l = /^rgb\(|#/,
                h = /^([+\-])=([\d\.]+)/,
                d = /^(?:[\+\-]=?)?\d+(?:\.\d+)?(%|in|cm|mm|em|ex|pt|pc|px)$/,
                c = /rotate\(((?:[+\-]=)?([\-\d\.]+))deg\)/,
                u = /scale\(((?:[+\-]=)?([\d\.]+))\)/,
                m = /skew\(((?:[+\-]=)?([\-\d\.]+))deg, ?((?:[+\-]=)?([\-\d\.]+))deg\)/,
                _ = /translate\(((?:[+\-]=)?([\-\d\.]+))px, ?((?:[+\-]=)?([\-\d\.]+))px\)/,
                p = {
                    lineHeight: 1,
                    zoom: 1,
                    zIndex: 1,
                    opacity: 1,
                    transform: 1
                },
                f = function() {
                    var e, i = t.createElement("a").style,
                        a = ["webkitTransform", "MozTransform", "OTransform", "msTransform", "Transform"];
                    for (e = 0; e < a.length; e++)
                        if (a[e] in i) return a[e]
                }(),
                g = void 0 !== t.createElement("a").style.opacity,
                v = t.defaultView && t.defaultView.getComputedStyle ? function(e, i) {
                    i = M(i = "transform" == i ? f : i);
                    var a = null,
                        s = t.defaultView.getComputedStyle(e, "");
                    return s && (a = s[i]), e.style[i] || a
                } : n.currentStyle ? function(t, e) {
                    if ("opacity" == (e = M(e))) {
                        var i = 100;
                        try {
                            i = t.filters["DXImageTransform.Microsoft.Alpha"].opacity
                        } catch (e) {
                            try {
                                i = t.filters("alpha").opacity
                            } catch (t) {}
                        }
                        return i / 100
                    }
                    var a = t.currentStyle ? t.currentStyle[e] : null;
                    return t.style[e] || a
                } : function(t, e) {
                    return t.style[M(e)]
                },
                y = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.msRequestAnimationFrame || e.oRequestAnimationFrame || function(t) {
                    e.setTimeout((function() {
                        t(+new Date)
                    }), 17)
                },
                b = [];

            function w(t) {
                var e, i = b.length;
                for (a && t > 1e12 && (t = s()), o && (t = s()), e = i; e--;) b[e](t);
                b.length && y(w)
            }

            function k(t, e) {
                var i, a = {};
                return (i = t.match(c)) && (a.rotate = A(i[1], e ? e.rotate : null)), (i = t.match(u)) && (a.scale = A(i[1], e ? e.scale : null)), (i = t.match(m)) && (a.skewx = A(i[1], e ? e.skewx : null), a.skewy = A(i[3], e ? e.skewy : null)), (i = t.match(_)) && (a.translatex = A(i[1], e ? e.translatex : null), a.translatey = A(i[3], e ? e.translatey : null)), a
            }

            function x(t) {
                var e = "";
                return "rotate" in t && (e += "rotate(" + t.rotate + "deg) "), "scale" in t && (e += "scale(" + t.scale + ") "), "translatex" in t && (e += "translate(" + t.translatex + "px," + t.translatey + "px) "), "skewx" in t && (e += "skew(" + t.skewx + "deg," + t.skewy + "deg)"), e
            }

            function T(t) {
                var e, i, a, s = t.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
                return (s ? (e = s[1], i = s[2], a = s[3], "#" + (1 << 24 | e << 16 | i << 8 | a).toString(16).slice(1)) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
            }

            function M(t) {
                return t.replace(/-(.)/g, (function(t, e) {
                    return e.toUpperCase()
                }))
            }

            function E(t) {
                return "function" == typeof t
            }

            function L(t) {
                return Math.sin(t * Math.PI / 2)
            }

            function S(t, e, i, a, n, o) {
                a = E(a) ? a : I.easings[a] || L;
                var l, h = t || r,
                    d = this,
                    c = o - n,
                    u = s(),
                    m = 0,
                    _ = 0;
                return l = function t(s) {
                    var r = s - u;
                    if (r > h || m) return o = isFinite(o) ? o : 1, m ? _ && e(o) : e(o),
                        function(t) {
                            var e, i = function(t, e, i) {
                                if (Array.prototype.indexOf) return t.indexOf(e);
                                for (i = 0; i < t.length; ++i)
                                    if (t[i] === e) return i
                            }(b, t);
                            i >= 0 && (e = b.slice(i + 1), b.length = i, b = b.concat(e))
                        }(t), i && i.apply(d);
                    isFinite(o) ? e(c * a(r / h) + n) : e(a(r / h))
                }, 1 === b.push(l) && y(w), {
                    stop: function(t) {
                        m = 1, _ = t, t || (i = null)
                    }
                }
            }

            function D(t, e) {
                var i, a, s = t.length,
                    n = [];
                for (i = 0; i < s; ++i) n[i] = [t[i][0], t[i][1]];
                for (a = 1; a < s; ++a)
                    for (i = 0; i < s - a; ++i) n[i][0] = (1 - e) * n[i][0] + e * n[parseInt(i + 1, 10)][0], n[i][1] = (1 - e) * n[i][1] + e * n[parseInt(i + 1, 10)][1];
                return [n[0][0], n[0][1]]
            }

            function N(t, e, i, a, s, n, o) {
                if ("transform" == s) {
                    for (var l in o = {}, i[n][s]) o[l] = l in a[n][s] ? Math.round(((a[n][s][l] - i[n][s][l]) * t + i[n][s][l]) * r) / r : i[n][s][l];
                    return o
                }
                return "string" == typeof i[n][s] ? function(t, e, i) {
                    var a, s, n, o, r = [];
                    for (a = 0; a < 6; a++) n = Math.min(15, parseInt(e.charAt(a), 16)), o = Math.min(15, parseInt(i.charAt(a), 16)), s = (s = Math.floor((o - n) * t + n)) > 15 ? 15 : s < 0 ? 0 : s, r[a] = s.toString(16);
                    return "#" + r.join("")
                }(t, i[n][s], a[n][s]) : (o = Math.round(((a[n][s] - i[n][s]) * t + i[n][s]) * r) / r, s in p || (o += e[n][s] || "px"), o)
            }

            function A(t, e, i, a, s) {
                return (i = h.exec(t)) ? (s = parseFloat(i[2])) && e + ("+" == i[1] ? 1 : -1) * s : parseFloat(t)
            }

            function I(t, e) {
                var i, a, s, n = t ? n = isFinite(t.length) ? t : [t] : [],
                    o = e.complete,
                    r = e.duration,
                    h = e.easing,
                    c = e.bezier,
                    u = [],
                    m = [],
                    _ = [],
                    p = [];
                for (c && (a = e.left, s = e.top, delete e.right, delete e.bottom, delete e.left, delete e.top), i = n.length; i--;) {
                    if (u[i] = {}, m[i] = {}, _[i] = {}, c) {
                        var y = v(n[i], "left"),
                            b = v(n[i], "top"),
                            w = [A(E(a) ? a(n[i]) : a || 0, parseFloat(y)), A(E(s) ? s(n[i]) : s || 0, parseFloat(b))];
                        p[i] = E(c) ? c(n[i], w) : c, p[i].push(w), p[i].unshift([parseInt(y, 10), parseInt(b, 10)])
                    }
                    for (var L in e) {
                        switch (L) {
                            case "complete":
                            case "duration":
                            case "easing":
                            case "bezier":
                                continue
                        }
                        var I, C = v(n[i], L),
                            O = E(e[L]) ? e[L](n[i]) : e[L];
                        "string" != typeof O || !l.test(O) || l.test(C) ? (u[i][L] = "transform" == L ? k(C) : "string" == typeof O && l.test(O) ? T(C).slice(1) : parseFloat(C), m[i][L] = "transform" == L ? k(O, u[i][L]) : "string" == typeof O && "#" == O.charAt(0) ? T(O).slice(1) : A(O, parseFloat(C)), "string" == typeof O && (I = O.match(d)) && (_[i][L] = I[1])) : delete e[L]
                    }
                }
                return S.apply(n, [r, function(t, a, s) {
                    for (i = n.length; i--;)
                        for (var o in c && (s = D(p[i], t), n[i].style.left = s[0] + "px", n[i].style.top = s[1] + "px"), e) a = N(t, _, u, m, o, i), "transform" == o ? n[i].style[f] = x(a) : "opacity" != o || g ? n[i].style[M(o)] = a : n[i].style.filter = "alpha(opacity=" + 100 * a + ")"
                }, o, h])
            }
            return y((function(t) {
                o = t > 1e12 != s() > 1e12
            })), I.tween = S, I.getStyle = v, I.bezier = D, I.transform = f, I.parseTransform = k, I.formatTransform = x, I.easings = {}, I
        }();
        class ot {
            show(t) {
                t || (this._el.container.style.display = "block")
            }
            hide(t) {
                this._el.container.style.display = "none"
            }
            addTo(t) {
                t.appendChild(this._el.container), this.onAdd()
            }
            removeFrom(t) {
                t.removeChild(this._el.container), this.onRemove()
            }
            animatePosition(t, e) {
                var i = {
                    duration: this.options.duration,
                    easing: this.options.ease
                };
                for (var a in t) t.hasOwnProperty(a) && (i[a] = t[a] + "px");
                this.animator && this.animator.stop(), this.animator = st(e, i)
            }
            onLoaded() {
                this.fire("loaded", this.data)
            }
            onAdd() {
                this.fire("added", this.data)
            }
            onRemove() {
                this.fire("removed", this.data)
            }
            setPosition(t, e) {
                for (var i in t) t.hasOwnProperty(i) && (e ? e.style[i] = t[i] + "px" : this._el.container.style[i] = t[i] + "px")
            }
            getPosition() {
                return b(this._el.container)
            }
        }
        class rt {
            constructor(t, e, i) {
                this._el = {
                    drag: t,
                    move: t
                }, this.mousedrag = {
                    down: "mousedown",
                    up: "mouseup",
                    leave: "mouseleave",
                    move: "mousemove"
                }, this.touchdrag = {
                    down: "touchstart",
                    up: "touchend",
                    leave: "mouseleave",
                    move: "touchmove"
                }, i && (this._el.move = i), this.options = {
                    enable: {
                        x: !0,
                        y: !0
                    },
                    constraint: {
                        top: !1,
                        bottom: !1,
                        left: !1,
                        right: !1
                    },
                    momentum_multiplier: 2e3,
                    duration: 1e3,
                    ease: et
                }, this.animator = null, this.dragevent = this.mousedrag, f && (this.dragevent = this.touchdrag), this.data = {
                    sliding: !1,
                    direction: "none",
                    pagex: {
                        start: 0,
                        end: 0
                    },
                    pagey: {
                        start: 0,
                        end: 0
                    },
                    pos: {
                        start: {
                            x: 0,
                            y: 0
                        },
                        end: {
                            x: 0,
                            y: 0
                        }
                    },
                    new_pos: {
                        x: 0,
                        y: 0
                    },
                    new_pos_parent: {
                        x: 0,
                        y: 0
                    },
                    time: {
                        start: 0,
                        end: 0
                    },
                    touch: !1
                }, E(this.options, e)
            }
            enable(t) {
                this.data.pos.start = 0, this._el.move.style.left = this.data.pos.start.x + "px", this._el.move.style.top = this.data.pos.start.y + "px", this._el.move.style.position = "absolute"
            }
            disable() {
                ht.removeListener(this._el.drag, this.dragevent.down, this._onDragStart, this), ht.removeListener(this._el.drag, this.dragevent.up, this._onDragEnd, this)
            }
            stopMomentum() {
                this.animator && this.animator.stop()
            }
            updateConstraint(t) {
                this.options.constraint = t
            }
            _onDragStart(t) {
                f ? t.originalEvent ? (this.data.pagex.start = t.originalEvent.touches[0].screenX, this.data.pagey.start = t.originalEvent.touches[0].screenY) : (this.data.pagex.start = t.targetTouches[0].screenX, this.data.pagey.start = t.targetTouches[0].screenY) : (this.data.pagex.start = t.pageX, this.data.pagey.start = t.pageY), this.options.enable.x && (this._el.move.style.left = this.data.pagex.start - this._el.move.offsetWidth / 2 + "px"), this.options.enable.y && (this._el.move.style.top = this.data.pagey.start - this._el.move.offsetHeight / 2 + "px"), this.data.pos.start = b(this._el.drag), this.data.time.start = (new Date).getTime(), this.fire("dragstart", this.data), ht.addListener(this._el.drag, this.dragevent.move, this._onDragMove, this), ht.addListener(this._el.drag, this.dragevent.leave, this._onDragEnd, this)
            }
            _onDragEnd(t) {
                this.data.sliding = !1, ht.removeListener(this._el.drag, this.dragevent.move, this._onDragMove, this), ht.removeListener(this._el.drag, this.dragevent.leave, this._onDragEnd, this), this.fire("dragend", this.data), this._momentum()
            }
            _onDragMove(t) {
                t.preventDefault(), this.data.sliding = !0, f ? t.originalEvent ? (this.data.pagex.end = t.originalEvent.touches[0].screenX, this.data.pagey.end = t.originalEvent.touches[0].screenY) : (this.data.pagex.end = t.targetTouches[0].screenX, this.data.pagey.end = t.targetTouches[0].screenY) : (this.data.pagex.end = t.pageX, this.data.pagey.end = t.pageY), this.data.pos.end = b(this._el.drag), this.data.new_pos.x = -(this.data.pagex.start - this.data.pagex.end - this.data.pos.start.x), this.data.new_pos.y = -(this.data.pagey.start - this.data.pagey.end - this.data.pos.start.y), this.options.enable.x && (this._el.move.style.left = this.data.new_pos.x + "px"), this.options.enable.y && (this._el.move.style.top = this.data.new_pos.y + "px"), this.fire("dragmove", this.data)
            }
            _momentum() {
                var t = {
                        x: 0,
                        y: 0,
                        time: 0
                    },
                    e = {
                        x: 0,
                        y: 0,
                        time: 0
                    },
                    i = !1;
                t.time = 10 * ((new Date).getTime() - this.data.time.start), e.time = 10 * ((new Date).getTime() - this.data.time.start), e.x = this.options.momentum_multiplier * (Math.abs(this.data.pagex.end) - Math.abs(this.data.pagex.start)), e.y = this.options.momentum_multiplier * (Math.abs(this.data.pagey.end) - Math.abs(this.data.pagey.start)), t.x = Math.round(e.x / e.time), t.y = Math.round(e.y / e.time), this.data.new_pos.x = Math.min(this.data.pos.end.x + t.x), this.data.new_pos.y = Math.min(this.data.pos.end.y + t.y), this.options.enable.x ? this.data.new_pos.x < 0 && (this.data.new_pos.x = 0) : this.data.new_pos.x = this.data.pos.start.x, this.options.enable.y ? this.data.new_pos.y < 0 && (this.data.new_pos.y = 0) : this.data.new_pos.y = this.data.pos.start.y, e.time < 3e3 && (i = !0), Math.abs(e.x) > 1e4 && (this.data.direction = "left", e.x > 0 && (this.data.direction = "right")), Math.abs(e.y) > 1e4 && (this.data.direction = "up", e.y > 0 && (this.data.direction = "down")), this._animateMomentum(), i && this.fire("swipe_" + this.data.direction, this.data)
            }
            _animateMomentum() {
                var t = {
                        x: this.data.new_pos.x,
                        y: this.data.new_pos.y
                    },
                    e = {
                        duration: this.options.duration,
                        easing: tt
                    };
                this.options.enable.y && ((this.options.constraint.top || this.options.constraint.bottom) && (t.y > this.options.constraint.bottom ? t.y = this.options.constraint.bottom : t.y < this.options.constraint.top && (t.y = this.options.constraint.top)), e.top = Math.floor(t.y) + "px"), this.options.enable.x && ((this.options.constraint.left || this.options.constraint.right) && (t.x > this.options.constraint.left ? t.x = this.options.constraint.left : t.x < this.options.constraint.right && (t.x = this.options.constraint.right)), e.left = Math.floor(t.x) + "px"), this.animator = st(this._el.move, e), this.fire("momentum", this.data)
            }
        }
        R(at);
        var lt, ht = {
                addListener: function(t, e, i, a) {
                    var s = A(i),
                        n = "_tl_" + e + s;
                    if (!t[n]) {
                        var o = function(e) {
                            return i.call(a || t, e || ht._getEvent())
                        };
                        if (f && "dblclick" === e && this.addDoubleTapListener) this.addDoubleTapListener(t, o, s);
                        else if ("addEventListener" in t)
                            if ("mousewheel" === e) t.addEventListener("DOMMouseScroll", o, !1), t.addEventListener(e, o, !1);
                            else if ("mouseenter" === e || "mouseleave" === e) {
                            var r = o,
                                l = "mouseenter" === e ? "mouseover" : "mouseout";
                            o = function(e) {
                                if (ht._checkMouse(t, e)) return r(e)
                            }, t.addEventListener(l, o, !1)
                        } else t.addEventListener(e, o, !1);
                        else "attachEvent" in t && t.attachEvent("on" + e, o);
                        t[n] = o
                    }
                },
                removeListener: function(t, e, i) {
                    var a = A(i),
                        s = "_tl_" + e + a,
                        n = t[s];
                    n && (f && "dblclick" === e && this.removeDoubleTapListener ? this.removeDoubleTapListener(t, a) : "removeEventListener" in t ? "mousewheel" === e ? (t.removeEventListener("DOMMouseScroll", n, !1), t.removeEventListener(e, n, !1)) : "mouseenter" === e || "mouseleave" === e ? t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseout", n, !1) : t.removeEventListener(e, n, !1) : "detachEvent" in t && t.detachEvent("on" + e, n), t[s] = null)
                },
                _checkMouse: function(t, e) {
                    var i = e.relatedTarget;
                    if (!i) return !0;
                    try {
                        for (; i && i !== t;) i = i.parentNode
                    } catch (t) {
                        return !1
                    }
                    return i !== t
                },
                _getEvent: function() {
                    var t = window.event;
                    if (!t)
                        for (var e = arguments.callee.caller; e && (!(t = e.arguments[0]) || window.Event !== t.constructor);) e = e.caller;
                    return t
                },
                stopPropagation: function(t) {
                    t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
                },
                disableClickPropagation: function(t) {
                    ht.addListener(t, rt.START, ht.stopPropagation), ht.addListener(t, "click", ht.stopPropagation), ht.addListener(t, "dblclick", ht.stopPropagation)
                },
                preventDefault: function(t) {
                    t.preventDefault ? t.preventDefault() : t.returnValue = !1
                },
                stop: function(t) {
                    ht.preventDefault(t), ht.stopPropagation(t)
                },
                getWheelDelta: function(t) {
                    var e = 0;
                    return t.wheelDelta && (e = t.wheelDelta / 120), t.detail && (e = -t.detail / 3), e
                }
            },
            dt = function() {
                var t, e, i, a, s, n, o = [],
                    r = o.slice,
                    l = o.filter,
                    h = window.document,
                    d = {},
                    c = {},
                    u = {
                        "column-count": 1,
                        columns: 1,
                        "font-weight": 1,
                        "line-height": 1,
                        opacity: 1,
                        "z-index": 1,
                        zoom: 1
                    },
                    m = /^\s*<(\w+|!)[^>]*>/,
                    _ = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                    p = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                    f = /^(?:body|html)$/i,
                    g = /([A-Z])/g,
                    v = ["val", "css", "html", "text", "data", "width", "height", "offset"],
                    y = h.createElement("table"),
                    b = h.createElement("tr"),
                    w = {
                        tr: h.createElement("tbody"),
                        tbody: y,
                        thead: y,
                        tfoot: y,
                        td: b,
                        th: b,
                        "*": h.createElement("div")
                    },
                    k = /complete|loaded|interactive/,
                    x = /^[\w-]*$/,
                    T = {},
                    M = T.toString,
                    E = {},
                    L = h.createElement("div"),
                    S = {
                        tabindex: "tabIndex",
                        readonly: "readOnly",
                        for: "htmlFor",
                        class: "className",
                        maxlength: "maxLength",
                        cellspacing: "cellSpacing",
                        cellpadding: "cellPadding",
                        rowspan: "rowSpan",
                        colspan: "colSpan",
                        usemap: "useMap",
                        frameborder: "frameBorder",
                        contenteditable: "contentEditable"
                    },
                    D = Array.isArray || function(t) {
                        return t instanceof Array
                    };

                function N(t) {
                    return null == t ? String(t) : T[M.call(t)] || "object"
                }

                function A(t) {
                    return "function" == N(t)
                }

                function I(t) {
                    return null != t && t == t.window
                }

                function C(t) {
                    return null != t && t.nodeType == t.DOCUMENT_NODE
                }

                function O(t) {
                    return "object" == N(t)
                }

                function R(t) {
                    return O(t) && !I(t) && Object.getPrototypeOf(t) == Object.prototype
                }

                function j(t) {
                    return "number" == typeof t.length
                }

                function z(t) {
                    return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
                }

                function P(t) {
                    return t in c ? c[t] : c[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
                }

                function H(t, e) {
                    return "number" != typeof e || u[z(t)] ? e : e + "px"
                }

                function F(t) {
                    return "children" in t ? r.call(t.children) : i.map(t.childNodes, (function(t) {
                        if (1 == t.nodeType) return t
                    }))
                }

                function q(i, a, s) {
                    for (e in a) s && (R(a[e]) || D(a[e])) ? (R(a[e]) && !R(i[e]) && (i[e] = {}), D(a[e]) && !D(i[e]) && (i[e] = []), q(i[e], a[e], s)) : a[e] !== t && (i[e] = a[e])
                }

                function $(t, e) {
                    return null == e ? i(t) : i(t).filter(e)
                }

                function U(t, e, i, a) {
                    return A(e) ? e.call(t, i, a) : e
                }

                function B(t, e, i) {
                    null == i ? t.removeAttribute(e) : t.setAttribute(e, i)
                }

                function W(e, i) {
                    var a = e.className,
                        s = a && a.baseVal !== t;
                    if (i === t) return s ? a.baseVal : a;
                    s ? a.baseVal = i : e.className = i
                }

                function G(t) {
                    var e;
                    try {
                        return t ? "true" == t || "false" != t && ("null" == t ? null : /^0/.test(t) || isNaN(e = Number(t)) ? /^[\[\{]/.test(t) ? i.parseJSON(t) : t : e) : t
                    } catch (e) {
                        return t
                    }
                }

                function Y(t, e) {
                    for (var i in e(t), t.childNodes) Y(t.childNodes[i], e)
                }
                return E.matches = function(t, e) {
                    if (!e || !t || 1 !== t.nodeType) return !1;
                    var i = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
                    if (i) return i.call(t, e);
                    var a, s = t.parentNode,
                        n = !s;
                    return n && (s = L).appendChild(t), a = ~E.qsa(s, e).indexOf(t), n && L.removeChild(t), a
                }, s = function(t) {
                    return t.replace(/-+(.)?/g, (function(t, e) {
                        return e ? e.toUpperCase() : ""
                    }))
                }, n = function(t) {
                    return l.call(t, (function(e, i) {
                        return t.indexOf(e) == i
                    }))
                }, E.fragment = function(e, a, s) {
                    var n, o, l;
                    return _.test(e) && (n = i(h.createElement(RegExp.$1))), n || (e.replace && (e = e.replace(p, "<$1></$2>")), a === t && (a = m.test(e) && RegExp.$1), a in w || (a = "*"), (l = w[a]).innerHTML = "" + e, n = i.each(r.call(l.childNodes), (function() {
                        l.removeChild(this)
                    }))), R(s) && (o = i(n), i.each(s, (function(t, e) {
                        v.indexOf(t) > -1 ? o[t](e) : o.attr(t, e)
                    }))), n
                }, E.Z = function(t, e) {
                    return (t = t || []).__proto__ = i.fn, t.selector = e || "", t
                }, E.isZ = function(t) {
                    return t instanceof E.Z
                }, E.init = function(e, a) {
                    var s, n;
                    if (!e) return E.Z();
                    if ("string" == typeof e)
                        if ("<" == (e = e.trim())[0] && m.test(e)) s = E.fragment(e, RegExp.$1, a), e = null;
                        else {
                            if (a !== t) return i(a).find(e);
                            s = E.qsa(h, e)
                        }
                    else {
                        if (A(e)) return i(h).ready(e);
                        if (E.isZ(e)) return e;
                        if (D(e)) n = e, s = l.call(n, (function(t) {
                            return null != t
                        }));
                        else if (O(e)) s = [e], e = null;
                        else if (m.test(e)) s = E.fragment(e.trim(), RegExp.$1, a), e = null;
                        else {
                            if (a !== t) return i(a).find(e);
                            s = E.qsa(h, e)
                        }
                    }
                    return E.Z(s, e)
                }, (i = function(t, e) {
                    return E.init(t, e)
                }).extend = function(t) {
                    var e, i = r.call(arguments, 1);
                    return "boolean" == typeof t && (e = t, t = i.shift()), i.forEach((function(i) {
                        q(t, i, e)
                    })), t
                }, E.qsa = function(t, e) {
                    var i, a = "#" == e[0],
                        s = !a && "." == e[0],
                        n = a || s ? e.slice(1) : e,
                        o = x.test(n);
                    return C(t) && o && a ? (i = t.getElementById(n)) ? [i] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : r.call(o && !a ? s ? t.getElementsByClassName(n) : t.getElementsByTagName(e) : t.querySelectorAll(e))
                }, i.contains = function(t, e) {
                    return t !== e && t.contains(e)
                }, i.type = N, i.isFunction = A, i.isWindow = I, i.isArray = D, i.isPlainObject = R, i.isEmptyObject = function(t) {
                    var e;
                    for (e in t) return !1;
                    return !0
                }, i.inArray = function(t, e, i) {
                    return o.indexOf.call(e, t, i)
                }, i.camelCase = s, i.trim = function(t) {
                    return null == t ? "" : String.prototype.trim.call(t)
                }, i.uuid = 0, i.support = {}, i.expr = {}, i.map = function(t, e) {
                    var a, s, n, o, r = [];
                    if (j(t))
                        for (s = 0; s < t.length; s++) null != (a = e(t[s], s)) && r.push(a);
                    else
                        for (n in t) null != (a = e(t[n], n)) && r.push(a);
                    return (o = r).length > 0 ? i.fn.concat.apply([], o) : o
                }, i.each = function(t, e) {
                    var i, a;
                    if (j(t)) {
                        for (i = 0; i < t.length; i++)
                            if (!1 === e.call(t[i], i, t[i])) return t
                    } else
                        for (a in t)
                            if (!1 === e.call(t[a], a, t[a])) return t;
                    return t
                }, i.grep = function(t, e) {
                    return l.call(t, e)
                }, window.JSON && (i.parseJSON = JSON.parse), i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), (function(t, e) {
                    T["[object " + e + "]"] = e.toLowerCase()
                })), i.fn = {
                    forEach: o.forEach,
                    reduce: o.reduce,
                    push: o.push,
                    sort: o.sort,
                    indexOf: o.indexOf,
                    concat: o.concat,
                    map: function(t) {
                        return i(i.map(this, (function(e, i) {
                            return t.call(e, i, e)
                        })))
                    },
                    slice: function() {
                        return i(r.apply(this, arguments))
                    },
                    ready: function(t) {
                        return k.test(h.readyState) && h.body ? t(i) : h.addEventListener("DOMContentLoaded", (function() {
                            t(i)
                        }), !1), this
                    },
                    get: function(e) {
                        return e === t ? r.call(this) : this[e >= 0 ? e : e + this.length]
                    },
                    toArray: function() {
                        return this.get()
                    },
                    size: function() {
                        return this.length
                    },
                    remove: function() {
                        return this.each((function() {
                            null != this.parentNode && this.parentNode.removeChild(this)
                        }))
                    },
                    each: function(t) {
                        return o.every.call(this, (function(e, i) {
                            return !1 !== t.call(e, i, e)
                        })), this
                    },
                    filter: function(t) {
                        return A(t) ? this.not(this.not(t)) : i(l.call(this, (function(e) {
                            return E.matches(e, t)
                        })))
                    },
                    add: function(t, e) {
                        return i(n(this.concat(i(t, e))))
                    },
                    is: function(t) {
                        return this.length > 0 && E.matches(this[0], t)
                    },
                    not: function(e) {
                        var a = [];
                        if (A(e) && e.call !== t) this.each((function(t) {
                            e.call(this, t) || a.push(this)
                        }));
                        else {
                            var s = "string" == typeof e ? this.filter(e) : j(e) && A(e.item) ? r.call(e) : i(e);
                            this.forEach((function(t) {
                                s.indexOf(t) < 0 && a.push(t)
                            }))
                        }
                        return i(a)
                    },
                    has: function(t) {
                        return this.filter((function() {
                            return O(t) ? i.contains(this, t) : i(this).find(t).size()
                        }))
                    },
                    eq: function(t) {
                        return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
                    },
                    first: function() {
                        var t = this[0];
                        return t && !O(t) ? t : i(t)
                    },
                    last: function() {
                        var t = this[this.length - 1];
                        return t && !O(t) ? t : i(t)
                    },
                    find: function(t) {
                        var e = this;
                        return "object" == typeof t ? i(t).filter((function() {
                            var t = this;
                            return o.some.call(e, (function(e) {
                                return i.contains(e, t)
                            }))
                        })) : 1 == this.length ? i(E.qsa(this[0], t)) : this.map((function() {
                            return E.qsa(this, t)
                        }))
                    },
                    closest: function(t, e) {
                        var a = this[0],
                            s = !1;
                        for ("object" == typeof t && (s = i(t)); a && !(s ? s.indexOf(a) >= 0 : E.matches(a, t));) a = a !== e && !C(a) && a.parentNode;
                        return i(a)
                    },
                    parents: function(t) {
                        for (var e = [], a = this; a.length > 0;) a = i.map(a, (function(t) {
                            if ((t = t.parentNode) && !C(t) && e.indexOf(t) < 0) return e.push(t), t
                        }));
                        return $(e, t)
                    },
                    parent: function(t) {
                        return $(n(this.pluck("parentNode")), t)
                    },
                    children: function(t) {
                        return $(this.map((function() {
                            return F(this)
                        })), t)
                    },
                    contents: function() {
                        return this.map((function() {
                            return r.call(this.childNodes)
                        }))
                    },
                    siblings: function(t) {
                        return $(this.map((function(t, e) {
                            return l.call(F(e.parentNode), (function(t) {
                                return t !== e
                            }))
                        })), t)
                    },
                    empty: function() {
                        return this.each((function() {
                            this.innerHTML = ""
                        }))
                    },
                    pluck: function(t) {
                        return i.map(this, (function(e) {
                            return e[t]
                        }))
                    },
                    show: function() {
                        return this.each((function() {
                            var t, e, i;
                            "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = (t = this.nodeName, d[t] || (e = h.createElement(t), h.body.appendChild(e), i = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == i && (i = "block"), d[t] = i), d[t]))
                        }))
                    },
                    replaceWith: function(t) {
                        return this.before(t).remove()
                    },
                    wrap: function(t) {
                        var e = A(t);
                        if (this[0] && !e) var a = i(t).get(0),
                            s = a.parentNode || this.length > 1;
                        return this.each((function(n) {
                            i(this).wrapAll(e ? t.call(this, n) : s ? a.cloneNode(!0) : a)
                        }))
                    },
                    wrapAll: function(t) {
                        if (this[0]) {
                            var e;
                            for (i(this[0]).before(t = i(t));
                                (e = t.children()).length;) t = e.first();
                            i(t).append(this)
                        }
                        return this
                    },
                    wrapInner: function(t) {
                        var e = A(t);
                        return this.each((function(a) {
                            var s = i(this),
                                n = s.contents(),
                                o = e ? t.call(this, a) : t;
                            n.length ? n.wrapAll(o) : s.append(o)
                        }))
                    },
                    unwrap: function() {
                        return this.parent().each((function() {
                            i(this).replaceWith(i(this).children())
                        })), this
                    },
                    clone: function() {
                        return this.map((function() {
                            return this.cloneNode(!0)
                        }))
                    },
                    hide: function() {
                        return this.css("display", "none")
                    },
                    toggle: function(e) {
                        return this.each((function() {
                            var a = i(this);
                            (e === t ? "none" == a.css("display") : e) ? a.show(): a.hide()
                        }))
                    },
                    prev: function(t) {
                        return i(this.pluck("previousElementSibling")).filter(t || "*")
                    },
                    next: function(t) {
                        return i(this.pluck("nextElementSibling")).filter(t || "*")
                    },
                    html: function(t) {
                        return 0 === arguments.length ? this.length > 0 ? this[0].innerHTML : null : this.each((function(e) {
                            var a = this.innerHTML;
                            i(this).empty().append(U(this, t, e, a))
                        }))
                    },
                    text: function(e) {
                        return 0 === arguments.length ? this.length > 0 ? this[0].textContent : null : this.each((function() {
                            this.textContent = e === t ? "" : "" + e
                        }))
                    },
                    attr: function(i, a) {
                        var s;
                        return "string" == typeof i && a === t ? 0 == this.length || 1 !== this[0].nodeType ? t : "value" == i && "INPUT" == this[0].nodeName ? this.val() : !(s = this[0].getAttribute(i)) && i in this[0] ? this[0][i] : s : this.each((function(t) {
                            if (1 === this.nodeType)
                                if (O(i))
                                    for (e in i) B(this, e, i[e]);
                                else B(this, i, U(this, a, t, this.getAttribute(i)))
                        }))
                    },
                    removeAttr: function(t) {
                        return this.each((function() {
                            1 === this.nodeType && B(this, t)
                        }))
                    },
                    prop: function(e, i) {
                        return e = S[e] || e, i === t ? this[0] && this[0][e] : this.each((function(t) {
                            this[e] = U(this, i, t, this[e])
                        }))
                    },
                    data: function(e, i) {
                        var a = this.attr("data-" + e.replace(g, "-$1").toLowerCase(), i);
                        return null !== a ? G(a) : t
                    },
                    val: function(t) {
                        return 0 === arguments.length ? this[0] && (this[0].multiple ? i(this[0]).find("option").filter((function() {
                            return this.selected
                        })).pluck("value") : this[0].value) : this.each((function(e) {
                            this.value = U(this, t, e, this.value)
                        }))
                    },
                    offset: function(t) {
                        if (t) return this.each((function(e) {
                            var a = i(this),
                                s = U(this, t, e, a.offset()),
                                n = a.offsetParent().offset(),
                                o = {
                                    top: s.top - n.top,
                                    left: s.left - n.left
                                };
                            "static" == a.css("position") && (o.position = "relative"), a.css(o)
                        }));
                        if (0 == this.length) return null;
                        var e = this[0].getBoundingClientRect();
                        return {
                            left: e.left + window.pageXOffset,
                            top: e.top + window.pageYOffset,
                            width: Math.round(e.width),
                            height: Math.round(e.height)
                        }
                    },
                    css: function(t, a) {
                        if (arguments.length < 2) {
                            var n = this[0],
                                o = getComputedStyle(n, "");
                            if (!n) return;
                            if ("string" == typeof t) return n.style[s(t)] || o.getPropertyValue(t);
                            if (D(t)) {
                                var r = {};
                                return i.each(D(t) ? t : [t], (function(t, e) {
                                    r[e] = n.style[s(e)] || o.getPropertyValue(e)
                                })), r
                            }
                        }
                        var l = "";
                        if ("string" == N(t)) a || 0 === a ? l = z(t) + ":" + H(t, a) : this.each((function() {
                            this.style.removeProperty(z(t))
                        }));
                        else
                            for (e in t) t[e] || 0 === t[e] ? l += z(e) + ":" + H(e, t[e]) + ";" : this.each((function() {
                                this.style.removeProperty(z(e))
                            }));
                        return this.each((function() {
                            this.style.cssText += ";" + l
                        }))
                    },
                    index: function(t) {
                        return t ? this.indexOf(i(t)[0]) : this.parent().children().indexOf(this[0])
                    },
                    hasClass: function(t) {
                        return !!t && o.some.call(this, (function(t) {
                            return this.test(W(t))
                        }), P(t))
                    },
                    addClass: function(t) {
                        return t ? this.each((function(e) {
                            a = [];
                            var s = W(this);
                            U(this, t, e, s).split(/\s+/g).forEach((function(t) {
                                i(this).hasClass(t) || a.push(t)
                            }), this), a.length && W(this, s + (s ? " " : "") + a.join(" "))
                        })) : this
                    },
                    removeClass: function(e) {
                        return this.each((function(i) {
                            if (e === t) return W(this, "");
                            a = W(this), U(this, e, i, a).split(/\s+/g).forEach((function(t) {
                                a = a.replace(P(t), " ")
                            })), W(this, a.trim())
                        }))
                    },
                    toggleClass: function(e, a) {
                        return e ? this.each((function(s) {
                            var n = i(this);
                            U(this, e, s, W(this)).split(/\s+/g).forEach((function(e) {
                                (a === t ? !n.hasClass(e) : a) ? n.addClass(e): n.removeClass(e)
                            }))
                        })) : this
                    },
                    scrollTop: function(e) {
                        if (this.length) {
                            var i = "scrollTop" in this[0];
                            return e === t ? i ? this[0].scrollTop : this[0].pageYOffset : this.each(i ? function() {
                                this.scrollTop = e
                            } : function() {
                                this.scrollTo(this.scrollX, e)
                            })
                        }
                    },
                    scrollLeft: function(e) {
                        if (this.length) {
                            var i = "scrollLeft" in this[0];
                            return e === t ? i ? this[0].scrollLeft : this[0].pageXOffset : this.each(i ? function() {
                                this.scrollLeft = e
                            } : function() {
                                this.scrollTo(e, this.scrollY)
                            })
                        }
                    },
                    position: function() {
                        if (this.length) {
                            var t = this[0],
                                e = this.offsetParent(),
                                a = this.offset(),
                                s = f.test(e[0].nodeName) ? {
                                    top: 0,
                                    left: 0
                                } : e.offset();
                            return a.top -= parseFloat(i(t).css("margin-top")) || 0, a.left -= parseFloat(i(t).css("margin-left")) || 0, s.top += parseFloat(i(e[0]).css("border-top-width")) || 0, s.left += parseFloat(i(e[0]).css("border-left-width")) || 0, {
                                top: a.top - s.top,
                                left: a.left - s.left
                            }
                        }
                    },
                    offsetParent: function() {
                        return this.map((function() {
                            for (var t = this.offsetParent || h.body; t && !f.test(t.nodeName) && "static" == i(t).css("position");) t = t.offsetParent;
                            return t
                        }))
                    }
                }, i.fn.detach = i.fn.remove, ["width", "height"].forEach((function(e) {
                    var a = e.replace(/./, (function(t) {
                        return t[0].toUpperCase()
                    }));
                    i.fn[e] = function(s) {
                        var n, o = this[0];
                        return s === t ? I(o) ? o["inner" + a] : C(o) ? o.documentElement["scroll" + a] : (n = this.offset()) && n[e] : this.each((function(t) {
                            (o = i(this)).css(e, U(this, s, t, o[e]()))
                        }))
                    }
                })), ["after", "prepend", "before", "append"].forEach((function(t, e) {
                    var a = e % 2;
                    i.fn[t] = function() {
                        var t, s, n = i.map(arguments, (function(e) {
                                return "object" == (t = N(e)) || "array" == t || null == e ? e : E.fragment(e)
                            })),
                            o = this.length > 1;
                        return n.length < 1 ? this : this.each((function(t, r) {
                            s = a ? r : r.parentNode, r = 0 == e ? r.nextSibling : 1 == e ? r.firstChild : 2 == e ? r : null, n.forEach((function(t) {
                                if (o) t = t.cloneNode(!0);
                                else if (!s) return i(t).remove();
                                Y(s.insertBefore(t, r), (function(t) {
                                    null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
                                }))
                            }))
                        }))
                    }, i.fn[a ? t + "To" : "insert" + (e ? "Before" : "After")] = function(e) {
                        return i(e)[t](this), this
                    }
                })), E.Z.prototype = i.fn, E.uniq = n, E.deserializeValue = G, i.zepto = E, i
            }();
        window.Zepto = dt, void 0 === window.$ && (window.$ = dt),
            function(t) {
                t.zepto.qsa;
                var e, i = 1,
                    a = Array.prototype.slice,
                    s = t.isFunction,
                    n = function(t) {
                        return "string" == typeof t
                    },
                    o = {},
                    r = {},
                    l = "onfocusin" in window,
                    h = {
                        focus: "focusin",
                        blur: "focusout"
                    },
                    d = {
                        mouseenter: "mouseover",
                        mouseleave: "mouseout"
                    };

                function c(t) {
                    return t._zid || (t._zid = i++)
                }

                function u(t, e, i, a) {
                    if ((e = m(e)).ns) var s = (n = e.ns, new RegExp("(?:^| )" + n.replace(" ", " .* ?") + "(?: |$)"));
                    var n;
                    return (o[c(t)] || []).filter((function(t) {
                        return t && (!e.e || t.e == e.e) && (!e.ns || s.test(t.ns)) && (!i || c(t.fn) === c(i)) && (!a || t.sel == a)
                    }))
                }

                function m(t) {
                    var e = ("" + t).split(".");
                    return {
                        e: e[0],
                        ns: e.slice(1).sort().join(" ")
                    }
                }

                function _(t, e) {
                    return t.del && !l && t.e in h || !!e
                }

                function p(t) {
                    return d[t] || l && h[t] || t
                }

                function f(i, a, s, n, r, l, h) {
                    var u = c(i),
                        f = o[u] || (o[u] = []);
                    a.split(/\s/).forEach((function(a) {
                        if ("ready" == a) return t(document).ready(s);
                        var o = m(a);
                        o.fn = s, o.sel = r, o.e in d && (s = function(e) {
                            var i = e.relatedTarget;
                            if (!i || i !== this && !t.contains(this, i)) return o.fn.apply(this, arguments)
                        }), o.del = l;
                        var c = l || s;
                        o.proxy = function(t) {
                            if (!(t = k(t)).isImmediatePropagationStopped()) {
                                t.data = n;
                                var a = c.apply(i, t._args == e ? [t] : [t].concat(t._args));
                                return !1 === a && (t.preventDefault(), t.stopPropagation()), a
                            }
                        }, o.i = f.length, f.push(o), "addEventListener" in i && i.addEventListener(p(o.e), o.proxy, _(o, h))
                    }))
                }

                function g(t, e, i, a, s) {
                    var n = c(t);
                    (e || "").split(/\s/).forEach((function(e) {
                        u(t, e, i, a).forEach((function(e) {
                            delete o[n][e.i], "removeEventListener" in t && t.removeEventListener(p(e.e), e.proxy, _(e, s))
                        }))
                    }))
                }
                r.click = r.mousedown = r.mouseup = r.mousemove = "MouseEvents", t.event = {
                    add: f,
                    remove: g
                }, t.proxy = function(e, i) {
                    if (s(e)) {
                        var a = function() {
                            return e.apply(i, arguments)
                        };
                        return a._zid = c(e), a
                    }
                    if (n(i)) return t.proxy(e[i], e);
                    throw new TypeError("expected function")
                }, t.fn.bind = function(t, e, i) {
                    return this.on(t, e, i)
                }, t.fn.unbind = function(t, e) {
                    return this.off(t, e)
                }, t.fn.one = function(t, e, i, a) {
                    return this.on(t, e, i, a, 1)
                };
                var v = function() {
                        return !0
                    },
                    y = function() {
                        return !1
                    },
                    b = /^([A-Z]|returnValue$|layer[XY]$)/,
                    w = {
                        preventDefault: "isDefaultPrevented",
                        stopImmediatePropagation: "isImmediatePropagationStopped",
                        stopPropagation: "isPropagationStopped"
                    };

                function k(i, a) {
                    return !a && i.isDefaultPrevented || (a || (a = i), t.each(w, (function(t, e) {
                        var s = a[t];
                        i[t] = function() {
                            return this[e] = v, s && s.apply(a, arguments)
                        }, i[e] = y
                    })), (a.defaultPrevented !== e ? a.defaultPrevented : "returnValue" in a ? !1 === a.returnValue : a.getPreventDefault && a.getPreventDefault()) && (i.isDefaultPrevented = v)), i
                }

                function x(t) {
                    var i, a = {
                        originalEvent: t
                    };
                    for (i in t) b.test(i) || t[i] === e || (a[i] = t[i]);
                    return k(a, t)
                }
                t.fn.delegate = function(t, e, i) {
                    return this.on(e, t, i)
                }, t.fn.undelegate = function(t, e, i) {
                    return this.off(e, t, i)
                }, t.fn.live = function(e, i) {
                    return t(document.body).delegate(this.selector, e, i), this
                }, t.fn.die = function(e, i) {
                    return t(document.body).undelegate(this.selector, e, i), this
                }, t.fn.on = function(i, o, r, l, h) {
                    var d, c, u = this;
                    return i && !n(i) ? (t.each(i, (function(t, e) {
                        u.on(t, o, r, e, h)
                    })), u) : (n(o) || s(l) || !1 === l || (l = r, r = o, o = e), (s(r) || !1 === r) && (l = r, r = e), !1 === l && (l = y), u.each((function(e, s) {
                        h && (d = function(t) {
                            return g(s, t.type, l), l.apply(this, arguments)
                        }), o && (c = function(e) {
                            var i, n = t(e.target).closest(o, s).get(0);
                            if (n && n !== s) return i = t.extend(x(e), {
                                currentTarget: n,
                                liveFired: s
                            }), (d || l).apply(n, [i].concat(a.call(arguments, 1)))
                        }), f(s, i, l, r, o, c || d)
                    })))
                }, t.fn.off = function(i, a, o) {
                    var r = this;
                    return i && !n(i) ? (t.each(i, (function(t, e) {
                        r.off(t, a, e)
                    })), r) : (n(a) || s(o) || !1 === o || (o = a, a = e), !1 === o && (o = y), r.each((function() {
                        g(this, i, o, a)
                    })))
                }, t.fn.trigger = function(e, i) {
                    return (e = n(e) || t.isPlainObject(e) ? t.Event(e) : k(e))._args = i, this.each((function() {
                        "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, i)
                    }))
                }, t.fn.triggerHandler = function(e, i) {
                    var a, s;
                    return this.each((function(o, r) {
                        (a = x(n(e) ? t.Event(e) : e))._args = i, a.target = r, t.each(u(r, e.type || e), (function(t, e) {
                            if (s = e.proxy(a), a.isImmediatePropagationStopped()) return !1
                        }))
                    })), s
                }, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach((function(e) {
                    t.fn[e] = function(t) {
                        return t ? this.bind(e, t) : this.trigger(e)
                    }
                })), ["focus", "blur"].forEach((function(e) {
                    t.fn[e] = function(t) {
                        return t ? this.bind(e, t) : this.each((function() {
                            try {
                                this[e]()
                            } catch (t) {}
                        })), this
                    }
                })), t.Event = function(t, e) {
                    n(t) || (t = (e = t).type);
                    var i = document.createEvent(r[t] || "Events"),
                        a = !0;
                    if (e)
                        for (var s in e) "bubbles" == s ? a = !!e[s] : i[s] = e[s];
                    return i.initEvent(t, a, !0), k(i)
                }
            }(dt),
            function(t) {
                var e, i, a = 0,
                    s = window.document,
                    n = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
                    o = /^(?:text|application)\/javascript/i,
                    r = /^(?:text|application)\/xml/i,
                    l = "application/json",
                    h = "text/html",
                    d = /^\s*$/;

                function c(e, i, a, n) {
                    if (e.global) return function(e, i, a) {
                        var s = t.Event(i);
                        return t(e).trigger(s, a), !s.isDefaultPrevented()
                    }(i || s, a, n)
                }

                function u(t, e) {
                    var i = e.context;
                    if (!1 === e.beforeSend.call(i, t, e) || !1 === c(e, i, "ajaxBeforeSend", [t, e])) return !1;
                    c(e, i, "ajaxSend", [t, e])
                }

                function m(t, e, i, a) {
                    var s = i.context,
                        n = "success";
                    i.success.call(s, t, n, e), a && a.resolveWith(s, [t, n, e]), c(i, s, "ajaxSuccess", [e, i, t]), p(n, e, i)
                }

                function _(t, e, i, a, s) {
                    var n = a.context;
                    a.error.call(n, i, e, t), s && s.rejectWith(n, [i, e, t]), c(a, n, "ajaxError", [i, a, t || e]), p(e, i, a)
                }

                function p(e, i, a) {
                    var s = a.context;
                    a.complete.call(s, i, e), c(a, s, "ajaxComplete", [i, a]),
                        function(e) {
                            e.global && !--t.active && c(e, null, "ajaxStop")
                        }(a)
                }

                function f() {}

                function g(t, e) {
                    return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
                }

                function v(e, i, a, s) {
                    var n = !t.isFunction(i);
                    return {
                        url: e,
                        data: n ? i : void 0,
                        success: n ? t.isFunction(a) ? a : void 0 : i,
                        dataType: n && s || a
                    }
                }
                t.active = 0, t.ajaxJSONP = function(e, i) {
                    if (!("type" in e)) return t.ajax(e);
                    var n, o, r = e.jsonpCallback,
                        l = (t.isFunction(r) ? r() : r) || "jsonp" + ++a,
                        h = s.createElement("script"),
                        d = window[l],
                        c = function(e) {
                            t(h).triggerHandler("error", e || "abort")
                        },
                        p = {
                            abort: c
                        };
                    return i && i.promise(p), t(h).on("load error", (function(a, s) {
                        clearTimeout(o), t(h).off().remove(), "error" != a.type && n ? m(n[0], p, e, i) : _(null, s || "error", p, e, i), window[l] = d, n && t.isFunction(d) && d(n[0]), d = n = void 0
                    })), !1 === u(p, e) ? (c("abort"), p) : (window[l] = function() {
                        n = arguments
                    }, h.src = e.url.replace(/\?(.+)=\?/, "?$1=" + l), s.head.appendChild(h), e.timeout > 0 && (o = setTimeout((function() {
                        c("timeout")
                    }), e.timeout)), p)
                }, t.ajaxSettings = {
                    type: "GET",
                    beforeSend: f,
                    success: f,
                    error: f,
                    complete: f,
                    context: null,
                    global: !0,
                    xhr: function() {
                        return new window.XMLHttpRequest
                    },
                    accepts: {
                        script: "text/javascript, application/javascript, application/x-javascript",
                        json: l,
                        xml: "application/xml, text/xml",
                        html: h,
                        text: "text/plain"
                    },
                    crossDomain: !1,
                    timeout: 0,
                    processData: !0,
                    cache: !0
                }, t.ajax = function(a) {
                    var s = t.extend({}, a || {}),
                        n = t.Deferred && t.Deferred();
                    for (e in t.ajaxSettings) void 0 === s[e] && (s[e] = t.ajaxSettings[e]);
                    ! function(e) {
                        e.global && 0 == t.active++ && c(e, null, "ajaxStart")
                    }(s), s.crossDomain || (s.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(s.url) && RegExp.$2 != window.location.host), s.url || (s.url = window.location.toString()),
                        function(e) {
                            e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = g(e.url, e.data), e.data = void 0)
                        }(s), !1 === s.cache && (s.url = g(s.url, "_=" + Date.now()));
                    var p = s.dataType,
                        v = /\?.+=\?/.test(s.url);
                    if ("jsonp" == p || v) return v || (s.url = g(s.url, s.jsonp ? s.jsonp + "=?" : !1 === s.jsonp ? "" : "callback=?")), t.ajaxJSONP(s, n);
                    var y, b = s.accepts[p],
                        w = {},
                        k = function(t, e) {
                            w[t.toLowerCase()] = [t, e]
                        },
                        x = /^([\w-]+:)\/\//.test(s.url) ? RegExp.$1 : window.location.protocol,
                        T = s.xhr(),
                        M = T.setRequestHeader;
                    if (n && n.promise(T), s.crossDomain || k("X-Requested-With", "XMLHttpRequest"), k("Accept", b || "*/*"), (b = s.mimeType || b) && (b.indexOf(",") > -1 && (b = b.split(",", 2)[0]), T.overrideMimeType && T.overrideMimeType(b)), (s.contentType || !1 !== s.contentType && s.data && "GET" != s.type.toUpperCase()) && k("Content-Type", s.contentType || "application/x-www-form-urlencoded"), s.headers)
                        for (i in s.headers) k(i, s.headers[i]);
                    if (T.setRequestHeader = k, T.onreadystatechange = function() {
                            if (4 == T.readyState) {
                                T.onreadystatechange = f, clearTimeout(y);
                                var e, i = !1;
                                if (T.status >= 200 && T.status < 300 || 304 == T.status || 0 == T.status && "file:" == x) {
                                    p = p || function(t) {
                                        return t && (t = t.split(";", 2)[0]), t && (t == h ? "html" : t == l ? "json" : o.test(t) ? "script" : r.test(t) && "xml") || "text"
                                    }(s.mimeType || T.getResponseHeader("content-type")), e = T.responseText;
                                    try {
                                        "script" == p ? (0, eval)(e) : "xml" == p ? e = T.responseXML : "json" == p && (e = d.test(e) ? null : t.parseJSON(e))
                                    } catch (t) {
                                        i = t
                                    }
                                    i ? _(i, "parsererror", T, s, n) : m(e, T, s, n)
                                } else _(T.statusText || null, T.status ? "error" : "abort", T, s, n)
                            }
                        }, !1 === u(T, s)) return T.abort(), _(null, "abort", T, s, n), T;
                    if (s.xhrFields)
                        for (i in s.xhrFields) T[i] = s.xhrFields[i];
                    var E = !("async" in s) || s.async;
                    for (i in T.open(s.type, s.url, E, s.username, s.password), w) M.apply(T, w[i]);
                    return s.timeout > 0 && (y = setTimeout((function() {
                        T.onreadystatechange = f, T.abort(), _(null, "timeout", T, s, n)
                    }), s.timeout)), T.send(s.data ? s.data : null), T
                }, t.get = function(e, i, a, s) {
                    return t.ajax(v.apply(null, arguments))
                }, t.post = function(e, i, a, s) {
                    var n = v.apply(null, arguments);
                    return n.type = "POST", t.ajax(n)
                }, t.getJSON = function(e, i, a) {
                    var s = v.apply(null, arguments);
                    return s.dataType = "json", t.ajax(s)
                }, t.fetchJSON = function(t) {
                    var e = new XMLHttpRequest;
                    return new Promise((function(i, a) {
                        e.onreadystatechange = function() {
                            try {
                                if (4 !== e.readyState) return;
                                if (e.status >= 200 && e.status < 300) {
                                    var s = JSON.parse(e.responseText);
                                    i(s)
                                } else a({
                                    status: e.status,
                                    statusText: e.statusText
                                })
                            } catch (e) {
                                a({
                                    status: 400,
                                    statusText: `Error fetching JSON from ${t}: ${e}`
                                })
                            }
                        }, e.open("GET", t, !0), e.send()
                    }))
                }, t.fn.load = function(e, i, a) {
                    if (!this.length) return this;
                    var s, o = this,
                        r = e.split(/\s/),
                        l = v(e, i, a),
                        h = l.success;
                    return r.length > 1 && (l.url = r[0], s = r[1]), l.success = function(e) {
                        o.html(s ? t("<div>").html(e.replace(n, "")).find(s) : e), h && h.apply(o, arguments)
                    }, t.ajax(l), this
                };
                var y = encodeURIComponent;

                function b(e, i, a, s) {
                    var n, o = t.isArray(i),
                        r = t.isPlainObject(i);
                    t.each(i, (function(i, l) {
                        n = t.type(l), s && (i = a ? s : s + "[" + (r || "object" == n || "array" == n ? i : "") + "]"), !s && o ? e.add(l.name, l.value) : "array" == n || !a && "object" == n ? b(e, l, a, i) : e.add(i, l)
                    }))
                }
                t.param = function(t, e) {
                    var i = [];
                    return i.add = function(t, e) {
                        this.push(y(t) + "=" + y(e))
                    }, b(i, t, e), i.join("&").replace(/%20/g, "+")
                }
            }(dt), (lt = dt).fn.serializeArray = function() {
                var t, e = [];
                return lt([].slice.call(this.get(0).elements)).each((function() {
                    var i = (t = lt(this)).attr("type");
                    "fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != i && "reset" != i && "button" != i && ("radio" != i && "checkbox" != i || this.checked) && e.push({
                        name: t.attr("name"),
                        value: t.val()
                    })
                })), e
            }, lt.fn.serialize = function() {
                var t = [];
                return this.serializeArray().forEach((function(e) {
                    t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
                })), t.join("&")
            }, lt.fn.submit = function(t) {
                if (t) this.bind("submit", t);
                else if (this.length) {
                    var e = lt.Event("submit");
                    this.eq(0).trigger(e), e.isDefaultPrevented() || this.get(0).submit()
                }
                return this
            },
            function(t) {
                "__proto__" in {} || t.extend(t.zepto, {
                    Z: function(e, i) {
                        return e = e || [], t.extend(e, t.fn), e.selector = i || "", e.__Z = !0, e
                    },
                    isZ: function(e) {
                        return "array" === t.type(e) && "__Z" in e
                    }
                });
                try {
                    getComputedStyle(void 0)
                } catch (t) {
                    var e = getComputedStyle;
                    window.getComputedStyle = function(t, i) {
                        try {
                            return e(t, i)
                        } catch (t) {
                            return null
                        }
                    }
                }
            }(dt);
        const ct = dt.getJSON,
            ut = dt.ajax,
            mt = dt.fetchJSON,
            _t = [
                ["millisecond", 1, function(t) {}],
                ["second", 1e3, function(t) {
                    t.setMilliseconds(0)
                }],
                ["minute", 6e4, function(t) {
                    t.setSeconds(0)
                }],
                ["hour", 36e5, function(t) {
                    t.setMinutes(0)
                }],
                ["day", 864e5, function(t) {
                    t.setHours(0)
                }],
                ["month", 2592e6, function(t) {
                    t.setDate(1)
                }],
                ["year", 31536e6, function(t) {
                    t.setMonth(0)
                }],
                ["decade", 31536e7, function(t) {
                    var e = t.getFullYear();
                    t.setFullYear(e - e % 10)
                }],
                ["century", 31536e8, function(t) {
                    var e = t.getFullYear();
                    t.setFullYear(e - e % 100)
                }],
                ["millennium", 31536e9, function(t) {
                    var e = t.getFullYear();
                    t.setFullYear(e - e % 1e3)
                }]
            ],
            pt = ["millisecond", "second", "minute", "hour", "day", "month", "year"],
            ft = /^([\+-]?\d+?)(-\d{2}?)?(-\d{2}?)?$/,
            gt = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/,
            vt = {
                base: {
                    millisecond: "time_short",
                    second: "time",
                    minute: "time_no_seconds_small_date",
                    hour: "time_no_seconds_small_date",
                    day: "full",
                    month: "month",
                    year: "year",
                    decade: "year",
                    century: "year",
                    millennium: "year",
                    age: "fallback",
                    epoch: "fallback",
                    era: "fallback",
                    eon: "fallback",
                    eon2: "fallback"
                },
                short: {
                    millisecond: "time_short",
                    second: "time_short",
                    minute: "time_no_seconds_short",
                    hour: "time_no_minutes_short",
                    day: "full_short",
                    month: "month_short",
                    year: "year",
                    decade: "year",
                    century: "year",
                    millennium: "year",
                    age: "fallback",
                    epoch: "fallback",
                    era: "fallback",
                    eon: "fallback",
                    eon2: "fallback"
                }
            },
            yt = it.extend({
                initialize: function(t, e, i) {
                    "number" == typeof t ? this.data = {
                        format: "yyyy mmmm",
                        date_obj: new Date(t)
                    } : Date == t.constructor ? this.data = {
                        format: "yyyy mmmm",
                        date_obj: t
                    } : (this.data = JSON.parse(JSON.stringify(t)), this._createDateObj()), t.format && !e && (e = t.format), this._setFormat(e, i)
                },
                setDateFormat: function(t) {
                    this.data.format = t
                },
                getDisplayDate: function(t, e) {
                    if (this.data.display_date) return this.data.display_date;
                    t || (t = Nt.fallback), t.constructor != Nt && (D("First argument to getDisplayDate must be type Language"), t = Nt.fallback);
                    var i = e || this.data.format;
                    return t.formatDate(this.data.date_obj, i)
                },
                getMillisecond: function() {
                    return this.getTime()
                },
                getTime: function() {
                    return this.data.date_obj.getTime()
                },
                isBefore: function(t) {
                    if (!this.data.date_obj.constructor == t.data.date_obj.constructor) throw new x("date_compare_err");
                    return "isBefore" in this.data.date_obj ? this.data.date_obj.isBefore(t.data.date_obj) : this.data.date_obj < t.data.date_obj
                },
                isAfter: function(t) {
                    if (!this.data.date_obj.constructor == t.data.date_obj.constructor) throw new x("date_compare_err");
                    return "isAfter" in this.data.date_obj ? this.data.date_obj.isAfter(t.data.date_obj) : this.data.date_obj > t.data.date_obj
                },
                floor: function(t) {
                    for (var e = new Date(this.data.date_obj.getTime()), i = 0; i < _t.length; i++)
                        if (_t[i][2](e), _t[i][0] == t) return new yt(e);
                    throw new x("invalid_scale_err", t)
                },
                _getDateData: function() {
                    var t = {
                        year: 0,
                        month: 1,
                        day: 1,
                        hour: 0,
                        minute: 0,
                        second: 0,
                        millisecond: 0
                    };
                    for (var e in E(t, this.data), pt) {
                        if (!O(t[pt[e]]).match(/^-?\d*$/)) throw new x("invalid_date_err", pt[e] + " = '" + t[pt[e]] + "'");
                        var i = parseInt(t[pt[e]]);
                        isNaN(i) && (i = 4 == e || 5 == e ? 1 : 0), t[pt[e]] = i
                    }
                    return t.month > 0 && t.month <= 12 && (t.month = t.month - 1), t
                },
                _createDateObj: function() {
                    var t = this._getDateData();
                    this.data.date_obj = new Date(t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond), this.data.date_obj.getFullYear() != t.year && this.data.date_obj.setFullYear(t.year)
                },
                findBestFormat: function(t) {
                    for (var e = pt, i = 0; i < e.length; i++)
                        if (this.data[e[i]]) return t ? t in vt || (t = "short") : t = "base", vt[t][e[i]];
                    return ""
                },
                _setFormat: function(t, e) {
                    t ? this.data.format = t : this.data.format || (this.data.format = this.findBestFormat()), e ? this.data.format_short = e : this.data.format_short || (this.data.format_short = this.findBestFormat(!0))
                },
                getFullYear: function() {
                    return this.data.date_obj.getFullYear()
                }
            });

        function bt(t) {
            if (t.match(ft)) {
                var e = t.match(ft).slice(1),
                    i = {
                        year: e[0].replace("+", "")
                    };
                return e[1] && (i.month = e[1].replace("-", "")), e[2] && (i.day = e[2].replace("-", "")), i
            }
            if (t.match(gt)) return cls.parseISODate(t);
            if (t.match(/^\-?\d+$/)) return {
                year: t
            };
            var a = {};
            if (t.match(/\d+\/\d+\/\d+/)) {
                var s = t.match(/\d+\/\d+\/\d+/)[0];
                t = O(t.replace(s, ""));
                var n = s.split("/");
                a.month = n[0], a.day = n[1], a.year = n[2]
            }
            if (t.match(/\d+\/\d+/) && (s = t.match(/\d+\/\d+/)[0], t = O(t.replace(s, "")), n = s.split("/"), a.month = n[0], a.year = n[1]), t.match(":")) {
                var o = t.split(":");
                if (a.hour = o[0], a.minute = o[1], o[2]) {
                    let t = o[2].split(".");
                    a.second = t[0], a.millisecond = t[1]
                }
            }
            return a
        }
        const wt = it.extend({
                initialize: function(t) {
                    if (this.year = parseInt(t), isNaN(this.year)) throw new x("invalid_year_err", t)
                },
                isBefore: function(t) {
                    return this.year < t.year
                },
                isAfter: function(t) {
                    return this.year > t.year
                },
                getTime: function() {
                    return this.year
                }
            }),
            kt = 1e6,
            xt = 10 * kt,
            Tt = 10 * xt,
            Mt = 10 * Tt;

        function Et(t) {
            return function(e) {
                var i = e.getTime();
                return new wt(Math.floor(i / t) * t)
            }
        }
        const Lt = [
                ["year", 1, new Et(1)],
                ["decade", 10, new Et(10)],
                ["century", 100, new Et(100)],
                ["millennium", 1e3, new Et(1e3)],
                ["age", kt, new Et(kt)],
                ["epoch", xt, new Et(xt)],
                ["era", Tt, new Et(Tt)],
                ["eon", Mt, new Et(Mt)]
            ],
            St = yt.extend({
                initialize: function(t, e, i) {
                    wt == t.constructor ? this.data = {
                        date_obj: t
                    } : (this.data = JSON.parse(JSON.stringify(t)), this._createDateObj()), t.format && !e && (e = t.format), this._setFormat(e, i)
                },
                _createDateObj: function() {
                    var t = this._getDateData();
                    this.data.date_obj = new wt(t.year)
                },
                floor: function(t) {
                    for (var e = 0; e < Lt.length; e++)
                        if (Lt[e][0] == t) {
                            var i = Lt[e][2](this.data.date_obj);
                            return new St(i)
                        } throw new x("invalid_scale_err", t)
                },
                getFullYear: function() {
                    return this.data.date_obj.getTime()
                }
            }),
            Dt = new RegExp(/\$\{(.+?)\}/g);
        class Nt {
            constructor(t, e) {
                for (let t in Ct.en) this[t] = Ct.en[t];
                if (t && "string" == typeof t && "en" != t) {
                    var i = t;
                    if (!(i in Ct)) {
                        console.log(`Expected language ${i} to be cached. Did you call the constructor directly?`);
                        var a = At(i, e);
                        mt(a).then((t => {
                            Ct[i] = t
                        })).catch((t => {
                            console.log(`Error loading language [${a}] ${t.statusText} [${t.status}]`)
                        }))
                    }
                    E(this, Ct[i])
                }
            }
            mergeData(t) {
                for (k in Ct.en) t[k] && ("object" == typeof this[k] ? E(t[k], this[k]) : this[k] = t[k])
            }
            formatBigYear(t, e) {
                var i = t.year,
                    a = this.bigdateformats[e] || this.bigdateformats.fallback;
                if (a) {
                    for (var s = 0; s < a.length; s++) {
                        var n = a[s];
                        if (Math.abs(i / n[0]) > 1) return It(Math.abs(i / n[0]), n[1])
                    }
                    return i.toString()
                }
                return D("Language file dateformats missing cosmological. Falling back."), It(i, e)
            }
            _(t, e) {
                let i = this.messages[t] || Nt.fallback.messages[t] || t;
                if (i.match(Dt)) {
                    if (!e) throw new x("template_message_without_context");
                    for (let t of i.matchAll(Dt)) {
                        if (!(t[1] in e)) throw new x("template_message_without_context");
                        i = i.replace(t[0], e[t[1]])
                    }
                }
                return i
            }
            formatDate(t, e) {
                return t.constructor == Date ? this.formatJSDate(t, e) : t.constructor == wt ? this.formatBigYear(t, e) : t.data && t.data.date_obj ? this.formatDate(t.data.date_obj, e) : (D("Unfamiliar date presented for formatting"), t.toString())
            }
            formatJSDate(t, e) {
                var i = this,
                    a = function(t, e) {
                        var a = i.period_labels[t];
                        return a && (t = e < 12 ? a[0] : a[1]), "<span class='tl-timeaxis-timesuffix'>" + t + "</span>"
                    };
                e || (e = "full");
                var s = this.dateformats[e] || Nt.fallback.dateformats[e];
                s || (s = e);
                var n = "get",
                    o = t[n + "Date"](),
                    r = t[n + "Day"](),
                    l = t[n + "Month"](),
                    h = t[n + "FullYear"](),
                    d = t[n + "Hours"](),
                    c = t[n + "Minutes"](),
                    u = t[n + "Seconds"](),
                    m = t[n + "Milliseconds"](),
                    _ = t.getTimezoneOffset(),
                    p = {
                        d: o,
                        dd: N(o),
                        ddd: this.date.day_abbr[r],
                        dddd: this.date.day[r],
                        m: l + 1,
                        mm: N(l + 1),
                        mmm: this.date.month_abbr[l],
                        mmmm: this.date.month[l],
                        yy: String(h).slice(2),
                        yyyy: h < 0 && this.has_negative_year_modifier() ? Math.abs(h) : h,
                        h: d % 12 || 12,
                        hh: N(d % 12 || 12),
                        H: d,
                        HH: N(d),
                        M: c,
                        MM: N(c),
                        s: u,
                        ss: N(u),
                        l: N(m, 3),
                        L: N(m > 99 ? Math.round(m / 10) : m),
                        t: a("t", d),
                        tt: a("tt", d),
                        T: a("T", d),
                        TT: a("TT", d),
                        Z: (String(t).match(/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g) || [""]).pop().replace(/[^-+\dA-Z]/g, ""),
                        o: (_ > 0 ? "-" : "+") + N(100 * Math.floor(Math.abs(_) / 60) + Math.abs(_) % 60, 4),
                        S: ["th", "st", "nd", "rd"][o % 10 > 3 ? 0 : (o % 100 - o % 10 != 10) * o % 10]
                    },
                    f = s.replace(Nt.DATE_FORMAT_TOKENS, (function(t) {
                        return t in p ? p[t] : t.slice(1, t.length - 1)
                    }));
                return this._applyEra(f, h)
            }
            has_negative_year_modifier() {
                return Boolean(this.era_labels.negative_year.prefix || this.era_labels.negative_year.suffix)
            }
            _applyEra(t, e) {
                var i = e < 0 ? this.era_labels.negative_year : this.era_labels.positive_year,
                    a = "";
                return i.prefix && (a += "<span>" + i.prefix + "</span> "), a += t, i.suffix && (a += " <span>" + i.suffix + "</span>"), a
            }
        }

        function At(t, e) {
            if (/\.json$/.test(t)) var i = t;
            else {
                var a = "/locale/" + t + ".json";
                /\/$/.test(e) && (a = a.substr(1)), i = e + a
            }
            return i
        }

        function It(t, e) {
            if (e.match(/%(\.(\d+))?f/)) {
                var i = e.match(/%(\.(\d+))?f/),
                    a = i[0];
                return i[2] && (t = t.toFixed(i[2])), e.replace(a, t)
            }
            return e
        }
        Nt.fallback = {
            messages: {}
        }, Nt.DATE_FORMAT_TOKENS = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g;
        var Ct = {
            en: {
                name: "English (built-in)",
                lang: "en",
                api: {
                    wikipedia: "en"
                },
                messages: {
                    loading: "Loading",
                    wikipedia: "From Wikipedia, the free encyclopedia",
                    error: "Error",
                    return_to_title: "Return to Title",
                    go_to_end: "Go to the last slide",
                    loading_content: "Loading Content",
                    loading_timeline: "Loading Timeline... ",
                    swipe_to_navigate: "Swipe to Navigate<br><span class='tl-button'>OK</span>",
                    zoom_in: "Zoom in",
                    zoom_out: "Zoom out",
                    unknown_read_err: "An unexpected error occurred trying to read your spreadsheet data",
                    invalid_url_err: "Unable to read Timeline data. Make sure your URL is for a Google Spreadsheet or a Timeline JSON file.",
                    network_err: "Unable to read your Google Spreadsheet. Make sure you have published it to the web.",
                    missing_start_date_err: "Missing start_date",
                    invalid_start_time_without_date: "Invalid configuration: time cannot be used without date.",
                    invalid_end_time_without_date: "Invalid configuration: end time cannot be used without end date.",
                    date_compare_err: "Can't compare timeline date objects on different scales",
                    invalid_scale_err: "Invalid scale",
                    invalid_date_err: "Invalid date: month, day and year must be numbers.",
                    invalid_separator_error: "Invalid time: misuse of : or . as separator.",
                    invalid_hour_err: "Invalid time (hour)",
                    invalid_minute_err: "Invalid time (minute)",
                    invalid_second_err: "Invalid time (second)",
                    invalid_fractional_err: "Invalid time (fractional seconds)",
                    invalid_second_fractional_err: "Invalid time (seconds and fractional seconds)",
                    invalid_year_err: "Invalid year",
                    flickr_notfound_err: "Photo not found or private",
                    flickr_invalidurl_err: "Invalid Flickr URL",
                    imgur_invalidurl_err: "Invalid Imgur URL",
                    twitter_load_err: "Unable to load Tweet",
                    twitterembed_invalidurl_err: "Invalid Twitter Embed url",
                    wikipedia_load_err: "Unable to load Wikipedia entry",
                    wikipedia_image_load_err: "Unable to load Wikipedia image data",
                    spotify_invalid_url: "Invalid Spotify URL",
                    invalid_rgb_err: "Invalid RGB argument",
                    time_scale_scale_err: "Don't know how to get date from time for scale",
                    axis_helper_no_options_err: "Axis helper must be configured with options",
                    axis_helper_scale_err: "No AxisHelper available for scale",
                    invalid_integer_option: "Invalid option value—must be a whole number.",
                    instagram_bad_request: "Invalid or private Instagram URL",
                    template_message_without_context: "Required variables not provided for template translation message",
                    aria_label_timeline: "Timeline",
                    aria_label_timeline_navigation: "Timeline navigation",
                    aria_label_timeline_content: "Timeline content",
                    aria_label_zoomin: "Show less than ${start} to ${end}",
                    aria_label_zoomout: "Show more than ${start} to ${end}"
                },
                date: {
                    month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    month_abbr: ["Jan.", "Feb.", "March", "April", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."],
                    day: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    day_abbr: ["Sun.", "Mon.", "Tues.", "Wed.", "Thurs.", "Fri.", "Sat."]
                },
                era_labels: {
                    positive_year: {
                        prefix: "",
                        suffix: ""
                    },
                    negative_year: {
                        prefix: "",
                        suffix: "BCE"
                    }
                },
                period_labels: {
                    t: ["a", "p"],
                    tt: ["am", "pm"],
                    T: ["A", "P"],
                    TT: ["AM", "PM"]
                },
                dateformats: {
                    year: "yyyy",
                    month_short: "mmm",
                    month: "mmmm yyyy",
                    full_short: "mmm d",
                    full: "mmmm d',' yyyy",
                    time: "h:MM:ss TT' <small>'mmmm d',' yyyy'</small>'",
                    time_short: "h:MM:ss TT",
                    time_no_seconds_short: "h:MM TT",
                    time_no_minutes_short: "h TT",
                    time_no_seconds_small_date: "h:MM TT' <small>'mmmm d',' yyyy'</small>'",
                    time_milliseconds: "l",
                    full_long: "mmm d',' yyyy 'at' h:MM TT",
                    full_long_small_date: "h:MM TT' <small>mmm d',' yyyy'</small>'"
                },
                bigdateformats: {
                    fallback: [
                        [1e9, "%.2f billion years ago"],
                        [1e6, "%.1f million years ago"],
                        [1e3, "%.1f thousand years ago"],
                        [1, "%f years ago"]
                    ],
                    compact: [
                        [1e9, "%.2f bya"],
                        [1e6, "%.1f mya"],
                        [1e3, "%.1f kya"],
                        [1, "%f years ago"]
                    ],
                    verbose: [
                        [1e9, "%.2f billion years ago"],
                        [1e6, "%.1f million years ago"],
                        [1e3, "%.1f thousand years ago"],
                        [1, "%f years ago"]
                    ]
                }
            }
        };
        let Ot = new Nt;
        Nt.fallback = Ot;
        class Rt {
            setLanguage(t) {
                this.language = t
            }
            getLanguage() {
                if (this.language) {
                    if ("object" == typeof this.language) return this.language;
                    D("I18NMixins.getLanguage: this.language should be object, but is " + typeof this.language)
                }
                return Ot
            }
            _(t, e) {
                return this.getLanguage()._(t, e)
            }
        }
        class jt {
            constructor(t, e, i) {
                i && this.setLanguage(i), this._el = {
                    parent: {},
                    container: {},
                    message_container: {},
                    loading_icon: {},
                    message: {}
                }, this.options = {
                    width: 600,
                    height: 600,
                    message_class: "tl-message",
                    message_icon_class: "tl-loading-icon"
                }, this.container = t, E(this.options, e), this._el.container = v("div", this.options.message_class), t && (t.appendChild(this._el.container), this._el.parent = t), this.animator = {}, this._initLayout(), this._initEvents()
            }
            updateMessage(t) {
                this._el.message.innerHTML = t || this._("loading"), !this._el.parent.atributes && this.container.attributes && (this.container.appendChild(this._el.container), this._el.parent = this.container)
            }
            updateDisplay(t, e) {}
            _onMouseClick() {
                this.fire("clicked", this.options)
            }
            _onRemove() {
                this._el.parent = {}
            }
            _initLayout() {
                this._el.message_container = v("div", "tl-message-container", this._el.container), this._el.loading_icon = v("div", this.options.message_icon_class, this._el.message_container), this._el.message = v("div", "tl-message-content", this._el.message_container), this.updateMessage()
            }
            _initEvents() {
                ht.addListener(this._el.container, "click", this._onMouseClick, this), ht.addListener(this, "removed", this._onRemove, this)
            }
        }

        function zt(t, e) {
            e = e || "start_date", t.sort((function(t, i) {
                return t[e].isBefore(i[e]) ? -1 : t[e].isAfter(i[e]) ? 1 : 0
            }))
        }

        function Pt(t) {
            var e = {
                    hour: null,
                    minute: null,
                    second: null,
                    millisecond: null
                },
                i = null,
                a = t.match(/(\s*[AaPp]\.?[Mm]\.?\s*)$/);
            a && (i = O(a[0]), t = O(t.substring(0, t.lastIndexOf(i))));
            var s = [],
                n = t.match(/^\s*(\d{1,2})(\d{2})\s*$/);
            if (n ? s = n.slice(1) : 1 == (s = t.split(":")).length && (s = t.split(".")), s.length > 4) throw new x("invalid_separator_error");
            let o = s[0];
            if (e.hour = parseInt(o), i && "p" == i.toLowerCase()[0] && 12 != e.hour ? e.hour += 12 : i && "a" == i.toLowerCase()[0] && 12 == e.hour && (e.hour = 0), isNaN(e.hour) || e.hour < 0 || e.hour > 23) throw new x("invalid_hour_err", o);
            if (s.length > 1) {
                let t = s[1];
                if (e.minute = parseInt(t), isNaN(e.minute)) throw new x("invalid_minute_err", t)
            }
            if (s.length > 2) {
                var r = s[2].split(/[\.,]/);
                if ((s = r.concat(s.slice(3))).length > 2) throw new x("invalid_second_fractional_err");
                if (e.second = parseInt(s[0]), isNaN(e.second)) throw new x("invalid_second_err", s[0]);
                if (2 == s.length) {
                    var l = parseInt(s[1]);
                    if (isNaN(l)) throw new x("invalid_fractional_err", s[1]);
                    e.millisecond = 100 * l
                }
            }
            return e
        }
        R(jt, Rt, at, ot);
        const Ht = new RegExp("(^-?\\d+$|^$)");

        function Ft(t) {
            try {
                return Object.keys(t).forEach((e => {
                    let i = t[e];
                    if (i && i.match && !i.match(Ht)) throw `invalid value ${i} for ${e}`
                })), !0
            } catch (t) {
                return !1
            }
        }
        const qt = {
                human: yt,
                cosmological: St
            },
            {
                entries: $t,
                setPrototypeOf: Ut,
                isFrozen: Bt,
                getPrototypeOf: Wt,
                getOwnPropertyDescriptor: Gt
            } = Object;
        let {
            freeze: Yt,
            seal: Zt,
            create: Vt
        } = Object, {
            apply: Xt,
            construct: Jt
        } = "undefined" != typeof Reflect && Reflect;
        Yt || (Yt = function(t) {
            return t
        }), Zt || (Zt = function(t) {
            return t
        }), Xt || (Xt = function(t, e, i) {
            return t.apply(e, i)
        }), Jt || (Jt = function(t, e) {
            return new t(...e)
        });
        const Kt = me(Array.prototype.forEach),
            Qt = me(Array.prototype.lastIndexOf),
            te = me(Array.prototype.pop),
            ee = me(Array.prototype.push),
            ie = me(Array.prototype.splice),
            ae = me(String.prototype.toLowerCase),
            se = me(String.prototype.toString),
            ne = me(String.prototype.match),
            oe = me(String.prototype.replace),
            re = me(String.prototype.indexOf),
            le = me(String.prototype.trim),
            he = me(Object.prototype.hasOwnProperty),
            de = me(RegExp.prototype.test),
            ce = (ue = TypeError, function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return Jt(ue, e)
            });
        var ue;

        function me(t) {
            return function(e) {
                for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) a[s - 1] = arguments[s];
                return Xt(t, e, a)
            }
        }

        function _e(t, e) {
            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ae;
            Ut && Ut(t, null);
            let a = e.length;
            for (; a--;) {
                let s = e[a];
                if ("string" == typeof s) {
                    const t = i(s);
                    t !== s && (Bt(e) || (e[a] = t), s = t)
                }
                t[s] = !0
            }
            return t
        }

        function pe(t) {
            for (let e = 0; e < t.length; e++) he(t, e) || (t[e] = null);
            return t
        }

        function fe(t) {
            const e = Vt(null);
            for (const [i, a] of $t(t)) he(t, i) && (Array.isArray(a) ? e[i] = pe(a) : a && "object" == typeof a && a.constructor === Object ? e[i] = fe(a) : e[i] = a);
            return e
        }

        function ge(t, e) {
            for (; null !== t;) {
                const i = Gt(t, e);
                if (i) {
                    if (i.get) return me(i.get);
                    if ("function" == typeof i.value) return me(i.value)
                }
                t = Wt(t)
            }
            return function() {
                return null
            }
        }
        const ve = Yt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
            ye = Yt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
            be = Yt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
            we = Yt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
            ke = Yt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]),
            xe = Yt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
            Te = Yt(["#text"]),
            Me = Yt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]),
            Ee = Yt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
            Le = Yt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
            Se = Yt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
            De = Zt(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
            Ne = Zt(/<%[\w\W]*|[\w\W]*%>/gm),
            Ae = Zt(/\$\{[\w\W]*/gm),
            Ie = Zt(/^data-[\-\w.\u00B7-\uFFFF]+$/),
            Ce = Zt(/^aria-[\-\w]+$/),
            Oe = Zt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
            Re = Zt(/^(?:\w+script|data):/i),
            je = Zt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
            ze = Zt(/^html$/i),
            Pe = Zt(/^[a-z][.\w]*(-[.\w]+)+$/i);
        var He = Object.freeze({
            __proto__: null,
            ARIA_ATTR: Ce,
            ATTR_WHITESPACE: je,
            CUSTOM_ELEMENT: Pe,
            DATA_ATTR: Ie,
            DOCTYPE_NAME: ze,
            ERB_EXPR: Ne,
            IS_ALLOWED_URI: Oe,
            IS_SCRIPT_OR_DATA: Re,
            MUSTACHE_EXPR: De,
            TMPLIT_EXPR: Ae
        });
        const Fe = function() {
            return "undefined" == typeof window ? null : window
        };
        var qe = function t() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fe();
            const i = e => t(e);
            if (i.version = "3.2.4", i.removed = [], !e || !e.document || 9 !== e.document.nodeType || !e.Element) return i.isSupported = !1, i;
            let {
                document: a
            } = e;
            const s = a,
                n = s.currentScript,
                {
                    DocumentFragment: o,
                    HTMLTemplateElement: r,
                    Node: l,
                    Element: h,
                    NodeFilter: d,
                    NamedNodeMap: c = e.NamedNodeMap || e.MozNamedAttrMap,
                    HTMLFormElement: u,
                    DOMParser: m,
                    trustedTypes: _
                } = e,
                p = h.prototype,
                f = ge(p, "cloneNode"),
                g = ge(p, "remove"),
                v = ge(p, "nextSibling"),
                y = ge(p, "childNodes"),
                b = ge(p, "parentNode");
            if ("function" == typeof r) {
                const t = a.createElement("template");
                t.content && t.content.ownerDocument && (a = t.content.ownerDocument)
            }
            let w, k = "";
            const {
                implementation: x,
                createNodeIterator: T,
                createDocumentFragment: M,
                getElementsByTagName: E
            } = a, {
                importNode: L
            } = s;
            let S = {
                afterSanitizeAttributes: [],
                afterSanitizeElements: [],
                afterSanitizeShadowDOM: [],
                beforeSanitizeAttributes: [],
                beforeSanitizeElements: [],
                beforeSanitizeShadowDOM: [],
                uponSanitizeAttribute: [],
                uponSanitizeElement: [],
                uponSanitizeShadowNode: []
            };
            i.isSupported = "function" == typeof $t && "function" == typeof b && x && void 0 !== x.createHTMLDocument;
            const {
                MUSTACHE_EXPR: D,
                ERB_EXPR: N,
                TMPLIT_EXPR: A,
                DATA_ATTR: I,
                ARIA_ATTR: C,
                IS_SCRIPT_OR_DATA: O,
                ATTR_WHITESPACE: R,
                CUSTOM_ELEMENT: j
            } = He;
            let {
                IS_ALLOWED_URI: z
            } = He, P = null;
            const H = _e({}, [...ve, ...ye, ...be, ...ke, ...Te]);
            let F = null;
            const q = _e({}, [...Me, ...Ee, ...Le, ...Se]);
            let $ = Object.seal(Vt(null, {
                    tagNameCheck: {
                        writable: !0,
                        configurable: !1,
                        enumerable: !0,
                        value: null
                    },
                    attributeNameCheck: {
                        writable: !0,
                        configurable: !1,
                        enumerable: !0,
                        value: null
                    },
                    allowCustomizedBuiltInElements: {
                        writable: !0,
                        configurable: !1,
                        enumerable: !0,
                        value: !1
                    }
                })),
                U = null,
                B = null,
                W = !0,
                G = !0,
                Y = !1,
                Z = !0,
                V = !1,
                X = !0,
                J = !1,
                K = !1,
                Q = !1,
                tt = !1,
                et = !1,
                it = !1,
                at = !0,
                st = !1,
                nt = !0,
                ot = !1,
                rt = {},
                lt = null;
            const ht = _e({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
            let dt = null;
            const ct = _e({}, ["audio", "video", "img", "source", "image", "track"]);
            let ut = null;
            const mt = _e({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
                _t = "http://www.w3.org/1998/Math/MathML",
                pt = "http://www.w3.org/2000/svg",
                ft = "http://www.w3.org/1999/xhtml";
            let gt = ft,
                vt = !1,
                yt = null;
            const bt = _e({}, [_t, pt, ft], se);
            let wt = _e({}, ["mi", "mo", "mn", "ms", "mtext"]),
                kt = _e({}, ["annotation-xml"]);
            const xt = _e({}, ["title", "style", "font", "a", "script"]);
            let Tt = null;
            const Mt = ["application/xhtml+xml", "text/html"];
            let Et = null,
                Lt = null;
            const St = a.createElement("form"),
                Dt = function(t) {
                    return t instanceof RegExp || t instanceof Function
                },
                Nt = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (!Lt || Lt !== t) {
                        if (t && "object" == typeof t || (t = {}), t = fe(t), Tt = -1 === Mt.indexOf(t.PARSER_MEDIA_TYPE) ? "text/html" : t.PARSER_MEDIA_TYPE, Et = "application/xhtml+xml" === Tt ? se : ae, P = he(t, "ALLOWED_TAGS") ? _e({}, t.ALLOWED_TAGS, Et) : H, F = he(t, "ALLOWED_ATTR") ? _e({}, t.ALLOWED_ATTR, Et) : q, yt = he(t, "ALLOWED_NAMESPACES") ? _e({}, t.ALLOWED_NAMESPACES, se) : bt, ut = he(t, "ADD_URI_SAFE_ATTR") ? _e(fe(mt), t.ADD_URI_SAFE_ATTR, Et) : mt, dt = he(t, "ADD_DATA_URI_TAGS") ? _e(fe(ct), t.ADD_DATA_URI_TAGS, Et) : ct, lt = he(t, "FORBID_CONTENTS") ? _e({}, t.FORBID_CONTENTS, Et) : ht, U = he(t, "FORBID_TAGS") ? _e({}, t.FORBID_TAGS, Et) : {}, B = he(t, "FORBID_ATTR") ? _e({}, t.FORBID_ATTR, Et) : {}, rt = !!he(t, "USE_PROFILES") && t.USE_PROFILES, W = !1 !== t.ALLOW_ARIA_ATTR, G = !1 !== t.ALLOW_DATA_ATTR, Y = t.ALLOW_UNKNOWN_PROTOCOLS || !1, Z = !1 !== t.ALLOW_SELF_CLOSE_IN_ATTR, V = t.SAFE_FOR_TEMPLATES || !1, X = !1 !== t.SAFE_FOR_XML, J = t.WHOLE_DOCUMENT || !1, tt = t.RETURN_DOM || !1, et = t.RETURN_DOM_FRAGMENT || !1, it = t.RETURN_TRUSTED_TYPE || !1, Q = t.FORCE_BODY || !1, at = !1 !== t.SANITIZE_DOM, st = t.SANITIZE_NAMED_PROPS || !1, nt = !1 !== t.KEEP_CONTENT, ot = t.IN_PLACE || !1, z = t.ALLOWED_URI_REGEXP || Oe, gt = t.NAMESPACE || ft, wt = t.MATHML_TEXT_INTEGRATION_POINTS || wt, kt = t.HTML_INTEGRATION_POINTS || kt, $ = t.CUSTOM_ELEMENT_HANDLING || {}, t.CUSTOM_ELEMENT_HANDLING && Dt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && ($.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck), t.CUSTOM_ELEMENT_HANDLING && Dt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && ($.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), t.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && ($.allowCustomizedBuiltInElements = t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), V && (G = !1), et && (tt = !0), rt && (P = _e({}, Te), F = [], !0 === rt.html && (_e(P, ve), _e(F, Me)), !0 === rt.svg && (_e(P, ye), _e(F, Ee), _e(F, Se)), !0 === rt.svgFilters && (_e(P, be), _e(F, Ee), _e(F, Se)), !0 === rt.mathMl && (_e(P, ke), _e(F, Le), _e(F, Se))), t.ADD_TAGS && (P === H && (P = fe(P)), _e(P, t.ADD_TAGS, Et)), t.ADD_ATTR && (F === q && (F = fe(F)), _e(F, t.ADD_ATTR, Et)), t.ADD_URI_SAFE_ATTR && _e(ut, t.ADD_URI_SAFE_ATTR, Et), t.FORBID_CONTENTS && (lt === ht && (lt = fe(lt)), _e(lt, t.FORBID_CONTENTS, Et)), nt && (P["#text"] = !0), J && _e(P, ["html", "head", "body"]), P.table && (_e(P, ["tbody"]), delete U.tbody), t.TRUSTED_TYPES_POLICY) {
                            if ("function" != typeof t.TRUSTED_TYPES_POLICY.createHTML) throw ce('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                            if ("function" != typeof t.TRUSTED_TYPES_POLICY.createScriptURL) throw ce('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                            w = t.TRUSTED_TYPES_POLICY, k = w.createHTML("")
                        } else void 0 === w && (w = function(t, e) {
                            if ("object" != typeof t || "function" != typeof t.createPolicy) return null;
                            let i = null;
                            const a = "data-tt-policy-suffix";
                            e && e.hasAttribute(a) && (i = e.getAttribute(a));
                            const s = "dompurify" + (i ? "#" + i : "");
                            try {
                                return t.createPolicy(s, {
                                    createHTML: t => t,
                                    createScriptURL: t => t
                                })
                            } catch (t) {
                                return console.warn("TrustedTypes policy " + s + " could not be created."), null
                            }
                        }(_, n)), null !== w && "string" == typeof k && (k = w.createHTML(""));
                        Yt && Yt(t), Lt = t
                    }
                },
                At = _e({}, [...ye, ...be, ...we]),
                It = _e({}, [...ke, ...xe]),
                Ct = function(t) {
                    ee(i.removed, {
                        element: t
                    });
                    try {
                        b(t).removeChild(t)
                    } catch (e) {
                        g(t)
                    }
                },
                Ot = function(t, e) {
                    try {
                        ee(i.removed, {
                            attribute: e.getAttributeNode(t),
                            from: e
                        })
                    } catch (t) {
                        ee(i.removed, {
                            attribute: null,
                            from: e
                        })
                    }
                    if (e.removeAttribute(t), "is" === t)
                        if (tt || et) try {
                            Ct(e)
                        } catch (t) {} else try {
                            e.setAttribute(t, "")
                        } catch (t) {}
                },
                Rt = function(t) {
                    let e = null,
                        i = null;
                    if (Q) t = "<remove></remove>" + t;
                    else {
                        const e = ne(t, /^[\r\n\t ]+/);
                        i = e && e[0]
                    }
                    "application/xhtml+xml" === Tt && gt === ft && (t = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + t + "</body></html>");
                    const s = w ? w.createHTML(t) : t;
                    if (gt === ft) try {
                        e = (new m).parseFromString(s, Tt)
                    } catch (t) {}
                    if (!e || !e.documentElement) {
                        e = x.createDocument(gt, "template", null);
                        try {
                            e.documentElement.innerHTML = vt ? k : s
                        } catch (t) {}
                    }
                    const n = e.body || e.documentElement;
                    return t && i && n.insertBefore(a.createTextNode(i), n.childNodes[0] || null), gt === ft ? E.call(e, J ? "html" : "body")[0] : J ? e.documentElement : n
                },
                jt = function(t) {
                    return T.call(t.ownerDocument || t, t, d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION, null)
                },
                zt = function(t) {
                    return t instanceof u && ("string" != typeof t.nodeName || "string" != typeof t.textContent || "function" != typeof t.removeChild || !(t.attributes instanceof c) || "function" != typeof t.removeAttribute || "function" != typeof t.setAttribute || "string" != typeof t.namespaceURI || "function" != typeof t.insertBefore || "function" != typeof t.hasChildNodes)
                },
                Pt = function(t) {
                    return "function" == typeof l && t instanceof l
                };

            function Ht(t, e, a) {
                Kt(t, (t => {
                    t.call(i, e, a, Lt)
                }))
            }
            const Ft = function(t) {
                    let e = null;
                    if (Ht(S.beforeSanitizeElements, t, null), zt(t)) return Ct(t), !0;
                    const a = Et(t.nodeName);
                    if (Ht(S.uponSanitizeElement, t, {
                            tagName: a,
                            allowedTags: P
                        }), t.hasChildNodes() && !Pt(t.firstElementChild) && de(/<[/\w]/g, t.innerHTML) && de(/<[/\w]/g, t.textContent)) return Ct(t), !0;
                    if (7 === t.nodeType) return Ct(t), !0;
                    if (X && 8 === t.nodeType && de(/<[/\w]/g, t.data)) return Ct(t), !0;
                    if (!P[a] || U[a]) {
                        if (!U[a] && Ut(a)) {
                            if ($.tagNameCheck instanceof RegExp && de($.tagNameCheck, a)) return !1;
                            if ($.tagNameCheck instanceof Function && $.tagNameCheck(a)) return !1
                        }
                        if (nt && !lt[a]) {
                            const e = b(t) || t.parentNode,
                                i = y(t) || t.childNodes;
                            if (i && e)
                                for (let a = i.length - 1; a >= 0; --a) {
                                    const s = f(i[a], !0);
                                    s.__removalCount = (t.__removalCount || 0) + 1, e.insertBefore(s, v(t))
                                }
                        }
                        return Ct(t), !0
                    }
                    return t instanceof h && ! function(t) {
                        let e = b(t);
                        e && e.tagName || (e = {
                            namespaceURI: gt,
                            tagName: "template"
                        });
                        const i = ae(t.tagName),
                            a = ae(e.tagName);
                        return !!yt[t.namespaceURI] && (t.namespaceURI === pt ? e.namespaceURI === ft ? "svg" === i : e.namespaceURI === _t ? "svg" === i && ("annotation-xml" === a || wt[a]) : Boolean(At[i]) : t.namespaceURI === _t ? e.namespaceURI === ft ? "math" === i : e.namespaceURI === pt ? "math" === i && kt[a] : Boolean(It[i]) : t.namespaceURI === ft ? !(e.namespaceURI === pt && !kt[a]) && !(e.namespaceURI === _t && !wt[a]) && !It[i] && (xt[i] || !At[i]) : !("application/xhtml+xml" !== Tt || !yt[t.namespaceURI]))
                    }(t) ? (Ct(t), !0) : "noscript" !== a && "noembed" !== a && "noframes" !== a || !de(/<\/no(script|embed|frames)/i, t.innerHTML) ? (V && 3 === t.nodeType && (e = t.textContent, Kt([D, N, A], (t => {
                        e = oe(e, t, " ")
                    })), t.textContent !== e && (ee(i.removed, {
                        element: t.cloneNode()
                    }), t.textContent = e)), Ht(S.afterSanitizeElements, t, null), !1) : (Ct(t), !0)
                },
                qt = function(t, e, i) {
                    if (at && ("id" === e || "name" === e) && (i in a || i in St)) return !1;
                    if (G && !B[e] && de(I, e));
                    else if (W && de(C, e));
                    else if (!F[e] || B[e]) {
                        if (!(Ut(t) && ($.tagNameCheck instanceof RegExp && de($.tagNameCheck, t) || $.tagNameCheck instanceof Function && $.tagNameCheck(t)) && ($.attributeNameCheck instanceof RegExp && de($.attributeNameCheck, e) || $.attributeNameCheck instanceof Function && $.attributeNameCheck(e)) || "is" === e && $.allowCustomizedBuiltInElements && ($.tagNameCheck instanceof RegExp && de($.tagNameCheck, i) || $.tagNameCheck instanceof Function && $.tagNameCheck(i)))) return !1
                    } else if (ut[e]);
                    else if (de(z, oe(i, R, "")));
                    else if ("src" !== e && "xlink:href" !== e && "href" !== e || "script" === t || 0 !== re(i, "data:") || !dt[t])
                        if (Y && !de(O, oe(i, R, "")));
                        else if (i) return !1;
                    return !0
                },
                Ut = function(t) {
                    return "annotation-xml" !== t && ne(t, j)
                },
                Bt = function(t) {
                    Ht(S.beforeSanitizeAttributes, t, null);
                    const {
                        attributes: e
                    } = t;
                    if (!e || zt(t)) return;
                    const a = {
                        attrName: "",
                        attrValue: "",
                        keepAttr: !0,
                        allowedAttributes: F,
                        forceKeepAttr: void 0
                    };
                    let s = e.length;
                    for (; s--;) {
                        const n = e[s],
                            {
                                name: o,
                                namespaceURI: r,
                                value: l
                            } = n,
                            h = Et(o);
                        let d = "value" === o ? l : le(l);
                        if (a.attrName = h, a.attrValue = d, a.keepAttr = !0, a.forceKeepAttr = void 0, Ht(S.uponSanitizeAttribute, t, a), d = a.attrValue, !st || "id" !== h && "name" !== h || (Ot(o, t), d = "user-content-" + d), X && de(/((--!?|])>)|<\/(style|title)/i, d)) {
                            Ot(o, t);
                            continue
                        }
                        if (a.forceKeepAttr) continue;
                        if (Ot(o, t), !a.keepAttr) continue;
                        if (!Z && de(/\/>/i, d)) {
                            Ot(o, t);
                            continue
                        }
                        V && Kt([D, N, A], (t => {
                            d = oe(d, t, " ")
                        }));
                        const c = Et(t.nodeName);
                        if (qt(c, h, d)) {
                            if (w && "object" == typeof _ && "function" == typeof _.getAttributeType)
                                if (r);
                                else switch (_.getAttributeType(c, h)) {
                                    case "TrustedHTML":
                                        d = w.createHTML(d);
                                        break;
                                    case "TrustedScriptURL":
                                        d = w.createScriptURL(d)
                                }
                            try {
                                r ? t.setAttributeNS(r, o, d) : t.setAttribute(o, d), zt(t) ? Ct(t) : te(i.removed)
                            } catch (t) {}
                        }
                    }
                    Ht(S.afterSanitizeAttributes, t, null)
                },
                Wt = function t(e) {
                    let i = null;
                    const a = jt(e);
                    for (Ht(S.beforeSanitizeShadowDOM, e, null); i = a.nextNode();) Ht(S.uponSanitizeShadowNode, i, null), Ft(i), Bt(i), i.content instanceof o && t(i.content);
                    Ht(S.afterSanitizeShadowDOM, e, null)
                };
            return i.sanitize = function(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = null,
                    n = null,
                    r = null,
                    h = null;
                if (vt = !t, vt && (t = "\x3c!--\x3e"), "string" != typeof t && !Pt(t)) {
                    if ("function" != typeof t.toString) throw ce("toString is not a function");
                    if ("string" != typeof(t = t.toString())) throw ce("dirty is not a string, aborting")
                }
                if (!i.isSupported) return t;
                if (K || Nt(e), i.removed = [], "string" == typeof t && (ot = !1), ot) {
                    if (t.nodeName) {
                        const e = Et(t.nodeName);
                        if (!P[e] || U[e]) throw ce("root node is forbidden and cannot be sanitized in-place")
                    }
                } else if (t instanceof l) a = Rt("\x3c!----\x3e"), n = a.ownerDocument.importNode(t, !0), 1 === n.nodeType && "BODY" === n.nodeName || "HTML" === n.nodeName ? a = n : a.appendChild(n);
                else {
                    if (!tt && !V && !J && -1 === t.indexOf("<")) return w && it ? w.createHTML(t) : t;
                    if (a = Rt(t), !a) return tt ? null : it ? k : ""
                }
                a && Q && Ct(a.firstChild);
                const d = jt(ot ? t : a);
                for (; r = d.nextNode();) Ft(r), Bt(r), r.content instanceof o && Wt(r.content);
                if (ot) return t;
                if (tt) {
                    if (et)
                        for (h = M.call(a.ownerDocument); a.firstChild;) h.appendChild(a.firstChild);
                    else h = a;
                    return (F.shadowroot || F.shadowrootmode) && (h = L.call(s, h, !0)), h
                }
                let c = J ? a.outerHTML : a.innerHTML;
                return J && P["!doctype"] && a.ownerDocument && a.ownerDocument.doctype && a.ownerDocument.doctype.name && de(ze, a.ownerDocument.doctype.name) && (c = "<!DOCTYPE " + a.ownerDocument.doctype.name + ">\n" + c), V && Kt([D, N, A], (t => {
                    c = oe(c, t, " ")
                })), w && it ? w.createHTML(c) : c
            }, i.setConfig = function() {
                Nt(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}), K = !0
            }, i.clearConfig = function() {
                Lt = null, K = !1
            }, i.isValidAttribute = function(t, e, i) {
                Lt || Nt({});
                const a = Et(t),
                    s = Et(e);
                return qt(a, s, i)
            }, i.addHook = function(t, e) {
                "function" == typeof e && ee(S[t], e)
            }, i.removeHook = function(t, e) {
                if (void 0 !== e) {
                    const i = Qt(S[t], e);
                    return -1 === i ? void 0 : ie(S[t], i, 1)[0]
                }
                return te(S[t])
            }, i.removeHooks = function(t) {
                S[t] = []
            }, i.removeAllHooks = function() {
                S = {
                    afterSanitizeAttributes: [],
                    afterSanitizeElements: [],
                    afterSanitizeShadowDOM: [],
                    beforeSanitizeAttributes: [],
                    beforeSanitizeElements: [],
                    beforeSanitizeShadowDOM: [],
                    uponSanitizeAttribute: [],
                    uponSanitizeElement: [],
                    uponSanitizeShadowNode: []
                }
            }, i
        }();
        const $e = {
                text: ["headline", "text"],
                media: ["caption", "credit"]
            },
            Ue = {
                start_date: ["display_date"],
                end_date: ["display_date"],
                slide: ["display_date", "group"],
                date: ["display_date"]
            };

        function Be(t, e, i) {
            Object.keys(i).forEach((a => {
                var s = "slide" == a ? t : t[a];
                s && i[a].forEach((t => {
                    void 0 !== s[t] && (s[t] = e(s[t]))
                }))
            }))
        }

        function We(t) {
            return qe.sanitize(t, {
                ADD_TAGS: ["iframe"],
                ADD_ATTR: ["frameborder", "target"]
            })
        }
        qe.addHook("afterSanitizeAttributes", (function(t) {
            if ("A" == t.nodeName && "href" in t) {
                "target" in t.attributes || t.setAttribute("target", "_blank");
                let e = t.attributes.rel;
                e ? -1 == e.value.indexOf("noopener") && t.setAttribute("rel", `noopener ${e.value}`) : t.setAttribute("rel", "noopener")
            }
        }));
        class Ge {
            constructor(t) {
                if (this.title = "", this.scale = "", this.events = [], this.eras = [], this.event_dict = {}, this.messages = {
                        errors: [],
                        warnings: []
                    }, "object" == typeof t && t.events) {
                    if (this.scale = t.scale, this.events = [], this._ensureValidScale(t.events), t.title) {
                        var e = this._assignID(t.title);
                        this._tidyFields(t.title), this.title = t.title, this.event_dict[e] = this.title
                    }
                    for (var i = 0; i < t.events.length; i++) try {
                        this.addEvent(t.events[i], !0)
                    } catch (t) {
                        this.logError(t)
                    }
                    t.eras && t.eras.forEach(((t, e) => {
                        try {
                            this.addEra(t)
                        } catch (t) {
                            this.logError("Era " + e + ": " + t)
                        }
                    })), zt(this.events), zt(this.eras)
                }
            }
            logError(t) {
                D(`logError: ${t}`), this.messages.errors.push(t)
            }
            getErrors(t) {
                return t ? this.messages.errors.join(t) : this.messages.errors
            }
            validate() {
                void 0 !== this.events && void 0 !== this.events.length && 0 != this.events.length || this.logError("Timeline configuration has no events. Common causes for this: changing/erasing 'Year' from the A1 cell, or having 'era' in all non-title 'type' cells.");
                for (var t = 0; t < this.eras.length; t++) {
                    var e;
                    void 0 !== this.eras[t].start_date && void 0 !== this.eras[t].end_date || (e = this.eras[t].headline ? this.eras[t].headline : "era " + (t + 1), this.logError("All eras must have start and end dates. [" + e + "]"))
                }
            }
            isValid() {
                return 0 == this.messages.errors.length
            }
            addEvent(t, e) {
                var i = this._assignID(t);
                return void 0 === t.start_date ? (D("Missing start date, skipping event"), console.log(t), null) : (this._processDates(t), this._tidyFields(t), this.events.push(t), this.event_dict[i] = t, e || zt(this.events), i)
            }
            addEra(t) {
                var e = this._assignID(t);
                if (void 0 === t.start_date) throw new x("missing_start_date_err", e);
                this._processDates(t), this._tidyFields(t), this.eras.push({
                    start_date: t.start_date,
                    end_date: t.end_date,
                    headline: t.text.headline
                })
            }
            _assignID(t) {
                var e = t.unique_id;
                return O(e) || (e = t.text ? j(t.text.headline) : null), t.unique_id = function(t, e) {
                    if (e || (e = z(6)), !(e in t)) return e;
                    var i = e.match(/^(.+)(-\d+)?$/)[1],
                        a = [];
                    for (let e in t) e.match(/^(.+?)(-\d+)?$/)[1] == i && a.push(e);
                    e = i + "-" + (a.length + 1);
                    for (var s = a.length; - 1 != a.indexOf(e); s++) e = i + "-" + s;
                    return e
                }(this.event_dict, e), t.unique_id
            }
            _makeUniqueIdentifiers(t, e) {
                for (var i = [t], a = 0; a < e.length; a++) O(e[a].unique_id) && (e[a].unique_id = j(e[a].unique_id), -1 == i.indexOf(e[a].unique_id) ? i.push(e[a].unique_id) : e[a].unique_id = "");
                if (i.length != e.length + 1)
                    for (a = 0; a < e.length; a++)
                        if (!e[a].unique_id) {
                            var s = e[a].text ? j(e[a].text.headline) : null;
                            s || (s = z(6)), -1 != i.indexOf(s) && (s = s + "-" + a), i.push(s), e[a].unique_id = s
                        }
            }
            _ensureValidScale(t) {
                if (!this.scale) {
                    this.scale = "human";
                    for (var e = 0; e < t.length; e++) {
                        if ("cosmological" == t[e].scale) {
                            this.scale = "cosmological";
                            break
                        }
                        if (t[e].start_date && void 0 !== t[e].start_date.year) {
                            var i = new St(t[e].start_date).data.date_obj.year;
                            if (i < -271820 || i > 275759) {
                                this.scale = "cosmological";
                                break
                            }
                        }
                    }
                    D(`Determining scale dynamically: ${this.scale}`)
                }
                qt[this.scale] || this.logError("Don't know how to process dates on scale " + this.scale)
            }
            _processDates(t) {
                var e = qt[this.scale];
                if (!(t.start_date instanceof e)) {
                    var i = t.start_date;
                    if (t.start_date = new e(i), void 0 !== t.end_date && !(t.end_date instanceof e)) {
                        var a = t.end_date,
                            s = !0;
                        for (let t in i) s = s && i[t] == a[t];
                        s ? (D("End date same as start date is redundant; dropping end date"), delete t.end_date) : t.end_date = new e(a)
                    }
                }
            }
            getEarliestDate() {
                var t = this.events[0].start_date;
                return this.eras && this.eras.length > 0 && this.eras[0].start_date.isBefore(t) ? this.eras[0].start_date : t
            }
            getLatestDate() {
                for (var t = [], e = 0; e < this.events.length; e++) this.events[e].end_date ? t.push({
                    date: this.events[e].end_date
                }) : t.push({
                    date: this.events[e].start_date
                });
                for (e = 0; e < this.eras.length; e++) this.eras[e].end_date ? t.push({
                    date: this.eras[e].end_date
                }) : t.push({
                    date: this.eras[e].start_date
                });
                return zt(t, "date"), t.slice(-1)[0].date
            }
            _tidyFields(t) {
                function e(t, e, i) {
                    i || (i = ""), t.hasOwnProperty(e) || (t[e] = i)
                }
                t.group && (t.group = O(t.group)), t.text || (t.text = {}), e(t.text, "text"), e(t.text, "headline"), Be(t, We, $e), Be(t, X, Ue)
            }
        }

        function Ye(t, e) {
            return !0 !== (e = e || {}).noHeaderRow && t.length > 0 ? {
                fields: t[0].map(((t, e) => t && t.trim ? t.trim() : `untitled${e}`)),
                records: t.slice(1)
            } : {
                records: t
            }
        }

        function Ze(t, e) {
            (!e || e && !e.lineterminator) && (t = function(t, e) {
                return e && !e.lineterminator ? t.replace(/(\r\n|\n|\r)/gm, "\n") : t
            }(t, e));
            var i = function(t) {
                var e = {
                    delimiter: ",",
                    doublequote: !0,
                    lineterminator: "\n",
                    quotechar: '"',
                    skipinitialspace: !0,
                    skipinitialrows: 0
                };
                for (var i in t) "trim" === i ? e.skipinitialspace = t.trim : e[i.toLowerCase()] = t[i];
                return e
            }(e);
            t = function(t, e) {
                return null == t ? "" : (e = e || "\n", t.charAt(t.length - e.length) !== e ? t : t.substring(0, t.length - e.length))
            }(t, i.lineterminator);
            var a, s, n = "",
                o = !1,
                r = !1,
                l = "",
                h = [],
                d = [];
            for (s = function(t) {
                    return !0 !== r && ("" === t ? t = null : !0 === i.skipinitialspace && (t = t.trim())), t
                }, a = 0; a < t.length; a += 1) n = t.charAt(a), !1 !== o || n !== i.delimiter && n !== i.lineterminator ? n !== i.quotechar ? l += n : o ? t.charAt(a + 1) === i.quotechar ? (l += i.quotechar, a += 1) : o = !1 : (o = !0, r = !0) : (l = s(l), h.push(l), n === i.lineterminator && (d.push(h), h = []), l = "", r = !1);
            return l = s(l), h.push(l), d.push(h), i.skipinitialrows && (d = d.slice(i.skipinitialrows)), d
        }

        function Ve(t) {
            if (t) return t.replace(/[\s,]+/g, "")
        }

        function Xe(t) {
            let e = {
                key: null,
                worksheet: 0
            };
            var i = /\bkey=([-_A-Za-z0-9]+)&?/i,
                a = /docs.google.com\/spreadsheets.*?\/d\/e\/([^\/]+)\/.+/,
                s = /docs.google.com\/spreadsheets(.*?)\/d\//;
            if (t.match(i)) e.key = t.match(i)[1];
            else if (t.match(a)) {
                let i = t.match(a)[1];
                e.key = `v2:${i}`
            } else if (t.match(s)) {
                var n = t.search(s) + t.match(s)[0].length,
                    o = t.substr(n);
                e.key = o.split("/")[0], t.match(/\?gid=(\d+)/) && (e.worksheet = t.match(/\?gid=(\d+)/)[1])
            } else t.match(/^\b(v2:)?[-_A-Za-z0-9]+$/) && (e.key = t);
            return e.key ? e : null
        }
        async function Je(t, e) {
            let i = [];
            t = function(t) {
                if ((t = t.trim()).match(/^v2:[a-zA-Z0-9-_]+$/)) {
                    console.log(`it's a newbie: ${t}`);
                    try {
                        let e = t.substring(3);
                        console.log(`key is ${e}`);
                        let i = `https://docs.google.com/spreadsheets/d/e/${e}/pub?output=csv`;
                        return console.log(`url is ${i}`), i
                    } catch (e) {
                        throw new x("invalid_url_err", t)
                    }
                } else if (t.match(/^[a-zA-Z0-9-_]+$/)) return `https://docs.google.com/spreadsheets/d/${t}/pub?output=csv`;
                if (t.startsWith("https://docs.google.com/spreadsheets/")) {
                    if (t.match(/\/pub\?output=csv$/)) return t;
                    let e = new URL(t),
                        i = new URLSearchParams(e.search);
                    i.set("output", "csv"), i.get("gid") && i.set("single", "true"), e.search = `?${i.toString()}`;
                    let a = e.pathname.substr(0, e.pathname.lastIndexOf("/"));
                    return e.pathname = `${a}/pub`, e.toString()
                }
                throw new x("invalid_url_err", t)
            }(t), await async function(t) {
                return new Promise(((e, i) => {
                    if (t.data) {
                        var a = Ye(Ze(t.data, t), t);
                        a.useMemoryStore = !0, e(a)
                    } else t.url && window.fetch(t.url, {
                        mode: "cors"
                    }).then((function(t) {
                        if (200 == t.status) return t.text ? t.text() : t;
                        "application/json" == t.headers.get("content-type") ? t.text().then((t => {
                            i(JSON.parse(t))
                        })) : i({
                            status_code: t.status,
                            message: `Error fetching CSV: [${t.status} ${t.statusText}]`
                        })
                    })).then((function(i) {
                        if (i) {
                            var a = function(t, e) {
                                let i = Ye(Ze(t, e)),
                                    a = [];
                                return i.records.forEach((t => {
                                    let e = {};
                                    i.fields.forEach(((i, a) => e[i] = t[a])), a.push(e)
                                })), a
                            }(i, t);
                            a.useMemoryStore = !0, e(a)
                        }
                    })).catch((t => {
                        i({
                            status_code: 500,
                            message: `Error fetching CSV: ${t}`
                        })
                    }))
                }))
            }({
                url: `${e}${t}`
            }).then((t => {
                i = t
            })).catch((t => {
                if ("response_not_csv" == t.proxy_err_code) throw new x("Timeline could not read the data for your timeline. Make sure you have published it to the web.");
                if (401 == t.status_code) throw new x("Configuration unreadable. Please make sure your Google Sheets document is published to the web and review step 2 of the timeline setup instructions to make sure you have the correct URL, as this has changed.");
                if (410 == t.status_code) throw new x("Google reports that this configuration spreadsheet is gone. Check to see if it has been deleted from Google Drive. Timeline configuration spreadsheets must not be deleted.");
                let e = "undefined error";
                throw e = Array.isArray(t.message) ? t.message.join("<br>") : String(t.message), new x(e)
            }));
            let a = {
                events: [],
                errors: [],
                warnings: [],
                eras: []
            };
            return i.forEach(((t, e) => {
                try {
                    if (! function(t) {
                            var e = [];
                            if (Object.keys) e = Object.keys(t);
                            else
                                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.push(i);
                            for (var a = 0; a < e.length; a++) {
                                var s = e[a];
                                if (null != t[s] && "string" != typeof t[s]) return !1;
                                if (0 != O(t[s]).length) return !1
                            }
                            return !0
                        }(t)) {
                        let e = function(t) {
                            let e = {};
                            Object.keys(t).forEach((i => {
                                e[i] = O(t[i])
                            }));
                            var i, a = {
                                media: {
                                    caption: e["Media Caption"] || "",
                                    credit: e["Media Credit"] || "",
                                    url: e.Media || "",
                                    thumbnail: e["Media Thumbnail"] || "",
                                    alt: e["Alt Text"] || ""
                                },
                                text: {
                                    headline: e.Headline || "",
                                    text: e.Text || ""
                                },
                                display_date: e["Display Date"] || "",
                                group: e.Group || e.Tag || "",
                                background: (i = e.Background, "string" != typeof i ? "" : i.match(/^(https?:)?\/\/?/) ? {
                                    url: i
                                } : {
                                    color: i
                                }),
                                type: e.Type || ""
                            };
                            if (Object.keys(e).includes("Start Date") || Object.keys(e).includes("End Date")) e["Start Date"] && (a.start_date = bt(e["Start Date"])), e["End Date"] && (a.end_date = bt(e["End Date"]));
                            else {
                                if (e.Year && (a.start_date = {
                                        year: Ve(e.Year),
                                        month: Ve(e.Month) || "",
                                        day: Ve(e.Day) || ""
                                    }), e["End Year"] && (a.end_date = {
                                        year: Ve(e["End Year"]) || "",
                                        month: Ve(e["End Month"]) || "",
                                        day: Ve(e["End Day"]) || ""
                                    }), e.Time) {
                                    if (!a.start_date) throw new x("invalid_start_time_without_date");
                                    E(a.start_date, Pt(e.Time))
                                }
                                if (e["End Time"]) {
                                    if (!a.end_date) throw new x("invalid_end_time_without_date");
                                    E(a.end_date, Pt(e["End Time"]))
                                }
                                if (a.start_date && !Ft(a.start_date)) throw new x("invalid_date_err");
                                if (a.end_date && !Ft(a.end_date)) throw new x("invalid_date_err")
                            }
                            return a
                        }(t);
                        ! function(t, e) {
                            var i = "event";
                            void 0 !== t.type && (i = t.type, delete t.type), "title" == i ? e.title ? (e.warnings.push("Multiple title slides detected."), e.events.push(t)) : e.title = t : "era" == i ? e.eras.push(t) : e.events.push(t)
                        }(e, a)
                    }
                } catch (i) {
                    if (i.constructor == x) a.errors.push(i);
                    else {
                        i.message && (i = i.message);
                        let s = t.Headline || e;
                        a.errors.push(i + `[${s}]`)
                    }
                }
            })), a
        }
        async function Ke(t, e) {
            if (!e.sheets_proxy) throw new x("Proxy option must be set to read data from Google");
            var i = await Je(t, e.sheets_proxy);
            if (i) return i
        }
        class Qe {
            constructor(t) {
                if (!t) throw new x("axis_helper_no_options_err");
                this.scale = t.scale, this.minor = t.minor, this.major = t.major
            }
            getPixelsPerTick(t) {
                return t * this.minor.factor
            }
            getMajorTicks(t) {
                return this._getTicks(t, this.major)
            }
            getMinorTicks(t) {
                return this._getTicks(t, this.minor)
            }
            _getTicks(t, e) {
                for (var i = t._scaled_padding * e.factor, a = t._earliest - i, s = t._latest + i, n = [], o = a; o < s; o += e.factor) n.push(t.getDateFromTime(o).floor(e.name));
                return {
                    name: e.name,
                    ticks: n
                }
            }
        }
        var ti = {},
            ei = function(t, e) {
                ti[t] = [];
                for (var i = 0; i < e.length - 1; i++) {
                    var a = e[i],
                        s = e[i + 1];
                    ti[t].push(new Qe({
                        scale: a[3],
                        minor: {
                            name: a[0],
                            factor: a[1]
                        },
                        major: {
                            name: s[0],
                            factor: s[1]
                        }
                    }))
                }
            };
        ei("human", _t), ei("cosmological", Lt);
        const ii = {
            millisecond: "time_milliseconds",
            second: "time_short",
            minute: "time_no_seconds_short",
            hour: "time_no_minutes_short",
            day: "full_short",
            month: "month_short",
            year: "year",
            decade: "year",
            century: "year",
            millennium: "year",
            age: "compact",
            epoch: "compact",
            era: "compact",
            eon: "compact",
            eon2: "compact"
        };
        class ai {
            constructor(t, e) {
                var i = t.events;
                this._scale = t.scale, e = E({
                    display_width: 500,
                    screen_multiplier: 3,
                    max_rows: null
                }, e), this._display_width = e.display_width, this._screen_multiplier = e.screen_multiplier, this._pixel_width = this._screen_multiplier * this._display_width, this._group_labels = void 0, this._positions = [], this._pixels_per_milli = 0, this._earliest = t.getEarliestDate().getTime(), this._latest = t.getLatestDate().getTime(), this._span_in_millis = this._latest - this._earliest, this._span_in_millis <= 0 && (this._span_in_millis = this._computeDefaultSpan(t)), this._average = this._span_in_millis / i.length, this._pixels_per_milli = this.getPixelWidth() / this._span_in_millis, this._axis_helper = function(t, e) {
                    "number" != typeof e && (e = 100);
                    var i = t.getScale(),
                        a = ti[i];
                    if (!a) throw new x("axis_helper_scale_err", i);
                    for (var s = null, n = 0; n < a.length; n++) {
                        var o = a[n],
                            r = o.getPixelsPerTick(t._pixels_per_milli);
                        if (r > e) return null == s || Math.abs(e - r) < Math.abs(e - r) ? o : s;
                        s = o
                    }
                    return a[a.length - 1]
                }(this), this._scaled_padding = 1 / this.getPixelsPerTick() * (this._display_width / 2), this._computePositionInfo(i, e.max_rows)
            }
            _computeDefaultSpan(t) {
                if ("human" == t.scale) {
                    for (var e = {}, i = 0; i < t.events.length; i++) {
                        var a = t.events[i].start_date.findBestFormat();
                        e[a] = e[a] ? e[a] + 1 : 1
                    }
                    for (i = _t.length - 1; i >= 0; i--)
                        if (e.hasOwnProperty(_t[i][0])) {
                            var s = _t[_t.length - 1];
                            return _t[i + 1] && (s = _t[i + 1]), s[1]
                        } return 31536e6
                }
                return 2e5
            }
            getGroupLabels() {
                return this._group_labels || []
            }
            getScale() {
                return this._scale
            }
            getNumberOfRows() {
                return this._number_of_rows
            }
            getPixelWidth() {
                return this._pixel_width
            }
            getPosition(t) {
                return (t - this._earliest) * this._pixels_per_milli
            }
            getPositionInfo(t) {
                return this._positions[t]
            }
            getPixelsPerTick() {
                return this._axis_helper.getPixelsPerTick(this._pixels_per_milli)
            }
            getTicks() {
                return {
                    major: this._axis_helper.getMajorTicks(this),
                    minor: this._axis_helper.getMinorTicks(this)
                }
            }
            getDateFromTime(t) {
                if ("human" == this._scale) return new yt(t);
                if ("cosmological" == this._scale) return new St(new wt(t));
                throw new x("time_scale_scale_err", this._scale)
            }
            getMajorScale() {
                return this._axis_helper.major.name
            }
            getMinorScale() {
                return this._axis_helper.minor.name
            }
            _assessGroups(t) {
                for (var e = [], i = !1, a = 0; a < t.length; a++) t[a].group && (e.indexOf(t[a].group) < 0 ? e.push(t[a].group) : i = !0);
                return e.length && i && e.push(""), e
            }
            _computeRowInfo(t, e) {
                for (var i = [], a = 0, s = 0; s < t.length; s++) {
                    var n = t[s],
                        o = [];
                    delete n.row;
                    for (var r = 0; r < i.length; r++)
                        if (o.push(i[r].end - n.start), o[r] <= 0) {
                            n.row = r, i[r] = n;
                            break
                        } if (void 0 === n.row)
                        if (null === e) n.row = i.length, i.push(n);
                        else if (e > 0) n.row = i.length, i.push(n), e--;
                    else {
                        var l = Math.min.apply(null, o),
                            h = o.indexOf(l);
                        n.row = h, n.end > i[h].end && (i[h] = n), a++
                    }
                }
                return {
                    n_rows: i.length,
                    n_overlaps: a
                }
            }
            _computePositionInfo(t, e, i) {
                i = i || 100;
                for (var a = [], s = !1, n = 0; n < t.length; n++) {
                    var o = {
                        start: this.getPosition(t[n].start_date.getTime())
                    };
                    if (this._positions.push(o), void 0 !== t[n].end_date) {
                        var r = this.getPosition(t[n].end_date.getTime());
                        o.width = r - o.start, o.width > i ? o.end = o.start + o.width : o.end = o.start + i
                    } else o.width = i, o.end = o.start + i;
                    t[n].group ? a.indexOf(t[n].group) < 0 && a.push(t[n].group) : s = !0
                }
                if (a.length) {
                    s && a.push("");
                    var l = [];
                    for (n = 0; n < a.length; n++) l[n] = {
                        label: a[n],
                        idx: n,
                        positions: [],
                        n_rows: 1,
                        n_overlaps: 0
                    };
                    for (n = 0; n < this._positions.length; n++) {
                        (o = this._positions[n]).group = a.indexOf(t[n].group || ""), o.row = 0;
                        for (var h = (u = l[o.group]).positions.length - 1; h >= 0; h--) u.positions[h].end > o.start && u.n_overlaps++;
                        u.positions.push(o)
                    }
                    for (var d = a.length;;) {
                        var c = Math.max(0, e - d);
                        if (!c) break;
                        if (l.sort((function(t, e) {
                                return t.n_overlaps > e.n_overlaps ? -1 : t.n_overlaps < e.n_overlaps ? 1 : t.idx - e.idx
                            })), !l[0].n_overlaps) break;
                        for (d = 0, n = 0; n < l.length; n++) {
                            var u;
                            if ((u = l[n]).n_overlaps && c) {
                                var m = this._computeRowInfo(u.positions, u.n_rows + 1);
                                u.n_rows = m.n_rows, u.n_overlaps = m.n_overlaps, c--
                            }
                            d += u.n_rows
                        }
                    }
                    this._number_of_rows = d, this._group_labels = [], l.sort((function(t, e) {
                        return t.idx - e.idx
                    })), n = 0;
                    for (var _ = 0; n < l.length; n++) {
                        for (this._group_labels.push({
                                label: l[n].label,
                                rows: l[n].n_rows
                            }), h = 0; h < l[n].positions.length; h++)(o = l[n].positions[h]).row += _;
                        _ += l[n].n_rows
                    }
                } else {
                    var p = this._computeRowInfo(this._positions, e);
                    this._number_of_rows = p.n_rows
                }
            }
            getAxisTickDateFormat(t) {
                return "cosmological" == this._scale ? "compact" : ii[t]
            }
        }
        class si {
            constructor(t) {
                this._el = {
                    parent: {},
                    container: {},
                    message: {}
                }, this.options = {
                    width: 600,
                    height: 600
                }, this.data = {
                    label: "",
                    rows: 1
                }, this._el.container = v("div", "tl-timegroup"), E(this.data, t), this.animator = {}, this._initLayout(), this._initEvents()
            }
            updateDisplay(t, e) {}
            setRowPosition(t, e) {
                this.options.height = e * this.data.rows, this.setPosition({
                    top: t
                }), this._el.container.style.height = this.options.height + "px"
            }
            setAlternateRowColor(t, e) {
                var i = "tl-timegroup";
                t && (i += " tl-timegroup-alternate"), e && (i += " tl-timegroup-hidden"), this._el.container.className = i
            }
            _onMouseClick() {
                this.fire("clicked", this.options)
            }
            _initLayout() {
                this._el.message = v("div", "tl-timegroup-message", this._el.container), this._el.message.innerHTML = this.data.label
            }
            _initEvents() {
                ht.addListener(this._el.container, "click", this._onMouseClick, this)
            }
            _updateDisplay(t, e, i) {}
        }
        R(si, at, ot);
        class ni {
            constructor(t, e, i, a) {
                this.start_date = t, this.end_date = e, this.headline = i, this._el = {
                    container: {},
                    background: {},
                    content_container: {},
                    content: {},
                    text: {}
                }, this._text = {}, this._state = {
                    loaded: !1
                }, this.options = {
                    duration: 1e3,
                    ease: Q,
                    width: 600,
                    height: 600,
                    marker_width_min: 100
                }, this.active = !1, this.animator = {}, this.has_end_date = !1, E(this.options, a), this._initLayout(), this._initEvents()
            }
            show() {}
            hide() {}
            setActive(t) {}
            addTo(t) {
                t.appendChild(this._el.container)
            }
            removeFrom(t) {
                t.removeChild(this._el.container)
            }
            updateDisplay(t, e) {
                this._updateDisplay(t, e)
            }
            getLeft() {
                return this._el.container.style.left.slice(0, -2)
            }
            getTime() {
                return this.start_date.getTime()
            }
            getEndTime() {
                return !!this.end_date && this.end_date.getTime()
            }
            setHeight(t) {
                var e = 1;
                this._el.content_container.style.height = t + "px", this._el.content.className = "tl-timeera-content", r ? ((e = Math.floor(t / 14)) < 1 && (e = 1), this._text.className = "tl-headline", this._text.style.webkitLineClamp = e) : (e = t / 12, this._text.className = e > 1 ? "tl-headline tl-headline-fadeout" : "tl-headline", this._text.style.height = 12 * e + "px")
            }
            setWidth(t) {
                this.end_date && (this._el.container.style.width = t + "px", t > this.options.marker_width_min ? (this._el.content_container.style.width = t + "px", this._el.content_container.className = "tl-timeera-content-container tl-timeera-content-container-long") : (this._el.content_container.style.width = this.options.marker_width_min + "px", this._el.content_container.className = "tl-timeera-content-container"))
            }
            setClass(t) {
                this._el.container.className = t
            }
            setRowPosition(t, e) {
                this.setPosition({
                    top: t
                }), e < 56 && this._el.content_container.remove("tl-timeera-content-container-small")
            }
            setColor(t) {
                this._el.container.className = "tl-timeera tl-timeera-color" + t
            }
            _initLayout() {
                this._el.container = v("div", "tl-timeera"), this.end_date && (this.has_end_date = !0, this._el.container.className = "tl-timeera tl-timeera-with-end"), this._el.content_container = v("div", "tl-timeera-content-container", this._el.container), this._el.background = v("div", "tl-timeera-background", this._el.content_container), this._el.content = v("div", "tl-timeera-content", this._el.content_container), this._el.text = v("div", "tl-timeera-text", this._el.content), this._text = v("h2", "tl-headline", this._el.text), this.headline && "" != this.headline && (this._text.innerHTML = F(this.headline)), this.onLoaded()
            }
            _initEvents() {}
            _updateDisplay(t, e, i) {
                t && (this.options.width = t), e && (this.options.height = e)
            }
        }
        R(ni, at, ot);
        class oi {
            constructor(t, e, i) {
                i && this.setLanguage(i), this._el = {
                    container: {},
                    content_container: {},
                    major: {},
                    minor: {}
                }, this._text = {}, this._state = {
                    loaded: !1
                }, this.data = {}, this.options = {
                    duration: 1e3,
                    ease: Q,
                    width: 600,
                    height: 600
                }, this.active = !1, this.animator = {}, this.axis_helper = {}, this.minor_ticks = [], this.major_ticks = [], this._el.container = "object" == typeof t ? t : g(t), E(this.options, e), this._initLayout(), this._initEvents()
            }
            show() {}
            hide() {}
            addTo(t) {
                t.appendChild(this._el.container)
            }
            removeFrom(t) {
                t.removeChild(this._el.container)
            }
            updateDisplay(t, e) {
                this._updateDisplay(t, e)
            }
            getLeft() {
                return this._el.container.style.left.slice(0, -2)
            }
            drawTicks(t, e) {
                var i = t.getTicks();
                this._el.major.className = "tl-timeaxis-major", this._el.minor.className = "tl-timeaxis-minor", this._el.major.style.opacity = 0, this._el.minor.style.opacity = 0, this.major_ticks = this._createTickElements(i.major.ticks, this._el.major, t.getAxisTickDateFormat(i.major.name)), this.minor_ticks = this._createTickElements(i.minor.ticks, this._el.minor, t.getAxisTickDateFormat(i.minor.name), i.major.ticks), this.positionTicks(t, e, !0), this._el.major.className = "tl-timeaxis-major tl-animate-opacity tl-timeaxis-animate-opacity", this._el.minor.className = "tl-timeaxis-minor tl-animate-opacity tl-timeaxis-animate-opacity", this._el.major.style.opacity = 1, this._el.minor.style.opacity = 1
            }
            _createTickElements(t, e, i, a) {
                e.innerHTML = "";
                var s = {};
                if (s[new Date(-1, 13, -30).getTime()] = !0, a)
                    for (var n = 0; n < a.length; n++) s[a[n].getTime()] = !0;
                var o = [];
                for (n = 0; n < t.length; n++) {
                    var r = t[n];
                    if (!(r.getTime() in s)) {
                        var l = v("div", "tl-timeaxis-tick", e),
                            h = v("span", "tl-timeaxis-tick-text tl-animate-opacity", l);
                        let t = r.getDisplayDate(this.getLanguage(), i);
                        h.innerHTML = t, o.push({
                            tick: l,
                            tick_text: h,
                            display_date: t,
                            date: r
                        })
                    }
                }
                return o
            }
            positionTicks(t, e, i) {
                i ? (this._el.major.className = "tl-timeaxis-major", this._el.minor.className = "tl-timeaxis-minor") : (this._el.major.className = "tl-timeaxis-major tl-timeaxis-animate", this._el.minor.className = "tl-timeaxis-minor tl-timeaxis-animate"), this._positionTickArray(this.major_ticks, t, e), this._positionTickArray(this.minor_ticks, t, e)
            }
            _positionTickArray(t, e, i) {
                if (t[1] && t[0]) {
                    var a = 1;
                    e.getPosition(t[1].date.getMillisecond()) - e.getPosition(t[0].date.getMillisecond()) < i && (a = Math.round(i / e.getPixelsPerTick()));
                    for (var s = 1, n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.tick.style.left = e.getPosition(o.date.getMillisecond()) + "px", o.tick_text.innerHTML = o.display_date, a > 1 ? s >= a ? (s = 1, o.tick_text.style.opacity = 1, o.tick.className = "tl-timeaxis-tick") : (s++, o.tick_text.style.opacity = 0, o.tick.className = "tl-timeaxis-tick tl-timeaxis-tick-hidden") : (o.tick_text.style.opacity = 1, o.tick.className = "tl-timeaxis-tick")
                    }
                }
            }
            getVisibleTicks() {
                return {
                    major: this._getVisibleTickArray(this.major_ticks),
                    minor: this._getVisibleTickArray(this.minor_ticks)
                }
            }
            _getVisibleTickArray(t) {
                return t.filter((({
                    tick: t
                }) => function(t) {
                    const e = t.getBoundingClientRect();
                    return e.left >= 0 && e.right <= (window.innerWidth || document.documentElement.clientWidth)
                }(t)))
            }
            _initLayout() {
                this._el.content_container = v("div", "tl-timeaxis-content-container", this._el.container), this._el.major = v("div", "tl-timeaxis-major", this._el.content_container), this._el.minor = v("div", "tl-timeaxis-minor", this._el.content_container), this.onLoaded()
            }
            _initEvents() {}
            _updateDisplay(t, e, i) {
                t && (this.options.width = t), e && (this.options.height = e)
            }
        }
        R(oi, at, ot, Rt);
        class ri {
            constructor(t, e, i) {
                this._el = {
                        container: {},
                        content_container: {},
                        content: {},
                        headline_container: {},
                        headline: {},
                        date: {}
                    }, this.options = {
                        title: !1
                    }, this.data = {
                        unique_id: "",
                        headline: "headline",
                        text: "text"
                    },
                    function(t, e) {
                        t.data = L({}, t.data, e), "" === t.data.unique_id && (t.data.unique_id = z(6))
                    }(this, t), E(this.options, e), this._el.container = v("div", "tl-text"), this._el.container.id = this.data.unique_id, this._initLayout(), i && i.appendChild(this._el.container)
            }
            show() {}
            hide() {}
            addTo(t) {
                t.appendChild(this._el.container)
            }
            removeFrom(t) {
                t.removeChild(this._el.container)
            }
            headlineHeight() {
                return this._el.headline.offsetHeight + 40
            }
            addDateText(t) {
                this._el.date.innerHTML = t
            }
            onLoaded() {
                this.fire("loaded", this.data)
            }
            onAdd() {
                this.fire("added", this.data)
            }
            onRemove() {
                this.fire("removed", this.data)
            }
            _initLayout() {
                if (this._el.content_container = v("div", "tl-text-content-container", this._el.container), this._el.headline_container = v("div", "tl-text-headline-container", this._el.content_container), "" != this.data.headline) {
                    var t = "tl-headline";
                    this.options.title && (t = "tl-headline tl-headline-title"), this._el.headline = v("h2", t, this._el.headline_container), this._el.headline.innerHTML = this.data.headline
                }
                if (this._el.date = v("h3", "tl-headline-date", this._el.headline_container), "" != this.data.text) {
                    var e = "";
                    e += (i = 1 == this.options.autolink ? $(this.data.text) : this.data.text).match(/<p>[\s\S]*?<\/p>/) ? i : "<p>" + i + "</p>", this._el.content = v("div", "tl-text-content", this._el.content_container), this._el.content.innerHTML = e
                }
                var i;
                this.onLoaded()
            }
        }
        R(ri, at);
        class li {
            constructor(t, e, i) {
                i && this.setLanguage(i), this._el = {
                    container: {},
                    content_container: {},
                    content: {},
                    content_item: {},
                    content_link: {},
                    caption: null,
                    credit: null,
                    parent: {},
                    link: null
                }, this.player = null, this.timer = null, this.load_timer = null, this.message = null, this.media_id = null, this._state = {
                    loaded: !1,
                    show_meta: !1,
                    media_loaded: !1
                }, this.data = {
                    unique_id: null,
                    url: null,
                    credit: null,
                    caption: null,
                    credit_alternate: null,
                    caption_alternate: null,
                    link: null,
                    link_target: null
                }, this.options = {
                    api_key_flickr: "bd3a7c45ddd52f3101825d41563a6125",
                    api_key_googlemaps: "AIzaSyB9dW8e_iRrATFa8g24qB6BDBGdkrLDZYI",
                    api_key_embedly: "",
                    credit_height: 0,
                    caption_height: 0,
                    background: 0
                }, this.animator = {}, E(this.options, e), E(this.data, t), this.options.background || (this._el.container = v("div", "tl-media"), this.data.unique_id && (this._el.container.id = this.data.unique_id), this._initLayout())
            }
            loadMedia() {
                var t = this;
                if (!this._state.loaded) try {
                    this.load_timer = setTimeout((function() {
                        t.loadingMessage(), t._loadMedia(), t._updateDisplay()
                    }), 1200)
                } catch (t) {
                    D("Error loading media for ", this._media), D(t)
                }
            }
            _updateMessage(t) {
                this.message && this.message.updateMessage(t)
            }
            loadingMessage() {
                this._updateMessage(this._("loading") + " " + this.options.media_name)
            }
            errorMessage(t) {
                t = t ? this._("error") + ": " + t : this._("error"), this._updateMessage(t)
            }
            updateMediaDisplay(t) {
                this._state.loaded && !this.options.background && (this._el.content_item.style.maxHeight = h ? this.options.height / 2 + "px" : this.options.height - this.options.credit_height - this.options.caption_height - 30 + "px", this._el.container.style.maxWidth = this.options.width + "px", m && (this._el.content_item.offsetWidth, this._el.content_item.offsetHeight), this._updateMediaDisplay(t), this._state.media_loaded && (this._el.credit && (this._el.credit.style.width = this._el.content_item.offsetWidth + "px"), this._el.caption && (this._el.caption.style.width = this._el.content_item.offsetWidth + "px")))
            }
            _loadMedia() {
                this.onLoaded()
            }
            _updateMediaDisplay(t) {
                m && (this._el.content_item.style.maxWidth = this.options.width + "px", this._el.content_item.style.width = "auto")
            }
            _getMeta() {}
            _getImageURL(t, e) {
                return ""
            }
            show() {}
            hide() {}
            addTo(t) {
                t.appendChild(this._el.container), this.onAdd()
            }
            removeFrom(t) {
                t.removeChild(this._el.container), this.onRemove()
            }
            getImageURL(t, e) {
                return this._getImageURL(t, e)
            }
            updateDisplay(t, e, i) {
                this._updateDisplay(t, e, i)
            }
            stopMedia() {
                try {
                    this._stopMedia()
                } catch (t) {
                    D(`stopMedia() exception: ${t}`)
                }
            }
            loadErrorDisplay(t) {
                try {
                    this._el.content.removeChild(this._el.content_item)
                } catch (t) {}
                this._el.content_item = v("div", "tl-media-item tl-media-loaderror", this._el.content), this._el.content_item.innerHTML = "<div class='tl-icon-" + this.options.media_type + "'></div><p>" + t + "</p>", this.onLoaded(!0)
            }
            onLoaded(t) {
                this._state.loaded = !0, this.fire("loaded", this.data), this.message && this.message.hide(), t || this.options.background || this.showMeta(), this.updateDisplay()
            }
            onMediaLoaded(t) {
                this._state.media_loaded = !0, this.fire("media_loaded", this.data), this._el.credit && (this._el.credit.style.width = this._el.content_item.offsetWidth + "px"), this._el.caption && (this._el.caption.style.width = this._el.content_item.offsetWidth + "px")
            }
            showMeta(t, e) {
                this._state.show_meta = !0, this.data.credit && "" != this.data.credit && (this._el.credit = v("div", "tl-credit", this._el.content_container), this._el.credit.innerHTML = 1 == this.options.autolink ? $(this.data.credit) : this.data.credit, this.options.credit_height = this._el.credit.offsetHeight), this.data.caption && "" != this.data.caption && (this._el.caption = v("div", "tl-caption", this._el.content_container), this._el.caption.innerHTML = 1 == this.options.autolink ? $(this.data.caption) : this.data.caption, this.options.caption_height = this._el.caption.offsetHeight), this.data.caption && this.data.credit || this.getMeta()
            }
            getMeta() {
                this._getMeta()
            }
            updateMeta() {
                !this.data.credit && this.data.credit_alternate && (this._el.credit = v("div", "tl-credit", this._el.content_container), this._el.credit.innerHTML = this.data.credit_alternate, this.options.credit_height = this._el.credit.offsetHeight), !this.data.caption && this.data.caption_alternate && (this._el.caption = v("div", "tl-caption", this._el.content_container), this._el.caption.innerHTML = this.data.caption_alternate, this.options.caption_height = this._el.caption.offsetHeight), this.updateDisplay()
            }
            onAdd() {
                this.fire("added", this.data)
            }
            onRemove() {
                this.fire("removed", this.data)
            }
            _initLayout() {
                this.message = new jt(this._el.container, this.options, this.getLanguage()), this._el.content_container = v("div", "tl-media-content-container", this._el.container), this.data.link && "" != this.data.link ? (this._el.link = v("a", "tl-media-link", this._el.content_container), this._el.link.href = this.data.link, this.data.link_target && "" != this.data.link_target ? this._el.link.target = this.data.link_target : this._el.link.target = "_blank", "_blank" == this._el.link.target && this._el.link.setAttribute("rel", "noopener"), this._el.content = v("div", "tl-media-content", this._el.link)) : this._el.content = v("div", "tl-media-content", this._el.content_container)
            }
            _updateDisplay(t, e, i) {
                t && (this.options.width = t), e && (this.options.height = e), i && (this.options.layout = i), this._el.credit && (this.options.credit_height = this._el.credit.offsetHeight), this._el.caption && (this.options.caption_height = this._el.caption.offsetHeight + 5), this.updateMediaDisplay(this.options.layout)
            }
            domCreate(...t) {
                return v(...t)
            }
            _stopMedia() {}
        }
        R(li, at, Rt);
        class hi extends li {
            _loadMedia() {
                this.loadingMessage(), this.options.background || this.createMedia(), this.onLoaded()
            }
            createMedia() {
                var t = this,
                    e = "tl-media-item tl-media-image tl-media-shadow";
                (this.data.url.match(/.png(\?.*)?$/) || this.data.url.match(/.svg(\?.*)?$/)) && (e = "tl-media-item tl-media-image"), this._el.content_item = this.domCreate("img", e, this._el.content), this.data.alt ? this._el.content_item.alt = this.data.alt : this.data.caption && (this._el.content_item.alt = q(this.data.caption)), this.data.title ? this._el.content_item.title = this.data.title : this.data.caption && (this._el.content_item.title = q(this.data.caption)), this._el.content_item.addEventListener("load", (function(e) {
                    t.onMediaLoaded()
                })), this._el.content_item.src = this.getImageURL()
            }
            getImageURL(t, e) {
                return U(this.data.url)
            }
            _updateMediaDisplay(t) {
                m && (this._el.content_item.style.width = "auto")
            }
        }

        function di(t, e, i, a) {
            ui.js(t, e, i, a)
        }

        function ci(t, e, i, a) {
            ui.css(t, e, i, a)
        }
        let ui = new class {
            constructor(t) {
                this.doc = t, this.pending = {}, this.queue = {
                    css: [],
                    js: []
                }, this.styleSheets = t.styleSheets, this.env = this.getEnv(), this.head = this.doc.head || this.doc.getElementsByTagName("head")[0], this.pollCount = 0
            }
            createNode(t, e) {
                var i, a = this.doc.createElement(t);
                for (i in e) e.hasOwnProperty(i) && a.setAttribute(i, e[i]);
                return a
            }
            finish(t) {
                var e, i, a = this.pending[t];
                a && (e = a.callback, (i = a.urls).shift(), this.pollCount = 0, i.length || (e && e.call(a.context, a.obj), this.pending[t] = null, this.queue[t].length && this.load(t)))
            }
            getEnv() {
                var t = navigator.userAgent,
                    e = {
                        async: !0 === this.doc.createElement("script").async
                    };
                return (e.webkit = /AppleWebKit\//.test(t)) || (e.ie = /MSIE/.test(t)) || (e.opera = /Opera/.test(t)) || (e.gecko = /Gecko\//.test(t)) || (e.unknown = !0), e
            }
            load(t, e, i, a, s) {
                var n, o, r, l, h, d, c = function() {
                        this.finish(t)
                    }.bind(this),
                    u = "css" === t,
                    m = [];
                if (e)
                    if (e = "string" == typeof e ? [e] : e.concat(), u || this.env.async || this.env.gecko || this.env.opera) this.queue[t].push({
                        urls: e,
                        callback: i,
                        obj: a,
                        context: s
                    });
                    else
                        for (n = 0, o = e.length; n < o; ++n) this.queue[t].push({
                            urls: [e[n]],
                            callback: n === o - 1 ? i : null,
                            obj: a,
                            context: s
                        });
                if (!this.pending[t] && (l = this.pending[t] = this.queue[t].shift())) {
                    for (n = 0, o = (h = l.urls).length; n < o; ++n) d = h[n], u ? r = this.env.gecko ? this.createNode("style") : this.createNode("link", {
                        href: d,
                        rel: "stylesheet"
                    }) : (r = this.createNode("script", {
                        src: d
                    })).async = !1, r.className = "lazyload", r.setAttribute("charset", "utf-8"), this.env.ie && !u ? r.onreadystatechange = function() {
                        /loaded|complete/.test(r.readyState) && (r.onreadystatechange = null, c())
                    } : u && (this.env.gecko || this.env.webkit) ? this.env.webkit ? (l.urls[n] = r.href, this.pollWebKit()) : (r.innerHTML = '@import "' + d + '";', this.pollGecko(r)) : r.onload = r.onerror = c, m.push(r);
                    for (n = 0, o = m.length; n < o; ++n) this.head.appendChild(m[n])
                }
            }
            pollGecko(t) {
                var e;
                try {
                    e = !!t.sheet.cssRules
                } catch (a) {
                    if (this.pollCount += 1, this.pollCount < 200) {
                        var i = this;
                        setTimeout((function() {
                            i.pollGecko(t)
                        }), 50)
                    } else e && this.finish("css");
                    return
                }
                this.finish("css")
            }
            pollWebKit() {
                var t, e = this.pending.css;
                if (e) {
                    for (t = this.styleSheets.length; --t >= 0;)
                        if (this.styleSheets[t].href === e.urls[0]) {
                            this.finish("css");
                            break
                        } this.pollCount += 1, e && (this.pollCount < 200 ? setTimeout(this.pollWebKit.bind(this), 50) : this.finish("css"))
                }
            }
            css(t, e, i, a) {
                this.load("css", t, e, i, a)
            }
            js(t, e, i, a) {
                this.load("js", t, e, i, a)
            }
        }(document);
        class mi extends li {
            _loadMedia() {
                var t, e = this;
                this.youtube_loaded = !1, this._el.content_item = this.domCreate("div", "tl-media-item tl-media-youtube tl-media-shadow", this._el.content), this._el.content_item.id = z(7), t = function(t) {
                    var e, i, a, s = [];
                    (e = t.toString()).match("&#038;") ? e = e.replace("&#038;", "&") : e.match("&#38;") ? e = e.replace("&#38;", "&") : e.match("&amp;") && (e = e.replace("&amp;", "&")), a = e.slice(e.indexOf("?") + 1).split("&");
                    for (var n = 0; n < a.length; n++) i = a[n].split("="), s.push(i[0]), s[i[0]] = i[1];
                    return s
                }(this.data.url), this.media_id = {}, this.data.url.match("v=") ? this.media_id.id = t.v : this.data.url.match("/embed/") ? this.media_id.id = this.data.url.split("embed/")[1].split(/[?&]/)[0] : this.data.url.match(/v\/|v=|youtu\.be\//) ? this.media_id.id = this.data.url.split(/v\/|v=|youtu\.be\//)[1].split(/[?&]/)[0] : D("YOUTUBE IN URL BUT NOT A VALID VIDEO"), this.data.url.match("start=") ? this.media_id.start = V(this.data.url.split("start=")[1]) : this.data.url.match("t=") && (this.media_id.start = V(this.data.url.split("t=")[1])), this.data.url.match("end=") && (this.media_id.end = V(this.data.url.split("end=")[1])), this.media_id.hd = Boolean(void 0 !== t.hd), di("https://www.youtube.com/iframe_api", (function() {
                    e.createMedia()
                }))
            }
            _updateMediaDisplay() {
                this._el.content_item.style.height = W({
                    w: this.options.width
                }) + "px", this._el.content_item.style.width = this.options.width + "px"
            }
            _stopMedia() {
                if (this.youtube_loaded) try {
                    this.player.getPlayerState() == YT.PlayerState.PLAYING && this.player.pauseVideo()
                } catch (t) {
                    D(t)
                }
            }
            createMedia() {
                var t = this;
                clearTimeout(this.timer), "undefined" != typeof YT && void 0 !== YT.Player ? this.player = new YT.Player(this._el.content_item.id, {
                    playerVars: {
                        enablejsapi: 1,
                        color: "white",
                        controls: 1,
                        start: this.media_id.start,
                        end: this.media_id.end,
                        fs: 1
                    },
                    videoId: this.media_id.id,
                    events: {
                        onReady: function() {
                            t.onPlayerReady(), t.onLoaded()
                        },
                        onStateChange: t.onStateChange
                    }
                }) : this.timer = setTimeout((function() {
                    t.createMedia()
                }), 1e3)
            }
            onPlayerReady(t) {
                this.youtube_loaded = !0, this._el.content_item = document.getElementById(this._el.content_item.id), this.onMediaLoaded()
            }
            onStateChange(t) {
                t.data == YT.PlayerState.ENDED && (t.target.seekTo(0), t.target.pauseVideo())
            }
        }
        class _i extends li {
            _loadMedia() {
                this._el.content_item = this.domCreate("div", "tl-media-item tl-media-map tl-media-shadow", this._el.content), this.media_id = this.data.url, this.mapframe = this.domCreate("iframe", "", this._el.content_item), this.mapframe.width = "100%", this.mapframe.height = "100%", this.mapframe.frameBorder = "0", this.mapframe.src = this.makeGoogleMapsEmbedURL(this.media_id, this.options.api_key_googlemaps), this.onLoaded()
            }
            _updateMediaDisplay() {
                if (this._state.loaded) {
                    var t = B({
                        w: this._el.content_item.offsetWidth
                    });
                    this._el.content_item.style.height = t.h + "px"
                }
            }
            makeGoogleMapsEmbedURL(t, e) {
                var i = !1,
                    a = {
                        view: ["center"],
                        place: ["q", "center"],
                        directions: ["origin", "destination", "center"],
                        search: ["q", "center"],
                        streetview: ["fov", "heading", "pitch"]
                    },
                    s = /(https:\/\/.+google.+?\/maps)/,
                    n = /@([-\d.]+),([-\d.]+)/,
                    o = /([\w\W]+)/,
                    r = /,((?:[-\d.]+[zmayht],?)*)/,
                    l = {
                        view: new RegExp(s.source + "/" + n.source + r.source),
                        place: new RegExp(s.source + "/place/" + o.source + "/" + n.source + r.source),
                        directions: new RegExp(s.source + "/dir/" + o.source + "/" + o.source + "/" + n.source + r.source),
                        search: new RegExp(s.source + "/search/" + o.source + "/" + n.source + r.source)
                    };
                return function(t) {
                    function s(e, s) {
                        if ("z" == e.slice(-1)) s.zoom = e;
                        else if ("m" == e.slice(-1)) s.zoom = 14, s.maptype = "satellite";
                        else if ("t" == e.slice(-1)) {
                            if (i = !0, "place" == n) var o = t.match(l.place)[3] + "," + t.match(l.place)[4];
                            else o = s.center, delete s.center;
                            (s = {}).location = o, streetview_params = e.split(",");
                            for (let t in a.streetview) {
                                var r = parseInt(t) + 1;
                                "pitch" == a.streetview[t] && "90t" == streetview_params[r] ? s[a.streetview[t]] = 0 : s[a.streetview[t]] = streetview_params[r].slice(0, -1)
                            }
                        }
                        return s
                    }
                    let n = "view";
                    return t.match(l.place) ? n = "place" : t.match(l.directions) ? n = "directions" : t.match(l.search) && (n = "search"),
                        function(t, n) {
                            var o = {},
                                r = n[1],
                                l = n[n.length - 1];
                            for (let e in a[t]) {
                                var h = parseInt(e) + 2;
                                "center" == a[t][e] ? o[a[t][e]] = n[h] + "," + n[++h] : o[a[t][e]] = n[h]
                            }
                            return (o = s(l, o)).key = e, 1 == i && (t = "streetview"), r + "/embed/v1/" + t + function(t) {
                                var e = [];
                                for (var i in t) t.hasOwnProperty(i) && e.push(i + "=" + t[i]);
                                return "?" + e.join("&")
                            }(o)
                        }(n, t.match(l[n]))
                }(t)
            }
        }
        class pi extends li {
            constructor(t, e, i) {
                super(t, e, i), this.blockquote = qe.sanitize(this.data.url)
            }
            _loadMedia() {
                this._el.content_item = this.domCreate("div", "tl-media-item tl-media-blockquote", this._el.content), this._el.content_container.className = "tl-media-content-container tl-media-content-container-text", this._el.content_item.innerHTML = this.blockquote, this.onLoaded()
            }
            updateMediaDisplay() {}
        }
        class fi extends li {
            _loadMedia() {
                var t, e = this;
                this._el.content_item = this.domCreate("div", "tl-media-item tl-media-wikipedia", this._el.content), this._el.content_container.className = "tl-media-content-container tl-media-content-container-text", this.media_id = this.data.url.split("wiki/")[1].split("#")[0].replace("_", " "), this.media_id = this.media_id.replace(" ", "%20"), t = "https://" + this.data.url.split("//")[1].split(".wikipedia")[0] + ".wikipedia.org/w/api.php?action=query&prop=extracts|pageimages&redirects=&titles=" + this.media_id + "&exintro=1&format=json&callback=?", ut({
                    type: "GET",
                    url: t,
                    dataType: "json",
                    success: function(t) {
                        e.createMedia(t)
                    },
                    error: function(t, i) {
                        var a = "";
                        a += e._("wikipedia_load_err") + "<br/>" + e.media_id + "<br/>" + i, e.loadErrorDisplay(a)
                    }
                })
            }
            createMedia(t) {
                var e = "";
                if (t.query) {
                    var i = "";
                    (e = {
                        entry: {},
                        title: "",
                        text: "",
                        extract: "",
                        paragraphs: 1,
                        page_image: "",
                        text_array: []
                    }).entry = function(t) {
                        if (void 0 !== t) {
                            var e = 0;
                            for (var i in t) {
                                if (0 === e) return t[i];
                                e++
                            }
                            return ""
                        }
                        return ""
                    }(t.query.pages), e.extract = e.entry.extract, e.title = e.entry.title, e.page_image = e.entry.thumbnail, e.extract.match("<p>") ? e.text_array = e.extract.split("<p>") : e.text_array.push(e.extract);
                    for (var a = 0; a < e.text_array.length; a++) a + 1 <= e.paragraphs && a + 1 < e.text_array.length && (e.text += "<p>" + e.text_array[a + 1]);
                    i += "<span class='tl-icon-wikipedia'></span>", i += "<div class='tl-wikipedia-title'><h4><a href='" + this.data.url + "' target='_blank' rel='noopener'>" + e.title + "</a></h4>", i += "<span class='tl-wikipedia-source'>" + this._("wikipedia") + "</span></div>", e.page_image, i += e.text, e.extract.match("REDIRECT") || (this._el.content_item.innerHTML = i, this.onLoaded())
                }
            }
            updateMediaDisplay() {}
        }
        class gi extends li {
            _loadMedia() {
                var t, e = Math.round(this.options.width) || 1e3,
                    i = this.getLanguage().lang.toLowerCase(),
                    a = this;
                try {
                    this.establishMediaID(), t = `https://commons.wikimedia.org/w/api.php?action=query&titles=${this.media_id}&prop=imageinfo|entityterms&iiprop=url&&iiurlwidth=${e}&format=json&origin=*&wbetlanguage=${i}`, ct(t, (function(t) {
                        let e = function(t) {
                            let e = {};
                            if (t.query && t.query.pages) {
                                let i = Object.keys(t.query.pages);
                                e.page_id = i[0];
                                let a = t.query.pages[e.page_id];
                                e.url = a.imageinfo[0].thumburl, a.entityterms && a.entityterms.label && (e.label = a.entityterms.label[0])
                            }
                            return e
                        }(t);
                        e.url ? (a.base_image_url = e.url, a.page_id = e.page_id, !a.data.alt && e.label && (a.data.alt = e.label), a.options.background || a.createMedia(), a.onLoaded()) : a.loadErrorDisplay(a._("wikipedia_image_load_err"))
                    }))
                } catch (t) {
                    a.loadErrorDisplay(a._(t.message_key))
                }
            }
            establishMediaID() {
                let t = function(t) {
                    if (t.match(/^.+#\/media\/.+/)) return `File:${t.split("#")[1].split(":")[1]}`;
                    if (t.match(/^.*commons.wikimedia.org\/wiki\/File:.+/)) {
                        let e = t.split("/");
                        return e[e.length - 1]
                    }
                    return null
                }(this.data.url);
                if (!t) throw new x("Invalid Wikipedia Image URL");
                this.media_id = t
            }
            createMedia() {
                var t = this;
                if (this._el.content_item = this.domCreate("img", "tl-media-item tl-media-image tl-media-wikipedia-image tl-media-shadow", this._el.content), this.data.alt) this._el.content_item.alt = this.data.alt;
                else if (this.page_id) {
                    let e = `M${this.page_id}`;
                    mt(`https://commons.wikimedia.org/w/api.php?action=wbgetentities&format=json&ids=${e}&format=json&origin=*`).then((i => {
                        if (i.entities && i.entities[e]) {
                            let a = i.entities[e].labels,
                                s = t.getLanguage().lang.toLowerCase(),
                                n = null;
                            a[s] ? n = a[s] : s.length > 2 && a[s.substr(0, 2)] ? n = a[s.substr(0, 2)] : a.en && (n = a.en), n ? (console.log(`wikibase_id: ${t.media_id} alt ${n.value}`), t.data.alt = n.value, t._el.content_item.alt = t.data.alt) : console.log(`wikibase_id: ${t.media_id} ain't got no alt`)
                        }
                    }))
                }
                this.data.title && (this._el.content_item.title = this.data.title), this._el.content_item.addEventListener("load", (function(e) {
                    t.onMediaLoaded()
                })), this._el.content_item.src = this.getImageURL(this.options.width, this.options.height)
            }
            _getImageURL(t, e) {
                if (t && this.base_image_url) {
                    let e = this.base_image_url.match(/(\/[\d\.]+px-)/);
                    if (e) return t = Math.round(t), this.base_image_url.replace(e[1], `/${t}px-`)
                }
                return this.base_image_url
            }
        }
        class vi extends li {
            _loadMedia() {
                var t, e = this;
                this._el.content_item = this.domCreate("div", "tl-media-item tl-media-iframe tl-media-soundcloud tl-media-shadow", this._el.content), this.media_id = this.data.url, t = "https://soundcloud.com/oembed?url=" + this.media_id + "&format=js&callback=?", ct(t, (function(t) {
                    di("https://w.soundcloud.com/player/api.js", (function() {
                        e.createMedia(t)
                    }))
                }))
            }
            createMedia(t) {
                this._el.content_item.innerHTML = t.html, self.widget = SC.Widget(this._el.content_item.querySelector("iframe")), this.soundCloudCreated = !0, this.onLoaded()
            }
            _stopMedia() {
                this.soundCloudCreated && self.widget.pause()
            }
        }
        class yi extends li {
            _loadMedia() {
                var t, e = this;
                this._el.content_item = this.domCreate("div", "tl-media-item tl-media-iframe tl-media-vimeo tl-media-shadow", this._el.content), this.media_id = this.data.url.split(/video\/|\/\/vimeo\.com\//)[1].split(/[?&]/)[0];
                var i = null;
                this.data.url.match(/#t=([^&]+).*/) && (i = this.data.url.match(/#t=([^&]+).*/)[1]), t = "https://player.vimeo.com/video/" + this.media_id + "?api=1&title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff", i && (t = t += "&amp;#t=" + i), this.player = this.domCreate("iframe", "", this._el.content_item), this.player.addEventListener("load", (function(t) {
                    e.onMediaLoaded()
                })), this.player.width = "100%", this.player.height = "100%", this.player.frameBorder = "0", this.player.src = t, this.player.setAttribute("allowfullscreen", ""), this.player.setAttribute("webkitallowfullscreen", ""), this.player.setAttribute("mozallowfullscreen", ""), this.onLoaded()
            }
            _updateMediaDisplay() {
                this._el.content_item.style.height = W({
                    w: this._el.content_item.offsetWidth
                }) + "px"
            }
            _stopMedia() {
                try {
                    this.player && this.player.contentWindow && this.player.contentWindow.postMessage(JSON.stringify({
                        method: "pause"
                    }), "https://player.vimeo.com")
                } catch (t) {
                    D(t)
                }
            }
        }
        class bi extends li {
            _loadMedia() {
                var t;
                this._el.content_item = this.domCreate("div", "tl-media-item tl-media-iframe tl-media-dailymotion", this._el.content), -1 != this.data.url.indexOf("dai.ly/") ? this.media_id = this.data.url.substr(this.data.url.indexOf("dai.ly/") + 7) : this.data.url.match("video") ? this.media_id = this.data.url.split("video/")[1].split(/[?&]/)[0] : this.media_id = this.data.url.split("embed/")[1].split(/[?&]/)[0], -1 != this.media_id.indexOf("_") && (this.media_id = this.media_id.split("_")[0]), t = "https://www.dailymotion.com/embed/video/" + this.media_id + "?api=postMessage", this._el.content_item.innerHTML = "<iframe autostart='false' frameborder='0' width='100%' height='100%' src='" + t + "'></iframe>", this.onLoaded()
            }
            _updateMediaDisplay() {
                this._state.loaded && (this._el.content_item.style.height = W({
                    w: this._el.content_item.offsetWidth
                }) + "px")
            }
            _stopMedia() {
                this._state.loaded && this._el.content_item.querySelector("iframe").contentWindow.postMessage('{"command":"pause","parameters":[]}', "*")
            }
        }
        class wi extends li {
            _loadMedia() {
                var t;
                this._el.content_item = this.domCreate("div", "tl-media-item tl-media-iframe tl-media-vine tl-media-shadow", this._el.content), this.media_id = this.data.url.split("vine.co/v/")[1], t = "https://vine.co/v/" + this.media_id + "/embed/simple", this._el.content_item.innerHTML = "<iframe frameborder='0' width='100%' height='100%' src='" + t + "'></iframe><script async src='https://platform.vine.co/static/scripts/embed.js' charset='utf-8'><\/script>", this.onLoaded()
            }
            _updateMediaDisplay() {
                var t = B({
                    w: this._el.content_item.offsetWidth,
                    h: this.options.height
                });
                this._el.content_item.style.height = t.h + "px"
            }
            _stopMedia() {
                this._el.content_item.querySelector("iframe").contentWindow.postMessage("pause", "*")
            }
        }
        class ki extends li {
            _loadMedia() {
                var t, e = this;
                if (this._el.content_item = this.domCreate("div", "tl-media-twitter", this._el.content), this._el.content_container.className = "tl-media-content-container tl-media-content-container-text", this.data.url.match("^(https?:)?/*(www.)?(twitter|x).com")) this.data.url.match("status/") ? this.media_id = this.data.url.split("status/")[1] : this.data.url.match("statuses/") ? this.media_id = this.data.url.split("statuses/")[1] : this.media_id = "";
                else if (this.data.url.match("<blockquote class=['\"]twitter-tweet['\"]")) {
                    var i = this.data.url.match(/(status|statuses)\/(\d+)/);
                    if (!(i && i.length > 2)) return void e.loadErrorDisplay(e._("twitterembed_invalidurl_err"));
                    this.media_id = i[2]
                }
                t = "https://api.twitter.com/1/statuses/oembed.json?id=" + this.media_id + "&omit_script=true&include_entities=true&callback=?", ut({
                    type: "GET",
                    url: t,
                    dataType: "json",
                    success: function(t) {
                        e.createMedia(t)
                    },
                    error: function(t, i) {
                        var a = "";
                        a += e._("twitter_load_err") + "<br/>" + e.media_id + "<br/>" + i, e.loadErrorDisplay(a)
                    }
                })
            }
            createMedia(t) {
                var e, i, a, s = "",
                    n = "",
                    o = "",
                    r = this;
                n = t.html.split("</p>&mdash;")[0] + "</p></blockquote>", e = t.author_url.split("twitter.com/")[1], i = (o = t.html.split("</p>&mdash;")[1].split('<a href="')[1]).split('">')[0], a = o.split('">')[1].split("</a>")[0], (n = n.replace(/<a href/gi, '<a target="_blank" rel="noopener" href')).includes("pic.twitter.com") || n.includes("pic.x.com") ? (di("https://platform.twitter.com/widgets.js", (function() {
                    twttr.widgets.createTweet(r.media_id, r._el.content_item, {
                        conversation: "none",
                        linkColor: "#cc0000",
                        theme: "light"
                    })
                })), this.onLoaded()) : (s += n, s += "<div class='vcard'>", s += "<a href='" + i + "' class='twitter-date' rel='noopener' target='_blank'>" + a + "</a>", s += "<img src='' class='tl-media-item tl-media-image'></a>", s += "<div class='author'>", s += "<a class='screen-name url' href='" + t.author_url + "' rel='noopener' target='_blank'>", s += "<span class='avatar'></span>", s += "<span class='fn'>" + t.author_name + " <span class='tl-icon-twitter'></span></span>", s += "<span class='nickname'>@" + e + "<span class='thumbnail-inline'></span></span>", s += "</a>", s += "</div>", s += "</div>", this._el.content_item.innerHTML = s, this.onLoaded())
            }
            updateMediaDisplay() {}
            _updateMediaDisplay() {}
        }
        class xi extends li {
            _loadMedia() {
                var t, e = this;
                this._el.content_item = this.domCreate("div", "tl-media-twitter", this._el.content), this._el.content_container.className = "tl-media-content-container tl-media-content-container-text";
                var i, a, s, n, o, r, l = this.data.url.match(/(status|statuses)\/(\d+)/);
                l && l.length > 2 ? (this.media_id = l[2], t = "https://api.twitter.com/1/statuses/oembed.json?id=" + this.media_id + "&omit_script=true&include_entities=true&callback=?", window.twttr = (a = "script", s = "twitter-wjs", o = (i = document).getElementsByTagName(a)[0], r = window.twttr || {}, i.getElementById(s) || ((n = i.createElement(a)).id = s, n.src = "https://platform.twitter.com/widgets.js", o.parentNode.insertBefore(n, o), r._e = [], r.ready = function(t) {
                    r._e.push(t)
                }), r), ut({
                    type: "GET",
                    url: t,
                    dataType: "json",
                    success(t) {
                        e.createMedia(t)
                    },
                    error: function(t, i) {
                        var a = "";
                        a += e._("twitter_load_err") + "<br/>" + e.media_id + "<br/>" + i, e.loadErrorDisplay(a)
                    }
                })) : e.loadErrorDisplay(e._("twitterembed_invalidurl_err"))
            }
            createMedia(t) {
                var e, i, a, s = "",
                    n = "",
                    o = "";
                n = t.html.split("</p>&mdash;")[0] + "</p></blockquote>", e = t.author_url.split("twitter.com/")[1], i = (o = t.html.split("</p>&mdash;")[1].split('<a href="')[1]).split('">')[0], a = o.split('">')[1].split("</a>")[0], n = n.replace(/<a href/gi, '<a target="_blank" rel="noopener" href');
                let r = this.media_id;
                n.includes("pic.twitter.com") ? (twttr.ready((function(t) {
                    s = document.getElementsByClassName("tl-media-twitter")[0];
                    var e = String(r);
                    twttr.widgets.createTweet(e, s, {
                        conversation: "none",
                        linkColor: "#cc0000",
                        theme: "light"
                    }).then((function(t) {
                        this.onLoaded()
                    }))
                })), this._el.content_item.innerHTML = s, this.onLoaded()) : (s += n, s += "<div class='vcard'>", s += "<a href='" + i + "' class='twitter-date' rel='noopener' target='_blank'>" + a + "</a>", s += "<div class='author'>", s += "<a class='screen-name url' href='" + t.author_url + "' rel='noopener' target='_blank'>", s += "<span class='avatar'></span>", s += "<span class='fn'>" + t.author_name + " <span class='tl-icon-twitter'></span></span>", s += "<span class='nickname'>@" + e + "<span class='thumbnail-inline'></span></span>", s += "</a>", s += "</div>", s += "</div>", this._el.content_item.innerHTML = s, this.onLoaded())
            }
            updateMediaDisplay() {}
            _updateMediaDisplay() {}
        }
        class Ti extends li {
            _loadMedia() {
                var t, e = this;
                try {
                    this.establishMediaID(), t = "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=" + this.options.api_key_flickr + "&photo_id=" + this.media_id + "&format=json&jsoncallback=?", ct(t, (function(t) {
                        "ok" == t.stat ? (e.sizes = t.sizes.size, e.options.background || e.createMedia(), e.onLoaded()) : e.loadErrorDisplay(e._("flickr_notfound_err"))
                    }))
                } catch (t) {
                    e.loadErrorDisplay(e._(t.message_key))
                }
            }
            establishMediaID() {
                if (this.data.url.match(/flic.kr\/.+/i)) {
                    var t = this.data.url.split("/").slice(-1)[0];
                    this.media_id = G.decode(t)
                } else {
                    var e = this.data.url.indexOf("flickr.com/photos/");
                    if (-1 == e) throw new x("flickr_invalidurl_err");
                    var i = e + 18;
                    this.media_id = this.data.url.substr(i).split("/")[1]
                }
            }
            createMedia() {
                var t = this;
                this._el.content_link = this.domCreate("a", "", this._el.content), this._el.content_link.href = this.data.url, this._el.content_link.target = "_blank", this._el.content_link.setAttribute("rel", "noopener"), this._el.content_item = this.domCreate("img", "tl-media-item tl-media-image tl-media-flickr tl-media-shadow", this._el.content_link), this.data.alt ? this._el.content_item.alt = this.data.alt : this.data.caption && (this._el.content_item.alt = q(this.data.caption)), this.data.title ? this._el.content_item.title = this.data.title : this.data.caption && (this._el.content_item.title = q(this.data.caption)), this._el.content_item.addEventListener("load", (function(e) {
                    t.onMediaLoaded()
                })), this._el.content_item.src = this.getImageURL(this.options.width, this.options.height)
            }
            getImageURL(t, e) {
                for (var i = this.size_label(e), a = this.sizes[this.sizes.length - 2].source, s = 0; s < this.sizes.length; s++) this.sizes[s].label == i && (a = this.sizes[s].source);
                return a
            }
            _getMeta() {
                var t, e = this;
                t = "https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=" + this.options.api_key_flickr + "&photo_id=" + this.media_id + "&format=json&jsoncallback=?", ct(t, (function(t) {
                    e.data.credit_alternate = "<a href='" + e.data.url + "' target='_blank' rel='noopener'>" + t.photo.owner.realname + "</a>", e.data.caption_alternate = t.photo.title._content + " " + t.photo.description._content, e.updateMeta()
                }))
            }
            size_label(t) {
                return t <= 75 ? t <= 0 ? "Large" : "Thumbnail" : t <= 180 ? "Small" : t <= 240 ? "Small 320" : t <= 375 ? "Medium" : t <= 480 ? "Medium 640" : "Large"
            }
        }
        class Mi extends li {
            _loadMedia() {
                var t = this;
                this._el.content_item = this.domCreate("div", "tl-media-item tl-media-documentcloud tl-media-shadow", this._el.content), this._el.content_item.id = z(7), this.data.url.match(/\.html$/) ? this.data.url = this._transformURL(this.data.url) : this.data.url.match(/.(json|js)$/) || D("DOCUMENT CLOUD IN URL BUT INVALID SUFFIX"), di(["https://assets.documentcloud.org/viewer/loader.js", "https://assets.documentcloud.org/viewer/viewer.js"], (function() {
                    t.createMedia()
                }))
            }
            _transformURL(t) {
                return t.replace(/(.*)\.html$/, "$1.js")
            }
            _updateMediaDisplay() {
                this._el.content_item.style.height = this.options.height + "px"
            }
            createMedia() {
                DV.load(this.data.url, {
                    container: "#" + this._el.content_item.id,
                    showSidebar: !1
                }), this.onLoaded()
            }
        }
        const Ei = "https://graph.facebook.com/v8.0/instagram_oembed?access_token=704270473831239|830b21071290df4f81a35c56abbea096&fields=html,thumbnail_url,author_name&url=";

        function Li(t) {
            this.oembed_response = t, this._el.content_link = this.domCreate("a", "", this._el.content), this._el.content_link.href = this.data.url, this._el.content_link.target = "_blank", this._el.content_link.setAttribute("rel", "noopener"), this._el.content_item = this.domCreate("img", "tl-media-item tl-media-image tl-media-instagram tl-media-shadow", this._el.content_link), this.data.alt ? this._el.content_item.alt = this.data.alt : this.data.caption && (this._el.content_item.alt = q(this.data.caption)), this.data.title ? this._el.content_item.title = this.data.title : this.data.caption && (this._el.content_item.title = q(this.data.caption)), this._el.content_item.addEventListener("load", function(t) {
                this.onMediaLoaded()
            }.bind(this)), this._el.content_item.src = t.thumbnail_url, this.onLoaded()
        }

        function Si(t) {
            let e = `${t.statusText} [${t.status}]`;
            400 == t.status && (e = this._("instagram_bad_request")), this.loadErrorDisplay(e)
        }
        class Di extends li {
            _loadMedia() {
                this.media_id = this.data.url.split("/p/")[1].split("/")[0], this.options.background || this.createMedia()
            }
            createMedia() {
                this.oembed_response = null;
                let t = `${Ei}${this.data.url}`;
                try {
                    ut({
                        url: t,
                        dataType: "json",
                        success: Li,
                        error: Si,
                        context: this
                    })
                } catch (e) {
                    console.log(`Instagram: error fetching ${t}`), console.log(e)
                }
            }
            getImageURL() {
                if (this.oembed_response && this.oembed_response.thumbnail_url) return this.oembed_response.thumbnail_url;
                mt(`${Ei}${this.data.url}`).then((t => t.thumbnail_url)).catch((t => {
                    D(`Instagram getImageURL Error: ${t.status} ${t.statusText}`)
                }))
            }
            _getMeta() {
                this.oembed_response && this.oembed_response.author_name && (this.data.credit_alternate = `Instagram: <a href="https://instagram.com/${this.oembed_response.author_name}" target="_blank">@${this.oembed_response.author_name}</a>`), this.updateMeta()
            }
            sizes(t) {
                return t <= 150 ? "t" : t <= 306 ? "m" : "l"
            }
        }
        class Ni extends li {
            _loadMedia() {
                this._el.content_item = this.domCreate("img", "tl-media-item tl-media-image tl-media-profile tl-media-shadow", this._el.content), this._el.content_item.src = this.data.url, this.onLoaded()
            }
            _updateMediaDisplay(t) {
                m && (this._el.content_item.style.maxWidth = this.options.width / 2 - 40 + "px")
            }
        }
        class Ai extends li {
            _loadMedia() {
                var t;
                this._el.content_item = this.domCreate("div", "tl-media-item tl-media-iframe", this._el.content), t = this.data.url.match(/open\?id=([^&]+)/) ? "https://drive.google.com/file/d/" + this.data.url.match(/open\?id=([^&]+)/)[1] + "/preview" : this.data.url.match(/file\/d\/([^/]*)\/?/) ? "https://drive.google.com/file/d/" + this.data.url.match(/file\/d\/([^/]*)\/?/)[1] + "/preview" : this.data.url, this._el.content_item.innerHTML = "<iframe class='doc' frameborder='0' width='100%' height='100%' src='" + t + "'></iframe>", this.onLoaded()
            }
            _updateMediaDisplay() {
                this._el.content_item.style.height = this.options.height + "px"
            }
        }
        class Ii extends li {
            _loadMedia() {
                var t, e;
                this._el.content_item = this.domCreate("div", "tl-media-item tl-media-iframe tl-media-spotify", this._el.content), this.media_id = (e = this.data.url).match(/^spotify:/) ? e : `spotify${(e=new URL(e)).pathname.replace(/\/$/,"").replace(/\//g,":")}`, this.media_id ? (t = "https://embed.spotify.com/?uri=" + this.media_id + "&theme=white&view=coverart", this.player = this.domCreate("iframe", "tl-media-shadow", this._el.content_item), this.player.width = "100%", this.player.height = "100%", this.player.frameBorder = "0", this.player.src = t, this.onLoaded()) : this.loadErrorDisplay(this._("spotify_invalid_url"))
            }
            _updateMediaDisplay(t) {
                var e = this.options.height,
                    i = 0,
                    a = 0;
                e = h ? this.options.height / 2 : this.options.height - this.options.credit_height - this.options.caption_height - 30, this._el.content_item.style.maxHeight = "none", D(e), D(this.options.width), e > this.options.width ? (D("height is greater"), i = this.options.width + 80 + "px", a = this.options.width + "px") : (D("width is greater"), D(this.options.width), i = e + "px", a = e - 80 + "px"), this.player.style.width = a, this.player.style.height = i, this._el.credit && (this._el.credit.style.width = a), this._el.caption && (this._el.caption.style.width = a)
            }
            _stopMedia() {}
        }
        class Ci extends li {
            constructor(t, e, i) {
                super(t, e, i), this.iframe = qe.sanitize(this.data.url, {
                    ADD_TAGS: ["iframe"],
                    ADD_ATTR: ["frameborder"]
                })
            }
            _loadMedia() {
                this._el.content_item = this.domCreate("div", "tl-media-item tl-media-iframe", this._el.content), this._el.content_item.innerHTML = this.iframe, this.onLoaded()
            }
            _updateMediaDisplay() {
                this._el.content_item.style.height = this.options.height + "px"
            }
        }
        class Oi extends li {
            _loadMedia() {
                try {
                    var t = this;
                    if (this.data.url.match("<blockquote class=['\"]imgur-embed-pub['\"]")) {
                        var e = this.data.url.match(/(imgur\.com)\/(\w+)/);
                        this.media_id = e[2], this.data.url = "http://imgur.com/gallery/" + this.media_id
                    } else this.data.url && (this.media_id = this.data.url.split("/").slice(-1)[0]);
                    di(["https://s.imgur.com/min/embed.js"], (function() {
                        t.createMedia()
                    }))
                } catch (t) {
                    this.loadErrorDisplay(this._("imgur_invalidurl_err"))
                }
            }
            createMedia() {
                var t = this,
                    e = "https://api.imgur.com/oembed.json?url=" + this.data.url;
                this._el.content_item = this.domCreate("div", "tl-media-item tl-media-image tl-media-imgur", this._el.content), ut({
                    type: "GET",
                    url: e,
                    dataType: "json",
                    success: function(e) {
                        try {
                            t._el.content_item.innerHTML = e.html, setInterval((function() {
                                null == document.querySelector("blockquote.imgur-embed-pub") ? clearInterval() : (imgurEmbed.createIframe(), document.getElementById("imageElement").removeAttribute("style"), document.getElementById("image").removeAttribute("style"))
                            }), 2e3)
                        } catch (t) {
                            D("Error processing imgur ajax response")
                        }
                    },
                    error: function(e, i, a) {
                        "parsererror" == i ? t.loadErrorDisplay(t._("imgur_invalidurl_err")) : t.loadErrorDisplay(t._("unknown_read_err", i))
                    }
                }), this.onLoaded()
            }
            _updateMediaDisplay() {
                this._el.content_item.style.width = this.options.width + "px", this._el.content_item.style.height = W({
                    w: this.options.width
                }) + "px"
            }
        }
        class Ri extends li {
            _loadMedia() {
                var t = U(this.data.url);
                this._el.content_item = this.domCreate("div", "tl-media-item tl-media-iframe", this._el.content);
                var e;
                e = o || _ || t.match(/dl.dropboxusercontent.com/) ? "<iframe class='doc' frameborder='0' width='100%' height='100%' src='//docs.google.com/viewer?url=" + t + "&amp;embedded=true'></iframe>" : "<iframe class='doc' frameborder='0' width='100%' height='100%' src='" + t + "'></iframe>", this._el.content_item.innerHTML = e, this.onLoaded()
            }
            _updateMediaDisplay() {
                this._el.content_item.style.height = this.options.height + "px"
            }
        }
        class ji extends li {
            _loadMedia() {
                this.loadingMessage(), this.options.background || this.createMedia(), this.onLoaded()
            }
            createMedia() {
                var t = U(this.data.url),
                    e = this;
                this._el.content_item = this.domCreate("audio", "tl-media-item tl-media-audio tl-media-shadow", this._el.content), this._el.content_item.controls = !0, this._el.source_item = this.domCreate("source", "", this._el.content_item), this._el.content_item.addEventListener("load", (function(t) {
                    e.onMediaLoaded()
                })), this._el.source_item.src = t, this._el.source_item.type = this._getType(this.data.url, this.data.mediatype.match_str), this._el.content_item.innerHTML += "Your browser doesn't support HTML5 audio with " + this._el.source_item.type, this.player_element = this._el.content_item
            }
            _updateMediaDisplay(t) {
                m && (this._el.content_item.style.width = "auto")
            }
            _stopMedia() {
                this.player_element && this.player_element.pause()
            }
            _getType(t, e) {
                var i = "audio/";
                switch (t.match(e)[1]) {
                    case "mp3":
                        i += "mpeg";
                        break;
                    case "wav":
                        i += "wav";
                        break;
                    case "m4a":
                        i += "mp4";
                        break;
                    default:
                        i = "audio"
                }
                return i
            }
        }
        class zi extends li {
            _loadMedia() {
                this.loadingMessage(), this.options.background || this.createMedia(), this.onLoaded()
            }
            createMedia() {
                var t = U(this.data.url),
                    e = this;
                this._el.content_item = this.domCreate("video", "tl-media-item tl-media-video tl-media-shadow", this._el.content), this._el.content_item.controls = !0, this._el.source_item = this.domCreate("source", "", this._el.content_item), this._el.content_item.addEventListener("load", (function(t) {
                    e.onMediaLoaded()
                })), this._el.source_item.src = t, this._el.source_item.type = this._getType(this.data.url, this.data.mediatype.match_str), this._el.content_item.innerHTML += "Your browser doesn't support HTML5 video with " + this._el.source_item.type, this.player_element = this._el.content_item
            }
            _updateMediaDisplay(t) {
                m && (this._el.content_item.style.width = "auto")
            }
            _stopMedia() {
                this.player_element && this.player_element.pause()
            }
            _getType(t, e) {
                var i = "video/";
                switch (t.match(e)[1]) {
                    case "mp4":
                        i += "mp4";
                        break;
                    case "webm":
                        i += "webm";
                        break;
                    default:
                        i = "video"
                }
                return i
            }
        }
        class Pi extends li {
            _loadMedia() {
                var t, e = this;
                this._el.content_item = this.domCreate("div", "tl-media-item tl-media-iframe tl-media-wistia tl-media-shadow", this._el.content), this.media_id = this.data.url.split(/https?:\/\/(.+)?(wistia\.com|wi\.st)\/medias\/(.*)/)[3], D(`Wistia: media_id: ${this.media_id}`), t = "https://fast.wistia.com/embed/iframe/" + this.media_id + "?version=v1&controlsVisibleOnLoad=true&playerColor=aae3d8", this.player = this.domCreate("iframe", "", this._el.content_item), this.player.addEventListener("load", (function(t) {
                    e.onMediaLoaded()
                })), this.player.width = "100%", this.player.height = "100%", this.player.frameBorder = "0", this.player.src = t, this.player.setAttribute("allowfullscreen", ""), this.player.setAttribute("webkitallowfullscreen", ""), this.player.setAttribute("mozallowfullscreen", ""), this.onLoaded()
            }
            _updateMediaDisplay() {
                this._el.content_item.style.height = W({
                    w: this._el.content_item.offsetWidth
                }) + "px"
            }
            _stopMedia() {
                try {
                    this.player.contentWindow.postMessage(JSON.stringify({
                        method: "pause"
                    }), "https://player.vimeo.com")
                } catch (t) {
                    D(t)
                }
            }
        }

        function Hi(t, e) {
            var i = [{
                type: "youtube",
                name: "YouTube",
                match_str: "^(https?:)?/*(www.|m.)?youtube|youtu.be",
                cls: mi
            }, {
                type: "vimeo",
                name: "Vimeo",
                match_str: "^(https?:)?/*(player.)?vimeo.com",
                cls: yi
            }, {
                type: "dailymotion",
                name: "DailyMotion",
                match_str: "^(https?:)?/*(www.)?(dailymotion.com|dai.ly)",
                cls: bi
            }, {
                type: "vine",
                name: "Vine",
                match_str: "^(https?:)?/*(www.)?vine.co",
                cls: wi
            }, {
                type: "soundcloud",
                name: "SoundCloud",
                match_str: "^(https?:)?/*(player.)?soundcloud.com",
                cls: vi
            }, {
                type: "twitter",
                name: "Twitter",
                match_str: "^(https?:)?/*(www.)?(twitter|x).com",
                cls: ki
            }, {
                type: "twitterembed",
                name: "TwitterEmbed",
                match_str: "<blockquote class=['\"]twitter-tweet['\"]",
                cls: xi
            }, {
                type: "googlemaps",
                name: "Google Map",
                match_str: /google.+?\/maps\/@([-\d.]+),([-\d.]+),((?:[-\d.]+[zmayht],?)*)|google.+?\/maps\/search\/([\w\W]+)\/@([-\d.]+),([-\d.]+),((?:[-\d.]+[zmayht],?)*)|google.+?\/maps\/place\/([\w\W]+)\/@([-\d.]+),([-\d.]+),((?:[-\d.]+[zmayht],?)*)|google.+?\/maps\/dir\/([\w\W]+)\/([\w\W]+)\/@([-\d.]+),([-\d.]+),((?:[-\d.]+[zmayht],?)*)/,
                cls: _i
            }, {
                type: "flickr",
                name: "Flickr",
                match_str: "^(https?:)?/*(www.)?flickr.com/photos",
                cls: Ti
            }, {
                type: "flickr",
                name: "Flickr",
                match_str: "^(https?://)?flic.kr/.*",
                cls: Ti
            }, {
                type: "instagram",
                name: "Instagram",
                match_str: /^(https?:)?\/*(www.)?(instagr.am|^(https?:)?\/*(www.)?instagram.com)\/p\//,
                cls: Di
            }, {
                type: "profile",
                name: "Profile",
                match_str: /^(https?:)?\/*(www.)?instagr.am\/[a-zA-Z0-9]{2,}|^(https?:)?\/*(www.)?instagram.com\/[a-zA-Z0-9]{2,}/,
                cls: Ni
            }, {
                type: "documentcloud",
                name: "Document Cloud",
                match_str: /documentcloud.org\//,
                cls: Mi
            }, {
                type: "wikipedia-image",
                name: "WikipediaImage",
                match_str: "^https://.+.wiki[mp]edia.org.+#/media/.+.(jpg|jpeg|png|gif|svg|webp)",
                cls: gi
            }, {
                type: "wikipedia-image",
                name: "WikipediaImage",
                match_str: "^https://commons.wikimedia.org/wiki/File:.+.(jpg|jpeg|png|gif|svg|webp)",
                cls: gi
            }, {
                type: "wikipedia",
                name: "Wikipedia",
                match_str: "^(https?:)?/.+.wikipedia.org",
                cls: fi
            }, {
                type: "image",
                name: "Image",
                match_str: /(jpg|jpeg|png|gif|svg|webp)(\?.*)?$/i,
                cls: hi
            }, {
                type: "imgur",
                name: "Imgur",
                match_str: /^.*imgur.com\/.+$|<blockquote class=['\"]imgur-embed-pub['\"]/i,
                cls: Oi
            }, {
                type: "googledocs",
                name: "Google Doc",
                match_str: "^(https?:)?/*[^.]*.google.com/[^/]*/d/[^/]*/[^/]*?usp=shar.*|^(https?:)?/*drive.google.com/open?id=[^&]*&authuser=0|^(https?:)?//*drive.google.com/open\\?id=[^&]*|^(https?:)?/*[^.]*.googledrive.com/host/[^/]*/",
                cls: Ai
            }, {
                type: "pdf",
                name: "PDF",
                match_str: /^.*\.pdf(\?.*)?(\#.*)?/,
                cls: Ri
            }, {
                type: "spotify",
                name: "spotify",
                match_str: "spotify",
                cls: Ii
            }, {
                type: "iframe",
                name: "iFrame",
                match_str: "iframe",
                cls: Ci
            }, {
                type: "blockquote",
                name: "Quote",
                match_str: "blockquote",
                cls: pi
            }, {
                type: "video",
                name: "Video",
                match_str: /(mp4|webm)(\?.*)?$/i,
                cls: zi
            }, {
                type: "wistia",
                name: "Wistia",
                match_str: /https?:\/\/(.+)?(wistia\.com|wi\.st)\/.*/i,
                cls: Pi
            }, {
                type: "audio",
                name: "Audio",
                match_str: /(mp3|wav|m4a)(\?.*)?$/i,
                cls: ji
            }, {
                type: "imageblank",
                name: "Imageblank",
                match_str: "",
                cls: hi
            }];
            if (e) {
                if (t instanceof Array) return !1;
                for (var a = 0; a < i.length; a++) switch (i[a].type) {
                    case "flickr":
                    case "image":
                    case "instagram":
                        if (t.url.match(i[a].match_str)) return i[a]
                }
            } else
                for (a = 0; a < i.length; a++)
                    if (t.url.match(i[a].match_str)) return i[a];
            return !1
        }
        class Fi {
            constructor(t, e) {
                this._el = {
                    container: {},
                    content_container: {},
                    media_container: {},
                    timespan: {},
                    line_left: {},
                    line_right: {},
                    content: {},
                    text: {},
                    media: {}
                }, this._text = {}, this._state = {
                    loaded: !1
                }, this.data = {
                    unique_id: "",
                    background: null,
                    date: {
                        year: 0,
                        month: 0,
                        day: 0,
                        hour: 0,
                        minute: 0,
                        second: 0,
                        millisecond: 0,
                        thumbnail: "",
                        format: ""
                    },
                    text: {
                        headline: "",
                        text: ""
                    },
                    media: null
                }, this.options = {
                    duration: 1e3,
                    ease: Q,
                    width: 600,
                    height: 600,
                    marker_width_min: 100
                }, this.active = !1, this.animator = {}, this.has_end_date = !1, this.ariaLabel = "", E(this.options, e), E(this.data, t), this._initLayout(), this._initEvents()
            }
            show() {}
            hide() {}
            setActive(t) {
                this.active = t, this.active && this.has_end_date ? this._el.container.className = "tl-timemarker tl-timemarker-with-end tl-timemarker-active" : this.active ? this._el.container.className = "tl-timemarker tl-timemarker-active" : this.has_end_date ? this._el.container.className = "tl-timemarker tl-timemarker-with-end" : this._el.container.className = "tl-timemarker", this._el.container.ariaLabel = this.ariaLabel, this.active ? this._el.container.ariaLabel += ", shown" : this._el.container.ariaLabel += ", press space to show"
            }
            setFocus(t = {
                preventScroll: !0
            }) {
                this._el.container.focus(t)
            }
            addTo(t) {
                t.appendChild(this._el.container)
            }
            removeFrom(t) {
                t.removeChild(this._el.container)
            }
            updateDisplay(t, e) {
                this._updateDisplay(t, e)
            }
            loadMedia() {
                this._media && !this._state.loaded && (this._media.loadMedia(), this._state.loaded = !0)
            }
            stopMedia() {
                this._media && this._state.loaded && this._media.stopMedia()
            }
            getLeft() {
                return this._el.container.style.left.slice(0, -2)
            }
            getTime() {
                return this.data.start_date.getTime()
            }
            getEndTime() {
                return !!this.data.end_date && this.data.end_date.getTime()
            }
            setHeight(t) {
                var e = 1;
                this._el.content_container.style.height = t + "px", this._el.timespan_content.style.height = t + "px", this._el.content.className = t <= 30 ? "tl-timemarker-content tl-timemarker-content-small" : "tl-timemarker-content", t <= 56 ? this._el.content_container.classList.add("tl-timemarker-content-container-small") : this._el.content_container.classList.remove("tl-timemarker-content-container-small"), r ? ((e = Math.floor(t / 14)) < 1 && (e = 1), this._text.className = "tl-headline", this._text.style.webkitLineClamp = e) : (e = t / 12, this._text.className = e > 1 ? "tl-headline tl-headline-fadeout" : "tl-headline", this._text.style.height = 12 * e + "px")
            }
            setWidth(t) {
                this.data.end_date && (this._el.container.style.width = t + "px", t > this.options.marker_width_min ? (this._el.content_container.style.width = t + "px", this._el.content_container.className = "tl-timemarker-content-container tl-timemarker-content-container-long") : (this._el.content_container.style.width = this.options.marker_width_min + "px", this._el.content_container.className = "tl-timemarker-content-container"))
            }
            setClass(t) {
                this._el.container.className = t
            }
            setRowPosition(t, e) {
                this.setPosition({
                    top: t
                }), this._el.timespan.style.height = e + "px"
            }
            getFormattedDate() {
                if (O(this.data.display_date).length > 0) return this.data.display_date;
                let t = "";
                return this.data.end_date && (t = " to " + this.data.end_date.getDisplayDate(this.getLanguage())), this.data.start_date && (t = (t ? "from " : "") + this.data.start_date.getDisplayDate(this.getLanguage()) + t), t
            }
            _onMarkerClick(t) {
                this.fire("markerclick", {
                    unique_id: this.data.unique_id
                })
            }
            _onMarkerKeydown(t) {
                /Space|Enter/.test(t.code) && this.fire("markerclick", {
                    unique_id: this.data.unique_id
                })
            }
            _onMarkerBlur(t) {
                this.fire("markerblur", {
                    unique_id: this.data.unique_id
                })
            }
            _initLayout() {
                if (this._el.container = v("div", "tl-timemarker"), this._el.container.setAttribute("tabindex", "-1"), this.data.unique_id && (this._el.container.id = this.data.unique_id + "-marker"), this.data.end_date && (this.has_end_date = !0, this._el.container.className = "tl-timemarker tl-timemarker-with-end"), this._el.timespan = v("div", "tl-timemarker-timespan", this._el.container), this._el.timespan_content = v("div", "tl-timemarker-timespan-content", this._el.timespan), this._el.content_container = v("div", "tl-timemarker-content-container", this._el.container), this._el.content = v("div", "tl-timemarker-content", this._el.content_container), this._el.line_left = v("div", "tl-timemarker-line-left", this._el.timespan), this._el.line_right = v("div", "tl-timemarker-line-right", this._el.timespan), this.data.media) {
                    this._el.media_container = v("div", "tl-timemarker-media-container", this._el.content);
                    var t = {
                            url: this.data.media.thumbnail
                        },
                        e = this.data.media.thumbnail ? Hi(t, !0) : null;
                    if (e) {
                        var i = new e.cls(t);
                        i.on("loaded", function() {
                            this._el.media = v("img", "tl-timemarker-media", this._el.media_container), this._el.media.src = i.getImageURL()
                        }.bind(this)), i.loadMedia()
                    } else {
                        var a = Hi(this.data.media).type;
                        this._el.media = v("span", "tl-icon-" + a, this._el.media_container)
                    }
                }
                this._el.text = v("div", "tl-timemarker-text", this._el.content), this._text = v("h2", "tl-headline", this._el.text), this.data.text.headline && "" != this.data.text.headline ? this._text.innerHTML = F(this.data.text.headline) : this.data.text.text && "" != this.data.text.text ? this._text.innerHTML = F(this.data.text.text) : this.data.media && this.data.media.caption && "" != this.data.media.caption && (this._text.innerHTML = F(this.data.media.caption));
                const s = this.getFormattedDate();
                this.ariaLabel = `${this._text.innerHTML}, ${s}`, this.onLoaded()
            }
            _initEvents() {
                ht.addListener(this._el.container, "click", this._onMarkerClick, this), ht.addListener(this._el.container, "keydown", this._onMarkerKeydown, this), ht.addListener(this._el.container, "blur", this._onMarkerBlur, this)
            }
            _updateDisplay(t, e, i) {
                t && (this.options.width = t), e && (this.options.height = e)
            }
        }
        R(Fi, Rt, at, ot);
        class qi {
            constructor(t, e, i) {
                this._el = {
                    drag: t,
                    move: t
                }, this.mousedrag = {
                    down: "mousedown",
                    up: "mouseup",
                    leave: "mouseleave",
                    move: "mousemove"
                }, this.touchdrag = {
                    down: "touchstart",
                    up: "touchend",
                    leave: "mouseleave",
                    move: "touchmove"
                }, e && (this._el.move = e), this.options = {
                    snap: !1,
                    enable: {
                        x: !0,
                        y: !0
                    },
                    constraint: {
                        top: !1,
                        bottom: !1,
                        left: 0,
                        right: !1
                    },
                    momentum_multiplier: 2e3,
                    duration: 1e3,
                    ease: et
                }, this.animator = null, this.dragevent = this.mousedrag, f && (this.dragevent = this.touchdrag), this.data = {
                    sliding: !1,
                    direction: "none",
                    pagex: {
                        start: 0,
                        end: 0
                    },
                    pagey: {
                        start: 0,
                        end: 0
                    },
                    pos: {
                        start: {
                            x: 0,
                            y: 0
                        },
                        end: {
                            x: 0,
                            y: 0
                        }
                    },
                    new_pos: {
                        x: 0,
                        y: 0
                    },
                    new_pos_parent: {
                        x: 0,
                        y: 0
                    },
                    time: {
                        start: 0,
                        end: 0
                    },
                    touch: !1
                }, E(this.options, i)
            }
            enable(t) {
                ht.addListener(this._el.drag, this.dragevent.down, this._onDragStart, this), ht.addListener(this._el.drag, this.dragevent.up, this._onDragEnd, this), this.data.pos.start = 0, this._el.move.style.left = this.data.pos.start.x + "px", this._el.move.style.top = this.data.pos.start.y + "px", this._el.move.style.position = "absolute"
            }
            disable() {
                ht.removeListener(this._el.drag, this.dragevent.down, this._onDragStart, this), ht.removeListener(this._el.drag, this.dragevent.up, this._onDragEnd, this)
            }
            stopMomentum() {
                this.animator && this.animator.stop()
            }
            updateConstraint(t) {
                this.options.constraint = t
            }
            _onDragStart(t) {
                this.animator && this.animator.stop(), f ? t.originalEvent ? (this.data.pagex.start = t.originalEvent.touches[0].screenX, this.data.pagey.start = t.originalEvent.touches[0].screenY) : (this.data.pagex.start = t.targetTouches[0].screenX, this.data.pagey.start = t.targetTouches[0].screenY) : (this.data.pagex.start = t.pageX, this.data.pagey.start = t.pageY), this.options.enable.x, this.options.enable.y, this.data.pos.start = {
                    x: this._el.move.offsetLeft,
                    y: this._el.move.offsetTop
                }, this.data.time.start = (new Date).getTime(), this.fire("dragstart", this.data), ht.addListener(this._el.drag, this.dragevent.move, this._onDragMove, this), ht.addListener(this._el.drag, this.dragevent.leave, this._onDragEnd, this)
            }
            _onDragEnd(t) {
                this.data.sliding = !1, ht.removeListener(this._el.drag, this.dragevent.move, this._onDragMove, this), ht.removeListener(this._el.drag, this.dragevent.leave, this._onDragEnd, this), this.fire("dragend", this.data), this._momentum()
            }
            _onDragMove(t) {
                var e = {
                    x: 0,
                    y: 0
                };
                this.data.sliding = !0, f ? t.originalEvent ? (this.data.pagex.end = t.originalEvent.touches[0].screenX, this.data.pagey.end = t.originalEvent.touches[0].screenY) : (this.data.pagex.end = t.targetTouches[0].screenX, this.data.pagey.end = t.targetTouches[0].screenY) : (this.data.pagex.end = t.pageX, this.data.pagey.end = t.pageY), e.x = this.data.pagex.start - this.data.pagex.end, e.y = this.data.pagey.start - this.data.pagey.end, this.data.pos.end = {
                    x: this._el.drag.offsetLeft,
                    y: this._el.drag.offsetTop
                }, this.data.new_pos.x = -(e.x - this.data.pos.start.x), this.data.new_pos.y = -(e.y - this.data.pos.start.y), this.options.enable.x && Math.abs(e.x) > Math.abs(e.y) && (t.preventDefault(), this._el.move.style.left = this.data.new_pos.x + "px"), this.options.enable.y && Math.abs(e.y) > Math.abs(e.y) && (t.preventDefault(), this._el.move.style.top = this.data.new_pos.y + "px"), this.fire("dragmove", this.data)
            }
            _momentum() {
                var t = {
                        x: 0,
                        y: 0,
                        time: 0
                    },
                    e = {
                        x: 0,
                        y: 0,
                        time: 0
                    },
                    i = {
                        x: !1,
                        y: !1
                    },
                    a = !1;
                this.data.direction = null, t.time = 10 * ((new Date).getTime() - this.data.time.start), e.time = 10 * ((new Date).getTime() - this.data.time.start), e.x = this.options.momentum_multiplier * (Math.abs(this.data.pagex.end) - Math.abs(this.data.pagex.start)), e.y = this.options.momentum_multiplier * (Math.abs(this.data.pagey.end) - Math.abs(this.data.pagey.start)), t.x = Math.round(e.x / e.time), t.y = Math.round(e.y / e.time), this.data.new_pos.x = Math.min(this.data.new_pos.x + t.x), this.data.new_pos.y = Math.min(this.data.new_pos.y + t.y), this.options.enable.x ? this.options.constraint.left && this.data.new_pos.x > this.options.constraint.left && (this.data.new_pos.x = this.options.constraint.left) : this.data.new_pos.x = this.data.pos.start.x, this.options.enable.y ? this.data.new_pos.y < 0 && (this.data.new_pos.y = 0) : this.data.new_pos.y = this.data.pos.start.y, e.time < 2e3 && (a = !0), this.options.enable.x && this.options.enable.y ? Math.abs(e.x) > Math.abs(e.y) ? i.x = !0 : i.y = !0 : this.options.enable.x ? Math.abs(e.x) > Math.abs(e.y) && (i.x = !0) : Math.abs(e.y) > Math.abs(e.x) && (i.y = !0), i.x && (Math.abs(e.x) > this._el.drag.offsetWidth / 2 && (a = !0), Math.abs(e.x) > 1e4 && (this.data.direction = "left", e.x > 0 && (this.data.direction = "right"))), i.y && (Math.abs(e.y) > this._el.drag.offsetHeight / 2 && (a = !0), Math.abs(e.y) > 1e4 && (this.data.direction = "up", e.y > 0 && (this.data.direction = "down"))), e.time < 1e3 || this._animateMomentum(), a && this.data.direction ? this.fire("swipe_" + this.data.direction, this.data) : this.data.direction ? this.fire("swipe_nodirection", this.data) : this.options.snap && (this.animator.stop(), this.animator = st(this._el.move, {
                    top: this.data.pos.start.y,
                    left: this.data.pos.start.x,
                    duration: this.options.duration,
                    easing: tt
                }))
            }
            _animateMomentum() {
                var t = {
                        x: this.data.new_pos.x,
                        y: this.data.new_pos.y
                    },
                    e = {
                        duration: this.options.duration,
                        easing: tt
                    };
                this.options.enable.y && ((this.options.constraint.top || this.options.constraint.bottom) && (t.y > this.options.constraint.bottom ? t.y = this.options.constraint.bottom : t.y < this.options.constraint.top && (t.y = this.options.constraint.top)), e.top = Math.floor(t.y) + "px"), this.options.enable.x && (this.options.constraint.left && t.x >= this.options.constraint.left && (t.x = this.options.constraint.left), this.options.constraint.right && t.x < this.options.constraint.right && (t.x = this.options.constraint.right), e.left = Math.floor(t.x) + "px"), this.animator = st(this._el.move, e), this.fire("momentum", this.data)
            }
        }
        R(qi, at);
        class $i {
            constructor(t, e, i, a) {
                this.language = a, this._el = {
                    parent: {},
                    container: {},
                    slider: {},
                    slider_background: {},
                    line: {},
                    marker_container_mask: {},
                    marker_container: {},
                    marker_item_container: {},
                    timeaxis: {},
                    timeaxis_background: {}
                }, this.collapsed = !1, this._el.container = "object" == typeof t ? t : g(t), this._el.container.setAttribute("tabindex", "0"), this._el.container.setAttribute("role", "application"), this._el.container.setAttribute("aria-label", this._("aria_label_timeline_navigation")), this._el.container.setAttribute("aria-description", 'Navigate between markers with arrow keys. Press "Home" for the first and "End" for the last markers'), this.config = e, this.options = {
                    width: 600,
                    height: 600,
                    duration: 1e3,
                    ease: et,
                    has_groups: !1,
                    optimal_tick_width: 50,
                    scale_factor: 2,
                    marker_padding: 5,
                    timenav_height_min: 150,
                    marker_height_min: 30,
                    marker_width_min: 100,
                    zoom_sequence: [.5, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
                }, this.animator = null, this.ready = !1, this._markers = [], this._eras = [], this.has_eras = !1, this._groups = [], this._calculated_row_height = 100, this.current_id = "", this.current_focused_id = "", this.timescale = {}, this.timeaxis = {}, this.max_rows = 6, this.animate_css = !1, this._swipable, E(this.options, i)
            }
            init() {
                this._initLayout(), this._initEvents(), this._initData(), this.updateDisplay(), this._onLoaded()
            }
            positionMarkers(t) {
                for (var e = 0; e < this._markers.length; e++) {
                    var i = this.timescale.getPositionInfo(e);
                    t ? this._markers[e].setClass("tl-timemarker tl-timemarker-fast") : this._markers[e].setClass("tl-timemarker"), this._markers[e].setPosition({
                        left: i.start
                    }), this._markers[e].setWidth(i.width)
                }
            }
            updateDisplay(t, e, i) {
                let a = !1;
                t && (0 == this.options.width && t > 0 && (a = !0), this.options.width = t), e && e != this.options.height && (this.options.height = e, this.timescale = this._getTimeScale()), this._assignRowsToMarkers(), this._el.slider_background.style.width = this.timescale.getPixelWidth() + this.options.width + "px", this._el.slider_background.style.left = -this.options.width / 2 + "px", this._el.slider.style.width = this.timescale.getPixelWidth() + this.options.width + "px", this._swipable.updateConstraint({
                    top: !1,
                    bottom: !1,
                    left: this.options.width / 2,
                    right: -(this.timescale.getPixelWidth() - this.options.width / 2)
                }), a && this._drawTimeline(), this.goToId(this.current_id, !0)
            }
            _getTimeScale() {
                var t = 0;
                try {
                    t = parseInt(this.options.marker_height_min)
                } catch (e) {
                    D("Invalid value for marker_height_min option."), t = 30
                }
                return 0 == t && (D("marker_height_min option must not be zero."), t = 30), this.max_rows = Math.round((this.options.height - this._el.timeaxis_background.offsetHeight - this.options.marker_padding) / t), this.max_rows < 1 && (this.max_rows = 1), new ai(this.config, {
                    display_width: this._el.container.offsetWidth,
                    screen_multiplier: this.options.scale_factor,
                    max_rows: this.max_rows
                })
            }
            _updateTimeScale(t) {
                this.options.scale_factor = t, this._updateDrawTimeline()
            }
            zoomIn() {
                var t = function(t, e) {
                    for (var i = 0; i < t.length; i++)
                        if (e < t[i]) return t[i];
                    return e
                }(this.options.zoom_sequence, this.options.scale_factor);
                this.setZoomFactor(t)
            }
            zoomOut() {
                var t = function(t, e) {
                    for (var i = t.length - 1; i >= 0; i--)
                        if (e > t[i]) return t[i];
                    return e
                }(this.options.zoom_sequence, this.options.scale_factor);
                this.setZoomFactor(t)
            }
            setZoom(t) {
                var e = this.options.zoom_sequence[t];
                "number" == typeof e ? this.setZoomFactor(e) : console.warn("Invalid zoom level. Please use an index number between 0 and " + (this.options.zoom_sequence.length - 1))
            }
            setZoomFactor(t) {
                t <= this.options.zoom_sequence[0] ? this.fire("zoomtoggle", {
                    zoom: "out",
                    show: !1
                }) : this.fire("zoomtoggle", {
                    zoom: "out",
                    show: !0
                }), t >= this.options.zoom_sequence[this.options.zoom_sequence.length - 1] ? this.fire("zoomtoggle", {
                    zoom: "in",
                    show: !1
                }) : this.fire("zoomtoggle", {
                    zoom: "in",
                    show: !0
                }), 0 == t && (console.warn("Zoom factor must be greater than zero. Using 0.1"), t = .1), this.options.scale_factor = t, this.goToId(this.current_id, !this._updateDrawTimeline(!0), !0)
            }
            _createGroups() {
                this._groups = [];
                var t = this.timescale.getGroupLabels();
                if (t) {
                    this.options.has_groups = !0;
                    for (var e = 0; e < t.length; e++) this._createGroup(t[e])
                }
            }
            _createGroup(t) {
                var e = new si(t);
                this._addGroup(e), this._groups.push(e)
            }
            _addGroup(t) {
                t.addTo(this._el.container)
            }
            _positionGroups() {
                if (this.options.has_groups)
                    for (var t = this.options.height - this._el.timeaxis_background.offsetHeight, e = Math.floor(t / this.timescale.getNumberOfRows() - this.options.marker_padding), i = (this.timescale.getGroupLabels(), 0), a = 0; i < this._groups.length; i++) {
                        var s = Math.floor(a * (e + this.options.marker_padding)),
                            n = !1;
                        s > t - this.options.marker_padding && (n = !0), this._groups[i].setRowPosition(s, this._calculated_row_height + this.options.marker_padding / 2), this._groups[i].setAlternateRowColor(P(i), n), a += this._groups[i].data.rows
                    }
            }
            _addMarker(t) {
                t.addTo(this._el.marker_item_container), t.on("markerclick", this._onMarkerClick, this), t.on("added", this._onMarkerAdded, this)
            }
            _createMarker(t, e) {
                var i = new Fi(t, this.options);
                this._addMarker(i), e < 0 ? this._markers.push(i) : this._markers.splice(e, 0, i)
            }
            _createMarkers(t) {
                for (var e = 0; e < t.length; e++) this._createMarker(t[e], -1)
            }
            _removeMarker(t) {
                t.removeFrom(this._el.marker_item_container)
            }
            _destroyMarker(t) {
                this._removeMarker(this._markers[t]), this._markers.splice(t, 1)
            }
            _calculateMarkerHeight(t) {
                return t / this.timescale.getNumberOfRows() - this.options.marker_padding
            }
            _calculateRowHeight(t) {
                return t / this.timescale.getNumberOfRows()
            }
            _calculateAvailableHeight() {
                return this.options.height - this._el.timeaxis_background.offsetHeight - this.options.marker_padding
            }
            _calculateMinimumTimeNavHeight() {
                return this.timescale.getNumberOfRows() * this.options.marker_height_min + this._el.timeaxis_background.offsetHeight + this.options.marker_padding
            }
            getMinimumHeight() {
                return this._calculateMinimumTimeNavHeight()
            }
            _assignRowsToMarkers() {
                var t = this._calculateAvailableHeight(),
                    e = this._calculateMarkerHeight(t);
                this._positionGroups(), this._calculated_row_height = this._calculateRowHeight(t);
                for (var i = 0; i < this._markers.length; i++) {
                    this._markers[i].setHeight(e);
                    var a = this.timescale.getPositionInfo(i).row,
                        s = Math.floor(a * (e + this.options.marker_padding)) + this.options.marker_padding,
                        n = t - s + this.options.marker_padding;
                    this._markers[i].setRowPosition(s, n)
                }
            }
            _resetMarkersActive() {
                for (var t = 0; t < this._markers.length; t++) this._markers[t].setActive(!1)
            }
            _resetMarkersBlurListeners() {
                for (var t = 0; t < this._markers.length; t++) this._markers[t].off("markerblur", this._onMarkerBlur, this)
            }
            _findMarkerIndex(t) {
                var e = -1;
                return ("string" == typeof t || t instanceof String) && (e = H(t, this._markers, "unique_id", e)), e
            }
            _createEras(t) {
                for (var e = 0; e < t.length; e++) {
                    var i = t[e],
                        a = new ni(i.start_date, i.end_date, i.headline, this.options);
                    this._eras.push(a), a.addTo(this._el.marker_item_container), a.on("added", this._onEraAdded, this)
                }
            }
            _positionEras(t) {
                for (var e = 0, i = 0; i < this._eras.length; i++) {
                    var a = {
                        start: 0,
                        end: 0,
                        width: 0
                    };
                    a.start = this.timescale.getPosition(this._eras[i].start_date.getTime()), a.end = this.timescale.getPosition(this._eras[i].end_date.getTime()), a.width = a.end - a.start, t ? this._eras[i].setClass("tl-timeera tl-timeera-fast") : this._eras[i].setClass("tl-timeera"), this._eras[i].setPosition({
                        left: a.start
                    }), this._eras[i].setWidth(a.width), ++e > 5 && (e = 0), this._eras[i].setColor(e)
                }
            }
            createMarker(t, e) {
                this._createMarker(t, e)
            }
            createMarkers(t) {
                this._createMarkers(t)
            }
            destroyMarker(t) {
                this._destroyMarker(t)
            }
            destroyMarkerId(t) {
                this.destroyMarker(this._findMarkerIndex(t))
            }
            goTo(t, e, i) {
                var a = this.options.ease,
                    s = this.options.duration,
                    n = t < 0 ? 0 : t;
                this._resetMarkersActive(), t >= 0 && t < this._markers.length && this._markers[t].setActive(!0), this.animateMovement(n, e, i, s, a), t >= 0 && t < this._markers.length ? this.current_id = this.current_focused_id = this._markers[t].data.unique_id : this.current_id = this.current_focused_id = "", this._setLabelWithCurrentMarker()
            }
            goToId(t, e, i) {
                this.goTo(this._findMarkerIndex(t), e, i)
            }
            focusOn(t, e, i) {
                const a = this.options.ease,
                    s = this.options.duration,
                    n = t < 0 ? 0 : t;
                this.animateMovement(n, e, i, s, a), this._resetMarkersBlurListeners(), t >= 0 && t < this._markers.length && (this._markers[t].setFocus(), this.current_focused_id = this._markers[t].data.unique_id, this._markers[t].on("markerblur", this._onMarkerBlur, this))
            }
            focusNext() {
                const t = this._findMarkerIndex(this.current_focused_id);
                t + 1 < this._markers.length ? this.focusOn(t + 1) : this.focusOn(t)
            }
            focusPrevious() {
                const t = this._findMarkerIndex(this.current_focused_id);
                t - 1 >= 0 ? this.focusOn(t - 1) : this.focusOn(t)
            }
            animateMovement(t, e, i, a, s) {
                this.animator && this.animator.stop(), e ? (this._el.slider.className = "tl-timenav-slider", this._el.slider.style.left = -this._markers[t].getLeft() + this.options.width / 2 + "px") : i ? (this._el.slider.className = "tl-timenav-slider tl-timenav-slider-animate", this.animate_css = !0, this._el.slider.style.left = -this._markers[t].getLeft() + this.options.width / 2 + "px") : (this._el.slider.className = "tl-timenav-slider", this.animator = st(this._el.slider, {
                    left: -this._markers[t].getLeft() + this.options.width / 2 + "px",
                    duration: a,
                    easing: s
                })), t >= 0 && t < this._markers.length ? this.current_id = this._markers[t].data.unique_id : this.current_id = "", this._dispatchVisibleTicksChange()
            }
            goToId(t, e, i) {
                this.goTo(this._findMarkerIndex(t), e, i)
            }
            _dispatchVisibleTicksChange() {
                this.ticks_change_timeout && (clearTimeout(this.ticks_change_timeout), this.ticks_change_timeout = null), this.ticks_change_timeout = setTimeout((() => {
                    const t = this.timeaxis.getVisibleTicks();
                    this.fire("visible_ticks_change", {
                        visible_ticks: t
                    })
                }), this.options.duration)
            }
            _onLoaded() {
                this.ready = !0, this.fire("loaded", this.config)
            }
            _onMarkerAdded(t) {
                this.fire("dateAdded", this.config)
            }
            _onEraAdded(t) {
                this.fire("eraAdded", this.config)
            }
            _onMarkerRemoved(t) {
                this.fire("dateRemoved", this.config)
            }
            _onMarkerClick(t) {
                this.goToId(t.unique_id), this.fire("change", {
                    unique_id: t.unique_id
                })
            }
            _onMarkerBlur(t) {
                this.current_focused_id !== this.current_id && this.focusOn(this._findMarkerIndex(this.current_id))
            }
            _onMouseScroll(t) {
                var e = 0,
                    i = 0,
                    a = {
                        right: -(this.timescale.getPixelWidth() - this.options.width / 2),
                        left: this.options.width / 2
                    };
                t || (t = window.event), t.originalEvent && (t = t.originalEvent), void 0 !== t.wheelDeltaX && (e = t.wheelDeltaY / 6, e = Math.abs(t.wheelDeltaX) > Math.abs(t.wheelDeltaY) ? t.wheelDeltaX / 6 : 0), e && (t.preventDefault && t.preventDefault(), t.returnValue = !1), (i = parseInt(this._el.slider.style.left.replace("px", "")) + e) > a.left ? i = a.left : i < a.right && (i = a.right), this.animate_css && (this._el.slider.className = "tl-timenav-slider", this.animate_css = !1), this._el.slider.style.left = i + "px"
            }
            _onDragMove(t) {
                this.animate_css && (this._el.slider.className = "tl-timenav-slider", this.animate_css = !1)
            }
            _onKeydown(t) {
                switch (ht.stopPropagation(t), t.key) {
                    case "ArrowUp":
                    case "ArrowRight":
                        this.focusNext();
                        break;
                    case "ArrowDown":
                    case "ArrowLeft":
                        this.focusPrevious();
                        break;
                    case "Home":
                        this.focusOn(0);
                        break;
                    case "End":
                        this.focusOn(this._markers.length - 1)
                }
            }
            _drawTimeline(t) {
                this.timescale = this._getTimeScale(), this.timeaxis.drawTicks(this.timescale, this.options.optimal_tick_width), this.positionMarkers(t), this._assignRowsToMarkers(), this._createGroups(), this._positionGroups(), this.has_eras && this._positionEras(t)
            }
            _updateDrawTimeline(t) {
                var e = !1;
                if (t) {
                    var i = new ai(this.config, {
                        display_width: this._el.container.offsetWidth,
                        screen_multiplier: this.options.scale_factor,
                        max_rows: this.max_rows
                    });
                    this.timescale.getMajorScale() == i.getMajorScale() && this.timescale.getMinorScale() == i.getMinorScale() && (e = !0)
                } else e = !0;
                return e ? (this.timescale = this._getTimeScale(), this.timeaxis.positionTicks(this.timescale, this.options.optimal_tick_width), this.positionMarkers(), this._assignRowsToMarkers(), this._positionGroups(), this.has_eras && this._positionEras(), this.updateDisplay()) : this._drawTimeline(!0), e
            }
            _setLabelWithCurrentMarker() {
                const t = this._markers[this._findMarkerIndex(this.current_focused_id)],
                    e = t && t.ariaLabel ? `, ${t.ariaLabel}, shown` : "";
                this._el.container.setAttribute("aria-label", `Timeline navigation ${e}`)
            }
            _initLayout() {
                this._el.line = v("div", "tl-timenav-line", this._el.container), this._el.slider = v("div", "tl-timenav-slider", this._el.container), this._el.slider_background = v("div", "tl-timenav-slider-background", this._el.slider), this._el.marker_container_mask = v("div", "tl-timenav-container-mask", this._el.slider), this._el.marker_container = v("div", "tl-timenav-container", this._el.marker_container_mask), this._el.marker_item_container = v("div", "tl-timenav-item-container", this._el.marker_container), this._el.timeaxis = v("div", "tl-timeaxis", this._el.slider), this._el.timeaxis_background = v("div", "tl-timeaxis-background", this._el.container), this.timeaxis = new oi(this._el.timeaxis, this.options, this.language), this._swipable = new qi(this._el.slider_background, this._el.slider, {
                    enable: {
                        x: !0,
                        y: !1
                    },
                    constraint: {
                        top: !1,
                        bottom: !1,
                        left: this.options.width / 2,
                        right: !1
                    },
                    snap: !1
                }), this._swipable.enable()
            }
            _initEvents() {
                this._swipable.on("dragmove", this._onDragMove, this), ht.addListener(this._el.container, "mousewheel", this._onMouseScroll, this), ht.addListener(this._el.container, "DOMMouseScroll", this._onMouseScroll, this), ht.addListener(this._el.container, "keydown", this._onKeydown, this)
            }
            _initData() {
                this._createMarkers(this.config.events), this.config.eras && this.config.eras.length > 0 && (this.has_eras = !0, this._createEras(this.config.eras)), this._drawTimeline()
            }
        }
        R($i, at, ot, Rt), i(142);
        class Ui {
            constructor(t, e, i, a) {
                a && this.setLanguage(a), this._el = {
                    container: {},
                    scroll_container: {},
                    background: {},
                    content_container: {},
                    content: {}
                }, this._media = null, this._mediaclass = {}, this._text = {}, this._background_media = null, this._state = {
                    loaded: !1
                }, this.has = {
                    headline: !1,
                    text: !1,
                    media: !1,
                    title: !1,
                    background: {
                        image: !1,
                        color: !1,
                        color_value: ""
                    }
                }, this.has.title = i, this.data = {
                    unique_id: null,
                    background: null,
                    start_date: null,
                    end_date: null,
                    location: null,
                    text: null,
                    media: null,
                    autolink: !0
                }, this.options = {
                    duration: 1e3,
                    slide_padding_lr: 40,
                    ease: Q,
                    width: 600,
                    height: 600,
                    skinny_size: 650,
                    media_name: ""
                }, this.active = !1, this.animator = {}, E(this.options, e), E(this.data, t), this._initLayout(), this._initEvents()
            }
            show() {
                this.animator = st(this._el.slider_container, {
                    left: -this._el.container.offsetWidth * n + "px",
                    duration: this.options.duration,
                    easing: this.options.ease
                })
            }
            hide() {}
            setActive(t) {
                this.active = t, this.active ? (this.data.background && this.fire("background_change", this.has.background), this._setInteractive(!0), this.loadMedia()) : (this.stopMedia(), this._setInteractive(!1))
            }
            addTo(t) {
                t.appendChild(this._el.container)
            }
            removeFrom(t) {
                t.removeChild(this._el.container)
            }
            updateDisplay(t, e, i) {
                var a, s = this.options.slide_padding_lr,
                    n = this.options.slide_padding_lr;
                this.options.width = t || this._el.container.offsetWidth, a = this.options.width - 2 * this.options.slide_padding_lr, h && this.options.width <= this.options.skinny_size ? (s = 0, n = 0, a = this.options.width) : "landscape" == i || this.options.width <= this.options.skinny_size && (s = 50, n = 50, a = this.options.width - s - n), this._el.content.style.paddingLeft = s + "px", this._el.content.style.paddingRight = n + "px", this._el.content.style.width = a + "px", this.options.height = e || this._el.container.offsetHeight, this._media && (!this.has.text && this.has.headline ? this._media.updateDisplay(a, this.options.height - this._text.headlineHeight(), i) : this.has.text || this.has.headline ? this.options.width <= this.options.skinny_size ? this._media.updateDisplay(a, this.options.height, i) : this._media.updateDisplay(a / 2, this.options.height, i) : this._media.updateDisplay(a, this.options.height, i)), this._updateBackgroundDisplay()
            }
            loadMedia() {
                var t = this;
                this._media && !this._state.loaded && (this._media.loadMedia(), this._state.loaded = !0), this._background_media && !this._background_media._state.loaded && (this._background_media.on("loaded", (function() {
                    t._updateBackgroundDisplay()
                })), this._background_media.loadMedia())
            }
            stopMedia() {
                this._media && this._state.loaded && this._media.stopMedia()
            }
            getBackground() {
                return this.has.background
            }
            scrollToTop() {
                this._el.container.scrollTop = 0
            }
            getFormattedDate() {
                if (O(this.data.display_date).length > 0) return this.data.display_date;
                var t = "";
                return this.has.title || (this.data.end_date && (t = " &mdash; " + this.data.end_date.getDisplayDate(this.getLanguage())), this.data.start_date && (t = this.data.start_date.getDisplayDate(this.getLanguage()) + t)), t
            }
            _initLayout() {
                if (this._el.container = v("div", "tl-slide"), this.has.title && (this._el.container.className = "tl-slide tl-slide-titleslide"), this.data.unique_id && (this._el.container.id = this.data.unique_id), this._el.scroll_container = v("div", "tl-slide-scrollable-container", this._el.container), this._el.content_container = v("div", "tl-slide-content-container", this._el.scroll_container), this._el.content = v("div", "tl-slide-content", this._el.content_container), this._el.background = v("div", "tl-slide-background", this._el.container), this.data.background) {
                    if (this.data.background.url) {
                        var t = Hi(this.data.background, !0);
                        t && (this._background_media = new t.cls(this.data.background, {
                            background: 1
                        }), this.has.background.image = !0, this._el.container.className += " tl-full-image-background", this.has.background.color_value = "#000", this._el.background.style.display = "block"), this.data.background.alt && (this._el.background.setAttribute("role", "img"), this._el.background.setAttribute("aria-label", this.data.background.alt))
                    }
                    this.data.background.color && (this.has.background.color = !0, this._el.container.className += " tl-full-color-background", this.has.background.color_value = this.data.background.color), this.data.background.text_background && (this._el.container.className += " tl-text-background")
                }
                this.data.media && this.data.media.url && "" != this.data.media.url && (this.has.media = !0), this.data.text && this.data.text.text && (this.has.text = !0), this.data.text && this.data.text.headline && (this.has.headline = !0), this.has.media && (this.data.media.mediatype = Hi(this.data.media), this.options.media_name = this.data.media.mediatype.name, this.options.media_type = this.data.media.mediatype.type, this.options.autolink = this.data.autolink, this._media = new this.data.media.mediatype.cls(this.data.media, this.options, this.getLanguage())), (this.has.text || this.has.headline) && (this._text = new ri(this.data.text, {
                    title: this.has.title,
                    language: this.getLanguage(),
                    autolink: this.data.autolink
                }), this._text.addDateText(this.getFormattedDate())), this.has.text || this.has.headline || !this.has.media ? this.has.headline && this.has.media && !this.has.text ? (this._el.container.classList.add("tl-slide-media-only"), this._text.addTo(this._el.content), this._media.addTo(this._el.content)) : this.has.text && this.has.media ? (this._text.addTo(this._el.content), this._media.addTo(this._el.content)) : (this.has.text || this.has.headline) && (this._el.container.classList.add("tl-slide-text-only"), this._text.addTo(this._el.content)) : (this._el.container.classList.add("tl-slide-media-only"), this._media.addTo(this._el.content)), this.onLoaded()
            }
            _initEvents() {}
            _updateBackgroundDisplay() {
                this._background_media && this._background_media._state.loaded && (this._el.background.style.backgroundImage = "url('" + this._background_media.getImageURL(this.options.width, this.options.height) + "')")
            }
            _setInteractive(t) {
                t ? this._el.container.removeAttribute("inert") : this._el.container.setAttribute("inert", !0)
            }
        }
        R(Ui, Rt, at, ot);
        class Bi {
            constructor(t, e, i) {
                this._el = {
                    container: {},
                    content_container: {},
                    icon: {},
                    title: {},
                    description: {}
                }, this.mediatype = {}, this.data = {
                    title: "Navigation",
                    description: "Description",
                    date: "Date"
                }, this.options = {
                    direction: "previous"
                }, this.animator = null, E(this.options, e), E(this.data, t), this._el.container = y("tl-slidenav-" + this.options.direction), h && this._el.container.setAttribute("ontouchstart", " "), this._initLayout(), this._initEvents(), i && i.appendChild(this._el.container)
            }
            update(t) {
                var e = {
                    title: "",
                    description: "",
                    date: t.getFormattedDate()
                };
                t.data.text && t.data.text.headline && (e.title = t.data.text.headline), this._update(e)
            }
            setColor(t) {
                this._el.content_container.className = t ? "tl-slidenav-content-container tl-slidenav-inverted" : "tl-slidenav-content-container"
            }
            _onMouseClick() {
                this.fire("clicked", this.options)
            }
            _update(t) {
                this.data = E(this.data, t);
                const e = F(this.data.title);
                this._el.title.innerHTML = e;
                const i = F(this.data.date);
                this._el.description.innerHTML = i, this._el.container.setAttribute("aria-label", `${this.options.direction}, ${e}, ${i}`)
            }
            _initLayout() {
                this._el.content_container = v("div", "tl-slidenav-content-container", this._el.container), this._el.icon = v("div", "tl-slidenav-icon", this._el.content_container), this._el.title = v("div", "tl-slidenav-title", this._el.content_container), this._el.description = v("div", "tl-slidenav-description", this._el.content_container), this._update()
            }
            _initEvents() {
                ht.addListener(this._el.container, "click", this._onMouseClick, this)
            }
        }
        R(Bi, ot, at);
        class Wi {
            constructor(t, e, i, a) {
                a && this.setLanguage(a), this._el = {
                    container: {},
                    background: {},
                    slider_container_mask: {},
                    slider_container: {},
                    slider_item_container: {}
                }, this._nav = {}, this._nav.previous = {}, this._nav.next = {}, this.slide_spacing = 0, this._slides = [], this._swipable, this.preloadTimer, this._message, this.current_id = "", this.data = {}, this.options = {
                    id: "",
                    layout: "portrait",
                    width: 600,
                    height: 600,
                    default_bg_color: {
                        r: 255,
                        g: 255,
                        b: 255
                    },
                    slide_padding_lr: 40,
                    start_at_slide: 1,
                    slide_default_fade: "0%",
                    duration: 1e3,
                    ease: et,
                    dragging: !0,
                    trackResize: !0
                }, "object" == typeof t ? (this._el.container = t, this.options.id = z(6, "tl")) : (this.options.id = t, this._el.container = g(t)), this._el.container.id || (this._el.container.id = this.options.id), this.animator = null, E(this.options, i), E(this.data, e)
            }
            init() {
                this._initLayout(), this._initEvents(), this._initData(), this.updateDisplay(), this.goTo(this.options.start_at_slide), this._onLoaded()
            }
            _addSlide(t) {
                t.addTo(this._el.slider_item_container), t.on("added", this._onSlideAdded, this), t.on("background_change", this._onBackgroundChange, this)
            }
            _createSlide(t, e, i) {
                var a = new Ui(t, this.options, e, this.getLanguage());
                this._addSlide(a), i < 0 ? this._slides.push(a) : this._slides.splice(i, 0, a)
            }
            _createSlides(t) {
                for (var e = 0; e < t.length; e++) "" == t[e].unique_id && (t[e].unique_id = z(6, "tl-slide")), this._createSlide(t[e], !1, -1)
            }
            _removeSlide(t) {
                t.removeFrom(this._el.slider_item_container), t.off("added", this._onSlideRemoved, this), t.off("background_change", this._onBackgroundChange)
            }
            _destroySlide(t) {
                this._removeSlide(this._slides[t]), this._slides.splice(t, 1)
            }
            _findSlideIndex(t) {
                var e = t;
                return ("string" == typeof t || t instanceof String) && (e = H(t, this._slides, "unique_id")), e
            }
            updateDisplay(t, e, i, a) {
                var s, n;
                n = void 0 === a ? this.options.layout : a, this.options.layout = n, this.options.width = t || this._el.container.offsetWidth, this.options.height = e || this._el.container.offsetHeight, this.slide_spacing = 2 * this.options.width, s = this.options.height / 2, this._nav.next.setPosition({
                    top: s
                }), this._nav.previous.setPosition({
                    top: s
                });
                for (var o = 0; o < this._slides.length; o++) this._slides[o].updateDisplay(this.options.width, this.options.height, n), this._slides[o].setPosition({
                    left: this.slide_spacing * o,
                    top: 0
                });
                this.goToId(this.current_id, !0, !0)
            }
            createSlide(t, e) {
                this._createSlide(t, !1, e)
            }
            createSlides(t) {
                this._createSlides(t)
            }
            destroySlide(t) {
                this._destroySlide(t)
            }
            destroySlideId(t) {
                this.destroySlide(this._findSlideIndex(t))
            }
            goTo(t, e, i) {
                t = parseInt(t), isNaN(t) && (t = 0);
                var a = this;
                this.changeBackground({
                    color_value: "",
                    image: !1
                }), this.preloadTimer && clearTimeout(this.preloadTimer);
                for (var s = 0; s < this._slides.length; s++) this._slides[s].setActive(!1);
                t < this._slides.length && t >= 0 && (this.current_id = this._slides[t].data.unique_id, this.animator && this.animator.stop(), this._swipable && this._swipable.stopMomentum(), e ? (this._el.slider_container.style.left = -this.slide_spacing * t + "px", this._onSlideChange(i)) : this.animator = st(this._el.slider_container, {
                    left: -this.slide_spacing * t + "px",
                    duration: this.options.duration,
                    easing: this.options.ease,
                    complete: this._onSlideChange(i)
                }), this._slides[t].setActive(!0), this._slides[t + 1] ? (this.showNav(this._nav.next, !0), this._nav.next.update(this._slides[t + 1])) : this.showNav(this._nav.next, !1), this._slides[t - 1] ? (this.showNav(this._nav.previous, !0), this._nav.previous.update(this._slides[t - 1])) : this.showNav(this._nav.previous, !1), this.preloadTimer = setTimeout((function() {
                    a.preloadSlides(t)
                }), this.options.duration))
            }
            goToId(t, e, i) {
                this.goTo(this._findSlideIndex(t), e, i)
            }
            preloadSlides(t) {
                this._slides[t + 1] && (this._slides[t + 1].loadMedia(), this._slides[t + 1].scrollToTop()), this._slides[t + 2] && (this._slides[t + 2].loadMedia(), this._slides[t + 2].scrollToTop()), this._slides[t - 1] && (this._slides[t - 1].loadMedia(), this._slides[t - 1].scrollToTop()), this._slides[t - 2] && (this._slides[t - 2].loadMedia(), this._slides[t - 2].scrollToTop())
            }
            next() {
                var t = this._findSlideIndex(this.current_id);
                t + 1 < this._slides.length ? this.goTo(t + 1) : this.goTo(t)
            }
            previous() {
                var t = this._findSlideIndex(this.current_id);
                t - 1 >= 0 ? this.goTo(t - 1) : this.goTo(t)
            }
            showNav(t, e) {
                this.options.width <= 500 && h ? t.hide() : e ? t.show() : t.hide()
            }
            changeBackground(t) {
                var e = {
                    r: 256,
                    g: 256,
                    b: 256
                };
                t.color_value && "" != t.color_value ? (e = M(t.color_value)) || (D("Invalid color value " + t.color_value), e = this.options.default_bg_color) : (e = this.options.default_bg_color, t.color_value = "rgb(" + e.r + " , " + e.g + ", " + e.b + ")"), e.r, e.g, e.b, this._el.background.style.backgroundImage = "none", t.color_value ? this._el.background.style.backgroundColor = t.color_value : this._el.background.style.backgroundColor = "transparent", e.r < 255 || e.g < 255 || e.b < 255 || t.image ? (this._nav.next.setColor(!0), this._nav.previous.setColor(!0)) : (this._nav.next.setColor(!1), this._nav.previous.setColor(!1))
            }
            _updateDrawSlides() {
                for (var t = this.options.layout, e = 0; e < this._slides.length; e++) this._slides[e].updateDisplay(this.options.width, this.options.height, t), this._slides[e].setPosition({
                    left: this.slide_spacing * e,
                    top: 0
                });
                this.goToId(this.current_id, !0, !1)
            }
            _initLayout() {
                this._el.container.classList.add("tl-storyslider"), this._nav.previous = new Bi({
                    title: "Previous",
                    description: "description"
                }, {
                    direction: "previous"
                }, this._el.container), this._nav.next = new Bi({
                    title: "Next",
                    description: "description"
                }, {
                    direction: "next"
                }, this._el.container), this._el.slider_container_mask = v("div", "tl-slider-container-mask", this._el.container), this._el.background = v("div", "tl-slider-background tl-animate", this._el.container), this._el.slider_container = v("div", "tl-slider-container tlanimate", this._el.slider_container_mask), this._el.slider_item_container = v("div", "tl-slider-item-container", this._el.slider_container), this._el.slider_container.setAttribute("aria-live", "polite"), this.options.width = this._el.container.offsetWidth, this.options.height = this._el.container.offsetHeight, this._el.slider_container.style.left = "0px", f && (this._swipable = new qi(this._el.slider_container_mask, this._el.slider_container, {
                    enable: {
                        x: !0,
                        y: !1
                    },
                    snap: !0
                }), this._swipable.enable(), this._message = new jt(this._el.container, {
                    message_class: "tl-message-full",
                    message_icon_class: "tl-icon-swipe-left"
                }, this.getLanguage()), this._message.updateMessage(this._("swipe_to_navigate")), this._message.addTo(this._el.container))
            }
            _initEvents() {
                this._nav.next.on("clicked", this._onNavigation, this), this._nav.previous.on("clicked", this._onNavigation, this), this._message && this._message.on("clicked", this._onMessageClick, this), this._swipable && (this._swipable.on("swipe_left", this._onNavigation, this), this._swipable.on("swipe_right", this._onNavigation, this), this._swipable.on("swipe_nodirection", this._onSwipeNoDirection, this))
            }
            _initData() {
                this.data.title && this._createSlide(this.data.title, !0, -1), this._createSlides(this.data.events)
            }
            _onBackgroundChange(t) {
                var e = this._findSlideIndex(this.current_id),
                    i = this._slides[e].getBackground();
                this.changeBackground(t), this.fire("colorchange", i)
            }
            _onMessageClick(t) {
                this._message.hide()
            }
            _onSwipeNoDirection(t) {
                this.goToId(this.current_id)
            }
            _onNavigation(t) {
                "next" == t.direction || "left" == t.direction ? this.next() : "previous" != t.direction && "right" != t.direction || this.previous(), this.fire("nav_" + t.direction, this.data)
            }
            _onSlideAdded(t) {
                D("slideadded"), this.fire("slideAdded", this.data)
            }
            _onSlideRemoved(t) {
                this.fire("slideRemoved", this.data)
            }
            _onSlideChange(t) {
                t || this.fire("change", {
                    unique_id: this.current_id
                })
            }
            _onMouseClick(t) {}
            _fireMouseEvent(t) {
                if (this._loaded) {
                    var e = t.type;
                    e = "mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e, this.hasEventListeners(e) && ("contextmenu" === e && ht.preventDefault(t), this.fire(e, {
                        latlng: "something",
                        layerPoint: "something else"
                    }))
                }
            }
            _onLoaded() {
                this.fire("loaded", this.data)
            }
        }
        R(Wi, Rt, at);
        class Gi {
            constructor(t, e, i, a) {
                this._el = {
                    parent: {},
                    container: {},
                    button_forwardtoend: {},
                    button_backtostart: {},
                    button_zoomin: {},
                    button_zoomout: {},
                    arrow: {},
                    line: {},
                    coverbar: {},
                    grip: {}
                }, this.collapsed = !1, this._el.container = "object" == typeof t ? t : g(t), e && (this._el.parent = e), this.data = {
                    visible_ticks_dates: {}
                }, this.options = {
                    width: 600,
                    height: 600,
                    duration: 1e3,
                    ease: et,
                    menubar_default_y: 0
                }, this.animator = {}, this.setLanguage(a), E(this.options, i), this._initLayout(), this._initEvents()
            }
            show(t) {
                this.options.duration
            }
            hide(t) {}
            toogleZoomIn(t) {
                t ? this._el.button_zoomin.removeAttribute("disabled") : this._el.button_zoomin.setAttribute("disabled", !0)
            }
            toogleZoomOut(t) {
                t ? this._el.button_zoomout.removeAttribute("disabled") : this._el.button_zoomout.setAttribute("disabled", !0)
            }
            changeVisibleTicks(t) {
                const e = t.minor;
                if (!e.length) return void(this.data.visible_ticks_dates = {});
                const i = e[0].date.getFullYear(),
                    a = e[e.length - 1].date.getFullYear();
                this.data.visible_ticks_dates = {
                    start: i,
                    end: a
                }, this._updateZoomAriaLabels()
            }
            setSticky(t) {
                this.options.menubar_default_y = t
            }
            setColor(t) {
                this._el.container.className = t ? "tl-menubar tl-menubar-inverted" : "tl-menubar"
            }
            updateDisplay(t, e, i, a) {
                this._updateDisplay(t, e, i, a)
            }
            _onButtonZoomIn(t) {
                this.fire("zoom_in", t)
            }
            _onButtonZoomOut(t) {
                this.fire("zoom_out", t)
            }
            _onButtonForwardToEnd(t) {
                this.fire("forward_to_end", t)
            }
            _onButtonBackToStart(t) {
                this.fire("back_to_start", t)
            }
            _initLayout() {
                this._el.button_zoomin = y("tl-menubar-button", this._el.container), this._el.button_zoomout = y("tl-menubar-button", this._el.container), this._el.button_forwardtoend = y("tl-menubar-button", this._el.container), this._el.button_backtostart = y("tl-menubar-button", this._el.container), h && this._el.container.setAttribute("ontouchstart", " "), this._el.button_backtostart.innerHTML = "<span class='tl-icon-goback'></span>", this._el.button_backtostart.setAttribute("aria-label", this._("return_to_title")), this._el.button_forwardtoend.innerHTML = "<span class='tl-icon-goend'></span>", this._el.button_forwardtoend.setAttribute("aria-label", this._("go_to_end")), this._el.button_zoomin.innerHTML = "<span class='tl-icon-zoom-in'></span>", this._el.button_zoomin.setAttribute("aria-label", this._("zoom_in")), this._el.button_zoomout.innerHTML = "<span class='tl-icon-zoom-out'></span>", this._el.button_zoomout.setAttribute("aria-label", this._("zoom_out"))
            }
            _initEvents() {
                ht.addListener(this._el.button_forwardtoend, "click", this._onButtonForwardToEnd, this), ht.addListener(this._el.button_backtostart, "click", this._onButtonBackToStart, this), ht.addListener(this._el.button_zoomin, "click", this._onButtonZoomIn, this), ht.addListener(this._el.button_zoomout, "click", this._onButtonZoomOut, this)
            }
            _updateDisplay(t, e, i) {
                t && (this.options.width = t), e && (this.options.height = e)
            }
            _updateZoomAriaLabels() {
                0 == Object.keys(this.data.visible_ticks_dates).length ? (this._el.button_zoomin.setAttribute("aria-description", ""), this._el.button_zoomout.setAttribute("aria-description", "")) : (this._el.button_zoomin.setAttribute("aria-description", this._("aria_label_zoomin", this.data.visible_ticks_dates)), this._el.button_zoomout.setAttribute("aria-description", this._("aria_label_zoomout", this.data.visible_ticks_dates)))
            }
        }
        R(Gi, ot, at, Rt);
        let Yi = null;
        if (document) {
            let t = document.getElementsByTagName("script");
            t && t.length > 0 && (Yi = t[t.length - 1].src)
        }
        class Zi {
            constructor(t, e, i) {
                if (i || (i = {}), this.ready = !1, this._el = {
                        container: g(t),
                        storyslider: {},
                        timenav: {},
                        menubar: {}
                    }, i.lang && !i.language && (i.language = i.lang), this.language = Ot, this._storyslider = {}, this._timenav = {}, this._menubar = {}, this._loaded = {
                        storyslider: !1,
                        timenav: !1
                    }, this.config = null, this.options = {
                        script_path: "https://cdn.knightlab.com/libs/timeline3/latest/js/",
                        height: this._el.container.offsetHeight,
                        width: this._el.container.offsetWidth,
                        debug: !1,
                        font: "default",
                        is_embed: !1,
                        is_full_embed: !1,
                        hash_bookmark: !1,
                        default_bg_color: {
                            r: 255,
                            g: 255,
                            b: 255
                        },
                        scale_factor: 2,
                        layout: "landscape",
                        timenav_position: "bottom",
                        optimal_tick_width: 60,
                        base_class: "tl-timeline",
                        timenav_height: null,
                        timenav_height_percentage: 25,
                        timenav_mobile_height_percentage: 40,
                        timenav_height_min: 175,
                        marker_height_min: 30,
                        marker_width_min: 100,
                        marker_padding: 5,
                        start_at_slide: 0,
                        start_at_end: !1,
                        menubar_height: 0,
                        skinny_size: 650,
                        medium_size: 800,
                        use_bc: !1,
                        duration: 1e3,
                        ease: et,
                        dragging: !0,
                        trackResize: !0,
                        map_type: "stamen:toner-lite",
                        slide_padding_lr: 100,
                        slide_default_fade: "0%",
                        zoom_sequence: [.5, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89],
                        language: "en",
                        ga_measurement_id: null,
                        ga_property_id: null,
                        track_events: ["back_to_start", "nav_next", "nav_previous", "zoom_in", "zoom_out"],
                        theme: null,
                        sheets_proxy: "https://sheets-proxy.knightlab.com/proxy/",
                        soundcite: !1
                    }, this.animator_timenav = null, this.animator_storyslider = null, this.animator_menubar = null, this.message = new jt(this._el.container, {
                        message_class: "tl-message-full"
                    }), "string" == typeof i.default_bg_color) {
                    var a = M(i.default_bg_color);
                    a ? i.default_bg_color = a : (delete i.default_bg_color, D("Invalid default background color. Ignoring."))
                }
                var s, n;
                E(this.options, i), this.options.script_path || (this.options.script_path = this.determineScriptPath()), i.soundcite && this.on("ready", (() => {
                    D("Loading Soundcite resources "), ci("https://cdn.knightlab.com/libs/soundcite/latest/css/player.css"), di("https://cdn.knightlab.com/libs/soundcite/latest/js/soundcite.min.js")
                })), this._loadStyles(), document.addEventListener("keydown", (s = this, function(t) {
                    if (s.config) {
                        var e = t.key,
                            i = s._getSlideIndex(self.current_id),
                            a = s.config.events.length - 1,
                            n = s.config.title ? a + 1 : a;
                        "ArrowLeft" == e ? 0 != i && s.goToPrev() : "ArrowRight" == e && i != n && s.goToNext()
                    }
                })), window.addEventListener("resize", function(t) {
                    this.updateDisplay()
                }.bind(this)), this.options.debug && (n = console.log, S.push(n)), this._el.container.classList.add("tl-timeline"), this._el.container.setAttribute("tabindex", "0"), this._el.container.setAttribute("role", "region"), this._el.container.setAttribute("aria-label", this._("aria_label_timeline")), this.options.is_embed && this._el.container.classList.add("tl-timeline-embed"), this.options.is_full_embed && this._el.container.classList.add("tl-timeline-full-embed"), this._loadLanguage(e)
            }
            _loadStyles() {
                let t = null,
                    e = null;
                if (this.options.font && (0 == this.options.font.indexOf("http") || this.options.font.match(/\.css$/))) t = this.options.font;
                else if (this.options.font) {
                    let e = "../css/fonts/font." + this.options.font.toLowerCase() + ".css";
                    t = new URL(e, this.options.script_path).toString()
                }
                if (t && ci(t), this.options.theme && (0 == this.options.theme.indexOf("http") || this.options.theme.match(/\.css$/))) e = this.options.theme;
                else if (this.options.theme) {
                    let t = "../css/themes/timeline.theme." + this.options.theme.toLowerCase() + ".css";
                    e = new URL(t, this.options.script_path).toString()
                }
                e && ci(e)
            }
            _loadLanguage(t) {
                try {
                    var e = this.options.language,
                        i = this.options.script_path;
                    (async function(t, e) {
                        var i = At(t, e);
                        try {
                            if (!Ct[t]) {
                                let e = await mt(i);
                                Ct[t] = e
                            }
                            return new Nt(t, e)
                        } catch (t) {
                            return console.log(`Error loading language [${i}] ${t.statusText}`), null
                        }
                    })(e, i).then((i => {
                        i ? (this.language = i, this.message.setLanguage(this.language), this.showMessage(this._("loading_timeline"))) : this.showMessage(`Error loading ${e}`), this._initData(t)
                    }))
                } catch (t) {
                    this.showMessage(this._translateError(t))
                }
            }
            _initData(t) {
                "string" == typeof t ? async function(t, e) {
                    let i = null,
                        a = {};
                    if (a = e, i = e.callback, "function" == typeof a.callback && (i = a.callback), !i) throw new x("Second argument to makeConfig must be either a function or an object which includes a 'callback' property with a 'function' type value");
                    var s, n;
                    if (Xe(t)) {
                        try {
                            console.log(`reading url ${t}`), n = await Ke(t, a)
                        } catch (t) {
                            return s = new Ge, "NetworkError" == t.name ? s.logError(new x("network_err")) : "TLError" == t.name ? s.logError(t) : s.logError(new x("unknown_read_err", t.name)), void i(s)
                        }
                        if (s = new Ge(n), n.errors)
                            for (var o = 0; o < n.errors.length; o++) s.logError(n.errors[o]);
                        i(s)
                    } else ut({
                        url: t,
                        dataType: "json",
                        success: function(t) {
                            try {
                                s = new Ge(t)
                            } catch (t) {
                                (s = new Ge).logError(t)
                            }
                            i(s)
                        },
                        error: function(t, e, a) {
                            s = new Ge, a = "parsererror" == e ? new x("invalid_url_err") : new x("unknown_read_err", e), s.logError(a), i(s)
                        }
                    })
                }(t, {
                    callback: function(t) {
                        this.setConfig(t)
                    }.bind(this),
                    sheets_proxy: this.options.sheets_proxy
                }): Ge == t.constructor ? this.setConfig(t) : this.setConfig(new Ge(t))
            }
            _translateError(t) {
                return t.hasOwnProperty("stack") && D(t.stack), t.message_key ? this._(t.message_key) + (t.detail ? " [" + t.detail + "]" : "") : t
            }
            showMessage(t) {
                this.message ? this.message.updateMessage(t) : (D("No message display available."), D(t))
            }
            determineScriptPath() {
                let t = null;
                if (Yi) t = Yi;
                else {
                    let e = document.getElementById("timeline-script-tag");
                    e && (t = e.src)
                }
                if (!t) {
                    let e = document.getElementsByTagName("script");
                    for (let i = e.length - 1; i >= 0; i--)
                        if (e[i].src) {
                            t = e[i].src;
                            break
                        }
                }
                return t ? t.substr(0, t.lastIndexOf("/") + 1) : ""
            }
            setConfig(t) {
                if (this.config = t, this.config.isValid() && (this.config.validate(), this._validateOptions()), this.config.isValid()) try {
                    "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", this._onDataLoaded.bind(this)) : this._onDataLoaded()
                } catch (t) {
                    this.showMessage("<strong>" + this._("error") + ":</strong> " + this._translateError(t))
                } else {
                    for (var e = [], i = 0, a = this.config.getErrors(); i < a.length; i++) e.push(this._translateError(a[i]));
                    this.showMessage("<strong>" + this._("error") + ":</strong> " + e.join("<br>"))
                }
            }
            _onDataLoaded() {
                this.fire("dataloaded"), this._initLayout(), this._initEvents(), this._initAnalytics(), this.message && this.message.hide();
                let t = new IntersectionObserver(((t, e) => {
                    t.reduce(((t, e) => t || e.isIntersecting), !1) && this.updateDisplay()
                }).bind(this));
                t.observe(this._el.container), this.ready = !0, this.fire("ready")
            }
            _initLayout() {
                this.message.removeFrom(this._el.container), this._el.container.innerHTML = "", "top" == this.options.timenav_position ? (this._el.timenav = v("div", "tl-timenav", this._el.container), this._el.menubar = v("div", "tl-menubar", this._el.container), this._el.storyslider = v("div", "tl-storyslider", this._el.container)) : (this._el.storyslider = v("div", "tl-storyslider", this._el.container), this._el.timenav = v("div", "tl-timenav", this._el.container), this._el.menubar = v("div", "tl-menubar", this._el.container)), this._el.attribution = v("div", "tl-attribution", this._el.container), this._el.attribution.innerHTML = "<a href='https://timeline.knightlab.com' target='_blank' rel='noopener'><span class='tl-knightlab-logo'></span>TimelineJS</a>", this.options.width = this._el.container.offsetWidth, this.options.height = this._el.container.offsetHeight, this.options.timenav_height = this._calculateTimeNavHeight(this.options.timenav_height), this._timenav = new $i(this._el.timenav, this.config, this.options, this.language), this._timenav.on("loaded", this._onTimeNavLoaded, this), this._timenav.options.height = this.options.timenav_height, this._timenav.init(), this.options.initial_zoom && this.setZoom(this.options.initial_zoom), this._storyslider = new Wi(this._el.storyslider, this.config, this.options, this.language), this._el.storyslider.setAttribute("role", "group"), this._el.storyslider.setAttribute("aria-label", this._("aria_label_timeline_content")), this._storyslider.on("loaded", this._onStorySliderLoaded, this), this._storyslider.init(), this._menubar = new Gi(this._el.menubar, this._el.container, this.options, this.getLanguage()), "portrait" == this.options.layout ? this.options.storyslider_height = this.options.height - this.options.timenav_height - 1 : this.options.storyslider_height = this.options.height - 1, this._updateDisplay()
            }
            _initEvents() {
                this._timenav.on("change", this._onTimeNavChange, this), this._timenav.on("zoomtoggle", this._onZoomToggle, this), this._timenav.on("visible_ticks_change", this._onVisibleTicksChange, this), this._storyslider.on("change", this._onSlideChange, this), this._storyslider.on("colorchange", this._onColorChange, this), this._storyslider.on("nav_next", this._onStorySliderNext, this), this._storyslider.on("nav_previous", this._onStorySliderPrevious, this), this._menubar.on("zoom_in", this._onZoomIn, this), this._menubar.on("zoom_out", this._onZoomOut, this), this._menubar.on("forward_to_end", this._onForwardToEnd, this), this._menubar.on("back_to_start", this._onBackToStart, this)
            }
            _onColorChange(t) {
                this.fire("color_change", {
                    unique_id: this.current_id
                }, this)
            }
            _onSlideChange(t) {
                this.current_id != t.unique_id && (this.current_id = t.unique_id, this._timenav.goToId(this.current_id), this._onChange(t))
            }
            _onTimeNavChange(t) {
                this.current_id != t.unique_id && (this.current_id = t.unique_id, this._storyslider.goToId(this.current_id), this._onChange(t))
            }
            _onZoomToggle(t) {
                "in" == t.zoom ? this._menubar.toogleZoomIn(t.show) : "out" == t.zoom && this._menubar.toogleZoomOut(t.show)
            }
            _onChange(t) {
                this.fire("change", {
                    unique_id: this.current_id
                }, this), this.options.hash_bookmark && this.current_id && this._updateHashBookmark(this.current_id)
            }
            _onVisibleTicksChange(t) {
                this._menubar.changeVisibleTicks(t.visible_ticks)
            }
            _onForwardToEnd(t) {
                this.goToEnd(), this.fire("forward_to_end", {
                    unique_id: this.current_id
                }, this)
            }
            _onBackToStart(t) {
                this.goToStart(), this.fire("back_to_start", {
                    unique_id: this.current_id
                }, this)
            }
            _onZoomIn(t) {
                this._timenav.zoomIn(), this.fire("zoom_in", {
                    zoom_level: this._timenav.options.scale_factor
                }, this)
            }
            _onZoomOut(t) {
                this._timenav.zoomOut(), this.fire("zoom_out", {
                    zoom_level: this._timenav.options.scale_factor
                }, this)
            }
            _onTimeNavLoaded() {
                this._loaded.timenav = !0, this._onLoaded()
            }
            _onStorySliderLoaded() {
                this._loaded.storyslider = !0, this._onLoaded()
            }
            _onStorySliderNext(t) {
                this.fire("nav_next", t)
            }
            _onStorySliderPrevious(t) {
                this.fire("nav_previous", t)
            }
            _updateDisplay(t, e, i) {
                var a, s, n = this.options.duration,
                    o = this.options.base_class;
                i && (n = i), this.options.width = this._el.container.offsetWidth, this.options.height = this._el.container.offsetHeight, this.options.width <= this.options.skinny_size ? (o += " tl-skinny", this.options.layout = "portrait") : this.options.width <= this.options.medium_size ? (o += " tl-medium", this.options.layout = "landscape") : this.options.layout = "landscape", f && (this.options.layout = (a = "portrait", window.innerWidth > window.innerHeight && (a = "landscape"), Math.abs(window.orientation), a)), h ? (o += " tl-mobile", this.options.timenav_height = this._calculateTimeNavHeight(t, this.options.timenav_mobile_height_percentage)) : this.options.timenav_height = this._calculateTimeNavHeight(t), "portrait" == this.options.layout ? o += " tl-layout-portrait" : o += " tl-layout-landscape", this.options.storyslider_height = this.options.height - this.options.timenav_height, s = "top" == this.options.timenav_position ? Math.ceil(this.options.timenav_height) / 2 - this._el.menubar.offsetHeight / 2 - 19.5 : Math.round(this.options.storyslider_height + 1 + Math.ceil(this.options.timenav_height) / 2 - this._el.menubar.offsetHeight / 2 - 17.5), e ? (this._el.timenav.style.height = Math.ceil(this.options.timenav_height) + "px", this.animator_storyslider && this.animator_storyslider.stop(), this.animator_storyslider = st(this._el.storyslider, {
                    height: this.options.storyslider_height + "px",
                    duration: n / 2,
                    easing: tt
                }), this.animator_menubar && this.animator_menubar.stop(), this.animator_menubar = st(this._el.menubar, {
                    top: s + "px",
                    duration: n / 2,
                    easing: tt
                })) : (this._el.timenav.style.height = Math.ceil(this.options.timenav_height) + "px", this._el.storyslider.style.height = this.options.storyslider_height + "px", this._el.menubar.style.top = s + "px"), this.message && this.message.updateDisplay(this.options.width, this.options.height), this._timenav.updateDisplay(this.options.width, this.options.timenav_height, e), this._storyslider.updateDisplay(this.options.width, this.options.storyslider_height, e, this.options.layout), "rtl" == this.language.direction && (o += " tl-rtl"), this._el.container.className = o
            }
            _calculateTimeNavHeight(t, e) {
                var i = 0;
                return (this.options.timenav_height_percentage || e) && (i = e ? Math.round(this.options.height / 100 * e) : Math.round(this.options.height / 100 * this.options.timenav_height_percentage)), this._timenav.ready && this.options.timenav_height_min < this._timenav.getMinimumHeight() && (this.options.timenav_height_min = this._timenav.getMinimumHeight()), i < this.options.timenav_height_min && (i = this.options.timenav_height_min), i - 2 * this.options.marker_padding
            }
            _validateOptions() {
                for (var t = ["timenav_height", "timenav_height_min", "marker_height_min", "marker_width_min", "marker_padding", "start_at_slide", "slide_padding_lr"], e = 0; e < t.length; e++) {
                    var i = t[e],
                        a = this.options[i];
                    let s = !0;
                    "number" == typeof a ? s = a == parseInt(a) : "string" == typeof a && (s = a.match(/^\s*(\-?\d+)?\s*$/)), s || this.config.logError({
                        message_key: "invalid_integer_option",
                        detail: i
                    })
                }
            }
            _getSlideIndex(t) {
                if (this.config) {
                    if (this.config.title && this.config.title.unique_id == t) return 0;
                    for (var e = 0; e < this.config.events.length; e++)
                        if (t == this.config.events[e].unique_id) return this.config.title ? e + 1 : e
                }
                return -1
            }
            _getEventIndex(t) {
                for (var e = 0; e < this.config.events.length; e++)
                    if (t == this.config.events[e].unique_id) return e;
                return -1
            }
            _onLoaded() {
                if (this._loaded.storyslider && this._loaded.timenav && (this.fire("loaded", this.config), null != (t = this.options.start_at_end) && (1 == t || "true" == String(t).toLowerCase() || 1 == Number(t)) || this.options.start_at_slide > this.config.events.length ? this.goToEnd() : this.goTo(this.options.start_at_slide), this.options.hash_bookmark)) {
                    "" != window.location.hash ? this.goToId(window.location.hash.replace("#event-", "")) : this._updateHashBookmark(this.current_id);
                    let t = this;
                    window.addEventListener("hashchange", (function() {
                        0 == window.location.hash.indexOf("#event-") && t.goToId(window.location.hash.replace("#event-", ""))
                    }), !1)
                }
                var t
            }
            _updateHashBookmark(t) {
                if (t) {
                    var e = "#event-" + t.toString();
                    window.history.replaceState(null, "Browsing TimelineJS", e), this.fire("hash_updated", {
                        unique_id: this.current_id,
                        hashbookmark: "#event-" + t.toString()
                    }, this)
                }
            }
            zoomIn() {
                this._timenav.zoomIn()
            }
            zoomOut() {
                this._timenav.zoomOut()
            }
            setZoom(t) {
                this._timenav.setZoom(t)
            }
            goToId(t) {
                this.current_id != t && (this.current_id = t, this._timenav.goToId(this.current_id), this._storyslider.goToId(this.current_id, !1, !0), this.fire("change", {
                    unique_id: this.current_id
                }, this))
            }
            goTo(t) {
                if (!(t < 0)) try {
                    this.config.title ? 0 === t ? this.goToId(this.config.title.unique_id) : this.goToId(this.config.events[t - 1].unique_id) : this.goToId(this.config.events[t].unique_id)
                } catch {
                    return
                }
            }
            goToStart() {
                this.goTo(0)
            }
            goToEnd() {
                var t = this.config.events.length - 1;
                this.goTo(this.config.title ? t + 1 : t)
            }
            goToPrev() {
                this.goTo(this._getSlideIndex(this.current_id) - 1), this.focusContainer()
            }
            goToNext() {
                this.goTo(this._getSlideIndex(this.current_id) + 1), this.focusContainer()
            }
            add(t) {
                var e = this.config.addEvent(t),
                    i = this._getEventIndex(e),
                    a = this.config.events[i];
                this._storyslider.createSlide(a, this.config.title ? i + 1 : i), this._storyslider._updateDrawSlides(), this._timenav.createMarker(a, i), this._timenav._updateDrawTimeline(!1), this.fire("added", {
                    unique_id: e
                })
            }
            remove(t) {
                if (t >= 0 && t < this.config.events.length) {
                    this.config.events[t].unique_id == this.current_id && (t < this.config.events.length - 1 ? this.goTo(t + 1) : this.goTo(t - 1));
                    var e = this.config.events.splice(t, 1);
                    delete this.config.event_dict[e[0].unique_id], this._storyslider.destroySlide(this.config.title ? t + 1 : t), this._storyslider._updateDrawSlides(), this._timenav.destroyMarker(t), this._timenav._updateDrawTimeline(!1), this.fire("removed", {
                        unique_id: e[0].unique_id
                    })
                }
            }
            removeId(t) {
                this.remove(this._getEventIndex(t))
            }
            getData(t) {
                if (this.config.title) {
                    if (0 == t) return this.config.title;
                    if (t > 0 && t <= this.config.events.length) return this.config.events[t - 1]
                } else if (t >= 0 && t < this.config.events.length) return this.config.events[t];
                return null
            }
            getDataById(t) {
                return this.getData(this._getSlideIndex(t))
            }
            getSlide(t) {
                return t >= 0 && t < this._storyslider._slides.length ? this._storyslider._slides[t] : null
            }
            getSlideById(t) {
                return this.getSlide(this._getSlideIndex(t))
            }
            getCurrentSlide() {
                return this.getSlideById(this.current_id)
            }
            updateDisplay() {
                this.ready ? this._updateDisplay() : D("updateDisplay called but timeline is not in ready state")
            }
            focusContainer() {
                this._el.container.focus()
            }
            _initGoogleAnalytics(t) {
                di(`https://www.googletagmanager.com/gtag/js?id=${t}`), window.dataLayer = window.dataLayer || [], window.gtag = function() {
                    dataLayer.push(arguments)
                }, gtag("js", new Date), gtag("config", t)
            }
            _initAnalytics() {
                let t = this.options.ga_measurement_id || this.options.ga_property_id || null;
                if (t) {
                    this._initGoogleAnalytics(t);
                    var e = this.options.track_events;
                    for (let t = 0; t < e.length; t++) {
                        var i = e[t];
                        this.addEventListener(i, (function(t) {
                            gtag("event", t.type)
                        }))
                    }
                }
            }
        }
        async function Vi(t, e) {
            return e || (e = "https://sheets-proxy.knightlab.com/proxy/"), await Ke(t, {
                sheets_proxy: e
            })
        }
        R(Zi, Rt, at)
    })(), TL = a
})();
//# sourceMappingURL=timeline.js.map