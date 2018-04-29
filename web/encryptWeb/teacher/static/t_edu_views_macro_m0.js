!function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? exports.Regular = e() : t.Regular = e()
}(this, function () {
    return function (t) {
        function e(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {exports: {}, id: r, loaded: !1};
            return t[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
        }

        var n = {};
        return e.m = t, e.c = n, e.p = "", e(0)
    }([function (t, e, n) {
        var r = n(1), i = n(2), a = t.exports = n(3), o = a.Parser, s = a.Lexer;
        r.browser && (n(6), n(7), n(8), a.dom = n(4)), a.env = r, a.util = n(5), a.parse = function (t, e) {
            e = e || {}, (e.BEGIN || e.END) && (e.BEGIN && (i.BEGIN = e.BEGIN), e.END && (i.END = e.END), s.setup());
            var n = new o(t).parse();
            return e.stringify ? JSON.stringify(n) : n
        }
    }, function (t, e, n) {
        var r = n(5);
        e.svg = function () {
            return "undefined" != typeof document && document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")
        }(), e.browser = "undefined" != typeof document && document.nodeType, e.exprCache = r.cache(1e3), e.isRunning = !1
    }, function (t) {
        t.exports = {BEGIN: "{", END: "}", PRECOMPILE: !1}
    }, function (t, e, n) {
        var r = n(1), i = n(12), a = n(13), o = n(2), s = n(5), u = n(14), c = {};
        if (r.browser) {
            var h = n(4), f = n(9), l = n(10), p = h.doc;
            c = n(15)
        }
        var d = n(16), v = n(17), m = n(18), g = n(19), y = function (t, e) {
            var n = r.isRunning;
            r.isRunning = !0;
            var i, o;
            t = t || {};
            var u = "string" == typeof this.template && !t.template;
            e = e || {}, t.data = t.data || {}, t.computed = t.computed || {}, this.data && s.extend(t.data, this.data), this.computed && s.extend(t.computed, this.computed);
            var f, l = this._eventListeners || [];
            t.events && (f = s.normListener(t.events), f.length && (l = l.concat(f)), delete t.events), s.extend(this, t, !0), this.$parent && this.$parent._append(this), this._children = [], this.$refs = {}, o = this.template, "string" == typeof o && o.length < 16 && (i = h.find(o)) && (o = i.innerHTML), o && o.nodeType && (o = o.innerHTML), "string" == typeof o && (o = new a(o).parse(), u ? this.constructor.prototype.template = o : delete this.template), this.computed = x(this.computed), this.$root = this.$root || this, l && l.length && l.forEach(function (t) {
                this.$on(t.type, t.listener)
            }.bind(this)), this.$emit("$config"), this.config && this.config(this.data), this.$emit("$afterConfig");
            var p = this._body;
            this._body = null, p && p.ast && p.ast.length && (this.$body = s.getCompileFn(p.ast, p.ctx, {
                outer: this,
                namespace: e.namespace,
                extra: e.extra,
                record: !0
            })), o && (this.group = this.$compile(o, {namespace: e.namespace}), c.node(this)), this.$parent || this.$update(), this.$ready = !0, this.$emit("$init"), this.init && this.init(this.data), this.$emit("$afterInit"), r.isRunning = n, this.devtools && this.devtools.emit("init", this)
        }, E = window.__REGULAR_DEVTOOLS_GLOBAL_HOOK__;
        E && (y.prototype.devtools = E), f && (f.Regular = y), s.extend(y, {
            _directives: {__regexp__: []},
            _plugins: {},
            _protoInheritCache: ["directive", "use"],
            __after__: function (t, e) {
                var n;
                if (this.__after__ = t.__after__, e.name && y.component(e.name, this), n = e.template) {
                    var r, i;
                    "string" == typeof n && n.length < 16 && (r = h.find(n)) && (n = r), n && n.nodeType && ((i = h.attr(n, "name")) && y.component(i, this), n = n.innerHTML), "string" == typeof n && (this.prototype.template = o.PRECOMPILE ? new a(n).parse() : n)
                }
                e.computed && (this.prototype.computed = x(e.computed)), y._inheritConfig(this, t)
            },
            directive: function (t, e) {
                if ("object" === s.typeOf(t)) {
                    for (var n in t) t.hasOwnProperty(n) && this.directive(n, t[n]);
                    return this
                }
                var r, i = s.typeOf(t), a = this._directives;
                if (null == e) {
                    if ("string" === i && (r = a[t])) return r;
                    for (var o = a.__regexp__, u = 0, c = o.length; c > u; u++) {
                        r = o[u];
                        var h = r.regexp.test(t);
                        if (h) return r
                    }
                    return void 0
                }
                return "function" == typeof e && (e = {link: e}), "string" === i ? a[t] = e : "regexp" === i && (e.regexp = t, a.__regexp__.push(e)), this
            },
            plugin: function (t, e) {
                var n = this._plugins;
                return null == e ? n[t] : (n[t] = e, this)
            },
            use: function (t) {
                return "string" == typeof t && (t = y.plugin(t)), "function" != typeof t ? this : (t(this, y), this)
            },
            config: function (t) {
                var e = !1;
                if ("object" == typeof t) for (var n in t) ("END" === n || "BEGIN" === n) && (e = !0), o[n] = t[n];
                e && i.setup()
            },
            expression: m.expression,
            Parser: a,
            Lexer: i,
            _addProtoInheritCache: function (t, e) {
                if (Array.isArray(t)) return t.forEach(y._addProtoInheritCache);
                var n = "_" + t + "s";
                y._protoInheritCache.push(t), y[n] = {}, y[t] || (y[t] = function (r, i) {
                    var a = this[n];
                    if ("object" == typeof r) {
                        for (var o in r) r.hasOwnProperty(o) && this[t](o, r[o]);
                        return this
                    }
                    return null == i ? a[r] : (a[r] = e ? e(i) : i, this)
                })
            },
            _inheritConfig: function (t, e) {
                var n = y._protoInheritCache, r = s.slice(n);
                return r.forEach(function (n) {
                    t[n] = e[n];
                    var r = "_" + n + "s";
                    e[r] && (t[r] = s.createObject(e[r]))
                }), t
            }
        }), u(y), y._addProtoInheritCache("component"), y._addProtoInheritCache("filter", function (t) {
            return "function" == typeof t ? {get: t} : t
        }), d.mixTo(y), v.mixTo(y), y.implement({
            init: function () {
            }, config: function () {
            }, destroy: function () {
                this.$emit("$destroy"), this._watchers = null, this.group && this.group.destroy(!0), this.group = null, this.parentNode = null, this._children = [];
                var t = this.$parent;
                if (t) {
                    var e = t._children.indexOf(this);
                    t._children.splice(e, 1)
                }
                this.$parent = null, this.$root = null, this._handles = null, this.$refs = null, this.devtools && this.devtools.emit("destroy", this)
            }, $compile: function (t, e) {
                e = e || {}, "string" == typeof t && (t = new a(t).parse());
                var n, r = this.__ext__, i = e.record;
                e.extra && (this.__ext__ = e.extra), i && this._record();
                var o = this._walk(t, e);
                if (i) {
                    n = this._release();
                    var s = this;
                    n.length && (o.ondestroy = function () {
                        s.$unwatch(n)
                    })
                }
                return e.extra && (this.__ext__ = r), o
            }, $bind: function (t, e, n) {
                var r = s.typeOf(e);
                if ("expression" === e.type || "string" === r) this._bind(t, e, n); else if ("array" === r) for (var i = 0, a = e.length; a > i; i++) this._bind(t, e[i]); else if ("object" === r) for (var i in e) e.hasOwnProperty(i) && this._bind(t, i, e[i]);
                return t.$update(), this
            }, $unbind: function () {
            }, $inject: c.inject, $mute: function (t) {
                t = !!t;
                var e = t === !1 && this._mute;
                return this._mute = !!t, e && this.$update(), this
            }, _bind: function (t, e, n) {
                var r = this;
                if (!(t && t instanceof y)) throw"$bind() should pass Regular component as first argument";
                if (!e) throw"$bind() should  pass as least one expression to bind";
                if (n || (n = e), e = m.expression(e), n = m.expression(n), n.set) {
                    var i = this.$watch(e, function (e) {
                        t.$update(n, e)
                    });
                    t.$on("$destroy", function () {
                        r.$unwatch(i)
                    })
                }
                if (e.set) {
                    var a = t.$watch(n, function (t) {
                        r.$update(e, t)
                    });
                    this.$on("$destroy", t.$unwatch.bind(t, a))
                }
                n.set(t, e.get(this))
            }, _walk: function (t, e) {
                if ("array" === s.typeOf(t)) {
                    for (var n = [], r = 0, i = t.length; i > r; r++) n.push(this._walk(t[r], e));
                    return new l(n)
                }
                return "string" == typeof t ? p.createTextNode(t) : f[t.type || "default"].call(this, t, e)
            }, _append: function (t) {
                this._children.push(t), t.$parent = this
            }, _handleEvent: function (t, e, n, r) {
                var i, a = this.constructor, o = "function" != typeof n ? s.handleEvent.call(this, n, e) : n,
                    u = a.event(e);
                return u ? i = u.call(this, t, o, r) : h.on(t, e, o), u ? i : function () {
                    h.off(t, e, o)
                }
            }, _touchExpr: function (t) {
                var e, n = this.__ext__, r = {};
                if ("expression" !== t.type || t.touched) return t;
                if (e = t.get || (t.get = new Function(s.ctxName, s.extName, s.prefix + "return (" + t.body + ")")), r.get = n ? function (t) {
                        return e(t, n)
                    } : e, t.setbody && !t.set) {
                    var i = t.setbody;
                    t.set = function (e, n, r) {
                        return t.set = new Function(s.ctxName, s.setName, s.extName, s.prefix + i), t.set(e, n, r)
                    }, t.setbody = null
                }
                return t.set && (r.set = n ? function (e, r) {
                    return t.set(e, r, n)
                } : t.set), s.extend(r, {type: "expression", touched: !0, once: t.once || t.constant}), r
            }, _f_: function (t) {
                var e = this.constructor, n = e.filter(t);
                if (!n) throw Error("filter " + t + " is undefined");
                return n
            }, _sg_: function (t, e, n) {
                if ("undefined" != typeof n) {
                    var r = this.computed, i = r[t];
                    if (i) {
                        if ("expression" !== i.type || i.get || this._touchExpr(i), i.get) return i.get(this);
                        s.log("the computed '" + t + "' don't define the get function,  get data." + t + " altnately", "warn")
                    }
                }
                return "undefined" == typeof e || "undefined" == typeof t ? void 0 : n && "undefined" != typeof n[t] ? n[t] : e[t]
            }, _ss_: function (t, e, n, r, i) {
                var a, i = this.computed, r = r || "=", o = i ? i[t] : null;
                if ("=" !== r) switch (a = o ? o.get(this) : n[t], r) {
                    case"+=":
                        e = a + e;
                        break;
                    case"-=":
                        e = a - e;
                        break;
                    case"*=":
                        e = a * e;
                        break;
                    case"/=":
                        e = a / e;
                        break;
                    case"%=":
                        e = a % e
                }
                if (o) {
                    if (o.set) return o.set(this, e);
                    s.log("the computed '" + t + "' don't define the set function,  assign data." + t + " altnately", "warn")
                }
                return n[t] = e, e
            }
        }), y.prototype.inject = function () {
            return s.log("use $inject instead of inject", "error"), this.$inject.apply(this, arguments)
        }, y.filter(g), t.exports = y;
        var x = function () {
            function t(t) {
                return function (e) {
                    return t.call(e, e.data)
                }
            }

            function e(t) {
                return function (e, n) {
                    return t.call(e, n, e.data), n
                }
            }

            return function (n) {
                if (n) {
                    var r, i, a, o = {};
                    for (var s in n) r = n[s], a = typeof r, "expression" !== r.type ? "string" === a ? o[s] = m.expression(r) : (i = o[s] = {type: "expression"}, "function" === a ? i.get = t(r) : (r.get && (i.get = t(r.get)), r.set && (i.set = e(r.set)))) : o[s] = r;
                    return o
                }
            }
        }()
    }, function (t, e, n) {
        function r(t) {
            return ("" + t).replace(/-\D/g, function (t) {
                return t.charAt(1).toUpperCase()
            })
        }

        function i(t, e) {
            return "change" === e && u.msie < 9 && t && t.tagName && "input" === t.tagName.toLowerCase() && ("checkbox" === t.type || "radio" === t.type) ? "click" : e
        }

        function a(t) {
            if (t = t || window.event, t._fixed) return t;
            this.event = t, this.target = t.target || t.srcElement;
            var e = this.type = t.type, n = this.button = t.button;
            if (m.test(e) && (this.pageX = null != t.pageX ? t.pageX : t.clientX + g.scrollLeft, this.pageY = null != t.pageX ? t.pageY : t.clientY + g.scrollTop, "mouseover" === e || "mouseout" === e)) {
                for (var r = t.relatedTarget || t[("mouseover" === e ? "from" : "to") + "Element"]; r && 3 === r.nodeType;) r = r.parentNode;
                this.relatedTarget = r
            }
            ("DOMMouseScroll" === e || "mousewheel" === e) && (this.wheelDelta = t.wheelDelta ? t.wheelDelta / 120 : -(t.detail || 0) / 3), this.which = t.which || t.keyCode, this.which || void 0 === n || (this.which = 1 & n ? 1 : 2 & n ? 3 : 4 & n ? 2 : 0), this._fixed = !0
        }

        var o, s, u = t.exports, c = n(1), h = n(5), f = n(11), l = document.createElement("div"), p = function () {
        }, d = f.NAMESPACE;
        u.body = document.body, u.doc = document, u.tNode = l, l.addEventListener ? (o = function (t, e, n) {
            t.addEventListener(e, n, !1)
        }, s = function (t, e, n) {
            t.removeEventListener(e, n, !1)
        }) : (o = function (t, e, n) {
            t.attachEvent("on" + e, n)
        }, s = function (t, e, n) {
            t.detachEvent("on" + e, n)
        }), u.msie = parseInt((/msie (\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1]), isNaN(u.msie) && (u.msie = parseInt((/trident\/.*; rv:(\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1])), u.find = function (t) {
            if (document.querySelector) try {
                return document.querySelector(t)
            } catch (e) {
            }
            return -1 !== t.indexOf("#") ? document.getElementById(t.slice(1)) : void 0
        }, u.inject = function (t, e, n) {
            if (n = n || "bottom", t) {
                if (Array.isArray(t)) {
                    var r = t;
                    t = u.fragment();
                    for (var i = 0, a = r.length; a > i; i++) t.appendChild(r[i])
                }
                var o, s;
                switch (n) {
                    case"bottom":
                        e.appendChild(t);
                        break;
                    case"top":
                        (o = e.firstChild) ? e.insertBefore(t, e.firstChild) : e.appendChild(t);
                        break;
                    case"after":
                        (s = e.nextSibling) ? s.parentNode.insertBefore(t, s) : e.parentNode.appendChild(t);
                        break;
                    case"before":
                        e.parentNode.insertBefore(t, e)
                }
            }
        }, u.id = function (t) {
            return document.getElementById(t)
        }, u.create = function (t, e) {
            if ("svg" === e) {
                if (!c.svg) throw Error("the env need svg support");
                e = d.svg
            }
            return e ? document.createElementNS(e, t) : document.createElement(t)
        }, u.fragment = function () {
            return document.createDocumentFragment()
        };
        var v = {
            "class": function (t, e) {
                "className" in t && (!t.namespaceURI || t.namespaceURI === d.html) ? t.className = e || "" : t.setAttribute("class", e)
            }, "for": function (t, e) {
                "htmlFor" in t ? t.htmlFor = e : t.setAttribute("for", e)
            }, style: function (t, e) {
                t.style ? t.style.cssText = e : t.setAttribute("style", e)
            }, value: function (t, e) {
                t.value = null != e ? e : ""
            }
        };
        u.attr = function (t, e, n) {
            if (h.isBooleanAttr(e)) {
                if ("undefined" == typeof n) return t[e] || (t.attributes.getNamedItem(e) || p).specified ? e : void 0;
                n ? (t[e] = !0, t.setAttribute(e, e), u.msie && u.msie <= 7 && "checked" === e && (t.defaultChecked = !0)) : (t[e] = !1, t.removeAttribute(e))
            } else if ("undefined" != typeof n) v[e] ? v[e](t, n) : null === n ? t.removeAttribute(e) : t.setAttribute(e, n); else if (t.getAttribute) {
                var r = t.getAttribute(e, 2);
                return null === r ? void 0 : r
            }
        }, u.on = function (t, e, n) {
            var r = e.split(" ");
            return n.real = function (e) {
                var r = new a(e);
                r.origin = t, n.call(t, r)
            }, r.forEach(function (e) {
                e = i(t, e), o(t, e, n.real)
            }), u
        }, u.off = function (t, e, n) {
            var r = e.split(" ");
            n = n.real || n, r.forEach(function (e) {
                e = i(t, e), s(t, e, n)
            })
        }, u.text = function () {
            var t = {};
            return u.msie && u.msie < 9 ? (t[1] = "innerText", t[3] = "nodeValue") : t[1] = t[3] = "textContent", function (e, n) {
                var r = t[e.nodeType];
                return null == n ? r ? e[r] : "" : void(e[r] = n)
            }
        }(), u.html = function (t, e) {
            return "undefined" == typeof e ? t.innerHTML : void(t.innerHTML = e)
        }, u.replace = function (t, e) {
            e.parentNode && e.parentNode.replaceChild(t, e)
        }, u.remove = function (t) {
            t.parentNode && t.parentNode.removeChild(t)
        }, u.css = function (t, e, n) {
            if ("object" !== h.typeOf(e)) {
                if ("undefined" == typeof n) {
                    var i;
                    return u.msie <= 8 && (i = t.currentStyle && t.currentStyle[e], "" === i && (i = "auto")), i = i || t.style[e], u.msie <= 8 && (i = "" === i ? void 0 : i), i
                }
                e = r(e), e && (t.style[e] = n)
            } else for (var a in e) e.hasOwnProperty(a) && u.css(t, a, e[a])
        }, u.addClass = function (t, e) {
            var n = t.className || "";
            -1 === (" " + n + " ").indexOf(" " + e + " ") && (t.className = n ? n + " " + e : e)
        }, u.delClass = function (t, e) {
            var n = t.className || "";
            t.className = (" " + n + " ").replace(" " + e + " ", " ").trim()
        }, u.hasClass = function (t, e) {
            var n = t.className || "";
            return -1 !== (" " + n + " ").indexOf(" " + e + " ")
        };
        var m = /^(?:click|dblclick|contextmenu|DOMMouseScroll|mouse(?:\w+))$/, g = document;
        g = g.compatMode && "CSS1Compat" !== g.compatMode ? g.body : g.documentElement, h.extend(a.prototype, {
            stop: function () {
                this.preventDefault().stopPropagation()
            }, preventDefault: function () {
                return this.event.preventDefault ? this.event.preventDefault() : this.event.returnValue = !1, this
            }, stopPropagation: function () {
                return this.event.stopPropagation ? this.event.stopPropagation() : this.event.cancelBubble = !0, this
            }, stopImmediatePropagation: function () {
                this.event.stopImmediatePropagation && this.event.stopImmediatePropagation()
            }
        }), u.nextFrame = function () {
            var t = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (t) {
                    return setTimeout(t, 16)
                },
                e = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || function (t) {
                    clearTimeout(t)
                };
            return function (n) {
                var r = t(n);
                return function () {
                    e(r)
                }
            }
        }();
        var y;
        u.nextReflow = u.msie ? function (t) {
            return u.nextFrame(function () {
                y = document.body.offsetWidth, t()
            })
        } : u.nextFrame
    }, function (t, e, n) {
        (function (e) {
            function r(t, e) {
                "undefined" != typeof console && console[e || "log"](t)
            }

            n(20)();
            var i = t.exports, a = n(21), o = [].slice, s = {}.toString, u = "undefined" != typeof window ? window : e,
                c = 9999;
            i.noop = function () {
            }, i.uid = function () {
                var t = 0;
                return function () {
                    return t++
                }
            }(), i.extend = function (t, e, n) {
                for (var r in e) e.hasOwnProperty(r) && (void 0 === t[r] || n === !0) && (t[r] = e[r]);
                return t
            }, i.keys = function (t) {
                if (Object.keys) return Object.keys(t);
                var e = [];
                for (var n in t) t.hasOwnProperty(n) && e.push(n);
                return e
            }, i.varName = "d", i.setName = "p_", i.ctxName = "c", i.extName = "e", i.rWord = /^[\$\w]+$/, i.rSimpleAccessor = /^[\$\w]+(\.[\$\w]+)*$/, i.nextTick = "function" == typeof setImmediate ? setImmediate.bind(u) : function (t) {
                setTimeout(t, 0)
            }, i.prefix = "var " + i.varName + "=" + i.ctxName + ".data;" + i.extName + "=" + i.extName + "||'';", i.slice = function (t, e, n) {
                for (var r = [], i = e || 0, a = n || t.length; a > i; i++) {
                    var o = t[i];
                    r.push(o)
                }
                return r
            }, i.typeOf = function (t) {
                return null == t ? String(t) : s.call(t).slice(8, -1).toLowerCase()
            }, i.makePredicate = function (t) {
                function e(t) {
                    if (1 === t.length) return n += "return str === '" + t[0] + "';";
                    n += "switch(str){";
                    for (var e = 0; e < t.length; ++e) n += "case '" + t[e] + "':";
                    n += "return true}return false;"
                }

                "string" == typeof t && (t = t.split(" "));
                var n = "", r = [];
                t:for (var i = 0; i < t.length; ++i) {
                    for (var a = 0; a < r.length; ++a) if (r[a][0].length === t[i].length) {
                        r[a].push(t[i]);
                        continue t
                    }
                    r.push([t[i]])
                }
                if (r.length > 3) {
                    r.sort(function (t, e) {
                        return e.length - t.length
                    }), n += "switch(str.length){";
                    for (var i = 0; i < r.length; ++i) {
                        var o = r[i];
                        n += "case " + o[0].length + ":", e(o)
                    }
                    n += "}"
                } else e(t);
                return new Function("str", n)
            }, i.trackErrorPos = function () {
                function t(t, e) {
                    for (var n = 0, r = 0, i = t.length; i > r; r++) {
                        var a = (t[r] || "").length;
                        if (n + a > e) return {num: r, line: t[r], start: e - r - n, prev: t[r - 1], next: t[r + 1]};
                        n += a
                    }
                }

                function e(t, e, n, a) {
                    var o = t.length, s = e - r;
                    0 > s && (s = 0);
                    var u = e + i;
                    u > o && (u = o);
                    var c = t.slice(s, u), h = "[" + (n + 1) + "] " + (s > 0 ? ".." : ""), f = o > u ? ".." : "",
                        l = h + c + f;
                    return a && (l += "\n" + new Array(e - s + h.length + 1).join(" ") + "^^^"), l
                }

                var n = /\r\n|[\n\r\u2028\u2029]/g, r = 20, i = 20;
                return function (r, i) {
                    i > r.length - 1 && (i = r.length - 1), n.lastIndex = 0;
                    var a = r.split(n), o = t(a, i), s = o.start, u = o.num;
                    return (o.prev ? e(o.prev, s, u - 1) + "\n" : "") + e(o.line, s, u, !0) + "\n" + (o.next ? e(o.next, s, u + 1) + "\n" : "")
                }
            }();
            var h = /\((\?\!|\?\:|\?\=)/g;
            i.findSubCapture = function (t) {
                var e = 0, n = 0, r = t.length, i = t.match(h);
                for (i = i ? i.length : 0; r--;) {
                    var a = t.charAt(r);
                    (0 === r || "\\" !== t.charAt(r - 1)) && ("(" === a && e++, ")" === a && n++)
                }
                if (e !== n) throw"RegExp: " + t + "'s bracket is not marched";
                return e - i
            }, i.escapeRegExp = function (t) {
                return t.replace(/[-[\]{}()*+?.\\^$|,#\s]/g, function (t) {
                    return "\\" + t
                })
            };
            var f = new RegExp("&(?:(#x[0-9a-fA-F]+)|(#[0-9]+)|(" + i.keys(a).join("|") + "));", "gi");
            i.convertEntity = function (t) {
                return ("" + t).replace(f, function (t, e, n, r) {
                    var i;
                    return i = n ? parseInt(n.slice(1), 10) : e ? parseInt(e.slice(2), 16) : a[r], String.fromCharCode(i)
                })
            }, i.createObject = function (t, e) {
                function n() {
                }

                n.prototype = t;
                var r = new n;
                return e && i.extend(r, e), r
            }, i.createProto = function (t, e) {
                function n() {
                    this.constructor = t
                }

                return n.prototype = e, t.prototype = new n
            }, i.removeOne = function (t, e) {
                for (var n = t.length; n--;) if (e(t[n])) return void t.splice(n, 1)
            }, i.clone = function (t) {
                var e = i.typeOf(t);
                if ("array" === e) {
                    for (var n = [], r = 0, a = t.length; a > r; r++) n[r] = t[r];
                    return n
                }
                if ("object" === e) {
                    var n = {};
                    for (var r in t) t.hasOwnProperty(r) && (n[r] = t[r]);
                    return n
                }
                return t
            }, i.equals = function (t, e) {
                var n = typeof t;
                return "number" === n && "number" == typeof e && isNaN(t) && isNaN(e) ? !0 : t === e
            };
            var l = /-([a-z])/g;
            i.camelCase = function (t) {
                return t.replace(l, function (t, e) {
                    return e.toUpperCase()
                })
            }, i.throttle = function (t, e) {
                var n, r, i, e = e || 100, a = null, o = 0, s = function () {
                    o = +new Date, a = null, i = t.apply(n, r), n = r = null
                };
                return function () {
                    var u = +new Date, c = e - (u - o);
                    return n = this, r = arguments, 0 >= c || c > e ? (clearTimeout(a), a = null, o = u, i = t.apply(n, r), n = r = null) : a || (a = setTimeout(s, c)), i
                }
            }, i.escape = function () {
                var t = /&/g, e = /</g, n = />/g, r = /\'/g, i = /\"/g, a = /[&<>\"\']/;
                return function (o) {
                    return a.test(o) ? o.replace(t, "&amp;").replace(e, "&lt;").replace(n, "&gt;").replace(r, "&#39;").replace(i, "&quot;") : o
                }
            }(), i.cache = function (t) {
                t = t || 1e3;
                var e = [], n = {};
                return {
                    set: function (t, r) {
                        return e.length > this.max && (n[e.shift()] = void 0), void 0 === n[t] && e.push(t), n[t] = r, r
                    }, get: function (t) {
                        return void 0 === t ? n : n[t]
                    }, max: t, len: function () {
                        return e.length
                    }
                }
            }, i.handleEvent = function (t) {
                var e, n = this;
                return "expression" === t.type && (e = t.get), e ? function (t) {
                    n.$update(function () {
                        var r = this.data;
                        r.$event = t;
                        var i = e(n);
                        i === !1 && t && t.preventDefault && t.preventDefault(), r.$event = void 0
                    })
                } : function () {
                    var e = o.call(arguments);
                    e.unshift(t), n.$update(function () {
                        n.$emit.apply(n, e)
                    })
                }
            }, i.once = function (t) {
                var e = 0;
                return function () {
                    0 === e++ && t.apply(this, arguments)
                }
            }, i.fixObjStr = function (t) {
                return 0 !== t.trim().indexOf("{") ? "{" + t + "}" : t
            }, i.map = function (t, e) {
                for (var n = [], r = 0, i = t.length; i > r; r++) n.push(e(t[r], r));
                return n
            }, i.log = r, i.normListener = function (t) {
                var e = [], n = i.typeOf(t);
                if ("array" === n) return t;
                if ("object" === n) for (var r in t) t.hasOwnProperty(r) && e.push({type: r, listener: t[r]});
                return e
            }, i.isVoidTag = i.makePredicate("area base br col embed hr img input keygen link menuitem meta param source track wbr r-content"), i.isBooleanAttr = i.makePredicate("selected checked disabled readonly required open autofocus controls autoplay compact loop defer multiple"), i.isExpr = function (t) {
                return t && "expression" === t.type
            }, i.isGroup = function (t) {
                return t.inject || t.$inject
            }, i.getCompileFn = function (t, e, n) {
                return e.$compile.bind(e, t, n)
            }, i.fixTagAST = function (t, e) {
                if (!t.touched) {
                    var n = t.attrs;
                    if (n) {
                        var r = n.length;
                        if (r) {
                            for (var a = [], o = {}; r--;) {
                                var s = n[r];
                                "type" === s.name && (s.priority = c + 1);
                                var u = e.directive(s.name);
                                u ? (s.priority = u.priority || 1, s.directive = !0, a.push(s)) : "attribute" === s.type && (o[s.name] = s.value)
                            }
                            a.forEach(function (t) {
                                var r = e.directive(t.name), a = r.param;
                                a && a.length && (t.param = {}, a.forEach(function (e) {
                                    e in o && (t.param[e] = void 0 === o[e] ? !0 : o[e], i.removeOne(n, function (t) {
                                        return t.name === e
                                    }))
                                }))
                            }), n.sort(function (t, e) {
                                var n = t.priority, r = e.priority;
                                return null == n && (n = c), null == r && (r = c), r - n
                            }), t.touched = !0
                        }
                    }
                }
            }, i.findItem = function (t, e) {
                if (t && t.length) for (var n = t.length; n--;) if (e(t[n])) return t[n]
            }, i.getParamObj = function (t, e) {
                var n = {};
                if (e) for (var r in e) if (e.hasOwnProperty(r)) {
                    var i = e[r];
                    n[r] = i && "expression" === i.type ? t.$get(i) : i
                }
                return n
            }
        }).call(e, function () {
            return this
        }())
    }, function (t, e, n) {
        var r = n(5), i = n(4), a = (n(22), n(3)), o = n(11), s = o.NAMESPACE;
        n(23), n(24), t.exports = {
            "r-class": function (t, e) {
                "string" == typeof e && (e = r.fixObjStr(e));
                var n = t.namespaceURI && t.namespaceURI !== s.html;
                this.$watch(e, function (e) {
                    var r = n ? t.getAttribute("class") : t.className;
                    r = " " + (r || "").replace(/\s+/g, " ") + " ";
                    for (var a in e) e.hasOwnProperty(a) && (r = r.replace(" " + a + " ", " "), e[a] === !0 && (r += a + " "));
                    r = r.trim(), n ? i.attr(t, "class", r) : t.className = r
                }, !0)
            }, "r-style": function (t, e) {
                "string" == typeof e && (e = r.fixObjStr(e)), this.$watch(e, function (e) {
                    for (var n in e) e.hasOwnProperty(n) && i.css(t, n, e[n])
                }, !0)
            }, "r-hide": function (t, e) {
                var n, i = null;
                r.isExpr(e) || "string" == typeof e ? this.$watch(e, function (e) {
                    var r = !!e;
                    r !== i && (i = r, r ? t.onleave ? n = t.onleave(function () {
                        t.style.display = "none", n = null
                    }) : t.style.display = "none" : (n && n(), t.style.display = "", t.onenter && t.onenter()))
                }) : e && (t.style.display = "none")
            }, "r-html": function (t, e) {
                this.$watch(e, function (e) {
                    e = e || "", i.html(t, e)
                }, {force: !0})
            }, ref: {
                accept: o.COMPONENT_TYPE + o.ELEMENT_TYPE, link: function (t, e) {
                    var n, i = this.$refs || (this.$refs = {});
                    return r.isExpr(e) ? this.$watch(e, function (e, r) {
                        n = e, i[r] === t && (i[r] = null), n && (i[n] = t)
                    }) : i[n = e] = t, function () {
                        i[n] = null
                    }
                }
            }
        }, a.directive(t.exports)
    }, function (t, e, n) {
        function r(t) {
            var e, n = [], r = 0, i = a.noop, o = {
                type: t, start: function (t) {
                    return e = a.uid(), "function" == typeof t && (i = t), r > 0 ? r = 0 : o.step(), o.compelete
                }, compelete: function () {
                    e = null, i && i(), i = a.noop, r = 0
                }, step: function () {
                    n[r] && n[r](o.done.bind(o, e))
                }, done: function (t) {
                    t === e && (r < n.length - 1 ? (r++, o.step()) : o.compelete())
                }, push: function (t) {
                    n.push(t)
                }
            };
            return o
        }

        function i(t, e) {
            function n(t) {
                f && g.push(f), f = r(t)
            }

            function i(t, e) {
                e && t()
            }

            function o(t) {
                return function () {
                    t.onenter = null, t.onleave = null
                }
            }

            var s = this.constructor;
            a.isExpr(e) && (e = e.get(this)), e = e.trim();
            for (var u, f, l, p, d, v, m = e.split(";"), g = [], y = [], E = 0, x = m.length; x > E; E++) if (u = m[E], d = u.split(":"), l = d[0] && d[0].trim(), p = d[1] && d[1].trim(), l) if (l !== c) if (l !== h) {
                var v = s.animation(l);
                if (!v || !f) throw Error(v ? "you should start with `on` or `event` in animation" : "undefined animator 【" + l + "】");
                f.push(v.call(this, {element: t, done: f.done, param: p}))
            } else n(p), "leave" === p ? (t.onleave = f.start, y.push(o(t))) : "enter" === p ? (t.onenter = f.start, y.push(o(t))) : "on" + p in t ? y.push(this._handleEvent(t, p, f.start)) : (this.$on(p, f.start), y.push(this.$off.bind(this, p, f.start))); else n("when"), this.$watch(p, i.bind(this, f.start));
            return y.length ? function () {
                y.forEach(function (t) {
                    t()
                })
            } : void 0
        }

        var a = n(5), o = n(22), s = (n(4), n(3)), u = /\s+/, c = "when", h = "on";
        s._addProtoInheritCache("animation"), s.animation({
            wait: function (t) {
                var e = parseInt(t.param) || 0;
                return function (t) {
                    setTimeout(t, e)
                }
            }, "class": function (t) {
                var e = t.param.split(","), n = e[0] || "", r = parseInt(e[1]) || 1;
                return function (e) {
                    o.startClassAnimate(t.element, n, e, r)
                }
            }, call: function (t) {
                var e = this.$expression(t.param).get, n = this;
                return function (t) {
                    e(n), n.$update(), t()
                }
            }, emit: function (t) {
                var e = t.param, n = e.split(","), r = n[0] || "", i = n[1] ? this.$expression(n[1]).get : null;
                if (!r) throw Error("you shoud specified a eventname in emit command");
                var a = this;
                return function (t) {
                    a.$emit(r, i ? i(a) : void 0), t()
                }
            }, style: function (t) {
                var e, n = {}, r = t.param, i = r.split(",");
                return i.forEach(function (t) {
                    if (t = t.trim()) {
                        var r = t.split(u), i = r.shift(), a = r.join(" ");
                        if (!i || !a) throw Error("invalid style in command: style");
                        n[i] = a, e = !0
                    }
                }), function (r) {
                    e ? o.startStyleAnimate(t.element, n, r) : r()
                }
            }
        }), s.directive("r-animation", i), s.directive("r-anim", i)
    }, function (t, e, n) {
        function r(t) {
            t.implement({
                $timeout: function (t, e) {
                    return e = e || 0, setTimeout(function () {
                        t.call(this), this.$update()
                    }.bind(this), e)
                }, $interval: function (t, e) {
                    return e = e || 1e3 / 60, setInterval(function () {
                        t.call(this), this.$update()
                    }.bind(this), e)
                }
            })
        }

        var i = n(3);
        i.plugin("timeout", r), i.plugin("$timeout", r)
    }, function (t, e, n) {
        function r(t, e) {
            return "object" === e ? h.keys(t) : "array" === e ? t : []
        }

        function i(t, e, n) {
            for (var r = [], i = 0, a = t.length; a > i; i++) {
                var o = this._walk(t[i], {element: e, fromElement: !0, attrs: t, extra: n});
                o && r.push(o)
            }
            return r
        }

        var a = n(25).diffArray, o = n(15), s = n(22), u = (n(26), n(10)), c = n(4), h = n(5), f = t.exports = {};
        f.list = function (t, e) {
            function n(t, e) {
                for (var n = 0; e > n; n++) {
                    var r = T.children.splice(t + 1, 1)[0];
                    r && r.destroy(!0)
                }
            }

            function i(n, r, i, a) {
                for (var u = n; r > u; u++) {
                    var f = i[u], l = {};
                    c(l, u, f, a), l = h.createObject(x, l);
                    var p = _.$compile(t.body, {extra: l, namespace: E, record: !0, outer: e.outer});
                    p.data = l;
                    var d = o.last(T.get(u));
                    d.parentNode && s.inject(o.node(p), d, "after"), T.children.splice(u + 1, 0, p)
                }
            }

            function c(t, e, n, r) {
                t[N] = e, r ? (t[w] = n, t[b] = r[n]) : (t[b] = n, t[w] = null)
            }

            function l(t, e, n, r) {
                for (var i = t; e > i; i++) {
                    var a = T.get(i + 1), o = n[i];
                    c(a.data, i, o, r)
                }
            }

            function p(t, e, r, o) {
                var s = 0, u = t.length;
                if (r || 0 === u && 0 === e.length || (r = a(t, e, !0)), r && r.length) {
                    for (var c = 0; c < r.length; c++) {
                        var h = r[c], f = h.index, p = h.removed, d = h.add, v = p.length;
                        if (A && v && d) {
                            for (var g = Math.min(v, d), y = 0; g > y;) m(t[f], f) !== m(p[0], f) && (n(f, 1), i(f, f + 1, t, o)), p.shift(), d--, f++, y++;
                            v = p.length
                        }
                        l(s, f, t, o), n(f, v), i(f, f + d, t, o), s = f + d - v, s = 0 > s ? 0 : s
                    }
                    if (u > s) for (var c = s; u > c; c++) {
                        var E = T.get(c + 1);
                        E.data[N] = c
                    }
                }
            }

            function d(t, e, r) {
                var a = t.length, o = e.length, s = Math.min(a, o);
                l(0, s, t, r), o > a ? n(a, o - a) : a > o && i(o, a, t, r)
            }

            function v(t, n, i) {
                var a, u = h.typeOf(t), c = h.typeOf(n), f = r(t, u), l = r(n, c), v = f && f.length, m = l && l.length;
                if (!m && v && T.get(1)) {
                    var g = T.children.pop();
                    g.destroy && g.destroy(!0)
                }
                if ("object" === u && (a = t), A === !0 ? d(f, l, a) : p(f, l, i, a), !v && $ && $.length) {
                    var N = _.$compile($, {extra: x, record: !0, outer: e.outer, namespace: E});
                    T.children.push(N), y.parentNode && s.inject(o.node(N), y, "after")
                }
            }

            var m, g, y = (f.Regular, document.createComment("Regular list")), E = e.namespace, x = e.extra, _ = this,
                T = new u([y]), N = t.variable + "_index", w = t.variable + "_key", b = t.variable, $ = t.alternate,
                A = t.track;
            return A && A !== !0 && (A = this._touchExpr(A), g = h.createObject(x), m = function (t, e) {
                return g[b] = t, g[N] = e, A.get(_, g)
            }), this.$watch(t.sequence, v, {init: !0, diff: A !== !0, deep: !0}), T
        }, f.template = function (t, e) {
            var n, n, r = t.content, i = document.createComment("inlcude"), a = e.namespace, o = e.extra,
                s = new u([i]);
            if (r) {
                var c = this;
                this.$watch(r, function (t) {
                    var r = s.get(1), u = typeof t;
                    r && (r.destroy(!0), s.children.pop()), t && (s.push(n = "function" === u ? t() : c.$compile("object" !== u ? String(t) : t, {
                        record: !0,
                        outer: e.outer,
                        namespace: a,
                        extra: o
                    })), i.parentNode && n.$inject(i, "before"))
                }, {init: !0})
            }
            return s
        };
        var l = 0;
        f["if"] = function (t, e) {
            var n, r, i = this, a = e.extra;
            if (e && e.element) {
                var c = function (s) {
                    s ? (r && o.destroy(r), t.consequent && (n = i.$compile(t.consequent, {
                        record: !0,
                        element: e.element,
                        extra: a
                    }))) : (n && o.destroy(n), t.alternate && (r = i.$compile(t.alternate, {
                        record: !0,
                        element: e.element,
                        extra: a
                    })))
                };
                return this.$watch(t.test, c, {force: !0}), {
                    destroy: function () {
                        n ? o.destroy(n) : r && o.destroy(r)
                    }
                }
            }
            var n, r, h = document.createComment("Regular if" + l++), f = new u;
            f.push(h);
            var p = null, d = e.namespace, c = function (u) {
                var c = !!u;
                c !== p && (p = c, f.children[1] && (f.children[1].destroy(!0), f.children.pop()), c ? t.consequent && t.consequent.length && (n = i.$compile(t.consequent, {
                    record: !0,
                    outer: e.outer,
                    namespace: d,
                    extra: a
                }), f.push(n), h.parentNode && s.inject(o.node(n), h, "before")) : t.alternate && t.alternate.length && (r = i.$compile(t.alternate, {
                    record: !0,
                    outer: e.outer,
                    namespace: d,
                    extra: a
                }), f.push(r), h.parentNode && s.inject(o.node(r), h, "before")))
            };
            return this.$watch(t.test, c, {force: !0, init: !0}), f
        }, f.expression = function (t) {
            var e = document.createTextNode("");
            return this.$watch(t, function (t) {
                c.text(e, "" + (null == t ? "" : "" + t))
            }, {init: !0}), e
        }, f.text = function (t) {
            var e = document.createTextNode(h.convertEntity(t.text));
            return e
        };
        var p = /^on-(.+)$/;
        f.element = function (t, e) {
            var n, r, a = t.attrs, u = this.constructor, l = t.children, p = e.namespace, d = e.extra, v = t.tag,
                m = u.component(v);
            if ("r-content" === v) return h.log("r-content is deprecated, use {#inc this.$body} instead (`{#include}` as same)", "warn"), this.$body && this.$body();
            if (m || "r-component" === v) return e.Component = m, f.component.call(this, t, e);
            "svg" === v && (p = "svg"), l && l.length && (n = this.$compile(l, {
                outer: e.outer,
                namespace: p,
                extra: d
            })), r = c.create(v, p, a), n && !h.isVoidTag(v) && c.inject(o.node(n), r), h.fixTagAST(t, u);
            var g = i.call(this, a, r, d);
            return {
                type: "element", group: n, node: function () {
                    return r
                }, last: function () {
                    return r
                }, destroy: function (t) {
                    t ? s.remove(r, n ? n.destroy.bind(n) : h.noop) : n && n.destroy(), g.length && g.forEach(function (t) {
                        t && ("function" == typeof t.destroy ? t.destroy() : t())
                    })
                }
            }
        }, f.component = function (t, e) {
            for (var n, r, i, a, s = t.attrs, c = e.Component, f = this.constructor, l = e.extra, d = e.namespace, v = this, m = {}, g = 0, y = s.length; y > g; g++) {
                var E = s[g], x = this._touchExpr(void 0 === E.value ? !0 : E.value);
                x.constant && (x = E.value = x.get(this)), E.value && E.value.constant === !0 && (x = x.get(this));
                var _ = E.name;
                if (!E.event) {
                    var T = _.match(p);
                    T && (E.event = T[1])
                }
                if ("cmpl" === E.mdf && (x = h.getCompileFn(x, this, {
                        record: !0,
                        namespace: d,
                        extra: l,
                        outer: e.outer
                    })), "is" === _ && !c) {
                    i = x;
                    var N = this.$get(x, !0);
                    if (c = f.component(N), "function" != typeof c) throw new Error("component " + N + " has not registed!")
                }
                var w;
                (w = E.event) ? (a = a || {}, a[w] = h.handleEvent.call(this, x, w)) : (_ = E.name = h.camelCase(_), m[_] = x && "expression" === x.type ? x.get(v) : x, "ref" === _ && null != x && (r = x), "isolate" === _ && (n = "expression" === x.type ? x.get(v) : parseInt(x === !0 ? 3 : x, 10), m.isolate = n))
            }
            var b, $ = {
                data: m,
                events: a,
                $parent: 2 & n ? null : this,
                $root: this.$root,
                $outer: e.outer,
                _body: {ctx: this, ast: t.children}
            }, e = {namespace: d, extra: e.extra}, A = new c($, e);
            r && this.$refs && (b = c.directive("ref").link, this.$on("$destroy", b.call(this, A, r))), r && v.$refs && (v.$refs[r] = A);
            for (var g = 0, y = s.length; y > g; g++) {
                var E = s[g], x = E.value || !0, _ = E.name;
                "expression" !== x.type || E.event || (x = v._touchExpr(x), 2 & n || this.$watch(x, function (t, e) {
                    this.data[t] = e
                }.bind(A, _), {sync: !0}), !x.set || 1 & n || A.$watch(_, v.$update.bind(v, x), {init: !0}))
            }
            if (i && "expression" === i.type) {
                var S = new u;
                return S.push(A), this.$watch(i, function (t) {
                    var e = f.component(t);
                    if (!e) throw new Error("component " + t + " has not registed!");
                    var n = new e($), i = S.children.pop();
                    S.push(n), n.$inject(o.last(i), "after"), i.destroy(), r && (v.$refs[r] = n)
                }, {sync: !0}), S
            }
            return A
        }, f.attribute = function (t, e) {
            var n = t, r = n.name, i = n.value || "", a = i.constant, o = this.constructor, s = o.directive(r),
                u = e.element, f = this;
            if (i = this._touchExpr(i), a && (i = i.get(this)), s && s.link) {
                var l = {attrs: e.attrs, param: h.getParamObj(this, n.param)}, p = s.link.call(f, u, i, r, l);
                return "function" == typeof s.update && (h.isExpr(i) ? this.$watch(i, function (t, e) {
                    s.update.call(f, u, t, e, l)
                }) : s.update.call(f, u, i, void 0, l)), "function" == typeof p && (p = {destroy: p}), p
            }
            return "expression" === i.type ? this.$watch(i, function (t) {
                c.attr(u, r, t)
            }, {init: !0}) : h.isBooleanAttr(r) ? c.attr(u, r, !0) : c.attr(u, r, i), e.fromElement ? void 0 : {
                destroy: function () {
                    c.attr(u, r, null)
                }
            }
        }
    }, function (t, e, n) {
        function r(t) {
            this.children = t || []
        }

        var i = n(5), a = n(15), o = i.extend(r.prototype, {
            destroy: function (t) {
                a.destroy(this.children, t), this.ondestroy && this.ondestroy(), this.children = null
            }, get: function (t) {
                return this.children[t]
            }, push: function (t) {
                this.children.push(t)
            }
        });
        o.inject = o.$inject = a.inject, t.exports = r
    }, function (t) {
        t.exports = {
            COMPONENT_TYPE: 1,
            ELEMENT_TYPE: 2,
            NAMESPACE: {html: "http://www.w3.org/1999/xhtml", svg: "http://www.w3.org/2000/svg"}
        }
    }, function (t, e, n) {
        function r(t) {
            return function (e) {
                return {type: t, value: e}
            }
        }

        function i(t, e) {
            f[h.END] && (this.markStart = f[h.END], this.markEnd = h.END), this.input = (t || "").trim(), this.opts = e || {}, this.map = 2 !== this.opts.mode ? s : u, this.states = ["INIT"], e && e.expression && (this.states.push("JST"), this.expression = !0)
        }

        function a(t) {
            for (var e, n, r = {}, i = 0, a = t.length; a > i; i++) e = t[i], n = e[2] || "INIT", (r[n] || (r[n] = {
                rules: [],
                links: []
            })).rules.push(e);
            return o(r)
        }

        function o(t) {
            function e(t, e) {
                return "string" == typeof l[e] ? c.escapeRegExp(l[e]) : String(l[e]).slice(1, -1)
            }

            var n, i, a, o, s, u, h;
            for (var f in t) {
                n = t[f], n.curIndex = 1, i = n.rules, a = [];
                for (var p = 0, d = i.length; d > p; p++) h = i[p], s = h[0], o = h[1], "string" == typeof o && (o = r(o)), "regexp" === c.typeOf(s) && (s = s.toString().slice(1, -1)), s = s.replace(/\{(\w+)\}/g, e), u = c.findSubCapture(s) + 1, n.links.push([n.curIndex, u, o]), n.curIndex += u, a.push(s);
                n.TRUNK = new RegExp("^(?:(" + a.join(")|(") + "))")
            }
            return t
        }

        var s, u, c = n(5), h = n(2), f = {"}": "{", "]": "["},
            l = {NAME: /(?:[:_A-Za-z][-\.:_0-9A-Za-z]*)/, IDENT: /[\$_A-Za-z][_0-9A-Za-z\$]*/, SPACE: /[\r\n\t\f ]/},
            p = /a|(b)/.exec("a"), d = p && void 0 === p[1] ? function (t) {
                return void 0 !== t
            } : function (t) {
                return !!t
            }, v = i.prototype;
        v.lex = function (t) {
            t = (t || this.input).trim();
            var e, n, r, i, a, o = [];
            this.input = t, this.marks = 0, this.index = 0;
            for (var s = 0; t;) s++, a = this.state(), e = this.map[a], n = e.TRUNK.exec(t), n || this.error("Unrecoginized Token"), r = n[0].length, t = t.slice(r), i = this._process.call(this, n, e, t), i && o.push(i), this.index += r;
            return o.push({type: "EOF"}), o
        }, v.error = function (t) {
            throw Error("Parse Error: " + t + ":\n" + c.trackErrorPos(this.input, this.index))
        }, v._process = function (t, e, n) {
            for (var r, i = e.links, a = !1, o = i.length, s = 0; o > s; s++) {
                var u = i[s], c = u[2], h = u[0];
                if (d(t[h])) {
                    a = !0, c && (r = c.apply(this, t.slice(h, h + u[1])), r && (r.pos = this.index));
                    break
                }
            }
            if (!a) switch (n.charAt(0)) {
                case"<":
                    this.enter("TAG");
                    break;
                default:
                    this.enter("JST")
            }
            return r
        }, v.enter = function (t) {
            return this.states.push(t), this
        }, v.state = function () {
            var t = this.states;
            return t[t.length - 1]
        }, v.leave = function (t) {
            var e = this.states;
            t && e[e.length - 1] !== t || e.pop()
        }, i.setup = function () {
            l.END = h.END, l.BEGIN = h.BEGIN, s = a([m.ENTER_JST, m.ENTER_TAG, m.TEXT, m.TAG_NAME, m.TAG_OPEN, m.TAG_CLOSE, m.TAG_PUNCHOR, m.TAG_ENTER_JST, m.TAG_UNQ_VALUE, m.TAG_STRING, m.TAG_SPACE, m.TAG_COMMENT, m.JST_OPEN, m.JST_CLOSE, m.JST_COMMENT, m.JST_EXPR_OPEN, m.JST_IDENT, m.JST_SPACE, m.JST_LEAVE, m.JST_NUMBER, m.JST_PUNCHOR, m.JST_STRING, m.JST_COMMENT]), u = a([m.ENTER_JST2, m.TEXT, m.JST_COMMENT, m.JST_OPEN, m.JST_CLOSE, m.JST_EXPR_OPEN, m.JST_IDENT, m.JST_SPACE, m.JST_LEAVE, m.JST_NUMBER, m.JST_PUNCHOR, m.JST_STRING, m.JST_COMMENT])
        };
        var m = {
            ENTER_JST: [/[^\x00<]*?(?={BEGIN})/, function (t) {
                return this.enter("JST"), t ? {type: "TEXT", value: t} : void 0
            }],
            ENTER_JST2: [/[^\x00]*?(?={BEGIN})/, function (t) {
                return this.enter("JST"), t ? {type: "TEXT", value: t} : void 0
            }],
            ENTER_TAG: [/[^\x00]*?(?=<[\w\/\!])/, function (t) {
                return this.enter("TAG"), t ? {type: "TEXT", value: t} : void 0
            }],
            TEXT: [/[^\x00]+/, "TEXT"],
            TAG_NAME: [/{NAME}/, "NAME", "TAG"],
            TAG_UNQ_VALUE: [/[^\{}&"'=><`\r\n\f\t ]+/, "UNQ", "TAG"],
            TAG_OPEN: [/<({NAME})\s*/, function (t, e) {
                return {type: "TAG_OPEN", value: e}
            }, "TAG"],
            TAG_CLOSE: [/<\/({NAME})[\r\n\f\t ]*>/, function (t, e) {
                return this.leave(), {type: "TAG_CLOSE", value: e}
            }, "TAG"],
            TAG_ENTER_JST: [/(?={BEGIN})/, function () {
                this.enter("JST")
            }, "TAG"],
            TAG_PUNCHOR: [/[\>\/=&]/, function (t) {
                return ">" === t && this.leave(), {type: t, value: t}
            }, "TAG"],
            TAG_STRING: [/'([^']*)'|"([^"]*)\"/, function (t, e, n) {
                var r = e || n || "";
                return {type: "STRING", value: r}
            }, "TAG"],
            TAG_SPACE: [/{SPACE}+/, null, "TAG"],
            TAG_COMMENT: [/<\!--([^\x00]*?)--\>/, function () {
                this.leave()
            }, "TAG"],
            JST_OPEN: ["{BEGIN}#{SPACE}*({IDENT})", function (t, e) {
                return {type: "OPEN", value: e}
            }, "JST"],
            JST_LEAVE: [/{END}/, function (t) {
                return this.markEnd === t && this.expression ? {
                    type: this.markEnd,
                    value: this.markEnd
                } : this.markEnd && this.marks ? (this.marks--, {
                    type: this.markEnd,
                    value: this.markEnd
                }) : (this.firstEnterStart = !1, this.leave("JST"), {type: "END"})
            }, "JST"],
            JST_CLOSE: [/{BEGIN}\s*\/({IDENT})\s*{END}/, function (t, e) {
                return this.leave("JST"), {type: "CLOSE", value: e}
            }, "JST"],
            JST_COMMENT: [/{BEGIN}\!([^\x00]*?)\!{END}/, function () {
                this.leave()
            }, "JST"],
            JST_EXPR_OPEN: ["{BEGIN}", function (t) {
                if (t === this.markStart) {
                    if (this.expression) return {type: this.markStart, value: this.markStart};
                    if (this.firstEnterStart || this.marks) return this.marks++, this.firstEnterStart = !1, {
                        type: this.markStart,
                        value: this.markStart
                    };
                    this.firstEnterStart = !0
                }
                return {type: "EXPR_OPEN", escape: !1}
            }, "JST"],
            JST_IDENT: ["{IDENT}", "IDENT", "JST"],
            JST_SPACE: [/[ \r\n\f]+/, null, "JST"],
            JST_PUNCHOR: [/[=!]?==|[-=><+*\/%\!]?\=|\|\||&&|\@\(|\.\.|[<\>\[\]\(\)\-\|\{}\+\*\/%?:\.!,]/, function (t) {
                return {type: t, value: t}
            }, "JST"],
            JST_STRING: [/'([^']*)'|"([^"]*)"/, function (t, e, n) {
                return {type: "STRING", value: e || n || ""}
            }, "JST"],
            JST_NUMBER: [/(?:[0-9]*\.[0-9]+|[0-9]+)(e\d+)?/, function (t) {
                return {type: "NUMBER", value: parseFloat(t, 10)}
            }, "JST"]
        };
        i.setup(), t.exports = i
    }, function (t, e, n) {
        function r(t, e) {
            e = e || {}, this.input = t, this.tokens = new s(t, e).lex(), this.pos = 0, this.length = this.tokens.length
        }

        var i = n(5), a = n(2), o = n(26), s = n(12), u = i.varName, c = i.ctxName, h = i.extName,
            f = i.makePredicate("STRING IDENT NUMBER"),
            l = i.makePredicate("true false undefined null this Array Date JSON Math NaN RegExp decodeURI decodeURIComponent encodeURI encodeURIComponent parseFloat parseInt Object"),
            p = r.prototype;
        p.parse = function () {
            this.pos = 0;
            var t = this.program();
            return "TAG_CLOSE" === this.ll().type && this.error("You may got a unclosed Tag"), t
        }, p.ll = function (t) {
            t = t || 1, 0 > t && (t += 1);
            var e = this.pos + t - 1;
            return e > this.length - 1 ? this.tokens[this.length - 1] : this.tokens[e]
        }, p.la = function (t) {
            return (this.ll(t) || "").type
        }, p.match = function (t, e) {
            var n;
            return (n = this.eat(t, e)) ? n : (n = this.ll(), void this.error("expect [" + t + (null == e ? "" : ":" + e) + ']" -> got "[' + n.type + (null == e ? "" : ":" + n.value) + "]", n.pos))
        }, p.error = function (t, e) {
            throw t = "\n【 parse failed 】 " + t + ":\n\n" + i.trackErrorPos(this.input, "number" == typeof e ? e : this.ll().pos || 0), new Error(t)
        }, p.next = function (t) {
            t = t || 1, this.pos += t
        }, p.eat = function (t, e) {
            var n = this.ll();
            if ("string" != typeof t) {
                for (var r = t.length; r--;) if (n.type === t[r]) return this.next(), n
            } else if (n.type === t && ("undefined" == typeof e || n.value === e)) return this.next(), n;
            return !1
        }, p.program = function () {
            for (var t = [], e = this.ll(); "EOF" !== e.type && "TAG_CLOSE" !== e.type;) t.push(this.statement()), e = this.ll();
            return t
        }, p.statement = function () {
            var t = this.ll();
            switch (t.type) {
                case"NAME":
                case"TEXT":
                    var e = t.value;
                    for (this.next(); t = this.eat(["NAME", "TEXT"]);) e += t.value;
                    return o.text(e);
                case"TAG_OPEN":
                    return this.xml();
                case"OPEN":
                    return this.directive();
                case"EXPR_OPEN":
                    return this.interplation();
                default:
                    this.error("Unexpected token: " + this.la())
            }
        }, p.xml = function () {
            var t, e, n, r;
            return t = this.match("TAG_OPEN").value, e = this.attrs(), r = this.eat("/"), this.match(">"), r || i.isVoidTag(t) || (n = this.program(), this.eat("TAG_CLOSE", t) || this.error("expect </" + t + "> gotno matched closeTag")), o.element(t, e, n)
        }, p.xentity = function (t) {
            var e, n, r = t.value;
            if ("NAME" === t.type) {
                if (~r.indexOf(".")) {
                    var i = r.split(".");
                    r = i[0], n = i[1]
                }
                return this.eat("=") && (e = this.attvalue(n)), o.attribute(r, e, n)
            }
            return "if" !== r && this.error("current version. ONLY RULE #if #else #elseif is valid in tag, the rule #" + r + " is invalid"), this["if"](!0)
        }, p.attrs = function (t) {
            var e;
            e = t ? ["NAME"] : ["NAME", "OPEN"];
            for (var n, r = []; n = this.eat(e);) r.push(this.xentity(n));
            return r
        }, p.attvalue = function (t) {
            var e = this.ll();
            switch (e.type) {
                case"NAME":
                case"UNQ":
                case"STRING":
                    this.next();
                    var n = e.value;
                    if (~n.indexOf(a.BEGIN) && ~n.indexOf(a.END) && "cmpl" !== t) {
                        var i = !0, s = new r(n, {mode: 2}).parse();
                        if (1 === s.length && "expression" === s[0].type) return s[0];
                        var u = [];
                        s.forEach(function (t) {
                            t.constant || (i = !1), u.push(t.body || "'" + t.text.replace(/'/g, "\\'") + "'")
                        }), u = "[" + u.join(",") + "].join('')", n = o.expression(u, null, i)
                    }
                    return n;
                case"EXPR_OPEN":
                    return this.interplation();
                default:
                    this.error("Unexpected token: " + this.la())
            }
        }, p.directive = function () {
            var t = this.ll().value;
            return this.next(), "function" == typeof this[t] ? this[t]() : void this.error("Undefined directive[" + t + "]")
        }, p.interplation = function () {
            this.match("EXPR_OPEN");
            var t = this.expression(!0);
            return this.match("END"), t
        }, p.inc = p.include = function () {
            var t = this.expression();
            return this.match("END"), o.template(t)
        }, p["if"] = function (t) {
            var e = this.expression(), n = [], r = [], i = n, a = t ? "attrs" : "statement";
            this.match("END");
            for (var s, u; !(u = this.eat("CLOSE"));) if (s = this.ll(), "OPEN" === s.type) switch (s.value) {
                case"else":
                    i = r, this.next(), this.match("END");
                    break;
                case"elseif":
                    return this.next(), r.push(this["if"](t)), o["if"](e, n, r);
                default:
                    i.push(this[a](!0))
            } else i.push(this[a](!0));
            return "if" !== u.value && this.error("Unmatched if directive"), o["if"](e, n, r)
        }, p.list = function () {
            var t, e, n, r = this.expression(), i = [], a = [], s = i;
            for (this.match("IDENT", "as"), t = this.match("IDENT").value, this.eat("IDENT", "by") && (this.eat("IDENT", t + "_index") ? n = !0 : (n = this.expression(), n.constant && (n = !0))), this.match("END"); !(e = this.eat("CLOSE"));) this.eat("OPEN", "else") ? (s = a, this.match("END")) : s.push(this.statement());
            return "list" !== e.value && this.error("expect list got /" + e.value + " ", e.pos), o.list(r, t, i, a, n)
        }, p.expression = function () {
            var t;
            return this.eat("@(") ? (t = this.expr(), t.once = !0, this.match(")")) : t = this.expr(), t
        }, p.expr = function () {
            this.depend = [];
            var t = this.filter(), e = t.get || t, n = t.set;
            return o.expression(e, n, !this.depend.length)
        }, p.filter = function () {
            var t, e, n, r = this.assign(), a = this.eat("|"), o = [], s = "t", u = r.set, h = "";
            if (a) {
                u && (t = []), e = "(function(" + s + "){";
                do h = s + " = " + c + "._f_('" + this.match("IDENT").value + "' ).get.call( " + i.ctxName + "," + s, h += this.eat(":") ? ", " + this.arguments("|").join(",") + ");" : ");", o.push(h), t && t.unshift(h.replace(" ).get.call", " ).set.call")); while (a = this.eat("|"));
                return o.push("return " + s), t && t.push("return " + s), n = e + o.join("") + "})(" + r.get + ")", t && (u = u.replace(i.setName, e + t.join("") + "})(" + i.setName + ")")), this.getset(n, u)
            }
            return r
        }, p.assign = function () {
            var t, e = this.condition();
            return (t = this.eat(["=", "+=", "-=", "*=", "/=", "%="])) ? (e.set || this.error("invalid lefthand expression in assignment expression"), this.getset(e.set.replace("," + i.setName, "," + this.condition().get).replace("'='", "'" + t.type + "'"), e.set)) : e
        }, p.condition = function () {
            var t = this.or();
            return this.eat("?") ? this.getset([t.get + "?", this.assign().get, this.match(":").type, this.assign().get].join("")) : t
        }, p.or = function () {
            var t = this.and();
            return this.eat("||") ? this.getset(t.get + "||" + this.or().get) : t
        }, p.and = function () {
            var t = this.equal();
            return this.eat("&&") ? this.getset(t.get + "&&" + this.and().get) : t
        }, p.equal = function () {
            var t, e = this.relation();
            return (t = this.eat(["==", "!=", "===", "!=="])) ? this.getset(e.get + t.type + this.equal().get) : e
        }, p.relation = function () {
            var t, e = this.additive();
            return (t = this.eat(["<", ">", ">=", "<="]) || this.eat("IDENT", "in")) ? this.getset(e.get + t.value + this.relation().get) : e
        }, p.additive = function () {
            var t, e = this.multive();
            return (t = this.eat(["+", "-"])) ? this.getset(e.get + t.value + this.additive().get) : e
        }, p.multive = function () {
            var t, e = this.range();
            return (t = this.eat(["*", "/", "%"])) ? this.getset(e.get + t.type + this.multive().get) : e
        }, p.range = function () {
            var t, e, n = this.unary();
            if (t = this.eat("..")) {
                e = this.unary();
                var r = "(function(start,end){var res = [],step=end>start?1:-1; for(var i = start; end>start?i <= end: i>=end; i=i+step){res.push(i); } return res })(" + n.get + "," + e.get + ")";
                return this.getset(r)
            }
            return n
        }, p.unary = function () {
            var t;
            return (t = this.eat(["+", "-", "~", "!"])) ? this.getset("(" + t.type + this.unary().get + ")") : this.member()
        }, p.member = function (t, e, n, r) {
            var a, o, s, l = !1;
            if (t) "string" == typeof e && f(e) ? n.push(e) : (n && n.length && this.depend.push(n), n = null); else {
                o = this.primary();
                var p = typeof o;
                "string" === p ? (n = [], n.push(o), e = o, s = h + "." + o, t = c + "._sg_('" + o + "', " + u + ", " + h + ")", l = !0) : "this" === o.get ? (t = c, n = ["this"]) : (n = null, t = o.get)
            }
            if (a = this.eat(["[", ".", "("])) switch (a.type) {
                case".":
                    var d = this.match("IDENT").value;
                    return r = t, "(" !== this.la() ? t = c + "._sg_('" + d + "', " + t + ")" : t += "['" + d + "']", this.member(t, d, n, r);
                case"[":
                    return o = this.assign(), r = t, "(" !== this.la() ? t = c + "._sg_(" + o.get + ", " + t + ")" : t += "[" + o.get + "]", this.match("]"), this.member(t, o, n, r);
                case"(":
                    var v = this.arguments().join(",");
                    return t = t + "(" + v + ")", this.match(")"), this.member(t, null, n)
            }
            n && n.length && this.depend.push(n);
            var m = {get: t};
            return e && (m.set = c + "._ss_(" + (e.get ? e.get : "'" + e + "'") + "," + i.setName + "," + (r ? r : i.varName) + ", '=', " + (l ? 1 : 0) + ")"), m
        }, p.arguments = function (t) {
            t = t || ")";
            var e = [];
            do this.la() !== t && e.push(this.assign().get); while (this.eat(","));
            return e
        }, p.primary = function () {
            var t = this.ll();
            switch (t.type) {
                case"{":
                    return this.object();
                case"[":
                    return this.array();
                case"(":
                    return this.paren();
                case"STRING":
                    this.next();
                    var e = "" + t.value, n = ~e.indexOf("'") ? '"' : "'";
                    return this.getset(n + e + n);
                case"NUMBER":
                    return this.next(), this.getset("" + t.value);
                case"IDENT":
                    return this.next(), l(t.value) ? this.getset(t.value) : t.value;
                default:
                    this.error("Unexpected Token: " + t.type)
            }
        }, p.object = function () {
            for (var t = [this.match("{").type], e = this.eat(["STRING", "IDENT", "NUMBER"]); e;) {
                t.push("'" + e.value + "'" + this.match(":").type);
                var n = this.assign().get;
                t.push(n), e = null, this.eat(",") && (e = this.eat(["STRING", "IDENT", "NUMBER"])) && t.push(",")
            }
            return t.push(this.match("}").type), {get: t.join("")}
        }, p.array = function () {
            var t, e = [this.match("[").type];
            if (this.eat("]")) e.push("]"); else {
                for (; (t = this.assign()) && (e.push(t.get), this.eat(","));) e.push(",");
                e.push(this.match("]").type)
            }
            return {get: e.join("")}
        }, p.paren = function () {
            this.match("(");
            var t = this.filter();
            return t.get = "(" + t.get + ")", this.match(")"), t
        }, p.getset = function (t, e) {
            return {get: t, set: e}
        }, t.exports = r
    }, function (t, e, n) {
        function r(t, e, n) {
            return function () {
                var r = this.supr;
                this.supr = n[t];
                var i = e.apply(this, arguments);
                return this.supr = r, i
            }
        }

        function i(t, e, n) {
            for (var i in e) e.hasOwnProperty(i) && (u[i] && u[i](e[i], t, n), t[i] = s(e[i]) && s(n[i]) && o.test(e[i]) ? r(i, e[i], n) : e[i])
        }

        var a = n(5), o = /xy/.test(function () {
            "xy"
        }) ? /\bsupr\b/ : /.*/, s = function (t) {
            return "function" == typeof t
        }, u = {
            events: function (t, e) {
                var n = e._eventListeners || [], r = a.normListener(t);
                r.length && (e._eventListeners = n.concat(r)), delete e.events
            }
        }, c = ["data", "computed"], h = c.length;
        t.exports = function f(t) {
            function e() {
                o.apply(this, arguments)
            }

            function n(t) {
                for (var e = h; e--;) {
                    var n = c[e];
                    r[n] && t.hasOwnProperty(n) && r.hasOwnProperty(n) && (a.extend(r[n], t[n], !0), delete t[n])
                }
                return i(r, t, s), this
            }

            t = t || {};
            var r, o = this, s = o && o.prototype || {};
            return "function" == typeof t ? (r = t.prototype, t.implement = n, t.extend = f, t) : (r = a.createProto(e, s), e.implement = n, e.implement(t), o.__after__ && o.__after__.call(e, o, t), e.extend = f, e)
        }
    }, function (t, e, n) {
        var r = n(4), i = n(22), a = t.exports = {
            node: function (t) {
                var e, n, r;
                if (t) {
                    if (t.element) return t.element;
                    if ("function" == typeof t.node) return t.node();
                    if ("number" == typeof t.nodeType) return t;
                    if (t.group) return a.node(t.group);
                    if (e = t.children) {
                        if (1 === e.length) return a.node(e[0]);
                        r = [];
                        for (var i = 0, o = e.length; o > i; i++) n = a.node(e[i]), Array.isArray(n) ? r.push.apply(r, n) : n && r.push(n);
                        return r
                    }
                }
            }, inject: function (t, e) {
                var n = this, o = a.node(n.group || n);
                if (t === !1) return i.remove(o), n;
                if (!o) return n;
                if ("string" == typeof t && (t = r.find(t)), !t) throw Error("injected node is not found");
                if (i.inject(o, t, e), n.$emit) {
                    var s = n.parentNode, u = "after" === e || "before" === e ? t.parentNode : t;
                    n.parentNode = u, n.$emit("$inject", t, e, s)
                }
                return n
            }, last: function (t) {
                var e = t.children;
                return "function" == typeof t.last ? t.last() : "number" == typeof t.nodeType ? t : e && e.length ? a.last(e[e.length - 1]) : t.group ? a.last(t.group) : void 0
            }, destroy: function (t, e) {
                if (t) {
                    if (Array.isArray(t)) for (var n = 0, i = t.length; i > n; n++) a.destroy(t[n], e);
                    var o = t.children;
                    if ("function" == typeof t.destroy) return t.destroy(e);
                    "number" == typeof t.nodeType && e && r.remove(t), o && o.length && (a.destroy(o, !0), t.children = null)
                }
            }
        };
        r.element = function (t, e) {
            if (!t) return e ? [] : null;
            var n = a.node(t);
            if (1 === n.nodeType) return e ? [n] : n;
            for (var r = [], i = 0; i < n.length; i++) {
                var o = n[i];
                if (o && 1 === o.nodeType) {
                    if (!e) return o;
                    r.push(o)
                }
            }
            return e ? r : r[0]
        }
    }, function (t, e, n) {
        function r() {
        }

        var i = [].slice, a = n(5), o = {
            $on: function (t, e, n) {
                if ("object" == typeof t && t) for (var r in t) this.$on(r, t[r], e); else {
                    n = n || {};
                    var i, a = this, o = a._handles || (a._handles = {}), s = o[t] || (o[t] = []);
                    n.once && (i = function () {
                        e.apply(this, arguments), this.$off(t, e)
                    }, e.real = i), s.push(i || e)
                }
                return this
            }, $off: function (t, e) {
                var n = this;
                if (n._handles) {
                    t || (this._handles = {});
                    var r, i = n._handles;
                    if (r = i[t]) {
                        if (!e) return i[t] = [], n;
                        e = e.real || e;
                        for (var a = 0, o = r.length; o > a; a++) if (e === r[a]) return r.splice(a, 1), n
                    }
                    return n
                }
            }, $emit: function (t) {
                var e, n, r, a = this, o = a._handles;
                if (t) {
                    var n = i.call(arguments, 1), r = t;
                    if (!o) return a;
                    if (e = o[r.slice(1)]) for (var s = 0, u = e.length; u > s; s++) e[s].apply(a, n);
                    if (!(e = o[r])) return a;
                    for (var c = 0, u = e.length; u > c; c++) e[c].apply(a, n);
                    return a
                }
            }, $once: function () {
                var t = a.slice(arguments);
                return t.push({once: !0}), this.$on.apply(this, t)
            }
        };
        a.extend(r.prototype, o), r.mixTo = function (t) {
            t = "function" == typeof t ? t.prototype : t, a.extend(t, o)
        }, t.exports = r
    }, function (t, e, n) {
        function r() {
        }

        var i = n(5), a = n(18).expression, o = n(25), s = o.diffArray, u = o.diffObject, c = {
            $watch: function (t, e, n) {
                var r, o, s, u, c = this.__ext__;
                this._watchers || (this._watchers = []), n = n || {}, n === !0 && (n = {deep: !0});
                var h = i.uid("w_");
                if (Array.isArray(t)) {
                    for (var f = [], l = 0, p = t.length; p > l; l++) f.push(this.$expression(t[l]).get);
                    var d = [];
                    s = function (t) {
                        for (var e = !0, n = 0, r = f.length; r > n; n++) {
                            var a = f[n](t, c);
                            i.equals(a, d[n]) || (e = !1, d[n] = i.clone(a))
                        }
                        return e ? !1 : d
                    }
                } else "function" == typeof t ? r = t.bind(this) : (t = this._touchExpr(a(t)), r = t.get, o = t.once);
                var v = {
                    id: h,
                    get: r,
                    fn: e,
                    once: o,
                    force: n.force,
                    diff: n.diff,
                    test: s,
                    deep: n.deep,
                    last: n.sync ? r(this) : n.last
                };
                if (this._watchers.push(v), u = this._records && this._records.length, u && this._records[u - 1].push(h), n.init === !0) {
                    var m = this.$phase;
                    this.$phase = "digest", this._checkSingleWatch(v, this._watchers.length - 1), this.$phase = m
                }
                return v
            }, $unwatch: function (t) {
                if (this._watchers && t) {
                    var e = this._watchers;
                    if ("number" == typeof t) {
                        var n = t;
                        return t = i.findItem(e, function (t) {
                            return t.id === n
                        }), this.$unwatch(t)
                    }
                    var r = t.length;
                    if (r) for (; r-- >= 0;) this.$unwatch(t[r]); else t.removed = !0
                }
            }, $expression: function (t) {
                return this._touchExpr(a(t))
            }, $digest: function () {
                if ("digest" !== this.$phase && !this._mute) {
                    this.$phase = "digest";
                    for (var t = !1, e = 0; t = this._digest();) if (++e > 20) throw Error("there may a circular dependencies reaches");
                    e > 0 && this.$emit && (this.$emit("$update"), this.devtools && this.devtools.emit("flush", this)), this.$phase = null
                }
            }, _digest: function () {
                var t, e, n, r = this._watchers, i = !1, a = r && r.length;
                if (a) for (var o = 0; a > o; o++) e = r[o], !e || e.removed ? (r.splice(o--, 1), a--) : (n = this._checkSingleWatch(e, o), n && (i = !0));
                if (t = this._children, t && t.length) for (var s = 0, u = t.length; u > s; s++) {
                    var c = t[s];
                    c && c._digest() && (i = !0)
                }
                return i
            }, _checkSingleWatch: function (t, e) {
                var n = !1;
                if (t) {
                    var r, a, o, c, h, f;
                    if (t.test) {
                        var l = t.test(this);
                        l && (n = !0, t.fn.apply(this, l))
                    } else r = t.get(this), a = t.last, o = i.typeOf(a), c = i.typeOf(r), h = !0, f, "object" === c && "object" === o && t.deep ? (f = u(r, a, t.diff), (f === !0 || f.length) && (n = !0)) : "array" !== c || "undefined" != o && "array" !== o ? (h = i.equals(r, a), (!h || t.force) && (t.force = null, n = !0)) : (f = s(r, t.last || [], t.diff), ("array" !== o || f === !0 || f.length) && (n = !0));
                    return n && !t.test && (t.last = "object" === c && t.deep || "array" === c ? i.clone(r) : r, t.fn.call(this, r, a, f), t.once && this._watchers.splice(e, 1)), n
                }
            }, $set: function (t, e) {
                if (null != t) {
                    var n = i.typeOf(t);
                    if ("string" === n || "expression" === t.type) t = this.$expression(t), t.set(this, e); else if ("function" === n) t.call(this, this.data); else for (var r in t) this.$set(r, t[r])
                }
            }, $get: function (t, e) {
                return e && "string" == typeof t ? t : this.$expression(t).get(this)
            }, $update: function () {
                var t = this;
                do {
                    if (t.data.isolate || !t.$parent) break;
                    t = t.$parent
                } while (t);
                var e = t.$phase;
                return t.$phase = "digest", this.$set.apply(this, arguments), t.$phase = e, t.$digest(), this
            }, _record: function () {
                this._records || (this._records = []), this._records.push([])
            }, _release: function () {
                return this._records.pop()
            }
        };
        i.extend(r.prototype, c), r.mixTo = function (t) {
            return t = "function" == typeof t ? t.prototype : t, i.extend(t, c)
        }, t.exports = r
    }, function (t, e, n) {
        var r = n(1).exprCache, i = (n(5), n(13));
        t.exports = {
            expression: function (t) {
                return "string" == typeof t && (t = t.trim()) && (t = r.get(t) || r.set(t, new i(t, {
                    mode: 2,
                    expression: !0
                }).expression())), t ? t : void 0
            }, parse: function (t) {
                return new i(t).parse()
            }
        }
    }, function (t) {
        var e = t.exports = {};
        e.json = {
            get: function (t) {
                return "undefined" != typeof JSON ? JSON.stringify(t) : t
            }, set: function (t) {
                return "undefined" != typeof JSON ? JSON.parse(t) : t
            }
        }, e.last = function (t) {
            return t && t[t.length - 1]
        }, e.average = function (t, n) {
            return t = t || [], t.length ? e.total(t, n) / t.length : 0
        }, e.total = function (t, e) {
            var n = 0;
            if (t) return t.forEach(function (t) {
                n += e ? t[e] : t
            }), n
        }
    }, function (t) {
        function e(t, e) {
            for (var n in e) void 0 === t[n] && (t[n] = e[n]);
            return e
        }

        var n = [].slice, r = {}.toString;
        t.exports = function () {
            e(String.prototype, {
                trim: function () {
                    return this.replace(/^\s+|\s+$/g, "")
                }
            }), e(Array.prototype, {
                indexOf: function (t, e) {
                    e = e || 0;
                    for (var n = e, r = this.length; r > n; n++) if (this[n] === t) return n;
                    return -1
                }, forEach: function (t, e) {
                    var n = 0, r = Object(this), i = r.length >>> 0;
                    if ("function" != typeof t) throw new TypeError(t + " is not a function");
                    for (; i > n;) {
                        var a;
                        n in r && (a = r[n], t.call(e, a, n, r)), n++
                    }
                }, filter: function (t, e) {
                    var n = Object(this), r = n.length >>> 0;
                    if ("function" != typeof t) throw new TypeError;
                    for (var i = [], a = 0; r > a; a++) if (a in n) {
                        var o = n[a];
                        t.call(e, o, a, n) && i.push(o)
                    }
                    return i
                }
            }), e(Function.prototype, {
                bind: function (t) {
                    var e = this, r = n.call(arguments, 1);
                    return function () {
                        var i = r.concat(n.call(arguments));
                        return e.apply(t, i)
                    }
                }
            }), e(Array, {
                isArray: function (t) {
                    return "[object Array]" === r.call(t)
                }
            })
        }
    }, function (t) {
        var e = {
            quot: 34,
            amp: 38,
            apos: 39,
            lt: 60,
            gt: 62,
            nbsp: 160,
            iexcl: 161,
            cent: 162,
            pound: 163,
            curren: 164,
            yen: 165,
            brvbar: 166,
            sect: 167,
            uml: 168,
            copy: 169,
            ordf: 170,
            laquo: 171,
            not: 172,
            shy: 173,
            reg: 174,
            macr: 175,
            deg: 176,
            plusmn: 177,
            sup2: 178,
            sup3: 179,
            acute: 180,
            micro: 181,
            para: 182,
            middot: 183,
            cedil: 184,
            sup1: 185,
            ordm: 186,
            raquo: 187,
            frac14: 188,
            frac12: 189,
            frac34: 190,
            iquest: 191,
            Agrave: 192,
            Aacute: 193,
            Acirc: 194,
            Atilde: 195,
            Auml: 196,
            Aring: 197,
            AElig: 198,
            Ccedil: 199,
            Egrave: 200,
            Eacute: 201,
            Ecirc: 202,
            Euml: 203,
            Igrave: 204,
            Iacute: 205,
            Icirc: 206,
            Iuml: 207,
            ETH: 208,
            Ntilde: 209,
            Ograve: 210,
            Oacute: 211,
            Ocirc: 212,
            Otilde: 213,
            Ouml: 214,
            times: 215,
            Oslash: 216,
            Ugrave: 217,
            Uacute: 218,
            Ucirc: 219,
            Uuml: 220,
            Yacute: 221,
            THORN: 222,
            szlig: 223,
            agrave: 224,
            aacute: 225,
            acirc: 226,
            atilde: 227,
            auml: 228,
            aring: 229,
            aelig: 230,
            ccedil: 231,
            egrave: 232,
            eacute: 233,
            ecirc: 234,
            euml: 235,
            igrave: 236,
            iacute: 237,
            icirc: 238,
            iuml: 239,
            eth: 240,
            ntilde: 241,
            ograve: 242,
            oacute: 243,
            ocirc: 244,
            otilde: 245,
            ouml: 246,
            divide: 247,
            oslash: 248,
            ugrave: 249,
            uacute: 250,
            ucirc: 251,
            uuml: 252,
            yacute: 253,
            thorn: 254,
            yuml: 255,
            fnof: 402,
            Alpha: 913,
            Beta: 914,
            Gamma: 915,
            Delta: 916,
            Epsilon: 917,
            Zeta: 918,
            Eta: 919,
            Theta: 920,
            Iota: 921,
            Kappa: 922,
            Lambda: 923,
            Mu: 924,
            Nu: 925,
            Xi: 926,
            Omicron: 927,
            Pi: 928,
            Rho: 929,
            Sigma: 931,
            Tau: 932,
            Upsilon: 933,
            Phi: 934,
            Chi: 935,
            Psi: 936,
            Omega: 937,
            alpha: 945,
            beta: 946,
            gamma: 947,
            delta: 948,
            epsilon: 949,
            zeta: 950,
            eta: 951,
            theta: 952,
            iota: 953,
            kappa: 954,
            lambda: 955,
            mu: 956,
            nu: 957,
            xi: 958,
            omicron: 959,
            pi: 960,
            rho: 961,
            sigmaf: 962,
            sigma: 963,
            tau: 964,
            upsilon: 965,
            phi: 966,
            chi: 967,
            psi: 968,
            omega: 969,
            thetasym: 977,
            upsih: 978,
            piv: 982,
            bull: 8226,
            hellip: 8230,
            prime: 8242,
            Prime: 8243,
            oline: 8254,
            frasl: 8260,
            weierp: 8472,
            image: 8465,
            real: 8476,
            trade: 8482,
            alefsym: 8501,
            larr: 8592,
            uarr: 8593,
            rarr: 8594,
            darr: 8595,
            harr: 8596,
            crarr: 8629,
            lArr: 8656,
            uArr: 8657,
            rArr: 8658,
            dArr: 8659,
            hArr: 8660,
            forall: 8704,
            part: 8706,
            exist: 8707,
            empty: 8709,
            nabla: 8711,
            isin: 8712,
            notin: 8713,
            ni: 8715,
            prod: 8719,
            sum: 8721,
            minus: 8722,
            lowast: 8727,
            radic: 8730,
            prop: 8733,
            infin: 8734,
            ang: 8736,
            and: 8743,
            or: 8744,
            cap: 8745,
            cup: 8746,
            "int": 8747,
            there4: 8756,
            sim: 8764,
            cong: 8773,
            asymp: 8776,
            ne: 8800,
            equiv: 8801,
            le: 8804,
            ge: 8805,
            sub: 8834,
            sup: 8835,
            nsub: 8836,
            sube: 8838,
            supe: 8839,
            oplus: 8853,
            otimes: 8855,
            perp: 8869,
            sdot: 8901,
            lceil: 8968,
            rceil: 8969,
            lfloor: 8970,
            rfloor: 8971,
            lang: 9001,
            rang: 9002,
            loz: 9674,
            spades: 9824,
            clubs: 9827,
            hearts: 9829,
            diams: 9830,
            OElig: 338,
            oelig: 339,
            Scaron: 352,
            scaron: 353,
            Yuml: 376,
            circ: 710,
            tilde: 732,
            ensp: 8194,
            emsp: 8195,
            thinsp: 8201,
            zwnj: 8204,
            zwj: 8205,
            lrm: 8206,
            rlm: 8207,
            ndash: 8211,
            mdash: 8212,
            lsquo: 8216,
            rsquo: 8217,
            sbquo: 8218,
            ldquo: 8220,
            rdquo: 8221,
            bdquo: 8222,
            dagger: 8224,
            Dagger: 8225,
            permil: 8240,
            lsaquo: 8249,
            rsaquo: 8250,
            euro: 8364
        };
        t.exports = e
    }, function (t, e, n) {
        function r(t) {
            var e, n = 0, r = 0, a = 0, o = 0, s = 0, u = 5 / 3;
            return window.getComputedStyle && (e = window.getComputedStyle(t), r = i(e[f + "Duration"]) || r, a = i(e[f + "Delay"]) || a, o = i(e[l + "Duration"]) || o, s = i(e[l + "Delay"]) || s, n = Math.max(r + a, o + s)), 1e3 * n * u
        }

        function i(t) {
            var e, n = 0;
            return t ? (t.split(",").forEach(function (t) {
                e = parseFloat(t), e > n && (n = e)
            }), n) : 0
        }

        var a = n(5), o = n(4), s = {}, u = n(1), c = "transitionend", h = "animationend", f = "transition",
            l = "animation";
        "ontransitionend" in window || ("onwebkittransitionend" in window ? (c += " webkitTransitionEnd", f = "webkitTransition") : ("onotransitionend" in o.tNode || "Opera" === navigator.appName) && (c += " oTransitionEnd", f = "oTransition")), "onanimationend" in window || ("onwebkitanimationend" in window ? (h += " webkitAnimationEnd", l = "webkitAnimation") : "onoanimationend" in o.tNode && (h += " oAnimationEnd", l = "oAnimation")), s.inject = function (t, e, n, r) {
            if (r = r || a.noop, Array.isArray(t)) {
                for (var i = o.fragment(), s = 0, u = 0, c = t.length; c > u; u++) i.appendChild(t[u]);
                o.inject(i, e, n);
                var h = function () {
                    s++, s === c && r()
                };
                for (c === s && r(), u = 0; c > u; u++) t[u].onenter ? t[u].onenter(h) : h()
            } else o.inject(t, e, n), t.onenter ? t.onenter(r) : r()
        }, s.remove = function (t, e) {
            function n() {
                r++, r === a && e && e()
            }

            if (t) {
                var r = 0;
                if (Array.isArray(t)) {
                    for (var i = 0, a = t.length; a > i; i++) s.remove(t[i], n);
                    return t
                }
                t.onleave ? t.onleave(function () {
                    p(t, e)
                }) : p(t, e)
            }
        };
        var p = function (t, e) {
            o.remove(t), e && e()
        };
        s.startClassAnimate = function (t, e, n, i) {
            var s, f, l, p;
            return !h && !c || u.isRunning ? n() : (p = a.once(4 !== i ? function () {
                l && clearTimeout(l), 2 === i && o.delClass(t, s), 3 !== i && o.delClass(t, e), o.off(t, h, p), o.off(t, c, p), n()
            } : function () {
                l && clearTimeout(l), n()
            }), 2 === i ? (o.addClass(t, e), s = a.map(e.split(/\s+/), function (t) {
                return t + "-active"
            }).join(" "), o.nextReflow(function () {
                o.addClass(t, s), f = r(t), l = setTimeout(p, f)
            })) : o.nextReflow(4 === i ? function () {
                o.delClass(t, e), f = r(t), l = setTimeout(p, f)
            } : function () {
                o.addClass(t, e), f = r(t), l = setTimeout(p, f)
            }), o.on(t, h, p), o.on(t, c, p), p)
        }, s.startStyleAnimate = function (t, e, n) {
            var i, s, u;
            return o.nextReflow(function () {
                o.css(t, e), i = r(t), u = setTimeout(s, i)
            }), s = a.once(function () {
                u && clearTimeout(u), o.off(t, h, s), o.off(t, c, s), n()
            }), o.on(t, h, s), o.on(t, c, s), s
        }, t.exports = s
    }, function (t, e, n) {
        function r(t, e, n) {
            if (n) for (var r, i = t.target; i && i !== n;) {
                for (var a = 0, o = e.length; o > a; a++) r = e[a], r && r.element === i && r.fire(t);
                i = i.parentNode
            }
        }

        var i = n(5), a = n(4), o = n(3);
        o._addProtoInheritCache("event"), o.directive(/^on-\w+$/, function (t, e, n, r) {
            if (n && e) {
                var i = n.split("-")[1];
                return this._handleEvent(t, i, e, r)
            }
        }), o.directive(/^(delegate|de)-\w+$/, function (t, e, n) {
            function o(t) {
                r(t, u[c], s.parentNode)
            }

            var s = this.$root, u = s._delegates || (s._delegates = {});
            if (n && e) {
                var c = n.split("-")[1], h = i.handleEvent.call(this, e, c);
                u[c] || (u[c] = [], s.parentNode ? a.on(s.parentNode, c, o) : s.$on("$inject", function (t, e, n) {
                    var r = this.parentNode;
                    n && a.off(n, c, o), r && a.on(this.parentNode, c, o)
                }), s.$on("$destroy", function () {
                    s.parentNode && a.off(s.parentNode, c, o), u[c] = null
                }));
                var f = {element: t, fire: h};
                return u[c].push(f), function () {
                    var t = u[c];
                    if (t && t.length) for (var e = 0, n = t.length; n > e; e++) t[e] === f && t.splice(e, 1)
                }
            }
        })
    }, function (t, e, n) {
        function r(t, e) {
            function n() {
                e.set(r, this.value), i.last = this.value, r.$update()
            }

            var r = this, i = this.$watch(e, function (e) {
                for (var n = t.getElementsByTagName("option"), r = 0, i = n.length; i > r; r++) if (n[r].value == e) {
                    t.selectedIndex = r;
                    break
                }
            });
            return c.on(t, "change", n), void 0 === e.get(r) && t.value && e.set(r, t.value), function () {
                c.off(t, "change", n)
            }
        }

        function i(t, e, n) {
            var r, i = n.param, a = i.lazy;
            "throttle" in i && (r = i[r] === !0 ? 400 : parseInt(i.throttle, 10));
            var o = this, h = this.$watch(e, function (e) {
                t.value !== e && (t.value = null == e ? "" : "" + e)
            }), f = function (t) {
                var n = this;
                if ("cut" === t.type || "paste" === t.type) u.nextTick(function () {
                    var t = n.value;
                    e.set(o, t), h.last = t, o.$update()
                }); else {
                    var r = n.value;
                    e.set(o, r), h.last = r, o.$update()
                }
            };
            if (r && !a) {
                f = u.throttle(f, r)
            }
            return void 0 === s && (s = 9 !== c.msie && "oninput" in document.createElement("input")), a ? c.on(t, "change", f) : s ? t.addEventListener("input", f) : c.on(t, "paste keyup cut change", f), void 0 === e.get(o) && t.value && e.set(o, t.value), function () {
                return a ? c.off(t, "change", f) : void(s ? t.removeEventListener("input", f) : c.off(t, "paste keyup cut change", f))
            }
        }

        function a(t, e) {
            var n = this, r = this.$watch(e, function (e) {
                c.attr(t, "checked", !!e)
            }), i = function () {
                var t = this.checked;
                e.set(n, t), r.last = t, n.$update()
            };
            return e.set && c.on(t, "change", i), void 0 === e.get(n) && e.set(n, !!t.checked), function () {
                e.set && c.off(t, "change", i)
            }
        }

        function o(t, e) {
            var n = this, r = (this.$watch(e, function (e) {
                t.checked = e == t.value ? !0 : !1
            }), function () {
                var t = this.value;
                e.set(n, t), n.$update()
            });
            return e.set && c.on(t, "change", r), void 0 === e.get(n) && t.checked && e.set(n, t.value), function () {
                e.set && c.off(t, "change", r)
            }
        }

        var s, u = n(5), c = n(4), h = n(3), f = {text: i, select: r, checkbox: a, radio: o};
        h.directive("r-model", {
            param: ["throttle", "lazy"], link: function (t, e, n, r) {
                var i = t.tagName.toLowerCase(), a = i;
                return "input" === a ? a = t.type || "text" : "textarea" === a && (a = "text"), "string" == typeof e && (e = this.$expression(e)), f[a] ? f[a].call(this, t, e, r) : "input" === i ? f.text.call(this, t, e, r) : void 0
            }
        })
    }, function (t, e, n) {
        function r(t, e) {
            var n = t.length, r = e.length;
            if (n !== r) return !0;
            for (var i = 0; n > i; i++) if (t[i] !== e[i]) return !0;
            return !1
        }

        function i(t, e) {
            return t === e
        }

        function a(t, e, n) {
            for (var r = t.length, a = e.length, n = n || i, o = [], s = 0; r >= s; s++) o.push([s]);
            for (var u = 1; a >= u; u++) o[0][u] = u;
            for (var s = 1; r >= s; s++) for (var u = 1; a >= u; u++) o[s][u] = n(t[s - 1], e[u - 1]) ? o[s - 1][u - 1] : Math.min(o[s - 1][u] + 1, o[s][u - 1] + 1);
            return o
        }

        function o(t, e, n, i) {
            if (!n) return r(t, e);
            for (var o = a(e, t, i), s = e.length, u = s, c = t.length, h = c, f = [], l = o[u][h]; u > 0 || h > 0;) if (0 !== u) if (0 !== h) {
                var p = o[u - 1][h - 1], d = o[u - 1][h], v = o[u][h - 1], m = Math.min(v, d, p);
                m === d ? (f.unshift(2), u--, l = d) : m === p ? (p === l ? f.unshift(0) : (f.unshift(1), l = p), u--, h--) : (f.unshift(3), h--, l = v)
            } else f.unshift(2), u--; else f.unshift(3), h--;
            var g = 0, y = 3, E = 2, x = 1, s = 0;
            c = 0;
            for (var _ = [], T = {
                index: null,
                add: 0,
                removed: []
            }, u = 0; u < f.length; u++) switch (f[u] > 0 ? null === T.index && (T.index = c) : null != T.index && (_.push(T), T = {
                index: null,
                add: 0,
                removed: []
            }), f[u]) {
                case g:
                    s++, c++;
                    break;
                case y:
                    T.add++, c++;
                    break;
                case E:
                    T.removed.push(e[s]), s++;
                    break;
                case x:
                    T.add++, T.removed.push(e[s]), s++, c++
            }
            return null != T.index && _.push(T), _
        }

        function s(t, e, n) {
            if (n) {
                var r = u.keys(t), i = u.keys(e);
                return o(r, i, n, function (n, r) {
                    return t[r] === e[n]
                })
            }
            for (var a in t) if (e[a] !== t[a]) return !0;
            for (var s in e) if (e[s] !== t[s]) return !0;
            return !1
        }

        var u = n(5);
        t.exports = {diffArray: o, diffObject: s}
    }, function (t) {
        t.exports = {
            element: function (t, e, n) {
                return {type: "element", tag: t, attrs: e, children: n}
            }, attribute: function (t, e, n) {
                return {type: "attribute", name: t, value: e, mdf: n}
            }, "if": function (t, e, n) {
                return {type: "if", test: t, consequent: e, alternate: n}
            }, list: function (t, e, n, r, i) {
                return {type: "list", sequence: t, alternate: r, variable: e, body: n, track: i}
            }, expression: function (t, e, n) {
                return {type: "expression", body: t, constant: n || !1, setbody: e || !1}
            }, text: function (t) {
                return {type: "text", text: t}
            }, template: function (t) {
                return {type: "template", content: t}
            }
        }
    }])
});