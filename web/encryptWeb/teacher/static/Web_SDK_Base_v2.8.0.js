!function (e) {
    function t(n) {
        if (r[n]) return r[n].exports;
        var o = r[n] = {exports: {}, id: n, loaded: !1};
        return e[n].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    }

    var n = window.webpackJsonp_NIM_Web_SDK_v2_8_0;
    window.webpackJsonp_NIM_Web_SDK_v2_8_0 = function (i, a) {
        for (var s, c, u = 0, l = []; u < i.length; u++) c = i[u], o[c] && l.push.apply(l, o[c]), o[c] = 0;
        for (s in a) e[s] = a[s];
        for (n && n(i, a); l.length;) l.shift().call(null, t);
        if (a[0]) return r[0] = 0, t(0)
    };
    var r = {}, o = {2: 0};
    t.e = function (e, n) {
        if (0 === o[e]) return n.call(null, t);
        if (void 0 !== o[e]) o[e].push(n); else {
            o[e] = [n];
            var r = document.getElementsByTagName("head")[0], i = document.createElement("script");
            i.type = "text/javascript", i.charset = "utf-8", i.async = !0, i.src = t.p + "" + e + "." + ({
                0: "Chatroom",
                1: "NIM"
            }[e] || e) + ".js", r.appendChild(i)
        }
    }, t.m = e, t.c = r, t.p = ""
}([, function (e, t, n) {
    var r, o;
    !function (i, a) {
        "use strict";
        r = a, o = "function" == typeof r ? r.call(t, n, t, e) : r, !(void 0 !== o && (e.exports = o))
    }(this, function () {
        var e, t, n = Array, r = n.prototype, o = Object, i = o.prototype, a = Function, s = a.prototype, c = String,
            u = c.prototype, l = Number, f = l.prototype, p = r.slice, d = r.splice, h = r.push, y = r.unshift,
            v = r.concat, m = r.join, g = s.call, b = s.apply, w = Math.max, x = Math.min, k = i.toString,
            S = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag, _ = Function.prototype.toString,
            T = /^\s*class /, O = function (e) {
                try {
                    var t = _.call(e), n = t.replace(/\/\/.*\n/g, ""), r = n.replace(/\/\*[.\s\S]*\*\//g, ""),
                        o = r.replace(/\n/gm, " ").replace(/ {2}/g, " ");
                    return T.test(o)
                } catch (i) {
                    return !1
                }
            }, E = function (e) {
                try {
                    return !O(e) && (_.call(e), !0)
                } catch (t) {
                    return !1
                }
            }, M = "[object Function]", C = "[object GeneratorFunction]", e = function (e) {
                if (!e) return !1;
                if ("function" != typeof e && "object" != typeof e) return !1;
                if (S) return E(e);
                if (O(e)) return !1;
                var t = k.call(e);
                return t === M || t === C
            }, j = RegExp.prototype.exec, P = function (e) {
                try {
                    return j.call(e), !0
                } catch (t) {
                    return !1
                }
            }, I = "[object RegExp]";
        t = function (e) {
            return "object" == typeof e && (S ? P(e) : k.call(e) === I)
        };
        var A, D = String.prototype.valueOf, N = function (e) {
            try {
                return D.call(e), !0
            } catch (t) {
                return !1
            }
        }, F = "[object String]";
        A = function (e) {
            return "string" == typeof e || "object" == typeof e && (S ? N(e) : k.call(e) === F)
        };
        var R = o.defineProperty && function () {
            try {
                var e = {};
                o.defineProperty(e, "x", {enumerable: !1, value: e});
                for (var t in e) return !1;
                return e.x === e
            } catch (n) {
                return !1
            }
        }(), L = function (e) {
            var t;
            return t = R ? function (e, t, n, r) {
                !r && t in e || o.defineProperty(e, t, {configurable: !0, enumerable: !1, writable: !0, value: n})
            } : function (e, t, n, r) {
                !r && t in e || (e[t] = n)
            }, function (n, r, o) {
                for (var i in r) e.call(r, i) && t(n, i, r[i], o)
            }
        }(i.hasOwnProperty), W = function (e) {
            var t = typeof e;
            return null === e || "object" !== t && "function" !== t
        }, B = l.isNaN || function (e) {
            return e !== e
        }, U = {
            ToInteger: function (e) {
                var t = +e;
                return B(t) ? t = 0 : 0 !== t && t !== 1 / 0 && t !== -(1 / 0) && (t = (t > 0 || -1) * Math.floor(Math.abs(t))), t
            }, ToPrimitive: function (t) {
                var n, r, o;
                if (W(t)) return t;
                if (r = t.valueOf, e(r) && (n = r.call(t), W(n))) return n;
                if (o = t.toString, e(o) && (n = o.call(t), W(n))) return n;
                throw new TypeError
            }, ToObject: function (e) {
                if (null == e) throw new TypeError("can't convert " + e + " to object");
                return o(e)
            }, ToUint32: function (e) {
                return e >>> 0
            }
        }, q = function () {
        };
        L(s, {
            bind: function (t) {
                var n = this;
                if (!e(n)) throw new TypeError("Function.prototype.bind called on incompatible " + n);
                for (var r, i = p.call(arguments, 1), s = function () {
                    if (this instanceof r) {
                        var e = b.call(n, this, v.call(i, p.call(arguments)));
                        return o(e) === e ? e : this
                    }
                    return b.call(n, t, v.call(i, p.call(arguments)))
                }, c = w(0, n.length - i.length), u = [], l = 0; l < c; l++) h.call(u, "$" + l);
                return r = a("binder", "return function (" + m.call(u, ",") + "){ return binder.apply(this, arguments); }")(s), n.prototype && (q.prototype = n.prototype, r.prototype = new q, q.prototype = null), r
            }
        });
        var $ = g.bind(i.hasOwnProperty), H = g.bind(i.toString), X = g.bind(p), J = b.bind(p), z = g.bind(u.slice),
            G = g.bind(u.split), K = g.bind(u.indexOf), V = g.bind(h), Y = g.bind(i.propertyIsEnumerable),
            Z = g.bind(r.sort), Q = n.isArray || function (e) {
                return "[object Array]" === H(e)
            }, ee = 1 !== [].unshift(0);
        L(r, {
            unshift: function () {
                return y.apply(this, arguments), this.length
            }
        }, ee), L(n, {isArray: Q});
        var te = o("a"), ne = "a" !== te[0] || !(0 in te), re = function (e) {
            var t = !0, n = !0, r = !1;
            if (e) try {
                e.call("foo", function (e, n, r) {
                    "object" != typeof r && (t = !1)
                }), e.call([1], function () {
                    "use strict";
                    n = "string" == typeof this
                }, "x")
            } catch (o) {
                r = !0
            }
            return !!e && !r && t && n
        };
        L(r, {
            forEach: function (t) {
                var n, r = U.ToObject(this), o = ne && A(this) ? G(this, "") : r, i = -1, a = U.ToUint32(o.length);
                if (arguments.length > 1 && (n = arguments[1]), !e(t)) throw new TypeError("Array.prototype.forEach callback must be a function");
                for (; ++i < a;) i in o && ("undefined" == typeof n ? t(o[i], i, r) : t.call(n, o[i], i, r))
            }
        }, !re(r.forEach)), L(r, {
            map: function (t) {
                var r, o = U.ToObject(this), i = ne && A(this) ? G(this, "") : o, a = U.ToUint32(i.length), s = n(a);
                if (arguments.length > 1 && (r = arguments[1]), !e(t)) throw new TypeError("Array.prototype.map callback must be a function");
                for (var c = 0; c < a; c++) c in i && ("undefined" == typeof r ? s[c] = t(i[c], c, o) : s[c] = t.call(r, i[c], c, o));
                return s
            }
        }, !re(r.map)), L(r, {
            filter: function (t) {
                var n, r, o = U.ToObject(this), i = ne && A(this) ? G(this, "") : o, a = U.ToUint32(i.length), s = [];
                if (arguments.length > 1 && (r = arguments[1]), !e(t)) throw new TypeError("Array.prototype.filter callback must be a function");
                for (var c = 0; c < a; c++) c in i && (n = i[c], ("undefined" == typeof r ? t(n, c, o) : t.call(r, n, c, o)) && V(s, n));
                return s
            }
        }, !re(r.filter)), L(r, {
            every: function (t) {
                var n, r = U.ToObject(this), o = ne && A(this) ? G(this, "") : r, i = U.ToUint32(o.length);
                if (arguments.length > 1 && (n = arguments[1]), !e(t)) throw new TypeError("Array.prototype.every callback must be a function");
                for (var a = 0; a < i; a++) if (a in o && !("undefined" == typeof n ? t(o[a], a, r) : t.call(n, o[a], a, r))) return !1;
                return !0
            }
        }, !re(r.every)), L(r, {
            some: function (t) {
                var n, r = U.ToObject(this), o = ne && A(this) ? G(this, "") : r, i = U.ToUint32(o.length);
                if (arguments.length > 1 && (n = arguments[1]), !e(t)) throw new TypeError("Array.prototype.some callback must be a function");
                for (var a = 0; a < i; a++) if (a in o && ("undefined" == typeof n ? t(o[a], a, r) : t.call(n, o[a], a, r))) return !0;
                return !1
            }
        }, !re(r.some));
        var oe = !1;
        r.reduce && (oe = "object" == typeof r.reduce.call("es5", function (e, t, n, r) {
            return r
        })), L(r, {
            reduce: function (t) {
                var n = U.ToObject(this), r = ne && A(this) ? G(this, "") : n, o = U.ToUint32(r.length);
                if (!e(t)) throw new TypeError("Array.prototype.reduce callback must be a function");
                if (0 === o && 1 === arguments.length) throw new TypeError("reduce of empty array with no initial value");
                var i, a = 0;
                if (arguments.length >= 2) i = arguments[1]; else for (; ;) {
                    if (a in r) {
                        i = r[a++];
                        break
                    }
                    if (++a >= o) throw new TypeError("reduce of empty array with no initial value")
                }
                for (; a < o; a++) a in r && (i = t(i, r[a], a, n));
                return i
            }
        }, !oe);
        var ie = !1;
        r.reduceRight && (ie = "object" == typeof r.reduceRight.call("es5", function (e, t, n, r) {
            return r
        })), L(r, {
            reduceRight: function (t) {
                var n = U.ToObject(this), r = ne && A(this) ? G(this, "") : n, o = U.ToUint32(r.length);
                if (!e(t)) throw new TypeError("Array.prototype.reduceRight callback must be a function");
                if (0 === o && 1 === arguments.length) throw new TypeError("reduceRight of empty array with no initial value");
                var i, a = o - 1;
                if (arguments.length >= 2) i = arguments[1]; else for (; ;) {
                    if (a in r) {
                        i = r[a--];
                        break
                    }
                    if (--a < 0) throw new TypeError("reduceRight of empty array with no initial value")
                }
                if (a < 0) return i;
                do a in r && (i = t(i, r[a], a, n)); while (a--);
                return i
            }
        }, !ie);
        var ae = r.indexOf && [0, 1].indexOf(1, 2) !== -1;
        L(r, {
            indexOf: function (e) {
                var t = ne && A(this) ? G(this, "") : U.ToObject(this), n = U.ToUint32(t.length);
                if (0 === n) return -1;
                var r = 0;
                for (arguments.length > 1 && (r = U.ToInteger(arguments[1])), r = r >= 0 ? r : w(0, n + r); r < n; r++) if (r in t && t[r] === e) return r;
                return -1
            }
        }, ae);
        var se = r.lastIndexOf && [0, 1].lastIndexOf(0, -3) !== -1;
        L(r, {
            lastIndexOf: function (e) {
                var t = ne && A(this) ? G(this, "") : U.ToObject(this), n = U.ToUint32(t.length);
                if (0 === n) return -1;
                var r = n - 1;
                for (arguments.length > 1 && (r = x(r, U.ToInteger(arguments[1]))), r = r >= 0 ? r : n - Math.abs(r); r >= 0; r--) if (r in t && e === t[r]) return r;
                return -1
            }
        }, se);
        var ce = function () {
            var e = [1, 2], t = e.splice();
            return 2 === e.length && Q(t) && 0 === t.length
        }();
        L(r, {
            splice: function (e, t) {
                return 0 === arguments.length ? [] : d.apply(this, arguments)
            }
        }, !ce);
        var ue = function () {
            var e = {};
            return r.splice.call(e, 0, 0, 1), 1 === e.length
        }();
        L(r, {
            splice: function (e, t) {
                if (0 === arguments.length) return [];
                var n = arguments;
                return this.length = w(U.ToInteger(this.length), 0), arguments.length > 0 && "number" != typeof t && (n = X(arguments), n.length < 2 ? V(n, this.length - e) : n[1] = U.ToInteger(t)), d.apply(this, n)
            }
        }, !ue);
        var le = function () {
            var e = new n(1e5);
            return e[8] = "x", e.splice(1, 1), 7 === e.indexOf("x")
        }(), fe = function () {
            var e = 256, t = [];
            return t[e] = "a", t.splice(e + 1, 0, "b"), "a" === t[e]
        }();
        L(r, {
            splice: function (e, t) {
                for (var n, r = U.ToObject(this), o = [], i = U.ToUint32(r.length), a = U.ToInteger(e), s = a < 0 ? w(i + a, 0) : x(a, i), u = x(w(U.ToInteger(t), 0), i - s), l = 0; l < u;) n = c(s + l), $(r, n) && (o[l] = r[n]), l += 1;
                var f, p = X(arguments, 2), d = p.length;
                if (d < u) {
                    l = s;
                    for (var h = i - u; l < h;) n = c(l + u), f = c(l + d), $(r, n) ? r[f] = r[n] : delete r[f], l += 1;
                    l = i;
                    for (var y = i - u + d; l > y;) delete r[l - 1], l -= 1
                } else if (d > u) for (l = i - u; l > s;) n = c(l + u - 1), f = c(l + d - 1), $(r, n) ? r[f] = r[n] : delete r[f], l -= 1;
                l = s;
                for (var v = 0; v < p.length; ++v) r[l] = p[v], l += 1;
                return r.length = i - u + d, o
            }
        }, !le || !fe);
        var pe, de = r.join;
        try {
            pe = "1,2,3" !== Array.prototype.join.call("123", ",")
        } catch (he) {
            pe = !0
        }
        pe && L(r, {
            join: function (e) {
                var t = "undefined" == typeof e ? "," : e;
                return de.call(A(this) ? G(this, "") : this, t)
            }
        }, pe);
        var ye = "1,2" !== [1, 2].join(void 0);
        ye && L(r, {
            join: function (e) {
                var t = "undefined" == typeof e ? "," : e;
                return de.call(this, t)
            }
        }, ye);
        var ve = function (e) {
            for (var t = U.ToObject(this), n = U.ToUint32(t.length), r = 0; r < arguments.length;) t[n + r] = arguments[r], r += 1;
            return t.length = n + r, n + r
        }, me = function () {
            var e = {}, t = Array.prototype.push.call(e, void 0);
            return 1 !== t || 1 !== e.length || "undefined" != typeof e[0] || !$(e, 0)
        }();
        L(r, {
            push: function (e) {
                return Q(this) ? h.apply(this, arguments) : ve.apply(this, arguments)
            }
        }, me);
        var ge = function () {
            var e = [], t = e.push(void 0);
            return 1 !== t || 1 !== e.length || "undefined" != typeof e[0] || !$(e, 0)
        }();
        L(r, {push: ve}, ge), L(r, {
            slice: function (e, t) {
                var n = A(this) ? G(this, "") : this;
                return J(n, arguments)
            }
        }, ne);
        var be = function () {
            try {
                return [1, 2].sort(null), [1, 2].sort({}), !0
            } catch (e) {
            }
            return !1
        }(), we = function () {
            try {
                return [1, 2].sort(/a/), !1
            } catch (e) {
            }
            return !0
        }(), xe = function () {
            try {
                return [1, 2].sort(void 0), !0
            } catch (e) {
            }
            return !1
        }();
        L(r, {
            sort: function (t) {
                if ("undefined" == typeof t) return Z(this);
                if (!e(t)) throw new TypeError("Array.prototype.sort callback must be a function");
                return Z(this, t)
            }
        }, be || !xe || !we);
        var ke = !Y({toString: null}, "toString"), Se = Y(function () {
            }, "prototype"), _e = !$("x", "0"), Te = function (e) {
                var t = e.constructor;
                return t && t.prototype === e
            }, Oe = {
                $window: !0,
                $console: !0,
                $parent: !0,
                $self: !0,
                $frame: !0,
                $frames: !0,
                $frameElement: !0,
                $webkitIndexedDB: !0,
                $webkitStorageInfo: !0,
                $external: !0
            }, Ee = function () {
                if ("undefined" == typeof window) return !1;
                for (var e in window) try {
                    !Oe["$" + e] && $(window, e) && null !== window[e] && "object" == typeof window[e] && Te(window[e])
                } catch (t) {
                    return !0
                }
                return !1
            }(), Me = function (e) {
                if ("undefined" == typeof window || !Ee) return Te(e);
                try {
                    return Te(e)
                } catch (t) {
                    return !1
                }
            },
            Ce = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
            je = Ce.length, Pe = function (e) {
                return "[object Arguments]" === H(e)
            }, Ie = function (t) {
                return null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && !Q(t) && e(t.callee)
            }, Ae = Pe(arguments) ? Pe : Ie;
        L(o, {
            keys: function (t) {
                var n = e(t), r = Ae(t), o = null !== t && "object" == typeof t, i = o && A(t);
                if (!o && !n && !r) throw new TypeError("Object.keys called on a non-object");
                var a = [], s = Se && n;
                if (i && _e || r) for (var u = 0; u < t.length; ++u) V(a, c(u));
                if (!r) for (var l in t) s && "prototype" === l || !$(t, l) || V(a, c(l));
                if (ke) for (var f = Me(t), p = 0; p < je; p++) {
                    var d = Ce[p];
                    f && "constructor" === d || !$(t, d) || V(a, d)
                }
                return a
            }
        });
        var De = o.keys && function () {
            return 2 === o.keys(arguments).length
        }(1, 2), Ne = o.keys && function () {
            var e = o.keys(arguments);
            return 1 !== arguments.length || 1 !== e.length || 1 !== e[0]
        }(1), Fe = o.keys;
        L(o, {
            keys: function (e) {
                return Fe(Ae(e) ? X(e) : e)
            }
        }, !De || Ne);
        var Re, Le, We = 0 !== new Date((-0xc782b5b342b24)).getUTCMonth(), Be = new Date((-0x55d318d56a724)),
            Ue = new Date(14496624e5), qe = "Mon, 01 Jan -45875 11:59:59 GMT" !== Be.toUTCString(),
            $e = Be.getTimezoneOffset();
        $e < -720 ? (Re = "Tue Jan 02 -45875" !== Be.toDateString(), Le = !/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(Ue.toString())) : (Re = "Mon Jan 01 -45875" !== Be.toDateString(), Le = !/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(Ue.toString()));
        var He = g.bind(Date.prototype.getFullYear), Xe = g.bind(Date.prototype.getMonth),
            Je = g.bind(Date.prototype.getDate), ze = g.bind(Date.prototype.getUTCFullYear),
            Ge = g.bind(Date.prototype.getUTCMonth), Ke = g.bind(Date.prototype.getUTCDate),
            Ve = g.bind(Date.prototype.getUTCDay), Ye = g.bind(Date.prototype.getUTCHours),
            Ze = g.bind(Date.prototype.getUTCMinutes), Qe = g.bind(Date.prototype.getUTCSeconds),
            et = g.bind(Date.prototype.getUTCMilliseconds), tt = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            nt = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            rt = function (e, t) {
                return Je(new Date(t, e, 0))
            };
        L(Date.prototype, {
            getFullYear: function () {
                if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                var e = He(this);
                return e < 0 && Xe(this) > 11 ? e + 1 : e
            }, getMonth: function () {
                if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                var e = He(this), t = Xe(this);
                return e < 0 && t > 11 ? 0 : t
            }, getDate: function () {
                if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                var e = He(this), t = Xe(this), n = Je(this);
                if (e < 0 && t > 11) {
                    if (12 === t) return n;
                    var r = rt(0, e + 1);
                    return r - n + 1
                }
                return n
            }, getUTCFullYear: function () {
                if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                var e = ze(this);
                return e < 0 && Ge(this) > 11 ? e + 1 : e
            }, getUTCMonth: function () {
                if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                var e = ze(this), t = Ge(this);
                return e < 0 && t > 11 ? 0 : t
            }, getUTCDate: function () {
                if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                var e = ze(this), t = Ge(this), n = Ke(this);
                if (e < 0 && t > 11) {
                    if (12 === t) return n;
                    var r = rt(0, e + 1);
                    return r - n + 1
                }
                return n
            }
        }, We), L(Date.prototype, {
            toUTCString: function () {
                if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                var e = Ve(this), t = Ke(this), n = Ge(this), r = ze(this), o = Ye(this), i = Ze(this), a = Qe(this);
                return tt[e] + ", " + (t < 10 ? "0" + t : t) + " " + nt[n] + " " + r + " " + (o < 10 ? "0" + o : o) + ":" + (i < 10 ? "0" + i : i) + ":" + (a < 10 ? "0" + a : a) + " GMT"
            }
        }, We || qe), L(Date.prototype, {
            toDateString: function () {
                if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                var e = this.getDay(), t = this.getDate(), n = this.getMonth(), r = this.getFullYear();
                return tt[e] + " " + nt[n] + " " + (t < 10 ? "0" + t : t) + " " + r
            }
        }, We || Re), (We || Le) && (Date.prototype.toString = function () {
            if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
            var e = this.getDay(), t = this.getDate(), n = this.getMonth(), r = this.getFullYear(), o = this.getHours(),
                i = this.getMinutes(), a = this.getSeconds(), s = this.getTimezoneOffset(),
                c = Math.floor(Math.abs(s) / 60), u = Math.floor(Math.abs(s) % 60);
            return tt[e] + " " + nt[n] + " " + (t < 10 ? "0" + t : t) + " " + r + " " + (o < 10 ? "0" + o : o) + ":" + (i < 10 ? "0" + i : i) + ":" + (a < 10 ? "0" + a : a) + " GMT" + (s > 0 ? "-" : "+") + (c < 10 ? "0" + c : c) + (u < 10 ? "0" + u : u)
        }, R && o.defineProperty(Date.prototype, "toString", {configurable: !0, enumerable: !1, writable: !0}));
        var ot = -621987552e5, it = "-000001",
            at = Date.prototype.toISOString && new Date(ot).toISOString().indexOf(it) === -1,
            st = Date.prototype.toISOString && "1969-12-31T23:59:59.999Z" !== new Date((-1)).toISOString(),
            ct = g.bind(Date.prototype.getTime);
        L(Date.prototype, {
            toISOString: function () {
                if (!isFinite(this) || !isFinite(ct(this))) throw new RangeError("Date.prototype.toISOString called on non-finite value.");
                var e = ze(this), t = Ge(this);
                e += Math.floor(t / 12), t = (t % 12 + 12) % 12;
                var n = [t + 1, Ke(this), Ye(this), Ze(this), Qe(this)];
                e = (e < 0 ? "-" : e > 9999 ? "+" : "") + z("00000" + Math.abs(e), 0 <= e && e <= 9999 ? -4 : -6);
                for (var r = 0; r < n.length; ++r) n[r] = z("00" + n[r], -2);
                return e + "-" + X(n, 0, 2).join("-") + "T" + X(n, 2).join(":") + "." + z("000" + et(this), -3) + "Z"
            }
        }, at || st);
        var ut = function () {
            try {
                return Date.prototype.toJSON && null === new Date(NaN).toJSON() && new Date(ot).toJSON().indexOf(it) !== -1 && Date.prototype.toJSON.call({
                    toISOString: function () {
                        return !0
                    }
                })
            } catch (e) {
                return !1
            }
        }();
        ut || (Date.prototype.toJSON = function (t) {
            var n = o(this), r = U.ToPrimitive(n);
            if ("number" == typeof r && !isFinite(r)) return null;
            var i = n.toISOString;
            if (!e(i)) throw new TypeError("toISOString property is not callable");
            return i.call(n)
        });
        var lt = 1e15 === Date.parse("+033658-09-27T01:46:40.000Z"),
            ft = !isNaN(Date.parse("2012-04-04T24:00:00.500Z")) || !isNaN(Date.parse("2012-11-31T23:59:59.000Z")) || !isNaN(Date.parse("2012-12-31T23:59:60.000Z")),
            pt = isNaN(Date.parse("2000-01-01T00:00:00.000Z"));
        if (pt || ft || !lt) {
            var dt = Math.pow(2, 31) - 1, ht = B(new Date(1970, 0, 1, 0, 0, 0, dt + 1).getTime());
            Date = function (e) {
                var t = function (n, r, o, i, a, s, u) {
                        var l, f = arguments.length;
                        if (this instanceof e) {
                            var p = s, d = u;
                            if (ht && f >= 7 && u > dt) {
                                var h = Math.floor(u / dt) * dt, y = Math.floor(h / 1e3);
                                p += y, d -= 1e3 * y
                            }
                            l = 1 === f && c(n) === n ? new e(t.parse(n)) : f >= 7 ? new e(n, r, o, i, a, p, d) : f >= 6 ? new e(n, r, o, i, a, p) : f >= 5 ? new e(n, r, o, i, a) : f >= 4 ? new e(n, r, o, i) : f >= 3 ? new e(n, r, o) : f >= 2 ? new e(n, r) : f >= 1 ? new e(n instanceof e ? +n : n) : new e
                        } else l = e.apply(this, arguments);
                        return W(l) || L(l, {constructor: t}, !0), l
                    },
                    n = new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),
                    r = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365], o = function (e, t) {
                        var n = t > 1 ? 1 : 0;
                        return r[t] + Math.floor((e - 1969 + n) / 4) - Math.floor((e - 1901 + n) / 100) + Math.floor((e - 1601 + n) / 400) + 365 * (e - 1970)
                    }, i = function (t) {
                        var n = 0, r = t;
                        if (ht && r > dt) {
                            var o = Math.floor(r / dt) * dt, i = Math.floor(o / 1e3);
                            n += i, r -= 1e3 * i
                        }
                        return l(new e(1970, 0, 1, 0, 0, n, r))
                    };
                for (var a in e) $(e, a) && (t[a] = e[a]);
                L(t, {now: e.now, UTC: e.UTC}, !0), t.prototype = e.prototype, L(t.prototype, {constructor: t}, !0);
                var s = function (t) {
                    var r = n.exec(t);
                    if (r) {
                        var a, s = l(r[1]), c = l(r[2] || 1) - 1, u = l(r[3] || 1) - 1, f = l(r[4] || 0),
                            p = l(r[5] || 0), d = l(r[6] || 0), h = Math.floor(1e3 * l(r[7] || 0)),
                            y = Boolean(r[4] && !r[8]), v = "-" === r[9] ? 1 : -1, m = l(r[10] || 0), g = l(r[11] || 0),
                            b = p > 0 || d > 0 || h > 0;
                        return f < (b ? 24 : 25) && p < 60 && d < 60 && h < 1e3 && c > -1 && c < 12 && m < 24 && g < 60 && u > -1 && u < o(s, c + 1) - o(s, c) && (a = 60 * (24 * (o(s, c) + u) + f + m * v), a = 1e3 * (60 * (a + p + g * v) + d) + h, y && (a = i(a)), -864e13 <= a && a <= 864e13) ? a : NaN
                    }
                    return e.parse.apply(this, arguments)
                };
                return L(t, {parse: s}), t
            }(Date)
        }
        Date.now || (Date.now = function () {
            return (new Date).getTime()
        });
        var yt = f.toFixed && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)),
            vt = {
                base: 1e7, size: 6, data: [0, 0, 0, 0, 0, 0], multiply: function (e, t) {
                    for (var n = -1, r = t; ++n < vt.size;) r += e * vt.data[n], vt.data[n] = r % vt.base, r = Math.floor(r / vt.base)
                }, divide: function (e) {
                    for (var t = vt.size, n = 0; --t >= 0;) n += vt.data[t], vt.data[t] = Math.floor(n / e), n = n % e * vt.base
                }, numToString: function () {
                    for (var e = vt.size, t = ""; --e >= 0;) if ("" !== t || 0 === e || 0 !== vt.data[e]) {
                        var n = c(vt.data[e]);
                        "" === t ? t = n : t += z("0000000", 0, 7 - n.length) + n
                    }
                    return t
                }, pow: function Ft(e, t, n) {
                    return 0 === t ? n : t % 2 === 1 ? Ft(e, t - 1, n * e) : Ft(e * e, t / 2, n)
                }, log: function (e) {
                    for (var t = 0, n = e; n >= 4096;) t += 12, n /= 4096;
                    for (; n >= 2;) t += 1, n /= 2;
                    return t
                }
            }, mt = function (e) {
                var t, n, r, o, i, a, s, u;
                if (t = l(e), t = B(t) ? 0 : Math.floor(t), t < 0 || t > 20) throw new RangeError("Number.toFixed called with invalid number of decimals");
                if (n = l(this), B(n)) return "NaN";
                if (n <= -1e21 || n >= 1e21) return c(n);
                if (r = "", n < 0 && (r = "-", n = -n), o = "0", n > 1e-21) if (i = vt.log(n * vt.pow(2, 69, 1)) - 69, a = i < 0 ? n * vt.pow(2, -i, 1) : n / vt.pow(2, i, 1), a *= 4503599627370496, i = 52 - i, i > 0) {
                    for (vt.multiply(0, a), s = t; s >= 7;) vt.multiply(1e7, 0), s -= 7;
                    for (vt.multiply(vt.pow(10, s, 1), 0), s = i - 1; s >= 23;) vt.divide(1 << 23), s -= 23;
                    vt.divide(1 << s), vt.multiply(1, 1), vt.divide(2), o = vt.numToString()
                } else vt.multiply(0, a), vt.multiply(1 << -i, 0), o = vt.numToString() + z("0.00000000000000000000", 2, 2 + t);
                return t > 0 ? (u = o.length, o = u <= t ? r + z("0.0000000000000000000", 0, t - u + 2) + o : r + z(o, 0, u - t) + "." + z(o, u - t)) : o = r + o, o
            };
        L(f, {toFixed: mt}, yt);
        var gt = function () {
            try {
                return "1" === 1..toPrecision(void 0)
            } catch (e) {
                return !0
            }
        }(), bt = f.toPrecision;
        L(f, {
            toPrecision: function (e) {
                return "undefined" == typeof e ? bt.call(this) : bt.call(this, e)
            }
        }, gt), 2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || "t" === "tesst".split(/(s)*/)[1] || 4 !== "test".split(/(?:)/, -1).length || "".split(/.?/).length || ".".split(/()()/).length > 1 ? !function () {
            var e = "undefined" == typeof/()??/.exec("")[1], n = Math.pow(2, 32) - 1;
            u.split = function (r, o) {
                var i = String(this);
                if ("undefined" == typeof r && 0 === o) return [];
                if (!t(r)) return G(this, r, o);
                var a, s, c, u, l = [],
                    f = (r.ignoreCase ? "i" : "") + (r.multiline ? "m" : "") + (r.unicode ? "u" : "") + (r.sticky ? "y" : ""),
                    p = 0, d = new RegExp(r.source, f + "g");
                e || (a = new RegExp("^" + d.source + "$(?!\\s)", f));
                var y = "undefined" == typeof o ? n : U.ToUint32(o);
                for (s = d.exec(i); s && (c = s.index + s[0].length, !(c > p && (V(l, z(i, p, s.index)), !e && s.length > 1 && s[0].replace(a, function () {
                    for (var e = 1; e < arguments.length - 2; e++) "undefined" == typeof arguments[e] && (s[e] = void 0)
                }), s.length > 1 && s.index < i.length && h.apply(l, X(s, 1)), u = s[0].length, p = c, l.length >= y)));) d.lastIndex === s.index && d.lastIndex++, s = d.exec(i);
                return p === i.length ? !u && d.test("") || V(l, "") : V(l, z(i, p)), l.length > y ? X(l, 0, y) : l
            }
        }() : "0".split(void 0, 0).length && (u.split = function (e, t) {
            return "undefined" == typeof e && 0 === t ? [] : G(this, e, t)
        });
        var wt = u.replace, xt = function () {
            var e = [];
            return "x".replace(/x(.)?/g, function (t, n) {
                V(e, n)
            }), 1 === e.length && "undefined" == typeof e[0]
        }();
        xt || (u.replace = function (n, r) {
            var o = e(r), i = t(n) && /\)[*?]/.test(n.source);
            if (o && i) {
                var a = function (e) {
                    var t = arguments.length, o = n.lastIndex;
                    n.lastIndex = 0;
                    var i = n.exec(e) || [];
                    return n.lastIndex = o, V(i, arguments[t - 2], arguments[t - 1]), r.apply(this, i)
                };
                return wt.call(this, n, a)
            }
            return wt.call(this, n, r)
        });
        var kt = u.substr, St = "".substr && "b" !== "0b".substr(-1);
        L(u, {
            substr: function (e, t) {
                var n = e;
                return e < 0 && (n = w(this.length + e, 0)), kt.call(this, n, t)
            }
        }, St);
        var _t = "\t\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff", Tt = "​", Ot = "[" + _t + "]",
            Et = new RegExp("^" + Ot + Ot + "*"), Mt = new RegExp(Ot + Ot + "*$"),
            Ct = u.trim && (_t.trim() || !Tt.trim());
        L(u, {
            trim: function () {
                if ("undefined" == typeof this || null === this) throw new TypeError("can't convert " + this + " to object");
                return c(this).replace(Et, "").replace(Mt, "")
            }
        }, Ct);
        var jt = g.bind(String.prototype.trim), Pt = u.lastIndexOf && "abcあい".lastIndexOf("あい", 2) !== -1;
        L(u, {
            lastIndexOf: function (e) {
                if ("undefined" == typeof this || null === this) throw new TypeError("can't convert " + this + " to object");
                for (var t = c(this), n = c(e), r = arguments.length > 1 ? l(arguments[1]) : NaN, o = B(r) ? 1 / 0 : U.ToInteger(r), i = x(w(o, 0), t.length), a = n.length, s = i + a; s > 0;) {
                    s = w(0, s - a);
                    var u = K(z(t, s, i + a), n);
                    if (u !== -1) return s + u
                }
                return -1
            }
        }, Pt);
        var It = u.lastIndexOf;
        if (L(u, {
                lastIndexOf: function (e) {
                    return It.apply(this, arguments)
                }
            }, 1 !== u.lastIndexOf.length), 8 === parseInt(_t + "08") && 22 === parseInt(_t + "0x16") || (parseInt = function (e) {
                var t = /^[\-+]?0[xX]/;
                return function (n, r) {
                    var o = jt(String(n)), i = l(r) || (t.test(o) ? 16 : 10);
                    return e(o, i)
                }
            }(parseInt)), 1 / parseFloat("-0") !== -(1 / 0) && (parseFloat = function (e) {
                return function (t) {
                    var n = jt(String(t)), r = e(n);
                    return 0 === r && "-" === z(n, 0, 1) ? -0 : r
                }
            }(parseFloat)), "RangeError: test" !== String(new RangeError("test"))) {
            var At = function () {
                if ("undefined" == typeof this || null === this) throw new TypeError("can't convert " + this + " to object");
                var e = this.name;
                "undefined" == typeof e ? e = "Error" : "string" != typeof e && (e = c(e));
                var t = this.message;
                return "undefined" == typeof t ? t = "" : "string" != typeof t && (t = c(t)), e ? t ? e + ": " + t : e : t
            };
            Error.prototype.toString = At
        }
        if (R) {
            var Dt = function (e, t) {
                if (Y(e, t)) {
                    var n = Object.getOwnPropertyDescriptor(e, t);
                    n.configurable && (n.enumerable = !1, Object.defineProperty(e, t, n))
                }
            };
            Dt(Error.prototype, "message"), "" !== Error.prototype.message && (Error.prototype.message = ""), Dt(Error.prototype, "name")
        }
        if ("/a/gim" !== String(/a/gim)) {
            var Nt = function () {
                var e = "/" + this.source + "/";
                return this.global && (e += "g"), this.ignoreCase && (e += "i"), this.multiline && (e += "m"), e
            };
            RegExp.prototype.toString = Nt
        }
    })
}, function (e, t, n) {
    var r, o;
    !function (i, a) {
        "use strict";
        r = a, o = "function" == typeof r ? r.call(t, n, t, e) : r, !(void 0 !== o && (e.exports = o))
    }(this, function () {
        var e, t, n, r, o = Function.call, i = Object.prototype, a = o.bind(i.hasOwnProperty),
            s = o.bind(i.propertyIsEnumerable), c = o.bind(i.toString), u = a(i, "__defineGetter__");
        u && (e = o.bind(i.__defineGetter__), t = o.bind(i.__defineSetter__), n = o.bind(i.__lookupGetter__), r = o.bind(i.__lookupSetter__));
        var l = function (e) {
            return null == e || "object" != typeof e && "function" != typeof e
        };
        Object.getPrototypeOf || (Object.getPrototypeOf = function (e) {
            var t = e.__proto__;
            return t || null === t ? t : "[object Function]" === c(e.constructor) ? e.constructor.prototype : e instanceof Object ? i : null
        });
        var f = function (e) {
            try {
                return e.sentinel = 0, 0 === Object.getOwnPropertyDescriptor(e, "sentinel").value
            } catch (t) {
                return !1
            }
        };
        if (Object.defineProperty) {
            var p = f({}), d = "undefined" == typeof document || f(document.createElement("div"));
            if (!d || !p) var h = Object.getOwnPropertyDescriptor
        }
        if (!Object.getOwnPropertyDescriptor || h) {
            var y = "Object.getOwnPropertyDescriptor called on a non-object: ";
            Object.getOwnPropertyDescriptor = function (e, t) {
                if (l(e)) throw new TypeError(y + e);
                if (h) try {
                    return h.call(Object, e, t)
                } catch (o) {
                }
                var c;
                if (!a(e, t)) return c;
                if (c = {enumerable: s(e, t), configurable: !0}, u) {
                    var f = e.__proto__, p = e !== i;
                    p && (e.__proto__ = i);
                    var d = n(e, t), v = r(e, t);
                    if (p && (e.__proto__ = f), d || v) return d && (c.get = d), v && (c.set = v), c
                }
                return c.value = e[t], c.writable = !0, c
            }
        }
        if (Object.getOwnPropertyNames || (Object.getOwnPropertyNames = function (e) {
                return Object.keys(e)
            }), !Object.create) {
            var v, m = !({__proto__: null} instanceof Object), g = function () {
                if (!document.domain) return !1;
                try {
                    return !!new ActiveXObject("htmlfile")
                } catch (e) {
                    return !1
                }
            }, b = function () {
                var e, t;
                t = new ActiveXObject("htmlfile");
                var n = "script";
                return t.write("<" + n + "></" + n + ">"), t.close(), e = t.parentWindow.Object.prototype, t = null, e
            }, w = function () {
                var e, t = document.createElement("iframe"), n = document.body || document.documentElement;
                return t.style.display = "none", n.appendChild(t), t.src = "javascript:", e = t.contentWindow.Object.prototype, n.removeChild(t), t = null, e
            };
            v = m || "undefined" == typeof document ? function () {
                return {__proto__: null}
            } : function () {
                var e = g() ? b() : w();
                delete e.constructor, delete e.hasOwnProperty, delete e.propertyIsEnumerable, delete e.isPrototypeOf, delete e.toLocaleString, delete e.toString, delete e.valueOf;
                var t = function () {
                };
                return t.prototype = e, v = function () {
                    return new t
                }, new t
            }, Object.create = function (e, t) {
                var n, r = function () {
                };
                if (null === e) n = v(); else {
                    if (null !== e && l(e)) throw new TypeError("Object prototype may only be an Object or null");
                    r.prototype = e, n = new r, n.__proto__ = e
                }
                return void 0 !== t && Object.defineProperties(n, t), n
            }
        }
        var x = function (e) {
            try {
                return Object.defineProperty(e, "sentinel", {}), "sentinel" in e
            } catch (t) {
                return !1
            }
        };
        if (Object.defineProperty) {
            var k = x({}), S = "undefined" == typeof document || x(document.createElement("div"));
            if (!k || !S) var _ = Object.defineProperty, T = Object.defineProperties
        }
        if (!Object.defineProperty || _) {
            var O = "Property description must be an object: ", E = "Object.defineProperty called on non-object: ",
                M = "getters & setters can not be defined on this javascript engine";
            Object.defineProperty = function (o, a, s) {
                if (l(o)) throw new TypeError(E + o);
                if (l(s)) throw new TypeError(O + s);
                if (_) try {
                    return _.call(Object, o, a, s)
                } catch (c) {
                }
                if ("value" in s) if (u && (n(o, a) || r(o, a))) {
                    var f = o.__proto__;
                    o.__proto__ = i, delete o[a], o[a] = s.value, o.__proto__ = f
                } else o[a] = s.value; else {
                    var p = "get" in s, d = "set" in s;
                    if (!u && (p || d)) throw new TypeError(M);
                    p && e(o, a, s.get), d && t(o, a, s.set)
                }
                return o
            }
        }
        Object.defineProperties && !T || (Object.defineProperties = function (e, t) {
            if (T) try {
                return T.call(Object, e, t)
            } catch (n) {
            }
            return Object.keys(t).forEach(function (n) {
                "__proto__" !== n && Object.defineProperty(e, n, t[n])
            }), e
        }), Object.seal || (Object.seal = function (e) {
            if (Object(e) !== e) throw new TypeError("Object.seal can only be called on Objects.");
            return e
        }), Object.freeze || (Object.freeze = function (e) {
            if (Object(e) !== e) throw new TypeError("Object.freeze can only be called on Objects.");
            return e
        });
        try {
            Object.freeze(function () {
            })
        } catch (C) {
            Object.freeze = function (e) {
                return function (t) {
                    return "function" == typeof t ? t : e(t)
                }
            }(Object.freeze)
        }
        Object.preventExtensions || (Object.preventExtensions = function (e) {
            if (Object(e) !== e) throw new TypeError("Object.preventExtensions can only be called on Objects.");
            return e
        }), Object.isSealed || (Object.isSealed = function (e) {
            if (Object(e) !== e) throw new TypeError("Object.isSealed can only be called on Objects.");
            return !1
        }), Object.isFrozen || (Object.isFrozen = function (e) {
            if (Object(e) !== e) throw new TypeError("Object.isFrozen can only be called on Objects.");
            return !1
        }), Object.isExtensible || (Object.isExtensible = function (e) {
            if (Object(e) !== e) throw new TypeError("Object.isExtensible can only be called on Objects.");
            for (var t = ""; a(e, t);) t += "?";
            e[t] = !0;
            var n = a(e, t);
            return delete e[t], n
        })
    })
}, function (e, t, n) {
    var r;
    (function (e, o, i) {
        (function () {
            "use strict";

            function a(e) {
                return "function" == typeof e || "object" == typeof e && null !== e
            }

            function s(e) {
                return "function" == typeof e
            }

            function c(e) {
                V = e
            }

            function u(e) {
                ee = e
            }

            function l() {
                return function () {
                    e.nextTick(y)
                }
            }

            function f() {
                return function () {
                    K(y)
                }
            }

            function p() {
                var e = 0, t = new re(y), n = document.createTextNode("");
                return t.observe(n, {characterData: !0}), function () {
                    n.data = e = ++e % 2
                }
            }

            function d() {
                var e = new MessageChannel;
                return e.port1.onmessage = y, function () {
                    e.port2.postMessage(0)
                }
            }

            function h() {
                return function () {
                    setTimeout(y, 1)
                }
            }

            function y() {
                for (var e = 0; e < Q; e += 2) {
                    var t = ae[e], n = ae[e + 1];
                    t(n), ae[e] = void 0, ae[e + 1] = void 0
                }
                Q = 0
            }

            function v() {
                try {
                    var e = n(6);
                    return K = e.runOnLoop || e.runOnContext, f()
                } catch (t) {
                    return h()
                }
            }

            function m(e, t) {
                var n = this, r = new this.constructor(b);
                void 0 === r[ue] && L(r);
                var o = n._state;
                if (o) {
                    var i = arguments[o - 1];
                    ee(function () {
                        N(o, r, i, n._result)
                    })
                } else P(n, r, e, t);
                return r
            }

            function g(e) {
                var t = this;
                if (e && "object" == typeof e && e.constructor === t) return e;
                var n = new t(b);
                return E(n, e), n
            }

            function b() {
            }

            function w() {
                return new TypeError("You cannot resolve a promise with itself")
            }

            function x() {
                return new TypeError("A promises callback cannot return that same promise.")
            }

            function k(e) {
                try {
                    return e.then
                } catch (t) {
                    return de.error = t, de
                }
            }

            function S(e, t, n, r) {
                try {
                    e.call(t, n, r)
                } catch (o) {
                    return o
                }
            }

            function _(e, t, n) {
                ee(function (e) {
                    var r = !1, o = S(n, t, function (n) {
                        r || (r = !0, t !== n ? E(e, n) : C(e, n))
                    }, function (t) {
                        r || (r = !0, j(e, t))
                    }, "Settle: " + (e._label || " unknown promise"));
                    !r && o && (r = !0, j(e, o))
                }, e)
            }

            function T(e, t) {
                t._state === fe ? C(e, t._result) : t._state === pe ? j(e, t._result) : P(t, void 0, function (t) {
                    E(e, t)
                }, function (t) {
                    j(e, t)
                })
            }

            function O(e, t, n) {
                t.constructor === e.constructor && n === se && constructor.resolve === ce ? T(e, t) : n === de ? j(e, de.error) : void 0 === n ? C(e, t) : s(n) ? _(e, t, n) : C(e, t)
            }

            function E(e, t) {
                e === t ? j(e, w()) : a(t) ? O(e, t, k(t)) : C(e, t)
            }

            function M(e) {
                e._onerror && e._onerror(e._result), I(e)
            }

            function C(e, t) {
                e._state === le && (e._result = t, e._state = fe, 0 !== e._subscribers.length && ee(I, e))
            }

            function j(e, t) {
                e._state === le && (e._state = pe, e._result = t, ee(M, e))
            }

            function P(e, t, n, r) {
                var o = e._subscribers, i = o.length;
                e._onerror = null, o[i] = t, o[i + fe] = n, o[i + pe] = r, 0 === i && e._state && ee(I, e)
            }

            function I(e) {
                var t = e._subscribers, n = e._state;
                if (0 !== t.length) {
                    for (var r, o, i = e._result, a = 0; a < t.length; a += 3) r = t[a], o = t[a + n], r ? N(n, r, o, i) : o(i);
                    e._subscribers.length = 0
                }
            }

            function A() {
                this.error = null
            }

            function D(e, t) {
                try {
                    return e(t)
                } catch (n) {
                    return he.error = n, he
                }
            }

            function N(e, t, n, r) {
                var o, i, a, c, u = s(n);
                if (u) {
                    if (o = D(n, r), o === he ? (c = !0, i = o.error, o = null) : a = !0, t === o) return void j(t, x())
                } else o = r, a = !0;
                t._state !== le || (u && a ? E(t, o) : c ? j(t, i) : e === fe ? C(t, o) : e === pe && j(t, o))
            }

            function F(e, t) {
                try {
                    t(function (t) {
                        E(e, t)
                    }, function (t) {
                        j(e, t)
                    })
                } catch (n) {
                    j(e, n)
                }
            }

            function R() {
                return ye++
            }

            function L(e) {
                e[ue] = ye++, e._state = void 0, e._result = void 0, e._subscribers = []
            }

            function W(e) {
                return new we(this, e).promise
            }

            function B(e) {
                var t = this;
                return new t(Z(e) ? function (n, r) {
                    for (var o = e.length, i = 0; i < o; i++) t.resolve(e[i]).then(n, r)
                } : function (e, t) {
                    t(new TypeError("You must pass an array to race."))
                })
            }

            function U(e) {
                var t = this, n = new t(b);
                return j(n, e), n
            }

            function q() {
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
            }

            function $() {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
            }

            function H(e) {
                this[ue] = R(), this._result = this._state = void 0, this._subscribers = [], b !== e && ("function" != typeof e && q(), this instanceof H ? F(this, e) : $())
            }

            function X(e, t) {
                this._instanceConstructor = e, this.promise = new e(b), this.promise[ue] || L(this.promise), Z(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? C(this.promise, this._result) : (this.length = this.length || 0,
                    this._enumerate(), 0 === this._remaining && C(this.promise, this._result))) : j(this.promise, J())
            }

            function J() {
                return new Error("Array Methods must be provided an Array")
            }

            function z() {
                var e;
                if ("undefined" != typeof o) e = o; else if ("undefined" != typeof self) e = self; else try {
                    e = Function("return this")()
                } catch (t) {
                    throw new Error("polyfill failed because global object is unavailable in this environment")
                }
                var n = e.Promise;
                n && "[object Promise]" === Object.prototype.toString.call(n.resolve()) && !n.cast || (e.Promise = be)
            }

            var G;
            G = Array.isArray ? Array.isArray : function (e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            };
            var K, V, Y, Z = G, Q = 0, ee = function (e, t) {
                    ae[Q] = e, ae[Q + 1] = t, Q += 2, 2 === Q && (V ? V(y) : Y())
                }, te = "undefined" != typeof window ? window : void 0, ne = te || {},
                re = ne.MutationObserver || ne.WebKitMutationObserver,
                oe = "undefined" == typeof self && "undefined" != typeof e && "[object process]" === {}.toString.call(e),
                ie = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                ae = new Array(1e3);
            Y = oe ? l() : re ? p() : ie ? d() : void 0 === te ? v() : h();
            var se = m, ce = g, ue = Math.random().toString(36).substring(16), le = void 0, fe = 1, pe = 2, de = new A,
                he = new A, ye = 0, ve = W, me = B, ge = U, be = H;
            H.all = ve, H.race = me, H.resolve = ce, H.reject = ge, H._setScheduler = c, H._setAsap = u, H._asap = ee, H.prototype = {
                constructor: H,
                then: se,
                "catch": function (e) {
                    return this.then(null, e)
                }
            };
            var we = X;
            X.prototype._enumerate = function () {
                for (var e = this.length, t = this._input, n = 0; this._state === le && n < e; n++) this._eachEntry(t[n], n)
            }, X.prototype._eachEntry = function (e, t) {
                var n = this._instanceConstructor, r = n.resolve;
                if (r === ce) {
                    var o = k(e);
                    if (o === se && e._state !== le) this._settledAt(e._state, t, e._result); else if ("function" != typeof o) this._remaining--, this._result[t] = e; else if (n === be) {
                        var i = new n(b);
                        O(i, e, o), this._willSettleAt(i, t)
                    } else this._willSettleAt(new n(function (t) {
                        t(e)
                    }), t)
                } else this._willSettleAt(r(e), t)
            }, X.prototype._settledAt = function (e, t, n) {
                var r = this.promise;
                r._state === le && (this._remaining--, e === pe ? j(r, n) : this._result[t] = n), 0 === this._remaining && C(r, this._result)
            }, X.prototype._willSettleAt = function (e, t) {
                var n = this;
                P(e, void 0, function (e) {
                    n._settledAt(fe, t, e)
                }, function (e) {
                    n._settledAt(pe, t, e)
                })
            };
            var xe = z, ke = {Promise: be, polyfill: xe};
            n(7).amd ? (r = function () {
                return ke
            }.call(t, n, t, i), !(void 0 !== r && (i.exports = r))) : "undefined" != typeof i && i.exports ? i.exports = ke : "undefined" != typeof this && (this.ES6Promise = ke), xe()
        }).call(this)
    }).call(t, n(4), function () {
        return this
    }(), n(5)(e))
}, function (e, t) {
    function n() {
        u && a && (u = !1, a.length ? c = a.concat(c) : l = -1, c.length && r())
    }

    function r() {
        if (!u) {
            var e = setTimeout(n);
            u = !0;
            for (var t = c.length; t;) {
                for (a = c, c = []; ++l < t;) a && a[l].run();
                l = -1, t = c.length
            }
            a = null, u = !1, clearTimeout(e)
        }
    }

    function o(e, t) {
        this.fun = e, this.array = t
    }

    function i() {
    }

    var a, s = e.exports = {}, c = [], u = !1, l = -1;
    s.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        c.push(new o(e, t)), 1 !== c.length || u || setTimeout(r, 0)
    }, o.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {}, s.on = i, s.addListener = i, s.once = i, s.off = i, s.removeListener = i, s.removeAllListeners = i, s.emit = i, s.binding = function (e) {
        throw new Error("process.binding is not supported")
    }, s.cwd = function () {
        return "/"
    }, s.chdir = function (e) {
        throw new Error("process.chdir is not supported")
    }, s.umask = function () {
        return 0
    }
}, function (e, t) {
    e.exports = function (e) {
        return e.webpackPolyfill || (e.deprecate = function () {
        }, e.paths = [], e.children = [], e.webpackPolyfill = 1), e
    }
}, function (e, t) {
}, function (e, t) {
    e.exports = function () {
        throw new Error("define cannot be used indirect")
    }
}, , function (e, t, n) {
    function r() {
    }

    var o = n(10), i = o.notundef, a = n(17);
    r.setDebug = function (e) {
        a.setDebug(e)
    };
    var s = {};
    r.getInstance = function (e) {
        var t = this;
        o.verifyOptions(e, "account");
        var n = t.genInstanceName(e), i = s[n];
        return i ? r.updateInstance(i, e) : i = s[n] = new t(e), i
    }, r.updateInstance = function (e, t) {
        e.setOptions(t), e.connect()
    };
    var c = r.fn = r.prototype;
    c.init = function (e) {
        var t = this;
        o.verifyOptions(e, "account");
        var n = t.account = e.account = e.account + "", i = e.constructor, a = i.genInstanceName(e), c = s[a];
        if (e._disableSingleton && (c = null), c) return r.updateInstance(c, e), c;
        t.name = a, s[a] = t, e.api = t;
        var u = t.protocol = new e.Protocol(e);
        return u.name = "Protocol-" + a, u.account = n, u.api = t, u.message = t.message = new e.Message({account: n}), t.options = o.copy(e), t.reset(), t
    }, c.reset = function () {
        var e = this, t = e.options;
        a.setDebug(t.debug), this._usePromise = !!t.promise, o.verifyBooleanWithDefault(t, "exifOrientation", !0)
    }, c.usePromise = function (e) {
        return this._usePromise || e.promise
    }, c.setOptions = function (e) {
        this.reset(), this.protocol.setOptions(e)
    }, c.processCallback = function (e, t) {
        var n = new Promise(function (n, r) {
            o.verifyCallback(e, "done"), e.callback = function (a, s) {
                var c = e.callback.options;
                if (s = s || c, t && (s = c), o.isFunction(e.cbaop)) {
                    var u = e.cbaop(a, s);
                    i(u) && (s = u)
                }
                var l = e.done;
                o.isObject(s) && (delete s.done, delete s.cb, delete s.callback), setTimeout(function () {
                    a ? r(a) : n(s), l(a, s)
                }, 0)
            }, e.callback.options = o.copy(e)
        });
        return this.usePromise(e) ? n : void n.then(void 0, function () {
        })
    }, c.processPs = function (e) {
        o.notexist(e.ps) && (e.ps = "")
    }, c.processCustom = function (e) {
        o.notexist(e.custom) && (e.custom = "")
    }, c.sendCmd = function () {
        this.protocol.sendCmd.apply(this.protocol, arguments)
    }, e.exports = r, n(19), n(20), n(27), n(29)
}, function (e, t, n) {
    var r = n(11), o = n(12);
    n(13);
    var i = n(14), a = n(15), s = /\s+/;
    a.deduplicate = function (e) {
        var t = [];
        return e.forEach(function (e) {
            t.indexOf(e) === -1 && t.push(e)
        }), t
    }, a.capFirstLetter = function (e) {
        return e ? (e = "" + e, e.slice(0, 1).toUpperCase() + e.slice(1)) : ""
    }, a.guid = function () {
        var e = function () {
            return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
        };
        return function () {
            return e() + e() + e() + e() + e() + e() + e() + e()
        }
    }(), a.extend = function (e, t, n) {
        for (var r in t) "undefined" != typeof e[r] && n !== !0 || (e[r] = t[r])
    }, a.filterObj = function (e, t) {
        var n = {};
        return a.isString(t) && (t = t.split(s)), t.forEach(function (t) {
            e.hasOwnProperty(t) && (n[t] = e[t])
        }), n
    }, a.simpleClone = function (e) {
        return JSON.parse(JSON.stringify(e))
    }, a.copy = function (e, t) {
        return t = t || {}, e ? (Object.keys(e).forEach(function (n) {
            a.exist(e[n]) && (t[n] = e[n])
        }), t) : t
    }, a.findObjIndexInArray = function (e, t) {
        e = e || [];
        var n = t.keyPath || "id", r = -1;
        return e.some(function (e, i) {
            if (o(e, n) === t.value) return r = i, !0
        }), r
    }, a.findObjInArray = function (e, t) {
        var n = a.findObjIndexInArray(e, t);
        return n === -1 ? null : e[n]
    }, a.mergeObjArray = function () {
        var e = [], t = [].slice.call(arguments, 0, -1), n = arguments[arguments.length - 1];
        a.isArray(n) && (t.push(n), n = {});
        var r = n.keyPath = n.keyPath || "id";
        for (n.sortPath = n.sortPath || r; !e.length && t.length;) e = t.shift() || [], e = e.slice(0);
        var i;
        return t.forEach(function (t) {
            t && t.forEach(function (t) {
                i = a.findObjIndexInArray(e, {
                    keyPath: r,
                    value: o(t, r)
                }), i !== -1 ? e[i] = a.merge({}, e[i], t) : e.push(t)
            })
        }), n.notSort || (e = a.sortObjArray(e, n)), e
    }, a.cutObjArray = function (e) {
        var t = e.slice(0), n = arguments.length, r = [].slice.call(arguments, 1, n - 1), i = arguments[n - 1];
        a.isObject(i) || (r.push(i), i = {});
        var s, c = i.keyPath = i.keyPath || "id";
        return r.forEach(function (e) {
            a.isArray(e) || (e = [e]), e.forEach(function (e) {
                e && (i.value = o(e, c), s = a.findObjIndexInArray(t, i), s !== -1 && t.splice(s, 1))
            })
        }), t
    }, a.sortObjArray = function (e, t) {
        t = t || {};
        var n = t.sortPath || "id";
        r.insensitive = !!t.insensitive;
        var i, s, c, u = !!t.desc;
        return c = a.isFunction(t.compare) ? t.compare : function (e, t) {
            return i = o(e, n), s = o(t, n), u ? r(s, i) : r(i, s)
        }, e.sort(c)
    }, a.emptyFunc = function () {
    }, a.isEmptyFunc = function (e) {
        return e === a.emptyFunc
    }, a.notEmptyFunc = function (e) {
        return e !== a.emptyFunc
    }, a.splice = function (e, t, n) {
        return [].splice.call(e, t, n)
    }, a.onError = function (e) {
        throw new i(e)
    }, a.verifyParamPresent = function (e, t, n) {
        n = n || "";
        var r = !1;
        switch (a.typeOf(t)) {
            case"undefined":
            case"null":
                r = !0;
                break;
            case"string":
                "" === t && (r = !0);
                break;
            case"object":
                Object.keys(t).length || (r = !0);
                break;
            case"array":
                t.length ? t.some(function (e) {
                    if (a.notexist(e)) return r = !0, !0
                }) : r = !0
        }
        r && a.onParamAbsent(n + e)
    }, a.onParamAbsent = function (e) {
        a.onParamError('缺少参数"' + e + '", 请确保参数不是 空字符串、空对象、空数组、null或undefined, 或者数组的内容不是 null/undefined')
    }, a.verifyParamAbsent = function (e, t, n) {
        n = n || "", void 0 !== t && a.onParamPresent(n + e)
    }, a.onParamPresent = function (e) {
        a.onParamError('多余的参数"' + e + '"')
    }, a.verifyParamType = function (e, t, n) {
        var r = a.typeOf(t).toLowerCase();
        a.isArray(n) || (n = [n]), n = n.map(function (e) {
            return e.toLowerCase()
        });
        var o = !0;
        switch (n.indexOf(r) === -1 && (o = !1), r) {
            case"number":
                isNaN(t) && (o = !1)
        }
        o || a.onParamInvalidType(e, n)
    }, a.onParamInvalidType = function (e, t, n) {
        n = n || "", a.isArray(t) ? (t = t.map(function (e) {
            return '"' + e + '"'
        }), t = t.join(", ")) : t = '"' + t + '"', a.onParamError('参数"' + n + e + '"类型错误, 合法的类型包括: [' + t + "]")
    }, a.verifyParamValid = function (e, t, n) {
        a.isArray(n) || (n = [n]), n.indexOf(t) === -1 && a.onParamInvalidValue(e, n)
    }, a.onParamInvalidValue = function (e, t) {
        a.isArray(t) || (t = [t]), t = t.map(function (e) {
            return '"' + e + '"'
        }), a.isArray(t) && (t = t.join(", ")), a.onParamError('参数"' + e + '"值错误, 合法的值包括: [' + t + "]")
    }, a.verifyParamMin = function (e, t, n) {
        t < n && a.onParamError("参数" + e + "的值不能小于" + n)
    }, a.verifyParamMax = function (e, t, n) {
        t > n && a.onParamError("参数" + e + "的值不能大于" + n)
    }, a.verifyArrayMax = function (e, t, n) {
        t.length > n && a.onParamError("参数" + e + "的长度不能大于" + n)
    }, a.verifyEmail = function () {
        var e = /^\S+@\S+$/;
        return function (t, n) {
            e.test(n) || a.onParamError("参数" + t + "邮箱格式错误, 合法格式必须包含@符号, @符号前后至少要各有一个字符")
        }
    }(), a.verifyTel = function () {
        var e = /^[+\-\(\)\d]+$/;
        return function (t, n) {
            e.test(n) || a.onParamError("参数" + t + "电话号码格式错误, 合法字符包括+、-、英文括号和数字")
        }
    }(), a.verifyBirth = function () {
        var e = /^(\d{4})-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
        return function (t, n) {
            e.test(n) || a.onParamError("参数" + t + '生日格式错误, 合法为"yyyy-MM-dd"')
        }
    }(), a.onParamError = function (e) {
        a.onError(e)
    }, a.verifyOptions = function (e, t, n, r) {
        if (e = e || {}, t && (a.isString(t) && (t = t.split(s)), a.isArray(t))) {
            n = void 0 === n || !!n;
            var o = n ? a.verifyParamPresent : a.verifyParamAbsent;
            t.forEach(function (t) {
                o.call(a, t, e[t], r)
            })
        }
        return e
    }, a.verifyParamAtLeastPresentOne = function (e, t) {
        if (t && (a.isString(t) && (t = t.split(s)), a.isArray(t))) {
            var n = t.some(function (t) {
                return a.exist(e[t])
            });
            n || a.onParamError("以下参数[" + t.join(", ") + "]至少需要传入一个")
        }
    }, a.verifyParamPresentJustOne = function (e, t) {
        if (t && (a.isString(t) && (t = t.split(s)), a.isArray(t))) {
            var n = t.reduce(function (t, n) {
                return a.exist(e[n]) && t++, t
            }, 0);
            1 !== n && a.onParamError("以下参数[" + t.join(", ") + "]必须且只能传入一个")
        }
    }, a.verifyBooleanWithDefault = function (e, t, n, r) {
        a.undef(n) && (n = !0), s.test(t) && (t = t.split(s)), a.isArray(t) ? t.forEach(function (t) {
            a.verifyBooleanWithDefault(e, t, n, r)
        }) : "undefined" == typeof e[t] ? e[t] = n : a.isBoolean(e[t]) || a.onParamInvalidType(t, "boolean", r)
    }, a.verifyFileInput = function (e) {
        return a.verifyParamPresent("fileInput", e), a.isString(e) && (e = window.document.getElementById(e), e || a.onParamError("找不到要上传的文件对应的input, 请检查fileInput id")), e.tagName && "input" === e.tagName.toLowerCase() && "file" === e.type.toLowerCase() || a.onParamError("请提供正确的 fileInput, 必须为 file 类型的 input 节点"), e
    }, a.verifyFileType = function (e) {
        a.verifyParamValid("type", e, a.validFileTypes)
    }, a.verifyCallback = function (e, t) {
        s.test(t) && (t = t.split(s)), a.isArray(t) ? t.forEach(function (t) {
            a.verifyCallback(e, t)
        }) : e[t] ? a.isFunction(e[t]) || a.onParamInvalidType(t, "function") : e[t] = a.emptyFunc
    }, a.verifyFileUploadCallback = function (e) {
        a.verifyCallback(e, "uploadprogress uploaddone uploaderror uploadcancel")
    }, a.validFileTypes = ["image", "audio", "video", "file"], a.validFileExts = {
        image: ["bmp", "gif", "jpg", "jpeg", "jng", "png", "webp"],
        audio: ["mp3", "wav", "aac", "wma", "wmv", "amr", "mp2", "flac", "vorbis", "ac3"],
        video: ["mp4", "rm", "rmvb", "wmv", "avi", "mpg", "mpeg"]
    }, a.filterFiles = function (e, t) {
        t = t.toLowerCase();
        var n, r, o, i, s = "file" === t, c = [];
        return [].forEach.call(e, function (e) {
            if (s) c.push(e); else if (n = e.name.slice(e.name.lastIndexOf(".") + 1), r = e.type.split("/"), r[0] && r[1]) {
                o = r[0].toLowerCase(), i = r[1].toLowerCase();
                var u = !1;
                u = o === t || a.validFileExts[t].indexOf(n) !== -1, u && c.push(e)
            }
        }), c
    }, a.getFileName = function () {
        var e = a.notundef(window.FormData);
        return function (t) {
            return t = a.verifyFileInput(t), e ? t.files[0].name : t.value.slice(t.value.lastIndexOf("\\") + 1)
        }
    }(), a.sizeText = function () {
        var e = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "BB"];
        return function (t) {
            var n, r = 0;
            do {
                t = Math.floor(100 * t) / 100;
                var o = e[r];
                n = t + o, t /= 1024, r++
            } while (t > 1);
            return n
        }
    }(), a.promises2cmds = function (e) {
        return e.map(function (e) {
            return e.cmd
        })
    }, a.objs2accounts = function (e) {
        return e.map(function (e) {
            return e.account
        })
    }, a.teams2ids = function (e) {
        return e.map(function (e) {
            return e.teamId
        })
    }, a.objs2ids = function (e) {
        return e.map(function (e) {
            return e.id
        })
    }, a.getMaxUpdateTime = function (e) {
        var t = e.map(function (e) {
            return +e.updateTime
        });
        return Math.max.apply(Math, t)
    }, a.genCheckUniqueFunc = function (e, t) {
        var n = [], r = {};
        return e = e || "id", t = t || 1e3, function (i) {
            var a;
            return n.length >= t && (a = n.shift(), delete r[a]), a = o(i, e), !r[a] && (r[a] = !0, n.push(a), !0)
        }
    }, e.exports = a, n(16)
}, function (e, t) {
    e.exports = function n(e, t) {
        "use strict";
        var r, o, i = /(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,
            a = /(^[ ]*|[ ]*$)/g,
            s = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
            c = /^0x[0-9a-f]+$/i, u = /^0/, l = function (e) {
                return n.insensitive && ("" + e).toLowerCase() || "" + e
            }, f = l(e).replace(a, "") || "", p = l(t).replace(a, "") || "",
            d = f.replace(i, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
            h = p.replace(i, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
            y = parseInt(f.match(c), 16) || 1 !== d.length && f.match(s) && Date.parse(f),
            v = parseInt(p.match(c), 16) || y && p.match(s) && Date.parse(p) || null;
        if (v) {
            if (y < v) return -1;
            if (y > v) return 1
        }
        for (var m = 0, g = Math.max(d.length, h.length); m < g; m++) {
            if (r = !(d[m] || "").match(u) && parseFloat(d[m]) || d[m] || 0, o = !(h[m] || "").match(u) && parseFloat(h[m]) || h[m] || 0, isNaN(r) !== isNaN(o)) return isNaN(r) ? 1 : -1;
            if (typeof r != typeof o && (r += "", o += ""), r < o) return -1;
            if (r > o) return 1
        }
        return 0
    }
}, function (e, t) {
    function n(e, t) {
        for (var n = t.split("."); n.length;) {
            var r = n.shift(), o = !1;
            if ("?" == r[r.length - 1] && (r = r.slice(0, -1), o = !0), e = e[r], !e && o) return e
        }
        return e
    }

    e.exports = n
}, function (e, t) {
    if ("undefined" != typeof window) {
        var n = window.console;
        n || (n = {
            log: function () {
            }, info: function () {
            }, warn: function () {
            }, error: function () {
            }
        })
    }
}, function (e, t) {
    function n(e, t) {
        var n = this;
        n.message = e, n.code = t, n.time = new Date, n.timetag = +n.time
    }

    n.prototype = Object.create(Error.prototype), n.prototype.name = "NIMError", n.prototype.appendMessage = function (e) {
        var t = this;
        t.message ? e && (t.message += "(" + e + ")") : t.message = e
    };
    var r = {
        201: "客户端版本不对, 需升级sdk",
        302: "用户名或密码错误, 请检查appKey和token是否有效, account和token是否匹配",
        403: "非法操作或没有权限",
        404: "对象(用户/群/聊天室)不存在",
        405: "参数长度过长",
        408: "客户端请求超时",
        414: "参数错误",
        415: "服务不可用/没有聊天室服务器可分配",
        416: "频率控制",
        417: "重复操作",
        422: "帐号被禁用",
        500: "服务器内部错误",
        501: "数据库操作失败",
        503: "服务器繁忙",
        508: "删除有效期过了",
        509: "已失效",
        7101: "被拉黑",
        801: "群人数达到上限",
        802: "没有权限",
        803: "群不存在或未发生变化",
        804: "用户不在群里面",
        805: "群类型不匹配",
        806: "创建群数量达到限制",
        807: "群成员状态不对",
        809: "已经在群里",
        997: "协议已失效",
        998: "解包错误",
        999: "打包错误",
        13002: "聊天室状态异常",
        13003: "在黑名单中",
        13004: "在禁言名单中",
        Connect_Failed: "无法建立连接, 请确保项目部署在 HTTPS 环境下（IE8/9）",
        Error_Internet_Disconnected: "网断了",
        Error_Connection_is_not_Established: "连接未建立",
        Error_Timeout: "超时",
        Param_Error: "参数错误",
        No_File_Selected: "请选择文件",
        Wrong_File_Type: "文件类型错误",
        File_Too_Large: "文件过大",
        Cross_Origin_Iframe: "不能获取跨域Iframe的内容",
        Not_Support: "不支持",
        NO_DB: "无数据库",
        DB: "数据库错误",
        Still_In_Team: "还在群里",
        Session_Exist: "会话已存在",
        Session_Not_Exist: "会话不存在",
        Error_Unknown: "未知错误",
        Operation_Canceled: "操作取消"
    };
    [200, 406, 808, 810].forEach(function (e) {
        r[e] = null
    }), n.genError = function (e) {
        var t = r[e];
        return void 0 === t && (t = "操作失败"), null === t ? null : new n(t, e)
    }, n.multiInstance = function () {
        return new n("不允许初始化多个实例", "Not_Allow_Multi_Instance")
    }, n.newNetworkError = function () {
        var e = "Error_Internet_Disconnected";
        return new n(r[e], e)
    }, n.newConnectError = function (e) {
        var t = "Connect_Failed";
        return new n(r[t] || e, t)
    }, n.newConnectionError = function () {
        var e = "Error_Connection_is_not_Established";
        return new n(r[e], e)
    }, n.newTimeoutError = function () {
        var e = "Error_Timeout";
        return new n(r[e], e)
    }, n.newFrequencyControlError = function () {
        var e = 416, t = new n(r[e], e);
        return t.from = "local", t
    }, n.newParamError = function (e) {
        var t = "Param_Error";
        return new n(e || r[t], t)
    }, n.newNoFileError = function (e) {
        var t = "No_File_Selected";
        return new n(e || r[t], t)
    }, n.newWrongFileTypeError = function (e) {
        var t = "Wrong_File_Type";
        return new n(e || r[t], t)
    }, n.newFileTooLargeError = function (e) {
        var t = "File_Too_Large";
        return new n(e || r[t], t)
    }, n.newCORSIframeError = function () {
        var e = "Cross_Origin_Iframe";
        return new n(r[e], e)
    }, n.newSupportError = function (e, t) {
        return new n("不支持" + e, "Not_Support_" + t)
    }, n.newSupportDBError = function () {
        return n.newSupportError("数据库", "DB")
    }, n.noDBError = function () {
        var e = "NO_DB";
        return new n(r[e], e)
    }, n.newDBError = function () {
        var e = "DB";
        return new n(r[e], e)
    }, n.newUnknownError = function () {
        var e = "Error_Unknown";
        return new n(r[e], e)
    }, n.stillInTeamError = function () {
        var e = "Still_In_Team";
        return new n(r[e], e)
    }, n.sessionExist = function () {
        var e = "Session_Exist";
        return new n(r[e], e)
    }, n.sessionNotExist = function () {
        var e = "Session_Not_Exist";
        return new n(r[e], e)
    }, n.cancel = function () {
        var e = "Operation_Canceled";
        return new n(r[e], e)
    }, e.exports = n
}, function (e, t, n) {
    !function (t, n) {
        e.exports = n()
    }(this, function () {
        return function (e) {
            function t(r) {
                if (n[r]) return n[r].exports;
                var o = n[r] = {exports: {}, id: r, loaded: !1};
                return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
            }

            var n = {};
            return t.m = e, t.c = n, t.p = "", t(0)
        }([function (e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {"default": e}
            }

            function o(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            t.__esModule = !0;
            var i = n(1), a = o(i), s = n(2), c = o(s), u = n(3), l = o(u), f = n(4), p = o(f), d = n(5), h = o(d),
                y = n(7), v = r(y), m = n(8), g = o(m), b = n(9), w = o(b), x = n(10), k = r(x), S = n(11), _ = o(S),
                T = n(6), O = o(T), E = n(15), M = o(E),
                C = _.merge({}, a, c, l, p, h, {forOwn: v["default"]}, g, w, {mixin: k["default"]}, _, O, M);
            delete C.__esModule, t["default"] = C, e.exports = t["default"]
        }, function (e, t) {
            "use strict";

            function n(e) {
                var t = void 0;
                t = e.split(",")[0].indexOf("base64") >= 0 ? window.atob(e.split(",")[1]) : window.decodeURIComponent(e.split(",")[1]);
                for (var n = e.split(",")[0].split(":")[1].split(";")[0], r = new window.Uint8Array(t.length), o = 0; o < t.length; o++) r[o] = t.charCodeAt(o);
                return new window.Blob([r], {type: n})
            }

            t.__esModule = !0, t.blobFromDataURL = n
        }, function (e, t) {
            "use strict";

            function n(e) {
                var t = !1, n = "Webkit Moz ms O".split(" "), r = document.createElement("div"), o = null;
                if (e = e.toLowerCase(), void 0 !== r.style[e] && (t = !0), t === !1) {
                    o = e.charAt(0).toUpperCase() + e.substr(1);
                    for (var i = 0; i < n.length; i++) if (void 0 !== r.style[n[i] + o]) {
                        t = !0;
                        break
                    }
                }
                return t
            }

            t.__esModule = !0, t.detectCSSFeature = n
        }, function (e, t) {
            "use strict";
            t.__esModule = !0;
            t.o = {}, t.emptyObj = {}, t.f = function () {
            }, t.emptyFunc = function () {
            }, t.regBlank = /\s+/gi, t.regWhiteSpace = /\s+/gi
        }, function (e, t) {
            "use strict";

            function n(e, t) {
                t = t || 2;
                for (var n = "" + e; n.length < t;) n = "0" + n;
                return n
            }

            function r(e) {
                return "" + e.getFullYear()
            }

            function o(e) {
                return n(e.getMonth() + 1)
            }

            function i(e) {
                return n(e.getDate())
            }

            function a(e) {
                return n(e.getHours())
            }

            function s(e) {
                return n(e.getMinutes())
            }

            function c(e) {
                return n(e.getSeconds())
            }

            function u(e) {
                return n(e.getMilliseconds(), 3)
            }

            function l(e) {
                return e = "" + e, new Date(e.replace(/-/g, "/").replace("T", " "))
            }

            t.__esModule = !0, t.fix = n, t.getYearStr = r, t.getMonthStr = o, t.getDayStr = i, t.getHourStr = a, t.getMinuteStr = s, t.getSecondStr = c, t.getMillisecondStr = u, t.dateFromDateTimeLocal = l;
            t.format = function () {
                var e = /yyyy|MM|dd|hh|mm|ss|SSS/g, t = {yyyy: r, MM: o, dd: i, hh: a, mm: s, ss: c, SSS: u};
                return function (n, r) {
                    return n = new Date(n), isNaN(+n) ? "invalid date" : (r = r || "yyyy-MM-dd", r.replace(e, function (e) {
                        return t[e](n)
                    }))
                }
            }()
        }, function (e, t, n) {
            "use strict";

            function r(e) {
                var t = e.parentNode || document.body;
                e = e.cloneNode(!0), e.style.display = "block", e.style.opacity = 0, e.style.height = "auto", t.appendChild(e);
                var n = e.offsetHeight;
                return t.removeChild(e), n
            }

            function o(e) {
                e.parentNode && e.parentNode.removeChild(e)
            }

            function i(e, t, n) {
                return (0, u.exist)(n) ? void e.setAttribute("data-" + t, n) : e.getAttribute("data-" + t)
            }

            function a(e) {
                return e.target || e.srcElement
            }

            function s(e) {
                e = e || {};
                var t = document.createElement("iframe");
                if (t.frameBorder = 0, e.name && (t.name = e.name), e.visible || (t.style.display = "none"), (0, u.isFunction)(e.onload)) {
                    var n = function i(n) {
                        t.src && (e.multi || d(t, "load", i), e.onload(n))
                    };
                    f(t, "load", n)
                }
                var r = e.parent;
                (r || document.body).appendChild(t);
                var o = e.src || "about:blank";
                return setTimeout(function () {
                    t.src = o
                }, 0), t
            }

            function c(e) {
                var t = window.document.createElement("div");
                t.innerHTML = e;
                var n = [], r = void 0, o = void 0;
                if (t.children) for (r = 0, o = t.children.length; r < o; r++) n.push(t.children[r]); else for (r = 0, o = t.childNodes.length; r < o; r++) {
                    var i = t.childNodes[r];
                    1 === i.nodeType && n.push(i)
                }
                return n.length > 1 ? t : n[0]
            }

            t.__esModule = !0, t.off = t.removeEventListener = t.on = t.addEventListener = void 0, t.calcHeight = r, t.remove = o, t.dataset = i, t.target = a, t.createIframe = s, t.html2node = c;
            var u = n(6), l = t.addEventListener = function (e, t, n) {
                e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
            }, f = t.on = l, p = t.removeEventListener = function (e, t, n) {
                e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
            }, d = t.off = p
        }, function (e, t) {
            "use strict";

            function n(e) {
                return Object.prototype.toString.call(e).slice(8, -1)
            }

            function r(e) {
                return n(e).toLowerCase()
            }

            function o(e) {
                return "string" === r(e)
            }

            function i(e) {
                return "number" === r(e)
            }

            function a(e) {
                return "boolean" === r(e)
            }

            function s(e) {
                return "array" === r(e)
            }

            function c(e) {
                return "function" === r(e)
            }

            function u(e) {
                return "date" === r(e)
            }

            function l(e) {
                return "regexp" === r(e)
            }

            function f(e) {
                return "error" === r(e)
            }

            function p(e) {
                return null === e
            }

            function d(e) {
                return null !== e
            }

            function h(e) {
                return "undefined" == typeof e
            }

            function y(e) {
                return "undefined" != typeof e
            }

            function v(e) {
                return y(e) && d(e)
            }

            function m(e) {
                return h(e) || p(e)
            }

            function g(e) {
                return v(e) && "object" === r(e)
            }

            function b(e) {
                return m(e) || (o(e) || s(e)) && 0 === e.length
            }

            t.__esModule = !0, t.getClass = n, t.typeOf = r, t.isString = o, t.isNumber = i, t.isBoolean = a, t.isArray = s, t.isFunction = c, t.isDate = u, t.isRegExp = l, t.isError = f, t.isnull = p, t.notnull = d, t.undef = h, t.notundef = y, t.exist = v, t.notexist = m, t.isObject = g, t.isEmpty = b
        }, function (e, t) {
            "use strict";
            t.__esModule = !0, t["default"] = function () {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    t = arguments.length <= 1 || void 0 === arguments[1] ? function () {
                    } : arguments[1], n = arguments[2];
                for (var r in e) e.hasOwnProperty(r) && t.call(n, r, e[r])
            }, e.exports = t["default"]
        }, function (e, t) {
            "use strict";
            t.__esModule = !0;
            t.uniqueID = function () {
                var e = 0;
                return function () {
                    return "" + e++
                }
            }()
        }, function (e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {"default": e}
            }

            function o(e) {
                return (0, c.isString)(e) && 0 === e.indexOf("{") && e.lastIndexOf("}") === e.length - 1
            }

            function i(e) {
                try {
                    o(e) && (e = JSON.parse(e)), (0, c.isObject)(e) && (0, s["default"])(e, function (t, n) {
                        switch ((0, c.typeOf)(n)) {
                            case"string":
                            case"object":
                                e[t] = i(n)
                        }
                    })
                } catch (t) {
                }
                return e
            }

            t.__esModule = !0, t.isJSON = o, t.parseJSON = i;
            var a = n(7), s = r(a), c = n(6)
        }, function (e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {"default": e}
            }

            t.__esModule = !0;
            var o = n(7), i = r(o);
            t["default"] = function (e, t) {
                (0, i["default"])(t, function (t, n) {
                    e[t] = n
                })
            }, e.exports = t["default"]
        }, function (e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {"default": e}
            }

            function o(e) {
                return JSON.parse((0, p["default"])(e))
            }

            function i() {
                for (var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return n.forEach(function (t) {
                    (0, h["default"])(e, t)
                }), e
            }

            function a(e, t) {
                return (0, v["default"])(t, function (t, n) {
                    (0, m.undef)(e[t]) && (e[t] = n)
                }), e
            }

            function s(e, t, n) {
                var r = e[t] || e[t.toLowerCase()];
                return (0, m.notexist)(r) && (r = n, e[t] = r), r
            }

            function c(e, t) {
                return (0, v["default"])(e, function (n, r) {
                    (0, m.exist)(t[n]) && (e[n] = t[n])
                }), e
            }

            function u() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
                    t = arguments.length <= 1 || void 0 === arguments[1] ? "," : arguments[1], n = {};
                return e.split(t).forEach(function (e) {
                    var t = e.split("="), r = t.shift();
                    r && (n[decodeURIComponent(r)] = decodeURIComponent(t.join("=")))
                }), n
            }

            function l(e, t, n) {
                if (!e) return "";
                var r = [];
                return (0, v["default"])(e, function (e, t) {
                    (0, m.isFunction)(t) || ((0, m.isDate)(t) ? t = t.getTime() : (0, m.isArray)(t) ? t = t.join(",") : (0, m.isObject)(t) && (t = (0, p["default"])(t)), n && (t = encodeURIComponent(t)), r.push(encodeURIComponent(e) + "=" + t))
                }), r.join(t || ",")
            }

            t.__esModule = !0;
            var f = n(12), p = r(f);
            t.simpleClone = o, t.merge = i, t.fillUndef = a, t.checkWithDefault = s, t.fetch = c, t.string2object = u, t.object2string = l;
            var d = n(10), h = r(d), y = n(7), v = r(y), m = n(6)
        }, function (e, t, n) {
            e.exports = {"default": n(13), __esModule: !0}
        }, function (e, t, n) {
            var r = n(14), o = r.JSON || (r.JSON = {stringify: JSON.stringify});
            e.exports = function (e) {
                return o.stringify.apply(o, arguments)
            }
        }, function (e, t) {
            var n = e.exports = {version: "2.4.0"};
            "number" == typeof __e && (__e = n)
        }, function (e, t, n) {
            "use strict";

            function r(e) {
                return e.indexOf("?") < 0 ? "?" : "&"
            }

            function o(e) {
                return (0, i.object2string)(e, "&", !0)
            }

            t.__esModule = !0, t.url2origin = void 0, t.genUrlSep = r, t.object2query = o;
            var i = n(11);
            t.url2origin = function () {
                var e = /^([\w]+?:\/\/.*?(?=\/|$))/i;
                return function (t) {
                    return e.test(t || "") ? RegExp.$1.toLowerCase() : ""
                }
            }()
        }])
    })
}, function (e, t, n) {
    var r = n(10);
    r.fillPropertyWithDefault = function (e, t, n) {
        return !!r.undef(e[t]) && (e[t] = n, !0)
    }
}, function (e, t, n) {
    var r = n(18), o = n(10), i = {
        debug: !1,
        api: "log",
        style: "color:blue;",
        log: o.emptyFunc,
        info: o.emptyFunc,
        warn: o.emptyFunc,
        error: o.emptyFunc
    }, a = ["Chrome", "Safari", "Firefox"];
    i.setDebug = function (e) {
        if (e = !!e && e, i.debug = e, e.style && (i.style = e.style), i.debug && window.console) {
            var t = window.console;
            i.log = function () {
                var e = i.formatArgs(arguments);
                a.indexOf(r.name) !== -1 && o.isString(e[0]) && (e[0] = "%c" + e[0], e.splice(1, 0, i.style)), i._log("log", e)
            }, i.info = function () {
                var e = i.formatArgs(arguments);
                i._log("info", e)
            }, i.warn = function () {
                var e = i.formatArgs(arguments);
                i._log("warn", e)
            }, i.error = function () {
                var e = i.formatArgs(arguments);
                i._log("error", e)
            }, i._log = function (e, n) {
                if (t[e]) try {
                    t[e].apply ? i.chrome(e, n) : i.ie(e, n)
                } catch (r) {
                }
            }, i.chrome = function (e, n) {
                a.indexOf(r.name) !== -1 ? t[e].apply(t, n) : i.ie(e, n)
            }, i.ie = function (e, n) {
                n.forEach(function (n) {
                    t[e](JSON.stringify(n, null, 4))
                })
            }
        }
    }, i.formatArgs = function (e) {
        e = [].slice.call(e, 0);
        var t = new Date,
            n = t.getFullYear() + "-" + s(t.getMonth() + 1) + "-" + s(t.getDate()) + " " + s(t.getHours()) + ":" + s(t.getMinutes()) + ":" + s(t.getSeconds()) + ":" + s(t.getMilliseconds(), 3),
            r = "[NIM SDK LOG " + n + " " + +t + "]\t";
        return o.isString(e[0]) ? e[0] = r + e[0] : e.splice(0, 0, r), e.forEach(function (t, n) {
            (o.isArray(t) || o.isObject(t)) && (e[n] = o.simpleClone(t))
        }), e
    };
    var s = function (e, t) {
        t = t || 2;
        for (var n = "" + e; n.length < t;) n = "0" + n;
        return n
    };
    e.exports = i
}, function (e, t, n) {
    var r;
    (function (e, o) {
        (function () {
            "use strict";

            function i(e) {
                return e = String(e), e.charAt(0).toUpperCase() + e.slice(1)
            }

            function a(e, t, n) {
                var r = {
                    6.4: "10",
                    6.3: "8.1",
                    6.2: "8",
                    6.1: "Server 2008 R2 / 7",
                    "6.0": "Server 2008 / Vista",
                    5.2: "Server 2003 / XP 64-bit",
                    5.1: "XP",
                    5.01: "2000 SP1",
                    "5.0": "2000",
                    "4.0": "NT",
                    "4.90": "ME"
                };
                return t && n && /^Win/i.test(e) && (r = r[/[\d.]+$/.exec(e)]) && (e = "Windows " + r), e = String(e), t && n && (e = e.replace(RegExp(t, "i"), n)), e = c(e.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").split(" on ")[0])
            }

            function s(e, t) {
                var n = -1, r = e ? e.length : 0;
                if ("number" == typeof r && r > -1 && r <= k) for (; ++n < r;) t(e[n], n, e); else u(e, t)
            }

            function c(e) {
                return e = h(e), /^(?:webOS|i(?:OS|P))/.test(e) ? e : i(e)
            }

            function u(e, t) {
                for (var n in e) O.call(e, n) && t(e[n], n, e)
            }

            function l(e) {
                return null == e ? i(e) : E.call(e).slice(8, -1)
            }

            function f(e, t) {
                var n = null != e ? typeof e[t] : "number";
                return !(/^(?:boolean|number|string|undefined)$/.test(n) || "object" == n && !e[t])
            }

            function p(e) {
                return String(e).replace(/([ -])(?!$)/g, "$1?")
            }

            function d(e, t) {
                var n = null;
                return s(e, function (r, o) {
                    n = t(n, r, o, e)
                }), n
            }

            function h(e) {
                return String(e).replace(/^ +| +$/g, "")
            }

            function y(e) {
                function t(t) {
                    return d(t, function (t, n) {
                        return t || RegExp("\\b" + (n.pattern || p(n)) + "\\b", "i").exec(e) && (n.label || n)
                    })
                }

                function n(t) {
                    return d(t, function (t, n, r) {
                        return t || (n[K] || n[/^[a-z]+(?: +[a-z]+\b)*/i.exec(K)] || RegExp("\\b" + p(r) + "(?:\\b|\\w*\\d)", "i").exec(e)) && r
                    })
                }

                function r(t) {
                    return d(t, function (t, n) {
                        return t || RegExp("\\b" + (n.pattern || p(n)) + "\\b", "i").exec(e) && (n.label || n)
                    })
                }

                function o(t) {
                    return d(t, function (t, n) {
                        var r = n.pattern || p(n);
                        return !t && (t = RegExp("\\b" + r + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(e)) && (t = a(t, r, n.label || n)), t
                    })
                }

                function i(t) {
                    return d(t, function (t, n) {
                        var r = n.pattern || p(n);
                        return !t && (t = RegExp("\\b" + r + " *\\d+[.\\w_]*", "i").exec(e) || RegExp("\\b" + r + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(e)) && ((t = String(n.label && !RegExp(r, "i").test(n.label) ? n.label : t).split("/"))[1] && !/[\d.]+/.test(t[0]) && (t[0] += " " + t[1]), n = n.label || n, t = c(t[0].replace(RegExp(r, "i"), n).replace(RegExp("; *(?:" + n + "[_-])?", "i"), " ").replace(RegExp("(" + n + ")[-_.]?(\\w)", "i"), "$1 $2"))), t
                    })
                }

                function s(t) {
                    return d(t, function (t, n) {
                        return t || (RegExp(n + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(e) || 0)[1] || null
                    })
                }

                function v() {
                    return this.description || ""
                }

                var b = m, w = e && "object" == typeof e && "String" != l(e);
                w && (b = e, e = null);
                var x = b.navigator || {}, k = x.userAgent || "";
                e || (e = k);
                var T, O, M = w || _ == g,
                    C = w ? !!x.likeChrome : /\bChrome\b/.test(e) && !/internal|\n/i.test(E.toString()), j = "Object",
                    P = w ? j : "ScriptBridgingProxyObject", I = w ? j : "Environment",
                    A = w && b.java ? "JavaPackage" : l(b.java), D = w ? j : "RuntimeObject",
                    N = /\bJava/.test(A) && b.java, F = N && l(b.environment) == I, R = N ? "a" : "α",
                    L = N ? "b" : "β", W = b.document || {}, B = b.operamini || b.opera,
                    U = S.test(U = w && B ? B["[[Class]]"] : l(B)) ? U : B = null, q = e, $ = [], H = null, X = e == k,
                    J = X && B && "function" == typeof B.version && B.version(), z = t(["Trident", {
                        label: "WebKit",
                        pattern: "AppleWebKit"
                    }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
                    G = r(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", {
                        label: "SRWare Iron",
                        pattern: "Iron"
                    }, "K-Meleon", "Konqueror", "Lunascape", "Maxthon", "Midori", "Nook Browser", "PhantomJS", "Raven", "Rekonq", "RockMelt", "SeaMonkey", {
                        label: "Silk",
                        pattern: "(?:Cloud9|Silk-Accelerated)"
                    }, "Sleipnir", "SlimBrowser", "Sunrise", "Swiftfox", "WebPositive", "Opera Mini", {
                        label: "Opera Mini",
                        pattern: "OPiOS"
                    }, "Opera", {label: "Opera", pattern: "OPR"}, "Chrome", {
                        label: "Chrome Mobile",
                        pattern: "(?:CriOS|CrMo)"
                    }, {label: "Firefox", pattern: "(?:Firefox|Minefield)"}, {
                        label: "IE",
                        pattern: "IEMobile"
                    }, {label: "IE", pattern: "MSIE"}, "Safari"]),
                    K = i([{label: "BlackBerry", pattern: "BB10"}, "BlackBerry", {
                        label: "Galaxy S",
                        pattern: "GT-I9000"
                    }, {label: "Galaxy S2", pattern: "GT-I9100"}, {
                        label: "Galaxy S3",
                        pattern: "GT-I9300"
                    }, {
                        label: "Galaxy S4",
                        pattern: "GT-I9500"
                    }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
                        label: "Kindle Fire",
                        pattern: "(?:Cloud9|Silk-Accelerated)"
                    }, "Nook", "PlayBook", "PlayStation 4", "PlayStation 3", "PlayStation Vita", "TouchPad", "Transformer", {
                        label: "Wii U",
                        pattern: "WiiU"
                    }, "Wii", "Xbox One", {label: "Xbox 360", pattern: "Xbox"}, "Xoom"]), V = n({
                        Apple: {iPad: 1, iPhone: 1, iPod: 1},
                        Amazon: {Kindle: 1, "Kindle Fire": 1},
                        Asus: {Transformer: 1},
                        "Barnes & Noble": {Nook: 1},
                        BlackBerry: {PlayBook: 1},
                        Google: {"Google TV": 1},
                        HP: {TouchPad: 1},
                        HTC: {},
                        LG: {},
                        Microsoft: {Xbox: 1, "Xbox One": 1},
                        Motorola: {Xoom: 1},
                        Nintendo: {"Wii U": 1, Wii: 1},
                        Nokia: {Lumia: 1},
                        Samsung: {"Galaxy S": 1, "Galaxy S2": 1, "Galaxy S3": 1, "Galaxy S4": 1},
                        Sony: {"PlayStation 4": 1, "PlayStation 3": 1, "PlayStation Vita": 1}
                    }),
                    Y = o(["Windows Phone ", "Android", "CentOS", "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);
                if (z && (z = [z]), V && !K && (K = i([V])), (T = /\bGoogle TV\b/.exec(K)) && (K = T[0]), /\bSimulator\b/i.test(e) && (K = (K ? K + " " : "") + "Simulator"), "Opera Mini" == G && /\bOPiOS\b/.test(e) && $.push("running in Turbo/Uncompressed mode"), /^iP/.test(K) ? (G || (G = "Safari"), Y = "iOS" + ((T = / OS ([\d_]+)/i.exec(e)) ? " " + T[1].replace(/_/g, ".") : "")) : "Konqueror" != G || /buntu/i.test(Y) ? V && "Google" != V && (/Chrome/.test(G) && !/\bMobile Safari\b/i.test(e) || /\bVita\b/.test(K)) ? (G = "Android Browser", Y = /\bAndroid\b/.test(Y) ? Y : "Android") : G && !(T = !/\bMinefield\b|\(Android;/i.test(e) && /\b(?:Firefox|Safari)\b/.exec(G)) || (G && !K && /[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(T + "/") + 8)) && (G = null), (T = K || V || Y) && (K || V || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(Y)) && (G = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(Y) ? Y : T) + " Browser")) : Y = "Kubuntu",
                    (T = /\((Mobile|Tablet).*?Firefox\b/i.exec(e)) && T[1] && (Y = "Firefox OS", K || (K = T[1])), J || (J = s(["(?:Cloud9|CriOS|CrMo|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|Silk(?!/[\\d.]+$))", "Version", p(G), "(?:Firefox|Minefield|NetFront)"])), "iCab" == z && parseFloat(J) > 3 ? z = ["WebKit"] : "Trident" != z && (T = /\bOpera\b/.test(G) && (/\bOPR\b/.test(e) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(e) && "WebKit" || !z && /\bMSIE\b/i.test(e) && ("Mac OS" == Y ? "Tasman" : "Trident")) ? z = [T] : /\bPlayStation\b(?! Vita\b)/i.test(G) && "WebKit" == z && (z = ["NetFront"]), "IE" == G && (T = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e) || 0)[1]) ? (G += " Mobile", Y = "Windows Phone " + (/\+$/.test(T) ? T : T + ".x"), $.unshift("desktop mode")) : /\bWPDesktop\b/i.test(e) ? (G = "IE Mobile", Y = "Windows Phone 8+", $.unshift("desktop mode"), J || (J = (/\brv:([\d.]+)/.exec(e) || 0)[1])) : "IE" != G && "Trident" == z && (T = /\brv:([\d.]+)/.exec(e)) ? (/\bWPDesktop\b/i.test(e) || (G && $.push("identifying as " + G + (J ? " " + J : "")), G = "IE"), J = T[1]) : "Chrome" != G && "IE" == G || !(T = /\bEdge\/([\d.]+)/.exec(e)) || (G = "Microsoft Edge", J = T[1], z = ["Trident"]), X) {
                    if (f(b, "global")) if (N && (T = N.lang.System, q = T.getProperty("os.arch"), Y = Y || T.getProperty("os.name") + " " + T.getProperty("os.version")), M && f(b, "system") && (T = [b.system])[0]) {
                        Y || (Y = T[0].os || null);
                        try {
                            T[1] = b.require("ringo/engine").version, J = T[1].join("."), G = "RingoJS"
                        } catch (Z) {
                            T[0].global.system == b.system && (G = "Narwhal")
                        }
                    } else "object" == typeof b.process && (T = b.process) ? (G = "Node.js", q = T.arch, Y = T.platform, J = /[\d.]+/.exec(T.version)[0]) : F && (G = "Rhino"); else l(T = b.runtime) == P ? (G = "Adobe AIR", Y = T.flash.system.Capabilities.os) : l(T = b.phantom) == D ? (G = "PhantomJS", J = (T = T.version || null) && T.major + "." + T.minor + "." + T.patch) : "number" == typeof W.documentMode && (T = /\bTrident\/(\d+)/i.exec(e)) && (J = [J, W.documentMode], (T = +T[1] + 4) != J[1] && ($.push("IE " + J[1] + " mode"), z && (z[1] = ""), J[1] = T), J = "IE" == G ? String(J[1].toFixed(1)) : J[0]);
                    Y = Y && c(Y)
                }
                J && (T = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(J) || /(?:alpha|beta)(?: ?\d)?/i.exec(e + ";" + (X && x.appMinorVersion)) || /\bMinefield\b/i.test(e) && "a") && (H = /b/i.test(T) ? "beta" : "alpha", J = J.replace(RegExp(T + "\\+?$"), "") + ("beta" == H ? L : R) + (/\d+\+?/.exec(T) || "")), "Fennec" == G || "Firefox" == G && /\b(?:Android|Firefox OS)\b/.test(Y) ? G = "Firefox Mobile" : "Maxthon" == G && J ? J = J.replace(/\.[\d.]+/, ".x") : "Silk" == G ? (/\bMobi/i.test(e) || (Y = "Android", $.unshift("desktop mode")), /Accelerated *= *true/i.test(e) && $.unshift("accelerated")) : /\bXbox\b/i.test(K) ? (Y = null, "Xbox 360" == K && /\bIEMobile\b/.test(e) && $.unshift("mobile mode")) : !/^(?:Chrome|IE|Opera)$/.test(G) && (!G || K || /Browser|Mobi/.test(G)) || "Windows CE" != Y && !/Mobi/i.test(e) ? "IE" == G && X && null === b.external ? $.unshift("platform preview") : (/\bBlackBerry\b/.test(K) || /\bBB10\b/.test(e)) && (T = (RegExp(K.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(e) || 0)[1] || J) ? (T = [T, /BB10/.test(e)], Y = (T[1] ? (K = null, V = "BlackBerry") : "Device Software") + " " + T[0], J = null) : this != u && "Wii" != K && (X && B || /Opera/.test(G) && /\b(?:MSIE|Firefox)\b/i.test(e) || "Firefox" == G && /\bOS X (?:\d+\.){2,}/.test(Y) || "IE" == G && (Y && !/^Win/.test(Y) && J > 5.5 || /\bWindows XP\b/.test(Y) && J > 8 || 8 == J && !/\bTrident\b/.test(e))) && !S.test(T = y.call(u, e.replace(S, "") + ";")) && T.name && (T = "ing as " + T.name + ((T = T.version) ? " " + T : ""), S.test(G) ? (/\bIE\b/.test(T) && "Mac OS" == Y && (Y = null), T = "identify" + T) : (T = "mask" + T, G = U ? c(U.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(T) && (Y = null), X || (J = null)), z = ["Presto"], $.push(T)) : G += " Mobile", (T = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(e) || 0)[1]) && (T = [parseFloat(T.replace(/\.(\d)$/, ".0$1")), T], "Safari" == G && "+" == T[1].slice(-1) ? (G = "WebKit Nightly", H = "alpha", J = T[1].slice(0, -1)) : J != T[1] && J != (T[2] = (/\bSafari\/([\d.]+\+?)/i.exec(e) || 0)[1]) || (J = null), T[1] = (/\bChrome\/([\d.]+)/i.exec(e) || 0)[1], 537.36 == T[0] && 537.36 == T[2] && parseFloat(T[1]) >= 28 && "IE" != G && "Microsoft Edge" != G && (z = ["Blink"]), X && (C || T[1]) ? (z && (z[1] = "like Chrome"), T = T[1] || (T = T[0], T < 530 ? 1 : T < 532 ? 2 : T < 532.05 ? 3 : T < 533 ? 4 : T < 534.03 ? 5 : T < 534.07 ? 6 : T < 534.1 ? 7 : T < 534.13 ? 8 : T < 534.16 ? 9 : T < 534.24 ? 10 : T < 534.3 ? 11 : T < 535.01 ? 12 : T < 535.02 ? "13+" : T < 535.07 ? 15 : T < 535.11 ? 16 : T < 535.19 ? 17 : T < 536.05 ? 18 : T < 536.1 ? 19 : T < 537.01 ? 20 : T < 537.11 ? "21+" : T < 537.13 ? 23 : T < 537.18 ? 24 : T < 537.24 ? 25 : T < 537.36 ? 26 : "Blink" != z ? "27" : "28")) : (z && (z[1] = "like Safari"), T = T[0], T = T < 400 ? 1 : T < 500 ? 2 : T < 526 ? 3 : T < 533 ? 4 : T < 534 ? "4+" : T < 535 ? 5 : T < 537 ? 6 : T < 538 ? 7 : T < 601 ? 8 : "8"), z && (z[1] += " " + (T += "number" == typeof T ? ".x" : /[.+]/.test(T) ? "" : "+")), "Safari" == G && (!J || parseInt(J) > 45) && (J = T)), "Opera" == G && (T = /\bzbov|zvav$/.exec(Y)) ? (G += " ", $.unshift("desktop mode"), "zvav" == T ? (G += "Mini", J = null) : G += "Mobile", Y = Y.replace(RegExp(" *" + T + "$"), "")) : "Safari" == G && /\bChrome\b/.exec(z && z[1]) && ($.unshift("desktop mode"), G = "Chrome Mobile", J = null, /\bOS X\b/.test(Y) ? (V = "Apple", Y = "iOS 4.3+") : Y = null), J && 0 == J.indexOf(T = /[\d.]+$/.exec(Y)) && e.indexOf("/" + T + "-") > -1 && (Y = h(Y.replace(T, ""))), z && !/\b(?:Avant|Nook)\b/.test(G) && (/Browser|Lunascape|Maxthon/.test(G) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Sleipnir|Web)/.test(G) && z[1]) && (T = z[z.length - 1]) && $.push(T), $.length && ($ = ["(" + $.join("; ") + ")"]), V && K && K.indexOf(V) < 0 && $.push("on " + V), K && $.push((/^on /.test($[$.length - 1]) ? "" : "on ") + K), Y && (T = / ([\d.+]+)$/.exec(Y), O = T && "/" == Y.charAt(Y.length - T[0].length - 1), Y = {
                    architecture: 32,
                    family: T && !O ? Y.replace(T[0], "") : Y,
                    version: T ? T[1] : null,
                    toString: function () {
                        var e = this.version;
                        return this.family + (e && !O ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "")
                    }
                }), (T = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(q)) && !/\bi686\b/i.test(q) && (Y && (Y.architecture = 64, Y.family = Y.family.replace(RegExp(" *" + T), "")), G && (/\bWOW64\b/i.test(e) || X && /\w(?:86|32)$/.test(x.cpuClass || x.platform) && !/\bWin64; x64\b/i.test(e)) && $.unshift("32-bit")), e || (e = null);
                var Q = {};
                return Q.description = e, Q.layout = z && z[0], Q.manufacturer = V, Q.name = G, Q.prerelease = H, Q.product = K, Q.ua = e, Q.version = G && J, Q.os = Y || {
                    architecture: null,
                    family: null,
                    version: null,
                    toString: function () {
                        return "null"
                    }
                }, Q.parse = y, Q.toString = v, Q.version && $.unshift(J), Q.name && $.unshift(G), Y && G && (Y != String(Y).split(" ")[0] || Y != G.split(" ")[0] && !K) && $.push(K ? "(" + Y + ")" : "on " + Y), $.length && (Q.description = $.join(" ")), Q
            }

            var v = {"function": !0, object: !0}, m = v[typeof window] && window || this, g = m, b = v[typeof t] && t,
                w = v[typeof e] && e && !e.nodeType && e, x = b && w && "object" == typeof o && o;
            !x || x.global !== x && x.window !== x && x.self !== x || (m = x);
            var k = Math.pow(2, 53) - 1, S = /\bOpera/, _ = this, T = Object.prototype, O = T.hasOwnProperty,
                E = T.toString;
            r = function () {
                return y()
            }.call(t, n, t, e), !(void 0 !== r && (e.exports = r))
        }).call(this)
    }).call(t, n(5)(e), function () {
        return this
    }())
}, function (e, t, n) {
    var r = n(9).fn;
    r.isConnected = function () {
        return this.protocol.isConnected()
    }, r.connect = function () {
        this.protocol.connect()
    }, r.disconnect = function () {
        this.protocol.disconnect()
    }
}, function (e, t, n) {
    var r = n(9).fn, o = n(10), i = n(14), a = n(21), s = n(22), c = n(23), u = n(26);
    r.sendText = function (e) {
        var t = this;
        return t.processCallback(e), e.msg = new t.message.TextMessage(e), t.sendMsg(e)
    }, r.previewFile = function (e) {
        if (o.verifyOptions(e, "done"), e.type || (e.type = "file"), o.verifyParamPresentJustOne(e, "dataURL blob fileInput"), e.dataURL) e.blob = u.fromDataURL(e.dataURL); else if (e.blob) ; else if (e.fileInput) {
            if (e.fileInput = o.verifyFileInput(e.fileInput), e.fileInput.files && !e.fileInput.files.length) return void e.done(i.newNoFileError("请选择" + e.type + "文件"), e);
            e.fileInputName = o.getFileName(e.fileInput)
        }
        this.processCallback(e);
        var t = s.genResponseBody(e.type) || {};
        this.getNosToken({
            responseBody: JSON.stringify(t).replace(/\"/gi, '\\"'), callback: function (t, n) {
                return t ? void e.done(t, e.callback.options) : (e.nosToken = n, void this._doPreviewFile(e))
            }.bind(this)
        })
    }, r._doPreviewFile = function (e) {
        var t = this, n = e.uploaddone;
        e.uploaddone = function (r, i) {
            if (e.uploaddone = n, r) return r.appendMessage("上传文件失败"), void e.done(r, e.callback.options);
            if (i = s.parseResponse(i, t.options.exifOrientation), i.url = a.genDownloadUrl(e.nosToken.bucket, e.params.Object), o.exist(e.fileInputName)) i.name = e.fileInputName; else if (e.blob) {
                i.name = e.blob.name || "blob-" + i.md5;
                var c = e.blob.type;
                i.ext = c.slice(c.lastIndexOf("/") + 1)
            }
            if (!i.ext) {
                var u = i.name.lastIndexOf(".");
                u === -1 ? i.ext = "unknown" : i.ext = i.name.slice(u + 1)
            }
            return void e.done(null, o.copy(i))
        }.bind(this), e.url = a.genUploadUrl(e.nosToken.bucket), e.params = this.assembleUploadParams(e.nosToken), e.fileName = "file", new c(e)
    }, r.sendFile = function (e) {
        var t = this;
        if (e.type || (e.type = "file"), o.verifyParamPresentJustOne(e, "dataURL blob fileInput file"), t.processCallback(e), e.dataURL) t._previewAndSendFile(e); else if (e.blob) t._previewAndSendFile(e); else if (e.fileInput) {
            if (e.fileInput = o.verifyFileInput(e.fileInput), e.fileInput.files && !e.fileInput.files.length) return void e.done(i.newNoFileError("请选择" + e.type + "文件"), e.callback.options);
            t._previewAndSendFile(e)
        } else if (e.file) return e.msg = new t.message.FileMessage(e), t.sendMsg(e)
    }, r._previewAndSendFile = function (e) {
        var t = this;
        o.verifyCallback(e, "uploaddone beforesend");
        var n = e.done;
        e.done = function (r, i) {
            e.done = n, r ? e.uploaddone(r, e.callback.options) : (e.uploaddone(null, o.copy(i)), e.file = i, e.msg = new t.message.FileMessage(e), e.beforesend(t.sendMsg(e)))
        }.bind(t), t.previewFile(e)
    }, r.assembleUploadParams = function (e) {
        return e ? {
            Object: decodeURIComponent(e.objectName),
            "x-nos-token": e.token,
            "x-nos-entity-type": "json"
        } : null
    }, r.sendGeo = function (e) {
        var t = this;
        return t.processCallback(e), e.msg = new t.message.GeoMessage(e), t.sendMsg(e)
    }, r.sendTipMsg = function (e) {
        var t = this;
        return t.processCallback(e), e.msg = new t.message.TipMessage(e), t.sendMsg(e)
    }, r.sendCustomMsg = function (e) {
        var t = this;
        return t.processCallback(e), e.msg = new t.message.CustomMessage(e), t.sendMsg(e)
    }, r.sendMsg = function (e) {
        var t = this, n = t.protocol, r = e.msg, i = {}, a = !!e.isLocal;
        if (a && e.time && (r.time = e.time), e.resend && ("out" !== e.flow || "fail" !== e.status)) return o.onError("只能重发发送失败的消息");
        e.callback.options.idClient = r.idClient, t.beforeSendMsg(e, i);
        var s = e.rtnMsg = t.formatReturnMsg(r);
        return a && (s.status = "success", s.isLocal = !0), n.storeSendMsg && (i.promise = n.storeSendMsg(s)), e.cbaop = function (e) {
            if (e && "server" !== e.from) return s.status = "fail", n.updateSendMsgError && n.updateSendMsgError(s), s
        }, a || (i.msg = r, t.sendCmd(e.cmd, i, e.callback)), t.afterSendMsg(e), a && setTimeout(function () {
            s = o.simpleClone(s), e.done(null, s)
        }, 0), o.copy(s)
    }, r.beforeSendMsg = function () {
    }, r.afterSendMsg = function () {
    }, r.formatReturnMsg = function (e) {
        var t = this;
        return e = o.copy(e), t.protocol.completeMsg(e), e.status = "sending", e = t.message.reverse(e)
    }, r.resendMsg = function (e) {
        var t = this;
        return o.verifyOptions(e, "msg"), t.trimMsgFlag(e), e.resend = !0, t._sendMsgByType(e)
    }, r.forwardMsg = function (e) {
        var t = this;
        return o.verifyOptions(e, "msg"), t.beforeForwardMsg(e), t.trimMsgFlag(e), e.forward = !0, t._sendMsgByType(e)
    }, r.trimMsgFlag = function (e) {
        e && e.msg && (e.mgs = o.copy(e.msg), delete e.msg.resend, delete e.msg.forward)
    }, r.beforeForwardMsg = function () {
    }, r._sendMsgByType = function (e) {
        var t = this;
        switch (o.verifyOptions(e, "msg"), o.verifyParamValid("msg.type", e.msg.type, t.message.validTypes), o.merge(e, e.msg), e.type) {
            case"text":
                return t.sendText(e);
            case"image":
            case"audio":
            case"video":
            case"file":
                return t.sendFile(e);
            case"geo":
                return t.sendGeo(e);
            case"custom":
                return t.sendCustomMsg(e);
            case"tip":
                return t.sendTipMsg(e);
            default:
                throw new i("不能发送类型为 " + e.type + " 的消息")
        }
    }
}, function (e, t) {
    var n = "e0ad5d585838d39bdc2255d7dbade02ed46fd3ea", r = "e0ad5d5", o = "2.8.0", i = 27, a = 1,
        s = "https://lbs.netease.im/lbs/webconf.jsp", c = 42e3, u = {
            info: {hash: n, shortHash: r, version: o, sdkVersion: i, protocolVersion: a},
            lbsUrl: s,
            connectTimeout: c,
            xhrTimeout: 6e3,
            socketTimeout: 6e3,
            reconnectionDelay: 656.25,
            reconnectionDelayMax: c,
            reconnectionJitter: .1,
            heartbeatInterval: 18e4,
            cmdTimeout: c
        };
    u.formatSocketUrl = function (e) {
        return e.indexOf("https") === -1 ? "https://" + e : e
    };
    var l = "https://nos.netease.com/";
    u.fileServerUrl = l, u.genUploadUrl = function (e) {
        return u.fileServerUrl + e
    }, u.genDownloadUrl = function (e, t) {
        if (u.fileServerUrl === l) return "http://" + e + ".nos.netease.com/" + t
    }, e.exports = u
}, function (e, t, n) {
    var r = n(10), o = n(17), i = {
        file: {md5: "$(Etag)", size: "$(ObjectSize)"},
        image: {
            md5: "$(Etag)",
            size: "$(ObjectSize)",
            w: "$(ImageInfo.Width)",
            h: "$(ImageInfo.Height)",
            orientation: "$(ImageInfo.Orientation)"
        },
        audio: {md5: "$(Etag)", size: "$(ObjectSize)", dur: "$(AVinfo.Audio.Duration)"},
        video: {
            md5: "$(Etag)",
            size: "$(ObjectSize)",
            dur: "$(AVinfo.Video.Duration)",
            w: "$(AVinfo.Video.Width)",
            h: "$(AVinfo.Video.Height)"
        }
    }, a = {};
    a.genResponseBody = function (e) {
        return e = e || "file", i[e]
    }, a.parseResponse = function (e, t) {
        r.notundef(e.size) && (e.size = +e.size), r.notundef(e.w) && (e.w = +e.w), r.notundef(e.h) && (e.h = +e.h), r.notundef(e.dur) && (e.dur = +e.dur);
        var n = e.orientation;
        if (r.notundef(n) && (delete e.orientation, t && ("right, top" === n || "left, bottom" === n))) {
            o.warn("exif orientation detected, swap w & h");
            var i = e.w;
            e.w = e.h, e.h = i
        }
        return e
    }, e.exports = a
}, function (e, t, n) {
    function r(e) {
        var t = this;
        t.options = o.copy(e), o.verifyOptions(e, "url fileName"), o.verifyParamPresentJustOne(e, "blob fileInput"), o.verifyCallback(e, "beginupload uploadprogress uploaddone"), e.fileInput && (e.fileInput = o.verifyFileInput(e.fileInput)), e.type && o.verifyFileType(e.type), e.timeout ? o.verifyParamType("timeout", e.timeout, "number") : e.timeout = 6e5, o.verifyFileUploadCallback(e), e.data = {};
        var n = e.fileName, r = e.fileInput;
        if (c) if (r) {
            var l = e.type ? o.filterFiles(r.files, e.type) : [].slice.call(r.files, 0);
            if (!l || !l.length) return void e.uploaddone(i.newWrongFileTypeError("未读取到" + e.type + "类型的文件, 请确保文件选择节点的文件不为空, 并且请确保选择了" + e.type + "类型的文件"));
            var f = r.files[0].size;
            if (f > u) return void e.uploaddone(i.newFileTooLargeError("文件大小超过100M"));
            e.data[n] = l[0]
        } else e.blob && (e.data[n] = e.blob); else o.dataset(r, "name", n), e.data.input = r;
        e.params && o.merge(e.data, e.params);
        var p = {
            data: e.data, onaftersend: function () {
                e.beginupload(t)
            }, onuploading: function (t) {
                var n = Math.floor(1e4 * t.loaded / t.total) / 100,
                    r = {total: t.total, loaded: t.loaded, percentage: n, percentageText: n + "%"};
                s.info("upload progress", r), e.uploadprogress(r)
            }, onload: function (n) {
                n.Error ? t.onError(n) : e.uploaddone(null, n)
            }, onerror: function (n) {
                try {
                    var r = JSON.parse(n.result);
                    t.onError(r)
                } catch (o) {
                    e.uploaddone(new i(n.message, n.code), t.options)
                }
            }
        };
        c || (p.mode = "iframe"), p.putFileAtEnd = !0, t.sn = a(e.url, p)
    }

    var o = n(10), i = n(14), a = n(24).upload, s = n(17), c = o.notundef(window.FormData), u = 104857600;
    r.prototype.onError = function (e) {
        var t, n, r, o = this, a = o.options;
        e = e || {}, t = e.Error || {}, n = t.Code || "unknown", r = t.Message || "未知错误", a.uploaddone(new i(n + "(" + r + ")", n))
    }, r.prototype.abort = function () {
        a.abort(this.sn)
    }, e.exports = r
}, function (e, t, n) {
    !function (t, r) {
        e.exports = r(n(25))
    }(this, function (e) {
        return function (e) {
            function t(r) {
                if (n[r]) return n[r].exports;
                var o = n[r] = {exports: {}, id: r, loaded: !1};
                return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
            }

            var n = {};
            return t.m = e, t.c = n, t.p = "", t(0)
        }([function (e, t, n) {
            "use strict";
            var r = {ajax: n(1), json: n(52), upload: n(53)};
            e.exports = r
        }, function (e, t, n) {
            "use strict";

            function r(e) {
                var t = e.mode, n = d;
                return window.FormData || (t = "iframe"), "iframe" === t && (n = e.upload ? h : y), new n(e)
            }

            function o(e) {
                var t = e.upload = "multipart/form-data" === (e.headers || p.o)["Content-Type"],
                    n = (location.protocol + "//" + location.host).toLowerCase(), o = p.url2origin(e.url), i = n !== o;
                return t || i || e.mode ? r(e) : new d(e)
            }

            function i(e) {
                var t = v[e];
                t && (t.req.destroy(), delete v[e])
            }

            function a(e, t) {
                t = {data: t};
                var n = e.result.headers;
                return n && (t.headers = e.req.header(n)), t
            }

            function s(e, t, n) {
                var r = v[e];
                if (r) {
                    "onload" === t && r.result && (n = a(r, n)), i(e);
                    var o = {type: t, result: n};
                    m(o), o.stopped || r[t](o.result)
                }
            }

            function c(e, t) {
                s(e, "onload", t)
            }

            function u(e, t) {
                s(e, "onerror", t)
            }

            function l(e, t) {
                var n = p.genUrlSep(e);
                return t = t || "", p.isObject(t) && (t = p.object2query(t)), t && (e += n + t), e
            }

            function f(e, t) {
                t = t || {};
                var n = p.uniqueID(), r = {result: t.result, onload: t.onload || p.f, onerror: t.onerror || p.f};
                v[n] = r, t.onload = c.bind(null, n), t.onerror = u.bind(null, n), t.query && (e = l(e, t.query));
                var i = t.method || "";
                return i && !/get/i.test(i) || !t.data || (e = l(e, t.data), t.data = null), t.url = e, r.req = o(t), n
            }

            var p = n(2), d = n(3), h = n(48), y = n(49), v = {}, m = p.f;
            f.filter = function (e) {
                p.isFunction(e) && (m = e)
            }, f.abort = function (e) {
                var t = v[e];
                t && t.req.abort()
            }, e.exports = f
        }, function (t, n) {
            t.exports = e
        }, function (e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {"default": e}
            }

            function o(e) {
                var t = this;
                e.onuploading && t.on("uploading", e.onuploading), f.call(t, e)
            }

            var i = n(4), a = r(i), s = n(39), c = r(s), u = n(2), l = n(45), f = n(46), p = f.prototype,
                d = o.prototype = (0, c["default"])(p);
            d.doSend = function () {
                var e = this, t = e.options, n = t.headers, r = e.xhr = new XMLHttpRequest;
                if ("multipart/form-data" === n["Content-Type"]) {
                    delete n["Content-Type"], r.upload.onprogress = e.onProgress.bind(e), r.upload.onload = e.onProgress.bind(e);
                    var o = t.data;
                    t.data = new FormData, o && l.getKeys(o, t.putFileAtEnd).forEach(function (e) {
                        var n = o[e];
                        n.tagName && "INPUT" === n.tagName.toUpperCase() ? "file" === n.type && [].forEach.call(n.files, function (e) {
                            t.data.append(u.dataset(n, "name") || n.name || e.name || "file-" + u.uniqueID(), e)
                        }) : t.data.append(e, n)
                    })
                }
                r.onreadystatechange = e.onStateChange.bind(e), 0 !== t.timeout && (e.timer = setTimeout(e.onTimeout.bind(e), t.timeout)), r.open(t.method, t.url, !t.sync), (0, a["default"])(n).forEach(function (e) {
                    r.setRequestHeader(e, n[e])
                }), t.cookie && "withCredentials" in r && (r.withCredentials = !0), r.send(t.data), e.afterSend()
            }, d.onProgress = function (e) {
                e.lengthComputable && e.loaded <= e.total && this.emit("uploading", e)
            }, d.onStateChange = function () {
                var e = this, t = e.xhr;
                4 === t.readyState && e.onLoad({status: t.status, result: t.responseText || ""})
            }, d.getResponseHeader = function (e) {
                var t = this.xhr;
                return t ? t.getResponseHeader(e) : ""
            }, d.destroy = function () {
                var e = this;
                clearTimeout(e.timer);
                try {
                    e.xhr.onreadystatechange = u.f, e.xhr.abort()
                } catch (t) {
                }
                p.destroy.call(e)
            }, e.exports = o
        }, function (e, t, n) {
            e.exports = {"default": n(5), __esModule: !0}
        }, function (e, t, n) {
            n(6), e.exports = n(26).Object.keys
        }, function (e, t, n) {
            var r = n(7), o = n(9);
            n(24)("keys", function () {
                return function (e) {
                    return o(r(e))
                }
            })
        }, function (e, t, n) {
            var r = n(8);
            e.exports = function (e) {
                return Object(r(e))
            }
        }, function (e, t) {
            e.exports = function (e) {
                if (void 0 == e) throw TypeError("Can't call method on  " + e);
                return e
            }
        }, function (e, t, n) {
            var r = n(10), o = n(23);
            e.exports = Object.keys || function (e) {
                return r(e, o)
            }
        }, function (e, t, n) {
            var r = n(11), o = n(12), i = n(15)(!1), a = n(19)("IE_PROTO");
            e.exports = function (e, t) {
                var n, s = o(e), c = 0, u = [];
                for (n in s) n != a && r(s, n) && u.push(n);
                for (; t.length > c;) r(s, n = t[c++]) && (~i(u, n) || u.push(n));
                return u
            }
        }, function (e, t) {
            var n = {}.hasOwnProperty;
            e.exports = function (e, t) {
                return n.call(e, t)
            }
        }, function (e, t, n) {
            var r = n(13), o = n(8);
            e.exports = function (e) {
                return r(o(e))
            }
        }, function (e, t, n) {
            var r = n(14);
            e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
                return "String" == r(e) ? e.split("") : Object(e)
            }
        }, function (e, t) {
            var n = {}.toString;
            e.exports = function (e) {
                return n.call(e).slice(8, -1)
            }
        }, function (e, t, n) {
            var r = n(12), o = n(16), i = n(18);
            e.exports = function (e) {
                return function (t, n, a) {
                    var s, c = r(t), u = o(c.length), l = i(a, u);
                    if (e && n != n) {
                        for (; u > l;) if (s = c[l++], s != s) return !0
                    } else for (; u > l; l++) if ((e || l in c) && c[l] === n) return e || l || 0;
                    return !e && -1
                }
            }
        }, function (e, t, n) {
            var r = n(17), o = Math.min;
            e.exports = function (e) {
                return e > 0 ? o(r(e), 9007199254740991) : 0
            }
        }, function (e, t) {
            var n = Math.ceil, r = Math.floor;
            e.exports = function (e) {
                return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
            }
        }, function (e, t, n) {
            var r = n(17), o = Math.max, i = Math.min;
            e.exports = function (e, t) {
                return e = r(e), e < 0 ? o(e + t, 0) : i(e, t)
            }
        }, function (e, t, n) {
            var r = n(20)("keys"), o = n(22);
            e.exports = function (e) {
                return r[e] || (r[e] = o(e))
            }
        }, function (e, t, n) {
            var r = n(21), o = "__core-js_shared__", i = r[o] || (r[o] = {});
            e.exports = function (e) {
                return i[e] || (i[e] = {})
            }
        }, function (e, t) {
            var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = n)
        }, function (e, t) {
            var n = 0, r = Math.random();
            e.exports = function (e) {
                return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
            }
        }, function (e, t) {
            e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
        }, function (e, t, n) {
            var r = n(25), o = n(26), i = n(35);
            e.exports = function (e, t) {
                var n = (o.Object || {})[e] || Object[e], a = {};
                a[e] = t(n), r(r.S + r.F * i(function () {
                    n(1)
                }), "Object", a)
            }
        }, function (e, t, n) {
            var r = n(21), o = n(26), i = n(27), a = n(29), s = "prototype", c = function (e, t, n) {
                var u, l, f, p = e & c.F, d = e & c.G, h = e & c.S, y = e & c.P, v = e & c.B, m = e & c.W,
                    g = d ? o : o[t] || (o[t] = {}), b = g[s], w = d ? r : h ? r[t] : (r[t] || {})[s];
                d && (n = t);
                for (u in n) l = !p && w && void 0 !== w[u], l && u in g || (f = l ? w[u] : n[u], g[u] = d && "function" != typeof w[u] ? n[u] : v && l ? i(f, r) : m && w[u] == f ? function (e) {
                    var t = function (t, n, r) {
                        if (this instanceof e) {
                            switch (arguments.length) {
                                case 0:
                                    return new e;
                                case 1:
                                    return new e(t);
                                case 2:
                                    return new e(t, n)
                            }
                            return new e(t, n, r)
                        }
                        return e.apply(this, arguments)
                    };
                    return t[s] = e[s], t
                }(f) : y && "function" == typeof f ? i(Function.call, f) : f, y && ((g.virtual || (g.virtual = {}))[u] = f, e & c.R && b && !b[u] && a(b, u, f)))
            };
            c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, e.exports = c
        }, function (e, t) {
            var n = e.exports = {version: "2.4.0"};
            "number" == typeof __e && (__e = n)
        }, function (e, t, n) {
            var r = n(28);
            e.exports = function (e, t, n) {
                if (r(e), void 0 === t) return e;
                switch (n) {
                    case 1:
                        return function (n) {
                            return e.call(t, n)
                        };
                    case 2:
                        return function (n, r) {
                            return e.call(t, n, r)
                        };
                    case 3:
                        return function (n, r, o) {
                            return e.call(t, n, r, o)
                        }
                }
                return function () {
                    return e.apply(t, arguments)
                }
            }
        }, function (e, t) {
            e.exports = function (e) {
                if ("function" != typeof e) throw TypeError(e + " is not a function!");
                return e
            }
        }, function (e, t, n) {
            var r = n(30), o = n(38);
            e.exports = n(34) ? function (e, t, n) {
                return r.f(e, t, o(1, n))
            } : function (e, t, n) {
                return e[t] = n, e
            }
        }, function (e, t, n) {
            var r = n(31), o = n(33), i = n(37), a = Object.defineProperty;
            t.f = n(34) ? Object.defineProperty : function (e, t, n) {
                if (r(e), t = i(t, !0), r(n), o) try {
                    return a(e, t, n)
                } catch (s) {
                }
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                return "value" in n && (e[t] = n.value), e
            }
        }, function (e, t, n) {
            var r = n(32);
            e.exports = function (e) {
                if (!r(e)) throw TypeError(e + " is not an object!");
                return e
            }
        }, function (e, t) {
            e.exports = function (e) {
                return "object" == typeof e ? null !== e : "function" == typeof e
            }
        }, function (e, t, n) {
            e.exports = !n(34) && !n(35)(function () {
                return 7 != Object.defineProperty(n(36)("div"), "a", {
                    get: function () {
                        return 7
                    }
                }).a
            })
        }, function (e, t, n) {
            e.exports = !n(35)(function () {
                return 7 != Object.defineProperty({}, "a", {
                    get: function () {
                        return 7
                    }
                }).a
            })
        }, function (e, t) {
            e.exports = function (e) {
                try {
                    return !!e()
                } catch (t) {
                    return !0
                }
            }
        }, function (e, t, n) {
            var r = n(32), o = n(21).document, i = r(o) && r(o.createElement);
            e.exports = function (e) {
                return i ? o.createElement(e) : {}
            }
        }, function (e, t, n) {
            var r = n(32);
            e.exports = function (e, t) {
                if (!r(e)) return e;
                var n, o;
                if (t && "function" == typeof(n = e.toString) && !r(o = n.call(e))) return o;
                if ("function" == typeof(n = e.valueOf) && !r(o = n.call(e))) return o;
                if (!t && "function" == typeof(n = e.toString) && !r(o = n.call(e))) return o;
                throw TypeError("Can't convert object to primitive value")
            }
        }, function (e, t) {
            e.exports = function (e, t) {
                return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
            }
        }, function (e, t, n) {
            e.exports = {"default": n(40), __esModule: !0}
        }, function (e, t, n) {
            n(41);
            var r = n(26).Object;
            e.exports = function (e, t) {
                return r.create(e, t)
            }
        }, function (e, t, n) {
            var r = n(25);
            r(r.S, "Object", {create: n(42)})
        }, function (e, t, n) {
            var r = n(31), o = n(43), i = n(23), a = n(19)("IE_PROTO"), s = function () {
            }, c = "prototype", u = function () {
                var e, t = n(36)("iframe"), r = i.length, o = "<", a = ">";
                for (t.style.display = "none", n(44).appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write(o + "script" + a + "document.F=Object" + o + "/script" + a), e.close(), u = e.F; r--;) delete u[c][i[r]];
                return u()
            };
            e.exports = Object.create || function (e, t) {
                var n;
                return null !== e ? (s[c] = r(e), n = new s, s[c] = null, n[a] = e) : n = u(), void 0 === t ? n : o(n, t)
            }
        }, function (e, t, n) {
            var r = n(30), o = n(31), i = n(9);
            e.exports = n(34) ? Object.defineProperties : function (e, t) {
                o(e);
                for (var n, a = i(t), s = a.length, c = 0; s > c;) r.f(e, n = a[c++], t[n]);
                return e
            }
        }, function (e, t, n) {
            e.exports = n(21).document && document.documentElement
        }, function (e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {"default": e}
            }

            var o = n(4), i = r(o), a = {};
            a.isFileInput = function (e) {
                return e.tagName && "INPUT" === e.tagName.toUpperCase() || window.Blob && e instanceof window.Blob
            }, a.getKeys = function (e, t) {
                var n = (0, i["default"])(e);
                return t && n.sort(function (t, n) {
                    var r = a.isFileInput(e[t]), o = a.isFileInput(e[n]);
                    return r === o ? 0 : r ? 1 : -1
                }), n
            }, e.exports = a
        }, function (e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {"default": e}
            }

            function o(e) {
                var t = this;
                e.onload && t.once("load", e.onload), e.onerror && t.once("error", e.onerror), e.onbeforesend && t.once("beforesend", e.onbeforesend), e.onaftersend && t.once("aftersend", e.onaftersend), e = t.options = s.fetch({
                    method: "GET",
                    url: "",
                    sync: !1,
                    data: null,
                    headers: {},
                    cookie: !1,
                    timeout: 6e3,
                    type: "text",
                    form: null,
                    input: null,
                    putFileAtEnd: !1,
                    proxyUrl: ""
                }, e);
                var n = e.headers, r = "Content-Type";
                s.notexist(n[r]) && (n[r] = "application/x-www-form-urlencoded"), t.send()
            }

            var i = n(39), a = r(i), s = n(2), c = s.f, u = n(47), l = o.prototype = (0, a["default"])(u.prototype);
            l.send = function () {
                var e = this, t = e.options;
                setTimeout(function () {
                    try {
                        try {
                            e.emit("beforesend", t)
                        } catch (n) {
                        }
                        e.doSend()
                    } catch (n) {
                        e.onError("serverError", "请求失败:" + n.message)
                    }
                }, 0)
            }, l.doSend = c, l.afterSend = function () {
                var e = this;
                setTimeout(function () {
                    e.emit("aftersend", e.options)
                }, 0)
            }, l.onLoad = function (e) {
                var t = this, n = t.options, r = e.status, o = e.result;
                if (0 !== ("" + r).indexOf("2")) return void t.onError("serverError", "服务器返回异常状态", {
                    status: r,
                    result: o
                });
                if ("json" === n.type) try {
                    o = JSON.parse(o)
                } catch (i) {
                    return void t.onError("parseError", o)
                }
                t.emit("load", o)
            }, l.onError = function (e, t, n) {
                var r = s.isObject(n) ? n : {};
                r.code = e || "error", r.message = t || "发生错误", this.emit("error", r)
            }, l.onTimeout = function () {
                this.onError("timeout", "请求超时")
            }, l.abort = function () {
                this.onError("abort", "客户端中止")
            }, l.header = function (e) {
                var t = this;
                if (!s.isArray(e)) return t.getResponseHeader(e || "");
                var n = {};
                return e.forEach(function (e) {
                    n[e] = t.header(e)
                }), n
            }, l.getResponseHeader = c, l.destroy = c, e.exports = o
        }, function (e, t, n) {
            var r;
            !function (t) {
                "use strict";

                function o() {
                }

                function i(e, t) {
                    for (var n = e.length; n--;) if (e[n].listener === t) return n;
                    return -1
                }

                function a(e) {
                    return function () {
                        return this[e].apply(this, arguments)
                    }
                }

                function s(e) {
                    return "function" == typeof e || e instanceof RegExp || !(!e || "object" != typeof e) && s(e.listener)
                }

                var c = o.prototype, u = t.EventEmitter;
                c.getListeners = function (e) {
                    var t, n, r = this._getEvents();
                    if (e instanceof RegExp) {
                        t = {};
                        for (n in r) r.hasOwnProperty(n) && e.test(n) && (t[n] = r[n])
                    } else t = r[e] || (r[e] = []);
                    return t
                }, c.flattenListeners = function (e) {
                    var t, n = [];
                    for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
                    return n
                }, c.getListenersAsObject = function (e) {
                    var t, n = this.getListeners(e);
                    return n instanceof Array && (t = {}, t[e] = n), t || n
                }, c.addListener = function (e, t) {
                    if (!s(t)) throw new TypeError("listener must be a function");
                    var n, r = this.getListenersAsObject(e), o = "object" == typeof t;
                    for (n in r) r.hasOwnProperty(n) && i(r[n], t) === -1 && r[n].push(o ? t : {listener: t, once: !1});
                    return this
                }, c.on = a("addListener"), c.addOnceListener = function (e, t) {
                    return this.addListener(e, {listener: t, once: !0})
                }, c.once = a("addOnceListener"), c.defineEvent = function (e) {
                    return this.getListeners(e), this
                }, c.defineEvents = function (e) {
                    for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
                    return this
                }, c.removeListener = function (e, t) {
                    var n, r, o = this.getListenersAsObject(e);
                    for (r in o) o.hasOwnProperty(r) && (n = i(o[r], t), n !== -1 && o[r].splice(n, 1));
                    return this
                }, c.off = a("removeListener"), c.addListeners = function (e, t) {
                    return this.manipulateListeners(!1, e, t)
                }, c.removeListeners = function (e, t) {
                    return this.manipulateListeners(!0, e, t)
                }, c.manipulateListeners = function (e, t, n) {
                    var r, o, i = e ? this.removeListener : this.addListener,
                        a = e ? this.removeListeners : this.addListeners;
                    if ("object" != typeof t || t instanceof RegExp) for (r = n.length; r--;) i.call(this, t, n[r]); else for (r in t) t.hasOwnProperty(r) && (o = t[r]) && ("function" == typeof o ? i.call(this, r, o) : a.call(this, r, o));
                    return this
                }, c.removeEvent = function (e) {
                    var t, n = typeof e, r = this._getEvents();
                    if ("string" === n) delete r[e]; else if (e instanceof RegExp) for (t in r) r.hasOwnProperty(t) && e.test(t) && delete r[t]; else delete this._events;
                    return this
                }, c.removeAllListeners = a("removeEvent"), c.emitEvent = function (e, t) {
                    var n, r, o, i, a, s = this.getListenersAsObject(e);
                    for (i in s) if (s.hasOwnProperty(i)) for (n = s[i].slice(0), o = 0; o < n.length; o++) r = n[o], r.once === !0 && this.removeListener(e, r.listener), a = r.listener.apply(this, t || []), a === this._getOnceReturnValue() && this.removeListener(e, r.listener);
                    return this
                }, c.trigger = a("emitEvent"), c.emit = function (e) {
                    var t = Array.prototype.slice.call(arguments, 1);
                    return this.emitEvent(e, t)
                }, c.setOnceReturnValue = function (e) {
                    return this._onceReturnValue = e, this
                }, c._getOnceReturnValue = function () {
                    return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
                }, c._getEvents = function () {
                    return this._events || (this._events = {})
                }, o.noConflict = function () {
                    return t.EventEmitter = u, o
                }, r = function () {
                    return o
                }.call(t, n, t, e), !(void 0 !== r && (e.exports = r))
            }(this || {})
        }, function (e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {"default": e}
            }

            function o(e) {
                var t = this;
                t.init(), u.call(t, e)
            }

            var i = n(39), a = r(i), s = n(2), c = n(45), u = n(46), l = "NEJ-UPLOAD-RESULT:", f = {}, p = u.prototype,
                d = o.prototype = (0, a["default"])(p);
            d.init = function () {
                function e(e) {
                    var t = e.data;
                    if (0 === t.indexOf(l)) {
                        t = JSON.parse(t.replace(l, ""));
                        var n = t.key, r = f[n];
                        r && (delete f[n], t.result = decodeURIComponent(t.result || ""), r.onLoad(t.result))
                    }
                }

                function t() {
                    n || (n = !0, s.on(window, "message", e))
                }

                var n = !1;
                return function () {
                    t()
                }
            }(), d.doSend = function () {
                function e() {
                    l.forEach(function (e, t) {
                        var n = p[t];
                        n.parentNode && (e.name = n.name, e.setAttribute("form", n.getAttribute("form")), n.parentNode.replaceChild(e, n))
                    })
                }

                var t = this, n = t.options, r = t.key = s.uniqueID();
                f[r] = t;
                var o = t.form = s.html2node('<form style="display:none;"></form>');
                document.body.appendChild(o), o.target = r, o.method = "POST", o.enctype = "multipart/form-data", o.encoding = "multipart/form-data";
                var i = n.url, a = s.genUrlSep(i);
                o.action = i + a + "_proxy_=form";
                var u = n.data, l = [], p = [];
                u && c.getKeys(u, n.putFileAtEnd).forEach(function (e) {
                    var t = u[e];
                    if (t.tagName && "INPUT" === t.tagName.toUpperCase()) {
                        if ("file" === t.type) {
                            var n = t, r = n.cloneNode(!0);
                            n.parentNode.insertBefore(r, n);
                            var i = s.dataset(n, "name");
                            i && (n.name = i), o.appendChild(n), n.setAttribute("form", ""), n.removeAttribute("form"), l.push(t), p.push(r)
                        }
                    } else {
                        var a = s.html2node('<input type="hidden"/>');
                        a.name = e, a.value = t, o.appendChild(a)
                    }
                });
                var d = t.iframe = s.createIframe({
                    name: r, onload: function () {
                        return t.aborted ? void e() : (s.on(d, "load", t.checkResult.bind(t)), o.submit(), e(), void t.afterSend())
                    }
                })
            }, d.checkResult = function () {
                var e, t, n = this;
                try {
                    if (e = n.iframe.contentWindow.document.body, t = (e.innerText || e.textContent || "").trim(), t.indexOf(l) >= 0 || e.innerHTML.indexOf(l) >= 0) return
                } catch (r) {
                    return
                }
                n.onLoad(t)
            }, d.onLoad = function (e) {
                var t = this;
                p.onLoad.call(t, {status: 200, result: e}), s.remove(t.form), s.remove(t.iframe), p.destroy.call(t)
            }, d.abort = function () {
                var e = this;
                e.aborted = !0, delete f[e.key], p.abort.call(e)
            }, e.exports = o
        }, function (e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {"default": e}
            }

            function o(e) {
                var t = this;
                t.init(), l.call(t, e)
            }

            var i = n(50), a = r(i), s = n(39), c = r(s), u = n(2), l = n(46), f = {}, p = l.prototype,
                d = o.prototype = (0, c["default"])(p);
            d.init = function () {
                function e(e) {
                    var t = e.data;
                    if (0 === t.indexOf(n)) {
                        t = JSON.parse(t.replace(n, ""));
                        var r = t.key, o = f[r];
                        o && (delete f[r], t.result = decodeURIComponent(t.result || ""), o.onLoad(t))
                    }
                }

                function t() {
                    r || (r = !0, u.on(window, "message", e))
                }

                var n = "NEJ-AJAX-DATA:", r = !1;
                return function () {
                    t()
                }
            }(), d.doSend = function () {
                var e = this, t = e.options, n = u.url2origin(t.url), r = t.proxyUrl || n + "/res/nej_proxy_frame.html",
                    o = f[r];
                if (u.isArray(o)) return void o.push(e.doSend.bind(e, t));
                if (!o) return f[r] = [e.doSend.bind(e, t)], void u.createIframe({
                    src: r, onload: function (e) {
                        var t = f[r];
                        f[r] = u.target(e).contentWindow, t.forEach(function (e) {
                            try {
                                e()
                            } catch (t) {
                            }
                        })
                    }
                });
                if (!e.aborted) {
                    var i = e.key = u.uniqueID();
                    f[i] = e;
                    var s = u.fetch({method: "GET", url: "", data: null, headers: {}, timeout: 0}, t);
                    s.key = i, o.postMessage((0, a["default"])(s), "*"), e.afterSend()
                }
            }, d.abort = function () {
                var e = this;
                e.aborted = !0, delete f[e.key], p.abort.call(e)
            }, e.exports = o
        }, function (e, t, n) {
            e.exports = {"default": n(51), __esModule: !0}
        }, function (e, t, n) {
            var r = n(26), o = r.JSON || (r.JSON = {stringify: JSON.stringify});
            e.exports = function (e) {
                return o.stringify.apply(o, arguments)
            }
        }, function (e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {"default": e}
            }

            var o = n(50), i = r(o), a = n(2), s = n(1), c = function () {
                var e = /json/i, t = /post/i;
                return function (n, r) {
                    r = r || {};
                    var o = r.data = r.data || {}, c = r.headers = r.headers || {},
                        u = a.checkWithDefault(c, "Accept", "application/json"),
                        l = a.checkWithDefault(c, "Content-Type", "application/json");
                    return e.test(u) && (r.type = "json"), t.test(r.method) && e.test(l) && (r.data = (0, i["default"])(o)),
                        s(n, r)
                }
            }();
            a.mixin(c, s), s.json = c, e.exports = c
        }, function (e, t, n) {
            "use strict";
            var r = n(2), o = n(1), i = function (e, t) {
                return t.method = "POST", t.headers = t.headers || {}, t.headers["Content-Type"] = "multipart/form-data", t.timeout = 0, t.type = t.type || "json", o(e, t)
            };
            r.mixin(i, o), o.upload = i, e.exports = i
        }])
    })
}, function (e, t, n) {
    !function (t, n) {
        e.exports = n()
    }(this, function () {
        return function (e) {
            function t(r) {
                if (n[r]) return n[r].exports;
                var o = n[r] = {exports: {}, id: r, loaded: !1};
                return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
            }

            var n = {};
            return t.m = e, t.c = n, t.p = "", t(0)
        }([function (e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {"default": e}
            }

            function o(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            t.__esModule = !0;
            var i = n(1), a = o(i), s = n(2), c = o(s), u = n(3), l = o(u), f = n(4), p = o(f), d = n(5), h = o(d),
                y = n(7), v = r(y), m = n(8), g = o(m), b = n(9), w = r(b), x = n(10), k = o(x), S = n(6), _ = o(S),
                T = n(14), O = o(T),
                E = k.merge({}, a, c, l, p, h, {forOwn: v["default"]}, g, {mixin: w["default"]}, k, _, O);
            delete E.__esModule, t["default"] = E, e.exports = t["default"]
        }, function (e, t) {
            "use strict";

            function n(e) {
                var t = void 0;
                t = e.split(",")[0].indexOf("base64") >= 0 ? window.atob(e.split(",")[1]) : window.decodeURIComponent(e.split(",")[1]);
                for (var n = e.split(",")[0].split(":")[1].split(";")[0], r = new window.Uint8Array(t.length), o = 0; o < t.length; o++) r[o] = t.charCodeAt(o);
                return new window.Blob([r], {type: n})
            }

            t.__esModule = !0, t.blobFromDataURL = n
        }, function (e, t) {
            "use strict";

            function n(e) {
                var t = !1, n = "Webkit Moz ms O".split(" "), r = document.createElement("div"), o = null;
                if (e = e.toLowerCase(), void 0 !== r.style[e] && (t = !0), t === !1) {
                    o = e.charAt(0).toUpperCase() + e.substr(1);
                    for (var i = 0; i < n.length; i++) if (void 0 !== r.style[n[i] + o]) {
                        t = !0;
                        break
                    }
                }
                return t
            }

            t.__esModule = !0, t.detectCSSFeature = n
        }, function (e, t) {
            "use strict";
            t.__esModule = !0;
            t.o = {}, t.emptyObj = {}, t.f = function () {
            }, t.emptyFunc = function () {
            }, t.regBlank = /\s+/gi, t.regWhiteSpace = /\s+/gi
        }, function (e, t) {
            "use strict";

            function n(e, t) {
                t = t || 2;
                for (var n = "" + e; n.length < t;) n = "0" + n;
                return n
            }

            function r(e) {
                return "" + e.getFullYear()
            }

            function o(e) {
                return n(e.getMonth() + 1)
            }

            function i(e) {
                return n(e.getDate())
            }

            function a(e) {
                return n(e.getHours())
            }

            function s(e) {
                return n(e.getMinutes())
            }

            function c(e) {
                return n(e.getSeconds())
            }

            function u(e) {
                return n(e.getMilliseconds(), 3)
            }

            function l(e) {
                return e = "" + e, new Date(e.replace(/-/g, "/").replace("T", " "))
            }

            t.__esModule = !0, t.fix = n, t.getYearStr = r, t.getMonthStr = o, t.getDayStr = i, t.getHourStr = a, t.getMinuteStr = s, t.getSecondStr = c, t.getMillisecondStr = u, t.dateFromDateTimeLocal = l;
            t.format = function () {
                var e = /yyyy|MM|dd|hh|mm|ss|SSS/g, t = {yyyy: r, MM: o, dd: i, hh: a, mm: s, ss: c, SSS: u};
                return function (n, r) {
                    return n = new Date(n), isNaN(+n) ? "invalid date" : (r = r || "yyyy-MM-dd", r.replace(e, function (e) {
                        return t[e](n)
                    }))
                }
            }()
        }, function (e, t, n) {
            "use strict";

            function r(e) {
                var t = e.parentNode || document.body;
                e = e.cloneNode(!0), e.style.display = "block", e.style.opacity = 0, e.style.height = "auto", t.appendChild(e);
                var n = e.offsetHeight;
                return t.removeChild(e), n
            }

            function o(e) {
                e.parentNode && e.parentNode.removeChild(e)
            }

            function i(e, t, n) {
                return (0, u.exist)(n) ? void e.setAttribute("data-" + t, n) : e.getAttribute("data-" + t)
            }

            function a(e) {
                return e.target || e.srcElement
            }

            function s(e) {
                e = e || {};
                var t = document.createElement("iframe");
                if (t.frameBorder = 0, e.name && (t.name = e.name), e.visible || (t.style.display = "none"), (0, u.isFunction)(e.onload)) {
                    var n = function i(n) {
                        t.src && (e.multi || d(t, "load", i), e.onload(n))
                    };
                    f(t, "load", n)
                }
                var r = e.parent;
                (r || document.body).appendChild(t);
                var o = e.src || "about:blank";
                return setTimeout(function () {
                    t.src = o
                }, 0), t
            }

            function c(e) {
                var t = window.document.createElement("div");
                t.innerHTML = e;
                var n = [], r = void 0, o = void 0;
                if (t.children) for (r = 0, o = t.children.length; r < o; r++) n.push(t.children[r]); else for (r = 0, o = t.childNodes.length; r < o; r++) {
                    var i = t.childNodes[r];
                    1 === i.nodeType && n.push(i)
                }
                return n.length > 1 ? t : n[0]
            }

            t.__esModule = !0, t.off = t.removeEventListener = t.on = t.addEventListener = void 0, t.calcHeight = r, t.remove = o, t.dataset = i, t.target = a, t.createIframe = s, t.html2node = c;
            var u = n(6), l = t.addEventListener = function (e, t, n) {
                e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
            }, f = t.on = l, p = t.removeEventListener = function (e, t, n) {
                e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
            }, d = t.off = p
        }, function (e, t) {
            "use strict";

            function n(e) {
                return Object.prototype.toString.call(e).slice(8, -1)
            }

            function r(e) {
                return n(e).toLowerCase()
            }

            function o(e) {
                return "string" === r(e)
            }

            function i(e) {
                return "number" === r(e)
            }

            function a(e) {
                return "boolean" === r(e)
            }

            function s(e) {
                return "array" === r(e)
            }

            function c(e) {
                return "function" === r(e)
            }

            function u(e) {
                return "date" === r(e)
            }

            function l(e) {
                return "regexp" === r(e)
            }

            function f(e) {
                return "error" === r(e)
            }

            function p(e) {
                return null === e
            }

            function d(e) {
                return null !== e
            }

            function h(e) {
                return "undefined" == typeof e
            }

            function y(e) {
                return "undefined" != typeof e
            }

            function v(e) {
                return y(e) && d(e)
            }

            function m(e) {
                return h(e) || p(e)
            }

            function g(e) {
                return v(e) && "object" === r(e)
            }

            function b(e) {
                return m(e) || (o(e) || s(e)) && 0 === e.length
            }

            t.__esModule = !0, t.getClass = n, t.typeOf = r, t.isString = o, t.isNumber = i, t.isBoolean = a, t.isArray = s, t.isFunction = c, t.isDate = u, t.isRegExp = l, t.isError = f, t.isnull = p, t.notnull = d, t.undef = h, t.notundef = y, t.exist = v, t.notexist = m, t.isObject = g, t.isEmpty = b
        }, function (e, t) {
            "use strict";
            t.__esModule = !0, t["default"] = function () {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    t = arguments.length <= 1 || void 0 === arguments[1] ? function () {
                    } : arguments[1], n = arguments[2];
                for (var r in e) e.hasOwnProperty(r) && t.call(n, r, e[r])
            }, e.exports = t["default"]
        }, function (e, t) {
            "use strict";
            t.__esModule = !0;
            t.uniqueID = function () {
                var e = 0;
                return function () {
                    return "" + e++
                }
            }()
        }, function (e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {"default": e}
            }

            t.__esModule = !0;
            var o = n(7), i = r(o);
            t["default"] = function (e, t) {
                (0, i["default"])(t, function (t, n) {
                    e[t] = n
                })
            }, e.exports = t["default"]
        }, function (e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {"default": e}
            }

            function o(e) {
                return JSON.parse((0, p["default"])(e))
            }

            function i() {
                for (var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return n.forEach(function (t) {
                    (0, h["default"])(e, t)
                }), e
            }

            function a(e, t) {
                return (0, v["default"])(t, function (t, n) {
                    (0, m.undef)(e[t]) && (e[t] = n)
                }), e
            }

            function s(e, t, n) {
                var r = e[t] || e[t.toLowerCase()];
                return (0, m.notexist)(r) && (r = n, e[t] = r), r
            }

            function c(e, t) {
                return (0, v["default"])(e, function (n, r) {
                    (0, m.exist)(t[n]) && (e[n] = t[n])
                }), e
            }

            function u() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
                    t = arguments.length <= 1 || void 0 === arguments[1] ? "," : arguments[1], n = {};
                return e.split(t).forEach(function (e) {
                    var t = e.split("="), r = t.shift();
                    r && (n[decodeURIComponent(r)] = decodeURIComponent(t.join("=")))
                }), n
            }

            function l(e, t, n) {
                if (!e) return "";
                var r = [];
                return (0, v["default"])(e, function (e, t) {
                    (0, m.isFunction)(t) || ((0, m.isDate)(t) ? t = t.getTime() : (0, m.isArray)(t) ? t = t.join(",") : (0, m.isObject)(t) && (t = (0, p["default"])(t)), n && (t = encodeURIComponent(t)), r.push(encodeURIComponent(e) + "=" + t))
                }), r.join(t || ",")
            }

            t.__esModule = !0;
            var f = n(11), p = r(f);
            t.simpleClone = o, t.merge = i, t.fillUndef = a, t.checkWithDefault = s, t.fetch = c, t.string2object = u, t.object2string = l;
            var d = n(9), h = r(d), y = n(7), v = r(y), m = n(6)
        }, function (e, t, n) {
            e.exports = {"default": n(12), __esModule: !0}
        }, function (e, t, n) {
            var r = n(13), o = r.JSON || (r.JSON = {stringify: JSON.stringify});
            e.exports = function (e) {
                return o.stringify.apply(o, arguments)
            }
        }, function (e, t) {
            var n = e.exports = {version: "2.4.0"};
            "number" == typeof __e && (__e = n)
        }, function (e, t, n) {
            "use strict";

            function r(e) {
                return e.indexOf("?") < 0 ? "?" : "&"
            }

            function o(e) {
                return (0, i.object2string)(e, "&", !0)
            }

            t.__esModule = !0, t.url2origin = void 0, t.genUrlSep = r, t.object2query = o;
            var i = n(10);
            t.url2origin = function () {
                var e = /^([\w]+?:\/\/.*?(?=\/|$))/i;
                return function (t) {
                    return e.test(t || "") ? RegExp.$1.toLowerCase() : ""
                }
            }()
        }])
    })
}, function (e, t, n) {
    var r = n(10), o = {};
    o.fromDataURL = r.blobFromDataURL, e.exports = o
}, function (e, t, n) {
    var r = n(10), o = n(9).fn, i = n(28);
    o.getNosToken = function (e) {
        this.sendCmd("getNosToken", {responseBody: e.responseBody}, e.callback)
    }, o.packFileDownloadName = function (e) {
        r.verifyOptions(e, "url name");
        var t = e.url;
        return t + r.genUrlSep(t) + "download=" + encodeURIComponent(e.name)
    }, o.audioToMp3 = function (e) {
        r.verifyOptions(e, "url");
        var t = e.url;
        return t + r.genUrlSep(t) + "audioTrans&type=mp3"
    }, o.stripImageMeta = function (e) {
        return this.beforeProcessImage(e, "stripmeta")
    }, o.qualityImage = function (e) {
        return this.beforeProcessImage(e, "quality")
    }, o.interlaceImage = function (e) {
        return this.beforeProcessImage(e, "interlace")
    }, o.rotateImage = function (e) {
        return this.beforeProcessImage(e, "rotate")
    }, o.blurImage = function (e) {
        return this.beforeProcessImage(e, "blur")
    }, o.cropImage = function (e) {
        return this.beforeProcessImage(e, "crop")
    }, o.thumbnailImage = function (e) {
        return this.beforeProcessImage(e, "thumbnail")
    }, o.beforeProcessImage = function (e, t) {
        var n = r.copy(e);
        return n.type = t, e.ops = [n], this.processImage(e)
    }, o.processImage = function (e) {
        var t = this;
        r.verifyOptions(e, "url ops"), r.verifyParamType("ops", e.ops, "array");
        var n = e.ops.map(function (e) {
            return r.verifyOptions(e, "type"), r.verifyParamValid("type", e.type, i.validTypes), t["gen" + e.type.slice(0, 1).toUpperCase() + e.type.slice(1) + "Op"](e)
        });
        t.processCallback(e), t.sendCmd("processImage", {url: e.url, imageOps: n}, e.callback)
    }, o.genStripmetaOp = function (e) {
        return new i({type: e.type, stripmeta: e.strip ? 1 : 0})
    }, o.genQualityOp = function (e) {
        r.verifyOptions(e, "quality"), r.verifyParamType("quality", e.quality, "number"), r.verifyParamMin("quality", e.quality, 0), r.verifyParamMax("quality", e.quality, 100);
        var t = Math.round(e.quality);
        return new i({type: e.type, qualityQuality: t})
    }, o.genInterlaceOp = function (e) {
        return new i({type: e.type})
    }, o.genRotateOp = function (e) {
        for (r.verifyOptions(e, "angle"), r.verifyParamType("angle", e.angle, "number"); e.angle < 0;) e.angle = e.angle + 360;
        e.angle = e.angle % 360;
        var t = Math.round(e.angle);
        return new i({type: e.type, rotateAngle: t})
    }, o.genBlurOp = function (e) {
        r.verifyOptions(e, "radius sigma"), r.verifyParamType("radius", e.radius, "number"), r.verifyParamMin("radius", e.radius, 1), r.verifyParamMax("radius", e.radius, 50), r.verifyParamType("sigma", e.sigma, "number"), r.verifyParamMin("sigma", e.sigma, 0);
        var t = Math.round(e.radius), n = Math.round(e.sigma);
        return new i({type: e.type, blurRadius: t, blurSigma: n})
    }, o.genCropOp = function (e) {
        r.verifyOptions(e, "x y width height"), r.verifyParamType("x", e.x, "number"), r.verifyParamMin("x", e.x, 0), r.verifyParamType("y", e.y, "number"), r.verifyParamMin("y", e.y, 0), r.verifyParamType("width", e.width, "number"), r.verifyParamMin("width", e.width, 0), r.verifyParamType("height", e.height, "number"), r.verifyParamMin("height", e.height, 0);
        var t = Math.round(e.x), n = Math.round(e.y), o = Math.round(e.width), a = Math.round(e.height);
        return new i({type: e.type, cropX: t, cropY: n, cropWidth: o, cropHeight: a})
    }, o.genThumbnailOp = function () {
        var e = {cover: "z", contain: "x", crop: "y"};
        return function (t) {
            r.verifyOptions(t, "mode"), r.verifyParamValid("mode", t.mode, Object.keys(e)), "contain" === t.mode ? r.verifyParamAtLeastPresentOne(t, "width height") : r.verifyOptions(t, "width height"), r.undef(t.width) && (t.width = 0), r.undef(t.height) && (t.height = 0), r.verifyParamType("width", t.width, "number"), r.verifyParamMin("width", t.width, 0), r.verifyParamType("height", t.height, "number"), r.verifyParamMin("height", t.height, 0);
            var n = Math.round(t.width), o = Math.round(t.height),
                a = new i({type: t.type, thumbnailMode: e[t.mode], thumbnailWidth: n, thumbnailHeight: o});
            if ("crop" === t.mode && r.notundef(t.axis)) {
                r.undef(t.axis.x) && (t.axis.x = 5), r.undef(t.axis.y) && (t.axis.y = 5), r.verifyParamMin("axis.x", t.axis.x, 0), r.verifyParamMax("axis.x", t.axis.x, 10), r.verifyParamMin("axis.y", t.axis.y, 0), r.verifyParamMax("axis.y", t.axis.y, 10);
                var s = Math.round(t.axis.x), c = Math.round(t.axis.y);
                a.thumbnailAxisX = s, a.thumbnailAxisY = c
            }
            return r.notundef(t.enlarge) && (r.verifyParamType("enlarge", t.enlarge, "boolean"), t.enlarge && (a.thumbnailEnlarge = 1)), a
        }
    }()
}, function (e, t, n) {
    function r(e) {
        o.verifyOptions(e, "type"), o.verifyParamValid("type", e.type, r.validTypes), o.merge(this, e), this.type = i[e.type]
    }

    var o = n(10), i = {stripmeta: 0, blur: 2, quality: 3, crop: 4, rotate: 5, thumbnail: 7, interlace: 9}, a = {
        0: "stripmeta",
        1: "type",
        2: "blur",
        3: "quality",
        4: "crop",
        5: "rotate",
        6: "pixel",
        7: "thumbnail",
        8: "watermark",
        9: "interlace",
        10: "tmp"
    };
    r.validTypes = Object.keys(i), r.reverse = function (e) {
        var t = o.copy(e);
        return t.type = a[t.type], t
    }, r.reverseImageOps = function (e) {
        return e.map(function (e) {
            return r.reverse(e)
        })
    }, e.exports = r
}, function (e, t, n) {
    function r(e) {
        e = "" + e;
        var t = e.indexOf("?") === -1 ? "?imageView&" : "&";
        return t
    }

    var o = n(10), i = n(9).fn;
    i.viewImageStripMeta = function (e) {
        o.verifyOptions(e, "url strip"), o.verifyParamType("strip", e.strip, "boolean");
        var t = "stripmeta=" + (e.strip ? 1 : 0), n = r(e.url);
        return e.url + n + t
    }, i.viewImageQuality = function (e) {
        o.verifyOptions(e, "url quality"), o.verifyParamType("quality", e.quality, "number"), o.verifyParamMin("quality", e.quality, 0), o.verifyParamMax("quality", e.quality, 100);
        var t = Math.round(e.quality), n = "quality=" + t, i = r(e.url);
        return e.url + i + n
    }, i.viewImageInterlace = function (e) {
        o.verifyOptions(e, "url");
        var t = "interlace=1", n = r(e.url);
        return e.url + n + t
    }, i.viewImageRotate = function (e) {
        for (o.verifyOptions(e, "url angle"), o.verifyParamType("angle", e.angle, "number"); e.angle < 0;) e.angle = e.angle + 360;
        e.angle = e.angle % 360;
        var t = Math.round(e.angle), n = "rotate=" + t, i = r(e.url);
        return e.url + i + n
    }, i.viewImageBlur = function (e) {
        o.verifyOptions(e, "url radius sigma"), o.verifyParamType("radius", e.radius, "number"), o.verifyParamMin("radius", e.radius, 1), o.verifyParamMax("radius", e.radius, 50), o.verifyParamType("sigma", e.sigma, "number"), o.verifyParamMin("sigma", e.sigma, 0);
        var t = Math.round(e.radius), n = Math.round(e.sigma), i = "blur=" + t + "x" + n, a = r(e.url);
        return e.url + a + i
    }, i.viewImageCrop = function (e) {
        o.verifyOptions(e, "url x y width height"), o.verifyParamType("x", e.x, "number"), o.verifyParamMin("x", e.x, 0), o.verifyParamType("y", e.y, "number"), o.verifyParamMin("y", e.y, 0), o.verifyParamType("width", e.width, "number"), o.verifyParamMin("width", e.width, 0), o.verifyParamType("height", e.height, "number"), o.verifyParamMin("height", e.height, 0);
        var t = Math.round(e.x), n = Math.round(e.y), i = Math.round(e.width), a = Math.round(e.height),
            s = "crop=" + t + "_" + n + "_" + i + "_" + a, c = r(e.url);
        return e.url + c + s
    }, i.viewImageThumbnail = function () {
        var e = {cover: "z", contain: "x", crop: "y"};
        return function (t) {
            o.verifyOptions(t, "url mode"), o.verifyParamValid("mode", t.mode, Object.keys(e)), "contain" === t.mode ? o.verifyParamAtLeastPresentOne(t, "width height") : o.verifyOptions(t, "width height"), o.undef(t.width) && (t.width = 0), o.undef(t.height) && (t.height = 0), o.verifyParamType("width", t.width, "number"), o.verifyParamMin("width", t.width, 0), o.verifyParamType("height", t.height, "number"), o.verifyParamMin("height", t.height, 0);
            var n = Math.round(t.width), i = Math.round(t.height), a = "thumbnail=" + n + e[t.mode] + i;
            if ("crop" === t.mode && o.notundef(t.axis)) {
                o.undef(t.axis.x) && (t.axis.x = 5), o.undef(t.axis.y) && (t.axis.y = 5), o.verifyParamMin("axis.x", t.axis.x, 0), o.verifyParamMax("axis.x", t.axis.x, 10), o.verifyParamMin("axis.y", t.axis.y, 0), o.verifyParamMax("axis.y", t.axis.y, 10);
                var s = Math.round(t.axis.x), c = Math.round(t.axis.y);
                a = a + "&axis=" + s + "_" + c
            }
            o.notundef(t.enlarge) && (o.verifyParamType("enlarge", t.enlarge, "boolean"), t.enlarge && (a += "&enlarge=1"));
            var u = r(t.url);
            return t.url + u + a
        }
    }()
}, , function (e, t, n) {
    function r(e) {
        var t = this;
        t.options = o.copy(e), t.init(), t.connect()
    }

    var o = n(10), i = n(21), a = n(17), s = n(14), c = r.fn = r.prototype;
    c.init = function () {
        var e = this;
        e.cmdTaskArray = [], e.timerMap = {}, e.cmdCallbackMap = {}, e.cmdContentMap = {}, e.initConnect(), e.reset()
    }, c.reset = function () {
        var e = this;
        e.resetConnect()
    }, c.setOptions = function (e) {
        var t = this, n = t.options, r = Object.keys(n), i = r.indexOf("account");
        i !== -1 && r.splice(i, 1), e = o.filterObj(e, r), t.options = o.merge(n, e), t.reset()
    }, c.sendCmd = function (e, t, n) {
        var r = this;
        r.heartbeat(), a.log("Protocol Command    " + e + "\t", t ? t : "");
        var o = e;
        e = r.parser.createCmd(e, t);
        var i, s = e.SER;
        t = t || {}, r.cmdContentMap[s] = t, t.single && (delete t.single, i = Object.keys(t), 1 === i.length && (r.cmdContentMap[s] = t[i[0]])), t.NOTSTORE && (i = t.NOTSTORE.split(" "), i.forEach(function (e) {
            delete t[e]
        }), delete t.NOTSTORE), n = n || t.callback, n && (r.cmdCallbackMap[s] = n), r.cmdTaskArray.push({
            cmdName: o,
            cmd: e
        }), r.startCmdTaskTimer()
    }, c.startCmdTaskTimer = function () {
        var e = this;
        e.cmdTaskTimer || (e.cmdTaskTimer = setTimeout(function () {
            var t = e.cmdTaskArray.shift();
            t && e.executeCmdTask(t), e.cmdTaskTimer = null, e.cmdTaskArray.length && e.startCmdTaskTimer()
        }, 0))
    }, c.executeCmdTask = function (e) {
        var t = this, n = e.cmdName, r = e.cmd, o = r.SER;
        t.isFrequencyControlled(n) ? (a.warn("hit frequency control " + n), t.markCallbackInvalid(o, s.newFrequencyControlError())) : t.isConnected() ? t.doSendCmd(r) : t.markCallbackInvalid(o, s.newConnectionError())
    }, c.isFrequencyControlled = function (e) {
        var t = this.frequencyControlMap && this.frequencyControlMap[e];
        if (t) {
            if (Date.now() < t.from + t.duration) return !0;
            delete this.frequencyControlMap[e]
        }
    }, c.doSendCmd = function (e) {
        var t = this, n = e.SER;
        t.timerMap[n] = setTimeout(function () {
            t.markCallbackInvalid(n, s.newTimeoutError())
        }, i.cmdTimeout), t.socket.send(JSON.stringify(e))
    }, c.getObjWithSer = function (e) {
        var t = this, n = t.cmdContentMap[e];
        return delete t.cmdContentMap[e], n && o.copy(n)
    }, c.getCallbackWithSer = function (e) {
        var t = this, n = t.cmdCallbackMap[e];
        return delete t.cmdCallbackMap[e], n
    }, c.getTimerWithSer = function (e) {
        var t = this, n = t.timerMap[e];
        return delete t.timerMap[e], n
    }, c.clearTimerWithSer = function (e) {
        var t = this, n = t.getTimerWithSer(e);
        n && clearTimeout(n)
    }, c.markCallbackInvalid = function (e, t) {
        var n = this;
        n.getObjWithSer(e), n.clearTimerWithSer(e);
        var r = n.getCallbackWithSer(e);
        if (r) {
            var o = r.options;
            window.setTimeout(function () {
                r(t || s.newUnknownError(), o)
            }, 0)
        }
    }, c.markAllCallbackInvalid = function (e) {
        var t = this;
        Object.keys(this.cmdCallbackMap).forEach(function (n) {
            t.markCallbackInvalid(n, e)
        })
    }, c.getPacketObj = function (e) {
        if (e && e.raw) {
            var t = e.raw.ser;
            if (t) return this.getObjWithSer(t)
        }
        return null
    }, c.callPacketAckCallback = function (e) {
        var t = this;
        if (e && e.raw) {
            var n = e.raw.ser;
            if (n) {
                t.clearTimerWithSer(n);
                var r = t.getCallbackWithSer(n);
                r && (e.promise ? e.promise.then(function () {
                    r(e.error, e.obj)
                }, function (t) {
                    var n = s.newDBError();
                    n.event = t, a.error("promise error", n, t), r(n, e.obj)
                }) : r(e.error, e.obj))
            }
        }
    }, c.onMessage = function (e) {
        var t = this;
        t.heartbeat();
        var n = t.parser.parseResponse(e);
        n.frequencyControlDuration && (a.warn("server frequency control " + n.cmd), t.frequencyControlMap = t.frequencyControlMap || {}, t.frequencyControlMap[n.cmd] = {
            from: +new Date,
            duration: n.frequencyControlDuration
        }), n.obj = t.getPacketObj(n), a.log("Protocol Response   " + n.cmd + "\t", n, n.error || (n.content ? n.content : ""));
        var r = "process" + o.capFirstLetter(n.service);
        t[r] && t[r].call(t, n), t.callPacketAckCallback(n)
    }, c.onMiscError = function (e, t, n) {
        e && (e.appendMessage(n), this.notifyError(e, t))
    }, c.notifyError = function (e, t) {
        var n = this;
        if (n.isConnected()) {
            var r = ["onError " + n.name, e];
            e.event && r.push(e.event), t && r.push(t), a.error.apply(a.error, r), n.options.onerror(e, t)
        }
    }, e.exports = r, n(32), n(35), n(39), n(40)
}, function (e, t, n) {
    var r = n(31).fn, o = n(14), i = n(33), a = n(34), s = n(17), c = n(21), u = n(10);
    r.initConnect = function () {
        var e = this;
        e.socket = null, e.retryCount = 0, e.connecting = !1, e.shouldReconnect = !0, e.hasNotifyDisconnected = !1
    }, r.resetConnect = function () {
        var e = this, t = e.options;
        u.notundef(t.needReconnect) ? (u.verifyParamType("needReconnect", t.needReconnect, "boolean"), e.needReconnect = t.needReconnect) : e.needReconnect = !0, u.notundef(t.reconnectionAttempts) && u.verifyParamType("reconnectionAttempts", t.reconnectionAttempts, "number"), e.reconnectionAttempts = t.reconnectionAttempts || 1 / 0, e.backoff = new i({
            min: c.reconnectionDelay,
            max: c.reconnectionDelayMax,
            jitter: c.reconnectionJitter
        })
    }, r.connect = function () {
        var e = this;
        if (!e.isConnected() && !e.connecting) if (e.connecting = !0, e.hasNotifyDisconnected = !1, e.socket) s.info("connecting"), e.socket.socket.connect(); else {
            var t = e.getNextSocketUrl();
            t ? e.connectToUrl(t) : e.refreshSocketUrl()
        }
    }, r.getNextSocketUrl = function () {
        return this.socketUrls.shift()
    }, r.isConnected = function () {
        var e = this;
        return !!e.socket && !!e.socket.socket && e.socket.socket.connected
    }, r.connectToUrl = function (e) {
        s.log("try connect to ", e);
        var t = this;
        t.socket = a.connect(e, {
            transports: ["websocket", "xhr-polling"],
            reconnect: !1,
            "force new connection": !0,
            "connect timeout": c.connectTimeout
        }), t.socket.on("connect", t.onConnect.bind(t)), t.socket.on("handshake_failed", t.onHandshakeFailed.bind(t)), t.socket.on("connect_failed", t.onConnectFailed.bind(t)), t.socket.on("error", t.onError.bind(t)), t.socket.on("message", t.onMessage.bind(t)), t.socket.on("disconnect", t.onDisconnect.bind(t))
    }, r.disconnect = function () {
        var e = this;
        e.isConnected() && (s.info("disconnecting"), e.logout())
    }, r.onConnect = function () {
        var e = this;
        e.backoff && e.backoff.reset(), e.retryCount = 0, e.connecting = !1, e.shouldReconnect = !0, e.hasNotifyDisconnected = !1, e.login()
    }, r.onHandshakeFailed = function () {
        this.onDisconnect()
    }, r.onConnectFailed = function () {
        this.notifyConnectError()
    }, r.onError = function () {
        var e = arguments[0];
        e && this.notifyError(new o(e))
    }, r.onDisconnect = function () {
        var e = this;
        e.connecting = !1, e.markAllCallbackInvalid(o.newNetworkError()), e.stopHeartbeat(), e.reconnect()
    }, r.willReconnect = function () {
        var e = this;
        return e.shouldReconnect && e.needReconnect && e.retryCount < e.reconnectionAttempts
    }, r.reconnect = function () {
        var e = this;
        if (e.willReconnect()) {
            e.socket = null, e.retryCount++;
            var t = e.backoff.duration();
            s.log("will retry after", t + "ms", ", retryCount", e.retryCount), e.options.onwillreconnect({
                retryCount: e.retryCount,
                duration: t
            }), setTimeout(function () {
                e.connect()
            }, t)
        } else e.notifyDisconnect()
    }, r.notifyConnectError = function (e) {
        var t = o.newConnectError(e);
        s.error(t), this.options.onerror(t)
    }, r.notifyDisconnect = function (e) {
        var t = this;
        t.hasNotifyDisconnected || (t.hasNotifyDisconnected = !0, t.disconnectSocket(), e = e || new o, e.retryCount = t.retryCount, e.willReconnect = t.willReconnect(), t.backoff && t.backoff.reset(), t.retryCount = 0, t.connecting = !1, s.info("onDisconnect", e), t.options.ondisconnect(e))
    }, r.disconnectSocket = function () {
        var e = this;
        if (e.isConnected()) try {
            e.socket.disconnect()
        } catch (t) {
        }
    }
}, function (e, t) {
    function n(e) {
        e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0
    }

    e.exports = n, n.prototype.duration = function () {
        var e = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
            var t = Math.random(), n = Math.floor(t * this.jitter * e);
            e = 0 == (1 & Math.floor(10 * t)) ? e - n : e + n
        }
        return 0 | Math.min(e, this.max)
    }, n.prototype.reset = function () {
        this.attempts = 0
    }, n.prototype.setMin = function (e) {
        this.ms = e
    }, n.prototype.setMax = function (e) {
        this.max = e
    }, n.prototype.setJitter = function (e) {
        this.jitter = e
    }
}, function (module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    (function (module) {
        var io = module.exports;
        !function () {
            if (function (e, t) {
                    var n = e;
                    n.version = "0.9.11", n.protocol = 1, n.transports = [], n.j = [], n.sockets = {}, n.connect = function (e, r) {
                        var o, i, a = n.util.parseUri(e);
                        t && t.location && (a.protocol = a.protocol || t.location.protocol.slice(0, -1), a.host = a.host || (t.document ? t.document.domain : t.location.hostname), a.port = a.port || t.location.port), o = n.util.uniqueUri(a);
                        var s = {
                            host: a.host,
                            secure: "https" == a.protocol,
                            port: a.port || ("https" == a.protocol ? 443 : 80),
                            query: a.query || ""
                        };
                        return n.util.merge(s, r), !s["force new connection"] && n.sockets[o] || (i = new n.Socket(s)), !s["force new connection"] && i && (n.sockets[o] = i), i = i || n.sockets[o], i.of(a.path.length > 1 ? a.path : "")
                    }
                }(module.exports, this), function (e, t) {
                    var n = e.util = {},
                        r = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
                        o = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
                    n.parseUri = function (e) {
                        for (var t = r.exec(e || ""), n = {}, i = 14; i--;) n[o[i]] = t[i] || "";
                        return n
                    }, n.uniqueUri = function (e) {
                        var n = e.protocol, r = e.host, o = e.port;
                        return "document" in t ? (r = r || document.domain, o = o || ("https" == n && "https:" !== document.location.protocol ? 443 : document.location.port)) : (r = r || "localhost", o || "https" != n || (o = 443)), (n || "http") + "://" + r + ":" + (o || 80)
                    }, n.query = function (e, t) {
                        var r = n.chunkQuery(e || ""), o = [];
                        n.merge(r, n.chunkQuery(t || ""));
                        for (var i in r) r.hasOwnProperty(i) && o.push(i + "=" + r[i]);
                        return o.length ? "?" + o.join("&") : ""
                    }, n.chunkQuery = function (e) {
                        for (var t, n = {}, r = e.split("&"), o = 0, i = r.length; o < i; ++o) t = r[o].split("="), t[0] && (n[t[0]] = t[1]);
                        return n
                    };
                    var i = !1;
                    n.load = function (e) {
                        return "document" in t && "complete" === document.readyState || i ? e() : void n.on(t, "load", e, !1)
                    }, n.on = function (e, t, n, r) {
                        e.attachEvent ? e.attachEvent("on" + t, n) : e.addEventListener && e.addEventListener(t, n, r)
                    }, n.request = function (e) {
                        if (e && "undefined" != typeof XDomainRequest && !n.ua.hasCORS) return new XDomainRequest;
                        if ("undefined" != typeof XMLHttpRequest && (!e || n.ua.hasCORS)) return new XMLHttpRequest;
                        if (!e) try {
                            return new (window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                        } catch (t) {
                        }
                        return null
                    }, "undefined" != typeof window && n.load(function () {
                        i = !0
                    }), n.defer = function (e) {
                        return n.ua.webkit && "undefined" == typeof importScripts ? void n.load(function () {
                            setTimeout(e, 100)
                        }) : e()
                    }, n.merge = function (e, t, r, o) {
                        var i, a = o || [], s = "undefined" == typeof r ? 2 : r;
                        for (i in t) t.hasOwnProperty(i) && n.indexOf(a, i) < 0 && ("object" == typeof e[i] && s ? n.merge(e[i], t[i], s - 1, a) : (e[i] = t[i], a.push(t[i])));
                        return e
                    }, n.mixin = function (e, t) {
                        n.merge(e.prototype, t.prototype)
                    }, n.inherit = function (e, t) {
                        function n() {
                        }

                        n.prototype = t.prototype, e.prototype = new n
                    }, n.isArray = Array.isArray || function (e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    }, n.intersect = function (e, t) {
                        for (var r = [], o = e.length > t.length ? e : t, i = e.length > t.length ? t : e, a = 0, s = i.length; a < s; a++) ~n.indexOf(o, i[a]) && r.push(i[a]);
                        return r
                    }, n.indexOf = function (e, t, n) {
                        for (var r = e.length, n = n < 0 ? n + r < 0 ? 0 : n + r : n || 0; n < r && e[n] !== t; n++) ;
                        return r <= n ? -1 : n
                    }, n.toArray = function (e) {
                        for (var t = [], n = 0, r = e.length; n < r; n++) t.push(e[n]);
                        return t
                    }, n.ua = {}, n.ua.hasCORS = "undefined" != typeof XMLHttpRequest && function () {
                        try {
                            var e = new XMLHttpRequest
                        } catch (t) {
                            return !1
                        }
                        return void 0 != e.withCredentials
                    }(), n.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent), n.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)
                }("undefined" != typeof io ? io : module.exports, this), function (e, t) {
                    function n() {
                    }

                    e.EventEmitter = n, n.prototype.on = function (e, n) {
                        return this.$events || (this.$events = {}), this.$events[e] ? t.util.isArray(this.$events[e]) ? this.$events[e].push(n) : this.$events[e] = [this.$events[e], n] : this.$events[e] = n, this
                    }, n.prototype.addListener = n.prototype.on, n.prototype.once = function (e, t) {
                        function n() {
                            r.removeListener(e, n), t.apply(this, arguments)
                        }

                        var r = this;
                        return n.listener = t, this.on(e, n), this
                    }, n.prototype.removeListener = function (e, n) {
                        if (this.$events && this.$events[e]) {
                            var r = this.$events[e];
                            if (t.util.isArray(r)) {
                                for (var o = -1, i = 0, a = r.length; i < a; i++) if (r[i] === n || r[i].listener && r[i].listener === n) {
                                    o = i;
                                    break
                                }
                                if (o < 0) return this;
                                r.splice(o, 1), r.length || delete this.$events[e]
                            } else (r === n || r.listener && r.listener === n) && delete this.$events[e]
                        }
                        return this
                    }, n.prototype.removeAllListeners = function (e) {
                        return void 0 === e ? (this.$events = {}, this) : (this.$events && this.$events[e] && (this.$events[e] = null), this)
                    }, n.prototype.listeners = function (e) {
                        return this.$events || (this.$events = {}), this.$events[e] || (this.$events[e] = []), t.util.isArray(this.$events[e]) || (this.$events[e] = [this.$events[e]]), this.$events[e]
                    }, n.prototype.emit = function (e) {
                        if (!this.$events) return !1;
                        var n = this.$events[e];
                        if (!n) return !1;
                        var r = Array.prototype.slice.call(arguments, 1);
                        if ("function" == typeof n) n.apply(this, r); else {
                            if (!t.util.isArray(n)) return !1;
                            for (var o = n.slice(), i = 0, a = o.length; i < a; i++) o[i].apply(this, r)
                        }
                        return !0
                    }
                }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports), function (exports, nativeJSON) {
                    "use strict";

                    function f(e) {
                        return e < 10 ? "0" + e : e
                    }

                    function date(e, t) {
                        return isFinite(e.valueOf()) ? e.getUTCFullYear() + "-" + f(e.getUTCMonth() + 1) + "-" + f(e.getUTCDate()) + "T" + f(e.getUTCHours()) + ":" + f(e.getUTCMinutes()) + ":" + f(e.getUTCSeconds()) + "Z" : null
                    }

                    function quote(e) {
                        return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function (e) {
                            var t = meta[e];
                            return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                        }) + '"' : '"' + e + '"'
                    }

                    function str(e, t) {
                        var n, r, o, i, a, s = gap, c = t[e];
                        switch (c instanceof Date && (c = date(e)), "function" == typeof rep && (c = rep.call(t, e, c)), typeof c) {
                            case"string":
                                return quote(c);
                            case"number":
                                return isFinite(c) ? String(c) : "null";
                            case"boolean":
                            case"null":
                                return String(c);
                            case"object":
                                if (!c) return "null";
                                if (gap += indent, a = [], "[object Array]" === Object.prototype.toString.apply(c)) {
                                    for (i = c.length, n = 0; n < i; n += 1) a[n] = str(n, c) || "null";
                                    return o = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + s + "]" : "[" + a.join(",") + "]", gap = s, o
                                }
                                if (rep && "object" == typeof rep) for (i = rep.length, n = 0; n < i; n += 1) "string" == typeof rep[n] && (r = rep[n], o = str(r, c), o && a.push(quote(r) + (gap ? ": " : ":") + o)); else for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (o = str(r, c), o && a.push(quote(r) + (gap ? ": " : ":") + o));
                                return o = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + s + "}" : "{" + a.join(",") + "}", gap = s, o
                        }
                    }

                    if (nativeJSON && nativeJSON.parse) return exports.JSON = {
                        parse: nativeJSON.parse,
                        stringify: nativeJSON.stringify
                    };
                    var JSON = exports.JSON = {},
                        cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                        gap, indent, meta = {
                            "\b": "\\b",
                            "\t": "\\t",
                            "\n": "\\n",
                            "\f": "\\f",
                            "\r": "\\r",
                            '"': '\\"',
                            "\\": "\\\\"
                        }, rep;
                    JSON.stringify = function (e, t, n) {
                        var r;
                        if (gap = "", indent = "", "number" == typeof n) for (r = 0; r < n; r += 1) indent += " "; else "string" == typeof n && (indent = n);
                        if (rep = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw new Error("JSON.stringify");
                        return str("", {"": e})
                    }, JSON.parse = function (text, reviver) {
                        function walk(e, t) {
                            var n, r, o = e[t];
                            if (o && "object" == typeof o) for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (r = walk(o, n), void 0 !== r ? o[n] = r : delete o[n]);
                            return reviver.call(e, t, o)
                        }

                        var j;
                        if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (e) {
                                return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                            })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({"": j}, "") : j;
                        throw new SyntaxError("JSON.parse")
                    }
                }("undefined" != typeof io ? io : module.exports, "undefined" != typeof JSON ? JSON : void 0), function (e, t) {
                    var n = e.parser = {},
                        r = n.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"],
                        o = n.reasons = ["transport not supported", "client not handshaken", "unauthorized"],
                        i = n.advice = ["reconnect"], a = t.JSON, s = t.util.indexOf;
                    n.encodePacket = function (e) {
                        var t = s(r, e.type), n = e.id || "", c = e.endpoint || "", u = e.ack, l = null;
                        switch (e.type) {
                            case"error":
                                var f = e.reason ? s(o, e.reason) : "", p = e.advice ? s(i, e.advice) : "";
                                "" === f && "" === p || (l = f + ("" !== p ? "+" + p : ""));
                                break;
                            case"message":
                                "" !== e.data && (l = e.data);
                                break;
                            case"event":
                                var d = {name: e.name};
                                e.args && e.args.length && (d.args = e.args), l = a.stringify(d);
                                break;
                            case"json":
                                l = a.stringify(e.data);
                                break;
                            case"connect":
                                e.qs && (l = e.qs);
                                break;
                            case"ack":
                                l = e.ackId + (e.args && e.args.length ? "+" + a.stringify(e.args) : "")
                        }
                        var h = [t, n + ("data" == u ? "+" : ""), c];
                        return null !== l && void 0 !== l && h.push(l), h.join(":")
                    }, n.encodePayload = function (e) {
                        var t = "";
                        if (1 == e.length) return e[0];
                        for (var n = 0, r = e.length; n < r; n++) {
                            var o = e[n];
                            t += "�" + o.length + "�" + e[n]
                        }
                        return t
                    };
                    var c = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
                    n.decodePacket = function (e) {
                        var t = e.match(c);
                        if (!t) return {};
                        var n = t[2] || "", e = t[5] || "", s = {type: r[t[1]], endpoint: t[4] || ""};
                        switch (n && (s.id = n, t[3] ? s.ack = "data" : s.ack = !0), s.type) {
                            case"error":
                                var t = e.split("+");
                                s.reason = o[t[0]] || "", s.advice = i[t[1]] || "";
                                break;
                            case"message":
                                s.data = e || "";
                                break;
                            case"event":
                                try {
                                    var u = a.parse(e);
                                    s.name = u.name, s.args = u.args
                                } catch (l) {
                                }
                                s.args = s.args || [];
                                break;
                            case"json":
                                try {
                                    s.data = a.parse(e)
                                } catch (l) {
                                }
                                break;
                            case"connect":
                                s.qs = e || "";
                                break;
                            case"ack":
                                var t = e.match(/^([0-9]+)(\+)?(.*)/);
                                if (t && (s.ackId = t[1], s.args = [], t[3])) try {
                                    s.args = t[3] ? a.parse(t[3]) : []
                                } catch (l) {
                                }
                                break;
                            case"disconnect":
                            case"heartbeat":
                        }
                        return s
                    }, n.decodePayload = function (e) {
                        var t = function (e, t) {
                            for (var n = 0, r = e; r < t.length; r++) {
                                if ("�" == t.charAt(r)) return n;
                                n++
                            }
                            return n
                        };
                        if ("�" == e.charAt(0)) {
                            for (var r = [], o = 1, i = ""; o < e.length; o++) if ("�" == e.charAt(o)) {
                                var a = e.substr(o + 1).substr(0, i);
                                if ("�" != e.charAt(o + 1 + Number(i)) && o + 1 + Number(i) != e.length) {
                                    var s = Number(i);
                                    l = t(o + s + 1, e), a = e.substr(o + 1).substr(0, s + l), o += l
                                }
                                r.push(n.decodePacket(a)), o += Number(i) + 1, i = ""
                            } else i += e.charAt(o);
                            return r
                        }
                        return [n.decodePacket(e)]
                    }
                }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports), function (e, t) {
                    function n(e, t) {
                        this.socket = e, this.sessid = t
                    }

                    e.Transport = n, t.util.mixin(n, t.EventEmitter), n.prototype.heartbeats = function () {
                        return !0
                    }, n.prototype.onData = function (e) {
                        if (this !== this.socket.transport) return this;
                        if (this.clearCloseTimeout(), (this.socket.connected || this.socket.connecting || this.socket.reconnecting) && this.setCloseTimeout(), "" !== e) {
                            var n = t.parser.decodePayload(e);
                            if (n && n.length) for (var r = 0, o = n.length; r < o; r++) this.onPacket(n[r])
                        }
                        return this
                    }, n.prototype.onPacket = function (e) {
                        return this.socket.setHeartbeatTimeout(), "heartbeat" == e.type ? this.onHeartbeat() : ("connect" == e.type && "" == e.endpoint && this.onConnect(), "error" == e.type && "reconnect" == e.advice && (this.isOpen = !1), this.socket.onPacket(e), this)
                    }, n.prototype.setCloseTimeout = function () {
                        if (!this.closeTimeout) {
                            var e = this;
                            this.closeTimeout = setTimeout(function () {
                                e.onDisconnect()
                            }, this.socket.closeTimeout)
                        }
                    }, n.prototype.onDisconnect = function () {
                        return this.isOpen && this.close(), this.clearTimeouts(), this.socket.onDisconnect(), this
                    }, n.prototype.onConnect = function () {
                        return this.socket.onConnect(), this
                    }, n.prototype.clearCloseTimeout = function () {
                        this.closeTimeout && (clearTimeout(this.closeTimeout), this.closeTimeout = null)
                    }, n.prototype.clearTimeouts = function () {
                        this.clearCloseTimeout(), this.reopenTimeout && clearTimeout(this.reopenTimeout)
                    }, n.prototype.packet = function (e) {
                        this.send(t.parser.encodePacket(e))
                    }, n.prototype.onHeartbeat = function (e) {
                        this.packet({type: "heartbeat"})
                    }, n.prototype.onOpen = function () {
                        this.isOpen = !0, this.clearCloseTimeout(), this.socket.onOpen()
                    }, n.prototype.onClose = function () {
                        this.isOpen = !1, this.socket.onClose(), this.onDisconnect()
                    }, n.prototype.prepareUrl = function () {
                        var e = this.socket.options;
                        return this.scheme() + "://" + e.host + ":" + e.port + "/" + e.resource + "/" + t.protocol + "/" + this.name + "/" + this.sessid
                    }, n.prototype.ready = function (e, t) {
                        t.call(this)
                    }
                }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports), function (e, t, n) {
                    function r(e) {
                        if (this.options = {
                                port: 80,
                                secure: !1,
                                document: "document" in n && document,
                                resource: "socket.io",
                                transports: t.transports,
                                "connect timeout": 1e4,
                                "try multiple transports": !0,
                                reconnect: !0,
                                "reconnection delay": 500,
                                "reconnection limit": 1 / 0,
                                "reopen delay": 3e3,
                                "max reconnection attempts": 10,
                                "sync disconnect on unload": !1,
                                "auto connect": !0,
                                "flash policy port": 10843,
                                manualFlush: !1
                            }, t.util.merge(this.options, e), this.connected = !1, this.open = !1, this.connecting = !1, this.reconnecting = !1, this.namespaces = {}, this.buffer = [], this.doBuffer = !1, this.options["sync disconnect on unload"] && (!this.isXDomain() || t.util.ua.hasCORS)) {
                            var r = this;
                            t.util.on(n, "beforeunload", function () {
                                r.disconnectSync()
                            }, !1)
                        }
                        this.options["auto connect"] && this.connect()
                    }

                    function o() {
                    }

                    e.Socket = r, t.util.mixin(r, t.EventEmitter), r.prototype.of = function (e) {
                        return this.namespaces[e] || (this.namespaces[e] = new t.SocketNamespace(this, e), "" !== e && this.namespaces[e].packet({type: "connect"})), this.namespaces[e]
                    }, r.prototype.publish = function () {
                        this.emit.apply(this, arguments);
                        var e;
                        for (var t in this.namespaces) this.namespaces.hasOwnProperty(t) && (e = this.of(t), e.$emit.apply(e, arguments))
                    }, r.prototype.handshake = function (e) {
                        function n(t) {
                            t instanceof Error ? (r.connecting = !1, r.onError(t.message)) : e.apply(null, t.split(":"))
                        }

                        var r = this, i = this.options,
                            a = ["http" + (i.secure ? "s" : "") + ":/", i.host + ":" + i.port, i.resource, t.protocol, t.util.query(this.options.query, "t=" + +new Date)].join("/");
                        if (this.isXDomain() && !t.util.ua.hasCORS) {
                            var s = document.getElementsByTagName("script")[0], c = document.createElement("script");
                            c.src = a + "&jsonp=" + t.j.length, c.onreadystatechange = function () {
                                "loaded" == this.readyState && c.parentNode && (c.parentNode.removeChild(c), r.connecting = !1, !r.reconnecting && r.onError("Server down or port not open"), r.publish("handshake_failed"))
                            }, s.parentNode.insertBefore(c, s), t.j.push(function (e) {
                                n(e), c.parentNode.removeChild(c)
                            })
                        } else {
                            var u = t.util.request();
                            u.open("GET", a, !0), this.isXDomain() && (u.withCredentials = !0), u.onreadystatechange = function () {
                                4 == u.readyState && (u.onreadystatechange = o, 200 == u.status ? n(u.responseText) : 403 == u.status ? (r.onError(u.responseText), r.publish("handshake_failed")) : (r.connecting = !1, !r.reconnecting && r.onError(u.responseText), r.publish("handshake_failed")))
                            }, u.send(null)
                        }
                    }, r.prototype.getTransport = function (e) {
                        for (var n, r = e || this.transports, o = 0; n = r[o]; o++) if (t.Transport[n] && t.Transport[n].check(this) && (!this.isXDomain() || t.Transport[n].xdomainCheck(this))) {
                            var i = new t.Transport[n](this, this.sessionid);
                            return i
                        }
                        return null
                    }, r.prototype.connect = function (e) {
                        if (this.connecting) return this;
                        var n = this;
                        return n.connecting = !0, this.handshake(function (r, o, i, a) {
                            n.sessionid = r, n.closeTimeout = 1e3 * i, n.heartbeatTimeout = 1e3 * o, n.transports || (n.transports = n.origTransports = a ? t.util.intersect(a.split(","), n.options.transports) : n.options.transports), n.setHeartbeatTimeout(), n.once("connect", function () {
                                clearTimeout(n.connectTimeoutTimer), n.connectTimeoutTimer = null, e && "function" == typeof e && e()
                            }), n.doConnect()
                        }), this
                    }, r.prototype.doConnect = function () {
                        var e = this;
                        return e.transport && e.transport.clearTimeouts(), e.transport = e.getTransport(e.transports), e.transport ? void e.transport.ready(e, function () {
                            e.connecting = !0, e.publish("connecting", e.transport.name), e.transport.open(), e.options["connect timeout"] && (e.connectTimeoutTimer && clearTimeout(e.connectTimeoutTimer), e.connectTimeoutTimer = setTimeout(e.tryNextTransport.bind(e), e.options["connect timeout"]))
                        }) : e.publish("connect_failed")
                    }, r.prototype.tryNextTransport = function () {
                        var e = this;
                        if (!e.connected && (e.connecting = !1, e.options["try multiple transports"])) {
                            for (var t = e.transports; t.length > 0 && t.splice(0, 1)[0] != e.transport.name;) ;
                            t.length ? e.doConnect() : e.publish("connect_failed")
                        }
                    }, r.prototype.setHeartbeatTimeout = function () {
                        if (clearTimeout(this.heartbeatTimeoutTimer), !this.transport || this.transport.heartbeats()) {
                            var e = this;
                            this.heartbeatTimeoutTimer = setTimeout(function () {
                                e.transport && e.transport.onClose()
                            }, this.heartbeatTimeout)
                        }
                    }, r.prototype.packet = function (e) {
                        return this.connected && !this.doBuffer ? this.transport.packet(e) : this.buffer.push(e), this
                    }, r.prototype.setBuffer = function (e) {
                        this.doBuffer = e, !e && this.connected && this.buffer.length && (this.options.manualFlush || this.flushBuffer())
                    }, r.prototype.flushBuffer = function () {
                        this.transport.payload(this.buffer), this.buffer = []
                    }, r.prototype.disconnect = function () {
                        return (this.connected || this.connecting) && (this.open && this.of("").packet({type: "disconnect"}), this.onDisconnect("booted")), this
                    }, r.prototype.disconnectSync = function () {
                        var e = t.util.request(),
                            n = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, t.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
                        e.open("GET", n, !1), e.send(null), this.onDisconnect("booted")
                    }, r.prototype.isXDomain = function () {
                        var e = n.location.port || ("https:" == n.location.protocol ? 443 : 80);
                        return this.options.host !== n.location.hostname || this.options.port != e
                    }, r.prototype.onConnect = function () {
                        this.connected || (this.connected = !0, this.connecting = !1, this.doBuffer || this.setBuffer(!1), this.emit("connect"))
                    }, r.prototype.onOpen = function () {
                        this.open = !0
                    }, r.prototype.onClose = function () {
                        this.open = !1, clearTimeout(this.heartbeatTimeoutTimer)
                    }, r.prototype.onPacket = function (e) {
                        this.of(e.endpoint).onPacket(e)
                    }, r.prototype.onError = function (e) {
                        e && e.advice && "reconnect" === e.advice && (this.connected || this.connecting) && (this.disconnect(), this.options.reconnect && this.reconnect()), this.publish("error", e && e.reason ? e.reason : e)
                    }, r.prototype.onDisconnect = function (e) {
                        var t = this.connected, n = this.connecting;
                        this.connected = !1, this.connecting = !1, this.open = !1, (t || n) && (this.transport.close(), this.transport.clearTimeouts(), t && (this.publish("disconnect", e), "booted" != e && this.options.reconnect && !this.reconnecting && this.reconnect()), n && this.tryNextTransport())
                    }, r.prototype.reconnect = function () {
                        function e() {
                            if (n.connected) {
                                for (var e in n.namespaces) n.namespaces.hasOwnProperty(e) && "" !== e && n.namespaces[e].packet({type: "connect"});
                                n.publish("reconnect", n.transport.name, n.reconnectionAttempts)
                            }
                            clearTimeout(n.reconnectionTimer), n.removeListener("connect_failed", t), n.removeListener("connect", t), n.reconnecting = !1, delete n.reconnectionAttempts, delete n.reconnectionDelay, delete n.reconnectionTimer, delete n.redoTransports, n.options["try multiple transports"] = o
                        }

                        function t() {
                            if (n.reconnecting) return n.connected ? e() : n.connecting && n.reconnecting ? n.reconnectionTimer = setTimeout(t, 1e3) : void(n.reconnectionAttempts++ >= r ? n.redoTransports ? (n.publish("reconnect_failed"), e()) : (n.on("connect_failed", t), n.options["try multiple transports"] = !0, n.transports = n.origTransports, n.transport = n.getTransport(), n.redoTransports = !0, n.connect()) : (n.reconnectionDelay < i && (n.reconnectionDelay *= 2), n.connect(), n.publish("reconnecting", n.reconnectionDelay, n.reconnectionAttempts), n.reconnectionTimer = setTimeout(t, n.reconnectionDelay)))
                        }

                        this.reconnecting = !0, this.reconnectionAttempts = 0, this.reconnectionDelay = this.options["reconnection delay"];
                        var n = this, r = this.options["max reconnection attempts"],
                            o = this.options["try multiple transports"], i = this.options["reconnection limit"];
                        this.options["try multiple transports"] = !1, this.reconnectionTimer = setTimeout(t, this.reconnectionDelay), this.on("connect", t)
                    }
                }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports, this), function (e, t) {
                    function n(e, t) {
                        this.socket = e, this.name = t || "", this.flags = {}, this.json = new r(this, "json"), this.ackPackets = 0, this.acks = {}
                    }

                    function r(e, t) {
                        this.namespace = e, this.name = t
                    }

                    e.SocketNamespace = n, t.util.mixin(n, t.EventEmitter), n.prototype.$emit = t.EventEmitter.prototype.emit, n.prototype.of = function () {
                        return this.socket.of.apply(this.socket, arguments)
                    }, n.prototype.packet = function (e) {
                        return e.endpoint = this.name, this.socket.packet(e), this.flags = {}, this
                    }, n.prototype.send = function (e, t) {
                        var n = {type: this.flags.json ? "json" : "message", data: e};
                        return "function" == typeof t && (n.id = ++this.ackPackets, n.ack = !0, this.acks[n.id] = t), this.packet(n)
                    }, n.prototype.emit = function (e) {
                        var t = Array.prototype.slice.call(arguments, 1), n = t[t.length - 1],
                            r = {type: "event", name: e};
                        return "function" == typeof n && (r.id = ++this.ackPackets, r.ack = "data", this.acks[r.id] = n, t = t.slice(0, t.length - 1)), r.args = t, this.packet(r)
                    }, n.prototype.disconnect = function () {
                        return "" === this.name ? this.socket.disconnect() : (this.packet({type: "disconnect"}), this.$emit("disconnect")), this
                    }, n.prototype.onPacket = function (e) {
                        function n() {
                            r.packet({type: "ack", args: t.util.toArray(arguments), ackId: e.id})
                        }

                        var r = this;
                        switch (e.type) {
                            case"connect":
                                this.$emit("connect");
                                break;
                            case"disconnect":
                                "" === this.name ? this.socket.onDisconnect(e.reason || "booted") : this.$emit("disconnect", e.reason);
                                break;
                            case"message":
                            case"json":
                                var o = ["message", e.data];
                                "data" == e.ack ? o.push(n) : e.ack && this.packet({
                                    type: "ack",
                                    ackId: e.id
                                }), this.$emit.apply(this, o);
                                break;
                            case"event":
                                var o = [e.name].concat(e.args);
                                "data" == e.ack && o.push(n), this.$emit.apply(this, o);
                                break;
                            case"ack":
                                this.acks[e.ackId] && (this.acks[e.ackId].apply(this, e.args), delete this.acks[e.ackId]);
                                break;
                            case"error":
                                e.advice ? this.socket.onError(e) : "unauthorized" == e.reason ? this.$emit("connect_failed", e.reason) : this.$emit("error", e.reason)
                        }
                    }, r.prototype.send = function () {
                        this.namespace.flags[this.name] = !0, this.namespace.send.apply(this.namespace, arguments)
                    }, r.prototype.emit = function () {
                        this.namespace.flags[this.name] = !0, this.namespace.emit.apply(this.namespace, arguments)
                    }
                }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports), function (e, t, n) {
                    function r(e) {
                        t.Transport.apply(this, arguments)
                    }

                    e.websocket = r, t.util.inherit(r, t.Transport), r.prototype.name = "websocket", r.prototype.open = function () {
                        var e, r = t.util.query(this.socket.options.query), o = this;
                        return e || (e = n.MozWebSocket || n.WebSocket), this.websocket = new e(this.prepareUrl() + r), this.websocket.onopen = function () {
                            o.onOpen(), o.socket.setBuffer(!1)
                        }, this.websocket.onmessage = function (e) {
                            o.onData(e.data)
                        }, this.websocket.onclose = function () {
                            o.onClose(), o.socket.setBuffer(!0)
                        }, this.websocket.onerror = function (e) {
                            o.onError(e)
                        }, this
                    }, t.util.ua.iDevice ? r.prototype.send = function (e) {
                        var t = this;
                        return setTimeout(function () {
                            t.websocket.send(e)
                        }, 0), this
                    } : r.prototype.send = function (e) {
                        return this.websocket.send(e), this
                    }, r.prototype.payload = function (e) {
                        for (var t = 0, n = e.length; t < n; t++) this.packet(e[t]);
                        return this
                    }, r.prototype.close = function () {
                        return this.websocket.close(), this
                    }, r.prototype.onError = function (e) {
                        this.socket.onError(e)
                    }, r.prototype.scheme = function () {
                        return this.socket.options.secure ? "wss" : "ws"
                    }, r.check = function () {
                        return "WebSocket" in n && !("__addTask" in WebSocket) || "MozWebSocket" in n
                    }, r.xdomainCheck = function () {
                        return !0
                    }, t.transports.push("websocket")
                }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this), function (e, t) {
                    function n() {
                        t.Transport.websocket.apply(this, arguments)
                    }

                    e.flashsocket = n, t.util.inherit(n, t.Transport.websocket), n.prototype.name = "flashsocket", n.prototype.open = function () {
                        var e = this, n = arguments;
                        return WebSocket.__addTask(function () {
                            t.Transport.websocket.prototype.open.apply(e, n)
                        }), this
                    }, n.prototype.send = function () {
                        var e = this, n = arguments;
                        return WebSocket.__addTask(function () {
                            t.Transport.websocket.prototype.send.apply(e, n)
                        }), this
                    }, n.prototype.close = function () {
                        return WebSocket.__tasks.length = 0, t.Transport.websocket.prototype.close.call(this), this
                    }, n.prototype.ready = function (e, r) {
                        function o() {
                            var t = e.options, o = t["flash policy port"],
                                a = ["http" + (t.secure ? "s" : "") + ":/", t.host + ":" + t.port, t.resource, "static/flashsocket", "WebSocketMain" + (e.isXDomain() ? "Insecure" : "") + ".swf"];
                            n.loaded || ("undefined" == typeof WEB_SOCKET_SWF_LOCATION && (WEB_SOCKET_SWF_LOCATION = a.join("/")), 843 !== o && WebSocket.loadFlashPolicyFile("xmlsocket://" + t.host + ":" + o), WebSocket.__initialize(), n.loaded = !0), r.call(i)
                        }

                        var i = this;
                        return document.body ? o() : void t.util.load(o)
                    }, n.check = function () {
                        return !!("undefined" != typeof WebSocket && "__initialize" in WebSocket && swfobject) && swfobject.getFlashPlayerVersion().major >= 10
                    }, n.xdomainCheck = function () {
                        return !0
                    }, "undefined" != typeof window && (WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = !0), t.transports.push("flashsocket")
                }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports), "undefined" != typeof window) var swfobject = function () {
                function e() {
                    if (!$) {
                        try {
                            var e = F.getElementsByTagName("body")[0].appendChild(v("span"));
                            e.parentNode.removeChild(e)
                        } catch (t) {
                            return
                        }
                        $ = !0;
                        for (var n = W.length, r = 0; r < n; r++) W[r]()
                    }
                }

                function t(e) {
                    $ ? e() : W[W.length] = e
                }

                function n(e) {
                    if (typeof N.addEventListener != M) N.addEventListener("load", e, !1); else if (typeof F.addEventListener != M) F.addEventListener("load", e, !1); else if (typeof N.attachEvent != M) m(N, "onload", e); else if ("function" == typeof N.onload) {
                        var t = N.onload;
                        N.onload = function () {
                            t(), e()
                        }
                    } else N.onload = e
                }

                function r() {
                    L ? o() : i()
                }

                function o() {
                    var e = F.getElementsByTagName("body")[0], t = v(C);
                    t.setAttribute("type", I);
                    var n = e.appendChild(t);
                    if (n) {
                        var r = 0;
                        !function () {
                            if (typeof n.GetVariable != M) {
                                var o = n.GetVariable("$version");
                                o && (o = o.split(" ")[1].split(","), J.pv = [parseInt(o[0], 10), parseInt(o[1], 10), parseInt(o[2], 10)])
                            } else if (r < 10) return r++, void setTimeout(arguments.callee, 10);
                            e.removeChild(t), n = null, i()
                        }()
                    } else i()
                }

                function i() {
                    var e = B.length;
                    if (e > 0) for (var t = 0; t < e; t++) {
                        var n = B[t].id, r = B[t].callbackFn, o = {success: !1, id: n};
                        if (J.pv[0] > 0) {
                            var i = y(n);
                            if (i) if (!g(B[t].swfVersion) || J.wk && J.wk < 312) if (B[t].expressInstall && s()) {
                                var l = {};
                                l.data = B[t].expressInstall, l.width = i.getAttribute("width") || "0", l.height = i.getAttribute("height") || "0", i.getAttribute("class") && (l.styleclass = i.getAttribute("class")), i.getAttribute("align") && (l.align = i.getAttribute("align"));
                                for (var f = {}, p = i.getElementsByTagName("param"), d = p.length, h = 0; h < d; h++) "movie" != p[h].getAttribute("name").toLowerCase() && (f[p[h].getAttribute("name")] = p[h].getAttribute("value"));
                                c(l, f, n, r)
                            } else u(i), r && r(o); else w(n, !0), r && (o.success = !0, o.ref = a(n), r(o))
                        } else if (w(n, !0), r) {
                            var v = a(n);
                            v && typeof v.SetVariable != M && (o.success = !0, o.ref = v), r(o)
                        }
                    }
                }

                function a(e) {
                    var t = null, n = y(e);
                    if (n && "OBJECT" == n.nodeName) if (typeof n.SetVariable != M) t = n; else {
                        var r = n.getElementsByTagName(C)[0];
                        r && (t = r)
                    }
                    return t
                }

                function s() {
                    return !H && g("6.0.65") && (J.win || J.mac) && !(J.wk && J.wk < 312)
                }

                function c(e, t, n, r) {
                    H = !0, _ = r || null, T = {success: !1, id: n};
                    var o = y(n);
                    if (o) {
                        "OBJECT" == o.nodeName ? (k = l(o), S = null) : (k = o, S = n), e.id = A, (typeof e.width == M || !/%$/.test(e.width) && parseInt(e.width, 10) < 310) && (e.width = "310"), (typeof e.height == M || !/%$/.test(e.height) && parseInt(e.height, 10) < 137) && (e.height = "137"), F.title = F.title.slice(0, 47) + " - Flash Player Installation";
                        var i = J.ie && J.win ? ["Active"].concat("").join("X") : "PlugIn",
                            a = "MMredirectURL=" + N.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + i + "&MMdoctitle=" + F.title;
                        if (typeof t.flashvars != M ? t.flashvars += "&" + a : t.flashvars = a, J.ie && J.win && 4 != o.readyState) {
                            var s = v("div");
                            n += "SWFObjectNew", s.setAttribute("id", n), o.parentNode.insertBefore(s, o), o.style.display = "none", function () {
                                4 == o.readyState ? o.parentNode.removeChild(o) : setTimeout(arguments.callee, 10)
                            }()
                        }
                        f(e, t, n)
                    }
                }

                function u(e) {
                    if (J.ie && J.win && 4 != e.readyState) {
                        var t = v("div");
                        e.parentNode.insertBefore(t, e), t.parentNode.replaceChild(l(e), t), e.style.display = "none", function () {
                            4 == e.readyState ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10)
                        }()
                    } else e.parentNode.replaceChild(l(e), e)
                }

                function l(e) {
                    var t = v("div");
                    if (J.win && J.ie) t.innerHTML = e.innerHTML; else {
                        var n = e.getElementsByTagName(C)[0];
                        if (n) {
                            var r = n.childNodes;
                            if (r) for (var o = r.length, i = 0; i < o; i++) 1 == r[i].nodeType && "PARAM" == r[i].nodeName || 8 == r[i].nodeType || t.appendChild(r[i].cloneNode(!0))
                        }
                    }
                    return t
                }

                function f(e, t, n) {
                    var r, o = y(n);
                    if (J.wk && J.wk < 312) return r;
                    if (o) if (typeof e.id == M && (e.id = n), J.ie && J.win) {
                        var i = "";
                        for (var a in e) e[a] != Object.prototype[a] && ("data" == a.toLowerCase() ? t.movie = e[a] : "styleclass" == a.toLowerCase() ? i += ' class="' + e[a] + '"' : "classid" != a.toLowerCase() && (i += " " + a + '="' + e[a] + '"'));
                        var s = "";
                        for (var c in t) t[c] != Object.prototype[c] && (s += '<param name="' + c + '" value="' + t[c] + '" />');
                        o.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + i + ">" + s + "</object>", U[U.length] = e.id, r = y(e.id)
                    } else {
                        var u = v(C);
                        u.setAttribute("type", I);
                        for (var l in e) e[l] != Object.prototype[l] && ("styleclass" == l.toLowerCase() ? u.setAttribute("class", e[l]) : "classid" != l.toLowerCase() && u.setAttribute(l, e[l]));
                        for (var f in t) t[f] != Object.prototype[f] && "movie" != f.toLowerCase() && p(u, f, t[f]);
                        o.parentNode.replaceChild(u, o), r = u
                    }
                    return r
                }

                function p(e, t, n) {
                    var r = v("param");
                    r.setAttribute("name", t), r.setAttribute("value", n), e.appendChild(r)
                }

                function d(e) {
                    var t = y(e);
                    t && "OBJECT" == t.nodeName && (J.ie && J.win ? (t.style.display = "none", function () {
                        4 == t.readyState ? h(e) : setTimeout(arguments.callee, 10)
                    }()) : t.parentNode.removeChild(t))
                }

                function h(e) {
                    var t = y(e);
                    if (t) {
                        for (var n in t) "function" == typeof t[n] && (t[n] = null);
                        t.parentNode.removeChild(t)
                    }
                }

                function y(e) {
                    var t = null;
                    try {
                        t = F.getElementById(e)
                    } catch (n) {
                    }
                    return t
                }

                function v(e) {
                    return F.createElement(e)
                }

                function m(e, t, n) {
                    e.attachEvent(t, n), q[q.length] = [e, t, n]
                }

                function g(e) {
                    var t = J.pv, n = e.split(".");
                    return n[0] = parseInt(n[0], 10), n[1] = parseInt(n[1], 10) || 0, n[2] = parseInt(n[2], 10) || 0, t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2]
                }

                function b(e, t, n, r) {
                    if (!J.ie || !J.mac) {
                        var o = F.getElementsByTagName("head")[0];
                        if (o) {
                            var i = n && "string" == typeof n ? n : "screen";
                            if (r && (O = null, E = null), !O || E != i) {
                                var a = v("style");
                                a.setAttribute("type", "text/css"), a.setAttribute("media", i), O = o.appendChild(a), J.ie && J.win && typeof F.styleSheets != M && F.styleSheets.length > 0 && (O = F.styleSheets[F.styleSheets.length - 1]), E = i
                            }
                            J.ie && J.win ? O && typeof O.addRule == C && O.addRule(e, t) : O && typeof F.createTextNode != M && O.appendChild(F.createTextNode(e + " {" + t + "}"))
                        }
                    }
                }

                function w(e, t) {
                    if (X) {
                        var n = t ? "visible" : "hidden";
                        $ && y(e) ? y(e).style.visibility = n : b("#" + e, "visibility:" + n)
                    }
                }

                function x(e) {
                    var t = /[\\\"<>\.;]/, n = null != t.exec(e);
                    return n && typeof encodeURIComponent != M ? encodeURIComponent(e) : e
                }

                var k, S, _, T, O, E, M = "undefined", C = "object", j = "Shockwave Flash",
                    P = "ShockwaveFlash.ShockwaveFlash", I = "application/x-shockwave-flash", A = "SWFObjectExprInst",
                    D = "onreadystatechange", N = window, F = document, R = navigator, L = !1, W = [r], B = [], U = [],
                    q = [], $ = !1, H = !1, X = !0, J = function () {
                        var e = typeof F.getElementById != M && typeof F.getElementsByTagName != M && typeof F.createElement != M,
                            t = R.userAgent.toLowerCase(), n = R.platform.toLowerCase(),
                            r = n ? /win/.test(n) : /win/.test(t), o = n ? /mac/.test(n) : /mac/.test(t),
                            i = !!/webkit/.test(t) && parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")), a = !1,
                            s = [0, 0, 0], c = null;
                        if (typeof R.plugins != M && typeof R.plugins[j] == C) c = R.plugins[j].description, !c || typeof R.mimeTypes != M && R.mimeTypes[I] && !R.mimeTypes[I].enabledPlugin || (L = !0, a = !1, c = c.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), s[0] = parseInt(c.replace(/^(.*)\..*$/, "$1"), 10), s[1] = parseInt(c.replace(/^.*\.(.*)\s.*$/, "$1"), 10), s[2] = /[a-zA-Z]/.test(c) ? parseInt(c.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0); else if (typeof N[["Active"].concat("Object").join("X")] != M) try {
                            var u = new (window[["Active"].concat("Object").join("X")])(P);
                            u && (c = u.GetVariable("$version"), c && (a = !0, c = c.split(" ")[1].split(","), s = [parseInt(c[0], 10), parseInt(c[1], 10), parseInt(c[2], 10)]))
                        } catch (l) {
                        }
                        return {w3: e, pv: s, wk: i, ie: a, win: r, mac: o}
                    }();
                (function () {
                    J.w3 && ((typeof F.readyState != M && "complete" == F.readyState || typeof F.readyState == M && (F.getElementsByTagName("body")[0] || F.body)) && e(), $ || (typeof F.addEventListener != M && F.addEventListener("DOMContentLoaded", e, !1), J.ie && J.win && (F.attachEvent(D, function () {
                        "complete" == F.readyState && (F.detachEvent(D, arguments.callee), e())
                    }), N == top && !function () {
                        if (!$) {
                            try {
                                F.documentElement.doScroll("left")
                            } catch (t) {
                                return void setTimeout(arguments.callee, 0)
                            }
                            e()
                        }
                    }()), J.wk && !function () {
                        if (!$) return /loaded|complete/.test(F.readyState) ? void e() : void setTimeout(arguments.callee, 0)
                    }(), n(e)))
                })(), function () {
                    J.ie && J.win && window.attachEvent("onunload", function () {
                        for (var e = q.length, t = 0; t < e; t++) q[t][0].detachEvent(q[t][1], q[t][2]);
                        for (var n = U.length, r = 0; r < n; r++) d(U[r]);
                        for (var o in J) J[o] = null;
                        J = null;
                        for (var i in swfobject) swfobject[i] = null;
                        swfobject = null
                    })
                }();
                return {
                    registerObject: function (e, t, n, r) {
                        if (J.w3 && e && t) {
                            var o = {};
                            o.id = e, o.swfVersion = t, o.expressInstall = n, o.callbackFn = r, B[B.length] = o, w(e, !1)
                        } else r && r({success: !1, id: e})
                    }, getObjectById: function (e) {
                        if (J.w3) return a(e)
                    }, embedSWF: function (e, n, r, o, i, a, u, l, p, d) {
                        var h = {success: !1, id: n};
                        J.w3 && !(J.wk && J.wk < 312) && e && n && r && o && i ? (w(n, !1), t(function () {
                            r += "", o += "";
                            var t = {};
                            if (p && typeof p === C) for (var y in p) t[y] = p[y];
                            t.data = e, t.width = r, t.height = o;
                            var v = {};
                            if (l && typeof l === C) for (var m in l) v[m] = l[m];
                            if (u && typeof u === C) for (var b in u) typeof v.flashvars != M ? v.flashvars += "&" + b + "=" + u[b] : v.flashvars = b + "=" + u[b];
                            if (g(i)) {
                                var x = f(t, v, n);
                                t.id == n && w(n, !0), h.success = !0, h.ref = x
                            } else {
                                if (a && s()) return t.data = a, void c(t, v, n, d);
                                w(n, !0)
                            }
                            d && d(h)
                        })) : d && d(h)
                    }, switchOffAutoHideShow: function () {
                        X = !1
                    }, ua: J, getFlashPlayerVersion: function () {
                        return {major: J.pv[0], minor: J.pv[1], release: J.pv[2]}
                    }, hasFlashPlayerVersion: g, createSWF: function (e, t, n) {
                        return J.w3 ? f(e, t, n) : void 0
                    }, showExpressInstall: function (e, t, n, r) {
                        J.w3 && s() && c(e, t, n, r)
                    }, removeSWF: function (e) {
                        J.w3 && d(e)
                    }, createCSS: function (e, t, n, r) {
                        J.w3 && b(e, t, n, r)
                    }, addDomLoadEvent: t, addLoadEvent: n, getQueryParamValue: function (e) {
                        var t = F.location.search || F.location.hash;
                        if (t) {
                            if (/\?/.test(t) && (t = t.split("?")[1]), null == e) return x(t);
                            for (var n = t.split("&"), r = 0; r < n.length; r++) if (n[r].substring(0, n[r].indexOf("=")) == e) return x(n[r].substring(n[r].indexOf("=") + 1))
                        }
                        return ""
                    }, expressInstallCallback: function () {
                        if (H) {
                            var e = y(A);
                            e && k && (e.parentNode.replaceChild(k, e), S && (w(S, !0), J.ie && J.win && (k.style.display = "block")), _ && _(T)), H = !1
                        }
                    }
                }
            }();
            !function () {
                if ("undefined" != typeof window && !window.WebSocket) {
                    var e = window.console;
                    if (e && e.log && e.error || (e = {
                            log: function () {
                            }, error: function () {
                            }
                        }), !swfobject.hasFlashPlayerVersion("10.0.0")) return void e.error("Flash Player >= 10.0.0 is required.");
                    "file:" == location.protocol && e.error("WARNING: web-socket-js doesn't work in file:///... URL unless you set Flash Security Settings properly. Open the page via Web server i.e. http://..."), WebSocket = function (t, n, r, o, i) {
                        var a = this;
                        a.__id = WebSocket.__nextId++, WebSocket.__instances[a.__id] = a, a.readyState = WebSocket.CONNECTING, a.bufferedAmount = 0, a.__events = {}, n ? "string" == typeof n && (n = [n]) : n = [], setTimeout(function () {
                            WebSocket.__addTask(function () {
                                e.info("before create", new Date), WebSocket.__flash.create(a.__id, t, n, r || null, o || 0, i || null)
                            })
                        }, 0)
                    }, WebSocket.prototype.send = function (e) {
                        if (this.readyState == WebSocket.CONNECTING) throw"INVALID_STATE_ERR: Web Socket connection has not been established";
                        var t = WebSocket.__flash.send(this.__id, encodeURIComponent(e));
                        return t < 0 || (this.bufferedAmount += t, !1)
                    }, WebSocket.prototype.close = function () {
                        this.readyState != WebSocket.CLOSED && this.readyState != WebSocket.CLOSING && (this.readyState = WebSocket.CLOSING, WebSocket.__flash.close(this.__id))
                    }, WebSocket.prototype.addEventListener = function (e, t, n) {
                        e in this.__events || (this.__events[e] = []), this.__events[e].push(t)
                    }, WebSocket.prototype.removeEventListener = function (e, t, n) {
                        if (e in this.__events) for (var r = this.__events[e], o = r.length - 1; o >= 0; --o) if (r[o] === t) {
                            r.splice(o, 1);
                            break
                        }
                    }, WebSocket.prototype.dispatchEvent = function (e) {
                        for (var t = this.__events[e.type] || [], n = 0; n < t.length; ++n) t[n](e);
                        var r = this["on" + e.type];
                        r && r(e)
                    }, WebSocket.prototype.__handleEvent = function (t) {
                        e.info("__handleEvent", new Date, t), "readyState" in t && (this.readyState = t.readyState), "protocol" in t && (this.protocol = t.protocol);
                        var n;
                        if ("open" == t.type || "error" == t.type) n = this.__createSimpleEvent(t.type); else if ("close" == t.type) n = this.__createSimpleEvent("close"); else {
                            if ("message" != t.type) throw"unknown event type: " + t.type;
                            var r = decodeURIComponent(t.message);
                            n = this.__createMessageEvent("message", r)
                        }
                        this.dispatchEvent(n)
                    }, WebSocket.prototype.__createSimpleEvent = function (e) {
                        if (document.createEvent && window.Event) {
                            var t = document.createEvent("Event");
                            return t.initEvent(e, !1, !1), t
                        }
                        return {type: e, bubbles: !1, cancelable: !1}
                    }, WebSocket.prototype.__createMessageEvent = function (e, t) {
                        if (document.createEvent && window.MessageEvent && !window.opera) {
                            var n = document.createEvent("MessageEvent");
                            return n.initMessageEvent("message", !1, !1, t, null, null, window, null), n
                        }
                        return {type: e, data: t, bubbles: !1, cancelable: !1}
                    }, WebSocket.CONNECTING = 0, WebSocket.OPEN = 1, WebSocket.CLOSING = 2, WebSocket.CLOSED = 3, WebSocket.__flash = null, WebSocket.__instances = {}, WebSocket.__tasks = [], WebSocket.__nextId = 0, WebSocket.loadFlashPolicyFile = function (e) {
                        WebSocket.__addTask(function () {
                            WebSocket.__flash.loadManualPolicyFile(e)
                        })
                    }, WebSocket.__initialize = function () {
                        if (!WebSocket.__flash) {
                            if (WebSocket.__swfLocation && (window.WEB_SOCKET_SWF_LOCATION = WebSocket.__swfLocation), !window.WEB_SOCKET_SWF_LOCATION) return void e.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
                            var t = document.createElement("div");
                            t.id = "webSocketContainer", t.style.position = "absolute", WebSocket.__isFlashLite() ? (t.style.left = "0px", t.style.top = "0px") : (t.style.left = "-100px", t.style.top = "-100px");
                            var n = document.createElement("div");
                            n.id = "webSocketFlash", t.appendChild(n), document.body.appendChild(t), swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, {
                                hasPriority: !0,
                                swliveconnect: !0,
                                allowScriptAccess: "always"
                            }, null, function (t) {
                                t.success || e.error("[WebSocket] swfobject.embedSWF failed")
                            })
                        }
                    }, WebSocket.__onFlashInitialized = function () {
                        setTimeout(function () {
                            WebSocket.__flash = document.getElementById("webSocketFlash"), WebSocket.__flash.setCallerUrl(location.href), WebSocket.__flash.setDebug(!!window.WEB_SOCKET_DEBUG);
                            for (var e = 0; e < WebSocket.__tasks.length; ++e) WebSocket.__tasks[e]();
                            WebSocket.__tasks = []
                        }, 0)
                    }, WebSocket.__onFlashEvent = function () {
                        return setTimeout(function () {
                            try {
                                for (var t = WebSocket.__flash.receiveEvents(), n = 0; n < t.length; ++n) WebSocket.__instances[t[n].webSocketId].__handleEvent(t[n])
                            } catch (r) {
                                e.error(r)
                            }
                        }, 0), !0
                    }, WebSocket.__log = function (t) {
                        e.log(decodeURIComponent(t))
                    }, WebSocket.__error = function (t) {
                        var n = function (e, t) {
                                t = t || 2;
                                for (var n = "" + e; n.length < t;) n = "0" + n;
                                return n
                            }, r = new Date,
                            o = r.getFullYear() + "-" + n(r.getMonth() + 1) + "-" + n(r.getDate()) + " " + n(r.getHours()) + ":" + n(r.getMinutes()) + ":" + n(r.getSeconds()) + ":" + n(r.getMilliseconds(), 3);
                        e.error(o, decodeURIComponent(t))
                    }, WebSocket.__addTask = function (e) {
                        WebSocket.__flash ? e() : WebSocket.__tasks.push(e)
                    }, WebSocket.__isFlashLite = function () {
                        if (!window.navigator || !window.navigator.mimeTypes) return !1;
                        var e = window.navigator.mimeTypes["application/x-shockwave-flash"];
                        return !!(e && e.enabledPlugin && e.enabledPlugin.filename) && !!e.enabledPlugin.filename.match(/flashlite/i)
                    }, window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION || (window.addEventListener ? window.addEventListener("load", function () {
                        WebSocket.__initialize()
                    }, !1) : window.attachEvent("onload", function () {
                        WebSocket.__initialize()
                    }))
                }
            }(), function (e, t, n) {
                function r(e) {
                    e && (t.Transport.apply(this, arguments), this.sendBuffer = [])
                }

                function o() {
                }

                e.XHR = r, t.util.inherit(r, t.Transport), r.prototype.open = function () {
                    return this.socket.setBuffer(!1), this.onOpen(), this.get(), this.setCloseTimeout(), this
                }, r.prototype.payload = function (e) {
                    for (var n = [], r = 0, o = e.length; r < o; r++) n.push(t.parser.encodePacket(e[r]));
                    this.send(t.parser.encodePayload(n))
                }, r.prototype.send = function (e) {
                    return this.post(e), this
                }, r.prototype.post = function (e) {
                    function t() {
                        4 == this.readyState && (this.onreadystatechange = o, i.posting = !1, 200 == this.status ? i.socket.setBuffer(!1) : i.onClose())
                    }

                    function r() {
                        this.onload = o, i.socket.setBuffer(!1)
                    }

                    var i = this;
                    this.socket.setBuffer(!0), this.sendXHR = this.request("POST"), n.XDomainRequest && this.sendXHR instanceof XDomainRequest ? this.sendXHR.onload = this.sendXHR.onerror = r : this.sendXHR.onreadystatechange = t, this.sendXHR.send(e)
                }, r.prototype.close = function () {
                    return this.onClose(), this
                }, r.prototype.request = function (e) {
                    var n = t.util.request(this.socket.isXDomain()),
                        r = t.util.query(this.socket.options.query, "t=" + +new Date);
                    if (n.open(e || "GET", this.prepareUrl() + r, !0), "POST" == e) try {
                        n.setRequestHeader ? n.setRequestHeader("Content-type", "text/plain;charset=UTF-8") : n.contentType = "text/plain"
                    } catch (o) {
                    }
                    return n
                }, r.prototype.scheme = function () {
                    return this.socket.options.secure ? "https" : "http"
                }, r.check = function (e, r) {
                    try {
                        var o = t.util.request(r), i = n.XDomainRequest && o instanceof XDomainRequest,
                            a = e && e.options && e.options.secure ? "https:" : "http:",
                            s = n.location && a != n.location.protocol;
                        if (o && (!i || !s)) return !0
                    } catch (c) {
                    }
                    return !1
                }, r.xdomainCheck = function (e) {
                    return r.check(e, !0)
                }
            }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this), function (e, t) {
                function n(e) {
                    t.Transport.XHR.apply(this, arguments)
                }

                e.htmlfile = n, t.util.inherit(n, t.Transport.XHR), n.prototype.name = "htmlfile", n.prototype.get = function () {
                    this.doc = new (window[["Active"].concat("Object").join("X")])("htmlfile"), this.doc.open(), this.doc.write("<html></html>"), this.doc.close(), this.doc.parentWindow.s = this;
                    var e = this.doc.createElement("div");
                    e.className = "socketio", this.doc.body.appendChild(e), this.iframe = this.doc.createElement("iframe"), e.appendChild(this.iframe);
                    var n = this, r = t.util.query(this.socket.options.query, "t=" + +new Date);
                    this.iframe.src = this.prepareUrl() + r, t.util.on(window, "unload", function () {
                        n.destroy()
                    })
                }, n.prototype._ = function (e, t) {
                    this.onData(e);
                    try {
                        var n = t.getElementsByTagName("script")[0];
                        n.parentNode.removeChild(n)
                    } catch (r) {
                    }
                }, n.prototype.destroy = function () {
                    if (this.iframe) {
                        try {
                            this.iframe.src = "about:blank"
                        } catch (e) {
                        }
                        this.doc = null, this.iframe.parentNode.removeChild(this.iframe), this.iframe = null, CollectGarbage()
                    }
                }, n.prototype.close = function () {
                    return this.destroy(),
                        t.Transport.XHR.prototype.close.call(this)
                }, n.check = function (e) {
                    if ("undefined" != typeof window && ["Active"].concat("Object").join("X") in window) try {
                        var n = new (window[["Active"].concat("Object").join("X")])("htmlfile");
                        return n && t.Transport.XHR.check(e)
                    } catch (r) {
                    }
                    return !1
                }, n.xdomainCheck = function () {
                    return !1
                }, t.transports.push("htmlfile")
            }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports), function (e, t, n) {
                function r() {
                    t.Transport.XHR.apply(this, arguments)
                }

                function o() {
                }

                e["xhr-polling"] = r, t.util.inherit(r, t.Transport.XHR), t.util.merge(r, t.Transport.XHR), r.prototype.name = "xhr-polling", r.prototype.heartbeats = function () {
                    return !1
                }, r.prototype.open = function () {
                    var e = this;
                    return t.Transport.XHR.prototype.open.call(e), !1
                }, r.prototype.get = function () {
                    function e() {
                        4 == this.readyState && (this.onreadystatechange = o, 200 == this.status ? (i.onData(this.responseText), i.get()) : i.onClose())
                    }

                    function t() {
                        this.onload = o, this.onerror = o, i.retryCounter = 1, i.onData(this.responseText), i.get()
                    }

                    function r() {
                        i.retryCounter++, !i.retryCounter || i.retryCounter > 3 ? i.onClose() : i.get()
                    }

                    if (this.isOpen) {
                        var i = this;
                        this.xhr = this.request(), n.XDomainRequest && this.xhr instanceof XDomainRequest ? (this.xhr.onload = t, this.xhr.onerror = r) : this.xhr.onreadystatechange = e, this.xhr.send(null)
                    }
                }, r.prototype.onClose = function () {
                    if (t.Transport.XHR.prototype.onClose.call(this), this.xhr) {
                        this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = o;
                        try {
                            this.xhr.abort()
                        } catch (e) {
                        }
                        this.xhr = null
                    }
                }, r.prototype.ready = function (e, n) {
                    var r = this;
                    t.util.defer(function () {
                        n.call(r)
                    })
                }, t.transports.push("xhr-polling")
            }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this), function (e, t, n) {
                function r(e) {
                    t.Transport["xhr-polling"].apply(this, arguments), this.index = t.j.length;
                    var n = this;
                    t.j.push(function (e) {
                        n._(e)
                    })
                }

                var o = n.document && "MozAppearance" in n.document.documentElement.style;
                e["jsonp-polling"] = r, t.util.inherit(r, t.Transport["xhr-polling"]), r.prototype.name = "jsonp-polling", r.prototype.post = function (e) {
                    function n() {
                        r(), o.socket.setBuffer(!1)
                    }

                    function r() {
                        o.iframe && o.form.removeChild(o.iframe);
                        try {
                            a = document.createElement('<iframe name="' + o.iframeId + '">')
                        } catch (e) {
                            a = document.createElement("iframe"), a.name = o.iframeId
                        }
                        a.id = o.iframeId, o.form.appendChild(a), o.iframe = a
                    }

                    var o = this, i = t.util.query(this.socket.options.query, "t=" + +new Date + "&i=" + this.index);
                    if (!this.form) {
                        var a, s = document.createElement("form"), c = document.createElement("textarea"),
                            u = this.iframeId = "socketio_iframe_" + this.index;
                        s.className = "socketio", s.style.position = "absolute", s.style.top = "0px", s.style.left = "0px", s.style.display = "none", s.target = u, s.method = "POST", s.setAttribute("accept-charset", "utf-8"), c.name = "d", s.appendChild(c), document.body.appendChild(s), this.form = s, this.area = c
                    }
                    this.form.action = this.prepareUrl() + i, r(), this.area.value = t.JSON.stringify(e);
                    try {
                        this.form.submit()
                    } catch (l) {
                    }
                    this.iframe.attachEvent ? a.onreadystatechange = function () {
                        "complete" == o.iframe.readyState && n()
                    } : this.iframe.onload = n, this.socket.setBuffer(!0)
                }, r.prototype.get = function () {
                    var e = this, n = document.createElement("script"),
                        r = t.util.query(this.socket.options.query, "t=" + +new Date + "&i=" + this.index);
                    this.script && (this.script.parentNode.removeChild(this.script), this.script = null), n.async = !0, n.src = this.prepareUrl() + r, n.onerror = function () {
                        e.onClose()
                    };
                    var i = document.getElementsByTagName("script")[0];
                    i.parentNode.insertBefore(n, i), this.script = n, o && setTimeout(function () {
                        var e = document.createElement("iframe");
                        document.body.appendChild(e), document.body.removeChild(e)
                    }, 100)
                }, r.prototype._ = function (e) {
                    return this.onData(e), this.isOpen && this.get(), this
                }, r.prototype.ready = function (e, n) {
                    var r = this;
                    return o ? void t.util.load(function () {
                        n.call(r)
                    }) : n.call(this)
                }, r.check = function () {
                    return "document" in n
                }, r.xdomainCheck = function () {
                    return !0
                }, t.transports.push("jsonp-polling")
            }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this), __WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
                return window.io = io, io
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
        }()
    }).call(exports, __webpack_require__(5)(module))
}, function (e, t, n) {
    var r = n(31).fn, o = n(14), i = n(18), a = n(36), s = n(37), c = n(21), u = n(17), l = n(10), f = l.notundef;
    r.login = function () {
        var e = this;
        e.sendCmd("login", e.assembleLogin(), e.onLogin.bind(e))
    }, r.genSessionKey = function () {
        var e = {};
        return function () {
            var t = this, n = t.name, r = e[n] = e[n] || l.guid();
            return r
        }
    }(), r.assembleIMLogin = function () {
        var e = this, t = e.options, n = t.account;
        return {
            appKey: t.appKey,
            account: n,
            token: t.token,
            sdkVersion: c.info.sdkVersion,
            protocolVersion: c.info.protocolVersion,
            os: i.os.toString(),
            browser: i.name + " " + i.version,
            session: e.genSessionKey(),
            deviceId: s.deviceId
        }
    }, r.onLogin = function (e, t) {
        var n = this;
        n.loginResult = t, e ? n.onAuthError(e) : (n.startHeartbeat(), n.afterLogin(t))
    }, r.afterLogin = l.emptyFunc, r.notifyLogin = function () {
        var e = this, t = e.loginResult;
        u.info("onConnect", t), e.options.onconnect(t)
    }, r.logout = function () {
        var e = this;
        if (e.isConnected()) {
            var t = new o("主动退出", "logout");
            e.onAuthError(t)
        }
    }, r.onKicked = function (e) {
        var t = this, n = e.content, r = n.from, i = n.reason, s = n.custom,
            c = {reason: t.kickedReasons[i] || "unknown", message: t.kickedMessages[i] || "未知原因"};
        if (f(r) && (c.from = a.reverseType(r)), f(s) && (c.custom = s), t.shouldNotifyKicked(c)) {
            var p = new o("被踢了", "kicked");
            l.merge(p, c), t.onAuthError(p)
        } else u.warn("silentlyKick"), t.shouldReconnect = !1, t.hasNotifyDisconnected = !0, t.disconnectSocket()
    }, r.shouldNotifyKicked = function (e) {
        return "silentlyKick" !== e.reason
    }, r.onAuthError = function (e) {
        var t = this;
        t.shouldReconnect = !1, t.markAllCallbackInvalid(e || o.newConnectionError()), t.notifyDisconnect(e)
    }
}, function (e, t) {
    function n() {
    }

    var r = {1: "Android", 2: "iOS", 4: "PC", 8: "WindowsPhone", 16: "Web", 32: "Server"};
    n.reverse = function (e) {
        var t = e;
        return t.type = r[t.type], t
    }, n.reverseType = function (e) {
        return r[e] || e
    }, e.exports = n
}, function (e, t, n) {
    var r = n(10), o = n(38), i = {};
    i.init = function () {
        var e = "nim_web_sdk_deviceId", t = o.get(e);
        t || (t = r.guid(), o.set(e, t)), i.deviceId = t
    }, i.init(), e.exports = i
}, function (e, t) {
    var n = e.exports;
    n.get = function (e) {
        return localStorage && localStorage[e]
    }, n.set = function (e, t) {
        try {
            localStorage[e] = t
        } catch (n) {
        }
    }
}, function (e, t, n) {
    var r = n(31).fn, o = n(21);
    r.processLink = function (e) {
        switch (e.cmd) {
            case"heartbeat":
        }
    }, r.startHeartbeat = function () {
        this.shouldHeartbeat = !0
    }, r.stopHeartbeat = function () {
        this.shouldHeartbeat = !1
    }, r.heartbeat = function () {
        var e = this;
        e.heartbeatTimer && window.clearTimeout(e.heartbeatTimer), e.heartbeatTimer = window.setTimeout(function () {
            e.shouldHeartbeat && e.sendCmd("heartbeat", null, e.onHeartbeat.bind(e))
        }, o.heartbeatInterval)
    }, r.onHeartbeat = function (e, t) {
        this.onMiscError(e, t, "heartbeat")
    }
}, function (e, t, n) {
    var r = n(31).fn, o = n(28);
    r.processMisc = function (e) {
        switch (e.cmd) {
            case"getNosToken":
                e.error || (e.obj = e.content.nosToken);
                break;
            case"audioToText":
                e.error || (e.obj.text = e.content.text);
                break;
            case"processImage":
                e.obj.imageOps = o.reverseImageOps(e.obj.imageOps), e.error || (e.obj = {url: e.content.url})
        }
    }
}, function (e, t, n) {
    function r(e) {
        this.configMap = e.configMap, this.serializeMap = e.serializeMap, this.unserializeMap = e.unserializeMap
    }

    var o = n(10), i = o.undef, a = n(14), s = n(17), c = {};
    r.getInstance = function (e) {
        var t = e.type || e;
        return c[t] || (c[t] = new r(e)), c[t]
    }, r.prototype.createCmd = function () {
        var e = 1;
        return function (t, n) {
            var r = this, o = this.configMap.cmdConfig[t];
            return t = {SID: o.sid, CID: o.cid, SER: e++}, o.params && (t.Q = [], o.params.forEach(function (e) {
                var o = e.type, a = e.name, s = e.entity, c = n[a];
                if (!i(c)) {
                    switch (o) {
                        case"PropertyArray":
                            o = "ArrayMable", c = c.map(function (e) {
                                return {t: "Property", v: r.serialize(e, s)}
                            });
                            break;
                        case"Property":
                            c = r.serialize(c, a);
                            break;
                        case"bool":
                            c = c ? "true" : "false"
                    }
                    t.Q.push({t: o, v: c})
                }
            })), t
        }
    }(), r.prototype.parseResponse = function (e) {
        var t = this, n = JSON.parse(e), r = {raw: n, error: a.genError(n.code)},
            i = t.configMap.packetConfig[n.sid + "_" + n.cid];
        if (!i) return s.log("no config for sid: " + n.sid + " cid: " + n.cid), r;
        var c = n.r, u = "notify" === i.service && !i.cmd;
        if (r.isNotify = u, u) {
            var l = n.r[1].headerPacket;
            if (i = t.configMap.packetConfig[l.sid + "_" + l.cid], c = n.r[1].body, !i) return s.log("no config for sid: " + l.sid + " cid: " + l.cid), r
        }
        if (r.service = i.service, r.cmd = i.cmd, r.error && 416 === r.error.code) {
            var f = c[0];
            f && (r.frequencyControlDuration = 1e3 * f)
        }
        var p = !1;
        return r.error && i.trivialErrorCodes && (p = i.trivialErrorCodes.indexOf(r.error.code) !== -1), r.error && !p || !i.response || (r.content = {}, i.response.forEach(function (e, i) {
            var a = c[i];
            if (!o.undef(a)) {
                var s = e.type, l = e.name, f = e.entity || l;
                switch (s) {
                    case"Property":
                        r.content[l] = t.unserialize(a, f);
                        break;
                    case"PropertyArray":
                        r.content[l] = [], a.forEach(function (e) {
                            r.content[l].push(t.unserialize(e, f))
                        });
                        break;
                    case"String":
                        r.content[l] = a;
                        break;
                    case"StrArray":
                        r.content[l] = a;
                        break;
                    case"Number":
                        r.content[l] = +a;
                        break;
                    case"Boolean":
                        r.content[l] = a
                }
                if (u && "msg" === l || "sysMsg" === l) {
                    var p = r.content[l];
                    o.isObject(p) && !p.idServer && (p.idServer = "" + n.r[0])
                }
            }
        })), r
    }, r.prototype.serialize = function (e, t) {
        var n = this.serializeMap[t], r = {};
        for (var o in n) e.hasOwnProperty(o) && (r[n[o]] = e[o]);
        return r
    }, r.prototype.unserialize = function (e, t) {
        var n = this.unserializeMap[t], r = {};
        if (e) for (var o in n) e.hasOwnProperty(o) && (r[n[o]] = e[o]);
        return r
    }, e.exports = r
}, , function (e, t) {
    var n = {link: {id: 1, heartbeat: 2}, misc: {id: 6, getNosToken: 2, audioToText: 5, processImage: 6}}, r = {
        heartbeat: {sid: n.link.id, cid: n.link.heartbeat},
        getNosToken: {sid: n.misc.id, cid: n.misc.getNosToken, params: [{type: "String", name: "responseBody"}]},
        audioToText: {sid: n.misc.id, cid: n.misc.audioToText, params: [{type: "Property", name: "audioToText"}]},
        processImage: {
            sid: n.misc.id,
            cid: n.misc.processImage,
            params: [{type: "String", name: "url"}, {type: "PropertyArray", name: "imageOps", entity: "imageOp"}]
        }
    }, o = {
        "1_2": {service: "link", cmd: "heartbeat"},
        "6_2": {service: "misc", cmd: "getNosToken", response: [{type: "Property", name: "nosToken"}]},
        "6_5": {service: "misc", cmd: "audioToText", response: [{type: "String", name: "text"}]},
        "6_6": {service: "misc", cmd: "processImage", response: [{type: "String", name: "url"}]}
    };
    e.exports = {idMap: n, cmdConfig: r, packetConfig: o}
}, , , , , , , , , , , function (e, t, n) {
    function r() {
    }

    var o = n(37);
    r.typeMap = {text: 0, image: 1, audio: 2, video: 3, geo: 4, notification: 5, file: 6, tip: 10, custom: 100};
    var i = r.typeReverseMap = {
        0: "text",
        1: "image",
        2: "audio",
        3: "video",
        4: "geo",
        5: "notification",
        6: "file",
        10: "tip",
        100: "custom"
    };
    r.validTypes = Object.keys(r.typeMap), r.setFlow = function (e, t) {
        var n = t === e.from;
        n && t === e.to && (n = o.deviceId === e.fromDeviceId), e.flow = n ? "out" : "in"
    }, r.getType = function (e) {
        var t = e.type;
        return i[t] || t
    }, e.exports = r
}, , , , , , , , , , , , function (e, t, n) {
    "use strict";

    function r(e, t) {
        for (var n = 0; n < e.length; n++) t(e[n])
    }

    function o(e) {
        for (var t in e) if (e.hasOwnProperty(t)) return !1;
        return !0
    }

    function i(e, t, n) {
        var r = e;
        return f(t) ? (n = t, "string" == typeof e && (r = {uri: e})) : r = d(t, {uri: e}), r.callback = n, r
    }

    function a(e, t, n) {
        return t = i(e, t, n), s(t)
    }

    function s(e) {
        function t() {
            4 === f.readyState && i()
        }

        function n() {
            var e = void 0;
            if (e = f.response ? f.response : f.responseText || c(f), x) try {
                e = JSON.parse(e)
            } catch (t) {
            }
            return e
        }

        function r(e) {
            return clearTimeout(y), e instanceof Error || (e = new Error("" + (e || "Unknown XMLHttpRequest Error"))), e.statusCode = 0, u(e, l)
        }

        function i() {
            if (!h) {
                var t;
                clearTimeout(y), t = e.useXDR && void 0 === f.status ? 200 : 1223 === f.status ? 204 : f.status;
                var r = l, o = null;
                return 0 !== t ? (r = {
                    body: n(),
                    statusCode: t,
                    method: m,
                    headers: {},
                    url: v,
                    rawRequest: f
                }, f.getAllResponseHeaders && (r.headers = p(f.getAllResponseHeaders()))) : o = new Error("Internal XMLHttpRequest Error"), u(o, r, r.body)
            }
        }

        if ("undefined" == typeof e.callback) throw new Error("callback argument missing");
        var s = !1, u = function (t, n, r) {
            s || (s = !0, e.callback(t, n, r))
        }, l = {body: void 0, headers: {}, statusCode: 0, method: m, url: v, rawRequest: f}, f = e.xhr || null;
        f || (f = e.cors || e.useXDR ? new a.XDomainRequest : new a.XMLHttpRequest);
        var d, h, y, v = f.url = e.uri || e.url, m = f.method = e.method || "GET", g = e.body || e.data || null,
            b = f.headers = e.headers || {}, w = !!e.sync, x = !1;
        if ("json" in e && (x = !0, b.accept || b.Accept || (b.Accept = "application/json"), "GET" !== m && "HEAD" !== m && (b["content-type"] || b["Content-Type"] || (b["Content-Type"] = "application/json"), g = JSON.stringify(e.json))), f.onreadystatechange = t, f.onload = i, f.onerror = r, f.onprogress = function () {
            }, f.ontimeout = r, f.open(m, v, !w, e.username, e.password), w || (f.withCredentials = !!e.withCredentials), !w && e.timeout > 0 && (y = setTimeout(function () {
                h = !0, f.abort("timeout");
                var e = new Error("XMLHttpRequest timeout");
                e.code = "ETIMEDOUT", r(e)
            }, e.timeout)), f.setRequestHeader) for (d in b) b.hasOwnProperty(d) && f.setRequestHeader(d, b[d]); else if (e.headers && !o(e.headers)) throw new Error("Headers cannot be set on an XDomainRequest object");
        return "responseType" in e && (f.responseType = e.responseType), "beforeSend" in e && "function" == typeof e.beforeSend && e.beforeSend(f), f.send(g), f
    }

    function c(e) {
        if ("document" === e.responseType) return e.responseXML;
        var t = 204 === e.status && e.responseXML && "parsererror" === e.responseXML.documentElement.nodeName;
        return "" !== e.responseType || t ? null : e.responseXML
    }

    function u() {
    }

    var l = n(67), f = n(68), p = n(69), d = n(72);
    e.exports = a, a.XMLHttpRequest = l.XMLHttpRequest || u, a.XDomainRequest = "withCredentials" in new a.XMLHttpRequest ? a.XMLHttpRequest : l.XDomainRequest, r(["get", "put", "post", "patch", "head", "delete"], function (e) {
        a["delete" === e ? "del" : e] = function (t, n, r) {
            return n = i(t, n, r), n.method = e.toUpperCase(), s(n)
        }
    })
}, function (e, t) {
    (function (t) {
        "undefined" != typeof window ? e.exports = window : "undefined" != typeof t ? e.exports = t : "undefined" != typeof self ? e.exports = self : e.exports = {}
    }).call(t, function () {
        return this
    }())
}, function (e, t) {
    function n(e) {
        var t = r.call(e);
        return "[object Function]" === t || "function" == typeof e && "[object RegExp]" !== t || "undefined" != typeof window && (e === window.setTimeout || e === window.alert || e === window.confirm || e === window.prompt)
    }

    e.exports = n;
    var r = Object.prototype.toString
}, function (e, t, n) {
    var r = n(70), o = n(71), i = function (e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    };
    e.exports = function (e) {
        if (!e) return {};
        var t = {};
        return o(r(e).split("\n"), function (e) {
            var n = e.indexOf(":"), o = r(e.slice(0, n)).toLowerCase(), a = r(e.slice(n + 1));
            "undefined" == typeof t[o] ? t[o] = a : i(t[o]) ? t[o].push(a) : t[o] = [t[o], a]
        }), t
    }
}, function (e, t) {
    function n(e) {
        return e.replace(/^\s*|\s*$/g, "")
    }

    t = e.exports = n, t.left = function (e) {
        return e.replace(/^\s*/, "")
    }, t.right = function (e) {
        return e.replace(/\s*$/, "")
    }
}, function (e, t, n) {
    function r(e, t, n) {
        if (!s(t)) throw new TypeError("iterator must be a function");
        arguments.length < 3 && (n = this), "[object Array]" === c.call(e) ? o(e, t, n) : "string" == typeof e ? i(e, t, n) : a(e, t, n)
    }

    function o(e, t, n) {
        for (var r = 0, o = e.length; r < o; r++) u.call(e, r) && t.call(n, e[r], r, e)
    }

    function i(e, t, n) {
        for (var r = 0, o = e.length; r < o; r++) t.call(n, e.charAt(r), r, e)
    }

    function a(e, t, n) {
        for (var r in e) u.call(e, r) && t.call(n, e[r], r, e)
    }

    var s = n(68);
    e.exports = r;
    var c = Object.prototype.toString, u = Object.prototype.hasOwnProperty
}, function (e, t) {
    function n() {
        for (var e = {}, t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) n.hasOwnProperty(r) && (e[r] = n[r])
        }
        return e
    }

    e.exports = n
}, function (e, t, n) {
    var r;
    !function (o, i) {
        "use strict";
        var a, s = o.IDBKeyRange || o.webkitIDBKeyRange, c = {readonly: "readonly", readwrite: "readwrite"},
            u = Object.prototype.hasOwnProperty, l = function () {
                if (!a && (a = o.indexedDB || o.webkitIndexedDB || o.mozIndexedDB || o.oIndexedDB || o.msIndexedDB || (null === o.indexedDB && o.shimIndexedDB ? o.shimIndexedDB : i), !a)) throw"IndexedDB required";
                return a
            }, f = function (e) {
                return e
            }, p = function (e) {
                return Object.prototype.toString.call(e).slice(8, -1).toLowerCase()
            }, d = function (e) {
                return "function" == typeof e
            }, h = function (e) {
                return "number" === p(e)
            }, y = function (e) {
                return "array" === p(e)
            }, v = function (e) {
                return e === i
            }, m = function (e, t) {
                var n = this, r = !1;
                this.name = t, this.getIndexedDB = function () {
                    return e
                }, this.add = function (t) {
                    if (r) throw"Database has been closed";
                    for (var o = [], i = 0, a = 0; a < arguments.length - 1; a++) if (Array.isArray(arguments[a + 1])) for (var s = 0; s < arguments[a + 1].length; s++) o[i] = arguments[a + 1][s], i++; else o[i] = arguments[a + 1], i++;
                    var u = e.transaction(t, c.readwrite), l = u.objectStore(t);
                    return new Promise(function (e, t) {
                        o.forEach(function (e) {
                            var t;
                            if (e.item && e.key) {
                                var n = e.key;
                                e = e.item, t = l.add(e, n)
                            } else t = l.add(e);
                            t.onsuccess = function (t) {
                                var n = t.target, r = n.source.keyPath;
                                null === r && (r = "__id__"), Object.defineProperty(e, r, {value: n.result, enumerable: !0})
                            }
                        }), u.oncomplete = function () {
                            e(o, n)
                        }, u.onerror = function (e) {
                            e.preventDefault(), t(e)
                        }, u.onabort = function (e) {
                            t(e)
                        }
                    })
                }, this.updateAndDelete = function (t, n, o) {
                    if (r) throw"Database has been closed";
                    var i = e.transaction(t, c.readwrite), a = i.objectStore(t), s = a.keyPath;
                    return new Promise(function (e, t) {
                        n.forEach(function (e) {
                            if (e.item && e.key) {
                                var t = e.key;
                                e = e.item, a.put(e, t)
                            } else a.put(e)
                        }), o.forEach(function (e) {
                            a["delete"](e[s])
                        }), i.oncomplete = function () {
                            e([n, o])
                        }, i.onerror = function (e) {
                            t(e)
                        }
                    })
                }, this.update = function (t) {
                    if (r) throw"Database has been closed";
                    for (var o, i = [], a = 1; a < arguments.length; a++) o = arguments[a], Array.isArray(o) ? i = i.concat(o) : i.push(o);
                    var s = e.transaction(t, c.readwrite), u = s.objectStore(t);
                    u.keyPath;
                    return new Promise(function (e, t) {
                        i.forEach(function (e) {
                            var t;
                            if (e.item && e.key) {
                                var n = e.key;
                                e = e.item, t = u.put(e, n)
                            } else t = u.put(e);
                            t.onsuccess = function (e) {
                            }, t.onerror = function (e) {
                            }
                        }), s.oncomplete = function () {
                            e(i, n)
                        }, s.onerror = function (e) {
                            t(e)
                        }, s.onabort = function (e) {
                            t(e)
                        }
                    })
                }, this.remove = function (t, n) {
                    if (r) throw"Database has been closed";
                    var o = e.transaction(t, c.readwrite), i = o.objectStore(t);
                    return new Promise(function (e, t) {
                        Array.isArray(n) || (n = [n]), n.forEach(function (e) {
                            i["delete"](e)
                        }), o.oncomplete = function () {
                            e(n)
                        }, o.onerror = function (e) {
                            t(e)
                        }, o.onabort = function (e) {
                            t(e)
                        }
                    })
                }, this.clear = function (t) {
                    if (r) throw"Database has been closed";
                    var n = e.transaction(t, c.readwrite), o = n.objectStore(t);
                    o.clear();
                    return new Promise(function (e, t) {
                        n.oncomplete = function () {
                            e()
                        }, n.onerror = function (e) {
                            t(e)
                        }
                    })
                }, this.close = function () {
                    r || (e.close(), r = !0, delete x[t])
                }, this.get = function (t, n) {
                    if (r) throw"Database has been closed";
                    var o = e.transaction(t), i = o.objectStore(t), a = i.get(n);
                    return new Promise(function (e, t) {
                        a.onsuccess = function (t) {
                            e(t.target.result)
                        }, o.onerror = function (e) {
                            t(e)
                        }
                    })
                }, this.query = function (t, n) {
                    if (r) throw"Database has been closed";
                    return new g(t, e, n)
                }, this.count = function (t, n) {
                    if (r) throw"Database has been closed";
                    var o = e.transaction(t);
                    o.objectStore(t)
                };
                for (var o = 0, i = e.objectStoreNames.length; o < i; o++) !function (e) {
                    n[e] = {};
                    for (var t in n) u.call(n, t) && "close" !== t && (n[e][t] = function (t) {
                        return function () {
                            var r = [e].concat([].slice.call(arguments, 0));
                            return n[t].apply(n, r)
                        }
                    }(t))
                }(e.objectStoreNames[o])
            }, g = function (e, t, n) {
                var r = this, o = !1, a = !1, u = function (r, u, l, f, p, h, y) {
                    return new Promise(function (v, m) {
                        var g = o || a ? c.readwrite : c.readonly, b = t.transaction(e, g), w = b.objectStore(e),
                            x = n ? w.index(n) : w, k = r ? s[r].apply(null, u) : null, S = [], _ = [k], T = 0;
                        p = p ? p : null, h = h ? h : [], "count" !== l && _.push(f || "next");
                        var O = !!o && Object.keys(o), E = function (e) {
                            for (var t = 0; t < O.length; t++) {
                                var n = O[t], r = o[n];
                                r instanceof Function && (r = r(e)), e[n] = r
                            }
                            return e
                        };
                        x[l].apply(x, _).onsuccess = function (e) {
                            var t = e.target.result;
                            if ("number" == typeof t) S = t; else if (t) if (null !== p && p[0] > T) T = p[0], t.advance(p[0]); else if (null !== p && T >= p[0] + p[1]) ; else {
                                var n = !0, r = "value" in t ? t.value : t.key;
                                h.forEach(function (e) {
                                    e && e.length && (2 === e.length ? n = n && r[e[0]] === e[1] : d(e[0]) && (n = n && e[0].apply(i, [r])))
                                }), n && (T++, S.push(y(r)), a ? t["delete"]() : o && (r = E(r), t.update(r))), t["continue"]()
                            }
                        }, b.oncomplete = function () {
                            v(S)
                        }, b.onerror = function (e) {
                            m(e)
                        }, b.onabort = function (e) {
                            m(e)
                        }
                    })
                }, l = function (e, t) {
                    var n = "next", r = "openCursor", i = [], s = null, c = f, l = !1, p = function () {
                        return u(e, t, r, l ? n + "unique" : n, s, i, c)
                    }, m = function () {
                        return n = null, r = "count", {execute: p}
                    }, g = function () {
                        return s = y(arguments[0]) ? arguments[0] : Array.prototype.slice.call(arguments, 0, 2), 1 == s.length && s.unshift(0), h(s[1]) || (s = null), {
                            execute: p,
                            count: m,
                            keys: b,
                            filter: w,
                            asc: x,
                            desc: k,
                            distinct: S,
                            modify: _,
                            limit: g,
                            map: T,
                            remove: O
                        }
                    }, b = function (e) {
                        return e = !!v(e) || !!e, e && (r = "openKeyCursor"), {
                            execute: p,
                            keys: b,
                            filter: w,
                            asc: x,
                            desc: k,
                            distinct: S,
                            modify: _,
                            limit: g,
                            map: T,
                            remove: O
                        }
                    }, w = function () {
                        return i.push(Array.prototype.slice.call(arguments, 0, 2)), {
                            execute: p,
                            count: m,
                            keys: b,
                            filter: w,
                            asc: x,
                            desc: k,
                            distinct: S,
                            modify: _,
                            limit: g,
                            map: T,
                            remove: O
                        }
                    }, x = function (e) {
                        return e = !!v(e) || !!e, n = e ? "next" : "prev", {
                            execute: p,
                            count: m,
                            keys: b,
                            filter: w,
                            asc: x,
                            desc: k,
                            distinct: S,
                            modify: _,
                            limit: g,
                            map: T,
                            remove: O
                        }
                    }, k = function (e) {
                        return e = !!v(e) || !!e, n = e ? "prev" : "next", {
                            execute: p,
                            count: m,
                            keys: b,
                            filter: w,
                            asc: x,
                            desc: k,
                            distinct: S,
                            modify: _,
                            limit: g,
                            map: T,
                            remove: O
                        }
                    }, S = function (e) {
                        return e = !!v(e) || !!e, l = e, {
                            execute: p,
                            count: m,
                            keys: b,
                            filter: w,
                            asc: x,
                            desc: k,
                            distinct: S,
                            modify: _,
                            limit: g,
                            map: T,
                            remove: O
                        }
                    }, _ = function (e) {
                        return o = e, {
                            execute: p,
                            count: m,
                            keys: b,
                            filter: w,
                            asc: x,
                            desc: k,
                            distinct: S,
                            modify: _,
                            limit: g,
                            map: T,
                            remove: O
                        }
                    }, T = function (e) {
                        return d(e) && (c = e), {
                            execute: p,
                            count: m,
                            keys: b,
                            filter: w,
                            asc: x,
                            desc: k,
                            distinct: S,
                            modify: _,
                            limit: g,
                            map: T,
                            remove: O
                        }
                    }, O = function (e) {
                        return e = !!v(e) || !!e, a = e, {
                            execute: p,
                            count: m,
                            keys: b,
                            filter: w,
                            asc: x,
                            desc: k,
                            distinct: S,
                            modify: _,
                            limit: g,
                            map: T,
                            remove: O
                        }
                    };
                    return {
                        execute: p,
                        count: m,
                        keys: b,
                        filter: w,
                        asc: x,
                        desc: k,
                        distinct: S,
                        modify: _,
                        limit: g,
                        map: T,
                        remove: O
                    }
                };
                "only bound upperBound lowerBound".split(" ").forEach(function (e) {
                    r[e] = function () {
                        return new l(e, arguments)
                    }
                }), this.filter = function () {
                    var e = new l(null, null);
                    return e.filter.apply(e, arguments)
                }, this.all = function () {
                    return this.filter()
                }
            }, b = function (e, t, n) {
                "function" == typeof t && (t = t());
                for (var r in t) {
                    var o, i = t[r];
                    o = !u.call(t, r) || n.objectStoreNames.contains(r) ? e.currentTarget.transaction.objectStore(r) : n.createObjectStore(r, i.key);
                    for (var a in i.indexes) {
                        var s = i.indexes[a];
                        try {
                            o.index(a)
                        } catch (e) {
                            o.createIndex(a, s.key || a, Object.keys(s).length ? s : {unique: !1})
                        }
                    }
                }
            }, w = function (e, t, n, r) {
                var o = e.target.result, i = new m(o, t);
                return x[t] = o, Promise.resolve(i)
            }, x = {}, k = {
                version: "0.10.2", open: function (e) {
                    var t;
                    return new Promise(function (n, r) {
                        if (x[e.server]) w({target: {result: x[e.server]}}, e.server, e.version, e.schema).then(n, r); else {
                            try {
                                t = l().open(e.server, e.version)
                            } catch (o) {
                                r(o)
                            }
                            t.onsuccess = function (t) {
                                w(t, e.server, e.version, e.schema).then(n, r)
                            }, t.onupgradeneeded = function (t) {
                                b(t, e.schema, t.target.result)
                            }, t.onerror = function (e) {
                                r(e)
                            }
                        }
                    })
                }, remove: function (e) {
                    return new Promise(function (t, n) {
                        if (!e) return t();
                        typeof e === m && (e = e.name);
                        var r;
                        "string" == typeof e && (r = x[e]), r && "function" == typeof r.close && r.close();
                        var o;
                        try {
                            o = l().deleteDatabase(e)
                        } catch (i) {
                            n(i)
                        }
                        o.onsuccess = function (n) {
                            delete x[e], t(e)
                        }, o.onerror = function (e) {
                            n(e)
                        }, o.onblocked = function (e) {
                            n(e)
                        }
                    })
                }
            };
        "undefined" != typeof e && "undefined" != typeof e.exports ? e.exports = k : (r = function () {
            return k
        }.call(t, n, t, e), !(r !== i && (e.exports = r)))
    }(window)
}, function (e, t) {
    var n = {};
    n.set = function (e, t, r) {
        n[e] = t, r && (r.support = t)
    }, e.exports = n
}]);