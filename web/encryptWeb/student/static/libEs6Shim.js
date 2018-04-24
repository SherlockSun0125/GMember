/*!
  * //github.com/paulmillr/es6-shim
  * @license es6-shim Copyright 2013-2016 by Paul Miller (//paulmillr.com)
  *   and contributors,  MIT License
  * es6-shim: v0.35.1
  * see //github.com/paulmillr/es6-shim/blob/0.35.1/LICENSE
  * Details and documentation:
  * //github.com/paulmillr/es6-shim/
  */
(function (e, t) {
    if (typeof define === "function" && define.amd) {
        define(t)
    } else if (typeof exports === "object") {
        module.exports = t()
    } else {
        e.returnExports = t()
    }
})(this, function () {
    "use strict";
    var e = Function.call.bind(Function.apply);
    var t = Function.call.bind(Function.call);
    var r = Array.isArray;
    var n = Object.keys;
    var o = function notThunker(t) {
        return function notThunk() {
            return !e(t, this, arguments)
        }
    };
    var i = function (e) {
        try {
            e();
            return false
        } catch (e) {
            return true
        }
    };
    var a = function valueOrFalseIfThrows(e) {
        try {
            return e()
        } catch (e) {
            return false
        }
    };
    var u = o(i);
    var f = function () {
        return !i(function () {
            Object.defineProperty({}, "x", {
                get: function () {
                }
            })
        })
    };
    var s = !!Object.defineProperty && f();
    var c = function foo() {
    }.name === "foo";
    var l = Function.call.bind(Array.prototype.forEach);
    var p = Function.call.bind(Array.prototype.reduce);
    var v = Function.call.bind(Array.prototype.filter);
    var y = Function.call.bind(Array.prototype.some);
    var h = function (e, t, r, n) {
        if (!n && t in e) {
            return
        }
        if (s) {
            Object.defineProperty(e, t, {configurable: true, enumerable: false, writable: true, value: r})
        } else {
            e[t] = r
        }
    };
    var b = function (e, t, r) {
        l(n(t), function (n) {
            var o = t[n];
            h(e, n, o, !!r)
        })
    };
    var g = Function.call.bind(Object.prototype.toString);
    var d = typeof/abc/ === "function" ? function IsCallableSlow(e) {
        return typeof e === "function" && g(e) === "[object Function]"
    } : function IsCallableFast(e) {
        return typeof e === "function"
    };
    var m = {
        getter: function (e, t, r) {
            if (!s) {
                throw new TypeError("getters require true ES5 support")
            }
            Object.defineProperty(e, t, {configurable: true, enumerable: false, get: r})
        }, proxy: function (e, t, r) {
            if (!s) {
                throw new TypeError("getters require true ES5 support")
            }
            var n = Object.getOwnPropertyDescriptor(e, t);
            Object.defineProperty(r, t, {
                configurable: n.configurable,
                enumerable: n.enumerable,
                get: function getKey() {
                    return e[t]
                },
                set: function setKey(r) {
                    e[t] = r
                }
            })
        }, redefine: function (e, t, r) {
            if (s) {
                var n = Object.getOwnPropertyDescriptor(e, t);
                n.value = r;
                Object.defineProperty(e, t, n)
            } else {
                e[t] = r
            }
        }, defineByDescriptor: function (e, t, r) {
            if (s) {
                Object.defineProperty(e, t, r)
            } else if ("value" in r) {
                e[t] = r.value
            }
        }, preserveToString: function (e, t) {
            if (t && d(t.toString)) {
                h(e, "toString", t.toString.bind(t), true)
            }
        }
    };
    var O = Object.create || function (e, t) {
        var r = function Prototype() {
        };
        r.prototype = e;
        var o = new r;
        if (typeof t !== "undefined") {
            n(t).forEach(function (e) {
                m.defineByDescriptor(o, e, t[e])
            })
        }
        return o
    };
    var w = function (e, t) {
        if (!Object.setPrototypeOf) {
            return false
        }
        return a(function () {
            var r = function Subclass(t) {
                var r = new e(t);
                Object.setPrototypeOf(r, Subclass.prototype);
                return r
            };
            Object.setPrototypeOf(r, e);
            r.prototype = O(e.prototype, {constructor: {value: r}});
            return t(r)
        })
    };
    var j = function () {
        if (typeof self !== "undefined") {
            return self
        }
        if (typeof window !== "undefined") {
            return window
        }
        if (typeof global !== "undefined") {
            return global
        }
        throw new Error("unable to locate global object")
    };
    var S = j();
    var T = S.isFinite;
    var I = Function.call.bind(String.prototype.indexOf);
    var E = Function.apply.bind(Array.prototype.indexOf);
    var P = Function.call.bind(Array.prototype.concat);
    var C = Function.call.bind(String.prototype.slice);
    var M = Function.call.bind(Array.prototype.push);
    var x = Function.apply.bind(Array.prototype.push);
    var N = Function.call.bind(Array.prototype.shift);
    var A = Math.max;
    var R = Math.min;
    var _ = Math.floor;
    var k = Math.abs;
    var F = Math.exp;
    var L = Math.log;
    var D = Math.sqrt;
    var z = Function.call.bind(Object.prototype.hasOwnProperty);
    var q;
    var W = function () {
    };
    var G = S.Map;
    var H = G && G.prototype["delete"];
    var V = G && G.prototype.get;
    var B = G && G.prototype.has;
    var U = G && G.prototype.set;
    var $ = S.Symbol || {};
    var J = $.species || "@@species";
    var X = Number.isNaN || function isNaN(e) {
        return e !== e
    };
    var K = Number.isFinite || function isFinite(e) {
        return typeof e === "number" && T(e)
    };
    var Z = d(Math.sign) ? Math.sign : function sign(e) {
        var t = Number(e);
        if (t === 0) {
            return t
        }
        if (X(t)) {
            return t
        }
        return t < 0 ? -1 : 1
    };
    var Y = function isArguments(e) {
        return g(e) === "[object Arguments]"
    };
    var Q = function isArguments(e) {
        return e !== null && typeof e === "object" && typeof e.length === "number" && e.length >= 0 && g(e) !== "[object Array]" && g(e.callee) === "[object Function]"
    };
    var ee = Y(arguments) ? Y : Q;
    var te = {
        primitive: function (e) {
            return e === null || typeof e !== "function" && typeof e !== "object"
        }, string: function (e) {
            return g(e) === "[object String]"
        }, regex: function (e) {
            return g(e) === "[object RegExp]"
        }, symbol: function (e) {
            return typeof S.Symbol === "function" && typeof e === "symbol"
        }
    };
    var re = function overrideNative(e, t, r) {
        var n = e[t];
        h(e, t, r, true);
        m.preserveToString(e[t], n)
    };
    var ne = typeof $ === "function" && typeof $["for"] === "function" && te.symbol($());
    var oe = te.symbol($.iterator) ? $.iterator : "_es6-shim iterator_";
    if (S.Set && typeof(new S.Set)["@@iterator"] === "function") {
        oe = "@@iterator"
    }
    if (!S.Reflect) {
        h(S, "Reflect", {}, true)
    }
    var ie = S.Reflect;
    var ae = String;
    var ue = typeof document === "undefined" || !document ? null : document.all;
    var fe = ue == null ? function isNullOrUndefined(e) {
        return e == null
    } : function isNullOrUndefinedAndNotDocumentAll(e) {
        return e == null && e !== ue
    };
    var se = {
        Call: function Call(t, r) {
            var n = arguments.length > 2 ? arguments[2] : [];
            if (!se.IsCallable(t)) {
                throw new TypeError(t + " is not a function")
            }
            return e(t, r, n)
        }, RequireObjectCoercible: function (e, t) {
            if (fe(e)) {
                throw new TypeError(t || "Cannot call method on " + e)
            }
            return e
        }, TypeIsObject: function (e) {
            if (e === void 0 || e === null || e === true || e === false) {
                return false
            }
            return typeof e === "function" || typeof e === "object" || e === ue
        }, ToObject: function (e, t) {
            return Object(se.RequireObjectCoercible(e, t))
        }, IsCallable: d, IsConstructor: function (e) {
            return se.IsCallable(e)
        }, ToInt32: function (e) {
            return se.ToNumber(e) >> 0
        }, ToUint32: function (e) {
            return se.ToNumber(e) >>> 0
        }, ToNumber: function (e) {
            if (g(e) === "[object Symbol]") {
                throw new TypeError("Cannot convert a Symbol value to a number")
            }
            return +e
        }, ToInteger: function (e) {
            var t = se.ToNumber(e);
            if (X(t)) {
                return 0
            }
            if (t === 0 || !K(t)) {
                return t
            }
            return (t > 0 ? 1 : -1) * _(k(t))
        }, ToLength: function (e) {
            var t = se.ToInteger(e);
            if (t <= 0) {
                return 0
            }
            if (t > Number.MAX_SAFE_INTEGER) {
                return Number.MAX_SAFE_INTEGER
            }
            return t
        }, SameValue: function (e, t) {
            if (e === t) {
                if (e === 0) {
                    return 1 / e === 1 / t
                }
                return true
            }
            return X(e) && X(t)
        }, SameValueZero: function (e, t) {
            return e === t || X(e) && X(t)
        }, IsIterable: function (e) {
            return se.TypeIsObject(e) && (typeof e[oe] !== "undefined" || ee(e))
        }, GetIterator: function (e) {
            if (ee(e)) {
                return new q(e, "value")
            }
            var t = se.GetMethod(e, oe);
            if (!se.IsCallable(t)) {
                throw new TypeError("value is not an iterable")
            }
            var r = se.Call(t, e);
            if (!se.TypeIsObject(r)) {
                throw new TypeError("bad iterator")
            }
            return r
        }, GetMethod: function (e, t) {
            var r = se.ToObject(e)[t];
            if (fe(r)) {
                return void 0
            }
            if (!se.IsCallable(r)) {
                throw new TypeError("Method not callable: " + t)
            }
            return r
        }, IteratorComplete: function (e) {
            return !!e.done
        }, IteratorClose: function (e, t) {
            var r = se.GetMethod(e, "return");
            if (r === void 0) {
                return
            }
            var n, o;
            try {
                n = se.Call(r, e)
            } catch (e) {
                o = e
            }
            if (t) {
                return
            }
            if (o) {
                throw o
            }
            if (!se.TypeIsObject(n)) {
                throw new TypeError("Iterator's return method returned a non-object.")
            }
        }, IteratorNext: function (e) {
            var t = arguments.length > 1 ? e.next(arguments[1]) : e.next();
            if (!se.TypeIsObject(t)) {
                throw new TypeError("bad iterator")
            }
            return t
        }, IteratorStep: function (e) {
            var t = se.IteratorNext(e);
            var r = se.IteratorComplete(t);
            return r ? false : t
        }, Construct: function (e, t, r, n) {
            var o = typeof r === "undefined" ? e : r;
            if (!n && ie.construct) {
                return ie.construct(e, t, o)
            }
            var i = o.prototype;
            if (!se.TypeIsObject(i)) {
                i = Object.prototype
            }
            var a = O(i);
            var u = se.Call(e, a, t);
            return se.TypeIsObject(u) ? u : a
        }, SpeciesConstructor: function (e, t) {
            var r = e.constructor;
            if (r === void 0) {
                return t
            }
            if (!se.TypeIsObject(r)) {
                throw new TypeError("Bad constructor")
            }
            var n = r[J];
            if (fe(n)) {
                return t
            }
            if (!se.IsConstructor(n)) {
                throw new TypeError("Bad @@species")
            }
            return n
        }, CreateHTML: function (e, t, r, n) {
            var o = se.ToString(e);
            var i = "<" + t;
            if (r !== "") {
                var a = se.ToString(n);
                var u = a.replace(/"/g, "&quot;");
                i += " " + r + '="' + u + '"'
            }
            var f = i + ">";
            var s = f + o;
            return s + "</" + t + ">"
        }, IsRegExp: function IsRegExp(e) {
            if (!se.TypeIsObject(e)) {
                return false
            }
            var t = e[$.match];
            if (typeof t !== "undefined") {
                return !!t
            }
            return te.regex(e)
        }, ToString: function ToString(e) {
            return ae(e)
        }
    };
    if (s && ne) {
        var ce = function defineWellKnownSymbol(e) {
            if (te.symbol($[e])) {
                return $[e]
            }
            var t = $["for"]("Symbol." + e);
            Object.defineProperty($, e, {configurable: false, enumerable: false, writable: false, value: t});
            return t
        };
        if (!te.symbol($.search)) {
            var le = ce("search");
            var pe = String.prototype.search;
            h(RegExp.prototype, le, function search(e) {
                return se.Call(pe, e, [this])
            });
            var ve = function search(e) {
                var t = se.RequireObjectCoercible(this);
                if (!fe(e)) {
                    var r = se.GetMethod(e, le);
                    if (typeof r !== "undefined") {
                        return se.Call(r, e, [t])
                    }
                }
                return se.Call(pe, t, [se.ToString(e)])
            };
            re(String.prototype, "search", ve)
        }
        if (!te.symbol($.replace)) {
            var ye = ce("replace");
            var he = String.prototype.replace;
            h(RegExp.prototype, ye, function replace(e, t) {
                return se.Call(he, e, [this, t])
            });
            var be = function replace(e, t) {
                var r = se.RequireObjectCoercible(this);
                if (!fe(e)) {
                    var n = se.GetMethod(e, ye);
                    if (typeof n !== "undefined") {
                        return se.Call(n, e, [r, t])
                    }
                }
                return se.Call(he, r, [se.ToString(e), t])
            };
            re(String.prototype, "replace", be)
        }
        if (!te.symbol($.split)) {
            var ge = ce("split");
            var de = String.prototype.split;
            h(RegExp.prototype, ge, function split(e, t) {
                return se.Call(de, e, [this, t])
            });
            var me = function split(e, t) {
                var r = se.RequireObjectCoercible(this);
                if (!fe(e)) {
                    var n = se.GetMethod(e, ge);
                    if (typeof n !== "undefined") {
                        return se.Call(n, e, [r, t])
                    }
                }
                return se.Call(de, r, [se.ToString(e), t])
            };
            re(String.prototype, "split", me)
        }
        var Oe = te.symbol($.match);
        var we = Oe && function () {
            var e = {};
            e[$.match] = function () {
                return 42
            };
            return "a".match(e) !== 42
        }();
        if (!Oe || we) {
            var je = ce("match");
            var Se = String.prototype.match;
            h(RegExp.prototype, je, function match(e) {
                return se.Call(Se, e, [this])
            });
            var Te = function match(e) {
                var t = se.RequireObjectCoercible(this);
                if (!fe(e)) {
                    var r = se.GetMethod(e, je);
                    if (typeof r !== "undefined") {
                        return se.Call(r, e, [t])
                    }
                }
                return se.Call(Se, t, [se.ToString(e)])
            };
            re(String.prototype, "match", Te)
        }
    }
    var Ie = function wrapConstructor(e, t, r) {
        m.preserveToString(t, e);
        if (Object.setPrototypeOf) {
            Object.setPrototypeOf(e, t)
        }
        if (s) {
            l(Object.getOwnPropertyNames(e), function (n) {
                if (n in W || r[n]) {
                    return
                }
                m.proxy(e, n, t)
            })
        } else {
            l(Object.keys(e), function (n) {
                if (n in W || r[n]) {
                    return
                }
                t[n] = e[n]
            })
        }
        t.prototype = e.prototype;
        m.redefine(e.prototype, "constructor", t)
    };
    var Ee = function () {
        return this
    };
    var Pe = function (e) {
        if (s && !z(e, J)) {
            m.getter(e, J, Ee)
        }
    };
    var Ce = function (e, t) {
        var r = t || function iterator() {
            return this
        };
        h(e, oe, r);
        if (!e[oe] && te.symbol(oe)) {
            e[oe] = r
        }
    };
    var Me = function createDataProperty(e, t, r) {
        if (s) {
            Object.defineProperty(e, t, {configurable: true, enumerable: true, writable: true, value: r})
        } else {
            e[t] = r
        }
    };
    var xe = function createDataPropertyOrThrow(e, t, r) {
        Me(e, t, r);
        if (!se.SameValue(e[t], r)) {
            throw new TypeError("property is nonconfigurable")
        }
    };
    var Ne = function (e, t, r, n) {
        if (!se.TypeIsObject(e)) {
            throw new TypeError("Constructor requires `new`: " + t.name)
        }
        var o = t.prototype;
        if (!se.TypeIsObject(o)) {
            o = r
        }
        var i = O(o);
        for (var a in n) {
            if (z(n, a)) {
                var u = n[a];
                h(i, a, u, true)
            }
        }
        return i
    };
    if (String.fromCodePoint && String.fromCodePoint.length !== 1) {
        var Ae = String.fromCodePoint;
        re(String, "fromCodePoint", function fromCodePoint(e) {
            return se.Call(Ae, this, arguments)
        })
    }
    var Re = {
        fromCodePoint: function fromCodePoint(e) {
            var t = [];
            var r;
            for (var n = 0, o = arguments.length; n < o; n++) {
                r = Number(arguments[n]);
                if (!se.SameValue(r, se.ToInteger(r)) || r < 0 || r > 1114111) {
                    throw new RangeError("Invalid code point " + r)
                }
                if (r < 65536) {
                    M(t, String.fromCharCode(r))
                } else {
                    r -= 65536;
                    M(t, String.fromCharCode((r >> 10) + 55296));
                    M(t, String.fromCharCode(r % 1024 + 56320))
                }
            }
            return t.join("")
        }, raw: function raw(e) {
            var t = se.ToObject(e, "bad callSite");
            var r = se.ToObject(t.raw, "bad raw value");
            var n = r.length;
            var o = se.ToLength(n);
            if (o <= 0) {
                return ""
            }
            var i = [];
            var a = 0;
            var u, f, s, c;
            while (a < o) {
                u = se.ToString(a);
                s = se.ToString(r[u]);
                M(i, s);
                if (a + 1 >= o) {
                    break
                }
                f = a + 1 < arguments.length ? arguments[a + 1] : "";
                c = se.ToString(f);
                M(i, c);
                a += 1
            }
            return i.join("")
        }
    };
    if (String.raw && String.raw({raw: {0: "x", 1: "y", length: 2}}) !== "xy") {
        re(String, "raw", Re.raw)
    }
    b(String, Re);
    var _e = function repeat(e, t) {
        if (t < 1) {
            return ""
        }
        if (t % 2) {
            return repeat(e, t - 1) + e
        }
        var r = repeat(e, t / 2);
        return r + r
    };
    var ke = Infinity;
    var Fe = {
        repeat: function repeat(e) {
            var t = se.ToString(se.RequireObjectCoercible(this));
            var r = se.ToInteger(e);
            if (r < 0 || r >= ke) {
                throw new RangeError("repeat count must be less than infinity and not overflow maximum string size")
            }
            return _e(t, r)
        }, startsWith: function startsWith(e) {
            var t = se.ToString(se.RequireObjectCoercible(this));
            if (se.IsRegExp(e)) {
                throw new TypeError('Cannot call method "startsWith" with a regex')
            }
            var r = se.ToString(e);
            var n;
            if (arguments.length > 1) {
                n = arguments[1]
            }
            var o = A(se.ToInteger(n), 0);
            return C(t, o, o + r.length) === r
        }, endsWith: function endsWith(e) {
            var t = se.ToString(se.RequireObjectCoercible(this));
            if (se.IsRegExp(e)) {
                throw new TypeError('Cannot call method "endsWith" with a regex')
            }
            var r = se.ToString(e);
            var n = t.length;
            var o;
            if (arguments.length > 1) {
                o = arguments[1]
            }
            var i = typeof o === "undefined" ? n : se.ToInteger(o);
            var a = R(A(i, 0), n);
            return C(t, a - r.length, a) === r
        }, includes: function includes(e) {
            if (se.IsRegExp(e)) {
                throw new TypeError('"includes" does not accept a RegExp')
            }
            var t = se.ToString(e);
            var r;
            if (arguments.length > 1) {
                r = arguments[1]
            }
            return I(this, t, r) !== -1
        }, codePointAt: function codePointAt(e) {
            var t = se.ToString(se.RequireObjectCoercible(this));
            var r = se.ToInteger(e);
            var n = t.length;
            if (r >= 0 && r < n) {
                var o = t.charCodeAt(r);
                var i = r + 1 === n;
                if (o < 55296 || o > 56319 || i) {
                    return o
                }
                var a = t.charCodeAt(r + 1);
                if (a < 56320 || a > 57343) {
                    return o
                }
                return (o - 55296) * 1024 + (a - 56320) + 65536
            }
        }
    };
    if (String.prototype.includes && "a".includes("a", Infinity) !== false) {
        re(String.prototype, "includes", Fe.includes)
    }
    if (String.prototype.startsWith && String.prototype.endsWith) {
        var Le = i(function () {
            "/a/".startsWith(/a/)
        });
        var De = a(function () {
            return "abc".startsWith("a", Infinity) === false
        });
        if (!Le || !De) {
            re(String.prototype, "startsWith", Fe.startsWith);
            re(String.prototype, "endsWith", Fe.endsWith)
        }
    }
    if (ne) {
        var ze = a(function () {
            var e = /a/;
            e[$.match] = false;
            return "/a/".startsWith(e)
        });
        if (!ze) {
            re(String.prototype, "startsWith", Fe.startsWith)
        }
        var qe = a(function () {
            var e = /a/;
            e[$.match] = false;
            return "/a/".endsWith(e)
        });
        if (!qe) {
            re(String.prototype, "endsWith", Fe.endsWith)
        }
        var We = a(function () {
            var e = /a/;
            e[$.match] = false;
            return "/a/".includes(e)
        });
        if (!We) {
            re(String.prototype, "includes", Fe.includes)
        }
    }
    b(String.prototype, Fe);
    var Ge = ["\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003", "\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028", "\u2029\ufeff"].join("");
    var He = new RegExp("(^[" + Ge + "]+)|([" + Ge + "]+$)", "g");
    var Ve = function trim() {
        return se.ToString(se.RequireObjectCoercible(this)).replace(He, "")
    };
    var Be = ["\x85", "\u200b", "\ufffe"].join("");
    var Ue = new RegExp("[" + Be + "]", "g");
    var $e = /^[-+]0x[0-9a-f]+$/i;
    var Je = Be.trim().length !== Be.length;
    h(String.prototype, "trim", Ve, Je);
    var Xe = function (e) {
        return {value: e, done: arguments.length === 0}
    };
    var Ke = function (e) {
        se.RequireObjectCoercible(e);
        this._s = se.ToString(e);
        this._i = 0
    };
    Ke.prototype.next = function () {
        var e = this._s;
        var t = this._i;
        if (typeof e === "undefined" || t >= e.length) {
            this._s = void 0;
            return Xe()
        }
        var r = e.charCodeAt(t);
        var n, o;
        if (r < 55296 || r > 56319 || t + 1 === e.length) {
            o = 1
        } else {
            n = e.charCodeAt(t + 1);
            o = n < 56320 || n > 57343 ? 1 : 2
        }
        this._i = t + o;
        return Xe(e.substr(t, o))
    };
    Ce(Ke.prototype);
    Ce(String.prototype, function () {
        return new Ke(this)
    });
    var Ze = {
        from: function from(e) {
            var r = this;
            var n;
            if (arguments.length > 1) {
                n = arguments[1]
            }
            var o, i;
            if (typeof n === "undefined") {
                o = false
            } else {
                if (!se.IsCallable(n)) {
                    throw new TypeError("Array.from: when provided, the second argument must be a function")
                }
                if (arguments.length > 2) {
                    i = arguments[2]
                }
                o = true
            }
            var a = typeof(ee(e) || se.GetMethod(e, oe)) !== "undefined";
            var u, f, s;
            if (a) {
                f = se.IsConstructor(r) ? Object(new r) : [];
                var c = se.GetIterator(e);
                var l, p;
                s = 0;
                while (true) {
                    l = se.IteratorStep(c);
                    if (l === false) {
                        break
                    }
                    p = l.value;
                    try {
                        if (o) {
                            p = typeof i === "undefined" ? n(p, s) : t(n, i, p, s)
                        }
                        f[s] = p
                    } catch (e) {
                        se.IteratorClose(c, true);
                        throw e
                    }
                    s += 1
                }
                u = s
            } else {
                var v = se.ToObject(e);
                u = se.ToLength(v.length);
                f = se.IsConstructor(r) ? Object(new r(u)) : new Array(u);
                var y;
                for (s = 0; s < u; ++s) {
                    y = v[s];
                    if (o) {
                        y = typeof i === "undefined" ? n(y, s) : t(n, i, y, s)
                    }
                    xe(f, s, y)
                }
            }
            f.length = u;
            return f
        }, of: function of() {
            var e = arguments.length;
            var t = this;
            var n = r(t) || !se.IsCallable(t) ? new Array(e) : se.Construct(t, [e]);
            for (var o = 0; o < e; ++o) {
                xe(n, o, arguments[o])
            }
            n.length = e;
            return n
        }
    };
    b(Array, Ze);
    Pe(Array);
    q = function (e, t) {
        this.i = 0;
        this.array = e;
        this.kind = t
    };
    b(q.prototype, {
        next: function () {
            var e = this.i;
            var t = this.array;
            if (!(this instanceof q)) {
                throw new TypeError("Not an ArrayIterator")
            }
            if (typeof t !== "undefined") {
                var r = se.ToLength(t.length);
                for (; e < r; e++) {
                    var n = this.kind;
                    var o;
                    if (n === "key") {
                        o = e
                    } else if (n === "value") {
                        o = t[e]
                    } else if (n === "entry") {
                        o = [e, t[e]]
                    }
                    this.i = e + 1;
                    return Xe(o)
                }
            }
            this.array = void 0;
            return Xe()
        }
    });
    Ce(q.prototype);
    var Ye = Array.of === Ze.of || function () {
        var e = function Foo(e) {
            this.length = e
        };
        e.prototype = [];
        var t = Array.of.apply(e, [1, 2]);
        return t instanceof e && t.length === 2
    }();
    if (!Ye) {
        re(Array, "of", Ze.of)
    }
    var Qe = {
        copyWithin: function copyWithin(e, t) {
            var r = se.ToObject(this);
            var n = se.ToLength(r.length);
            var o = se.ToInteger(e);
            var i = se.ToInteger(t);
            var a = o < 0 ? A(n + o, 0) : R(o, n);
            var u = i < 0 ? A(n + i, 0) : R(i, n);
            var f;
            if (arguments.length > 2) {
                f = arguments[2]
            }
            var s = typeof f === "undefined" ? n : se.ToInteger(f);
            var c = s < 0 ? A(n + s, 0) : R(s, n);
            var l = R(c - u, n - a);
            var p = 1;
            if (u < a && a < u + l) {
                p = -1;
                u += l - 1;
                a += l - 1
            }
            while (l > 0) {
                if (u in r) {
                    r[a] = r[u]
                } else {
                    delete r[a]
                }
                u += p;
                a += p;
                l -= 1
            }
            return r
        }, fill: function fill(e) {
            var t;
            if (arguments.length > 1) {
                t = arguments[1]
            }
            var r;
            if (arguments.length > 2) {
                r = arguments[2]
            }
            var n = se.ToObject(this);
            var o = se.ToLength(n.length);
            t = se.ToInteger(typeof t === "undefined" ? 0 : t);
            r = se.ToInteger(typeof r === "undefined" ? o : r);
            var i = t < 0 ? A(o + t, 0) : R(t, o);
            var a = r < 0 ? o + r : r;
            for (var u = i; u < o && u < a; ++u) {
                n[u] = e
            }
            return n
        }, find: function find(e) {
            var r = se.ToObject(this);
            var n = se.ToLength(r.length);
            if (!se.IsCallable(e)) {
                throw new TypeError("Array#find: predicate must be a function")
            }
            var o = arguments.length > 1 ? arguments[1] : null;
            for (var i = 0, a; i < n; i++) {
                a = r[i];
                if (o) {
                    if (t(e, o, a, i, r)) {
                        return a
                    }
                } else if (e(a, i, r)) {
                    return a
                }
            }
        }, findIndex: function findIndex(e) {
            var r = se.ToObject(this);
            var n = se.ToLength(r.length);
            if (!se.IsCallable(e)) {
                throw new TypeError("Array#findIndex: predicate must be a function")
            }
            var o = arguments.length > 1 ? arguments[1] : null;
            for (var i = 0; i < n; i++) {
                if (o) {
                    if (t(e, o, r[i], i, r)) {
                        return i
                    }
                } else if (e(r[i], i, r)) {
                    return i
                }
            }
            return -1
        }, keys: function keys() {
            return new q(this, "key")
        }, values: function values() {
            return new q(this, "value")
        }, entries: function entries() {
            return new q(this, "entry")
        }
    };
    if (Array.prototype.keys && !se.IsCallable([1].keys().next)) {
        delete Array.prototype.keys
    }
    if (Array.prototype.entries && !se.IsCallable([1].entries().next)) {
        delete Array.prototype.entries
    }
    if (Array.prototype.keys && Array.prototype.entries && !Array.prototype.values && Array.prototype[oe]) {
        b(Array.prototype, {values: Array.prototype[oe]});
        if (te.symbol($.unscopables)) {
            Array.prototype[$.unscopables].values = true
        }
    }
    if (c && Array.prototype.values && Array.prototype.values.name !== "values") {
        var et = Array.prototype.values;
        re(Array.prototype, "values", function values() {
            return se.Call(et, this, arguments)
        });
        h(Array.prototype, oe, Array.prototype.values, true)
    }
    b(Array.prototype, Qe);
    if (1 / [true].indexOf(true, -0) < 0) {
        h(Array.prototype, "indexOf", function indexOf(e) {
            var t = E(this, arguments);
            if (t === 0 && 1 / t < 0) {
                return 0
            }
            return t
        }, true)
    }
    Ce(Array.prototype, function () {
        return this.values()
    });
    if (Object.getPrototypeOf) {
        Ce(Object.getPrototypeOf([].values()))
    }
    var tt = function () {
        return a(function () {
            return Array.from({length: -1}).length === 0
        })
    }();
    var rt = function () {
        var e = Array.from([0].entries());
        return e.length === 1 && r(e[0]) && e[0][0] === 0 && e[0][1] === 0
    }();
    if (!tt || !rt) {
        re(Array, "from", Ze.from)
    }
    var nt = function () {
        return a(function () {
            return Array.from([0], void 0)
        })
    }();
    if (!nt) {
        var ot = Array.from;
        re(Array, "from", function from(e) {
            if (arguments.length > 1 && typeof arguments[1] !== "undefined") {
                return se.Call(ot, this, arguments)
            } else {
                return t(ot, this, e)
            }
        })
    }
    var it = -(Math.pow(2, 32) - 1);
    var at = function (e, r) {
        var n = {length: it};
        n[r ? (n.length >>> 0) - 1 : 0] = true;
        return a(function () {
            t(e, n, function () {
                throw new RangeError("should not reach here")
            }, []);
            return true
        })
    };
    if (!at(Array.prototype.forEach)) {
        var ut = Array.prototype.forEach;
        re(Array.prototype, "forEach", function forEach(e) {
            return se.Call(ut, this.length >= 0 ? this : [], arguments)
        }, true)
    }
    if (!at(Array.prototype.map)) {
        var ft = Array.prototype.map;
        re(Array.prototype, "map", function map(e) {
            return se.Call(ft, this.length >= 0 ? this : [], arguments)
        }, true)
    }
    if (!at(Array.prototype.filter)) {
        var st = Array.prototype.filter;
        re(Array.prototype, "filter", function filter(e) {
            return se.Call(st, this.length >= 0 ? this : [], arguments)
        }, true)
    }
    if (!at(Array.prototype.some)) {
        var ct = Array.prototype.some;
        re(Array.prototype, "some", function some(e) {
            return se.Call(ct, this.length >= 0 ? this : [], arguments)
        }, true)
    }
    if (!at(Array.prototype.every)) {
        var lt = Array.prototype.every;
        re(Array.prototype, "every", function every(e) {
            return se.Call(lt, this.length >= 0 ? this : [], arguments)
        }, true)
    }
    if (!at(Array.prototype.reduce)) {
        var pt = Array.prototype.reduce;
        re(Array.prototype, "reduce", function reduce(e) {
            return se.Call(pt, this.length >= 0 ? this : [], arguments)
        }, true)
    }
    if (!at(Array.prototype.reduceRight, true)) {
        var vt = Array.prototype.reduceRight;
        re(Array.prototype, "reduceRight", function reduceRight(e) {
            return se.Call(vt, this.length >= 0 ? this : [], arguments)
        }, true)
    }
    var yt = Number("0o10") !== 8;
    var ht = Number("0b10") !== 2;
    var bt = y(Be, function (e) {
        return Number(e + 0 + e) === 0
    });
    if (yt || ht || bt) {
        var gt = Number;
        var dt = /^0b[01]+$/i;
        var mt = /^0o[0-7]+$/i;
        var Ot = dt.test.bind(dt);
        var wt = mt.test.bind(mt);
        var jt = function (e) {
            var t;
            if (typeof e.valueOf === "function") {
                t = e.valueOf();
                if (te.primitive(t)) {
                    return t
                }
            }
            if (typeof e.toString === "function") {
                t = e.toString();
                if (te.primitive(t)) {
                    return t
                }
            }
            throw new TypeError("No default value")
        };
        var St = Ue.test.bind(Ue);
        var Tt = $e.test.bind($e);
        var It = function () {
            var e = function Number(t) {
                var r;
                if (arguments.length > 0) {
                    r = te.primitive(t) ? t : jt(t, "number")
                } else {
                    r = 0
                }
                if (typeof r === "string") {
                    r = se.Call(Ve, r);
                    if (Ot(r)) {
                        r = parseInt(C(r, 2), 2)
                    } else if (wt(r)) {
                        r = parseInt(C(r, 2), 8)
                    } else if (St(r) || Tt(r)) {
                        r = NaN
                    }
                }
                var n = this;
                var o = a(function () {
                    gt.prototype.valueOf.call(n);
                    return true
                });
                if (n instanceof e && !o) {
                    return new gt(r)
                }
                return gt(r)
            };
            return e
        }();
        Ie(gt, It, {});
        b(It, {
            NaN: gt.NaN,
            MAX_VALUE: gt.MAX_VALUE,
            MIN_VALUE: gt.MIN_VALUE,
            NEGATIVE_INFINITY: gt.NEGATIVE_INFINITY,
            POSITIVE_INFINITY: gt.POSITIVE_INFINITY
        });
        Number = It;
        m.redefine(S, "Number", It)
    }
    var Et = Math.pow(2, 53) - 1;
    b(Number, {
        MAX_SAFE_INTEGER: Et,
        MIN_SAFE_INTEGER: -Et,
        EPSILON: 2.220446049250313e-16,
        parseInt: S.parseInt,
        parseFloat: S.parseFloat,
        isFinite: K,
        isInteger: function isInteger(e) {
            return K(e) && se.ToInteger(e) === e
        },
        isSafeInteger: function isSafeInteger(e) {
            return Number.isInteger(e) && k(e) <= Number.MAX_SAFE_INTEGER
        },
        isNaN: X
    });
    h(Number, "parseInt", S.parseInt, Number.parseInt !== S.parseInt);
    if ([, 1].find(function () {
            return true
        }) === 1) {
        re(Array.prototype, "find", Qe.find)
    }
    if ([, 1].findIndex(function () {
            return true
        }) !== 0) {
        re(Array.prototype, "findIndex", Qe.findIndex)
    }
    var Pt = Function.bind.call(Function.bind, Object.prototype.propertyIsEnumerable);
    var Ct = function ensureEnumerable(e, t) {
        if (s && Pt(e, t)) {
            Object.defineProperty(e, t, {enumerable: false})
        }
    };
    var Mt = function sliceArgs() {
        var e = Number(this);
        var t = arguments.length;
        var r = t - e;
        var n = new Array(r < 0 ? 0 : r);
        for (var o = e; o < t; ++o) {
            n[o - e] = arguments[o]
        }
        return n
    };
    var xt = function assignTo(e) {
        return function assignToSource(t, r) {
            t[r] = e[r];
            return t
        }
    };
    var Nt = function (e, t) {
        var r = n(Object(t));
        var o;
        if (se.IsCallable(Object.getOwnPropertySymbols)) {
            o = v(Object.getOwnPropertySymbols(Object(t)), Pt(t))
        }
        return p(P(r, o || []), xt(t), e)
    };
    var At = {
        assign: function (e, t) {
            var r = se.ToObject(e, "Cannot convert undefined or null to object");
            return p(se.Call(Mt, 1, arguments), Nt, r)
        }, is: function is(e, t) {
            return se.SameValue(e, t)
        }
    };
    var Rt = Object.assign && Object.preventExtensions && function () {
        var e = Object.preventExtensions({1: 2});
        try {
            Object.assign(e, "xy")
        } catch (t) {
            return e[1] === "y"
        }
    }();
    if (Rt) {
        re(Object, "assign", At.assign)
    }
    b(Object, At);
    if (s) {
        var _t = {
            setPrototypeOf: function (e, r) {
                var n;
                var o = function (e, t) {
                    if (!se.TypeIsObject(e)) {
                        throw new TypeError("cannot set prototype on a non-object")
                    }
                    if (!(t === null || se.TypeIsObject(t))) {
                        throw new TypeError("can only set prototype to an object or null" + t)
                    }
                };
                var i = function (e, r) {
                    o(e, r);
                    t(n, e, r);
                    return e
                };
                try {
                    n = e.getOwnPropertyDescriptor(e.prototype, r).set;
                    t(n, {}, null)
                } catch (t) {
                    if (e.prototype !== {}[r]) {
                        return
                    }
                    n = function (e) {
                        this[r] = e
                    };
                    i.polyfill = i(i({}, null), e.prototype) instanceof e
                }
                return i
            }(Object, "__proto__")
        };
        b(Object, _t)
    }
    if (Object.setPrototypeOf && Object.getPrototypeOf && Object.getPrototypeOf(Object.setPrototypeOf({}, null)) !== null && Object.getPrototypeOf(Object.create(null)) === null) {
        (function () {
            var e = Object.create(null);
            var t = Object.getPrototypeOf;
            var r = Object.setPrototypeOf;
            Object.getPrototypeOf = function (r) {
                var n = t(r);
                return n === e ? null : n
            };
            Object.setPrototypeOf = function (t, n) {
                var o = n === null ? e : n;
                return r(t, o)
            };
            Object.setPrototypeOf.polyfill = false
        })()
    }
    var kt = !i(function () {
        Object.keys("foo")
    });
    if (!kt) {
        var Ft = Object.keys;
        re(Object, "keys", function keys(e) {
            return Ft(se.ToObject(e))
        });
        n = Object.keys
    }
    var Lt = i(function () {
        Object.keys(/a/g)
    });
    if (Lt) {
        var Dt = Object.keys;
        re(Object, "keys", function keys(e) {
            if (te.regex(e)) {
                var t = [];
                for (var r in e) {
                    if (z(e, r)) {
                        M(t, r)
                    }
                }
                return t
            }
            return Dt(e)
        });
        n = Object.keys
    }
    if (Object.getOwnPropertyNames) {
        var zt = !i(function () {
            Object.getOwnPropertyNames("foo")
        });
        if (!zt) {
            var qt = typeof window === "object" ? Object.getOwnPropertyNames(window) : [];
            var Wt = Object.getOwnPropertyNames;
            re(Object, "getOwnPropertyNames", function getOwnPropertyNames(e) {
                var t = se.ToObject(e);
                if (g(t) === "[object Window]") {
                    try {
                        return Wt(t)
                    } catch (e) {
                        return P([], qt)
                    }
                }
                return Wt(t)
            })
        }
    }
    if (Object.getOwnPropertyDescriptor) {
        var Gt = !i(function () {
            Object.getOwnPropertyDescriptor("foo", "bar")
        });
        if (!Gt) {
            var Ht = Object.getOwnPropertyDescriptor;
            re(Object, "getOwnPropertyDescriptor", function getOwnPropertyDescriptor(e, t) {
                return Ht(se.ToObject(e), t)
            })
        }
    }
    if (Object.seal) {
        var Vt = !i(function () {
            Object.seal("foo")
        });
        if (!Vt) {
            var Bt = Object.seal;
            re(Object, "seal", function seal(e) {
                if (!se.TypeIsObject(e)) {
                    return e
                }
                return Bt(e)
            })
        }
    }
    if (Object.isSealed) {
        var Ut = !i(function () {
            Object.isSealed("foo")
        });
        if (!Ut) {
            var $t = Object.isSealed;
            re(Object, "isSealed", function isSealed(e) {
                if (!se.TypeIsObject(e)) {
                    return true
                }
                return $t(e)
            })
        }
    }
    if (Object.freeze) {
        var Jt = !i(function () {
            Object.freeze("foo")
        });
        if (!Jt) {
            var Xt = Object.freeze;
            re(Object, "freeze", function freeze(e) {
                if (!se.TypeIsObject(e)) {
                    return e
                }
                return Xt(e)
            })
        }
    }
    if (Object.isFrozen) {
        var Kt = !i(function () {
            Object.isFrozen("foo")
        });
        if (!Kt) {
            var Zt = Object.isFrozen;
            re(Object, "isFrozen", function isFrozen(e) {
                if (!se.TypeIsObject(e)) {
                    return true
                }
                return Zt(e)
            })
        }
    }
    if (Object.preventExtensions) {
        var Yt = !i(function () {
            Object.preventExtensions("foo")
        });
        if (!Yt) {
            var Qt = Object.preventExtensions;
            re(Object, "preventExtensions", function preventExtensions(e) {
                if (!se.TypeIsObject(e)) {
                    return e
                }
                return Qt(e)
            })
        }
    }
    if (Object.isExtensible) {
        var er = !i(function () {
            Object.isExtensible("foo")
        });
        if (!er) {
            var tr = Object.isExtensible;
            re(Object, "isExtensible", function isExtensible(e) {
                if (!se.TypeIsObject(e)) {
                    return false
                }
                return tr(e)
            })
        }
    }
    if (Object.getPrototypeOf) {
        var rr = !i(function () {
            Object.getPrototypeOf("foo")
        });
        if (!rr) {
            var nr = Object.getPrototypeOf;
            re(Object, "getPrototypeOf", function getPrototypeOf(e) {
                return nr(se.ToObject(e))
            })
        }
    }
    var or = s && function () {
        var e = Object.getOwnPropertyDescriptor(RegExp.prototype, "flags");
        return e && se.IsCallable(e.get)
    }();
    if (s && !or) {
        var ir = function flags() {
            if (!se.TypeIsObject(this)) {
                throw new TypeError("Method called on incompatible type: must be an object.")
            }
            var e = "";
            if (this.global) {
                e += "g"
            }
            if (this.ignoreCase) {
                e += "i"
            }
            if (this.multiline) {
                e += "m"
            }
            if (this.unicode) {
                e += "u"
            }
            if (this.sticky) {
                e += "y"
            }
            return e
        };
        m.getter(RegExp.prototype, "flags", ir)
    }
    var ar = s && a(function () {
        return String(new RegExp(/a/g, "i")) === "/a/i"
    });
    var ur = ne && s && function () {
        var e = /./;
        e[$.match] = false;
        return RegExp(e) === e
    }();
    var fr = a(function () {
        return RegExp.prototype.toString.call({source: "abc"}) === "/abc/"
    });
    var sr = fr && a(function () {
        return RegExp.prototype.toString.call({source: "a", flags: "b"}) === "/a/b"
    });
    if (!fr || !sr) {
        var cr = RegExp.prototype.toString;
        h(RegExp.prototype, "toString", function toString() {
            var e = se.RequireObjectCoercible(this);
            if (te.regex(e)) {
                return t(cr, e)
            }
            var r = ae(e.source);
            var n = ae(e.flags);
            return "/" + r + "/" + n
        }, true);
        m.preserveToString(RegExp.prototype.toString, cr)
    }
    if (s && (!ar || ur)) {
        var lr = Object.getOwnPropertyDescriptor(RegExp.prototype, "flags").get;
        var pr = Object.getOwnPropertyDescriptor(RegExp.prototype, "source") || {};
        var vr = function () {
            return this.source
        };
        var yr = se.IsCallable(pr.get) ? pr.get : vr;
        var hr = RegExp;
        var br = function () {
            return function RegExp(e, t) {
                var r = se.IsRegExp(e);
                var n = this instanceof RegExp;
                if (!n && r && typeof t === "undefined" && e.constructor === RegExp) {
                    return e
                }
                var o = e;
                var i = t;
                if (te.regex(e)) {
                    o = se.Call(yr, e);
                    i = typeof t === "undefined" ? se.Call(lr, e) : t;
                    return new RegExp(o, i)
                } else if (r) {
                    o = e.source;
                    i = typeof t === "undefined" ? e.flags : t
                }
                return new hr(e, t)
            }
        }();
        Ie(hr, br, {$input: true});
        RegExp = br;
        m.redefine(S, "RegExp", br)
    }
    if (s) {
        var gr = {input: "$_", lastMatch: "$&", lastParen: "$+", leftContext: "$`", rightContext: "$'"};
        l(n(gr), function (e) {
            if (e in RegExp && !(gr[e] in RegExp)) {
                m.getter(RegExp, gr[e], function get() {
                    return RegExp[e]
                })
            }
        })
    }
    Pe(RegExp);
    var dr = 1 / Number.EPSILON;
    var mr = function roundTiesToEven(e) {
        return e + dr - dr
    };
    var Or = Math.pow(2, -23);
    var wr = Math.pow(2, 127) * (2 - Or);
    var jr = Math.pow(2, -126);
    var Sr = Math.E;
    var Tr = Math.LOG2E;
    var Ir = Math.LOG10E;
    var Er = Number.prototype.clz;
    delete Number.prototype.clz;
    var Pr = {
        acosh: function acosh(e) {
            var t = Number(e);
            if (X(t) || e < 1) {
                return NaN
            }
            if (t === 1) {
                return 0
            }
            if (t === Infinity) {
                return t
            }
            return L(t / Sr + D(t + 1) * D(t - 1) / Sr) + 1
        }, asinh: function asinh(e) {
            var t = Number(e);
            if (t === 0 || !T(t)) {
                return t
            }
            return t < 0 ? -asinh(-t) : L(t + D(t * t + 1))
        }, atanh: function atanh(e) {
            var t = Number(e);
            if (X(t) || t < -1 || t > 1) {
                return NaN
            }
            if (t === -1) {
                return -Infinity
            }
            if (t === 1) {
                return Infinity
            }
            if (t === 0) {
                return t
            }
            return .5 * L((1 + t) / (1 - t))
        }, cbrt: function cbrt(e) {
            var t = Number(e);
            if (t === 0) {
                return t
            }
            var r = t < 0;
            var n;
            if (r) {
                t = -t
            }
            if (t === Infinity) {
                n = Infinity
            } else {
                n = F(L(t) / 3);
                n = (t / (n * n) + 2 * n) / 3
            }
            return r ? -n : n
        }, clz32: function clz32(e) {
            var t = Number(e);
            var r = se.ToUint32(t);
            if (r === 0) {
                return 32
            }
            return Er ? se.Call(Er, r) : 31 - _(L(r + .5) * Tr)
        }, cosh: function cosh(e) {
            var t = Number(e);
            if (t === 0) {
                return 1
            }
            if (X(t)) {
                return NaN
            }
            if (!T(t)) {
                return Infinity
            }
            if (t < 0) {
                t = -t
            }
            if (t > 21) {
                return F(t) / 2
            }
            return (F(t) + F(-t)) / 2
        }, expm1: function expm1(e) {
            var t = Number(e);
            if (t === -Infinity) {
                return -1
            }
            if (!T(t) || t === 0) {
                return t
            }
            if (k(t) > .5) {
                return F(t) - 1
            }
            var r = t;
            var n = 0;
            var o = 1;
            while (n + r !== n) {
                n += r;
                o += 1;
                r *= t / o
            }
            return n
        }, hypot: function hypot(e, t) {
            var r = 0;
            var n = 0;
            for (var o = 0; o < arguments.length; ++o) {
                var i = k(Number(arguments[o]));
                if (n < i) {
                    r *= n / i * (n / i);
                    r += 1;
                    n = i
                } else {
                    r += i > 0 ? i / n * (i / n) : i
                }
            }
            return n === Infinity ? Infinity : n * D(r)
        }, log2: function log2(e) {
            return L(e) * Tr
        }, log10: function log10(e) {
            return L(e) * Ir
        }, log1p: function log1p(e) {
            var t = Number(e);
            if (t < -1 || X(t)) {
                return NaN
            }
            if (t === 0 || t === Infinity) {
                return t
            }
            if (t === -1) {
                return -Infinity
            }
            return 1 + t - 1 === 0 ? t : t * (L(1 + t) / (1 + t - 1))
        }, sign: Z, sinh: function sinh(e) {
            var t = Number(e);
            if (!T(t) || t === 0) {
                return t
            }
            if (k(t) < 1) {
                return (Math.expm1(t) - Math.expm1(-t)) / 2
            }
            return (F(t - 1) - F(-t - 1)) * Sr / 2
        }, tanh: function tanh(e) {
            var t = Number(e);
            if (X(t) || t === 0) {
                return t
            }
            if (t >= 20) {
                return 1
            }
            if (t <= -20) {
                return -1
            }
            return (Math.expm1(t) - Math.expm1(-t)) / (F(t) + F(-t))
        }, trunc: function trunc(e) {
            var t = Number(e);
            return t < 0 ? -_(-t) : _(t)
        }, imul: function imul(e, t) {
            var r = se.ToUint32(e);
            var n = se.ToUint32(t);
            var o = r >>> 16 & 65535;
            var i = r & 65535;
            var a = n >>> 16 & 65535;
            var u = n & 65535;
            return i * u + (o * u + i * a << 16 >>> 0) | 0
        }, fround: function fround(e) {
            var t = Number(e);
            if (t === 0 || t === Infinity || t === -Infinity || X(t)) {
                return t
            }
            var r = Z(t);
            var n = k(t);
            if (n < jr) {
                return r * mr(n / jr / Or) * jr * Or
            }
            var o = (1 + Or / Number.EPSILON) * n;
            var i = o - (o - n);
            if (i > wr || X(i)) {
                return r * Infinity
            }
            return r * i
        }
    };
    b(Math, Pr);
    h(Math, "log1p", Pr.log1p, Math.log1p(-1e-17) !== -1e-17);
    h(Math, "asinh", Pr.asinh, Math.asinh(-1e7) !== -Math.asinh(1e7));
    h(Math, "tanh", Pr.tanh, Math.tanh(-2e-17) !== -2e-17);
    h(Math, "acosh", Pr.acosh, Math.acosh(Number.MAX_VALUE) === Infinity);
    h(Math, "cbrt", Pr.cbrt, Math.abs(1 - Math.cbrt(1e-300) / 1e-100) / Number.EPSILON > 8);
    h(Math, "sinh", Pr.sinh, Math.sinh(-2e-17) !== -2e-17);
    var Cr = Math.expm1(10);
    h(Math, "expm1", Pr.expm1, Cr > 22025.465794806718 || Cr < 22025.465794806718);
    var Mr = Math.round;
    var xr = Math.round(.5 - Number.EPSILON / 4) === 0 && Math.round(-.5 + Number.EPSILON / 3.99) === 1;
    var Nr = dr + 1;
    var Ar = 2 * dr - 1;
    var Rr = [Nr, Ar].every(function (e) {
        return Math.round(e) === e
    });
    h(Math, "round", function round(e) {
        var t = _(e);
        var r = t === -1 ? -0 : t + 1;
        return e - t < .5 ? t : r
    }, !xr || !Rr);
    m.preserveToString(Math.round, Mr);
    var _r = Math.imul;
    if (Math.imul(4294967295, 5) !== -5) {
        Math.imul = Pr.imul;
        m.preserveToString(Math.imul, _r)
    }
    if (Math.imul.length !== 2) {
        re(Math, "imul", function imul(e, t) {
            return se.Call(_r, Math, arguments)
        })
    }
    var kr = function () {
        var e = S.setTimeout;
        if (typeof e !== "function" && typeof e !== "object") {
            return
        }
        se.IsPromise = function (e) {
            if (!se.TypeIsObject(e)) {
                return false
            }
            if (typeof e._promise === "undefined") {
                return false
            }
            return true
        };
        var r = function (e) {
            if (!se.IsConstructor(e)) {
                throw new TypeError("Bad promise constructor")
            }
            var t = this;
            var r = function (e, r) {
                if (t.resolve !== void 0 || t.reject !== void 0) {
                    throw new TypeError("Bad Promise implementation!")
                }
                t.resolve = e;
                t.reject = r
            };
            t.resolve = void 0;
            t.reject = void 0;
            t.promise = new e(r);
            if (!(se.IsCallable(t.resolve) && se.IsCallable(t.reject))) {
                throw new TypeError("Bad promise constructor")
            }
        };
        var n;
        if (typeof window !== "undefined" && se.IsCallable(window.postMessage)) {
            n = function () {
                var e = [];
                var t = "zero-timeout-message";
                var r = function (r) {
                    M(e, r);
                    window.postMessage(t, "*")
                };
                var n = function (r) {
                    if (r.source === window && r.data === t) {
                        r.stopPropagation();
                        if (e.length === 0) {
                            return
                        }
                        var n = N(e);
                        n()
                    }
                };
                window.addEventListener("message", n, true);
                return r
            }
        }
        var o = function () {
            var e = S.Promise;
            var t = e && e.resolve && e.resolve();
            return t && function (e) {
                return t.then(e)
            }
        };
        var i = se.IsCallable(S.setImmediate) ? S.setImmediate : typeof process === "object" && process.nextTick ? process.nextTick : o() || (se.IsCallable(n) ? n() : function (t) {
            e(t, 0)
        });
        var a = function (e) {
            return e
        };
        var u = function (e) {
            throw e
        };
        var f = 0;
        var s = 1;
        var c = 2;
        var l = 0;
        var p = 1;
        var v = 2;
        var y = {};
        var h = function (e, t, r) {
            i(function () {
                g(e, t, r)
            })
        };
        var g = function (e, t, r) {
            var n, o;
            if (t === y) {
                return e(r)
            }
            try {
                n = e(r);
                o = t.resolve
            } catch (e) {
                n = e;
                o = t.reject
            }
            o(n)
        };
        var d = function (e, t) {
            var r = e._promise;
            var n = r.reactionLength;
            if (n > 0) {
                h(r.fulfillReactionHandler0, r.reactionCapability0, t);
                r.fulfillReactionHandler0 = void 0;
                r.rejectReactions0 = void 0;
                r.reactionCapability0 = void 0;
                if (n > 1) {
                    for (var o = 1, i = 0; o < n; o++, i += 3) {
                        h(r[i + l], r[i + v], t);
                        e[i + l] = void 0;
                        e[i + p] = void 0;
                        e[i + v] = void 0
                    }
                }
            }
            r.result = t;
            r.state = s;
            r.reactionLength = 0
        };
        var m = function (e, t) {
            var r = e._promise;
            var n = r.reactionLength;
            if (n > 0) {
                h(r.rejectReactionHandler0, r.reactionCapability0, t);
                r.fulfillReactionHandler0 = void 0;
                r.rejectReactions0 = void 0;
                r.reactionCapability0 = void 0;
                if (n > 1) {
                    for (var o = 1, i = 0; o < n; o++, i += 3) {
                        h(r[i + p], r[i + v], t);
                        e[i + l] = void 0;
                        e[i + p] = void 0;
                        e[i + v] = void 0
                    }
                }
            }
            r.result = t;
            r.state = c;
            r.reactionLength = 0
        };
        var O = function (e) {
            var t = false;
            var r = function (r) {
                var n;
                if (t) {
                    return
                }
                t = true;
                if (r === e) {
                    return m(e, new TypeError("Self resolution"))
                }
                if (!se.TypeIsObject(r)) {
                    return d(e, r)
                }
                try {
                    n = r.then
                } catch (t) {
                    return m(e, t)
                }
                if (!se.IsCallable(n)) {
                    return d(e, r)
                }
                i(function () {
                    j(e, r, n)
                })
            };
            var n = function (r) {
                if (t) {
                    return
                }
                t = true;
                return m(e, r)
            };
            return {resolve: r, reject: n}
        };
        var w = function (e, r, n, o) {
            if (e === I) {
                t(e, r, n, o, y)
            } else {
                t(e, r, n, o)
            }
        };
        var j = function (e, t, r) {
            var n = O(e);
            var o = n.resolve;
            var i = n.reject;
            try {
                w(r, t, o, i)
            } catch (e) {
                i(e)
            }
        };
        var T, I;
        var E = function () {
            var e = function Promise(t) {
                if (!(this instanceof e)) {
                    throw new TypeError('Constructor Promise requires "new"')
                }
                if (this && this._promise) {
                    throw new TypeError("Bad construction")
                }
                if (!se.IsCallable(t)) {
                    throw new TypeError("not a valid resolver")
                }
                var r = Ne(this, e, T, {
                    _promise: {
                        result: void 0,
                        state: f,
                        reactionLength: 0,
                        fulfillReactionHandler0: void 0,
                        rejectReactionHandler0: void 0,
                        reactionCapability0: void 0
                    }
                });
                var n = O(r);
                var o = n.reject;
                try {
                    t(n.resolve, o)
                } catch (e) {
                    o(e)
                }
                return r
            };
            return e
        }();
        T = E.prototype;
        var P = function (e, t, r, n) {
            var o = false;
            return function (i) {
                if (o) {
                    return
                }
                o = true;
                t[e] = i;
                if (--n.count === 0) {
                    var a = r.resolve;
                    a(t)
                }
            }
        };
        var C = function (e, t, r) {
            var n = e.iterator;
            var o = [];
            var i = {count: 1};
            var a, u;
            var f = 0;
            while (true) {
                try {
                    a = se.IteratorStep(n);
                    if (a === false) {
                        e.done = true;
                        break
                    }
                    u = a.value
                } catch (t) {
                    e.done = true;
                    throw t
                }
                o[f] = void 0;
                var s = t.resolve(u);
                var c = P(f, o, r, i);
                i.count += 1;
                w(s.then, s, c, r.reject);
                f += 1
            }
            if (--i.count === 0) {
                var l = r.resolve;
                l(o)
            }
            return r.promise
        };
        var x = function (e, t, r) {
            var n = e.iterator;
            var o, i, a;
            while (true) {
                try {
                    o = se.IteratorStep(n);
                    if (o === false) {
                        e.done = true;
                        break
                    }
                    i = o.value
                } catch (t) {
                    e.done = true;
                    throw t
                }
                a = t.resolve(i);
                w(a.then, a, r.resolve, r.reject)
            }
            return r.promise
        };
        b(E, {
            all: function all(e) {
                var t = this;
                if (!se.TypeIsObject(t)) {
                    throw new TypeError("Promise is not object")
                }
                var n = new r(t);
                var o, i;
                try {
                    o = se.GetIterator(e);
                    i = {iterator: o, done: false};
                    return C(i, t, n)
                } catch (e) {
                    var a = e;
                    if (i && !i.done) {
                        try {
                            se.IteratorClose(o, true)
                        } catch (e) {
                            a = e
                        }
                    }
                    var u = n.reject;
                    u(a);
                    return n.promise
                }
            }, race: function race(e) {
                var t = this;
                if (!se.TypeIsObject(t)) {
                    throw new TypeError("Promise is not object")
                }
                var n = new r(t);
                var o, i;
                try {
                    o = se.GetIterator(e);
                    i = {iterator: o, done: false};
                    return x(i, t, n)
                } catch (e) {
                    var a = e;
                    if (i && !i.done) {
                        try {
                            se.IteratorClose(o, true)
                        } catch (e) {
                            a = e
                        }
                    }
                    var u = n.reject;
                    u(a);
                    return n.promise
                }
            }, reject: function reject(e) {
                var t = this;
                if (!se.TypeIsObject(t)) {
                    throw new TypeError("Bad promise constructor")
                }
                var n = new r(t);
                var o = n.reject;
                o(e);
                return n.promise
            }, resolve: function resolve(e) {
                var t = this;
                if (!se.TypeIsObject(t)) {
                    throw new TypeError("Bad promise constructor")
                }
                if (se.IsPromise(e)) {
                    var n = e.constructor;
                    if (n === t) {
                        return e
                    }
                }
                var o = new r(t);
                var i = o.resolve;
                i(e);
                return o.promise
            }
        });
        b(T, {
            catch: function (e) {
                return this.then(null, e)
            }, then: function then(e, t) {
                var n = this;
                if (!se.IsPromise(n)) {
                    throw new TypeError("not a promise")
                }
                var o = se.SpeciesConstructor(n, E);
                var i;
                var b = arguments.length > 2 && arguments[2] === y;
                if (b && o === E) {
                    i = y
                } else {
                    i = new r(o)
                }
                var g = se.IsCallable(e) ? e : a;
                var d = se.IsCallable(t) ? t : u;
                var m = n._promise;
                var O;
                if (m.state === f) {
                    if (m.reactionLength === 0) {
                        m.fulfillReactionHandler0 = g;
                        m.rejectReactionHandler0 = d;
                        m.reactionCapability0 = i
                    } else {
                        var w = 3 * (m.reactionLength - 1);
                        m[w + l] = g;
                        m[w + p] = d;
                        m[w + v] = i
                    }
                    m.reactionLength += 1
                } else if (m.state === s) {
                    O = m.result;
                    h(g, i, O)
                } else if (m.state === c) {
                    O = m.result;
                    h(d, i, O)
                } else {
                    throw new TypeError("unexpected Promise state")
                }
                return i.promise
            }
        });
        y = new r(E);
        I = T.then;
        return E
    }();
    if (S.Promise) {
        delete S.Promise.accept;
        delete S.Promise.defer;
        delete S.Promise.prototype.chain
    }
    if (typeof kr === "function") {
        b(S, {Promise: kr});
        var Fr = w(S.Promise, function (e) {
            return e.resolve(42).then(function () {
            }) instanceof e
        });
        var Lr = !i(function () {
            S.Promise.reject(42).then(null, 5).then(null, W)
        });
        var Dr = i(function () {
            S.Promise.call(3, W)
        });
        var zr = function (e) {
            var t = e.resolve(5);
            t.constructor = {};
            var r = e.resolve(t);
            try {
                r.then(null, W).then(null, W)
            } catch (e) {
                return true
            }
            return t === r
        }(S.Promise);
        var qr = s && function () {
            var e = 0;
            var t = Object.defineProperty({}, "then", {
                get: function () {
                    e += 1
                }
            });
            Promise.resolve(t);
            return e === 1
        }();
        var Wr = function BadResolverPromise(e) {
            var t = new Promise(e);
            e(3, function () {
            });
            this.then = t.then;
            this.constructor = BadResolverPromise
        };
        Wr.prototype = Promise.prototype;
        Wr.all = Promise.all;
        var Gr = a(function () {
            return !!Wr.all([1, 2])
        });
        if (!Fr || !Lr || !Dr || zr || !qr || Gr) {
            Promise = kr;
            re(S, "Promise", kr)
        }
        if (Promise.all.length !== 1) {
            var Hr = Promise.all;
            re(Promise, "all", function all(e) {
                return se.Call(Hr, this, arguments)
            })
        }
        if (Promise.race.length !== 1) {
            var Vr = Promise.race;
            re(Promise, "race", function race(e) {
                return se.Call(Vr, this, arguments)
            })
        }
        if (Promise.resolve.length !== 1) {
            var Br = Promise.resolve;
            re(Promise, "resolve", function resolve(e) {
                return se.Call(Br, this, arguments)
            })
        }
        if (Promise.reject.length !== 1) {
            var Ur = Promise.reject;
            re(Promise, "reject", function reject(e) {
                return se.Call(Ur, this, arguments)
            })
        }
        Ct(Promise, "all");
        Ct(Promise, "race");
        Ct(Promise, "resolve");
        Ct(Promise, "reject");
        Pe(Promise)
    }
    var $r = function (e) {
        var t = n(p(e, function (e, t) {
            e[t] = true;
            return e
        }, {}));
        return e.join(":") === t.join(":")
    };
    var Jr = $r(["z", "a", "bb"]);
    var Xr = $r(["z", 1, "a", "3", 2]);
    if (s) {
        var Kr = function fastkey(e, t) {
            if (!t && !Jr) {
                return null
            }
            if (fe(e)) {
                return "^" + se.ToString(e)
            } else if (typeof e === "string") {
                return "$" + e
            } else if (typeof e === "number") {
                if (!Xr) {
                    return "n" + e
                }
                return e
            } else if (typeof e === "boolean") {
                return "b" + e
            }
            return null
        };
        var Zr = function emptyObject() {
            return Object.create ? Object.create(null) : {}
        };
        var Yr = function addIterableToMap(e, n, o) {
            if (r(o) || te.string(o)) {
                l(o, function (e) {
                    if (!se.TypeIsObject(e)) {
                        throw new TypeError("Iterator value " + e + " is not an entry object")
                    }
                    n.set(e[0], e[1])
                })
            } else if (o instanceof e) {
                t(e.prototype.forEach, o, function (e, t) {
                    n.set(t, e)
                })
            } else {
                var i, a;
                if (!fe(o)) {
                    a = n.set;
                    if (!se.IsCallable(a)) {
                        throw new TypeError("bad map")
                    }
                    i = se.GetIterator(o)
                }
                if (typeof i !== "undefined") {
                    while (true) {
                        var u = se.IteratorStep(i);
                        if (u === false) {
                            break
                        }
                        var f = u.value;
                        try {
                            if (!se.TypeIsObject(f)) {
                                throw new TypeError("Iterator value " + f + " is not an entry object")
                            }
                            t(a, n, f[0], f[1])
                        } catch (e) {
                            se.IteratorClose(i, true);
                            throw e
                        }
                    }
                }
            }
        };
        var Qr = function addIterableToSet(e, n, o) {
            if (r(o) || te.string(o)) {
                l(o, function (e) {
                    n.add(e)
                })
            } else if (o instanceof e) {
                t(e.prototype.forEach, o, function (e) {
                    n.add(e)
                })
            } else {
                var i, a;
                if (!fe(o)) {
                    a = n.add;
                    if (!se.IsCallable(a)) {
                        throw new TypeError("bad set")
                    }
                    i = se.GetIterator(o)
                }
                if (typeof i !== "undefined") {
                    while (true) {
                        var u = se.IteratorStep(i);
                        if (u === false) {
                            break
                        }
                        var f = u.value;
                        try {
                            t(a, n, f)
                        } catch (e) {
                            se.IteratorClose(i, true);
                            throw e
                        }
                    }
                }
            }
        };
        var en = {
            Map: function () {
                var e = {};
                var r = function MapEntry(e, t) {
                    this.key = e;
                    this.value = t;
                    this.next = null;
                    this.prev = null
                };
                r.prototype.isRemoved = function isRemoved() {
                    return this.key === e
                };
                var n = function isMap(e) {
                    return !!e._es6map
                };
                var o = function requireMapSlot(e, t) {
                    if (!se.TypeIsObject(e) || !n(e)) {
                        throw new TypeError("Method Map.prototype." + t + " called on incompatible receiver " + se.ToString(e))
                    }
                };
                var i = function MapIterator(e, t) {
                    o(e, "[[MapIterator]]");
                    this.head = e._head;
                    this.i = this.head;
                    this.kind = t
                };
                i.prototype = {
                    next: function next() {
                        var e = this.i;
                        var t = this.kind;
                        var r = this.head;
                        if (typeof this.i === "undefined") {
                            return Xe()
                        }
                        while (e.isRemoved() && e !== r) {
                            e = e.prev
                        }
                        var n;
                        while (e.next !== r) {
                            e = e.next;
                            if (!e.isRemoved()) {
                                if (t === "key") {
                                    n = e.key
                                } else if (t === "value") {
                                    n = e.value
                                } else {
                                    n = [e.key, e.value]
                                }
                                this.i = e;
                                return Xe(n)
                            }
                        }
                        this.i = void 0;
                        return Xe()
                    }
                };
                Ce(i.prototype);
                var a;
                var u = function Map() {
                    if (!(this instanceof Map)) {
                        throw new TypeError('Constructor Map requires "new"')
                    }
                    if (this && this._es6map) {
                        throw new TypeError("Bad construction")
                    }
                    var e = Ne(this, Map, a, {
                        _es6map: true,
                        _head: null,
                        _map: G ? new G : null,
                        _size: 0,
                        _storage: Zr()
                    });
                    var t = new r(null, null);
                    t.next = t.prev = t;
                    e._head = t;
                    if (arguments.length > 0) {
                        Yr(Map, e, arguments[0])
                    }
                    return e
                };
                a = u.prototype;
                m.getter(a, "size", function () {
                    if (typeof this._size === "undefined") {
                        throw new TypeError("size method called on incompatible Map")
                    }
                    return this._size
                });
                b(a, {
                    get: function get(e) {
                        o(this, "get");
                        var t;
                        var r = Kr(e, true);
                        if (r !== null) {
                            t = this._storage[r];
                            if (t) {
                                return t.value
                            } else {
                                return
                            }
                        }
                        if (this._map) {
                            t = V.call(this._map, e);
                            if (t) {
                                return t.value
                            } else {
                                return
                            }
                        }
                        var n = this._head;
                        var i = n;
                        while ((i = i.next) !== n) {
                            if (se.SameValueZero(i.key, e)) {
                                return i.value
                            }
                        }
                    }, has: function has(e) {
                        o(this, "has");
                        var t = Kr(e, true);
                        if (t !== null) {
                            return typeof this._storage[t] !== "undefined"
                        }
                        if (this._map) {
                            return B.call(this._map, e)
                        }
                        var r = this._head;
                        var n = r;
                        while ((n = n.next) !== r) {
                            if (se.SameValueZero(n.key, e)) {
                                return true
                            }
                        }
                        return false
                    }, set: function set(e, t) {
                        o(this, "set");
                        var n = this._head;
                        var i = n;
                        var a;
                        var u = Kr(e, true);
                        if (u !== null) {
                            if (typeof this._storage[u] !== "undefined") {
                                this._storage[u].value = t;
                                return this
                            } else {
                                a = this._storage[u] = new r(e, t);
                                i = n.prev
                            }
                        } else if (this._map) {
                            if (B.call(this._map, e)) {
                                V.call(this._map, e).value = t
                            } else {
                                a = new r(e, t);
                                U.call(this._map, e, a);
                                i = n.prev
                            }
                        }
                        while ((i = i.next) !== n) {
                            if (se.SameValueZero(i.key, e)) {
                                i.value = t;
                                return this
                            }
                        }
                        a = a || new r(e, t);
                        if (se.SameValue(-0, e)) {
                            a.key = +0
                        }
                        a.next = this._head;
                        a.prev = this._head.prev;
                        a.prev.next = a;
                        a.next.prev = a;
                        this._size += 1;
                        return this
                    }, delete: function (t) {
                        o(this, "delete");
                        var r = this._head;
                        var n = r;
                        var i = Kr(t, true);
                        if (i !== null) {
                            if (typeof this._storage[i] === "undefined") {
                                return false
                            }
                            n = this._storage[i].prev;
                            delete this._storage[i]
                        } else if (this._map) {
                            if (!B.call(this._map, t)) {
                                return false
                            }
                            n = V.call(this._map, t).prev;
                            H.call(this._map, t)
                        }
                        while ((n = n.next) !== r) {
                            if (se.SameValueZero(n.key, t)) {
                                n.key = e;
                                n.value = e;
                                n.prev.next = n.next;
                                n.next.prev = n.prev;
                                this._size -= 1;
                                return true
                            }
                        }
                        return false
                    }, clear: function clear() {
                        o(this, "clear");
                        this._map = G ? new G : null;
                        this._size = 0;
                        this._storage = Zr();
                        var t = this._head;
                        var r = t;
                        var n = r.next;
                        while ((r = n) !== t) {
                            r.key = e;
                            r.value = e;
                            n = r.next;
                            r.next = r.prev = t
                        }
                        t.next = t.prev = t
                    }, keys: function keys() {
                        o(this, "keys");
                        return new i(this, "key")
                    }, values: function values() {
                        o(this, "values");
                        return new i(this, "value")
                    }, entries: function entries() {
                        o(this, "entries");
                        return new i(this, "key+value")
                    }, forEach: function forEach(e) {
                        o(this, "forEach");
                        var r = arguments.length > 1 ? arguments[1] : null;
                        var n = this.entries();
                        for (var i = n.next(); !i.done; i = n.next()) {
                            if (r) {
                                t(e, r, i.value[1], i.value[0], this)
                            } else {
                                e(i.value[1], i.value[0], this)
                            }
                        }
                    }
                });
                Ce(a, a.entries);
                return u
            }(), Set: function () {
                var e = function isSet(e) {
                    return e._es6set && typeof e._storage !== "undefined"
                };
                var r = function requireSetSlot(t, r) {
                    if (!se.TypeIsObject(t) || !e(t)) {
                        throw new TypeError("Set.prototype." + r + " called on incompatible receiver " + se.ToString(t))
                    }
                };
                var o;
                var i = function Set() {
                    if (!(this instanceof Set)) {
                        throw new TypeError('Constructor Set requires "new"')
                    }
                    if (this && this._es6set) {
                        throw new TypeError("Bad construction")
                    }
                    var e = Ne(this, Set, o, {_es6set: true, "[[SetData]]": null, _storage: Zr()});
                    if (!e._es6set) {
                        throw new TypeError("bad set")
                    }
                    if (arguments.length > 0) {
                        Qr(Set, e, arguments[0])
                    }
                    return e
                };
                o = i.prototype;
                var a = function (e) {
                    var t = e;
                    if (t === "^null") {
                        return null
                    } else if (t === "^undefined") {
                        return void 0
                    } else {
                        var r = t.charAt(0);
                        if (r === "$") {
                            return C(t, 1)
                        } else if (r === "n") {
                            return +C(t, 1)
                        } else if (r === "b") {
                            return t === "btrue"
                        }
                    }
                    return +t
                };
                var u = function ensureMap(e) {
                    if (!e["[[SetData]]"]) {
                        var t = new en.Map;
                        e["[[SetData]]"] = t;
                        l(n(e._storage), function (e) {
                            var r = a(e);
                            t.set(r, r)
                        });
                        e["[[SetData]]"] = t
                    }
                    e._storage = null
                };
                m.getter(i.prototype, "size", function () {
                    r(this, "size");
                    if (this._storage) {
                        return n(this._storage).length
                    }
                    u(this);
                    return this["[[SetData]]"].size
                });
                b(i.prototype, {
                    has: function has(e) {
                        r(this, "has");
                        var t;
                        if (this._storage && (t = Kr(e)) !== null) {
                            return !!this._storage[t]
                        }
                        u(this);
                        return this["[[SetData]]"].has(e)
                    }, add: function add(e) {
                        r(this, "add");
                        var t;
                        if (this._storage && (t = Kr(e)) !== null) {
                            this._storage[t] = true;
                            return this
                        }
                        u(this);
                        this["[[SetData]]"].set(e, e);
                        return this
                    }, delete: function (e) {
                        r(this, "delete");
                        var t;
                        if (this._storage && (t = Kr(e)) !== null) {
                            var n = z(this._storage, t);
                            return delete this._storage[t] && n
                        }
                        u(this);
                        return this["[[SetData]]"]["delete"](e)
                    }, clear: function clear() {
                        r(this, "clear");
                        if (this._storage) {
                            this._storage = Zr()
                        }
                        if (this["[[SetData]]"]) {
                            this["[[SetData]]"].clear()
                        }
                    }, values: function values() {
                        r(this, "values");
                        u(this);
                        return this["[[SetData]]"].values()
                    }, entries: function entries() {
                        r(this, "entries");
                        u(this);
                        return this["[[SetData]]"].entries()
                    }, forEach: function forEach(e) {
                        r(this, "forEach");
                        var n = arguments.length > 1 ? arguments[1] : null;
                        var o = this;
                        u(o);
                        this["[[SetData]]"].forEach(function (r, i) {
                            if (n) {
                                t(e, n, i, i, o)
                            } else {
                                e(i, i, o)
                            }
                        })
                    }
                });
                h(i.prototype, "keys", i.prototype.values, true);
                Ce(i.prototype, i.prototype.values);
                return i
            }()
        };
        if (S.Map || S.Set) {
            var tn = a(function () {
                return new Map([[1, 2]]).get(1) === 2
            });
            if (!tn) {
                S.Map = function Map() {
                    if (!(this instanceof Map)) {
                        throw new TypeError('Constructor Map requires "new"')
                    }
                    var e = new G;
                    if (arguments.length > 0) {
                        Yr(Map, e, arguments[0])
                    }
                    delete e.constructor;
                    Object.setPrototypeOf(e, S.Map.prototype);
                    return e
                };
                S.Map.prototype = O(G.prototype);
                h(S.Map.prototype, "constructor", S.Map, true);
                m.preserveToString(S.Map, G)
            }
            var rn = new Map;
            var nn = function () {
                var e = new Map([[1, 0], [2, 0], [3, 0], [4, 0]]);
                e.set(-0, e);
                return e.get(0) === e && e.get(-0) === e && e.has(0) && e.has(-0)
            }();
            var on = rn.set(1, 2) === rn;
            if (!nn || !on) {
                re(Map.prototype, "set", function set(e, r) {
                    t(U, this, e === 0 ? 0 : e, r);
                    return this
                })
            }
            if (!nn) {
                b(Map.prototype, {
                    get: function get(e) {
                        return t(V, this, e === 0 ? 0 : e)
                    }, has: function has(e) {
                        return t(B, this, e === 0 ? 0 : e)
                    }
                }, true);
                m.preserveToString(Map.prototype.get, V);
                m.preserveToString(Map.prototype.has, B)
            }
            var an = new Set;
            var un = function (e) {
                e["delete"](0);
                e.add(-0);
                return !e.has(0)
            }(an);
            var fn = an.add(1) === an;
            if (!un || !fn) {
                var sn = Set.prototype.add;
                Set.prototype.add = function add(e) {
                    t(sn, this, e === 0 ? 0 : e);
                    return this
                };
                m.preserveToString(Set.prototype.add, sn)
            }
            if (!un) {
                var cn = Set.prototype.has;
                Set.prototype.has = function has(e) {
                    return t(cn, this, e === 0 ? 0 : e)
                };
                m.preserveToString(Set.prototype.has, cn);
                var ln = Set.prototype["delete"];
                Set.prototype["delete"] = function SetDelete(e) {
                    return t(ln, this, e === 0 ? 0 : e)
                };
                m.preserveToString(Set.prototype["delete"], ln)
            }
            var pn = w(S.Map, function (e) {
                var t = new e([]);
                t.set(42, 42);
                return t instanceof e
            });
            var vn = Object.setPrototypeOf && !pn;
            var yn = function () {
                try {
                    return !(S.Map() instanceof S.Map)
                } catch (e) {
                    return e instanceof TypeError
                }
            }();
            if (S.Map.length !== 0 || vn || !yn) {
                S.Map = function Map() {
                    if (!(this instanceof Map)) {
                        throw new TypeError('Constructor Map requires "new"')
                    }
                    var e = new G;
                    if (arguments.length > 0) {
                        Yr(Map, e, arguments[0])
                    }
                    delete e.constructor;
                    Object.setPrototypeOf(e, Map.prototype);
                    return e
                };
                S.Map.prototype = G.prototype;
                h(S.Map.prototype, "constructor", S.Map, true);
                m.preserveToString(S.Map, G)
            }
            var hn = w(S.Set, function (e) {
                var t = new e([]);
                t.add(42, 42);
                return t instanceof e
            });
            var bn = Object.setPrototypeOf && !hn;
            var gn = function () {
                try {
                    return !(S.Set() instanceof S.Set)
                } catch (e) {
                    return e instanceof TypeError
                }
            }();
            if (S.Set.length !== 0 || bn || !gn) {
                var dn = S.Set;
                S.Set = function Set() {
                    if (!(this instanceof Set)) {
                        throw new TypeError('Constructor Set requires "new"')
                    }
                    var e = new dn;
                    if (arguments.length > 0) {
                        Qr(Set, e, arguments[0])
                    }
                    delete e.constructor;
                    Object.setPrototypeOf(e, Set.prototype);
                    return e
                };
                S.Set.prototype = dn.prototype;
                h(S.Set.prototype, "constructor", S.Set, true);
                m.preserveToString(S.Set, dn)
            }
            var mn = new S.Map;
            var On = !a(function () {
                return mn.keys().next().done
            });
            if (typeof S.Map.prototype.clear !== "function" || (new S.Set).size !== 0 || mn.size !== 0 || typeof S.Map.prototype.keys !== "function" || typeof S.Set.prototype.keys !== "function" || typeof S.Map.prototype.forEach !== "function" || typeof S.Set.prototype.forEach !== "function" || u(S.Map) || u(S.Set) || typeof mn.keys().next !== "function" || On || !pn) {
                b(S, {Map: en.Map, Set: en.Set}, true)
            }
            if (S.Set.prototype.keys !== S.Set.prototype.values) {
                h(S.Set.prototype, "keys", S.Set.prototype.values, true)
            }
            Ce(Object.getPrototypeOf((new S.Map).keys()));
            Ce(Object.getPrototypeOf((new S.Set).keys()));
            if (c && S.Set.prototype.has.name !== "has") {
                var wn = S.Set.prototype.has;
                re(S.Set.prototype, "has", function has(e) {
                    return t(wn, this, e)
                })
            }
        }
        b(S, en);
        Pe(S.Map);
        Pe(S.Set)
    }
    var jn = function throwUnlessTargetIsObject(e) {
        if (!se.TypeIsObject(e)) {
            throw new TypeError("target must be an object")
        }
    };
    var Sn = {
        apply: function apply() {
            return se.Call(se.Call, null, arguments)
        }, construct: function construct(e, t) {
            if (!se.IsConstructor(e)) {
                throw new TypeError("First argument must be a constructor.")
            }
            var r = arguments.length > 2 ? arguments[2] : e;
            if (!se.IsConstructor(r)) {
                throw new TypeError("new.target must be a constructor.")
            }
            return se.Construct(e, t, r, "internal")
        }, deleteProperty: function deleteProperty(e, t) {
            jn(e);
            if (s) {
                var r = Object.getOwnPropertyDescriptor(e, t);
                if (r && !r.configurable) {
                    return false
                }
            }
            return delete e[t]
        }, has: function has(e, t) {
            jn(e);
            return t in e
        }
    };
    if (Object.getOwnPropertyNames) {
        Object.assign(Sn, {
            ownKeys: function ownKeys(e) {
                jn(e);
                var t = Object.getOwnPropertyNames(e);
                if (se.IsCallable(Object.getOwnPropertySymbols)) {
                    x(t, Object.getOwnPropertySymbols(e))
                }
                return t
            }
        })
    }
    var Tn = function ConvertExceptionToBoolean(e) {
        return !i(e)
    };
    if (Object.preventExtensions) {
        Object.assign(Sn, {
            isExtensible: function isExtensible(e) {
                jn(e);
                return Object.isExtensible(e)
            }, preventExtensions: function preventExtensions(e) {
                jn(e);
                return Tn(function () {
                    Object.preventExtensions(e)
                })
            }
        })
    }
    if (s) {
        var In = function get(e, t, r) {
            var n = Object.getOwnPropertyDescriptor(e, t);
            if (!n) {
                var o = Object.getPrototypeOf(e);
                if (o === null) {
                    return void 0
                }
                return In(o, t, r)
            }
            if ("value" in n) {
                return n.value
            }
            if (n.get) {
                return se.Call(n.get, r)
            }
            return void 0
        };
        var En = function set(e, r, n, o) {
            var i = Object.getOwnPropertyDescriptor(e, r);
            if (!i) {
                var a = Object.getPrototypeOf(e);
                if (a !== null) {
                    return En(a, r, n, o)
                }
                i = {value: void 0, writable: true, enumerable: true, configurable: true}
            }
            if ("value" in i) {
                if (!i.writable) {
                    return false
                }
                if (!se.TypeIsObject(o)) {
                    return false
                }
                var u = Object.getOwnPropertyDescriptor(o, r);
                if (u) {
                    return ie.defineProperty(o, r, {value: n})
                } else {
                    return ie.defineProperty(o, r, {value: n, writable: true, enumerable: true, configurable: true})
                }
            }
            if (i.set) {
                t(i.set, o, n);
                return true
            }
            return false
        };
        Object.assign(Sn, {
            defineProperty: function defineProperty(e, t, r) {
                jn(e);
                return Tn(function () {
                    Object.defineProperty(e, t, r)
                })
            }, getOwnPropertyDescriptor: function getOwnPropertyDescriptor(e, t) {
                jn(e);
                return Object.getOwnPropertyDescriptor(e, t)
            }, get: function get(e, t) {
                jn(e);
                var r = arguments.length > 2 ? arguments[2] : e;
                return In(e, t, r)
            }, set: function set(e, t, r) {
                jn(e);
                var n = arguments.length > 3 ? arguments[3] : e;
                return En(e, t, r, n)
            }
        })
    }
    if (Object.getPrototypeOf) {
        var Pn = Object.getPrototypeOf;
        Sn.getPrototypeOf = function getPrototypeOf(e) {
            jn(e);
            return Pn(e)
        }
    }
    if (Object.setPrototypeOf && Sn.getPrototypeOf) {
        var Cn = function (e, t) {
            var r = t;
            while (r) {
                if (e === r) {
                    return true
                }
                r = Sn.getPrototypeOf(r)
            }
            return false
        };
        Object.assign(Sn, {
            setPrototypeOf: function setPrototypeOf(e, t) {
                jn(e);
                if (t !== null && !se.TypeIsObject(t)) {
                    throw new TypeError("proto must be an object or null")
                }
                if (t === ie.getPrototypeOf(e)) {
                    return true
                }
                if (ie.isExtensible && !ie.isExtensible(e)) {
                    return false
                }
                if (Cn(e, t)) {
                    return false
                }
                Object.setPrototypeOf(e, t);
                return true
            }
        })
    }
    var Mn = function (e, t) {
        if (!se.IsCallable(S.Reflect[e])) {
            h(S.Reflect, e, t)
        } else {
            var r = a(function () {
                S.Reflect[e](1);
                S.Reflect[e](NaN);
                S.Reflect[e](true);
                return true
            });
            if (r) {
                re(S.Reflect, e, t)
            }
        }
    };
    Object.keys(Sn).forEach(function (e) {
        Mn(e, Sn[e])
    });
    var xn = S.Reflect.getPrototypeOf;
    if (c && xn && xn.name !== "getPrototypeOf") {
        re(S.Reflect, "getPrototypeOf", function getPrototypeOf(e) {
            return t(xn, S.Reflect, e)
        })
    }
    if (S.Reflect.setPrototypeOf) {
        if (a(function () {
                S.Reflect.setPrototypeOf(1, {});
                return true
            })) {
            re(S.Reflect, "setPrototypeOf", Sn.setPrototypeOf)
        }
    }
    if (S.Reflect.defineProperty) {
        if (!a(function () {
                var e = !S.Reflect.defineProperty(1, "test", {value: 1});
                var t = typeof Object.preventExtensions !== "function" || !S.Reflect.defineProperty(Object.preventExtensions({}), "test", {});
                return e && t
            })) {
            re(S.Reflect, "defineProperty", Sn.defineProperty)
        }
    }
    if (S.Reflect.construct) {
        if (!a(function () {
                var e = function F() {
                };
                return S.Reflect.construct(function () {
                }, [], e) instanceof e
            })) {
            re(S.Reflect, "construct", Sn.construct)
        }
    }
    if (String(new Date(NaN)) !== "Invalid Date") {
        var Nn = Date.prototype.toString;
        var An = function toString() {
            var e = +this;
            if (e !== e) {
                return "Invalid Date"
            }
            return se.Call(Nn, this)
        };
        re(Date.prototype, "toString", An)
    }
    var Rn = {
        anchor: function anchor(e) {
            return se.CreateHTML(this, "a", "name", e)
        }, big: function big() {
            return se.CreateHTML(this, "big", "", "")
        }, blink: function blink() {
            return se.CreateHTML(this, "blink", "", "")
        }, bold: function bold() {
            return se.CreateHTML(this, "b", "", "")
        }, fixed: function fixed() {
            return se.CreateHTML(this, "tt", "", "")
        }, fontcolor: function fontcolor(e) {
            return se.CreateHTML(this, "font", "color", e)
        }, fontsize: function fontsize(e) {
            return se.CreateHTML(this, "font", "size", e)
        }, italics: function italics() {
            return se.CreateHTML(this, "i", "", "")
        }, link: function link(e) {
            return se.CreateHTML(this, "a", "href", e)
        }, small: function small() {
            return se.CreateHTML(this, "small", "", "")
        }, strike: function strike() {
            return se.CreateHTML(this, "strike", "", "")
        }, sub: function sub() {
            return se.CreateHTML(this, "sub", "", "")
        }, sup: function sub() {
            return se.CreateHTML(this, "sup", "", "")
        }
    };
    l(Object.keys(Rn), function (e) {
        var r = String.prototype[e];
        var n = false;
        if (se.IsCallable(r)) {
            var o = t(r, "", ' " ');
            var i = P([], o.match(/"/g)).length;
            n = o !== o.toLowerCase() || i > 2
        } else {
            n = true
        }
        if (n) {
            re(String.prototype, e, Rn[e])
        }
    });
    var _n = function () {
        if (!ne) {
            return false
        }
        var e = typeof JSON === "object" && typeof JSON.stringify === "function" ? JSON.stringify : null;
        if (!e) {
            return false
        }
        if (typeof e($()) !== "undefined") {
            return true
        }
        if (e([$()]) !== "[null]") {
            return true
        }
        var t = {a: $()};
        t[$()] = true;
        if (e(t) !== "{}") {
            return true
        }
        return false
    }();
    var kn = a(function () {
        if (!ne) {
            return true
        }
        return JSON.stringify(Object($())) === "{}" && JSON.stringify([Object($())]) === "[{}]"
    });
    if (_n || !kn) {
        var Fn = JSON.stringify;
        re(JSON, "stringify", function stringify(e) {
            if (typeof e === "symbol") {
                return
            }
            var n;
            if (arguments.length > 1) {
                n = arguments[1]
            }
            var o = [e];
            if (!r(n)) {
                var i = se.IsCallable(n) ? n : null;
                var a = function (e, r) {
                    var n = i ? t(i, this, e, r) : r;
                    if (typeof n !== "symbol") {
                        if (te.symbol(n)) {
                            return xt({})(n)
                        } else {
                            return n
                        }
                    }
                };
                o.push(a)
            } else {
                o.push(n)
            }
            if (arguments.length > 2) {
                o.push(arguments[2])
            }
            return Fn.apply(this, o)
        })
    }
    return S
});
//# sourceMappingURL=es6-shim.map
