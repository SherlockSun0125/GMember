if ("undefined" == typeof I$) I$ = function () {
    var e = {}, t = function () {
        return !1
    }, i = {};
    var n = function (t, i) {
        return e.toString.call(t) === "[object " + i + "]"
    };
    return function (e, a) {
        var o = i[e], s = n(a, "Function");
        if (null != a && !s) o = a;
        if (s) {
            var r = [];
            for (var c = 2, d = arguments.length; c < d; c++) r.push(arguments.callee(arguments[c]));
            var _ = {};
            r.push.call(r, _, {}, t, []);
            var l = a.apply(null, r) || _;
            if (!o || !n(l, "Object")) o = l; else if (Object.keys) for (var u = Object.keys(l), c = 0, d = u.length, h; c < d; c++) {
                h = u[c];
                o[h] = l[h]
            } else for (var h in l) o[h] = l[h]
        }
        if (null == o) o = {};
        i[e] = o;
        return o
    }
}();
I$("38fcb21d4f4bc66eeed3795a8cc8504b", function (e, t, i, n) {
    var a = Function.prototype;
    a.QI = function (e, t) {
        var t = t || i, e = e || i, a = this;
        return function () {
            var i = {args: n.slice.call(arguments, 0)};
            e(i);
            if (!i.stopped) {
                i.value = a.apply(this, i.args);
                t(i)
            }
            return i.value
        }
    };
    a.RI = function () {
        var e = arguments, t = arguments[0], i = this;
        return function () {
            var a = n.slice.call(e, 1);
            n.push.apply(a, arguments);
            return i.apply(t || null, a)
        }
    };
    a.SI = function () {
        var e = arguments, t = n.shift.call(e), i = this;
        return function () {
            n.push.apply(arguments, e);
            return i.apply(t || null, arguments)
        }
    };
    var a = String.prototype;
    if (!a.trim) a.trim = function () {
        var e = /(?:^\s+)|(?:\s+$)/g;
        return function () {
            return this.replace(e, "")
        }
    }();
    if (!this.console) this.console = {log: i, error: i};
    if (!0) {
        NEJ = this.NEJ || {};
        NEJ.copy = function (e, i) {
            e = e || {};
            i = i || t;
            for (var n in i) if (i.hasOwnProperty(n)) e[n] = i[n];
            return e
        };
        NEJ = NEJ.copy(NEJ, {
            O: t, R: n, F: i, P: function (e) {
                if (!e || !e.length) return null;
                var t = window;
                for (var i = e.split("."), n = i.length, a = "window" == i[0] ? 1 : 0; a < n; t = t[i[a]] = t[i[a]] || {}, a++) ;
                return t
            }
        });
        return NEJ
    }
    return e
});
I$("77a4235c170a5acb87bf590d34ba2045", function (e, t, i, n, a) {
    var o = 8;
    var s = function (e, t) {
        return e << t | e >>> 32 - t
    };
    var r = function (e, t) {
        var i = (65535 & e) + (65535 & t), n = (e >> 16) + (t >> 16) + (i >> 16);
        return n << 16 | 65535 & i
    };
    var c = function (e, t, i, n) {
        if (e < 20) return t & i | ~t & n;
        if (e < 40) return t ^ i ^ n;
        if (e < 60) return t & i | t & n | i & n; else return t ^ i ^ n
    };
    var d = function (e) {
        if (e < 20) return 1518500249;
        if (e < 40) return 1859775393;
        if (e < 60) return -1894007588; else return -899497514
    };
    var _ = function () {
        var e = function (e) {
            return e % 32
        }, t = function (e) {
            return 32 - o - e % 32
        };
        return function (i, n) {
            var a = [], s = (1 << o) - 1, r = n ? e : t;
            for (var c = 0, d = i.length * o; c < d; c += o) a[c >> 5] |= (i.charCodeAt(c / o) & s) << r(c);
            return a
        }
    }();
    var l = function () {
        var e = "0123456789abcdef", t = function (e) {
            return e % 4
        }, i = function (e) {
            return 3 - e % 4
        };
        return function (n, a) {
            var o = [], s = a ? t : i;
            for (var r = 0, c = 4 * n.length; r < c; r++) o.push(e.charAt(n[r >> 2] >> 8 * s(r) + 4 & 15) + e.charAt(n[r >> 2] >> 8 * s(r) & 15));
            return o.join("")
        }
    }();
    var u = function () {
        var e = function (e) {
            return e % 32
        }, t = function (e) {
            return 32 - o - e % 32
        };
        return function (i, n) {
            var a = [], s = (1 << o) - 1, r = n ? e : t;
            for (var c = 0, d = 32 * i.length; c < d; c += o) a.push(String.fromCharCode(i[c >> 5] >>> r(c) & s));
            return a.join("")
        }
    }();
    var h = function () {
        var e = "=", t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = function (e) {
            return e % 4
        }, n = function (e) {
            return 3 - e % 4
        };
        return function (a, o) {
            var s = [], r = o ? i : n;
            for (var c = 0, d; c < 4 * a.length; c += 3) {
                d = (a[c >> 2] >> 8 * r(c) & 255) << 16 | (a[c + 1 >> 2] >> 8 * r(c + 1) & 255) << 8 | a[c + 2 >> 2] >> 8 * r(c + 2) & 255;
                for (var _ = 0; _ < 4; _++) s.push(8 * c + 6 * _ > 32 * a.length ? e : t.charAt(d >> 6 * (3 - _) & 63))
            }
            return s.join("")
        }
    }();
    var f = function (e, t, i, n, a, o) {
        return r(s(r(r(t, e), r(n, o)), a), i)
    };
    var p = function (e, t, i, n, a, o, s) {
        return f(t & i | ~t & n, e, t, a, o, s)
    };
    var m = function (e, t, i, n, a, o, s) {
        return f(t & n | i & ~n, e, t, a, o, s)
    };
    var g = function (e, t, i, n, a, o, s) {
        return f(t ^ i ^ n, e, t, a, o, s)
    };
    var b = function (e, t, i, n, a, o, s) {
        return f(i ^ (t | ~n), e, t, a, o, s)
    };
    var $ = function (e, t) {
        e[t >> 5] |= 128 << t % 32;
        e[(t + 64 >>> 9 << 4) + 14] = t;
        var i = 1732584193, n = -271733879, a = -1732584194, o = 271733878;
        for (var s = 0, c = e.length, d, _, l, u; s < c; s += 16) {
            d = i;
            _ = n;
            l = a;
            u = o;
            i = p(i, n, a, o, e[s + 0], 7, -680876936);
            o = p(o, i, n, a, e[s + 1], 12, -389564586);
            a = p(a, o, i, n, e[s + 2], 17, 606105819);
            n = p(n, a, o, i, e[s + 3], 22, -1044525330);
            i = p(i, n, a, o, e[s + 4], 7, -176418897);
            o = p(o, i, n, a, e[s + 5], 12, 1200080426);
            a = p(a, o, i, n, e[s + 6], 17, -1473231341);
            n = p(n, a, o, i, e[s + 7], 22, -45705983);
            i = p(i, n, a, o, e[s + 8], 7, 1770035416);
            o = p(o, i, n, a, e[s + 9], 12, -1958414417);
            a = p(a, o, i, n, e[s + 10], 17, -42063);
            n = p(n, a, o, i, e[s + 11], 22, -1990404162);
            i = p(i, n, a, o, e[s + 12], 7, 1804603682);
            o = p(o, i, n, a, e[s + 13], 12, -40341101);
            a = p(a, o, i, n, e[s + 14], 17, -1502002290);
            n = p(n, a, o, i, e[s + 15], 22, 1236535329);
            i = m(i, n, a, o, e[s + 1], 5, -165796510);
            o = m(o, i, n, a, e[s + 6], 9, -1069501632);
            a = m(a, o, i, n, e[s + 11], 14, 643717713);
            n = m(n, a, o, i, e[s + 0], 20, -373897302);
            i = m(i, n, a, o, e[s + 5], 5, -701558691);
            o = m(o, i, n, a, e[s + 10], 9, 38016083);
            a = m(a, o, i, n, e[s + 15], 14, -660478335);
            n = m(n, a, o, i, e[s + 4], 20, -405537848);
            i = m(i, n, a, o, e[s + 9], 5, 568446438);
            o = m(o, i, n, a, e[s + 14], 9, -1019803690);
            a = m(a, o, i, n, e[s + 3], 14, -187363961);
            n = m(n, a, o, i, e[s + 8], 20, 1163531501);
            i = m(i, n, a, o, e[s + 13], 5, -1444681467);
            o = m(o, i, n, a, e[s + 2], 9, -51403784);
            a = m(a, o, i, n, e[s + 7], 14, 1735328473);
            n = m(n, a, o, i, e[s + 12], 20, -1926607734);
            i = g(i, n, a, o, e[s + 5], 4, -378558);
            o = g(o, i, n, a, e[s + 8], 11, -2022574463);
            a = g(a, o, i, n, e[s + 11], 16, 1839030562);
            n = g(n, a, o, i, e[s + 14], 23, -35309556);
            i = g(i, n, a, o, e[s + 1], 4, -1530992060);
            o = g(o, i, n, a, e[s + 4], 11, 1272893353);
            a = g(a, o, i, n, e[s + 7], 16, -155497632);
            n = g(n, a, o, i, e[s + 10], 23, -1094730640);
            i = g(i, n, a, o, e[s + 13], 4, 681279174);
            o = g(o, i, n, a, e[s + 0], 11, -358537222);
            a = g(a, o, i, n, e[s + 3], 16, -722521979);
            n = g(n, a, o, i, e[s + 6], 23, 76029189);
            i = g(i, n, a, o, e[s + 9], 4, -640364487);
            o = g(o, i, n, a, e[s + 12], 11, -421815835);
            a = g(a, o, i, n, e[s + 15], 16, 530742520);
            n = g(n, a, o, i, e[s + 2], 23, -995338651);
            i = b(i, n, a, o, e[s + 0], 6, -198630844);
            o = b(o, i, n, a, e[s + 7], 10, 1126891415);
            a = b(a, o, i, n, e[s + 14], 15, -1416354905);
            n = b(n, a, o, i, e[s + 5], 21, -57434055);
            i = b(i, n, a, o, e[s + 12], 6, 1700485571);
            o = b(o, i, n, a, e[s + 3], 10, -1894986606);
            a = b(a, o, i, n, e[s + 10], 15, -1051523);
            n = b(n, a, o, i, e[s + 1], 21, -2054922799);
            i = b(i, n, a, o, e[s + 8], 6, 1873313359);
            o = b(o, i, n, a, e[s + 15], 10, -30611744);
            a = b(a, o, i, n, e[s + 6], 15, -1560198380);
            n = b(n, a, o, i, e[s + 13], 21, 1309151649);
            i = b(i, n, a, o, e[s + 4], 6, -145523070);
            o = b(o, i, n, a, e[s + 11], 10, -1120210379);
            a = b(a, o, i, n, e[s + 2], 15, 718787259);
            n = b(n, a, o, i, e[s + 9], 21, -343485551);
            i = r(i, d);
            n = r(n, _);
            a = r(a, l);
            o = r(o, u)
        }
        return [i, n, a, o]
    };
    var v = function (e, t) {
        var i = _(e, !0);
        if (i.length > 16) i = $(i, e.length * o);
        var n = Array(16), a = Array(16);
        for (var s = 0; s < 16; s++) {
            n[s] = 909522486 ^ i[s];
            a[s] = 1549556828 ^ i[s]
        }
        var r = $(n.concat(_(t, !0)), 512 + t.length * o);
        return $(a.concat(r), 640)
    };
    var C = function (e, t) {
        e[t >> 5] |= 128 << 24 - t % 32;
        e[(t + 64 >> 9 << 4) + 15] = t;
        var i = Array(80), n = 1732584193, a = -271733879, o = -1732584194, _ = 271733878, l = -1009589776;
        for (var u = 0, h = e.length, f, p, m, g, b; u < h; u += 16) {
            f = n;
            p = a;
            m = o;
            g = _;
            b = l;
            for (var $ = 0; $ < 80; $++) {
                i[$] = $ < 16 ? e[u + $] : s(i[$ - 3] ^ i[$ - 8] ^ i[$ - 14] ^ i[$ - 16], 1);
                var v = r(r(s(n, 5), c($, a, o, _)), r(r(l, i[$]), d($)));
                l = _;
                _ = o;
                o = s(a, 30);
                a = n;
                n = v
            }
            n = r(n, f);
            a = r(a, p);
            o = r(o, m);
            _ = r(_, g);
            l = r(l, b)
        }
        return [n, a, o, _, l]
    };
    var I = function (e, t) {
        var i = _(e);
        if (i.length > 16) i = C(i, e.length * o);
        var n = Array(16), a = Array(16);
        for (var s = 0; s < 16; s++) {
            n[s] = 909522486 ^ i[s];
            a[s] = 1549556828 ^ i[s]
        }
        var r = C(n.concat(_(t)), 512 + t.length * o);
        return C(a.concat(r), 672)
    };
    t.Ph = function (e, t) {
        return l(I(e, t))
    };
    t.Qh = function (e, t) {
        return h(I(e, t))
    };
    t.Rh = function (e, t) {
        return u(I(e, t))
    };
    t.Sh = function (e, t) {
        return l(v(e, t), !0)
    };
    t.Th = function (e, t) {
        return h(v(e, t), !0)
    };
    t.Uh = function (e, t) {
        return u(v(e, t), !0)
    };
    t.Vh = function (e) {
        return l(C(_(e), e.length * o))
    };
    t.Wh = function (e) {
        return h(C(_(e), e.length * o))
    };
    t.Xh = function (e) {
        return u(C(_(e), e.length * o))
    };
    t.Yh = function (e) {
        return l($(_(e, !0), e.length * o), !0)
    };
    t.Zh = function (e) {
        return h($(_(e, !0), e.length * o), !0)
    };
    t.$h = function (e) {
        return u($(_(e, !0), e.length * o), !0)
    };
    t.FL = function (e, t) {
        return l(_(e, !t), !t)
    };
    if (!0) e.copy(e.P("nej.u"), t);
    return t
}, "38fcb21d4f4bc66eeed3795a8cc8504b");
I$("f0190d2c372cb0fe9adae0fba15e440e", function (e, t, i, n) {
    e.TI = function (e, t, i) {
        if (!e || !t) return null;
        var n = Object.keys(e);
        for (var a = 0, o = n.length, s, r; a < o; a++) {
            s = n[a];
            r = t.call(i || null, e[s], s, e);
            if (r) return s
        }
        return null
    };
    e.VI = function (e, t, i) {
        e.forEach(t, i)
    };
    e.WI = function (e) {
        return n.slice.call(e, 0)
    };
    e.XI = function (e) {
        return Date.parse(e)
    };
    return e
});
I$("f3ab479b168ebebfb3a24e1000f7236e", function (e, t, i, n, a) {
    var o = this.navigator.platform, s = this.navigator.userAgent;
    var r = {mac: o, win: o, linux: o, ipad: s, ipod: s, iphone: o, android: s};
    t.YI = r;
    for (var c in r) r[c] = new RegExp(c, "i").test(r[c]);
    r.ios = r.ipad || r.iphone || r.ipod;
    r.tablet = r.ipad;
    r.desktop = r.mac || r.win || r.linux && !r.android;
    t.ZI = function (e) {
        return !!r[e]
    };
    var d = {
        engine: "unknow",
        release: "unknow",
        browser: "unknow",
        version: "unknow",
        prefix: {css: "", pro: "", clz: ""}
    };
    t.$I = d;
    if (/msie\s+(.*?);/i.test(s) || /trident\/.+rv:([\d\.]+)/i.test(s)) {
        d.engine = "trident";
        d.browser = "ie";
        d.version = RegExp.$1;
        d.prefix = {css: "ms", pro: "ms", clz: "MS", evt: "MS"};
        var _ = {6: "2.0", 7: "3.0", 8: "4.0", 9: "5.0", 10: "6.0", 11: "7.0"};
        d.release = _[document.documentMode] || _[parseInt(d.version)]
    } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(s)) {
        d.engine = "webkit";
        d.release = RegExp.$1 || "";
        d.prefix = {css: "webkit", pro: "webkit", clz: "WebKit"}
    } else if (/rv\:(.*?)\)\s+gecko\//i.test(s)) {
        d.engine = "gecko";
        d.release = RegExp.$1 || "";
        d.browser = "firefox";
        d.prefix = {css: "Moz", pro: "moz", clz: "Moz"};
        if (/firefox\/(.*?)(?=\s|$)/i.test(s)) d.version = RegExp.$1 || ""
    } else if (/presto\/(.*?)\s/i.test(s)) {
        d.engine = "presto";
        d.release = RegExp.$1 || "";
        d.browser = "opera";
        d.prefix = {css: "O", pro: "o", clz: "O"};
        if (/version\/(.*?)(?=\s|$)/i.test(s)) d.version = RegExp.$1 || ""
    }
    if ("unknow" == d.browser) {
        var _ = ["chrome", "maxthon", "safari"];
        for (var l = 0, u = _.length, h; l < u; l++) {
            if ("safari" == _[l]) h = "version"; else if ("chrome" == _[l]) h = "[chrome|CriOS]"; else h = _[l];
            if (new RegExp(h + "/(.*?)(?=\\s|$)", "i").test(s)) {
                d.browser = _[l];
                d.version = RegExp.$1.trim();
                break
            }
        }
    }
    t._I = {};
    t.aJ = function (e) {
        return !!t._I[e]
    };
    if (!0) e.copy(e.P("nej.p"), t);
    return t
}, "38fcb21d4f4bc66eeed3795a8cc8504b");
I$("90ae137c0a52422436f94c15bed44300", function (e, t, i, n, a, o) {
    if ("trident" === t.$I.engine && t.$I.release <= "4.0") I$("d461946e8d84f5dbf2419d1ffc1fe3f3", function () {
        e.TI = function (e, t, i) {
            if (e && t) {
                var n;
                for (var a in e) if (e.hasOwnProperty(a)) {
                    n = t.call(i, e[a], a, e);
                    if (n) return a
                } else ;
            }
        };
        e.VI = function (e, t, i) {
            for (var n = 0, a = e.length; n < a; n++) t.call(i, e[n], n, e)
        };
        e.WI = function (e) {
            var t = [];
            if (e && e.length) for (var i = 0, n = e.length; i < n; i++) t.push(e[i]);
            return t
        };
        e.XI = function () {
            var e = /-/g;
            return function (t) {
                return Date.parse(t.replace(e, "/").split(".")[0])
            }
        }()
    });
    return e
}, "f0190d2c372cb0fe9adae0fba15e440e", "f3ab479b168ebebfb3a24e1000f7236e");
I$("7473c7d0556819b21bec58b99f475b04", function (e, t, i, n, a, o) {
    var s = function (e, t) {
        try {
            t = t.toLowerCase();
            if (null === e) return "null" == t;
            if (void 0 === e) return "undefined" == t; else return n.toString.call(e).toLowerCase() == "[object " + t + "]"
        } catch (i) {
            return !1
        }
    };
    i.bJ = function (e) {
        return s(e, "function")
    };
    i.cJ = function (e) {
        return s(e, "string")
    };
    i.dJ = function (e) {
        return s(e, "number")
    };
    i.eJ = function (e) {
        return s(e, "boolean")
    };
    i.fJ = function (e) {
        return s(e, "date")
    };
    i.gJ = function (e) {
        return s(e, "array")
    };
    i.hJ = function (e) {
        return s(e, "object")
    };
    i.iJ = function () {
        var e = /[^\x00-\xff]/g;
        return function (t) {
            return ("" + (t || "")).replace(e, "**").length
        }
    }();
    i.jJ = function (e, n, a) {
        if (i.hJ(e) && i.bJ(n)) return t.TI.apply(t, arguments); else return null
    };
    i.kJ = function (e, t) {
        var n = i.bJ(t) ? t : function (e) {
            return e === t
        }, a = i.lJ(e, n);
        return null != a ? a : -1
    };
    i.mJ = function () {
        var e;
        var t = function (i, n, a) {
            if (n > a) return -1;
            var o = Math.ceil((n + a) / 2), s = e(i[o], o, i);
            if (0 == s) return o;
            if (s < 0) return t(i, n, o - 1); else return t(i, o + 1, a)
        };
        return function (i, n) {
            e = n || a;
            return t(i, 0, i.length - 1)
        }
    }();
    i.nJ = function (e, t, n) {
        if (e && e.length && i.bJ(t)) for (var a = e.length - 1; a >= 0; a--) if (t.call(n, e[a], a, e)) return a;
        return null
    };
    i.oJ = function (e, n, a) {
        if (e && e.length && i.bJ(n)) if (!e.forEach) i.lJ.apply(i, arguments); else t.VI(e, n, a)
    };
    i.lJ = function (e, t, n) {
        if (!e || !i.bJ(t)) return null;
        if (i.dJ(e.length)) {
            for (var a = 0, o = e.length; a < o; a++) if (t.call(n, e[a], a, e)) return a
        } else if (i.hJ(e)) return i.jJ(e, t, n);
        return null
    };
    i.pJ = function (e, t) {
        t = "" + t;
        if (!e || !t) return t || ""; else return t.replace(e.r, function (t) {
            var i = e[!e.i ? t.toLowerCase() : t];
            return null != i ? i : t
        })
    };
    i.qJ = function () {
        var e = /<br\/?>$/, t = {
            r: /\<|\>|\&|\r|\n|\s|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "\n": "<br/>",
            "\r": ""
        };
        return function (n) {
            n = i.pJ(t, n);
            return n.replace(e, "<br/><br/>")
        }
    }();
    i.rJ = function () {
        var e = {
            r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&nbsp;": " ",
            "&#39;": "'",
            "&quot;": '"',
            "<br/>": "\n"
        };
        return function (t) {
            return i.pJ(e, t)
        }
    }();
    i.sJ = function () {
        var e = {i: !0, r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g}, t = ["上午", "下午"],
            n = ["A.M.", "P.M."], a = ["日", "一", "二", "三", "四", "五", "六"],
            o = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
            s = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var r = function (e) {
            e = parseInt(e) || 0;
            return (e < 10 ? "0" : "") + e
        };
        var c = function (e) {
            return e < 12 ? 0 : 1
        };
        return function (d, _, l) {
            if (!d || !_) return "";
            d = i.tJ(d);
            e.yyyy = d.getFullYear();
            e.yy = ("" + e.yyyy).substr(2);
            e.M = d.getMonth() + 1;
            e.MM = r(e.M);
            e.eM = s[e.M - 1];
            e.cM = o[e.M - 1];
            e.d = d.getDate();
            e.dd = r(e.d);
            e.H = d.getHours();
            e.HH = r(e.H);
            e.m = d.getMinutes();
            e.mm = r(e.m);
            e.s = d.getSeconds();
            e.ss = r(e.s);
            e.ms = d.getMilliseconds();
            e.w = a[d.getDay()];
            var u = c(e.H);
            e.ct = t[u];
            e.et = n[u];
            if (l) e.H = e.H % 12;
            return i.pJ(e, _)
        }
    }();
    i.tJ = function (e) {
        var n = e;
        if (i.cJ(e)) n = new Date(t.XI(e));
        if (!i.fJ(n)) n = new Date(e);
        return n
    };
    i.uJ = function (e, t) {
        return parseFloat(new Number(e).toFixed(t))
    };
    i.vJ = function () {
        var e = /([^\/:])\/.*$/, t = /\/[^\/]+$/, i = /[#\?]/, n = location.href.split(/[?#]/)[0],
            a = document.createElement("a");
        var o = function (e) {
            e = e || "";
            return e.indexOf("://") > 0 || 0 === e.indexOf("//")
        };
        var s = function (e) {
            return (e || "").split(i)[0].replace(t, "/")
        };
        var r = function (t, i) {
            if (0 == t.indexOf("/")) return i.replace(e, "$1") + t; else return s(i) + t
        };
        n = s(n);
        return function (e, t) {
            e = (e || "").trim();
            if (!o(t)) t = n;
            if (!e) return t;
            if (o(e)) return e;
            e = r(e, t);
            a.href = e;
            e = a.href;
            return o(e) ? e : a.getAttribute("href", 4)
        }
    }();
    i.wJ = function () {
        var e = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (t) {
            if (e.test(t || "")) return RegExp.$1.toLowerCase(); else return ""
        }
    }();
    i.xJ = function (e, t, n) {
        var a = {};
        var o = n;
        if (!i.bJ(o)) o = function (e) {
            return !n ? e : decodeURIComponent(e)
        };
        i.oJ((e || "").split(t), function (e) {
            var t = e.split("=");
            if (t && t.length) {
                var i = t.shift();
                if (i) a[o(i)] = o(t.join("="))
            }
        });
        return a
    };
    i.yJ = function (e, t, n) {
        if (!e) return "";
        var a = [];
        var o = n;
        if (!i.bJ(o)) o = function (e) {
            return !n ? e : encodeURIComponent(e)
        };
        i.jJ(e, function (e, t) {
            if (!i.bJ(e)) {
                if (i.fJ(e)) e = e.getTime(); else if (i.gJ(e)) e = e.join(","); else if (i.hJ(e)) e = JSON.stringify(e);
                a.push(o(t) + "=" + o(e))
            }
        });
        return a.join(t || ",")
    };
    i.zJ = function (e) {
        return i.xJ(e, "&", !0)
    };
    i.AJ = function (e) {
        return i.yJ(e, "&", !0)
    };
    i.BJ = function (e) {
        return t.WI(e)
    };
    i.CJ = function (e, t) {
        var n = {};
        i.oJ(e, function (e) {
            var i = e;
            if (t) i = t(e);
            if (null != i) n[i] = e
        });
        return n
    };
    i.DJ = function (e, t) {
        var i = ("" + e).length, n = Math.max(1, parseInt(t) || 0), a = n - i;
        if (a > 0) e = new Array(a + 1).join("0") + e;
        return "" + e
    };
    i.EJ = function (e, t) {
        if (!i.gJ(t)) try {
            delete e[t]
        } catch (n) {
            e[t] = void 0
        } else i.oJ(t, function (t) {
            i.EJ(e, t)
        })
    };
    i.FJ = function () {
        var e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        return function (t) {
            t = t || 10;
            var i = [];
            for (var n = 0, a; n < t; ++n) {
                a = Math.floor(Math.random() * e.length);
                i.push(e.charAt(a))
            }
            return i.join("")
        }
    }();
    i.GJ = function (e, t) {
        return Math.floor(Math.random() * (t - e) + e)
    };
    i.HJ = function (e) {
        e = Math.max(0, Math.min(e || 8, 30));
        var t = Math.pow(10, e - 1), n = 10 * t;
        return i.GJ(t, n).toString()
    };
    i.IJ = function () {
        var e = +new Date;
        return function () {
            return "" + e++
        }
    }();
    i.JJ = function (e, t) {
        e = e || n;
        var i = (t || "").split(".");
        for (var a = 0, o = i.length; a < o; a++) {
            e = e[i[a]];
            if (!e) break
        }
        return e
    };
    i.KJ = function () {
        var e = arguments.length - 1, t = arguments[e];
        if (i.bJ(t)) e -= 1; else t = a;
        var n = arguments[0] || {};
        for (var o = 1; o <= e; o++) i.jJ(arguments[o], function (e, i) {
            if (!t(e, i)) n[i] = e
        });
        return n
    };
    i.LJ = function (e, t) {
        if (t) i.jJ(e, function (e, i, n) {
            var a = t[i];
            if (null != a) n[i] = a
        });
        return e
    };
    i.MJ = function (e) {
        if (!e) return !1;
        if (null != e.length) return e.length > 0;
        var t = 0;
        i.jJ(e, function () {
            t++;
            return t > 0
        });
        return t > 0
    };
    if (!0) {
        e.Q = i.JJ;
        e.X = i.KJ;
        e.EX = i.LJ;
        e.copy(this.NEJ, e);
        e.copy(e.P("nej.u"), i)
    }
    return i
}, "38fcb21d4f4bc66eeed3795a8cc8504b", "90ae137c0a52422436f94c15bed44300");
I$("d1822f8b84fb4e9040f82d68172d47af", function (e, t, i, n, a, o) {
    var s = {};
    i.NJ = function () {
        var e = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (t) {
            t = t || "";
            if (e.test(t)) return RegExp.$1; else return location.protocol + "//" + location.host
        }
    }();
    i.OJ = function (e, t) {
        s[e] = t
    };
    i.PJ = function (e) {
        return s[e]
    };
    var r = function () {
        var e = {
            portrait: {name: "portrait", dft: "portrait/"},
            "ajax.swf": {name: "ajax", dft: "nej_proxy_flash.swf"},
            "chart.swf": {name: "chart", dft: "nej_flex_chart.swf"},
            "audio.swf": {name: "audio", dft: "nej_player_audio.swf"},
            "video.swf": {name: "video", dft: "nej_player_video.swf"},
            "clipboard.swf": {name: "clipboard", dft: "nej_clipboard.swf"},
            "upload.image.swf": {name: "uploadimage", dft: "nej_upload_image.swf"}
        };
        var a = function (e) {
            var t = {};
            if (!e || !e.length) return t;
            for (var n = 0, a = e.length, o; n < a; n++) {
                o = e[n];
                if (o.indexOf("://") > 0) t[i.NJ(o)] = o
            }
            return t
        };
        return function (o) {
            i.OJ("root", o.root || "/res/");
            var s = i.PJ("root");
            t.jJ(e, function (e, t, n) {
                i.OJ(t, o[e.name] || s + e.dft)
            });
            var r = o.p_csrf;
            if (r === !0) r = {cookie: "AntiCSRF", param: "AntiCSRF"};
            r = r || n;
            i.OJ("csrf", {param: r.param || "", cookie: r.cookie || ""});
            i.OJ("frames", a(o.p_frame));
            i.OJ("flashs", a(o.p_flash))
        }
    }();
    r(this.NEJ_CONF || n);
    return i
}, "38fcb21d4f4bc66eeed3795a8cc8504b", "7473c7d0556819b21bec58b99f475b04");
I$("0a1f86c401ea26817646e96ebf980215", function (e, t, i, n, a, o) {
    if ("trident" === t.$I.engine) I$("78bf2cbd2e486bf72c0f0badd3599f5b", function () {
        e.OJ("storage.swf", (this.NEJ_CONF || n).storage || e.PJ("root") + "nej_storage.swf")
    });
    if ("trident" === t.$I.engine && t.$I.release <= "3.0") I$("236aa928a1b9c36abe655bd03f4d39b9", function () {
        e.OJ("blank.png", (this.NEJ_CONF || n).blank || e.PJ("root") + "nej_blank.gif")
    });
    return e
}, "d1822f8b84fb4e9040f82d68172d47af", "f3ab479b168ebebfb3a24e1000f7236e");
I$("2af23932d9465d8562094044caec1a71", function (e, t, i, n, a, o) {
    i.QJ = function (e) {
        var n = t.NJ(e);
        return i.RJ("frames")[n] || n + "//s.stu.126.net/res/nej_proxy_frame.html?d63dd159526bf2941b8a763346ae0965"
    };
    i.SJ = function (e) {
        return i.RJ("flashs")[t.NJ(e)]
    };
    i.RJ = function (e) {
        return t.PJ(e)
    };
    if (!0) e.copy(e.P("nej.c"), i);
    return i
}, "38fcb21d4f4bc66eeed3795a8cc8504b", "0a1f86c401ea26817646e96ebf980215");
I$("1b005a7aa950f4fc021ca0593fd5e0f9", function (e, t, i, n, a, o) {
    var s = +new Date;
    i.TJ = 1e4 - s;
    i.UJ = 10001 - s;
    i.VJ = 10002 - s;
    i.WJ = 10003 - s;
    i.XJ = 10004 - s;
    i.YJ = 10005 - s;
    i.xb = 10006 - s;
    i.yb = 10007 - s;
    i.zb = "Content-Type";
    i.Ab = "text/plain";
    i.Bb = "multipart/form-data";
    i.Cb = "application/x-www-form-urlencoded";
    i.Db = t.RJ("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
    if (!0) e.copy(e.P("nej.g"), i);
    return i
}, "38fcb21d4f4bc66eeed3795a8cc8504b", "2af23932d9465d8562094044caec1a71");
I$("22b361d7e89ffe2b2f3ec497959c3e3d", function (e, t) {
    var i = {};
    t.KJ = function (t) {
        e.KJ(i, t)
    };
    t.Eb = function () {
        return i
    };
    t.Fb = function () {
        i = {}
    };
    return t
}, "7473c7d0556819b21bec58b99f475b04");
I$("f86895899d1e72491935b8a15b3a093c", function (e, t, i, n, a, o) {
    i.Gb = function (e, t) {
        if (e.getElementById) return e.getElementById("" + t);
        try {
            return e.querySelector("#" + t)
        } catch (i) {
            return null
        }
    };
    i.Hb = function (t) {
        return e.BJ(t.children || t.childNodes)
    };
    i.Ib = function (t, i) {
        return e.BJ(t.getElementsByClassName(i))
    };
    i.Jb = function (e) {
        return e.nextElementSibling
    };
    i.Kb = function (e) {
        return e.previousElementSibling
    };
    i.Lb = function (e, t, i) {
        e.dataset = e.dataset || {};
        if (void 0 !== i) e.dataset[t] = i;
        return e.dataset[t]
    };
    i.Mb = function (e, t) {
        if ("getAttribute" in e) return e.getAttribute(t)
    };
    i.Nb = function (e) {
        return (new XMLSerializer).serializeToString(e) || ""
    };
    i.Ob = function (e) {
        var t = (new DOMParser).parseFromString(e, "text/xml").documentElement;
        return "parsererror" == t.nodeName ? null : t
    };
    i.Pb = function () {
    };
    i.Qb = function () {
    };
    i.Rb = function () {
    };
    var s = t._I, r = t.$I.prefix;
    i.Sb = function () {
        var e = /^([a-z]+?)[A-Z]/;
        return function (t, i) {
            return !!(i[t] || e.test(t) && i[RegExp.$1])
        }
    }();
    i.Tb = function () {
        var t = e.CJ(["animation", "transform", "transition", "appearance", "userSelect", "box", "flex", "column"]);
        return function (e) {
            return i.Sb(e, t)
        }
    }();
    i.Ub = function () {
        var e = /-([a-z])/g;
        return function (t) {
            t = t || "";
            return t.replace(e, function (e, t) {
                return t.toUpperCase()
            })
        }
    }();
    i.ZJ = function () {
        var e = /^[a-z]/, t = r.css || "";
        return function (n) {
            n = i.Ub(n);
            if (!i.Tb(n)) return n; else return t + n.replace(e, function (e) {
                return e.toUpperCase()
            })
        }
    }();
    i.Wb = function (e, t) {
        var n = window.getComputedStyle(e, null);
        return n[i.ZJ(t)] || ""
    };
    i.Xb = function (e, t, n) {
        e.style[i.ZJ(t)] = n
    };
    i.Yb = function () {
        var t = /\((.*?)\)/, i = /\s*,\s*/, n = ["CSSMatrix", r.clz + "CSSMatrix"],
            a = ["m11", "m12", "m21", "m22", "m41", "m42"];
        var o = function (n) {
            var o = {};
            if (t.test(n || "")) e.oJ(RegExp.$1.split(i), function (e, t) {
                o[a[t]] = e
            });
            return o
        };
        return function (t) {
            var i;
            e.lJ(n, function (e) {
                if (this[e]) {
                    i = new this[e](t || "");
                    return !0
                }
            });
            return !i ? o(t) : i
        }
    }();
    i.Zb = function (e, t) {
        e.textContent = t
    };
    i.$b = function () {
        var t = /\$<(.*?)>/gi, a = /\{(.*?)\}/g, o = "-" + r.css.toLowerCase() + "-", c = {
            scale: "scale({x|1},{y|1})",
            rotate: "rotate({a})",
            translate: "translate({x},{y})",
            matrix: "matrix({m11},{m12},{m21},{m22},{m41},{m42})"
        }, d = {
            scale: "scale3d({x|1},{y|1},{z|1})",
            rotate: "rotate3d({x},{y},{z},{a})",
            translate: "translate3d({x},{y},{z})",
            matrix: "matrix3d({m11},{m12},{m13},{m14},{m21},{m22},{m23},{m24},{m31},{m32},{m33|1},{m34},{m41},{m42},{m43},{m44|1})"
        };
        var _ = function (e, t) {
            t = t || n;
            return e.replace(a, function (e, i) {
                var n = i.split("|");
                return t[n[0]] || n[1] || "0"
            })
        };
        i.ac = function (e, t) {
            var i = (!s.css3d ? c : d)[e.trim()];
            if (i) return _(i, t); else return ""
        };
        return function (n) {
            if (!n.replace) return n; else return n.replace(t, function (t, n) {
                if ("vendor" === n) return o;
                var a = (n || "").split("|");
                return i.ac(a[0], e.zJ(a[1])) || t
            })
        }
    }();
    i.bc = function (e, t) {
        var i = e.sheet, n = i.cssRules.length;
        i.insertRule(t, n);
        return i.cssRules[n]
    };
    i.cc = function () {
        var e = /\s+/;
        return function (t) {
            t = (t || "").trim();
            return t ? t.split(e) : null
        }
    }();
    i.dc = function (t, n, a) {
        if ("replace" != n) e.oJ(i.cc(a), function (e) {
            t.classList[n](e)
        }); else {
            i.dc(t, "remove", a);
            i.dc(t, "add", arguments[3])
        }
    };
    i.ec = function (t, n) {
        var a = t.classList;
        if (!a || !a.length) return !1; else return e.kJ(i.cc(n), function (e) {
            return a.contains(e)
        }) >= 0
    };
    !function () {
        if (!s.css3d) {
            var e = i.Yb();
            s.css3d = !!e && null != e.m41
        }
    }();
    return i
}, "7473c7d0556819b21bec58b99f475b04", "f3ab479b168ebebfb3a24e1000f7236e");
I$("15c72f3999bb626d6cecdd604c150aaa", function (e, t, i, n, a, o, s) {
    if ("trident" === t.$I.engine) I$("d9e4935273b38ca286afa12daecf943e", function () {
        e.Hb = e.Hb.QI(function (e) {
            var t = e.args[0];
            if (!t.children) {
                e.stopped = !0;
                var n = [];
                i.oJ(t.childNodes, function (e) {
                    if (1 == e.nodeType) n.push(e)
                });
                e.value = n
            }
        })
    });
    if ("trident" === t.$I.engine && t.$I.release <= "6.0") I$("4c54c4b5bdcbbef52bfdad728e9d3308", function () {
        e.Lb = function () {
            var e = {}, t = "data-", n = /\-(.{1})/gi;
            var a = function (a) {
                var o = a.id;
                if (!e[o]) {
                    var s = {};
                    i.oJ(a.attributes, function (e) {
                        var i = e.nodeName;
                        if (0 == i.indexOf(t)) {
                            i = i.replace(t, "").replace(n, function (e, t) {
                                return t.toUpperCase()
                            });
                            s[i] = e.nodeValue || ""
                        }
                    });
                    e[o] = s
                }
            };
            return function (t, i, n) {
                a(t);
                var o = e[t.id];
                if (void 0 !== n) o[i] = n;
                return o[i]
            }
        }()
    });
    if ("trident" === t.$I.engine && t.$I.release <= "5.0") I$("012d51e9c6efc28d1139f9c32d3964e3", function () {
        try {
            document.execCommand("BackgroundImageCache", !1, !0)
        } catch (t) {
        }
        e.Zb = function () {
            var t = 30;
            return e.Zb.QI(function (e) {
                var i = e.args[0];
                if (i.styleSheet) {
                    e.stopped = !0;
                    var n = e.args[1];
                    var a = document.styleSheets;
                    if (a.length > t) {
                        i = a[t];
                        n = i.cssText + n
                    } else i = i.styleSheet;
                    i.cssText = n
                }
            })
        }();
        e.fc = function () {
            var e = /\s+/g;
            return function (t) {
                t = (t || "").trim().replace(e, "|");
                return !t ? null : new RegExp("(\\s|^)(?:" + t + ")(?=\\s|$)", "g")
            }
        }();
        e.dc = function (t, i, n) {
            n = n || "";
            var a = t.className || "", o = e.fc(n + " " + (arguments[3] || ""));
            var s = a;
            if (o) s = s.replace(o, "");
            switch (i) {
                case"remove":
                    n = "";
                    break;
                case"replace":
                    n = arguments[3] || ""
            }
            s = (s + " " + n).trim();
            if (a != s) t.className = s
        };
        e.ec = function (t, i) {
            var n = e.fc(i);
            if (n) return n.test(t.className || ""); else return !1
        }
    });
    if ("trident" === t.$I.engine && t.$I.release <= "4.0") I$("c608ced5a2d04fb3de4eb93af87881b1", function () {
        e.Ib = function (e, t) {
            var n = [], a = new RegExp("(\\s|^)(?:" + t.replace(/\s+/g, "|") + ")(?=\\s|$)");
            i.oJ(e.getElementsByTagName("*"), function (e) {
                if (a.test(e.className)) n.push(e)
            });
            return n
        };
        e.Jb = function (e) {
            for (; e = e.nextSibling;) if (1 == e.nodeType) return e
        };
        e.Kb = function (e) {
            for (; e = e.previousSibling;) if (1 == e.nodeType) return e
        };
        e.Nb = function (e) {
            return "xml" in e ? e.xml : e.outerHTML
        };
        e.Ob = function () {
            var e = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"];
            var t = function () {
                try {
                    for (var t = 0, i = e.length; t < i; t++) return new ActiveXObject(e[t])
                } catch (n) {
                    return null
                }
            };
            return function (e) {
                var i = t();
                if (i && i.loadXML(e) && !i.parseError.errorCode) return i.documentElement; else return null
            }
        }();
        e.Wb = function () {
            var t = /opacity\s*=\s*([\d]+)/i;
            var i = {
                opacity: function (e) {
                    var i = 0;
                    if (t.test(e.filter || "")) i = parseFloat(RegExp.$1) / 100;
                    return i
                }
            };
            return function (t, n) {
                var a = t.currentStyle, o = i[n];
                if (o) return o(a); else return a[e.ZJ(n)] || ""
            }
        }();
        e.Xb = function () {
            var t = {
                opacity: function (e, t) {
                    e.style.filter = "alpha(opacity=" + 100 * t + ")"
                }
            };
            return function (i, n, a) {
                var o = t[n];
                if (o) o(i, a); else i.style[e.ZJ(n)] = a
            }
        }();
        e.bc = function (e, t) {
            var i = e.styleSheet, n = i.rules.length, a = t.split(/[\{\}]/);
            i.addRule(a[0], a[1], n);
            return i.rules[n]
        }
    });
    if ("trident" === t.$I.engine && t.$I.release <= "3.0") I$("e96de56a58ef54ceed12a99480bd7329", function () {
        e.Mb = e.Mb.QI(null, function (e) {
            var t = e.args;
            if ("maxlength" == t[1] && 2147483647 == e.value) e.value = null
        })
    });
    if ("trident" === t.$I.engine && t.$I.release <= "2.0") I$("55aeeeaf1f8ce1f86b08103d67ddc36c", function () {
        e.Pb = function (e, t) {
            var i = e.style;
            i.width = t.scrollWidth + "px";
            i.height = t.scrollHeight + "px"
        };
        e.Qb = function () {
            var t = {};
            e.Rb = function (e) {
                var i = e.id, n = t[i];
                if (n) {
                    delete t[i];
                    n.parentNode.removeChild(n)
                }
            };
            return function (e) {
                var i = e.id, n = t[i];
                if (!n) {
                    n = document.createElement("iframe");
                    n.style.position = "absolute";
                    t[i] = n
                }
                var a = n.style, o = e.style;
                a.top = (parseInt(o.top) || 0) + "px";
                a.left = (parseInt(o.left) || 0) + "px";
                a.width = e.offsetWidth + "px";
                a.height = e.offsetHeight + "px";
                e.insertAdjacentElement("beforeBegin", n);
                return n
            }
        }()
    });
    if ("gecko" === t.$I.engine) I$("dfb6dcbfe786cf537c8aec03d6000ec8", function () {
        if (!t._I.css3d) t._I.css3d = "MozPerspective" in document.body.style;
        if (!("insertAdjacentElement" in document.body)) HTMLElement.prototype.insertAdjacentElement = function (e, t) {
            if (e && t) switch (e) {
                case"beforeEnd":
                    this.appendChild(t);
                    return;
                case"beforeBegin":
                    this.parentNode.insertBefore(t, this);
                    return;
                case"afterBegin":
                    !this.firstChild ? this.appendChild(t) : this.insertBefore(t, this.firstChild);
                    return;
                case"afterEnd":
                    !this.nextSibling ? this.parentNode.appendChild(t) : this.parentNode.insertBefore(t, this.nextSibling);
                    return
            }
        };
        if (!("innerText" in document.body)) {
            HTMLElement.prototype["__defineGetter__"]("innerText", function () {
                return this.textContent
            });
            HTMLElement.prototype["__defineSetter__"]("innerText", function (e) {
                this.textContent = e
            })
        }
    });
    return e
}, "f86895899d1e72491935b8a15b3a093c", "f3ab479b168ebebfb3a24e1000f7236e", "7473c7d0556819b21bec58b99f475b04");
I$("a5433a940b3ce4d5d7c2ae8a4f7ff1c9", function (e, t, i, n, a, o, s, r, c, d) {
    var _ = {}, l, u = {}, h = {}, f = document.createDocumentFragment();
    if (!document.head) document.head = document.getElementsByTagName("head")[0] || document.body;
    s.dump = function () {
        return {pool: u, dirty: h, fragment: f}
    };
    s.gc = _.gc = function (e) {
        e = s.RJ(e);
        if (e) {
            var t = e.id ? e.id : "auto-id-" + i.IJ();
            if (!("id" in e)) u[t] = e;
            e.id = t;
            if (!s.RJ(t)) h[t] = e;
            return t
        }
    };
    s.RJ = function (e) {
        try {
            var t = u["" + e]
        } catch (n) {
        }
        if (t) return t;
        if (!i.cJ(e) && !i.dJ(e)) return e;
        var t = document.getElementById(e);
        if (!t) t = o.Gb(f, e);
        if (t) delete h[e];
        return t || h[e]
    };
    s.hc = _.hc = function (e, t) {
        e = s.RJ(e);
        if (!e) return null;
        var n = o.Hb(e);
        if (t) i.nJ(n, function (e, i, n) {
            if (!s.ic(e, t)) n.splice(i, 1)
        });
        return n
    };
    s.jc = function () {
        var e;
        var t = function (t, i) {
            var n = t.split(":");
            if (n.length > 1) {
                if (!e) e = {
                    a: s.kc, d: s.lc, c: s.ic, t: function (e, t) {
                        return (e.tagName || "").toLowerCase() === t
                    }
                };
                var a = e[n[0]];
                if (a) return !!a(i, n[1]);
                t = n[1]
            }
            return !!s.kc(i, t) || !!s.lc(i, t) || s.ic(i, t)
        };
        return function (e, n) {
            e = s.RJ(e);
            if (e) {
                if (!n) return e;
                if (i.cJ(n)) n = t.RI(null, n);
                if (i.bJ(n)) {
                    for (; e;) {
                        if (n(e)) return e;
                        e = e.parentNode
                    }
                    return null
                }
                return e
            }
        }
    }();
    s.mc = _.mc = function (e, t) {
        e = s.RJ(e);
        return !e ? null : o.Ib(e, t.trim())
    };
    s.oc = _.oc = function () {
        var e = function () {
            return !0
        };
        return function (t, n) {
            t = s.RJ(t);
            if (!t) return null;
            var a = {backward: !1, filter: e};
            if (i.bJ(n)) a.filter = n; else a = i.LJ(a, n);
            var r = a.backward ? o.Kb : o.Jb;
            for (; (t = r(t)) && !a.filter(t);) ;
            return t
        }
    }();
    s.pc = function (e) {
        e = s.RJ(e);
        if (e) {
            e = e.parentNode;
            for (; e && !(e.scrollHeight > e.clientHeight);) e = e.parentNode;
            if (e) return e
        }
        var t = document.body.scrollHeight, i = document.documentElement.scrollHeight;
        return i >= t ? document.documentElement : document.body
    };
    s.qc = function () {
        var e = function (e) {
            var t = 0;
            i.oJ(e, function (e) {
                if (e) if (!t) t = e; else t = Math.min(t, e)
            });
            return t
        };
        var t = [{
            main: "scroll", sub: ["Top", "Left"], func: function (e, t, i) {
                return Math.max(t["scroll" + e], i["scroll" + e])
            }
        }, {
            main: "client", sub: ["Width", "Height"], func: function (t, i, n) {
                return e([i["client" + t], i["offset" + t], n["client" + t], n["offset" + t]])
            }
        }, {
            main: "scroll", sub: ["Width", "Height"], func: function (e, t, i, n) {
                return Math.max(n["client" + e], t["scroll" + e], i["scroll" + e])
            }
        }];
        return function (e) {
            var n = {}, a = e || document, o = a.body, s = a.documentElement;
            i.oJ(t, function (e) {
                var t = e.main;
                i.oJ(e.sub, function (i) {
                    n[t + i] = e.func(i, o, s, n)
                })
            });
            return n
        }
    }();
    s.rc = function (e, t) {
        var n = i.KJ({}, e), a = t.width / t.height, o = e.width / e.height;
        if (a > o && e.height > t.height) {
            n.height = t.height;
            n.width = n.height * o
        }
        if (a < o && e.width > t.width) {
            n.width = t.width;
            n.height = n.width / o
        }
        return n
    };
    s.sc = _.sc = function (e) {
        var t = s.tc(e);
        window.scrollTo(t.x, t.y)
    };
    s.uc = function () {
        var e = /\s+/;
        var t = {
            left: function () {
                return 0
            }, center: function (e, t) {
                return (e.width - t.width) / 2
            }, right: function (e, t) {
                return e.width - t.width
            }, top: function () {
                return 0
            }, middle: function (e, t) {
                return (e.height - t.height) / 2
            }, bottom: function (e, t) {
                return e.height - t.height
            }
        };
        return function (i, n, a) {
            var o = {}, s = (a || "").split(e), r = t[s[1]] || t.middle, c = t[s[0]] || t.center;
            o.top = r(i, n);
            o.left = c(i, n);
            return o
        }
    }();
    s.tc = _.tc = function () {
        var e = function (e) {
            return e == document.body || e == document.documentElement
        };
        return function (t, i) {
            t = s.RJ(t);
            if (!t) return null;
            i = s.RJ(i) || null;
            var n = t, a = {x: 0, y: 0}, o, r, c;
            for (; n && n != i;) {
                o = e(n) || n == t;
                r = o ? 0 : n.scrollLeft;
                c = parseInt(s.vc(n, "borderLeftWidth")) || 0;
                a.x += n.offsetLeft + c - r;
                r = o ? 0 : n.scrollTop;
                c = parseInt(s.vc(n, "borderTopWidth")) || 0;
                a.y += n.offsetTop + c - r;
                n = n.offsetParent
            }
            return a
        }
    }();
    s.xc = _.xc = function (e) {
        e = s.RJ(e);
        if (e) o.Pb(e, s.qc())
    };
    s.yc = _.yc = function (e) {
        e = s.RJ(e);
        if (e) {
            s.gc(e);
            return o.Qb(e)
        }
        return null
    };
    s.zc = _.zc = function (e) {
        e = s.RJ(e);
        if (e) {
            s.gc(e);
            return o.Rb(e)
        }
        return null
    };
    s.Ac = function () {
        var e = {
            a: {href: "#", hideFocus: !0},
            style: {type: "text/css"},
            link: {type: "text/css", rel: "stylesheet"},
            iframe: {frameBorder: 0},
            script: {defer: !0, type: "text/javascript"}
        };
        return function (t, n, a) {
            var o = document.createElement(t), r = e[t.toLowerCase()];
            i.KJ(o, r);
            if (n) o.className = n;
            a = s.RJ(a);
            if (a) a.appendChild(o); else if (!r) f.appendChild(o);
            return o
        }
    }();
    s.Bc = function () {
        var e = function () {
            if (location.hostname == document.domain) return "about:blank"; else return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();'
        };
        var t = function (e) {
            e = e.trim();
            if (!e) return s.Ac("iframe");
            var t;
            try {
                t = document.createElement('<iframe name="' + e + '"></iframe>');
                t.frameBorder = 0
            } catch (i) {
                t = s.Ac("iframe");
                t.name = e
            }
            return t
        };
        return function (a) {
            a = a || r;
            var o = t(a.name || "");
            if (!a.visible) o.style.display = "none";
            if (i.bJ(a.onload)) n.Cc(o, "load", function (e) {
                if (o.src) {
                    n.Dc(o, "load");
                    a.onload(e)
                }
            });
            var c = a.parent;
            if (i.bJ(c)) try {
                c(o)
            } catch (d) {
            } else (s.RJ(c) || document.body).appendChild(o);
            var _ = a.src || e();
            window.setTimeout(function () {
                o.src = _
            }, 0);
            return o
        }
    }();
    s.Ec = _.Ec = function () {
        var e = {
            img: function (e) {
                e.src = t.Db
            }, iframe: function (e) {
                e.src = "about:blank"
            }
        };
        var a = function (t, n) {
            if (n) {
                if (t.getElementsByTagName) i.oJ(t.getElementsByTagName(n), a)
            } else {
                var o = (t.tagName || "").toLowerCase(), s = e[o];
                if (s) s(t)
            }
        };
        return function (e) {
            e = s.RJ(e);
            if (e) {
                if (!arguments[1]) n.Dc(e);
                a(e);
                a(e, "img");
                a(e, "iframe");
                if (e.parentNode) e.parentNode.removeChild(e)
            }
        }
    }();
    s.Fc = _.Fc = function (e) {
        e = s.RJ(e);
        if (e) try {
            f.appendChild(e)
        } catch (t) {
            console.error(t)
        }
    };
    s.Gc = _.Gc = function (e) {
        e = s.RJ(e);
        if (e) i.nJ(e.childNodes, function (e) {
            s.Ec(e)
        })
    };
    s.Hc = _.Hc = function () {
        var e, t = /\s+/;
        var i = function () {
            if (!e) {
                e = s.Ic(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
                s.Jc()
            }
        };
        return function (n, a) {
            n = s.RJ(n);
            if (!n) return null;
            i();
            a = a || r;
            var o = n.parentNode;
            if (!s.ic(o, e)) {
                o = s.Ac("span", e);
                n.insertAdjacentElement("beforeBegin", o);
                o.appendChild(n)
            }
            var c = a.nid || "", d = s.mc(o, c || e + "-show")[0];
            if (!d) {
                var _ = ((a.clazz || "") + " " + c).trim();
                _ = e + "-show" + (!_ ? "" : " ") + _;
                d = s.Ac(a.tag || "span", _);
                o.appendChild(d)
            }
            var _ = a.clazz;
            if (_) {
                _ = (_ || "").trim().split(t)[0] + "-parent";
                s.Kc(o, _)
            }
            return d
        }
    }();
    s.lc = _.lc = function (e, t, n) {
        var a = s.gc(e);
        if (!a) return null;
        if (i.cJ(t)) return o.Lb(s.RJ(e), t, n);
        if (i.hJ(t)) {
            var r = {};
            i.lJ(t, function (e, t) {
                r[t] = s.lc(a, t, e)
            });
            return r
        }
        if (i.gJ(t)) {
            var r = {};
            i.oJ(t, function (e) {
                r[e] = s.lc(a, e)
            });
            return r
        }
        return null
    };
    s.kc = _.kc = function (e, t, i) {
        e = s.RJ(e);
        if (!e) return "";
        if (void 0 !== i && e.setAttribute) e.setAttribute(t, i);
        return o.Mb(e, t)
    };
    s.Lc = function () {
        var e = /<(.*?)(?=\s|>)/i, t = {li: "ul", tr: "tbody", td: "tr", th: "tr", option: "select"};
        return function (i) {
            var n;
            if (e.test(i)) n = t[(RegExp.$1 || "").toLowerCase()] || "";
            var a = s.Ac(n || "div");
            a.innerHTML = i;
            var o = s.hc(a);
            return o.length > 1 ? a : o[0]
        }
    }();
    s.Mc = _.Mc = function (e) {
        e = s.RJ(e);
        return !e ? "" : o.Nb(e)
    };
    s.Nc = function (e) {
        e = (e || "").trim();
        return !e ? null : o.Ob(e)
    };
    s.Oc = _.Oc = function (e, t) {
        t = t || {};
        e = s.RJ(e);
        if (!e) return t;
        var n = e.tagName.toLowerCase(), a = s.hc(e);
        if (!a || !a.length) {
            t[n] = e.textContent || e.text || "";
            return t
        }
        var o = {};
        t[n] = o;
        i.oJ(a, function (e) {
            s.Oc(e, o)
        });
        return t
    };
    s.Pc = function (e) {
        try {
            return s.Oc(s.Nc(e))
        } catch (t) {
            return null
        }
    };
    s.Qc = function () {
        var e = {
            xml: function (e) {
                return s.Nc(e)
            }, json: function (e) {
                try {
                    return JSON.parse(e)
                } catch (t) {
                    return null
                }
            }, dft: function (e) {
                return e
            }
        };
        return function (t, i) {
            i = (i || "").toLowerCase();
            return (e[i] || e.dft)(t || "")
        }
    }();
    s.Rc = _.Rc = function (e, t) {
        e = s.RJ(e);
        if (e) i.jJ(t, function (t, i) {
            s.Sc(e, i, t)
        })
    };
    s.Sc = _.Sc = function (e, t, i) {
        e = s.RJ(e);
        if (e) o.Xb(e, t, o.$b(i))
    };
    s.vc = _.vc = function (e, t) {
        e = s.RJ(e);
        return !e ? "" : o.Wb(e, t)
    };
    s.Tc = function (e) {
        try {
            e = e.trim();
            if (e) return new Function(e)()
        } catch (t) {
            console.error(t.message);
            console.error(t.stack)
        }
    };
    s.Uc = function () {
        var e = /[\s\r\n]+/gi;
        return function (t) {
            t = (t || "").replace(e, " ").trim();
            var i = null;
            if (t) {
                i = s.Ac("style");
                document.head.appendChild(i);
                o.Zb(i, o.$b(t))
            }
            return i
        }
    }();
    s.Ic = function () {
        var e = /#<(.*?)>/g, t = +new Date;
        return function (t, n) {
            if (!l) l = [];
            var a = "auto-" + i.IJ(), o = i.KJ({uispace: a}, n);
            l.push(t.replace(e, function (e, t) {
                return o[t] || e
            }));
            return a
        }
    }();
    s.Jc = function () {
        if (l) {
            s.Uc(l.join(" "));
            l = null
        }
    };
    s.Vc = _.Vc = function (e, t) {
        e = s.RJ(e);
        return !e ? null : o.bc(e, o.$b(t))
    };
    s.Kc = _.Kc = function (e, t) {
        if (t) {
            e = s.RJ(e);
            if (e) o.dc(e, "add", t)
        }
    };
    s.Wc = _.Wc = function (e, t) {
        e = s.RJ(e);
        if (e) o.dc(e, "remove", t)
    };
    s.Xc = _.Xc = function (e, t, i) {
        e = s.RJ(e);
        if (e) o.dc(e, "replace", t, i)
    };
    s.ic = _.ic = function (e, t) {
        e = s.RJ(e);
        if (e) return o.ec(e, t); else return !1
    };
    s.Yc = function (e) {
        e = (e || "").trim();
        return o.Yb(e)
    };
    s.Zc = _.Zc = function (e, t, i) {
        e = s.RJ(e);
        if (e) {
            var n = o.ac(t, i);
            if (n) s.Sc(e, "transform", n)
        }
    };
    a.KJ(_);
    if (!0) e.copy(e.P("nej.e"), s);
    return s
}, "38fcb21d4f4bc66eeed3795a8cc8504b", "1b005a7aa950f4fc021ca0593fd5e0f9", "7473c7d0556819b21bec58b99f475b04", "c2319fe81ae54f0df799a059ee6679e7", "22b361d7e89ffe2b2f3ec497959c3e3d", "15c72f3999bb626d6cecdd604c150aaa");
I$("5b1ea01e4f148d5eff23975093063837", function (e, t, i, n, a, o) {
    i.$c = function () {
        var e = {touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup"}, i = t.$I.prefix, n = {
            transitionend: "TransitionEnd",
            animationend: "AnimationEnd",
            animationstart: "AnimationStart",
            animationiteration: "AnimationIteration",
            visibilitychange: "visibilitychange",
            fullscreenchange: "fullscreenchange"
        };
        var a = {
            enter: function (e, t, i) {
                var n = {type: "keypress"};
                if (i) n.handler = function (t) {
                    if (13 === t.keyCode) i.call(e, t)
                };
                return n
            }
        };
        var o = function (e) {
            return (i.evt || i.pro) + e
        };
        return function (t, i, s) {
            var r = {type: i, handler: s};
            if (!("on" + i in t)) {
                var c = e[i];
                if (c) {
                    r.type = c;
                    return r
                }
                var c = n[i];
                if (c) {
                    r.type = o(c);
                    return r
                }
                var d = a[i];
                if (d) return d.apply(null, arguments)
            }
            return r
        }
    }();
    i.ad = function () {
        var e = arguments;
        if (!1) if (!("on" + e[1] in e[0])) console.log("not support event[" + e[1] + "] for " + e[0]);
        e[0].addEventListener(e[1], e[2], e[3])
    };
    i.cd = function () {
        var e = arguments;
        e[0].removeEventListener(e[1], e[2], e[3])
    };
    i.$J = function (t, i, n) {
        var a = document.createEvent("Event");
        a.initEvent(i, !0, !0);
        e.KJ(a, n);
        t.dispatchEvent(a)
    };
    return i
}, "7473c7d0556819b21bec58b99f475b04", "f3ab479b168ebebfb3a24e1000f7236e");
I$("b6c8ecbd34e090d88038c29fa09b8f91", function (e, t, i, n, a, o, s) {
    if ("trident" === e.$I.engine && e.$I.release >= "6.0") I$("cd37c51b56f60a7b9371f06ec291c704", function () {
        t.$c = function () {
            var e = {
                touchcancel: "MSPointerCancel",
                touchstart: "MSPointerDown",
                touchmove: "MSPointerMove",
                touchend: "MSPointerUp",
                fullscreenchange: "MSFullscreenChange"
            };
            return t.$c.QI(function (t) {
                var i = t.args;
                var n = e[i[1]];
                if (n) {
                    t.stopped = !0;
                    t.value = {type: n, handler: i[2]}
                }
            })
        }()
    });
    if ("trident" === e.$I.engine && "5.0" == e.$I.release) I$("869d30709b344cf28482fe597ac139d9", function () {
        t.$c = function () {
            var e = {};
            var i = {
                input: function (t, i, n) {
                    if (!n) return {type: i}; else return {
                        type: i, handler: function (i) {
                            var a = t.id;
                            e[a] = t.value;
                            n.call(t, i)
                        }, link: [[document, "selectionchange", function (i) {
                            var a = t.id;
                            if (t == document.activeElement) {
                                if (e[a] !== t.value) {
                                    e[a] = t.value;
                                    n.call(t, i)
                                }
                            } else delete e[a]
                        }]]
                    }
                }
            };
            return t.$c.QI(function (e) {
                var t = e.args;
                var n = i[t[1]];
                if (n) {
                    e.stopped = !0;
                    e.value = n.apply(null, t)
                }
            })
        }()
    });
    if ("trident" === e.$I.engine && e.$I.release >= "5.0") I$("dbc842e63c8eda0d4ad6fca56b7c25c5", function () {
        var e = {propertychange: 1};
        t.ad = t.ad.QI(function (t) {
            var i = t.args;
            if (null != e[i[1]] && i[0].attachEvent) {
                t.stopped = !0;
                i[0].attachEvent("on" + i[1], i[2])
            }
        });
        t.cd = t.cd.QI(function (t) {
            var i = t.args, n = e[i[1]];
            if (null != e[i[1]] && i[0].detachEvent) {
                t.stopped = !0;
                i[0].detachEvent("on" + i[1], i[2])
            }
        })
    });
    if ("trident" === e.$I.engine && e.$I.release <= "4.0") I$("f414370ac33861e74e3c032fdfbe2bb0", function () {
        t.$c = function () {
            var e = {};
            var i = {
                input: function (t, i, n) {
                    var a = {type: "propertychange"};
                    if (n) {
                        var o = t.id;
                        var s = function (i) {
                            if (t.value && !e["x-" + o]) {
                                e["x-" + o] = !0;
                                n.call(t, i)
                            }
                        };
                        a.handler = function (i) {
                            if ("value" in t && "value" == i.propertyName) {
                                if (e[o]) return;
                                e[o] = !0;
                                n.call(t, i);
                                delete e[o]
                            }
                        };
                        a.link = [[t, "keyup", s], [t, "mouseup", s], [t, "mousemove", s]];
                        a.destroy = function () {
                            delete e[o];
                            delete e["x-" + o]
                        }
                    }
                    return a
                }, load: function (e, t, i) {
                    var n = {type: "readystatechange"};
                    if (i) n.handler = function (t) {
                        if ("loaded" == e.readyState || "complete" == e.readyState) i.call(e, t)
                    };
                    return n
                }
            };
            return t.$c.QI(function (e) {
                var t = e.args;
                var n = i[t[1]];
                if (n) {
                    e.stopped = !0;
                    e.value = n.apply(null, t)
                }
                if (t[2]) t[2] = t[2].RI(t[0])
            })
        }();
        t.ad = function () {
            var e = arguments;
            if (!1) if (!("on" + e[1] in e[0])) console.log("not support event[" + e[1] + "] for " + e[0]);
            e[0].attachEvent("on" + e[1], e[2])
        };
        t.cd = function () {
            var e = arguments;
            e[0].detachEvent("on" + e[1], e[2])
        };
        t.$J = function () {
            var e = {propertychange: {propertyName: "value"}};
            return function (t, n, a) {
                var o = document.createEventObject();
                try {
                    i.KJ(o, e[n], a);
                    t.fireEvent("on" + n, o)
                } catch (s) {
                    console.error(s.message);
                    console.error(s.stack)
                }
            }
        }()
    });
    if ("gecko" === e.$I.engine) I$("66ff0bf7d7252e45952067eb8813f971", function () {
        t.$c = function () {
            var e = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
            var i = {
                mousewheel: function (e, t, i) {
                    var n = {type: "MozMousePixelScroll"};
                    if (i) n.handler = function (t) {
                        var n = t.detail;
                        t.wheelDelta = -n;
                        t.wheelDeltaY = -n;
                        t.wheelDeltaX = 0;
                        i.call(e, t)
                    };
                    return n
                }
            };
            return t.$c.QI(function (t) {
                var n = t.args;
                if (e.test(n[1])) {
                    t.stopped = !0;
                    t.value = {type: n[1], handler: n[2]}
                }
                var a = i[n[1]];
                if (a) {
                    t.stopped = !0;
                    t.value = a.apply(null, n)
                }
            })
        }()
    });
    return t
}, "f3ab479b168ebebfb3a24e1000f7236e", "5b1ea01e4f148d5eff23975093063837", "7473c7d0556819b21bec58b99f475b04");
I$("c2319fe81ae54f0df799a059ee6679e7", function (e, t, i, n, a, o, s, r, c) {
    var d = {}, _ = {};
    var l = function () {
        var e = /[\s,;]+/;
        return function (t) {
            var t = (t || "").trim().toLowerCase();
            return !t ? null : t.split(e)
        }
    }();
    var u = function (e, i, n) {
        var a = "page" + i;
        return null != e[a] ? e[a] : e["client" + i] + t.qc()["scroll" + n]
    };
    var h = function (e, t, i) {
        var n = "scroll" + i;
        fd = o.gd(e), hd = u(e, t, i);
        for (; fd && fd != document.body && fd != document.documentElement;) {
            hd += fd[n] || 0;
            fd = fd.parentNode
        }
        return hd
    };
    var f = function (e, n, a, o) {
        var s = {};
        e = t.RJ(e);
        if (!e) return null;
        t.gc(e);
        s.element = e;
        if (!i.bJ(a)) return null;
        s.handler = a;
        var n = l(n);
        if (!n) return null;
        s.type = n;
        s.capture = !!o;
        return s
    };
    o.Cc = _.Cc = function () {
        var e = function (e, i, n) {
            var a = t.gc(i.element), o = d[a] || {}, s = o[e] || [];
            s.push({
                type: n.type || e,
                func: n.handler || i.handler,
                sfun: i.handler,
                capt: i.capture,
                link: n.link,
                destroy: n.destroy
            });
            o[e] = s;
            d[a] = o
        };
        return function () {
            var n = f.apply(null, arguments);
            if (n) i.oJ(n.type, function (o) {
                var s = a.$c(n.element, o, n.handler);
                a.ad(n.element, s.type, s.handler, n.capture);
                i.lJ(s.link, function (e) {
                    e[3] = !!e[3];
                    a.ad.apply(a, e);
                    e[0] = t.gc(e[0])
                });
                e(o, n, s)
            })
        }
    }();
    o.jd = _.jd = function () {
        var e = function (e, n) {
            var a = t.gc(n.element), o = d[a] || s, r = o[e], c = i.kJ(r, function (e) {
                return e.sfun === n.handler && e.capt === n.capture
            });
            var _ = null;
            if (c >= 0) {
                var l = r.splice(c, 1)[0];
                _ = [[n.element, l.type, l.func, n.capture]];
                if (l.link) {
                    i.oJ(l.link, function (e) {
                        e[0] = t.RJ(e[0])
                    });
                    _.push.apply(_, l.link)
                }
                if (l.destroy) l.destroy();
                if (!r.length) delete o[e];
                if (!i.MJ(o)) delete d[a]
            }
            return _
        };
        return function () {
            var t = f.apply(null, arguments);
            if (t) i.oJ(t.type, function (n) {
                i.oJ(e(n, t), function (e) {
                    a.cd.apply(a, e)
                })
            })
        }
    }();
    o.Dc = _.Dc = function () {
        var e = function (e, t, n) {
            i.nJ(n, function (i) {
                o.jd(e, t, i.sfun, i.capt)
            })
        };
        return function (n, a) {
            var s = t.gc(n);
            if (s) {
                var r = d[s];
                if (r) {
                    a = l(a);
                    if (a) i.oJ(a, function (t) {
                        e(s, t, r[t])
                    }); else i.jJ(r, function (e, t) {
                        o.Dc(n, t)
                    })
                }
            }
        }
    }();
    o.kd = _.kd = function (e, n, o) {
        var e = t.RJ(e);
        if (e) i.oJ(l(n), function (t) {
            var i = a.$c(e, t);
            a.$J(e, i.type, o)
        })
    };
    o.gd = function (e) {
        if (!e) return null;
        var i = e.target || e.srcElement, n = arguments[1];
        return t.jc(i, n)
    };
    o.ld = function (e) {
        o.md(e);
        o.nd(e)
    };
    o.md = function (e) {
        if (e) e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
    };
    o.nd = function (e) {
        if (e) e.preventDefault ? e.preventDefault() : e.returnValue = !1
    };
    o.od = function (e) {
        return {x: o._J(e), y: o.qd(e)}
    };
    o._J = function (e) {
        return h(e, "X", "Left")
    };
    o.qd = function (e) {
        return h(e, "Y", "Top")
    };
    o.rd = function (e) {
        return u(e, "X", "Left")
    };
    o.sd = function (e) {
        return u(e, "Y", "Top")
    };
    n.KJ(_);
    if (!0) e.copy(e.P("nej.v"), o);
    return o
}, "38fcb21d4f4bc66eeed3795a8cc8504b", "a5433a940b3ce4d5d7c2ae8a4f7ff1c9", "7473c7d0556819b21bec58b99f475b04", "22b361d7e89ffe2b2f3ec497959c3e3d", "b6c8ecbd34e090d88038c29fa09b8f91");
!function () {
    if ("undefined" == typeof TrimPath) {
        TrimPath = {};
        if ("undefined" != typeof exports) TrimPath = exports
    }
    var e = {}, t = [], i = /\s+/g, n = +new Date, a, o, s;
    var r = function () {
        var e = /^\s*[\[\{'"].*?[\]\}'"]\s*$/, t = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;]/,
            i = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i, n = /^new\s+/,
            a = /['"]/;
        var o = function (t) {
            if (!e.test(t)) {
                t = t.split(".")[0].trim();
                if (t && !a.test(t)) {
                    t = t.replace(n, "");
                    try {
                        if (i.test(t)) return;
                        s[t] = 1
                    } catch (o) {
                    }
                }
            }
        };
        return function (i) {
            i = i || "";
            if (i && !e.test(i)) {
                var n = i.split(t);
                for (var a = 0, s = n.length; a < s; a++) o(n[a])
            }
        }
    }();
    var c = function (e) {
        if ("in" != e[2]) throw"bad for loop statement: " + e.join(" ");
        t.push(e[1]);
        r(e[3]);
        return "var __HASH__" + e[1] + " = " + e[3] + "," + e[1] + "," + e[1] + "_count=0;if (!!__HASH__" + e[1] + ")for(var " + e[1] + "_key in __HASH__" + e[1] + "){" + e[1] + " = __HASH__" + e[1] + "[" + e[1] + "_key];if (typeof(" + e[1] + ')=="function") continue;' + e[1] + "_count++;"
    };
    var d = function () {
        var e = t[t.length - 1];
        return "}; if(!__HASH__" + e + "||!" + e + "_count){"
    };
    var _ = function () {
        t.pop();
        return "};"
    };
    var l = function (e) {
        if ("as" != e[2]) throw"bad for list loop statement: " + e.join(" ");
        var t = e[1].split("..");
        if (t.length > 1) {
            r(t[0]);
            r(t[1]);
            return "for(var " + e[3] + "," + e[3] + "_index=0," + e[3] + "_beg=" + t[0] + "," + e[3] + "_end=" + t[1] + "," + e[3] + "_length=parseInt(" + e[3] + "_end-" + e[3] + "_beg+1);" + e[3] + "_index<" + e[3] + "_length;" + e[3] + "_index++){" + e[3] + " = " + e[3] + "_beg+" + e[3] + "_index;"
        } else {
            r(e[1]);
            return "for(var __LIST__" + e[3] + " = " + e[1] + "," + e[3] + "," + e[3] + "_index=0," + e[3] + "_length=__LIST__" + e[3] + ".length;" + e[3] + "_index<" + e[3] + "_length;" + e[3] + "_index++){" + e[3] + " = __LIST__" + e[3] + "[" + e[3] + "_index];"
        }
    };
    var u = function (e) {
        if (e && e.length) {
            e.shift();
            var t = e[0].split("(")[0];
            return "var " + t + " = function" + e.join("").replace(t, "") + "{var __OUT=[];"
        }
    };
    var h = function (e) {
        if (!e[1]) throw"bad include statement: " + e.join(" ");
        return 'if (typeof inline == "function"){__OUT.push(inline('
    };
    var f = function (e, t) {
        r(t.slice(1).join(" "));
        return e
    };
    var p = function (e) {
        return f("if(", e)
    };
    var m = function (e) {
        return f("}else if(", e)
    };
    var g = function (e) {
        return f("var ", e)
    };
    o = {
        blk: /^\{(cdata|minify|eval)/i,
        tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include",
        def: {
            "if": {pfix: p, sfix: "){", pmin: 1},
            "else": {pfix: "}else{"},
            elseif: {pfix: m, sfix: "){", pdft: "true"},
            "/if": {pfix: "}"},
            "for": {pfix: c, pmin: 3},
            forelse: {pfix: d},
            "/for": {pfix: _},
            list: {pfix: l, pmin: 3},
            "/list": {pfix: "};"},
            "break": {pfix: "break;"},
            "var": {pfix: g, sfix: ";"},
            macro: {pfix: u},
            "/macro": {pfix: 'return __OUT.join("");};'},
            trim: {
                pfix: function () {
                    a = !0
                }
            },
            "/trim": {
                pfix: function () {
                    a = null
                }
            },
            inline: {pfix: h, pmin: 1, sfix: "));}"}
        },
        ext: {
            seed: function (e) {
                return (e || "") + "" + n
            }, "default": function (e, t) {
                return e || t
            }
        }
    };
    var b = function () {
        var e = /\\([\{\}])/g;
        return function (t, n) {
            t = t.replace(e, "$1");
            var a = t.slice(1, -1).split(i), s = o.def[a[0]];
            if (s) {
                if (s.pmin && s.pmin >= a.length) throw"Statement needs more parameters:" + t;
                n.push(s.pfix && "string" != typeof s.pfix ? s.pfix(a) : s.pfix || "");
                if (s.sfix) {
                    if (a.length <= 1) {
                        if (s.pdft) n.push(s.pdft)
                    } else for (var r = 1, c = a.length; r < c; r++) {
                        if (r > 1) n.push(" ");
                        n.push(a[r])
                    }
                    n.push(s.sfix)
                }
            } else v(t, n)
        }
    }();
    var $ = function (e, t) {
        if (e && e.length) if (1 != e.length) {
            var i = e.pop().split(":");
            t.push("__MDF['" + i.shift() + "'](");
            $(e, t);
            if (i.length > 0) {
                var n = i.join(":");
                r(n);
                t.push("," + n)
            }
            t.push(")")
        } else {
            var a = e.pop();
            r(a);
            t.push("" == a ? '""' : a)
        }
    };
    var v = function (e, t) {
        if (e) {
            var i = e.split("\n");
            if (i && i.length) for (var n = 0, o = i.length, s; n < o; n++) {
                s = i[n];
                if (a) {
                    s = s.trim();
                    if (!s) continue
                }
                C(s, t);
                if (a && n < o - 1) t.push("__OUT.push('\\n');")
            }
        }
    };
    var C = function () {
        var e = /\|\|/g, t = /#@@#/g;
        return function (i, n) {
            var a = "}", o = -1, s = i.length, r, c, d, _, l;
            for (; o + a.length < s;) {
                r = "${";
                c = "}";
                d = i.indexOf(r, o + a.length);
                if (d < 0) break;
                if ("%" == i.charAt(d + 2)) {
                    r = "${%";
                    c = "%}"
                }
                _ = i.indexOf(c, d + r.length);
                if (_ < 0) break;
                I(i.substring(o + a.length, d), n);
                l = i.substring(d + r.length, _).replace(e, "#@@#").split("|");
                for (var u = 0, h = l.length; u < h; l[u] = l[u].replace(t, "||"), u++) ;
                n.push("__OUT.push(");
                $(l, n);
                n.push(");");
                a = c;
                o = _
            }
            I(i.substring(o + a.length), n)
        }
    }();
    var I = function () {
        var e = {r: /\n|\\|\'/g, "\n": "\\n", "\\": "\\\\", "'": "\\'"};
        var t = function (t) {
            return (t || "").replace(e.r, function (t) {
                return e[t] || t
            })
        };
        return function (e, i) {
            if (e) i.push("__OUT.push('" + t(e) + "');")
        }
    }();
    var y = function () {
        var e = /\t/g, t = /\n/g, n = /\r\n?/g;
        var a = function (e, t) {
            var i = e.indexOf("}", t + 1);
            for (; "\\" == e.charAt(i - 1);) i = e.indexOf("}", i + 1);
            return i
        };
        var r = function () {
            var e = [], t = arguments[0];
            for (var i in t) {
                i = (i || "").trim();
                if (i) e.push(i + "=$v('" + i + "')"); else ;
            }
            return e.length > 0 ? "var " + e.join(",") + ";" : ""
        };
        return function (c) {
            s = {};
            c = c.replace(n, "\n").replace(e, "    ");
            var d = ["if(!__CTX) return '';", ""];
            d.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
            d.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
            d.push("__OUT=[];");
            var _ = -1, l = c.length;
            var u, h, f, p, m, g, $, C;
            for (; _ + 1 < l;) {
                u = _;
                u = c.indexOf("{", u + 1);
                for (; u >= 0;) {
                    h = a(c, u);
                    f = c.substring(u, h);
                    p = f.match(o.blk);
                    if (p) {
                        m = p[1].length + 1;
                        g = c.indexOf("}", u + m);
                        if (g >= 0) {
                            $ = g - u - m <= 0 ? "{/" + p[1] + "}" : f.substr(m + 1);
                            m = c.indexOf($, g + 1);
                            if (m >= 0) {
                                v(c.substring(_ + 1, u), d);
                                C = c.substring(g + 1, m);
                                switch (p[1]) {
                                    case"cdata":
                                        I(C, d);
                                        break;
                                    case"minify":
                                        I(C.replace(t, " ").replace(i, " "), d);
                                        break;
                                    case"eval":
                                        if (C) d.push("__OUT.push((function(){" + C + "})());")
                                }
                                u = _ = m + $.length - 1
                            }
                        }
                    } else if ("$" != c.charAt(u - 1) && "\\" != c.charAt(u - 1) && 0 == f.substr("/" == f.charAt(1) ? 2 : 1).search(o.tag)) break;
                    u = c.indexOf("{", u + 1)
                }
                if (u < 0) break;
                h = a(c, u);
                if (h < 0) break;
                v(c.substring(_ + 1, u), d);
                b(c.substring(u, h + 1), d);
                _ = h
            }
            v(c.substring(_ + 1), d);
            d.push(';return __OUT.join("");');
            d[1] = r(s);
            s = null;
            return new Function("__CTX", "__MDF", d.join(""))
        }
    }();
    TrimPath.seed = function () {
        return n
    };
    TrimPath.merge = function () {
        var t = {};
        TrimPath.dump = function () {
            return {func: t, text: e}
        };
        return function (i, n, a) {
            try {
                n = n || {};
                if (!t[i] && !e[i]) return "";
                if (!t[i]) {
                    t[i] = y(e[i]);
                    delete e[i]
                }
                if (a) for (var s in o.ext) if (!a[s]) a[s] = o.ext[s];
                return t[i](n, a || o.ext)
            } catch (r) {
                return r.message || ""
            }
        }
    }();
    TrimPath.parse = function () {
        var t = +new Date;
        return function (i, n) {
            if (!i) return "";
            n = n || "ck-" + t++;
            if (null != e[n]) {
                console.warn("jst template overwrited with key " + n);
                console.debug("old template content: " + e[n].replace(/\n/g, " "));
                console.debug("new template content: " + i.replace(/\n/g, " "))
            }
            e[n] = i;
            return n
        }
    }()
}();
I$("7158a64567936a9fabafeab790b6583c", function (e, t, i, n, a, o, s, r, c) {
    var d = {};
    o.ud = TrimPath.seed;
    o.RJ = function () {
        var e = function (e) {
            return !o.vd ? "" : o.vd(e)
        };
        return function (i, n, a) {
            n = n || {};
            n.inline = e;
            a = t.KJ({}, d, a);
            a.rand = t.IJ;
            a.format = t.sJ;
            a.escape = t.qJ;
            a.inline = e;
            return TrimPath.merge(i, n, a)
        }
    }();
    o.wd = function (e, t) {
        if (!e) return "";
        var n, a = i.RJ(e);
        if (a) {
            n = a.id;
            e = a.value || a.innerText;
            if (!t) i.Ec(a)
        }
        return TrimPath.parse(e, n)
    };
    o.xd = function (e, t) {
        return TrimPath.parse(e, t)
    };
    o.yd = function (e, t, n, a) {
        e = i.RJ(e);
        if (e) e.innerHTML = o.RJ(t, n, a)
    };
    o.hK = function (e) {
        t.KJ(d, e)
    };
    n.KJ({yd: o.yd});
    if (!0) {
        var _ = e.P("nej.e");
        _.zd = o.wd;
        _.Ad = o.RJ;
        _.Bd = o.ud;
        _.Cd = o.yd;
        _.Dd = o.hK
    }
    return o
}, "38fcb21d4f4bc66eeed3795a8cc8504b", "7473c7d0556819b21bec58b99f475b04", "a5433a940b3ce4d5d7c2ae8a4f7ff1c9", "22b361d7e89ffe2b2f3ec497959c3e3d", "1790d9bc741b4308f5ed08f6d00bc00e");
I$("5c3b96a99f4affd48bfbcdc2f37ab7fc", function (e, t, i, n, a, o) {
    i.eK = function () {
        var e = function () {
            return "[object Function]" !== n.toString.call(arguments[0])
        };
        var i = function (e, i) {
            for (; i;) {
                var n = i.prototype, a = t.TI(n, function (t) {
                    return e === t
                });
                if (null != a) return {name: a, klass: i};
                i = i.fK
            }
        };
        return function () {
            var n = function () {
                return this.gK.apply(this, arguments)
            };
            n.prototype.gK = a;
            n.hK = function (n, a) {
                if (!e(n)) {
                    var o = this;
                    if (a !== !1) t.TI(n, function (t, i) {
                        if (!e(t)) o[i] = t
                    });
                    this.fK = n;
                    var s = function () {
                    };
                    s.prototype = n.prototype;
                    this.prototype = new s;
                    this.prototype.constructor = this;
                    var r = [], c = {};
                    var d = function (e, t) {
                        var n = i(e, t);
                        if (n) {
                            if (r[r.length - 1] != n.name) r.push(n.name);
                            c[n.name] = n.klass.fK;
                            return n.name
                        }
                    };
                    this.prototype.iK = function () {
                        var e = r[r.length - 1], t = arguments.callee.caller;
                        if (!e) e = d(t, this.constructor); else {
                            var i = c[e].prototype;
                            if (!i.hasOwnProperty(e) || t != i[e]) e = d(t, this.constructor); else c[e] = c[e].fK
                        }
                        var n = c[e].prototype[e].apply(this, arguments);
                        if (e == r[r.length - 1]) {
                            r.pop();
                            delete c[e]
                        }
                        return n
                    };
                    if (!0) {
                        var _ = this.prototype;
                        _.jK = _.iK;
                        _.kK = _.iK;
                        _.lK = _.iK;
                        _.mK = _.iK;
                        _.nK = _.iK;
                        _.oK = _.iK;
                        _.pK = _.iK;
                        _.qK = _.iK;
                        this.rK = n.prototype
                    }
                    return this.prototype
                }
            };
            return n
        }
    }();
    if (!0) {
        e.C = i.eK;
        e.copy(this.NEJ, e)
    }
    return i
}, "38fcb21d4f4bc66eeed3795a8cc8504b", "90ae137c0a52422436f94c15bed44300");
I$("ef610943f997eae84e208bd1668f8379", function (e, t, i, n, a, o, s, r) {
    var c;
    a.Ed = t.eK();
    c = a.Ed.prototype;
    a.Ed.Fd = function (e) {
        e = e || {};
        var t = !!this.Gd && this.Gd.shift();
        if (!t) {
            t = new this(e);
            this.Hd = (this.Hd || 0) + 1
        }
        t.Id(e);
        return t
    };
    a.Ed.Jd = function () {
        var e = function (e, t, i) {
            e.Jd();
            i.splice(t, 1)
        };
        return function (t) {
            if (!t) return null;
            if (!n.gJ(t)) {
                if (!(t instanceof this)) {
                    var i = t.constructor;
                    if (i.Jd) i.Jd(t);
                    return null
                }
                if (t == this.Kd) delete this.Kd;
                if (t == this.Ld) delete this.Ld;
                t.Md();
                if (!this.Gd) this.Gd = [];
                if (n.kJ(this.Gd, t) < 0) this.Gd.push(t);
                return null
            }
            n.nJ(t, e, this)
        }
    }();
    a.Ed.Nd = function (e) {
        if (!this.Kd) this.Kd = this.Fd(e);
        return this.Kd
    };
    a.Ed.Od = function (e, t) {
        if (t && this.Ld) {
            this.Ld.Jd();
            delete this.Ld
        }
        if (!this.Ld) this.Ld = this.Fd(e); else this.Ld.Id(e);
        return this.Ld
    };
    c.gK = function () {
        this.Pd = {};
        this.Qd = {};
        this.id = n.IJ()
    };
    c.Id = function (e) {
        this.Rd(e)
    };
    c.Md = function () {
        this.Dc();
        this.Sd()
    };
    c.Td = function () {
        var e = function (e) {
            if (e && !(e.length < 3)) {
                this.Qd["de-" + n.IJ()] = e;
                i.Cc.apply(i, e)
            }
        };
        return function (t) {
            n.oJ(t, e, this)
        }
    }();
    c.Sd = function () {
        var e = function (e, t, n) {
            delete n[t];
            i.jd.apply(i, e)
        };
        return function () {
            n.jJ(this.Qd, e)
        }
    }();
    c.Ud = function (e) {
        e = e || s;
        n.jJ(this, function (t, i, n) {
            if (t && t.Jd && !e(t)) {
                delete n[i];
                t.Jd()
            }
        })
    };
    c.Jd = function () {
        this.constructor.Jd(this)
    };
    c.Vd = function (e) {
        var e = (e || "").toLowerCase(), t = this.Pd[e];
        return !!t && t !== s
    };
    c.jd = function (e, t) {
        var e = (e || "").toLowerCase(), i = this.Pd[e];
        if (n.gJ(i)) {
            n.nJ(i, function (e, i, n) {
                if (e == t) n.splice(i, 1)
            });
            if (!i.length) delete this.Pd[e]
        } else if (i == t) delete this.Pd[e]
    };
    c.Wd = function (e, t) {
        if (e && n.bJ(t)) this.Pd[e.toLowerCase()] = t
    };
    c.Rd = function () {
        var e = function (e, t) {
            this.Wd(t, e)
        };
        return function (t) {
            n.jJ(t, e, this)
        }
    }();
    c.Dc = function () {
        var e = function (e, t) {
            this.Dc(t)
        };
        return function (t) {
            var t = (t || "").toLowerCase();
            if (t) delete this.Pd[t]; else n.jJ(this.Pd, e, this)
        }
    }();
    c.Cc = function (e, t) {
        if (e && n.bJ(t)) {
            e = e.toLowerCase();
            var i = this.Pd[e];
            if (i) {
                if (!n.gJ(i)) this.Pd[e] = [i];
                this.Pd[e].push(t)
            } else this.Pd[e] = t
        }
    };
    c.kd = function (e) {
        var e = (e || "").toLowerCase(), t = this.Pd[e];
        if (t) {
            var i = r.slice.call(arguments, 1);
            if (n.gJ(t)) n.oJ(t, function (e) {
                if (!1) e.apply(this, i); else try {
                    e.apply(this, i)
                } catch (t) {
                    console.error(t.message);
                    console.error(t.stack)
                }
            }, this); else t.apply(this, i)
        }
    };
    if (!0) {
        a.Xd = a.Ed;
        e.copy(e.P("nej.ut"), a)
    }
    return a
}, "38fcb21d4f4bc66eeed3795a8cc8504b", "5c3b96a99f4affd48bfbcdc2f37ab7fc", "c2319fe81ae54f0df799a059ee6679e7", "7473c7d0556819b21bec58b99f475b04");
I$("9773b0950cb0e9671f7335940a0ac586", function (e, t, i, n, a, o, s, r, c, d) {
    var _;
    s.Yd = t.eK();
    _ = s.Yd.hK(o.Ed);
    _.gK = function () {
        this.Zd = {};
        this.iK()
    };
    _.Id = function (e) {
        this.iK(e);
        this.$d = i.RJ(e.element) || window;
        this.sK(e.event);
        this.tK();
        this.kd("oninit")
    };
    _.Md = function () {
        var e = function (e, t, i) {
            if (!a.gJ(e)) a.EJ(this.$d, t);
            delete i[t]
        };
        return function () {
            this.iK();
            a.jJ(this.Zd, e, this);
            delete this.$d
        }
    }();
    _.uK = function (e, t) {
        e = i.RJ(e);
        return !(e !== this.$d || t && !this.Zd["on" + t])
    };
    _.sK = function (e) {
        if (!a.cJ(e)) {
            if (a.gJ(e)) a.oJ(e, this.sK, this)
        } else {
            var t = "on" + e;
            if (!this.Zd[t]) this.Zd[t] = this.vK.RI(this, e);
            this.wK(e)
        }
    };
    _.wK = function (e) {
        var t = "on" + e, i = this.$d[t], n = this.Zd[t];
        if (i != n) {
            this.xK(e);
            if (i && i != c) this.yK(e, i);
            this.$d[t] = n
        }
    };
    _.yK = function (e, t, i) {
        var n = this.Zd[e];
        if (!n) {
            n = [];
            this.Zd[e] = n
        }
        if (a.bJ(t)) !i ? n.push(t) : n.unshift(t)
    };
    _.xK = function (e, t) {
        var i = this.Zd[e];
        if (i && i.length) if (t) a.nJ(i, function (e, i, n) {
            if (t === e) {
                n.splice(i, 1);
                return !0
            }
        }); else delete this.Zd[e]
    };
    _.vK = function (e, t) {
        t = t || {noargs: !0};
        if (t == r) t = {};
        t.type = e;
        this.kd("ondispatch", t);
        if (!t.stopped) a.oJ(this.Zd[e], function (e) {
            if (!1) e(t); else try {
                e(t)
            } catch (i) {
                console.error(i.message);
                console.error(i.stack)
            }
        })
    };
    _.tK = function () {
        var t = function (e) {
            var t = e.args, i = t[1].toLowerCase();
            if (this.uK(t[0], i)) {
                e.stopped = !0;
                this.wK(i);
                this.yK(i, t[2], t[3]);
                this.kd("oneventadd", {type: i, listener: t[2]})
            }
        };
        var i = function (e) {
            var t = e.args, i = t[1].toLowerCase();
            if (this.uK(t[0], i)) {
                e.stopped = !0;
                this.xK(i, t[2])
            }
        };
        var o = function (e) {
            var t = e.args, i = (t[1] || "").toLowerCase();
            if (this.uK(t[0])) {
                if (i) {
                    this.xK(i);
                    return
                }
                a.jJ(this.Zd, function (e, t) {
                    if (a.gJ(e)) this.xK(t)
                }, this)
            }
        };
        var s = function (e) {
            var t = e.args, i = t[1].toLowerCase();
            if (this.uK(t[0], i)) {
                e.stopped = !0;
                t[0]["on" + i].apply(t[0], t.slice(2))
            }
        };
        return function () {
            if (!this.zK) {
                this.zK = !0;
                n.Cc = n.Cc.QI(t.RI(this));
                n.jd = n.jd.QI(i.RI(this));
                n.Dc = n.Dc.QI(o.RI(this));
                n.kd = n.kd.QI(s.RI(this));
                if (!0) e.copy(e.P("nej.v"), n)
            }
        }
    }();
    if (!0) e.copy(e.P("nej.ut"), s);
    return s
}, "38fcb21d4f4bc66eeed3795a8cc8504b", "5c3b96a99f4affd48bfbcdc2f37ab7fc", "a5433a940b3ce4d5d7c2ae8a4f7ff1c9", "c2319fe81ae54f0df799a059ee6679e7", "7473c7d0556819b21bec58b99f475b04", "ef610943f997eae84e208bd1668f8379");
I$("d8e847b21f9f3bf97a5ed25beb9de5f1", function (e, t, i, n, a, o, s, r, c, d) {
    var _, l = 6e4;
    s.AK = t.eK();
    _ = s.AK.hK(o.Ed);
    _.gK = function () {
        this.iK();
        this.BK = {onerror: this.CK.RI(this), onload: this.DK.RI(this)};
        if (!this.constructor.Zd) this.constructor.Zd = {loaded: {}}
    };
    _.Id = function (e) {
        this.iK(e);
        this.EK = e.version;
        this.FK = e.timeout;
        this.BK.version = this.EK;
        this.BK.timeout = this.FK
    };
    _.GK = function (e) {
        delete this.constructor.Zd[e]
    };
    _.HK = function (e) {
        return this.constructor.Zd[e]
    };
    _.IK = function (e, t) {
        this.constructor.Zd[e] = t
    };
    _.JK = c;
    _.KK = function (e) {
        n.Dc(e)
    };
    _.LK = function (e) {
        e.src = this.MK;
        document.head.appendChild(e)
    };
    _.NK = function () {
        var e = this.HK(this.MK);
        if (e) {
            window.clearTimeout(e.timer);
            this.KK(e.request);
            delete e.bind;
            delete e.timer;
            delete e.request;
            this.GK(this.MK);
            this.HK("loaded")[this.MK] = !0
        }
    };
    _.OK = function (e) {
        var t = this.HK(this.MK);
        if (t) {
            var i = t.bind;
            this.NK();
            if (i && i.length > 0) {
                var n;
                for (; i.length;) {
                    n = i.shift();
                    try {
                        n.kd(e, arguments[1])
                    } catch (a) {
                        if (!1) throw a;
                        console.error(a.message);
                        console.error(a.stack)
                    }
                    n.Jd()
                }
            }
        }
    };
    _.PK = function (e) {
        this.OK("onerror", e)
    };
    _.QK = function () {
        this.OK("onload")
    };
    _.RK = function (e) {
        this.constructor.Fd(this.BK).SK(e)
    };
    _.TK = function (e) {
        var t = this.HK(this.UK);
        if (t) {
            if (e) t.error++;
            t.loaded++;
            if (!(t.loaded < t.total)) {
                this.GK(this.UK);
                this.kd(t.error > 0 ? "onerror" : "onload")
            }
        }
    };
    _.CK = function (e) {
        this.TK(!0)
    };
    _.DK = function () {
        this.TK()
    };
    _.SK = function (e) {
        e = a.vJ(e);
        if (e) {
            this.MK = e;
            if (this.EK) this.MK += (this.MK.indexOf("?") < 0 ? "?" : "&") + this.EK;
            if (!this.HK("loaded")[this.MK]) {
                var t = this.HK(this.MK), o;
                if (t) {
                    t.bind.unshift(this);
                    t.timer = window.clearTimeout(t.timer)
                } else {
                    o = this.JK();
                    t = {request: o, bind: [this]};
                    this.IK(this.MK, t);
                    n.Cc(o, "load", this.QK.RI(this));
                    n.Cc(o, "error", this.PK.RI(this, {code: i.xb, message: "无法加载指定资源文件[" + this.MK + "]！"}))
                }
                if (0 != this.FK) t.timer = window.setTimeout(this.PK.RI(this, {
                    code: i.WJ,
                    message: "指定资源文件[" + this.MK + "]载入超时！"
                }), this.FK || l);
                if (o) this.LK(o);
                this.kd("onloading")
            } else {
                try {
                    this.kd("onload")
                } catch (s) {
                    if (!1) throw s;
                    console.error(s.message);
                    console.error(s.stack)
                }
                this.Jd()
            }
        } else this.kd("onerror", {code: i.UJ, message: "请指定要载入的资源地址！"})
    };
    _.VK = function (e) {
        if (e && e.length) {
            this.UK = a.IJ();
            var t = {error: 0, loaded: 0, total: e.length};
            this.IK(this.UK, t);
            a.oJ(e, function (e, i) {
                if (e) this.RK(e); else t.total--
            }, this);
            this.kd("onloading")
        } else this.kd("onerror", {code: i.UJ, message: "请指定要载入的资源队列！"})
    };
    return s
}, "38fcb21d4f4bc66eeed3795a8cc8504b", "5c3b96a99f4affd48bfbcdc2f37ab7fc", "1b005a7aa950f4fc021ca0593fd5e0f9", "c2319fe81ae54f0df799a059ee6679e7", "7473c7d0556819b21bec58b99f475b04", "ef610943f997eae84e208bd1668f8379");
I$("f16c7f92e4debb611ed15b0b2e34a3f6", function (e, t, i, n, a, o) {
    i.WK = function () {
        var e = new Date, i = +e, a = 864e5;
        var o = function (e) {
            var t = document.cookie, i = "\\b" + e + "=", n = t.search(i);
            if (n < 0) return "";
            n += i.length - 2;
            var a = t.indexOf(";", n);
            if (a < 0) a = t.length;
            return t.substring(n, a) || ""
        };
        return function (s, r) {
            if (void 0 === r) return o(s);
            if (t.cJ(r)) {
                if (r) {
                    document.cookie = s + "=" + r + ";";
                    return r
                }
                r = {expires: -100}
            }
            r = r || n;
            var c = s + "=" + (r.value || "") + ";";
            delete r.value;
            if (void 0 !== r.expires) {
                e.setTime(i + r.expires * a);
                r.expires = e.toGMTString()
            }
            c += t.yJ(r, ";");
            document.cookie = c
        }
    }();
    if (!0) e.copy(e.P("nej.j"), i);
    return i
}, "38fcb21d4f4bc66eeed3795a8cc8504b", "7473c7d0556819b21bec58b99f475b04");
!function () {
    var e = !0, t = null;
    !function (i) {
        function n(i) {
            if ("bug-string-char-index" == i) return "a" != "a"[0];
            var n, o = "json" == i;
            if (o || "json-stringify" == i || "json-parse" == i) {
                if ("json-stringify" == i || o) {
                    var s = d.stringify, c = "function" == typeof s && _;
                    if (c) {
                        (n = function () {
                            return 1
                        }).toJSON = n;
                        try {
                            c = "0" === s(0) && "0" === s(new Number) && '""' == s(new String) && s(a) === r && s(r) === r && s() === r && "1" === s(n) && "[1]" == s([n]) && "[null]" == s([r]) && "null" == s(t) && "[null,null,null]" == s([r, a, t]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == s({a: [n, e, !1, t, "\0\b\n\f\r\t"]}) && "1" === s(t, n) && "[\n 1,\n 2\n]" == s([1, 2], t, 1) && '"-271821-04-20T00:00:00.000Z"' == s(new Date((-864e13))) && '"+275760-09-13T00:00:00.000Z"' == s(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == s(new Date((-621987552e5))) && '"1969-12-31T23:59:59.999Z"' == s(new Date((-1)))
                        } catch (l) {
                            c = !1
                        }
                    }
                    if (!o) return c
                }
                if ("json-parse" == i || o) {
                    i = d.parse;
                    if ("function" == typeof i) try {
                        if (0 === i("0") && !i(!1)) {
                            n = i('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                            var u = 5 == n.a.length && 1 === n.a[0];
                            if (u) {
                                try {
                                    u = !i('"\t"')
                                } catch (h) {
                                }
                                if (u) try {
                                    u = 1 !== i("01")
                                } catch (f) {
                                }
                            }
                        }
                    } catch (p) {
                        u = !1
                    }
                    if (!o) return u
                }
                return c && u
            }
        }

        var a = {}.toString, o, s, r, c = "function" == typeof define && define.amd,
            d = "object" == typeof exports && exports;
        d || c ? "object" == typeof JSON && JSON ? d ? (d.stringify = JSON.stringify, d.parse = JSON.parse) : d = JSON : c && (d = i.JSON = {}) : d = i.JSON || (i.JSON = {});
        var _ = new Date((-0xc782b5b800cec));
        try {
            _ = -109252 == _.getUTCFullYear() && 0 === _.getUTCMonth() && 1 === _.getUTCDate() && 10 == _.getUTCHours() && 37 == _.getUTCMinutes() && 6 == _.getUTCSeconds() && 708 == _.getUTCMilliseconds()
        } catch (l) {
        }
        if (!n("json")) {
            var u = n("bug-string-char-index");
            if (!_) var h = Math.floor, f = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                p = function (e, t) {
                    return f[t] + 365 * (e - 1970) + h((e - 1969 + (t = +(t > 1))) / 4) - h((e - 1901 + t) / 100) + h((e - 1601 + t) / 400)
                };
            if (!(o = {}.hasOwnProperty)) o = function (e) {
                var i = {}, n;
                if ((i.__proto__ = t, i.__proto__ = {toString: 1}, i).toString != a) o = function (e) {
                    var i = this.__proto__, e = e in (this.__proto__ = t, this);
                    this.__proto__ = i;
                    return e
                }; else {
                    n = i.constructor;
                    o = function (e) {
                        var t = (this.constructor || n).prototype;
                        return e in this && !(e in t && this[e] === t[e])
                    }
                }
                i = t;
                return o.call(this, e)
            };
            var m = {"boolean": 1, number: 1, string: 1, undefined: 1};
            s = function (e, i) {
                var n = 0, s, r, c;
                (s = function () {
                    this.valueOf = 0
                }).prototype.valueOf = 0;
                r = new s;
                for (c in r) o.call(r, c) && n++;
                s = r = t;
                if (n) n = 2 == n ? function (e, t) {
                    var i = {}, n = "[object Function]" == a.call(e), s;
                    for (s in e) !(n && "prototype" == s) && !o.call(i, s) && (i[s] = 1) && o.call(e, s) && t(s)
                } : function (e, t) {
                    var i = "[object Function]" == a.call(e), n, s;
                    for (n in e) !(i && "prototype" == n) && o.call(e, n) && !(s = "constructor" === n) && t(n);
                    (s || o.call(e, n = "constructor")) && t(n)
                }; else {
                    r = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                    n = function (e, t) {
                        var i = "[object Function]" == a.call(e), n, s;
                        if (s = !i) if (s = "function" != typeof e.constructor) {
                            s = typeof e.hasOwnProperty;
                            s = "object" == s ? !!e.hasOwnProperty : !m[s]
                        }
                        s = s ? e.hasOwnProperty : o;
                        for (n in e) !(i && "prototype" == n) && s.call(e, n) && t(n);
                        for (i = r.length; n = r[--i]; s.call(e, n) && t(n)) ;
                    }
                }
                n(e, i)
            };
            if (!n("json-stringify")) {
                var g = {92: "\\\\", 34: '\\"', 8: "\\b", 12: "\\f", 10: "\\n", 13: "\\r", 9: "\\t"},
                    b = function (e, t) {
                        return ("000000" + (t || 0)).slice(-e)
                    }, $ = function (e) {
                        var t = '"', i = 0, n = e.length, a = n > 10 && u, o;
                        for (a && (o = e.split("")); i < n; i++) {
                            var s = e.charCodeAt(i);
                            switch (s) {
                                case 8:
                                case 9:
                                case 10:
                                case 12:
                                case 13:
                                case 34:
                                case 92:
                                    t += g[s];
                                    break;
                                default:
                                    if (s < 32) {
                                        t += "\\u00" + b(2, s.toString(16));
                                        break
                                    }
                                    t += a ? o[i] : u ? e.charAt(i) : e[i]
                            }
                        }
                        return t + '"'
                    }, v = function (i, n, c, d, _, l, u) {
                        var f = n[i], m, g, C, I, y, x, E, A, N;
                        try {
                            f = n[i]
                        } catch (T) {
                        }
                        if ("object" == typeof f && f) {
                            m = a.call(f);
                            if ("[object Date]" == m && !o.call(f, "toJSON")) if (f > -1 / 0 && f < 1 / 0) {
                                if (p) {
                                    C = h(f / 864e5);
                                    for (m = h(C / 365.2425) + 1970 - 1; p(m + 1, 0) <= C; m++) ;
                                    for (g = h((C - p(m, 0)) / 30.42); p(m, g + 1) <= C; g++) ;
                                    C = 1 + C - p(m, g);
                                    I = (f % 864e5 + 864e5) % 864e5;
                                    y = h(I / 36e5) % 24;
                                    x = h(I / 6e4) % 60;
                                    E = h(I / 1e3) % 60;
                                    I %= 1e3
                                } else {
                                    m = f.getUTCFullYear();
                                    g = f.getUTCMonth();
                                    C = f.getUTCDate();
                                    y = f.getUTCHours();
                                    x = f.getUTCMinutes();
                                    E = f.getUTCSeconds();
                                    I = f.getUTCMilliseconds()
                                }
                                f = (m <= 0 || m >= 1e4 ? (m < 0 ? "-" : "+") + b(6, m < 0 ? -m : m) : b(4, m)) + "-" + b(2, g + 1) + "-" + b(2, C) + "T" + b(2, y) + ":" + b(2, x) + ":" + b(2, E) + "." + b(3, I) + "Z"
                            } else f = t; else if ("function" == typeof f.toJSON && ("[object Number]" != m && "[object String]" != m && "[object Array]" != m || o.call(f, "toJSON"))) f = f.toJSON(i)
                        }
                        c && (f = c.call(n, i, f));
                        if (f === t) return "null";
                        m = a.call(f);
                        if ("[object Boolean]" == m) return "" + f;
                        if ("[object Number]" == m) return f > -1 / 0 && f < 1 / 0 ? "" + f : "null";
                        if ("[object String]" == m) return $("" + f);
                        if ("object" == typeof f) {
                            for (i = u.length; i--;) if (u[i] === f) throw TypeError();
                            u.push(f);
                            A = [];
                            n = l;
                            l += _;
                            if ("[object Array]" == m) {
                                g = 0;
                                for (i = f.length; g < i; N || (N = e), g++) {
                                    m = v(g, f, c, d, _, l, u);
                                    A.push(m === r ? "null" : m)
                                }
                                i = N ? _ ? "[\n" + l + A.join(",\n" + l) + "\n" + n + "]" : "[" + A.join(",") + "]" : "[]"
                            } else {
                                s(d || f, function (t) {
                                    var i = v(t, f, c, d, _, l, u);
                                    i !== r && A.push($(t) + ":" + (_ ? " " : "") + i);
                                    N || (N = e)
                                });
                                i = N ? _ ? "{\n" + l + A.join(",\n" + l) + "\n" + n + "}" : "{" + A.join(",") + "}" : "{}"
                            }
                            u.pop();
                            return i
                        }
                    };
                d.stringify = function (e, t, i) {
                    var n, o, s;
                    if ("function" == typeof t || "object" == typeof t && t) if ("[object Function]" == a.call(t)) o = t; else if ("[object Array]" == a.call(t)) {
                        s = {};
                        for (var r = 0, c = t.length, d; r < c; d = t[r++], ("[object String]" == a.call(d) || "[object Number]" == a.call(d)) && (s[d] = 1)) ;
                    }
                    if (i) if ("[object Number]" == a.call(i)) {
                        if ((i -= i % 1) > 0) {
                            n = "";
                            for (i > 10 && (i = 10); n.length < i; n += " ") ;
                        }
                    } else "[object String]" == a.call(i) && (n = i.length <= 10 ? i : i.slice(0, 10));
                    return v("", (d = {}, d[""] = e, d), o, s, n, "", [])
                }
            }
            if (!n("json-parse")) {
                var C = String.fromCharCode,
                    I = {92: "\\", 34: '"', 47: "/", 98: "\b", 116: "\t", 110: "\n", 102: "\f", 114: "\r"}, y, x,
                    E = function () {
                        y = x = t;
                        throw SyntaxError()
                    }, A = function () {
                        for (var i = x, n = i.length, a, o, s, r, c; y < n;) {
                            c = i.charCodeAt(y);
                            switch (c) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    y++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    a = u ? i.charAt(y) : i[y];
                                    y++;
                                    return a;
                                case 34:
                                    a = "@";
                                    for (y++; y < n;) {
                                        c = i.charCodeAt(y);
                                        if (c < 32) E(); else if (92 == c) {
                                            c = i.charCodeAt(++y);
                                            switch (c) {
                                                case 92:
                                                case 34:
                                                case 47:
                                                case 98:
                                                case 116:
                                                case 110:
                                                case 102:
                                                case 114:
                                                    a += I[c];
                                                    y++;
                                                    break;
                                                case 117:
                                                    o = ++y;
                                                    for (s = y + 4; y < s; y++) {
                                                        c = i.charCodeAt(y);
                                                        c >= 48 && c <= 57 || c >= 97 && c <= 102 || c >= 65 && c <= 70 || E()
                                                    }
                                                    a += C("0x" + i.slice(o, y));
                                                    break;
                                                default:
                                                    E()
                                            }
                                        } else {
                                            if (34 == c) break;
                                            c = i.charCodeAt(y);
                                            for (o = y; c >= 32 && 92 != c && 34 != c;) c = i.charCodeAt(++y);
                                            a += i.slice(o, y)
                                        }
                                    }
                                    if (34 == i.charCodeAt(y)) {
                                        y++;
                                        return a
                                    }
                                    E();
                                default:
                                    o = y;
                                    if (45 == c) {
                                        r = e;
                                        c = i.charCodeAt(++y)
                                    }
                                    if (c >= 48 && c <= 57) {
                                        for (48 == c && (c = i.charCodeAt(y + 1), c >= 48 && c <= 57) && E(); y < n && (c = i.charCodeAt(y), c >= 48 && c <= 57); y++) ;
                                        if (46 == i.charCodeAt(y)) {
                                            for (s = ++y; s < n && (c = i.charCodeAt(s), c >= 48 && c <= 57); s++) ;
                                            s == y && E();
                                            y = s
                                        }
                                        c = i.charCodeAt(y);
                                        if (101 == c || 69 == c) {
                                            c = i.charCodeAt(++y);
                                            (43 == c || 45 == c) && y++;
                                            for (s = y; s < n && (c = i.charCodeAt(s), c >= 48 && c <= 57); s++) ;
                                            s == y && E();
                                            y = s
                                        }
                                        return +i.slice(o, y)
                                    }
                                    r && E();
                                    if ("true" == i.slice(y, y + 4)) {
                                        y += 4;
                                        return e
                                    }
                                    if ("false" == i.slice(y, y + 5)) {
                                        y += 5;
                                        return !1
                                    }
                                    if ("null" == i.slice(y, y + 4)) {
                                        y += 4;
                                        return t
                                    }
                                    E()
                            }
                        }
                        return "$"
                    }, N = function (t) {
                        var i, n;
                        "$" == t && E();
                        if ("string" == typeof t) {
                            if ("@" == (u ? t.charAt(0) : t[0])) return t.slice(1);
                            if ("[" == t) {
                                for (i = []; ; n || (n = e)) {
                                    t = A();
                                    if ("]" == t) break;
                                    if (n) if ("," == t) {
                                        t = A();
                                        "]" == t && E()
                                    } else E();
                                    "," == t && E();
                                    i.push(N(t))
                                }
                                return i
                            }
                            if ("{" == t) {
                                for (i = {}; ; n || (n = e)) {
                                    t = A();
                                    if ("}" == t) break;
                                    if (n) if ("," == t) {
                                        t = A();
                                        "}" == t && E()
                                    } else E();
                                    ("," == t || "string" != typeof t || "@" != (u ? t.charAt(0) : t[0]) || ":" != A()) && E();
                                    i[t.slice(1)] = N(A())
                                }
                                return i
                            }
                            E()
                        }
                        return t
                    }, T = function (e, t, i) {
                        i = w(e, t, i);
                        i === r ? delete e[t] : e[t] = i
                    }, w = function (e, t, i) {
                        var n = e[t], o;
                        if ("object" == typeof n && n) if ("[object Array]" == a.call(n)) for (o = n.length; o--;) T(n, o, i); else s(n, function (e) {
                            T(n, e, i)
                        });
                        return i.call(e, t, n)
                    };
                d.parse = function (e, i) {
                    var n, o;
                    y = 0;
                    x = "" + e;
                    n = N(A());
                    "$" != A() && E();
                    y = x = t;
                    return i && "[object Function]" == a.call(i) ? w((o = {}, o[""] = n, o), "", i) : n
                }
            }
        }
        c && define(function () {
            return d
        })
    }(this);
    return JSON
}();
I$("053b8bad405d57a6c6b456995f5e1ffe", function (XK, _p, _o, _f, _r) {
    if ("trident" === XK.$I.engine && "2.0" == XK.$I.release) I$("20cd28e17102c7537cb180e0d32341a6", function () {
        JSON.parse = function () {
            var _isSafeJSON = function (e) {
                return !/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(e.replace(/"(\\.|[^"\\])*"/g, ""))
            };
            return JSON.parse.QI(function (YK) {
                var ZK = YK.args[0] || "";
                if (ZK.length >= 5e5) {
                    YK.stopped = !0;
                    YK.value = eval("(" + ZK + ")")
                }
            })
        }()
    });
    return JSON
}, "f3ab479b168ebebfb3a24e1000f7236e");
I$("92a3385ab93bcc9e9d9fcf6f5289e1c4", function () {
    return JSON
}, "053b8bad405d57a6c6b456995f5e1ffe");
I$("22dde2e7c14a7b83d77c73e88c7008df", function (e, t, i, n, a, o, s, r, c, d, _, l) {
    var u;
    c.$K = e.eK();
    u = c.$K.hK(o.Ed);
    u.Id = function (e) {
        this.iK(e);
        this._K = t.LJ({url: "", sync: !1, cookie: !1, type: "text", method: "GET", timeout: 6e4}, e);
        var i = n.RJ("csrf");
        if (i.cookie && i.param) {
            var o = encodeURIComponent(i.param) + "=" + encodeURIComponent(s.WK(i.cookie) || ""),
                r = this._K.url.indexOf("?") < 0 ? "?" : "&";
            this._K.url += r + o
        }
        this.aL = e.headers || {};
        var c = this.aL[a.zb];
        if (null == c) this.aL[a.zb] = a.Cb
    };
    u.Md = function () {
        this.iK();
        delete this.bL;
        delete this._K;
        delete this.aL
    };
    u.cL = function (e) {
        var t = e.status;
        if (t != -1) if (0 == ("" + t).indexOf("2")) this.kd("onload", i.Qc(e.result, this._K.type)); else this.kd("onerror", {
            data: t,
            result: e.result,
            code: a.xb,
            message: "服务器返回异常状态[" + t + "]!"
        }); else this.kd("onerror", {code: a.WJ, message: "请求[" + this._K.url + "]超时！"})
    };
    u.dL = _;
    u.eL = _;
    u.fL = function () {
        this.kd("onerror", {code: a.yb, message: "客户端终止请求"})
    };
    u.gL = function (e) {
        var t = this._K.url;
        if (t) try {
            this._K.data = null == e ? null : e;
            var i = {request: this._K, headers: this.aL};
            try {
                this.kd("onbeforerequest", i)
            } catch (n) {
                console.error(n.message);
                console.error(n.stack)
            }
            this.dL(i)
        } catch (o) {
            this.kd("onerror", {code: a.xb, message: "请求[" + t + "]失败:" + o.message + "！"})
        } else this.kd("onerror", {code: a.UJ, message: "没有输入请求地址！"})
    };
    u.hL = _;
    u.iL = function (e) {
        if (!t.gJ(e)) return this.eL(e) || "";
        var i = {};
        t.oJ(e, function (e) {
            i[e] = this.iL(e)
        }, this);
        return i
    };
    return c
}, "5c3b96a99f4affd48bfbcdc2f37ab7fc", "7473c7d0556819b21bec58b99f475b04", "a5433a940b3ce4d5d7c2ae8a4f7ff1c9", "2af23932d9465d8562094044caec1a71", "1b005a7aa950f4fc021ca0593fd5e0f9", "ef610943f997eae84e208bd1668f8379", "f16c7f92e4debb611ed15b0b2e34a3f6", "92a3385ab93bcc9e9d9fcf6f5289e1c4");
I$("2cdf1a08634b55c7837877ed48eeef3e", function (e, t, i, n) {
    e.jL = function () {
        return new XMLHttpRequest
    };
    e.kL = function () {
        return !0
    };
    return e
});
I$("89d2dd4800d268624c54caa822aec1b9", function (e, t, i, n, a, o, s) {
    if ("trident" === e.$I.engine && e.$I.release <= "5.0") I$("687cc9ef578a2022e50aef98307146c1", function () {
        t.kL = function () {
            return !1
        }
    });
    if ("trident" === e.$I.engine && e.$I.release <= "2.0") I$("b47718e879f1b033952d2e68e6953b71", function () {
        t.jL = function () {
            var e = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
            return function () {
                var t = null;
                i.lJ(e, function (e) {
                    try {
                        t = new ActiveXObject(e);
                        return !0
                    } catch (i) {
                    }
                });
                return t
            }
        }()
    });
    return t
}, "f3ab479b168ebebfb3a24e1000f7236e", "2cdf1a08634b55c7837877ed48eeef3e", "7473c7d0556819b21bec58b99f475b04");
I$("e358b07d5b841b6ba1efffff22d2b8c4", function (e, t, i, n, a, o, s, r, c) {
    var d;
    o.lL = i.eK();
    d = o.lL.hK(e.$K);
    d.Md = function () {
        this.iK();
        window.clearTimeout(this.mL);
        delete this.mL;
        try {
            this.nL.onreadystatechange = r;
            this.nL.abort()
        } catch (e) {
        }
        delete this.nL
    };
    d.dL = function () {
        var e = function (e, t) {
            this.nL.setRequestHeader(t, e)
        };
        var i = function (e) {
            var i = [];
            t.nJ(e.getElementsByTagName("input"), function (e) {
                if ("file" == e.type) if (e.name) {
                    if (e.files.length > 1) {
                        t.oJ(e.files, function (t) {
                            i.push({name: e.name, file: t})
                        });
                        e.parentNode.removeChild(e)
                    }
                } else e.parentNode.removeChild(e)
            });
            return i.length > 0 ? i : null
        };
        return function (o) {
            var s = o.request, r = o.headers;
            this.nL = a.jL();
            if (r[n.zb] === n.Bb) {
                delete r[n.zb];
                this.nL.upload.onprogress = this.oL.RI(this, 1);
                if ("FORM" === s.data.tagName) {
                    var c = i(s.data);
                    s.data = new FormData(s.data);
                    t.oJ(c, function (e) {
                        var i = e.file;
                        s.data.append(e.name || i.name || "file-" + t.IJ(), i)
                    })
                }
            }
            this.nL.onreadystatechange = this.oL.RI(this, 2);
            this.nL.onabort = this.fL.RI(this);
            if (0 !== s.timeout) this.mL = window.setTimeout(this.oL.RI(this, 3), s.timeout);
            this.nL.open(s.method, s.url, !s.sync);
            t.jJ(r, e, this);
            if (this._K.cookie && "withCredentials" in this.nL) this.nL.withCredentials = !0;
            if (!(r[n.zb] !== n.Cb || window.FormData && s.data instanceof window.FormData)) if (t.hJ(s.data)) s.data = t.yJ(s.data, "&", !0);
            this.nL.send(s.data)
        }
    }();
    d.oL = function (e) {
        switch (e) {
            case 1:
                this.kd("onuploading", arguments[1]);
                break;
            case 2:
                if (4 == this.nL.readyState) this.cL({status: this.nL.status, result: this.nL.responseText || ""});
                break;
            case 3:
                this.cL({status: -1})
        }
    };
    d.eL = function (e) {
        return !this.nL ? "" : this.nL.getResponseHeader(e)
    };
    d.hL = function () {
        if (!a.kL()) this.fL(); else {
            this.nL.onreadystatechange = r;
            this.nL.abort()
        }
    };
    return o
}, "22dde2e7c14a7b83d77c73e88c7008df", "7473c7d0556819b21bec58b99f475b04", "5c3b96a99f4affd48bfbcdc2f37ab7fc", "1b005a7aa950f4fc021ca0593fd5e0f9", "89d2dd4800d268624c54caa822aec1b9");
I$("d15c83ee182d6b2c8cdb6fbc7719ccc6", function (e, t, i, n, a) {
    var o = this, s = e.$I.prefix.pro, r = e.ZI("desktop") ? 80 : e.ZI("ios") ? 50 : 30;
    t.pL = function () {
        var t = e.ZI("android") ? null : o.requestAnimationFrame || o[s + "RequestAnimationFrame"];
        return function () {
            if (!t) t = function (e) {
                return window.setTimeout(function () {
                    try {
                        e(+new Date)
                    } catch (t) {
                    }
                }, 1e3 / r)
            };
            return t.apply(this, arguments)
        }
    }();
    t.af = function () {
        var t = e.ZI("android") ? null : o.cancelAnimationFrame || o[s + "CancelAnimationFrame"];
        return function () {
            if (!t) t = function (e) {
                window.clearTimeout(e)
            };
            return t.apply(this, arguments)
        }
    }();
    return t
}, "f3ab479b168ebebfb3a24e1000f7236e");
I$("e8fcfa8e74743fc0f6a88b7e9203e755", function (e, t) {
    return e
}, "d15c83ee182d6b2c8cdb6fbc7719ccc6", "f3ab479b168ebebfb3a24e1000f7236e");
I$("561958370f53f3adbd4bae38a9270b41", function (e, t, i, n, a, o) {
    i.requestAnimationFrame = function () {
        t.pL.apply(null, arguments)
    };
    i.cancelAnimationFrame = function () {
        t.af.apply(null, arguments)
    };
    if (!0) {
        if (!this.requestAnimationFrame) this.requestAnimationFrame = i.requestAnimationFrame;
        if (!this.cancelAnimationFrame) this.cancelAnimationFrame = i.cancelAnimationFrame
    }
    return i
}, "f3ab479b168ebebfb3a24e1000f7236e", "e8fcfa8e74743fc0f6a88b7e9203e755");
I$("509e08f671df6bcbe0b0cf01fbac3494", function (e, t, i, n, a) {
    t.bf = function (e) {
        return "transparent" != (e || "").toLowerCase()
    };
    return t
}, "f3ab479b168ebebfb3a24e1000f7236e");
I$("c0acfd5619cf217e4112ee07a2a33d71", function (e, t, i, n, a, o) {
    if ("trident" === t.$I.engine) I$("6fef7890280100546123305e0b36bdc9", function () {
        e.bf = function (e) {
            return !0
        }
    });
    if ("webkit" === t.$I.engine) I$("15140bc1426e8f92b66d39a192f11b39", function () {
        e.bf = function (e) {
            return !0
        }
    });
    return e
}, "509e08f671df6bcbe0b0cf01fbac3494", "f3ab479b168ebebfb3a24e1000f7236e");
I$("feac3eee481c01102b545423249e862b", '{var hide  = defined("hidden")&&!!hidden}\n{var param = defined("params")&&params||NEJ.O}\n{var width = !hide?width:"1px",height = !hide?height:"1px"}\n{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}\n<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"\n        codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"\n        width = "${width|default:"100px"}"\n        height = "${height|default:"100px"}" id="${id}">\n    <param value="${src}" name="movie">\n    {for x in param}\n    <param value="${x}" name="${x_key}"/>\n    {/for}\n    <embed src="${src}" name="${id}"\n           width="${width|default:"100px"}"\n           height="${height|default:"100px"}"\n           pluginspage="http://www.adobe.com/go/getflashplayer"\n           type="application/x-shockwave-flash"\n           {for x in param}${x_key}="${x}" {/for}></embed>\n</object>\n{if hide}</div>{/if}');
I$("7e02e8856f307687c6621fbb05f05a3c", function (e, t, i, n, a, o, s, r, c, d, _, l) {
    var u = a.wd(r);
    c.qL = function () {
        var r = {}, c, d = /^(?:mouse.*|(?:dbl)?click)$/i;
        window.onflashevent = function (e) {
            var t = decodeURIComponent(e.target), i = e.type.toLowerCase();
            var n = r[t + "-tgt"];
            if (n && d.test(i)) l(n, e);
            var a = r[t + "-on" + i];
            if (a) {
                var o = "";
                try {
                    o = a(e)
                } catch (s) {
                }
                return o
            }
        };
        var _ = function (e) {
            c = document.title;
            var i = t.RJ(e.parent) || document.body, n = a.RJ(u, e);
            i.insertAdjacentHTML(!e.hidden ? "beforeEnd" : "afterBegin", n)
        };
        var l = function (e, t) {
            var n = t.type.toLowerCase();
            o.requestAnimationFrame(function () {
                i.kd(e, n)
            })
        };
        var h = function (e) {
            return !!e && !!e.inited && !!e.inited()
        };
        var f = function (e) {
            var i = [document.embeds[e], t.RJ(e), document[e], window[e]], a = n.lJ(i, h), o = i[a], s = e + "-count";
            r[s]++;
            if (!o) window.setTimeout(f.RI(null, e), 300); else {
                if (c) {
                    document.title = c;
                    c = null
                }
                r[e](o);
                delete r[e];
                delete r[s]
            }
        };
        var p = function (e) {
            var i = e.id, a = e.params;
            if (!a) {
                a = {};
                e.params = a
            }
            var o = a.flashvars || "";
            o += (!o ? "" : "&") + ("id=" + i);
            if (!e.hidden && (e.target || s.bf(a.wmode))) {
                var c = t.gc(e.target) || t.gc(e.parent);
                r[i + "-tgt"] = c
            }
            a.flashvars = o;
            n.jJ(e, function (e, t) {
                if (n.bJ(e) && "onready" != t) r[i + "-" + t] = e
            })
        };
        return function (t) {
            t = e.X({}, t);
            if (t.src) {
                var i = "_" + n.IJ();
                t.id = i;
                p(t);
                _(t);
                if (t.onready) {
                    r[i] = t.onready;
                    r[i + "-count"] = 0;
                    f(i)
                }
            }
        }
    }();
    if (!0) e.copy(e.P("nej.e"), c);
    return c
}, "38fcb21d4f4bc66eeed3795a8cc8504b", "a5433a940b3ce4d5d7c2ae8a4f7ff1c9", "c2319fe81ae54f0df799a059ee6679e7", "7473c7d0556819b21bec58b99f475b04", "7158a64567936a9fabafeab790b6583c", "561958370f53f3adbd4bae38a9270b41", "c0acfd5619cf217e4112ee07a2a33d71", "feac3eee481c01102b545423249e862b");
I$("81c8e991318c36ce56716faa9aad166a", function (e, t, i, n, a, o, s, r, c) {
    var d, _ = {}, l = n.IJ();
    this["ld" + l] = function (e, t) {
        var i = _[e];
        if (i) {
            delete _[e];
            i.cL({status: 200, result: t})
        }
    };
    this["er" + l] = function (e, t) {
        var i = _[e];
        if (i) {
            delete _[e];
            i.cL({status: t || 0})
        }
    };
    o.df = t.eK();
    d = o.df.hK(e.$K);
    d.dL = function (e) {
        var t = _.flash;
        if (!n.gJ(t)) if (t) {
            this.bL = n.IJ();
            _[this.bL] = this;
            var o = n.LJ({url: "", data: null, method: "GET"}, e.request);
            o.key = this.bL;
            o.headers = e.headers;
            o.onerror = "cb.er" + l;
            o.onloaded = "cb.ld" + l;
            var s = i.SJ(o.url);
            if (s) o.policyURL = s;
            t.request(o)
        } else {
            _.flash = [this.dL.RI(this, e)];
            a.qL({
                hidden: !0, src: i.RJ("ajax.swf"), onready: function (e) {
                    if (e) {
                        var t = _.flash;
                        _.flash = e;
                        n.nJ(t, function (e, t, i) {
                            try {
                                e()
                            } catch (n) {
                            }
                        })
                    }
                }
            })
        } else t.push(this.dL.RI(this, e))
    };
    d.hL = function () {
        delete _[this.bL];
        this.fL()
    };
    return o
}, "22dde2e7c14a7b83d77c73e88c7008df", "5c3b96a99f4affd48bfbcdc2f37ab7fc", "2af23932d9465d8562094044caec1a71", "7473c7d0556819b21bec58b99f475b04", "7e02e8856f307687c6621fbb05f05a3c");
I$("17c92323f0221235843acc8c724acabd", function (e, t, i, n) {
    e.ef = function () {
        var e = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (t) {
            t = t || "";
            if (e.test(t)) return RegExp.$1; else return "*"
        }
    }();
    e.ff = function (e) {
        return e
    };
    e.gf = function (i, n) {
        if (i.postMessage) {
            n = n || t;
            i.postMessage(e.ff(n.data), e.ef(n.origin))
        }
    };
    return e
});
I$("39dbb7a3384fd5b9c331891c289336c2", function (e, t, i, n, a, o, s, r) {
    if ("trident" === e.$I.engine && e.$I.release >= "4.0" && e.$I.release <= "5.0") I$("afd4a672da5144aa19486578cdb0fc13", function () {
        t.ff = function (e) {
            return JSON.stringify(e)
        }
    });
    if ("trident" === e.$I.engine && e.$I.release <= "3.0") I$("60a5c5e278fc36c6375affc2f44384da", function (e) {
        var a = "MSG|", s = [];
        var r = function () {
            var e = unescape(window.name || "").trim();
            if (e && 0 == e.indexOf(a)) {
                window.name = "";
                var o = i.xJ(e.replace(a, ""), "|"), s = (o.origin || "").toLowerCase();
                if (!s || "*" == s || 0 == location.href.toLowerCase().indexOf(s)) n.kd(window, "message", {
                    data: JSON.parse(o.data || "null"),
                    source: window.frames[o.self] || o.self,
                    origin: t.ef(o.ref || document.referrer)
                })
            }
        };
        var c = function () {
            var e;
            var t = function (t, n, a) {
                if (i.kJ(e, t.w) < 0) {
                    e.push(t.w);
                    a.splice(n, 1);
                    t.w.name = t.d
                }
            };
            return function () {
                e = [];
                i.nJ(s, t);
                e = null
            }
        }();
        t.gf = function () {
            var e = function (e) {
                var t = {};
                e = e || o;
                t.origin = e.origin || "";
                t.ref = location.href;
                t.self = e.source;
                t.data = JSON.stringify(e.data);
                return a + i.yJ(t, "|", !0)
            };
            return function (t, i) {
                s.unshift({w: t, d: escape(e(i))})
            }
        }();
        e.Yd.Fd({element: window, event: "message"});
        setInterval(c, 100);
        setInterval(r, 20)
    }, "9773b0950cb0e9671f7335940a0ac586", "92a3385ab93bcc9e9d9fcf6f5289e1c4");
    return t
}, "f3ab479b168ebebfb3a24e1000f7236e", "17c92323f0221235843acc8c724acabd", "7473c7d0556819b21bec58b99f475b04", "c2319fe81ae54f0df799a059ee6679e7");
I$("b7f78579274504e6e01cdbe96bab7e2c", function (e, t, i, n, a, o, s, r) {
    a.hf = function () {
        var e = window.name || "_parent", a = {_top: window.top, _self: window, _parent: window.parent};
        return function (s, r) {
            if (t.cJ(s)) {
                s = a[s] || window.frames[s] || (i.RJ(s) || o).contentWindow;
                if (!s) return
            }
            var c = t.LJ({data: null, origin: "*", source: e}, r);
            n.gf(s, c)
        }
    }();
    if (!0) e.copy(e.P("nej.j"), a);
    return a
}, "38fcb21d4f4bc66eeed3795a8cc8504b", "7473c7d0556819b21bec58b99f475b04", "a5433a940b3ce4d5d7c2ae8a4f7ff1c9", "39dbb7a3384fd5b9c331891c289336c2");
I$("6168bc537fb23236b3c04c3942b50c8b", function (e, t, i, n, a, o, s, r, c, d, _) {
    var l, u = {};
    r.jf = i.eK();
    l = r.jf.hK(e.$K);
    l.gK = function () {
        var e = "NEJ-AJAX-DATA:", t = !1;
        var i = function (t) {
            var i = t.data;
            if (0 == i.indexOf(e)) {
                i = JSON.parse(i.replace(e, ""));
                var n = u[i.key];
                if (n) {
                    delete u[i.key];
                    i.result = decodeURIComponent(i.result || "");
                    n.cL(i)
                }
            }
        };
        var a = function () {
            if (!t) {
                t = !0;
                n.Cc(window, "message", i)
            }
        };
        return function () {
            this.iK();
            a()
        }
    }();
    l.dL = function (e) {
        var i = e.request, r = a.QJ(i.url), c = u[r];
        if (!t.gJ(c)) if (c) {
            this.bL = t.IJ();
            u[this.bL] = this;
            var d = t.LJ({url: "", data: null, timeout: 0, method: "GET"}, i);
            d.key = this.bL;
            d.headers = e.headers;
            s.hf(u[r], {data: d})
        } else {
            u[r] = [this.dL.RI(this, e)];
            o.Bc({
                src: r, visible: !1, onload: function (e) {
                    var i = u[r];
                    u[r] = n.gd(e).contentWindow;
                    t.nJ(i, function (e) {
                        try {
                            e()
                        } catch (t) {
                        }
                    })
                }
            })
        } else c.push(this.dL.RI(this, e))
    };
    l.hL = function () {
        delete u[this.bL];
        this.fL()
    };
    return r
}, "22dde2e7c14a7b83d77c73e88c7008df", "7473c7d0556819b21bec58b99f475b04", "5c3b96a99f4affd48bfbcdc2f37ab7fc", "c2319fe81ae54f0df799a059ee6679e7", "2af23932d9465d8562094044caec1a71", "a5433a940b3ce4d5d7c2ae8a4f7ff1c9", "b7f78579274504e6e01cdbe96bab7e2c");
I$("72c2de1c0db430be3c8b4a5425958e45", function (e, t, i, n, a, o, s, r, c, d, _, l) {
    var u, h = {}, f = "NEJ-UPLOAD-RESULT:";
    c.kf = t.eK();
    u = c.kf.hK(e.$K);
    u.gK = function () {
        var e = !1;
        var t = function (e) {
            var t = e.data;
            if (0 == t.indexOf(f)) {
                t = JSON.parse(t.replace(f, ""));
                var i = h[t.key];
                if (i) {
                    delete h[t.key];
                    i.cL(decodeURIComponent(t.result))
                }
            }
        };
        var i = function () {
            if (!e) {
                e = !0;
                n.Cc(window, "message", t)
            }
        };
        return function () {
            this.iK();
            i()
        }
    }();
    u.Md = function () {
        this.iK();
        a.Ec(this.lf);
        delete this.lf;
        window.clearTimeout(this.mL);
        delete this.mL
    };
    u.cL = function (e) {
        try {
            var t = a.Qc(e, this._K.type);
            this.kd("onload", t)
        } catch (i) {
            this.kd("onerror", {code: o.XJ, message: e})
        }
    };
    u.dL = function () {
        var e = function () {
            var e, t;
            try {
                var e = this.lf.contentWindow.document.body, t = (e.innerText || e.textContent || "").trim();
                if (t.indexOf(f) >= 0 || e.innerHTML.indexOf(f) >= 0) return
            } catch (i) {
                return
            }
            this.cL(t)
        };
        var t = function (e, i, n) {
            s.mf(e, {
                type: "json", method: "POST", cookie: n, mode: parseInt(i) || 0, onload: function (a) {
                    if (this.mL) {
                        this.kd("onuploading", a);
                        this.mL = window.setTimeout(t.RI(this, e, i, n), 1e3)
                    }
                }.RI(this), onerror: function (a) {
                    if (this.mL) this.mL = window.setTimeout(t.RI(this, e, i, n), 1e3)
                }.RI(this)
            })
        };
        return function (s) {
            var r = s.request, c = s.headers, _ = r.data, l = i.IJ();
            h[l] = this;
            _.target = l;
            _.method = "POST";
            _.enctype = o.Bb;
            _.encoding = o.Bb;
            var u = _.action || "", f = u.indexOf("?") <= 0 ? "?" : "&";
            _.action = u + f + "_proxy_=form";
            this.lf = a.Bc({
                name: l, onload: function (i) {
                    var a = n.gd(i);
                    n.Cc(a, "load", e.RI(this));
                    _.submit();
                    var o = (_.nej_query || d).value;
                    if (o) {
                        var s = (_.nej_mode || d).value, r = "true" === (_.nej_cookie || d).value;
                        this.mL = window.setTimeout(t.RI(this, o, s, r), 100)
                    }
                }.RI(this)
            })
        }
    }();
    u.hL = function () {
        this.fL()
    };
    return c
}, "22dde2e7c14a7b83d77c73e88c7008df", "5c3b96a99f4affd48bfbcdc2f37ab7fc", "7473c7d0556819b21bec58b99f475b04", "c2319fe81ae54f0df799a059ee6679e7", "a5433a940b3ce4d5d7c2ae8a4f7ff1c9", "1b005a7aa950f4fc021ca0593fd5e0f9", "8d1b7583837ff1fac4ca7d75e0360dc5", "b7f78579274504e6e01cdbe96bab7e2c");
I$("c812fc6745970bf9386721f79a4359cc", function (e, t, i, n, a, o, s, r) {
    a.nf = function (a, o, s) {
        var r = o ? {2: n.kf} : {2: i.jf, 3: t.df};
        return (r[a] || e.lL).Fd(s)
    };
    return a
}, "e358b07d5b841b6ba1efffff22d2b8c4", "81c8e991318c36ce56716faa9aad166a", "6168bc537fb23236b3c04c3942b50c8b", "72c2de1c0db430be3c8b4a5425958e45");
I$("c756639e7ef5b807c61046a59a8ed052", function (e, t, i, n, a, o) {
    if ("trident" === e.$I.engine && e.$I.release <= "5.0") I$("934356285f2768c2a085d7f0dd3a1a96", function () {
        t.nf = function () {
            var e = {0: 2, 1: 3};
            return t.nf.QI(function (t) {
                var i = t.args, n = i[0] || 0;
                i[0] = i[1] ? 2 : e[n] || n
            })
        }()
    });
    return t
}, "f3ab479b168ebebfb3a24e1000f7236e", "c812fc6745970bf9386721f79a4359cc");
I$("8d1b7583837ff1fac4ca7d75e0360dc5", function (e, t, i, n, a, o, s, r, c, d) {
    var _ = {}, l = c;
    s.hL = function (e) {
        var t = _[e];
        if (t) t.req.hL()
    };
    s.of = function (e) {
        l = e || c
    };
    s.mf = function () {
        var e = (location.protocol + "//" + location.host).toLowerCase();
        var n = function (t) {
            var n = i.wJ(t);
            return !!n && n != e
        };
        var s = function (e) {
            return (e || r)[t.zb] == t.Bb
        };
        var d = function (e) {
            var t = s(e.headers);
            if (!n(e.url) && !t) return a.lL.Fd(e); else return o.nf(e.mode, t, e)
        };
        var u = function (e, t) {
            var i = {data: t};
            var n = e.result.headers;
            if (n) i.headers = e.req.iL(n);
            return i
        };
        var h = function (e) {
            var t = _[e];
            if (t) {
                if (t.req) t.req.Jd();
                delete _[e]
            }
        };
        var f = function (e, t) {
            var i = _[e];
            if (i) {
                var n = arguments[2];
                if ("onload" == t && i.result) n = u(i, n);
                h(e);
                var a = {type: t, result: n};
                l(a);
                if (!a.stopped) (i[t] || c)(a.result)
            }
        };
        var p = function (e, t) {
            f(e, "onload", t)
        };
        var m = function (e, t) {
            f(e, "onerror", t)
        };
        var g = function (e, t) {
            var n = e.indexOf("?") < 0 ? "?" : "&", t = t || "";
            if (i.hJ(t)) t = i.AJ(t);
            if (t) e += n + t;
            return e
        };
        return function (e, t) {
            t = t || {};
            var n = i.IJ(), a = {result: t.result, onload: t.onload || c, onerror: t.onerror || c};
            _[n] = a;
            t.onload = p.RI(null, n);
            t.onerror = m.RI(null, n);
            if (t.query) e = g(e, t.query);
            var o = t.method || "";
            if ((!o || /get/i.test(o)) && t.data) {
                e = g(e, t.data);
                t.data = null
            }
            t.url = e;
            a.req = d(t);
            a.req.gL(t.data);
            return n
        }
    }();
    s.pf = function (e, a) {
        e = n.RJ(e);
        if (!e) return "";
        var o = i.LJ({
            mode: 0,
            type: "json",
            query: null,
            cookie: !1,
            headers: {},
            onload: null,
            onerror: null,
            onuploading: null,
            onbeforerequest: null
        }, a);
        o.data = e;
        o.method = "POST";
        o.timeout = 0;
        o.headers[t.zb] = t.Bb;
        return s.mf(e.action, o)
    };
    if (!0) e.copy(e.P("nej.j"), s);
    return s
}, "38fcb21d4f4bc66eeed3795a8cc8504b", "1b005a7aa950f4fc021ca0593fd5e0f9", "7473c7d0556819b21bec58b99f475b04", "a5433a940b3ce4d5d7c2ae8a4f7ff1c9", "e358b07d5b841b6ba1efffff22d2b8c4", "c756639e7ef5b807c61046a59a8ed052");
I$("47a2b4c50a8d2710cf11edb130ebb7b6", function (e, t, i, n, a, o, s, r) {
    var c;
    a.qf = t.eK();
    c = a.qf.hK(e.AK);
    c.JK = function () {
        this.LK();
        return null
    };
    c.LK = function () {
        n.mf(this.MK, {method: "GET", type: "text", onload: this.QK.RI(this), onerror: this.PK.RI(this)})
    };
    c.QK = function (e) {
        this.OK("onload", {url: this.MK, content: e})
    };
    return a
}, "d8e847b21f9f3bf97a5ed25beb9de5f1", "5c3b96a99f4affd48bfbcdc2f37ab7fc", "a5433a940b3ce4d5d7c2ae8a4f7ff1c9", "8d1b7583837ff1fac4ca7d75e0360dc5");
I$("eeced28cafb26d5026e93f491158086f", function (e, t, i, n, a) {
    t.rL = function (t) {
        e.Ec(t)
    };
    return t
}, "a5433a940b3ce4d5d7c2ae8a4f7ff1c9");
I$("86c86308a72fba100ddc8a98d139145c", function (e, t, i, n, a, o, s) {
    if ("trident" === i.$I.engine && i.$I.release <= "2.0") I$("8a67956f9be0ebab33c47d2cd9e6d2f5", function () {
        e.rL = function (e) {
            t.Sc(e, "display", "none");
            try {
                e.contentWindow.document.body.innerHTML = "&nbsp;"
            } catch (i) {
            }
        }
    });
    return e
}, "eeced28cafb26d5026e93f491158086f", "a5433a940b3ce4d5d7c2ae8a4f7ff1c9", "f3ab479b168ebebfb3a24e1000f7236e");
I$("45580d26ae4793023a9e1375779cb5cf", function (e, t, i, n, a, o, s, r) {
    var c;
    a.sf = t.eK();
    c = a.sf.hK(e.AK);
    c.JK = function () {
        var e = i.Ac("iframe");
        e.width = 0;
        e.height = 0;
        e.style.display = "none";
        return e
    };
    c.LK = function (e) {
        try {
            document.body.appendChild(e);
            e.src = this.MK
        } catch (t) {
            console.log(e);
            console.error(t)
        }
    };
    c.PK = function (e) {
        var t = (this.HK(this.MK) || o).request;
        this.OK("onerror", e);
        n.rL(t)
    };
    c.QK = function () {
        var e = null, t = (this.HK(this.MK) || o).request;
        try {
            if (t.src != this.MK) return;
            e = t.contentWindow.document.body
        } catch (i) {
        }
        this.OK("onload", e);
        n.rL(t)
    };
    return a
}, "d8e847b21f9f3bf97a5ed25beb9de5f1", "5c3b96a99f4affd48bfbcdc2f37ab7fc", "a5433a940b3ce4d5d7c2ae8a4f7ff1c9", "86c86308a72fba100ddc8a98d139145c");
I$("e13ebb690a155d1e5169a65c21aeee18", function (e, t, i, n, a, o, s) {
    var r;
    n.tf = t.eK();
    r = n.tf.hK(e.AK);
    r.JK = function () {
        return i.Ac("link")
    };
    r.LK = function (e) {
        e.href = this.MK;
        document.head.appendChild(e)
    };
    return n
}, "d8e847b21f9f3bf97a5ed25beb9de5f1", "5c3b96a99f4affd48bfbcdc2f37ab7fc", "a5433a940b3ce4d5d7c2ae8a4f7ff1c9");
I$("34c8516f30a8f0f10beb992e7d6ee91d", function (e, t, i, n, a, o, s) {
    var r;
    n.uf = t.eK();
    r = n.uf.hK(e.AK);
    r.Id = function (e) {
        this.iK(e);
        this.vf = e.async;
        this.wf = e.charset;
        this.BK.async = !1;
        this.BK.charset = this.wf
    };
    r.JK = function () {
        var e = i.Ac("script");
        if (null != this.vf) e.async = !!this.vf;
        if (null != this.wf) e.charset = this.wf;
        return e
    };
    r.KK = function (e) {
        i.Ec(e)
    };
    return n
}, "d8e847b21f9f3bf97a5ed25beb9de5f1", "5c3b96a99f4affd48bfbcdc2f37ab7fc", "a5433a940b3ce4d5d7c2ae8a4f7ff1c9");
I$("01db61ff57baaf6cb3a025d8ec5e968b", function (e, t, i, n, a, o, s, r, c, d, _) {
    r.xf = function (e, t) {
        s.uf.Fd(t).SK(e)
    };
    r.yf = function (e, t) {
        s.uf.Fd(t).VK(e)
    };
    r.zf = function (e, t) {
        o.tf.Fd(t).SK(e)
    };
    r.Af = function (e, t) {
        o.tf.Fd(t).VK(e)
    };
    r.Bf = function (e, t) {
        a.sf.Fd(t).SK(e)
    };
    r.Cf = function (e, n) {
        var a = i.wJ(e), o = i.wJ(location.href);
        if (!a || a == o) r.Bf(e, n); else {
            var s = n.onload;
            n.onload = function (e) {
                s(t.Lc(e.content))
            };
            r.Df(e, n)
        }
    };
    r.Df = function (e, t) {
        n.qf.Fd(t).SK(e)
    };
    if (!0) e.copy(e.P("nej.j"), r);
    return r
}, "38fcb21d4f4bc66eeed3795a8cc8504b", "a5433a940b3ce4d5d7c2ae8a4f7ff1c9", "7473c7d0556819b21bec58b99f475b04", "47a2b4c50a8d2710cf11edb130ebb7b6", "45580d26ae4793023a9e1375779cb5cf", "e13ebb690a155d1e5169a65c21aeee18", "34c8516f30a8f0f10beb992e7d6ee91d");
I$("c6dc872bd42834f642dbd3e56c6d4abe", function (e, t, i, n, a, o, s, r, c, d, _, l, u, h) {
    var f = {}, p = "ntp-" + +new Date + "-";
    _.tpl = function () {
        return f
    };
    _.Ef = function () {
        var e = {text: "txt", plain: "txt", javascript: "js"};
        var d = {
            textarea: {
                getType: function (t) {
                    var i = t.name.toLowerCase();
                    return e[i] || i
                }, getContent: function (e) {
                    return e.value || e.innerText || ""
                }
            }, script: {
                getType: function (t) {
                    var i = (t.type || "").toLowerCase().replace(/^nej\//i, "");
                    return e[i] || i
                }, getContent: function (e) {
                    return e.innerText || e.innerHTML || ""
                }
            }
        };
        var u = 0;
        var h = function () {
            if (!(u > 0)) {
                u = 0;
                i.kd(document, "templateready");
                i.Dc(document, "templateready")
            }
        };
        var f = function (e, i) {
            var a = n.lc(e, "src");
            if (a) {
                i = i || l;
                var o = i.root;
                if (!o) o = e.ownerDocument.location.href; else o = t.vJ(o);
                a = a.split(",");
                t.oJ(a, function (e, i, n) {
                    n[i] = t.vJ(e, o)
                });
                return a
            }
        };
        var p = function (e, t) {
            if (e) {
                var i = f(e, t);
                if (i) r.Af(i, {version: n.lc(e, "version")});
                var a = e.tagName.toLowerCase();
                n.Uc(d[a].getContent(e))
            }
        };
        var m = function (e) {
            u--;
            n.Tc(e);
            h()
        };
        var g = function (e, t) {
            if (e) {
                var i = f(e, t), a = e.tagName.toLowerCase(), o = d[a].getContent(e);
                if (!i) n.Tc(o); else {
                    u++;
                    var t = {version: n.lc(e, "version"), onload: m.RI(null, o)};
                    window.setTimeout(r.yf.RI(r, i, t), 0)
                }
            }
        };
        var b = function (e) {
            u--;
            _.Ef(e);
            h()
        };
        var $ = function (e, t) {
            if (e) {
                var i = f(e, t)[0];
                if (i) {
                    u++;
                    var t = {version: n.lc(e, "version"), onload: b};
                    window.setTimeout(r.Cf.RI(r, i, t), 0)
                }
            }
        };
        var v = function (e, t) {
            u--;
            _.Ff(e, t || "");
            h()
        };
        var C = function (e, t) {
            if (e && e.id) {
                var i = e.id, a = f(e, t)[0];
                if (a) {
                    u++;
                    var o = a + (a.indexOf("?") < 0 ? "?" : "&") + (n.lc(e, "version") || ""),
                        t = {type: "text", method: "GET", onload: v.RI(null, i)};
                    window.setTimeout(c.mf.RI(c, o, t), 0)
                }
            }
        };
        var I = function (e) {
            if (a.ZI("mac") && "safari" === a.$I.browser) return t.rJ(e.innerHTML); else return d[e.tagName.toLowerCase()].getContent(e)
        };
        var y = function (e, t) {
            var i = d[e.tagName.toLowerCase()], n = i.getType(e);
            switch (n) {
                case"jst":
                    o.xd(I(e), e.id);
                    return;
                case"txt":
                    _.Ff(e.id, I(e));
                    return;
                case"ntp":
                    _.Gf(I(e), e.id);
                    return;
                case"js":
                    g(e, t);
                    return;
                case"css":
                    p(e, t);
                    return;
                case"html":
                    $(e, t);
                    return;
                case"res":
                    C(e, t);
                    return
            }
        };
        var x = function (e) {
            var i = [], n = e.getElementsByTagName("script");
            if (!(n && n.length || "BODY" !== e.tagName)) n = e.ownerDocument.getElementsByTagName("script");
            t.oJ(n, function (e) {
                if (0 === e.type.search(/^nej\//i)) i.push(e)
            });
            return i
        };
        s.Yd.Fd({element: document, event: "templateready", oneventadd: h});
        return function (e, i) {
            e = n.RJ(e);
            if (e) {
                var a, o = e.tagName;
                if ("TEXTAREA" === o || "SCRIPT" === o) a = [e]; else {
                    a = t.BJ(e.getElementsByTagName("textarea"));
                    a.push.apply(a, x(e))
                }
                t.oJ(a, function (e) {
                    y(e, i)
                });
                n.Ec(e, !0)
            }
            h()
        }
    }();
    _.Ff = function (e, t) {
        if (null != f[e] && typeof f[e] == typeof t) {
            console.warn("text template overwrited with key " + e);
            console.debug("old template content: " + f[e].replace(/\n/g, " "));
            console.debug("new template content: " + t.replace(/\n/g, " "))
        }
        f[e] = t || ""
    };
    _.vd = function (e) {
        return f[e] || ""
    };
    _.Gf = function (e, i) {
        i = i || t.IJ();
        e = n.RJ(e) || e;
        _.Ff(p + i, e);
        if (!t.cJ(e)) n.Fc(e);
        return i
    };
    _.Hf = function (e) {
        if (!e) return null;
        e = p + e;
        var i = _.vd(e);
        if (!i) return null;
        var a;
        if (t.cJ(i)) {
            i = n.Lc(i);
            var o = i.getElementsByTagName("textarea");
            if (!("TEXTAREA" == i.tagName || o && o.length)) _.Ff(e, i); else a = i
        }
        if (!a) a = i.cloneNode(!0);
        n.Fc(a);
        return a
    };
    _.If = function () {
        var e = function (e, t) {
            return "offset" == t || "limit" == t
        };
        return function (i, n, a) {
            var o = [];
            if (!i || !i.length || !n) return o;
            a = a || l;
            var s = i.length, r = parseInt(a.offset) || 0, c = Math.min(s, r + (parseInt(a.limit) || s)),
                d = {total: i.length, range: [r, c]};
            t.KJ(d, a, e);
            for (var _ = r, u; _ < c; _++) {
                d.index = _;
                d.data = i[_];
                u = n.Fd(d);
                var h = u.Jf();
                f[h] = u;
                u.Jd = u.Jd.QI(function (e, t) {
                    delete f[e];
                    delete t.Jd
                }.RI(null, h, u));
                o.push(u)
            }
            return o
        }
    }();
    _.Kf = function (e) {
        return f[e]
    };
    _.Lf = function () {
        var e = /#<(.+?)>/g;
        return function (i, a) {
            a = a || {};
            i = (i || "").replace(e, function (e, i) {
                var n = a[i];
                if (!n) {
                    n = "tpl-" + t.IJ();
                    a[i] = n
                }
                return n
            });
            _.Ef(n.Lc(i));
            return a
        }
    }();
    d.KJ({Ef: _.Ef, Gf: _.Gf});
    if (!0) e.copy(e.P("nej.e"), _);
    return _
}, "38fcb21d4f4bc66eeed3795a8cc8504b", "7473c7d0556819b21bec58b99f475b04", "c2319fe81ae54f0df799a059ee6679e7", "a5433a940b3ce4d5d7c2ae8a4f7ff1c9", "f3ab479b168ebebfb3a24e1000f7236e", "7158a64567936a9fabafeab790b6583c", "9773b0950cb0e9671f7335940a0ac586", "01db61ff57baaf6cb3a025d8ec5e968b", "8d1b7583837ff1fac4ca7d75e0360dc5", "22b361d7e89ffe2b2f3ec497959c3e3d");
I$("f812a3948bf6b0b0b7ef1b94315481da", function (e) {
    return e
}, "77a4235c170a5acb87bf590d34ba2045");
I$("393c172195c9280b0b17edb6219129db", function (e) {
    var t = window, i = NEJ.O, n = NEJ.P("nej.p"), a = NEJ.P("nej.e"), o = NEJ.P("nej.u"), s = NEJ.P("edu.d"),
        r = NEJ.P("edu.u"), c = NEJ.P("edu.u"), d = NEJ.P("nej.j"),
        _ = t.eduProduct && t.eduProduct.gaProduct || t.gaProduct || "study";
    var l = function u() {
        var t = document.createElement("img");
        return function (i) {
            t.src = "//log.study.163.com/__utm.gif?p=" + _ + "&dt=" + e.FL(i)
        }
    }();
    r.Ql = function (e) {
        var t = a.Ac("div");
        t.innerHTML = e;
        return r.Pl(t.innerText)
    };
    r.Pl = function (e) {
        return (e || "").replace(/[\t\r\n]+/gi, " ").replace(/[ ]+/gi, " ")
    };
    r.mp = function (e) {
        if (e) e.style.display = "none"
    };
    r.np = function (e) {
        if (e) return "none" != e.style.display; else return !1
    };
    r.BM = function (e) {
        if (e) e.style.display = ""
    };
    r.CM = function (e, t) {
        if (t) r.BM(e); else r.mp(e)
    };
    r.qp = function (e) {
        var t = {};
        var i = e.trim();
        if (i) {
            i = i.slice(1);
            var n = i.split("&");
            for (var a = n.length; a;) {
                var o = n[--a].split("=");
                t[o[0]] = decodeURIComponent(o[1])
            }
        }
        return t
    };
    r.rp = function (e, i, n) {
        var i = i || t.location.href;
        var a = "";
        var o = "";
        var s = "";
        var c = e.substring(0, e.indexOf("="));
        var d = e.substring(e.indexOf("=") + 1);
        var _ = i.indexOf("#");
        if (_ >= 0) {
            o = i.substring(_);
            i = i.substring(0, _);
            if (n) o += (o.indexOf("?") > 0 ? "&" : "?") + (new Date).getMilliseconds()
        }
        var l = i.indexOf("?");
        if (l >= 0) {
            s = i.substring(l);
            a = i.substring(0, l)
        } else a = i;
        var u = r.qp(s);
        var h = [];
        var f = !0;
        for (var p in u) {
            if (p == c) {
                u[p] = d;
                f = !1
            }
            h.push(p + "=" + u[p])
        }
        if (f) h.push(e);
        i = a + "?" + h.join("&") + o;
        return i
    };
    r.GL = function (e, i) {
        if (!e || !i) return !1;
        var n = t.decodeURIComponent(e);
        var a = n.indexOf("?");
        a = a >= 0 ? a : n.length;
        n = n.substring(n.indexOf("#") + 1, a);
        return o.kJ(i, n) >= 0
    };
    r.DM = function (e, t) {
        if (e) for (var i = 0; i < e.length; i++) if (e[i] == t) return !0;
        return !1
    };
    r.vp = function (e) {
        return (e || "").replace(/(^\s*)|(\s*$)/g, "")
    };
    r.wp = function (e) {
        return !e ? "" : e.replace(/[\n\r]/g, "")
    };
    r.xp = function (e) {
        if (e) {
            e.getAttribute("style");
            e.removeAttribute("style")
        }
    };
    r.Jn = function () {
        return "trident" == n.$I.engine
    };
    r.yp = function () {
        if (r.Jn() && parseFloat(n.$I.release) < 6) return !0; else return !1
    };
    r.zp = function () {
        var e = !r.Jn() || "2.0" != n.$I.release;
        if (!e) location.replace(t.urlPrefix.notSupportedPrefix);
        return e
    };
    r.Ap = function (e, t, i) {
        if (e) a.Kc(t, i); else a.Wc(t, i)
    };
    r.Bp = function () {
        try {
            if (r.Jn() && t.docTitle) document.title = t.docTitle
        } catch (e) {
        }
    };
    if (r.Jn() && !r.changeHashTimer) r.changeHashTimer = t.setInterval(r.Bp, 100);
    r.aj = function (e, i) {
        if (!i) i = location.pathname + location.search;
        i += e ? location.hash : "";
        if (t[t.gaqStr]) t[t.gaqStr].push([t.gaTrackPageview, i])
    };
    r.bj = function (e, i, n, a) {
        if (e && i) {
            var o = [t.gaTrackEvent, e, i];
            if (n) {
                o.push(n);
                if (void 0 != a && null != a) o.push(parseInt(a))
            }
            if (t[t.gaqStr]) t[t.gaqStr].push(o)
        }
    };
    r.EM = function (e, i) {
        var n = t.webUser || {};
        var a = {event: "setAccount", account: 32810};
        var o = n.email || "";
        var s = {event: "setEmail", email: [o]};
        var r = {event: "setSiteType", type: e ? "m" : "d"};
        if (t.criteo_q) t.criteo_q.push(a, s, r, i)
    };
    r.FM = function (e) {
        l(JSON.stringify(e))
    };
    r.Dp = function (e, t, i) {
        var n = "6925ecaa9614a750=" + t + "&_item_pos_=" + i, a = e.indexOf("?") > 1 ? "&" : "?";
        return e + a + n
    };
    r.Ep = function (e) {
        return "###" + o.FL(JSON.stringify(e || {}))
    };
    r.bm = function (e, t, i, n, a) {
        function o(e) {
            if (c.test(e)) {
                var t = e.split("/");
                if ("edu-image" == t[3]) {
                    t[2] = "edu-image.nosdn.127.net";
                    t.splice(3, 1);
                    e = t.join("/")
                }
            } else if (l.test(e)) {
                var t = e.split("/");
                t.splice(0, 3);
                t.unshift("//img-ph-mirror.nosdn.127.net");
                e = t.join("/")
            }
            return e
        }

        function s(e, t, i, n) {
            var o = "";
            if (t && i) o = "&thumbnail=" + t + (a || "y") + i;
            e = (e.split("?") || [])[0];
            e = e + "?imageView" + o + "&quality=100";
            if (n) e += "&" + n;
            return e
        }

        function r(e, t, i, n) {
            var a, o;
            a = "1x95";
            o = e.substring(e.lastIndexOf("."));
            if (".gif" == o) return e;
            if (t && i) e = f + "http:" + e + "_" + t + "x" + i + "x" + a + o;
            return e
        }

        var c = new RegExp("^(http://|https://|//)nos.netease.com/"),
            d = new RegExp("^(http://|https://|//)edu-image.nosdn.127.net"),
            _ = new RegExp("^http://nos.netease.com/.*thumbnail=(\\d*)y(\\d*).*"),
            l = new RegExp("^(http://|https://|//)img[0-9]*.ph.126.net"),
            u = new RegExp("^(http://|https://|//)img-ph-mirror.nosdn.127.net"),
            h = new RegExp("^(http://|https://|//)imgsize.ph.126.net"),
            f = "//imgsize.ph.126.net/?enlarge=true&imgurl=";
        var p, m;
        if (!e) return e;
        e = e.replace(/^(http:|https:)/, "");
        if (h.test(e)) {
            m = e.match(/imgurl=(\S*)_/);
            e = m[1]
        }
        p = o(e);
        if (t || i || n) if (d.test(p) || u.test(p)) p = s(p, t, i, n); else p = r(p, t, i, n);
        return p
    };
    r.Fp = function (e) {
        var t = !1;
        if (!e.length && e) {
            e = [e];
            t = !0
        }
        if (!(e.length <= 0)) {
            var i = new RegExp("^http://nos.netease.com/");
            var n = "";
            var a = "";
            var o = [];
            var s = [];
            for (var r = 0; r < e.length; r++) {
                n = e[r].getAttribute("data-originsrc");
                o = n.split("nos.netease.com/edu-image");
                n = o.join("edu-image.nosdn.127.net");
                e[r].setAttribute("data-originsrc", n)
            }
            if (t) return e[0]; else return e
        }
    };
    r.Gp = function (e) {
        return !!e && (e == r.CONST.ACCOUNT_TYPE_ORGANIZATION || e == r.CONST.ACCOUNT_TYPE_LECTOR)
    };
    r.Hp = function (e) {
        if (null == e) return null;
        if ("object" != typeof e) return e;
        var t = {};
        if (e.constructor == Array) t = [];
        for (var i in e) t[i] = arguments.callee(e[i]);
        return t
    };
    r.Ip = function () {
        return window.location.host == t.mailStudyHost ? "_self" : "_blank"
    };
    r.Jp = function (e) {
        var t = {};
        o.oJ(e, function (e, i) {
            t[e.id] = e
        });
        return t
    };
    r.Kp = function (e) {
        for (var t in e) return !1;
        return !0
    };
    r.Lp = function (e) {
        return e.replace(/{##([^{#}]+)##}/g, function () {
            return '<span class="f-fcorange">' + arguments[1] + "</span>"
        })
    };
    r.Mp = function (e) {
        var t = "";
        var i = c.zn();
        if (!i) ysf.config({uid: c.gm(), bid: e}); else {
            switch (1 * (i.loginType || -999)) {
                case-1:
                    t = "网易邮箱";
                    break;
                case 2:
                    t = "微博";
                    break;
                case 3:
                    t = "人人网";
                    break;
                case 4:
                    t = "QQ";
                    break;
                case 6:
                    t = "微信";
                    break;
                case 7:
                    t = "学校云";
                    break;
                case 11:
                    t = "爱课程网";
                    break;
                case 20:
                    t = "企业";
                    break;
                case 30:
                    t = "手机";
                    break;
                default:
                    t = "第三方"
            }
            ysf.config({
                uid: i.id,
                bid: e || "",
                name: i.nickName || "",
                email: i.email || "",
                mobile: i.phoneNumber || "",
                data: JSON.stringify([{index: 0, key: "account", label: "用户ID", value: i.id}, {
                    key: "loginType",
                    label: "登录类型",
                    value: t
                }])
            })
        }
    };
    r.Np = function () {
        if (t.ysf) ysf.open(); else r.Op(t.qiyukfAppKey, "")
    };
    r.Pp = function (e, i, n) {
        if (!t.ysf || t.qiyukfAppKey != e) d.xf("//qiyukf.com/script/" + e + ".js", {
            onload: function () {
                r.Mp(i);
                n && r.Np()
            }, onerror: function (e) {
                console.error("qiyuScript load error!")
            }, async: !1
        })
    };
    r.Op = function (e, i) {
        if (!t.ysf || t.qiyukfAppKey != e) r.Pp(e, i, !0); else r.Np()
    }
}, "77a4235c170a5acb87bf590d34ba2045", "c6dc872bd42834f642dbd3e56c6d4abe", "f812a3948bf6b0b0b7ef1b94315481da");
I$("0982d755eb6bb6c1aa1a41efb7993331", function () {
    var e = window, t = NEJ.O, i = NEJ.P("edu.u");
    i.MOCCONST = {
        KTYPE_All: 30,
        KTYPE_FINISHED: 0,
        KTYPE_BEGINING: 10,
        KTYPE_UNSTART: 20,
        UNDETERMINDED_STARTTIME: 32503651201e3,
        UNDETERMINDED_ENDTIME: 32535187201e3,
        REL_TYPE_TERM_CHIEF_LECTOR: 0,
        REL_TYPE_TERM_LECTOR: 1,
        REL_TYPE_TERM_ASSIST: 2,
        PHASE_SENDING: 1,
        PHASE_FINISH: 2,
        PHASE_FAIL: -1,
        MODE_MOOC: 0,
        MODE_SPOC_SYNC: 10,
        MODE_SPOC_ASYNC: 15,
        MODE_SPOC_ONLY: 20,
        DETAIL_STATUS_APPLY_FIGHT_AVAILABLE: 1,
        DETAIL_STATUS_APPLY_FIGHT_DONE: 2,
        DETAIL_STATUS_APPLY_CERT_AVAILABLE: 10,
        DETAIL_STATUS_SUCCESS_NORMAL_CERT_AVAILABLE: 22,
        DETAIL_STATUS_APPLY_CERT_DONE: 11,
        DETAIL_STATUS_CERT_DIRECT: 40
    }
}, "ef610943f997eae84e208bd1668f8379");
I$("5d62cf99b9da368aa8efce0639b72f38", function () {
    var e = window, t = NEJ.O, i = NEJ.P("edu.u");
    e.CFG_UMI = {
        commonutil: "/",
        index: "/index",
        login: "/login",
        logout: "/logout",
        independLogin: "/indpendLogin",
        addSnsMember: "/addSnsMember",
        addAsk: "/addAsk",
        askDetail: "/askDetail",
        askIndex: "/askIndex",
        askLabels: "/askLabels",
        askLabelSearch: "/askLabelSearch",
        addNote: "/addNote",
        noteDetail: "/noteDetail",
        noteIndex: "/noteIndex",
        weixinFirstBind: "/weixinFirstBind",
        mobileTelLogin: "/mobileTelLogin",
        mobileTelRegister: "/mobileTelRegister",
        mobileRetrievePwd: "/mobileRetrievePwd",
        mobileTelBind: "/mobileTelBind",
        telBind: "/telBind",
        mobileUrsLogin: "/mobileUrsLogin",
        innerlist: "/innerlist",
        courselist: "/courselist",
        courses: "/courses",
        planlist: "/planlist",
        skilllist: "/skilllist",
        repolist: "/repolist",
        search: "/search",
        live: "/live",
        courseMain: "/courseMain",
        courseDetail: "/courseDetail",
        courseComment: "/?/courseComment",
        courseNotice: "/?/courseNotice",
        courseLearn: "/learn",
        courseLearnPreview: "/?/preview",
        lessonText: "/learn/text",
        lessonAudio: "/learn/audio",
        lessonVideo: "/learn/video",
        lessonLive: "/learn/live",
        lessonLecture: "/learn/lecture",
        lessonTest: "/learn/test",
        lessonLab: "/learn/lab",
        lessonPureText: "/learn/pureText",
        lessonResVideo: "/learn/resVideo",
        lessonResLink: "/learn/resLink",
        lessonFlash: "/learn/flash",
        lessonThirdRes: "/learn/thirdRes",
        courseToolbar: "/?/toolbar",
        toolbarChapterList: "/?/toolbarchapterList",
        toolbarNotes: "/?/toolbarnotes",
        toolbarAsk: "/?/toolbarask",
        toolbarTalk: "/?/toolbarTalk",
        toolbarForum: "/?/toolbarForum",
        settings: "/settings",
        personInfoEdit: "/settings/personInfoEdit",
        settingsAddress: "/settings/address",
        settingsAccount: "/settings/settingsAccount",
        settingsMessage: "/settings/settingsMessage",
        settingsPrivacy: "/settings/settingsPrivacy",
        settingsMail: "/settings/settingsMail",
        snsBind: "/settings/snsBind",
        snsFriends: "/settings/snsFriends",
        setFriendsInfo: "/settings/setFriendsInfo",
        myMessage: "/myMessage",
        msgList: "/message/msgList",
        buySuccess: "/order/attentionGuide",
        personCenter: "/center",
        personCourseAll: "/center/course",
        personInfoRead: "/center/infoRead",
        personSns: "/center/sns",
        orgCenterCourse: "/center/orgCenterCourse",
        orgCenter: "/center/org",
        orgCenterDetail: "/center/orgDetail",
        lectorCenterCourse: "/center/lectorCenterCourse",
        personInfoRead: "/center/infoRead",
        about: "/about",
        friendly404: "/friendly404",
        error: "/error",
        cpNoPrivilege: "/cpNoPrivilege",
        skillTree: "/skillTree",
        myCloudClass: "/cloudClass",
        myCloudCourse: "/cloudClass/course",
        myCloudStoreCourse: "/cloudClass/course/store",
        myCloudStoreMoocCourse: "/cloudClass/course/storemooc",
        myCloudBuyedCourse: "/cloudClass/course/buyed",
        myCloudEnrollCourse: "/cloudClass/course/enroll",
        myCloudCourseRecommend: "/?/cloudClass/course/enroll/recommend",
        myCloudMyTask: "/cloudClass/task",
        myCloudSpec: "/cloudClass/spec",
        myCloudPlan: "/cloudClass/plan",
        myCloudEnrollPlan: "/cloudClass/plan/enroll",
        myCloudCreatedPlan: "/cloudClass/plan/created",
        myCloudStorePlan: "/cloudClass/plan/store",
        myCloudCreatePlan: "/cloudClass/createPlan",
        myCloudOrders: "/cloudClass/orders",
        myCloudFriends: "/cloudClass/friends",
        myCloudPapers: "/cloudClass/papers",
        myCloudPapersRecord: "/cloudClass/papers/record",
        myCloudPapersWrong: "/cloudClass/papers/wrong",
        myCloudPapersStore: "/cloudClass/papers/store",
        myCloudCoupon: "/cloudClass/coupon",
        cloudClassMob: "/cloudClassMob",
        myManage: "/manage",
        myManageMyCourse: "/manage/myManageCourse",
        myManageTradingRecord: "/manage/tradingRecord",
        myManageTeacher: "/manage/teacherControl",
        myManageThirdSpread: "/manage/spread",
        myManageDataReport: "/manage/dr",
        myManageHomeCycle: "/manage/hc",
        myManageCouponCreate: "/manage/couponCreate",
        myManageCouponManage: "/manage/couponManage",
        myManageCodeCreate: "/manage/codeCreate",
        myManageCodeManage: "/manage/codeManage",
        myManageLiveRemind: "/manage/mclr",
        myManageSignUpManage: "/manage/signUp",
        myManageBook: "/manage/myManageBook",
        recommendList: "/recommendList",
        planDetail: "/planDetail",
        planMain: "/planMain",
        planComment: "/?/planComment",
        planNotice: "/?/planNotice",
        courseCreate: "/courseCreate",
        signCreateProtocol: "/courseCreate/protocol",
        createBaseInfo: "/courseCreate/baseInfo",
        createTeacherInfo: "/courseCreate/teacherInfo",
        createOtherSetting: "/courseCreate/otherSetting",
        createChapContent: "/courseCreate/chapContent",
        viewCourse: "/viewCourse",
        courseEdit: "/courseEdit",
        signEditProtocol: "/courseEdit/protocol",
        editBaseInfo: "/courseEdit/baseInfo",
        editCourseCover: "/courseEdit/courseCover",
        editTeacherInfo: "/courseEdit/teacherInfo",
        editOtherSetting: "/courseEdit/otherSetting",
        editChapContent: "/courseEdit/chapContent",
        editSerialization: "/courseEdit/serialization",
        editIntroduceVideo: "/courseEdit/editIntroduceVideo",
        editPublicNotice: "/courseEdit/publicNotice",
        editforumSetting: "/courseEdit/forumSetting",
        editContact: "/courseEdit/contact",
        editRecommend: "/courseEdit/recommend",
        inviteShare: "/inviteShare",
        registeredShare: "/registeredShare",
        snsSpread: "/snsSpread",
        invitePage: "/invitePage",
        questionAnswer: "/answer",
        questionExam: "/exam",
        questionRepository: "/repository",
        payOrder: "/order",
        payOrder_m: "/order_m",
        postTopic: "/postTopic",
        forumIndex: "/forumIndex",
        forumSearch: "/forumSearch",
        forumDetail: "/forumDetail",
        csGrade: "/csGrade",
        CSindex: "/CSindex",
        webPlus: "/webPlus",
        smartSpecIntro: "/smartSpecIntro",
        helpCenter: "/hb",
        orderConfirm: "/orderConfirm",
        paySuccess: "/paySuccess",
        orderCart: "/orderCart",
        myOrders: "/myOrders",
        albumDetail: "/album",
        myOrder: "/order",
        myCoupon: "/coupon",
        smartRegistCert: "/registCert"
    };
    i.umi = function () {
        var i = e.CFG_UMI || t;
        return function (e) {
            return i[e] || ""
        }
    }()
}, "ef610943f997eae84e208bd1668f8379");
I$("6ae3e0c14a929ad034cf3d347aca315f", function () {
    var e = window, t = NEJ.O, i = NEJ.P("edu.u");
    i.CONST = {
        PLATFORM: {WEB: 1, WAP: 6},
        LOGINTYPE: {
            ICOURSE: 11,
            YOUDAO: 1,
            WEIBO: 2,
            RENREN: 3,
            QQ: 4,
            QIYE163: 5,
            WECHAT: 6,
            XUEXIAOYUN: 7,
            QIYE: 20,
            URS: -1,
            TEL: 30
        },
        TELDIALOG: {EDITTEL: 1, EDITPWS: 2},
        VIDEO_PROTECTED_SOLUTION_CDN: 1,
        VIDEO_PROTECTED_SOLUTION_ENCRYPT: 2,
        LEARN_LESSON_AUDIO: 70,
        LEARN_LESSON_VIDEO: 2,
        LEARN_LESSON_LIVE: 50,
        LEARN_LESSON_PDF: 3,
        LEARN_LESSON_TEST: 20,
        LEARN_LESSON_LAB: 30,
        LEARN_LESSON_LECTURE: 40,
        LEARN_LESSON_PURE_TEXT: 55,
        LEARN_LESSON_RES_VIDEO: 60,
        LEARN_LESSON_RES_LINK: 80,
        LEARN_LESSON_FLASH: 41,
        LEARN_LESSON_THIRDRES: 42,
        LESSON_BOOK_TYPE: 110,
        LIVE_STATUS_NOSTART: 1,
        LIVE_STATUS_LIVING: 2,
        LIVE_STATUS_TRANSING: 3,
        LIVE_STATUS_TRANSDONE: 4,
        LIVE_STATUS_END: 5,
        NOTE_COURSE_LESSON: 0,
        NOTE_PLAN_RES: 1,
        NOTE_COURSE: 2,
        NOTE_PLAN: 3,
        NOTE_PLAN_TEXT: 4,
        CONTROLLER_COURSE: 0,
        CONTROLLER_PLAN: 1,
        COURSE_TYPE_901COURSE: 0,
        COURSE_TYPE_PLAN: -1,
        COURSE_TYPE_LIVING: 0,
        COURSE_TYPE_ALL: 30,
        COURSE_TYPE_ANYTIME: 40,
        COURSE_TYPE_BEGINING: 10,
        COURSE_TYPE_UNSTART: 20,
        COURSE_TYPE_FINISHED: 0,
        COURSE_ORDER_BY_HOT: 20,
        COURSE_ORDER_BY_NEW: 10,
        COURSE_ORDER_BY_RPICEDESC: 40,
        COURSE_ORDER_BY_RPICEASC: 30,
        COURSE_ORDER_BY_EVAL: 50,
        COURSE_ORDER_BY_RANKFREE: 60,
        COURSE_ORDER_BY_RANKCHARG: 70,
        PLAN_PURE_TEXT: 30,
        PLAN_URL_RES: 40,
        PLAN_URL_FLASH: 41,
        PLAN_URL_RES_VIDEO: 1,
        PLAN_URL_RES_LINK: 2,
        PLAN_URL_RES_OPEN: 3,
        MY_CLOUD_NOTES: 0,
        MY_STORE_NOTES: 1,
        ACCOUNT_TYPE_PERSON: 0,
        ACCOUNT_TYPE_ORGANIZATION: 5,
        ACCOUNT_TYPE_LECTOR: 10,
        MEMBERROLE_TYPE_LEARNER: "learner",
        MEMBERROLE_TYPE_LECTOR: "lector",
        SNS_TYPE_URS: -1,
        SNS_TYPE_YOUDAO: 1,
        SNS_TYPE_SINA: 2,
        SNS_TYPE_RENREN: 3,
        SNS_TYPE_QQ: 4,
        PAPER_TYPE_ENGLISH_SILIUJI: 10,
        "ANALYSIS＿TYPE_QUESTION": 0,
        "ANALYSIS＿TYPE_MATERIAL": 10,
        "ANALYSIS＿TYPE_SECTION": 20,
        "MATERIAL＿TYPE_PLAINTEXT": 0,
        "MATERIAL＿TYPE_CLICKABLE_TEXT": 1,
        QUESTION_TYPE_SINGLE: 1,
        QUESTION_TYPE_MULTIPLE: 11,
        QUESTION_TYPE_UNCERTAIN: 15,
        QUESTION_TYPE_ANALYSIS: 20,
        QUESTION_TYPE_JUDGE: 25,
        QUESTION_TYPE_OF_FILLBLANK_WITH_ANSWER: 50,
        QUESTION_TYPE_OF_FILLBLANK_NO_ANSWER: 55,
        QUESTION_TYPE_MATERIAL: 60,
        QUESTION_TYPE_WRITING: 30,
        QUESTION_CORRECT_TYPE_UNKNOWN: -10,
        QUESTION_CORRECT_TYPE_RIGHT: 0,
        QUESTION_CORRECT_TYPE_WRONG: 10,
        QUESTION_CORRECT_TYPE_OMIT: 20,
        QUESTION_CORRECT_TYPE_UNSELECTED: 30,
        FEE_VALID_TYPE_OF_FOREVER: 1,
        FEE_VALID_TYPE_OF_DEADLINE: 2,
        FEE_VALID_TYPE_OF_PERIOD: 3,
        COURSE_VALID: 0,
        COURSE_HAS_BOUGHT: 1,
        COURSE_HAS_OFF_LINE: 2,
        COURSE_IN_ORDER: 3,
        COURSE_FREE: 4,
        COURSE_FORBID_ENROLL: 5,
        CATEGORY_TYPE_OUTTER_COURSE: 1,
        CATEGORY_TYPE_OUTTER_PLAN: 2,
        CATEGORY_TYPE_INNER_COURSE: 3,
        CATEGORY_TYPE_INNER_PLAN: 4,
        ALL_COURSEPLAN: -1,
        INNER_ALL_COURSEPLAN: -10,
        RECOMMEND_TYPE_COURSE: 1,
        RECOMMEND_TYPE_SKILL: 2,
        RECOMMEND_TYPE_PLAN: 3,
        ROLE_DATAREPORT_VIEWER: "ROLE_DATAREPORT_VIEWER",
        ROLE_NEWHOMEPAGE_USER: "ROLE_NEWHOMEPAGE_USER",
        LECTOR_TYPE_NORMAL: 10,
        LECTOR_TYPE_USER: 20,
        SKILL_TYPE_PUBLIC: 10,
        SKILL_TYPE_CORP: 30,
        UPLOAD_SIZE_MAX: 4294967296,
        UPLOAD_SIZE_MAX_ATTACHMENT: 2147483648,
        UPLOAD_SIZE_MAX_PDF: 52428800,
        UPLOAD_SIZE_MAX_AUDIO: 104857600,
        UPLOAD_SIZE_MAX_DEFAULT: 20971520,
        UPLOAD_ERROR_LIMITED: 20,
        UPLOAD_ERROR_AUTHFAILED: 30,
        UPLOAD_TOKEN_TYPE_AUDIO: "AUDIO",
        UPLOAD_TOKEN_TYPE_VIDEO: "VIDEO",
        UPLOAD_TOKEN_TYPE_PDF: "PDF",
        UPLOAD_TOKEN_TYPE_REFERENCE: "REFERENCE",
        UPLOAD_TOKEN_TYPE_DEFAULT: "default",
        USE_TYPE_OF_FIXED_PRICE: 10,
        USE_TYPE_OF_DISCOUNT_PRICE: 20,
        USE_TYPE_OF_RATE: 30,
        TARGET_TYPE_OF_ALL: 0,
        TARGET_TYPE_OF_ORGAN: 10,
        TARGET_TYPE_OF_COURSE: 20,
        TYPE_OF_INNER: 1,
        TYPE_OF_OUTTER: 2,
        TALK_VOTE_DIGG: 1,
        TALK_VOTE_POST: 1,
        TALK_VOTE_REPLY: 2,
        TALK_VOTE_COMMENT: 3,
        FORUM_TYPE_ANSWER: 10,
        FORUM_TYPE_COMPOSITE: 20,
        FORUM_TYPE_USER_DEFINE: 30,
        ID_TYPE_SHENFENZHENG: 1,
        ID_TYPE_HUKOUBEN: 2,
        ID_TYPE_HUZHAO: 3,
        ID_TYPE_OTHER: 10,
        PRODUCT_TYPE_YKT_COURSE: 0,
        PRODUCT_TYPE_MOOC: 2,
        PRODUCT_TYPE_YOOC: 3,
        PRODUCT_TYPE_YOOC_FIGHTING: 9,
        PRODUCT_TYPE_YOOC_CERT: 10,
        PRODUCT_TYPE_YOOC_SMARTSPECCERT: 15,
        PRODUCT_TYPE_PRE_MONEY: 18,
        PRODUCT_TYPE_MICRO_PINTUAN_PRE_MONEY: 19,
        PRODUCT_TYPE_PACKAGE: 20,
        PRODUCT_TYPE_SERIES: 25,
        PRODUCT_TYPE_MICRO_SPECIAL: 30,
        PRODUCT_TYPE_OPTIONAL_PACKAGE: 35,
        PRODUCT_TYPE_ALL: 40,
        PRODUCT_TYPE_COUPON: 45,
        CERT_TYPE_CHARGE_NORMAL: 10,
        CERT_TYPE_CHARGE_OUTSTANDING: 11,
        PAYCERT_PRE: 1,
        PAYCERT_CONFIRMSCORE: 2,
        PAYCERT_APPLYCERTEND: 3,
        PAYCERT_CERTSEND: 4,
        UNDETERMINDED_STARTTIME: 32503651201e3,
        UNDETERMINDED_ENDTIME: 32535187201e3,
        AGREGATION_MICRO_SPEC: 1,
        AGREGATION_COURSE_ALBUM: 2,
        COURSECONTACT_TYPE_QQ: 5,
        COURSECONTACT_TYPE_QQGROUP: 1,
        COURSECONTACT_TYPE_WECHAT: 2,
        COURSECONTACT_TYPE_YIXIN: 3,
        COURSECONTACT_TYPE_TEL: 4,
        TYPE_OF_YKT: 0,
        TYPE_OF_YOOC: 3,
        CREATE_ORDER_TYPE_SHOP_CART: 0,
        CREATE_ORDER_TYPE_MICRO: 1,
        CREATE_ORDER_TYPE_AGGREGATION: 1,
        CREATE_ORDER_TYPE_SECKILLING: 2,
        CREATE_ORDER_TYPE_SPECIAL: 3,
        CREATE_ORDER_TYPE_COURSE_PACKAGE: 2,
        CREATE_ORDER_TYPE_OPTIONAL_PACKAGE: 4,
        CREATE_ORDER_TYPE_CERT: 5,
        CREATE_ORDER_TYPE_MICRO_CERT: 6,
        CREATE_ORDER_TYPE_COUPON: 7,
        CREATE_ORDER_TYPE_MICRO_PINTUAN: 8,
        REFUND_STATUS_NOT_REFUNDED: 10,
        REFUND_STATUS_REFUNDING: 20,
        REFUND_STATUS_HAS_REFUNDED: 30,
        REFUND_STATUS_REFUNDED_FAILED: 40,
        QUERY_TRADE_STATUS_ALL: -1,
        QUERY_TRADE_STATUS_PAYING: 1,
        QUERY_TRADE_STATUS_SUCCESS: 2,
        QUERY_TRADE_STATUS_CLOSE: 3,
        TRADE_STATUS_NOT_PAID: 10,
        TRADE_STATUS_HAS_PAID: 20,
        TRADE_STATUS_SUCCESS: 30,
        TRADE_STATUS_CLOSED: 40,
        TERM_VALID: 0,
        TERM_OVER_ALLOW_TIME: 1,
        TERM_ENROLL_EXPIRE: 2,
        TERM_FINISH: 3,
        COURSE_REQUIRED: 0,
        COURSE_OPTIONAL: 1,
        COURSE_ENROLL_ANOTHER_TERM: 2,
        COURSE_ENROLL_OVERTIME: 3,
        COURSE_ENROLL_BUT_EXPIRE: 4,
        COURSE_ENROLL: 10,
        COURSE_BOUGHT_NOT_ENROLL: 11,
        COURSE_ENROLL_EXPIRE: 21,
        COURSE_FINISH: 22,
        COURSE_CLOSED_COURSE: 23,
        COURSE_BOUGHT: 30,
        COURSE_OFF_LINE: 31,
        AGGREGATION_TYPE_MICROSPECIAL: 30,
        AGGREGATION_TYPE_SERIESCOURSES: 25,
        LOAN_STATUS_NOT_LOANED: 10,
        LOAN_STATUS_LOANING: 20,
        LOAN_STATUS_HAS_LOANED: 30,
        LOAN_STATUS_LOAN_FAILED: 40,
        PAY_CHANNEL_NORMAL: 10,
        PAY_CHANNEL_IOS: 20,
        PAY_CHANNEL_PROMOTE: 30,
        TRADE_END_TYPE_TIMEOUT: 10,
        TRADE_END_TYPE_REFUND: 20,
        TRADE_END_TYPE_USER_CANCEL: 30,
        TRADE_END_TYPE_ADMIN_CANCEL: 40,
        TRADE_END_TYPE_OFFLINE_REFUND: 50,
        VIEWPRI_FREE: 10,
        VIEWPRI_NOT_FREE_CAN_PREVIEW: 20,
        VIEWPRI_NOT_FREE_CANNOT_PREVIEW: 30
    };
    i.SMARTSPECCONST = {SPECIALTYPE_REQUIRED: 0, SPECIALTYPE_ELECTIVE: 1, CHECKPOINT_CHECK: 1, CHECKPOINT_NORMAL: 0}
}, "ef610943f997eae84e208bd1668f8379");
I$("21f712564f6eba1d3fceee08b1ccba98", function () {
    var e = window, t = NEJ.O, i = NEJ.P("nej.e"), n = NEJ.P("nej.u"), a = NEJ.P("edu.d"), o = NEJ.P("edu.u");
    o.xk = function (e, t, i) {
        function n(e) {
            return (a ? /^\d+[A-Za-z]*$/ : /^\d+$/).test(e)
        }

        var a = i && i.lexicographical, o = i && i.zeroExtend, s = e.split("."), r = t.split(".");
        if (!s.every(n) || !r.every(n)) return NaN;
        if (o) {
            for (; s.length < r.length;) s.push("0");
            for (; r.length < s.length;) r.push("0")
        }
        if (!a) {
            s = s.map(Number);
            r = r.map(Number)
        }
        for (var c = 0; c < s.length; ++c) {
            if (r.length == c) return 1;
            if (s[c] != r[c]) if (s[c] > r[c]) return 1; else return -1; else ;
        }
        if (s.length != r.length) return -1; else return 0
    }
}, "ef610943f997eae84e208bd1668f8379");
I$("4a72bba4b9eed42a66bf707092def26e", function () {
    var e = window, t = NEJ.O, i = NEJ.P("nej.p"), n = NEJ.P("nej.e"), a = NEJ.P("edu.cms"), o = NEJ.P("edu.u");
    var s = e.isMobilePhone;
    var r = new RegExp("NetEaseEdu.*study; (.*); channel=(.*)", "i"),
        c = new RegExp("NetEaseEdu.*study:(.*);channel=(.*)", "i"),
        d = new RegExp("NetEaseEdu.*EDUMOOC; (.*); channel=(.*)", "i"), _ = new RegExp(".*EDUMOOC/(.*)", "i"),
        l = e.navigator.userAgent;
    o.zk = function () {
        return l.match(r)
    };
    o.Ak = function () {
        return l.match(c)
    };
    o.Dk = function () {
        return l.match(d)
    };
    o.Ek = function () {
        return l.match(_)
    };
    o.Ok = function () {
        return o.zk() || o.Ak()
    };
    o.Rn = function () {
        var e = o.Ak();
        if (null != e) return o.xk(e[1], "3.5.0") >= 0; else return !1
    };
    o.Sn = function () {
        return l.match(r)[1]
    };
    o.Tn = function () {
        return l.match(c)[1]
    };
    o.Un = function (e) {
        return o.Rn() && !e
    };
    o.Pk = function () {
        var e = o.zk(), t = o.Ak(), i = o.Dk(), n = o.Ek();
        if (e || t || i || n) {
            if (null != e) return o.xk(e[1], "2.0.0") >= 0; else if (null != t) return o.xk(t[1], "3.0.0") >= 0; else if (null != i) return o.xk(i[1], "1.2.2") >= 0; else if (null != n) return o.xk(n[1], "1.1.3") >= 0
        } else return !1
    };
    o.Qk = function () {
        if (o.Rk()) return !0; else return o.Sk()
    };
    o.Sk = function () {
        var e = new RegExp("Windows Phone", "i").test(l);
        var t = navigator.userAgent.match(/(iPhone|iPod|Android|BlackBerry|mobile)/);
        return !!t || i.YI["ios"] || i.YI["iPhone"] || i.YI["mobile"] || i.YI["android"] || i.YI["tablet"] || e
    };
    o.Tk = function () {
        var e = l.match(/(ipad)/i);
        return e || i.YI["iPad"]
    };
    o.Rk = function () {
        return "true" == s
    };
    o.Wk = function () {
        var e = /(micromessenger)/i;
        return e.test(navigator.userAgent)
    };
    o.Vn = function () {
        var e = /(weibo)/i;
        return e.test(navigator.userAgent)
    };
    o.Fl = function () {
        var e = /(qq)/i;
        return e.test(navigator.userAgent)
    };
    o.Yk = function (e, t) {
        var n = "";
        if (o.Ok()) {
            if (i.YI["android"]) if (e.lessonId, !1) n = "yktaphone://open.lesson.ykt/" + e.courseId + "_" + e.lessonId; else n = "yktaphone://open.course.ykt/" + e.courseId; else if (e.lessonId) {
                var a = o.Ak();
                if (o.xk(a[1], "3.3.0") >= 0) n = "yktiphone://type=5-&-content=" + e.courseId + "_" + e.lessonId; else n = "yktiphone://type=0-&-content=" + e.courseId
            } else n = "yktiphone://type=0-&-content=" + e.courseId;
            if (o.Xk() >= 10) o.$k(n); else o.SL(n)
        }
    };
    o.SL = function (e) {
        var t = document.createElement("iframe");
        t.setAttribute("style", "display:none;width:0;height:0;position: absolute;top:0;left:0;border:0;height:0;width:0;");
        t.src = e;
        document.body.appendChild(t)
    };
    o.$k = function (e) {
        var t = document.createElement("form");
        document.body.appendChild(t);
        t.method = "post";
        t.action = e;
        t.submit()
    };
    o.Xk = function () {
        var e = navigator.userAgent.toLowerCase(), t;
        if (e.indexOf("like mac os x") > 0) {
            var i = /os [\d._]*/gi;
            var n = e.match(i);
            t = (n + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, ".")
        }
        return parseInt(t, 10)
    };
    o.Zk = function (t, n) {
        var a = "", n = n || {};
        if (i.YI["android"]) if (n.termId && n.courseId) a = "yktaphone://open.course.yoc/" + n.courseId + "_" + n.termId; else if (n.courseId) a = "yktaphone://open.course.ykt/" + n.courseId; else if (n.openUrl) a = "yktaphone://open.url/url=" + n.openUrl; else a = "yktaphone://launch.app"; else if (n.termId && n.courseId) a = "yktiphone://type=6-&-content=" + n.courseId + "_" + n.termId; else if (n.courseId) a = "yktiphone://type=0-&-content=" + n.courseId; else if (n.openUrl) a = "yktiphone://type=-1-&-content=" + n.openUrl; else a = "yktiphone://";
        if (o.Wk()) window.location.href = e.callAppDownloadHref + "?source=fromWeixin&courseId=" + (n.courseId || "") + "&termId=" + (n.termId || ""); else if (o.Vn()) window.location.href = e.callAppDownloadHref + "?source=fromWeibo&courseId=" + (n.courseId || "") + "&termId=" + (n.termId || ""); else if (o.Fl()) window.location.href = e.callAppDownloadHref + "?source=fromQQ&courseId=" + (n.courseId || "") + "&termId=" + (n.termId || ""); else if (i.YI["iphone"]) {
            if (o.Xk() > 8) window.location.href = a; else {
                var s = document.createElement("iframe");
                s.setAttribute("style", "width:0;height:0;display:none");
                s.src = a;
                document.body.appendChild(s);
                s.parentNode.removeChild(s)
            }
            if ("fromCallApp" == t) setTimeout(function () {
                window.location.href = e.callAppDownloadHref + "?source=fromCallApp&courseId=" + (n.courseId || "") + "&termId=" + (n.termId || "")
            }, 2e3)
        } else if (i.YI["android"]) {
            var s = document.createElement("iframe");
            s.setAttribute("style", "width:0;height:0;display:none");
            s.src = a;
            var r = new Date;
            document.body.appendChild(s);
            s.parentNode.removeChild(s);
            setTimeout(function () {
                var e = new Date;
                if (e - r < 815) window.location.href = "//study.163.com/appDownload.htm?from=AppCallUp"
            }, 2e3)
        }
    };
    o.cl = function (t, i) {
        if (o.Pk() && e.YixinJSBridge) e.YixinJSBridge.call("toPay", {
            productType: t.productType || 0,
            productId: t.productId || 0,
            ids: t.ids || []
        }, function (e) {
            i && i(e)
        })
    };
    o.Wn = function (t, i) {
        if (o.Pk() && e.YixinJSBridge) e.YixinJSBridge.call("switchAccount", {returnUrl: t.returnUrl || "https://study.163.com"}, function (e) {
            i && i(e)
        })
    };
    o.Xn = function (e, t, i, n) {
        o.cl({productType: e, productId: t, ids: i}, n)
    };
    o.Yn = function (e, t, i, n) {
        o.cl({productType: e, productId: t, ids: i}, n)
    };
    o.Zn = function () {
        if (o.zk()) return o.xk(o.Sn(), "2.5.0") >= 0; else if (o.Ak()) return o.xk(o.Tn(), "3.6.0") >= 0;
        return !1
    };
    o.$n = function (e, t) {
        if (o.zk()) return o.xk(o.Sn(), e) >= 0; else if (o.Ak()) return o.xk(o.Tn(), t) >= 0;
        return !1
    };
    o.zM = function (e, t) {
        if (e) {
            var i = {videoUrl: e, videoTitle: t};
            if (window.YixinJSBridge) window.YixinJSBridge.call("playVideo", i, function (e) {
                alert("播放视频")
            }); else alert("YixinJSBridge不存在！")
        } else alert("videoUrl不存在！")
    };
    a.callAppDownload = o.Zk
}, "ef610943f997eae84e208bd1668f8379", "21f712564f6eba1d3fceee08b1ccba98");
I$("151562add01838325f04dae3569223d6", function () {
    var e = window, t = NEJ.O, i = NEJ.P("nej.p"), n = NEJ.P("nej.e"), a = NEJ.P("nej.v"), o = NEJ.P("nej.u"),
        s = NEJ.P("nej.j"), r = NEJ.P("edu.d"), c = NEJ.P("edu.u");
    c.Nr = function (e, t, i) {
        var a = "", o = c.zn() ? "已登录" : "未登录", s = n.lc(t, "name"), r = t.href || n.lc(t, "href"), d = [o];
        switch (i) {
            case 1:
                a = n.lc(t, "index");
                break;
            case 2:
                a = t.innerText;
                break;
            default:
                a = i
        }
        if (s) d.push(s);
        if (r) d.push(r);
        c.bj(e, a, d.join("_"))
    };
    c.Or = function (t, i, a) {
        var o = "", s = c.zn() ? "已登录" : "未登陆", r = n.lc(i, "name"), d = i.href || n.lc(i, "href"), _ = e.location.href;
        Pr = {};
        Pr["是否登陆"] = s;
        switch (a) {
            case 1:
                o = n.lc(i, "index");
                break;
            case 2:
                o = i.innerText;
                break;
            default:
                o = a
        }
        if (r) Pr["位置"] = r;
        if (d) Pr["跳转url"] = d;
        Pr["当前url"] = _;
        c.bj(t, o, JSON.stringify(Pr))
    };
    c.Qr = function (e, t) {
        var i;
        if (!e) return "";
        i = e.replace(/^https?:/, t ? t + ":" : "");
        return i
    };
    c.Rr = function () {
        var e = document.body.clientHeight;
        s.hf("_parent", {data: {height: e}, origin: "*"})
    };
    c.Sr = function (e) {
        a.Dc(window, "message");
        a.Cc(window, "message", function (t) {
            if (t.origin && t.origin.indexOf("//cp.study.163.com") !== -1) e.onGetAction && e.onGetAction(t)
        }.RI(this))
    };
    c.Tr = function (e) {
        s.hf("_parent", {data: e, origin: "*"})
    };
    c.Ur = function () {
        var e = window.location;
        var t = e.search;
        if (t.indexOf("utm_source") !== -1) return e.href; else return null
    };
    c.hK = function (e, t, i, n) {
        for (var a in t) if ((!n || t.hasOwnProperty(a)) && (i || void 0 == e[a])) e[a] = t[a];
        return e
    }
}, "393c172195c9280b0b17edb6219129db", "b7f78579274504e6e01cdbe96bab7e2c", "c6dc872bd42834f642dbd3e56c6d4abe", "0982d755eb6bb6c1aa1a41efb7993331", "5d62cf99b9da368aa8efce0639b72f38", "6ae3e0c14a929ad034cf3d347aca315f", "4a72bba4b9eed42a66bf707092def26e", "f812a3948bf6b0b0b7ef1b94315481da");
I$("30fff14c1251707b1e2f32384bf852b0", function (e, t, i, n, a, o, s, r) {
    var c;
    a.tN = t.eK();
    c = a.tN.hK(i.Ed);
    c.Id = function (e) {
        this.iK(e);
        this.ny = e.to || o;
        this.oy = e.from || {};
        this.py = Math.max(0, parseInt(e.delay) || 0)
    };
    c.Md = function () {
        this.iK();
        this.ld();
        if (this.qy) {
            window.clearTimeout(this.qy);
            delete this.qy
        }
        delete this.ny;
        delete this.oy
    };
    c.ry = function (e) {
        if (this.oy) {
            if (("" + e).indexOf(".") >= 0) e = +new Date;
            if (!this.uN(e)) this.mL = n.requestAnimationFrame(this.ry.RI(this)); else this.ld()
        }
    };
    c.uN = s;
    c.ty = function () {
        var e = function () {
            this.qy = window.clearTimeout(this.qy);
            this.oy.time = +new Date;
            this.mL = n.requestAnimationFrame(this.ry.RI(this))
        };
        return function () {
            this.qy = window.setTimeout(e.RI(this), this.py)
        }
    }();
    c.ld = function () {
        this.mL = n.cancelAnimationFrame(this.mL);
        this.kd("onstop")
    };
    if (!0) e.copy(e.P("nej.ut"), a);
    return a
}, "38fcb21d4f4bc66eeed3795a8cc8504b", "5c3b96a99f4affd48bfbcdc2f37ab7fc", "ef610943f997eae84e208bd1668f8379", "561958370f53f3adbd4bae38a9270b41");
I$("800dcdcb17f634d1052dc3da7253f3de", function (e, t, i, n, a, o, s, r) {
    var c;
    a.uy = t.eK();
    c = a.uy.hK(n.tN);
    c.Id = function (e) {
        this.iK(e);
        this.vy = e.duration || 200;
        this.wy = 1 / (200 * this.vy);
        this.xy(e.timing);
        this.zy()
    };
    c.Md = function () {
        this.iK();
        delete this.Ay;
        delete this.By
    };
    c.xy = function () {
        var e = /^cubic\-bezier\((.*?)\)$/i, t = /\s*,\s*/i, n = {
            linear: [0, 0, 1, 1],
            ease: [.25, .1, .25, 1],
            easein: [.42, 0, 1, 1],
            easeout: [0, 0, .58, 1],
            easeinout: [0, 0, .58, 1]
        };
        var a = function (e, t, i) {
            i[t] = parseFloat(e)
        };
        return function (o) {
            o = (o || "").toLowerCase();
            this.Ay = n[o];
            if (e.test(o)) {
                this.Ay = RegExp.$1.split(t);
                i.oJ(this.Ay, a)
            }
            if (!this.Ay) this.Ay = n.ease
        }
    }();
    c.zy = function () {
        var e = this.Ay, t = 3 * e[0], i = 3 * (e[2] - e[0]) - t, n = 1 - t - i, a = 3 * e[1],
            o = 3 * (e[3] - e[1]) - a, s = 1 - a - o;
        this.By = {ax: n, ay: s, bx: i, by: o, cx: t, cy: a}
    };
    c.Cy = function () {
        var e = function (e, t) {
            return ((t.ax * e + t.bx) * e + t.cx) * e
        };
        var t = function (e, t) {
            return ((t.ay * e + t.by) * e + t.cy) * e
        };
        var i = function (e, t) {
            return (3 * t.ax * e + 2 * t.bx) * e + t.cx
        };
        var n = function (t, n, a) {
            var o, s, r, c, d, _;
            for (r = t, _ = 0; _ < 8; _++) {
                c = e(r, a) - t;
                if (Math.abs(c) < n) return r;
                d = i(r, a);
                if (Math.abs(d) < 1e-6) break;
                r -= c / d
            }
            o = 0;
            s = 1;
            r = t;
            if (r < o) return o;
            if (r > s) return s;
            for (; o < s;) {
                c = e(r, a);
                if (Math.abs(c - t) < n) return r;
                if (t > c) o = r; else s = r;
                r = .5 * (s - o) + o
            }
            return r
        };
        return function (e) {
            return t(n(e / this.vy, this.wy, this.By), this.By)
        }
    }();
    c.uN = function (e) {
        var t = e - this.oy.time, n = this.Cy(t), a = i.uJ(this.oy.offset * (1 - n) + this.ny.offset * n, 2), o = !1;
        if (t >= this.vy) {
            a = this.ny.offset;
            o = !0
        }
        this.kd("onupdate", {offset: 1 * a});
        return o
    };
    c.ld = function () {
        this.kd("onupdate", {offset: this.ny.offset});
        this.iK()
    };
    if (!0) e.copy(e.P("nej.ut"), a);
    return a
}, "38fcb21d4f4bc66eeed3795a8cc8504b", "5c3b96a99f4affd48bfbcdc2f37ab7fc", "7473c7d0556819b21bec58b99f475b04", "30fff14c1251707b1e2f32384bf852b0");
I$("06e8c272b10e2fe3eb517a52403d160e", function (e, t, i, n, a, o, s, r) {
    var c;
    a.Dy = t.eK();
    c = a.Dy.hK(n.uy);
    c.Id = function (e) {
        e = i.KJ({}, e);
        e.timing = "easein";
        this.iK(e)
    };
    if (!0) e.copy(e.P("nej.ut"), a);
    return a
}, "38fcb21d4f4bc66eeed3795a8cc8504b", "5c3b96a99f4affd48bfbcdc2f37ab7fc", "7473c7d0556819b21bec58b99f475b04", "800dcdcb17f634d1052dc3da7253f3de");
I$("59ef31d2fec280072e3d6d1b5eec02b4", function () {
    var e = NEJ.O, t = window, i = NEJ.P("nej.e"), n = NEJ.P("nej.u"), a = NEJ.P("edu.m"), o = NEJ.P("edu.u"),
        s = NEJ.P("edu.cms");
    var r, c, d;
    o.Ey = function (e) {
        return e + n.HJ(2)
    };
    var _ = function () {
        r = i.Lc(i.Ad("jst-edu-ui-loading"));
        document.body.appendChild(r);
        c = i.RJ("loadingMask");
        d = i.RJ("loadingPb")
    };
    s.showLoading = o.showLoading = function (e) {
        if (!r) _();
        e = e || !1;
        if (!e) o.BM(c);
        o.BM(d)
    };
    s.hideLoading = o.hideLoading = function () {
        o.mp(c);
        o.mp(d)
    };
    s.showToastTips = o.showToastTips = function (n) {
        var a = o.Ey("toasttips"), n = n || e, s = n.content || "请输入提示的内容", r = n.minutes || 1e3,
            c = "type" + (n.type || 1);
        Fy = n.myStyle || "";
        var d = i.Lc(i.Ad("jst-edu-ui-tips", {tipId: a, content: s, type: c, className: Fy}));
        document.body.appendChild(d);
        var _;
        var l = {
            from: {offset: 100, velocity: 10}, to: {offset: 0}, duration: 500, onupdate: function (e) {
                d.style.opacity = e.offset / 100
            }, onstop: function () {
                _ = nej.ut.Dy.Jd(_);
                d.parentNode.removeChild(d)
            }
        };
        t.setTimeout(function () {
            _ = nej.ut.Dy.Fd(l);
            _.ty()
        }.RI(this), r)
    }
}, "c6dc872bd42834f642dbd3e56c6d4abe", "151562add01838325f04dae3569223d6", "06e8c272b10e2fe3eb517a52403d160e");
I$("cf31da9ce7cb3215fa5bd6392b6dd40c", function (e, t, i, n, a, o, s, r, c, d) {
    var _;
    s.ao = t.eK();
    _ = s.ao.hK(a.Ed);
    _.gK = function () {
        this.iK();
        i.Jc();
        this.bo();
        this.co()
    };
    _.Id = function (e) {
        this.iK(e);
        this.eo(e.clazz);
        this.fo(e.dataset);
        this.ho(e.parent)
    };
    _.Md = function () {
        this.iK();
        this.io();
        this.jo();
        delete this.Zf;
        i.Fc(this.Ih);
        i.Wc(this.Ih, this.ko);
        delete this.ko
    };
    _.bo = c;
    _.co = function () {
        if (!this.lo) this.mo();
        this.Ih = o.Hf(this.lo);
        if (!this.Ih) this.Ih = i.Ac("div", this.no);
        i.Kc(this.Ih, this.no)
    };
    _.mo = c;
    _.eo = function (e) {
        this.ko = e || "";
        i.Kc(this.Ih, this.ko)
    };
    _.fo = function (e) {
        this.oo = n.KJ({}, e);
        i.lc(this.Ih, this.oo)
    };
    _.jo = function () {
        n.lJ(this.oo, function (e, t) {
            i.lc(this.Ih, t, "")
        }, this)
    };
    _.po = function () {
        if (this.no) {
            var e = this.no.split(/\s+/);
            i.Kc(this.Zf, e.pop() + "-parent")
        }
    };
    _.io = function () {
        if (this.no) {
            var e = this.no.split(/\s+/);
            i.Wc(this.Zf, e.pop() + "-parent")
        }
    };
    _.qo = function () {
        return this.Ih
    };
    _.ho = function (e) {
        if (this.Ih) {
            this.io();
            if (n.bJ(e)) this.Zf = e(this.Ih); else {
                this.Zf = i.RJ(e);
                if (this.Zf) this.Zf.appendChild(this.Ih)
            }
            this.po()
        }
    };
    _.ro = function () {
        if (this.Zf && this.Ih && this.Ih.parentNode != this.Zf) this.Zf.appendChild(this.Ih)
    };
    _.Lg = function () {
        i.Fc(this.Ih)
    };
    if (!0) e.copy(e.P("nej.ui"), s);
    return s
}, "38fcb21d4f4bc66eeed3795a8cc8504b", "5c3b96a99f4affd48bfbcdc2f37ab7fc", "a5433a940b3ce4d5d7c2ae8a4f7ff1c9", "7473c7d0556819b21bec58b99f475b04", "ef610943f997eae84e208bd1668f8379", "c6dc872bd42834f642dbd3e56c6d4abe");
I$("dcf7eb695d2f0a7c2c07951e2185a179", function (e, t, i, n, a, o, s, r, c) {
    var d;
    o.so = t.eK();
    d = o.so.hK(a.ao);
    d.Id = function (e) {
        this.iK(e);
        this.Wd("oncontentready", e.oncontentready || this.uo.RI(this));
        this.AM = !!e.nohack;
        this.wo = !!e.destroyable;
        this.xo(e.content)
    };
    d.Md = function () {
        this.kd("onbeforerecycle");
        this.iK();
        this.yo();
        this.xo("");
        i.Rc(this.Ih, {top: "", left: ""})
    };
    d.uo = r;
    d.zo = r;
    d.yo = function () {
        i.Fc(this.Ih);
        if (this.Qb) {
            i.zc(this.Ih);
            delete this.Qb
        }
    };
    d.xo = function (e) {
        if (this.Ih && this.Ao && null != e) {
            e = e || "";
            n.cJ(e) ? this.Ao.innerHTML = e : this.Ao.appendChild(e);
            this.kd("oncontentready", this.Ao)
        }
    };
    d.Bo = function (e) {
        var t = e.top;
        if (null != t) {
            t += "px";
            i.Sc(this.Ih, "top", t);
            i.Sc(this.Qb, "top", t)
        }
        var t = e.left;
        if (null != t) {
            t += "px";
            i.Sc(this.Ih, "left", t);
            i.Sc(this.Qb, "left", t)
        }
    };
    d.ro = function () {
        i.Sc(this.Ih, "visibility", "hidden");
        this.iK();
        this.zo();
        i.Sc(this.Ih, "visibility", "");
        if (!this.AM) this.Qb = i.yc(this.Ih)
    };
    d.Lg = function () {
        this.wo ? this.Jd() : this.yo()
    };
    if (!0) e.copy(e.P("nej.ui"), o);
    return o
}, "38fcb21d4f4bc66eeed3795a8cc8504b", "5c3b96a99f4affd48bfbcdc2f37ab7fc", "a5433a940b3ce4d5d7c2ae8a4f7ff1c9", "7473c7d0556819b21bec58b99f475b04", "cf31da9ce7cb3215fa5bd6392b6dd40c");
I$("195b94bb36b77ca2a62cb01ba812bc5a", function (e, t, i, n, a, o, s, r, c, d) {
    var _;
    s.Co = t.eK();
    _ = s.Co.hK(a.ao);
    _.Id = function (e) {
        this.Do();
        this.iK(this.Eo(e));
        this.Fo.onbeforerecycle = this.Jd.RI(this);
        this.Go = this.Ho()
    };
    _.Md = function () {
        this.kd("onbeforerecycle");
        this.iK();
        delete this.Fo;
        i.Fc(this.Ih);
        var e = this.Go;
        if (e) {
            delete this.Go;
            e.Jd()
        }
    };
    _.Ho = c;
    _.Eo = function (e) {
        var t = {};
        n.jJ(e, function (e, i) {
            this.Fo.hasOwnProperty(i) ? this.Fo[i] = e : t[i] = e
        }, this);
        return t
    };
    _.Do = function () {
        this.Fo = {clazz: "", parent: null, content: this.Ih, destroyable: !1, oncontentready: null, nohack: !1}
    };
    _.ro = function () {
        if (this.Go) this.Go.ro();
        this.kd("onaftershow")
    };
    _.Lg = function () {
        if (this.Go) this.Go.Lg()
    };
    if (!0) e.copy(e.P("nej.ui"), s);
    return s
}, "38fcb21d4f4bc66eeed3795a8cc8504b", "5c3b96a99f4affd48bfbcdc2f37ab7fc", "a5433a940b3ce4d5d7c2ae8a4f7ff1c9", "7473c7d0556819b21bec58b99f475b04", "cf31da9ce7cb3215fa5bd6392b6dd40c", "dcf7eb695d2f0a7c2c07951e2185a179");
I$("aef0b5e865a9c0182d0aed266cc48816", ".#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(#<blankimage>);}");
I$("c51fd598579bae2699f3851b73b39204", function (e, t, i, n, a, o, s, r, c, d, _) {
    var l, u = n.Ic(s, {blankimage: i.Db});
    r.Io = t.eK();
    l = r.Io.hK(o.ao);
    l.Id = function (e) {
        this.iK(e);
        var t = e.content || "&nbsp;";
        a.cJ(t) ? this.Ih.innerHTML = t : this.Ih.appendChild(t)
    };
    l.Md = function () {
        this.iK();
        this.Ih.innerHTML = "&nbsp;"
    };
    l.bo = function () {
        this.no = u
    };
    l.ro = function () {
        n.xc(this.Ih);
        this.iK()
    };
    if (!0) e.copy(e.P("nej.ui"), r);
    return r
}, "38fcb21d4f4bc66eeed3795a8cc8504b", "5c3b96a99f4affd48bfbcdc2f37ab7fc", "1b005a7aa950f4fc021ca0593fd5e0f9", "a5433a940b3ce4d5d7c2ae8a4f7ff1c9", "7473c7d0556819b21bec58b99f475b04", "cf31da9ce7cb3215fa5bd6392b6dd40c", "aef0b5e865a9c0182d0aed266cc48816");
I$("40e0dd625ef156115ae7e7f317b6b55d", function (e, t, i, n, a, o, s, r, c, d) {
    o.Jo = t.eK();
    d = o.Jo.hK(a.Ed);
    d.Id = function (e) {
        this.iK(e);
        this.Ko = !!e.overflow;
        this.Ih = i.RJ(e.body);
        this.Lo = i.RJ(e.mbar) || this.Ih;
        this.Mo = i.RJ(e.view) || i.qc();
        this.No = parseInt(e.direction) || 0;
        this.Td([[document, "mouseup", this.Oo.RI(this)], [document, "mousemove", this.Po.RI(this)], [this.Lo, "mousedown", this.Qo.RI(this)]])
    };
    d.Md = function () {
        this.iK();
        this.Oo();
        delete this.Ih;
        delete this.Lo;
        delete this.Mo
    };
    d.Ro = function () {
        return {x: this.Mo.clientWidth - this.Ih.offsetWidth, y: this.Mo.clientHeight - this.Ih.offsetHeight}
    };
    d.Qo = function (e) {
        n.ld(e);
        if (!this.So) {
            this.So = {x: n._J(e), y: n.qd(e)};
            this.To = this.Ro()
        }
    };
    d.Po = function (e) {
        if (this.So) {
            n.ld(e);
            var t = {x: n._J(e), y: n.qd(e)};
            var a = t.x - this.So.x, o = t.y - this.So.y, s = parseInt(i.vc(this.Ih, "top")) || 0,
                r = parseInt(i.vc(this.Ih, "left")) || 0, c = {top: s + o, left: r + a};
            this.So = t;
            this.Bo(c)
        }
    };
    d.Oo = function (e) {
        if (this.So) {
            delete this.To;
            delete this.So;
            this.kd("ondragend", this.Uo())
        }
    };
    d.Vo = function (e) {
        if (!this.Ko) {
            var t = this.To || this.Ro();
            e.top = Math.min(t.y, Math.max(0, e.top));
            e.left = Math.min(t.x, Math.max(0, e.left))
        }
    };
    d.Bo = function (e) {
        e.top = Math.round(e.top);
        e.left = Math.round(e.left);
        this.Vo(e);
        this.kd("onbeforechange", e);
        this.Vo(e);
        var t = this.Ih.style;
        if (0 == this.No || 2 == this.No) t.top = e.top + "px";
        if (0 == this.No || 1 == this.No) t.left = e.left + "px";
        this.kd("onchange", e)
    };
    d.Uo = function () {
        return {left: parseInt(i.vc(this.Ih, "left"), 10) || 0, top: parseInt(i.vc(this.Ih, "top"), 10) || 0}
    };
    o.Wo = o.Jo;
    if (!0) e.copy(e.P("nej.ut"), o);
    return o
}, "38fcb21d4f4bc66eeed3795a8cc8504b", "5c3b96a99f4affd48bfbcdc2f37ab7fc", "a5433a940b3ce4d5d7c2ae8a4f7ff1c9", "c2319fe81ae54f0df799a059ee6679e7", "ef610943f997eae84e208bd1668f8379");
I$("56d6f31ff53b72eebbd14c0d92a9f8fb", ".#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}\n.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}\n.#<uispace> .zcnt{padding:10px 5px;}\n.#<uispace> .zttl{margin-right:20px;text-align:left;}\n.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}\n");
I$("21281f93bd680b9c4555b7d3344427d8", '<div>\n  <div class="zbar"><div class="zttl">标题</div></div>\n  <div class="zcnt"></div>\n  <span class="zcls" title="关闭窗体">×</span>\n</div>');
I$("d90adb587c024c45156b3e418df32a4f", function (e, t, i, n, a, o, s, r, c, d, _, l, u, h, f) {
    var p = i.Ic(d), m = c.Gf(_), g;
    l.Xo = t.eK();
    g = l.Xo.hK(o.so);
    g.gK = function () {
        this.Yo = {};
        this.Zo = {onchange: this.Po.RI(this)};
        this.iK()
    };
    g.Id = function (e) {
        this.iK(e);
        this.$o(e.mask);
        this.ap(e.align);
        this.bp(e.title);
        if (e.draggable) this.dp = r.Wo.Fd(this.Zo)
    };
    g.Md = function () {
        this.iK();
        delete this.ep;
        delete this.fp;
        if (this.gp) {
            this.gp.Jd();
            delete this.gp
        }
        if (this.dp) {
            this.dp.Jd();
            delete this.dp
        }
    };
    g.bo = function () {
        this.no = p;
        this.lo = m
    };
    g.co = function () {
        this.iK();
        var e = i.hc(this.Ih);
        this.Ao = e[1];
        this.Zo.mbar = e[0];
        this.Zo.body = this.Ih;
        n.Cc(e[2], "mousedown", this.hp.RI(this));
        n.Cc(this.Zo.mbar, "mousedown", this.Qo.RI(this));
        this.jp = i.hc(this.Zo.mbar)[0]
    };
    g.hp = function (e) {
        n.ld(e);
        this.kd("onclose");
        this.Lg()
    };
    g.Qo = function (e) {
        n.kd(document, "click")
    };
    g.Po = function (e) {
        if (this.Qb) i.Rc(this.Qb, {top: e.top + "px", left: e.left + "px"})
    };
    g.zo = function () {
        var e = [function () {
            return 0
        }, function (e, t, i) {
            return Math.max(0, e[i] + t[i] / 2)
        }, function (e, t, i) {
            return e[i] + t[i]
        }], t = ["left", "top"];
        return function () {
            var n = {}, o = this.Ih.style, s = i.qc(), r = {left: s.scrollLeft, top: s.scrollTop},
                c = {left: s.clientWidth - this.Ih.offsetWidth, top: s.clientHeight - this.Ih.offsetHeight};
            a.oJ(t, function (t, i) {
                var a = e[this.ep[i]];
                if (a) n[t] = a(r, c, t)
            }, this);
            this.Bo(n)
        }
    }();
    g.kp = function () {
        if (!this.gp) {
            if (!this.fp) return;
            this.Yo.parent = this.Zf;
            this.gp = this.fp.Fd(this.Yo)
        }
        this.gp.ro()
    };
    g.yo = function () {
        if (this.gp) this.gp.Lg();
        this.iK()
    };
    g.$o = function (e) {
        if (!e) this.fp = null; else {
            if (e instanceof s.Io) {
                this.gp = e;
                return
            }
            if (a.bJ(e)) {
                this.fp = e;
                return
            }
            this.fp = s.Io;
            if (a.cJ(e)) this.Yo.clazz = e
        }
    };
    g.bp = function (e, t) {
        if (this.jp) {
            var i = !t ? "innerText" : "innerHTML";
            this.jp[i] = e || "标题"
        }
        return this
    };
    g.ap = function () {
        var e = /\s+/, t = {left: 0, center: 1, right: 2, auto: 3}, i = {top: 0, middle: 1, bottom: 2, auto: 3};
        return function (n) {
            this.ep = (n || "").split(e);
            var a = t[this.ep[0]];
            if (null == a) a = 1;
            this.ep[0] = a;
            var a = i[this.ep[1]];
            if (null == a) a = 1;
            this.ep[1] = a;
            return this
        }
    }();
    g.ro = function () {
        this.iK();
        this.kp();
        return this
    };
    if (!0) e.copy(e.P("nej.ui"), l);
    return l
}, "38fcb21d4f4bc66eeed3795a8cc8504b", "5c3b96a99f4affd48bfbcdc2f37ab7fc", "a5433a940b3ce4d5d7c2ae8a4f7ff1c9", "c2319fe81ae54f0df799a059ee6679e7", "7473c7d0556819b21bec58b99f475b04", "dcf7eb695d2f0a7c2c07951e2185a179", "c51fd598579bae2699f3851b73b39204", "40e0dd625ef156115ae7e7f317b6b55d", "c6dc872bd42834f642dbd3e56c6d4abe", "56d6f31ff53b72eebbd14c0d92a9f8fb", "21281f93bd680b9c4555b7d3344427d8");
I$("efdc042226c831ea20f0db225a7fe1b7", function (e, t, i, n, a, o, s, r) {
    var c;
    a.lp = t.eK();
    c = a.lp.hK(i.Co);
    c.Ho = function () {
        return n.Xo.Fd(this.Fo)
    };
    c.Do = function () {
        this.iK();
        this.Fo.mask = null;
        this.Fo.title = "标题";
        this.Fo.align = "";
        this.Fo.draggable = !1;
        this.Fo.onclose = null
    };
    if (!0) e.copy(e.P("nej.ui"), a);
    return a
}, "38fcb21d4f4bc66eeed3795a8cc8504b", "5c3b96a99f4affd48bfbcdc2f37ab7fc", "195b94bb36b77ca2a62cb01ba812bc5a", "d90adb587c024c45156b3e418df32a4f");
I$("dffcff8400e0288031e6ac69c47be762", function (e) {
    return e
}, "efdc042226c831ea20f0db225a7fe1b7");
I$("d62f95b9c6f18a551a036c8ec75d2d82", function () {
    var e = NEJ.P, t = e("nej.e"), i = e("nej.v"), n = e("nej.ui"), a = e("edu.u"), o, s;
    a.Xo = NEJ.C();
    o = a.Xo.hK(n.lp);
    s = a.Xo.rK;
    a.Xo.Qp = function (e) {
        var t = a.Xo.Fd(e);
        t.ro()
    };
    o.Id = function (e) {
        e = e || {};
        e.parent = e.parent || document.body;
        e.mask = e.mask || void 0 == e.mask ? this.Rp = n.Io.Fd({
            parent: e.parent,
            clazz: "m-com-mask " + (e.maskClazz || "")
        }) : !1;
        e.draggable = void 0 == e.draggable ? !0 : !!e.draggable;
        e.destroyable = !0;
        e.title = e.title || "标题";
        if (e.mask) {
            e.clazz = "m-basewin m-winmark " + (e.clazz || "");
            if (!e.maskClickNotHidden) this.Td([[this.Rp.qo(), "click", this.Lg.RI(this)]])
        } else e.clazz = "m-basewin " + (e.clazz || "");
        this.kK(e);
        if (this.Ih.parentNode && this.Ih.parentNode.parentNode) {
            var i = t.mc(this.Ih.parentNode.parentNode, "zcls")[0];
            i.title = "关闭";
            if (e.closeBtnHidden) a.mp(i); else a.BM(i)
        }
    };
    o.Md = function () {
        if (this.Rp) this.Rp = n.Io.Jd(this.Rp);
        this.lK()
    }
}, "dffcff8400e0288031e6ac69c47be762", "393c172195c9280b0b17edb6219129db", "c51fd598579bae2699f3851b73b39204");
I$("a070f05a615508c0ad002de3785fc8fb", function (e, t, i, n) {
    e.sL = function (e) {
        return localStorage.getItem(e)
    };
    e.tL = function (e, t) {
        localStorage.setItem(e, t)
    };
    e.uL = function (e) {
        localStorage.removeItem(e)
    };
    e.vL = function () {
        localStorage.clear()
    };
    e.wL = function () {
        (document.onstorageready || i)()
    };
    e.gi = function () {
        return !0
    };
    return e
});
I$("9a013627852cbc9e953bb2021b665bd9", function (e, t, i, n, a, o, s) {
    if ("trident" === e.$I.engine && e.$I.release <= "3.0") I$("fd7b2fbeb9f18a7a7e4a66302389161f", function (e, n) {
        var a;
        var o = function () {
            if (!a) n.qL({
                hidden: !0,
                src: e.RJ("storage.swf"),
                params: {AllowScriptAccess: "sameDomain"},
                onready: function (e) {
                    if (!e) console.log("flash for localStorage unavailable"); else {
                        a = e;
                        a.initStorage("nej-storage")
                    }
                    t.kd(document, "storageready")
                }
            })
        };
        i.sL = function (e) {
            if (a) return a.getItem(e)
        };
        i.tL = function (e, t) {
            if (a) a.setItem(e, t)
        };
        i.uL = function (e) {
            if (a) a.removeItem(e)
        };
        i.vL = function () {
            if (a) a.clear()
        };
        i.wL = function () {
            o()
        };
        i.gi = function () {
            return !!a
        }
    }, "2af23932d9465d8562094044caec1a71", "7e02e8856f307687c6621fbb05f05a3c");
    return i
}, "f3ab479b168ebebfb3a24e1000f7236e", "c2319fe81ae54f0df799a059ee6679e7", "a070f05a615508c0ad002de3785fc8fb");
I$("6e08e0adcd55f591a3d79d5a95523a75", function (e, t, i, n, a, o, s, r, c, d) {
    var _ = {};
    s.hi = function () {
        var e = !1;
        return function () {
            if (!e) {
                e = !0;
                var n = function () {
                    var e = function (e, t, i) {
                        o.tL(t, JSON.stringify(e));
                        delete i[t]
                    };
                    return function () {
                        t.jJ(_, e)
                    }
                }();
                i.Cc(document, "storageready", n);
                o.wL()
            }
        }
    }();
    s.xL = function (e, t) {
        s.hi();
        var i = JSON.stringify(t);
        try {
            o.tL(e, i)
        } catch (n) {
            console.error(n.message);
            console.error(n)
        }
        if (i != o.sL(e)) _[e] = t
    };
    s.ki = function (e) {
        s.hi();
        var t = JSON.parse(o.sL(e) || "null");
        return null == t ? _[e] : t
    };
    s.yL = function (e, t) {
        var i = s.ki(e);
        if (null == i) {
            i = t;
            s.xL(e, i)
        }
        return i
    };
    s.zL = function (e) {
        s.hi();
        delete _[e];
        o.uL(e)
    };
    s.oi = function () {
        var e = function (e, t, i) {
            delete i[t]
        };
        return function () {
            s.hi();
            t.jJ(_, e);
            o.vL()
        }
    }();
    n.Yd.Fd({
        element: document, event: "storageready", oneventadd: function () {
            if (o.gi()) i.kd(document, "storageready")
        }
    });
    if (!0) e.copy(e.P("nej.j"), s);
    return s
}, "38fcb21d4f4bc66eeed3795a8cc8504b", "7473c7d0556819b21bec58b99f475b04", "c2319fe81ae54f0df799a059ee6679e7", "9773b0950cb0e9671f7335940a0ac586", "92a3385ab93bcc9e9d9fcf6f5289e1c4", "9a013627852cbc9e953bb2021b665bd9");
I$("266e05c31fc4a384e9a244cdaf2264b8", function (e, t, i, n, a, o, s, r, c) {
    var d, _ = "dat-" + +new Date;
    o.AL = t.eK();
    d = o.AL.hK(n.Ed);
    d.gK = function () {
        this.iK();
        this.Zd = this.constructor[_];
        if (!this.Zd) {
            this.Zd = {};
            this.Zd[_ + "-l"] = {};
            this.constructor[_] = this.Zd
        }
    };
    d.Md = function () {
        this.qi();
        this.iK()
    };
    d.ri = function (e) {
        return this.Zd[e]
    };
    d.BL = function (e, t) {
        this.Zd[e] = t
    };
    d.CL = function (e, t) {
        var i = this.ri(e);
        if (null == i) {
            i = t;
            this.BL(e, i)
        }
        return i
    };
    d.vi = function (e) {
        if (null == e) i.jJ(this.Zd, function (e, t) {
            if (t != _ + "-l") this.vi(t)
        }, this); else delete this.Zd[e]
    };
    d.wi = function (e) {
        return a.zL(e)
    };
    d.yi = function (e) {
        return a.ki(e)
    };
    d.zi = function (e, t) {
        a.xL(e, t)
    };
    d.Ai = function (e, t) {
        var i = this.Bi(e);
        if (null == i) {
            i = t;
            this.Ci(e, i)
        }
        return i
    };
    d.Bi = function (e) {
        var t = this.ri(e);
        if (null != t) return t;
        t = this.yi(e);
        if (null != t) this.BL(e, t);
        return t
    };
    d.Ci = function (e, t) {
        this.zi(e, t);
        this.BL(e, t)
    };
    d.Di = function (e) {
        if (null == e) i.jJ(this.Zd, function (e, t) {
            if (t != _ + "-l") this.Di(t)
        }, this); else {
            delete this.Zd[e];
            a.zL(e)
        }
    };
    d.Ei = function () {
        this.Di()
    };
    d.Fi = function (e) {
        var t = this.Zd[_ + "-l"], n = c.slice.call(arguments, 1);
        i.oJ(t[e], function (e) {
            try {
                e.apply(this, n)
            } catch (t) {
                if (!1) throw t;
                console.error(t.message);
                console.error(t.stack)
            }
        });
        delete t[e]
    };
    d.Gi = function (e, t) {
        if (!this.Hi) this.Hi = [];
        this.Hi.push({key: e, callback: t});
        t = t || r;
        var i = this.Zd[_ + "-l"][e];
        if (!i) {
            i = [t];
            this.Zd[_ + "-l"][e] = i;
            return !1
        }
        i.push(t);
        return !0
    };
    d.qi = function () {
        i.oJ(this.Hi, function (e) {
            var t = this.Zd[_ + "-l"][e.key];
            i.nJ(t, function (t, i, n) {
                if (t === e.callback) n.splice(i)
            });
            if (!t || !t.length) this.Ii(e.key)
        }, this);
        delete this.Hi
    };
    d.Ii = function (e) {
        delete this.Zd[_ + "-l"][e]
    };
    d.Ji = function (e) {
        return void 0 === e
    };
    d.Ki = function (e, t, i) {
        if (!e) return !1;
        t = parseInt(t) || 0;
        i = parseInt(i) || 0;
        if (!i) {
            if (!e.loaded) return !1;
            i = e.length
        }
        if (e.loaded) i = Math.min(i, e.length - t);
        for (var n = 0; n < i; n++) if (this.Ji(e[t + n])) return !1;
        return !0
    };
    d.Li = function (e, t, i) {
        return this.Ki(this.Mi(e), t, i)
    };
    if (!0) e.P("nej.ut").Ni = o.AL;
    return o
}, "38fcb21d4f4bc66eeed3795a8cc8504b", "5c3b96a99f4affd48bfbcdc2f37ab7fc", "7473c7d0556819b21bec58b99f475b04", "ef610943f997eae84e208bd1668f8379", "6e08e0adcd55f591a3d79d5a95523a75");
I$("7507f0ffebb5d28414ec67fde145bc96", function () {
    var e = window, t = NEJ.O, i = NEJ.F, n = NEJ.P("nej.e"), a = NEJ.P("nej.v"), o = NEJ.P("edu.m"),
        s = NEJ.P("edu.u"), r = NEJ.P("nej.ut"), c;
    o.Ln = NEJ.C();
    c = o.Ln.hK(r.Xd, !0);
    c.gK = function (e) {
        this.jK(e)
    };
    s.Mn = c.Mn = function (e) {
        e = e || "";
        e = e.replace(/^\n+|\n+$/g, "");
        var t = e.length, i = 0;
        var n = e.match(/[^\x00-\x80]/g);
        if (n && n.length > 0) i = n.length || 0;
        return t + i
    };
    s.Nn = c.Nn = function (e, t) {
        e = e || "";
        var i = "", n = e.length, e = e.split(""), a = 0;
        for (var o = 0; o < n; o++) {
            var s = e[o];
            var r = s.match(/[^\x00-\x80]/g);
            if (r && r.length > 0) a += 2; else a += 1;
            if (a > t) break;
            i += s
        }
        return i
    };
    s.On = c.On = function (e, t) {
        var i = e;
        if (this.Mn(i) > t) i = this.Nn(i, t) + "...";
        return i
    };
    c.Pn = function (e, t) {
        var i = new RegExp(e);
        return i.test(t)
    };
    c.Qn = function (e) {
        var t = new RegExp("(;|；|,|，|\\s{1,})");
        var i = e.split(t), n = [];
        for (var a = 0; a < i.length; a++) if (i[a] && "" != i[a].trim() && ";" != i[a].trim() && "；" != i[a].trim() && "," != i[a].trim() && "，" != i[a].trim()) n.push(i[a]);
        return n
    };
    c.Id = function (e) {
        this.kK(e)
    }
}, "ef610943f997eae84e208bd1668f8379");
I$("6c454d1fb0bf65e1c382f5362cefe762", function () {
    var e = window, t = NEJ.O, i = NEJ.F, n = NEJ.P("nej.e"), a = NEJ.P("nej.v"), o = NEJ.P("edu.m"),
        s = NEJ.P("edu.u"), r = NEJ.P("edu.cms"), c, d;
    s.Sp = NEJ.C();
    c = s.Sp.hK(s.Xo, !0);
    s.Sp.Tp = function (e) {
        if (d) d = s.Sp.Jd(d);
        d = s.Sp.Fd(e);
        d.ro();
        return d
    };
    c.Md = function () {
        d = null;
        this.lK()
    };
    c.bo = function () {
        this.lo = n.Gf(n.Ad("jst-edu-ui-dialog"))
    };
    c.co = function () {
        this.mK();
        this.Up = n.hc(n.mc(this.Ih, "j-content")[0]);
        this.Vp = this.Up[0];
        this.Wp = this.Up[1];
        this.Xp = n.mc(this.Ih, "j-right")[0];
        this.Yp = n.mc(this.Ih, "j-left")[0];
        this.Zp = n.mc(this.Ih, "j-cancel-txt")[0];
        this.$p = n.mc(this.Ih, "j-ok-txt")[0];
        a.Cc(this.Xp, "click", this.aq.RI(this));
        a.Cc(this.Yp, "click", this.bq.RI(this));
        this.cq = new o.Ln
    };
    c.aq = function () {
        if (this.dq) this.dq();
        this.Lg()
    };
    c.bq = function () {
        if (this.eq) this.eq();
        this.Lg()
    };
    c.Id = function (e) {
        e = e || t;
        e.mask = void 0 == e.modal ? !0 : !!e.modal;
        e.title = e.title || "提示";
        e.clazz = "u-window-pd" + (e.type ? " u-hidetitle" : "") + " " + (e.customStyle || "");
        e.maskClickNotHidden = void 0 == e.maskClickNotHidden ? !0 : e.maskClickNotHidden;
        this.kK(e);
        this.fq = e.focusNum || 0;
        this.eq = e.okFunc;
        this.dq = e.cancelFunc;
        this.gq = e.okTip || "确定";
        this.hq = e.cancelTip || "取消";
        this.Wp.innerHTML = e.message || "请输入对话框内容";
        this.$p.innerText = this.gq;
        this.Zp.innerText = this.hq;
        this.iq();
        n.Wc(this.Vp, "ic1 ic2 ic3 ic4");
        n.Kc(this.Vp, "ic" + (e.type || 4));
        if (!e.type) n.Kc(this.Wp, "cntnom"); else n.Wc(this.Wp, "cntnom")
    };
    c.iq = function () {
        if (this.dq) s.BM(this.Xp); else s.mp(this.Xp);
        n.Wc(this.Xp, "main slave");
        n.Wc(this.Yp, "main slave");
        if (this.fq) {
            n.Kc(this.Yp, "slave");
            n.Kc(this.Xp, "main");
            this.Xp.focus()
        } else {
            n.Kc(this.Yp, "main");
            n.Kc(this.Xp, "slave");
            this.Yp.focus()
        }
        n.Wc(this.Xp, "long small");
        n.Wc(this.Yp, "long small");
        var e = 4;
        if (this.cq.Mn(this.gq) > e) n.Kc(this.Yp, "long"); else n.Kc(this.Yp, "small");
        if (this.cq.Mn(this.hq) > e) n.Kc(this.Xp, "long"); else n.Kc(this.Xp, "small")
    };
    r.showCommonDialog = s.Sp.Tp
}, "d62f95b9c6f18a551a036c8ec75d2d82", "393c172195c9280b0b17edb6219129db", "7507f0ffebb5d28414ec67fde145bc96");
I$("ab5ba1443be7b478f5cd9353a1675785", function (e, t, i, n, a, o) {
    var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = {}, c = {};
    for (var d = 0, _ = s.length, l; d < _; d++) {
        l = s.charAt(d);
        r[d] = l;
        c[l] = d
    }
    var u = function (e) {
        var t = 0, i, n = [];
        for (; t < e.length;) {
            i = e[t];
            if (i < 128) {
                n.push(String.fromCharCode(i));
                t++
            } else if (i > 191 && i < 224) {
                n.push(String.fromCharCode((31 & i) << 6 | 63 & e[t + 1]));
                t += 2
            } else {
                n.push(String.fromCharCode((15 & i) << 12 | (63 & e[t + 1]) << 6 | 63 & e[t + 2]));
                t += 3
            }
        }
        return n.join("")
    };
    var h = function () {
        var e = /\r\n/g;
        return function (t) {
            t = t.replace(e, "\n");
            var i = [], n = String.fromCharCode(237);
            if (n.charCodeAt(0) < 0) for (var a = 0, o = t.length, s; a < o; a++) {
                s = t.charCodeAt(a);
                s > 0 ? i.push(s) : i.push(256 + s >> 6 | 192, 256 + s & 63 | 128)
            } else for (var a = 0, o = t.length, s; a < o; a++) {
                s = t.charCodeAt(a);
                if (s < 128) i.push(s); else if (s > 127 && s < 2048) i.push(s >> 6 | 192, 63 & s | 128); else i.push(s >> 12 | 224, s >> 6 & 63 | 128, 63 & s | 128)
            }
            return i
        }
    }();
    var f = function (e) {
        var t = 0, i = [], n = e.length % 3;
        if (1 == n) e.push(0, 0);
        if (2 == n) e.push(0);
        for (; t < e.length;) {
            i.push(r[e[t] >> 2], r[(3 & e[t]) << 4 | e[t + 1] >> 4], r[(15 & e[t + 1]) << 2 | e[t + 2] >> 6], r[63 & e[t + 2]]);
            t += 3
        }
        if (1 == n) i[i.length - 1] = i[i.length - 2] = "=";
        if (2 == n) i[i.length - 1] = "=";
        return i.join("")
    };
    var p = function () {
        var e = /\n|\r|=/g;
        return function (t) {
            var i = 0, n = [];
            t = t.replace(e, "");
            for (var a = 0, o = t.length; a < o; a += 4) n.push(c[t.charAt(a)] << 2 | c[t.charAt(a + 1)] >> 4, (15 & c[t.charAt(a + 1)]) << 4 | c[t.charAt(a + 2)] >> 2, (3 & c[t.charAt(a + 2)]) << 6 | c[t.charAt(a + 3)]);
            var s = n.length, r = t.length % 4;
            if (2 == r) n = n.slice(0, s - 2);
            if (3 == r) n = n.slice(0, s - 1);
            return n
        }
    }();
    i.Oi = function (e) {
        return u(p(e))
    };
    i.Pi = function (e) {
        try {
            return window.btoa(e)
        } catch (t) {
            return f(h(e))
        }
    };
    if (!0) e.copy(e.P("nej.u"), i);
    return i
}, "38fcb21d4f4bc66eeed3795a8cc8504b", "7473c7d0556819b21bec58b99f475b04");
I$("71af3dcddfc419e6de29bb8d01674245", function () {
    var e = window, t = NEJ.O, i = NEJ.P("nej.u"), n = NEJ.P("edu.u"), a = NEJ.P("edu.u");
    a.jq = function (t) {
        var n = e.returnUrl;
        if (!n) n = location.href; else n = e.encodeURI(e.decodeURI(n || ""));
        if (n) {
            var o = n.indexOf("#");
            var s = "";
            if (o >= 0) {
                s = n.substring(o);
                n = n.substring(0, o);
                s += (s.indexOf("?") > 0 ? "&" : "?") + (new Date).getMilliseconds()
            }
            var r = n.indexOf("?");
            var c = [];
            if (r >= 0) {
                c = a.qp(n.substring(r));
                if (!c["from"]) n += "&from=study"
            } else n += "?from=study";
            if (t) i.oJ(t, function (e) {
                if (e.key && !c.hasOwnProperty(e.key)) n += "&" + e.key + (e.value ? "=" + e.value : "")
            }, this);
            n += s
        }
        return n
    };
    a.kq = function () {
        return "//reg.163.com/reg/reg.jsp?product=study&url=" + e.encodeURIComponent(a.jq([{
            key: "forcelogin",
            value: "true"
        }]))
    };
    a.lq = function (e, t, a, o) {
        var s = "";
        try {
            s = i.Pi(n.mq(JSON.stringify({
                params: JSON.stringify({mobile: t, verifyCode: a || ""}),
                timestamp: n.gm(),
                nonce: 1e5 * Math.random() + "",
                version: "v1"
            }), e))
        } catch (r) {
            console.log(r)
        }
        return "params=" + s + "&bizType=" + o + "&mobile=" + t
    }
}, "ef610943f997eae84e208bd1668f8379", "393c172195c9280b0b17edb6219129db", "ab5ba1443be7b478f5cd9353a1675785");
I$("f4cc62e4c39cdf81d0a5944223d5ddd3", function (e, t, i, n, a, o, s, r, c, d) {
    var _, l = c, u = {}, h = "JSESSIONID", p = null;
    s.nq = function (e) {
        l = i.bJ(e) ? e : c
    };
    s.oq = function (e) {
        h = e || h
    };
    s.pq = function (e) {
        _ = e || ""
    };
    s.qq = function () {
        if (!p) p = {
            h: {},
            p: 0,
            m: {callCount: 0, scriptSessionId: "${scriptSessionId}190", httpSessionId: o.WK(h)},
            r: {script: !1, sync: !1, method: "POST", timeout: null, proxy: !0, cookie: !1, onbeforerequest: null}
        }
    };
    s.mf = function (e, n) {
        var a = (e || "").split(".");
        if (a && 2 == a.length) {
            var d = !1;
            n = n || r;
            if (!p) {
                d = !0;
                s.qq();
                if (n.session) p.m.httpSessionId = o.WK(n.session)
            }
            p.u = (n.path || "/dwr/call/plaincall/") + (n.query && "?" + n.query || "");
            i.LJ(p.r, n);
            var _ = i.KJ(p.r.headers, n.headers);
            _[t.zb] = t.Ab;
            p.r.headers = _;
            var l = "c" + p.m.callCount;
            p.m[l + "-scriptName"] = a[0];
            p.m[l + "-methodName"] = a[1];
            p.m[l + "-id"] = p.m.callCount;
            p.h[p.m.callCount] = {c: n.onload || c, e: n.onerror || c};
            i.oJ(n.param, function (e, t) {
                var i = g(e, l);
                if (i) p.m[l + "-param" + t] = i
            });
            p.m.callCount++;
            if (d) s.rq()
        }
    };
    s.rq = function () {
        if (p && p.u) {
            var e = _ || i.IJ();
            _ = 0;
            p.m.batchId = e;
            u[e] = p;
            p = null;
            C(e)
        } else p = null
    };
    var m = function (e) {
        var t = u[e];
        if (t) {
            delete t.h;
            delete t.m;
            delete u[e]
        }
    };
    var g = function (e, t) {
        if (null == e) return "null:null";
        if (i.eJ(e)) return "boolean:" + !!e;
        if (i.dJ(e)) return "number:" + e;
        if (i.cJ(e)) return "string:" + encodeURIComponent(e);
        if (i.fJ(e)) return "Date:" + e.getTime();
        if (i.gJ(e)) return b(e, t);
        if (i.hJ(e)) return $(e, t);
        if (i.bJ(e, "function")) return ""; else return "default:" + e
    };
    var b = function (e, t) {
        var n = [];
        i.oJ(e, function (e, i) {
            p.p++;
            var a = t + "-e" + p.p, o = g(e, t);
            if (o) {
                p.m[a] = o;
                n.push("reference:" + a)
            }
        });
        return "Array:[" + n.join(",") + "]"
    };
    var $ = function (e, t) {
        var n = [];
        i.lJ(e, function (e, i) {
            p.p++;
            var a = t + "-e" + p.p, o = g(e, t);
            if (o) {
                p.m[a] = o;
                n.push(encodeURIComponent(i) + ":reference:" + a)
            }
        });
        return "Object_Object:{" + n.join(",") + "}"
    };
    var v = function (e, t) {
        if (!e) return null;
        var n = [], a = "&" == t;
        i.lJ(e, function (e, t) {
            n.push(!a ? t + "=" + e : encodeURIComponent(t) + "=" + encodeURIComponent(e))
        });
        return n.join(t || "\n")
    };
    var C = function (e) {
        var t = u[e];
        if (t) {
            t.u = t.u.replace(/(\?|$)/, (t.m.callCount > 1 ? "Multiple." + t.m.callCount : t.m["c0-scriptName"] + "." + t.m["c0-methodName"]) + ".dwr$1");
            var i = t.r, o = !!i.script, s = "POST" == i.method;
            delete t.r;
            delete i.script;
            i.method = i.method.toUpperCase();
            i.onerror = A.RI(null, e);
            if (o || !s) t.u += (t.u.indexOf("?") >= 0 ? "&" : "?") + v(t.m, "&");
            if (o) a.xf(t.u, i); else {
                i.onload = E.RI(null, e);
                i.data = s ? v(t.m) : null;
                n.mf(t.u, i)
            }
        }
    };
    var I = function (e, t, i) {
        var n = u[e];
        if (n && !l(i)) {
            var a = n.h[t];
            if (a) try {
                (a.e || f)(i)
            } catch (o) {
                if (!1) throw o;
                console.error(o.message);
                console.error(o)
            }
        }
    };
    var y = function (e, t) {
        var n = u[e];
        if (n) i.lJ(n.h, function (i, n) {
            I(e, n, t)
        })
    };
    var x = function (e, i, n) {
        var a = u[e];
        if (a) try {
            (a.h[i].c || f)(n)
        } catch (o) {
            I(e, i, {code: t.YJ, message: "DWR回调执行异常：" + o.message || o})
        }
    };
    var E = function (e, i) {
        try {
            i && i.search("//#DWR") >= 0 ? new Function(i)() : y(e, {code: t.xb, message: "DWR请求返回数据不合法!"})
        } catch (n) {
            y(e, {code: t.XJ, message: "DWR返回脚本执行异常：" + (n.message || n)})
        } finally {
            m(e)
        }
    };
    var A = function (e, t) {
        y(e, t);
        m(e)
    };
    this.dwr = this.dwr || {};
    var N = dwr.engine = dwr.engine || {};
    N["_remoteHandleCallback"] = x;
    N["_remoteHandleException"] = I;
    N["_remoteHandleBatchException"] = y;
    dwr["_"] = [{
        handleCallback: N["_remoteHandleCallback"],
        handleException: N["_remoteHandleException"],
        handleBatchException: N["_remoteHandleBatchException"]
    }];
    if (!0) {
        var T = e.P("nej.j");
        T.sq = s.rq;
        T.tq = s.mf;
        T.uq = s.qq;
        T.nq = s.nq;
        T.pq = s.pq;
        T.oq = s.oq
    }
    return s
}, "38fcb21d4f4bc66eeed3795a8cc8504b", "1b005a7aa950f4fc021ca0593fd5e0f9", "7473c7d0556819b21bec58b99f475b04", "8d1b7583837ff1fac4ca7d75e0360dc5", "01db61ff57baaf6cb3a025d8ec5e968b", "f16c7f92e4debb611ed15b0b2e34a3f6");
I$("0a75c7094be3e9ca124b1c7fdd9c05b5", function () {
    var e = [], t = window, i = NEJ.O, n = NEJ.F, a = NEJ.P("nej.e"), o = NEJ.P("nej.j"), s = NEJ.P("nej.u"),
        r = NEJ.P("mb.c"), c = NEJ.P("edu.d"), d = NEJ.P("edu.u"), _ = NEJ.P("nej.ut"), l, u;
    c.vq = NEJ.C();
    l = c.vq.hK(_.Ni);
    u = c.vq.rK;
    l.wq = function (e) {
        var t = r.xq || i, e = e || {};
        e.method = e.method || "POST";
        if (t.xauthKey) e.headers = {"Auth-Key": t.xauthKey};
        if (window.providerId || window.ownerId) e.headers = {providerId: window.providerId || window.ownerId};
        return e
    };
    l.yq = null;
    o.oq("NTESSTUDYSI");
    l.zq = function (e) {
        if (!e.notShowLoading && d.showLoading) d.showLoading(e.notShowMask);
        var t = this.wq(e);
        t.sync = e.sync || !1;
        t.query = +new Date;
        t.param = e.param;
        t.onload = this.Aq.RI(this, e.onload, e.notShowLoading);
        t.onerror = this.Bq.RI(this, e.onerror, e.notShowLoading);
        t.session = e.session || this.yq || "NTESSTUDYSI";
        o.tq(e.url, t)
    };
    l.Cq = function (e) {
        if (!e.notShowLoading && d.showLoading) d.showLoading(e.notShowMask);
        var t = this.wq(e);
        if (s.gJ(e.url)) {
            o.uq();
            for (var i = 0; i < e.url.length; i++) {
                t.sync = e.sync || !1;
                t.param = e.params[i];
                t.onload = this.Aq.RI(this, e.onloads[i], e.notShowLoading);
                t.onerror = this.Bq.RI(this, (e.onerrors || [])[i], e.notShowLoading);
                o.tq(e.url[i], t)
            }
            o.sq()
        }
    };
    l.Aq = function (e, t, i) {
        if (!t && d.hideLoading) d.hideLoading();
        e(i)
    };
    l.Bq = function (e, t, i) {
        if (!t && d.hideLoading) d.hideLoading();
        if (e) e(i); else {
            var n = (i.message || "").split("_vG_Gv_");
            var a = n[0];
            var o = n[1];
            var s = [];
            if (o) {
                var r = o.split("&");
                for (var c = r.length; c;) {
                    var _ = r[--c].split("=");
                    s.push({key: _[0], value: _[1]})
                }
            }
            if (!t) switch (a) {
                case"not_auth":
                    d.Eq.Dq({from: "otherauth", aftParams: s});
                    break;
                case"not_access":
                    d.Sp.Tp({message: "没有权限查看！"});
                    break;
                case"not_publish":
                    d.Sp.Tp({message: "课程未发布，不能操作此功能！"});
                    break;
                case"course_edit":
                    d.Sp.Tp({message: "该课程制作者正在重新编辑内容，暂时不可学习，给你带来的不便深表歉意。"});
                    break;
                case"course_delete":
                    d.Sp.Tp({message: "该课程已删除，给你带来不便深表歉意。你可以选择其他课程学习。"});
                    break;
                case"keyword":
                    d.Sp.Tp({message: "输入的内容包含敏感词，不能发布！"});
                    break;
                case"remind_binding":
                    d.Fq.Tp({});
                    break;
                default:
                    a = a && "Error" != a && a.indexOf("超时") < 0 ? a : "哎呀，您的网速不太给力，请刷新或稍后再试。";
                    if (a.indexOf("服务器返回异常状态") < 0) d.Sp.Tp({message: a})
            }
        }
    }
}, "266e05c31fc4a384e9a244cdaf2264b8", "4a72bba4b9eed42a66bf707092def26e", "6c454d1fb0bf65e1c382f5362cefe762", "f16c7f92e4debb611ed15b0b2e34a3f6", "71af3dcddfc419e6de29bb8d01674245", "ab5ba1443be7b478f5cd9353a1675785", "f4cc62e4c39cdf81d0a5944223d5ddd3");
I$("c744172221c7874d28939ab4e836d5e1", function (e) {
    var t = NEJ.O, i = NEJ.P("nej.j"), n = NEJ.P("nej.u"), a = NEJ.P("edu.d"), o = n.HJ(), s, r = "ck-commonCache";
    a.Jq = NEJ.C();
    s = a.Jq.hK(a.vq);
    s.Kq = function (e) {
        this.zq({
            key: r + o,
            url: "CaptchaBean.checkCodeValid",
            notShowLoading: !0,
            param: [e],
            onload: this.Lq.RI(this)
        })
    };
    s.Lq = function (e) {
        this.kd("onCheckCaptcha", e)
    };
    s.Mq = function (e, t) {
        this.zq({
            key: r + o,
            url: "CaptchaBean.checkCaptchaCode",
            notShowLoading: !0,
            sync: !0,
            param: [e, t],
            onload: this.Nq.RI(this)
        })
    };
    s.Nq = function (e) {
        this.kd("onCheckCaptcha", e)
    };
    s.Oq = function () {
        i.mf("/passport/checkSSOError.do", {onload: this.Pq.RI(this)})
    };
    s.Pq = function (e) {
        this.kd("onCheckSSOError", JSON.parse(e || "{}"))
    };
    s.Qq = function (e) {
        this.zq({
            key: r + o,
            url: "CloudSearchBean.getCloudClassSuggestlist",
            notShowLoading: !0,
            param: [e],
            onload: this.Rq.RI(this)
        })
    };
    s.Rq = function (e) {
        this.kd("onCloudClassSuggestlist", e)
    };
    s.Sq = function (e) {
        this.zq({
            key: r + o,
            url: "CommonBean.checkAccountStatus",
            param: [e],
            notShowLoading: !0,
            onload: this.Tq.RI(this)
        })
    };
    s.Tq = function (e) {
        this.kd("onCheckAccountStatus", e)
    };
    s.Uq = function (e) {
        this.zq({key: r + o, url: "CommonBean.obtain", param: [e], onload: this.Vq.RI(this, e)})
    };
    s.Vq = function (e, t) {
        this.kd("onGetCommonData", {data: t ? JSON.parse(t) : null, key: e})
    };
    s.Wq = function (e, t) {
        this.zq({key: r + o, url: "CourseBean.fetchMixedCourseByIdAndType", param: [e], onload: this.Xq.RI(this, t)})
    };
    s.Xq = function (e, t) {
        this.kd("onGetMixedCourseByCids", {data: t, key: e})
    };
    s.Yq = function (e, t) {
        this.zq({key: r + o, url: "CourseBean.getFrontCategoryDtos", param: [e], onload: this.Zq.RI(this, t)})
    };
    s.Zq = function (e, t) {
        this.kd("onGetFrontCategoryDtos", {data: t, key: e})
    };
    s.$q = function (e) {
        this.zq({key: r + o, url: "LessonBean.getVideoDto", param: [e], onload: this._q.RI(this)})
    };
    s._q = function (e) {
        this.kd("onGetVideoById", e)
    };
    s.ar = function () {
        this.zq({key: r + o, url: "ShopCartBean.getCount", notShowLoading: !0, param: [], onload: this.GM.RI(this)})
    };
    s.GM = function (e) {
        this.kd("onGetCartCount", e)
    };
    s.cr = function () {
        this.zq({
            key: r + o,
            url: "UserCenterBean.myCouponCount",
            notShowLoading: !0,
            param: [],
            onload: this.dr.RI(this)
        })
    };
    s.dr = function (e) {
        this.kd("onGetCouponCount", e)
    };
    s.er = function (e, t) {
        this.zq({key: r + o, url: "CommonBean.obtainByOrder", param: [e, t], onload: this.fr.RI(this, e)})
    };
    s.fr = function (e, t) {
        this.kd("onGetCommonDataByOrder", {data: t ? JSON.parse(t) : null, key: e})
    };
    s.gr = function (e, t) {
        this.zq({key: r + o, url: "CommonBean.obtainByRandom", param: [e, t], onload: this.HM.RI(this, e)})
    };
    s.ir = function (e, t) {
        this.zq({key: r + o, url: "CommonBean.obtainByRandomWithLimitTime", param: [e, t], onload: this.HM.RI(this, e)})
    };
    s.jr = function (e, t) {
        this.zq({key: r + o, url: "CommonBean.obtainByRandomNew", param: [e, t], onload: this.HM.RI(this, e)})
    };
    s.HM = function (e, t) {
        this.kd("onGetCommonDataByRandom", {data: t ? JSON.parse(t) : null, key: e})
    };
    s.kr = function (e) {
        i.mf("/passport/wx/getShareSign.do", {query: "url=" + n.Pi(e), onload: this.lr.RI(this)})
    };
    s.lr = function (e) {
        this.kd("onWxGetTicket", e)
    };
    s.mr = function (e, t) {
        this.zq({key: r + o, url: "MongoAttributesBean.obtainByOrder", param: [e, t], onload: this.nr.RI(this, e)})
    };
    s.nr = function (e, t) {
        this.kd("onGetMGCommonDataByOrder", {data: t ? JSON.parse(t) : null, key: e})
    };
    s.or = function (e, t) {
        this.zq({key: r + o, url: "MongoAttributesBean.obtainByRandom", param: [e, t], onload: this.pr.RI(this, e)})
    };
    s.pr = function (e, t) {
        this.kd("onGetMGCommonDataByRandom", {data: t ? JSON.parse(t) : null, key: e})
    };
    s.qr = function (e, t) {
        this.zq({
            key: r + o,
            url: "MongoAttributesBean.obtainByRandomWithLimitTime",
            param: [e, t],
            onload: this.pr.RI(this, e)
        })
    };
    s.sr = function (e) {
        this.zq({key: r + o, url: "MongoAttributesBean.obtain", param: [e], onload: this.ur.RI(this, e)})
    };
    s.ur = function (e, t) {
        this.kd("onGetMGCommonData", {data: t ? JSON.parse(t) : null, key: e})
    };
    s.vr = function (e) {
        this.zq({key: r + o, url: "MongoAttributesBean.obtainCommonWithList", param: [e], onload: this.wr.RI(this, e)})
    };
    s.xr = function (e, t) {
        this.kd("onGetMGCommonWithList", {data: t ? JSON.parse(t) : null, key: e})
    };
    s.yr = function (t) {
        i.mf("/j/search/hotwords.json", {
            headers: {"Content-Type": "application/json", "edu-script-token": e.WK("NTESSTUDYSI")}, method: "POST",
            query: "hotwordType=" + t, onload: this.zr.RI(this, t)
        })
    };
    s.zr = function (e, t) {
        var i = null;
        try {
            i = JSON.parse(t);
            this.kd("onGetHotKeywords", e, i)
        } catch (n) {
        }
    };
    s.Ar = function (t, n) {
        i.mf("/j/search/suggestions/courses.json", {
            headers: {
                "Content-Type": "application/json",
                "edu-script-token": e.WK("NTESSTUDYSI")
            }, method: "POST", query: "keyword=" + t, onload: this.Br.RI(this, n)
        })
    };
    s.Br = function (e, t) {
        var t = t ? JSON.parse(t) : null;
        this.kd("ongetSuggestList", e, t)
    };
    s.Cr = function (t, n) {
        i.mf("/j/search/suggestions/providers.json", {
            headers: {
                "Content-Type": "application/json",
                "edu-script-token": e.WK("NTESSTUDYSI")
            }, method: "POST", query: "keyword=" + t, onload: this.Br.RI(this, n)
        })
    };
    s.Dr = function (t) {
        i.mf("/j/my/learnRecord.json", {
            headers: {
                "Content-Type": "application/json",
                "edu-script-token": e.WK("NTESSTUDYSI")
            }, method: "POST", query: "pageSize=" + t, onload: this.Er.RI(this)
        })
    };
    s.Er = function (e) {
        var e = e ? JSON.parse(e) : null;
        this.kd("ongetLearnRecord", e)
    };
    s.Fr = function () {
        var e = {_t: +new Date};
        i.mf("/j/isNewReg.json", {method: "GET", data: e, onload: this.Gr.RI(this)})
    };
    s.Gr = function (e) {
        var e = e ? JSON.parse(e) : null;
        this.kd("ongetNewpeopleState", e)
    };
    s.Hr = function (e) {
        e["_t"] = +new Date;
        i.mf("/j/hasGetCouponInNewRegActivity.json", {method: "GET", data: e, onload: this.Ir.RI(this)})
    };
    s.Ir = function (e) {
        var e = e ? JSON.parse(e) : null;
        this.kd("ongetCouponState", e)
    };
    s.Jr = function () {
        var e = {_t: +new Date};
        i.mf("/j/getNewRegActivityInHomePage.json", {method: "GET", data: e, onload: this.Kr.RI(this)})
    };
    s.Kr = function (e) {
        var e = e ? JSON.parse(e) : null;
        this.kd("ongetNewpeopleInfo", e)
    };
    s.Lr = function (e) {
        var e = {_t: +new Date};
        i.mf("/j/getFirstOrderGift.json", {method: "GET", data: e, onload: this.Mr.RI(this)})
    };
    s.Mr = function (e) {
        var e = e ? JSON.parse(e) : null;
        this.kd("ongetFirstOrderGift", e)
    }
}, "f16c7f92e4debb611ed15b0b2e34a3f6", "0a75c7094be3e9ca124b1c7fdd9c05b5", "8d1b7583837ff1fac4ca7d75e0360dc5");
I$("380689b8f957c5b03fc298827a45b4b9", function () {
    var e = window, t = NEJ.O, i = NEJ.F, n = NEJ.P("nej.e"), a = NEJ.P("nej.v"), o = NEJ.P("edu.m"),
        s = NEJ.P("nej.u"), r = NEJ.P("nej.ut"), c = NEJ.P("edu.u"), d, _ = "js-zhvr-901", l = "ui-" + s.HJ(),
        u = ["163.com", "126.com", "yeah.net", "vip.163.com", "vip.126.com", "popo.163.com", "188.com"];
    var h = "#<uispace>-hack{position:absolute;z-index:99;}                       #<uispace>{position:absolute;z-index:101;border:1px solid #d5d5d5;background:#FAFAFA;color:#444}                       #<uispace> .zitm{width:100%;text-indent:6px;height:32px;line-height:32px;cursor:default;}                       #<uispace> .zitm." + _ + "{color:#10ae58;background-color:#ECECEE;}";
    o.Vr = NEJ.C();
    d = o.Vr.hK(r.Xd, !0);
    o.Vr.RI = function (e, t) {
        if (h) {
            n.Uc(h.replace(/\#\<.*?\>/gi, "." + l));
            h = null
        }
        return new o.Vr(e, t)
    };
    d.gK = function (e, t) {
        this.jK(t);
        this.Wr = n.RJ(e);
        this.Wr.setAttribute("autocomplete", "off");
        this.Ih = n.Ac("div", l);
        this.Zf = n.RJ(t.parent) || document.body;
        this.Xr(t);
        a.Cc(this.Wr, "blur", this.Yr.RI(this));
        a.Cc(this.Wr, "focus", this.Zr.RI(this));
        a.Cc(this.Wr, "keydown", this.$r.RI(this));
        a.Cc(this.Ih, "mouseover", this.RM.RI(this))
    };
    d.Xr = function (e) {
        e = e || t;
        this.bs = e.suffixes || u;
        this.Cc("onselect", e.onselect || i);
        if (e.width) this.Ih.style.width = e.width + "px"
    };
    d.cs = function (e) {
        if (e) this.Ih.style.width = e + "px"
    };
    d.Yr = function (t) {
        this.q = e.clearInterval(this.q);
        if (c.vp(this.Wr.value)) this.ds()
    };
    d.Zr = function (t) {
        this.es = c.vp(this.Wr.value);
        if (!this.q) this.q = e.setInterval(this.fs.RI(this), 100)
    };
    d.$r = function (e) {
        if (this.gs()) {
            var t = e.keyCode;
            switch (t) {
                case 9:
                case 13:
                    this.ds();
                    break;
                case 38:
                case 40:
                    this.hs(40 == t)
            }
        }
    };
    d.RM = function (e) {
        var t = a.gd(e), i = n.hc(this.Ih);
        if (i.length && i[0] != t) for (var o = 1, s = i.length; o < s; ++o) i[o] == t ? n.Kc(i[o], _) : n.Wc(i[o], _)
    };
    d.gs = function () {
        var e = this.Ih.parentNode;
        return !!e && !!e.tagName
    };
    d.hs = function (e) {
        var t = n.hc(this.Ih);
        for (var i = 0, a = t.length, o; i < a; ++i) if (n.ic(t[i], _)) {
            o = e ? i == a - 1 ? 1 : i + 1 : 1 == i ? a - 1 : i - 1;
            n.Wc(t[i], _);
            n.Kc(t[o], _);
            break
        }
    };
    d.ds = function () {
        for (var e = 0, t = n.hc(this.Ih), i = t.length; e < i; ++e) if (n.ic(t[e], _)) {
            this.Wr.value = t[e].innerHTML;
            this.es = this.Wr.value;
            this.yd(!1);
            this.kd("onselect", this.es);
            break
        }
        if (e >= i && t[1]) {
            this.Wr.value = t[1].innerHTML;
            this.es = this.Wr.value;
            this.yd(!1);
            this.kd("onselect", this.es)
        }
    };
    d.yd = function (e) {
        !e ? n.Fc(this.Ih) : this.Zf.appendChild(this.Ih)
    };
    d.fs = function () {
        var e = c.vp(this.Wr.value);
        if (e != this.es) {
            this.es = e;
            this.SM(e)
        }
    };
    d.ks = function () {
        this.Ih.innerHTML = ""
    };
    d.SM = function (e) {
        this.ks();
        var e = s.qJ(e || "");
        if (e) {
            var t = [], i;
            var n = e.indexOf("@"), a = this.bs;
            if (n < 0) for (i = 0; i < a.length; ++i) t.push(e + "@" + a[i]); else {
                var o = e.substring(n + 1), r = o.length;
                for (i = 0; i < a.length; ++i) if (a[i].substr(0, r) == o) t.push(e.substring(0, n) + "@" + a[i])
            }
            if (t.length) {
                for (var i = 0, c = ['<div class="zitm f-thide s-fc6">请选择或继续输入...</div>']; i < t.length; ++i) c.push('<div class="zitm f-thide' + (0 == i ? " " + _ : "") + '">' + t[i] + "</div>");
                this.yd(!0);
                this.Ih.innerHTML = c.join("")
            } else this.yd(!1)
        } else this.yd(!1)
    };
    d.Bo = function (e, t) {
        if (null != e && null != t) {
            var i = this.Ih.style;
            i.top = t + "px";
            i.left = e + "px"
        }
    }
}, "ef610943f997eae84e208bd1668f8379");
I$("dad18cddbbea99de5a09dc2d97be1b35", function () {
    var e = window, t = NEJ.O, i = NEJ.F, n = NEJ.P("nej.e"), a = NEJ.P("nej.v"), o = NEJ.P("nej.u"),
        s = NEJ.P("edu.m"), r = NEJ.P("edu.u"), c = NEJ.P("nej.ut"), d, _ = e.icourseLoginPrefix, l = e.snsOAuthPrefix;
    ns = e.ursAuthorPrefix;
    TM = e.firstTelBindHref;
    s.UM = NEJ.C();
    d = s.UM.hK(c.Xd, !0);
    d.gK = function (e) {
        this.jK(e);
        this.qs = e.loginOrAuthType
    };
    d.VM = function (e, t, i, n) {
        var a;
        this.us = i || [];
        this.vs = t || !0;
        var s = (window.screen.height - 660 - 200) / 2, c = (window.screen.width - 620) / 2;
        if (s < 0) s = 0;
        if (c < 0) c = 0;
        if (e == r.CONST.LOGINTYPE.ICOURSE) a = _ + "?oauthType={{oauthType}}&returnUrl=" + o.Pi(r.jq()); else if (e == r.CONST.LOGINTYPE.URS) a = ns + "?oauthType={{oauthType}}&fromPage=" + (n ? n : "webview"); else if (e == r.CONST.LOGINTYPE.TEL) a = TM + "?oauthType={{oauthType}}&returnUrl=" + o.Pi(r.jq()); else a = l + "?snsType=" + e + "&oauthType={{oauthType}}&returnUrl=" + o.Pi(r.jq()) + (this.vs ? "&edusave=1" : "");
        if (0 == this.qs) window.open(a.replace("{{oauthType}}", "login"), "_self"); else if (1 == this.qs) window.open(a.replace("{{oauthType}}", "bind_authorization"), "绑定", "height=600,width=500,top=" + s + ",left=" + c + ",toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no")
    };
    s.thirdBindUtil = function (e) {
        return new s.UM(e)
    }
}, "ef610943f997eae84e208bd1668f8379", "f812a3948bf6b0b0b7ef1b94315481da", "ab5ba1443be7b478f5cd9353a1675785");
I$("efaee7cec9dc28bd4257a132cd250c56", function () {
    var e = window, t = NEJ.O, i = NEJ.F, n = NEJ.P("nej.e"), a = NEJ.P("nej.v"), o = NEJ.P("nej.u"),
        s = NEJ.P("edu.m"), r = NEJ.P("edu.d"), c = NEJ.P("nej.ut"), d = NEJ.P("edu.u"), _;
    s.ws = NEJ.C();
    _ = s.ws.hK(c.Xd, !0);
    _.gK = function (t) {
        this.jK(t);
        this.xs = (t || {}).parent;
        this.ys = (t || {}).sucessCb || i;
        e.URSLoginConfig.includeBox = this.xs;
        e.URSLoginConfig.logincb = this.ys;
        this.ursComponent = new URS(e.URSLoginConfig);
        this.ursComponent.showIframe()
    };
    s.bindLoginForm = function (e, t) {
        return new s.ws(e, t)
    };
    _.zs = function (e) {
        this.As = e || "otherauth";
        d.bj("login", this.As)
    };
    _.Bs = function (e, t) {
        this.Cs = e;
        this.us = t || [];
        var i = {loginOrAuthType: 0};
        this.Ds = s.thirdBindUtil(i);
        a.Cc(this.Cs, "click", this.Es.RI(this))
    };
    _.Es = function (e) {
        var t = a.gd(e, "c:j-slink"), i;
        if (t) {
            i = n.lc(t, "varName");
            this.Ds.VM(d.CONST["LOGINTYPE"][i], !0);
            d.bj(i, "click", "登陆弹窗")
        }
    }
}, "ef610943f997eae84e208bd1668f8379", "c744172221c7874d28939ab4e836d5e1", "151562add01838325f04dae3569223d6", "71af3dcddfc419e6de29bb8d01674245", "380689b8f957c5b03fc298827a45b4b9", "f812a3948bf6b0b0b7ef1b94315481da", "ab5ba1443be7b478f5cd9353a1675785", "dad18cddbbea99de5a09dc2d97be1b35");
I$("8284a6314cb723d1eedffdd164100ada", function () {
    var e = window, t = NEJ.O, i = NEJ.P("nej.p"), n = NEJ.P("nej.e"), a = NEJ.P("nej.u"), o = NEJ.P("edu.d"),
        s = NEJ.P("edu.u");
    s.il = function (e) {
        e = e || 0;
        if (a.dJ(e)) return e.toFixed(2); else return e
    };
    s.jl = function (e, t) {
        return Number(e).toFixed(t)
    }
});
I$("8d13edc402087a46d17f57e9edebdb37", function (e) {
    var t = {};
    var i = NEJ.P("nej.u"), n = NEJ.P("edu.u");
    t.format = i.sJ;
    t.formatCash = function (e) {
        e = e || 0;
        if (i.dJ(e)) return e.toFixed(2); else return e
    };
    t.average = function (e, i) {
        e = e || [];
        return e.length ? t.total(e, i) / e.length : 0
    };
    t.total = function (e, t) {
        var i = 0;
        if (e) {
            e.forEach(function (e) {
                i += t ? e[t] : e
            });
            return i
        }
    };
    t.filter = function (e, t) {
        if (e && e.length) return e.filter(function (e, i) {
            return t(e, i)
        })
    };
    t.join = function (e, t) {
        return e.join(t)
    };
    t.escape = i.qJ;
    t.formatCash = n.il;
    return t
}, "7473c7d0556819b21bec58b99f475b04", "8284a6314cb723d1eedffdd164100ada", "7473c7d0556819b21bec58b99f475b04");
I$("106351135a8e461ae9fda308811b8d7e", function (e) {
    var t = Regular.dom, i = NEJ.P("edu.u"), n = NEJ.P("edu.r");
    n.Kn = Regular.extend({
        $request: function () {
        }, $authority: function (e) {
            var t = this.$state.test;
            return t && (t.authority || 0) & e
        }, $canSubmit: function () {
            var e = this.$state.test;
            return e && 0 !== e.remainTime && this.$authority(2)
        }, $constant: i.CONST, $webUser: window.webUser, $window: window
    }).filter(e).directive({
        "z-crt": function (e, i) {
            this.$watch(i, function (i) {
                t[i ? "addClass" : "delClass"](e, "z-crt")
            })
        }
    });
    return n.Kn
}, "8d13edc402087a46d17f57e9edebdb37", "6ae3e0c14a929ad034cf3d347aca315f");
I$("b6951637f3eb26689d734a6b2492c035", function () {
    var e = NEJ.P("edu.u");
    e.Bl = function (e) {
        var t = e.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/);
        if (null == t) return !1; else return !0
    };
    e.Cl = function (e) {
        var t = e.match(/^1\d{10}$/);
        if (null == t) return !1; else return !0
    };
    e.Dl = function (e) {
        var t = e.match(/\d{3}-\d{8}|\d{4}-\d{7}/);
        if (null == t) return !1; else return !0
    };
    e.El = function (e) {
        var t = /^([0-9]+[\.]?[0-9]+)|[1-9]$/;
        if (t.test(e)) return !0; else return !1
    };
    e.Fl = function (e) {
        var t = /^([1-9]\d{4,9}$)/;
        if (t.test(e)) return !0; else return !1
    };
    e.Gq = function (e) {
        var t = /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?%?&?[a-zA-Z0-9_-](\?)?)*)*$/i;
        if (t.test(e)) return !0; else return !1
    }
});
I$("8ae9513a791ecd9d9d3b27b748aa893f", function () {
    var e = window, t = NEJ.O, i = NEJ.P("nej.j"), n = NEJ.P("nej.u"), a = NEJ.P("edu.d"), o = n.HJ(), s,
        r = "ck-Settings";
    a.Fs = NEJ.C();
    s = a.Fs.hK(a.vq);
    s.Gs = function () {
        this.zq({key: r + o, url: "MessageProfileBean.getProfile", param: [], onload: this.Hs.RI(this)})
    };
    s.Hs = function (e) {
        this.kd("onGetProfile", e)
    };
    s.Is = function (e) {
        this.zq({key: r + o, url: "MessageProfileBean.setProfile", param: [e], onload: this.Js.RI(this)})
    };
    s.Js = function (e) {
        this.kd("onUpdateMessage", e)
    };
    s.Ks = function () {
        this.zq({
            key: r + o, url: "MessageProfileBean.getMailProfile", param: [],
            onload: this.Ls.RI(this)
        })
    };
    s.Ls = function (e) {
        this.kd("onGetMail", e)
    };
    s.Ms = function (e) {
        this.zq({key: r + o, url: "MessageProfileBean.setMailProfile", param: [e], onload: this.Ns.RI(this)})
    };
    s.Ns = function (e) {
        this.kd("onUpdateMail", e)
    };
    s.Os = function (e) {
        this.zq({key: r + o, url: "MemberBean.getMemberInfo", param: [e], onload: this.Ps.RI(this)})
    };
    s.Ps = function (e) {
        this.kd("onGetMemberInfo", e)
    };
    s.Qs = function (e) {
        this.zq({key: r + o, url: "CompanyBean.getCompanyIdByName", param: [e], onload: this.Rs.RI(this)})
    };
    s.Rs = function (e) {
        this.kd("onGetCompanyIdByName", e)
    };
    s.Ss = function (e) {
        this.zq({key: r + o, url: "CompanyBean.getCompanyById", param: [e], onload: this.Ts.RI(this)})
    };
    s.Ts = function (e) {
        this.kd("onGetCompanyById", e)
    };
    s.Us = function (t) {
        var n = "mobile=" + t;
        i.mf(e.studyHttpsHref + "/passport/cellphone/sendValidationCode2ChangePhoneNumber.htm", {
            type: "json",
            method: "POST",
            data: n,
            mode: 0,
            cookie: !0,
            onload: this.Vs.RI(this)
        })
    };
    s.Vs = function (e) {
        this.kd("onSendValidationCode2ChangePhoneNumber", e)
    };
    s.Ws = function (t, n) {
        var a = "mobile=" + t + "&validationCode=" + n;
        i.mf(e.studyHttpsHref + "/passport/cellphone/changePhoneNumber.htm", {
            type: "json",
            method: "POST",
            data: a,
            mode: 0,
            cookie: !0,
            onload: this.Xs.RI(this)
        })
    };
    s.Xs = function (e) {
        this.kd("onchangePhoneNumber", e)
    };
    s.Ys = function (t) {
        var n = "mobile=" + t;
        i.mf(e.studyHttpsHref + "/passport/cellphone/isMobileExist.htm", {
            type: "json",
            method: "POST",
            data: n,
            mode: 0,
            cookie: !0,
            onload: this.Zs.RI(this)
        })
    };
    s.Zs = function (e) {
        this.kd("onisMobileExist", e)
    };
    s.$s = function (t, n) {
        var a = "mobile=" + t + "&password=" + n;
        i.mf(e.studyHttpsHref + "/passport/cellphone/validateLoginCondition.htm", {
            type: "json",
            method: "POST",
            data: a,
            mode: 0,
            cookie: !0,
            onload: this.WM.RI(this)
        })
    };
    s.WM = function (e) {
        this.kd("onvalidateLoginCondition", e)
    };
    s.XM = function (t, n) {
        var a = "mobile=" + t + "&validationCode=" + n;
        i.mf(e.studyHttpsHref + "/passport/cellphone/validateRegisterCondition.htm", {
            type: "json",
            method: "POST",
            data: a,
            mode: 0,
            cookie: !0,
            onload: this.YM.RI(this)
        })
    };
    s.YM = function (e) {
        this.kd("onvalidateRegisterCondition", e)
    };
    s.ZM = function (e, t, i) {
        this.zq({
            key: r + o,
            url: "MemberBean.updateMemberInfo",
            param: [e, t],
            onload: this.jt.RI(this),
            sync: i || !1
        })
    };
    s.jt = function (e) {
        this.kd("onUpdateMemberInfo", e)
    };
    s.kt = function (e) {
        this.zq({key: r + o, url: "MemberBean.addMemberEducation", param: [e], onload: this.$M.RI(this)})
    };
    s.$M = function (e) {
        this.kd("onaddMemberEducation", e)
    };
    s._M = function (e, t) {
        this.zq({key: r + o, url: "MemberBean.addMember", param: [e, t], onload: this.aN.RI(this)})
    };
    s.aN = function (e) {
        this.kd("onAddMember", e)
    };
    s.qt = function (e) {
        this.zq({
            key: r + o,
            notShowLoading: !0,
            url: "MemberBean.updatePersonalURL",
            param: [e],
            onload: this.bN.RI(this)
        })
    };
    s.bN = function (e) {
        this.kd("onUpdatePersonalURL", e)
    };
    s.dN = function () {
        this.zq({key: r + o, url: "MemberBean.getMemberPrivacy", param: [], onload: this.eN.RI(this)})
    };
    s.eN = function (e) {
        this.kd("onGetMemberPrivacy", e)
    };
    s.fN = function (e) {
        this.zq({key: r + o, url: "MemberBean.updateMemberPrivacy", param: [e], onload: this.xt.RI(this)})
    };
    s.xt = function (e) {
        this.kd("onUpdateMemberPrivacy", e)
    };
    s.yt = function (e) {
        this.zq({
            key: r + o,
            notShowLoading: !0,
            url: "MemberBean.isNickNameValid",
            param: [e],
            onload: this.zt.RI(this)
        })
    };
    s.zt = function (e) {
        this.kd("onNickNameValid", e)
    };
    s.At = function (e) {
        this.zq({key: r + o, url: "MemberBean.saveEmail", param: [e], onload: this.Bt.RI(this, e)})
    };
    s.Bt = function (e, t) {
        this.kd("onsaveEmail", e, t)
    };
    s.gN = function () {
        this.zq({key: r + o, url: "MemberBean.sendActiveEmail", onload: this.Dt.RI(this)})
    };
    s.Dt = function (e) {
        this.kd("onsendActiveEmail", e)
    };
    s.Et = function (e) {
        this.zq({key: r + o, url: "MemberBean.getSchools", param: [e], onload: this.Ft.RI(this)})
    };
    s.Ft = function (e) {
        this.kd("ongetSchools", e)
    };
    s.Gt = function (e, t) {
        this.zq({key: r + o, url: "MemberBean.getDepartment", param: [e, t], onload: this.Ht.RI(this)})
    };
    s.Ht = function (e) {
        this.kd("ongetDepartment", e)
    };
    s.hN = function () {
        this.zq({key: r + o, url: "MemberBean.switchStudyRole", param: [], onload: this.Jt.RI(this)})
    };
    s.Jt = function (e) {
        this.kd("onswitchStudyRole", e)
    };
    s.Kt = function () {
        this.zq({key: r + o, url: "MemberBean.getMemberDeliveryAddress", onload: this.Lt.RI(this)})
    };
    s.Lt = function (e) {
        this.kd("ongetMemberDeliveryAddress", e)
    };
    s.Mt = function (e) {
        this.zq({key: r + o, param: [e], url: "MemberBean.setMemberDeliveryAddress", onload: this.Nt.RI(this)})
    };
    s.Nt = function (e) {
        this.kd("onsetMemberDeliveryAddress", e)
    };
    s.Ot = function (e) {
        this.zq({key: r + o, param: [e], url: "MemberBean.saveMemberEpayAccount", onload: this.Pt.RI(this)})
    };
    s.Pt = function (e) {
        this.kd("onsaveMemberEpayAccount", e)
    };
    s.Qt = function () {
        this.zq({key: r + o, url: "MemberBean.checkMemberEpayAccountState", onload: this.Rt.RI(this)})
    };
    s.Rt = function (e) {
        this.kd("oncheckMemberEpayAccountState", e)
    };
    s.St = function (e) {
        this.zq({key: r + o, url: "ConsulationBean.updateYunxinMemberInfo", param: [e], onload: this.Tt.RI(this)})
    };
    s.Tt = function (e) {
        this.kd("onUpdateIMCard", e)
    };
    s.Ut = function (e) {
        this.zq({
            key: r + o,
            url: "ConsulationBean.getYunxinAccountByMemberIds",
            param: [e],
            onload: this.Vt.RI(this),
            sync: !0
        })
    };
    s.Vt = function (e) {
        this.kd("onGetYunxinAccounts", e)
    };
    s.Wt = function (e) {
        this.zq({
            key: r + o,
            url: "ConsulationBean.createYunxinAccountByIds",
            notShowLoading: !0,
            param: [e],
            onload: this.Xt.RI(this)
        })
    };
    s.Xt = function (e) {
        this.kd("onCreateImAccounts", e)
    };
    s.Yt = function () {
        i.mf(e.studyHttpsHref + "/passport/cellphone/getCurrentLoginMobile.htm", {
            type: "json",
            method: "POST",
            mode: 0,
            cookie: !0,
            onload: this.Zt.RI(this)
        })
    };
    s.Zt = function (e) {
        this.kd("onGetCurrentLoginMobile", e)
    }
}, "0a75c7094be3e9ca124b1c7fdd9c05b5");
I$("fc9a761be230b6c2c8dc839c426ac3bf", function () {
    var e = NEJ.O, t = NEJ.P("nej.j"), i = NEJ.P("nej.u"), n = NEJ.P("edu.d"), a = NEJ.P("edu.u"), o = i.HJ(), s,
        r = "ck-loginCache", c = window;
    n.iN = NEJ.C();
    au = n.iN.hK(n.vq);
    au.jN = function (e, i, n, a) {
        var o = "mobile=" + e + "&password=" + i + "&saveFlag=" + n + "&returnUrl=" + a;
        t.mf(c.studyHttpsHref + "/passport/cellphone/login.htm", {
            type: "json",
            method: "POST",
            data: o,
            mode: 0,
            cookie: !0,
            onload: this.cu.RI(this)
        })
    };
    au.cu = function (e) {
        this.kd("oncellPhoneLogin", e)
    };
    au.kN = function (e, i, n, a) {
        var o = "mobile=" + e + "&validationCode=" + i + "&password=" + n + "&returnUrl=" + a;
        t.mf(c.studyHttpsHref + "/passport/cellphone/registerAndLogin.htm", {
            type: "json",
            method: "POST",
            data: o,
            mode: 0,
            cookie: !0,
            onload: this.fu.RI(this)
        })
    };
    au.fu = function (e) {
        this.kd("oncellPhoneRegister", e)
    };
    au.gu = function (e) {
        t.mf(c.studyHttpsHref + "/passport/cellphone/v2/sendValidationCode.htm", {
            type: "json",
            method: "POST",
            data: e,
            mode: 0,
            cookie: !0,
            onload: this.hu.RI(this)
        })
    };
    au.hu = function (e) {
        this.kd("oncodeSendV2", e)
    };
    au.iu = function (e) {
        var i = "mobile=" + e;
        t.mf(c.studyHttpsHref + "/passport/cellphone/sendValidationCode2Reg.htm", {
            type: "json",
            method: "POST",
            data: i,
            mode: 0,
            cookie: !0,
            onload: this.ju.RI(this)
        })
    };
    au.ju = function (e) {
        this.kd("oncodeSend", e)
    };
    au.ku = function (e) {
        t.mf(c.studyHttpsHref + "/passport/cellphone/v2/sendValidationCode.htm", {
            type: "json",
            method: "POST",
            data: e,
            mode: 0,
            cookie: !0,
            onload: this.lu.RI(this)
        })
    };
    au.lu = function (e) {
        this.kd("onsendValidationCode2RetrievePassword", e)
    };
    au.mu = function () {
        t.mf(c.studyHttpsHref + "/passport/cellphone/sendValidationCode2ChangePassword.htm", {
            type: "json",
            method: "POST",
            mode: 0,
            cookie: !0,
            onload: this.nu.RI(this)
        })
    };
    au.nu = function (e) {
        this.kd("onsendValidationCode2ChangePassword", e)
    };
    au.ou = function (e, i) {
        var n = "validationCode=" + e + "&newPassword=" + i;
        t.mf(c.studyHttpsHref + "/passport/cellphone/changePassword.htm", {
            type: "json",
            method: "POST",
            data: n,
            mode: 0,
            cookie: !0,
            onload: this.pu.RI(this)
        })
    };
    au.pu = function (e) {
        this.kd("onchangePassword", e)
    };
    au.qu = function (e, i, n, a) {
        var o = "mobile=" + e + "&validationCode=" + i + "&newPassword=" + n + "&returnUrl=" + a;
        t.mf(c.studyHttpsHref + "/passport/cellphone/retrievePasswordAndLogin.htm", {
            type: "json",
            method: "POST",
            data: o,
            mode: 0,
            cookie: !0,
            onload: this.ru.RI(this)
        })
    };
    au.ru = function (e) {
        this.kd("onretrievePasswordAndLogin", e)
    };
    au.lN = function (e, i, n) {
        var a = "mobile=" + e + "&password=" + i + "&returnUrl=" + n;
        t.mf(c.studyHttpsHref + "/passport/cellphone/bindCallback.htm", {
            type: "json",
            method: "POST",
            data: a,
            mode: 0,
            cookie: !0,
            onload: this.tu.RI(this)
        })
    };
    au.tu = function (e) {
        this.kd("ontelbindCallback", e)
    };
    au.uu = function (e, i) {
        var n = "mobile=" + e + "&validationCode=" + i;
        t.mf(c.studyHttpsHref + "/passport/cellphone/verifyValidationCode.htm", {
            type: "json",
            method: "POST",
            data: n,
            mode: 0,
            cookie: !0,
            onload: this.vu.RI(this)
        })
    };
    au.vu = function (e) {
        this.kd("onverifyValidationCode", e)
    };
    au.wu = function (e) {
        var i = "mobile=" + e;
        t.mf(c.studyHttpsHref + "/passport/cellphone/needVerifyCode.htm", {
            type: "json",
            method: "POST",
            data: i,
            mode: 0,
            cookie: !0,
            onload: this.xu.RI(this)
        })
    };
    au.xu = function (e) {
        this.kd("onneedVerifyCode", e)
    };
    au.yu = function (e) {
        var i = "mobile=" + e;
        t.mf(c.studyHttpsHref + "/passport/cellphone/getEncryptKey.htm", {
            type: "json",
            method: "POST",
            data: i,
            mode: 0,
            cookie: !0,
            onload: this.zu.RI(this)
        })
    };
    au.zu = function (e) {
        this.kd("ongetEncryptKey", e)
    }
}, "0a75c7094be3e9ca124b1c7fdd9c05b5");
I$("3c14aab990586dd8e5e797a28c014212", function () {
    var e = NEJ.P("nej.u"), t = NEJ.P("edu.u"), i = NEJ.P("edu.r"), n = NEJ.P("nej.e"), a = NEJ.P("edu.d"),
        o = NEJ.P("nej.v"), s = window;
    var r = '<div class="m-tel-login" on-keyup={this.onkeyPress($event)} >                            <div class="inputbox" r-class={{\'err\':!!isTelError}}>                                <div class="u-logo">                                    <div class="u-logo-tel"></div>                                </div>                                <div class="u-input box f-f0">                                    <span class="prefix f-pr">+86</span>                                    <input placeholder="请输入手机号" autofocus="autofocus" name="tel" ref="tel" r-pojo={tel} type="tel" on-focus={this.onTelFocus()} >                                </div>                            </div>                            <div class="inputbox" r-class={{\'err\':!!isPwdError}}>                                <div class="u-logo">                                    <div class="u-logo-pwd"></div>                                </div>                                <div class="u-input box f-f0">                                    <input placeholder="请输入密码" name="pwd" ref="pwd" r-pojo={pwd} type="password" on-focus={this.onPwdFocus()}>                                </div>                            </div>                            <div class="m-error-box" r-hide = {!errMsg}>                                <div class="ferrortail f-ib"></div>                                <div class="ferrorhead f-ib">{errMsg}</div>                            </div>                            <div class="u-loginbtn" r-class={{\'ready\':!!isInputOk}} on-click={this.onSubmit()}>{okBtnCnt}</div>                            <div class="m-unlogin" r-hide={isAuthorize}>                                <div class="b-unlogin">                                    <span class="u-checkbox tabfocus" r-class={{\'u-checkbox-select\':isRemeberChk}}>                                        <input id="un-login" type="checkbox" name="un-login" class="un-login" on-change = {this.onRemeberClick()}>                                    </span>                                    <label for="un-login">十天内免登录</label>                                </div>                                <div class="forgetpwd j-redirect" on-click={this.onRetrievePwdClick()}>忘记密码？</div>                                <div id="changepage" class="u-regbtn bgcolor tabfocus j-redirect" on-click={this.onRegisterClick()}>去注册</div>                            </div>                        </div>';
    i.Au = i.Kn.extend({
        name: "TelLoginUI", template: r, config: function () {
            this.data = NEJ.EX({
                type: null,
                tel: null,
                pwd: null,
                isRemeberChk: !0,
                isTelError: !1,
                isPwdError: !1,
                errMsg: null,
                isInputOk: !1,
                curShow: null,
                okBtnCnt: "登录",
                isAuthorize: !1
            }, this.data);
            this.$watch(["tel", "pwd"], function (e, t) {
                if (e && t) this.data.isInputOk = !0; else this.data.isInputOk = !1;
                this.$update()
            });
            this.Zd = new a.iN;
            this.Bu = new a.Fs;
            this.Zd.Cc("oncellPhoneLogin", this.cbonCellPhoneLogin.RI(this));
            this.Bu.Cc("onvalidateLoginCondition", this.cbonvalidateLoginCondition.RI(this))
        }, init: function () {
        }, onkeyPress: function (e) {
            if (13 == e.which) {
                this.onSubmit();
                e.event.preventDefault()
            }
        }, onRemeberClick: function () {
            this.data.isRemeberChk = !this.data.isRemeberChk;
            this.$update()
        }, onRetrievePwdClick: function () {
            if (1 != this.data.type) {
                this.data.curShow = "retrievepwd";
                this.$update()
            } else s.location.href = s.mobileRetrievePwd + "?returnUrl=" + e.Pi(s.returnUrl || s.studyHref)
        }, onRegisterClick: function () {
            if (1 != this.data.type) {
                this.data.curShow = "register";
                this.$update()
            } else s.location.href = s.mobileTelRegisterHref + "?returnUrl=" + e.Pi(s.returnUrl || s.studyHref)
        }, cleanErrorMsg: function () {
            this.data.errMsg = null;
            this.data.isTelError = !1;
            this.data.isPwdError = !1
        }, validate: function () {
            this.cleanErrorMsg();
            var e = this.$refs.tel.value, i = this.$refs.pwd.value;
            if (!e) {
                this.data.errMsg = "手机号不能为空";
                this.data.isTelError = !0;
                this.$update();
                return !1
            }
            if (!t.Cl(e)) {
                this.data.errMsg = "请输入正确格式的手机号";
                this.data.isTelError = !0;
                this.$update();
                return !1
            }
            if (!i) {
                this.data.errMsg = "密码不能为空";
                this.data.isPwdError = !0;
                this.$update();
                return !1
            }
            if (i && (i.length < 6 || i.length > 16)) {
                this.data.errMsg = "请输入正确的账号/密码";
                this.data.isPwdError = !0;
                this.$update();
                return !1
            }
            return !0
        }, onTelFocus: function () {
            this.data.errMsg = null;
            this.data.isTelError = !1;
            this.$update()
        }, onPwdFocus: function () {
            this.data.errMsg = null;
            this.data.isPwdError = !1;
            this.$update()
        }, onSubmit: function () {
            if (this.validate()) {
                var i = e.Yh(e.Yh((this.data.tel || "") + "" + (this.data.pwd || "")));
                if (this.data.isAuthorize) this.Bu.$s(this.data.tel, i); else this.Zd.jN(this.data.tel, i, this.data.isRemeberChk, e.Pi(t.jq()))
            }
        }, cbonCellPhoneLogin: function (e) {
            if (e) if (0 != e.code) {
                if (22 == e.code) this.data.isTelError = !0; else if (23 == e.code) this.data.isPwdError = !0; else if (25 == e.code) ;
                this.data.errMsg = e.message;
                this.$update()
            } else s.location.href = e.result
        }, cbonvalidateLoginCondition: function (i) {
            if (i) {
                var n = e.Yh(e.Yh((this.data.tel || "") + "" + (this.data.pwd || "")));
                if (0 != i.code) {
                    if (22 == i.code) this.data.isTelError = !0; else if (23 == i.code) this.data.isPwdError = !0; else if (25 == i.code) ;
                    this.data.errMsg = i.message;
                    this.$update()
                } else s.location.href = s.studyHttpsHref + "/passport/cellphone/bindCallback.htm?mobile=" + this.data.tel + "&password=" + n + "&returnUrl=" + e.Pi(t.jq())
            }
        }
    });
    return i.Au
}, "106351135a8e461ae9fda308811b8d7e", "7507f0ffebb5d28414ec67fde145bc96", "b6951637f3eb26689d734a6b2492c035", "8ae9513a791ecd9d9d3b27b748aa893f", "71af3dcddfc419e6de29bb8d01674245", "fc9a761be230b6c2c8dc839c426ac3bf");
I$("ec6d1975f95d7a855b955933c1392ce4", function () {
    var e = NEJ.P("nej.u"), t = NEJ.P("edu.u"), i = NEJ.P("edu.r"), n = NEJ.P("nej.e"), a = NEJ.P("edu.d"),
        o = NEJ.P("nej.v"), s = window;
    var r = '<div class="m-tel-image-validate-code f-pa">                            <span class="m-tel-image-validate-code_close f-icon icon-uniE614 f-pa" on-click={this.closeMe()}></span>                            <div class="m-tel-image-validate-code_triangleUp f-pa"></div>                            <div class="m-tel-image-validate-code_tip">您的操作过于频繁，请输入图形验证码</div>                            <div class="m-tel-image-validate-code_inputwrap f-cb">                                <div class="m-tel-image-validate-code_inputbox f-fl">                                    <input ref="input" on-keyup={this.onkeyup($event)} placeholder={placeholder} r-pojo={code} />                                </div>                                <div class="m-tel-image-validate-code_imgbox f-fl" on-click={this.changeImg($event)}>                                    <img src="{randomSrc}" height="41" title="验证码" alt="验证码" width="140" />                                </div>                                <div class="m-tel-image-validate-code_refreshbox f-fl" on-click={this.changeImg($event)}>刷新</div>                            </div>                            <div class="f-cb">                                <div class="m-tel-image-validate-code_btnBox f-fl" on-click={this.sendImageCode()}>确定</div>                                <div class="m-tel-image-validate-code_errBox f-fl" r-hide={!errMsg}><div class="erricon f-ib"></div>{errMsg}</div>                            </div>                        </div>';
    i.Cu = i.Kn.extend({
        name: "TelImageValidateCodeUI", template: r, config: function () {
            this.data = NEJ.EX({
                codeLength: 5,
                errMsg: null,
                imgSrc: "http://capture.srv.icourse163.org/captcha/getVerifyCode.htm?bizType=3&sessionId=" + this.data.tel,
                randomSrc: ""
            }, this.data);
            this.$watch(["imgSrc"], function () {
                this.getImg()
            })
        }, init: function () {
            this.changeImg()
        }, reset: function () {
            this.clear();
            this.changeImg();
            this.$update()
        }, clear: function () {
            this.data.code = "";
            this.$refs.input.focus()
        }, changeImg: function () {
            this.$refs.input.focus();
            this.getImg()
        }, closeMe: function () {
            this.$emit("close", {sender: this});
            this.destroy()
        }, sendImageCode: function () {
            if (this.data.code && !(this.data.code.trim().length <= 0)) this.$emit("sendCode", {
                sender: this,
                imageValidationCode: this.data.code
            }); else this.data.errMsg = "输入有误，请重新输入！"
        }, getImg: function () {
            var e;
            if (this.data.imgSrc) {
                if (this.data.imgSrc.indexOf("?") !== -1) e = "&random=" + +new Date; else e = "?random=" + +new Date;
                this.data.randomSrc = this.data.imgSrc + e;
                this.data.code = "";
                this.$update()
            }
        }, onkeyup: function (e) {
            this.data.code = this.$refs.input.value;
            this.data.errMsg = !1;
            if (this.data.code) if (this.data.code.replace(/\s/g, "").length == this.data.codeLength) {
                this.data.code = this.data.code.replace(/\s/g, "");
                this.$update();
                this.sendImageCode()
            } else if (this.data.code.replace(/\s/g, "").length > this.data.codeLength) this.clear()
        }
    });
    return i.Cu
}, "106351135a8e461ae9fda308811b8d7e");
I$("c5e021852bdc84210b04dca4f4abb6d2", function () {
    var e = NEJ.P("nej.u"), t = NEJ.P("edu.u"), i = NEJ.P("edu.r"), n = NEJ.P("nej.e"), a = NEJ.P("edu.m"),
        o = NEJ.P("edu.d"), s = NEJ.P("nej.v"), r = window;
    var c = '<div class="m-retrievePwd-box f-cb">                            <div class="boxwrap">                                <div class="m-title">找回密码</div>                                <div class="m-telcheck-container" r-hide={curStep !== "checktel"}>                                    <div class="inputbox" r-class={{\'err\':!!isTelError}}>                                        <div class="u-logo">                                            <div class="u-logo-tel"></div>                                        </div>                                        <div class="u-input box f-f0">                                            <span class="prefix f-pr">+86</span>                                            <input placeholder="请输入手机号" name="tel" ref="tel" r-pojo={tel} type="tel" on-focus={this.onTelFocus()} >                                        </div>                                    </div>                                    <div class="code-input-box f-cb f-pr">                                        <div class="inputbox f-fl" r-class={{\'err\':!!isCodeError}}>                                            <div class="u-logo">                                                <div class="u-logo-code"></div>                                            </div>                                            <div class="u-input box">                                                <input placeholder="验证码" name="code" ref="code" r-pojo={code} type="text" on-focus={this.onCodeFocus()}>                                            </div>                                        </div>                                        <div class="u-codebtn f-fr f-f0" ref="codeBtn" r-class={{\'z-dis\':!tel}} r-hide={!!hasGotCode} on-click={this.onSendCode()}>{sendFlag==0?"发送验证码":"重新发送"}</div>                                        <div class="u-codebtn f-fr f-f0 z-dis" r-hide={!hasGotCode}>{leftTime}秒</div>                                        {#if !!showImageValidateCodeUI}                                            <TelImageValidateCodeUI                                               ref="telImageValidateCodeUI"                                              tel={tel}                                              on-close={showImageValidateCodeUI=false}                                              on-sendCode={this.doSendCode($event)}                                             />                                        {/if}                                    </div>                                    <div class="m-error-box" r-hide = {!errMsg}>                                        <div class="ferrortail f-ib"></div>                                        <div class="ferrorhead f-ib">{errMsg}</div>                                    </div>                                    <div class="u-nextbtn u-btn f-f0" r-class={{"ready" : !!isCodeOk}} on-click = {this.goNext()}>下一步</div>                                </div>                                <div class="m-pwdinput-container" r-hide={curStep !== "pwdinput"}>                                    <div class="inputbox" r-class={{\'err\':!!isPwdError}}>                                        <div class="u-logo">                                            <div class="u-logo-pwd"></div>                                        </div>                                        <div class="u-input box f-f0">                                            <input placeholder="输入6至16位的密码" name="pwd" ref="tel" r-pojo={pwd} type="password" on-focus={this.onPwdFocus()} >                                        </div>                                    </div>                                    <div class="inputbox" r-class={{\'err\':!!isRePwdError}}>                                        <div class="u-logo">                                            <div class="u-logo-pwd"></div>                                        </div>                                        <div class="u-input box f-f0">                                            <input placeholder="再重复一遍新密码" name="repwd" ref="repwd" r-pojo={repwd} type="password" on-focus={this.onRePwdFocus()} >                                        </div>                                    </div>                                    <div class="m-error-box" r-hide = {!errMsg}>                                        <div class="ferrortail f-ib"></div>                                        <div class="ferrorhead f-ib">{errMsg}</div>                                    </div>                                    <div class="u-nextbtn u-btn f-f0" r-class={{"ready" : !!isAllOk}} on-click={this.onretrievePassword()}>完成</div>                                </div>                                <div class="m-bottom-back" on-click = {curShow ="login"}><手机号登录</div>                            </div>                        </div>';
    i.Du = i.Kn.extend({
        name: "RetrievePwdUI", template: c.replace(/><手机号/gi, ">&lt;手机号"), config: function () {
            this.data = NEJ.EX({
                tel: null,
                code: null,
                curStep: "checktel",
                isTelError: !1,
                isCodeError: !1,
                isPwdError: !1,
                isRePwdError: !1,
                errMsg: null,
                isCodeOk: !1,
                isAllOk: !1,
                hasGotCode: !1,
                leftTime: 60,
                curShow: null,
                sendFlag: 0
            }, this.data);
            this.Zd = new o.iN;
            if (t.Qk()) {
                this.Zd.Cc("onsendValidationCode2RetrievePassword", this.cbSendCode2Mobile.RI(this));
                this.Zd.Cc("onneedVerifyCode", this.cbonneedVerifyCode2Mobile.RI(this))
            } else {
                this.Zd.Cc("onsendValidationCode2RetrievePassword", this.cbSendCode.RI(this));
                this.Zd.Cc("onneedVerifyCode", this.cbonneedVerifyCode.RI(this))
            }
            this.Zd.Cc("onretrievePasswordAndLogin", this.cbonretrievePasswordAndLogin.RI(this));
            this.Zd.Cc("onverifyValidationCode", this.cbononverifyValidationCode.RI(this));
            this.Zd.Cc("ongetEncryptKey", this.cbongetEncryptKey.RI(this));
            this.$watch(["tel", "code"], function () {
                if (this.data.tel && this.data.code) {
                    this.data.isCodeOk = !0;
                    this.$update()
                } else {
                    this.data.isCodeOk = !1;
                    this.$update()
                }
            });
            this.$watch(["pwd", "repwd"], function () {
                if (this.data.pwd && this.data.repwd) {
                    this.data.isAllOk = !0;
                    this.$update()
                } else {
                    this.data.isAllOk = !1;
                    this.$update()
                }
            })
        }, init: function () {
        }, initLeftTimeInterval: function () {
            this.data.hasGotCode = !0;
            this.data.sendFlag = 1;
            if (this.data.leftTimeInerval) clearInterval(this.data.leftTimeInerval);
            this.$update();
            this.data.leftTimeInerval = setInterval(function () {
                if (this.data.leftTime > 1) this.data.leftTime--; else {
                    this.data.leftTime = 60;
                    this.data.hasGotCode = !1;
                    clearInterval(this.data.leftTimeInerval)
                }
                this.$update()
            }.bind(this), 1e3)
        }, cleanErrorMsg: function () {
            this.data.errMsg = null;
            this.data.isTelError = !1;
            this.data.isCodeError = !1;
            this.data.isPwdError = !1;
            this.data.isRePwdError = !1
        }, onTelFocus: function () {
            this.data.isTelError = !1;
            this.data.errMsg = null
        }, onCodeFocus: function () {
            this.data.isCodeError = !1;
            this.data.errMsg = null
        }, onPwdFocus: function () {
            this.data.isPwdError = !1;
            this.data.errMsg = null
        }, onRePwdFocus: function () {
            this.data.isRePwdError = !1;
            this.data.errMsg = null
        }, goNext: function () {
            var e = this.data.tel || "";
            var i = this.data.code || "";
            if (e.length < 1 || !t.Cl(e)) {
                this.data.errMsg = "手机号码格式不正确";
                this.data.isTelError = !0;
                this.$update();
                return !1
            }
            if (!i) {
                this.data.errMsg = "验证码不能为空";
                this.data.isCodeError = !0;
                this.$update();
                return !1
            }
            this.Zd.uu(this.data.tel, this.data.code)
        }, cbononverifyValidationCode: function (e) {
            if (e) {
                if (0 == e.code) this.data.curStep = "pwdinput"; else this.data.errMsg = e.message;
                this.$update()
            }
        }, onSendCode: function () {
            if (!this.data.showImageValidateCodeUI) {
                var e = this.data.tel || "";
                if (e.length < 1 || !t.Cl(e)) {
                    this.data.errMsg = "手机号码格式不正确";
                    this.data.isTelError = !0;
                    this.$update();
                    return !1
                }
                this.Zd.wu(this.data.tel)
            }
        }, cbonneedVerifyCode: function (e) {
            if (e) if (0 == e.code) if (e.result) {
                this.data.showImageValidateCodeUI = !0;
                this.$update()
            } else {
                this.data.showImageValidateCodeUI = !1;
                this.$update();
                this.doSendCode()
            }
        }, Eu: function () {
            if (this.telValidateCodeDialog) this.telValidateCodeDialog.destroy()
        }, Fu: function () {
            if (this.telValidateCodeDialog) this.telValidateCodeDialog.destroy();
            this.telValidateCodeDialog = new i.Gu({data: {tel: this.data.tel}});
            this.telValidateCodeDialog.$inject(document.body);
            this.telValidateCodeDialog.$on("close", function () {
                this.telValidateCodeDialog = null
            }.RI(this));
            this.telValidateCodeDialog.$on("sendCode", function (e) {
                this.doSendCode(e)
            }.RI(this))
        }, cbonneedVerifyCode2Mobile: function (e) {
            if (e) if (0 == e.code) if (e.result) {
                this.Eu();
                this.Fu()
            } else this.doSendCode(); else this.$update({errMsg: e.message || ""})
        }, doSendCode: function (e) {
            if (e) {
                this.data.imageValidationCode = (e || {}).imageValidationCode || "";
                this.$update()
            }
            this.Zd.yu(this.data.tel)
        }, cbongetEncryptKey: function (e) {
            if (e) if (0 == e.code) {
                var i = e.result;
                var n = t.lq(i, this.data.tel, this.data.imageValidationCode, "retrievePassword");
                this.Zd.ku(n)
            }
        }, Hu: function (e) {
            if (this.$refs && this.$refs.telImageValidateCodeUI) {
                this.$refs.telImageValidateCodeUI.$update({code: "", errMsg: e.message, isCodeOk: !1});
                this.$refs.telImageValidateCodeUI.changeImg()
            }
            if (this.telValidateCodeDialog) {
                this.telValidateCodeDialog.$update({code: "", errMsg: "输入有误，请重新输入！"});
                this.telValidateCodeDialog.changeImg()
            }
        }, cbSendCode2Mobile: function (e) {
            if (e) {
                if (0 == e.code) {
                    this.Eu();
                    this.initLeftTimeInterval()
                } else {
                    if (22 == e.code) this.data.isTelError = !0;
                    if (30 == e.code) {
                        this.Hu(e);
                        return
                    } else this.Eu();
                    this.data.errMsg = e.message
                }
                this.$update()
            }
        }, cbSendCode: function (e) {
            if (e) {
                if (0 == e.code) {
                    this.$update({showImageValidateCodeUI: !1});
                    this.initLeftTimeInterval()
                } else {
                    if (22 == e.code) this.data.isTelError = !0;
                    if (30 == e.code) {
                        this.Hu(e);
                        return
                    } else this.data.showImageValidateCodeUI = !1;
                    this.data.errMsg = e.message
                }
                this.$update()
            }
        }, onretrievePassword: function () {
            var i = this.data.tel || 0, n = this.data.code || 0, a = this.data.pwd || "", o = this.data.repwd || "";
            if (!a || !/^[\w]{6,16}$/.test(a)) {
                this.data.errMsg = "请设置6至16位的密码";
                this.data.isPwdError = !0;
                this.$update();
                return !1
            }
            if (!o) {
                this.data.errMsg = "请设置重复密码";
                this.data.isRePwdError = !0;
                this.$update();
                return !1
            }
            if (a !== o) {
                this.data.errMsg = "两次输入的密码不一致";
                this.data.isRePwdError = !0;
                this.$update();
                return !1
            }
            a = e.Yh(e.Yh((this.data.tel || "") + "" + (this.data.pwd || "")));
            this.Zd.qu(i, n, a, e.Pi(t.jq()))
        }, cbonretrievePasswordAndLogin: function (e) {
            if (e) {
                if (0 == e.code) window.location.href = e.result || "//study.163.com"; else if (12 == e.code) t.showToastTips("验证码已过期，请重新验证手机号");
                this.$update()
            }
        }
    });
    return i.Du
}, "106351135a8e461ae9fda308811b8d7e", "3c14aab990586dd8e5e797a28c014212", "7507f0ffebb5d28414ec67fde145bc96", "b6951637f3eb26689d734a6b2492c035", "71af3dcddfc419e6de29bb8d01674245", "fc9a761be230b6c2c8dc839c426ac3bf", "ec6d1975f95d7a855b955933c1392ce4");
I$("b1af513115536e9792eeea5105c5c35c", function () {
    var e = window, t = NEJ.O, i = NEJ.F, n = NEJ.P("nej.e"), a = NEJ.P("nej.v"), o = NEJ.P("nej.u"),
        s = NEJ.P("edu.m"), r = NEJ.P("edu.u"), c = NEJ.P("nej.ut"), d;
    r.gm = function () {
        return (new Date).getTime() - e.serverTimeDiff
    };
    r.Iu = function () {
        var t = (new Date).getTime();
        return function () {
            return t - e.serverTimeDiff
        }
    }();
    r.jm = function (e) {
        var t = new Date;
        t.setTime(e || 0);
        return t.getFullYear() + "年" + (t.getMonth() + 1) + "月" + t.getDate() + "日 " + t.getHours() + ":" + (t.getMinutes() < 10 ? "0" : "") + t.getMinutes()
    };
    r.Ju = function (e) {
        return Math.ceil((e || 0) / 864e5)
    };
    r.Ku = function (e) {
        var t = new Date;
        t.setTime(e || 0);
        var i = new Date;
        if (i.getTime() < t.getTime()) return "1秒前"; else if (i.getFullYear() != t.getFullYear()) return t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate(); else if (i.getMonth() != t.getMonth() || i.getDate() != t.getDate()) return t.getMonth() + 1 + "月" + t.getDate() + "日"; else if (i.getHours() != t.getHours()) {
            var n = t.getMinutes();
            n = n < 10 ? "0" + n : n;
            return t.getHours() + ":" + n
        } else if (i.getMinutes() != t.getMinutes()) return i.getMinutes() - t.getMinutes() + "分钟前"; else if (i.getSeconds() != t.getSeconds()) return i.getSeconds() - t.getSeconds() + "秒前"; else return "1秒前"
    };
    r.sm = function (e) {
        e = e || 0;
        var t = parseInt(e / 60);
        var i = parseInt(e % 60);
        return (t < 10 ? "0" + t : t) + ":" + (i < 10 ? "0" + i : i)
    };
    r.Lu = function (e) {
        e = e || 0;
        var t = Math.floor(e / 3600), i = Math.floor(e / 60) - 60 * t, n = Math.floor(e % 60);
        return (t < 10 ? "0" + t : t) + ":" + (i < 10 ? "0" + i : i) + ":" + (n < 10 ? "0" + n : n)
    };
    r.Mu = function (e) {
        var t = new Date;
        t.setTime(e);
        var i = t.getMonth() + 1;
        var n = t.getDate();
        return t.getFullYear() + "-" + (i < 10 ? "0" + i : i) + "-" + (n < 10 ? "0" + n : n)
    };
    r.Nu = function (e, t) {
        return o.sJ(e, "yyyy-MM-dd") + "  " + o.sJ(e, "HH:mm") + "-" + o.sJ(t, "HH:mm")
    };
    r.Ou = function (e, t) {
        var i = (new Date).getTime(), n = o.sJ(parseInt(i), "yyyy-MM-dd-HH-mm").split("-"),
            a = o.sJ(parseInt(e), "yyyy-MM-dd-HH-mm").split("-"), s = "";
        if (t == r.CONST.LIVE_STATUS_LIVING) return "正在"; else if (n[0] == a[0] && n[1] == a[1] && a[2] == n[2]) s = "今天";
        var c = '<span class="t">' + (s || r.Mu(e)) + "</span>" + a[3] + ":" + a[4];
        return c
    };
    var _ = function (e) {
        var t = r.gm(), i = e - t, n, a, o, s;
        if (i < 0) return "";
        i = ~~(i / 1e3);
        n = ~~(i / 86400);
        a = ~~((i - 86400 * n) / 3600);
        o = ~~((i - 86400 * n - 3600 * a) / 60);
        s = i - 86400 * n - 3600 * a - 60 * o;
        return {d: n || 0, h: a || 0, m: o || 0, s: s || 0}
    };
    r.lm = function (e) {
        var t = _(e);
        return t.d + "天" + t.h + "时" + t.m + "分" + t.s + "秒"
    };
    r.Pu = function (e) {
        var t = _(e);
        return t.d + "天" + t.h + "时"
    };
    r.Qu = function (e) {
        var t = _(e);
        return t.m + "分" + t.s + "秒"
    };
    r.Ru = function (e) {
        var t = _(e);
        return t.h + "时" + t.m + "分" + t.s + "秒"
    };
    r.nm = function (e) {
        var t = _(e);
        var i, n, a;
        if (t) {
            i = t.h + 24 * t.d < 10 ? "0" + (t.h + 24 * t.d) : t.h + 24 * t.d;
            n = t.m < 10 ? "0" + t.m : t.m;
            a = t.s < 10 ? "0" + t.s : t.s;
            return i + ":" + n + ":" + a
        }
        return ""
    };
    r.Su = function (e) {
        return e - 999 < r.gm()
    };
    r.Tu = function (e) {
        var t = _(e);
        if (t.d >= 1) return t.d + "天" + t.h + "小时" + t.m + "分钟"; else if (t.h >= 1) return t.h + "小时" + t.m + "分钟"; else if (t.m >= 1) return t.m + "分钟"; else return t.s + "秒钟"
    };
    r.vM = function () {
        var e = new Date(r.gm()), t = e.getHours(), i = "";
        if (t < 6) i = "凌晨"; else if (t < 9) i = "早上"; else if (t < 12) i = "上午"; else if (t < 14) i = "中午"; else if (t < 17) i = "下午"; else if (t < 24) i = "晚上";
        return i
    };
    s.Uu = NEJ.C();
    d = s.Uu.hK(c.Xd, !0);
    d.gK = function (e) {
        this.Vu = e.totalTime;
        this.Wu = e.intervalTime;
        this.Xu(this.Vu);
        this.jK(e)
    };
    d.Xu = function (e) {
        this.Yu = Math.floor(e / 86400);
        this.Zu = Math.floor(e / 3600);
        this.$u = Math.floor(e / 60) - 60 * this.Zu;
        this.av = Math.floor(e % 60)
    };
    d.bv = function () {
        return this.Vu || 0
    };
    d.cv = function () {
        return this.Yu || 0
    };
    d.dv = function () {
        return this.Zu || 0
    };
    d.wM = function () {
        var e = this.dv();
        return e < 10 ? "0" + e : e + ""
    };
    d.fv = function () {
        return this.$u || 0
    };
    d.gv = function () {
        var e = this.fv();
        return e < 10 ? "0" + e : e + ""
    };
    d.hv = function () {
        return this.av || 0
    };
    d.jv = function () {
        var e = this.hv();
        return e < 10 ? "0" + e : e + ""
    };
    d.kv = function () {
        if (!this.lv) this.lv = e.setInterval(this.mv.RI(this), 1e3 * this.Wu)
    };
    d.mv = function () {
        var e = "timer";
        this.Vu -= this.Wu;
        if (this.Vu <= 0) {
            this.Vu = 0;
            this.xM();
            e = "timerComplete"
        }
        this.Xu(this.Vu);
        this.kd(e)
    };
    d.xM = function () {
        if (this.lv) this.lv = e.clearInterval(this.lv)
    };
    d.ld = function () {
        this.xM()
    };
    d.Id = function (e) {
        this.kK(e)
    }
}, "ef610943f997eae84e208bd1668f8379");
I$("6c963c01fffdf69f192ebca6184ae05f", function () {
    var e = window, t = NEJ.P("nej.u"), i = NEJ.P("edu.u"), n = NEJ.P("edu.r"), a = NEJ.P("nej.e"), o = NEJ.P("edu.d"),
        s = NEJ.P("edu.m"), r = NEJ.P("nej.v");
    var c = '<div class="m-tel-validate-code-dialog">                        <div class="m-tel-validate-code-dialog_mask"></div>                        <div class="m-tel-validate-code-dialog_body f-pr">                            <span class="m-tel-validate-code-dialog_close f-icon icon-uniE614 f-pa" on-click={this.closeMe()}></span>                            <div class="m-tel-validate-code-dialog_tip">您的操作过于频繁，请输入图形验证码</div>                            <div class="m-tel-validate-code-dialog_imgboxwrap">                                <div class="m-tel-validate-code-dialog_imgbox f-fl" on-click={this.changeImg($event)}>                                    <img src="{randomSrc}" height="41" title="验证码" alt="验证码" width="140" />                                </div>                                <div class="m-tel-validate-code-dialog_refreshbox f-fl" on-click={this.changeImg($event)}>刷新</div>                            </div>                            <div class="m-tel-validate-code-dialog_inputwrap">                                <input ref="input" on-keyup={this.onkeyup($event)} placeholder={placeholder} r-pojo={code} />                            </div>                            <div class="m-tel-validate-code-dialog_btnBox f-fl" on-click={this.sendImageCode()}>确定</div>                            <div class="m-tel-validate-code-dialog_errBox f-fl" r-hide={!errMsg}><div class="erricon f-ib"></div>{errMsg}</div>                        </div>                     </div>';
    n.Gu = n.Kn.extend({
        name: "telValidateCodeDialog", template: c, config: function () {
            this.data = NEJ.EX({
                codeLength: 5,
                errMsg: null,
                imgSrc: "http://capture.srv.icourse163.org/captcha/getVerifyCode.htm?bizType=3&sessionId=" + this.data.tel,
                randomSrc: ""
            }, this.data);
            this.$watch(["imgSrc"], function () {
                this.getImg()
            })
        }, init: function () {
            this.changeImg()
        }, reset: function () {
            this.clear();
            this.changeImg();
            this.$update()
        }, clear: function () {
            this.data.code = "";
            this.$refs.input.focus();
            this.$update()
        }, changeImg: function () {
            this.$refs.input.focus();
            this.getImg()
        }, closeMe: function () {
            this.$emit("close", {sender: this});
            this.destroy()
        }, sendImageCode: function () {
            if (this.data.code && !(this.data.code.trim().length <= 0)) this.$emit("sendCode", {
                sender: this,
                imageValidationCode: this.data.code
            }); else this.data.errMsg = "输入有误，请重新输入！"
        }, getImg: function () {
            var e;
            if (this.data.imgSrc) {
                if (this.data.imgSrc.indexOf("?") !== -1) e = "&random=" + +new Date; else e = "?random=" + +new Date;
                this.data.randomSrc = this.data.imgSrc + e;
                this.data.code = "";
                this.$update()
            }
        }, onkeyup: function (e) {
            this.data.code = this.$refs.input.value;
            this.data.errMsg = !1;
            if (this.data.code) if (this.data.code.replace(/\s/g, "").length == this.data.codeLength) {
                this.data.code = this.data.code.replace(/\s/g, "");
                this.$update();
                this.sendImageCode()
            } else if (this.data.code.replace(/\s/g, "").length > this.data.codeLength) this.clear()
        }
    });
    return n.Gu
}, "106351135a8e461ae9fda308811b8d7e");
I$("130dc9a94bf2cb7bf7cf5d7d41a3c2c6", function () {
    var e = e || function (e, t) {
        var i = Object.create || function () {
            function e() {
            }

            return function (t) {
                var i;
                e.prototype = t;
                i = new e;
                e.prototype = null;
                return i
            }
        }();
        var n = {};
        var a = n.lib = {};
        var o = a.Base = function () {
            return {
                extend: function (e) {
                    var t = i(this);
                    if (e) t.mixIn(e);
                    if (!t.hasOwnProperty("init") || this.init === t.init) t.init = function () {
                        t.$super.init.apply(this, arguments)
                    };
                    t.init.prototype = t;
                    t.$super = this;
                    return t
                }, create: function () {
                    var e = this.extend();
                    e.init.apply(e, arguments);
                    return e
                }, init: function () {
                }, mixIn: function (e) {
                    for (var t in e) if (e.hasOwnProperty(t)) this[t] = e[t];
                    if (e.hasOwnProperty("toString")) this.toString = e.toString
                }, clone: function () {
                    return this.init.prototype.extend(this)
                }
            }
        }();
        var s = a.WordArray = o.extend({
            init: function (e, i) {
                e = this.words = e || [];
                if (i != t) this.sigBytes = i; else this.sigBytes = 4 * e.length
            }, toString: function (e) {
                return (e || c).stringify(this)
            }, concat: function (e) {
                var t = this.words;
                var i = e.words;
                var n = this.sigBytes;
                var a = e.sigBytes;
                this.clamp();
                if (n % 4) for (var o = 0; o < a; o++) {
                    var s = i[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                    t[n + o >>> 2] |= s << 24 - (n + o) % 4 * 8
                } else for (var o = 0; o < a; o += 4) t[n + o >>> 2] = i[o >>> 2];
                this.sigBytes += a;
                return this
            }, clamp: function () {
                var t = this.words;
                var i = this.sigBytes;
                t[i >>> 2] &= 4294967295 << 32 - i % 4 * 8;
                t.length = e.ceil(i / 4)
            }, clone: function () {
                var e = o.clone.call(this);
                e.words = this.words.slice(0);
                return e
            }, random: function (t) {
                var i = [];
                var n = function (t) {
                    var t = t;
                    var i = 987654321;
                    var n = 4294967295;
                    return function () {
                        i = 36969 * (65535 & i) + (i >> 16) & n;
                        t = 18e3 * (65535 & t) + (t >> 16) & n;
                        var a = (i << 16) + t & n;
                        a /= 4294967296;
                        a += .5;
                        return a * (e.random() > .5 ? 1 : -1)
                    }
                };
                for (var a = 0, o; a < t; a += 4) {
                    var r = n(4294967296 * (o || e.random()));
                    o = 987654071 * r();
                    i.push(4294967296 * r() | 0)
                }
                return new s.init(i, t)
            }
        });
        var r = n.enc = {};
        var c = r.Hex = {
            stringify: function (e) {
                var t = e.words;
                var i = e.sigBytes;
                var n = [];
                for (var a = 0; a < i; a++) {
                    var o = t[a >>> 2] >>> 24 - a % 4 * 8 & 255;
                    n.push((o >>> 4).toString(16));
                    n.push((15 & o).toString(16))
                }
                return n.join("")
            }, parse: function (e) {
                var t = e.length;
                var i = [];
                for (var n = 0; n < t; n += 2) i[n >>> 3] |= parseInt(e.substr(n, 2), 16) << 24 - n % 8 * 4;
                return new s.init(i, t / 2)
            }
        };
        var d = r.Latin1 = {
            stringify: function (e) {
                var t = e.words;
                var i = e.sigBytes;
                var n = [];
                for (var a = 0; a < i; a++) {
                    var o = t[a >>> 2] >>> 24 - a % 4 * 8 & 255;
                    n.push(String.fromCharCode(o))
                }
                return n.join("")
            }, parse: function (e) {
                var t = e.length;
                var i = [];
                for (var n = 0; n < t; n++) i[n >>> 2] |= (255 & e.charCodeAt(n)) << 24 - n % 4 * 8;
                return new s.init(i, t)
            }
        };
        var _ = r.Utf8 = {
            stringify: function (e) {
                try {
                    return decodeURIComponent(escape(d.stringify(e)))
                } catch (t) {
                    throw new Error("Malformed UTF-8 data")
                }
            }, parse: function (e) {
                return d.parse(unescape(encodeURIComponent(e)))
            }
        };
        var l = a.BufferedBlockAlgorithm = o.extend({
            reset: function () {
                this.mN = new s.init;
                this.pv = 0
            }, qv: function (e) {
                if ("string" == typeof e) e = _.parse(e);
                this.mN.concat(e);
                this.pv += e.sigBytes
            }, rv: function (t) {
                var i = this.mN;
                var n = i.words;
                var a = i.sigBytes;
                var o = this.blockSize;
                var r = 4 * o;
                var c = a / r;
                if (t) c = e.ceil(c); else c = e.max((0 | c) - this.sv, 0);
                var d = c * o;
                var _ = e.min(4 * d, a);
                if (d) {
                    for (var l = 0; l < d; l += o) this.tv(n, l);
                    var u = n.splice(0, d);
                    i.sigBytes -= _
                }
                return new s.init(u, _)
            }, clone: function () {
                var e = o.clone.call(this);
                e.mN = this.mN.clone();
                return e
            }, sv: 0
        });
        var u = a.Hasher = l.extend({
            cfg: o.extend(), init: function (e) {
                this.cfg = this.cfg.extend(e);
                this.reset()
            }, reset: function () {
                l.reset.call(this);
                this.uv()
            }, update: function (e) {
                this.qv(e);
                this.rv();
                return this
            }, finalize: function (e) {
                if (e) this.qv(e);
                var t = this.vv();
                return t
            }, blockSize: 16, wv: function (e) {
                return function (t, i) {
                    return new e.init(i).finalize(t)
                }
            }, xv: function (e) {
                return function (t, i) {
                    return new h.HMAC.init(e, i).finalize(t)
                }
            }
        });
        var h = n.algo = {};
        return n
    }(Math);
    return e
});
I$("1b2ca148f1661ccce642bac1844c43eb", function (e) {
    !function () {
        function t(e, t, i) {
            var n = [];
            var o = 0;
            for (var s = 0; s < t; s++) if (s % 4) {
                var r = i[e.charCodeAt(s - 1)] << s % 4 * 2;
                var c = i[e.charCodeAt(s)] >>> 6 - s % 4 * 2;
                n[o >>> 2] |= (r | c) << 24 - o % 4 * 8;
                o++
            }
            return a.create(n, o)
        }

        var i = e;
        var n = i.lib;
        var a = n.WordArray;
        var o = i.enc;
        var s = o.Base64 = {
            stringify: function (e) {
                var t = e.words;
                var i = e.sigBytes;
                var n = this.yv;
                e.clamp();
                var a = [];
                for (var o = 0; o < i; o += 3) {
                    var s = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                    var r = t[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255;
                    var c = t[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255;
                    var d = s << 16 | r << 8 | c;
                    for (var _ = 0; _ < 4 && o + .75 * _ < i; _++) a.push(n.charAt(d >>> 6 * (3 - _) & 63))
                }
                var l = n.charAt(64);
                if (l) for (; a.length % 4;) a.push(l);
                return a.join("")
            }, parse: function (e) {
                var i = e.length;
                var n = this.yv;
                var a = this.zv;
                if (!a) {
                    a = this.zv = [];
                    for (var o = 0; o < n.length; o++) a[n.charCodeAt(o)] = o
                }
                var s = n.charAt(64);
                if (s) {
                    var r = e.indexOf(s);
                    if (r !== -1) i = r
                }
                return t(e, i, a)
            }, yv: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        }
    }();
    return e.enc.Base64
}, "130dc9a94bf2cb7bf7cf5d7d41a3c2c6");
I$("37ad7437d40acf25a67ecc88a2152418", function (e) {
    !function (t) {
        function i(e, t, i, n, a, o, s) {
            var r = e + (t & i | ~t & n) + a + s;
            return (r << o | r >>> 32 - o) + t
        }

        function n(e, t, i, n, a, o, s) {
            var r = e + (t & n | i & ~n) + a + s;
            return (r << o | r >>> 32 - o) + t
        }

        function a(e, t, i, n, a, o, s) {
            var r = e + (t ^ i ^ n) + a + s;
            return (r << o | r >>> 32 - o) + t
        }

        function o(e, t, i, n, a, o, s) {
            var r = e + (i ^ (t | ~n)) + a + s;
            return (r << o | r >>> 32 - o) + t
        }

        var s = e;
        var r = s.lib;
        var c = r.WordArray;
        var d = r.Hasher;
        var _ = s.algo;
        var l = [];
        !function () {
            for (var e = 0; e < 64; e++) l[e] = 4294967296 * t.abs(t.sin(e + 1)) | 0
        }();
        var u = _.MD5 = d.extend({
            uv: function () {
                this.Av = new c.init([1732584193, 4023233417, 2562383102, 271733878])
            }, tv: function (e, t) {
                for (var s = 0; s < 16; s++) {
                    var r = t + s;
                    var c = e[r];
                    e[r] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8)
                }
                var d = this.Av.words;
                var _ = e[t + 0];
                var u = e[t + 1];
                var h = e[t + 2];
                var f = e[t + 3];
                var p = e[t + 4];
                var m = e[t + 5];
                var g = e[t + 6];
                var b = e[t + 7];
                var $ = e[t + 8];
                var v = e[t + 9];
                var C = e[t + 10];
                var I = e[t + 11];
                var y = e[t + 12];
                var x = e[t + 13];
                var E = e[t + 14];
                var A = e[t + 15];
                var N = d[0];
                var T = d[1];
                var w = d[2];
                var S = d[3];
                N = i(N, T, w, S, _, 7, l[0]);
                S = i(S, N, T, w, u, 12, l[1]);
                w = i(w, S, N, T, h, 17, l[2]);
                T = i(T, w, S, N, f, 22, l[3]);
                N = i(N, T, w, S, p, 7, l[4]);
                S = i(S, N, T, w, m, 12, l[5]);
                w = i(w, S, N, T, g, 17, l[6]);
                T = i(T, w, S, N, b, 22, l[7]);
                N = i(N, T, w, S, $, 7, l[8]);
                S = i(S, N, T, w, v, 12, l[9]);
                w = i(w, S, N, T, C, 17, l[10]);
                T = i(T, w, S, N, I, 22, l[11]);
                N = i(N, T, w, S, y, 7, l[12]);
                S = i(S, N, T, w, x, 12, l[13]);
                w = i(w, S, N, T, E, 17, l[14]);
                T = i(T, w, S, N, A, 22, l[15]);
                N = n(N, T, w, S, u, 5, l[16]);
                S = n(S, N, T, w, g, 9, l[17]);
                w = n(w, S, N, T, I, 14, l[18]);
                T = n(T, w, S, N, _, 20, l[19]);
                N = n(N, T, w, S, m, 5, l[20]);
                S = n(S, N, T, w, C, 9, l[21]);
                w = n(w, S, N, T, A, 14, l[22]);
                T = n(T, w, S, N, p, 20, l[23]);
                N = n(N, T, w, S, v, 5, l[24]);
                S = n(S, N, T, w, E, 9, l[25]);
                w = n(w, S, N, T, f, 14, l[26]);
                T = n(T, w, S, N, $, 20, l[27]);
                N = n(N, T, w, S, x, 5, l[28]);
                S = n(S, N, T, w, h, 9, l[29]);
                w = n(w, S, N, T, b, 14, l[30]);
                T = n(T, w, S, N, y, 20, l[31]);
                N = a(N, T, w, S, m, 4, l[32]);
                S = a(S, N, T, w, $, 11, l[33]);
                w = a(w, S, N, T, I, 16, l[34]);
                T = a(T, w, S, N, E, 23, l[35]);
                N = a(N, T, w, S, u, 4, l[36]);
                S = a(S, N, T, w, p, 11, l[37]);
                w = a(w, S, N, T, b, 16, l[38]);
                T = a(T, w, S, N, C, 23, l[39]);
                N = a(N, T, w, S, x, 4, l[40]);
                S = a(S, N, T, w, _, 11, l[41]);
                w = a(w, S, N, T, f, 16, l[42]);
                T = a(T, w, S, N, g, 23, l[43]);
                N = a(N, T, w, S, v, 4, l[44]);
                S = a(S, N, T, w, y, 11, l[45]);
                w = a(w, S, N, T, A, 16, l[46]);
                T = a(T, w, S, N, h, 23, l[47]);
                N = o(N, T, w, S, _, 6, l[48]);
                S = o(S, N, T, w, b, 10, l[49]);
                w = o(w, S, N, T, E, 15, l[50]);
                T = o(T, w, S, N, m, 21, l[51]);
                N = o(N, T, w, S, y, 6, l[52]);
                S = o(S, N, T, w, f, 10, l[53]);
                w = o(w, S, N, T, C, 15, l[54]);
                T = o(T, w, S, N, u, 21, l[55]);
                N = o(N, T, w, S, $, 6, l[56]);
                S = o(S, N, T, w, A, 10, l[57]);
                w = o(w, S, N, T, g, 15, l[58]);
                T = o(T, w, S, N, x, 21, l[59]);
                N = o(N, T, w, S, p, 6, l[60]);
                S = o(S, N, T, w, I, 10, l[61]);
                w = o(w, S, N, T, h, 15, l[62]);
                T = o(T, w, S, N, v, 21, l[63]);
                d[0] = d[0] + N | 0;
                d[1] = d[1] + T | 0;
                d[2] = d[2] + w | 0;
                d[3] = d[3] + S | 0
            }, vv: function () {
                var e = this.mN;
                var i = e.words;
                var n = 8 * this.pv;
                var a = 8 * e.sigBytes;
                i[a >>> 5] |= 128 << 24 - a % 32;
                var o = t.floor(n / 4294967296);
                var s = n;
                i[(a + 64 >>> 9 << 4) + 15] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
                i[(a + 64 >>> 9 << 4) + 14] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8);
                e.sigBytes = 4 * (i.length + 1);
                this.rv();
                var r = this.Av;
                var c = r.words;
                for (var d = 0; d < 4; d++) {
                    var _ = c[d];
                    c[d] = 16711935 & (_ << 8 | _ >>> 24) | 4278255360 & (_ << 24 | _ >>> 8)
                }
                return r
            }, clone: function () {
                var e = d.clone.call(this);
                e.Av = this.Av.clone();
                return e
            }
        });
        s.MD5 = d.wv(u);
        s.HmacMD5 = d.xv(u)
    }(Math);
    return e.MD5
}, "130dc9a94bf2cb7bf7cf5d7d41a3c2c6");
I$("43330bb48282d71240c8b94a6d31a312", function (e) {
    !function () {
        var t = e;
        var i = t.lib;
        var n = i.WordArray;
        var a = i.Hasher;
        var o = t.algo;
        var s = [];
        var r = o.SHA1 = a.extend({
            uv: function () {
                this.Av = new n.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
            }, tv: function (e, t) {
                var i = this.Av.words;
                var n = i[0];
                var a = i[1];
                var o = i[2];
                var r = i[3];
                var c = i[4];
                for (var d = 0; d < 80; d++) {
                    if (d < 16) s[d] = 0 | e[t + d]; else {
                        var _ = s[d - 3] ^ s[d - 8] ^ s[d - 14] ^ s[d - 16];
                        s[d] = _ << 1 | _ >>> 31
                    }
                    var l = (n << 5 | n >>> 27) + c + s[d];
                    if (d < 20) l += (a & o | ~a & r) + 1518500249; else if (d < 40) l += (a ^ o ^ r) + 1859775393; else if (d < 60) l += (a & o | a & r | o & r) - 1894007588; else l += (a ^ o ^ r) - 899497514;
                    c = r;
                    r = o;
                    o = a << 30 | a >>> 2;
                    a = n;
                    n = l
                }
                i[0] = i[0] + n | 0;
                i[1] = i[1] + a | 0;
                i[2] = i[2] + o | 0;
                i[3] = i[3] + r | 0;
                i[4] = i[4] + c | 0
            }, vv: function () {
                var e = this.mN;
                var t = e.words;
                var i = 8 * this.pv;
                var n = 8 * e.sigBytes;
                t[n >>> 5] |= 128 << 24 - n % 32;
                t[(n + 64 >>> 9 << 4) + 14] = Math.floor(i / 4294967296);
                t[(n + 64 >>> 9 << 4) + 15] = i;
                e.sigBytes = 4 * t.length;
                this.rv();
                return this.Av
            }, clone: function () {
                var e = a.clone.call(this);
                e.Av = this.Av.clone();
                return e
            }
        });
        t.SHA1 = a.wv(r);
        t.HmacSHA1 = a.xv(r)
    }();
    return e.SHA1
}, "130dc9a94bf2cb7bf7cf5d7d41a3c2c6");
I$("578a1d775fb7d8d76b5fb732a7fbd9e9", function (e) {
    !function () {
        var t = e;
        var i = t.lib;
        var n = i.Base;
        var a = t.enc;
        var o = a.Utf8;
        var s = t.algo;
        var r = s.HMAC = n.extend({
            init: function (e, t) {
                e = this.Bv = new e.init;
                if ("string" == typeof t) t = o.parse(t);
                var i = e.blockSize;
                var n = 4 * i;
                if (t.sigBytes > n) t = e.finalize(t);
                t.clamp();
                var a = this.Cv = t.clone();
                var s = this.Dv = t.clone();
                var r = a.words;
                var c = s.words;
                for (var d = 0; d < i; d++) {
                    r[d] ^= 1549556828;
                    c[d] ^= 909522486
                }
                a.sigBytes = s.sigBytes = n;
                this.reset()
            }, reset: function () {
                var e = this.Bv;
                e.reset();
                e.update(this.Dv)
            }, update: function (e) {
                this.Bv.update(e);
                return this
            }, finalize: function (e) {
                var t = this.Bv;
                var i = t.finalize(e);
                t.reset();
                var n = t.finalize(this.Cv.clone().concat(i));
                return n
            }
        })
    }()
}, "130dc9a94bf2cb7bf7cf5d7d41a3c2c6");
I$("404a97723783a1aed0f3fa178e5602ca", function (e) {
    !function () {
        var t = e;
        var i = t.lib;
        var n = i.Base;
        var a = i.WordArray;
        var o = t.algo;
        var s = o.MD5;
        var r = o.EvpKDF = n.extend({
            cfg: n.extend({keySize: 4, hasher: s, iterations: 1}), init: function (e) {
                this.cfg = this.cfg.extend(e)
            }, compute: function (e, t) {
                var i = this.cfg;
                var n = i.hasher.create();
                var o = a.create();
                var s = o.words;
                var r = i.keySize;
                var c = i.iterations;
                for (; s.length < r;) {
                    if (d) n.update(d);
                    var d = n.update(e).finalize(t);
                    n.reset();
                    for (var _ = 1; _ < c; _++) {
                        d = n.finalize(d);
                        n.reset()
                    }
                    o.concat(d)
                }
                o.sigBytes = 4 * r;
                return o
            }
        });
        t.EvpKDF = function (e, t, i) {
            return r.create(i).compute(e, t)
        }
    }();
    return e.EvpKDF
}, "130dc9a94bf2cb7bf7cf5d7d41a3c2c6", "43330bb48282d71240c8b94a6d31a312", "578a1d775fb7d8d76b5fb732a7fbd9e9");
I$("f1fa4cd740fcda0a78ee923ed2b46b39", function (e) {
    e.lib.Cipher || function (t) {
        var i = e;
        var n = i.lib;
        var a = n.Base;
        var o = n.WordArray;
        var s = n.BufferedBlockAlgorithm;
        var r = i.enc;
        var c = r.Utf8;
        var d = r.Base64;
        var _ = i.algo;
        var l = _.EvpKDF;
        var u = n.Cipher = s.extend({
            cfg: a.extend(), createEncryptor: function (e, t) {
                return this.create(this.Ev, e, t)
            }, createDecryptor: function (e, t) {
                return this.create(this.Fv, e, t)
            }, init: function (e, t, i) {
                this.cfg = this.cfg.extend(i);
                this.Gv = e;
                this.Hv = t;
                this.reset()
            }, reset: function () {
                s.reset.call(this);
                this.uv()
            }, process: function (e) {
                this.qv(e);
                return this.rv()
            }, finalize: function (e) {
                if (e) this.qv(e);
                var t = this.vv();
                return t
            }, keySize: 4, ivSize: 4, Ev: 1, Fv: 2, wv: function () {
                function e(e) {
                    if ("string" == typeof e) return A; else return y
                }

                return function (t) {
                    return {
                        encrypt: function (i, n, a) {
                            return e(n).encrypt(t, i, n, a)
                        }, decrypt: function (i, n, a) {
                            return e(n).decrypt(t, i, n, a)
                        }
                    }
                }
            }()
        });
        var h = n.StreamCipher = u.extend({
            vv: function () {
                var e = this.rv(!0);
                return e
            }, blockSize: 1
        });
        var f = i.mode = {};
        var p = n.BlockCipherMode = a.extend({
            createEncryptor: function (e, t) {
                return this.Encryptor.create(e, t)
            }, createDecryptor: function (e, t) {
                return this.Decryptor.create(e, t)
            }, init: function (e, t) {
                this.Iv = e;
                this.Jv = t
            }
        });
        var m = f.CBC = function () {
            function e(e, i, n) {
                var a = this.Jv;
                if (a) {
                    var o = a;
                    this.Jv = t
                } else var o = this.Kv;
                for (var s = 0; s < n; s++) e[i + s] ^= o[s]
            }

            var i = p.extend();
            i.Encryptor = i.extend({
                processBlock: function (t, i) {
                    var n = this.Iv;
                    var a = n.blockSize;
                    e.call(this, t, i, a);
                    n.encryptBlock(t, i);
                    this.Kv = t.slice(i, i + a)
                }
            });
            i.Decryptor = i.extend({
                processBlock: function (t, i) {
                    var n = this.Iv;
                    var a = n.blockSize;
                    var o = t.slice(i, i + a);
                    n.decryptBlock(t, i);
                    e.call(this, t, i, a);
                    this.Kv = o
                }
            });
            return i
        }();
        var g = i.pad = {};
        var b = g.Pkcs7 = {
            pad: function (e, t) {
                var i = 4 * t;
                var n = i - e.sigBytes % i;
                var a = n << 24 | n << 16 | n << 8 | n;
                var s = [];
                for (var r = 0; r < n; r += 4) s.push(a);
                var c = o.create(s, n);
                e.concat(c)
            }, unpad: function (e) {
                var t = 255 & e.words[e.sigBytes - 1 >>> 2];
                e.sigBytes -= t
            }
        };
        var $ = n.BlockCipher = u.extend({
            cfg: u.cfg.extend({mode: m, padding: b}), reset: function () {
                u.reset.call(this);
                var e = this.cfg;
                var t = e.iv;
                var i = e.mode;
                if (this.Gv == this.Ev) var n = i.createEncryptor; else {
                    var n = i.createDecryptor;
                    this.sv = 1
                }
                if (this.Lv && this.Lv.Mv == n) this.Lv.init(this, t && t.words); else {
                    this.Lv = n.call(i, this, t && t.words);
                    this.Lv.Mv = n
                }
            }, tv: function (e, t) {
                this.Lv.processBlock(e, t)
            }, vv: function () {
                var e = this.cfg.padding;
                if (this.Gv == this.Ev) {
                    e.pad(this.mN, this.blockSize);
                    var t = this.rv(!0)
                } else {
                    var t = this.rv(!0);
                    e.unpad(t)
                }
                return t
            }, blockSize: 4
        });
        var v = n.CipherParams = a.extend({
            init: function (e) {
                this.mixIn(e)
            }, toString: function (e) {
                return (e || this.formatter).stringify(this)
            }
        });
        var C = i.format = {};
        var I = C.OpenSSL = {
            stringify: function (e) {
                var t = e.ciphertext;
                var i = e.salt;
                if (i) var n = o.create([1398893684, 1701076831]).concat(i).concat(t); else var n = t;
                return n.toString(d)
            }, parse: function (e) {
                var t = d.parse(e);
                var i = t.words;
                if (1398893684 == i[0] && 1701076831 == i[1]) {
                    var n = o.create(i.slice(2, 4));
                    i.splice(0, 4);
                    t.sigBytes -= 16
                }
                return v.create({ciphertext: t, salt: n})
            }
        };
        var y = n.SerializableCipher = a.extend({
            cfg: a.extend({format: I}), encrypt: function (e, t, i, n) {
                n = this.cfg.extend(n);
                var a = e.createEncryptor(i, n);
                var o = a.finalize(t);
                var s = a.cfg;
                return v.create({
                    ciphertext: o,
                    key: i,
                    iv: s.iv,
                    algorithm: e,
                    mode: s.mode,
                    padding: s.padding,
                    blockSize: e.blockSize,
                    formatter: n.format
                })
            }, decrypt: function (e, t, i, n) {
                n = this.cfg.extend(n);
                t = this.Nv(t, n.format);
                var a = e.createDecryptor(i, n).finalize(t.ciphertext);
                return a
            }, Nv: function (e, t) {
                if ("string" == typeof e) return t.parse(e, this); else return e
            }
        });
        var x = i.kdf = {};
        var E = x.OpenSSL = {
            execute: function (e, t, i, n) {
                if (!n) n = o.random(8);
                var a = l.create({keySize: t + i}).compute(e, n);
                var s = o.create(a.words.slice(t), 4 * i);
                a.sigBytes = 4 * t;
                return v.create({key: a, iv: s, salt: n})
            }
        };
        var A = n.PasswordBasedCipher = y.extend({
            cfg: y.cfg.extend({kdf: E}), encrypt: function (e, t, i, n) {
                n = this.cfg.extend(n);
                var a = n.kdf.execute(i, e.keySize, e.ivSize);
                n.iv = a.iv;
                var o = y.encrypt.call(this, e, t, a.key, n);
                o.mixIn(a);
                return o
            }, decrypt: function (e, t, i, n) {
                n = this.cfg.extend(n);
                t = this.Nv(t, n.format);
                var a = n.kdf.execute(i, e.keySize, e.ivSize, t.salt);
                n.iv = a.iv;
                var o = y.decrypt.call(this, e, t, a.key, n);
                return o
            }
        })
    }()
}, "130dc9a94bf2cb7bf7cf5d7d41a3c2c6", "404a97723783a1aed0f3fa178e5602ca");
I$("b4c990360973aba3584858bf4cf6ec7f", function (e) {
    !function () {
        var t = e;
        var i = t.lib;
        var n = i.BlockCipher;
        var a = t.algo;
        var o = [];
        var s = [];
        var r = [];
        var c = [];
        var d = [];
        var _ = [];
        var l = [];
        var u = [];
        var h = [];
        var f = [];
        !function () {
            var e = [];
            for (var t = 0; t < 256; t++) if (t < 128) e[t] = t << 1; else e[t] = t << 1 ^ 283;
            var i = 0;
            var n = 0;
            for (var t = 0; t < 256; t++) {
                var a = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4;
                a = a >>> 8 ^ 255 & a ^ 99;
                o[i] = a;
                s[a] = i;
                var p = e[i];
                var m = e[p];
                var g = e[m];
                var b = 257 * e[a] ^ 16843008 * a;
                r[i] = b << 24 | b >>> 8;
                c[i] = b << 16 | b >>> 16;
                d[i] = b << 8 | b >>> 24;
                _[i] = b;
                var b = 16843009 * g ^ 65537 * m ^ 257 * p ^ 16843008 * i;
                l[a] = b << 24 | b >>> 8;
                u[a] = b << 16 | b >>> 16;
                h[a] = b << 8 | b >>> 24;
                f[a] = b;
                if (!i) i = n = 1; else {
                    i = p ^ e[e[e[g ^ p]]];
                    n ^= e[e[n]]
                }
            }
        }();
        var p = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
        var m = a.AES = n.extend({
            uv: function () {
                if (!this.Ov || this.Pv !== this.Hv) {
                    var e = this.Pv = this.Hv;
                    var t = e.words;
                    var i = e.sigBytes / 4;
                    var n = this.Ov = i + 6;
                    var a = 4 * (n + 1);
                    var s = this.Qv = [];
                    for (var r = 0; r < a; r++) if (r < i) s[r] = t[r]; else {
                        var c = s[r - 1];
                        if (!(r % i)) {
                            c = c << 8 | c >>> 24;
                            c = o[c >>> 24] << 24 | o[c >>> 16 & 255] << 16 | o[c >>> 8 & 255] << 8 | o[255 & c];
                            c ^= p[r / i | 0] << 24
                        } else if (i > 6 && r % i == 4) c = o[c >>> 24] << 24 | o[c >>> 16 & 255] << 16 | o[c >>> 8 & 255] << 8 | o[255 & c];
                        s[r] = s[r - i] ^ c
                    }
                    var d = this.Rv = [];
                    for (var _ = 0; _ < a; _++) {
                        var r = a - _;
                        if (_ % 4) var c = s[r]; else var c = s[r - 4];
                        if (_ < 4 || r <= 4) d[_] = c; else d[_] = l[o[c >>> 24]] ^ u[o[c >>> 16 & 255]] ^ h[o[c >>> 8 & 255]] ^ f[o[255 & c]]
                    }
                }
            }, encryptBlock: function (e, t) {
                this.Sv(e, t, this.Qv, r, c, d, _, o)
            }, decryptBlock: function (e, t) {
                var i = e[t + 1];
                e[t + 1] = e[t + 3];
                e[t + 3] = i;
                this.Sv(e, t, this.Rv, l, u, h, f, s);
                var i = e[t + 1];
                e[t + 1] = e[t + 3];
                e[t + 3] = i
            }, Sv: function (e, t, i, n, a, o, s, r) {
                var c = this.Ov;
                var d = e[t] ^ i[0];
                var _ = e[t + 1] ^ i[1];
                var l = e[t + 2] ^ i[2];
                var u = e[t + 3] ^ i[3];
                var h = 4;
                for (var f = 1; f < c; f++) {
                    var p = n[d >>> 24] ^ a[_ >>> 16 & 255] ^ o[l >>> 8 & 255] ^ s[255 & u] ^ i[h++];
                    var m = n[_ >>> 24] ^ a[l >>> 16 & 255] ^ o[u >>> 8 & 255] ^ s[255 & d] ^ i[h++];
                    var g = n[l >>> 24] ^ a[u >>> 16 & 255] ^ o[d >>> 8 & 255] ^ s[255 & _] ^ i[h++];
                    var b = n[u >>> 24] ^ a[d >>> 16 & 255] ^ o[_ >>> 8 & 255] ^ s[255 & l] ^ i[h++];
                    d = p;
                    _ = m;
                    l = g;
                    u = b
                }
                var p = (r[d >>> 24] << 24 | r[_ >>> 16 & 255] << 16 | r[l >>> 8 & 255] << 8 | r[255 & u]) ^ i[h++];
                var m = (r[_ >>> 24] << 24 | r[l >>> 16 & 255] << 16 | r[u >>> 8 & 255] << 8 | r[255 & d]) ^ i[h++];
                var g = (r[l >>> 24] << 24 | r[u >>> 16 & 255] << 16 | r[d >>> 8 & 255] << 8 | r[255 & _]) ^ i[h++];
                var b = (r[u >>> 24] << 24 | r[d >>> 16 & 255] << 16 | r[_ >>> 8 & 255] << 8 | r[255 & l]) ^ i[h++];
                e[t] = p;
                e[t + 1] = m;
                e[t + 2] = g;
                e[t + 3] = b
            }, keySize: 8
        });
        t.AES = n.wv(m)
    }();
    return e.AES
}, "130dc9a94bf2cb7bf7cf5d7d41a3c2c6", "1b2ca148f1661ccce642bac1844c43eb", "37ad7437d40acf25a67ecc88a2152418", "404a97723783a1aed0f3fa178e5602ca", "f1fa4cd740fcda0a78ee923ed2b46b39");
I$("6a8cc8d9198f360e17738a317ff9d36e", function (e) {
    e.mode.ECB = function () {
        var t = e.lib.BlockCipherMode.extend();
        t.Encryptor = t.extend({
            processBlock: function (e, t) {
                this.Iv.encryptBlock(e, t)
            }
        });
        t.Decryptor = t.extend({
            processBlock: function (e, t) {
                this.Iv.decryptBlock(e, t)
            }
        });
        return t
    }();
    return e.mode.ECB
}, "130dc9a94bf2cb7bf7cf5d7d41a3c2c6", "f1fa4cd740fcda0a78ee923ed2b46b39");
I$("1aa42bd91a216baf9fea7dea3c1e75ad", function (e) {
    return e.enc.Utf8
}, "130dc9a94bf2cb7bf7cf5d7d41a3c2c6");
I$("bba4e3379e5f9474808b8e33f3b62069", function (e) {
    return e.pad.Pkcs7
}, "130dc9a94bf2cb7bf7cf5d7d41a3c2c6", "f1fa4cd740fcda0a78ee923ed2b46b39");
I$("8a4a56e10f64919a7208eccee64961a3", function (e, t, i, n) {
    var a = window, o = NEJ.O, s = NEJ.P("nej.p"), r = NEJ.P("nej.e"), c = NEJ.P("nej.u"), d = NEJ.P("edu.d"),
        _ = NEJ.P("edu.u");
    _.mq = function (a, o) {
        var o = i.parse(o);
        var s = i.parse(a);
        var r = e.encrypt(s, o, {mode: t, padding: n});
        return r.toString()
    }
}, "b4c990360973aba3584858bf4cf6ec7f", "6a8cc8d9198f360e17738a317ff9d36e", "1aa42bd91a216baf9fea7dea3c1e75ad", "bba4e3379e5f9474808b8e33f3b62069");
I$("030814098c41da542e8e30838bf64ce8", function () {
    var e = NEJ.P("nej.u"), t = NEJ.P("edu.u"), i = NEJ.P("edu.r"), n = NEJ.P("nej.e"), a = NEJ.P("edu.d"),
        o = NEJ.P("nej.v"), s = window;
    var r = '<div class="m-tel-reg">                            <div class="m-title" r-hide = {isMobile}>手机号注册</div>                            <div class="m-tel-reg-container">                                <div class="inputbox" r-class={{\'err\':!!isTelError}}>                                    <div class="u-logo">                                        <div class="u-logo-tel"></div>                                    </div>                                    <div class="u-input box">                                        <input placeholder="注册手机号" id="j-tel" autofocus="autofocus" name="tel" ref="tel" r-pojo={tel} type="tel" on-focus={this.onTelFocus()} on-keyup={this.onTelKeyup()} >                                    </div>                                </div>                                <div class="code-input-box f-cb f-pr">                                    <div class="inputbox" r-class={{\'err\':!!isCodeError}}>                                        <div class="u-logo">                                            <div class="u-logo-code"></div>                                        </div>                                        <div class="u-input box">                                            <input placeholder="验证码" name="code" ref="code" r-pojo={code} type="text" on-focus={this.onCodeFocus()}>                                        </div>                                    </div>                                    {#if countStatus == 1 }                                    <div class="u-codebtn u-counting"><span>{countDown}</span>秒</div>                                    {/if}                                    {#if countStatus == 2 }                                    <div class="u-codebtn"  ref="codeBtn" r-class={{\'ready\':!!isTelInputOk}} on-click={this.onSendCode($event)}>重新发送</div>                                    {/if}                                    {#if countStatus == 0 }                                    <div class="u-codebtn"  ref="codeBtn" r-class={{\'ready\':!!isTelInputOk}} on-click={this.onSendCode($event)}>发送验证码</div>                                    {/if}                                    {#if !isMobile && !!showImageValidateCodeUI}                                        <TelImageValidateCodeUI                                           ref="telImageValidateCodeUI"                                          tel={tel}                                          on-close={showImageValidateCodeUI=false}                                          on-sendCode={this.doSendCode($event)}                                         />                                    {/if}                                </div>                                <div class="inputbox" r-class={{\'err\':!!isPwdError}}>                                    <div class="u-logo">                                        <div class="u-logo-pwd"></div>                                    </div>                                    <div class="u-input box">                                        <input placeholder="设置密码" name="pwd" ref="pwd" r-pojo={pwd} type="password" on-focus={this.onPwdFocus()}>                                    </div>                                </div>                                <div class="m-error-box" r-hide = {!errMsg}>                                    <div class="ferrortail f-ib"></div>                                    <div class="ferrorhead f-ib">{errMsg}</div>                                </div>                                <div class="u-loginbtn" r-class={{\'ready\':!!isInputOk}} on-click={this.onSubmit()}>完   成</div>                            </div>                            <div class="m-bottom-back" on-click = {curShow ="login"} r-hide = {isMobile}><手机号登录</div>                        </div>';
    i.Tv = i.Kn.extend({
        name: "TelRegisterUI", template: r.replace(/><手机号/gi, ">&lt;手机号"), config: function () {
            this.data = NEJ.EX({
                tel: null,
                code: null,
                pwd: null,
                isTelError: !1,
                isCodeError: !1,
                isPwdError: !1,
                errMsg: null,
                isInputOk: !1,
                isTelInputOk: !1,
                countDown: 60,
                countStatus: 0,
                isMobile: t.Qk(),
                showImageValidateCodeUI: !1
            }, this.data);
            this.$watch(["tel", "code", "pwd"], function (e, t, i) {
                if (e && t && i) this.data.isInputOk = !0; else this.data.isInputOk = !1;
                if (e) this.data.isTelInputOk = !0; else this.data.isTelInputOk = !1;
                this.$update()
            });
            this.Zd = new a.iN;
            this.Zd.Cc("oncellPhoneRegister", this.cboncellPhoneRegister.RI(this));
            if (!this.data.isMobile) {
                this.Zd.Cc("oncodeSendV2", this.cboncodeSend.RI(this));
                this.Zd.Cc("onneedVerifyCode", this.cbonneedVerifyCode.RI(this))
            } else {
                this.Zd.Cc("oncodeSendV2", this.cboncodeSend2Mobile.RI(this));
                this.Zd.Cc("onneedVerifyCode", this.cbonneedVerifyCode2Mobile.RI(this))
            }
            this.Zd.Cc("ongetEncryptKey", this.cbongetEncryptKey.RI(this))
        }, init: function () {
        }, cleanErrorMsg: function () {
            this.data.errMsg = null;
            this.data.isTelError = !1;
            this.data.isCodeError = !1;
            this.data.isPwdError = !1
        }, validate: function () {
            this.cleanErrorMsg();
            var e = this.$refs.tel.value, i = this.$refs.code.value, n = this.$refs.pwd.value;
            if (e.length < 0 || !t.Cl(e)) {
                this.data.errMsg = "手机号码格式不正确";
                this.data.isTelError = !0;
                this.$update();
                return !1
            }
            if (!i) {
                this.data.errMsg = "验证码不能为空";
                this.data.isCodeError = !0;
                this.$update();
                return !1
            }
            if (!n) {
                this.data.errMsg = "密码不能为空";
                this.data.isPwdError = !0;
                this.$update();
                return !1
            }
            if (n && (n.length < 6 || n.length > 16)) {
                this.data.errMsg = "请设置6-16位之间的密码";
                this.data.isPwdError = !0;
                this.$update();
                return !1
            }
            return !0
        }, onTelKeyup: function () {
            var e = this.$refs.tel.value;
            if (e.length > 0) this.data.isTelInputOk = !0
        }, onTelFocus: function () {
            this.data.errMsg = null;
            this.data.isTelError = !1;
            this.$update()
        }, onPwdFocus: function () {
            this.data.errMsg = null;
            this.data.isPwdError = !1;
            this.$update()
        }, onCodeFocus: function () {
            this.data.errMsg = null;
            this.data.isCodeError = !1;
            this.$update()
        }, startCountDown: function () {
            var e = this;
            return function (t) {
                var i = window.setInterval(function () {
                    e.data.countDown--;
                    e.$update();
                    if (0 == e.data.countDown) {
                        e.data.countDown = 60;
                        window.clearInterval(i);
                        t()
                    }
                }, 1e3)
            }
        }, onSendCode: function (e) {
            if (1 != this.data.countStatus && this.data.isTelInputOk && !this.data.showImageValidateCodeUI) {
                var i = this.$refs.tel.value;
                if (i.length < 0 || !t.Cl(i)) {
                    this.data.errMsg = "手机号码格式不正确";
                    this.data.isTelError = !0;
                    this.$update();
                    return !1
                }
                this.Zd.wu(this.data.tel)
            }
        }, doSendCode: function (e) {
            if (e) {
                this.data.imageValidationCode = (e || {}).imageValidationCode || "";
                this.$update()
            }
            this.Zd.yu(this.data.tel)
        }, onSubmit: function () {
            if (this.validate()) {
                var i = e.Yh(e.Yh((this.data.tel || "") + "" + (this.data.pwd || "")));
                this.Zd.kN(this.data.tel, this.data.code, i, e.Pi(t.jq()))
            }
        }, Uv: function () {
            this.data.countStatus = 1;
            this.startCountDown()(function () {
                this.data.countStatus = 2;
                this.$update()
            }.RI(this))
        }, Eu: function () {
            if (this.telValidateCodeDialog) this.telValidateCodeDialog.destroy()
        }, cboncodeSend2Mobile: function (e) {
            if (e) if (0 == e.code) {
                this.Vv();
                this.Eu();
                this.Uv()
            } else {
                if (30 == e.code) {
                    this.Hu(e);
                    return
                } else this.Eu();
                this.data.errMsg = e.message;
                this.$update()
            }
        }, Hu: function (e) {
            if (this.$refs && this.$refs.telImageValidateCodeUI) {
                this.$refs.telImageValidateCodeUI.$update({code: "", errMsg: e.message || ""});
                this.$refs.telImageValidateCodeUI.changeImg()
            }
            if (this.telValidateCodeDialog) {
                this.telValidateCodeDialog.$update({code: "", errMsg: "输入有误，请重新输入！"});
                this.telValidateCodeDialog.changeImg()
            }
        }, Vv: function () {
            this.$update({errMsg: null, isCodeError: !1})
        }, cboncodeSend: function (e) {
            if (e) if (0 == e.code) {
                this.Vv();
                this.$update({showImageValidateCodeUI: !1});
                this.Uv()
            } else {
                if (30 == e.code) {
                    this.Hu(e);
                    return
                } else {
                    this.data.showImageValidateCodeUI = !1;
                    this.data.errMsg = e.message
                }
                this.$update()
            }
        }, cboncellPhoneRegister: function (e) {
            if (e) if (0 == e.code) s.location.href = e.result; else {
                this.data.errMsg = e.message;
                this.$update()
            }
        }, cbonneedVerifyCode2Mobile: function (e) {
            if (e) if (0 == e.code) if (e.result) this.Fu(); else this.doSendCode(); else this.$update({errMsg: e.message || ""})
        }, Fu: function () {
            if (this.telValidateCodeDialog) this.telValidateCodeDialog.destroy();
            this.telValidateCodeDialog = new i.Gu({data: {tel: this.data.tel}});
            this.telValidateCodeDialog.$inject(document.body);
            this.telValidateCodeDialog.$on("close", function () {
                this.telValidateCodeDialog = null
            }.RI(this));
            this.telValidateCodeDialog.$on("sendCode", function (e) {
                this.doSendCode(e)
            }.RI(this))
        }, cbonneedVerifyCode: function (e) {
            if (e) if (0 == e.code) if (e.result) {
                this.data.showImageValidateCodeUI = !0;
                this.$update()
            } else {
                this.data.showImageValidateCodeUI = !1;
                this.$update();
                this.doSendCode()
            } else this.$update({errMsg: e.message || ""})
        }, cbongetEncryptKey: function (e) {
            if (e) if (0 == e.code) {
                var i = e.result;
                var n = t.lq(i, this.data.tel, this.data.imageValidationCode, "reg");
                this.Zd.gu(n)
            }
        }
    });
    return i.Tv
}, "106351135a8e461ae9fda308811b8d7e", "b1af513115536e9792eeea5105c5c35c", "71af3dcddfc419e6de29bb8d01674245", "b6951637f3eb26689d734a6b2492c035", "7507f0ffebb5d28414ec67fde145bc96", "fc9a761be230b6c2c8dc839c426ac3bf", "ec6d1975f95d7a855b955933c1392ce4", "6c963c01fffdf69f192ebca6184ae05f", "8a4a56e10f64919a7208eccee64961a3");
I$("e49f35b7cba81f158ea8b5b1a6960e92", function () {
    var e = NEJ.P("nej.u"), t = NEJ.P("edu.u"), i = NEJ.P("edu.r"), n = NEJ.P("nej.j"), a = NEJ.P("nej.e"),
        o = NEJ.P("edu.m"), s = NEJ.P("edu.d"), r = NEJ.P("nej.v"), c = window;
    var d = '<div class="m-loginbox f-cb">                            <div class="" r-hide={curShow!=="login"}>                                <div class="title f-f0 f-cb">                                    <div class="u-tab u-tel-tab f-f0 f-fl" r-class={{\'z-sel\':curTab === "tel"}} on-click={curTab="tel"}>手机号登录</div>                                    <div class="u-tab u-urs-tab f-f0 f-fl" r-class={{\'z-sel\':curTab === "urs"}} on-click={curTab="urs"}>邮箱帐号登录</div>                                </div>                                <div class="wrap f-fl ursContainer f-pr" r-hide={curTab !== "urs"} id="j-ursContainer" style="height:247px;">                                    <div class="f-pa" r-html={UrsUnloadError}></div>                                </div>                                <div class="wrap f-fl telContainer" r-hide={curTab !== "tel"}>                                    <TelLoginUI curShow = {curShow}></TelLoginUI>                                </div>                                <div class="bd f-fl f-pr">                                    <div class="f-pa bdtxt">或</div>                                </div>                                <div class="side f-fl">                                    <div class="socialBox j-social-box" on-click = {this.handleSnsClick($event)}>                                        <a class="j-slink itm0 f-hide" data-var-name="WECHAT"  target="_self">微信</a>                                        <a class="j-slink itm1 f-hide" data-var-name="WEIBO" target="_self">新浪微博</a>                                        <a class="j-slink itm2 f-hide" data-var-name="QQ" target="_self">腾讯QQ</a>                                        <a class="j-slink itm3 f-hide" data-var-name="RENREN" target="_self">人人网</a>                                        <a class="j-slink itm4 f-hide" data-var-name="ICOURSE" target="_self">爱课程网</a>                                    </div>                                </div>                            </div>                            <div class="" r-hide={curShow !== "retrievepwd"}>                                <RetrievePwdUI curShow = {curShow}></RetrievePwdUI>                            </div>                            <div class="" r-hide={curShow !== "register"}>                                <TelRegisterUI curShow = {curShow}></TelRegisterUI>                            </div>                        </div>';
    i.Wv = i.Kn.extend({
        name: "loginSetUI", template: d, count: 0, config: function () {
            t.hK(this.data, {
                curTab: "tel",
                curShow: "login",
                UrsUnloadError: '<div style="top:80px;left:180px;position:absolute;"><img src="//s.stu.126.net/res/images/ui/loading.gif?348e3cea35602e70543b87a77333867e"/></div>',
                isSuccessLoad: !1,
                sucessCb: this.sucessCb
            });
            this.initStartTime = +new Date
        }, init: function () {
            var t = this;
            setTimeout(function () {
                if (c.URS && e.bJ(c.URS)) this.initURSLogin(); else this.loadScript()
            }.RI(this), 0);
            setTimeout(function () {
                this.initSnsLogin()
            }.RI(this), 1);
            this.errorLogTimer = setTimeout(function () {
                if (!t.data.isSuccessLoad) n.xf("//only367.73119.35.167.38.nstool.netease.com/info.js?referer=//nstool.netease.com/info.js", {
                    version: +new Date,
                    onload: t.doUrsUnloadError.RI(t),
                    charset: "gbk",
                    onerror: function () {
                    }
                })
            }, 2e4)
        }, initURSLogin: function () {
            var e = this;
            c.URSLoginConfig.includeBox = "j-ursContainer";
            c.URSLoginConfig.logincb = this.data.sucessCb;
            c["_$needUrsBgp"] = 1;
            c.URSLoginConfig.initReady = function () {
                var i = +new Date - e.initStartTime;
                t.bj("URS登录监测统计", "URSLoadTime", "URSLoadTimeCount", i);
                e.data.isSuccessLoad = !0;
                e.data.UrsUnloadError = "";
                e.$update()
            };
            this.ursComponent = new URS(c.URSLoginConfig);
            this.ursComponent.showIframe()
        }, initSnsLogin: function () {
            var e = {loginOrAuthType: 0};
            this.Ds = o.thirdBindUtil(e)
        }, loadScript: function () {
            var e = this;
            n.xf("//ursdoccdn.nosdn.127.net/webzj_reload_101/message_16112103.js", {
                version: +new Date,
                onload: e.initURSLogin.RI(e),
                onerror: e.handleError.RI(e)
            })
        }, handleError: function () {
            var e = this;
            this.count++;
            if (this.count <= 3) this.loadScript(); else {
                this.data.UrsUnloadError = '<div style="top:56px;left:76px;width:260px;position:absolute;">对不起，邮箱登录被外星人带走了，<br>请更换其它方式，或稍后刷新页面再试^_^</div>';
                this.$update()
            }
        }, doUrsUnloadError: function () {
            var e = ["[ip:" + c.ip + "]", "[dns:" + c.dns + "]", "[ip_province:" + c.ip_province + "]", "[ip_city:" + c.ip_city + "]", "[ip_isp:" + c.ip_isp + "]", "[dns_province:" + c.dns_province + "]", "[dns_city:" + c.dns_city + "]", "[dns_isp:" + c.dns_isp + "]", "[res:" + c.res + "]", "[msg:" + c.msg + "]"];
            var i = e.join("--");
            t.bj("URS登录监测统计", "URSUnloadError", i)
        }, handleSnsClick: function (e) {
            var i = e.target, n;
            if (i && i !== e.origin) {
                n = a.lc(i, "varName");
                this.Ds.VM(t.CONST["LOGINTYPE"][n], !0);
                t.bj(n, "click", "登录框")
            }
        }
    });
    return i.Wv
}, "106351135a8e461ae9fda308811b8d7e", "151562add01838325f04dae3569223d6", "dad18cddbbea99de5a09dc2d97be1b35", "3c14aab990586dd8e5e797a28c014212", "c5e021852bdc84210b04dca4f4abb6d2", "030814098c41da542e8e30838bf64ce8", "01db61ff57baaf6cb3a025d8ec5e968b", "7507f0ffebb5d28414ec67fde145bc96");
I$("59970d2cf64d09b0c87d787f7fd809a0", function () {
    var e = window, t = NEJ.O, i = NEJ.F, n = NEJ.P("nej.e"), a = NEJ.P("edu.m"), o = NEJ.P("edu.u"),
        s = NEJ.P("nej.u"), r = NEJ.P("edu.r"), c = NEJ.P("edu.cms"), d;
    var _;
    o.Eq = NEJ.C();
    d = o.Eq.hK(o.Xo, !0);
    o.Eq.Dq = function (t) {
        if (!o.Pk() || !e.YixinJSBridge) if (!o.Sk()) {
            if (!_) {
                _ = o.Eq.Fd(t);
                _.ro()
            }
        } else e.open(e.loginPrefix + "?returnUrl=" + s.Pi(o.jq(t.aftParams)), "_self"); else e.YixinJSBridge.call("openLoginView", {returnUrl: s.Pi(o.jq({}))}, function (e) {
        })
    };
    o.Eq.Xv = function (e) {
        if (_) _ = o.Eq.Jd(_)
    };
    d.Md = function () {
        if (this.Yv) {
            if (this.Yv.errorLogTimer) e.clearTimeout(this.Yv.errorLogTimer);
            this.Yv.destroy()
        }
        _ = null;
        this.lK()
    };
    d.bo = function () {
        this.lo = n.Gf('<div id="j-loginSet-box"></div>')
    };
    d.co = function () {
        this.mK();
        this.Zv = n.mc(this.Ih, "j-loginform")[0];
        this.$v = n.mc(this.Ih, "j-regUrl")[0];
        this.Cs = n.mc(this.Ih, "j-social-box")[0]
    };
    d.Id = function (t) {
        t = t || {};
        t.title = " ";
        this.kK(t);
        if (this.Yv) this.Yv.destroy();
        this.Yv = new r.Wv({
            data: {curShow: t.curShow}, sucessCb: function () {
                if ("logout" !== e.currentPageName) e.location.reload(); else e.location.href = e.studyHref
            }
        });
        this.Yv.$inject("#j-loginSet-box");
        o.bj("弹窗", "click", "登陆弹窗")
    };
    c.showLoginDialog = o.Eq.Dq
}, "d62f95b9c6f18a551a036c8ec75d2d82", "4a72bba4b9eed42a66bf707092def26e", "efaee7cec9dc28bd4257a132cd250c56", "e49f35b7cba81f158ea8b5b1a6960e92", "71af3dcddfc419e6de29bb8d01674245");
I$("2485091b4f4b621adc889ffa898e41e6", function () {
    var e = NEJ.O, t = NEJ.F, i = NEJ.P("nej.e"), n = NEJ.P("edu.u"), a = NEJ.P("nej.ui"), o;
    n.Hq = NEJ.C();
    o = n.Hq.hK(a.ao, !0);
    o.Md = function () {
        this.Iq();
        this.lK()
    };
    o.Iq = t
}, "cf31da9ce7cb3215fa5bd6392b6dd40c");
I$("16921f2dee6c8d6b29afea746d978144", function () {
    var e = NEJ.O, t = window, i = NEJ.P("nej.e"), n = NEJ.P("nej.v"), a = NEJ.P("edu.m"), o = NEJ.P("edu.u"), s;
    var r = i.Ic("        .#<uispace>{width:100%;height:100%;padding:5px;position:relative;background: none repeat scroll 0 0 #FAFAFA;        \t\t\tborder:1px solid #DFDFDF;-webkit-box-shadow: inset 1px 1px 2px #DFDFDF;        \t\t\t-moz-box-shadow: inset 1px 1px 2px #dfdfdf;box-shadow: inset 1px 1px 2px #DFDFDF;}        .#<uispace> .inputtxt{width:100%;height:100%;font-size:12px;line-height:23px;background:transparent;border:none;overflow-y:auto;overflow-x:hidden;resize:none}        .#<uispace> .inputhint{font-size:12px;color:#ccc;position:absolute;top:10px;left:10px;}");
    var c = i.Gf('<div class="m-baseinputui">\t        <textarea name="inputtxt" class="j-textarea inputtxt"></textarea>\t        <label class="j-hint inputhint" for="inputtxt"></label>\t\t</div>');
    o.Gy = NEJ.C();
    s = o.Gy.hK(o.Hq, !0);
    s.bo = function () {
        this.lo = c;
        this.no = r
    };
    s.co = function () {
        this.mK();
        this.Hy = i.mc(this.Ih, "j-hint")[0];
        this.Iy = i.mc(this.Ih, "j-textarea")[0];
        this.cq = new a.Ln
    };
    s.Id = function (e) {
        this.kK(e);
        this.Hy = i.mc(this.Ih, "j-hint")[0];
        this.Iy = i.mc(this.Ih, "j-textarea")[0];
        if (e.inputArea) {
            this.Jy = i.RJ(e.inputArea);
            this.Iy = i.mc(this.Jy, "j-input")[0];
            this.Hy = i.mc(this.Jy, "j-label")[0];
            if (e.width) {
                this.Ih.style.width = e.width + "px";
                this.Iy.style.width = e.width + "px"
            }
            if (e.height) {
                this.Ih.style.height = e.height + "px";
                this.Iy.style.height = e.height + "px"
            }
        }
        this.Td([[this.Hy, "click", this.Ky.RI(this)], [this.Iy, "click", this.Ly.RI(this)], [this.Iy, "focus", this.My.RI(this)], [this.Iy, "blur", this.Ny.RI(this)], [this.Iy, "keydown", this.Oy.RI(this)], [this.Iy, "keyup", this.Py.RI(this)]]);
        this.Qy = e.filterEnter || !1;
        this.Ry = e.reg || "";
        this.Hy.innerText = e.labelText || "";
        if (e.labelHtml) this.Hy.innerHTML = e.labelHtml || "";
        this.Sy("");
        if (e.width) {
            this.Ih.style.width = e.width - 10 + "px";
            this.Iy.style.width = e.width - 10 + "px"
        }
        if (e.height) {
            this.Ih.style.height = e.height - 10 + "px";
            this.Iy.style.height = e.height - 10 + "px"
        }
    };
    s.Oy = function (e) {
        if (e) {
            o.mp(this.Hy);
            this.kd("onInputKeyDown", e)
        }
    };
    s.My = function (e) {
        o.mp(this.Hy);
        if (e) this.kd("onInputFocus")
    };
    s.Ly = function (e) {
        if (e) this.kd("onInputClick")
    };
    s.Ny = function (e) {
        var t = this.Iy.value;
        if (!t) o.BM(this.Hy); else o.mp(this.Hy);
        if (e) this.kd("onInputBlur", t)
    };
    s.Py = function (e) {
        if (e) {
            if (this.Qy && 13 == e.keyCode) {
                var t = this.Iy.value.replace(/[\r\n]/g, "");
                this.Sy(t)
            }
            if (this.Ry && 32 != e.keyCode) {
                var t = this.Iy.value.replace(this.Ry, "");
                this.Sy(t)
            }
            this.kd("onInputChange", e)
        }
    };
    s.Ky = function () {
        this.Iy.focus()
    };
    s.Ty = function () {
        this.Iy.blur()
    };
    s.Sy = function (e) {
        e = o.vp(e || "");
        this.Uy = e;
        this.Iy.value = e;
        this.Ny(null)
    };
    s.Vy = function () {
        var e = this.Wy();
        return this.Uy != e && "" != e
    };
    s.Wy = function () {
        return o.vp(this.Iy.value || "").replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "")
    };
    s.Xy = function () {
        return this.cq.Mn(this.Wy())
    };
    s.Yy = function (e) {
        return this.cq.Pn(e, this.Wy())
    };
    s.Zy = function () {
        this.Iy.value = "";
        this.Iy.setAttribute("disabled", "disabled")
    };
    s.$y = function () {
        this.Iy.setAttribute("disabled", "disabled")
    };
    s.az = function () {
        this.Iy.removeAttribute("disabled")
    };
    s.cs = function (e) {
        this.Ih.style.width = e - 10 + "px";
        this.Iy.style.width = e - 10 + "px"
    };
    s.bz = function (e) {
        this.Hy.innerText = e
    };
    s.cz = function (e) {
        o.CM(this.Hy, e)
    }
}, "2485091b4f4b621adc889ffa898e41e6", "151562add01838325f04dae3569223d6", "7507f0ffebb5d28414ec67fde145bc96");
I$("a3560f093b688f8712efb2a280ef1a66", function () {
    var e = NEJ.O, t = window, i = NEJ.F, n = NEJ.P("nej.e"), a = NEJ.P("nej.v"), o = NEJ.P("edu.u"), s;
    var r = n.Ic("        .#<uispace>{width:100%;background:#ffffcc;}        .#<uispace> .icon{margin:7px 7px 0 15px;width:18px;height:18px;background: url(" + t.imageUrlMap.ui_sprite + ') 0 -779px no-repeat;}        .#<uispace> .text{margin-left:7px;width:90%;color:#333;font-size:14px;line-height:32px;font-family:"微软雅黑";}        .#<uispace> a{color:#10ae58;}        .#<uispace> a:hover{text-decoration:underline;}        .#<uispace> .close{margin:10px 10px 0 0;cursor:pointer;width:12px;height:12px;background: url(' + t.imageUrlMap.ui_sprite + ") -9px -11px no-repeat;}        ");
    var c = n.Gf('<div class="f-cb">\t        <div class="icon f-fl"></div>\t        <div class="text j-text f-fl"></div>\t        <div class="close j-close f-fr"></div>\t\t</div>');
    o.dz = NEJ.C();
    s = o.dz.hK(o.Hq, !0);
    s.bo = function () {
        this.lo = c;
        this.no = r
    };
    s.co = function () {
        this.mK();
        this.ez = n.mc(this.Ih, "j-text")[0];
        this.fz = n.mc(this.Ih, "j-close")[0];
        a.Cc(this.fz, "click", this.gz.RI(this))
    };
    s.gz = function () {
        this.hz()
    };
    s.Id = function (e) {
        this.kK(e);
        this.ez.innerHTML = e.tips || "";
        this.hz = e.closeCallback || i;
        if (e.hiddenClose) o.mp(this.fz); else o.BM(this.fz);
        this.Ih.style.marginBottom = (void 0 != e.marginBottom ? e.marginBottom : 20) + "px"
    }
}, "2485091b4f4b621adc889ffa898e41e6");
I$("90d6d6be23475ccac85c853489f64c57", function () {
    var e = window, t = NEJ.O, i = NEJ.P("nej.u"), n = NEJ.P("nej.p"), a = NEJ.P("edu.u");
    iz = function (e, t, i) {
        var n = "";
        t = parseInt(t);
        switch (t) {
            case a.CONST.LEARN_LESSON_AUDIO:
                n = a.umi("lessonAudio");
                break;
            case a.CONST.LEARN_LESSON_PDF:
                n = a.umi("lessonText");
                break;
            case a.CONST.LEARN_LESSON_VIDEO:
                n = a.umi("lessonVideo");
                break;
            case a.CONST.LEARN_LESSON_LIVE:
                n = a.umi("lessonLive");
                break;
            case a.CONST.LEARN_LESSON_LECTURE:
                n = a.umi("lessonLecture");
                break;
            case a.CONST.LEARN_LESSON_TEST:
                n = a.umi("lessonTest");
                break;
            case a.CONST.LEARN_LESSON_LAB:
                n = a.umi("lessonLab");
                break;
            case a.CONST.LEARN_LESSON_PURE_TEXT:
                n = a.umi("lessonPureText");
                break;
            case a.CONST.LEARN_LESSON_RES_VIDEO:
                n = a.umi("lessonResVideo");
                break;
            case a.CONST.LEARN_LESSON_RES_LINK:
                n = a.umi("lessonResLink");
                break;
            case a.CONST.LEARN_LESSON_FLASH:
                n = a.umi("lessonFlash");
                break;
            case a.CONST.LEARN_LESSON_THIRDRES:
                n = a.umi("lessonThirdRes")
        }
        n = n + "?lessonId=" + e;
        if (i) n = n + "&courseId=" + i;
        return n
    };
    jz = function (e) {
        var t = {};
        if (e) if (e.refType == a.CONST.COURSE_TYPE_901COURSE) {
            t.lessonId = e.refResId;
            t.lessonType = e.lessonType;
            t.courseId = e.courseId
        } else if (e.refType == a.CONST.PLAN_PURE_TEXT) {
            t.lessonId = e.id;
            t.lessonType = a.CONST.LEARN_LESSON_PURE_TEXT
        } else if (e.refType == a.CONST.PLAN_URL_RES) {
            t.lessonId = e.refResId;
            if (e.resType == a.CONST.PLAN_URL_RES_VIDEO || e.resType == a.CONST.PLAN_URL_RES_OPEN) t.lessonType = a.CONST.LEARN_LESSON_RES_VIDEO; else if (e.resType == a.CONST.PLAN_URL_RES_LINK) t.lessonType = a.CONST.LEARN_LESSON_RES_LINK
        } else if (e.refType == a.PLAN_URL_FLASH) {
            t.lessonID = e.id;
            t.lessonType = a.CONST.LEARN_LESSON_FLASH
        } else if (e.refType == a.PLAN_URL_THIRDRES) {
            t.lessonID = e.id;
            t.lessonType = a.CONST.LEARN_LESSON_THIRDRES
        }
        return t
    };
    a.kz = function (t, i) {
        var n, o, s, r, c, d, _, l, u, h, f, p, m, g, b, $, v, C, I, y, x, E = !0, A;
        if (e.courseVo) if (e.courseVo.price) if (e.courseVo.bought && !e.courseVo.boughtExpired) E = !0; else if (t.learnable && t.learnable.learnable) E = !0; else E = !1; else E = !0;
        if (i == a.CONST.COURSE_TYPE_901COURSE) {
            n = t.id || t.lessonId;
            o = t.courseId;
            s = t.lessonName || "";
            r = t.type || t.lessonType;
            c = a.CONST.COURSE_TYPE_901COURSE;
            d = t.learnMark || 0;
            _ = t.status || 0;
            x = r == a.CONST.LEARN_LESSON_LIVE;
            if (x) A = a.lz(t)
        } else if (i == a.CONST.COURSE_TYPE_PLAN) {
            var N = jz(t);
            n = N.lessonId;
            o = t.planId;
            r = N.lessonType;
            c = t.refType;
            s = t.title || "";
            d = t.learnMark || 0;
            _ = t.learnStatus || 0;
            v = t.nodeId;
            C = t.bought;
            I = t.price
        }
        l = t.description || t.nodeText || "";
        mz = t.content || "";
        u = t.position || 0;
        f = t.videoTime;
        if (t.audioTime) p = t.audioTime; else p = ((t.audioLessonUnitDto || {}).mediaDto || {}).duration;
        m = t.courseId;
        b = t.courseName;
        h = t.hasReferences;
        g = t.lessonExists;
        $ = t.videoId;
        y = t.learnable;
        return {
            id: n,
            cid: o,
            lessonName: s,
            lessonType: r,
            refType: c,
            learnMark: d,
            status: _,
            position: u,
            description: l,
            taskIntro: mz,
            hasReferences: h,
            videoTime: f,
            audioTime: p,
            courseId: m,
            courseName: b,
            lessonExists: g,
            videoId: $,
            nodeId: v,
            bought: C,
            price: I,
            learnableInfo: y,
            isLiveLesson: x,
            liveLessonData: A,
            canPreview: E
        }
    };
    a.nz = function (e, t) {
        i.oJ(e, function (e, n) {
            var o = e.lessonDtos || e.nodeDtos;
            i.oJ(o, function (e, i) {
                var n = a.kz(e, t);
                o[i] = n
            }, this)
        }, this);
        return e
    };
    a.lz = function (t) {
        if (!t.liveContent) return {hasBegin: !1, beginTime: "（" + a.jm(t.liveStartTime) + "直播）", hasEnd: !1};
        var i = t.liveContent.liveStatus;
        var n = i == a.CONST.LIVE_STATUS_LIVING;
        var o = i == a.CONST.LIVE_STATUS_TRANSING;
        var s = i == a.CONST.LIVE_STATUS_TRANSDONE;
        var r = i == a.CONST.LIVE_STATUS_END;
        var c = "";
        var d = "";
        var _ = !0;
        var l = "";
        var u = t.liveContent.cdnMode || 0;
        if (e.courseVo) if (e.courseVo.price) if (e.courseVo.bought && !e.courseVo.boughtExpired) _ = !0; else if (t.learnable && t.learnable.learnable) _ = !0; else _ = !1; else _ = !0;
        if (_ && (i == a.CONST.LIVE_STATUS_NOSTART || i == a.CONST.LIVE_STATUS_LIVING)) l = "，可试听";
        switch (i) {
            case a.CONST.LIVE_STATUS_NOSTART:
                c = a.jm(t.liveContent.liveLessonContent.liveStartTime) + "直播";
                break;
            case a.CONST.LIVE_STATUS_LIVING:
                c = "正在直播"
        }
        return {
            hasBegin: n,
            statusStr: c,
            canPreview: _,
            previewStr: l,
            beginTime: d,
            isTransing: o,
            isTransingEnd: s,
            hasEnd: r,
            cdnMode: u
        }
    };
    a.oz = function (e) {
        if (e && e.planNodeNewDto) e = jz(e.planNodeNewDto);
        return iz(e.lessonId, e.lessonType, e.courseId)
    };
    a.pz = function (e) {
        var t = [a.umi("lessonTest"), a.umi("lessonText"), a.umi("lessonVideo"), a.umi("lessonLive"), a.umi("lessonLecture"), a.umi("lessonLab"), a.umi("lessonPureText"), a.umi("lessonResVideo"), a.umi("lessonResLink"), a.umi("lessonFlash")];
        var i = a.GL(e, t);
        i = qz(e);
        return i
    };
    qz = function (t) {
        var i = !1;
        var n = t.indexOf("?");
        if (n >= 0) {
            var o = a.qp(t.substring(n));
            if (e.isNaN(Number(o.lessonId))) i = !1; else i = !0
        }
        return i
    };
    a.rz = function (t) {
        return !parseInt(e.loginStatus || 0) || (t ? !1 : !parseInt(e.enrollStatus || 0))
    };
    a.sz = function () {
        var t = !parseInt(e.loginStatus || 0);
        var i = !parseInt(e.enrollStatus || 0);
        var n = i ? "未参加" : "已参加";
        return (e.plan ? "计划" : "课程") + ":" + (t ? "未登录" : n)
    };
    a.tz = function (e) {
        var t = null;
        if (e) {
            t = {};
            t.pdfUrl = e.url;
            var i = e.slidetimes.split(";");
            var n = [];
            for (var a = 0; a < i.length; a++) {
                var o = parseInt(i[a]);
                o = 0 == o ? -1 : o;
                if (0 == a && o == -1) o = 0;
                n.push({page: a + 1, begin: o})
            }
            t.timeArr = n
        }
        return t
    };
    var o = null;
    a.uz = function (e) {
        var t = a.Jn() && ("3.0" == n.$I.release || "4.0" == n.$I.release || "5.0" == n.$I.release);
        if (t) {
            e.style.display = "block";
            o = a.dz.Fd({
                parent: e,
                marginBottom: 0,
                tips: "如你使用低版本浏览器进行课程制作，某些功能会使用不畅，建议你使用chrome、firefox等最新版本浏览器。",
                closeCallback: function () {
                    e.style.display = "none";
                    o = a.dz.Jd(o)
                }.RI(this)
            })
        }
    };
    a.vz = function () {
        if (o) o = a.dz.Jd(o)
    };
    a.wz = function (e) {
        if (e && e.learnableInfo) return e.learnableInfo
    };
    a.wz = function (e) {
        if (e && e.learnableInfo) return e.learnableInfo
    };
    a.xz = function (t) {
        e.returnUrl = "//" + window.location.host + "/adapter/loginHash.htm?adaptUrl=" + i.Pi(a.jq(t))
    };
    a.yz = function (e, t) {
        var i = a.gm(), n = 6048e5;
        return !!e && i - t <= n
    };
    a.zz = function (e) {
        var t = i.qJ(e);
        var n = new RegExp("{##([^{}]+)##}", "g");
        var a;
        for (; null != (a = n.exec(t));) t = t.replace(a[0], '<span class="f-hl">' + a[1] + "</span>");
        return t
    };
    a.Az = function (e) {
        var t = i.qJ(e);
        var n = new RegExp("{##([^{}]+)##}", "g");
        var a;
        for (; null != (a = n.exec(e));) t = e.replace(a[0], a[1]);
        return t
    };
    a.Bz = function (e, t, i) {
        if (e <= 0 || t <= 0 || i <= 0) return 0; else return (i * (t / e)).toFixed(2)
    };
    a.Cz = function (t, i, n) {
        var o = "";
        switch (i) {
            case a.CONST.COURSE_TYPE_901COURSE:
                o = e.studyHref + e.courseIntroPrefix.replace("{id}", t);
                break;
            case a.CONST.PRODUCT_TYPE_YOOC:
                o = e.yocCourseinfoPrefix + encodeURIComponent(n) + ".htm?tid=" + t;
                break;
            case a.CONST.PRODUCT_TYPE_MOOC:
                o = e.moccourseinfoprefix + encodeURIComponent(n) + ".htm?tid=" + t
        }
        return o
    };
    a.Dz = function (t, i, n) {
        var o = {};
        switch (t.courseType) {
            case a.CONST.COURSE_TYPE_901COURSE:
                var s = t.yktCourseCard || t.yktCourseCardv;
                s.url = e.courseIntroPrefix.replace("{id}", s.id);
                s.name = s.name || s.courseName || "";
                o.data = s;
                o.data.index = n;
                o.courseType = t.courseType;
                o.clazz = "u-find-cover" + i;
                break;
            case a.CONST.PRODUCT_TYPE_MOOC:
            case a.CONST.PRODUCT_TYPE_YOOC:
                o.courseType = t.courseType;
                o.mocDto = o.courseType == a.CONST.PRODUCT_TYPE_MOOC ? t.mocCourseCard : t.yocCourseCard;
                o.mocDto.index = n;
                o.clazz = i
        }
        return o
    };
    a.Ez = function (t) {
        var i = {};
        switch (t.courseType) {
            case a.CONST.COURSE_TYPE_901COURSE:
                var n = t.yktCourseCard || t.yktCourseCardv;
                i.url = e.courseIntroPrefix.replace("{id}", n.id);
                i.name = n.name || n.courseName || "";
                break;
            case a.CONST.PRODUCT_TYPE_MOOC:
            case a.CONST.PRODUCT_TYPE_YOOC:
                var o = t.courseType;
                var s = o == a.CONST.PRODUCT_TYPE_MOOC ? t.mocCourseCard : t.yocCourseCard;
                var r = a.Fz([s], o)[0];
                i.url = r.infoUrl;
                i.name = r.name
        }
        return i
    };
    a.Gz = function (e, t) {
        var n = t.isNew || !1;
        if (!e.length || !t.length) return [];
        for (var o = 0; o < t.length; o++) for (var s = 0; s < e.length; s++) if (e[s].courseVo.id == t[o].id) {
            t[o] = i.KJ(t[o], e[s]);
            t[o] = a.Hz(t[o]);
            break
        }
        return t
    };
    a.Hz = function (t) {
        if (a.Mn(t.des) > 120) t.des = a.Nn(t.des, 120) + "...";
        var i = [], n = t.courseVo.lectors, o = "";
        if (n && n.length) {
            for (var s = 0; s < n.length; s++) i.push(n[s].name);
            o = i.join(",")
        } else o = t.courseVo.provider || "";
        t.teacherStr = o;
        t.courseVo = t.courseVo;
        t.wallMembers = t.wallMembers || [];
        if (0 == t.courseVo.courseType) t.link = e.courseIntroPrefix.replace("{id}", t.id); else if (3 == t.courseVo.courseType) t.link = e.yocPrefix + "/term/" + +encodeURIComponent(t.courseVo.termId) + ".htm";
        return t
    }
}, "ef610943f997eae84e208bd1668f8379", "a3560f093b688f8712efb2a280ef1a66", "151562add01838325f04dae3569223d6", "71af3dcddfc419e6de29bb8d01674245", "7507f0ffebb5d28414ec67fde145bc96", "b1af513115536e9792eeea5105c5c35c");
I$("163870bf9808e4bc47738d0416a9e891", function (e, t, i, n, a, o, s, r, c, d) {
    o.Iz = t.eK();
    d = o.Iz.hK(a.Ed);
    d.Id = function (e) {
        this.iK(e);
        this.Jz = !!e.loopable;
        this.Zf = i.RJ(e.parent);
        this.Kz = e.selected || "js-selected";
        this.Lz = e.hover || this.Kz;
        this.Mz = {};
        if (e.clazz) {
            this.Mz.filter = i.ic.SI(i, e.clazz);
            this.Nz = e.clazz
        }
        this.Oz = this.Pz(this.Zf);
        this.Td([[this.Oz, "keydown", this.Qz.RI(this), !0], [this.Oz, "enter", this.Rz.RI(this)], [this.Zf, "click", this.Sz.RI(this)], [this.Zf, "mouseover", this.Tz.RI(this)], [this.Zf, "mouseleave", this.Uz.RI(this)]])
    };
    d.Md = function () {
        this.iK();
        delete this.Kz;
        delete this.Lz;
        delete this.Zf;
        delete this.Oz;
        delete this.Nz;
        delete this.Mz;
        delete this.Jz
    };
    d.Vz = function (e) {
        if (this.Nz) return i.ic(e, this.Nz); else return e.parentNode == this.Zf
    };
    d.Pz = function () {
        var e = 1e3;
        return function (t) {
            for (; t && (parseInt(t.tabIndex) || 0) <= e;) t = t.parentNode;
            return t || document
        }
    }();
    d.Wz = function (e) {
        var t = i.mc(this.Zf, e);
        return !t ? null : t[0]
    };
    d.Xz = function (e, t) {
        i.Wc(e.last, t);
        i.Kc(e.target, t);
        if (t == this.Kz && e.last != e.target) {
            this.Yz(e.target);
            this.kd("onchange", e)
        }
    };
    d.Yz = function (e) {
        var t = i.pc(e), n = i.tc(e, t);
        if (!(n.y - t.scrollTop < 0)) {
            var a = n.y + e.offsetHeight - t.clientHeight;
            if (a > t.scrollTop) t.scrollTop = a
        } else t.scrollTop = n.y
    };
    d.Zz = function (e, t) {
        var i = n.gd(e, this.Vz.RI(this));
        return !i ? null : {last: this.Wz(t), target: i}
    };
    d.Qz = function (e) {
        var t = e.keyCode;
        if (38 == t || 40 == t) {
            n.ld(e);
            var a = {last: this.$z()};
            this.Mz.backward = 38 == t;
            var o = !this.Nz ? i.hc(this.Zf) : i.mc(this.Zf, this.Nz), s = this.Mz.backward ? o[o.length - 1] : o[0];
            if (!a.last) a.target = this.Wz(this.Lz) || s; else a.target = i.oc(a.last, this.Mz);
            if (!a.target) {
                if (!this.Jz || o.length <= 1) return;
                a.target = s
            }
            this.Xz(a, this.Kz)
        }
    };
    d.Rz = function (e) {
        n.ld(e);
        this.kd("onselect", {enter: !0, target: this.$z()})
    };
    d.Sz = function (e) {
        n.ld(e);
        var t = this.Zz(e, this.Kz);
        if (t) {
            this.Xz(t, this.Kz);
            this.kd("onselect", {target: t.target})
        }
    };
    d.Tz = function (e) {
        var t = this.Zz(e, this.Lz);
        if (t) {
            this.Xz(t, this.Lz);
            if (this.Oz.focus) this.Oz.focus()
        }
    };
    d.Uz = function (e) {
        if (this.Lz != this.Kz) i.Wc(this.Wz(this.Lz), this.Lz)
    };
    d.$z = function () {
        return this.Wz(this.Kz)
    };
    if (!0) e.copy(e.P("nej.ut"), o);
    return o
}, "38fcb21d4f4bc66eeed3795a8cc8504b", "5c3b96a99f4affd48bfbcdc2f37ab7fc", "a5433a940b3ce4d5d7c2ae8a4f7ff1c9", "c2319fe81ae54f0df799a059ee6679e7", "ef610943f997eae84e208bd1668f8379");
I$("9ed69b68f5620ff3b83f22e9bb2e2ce7", function (e, t, i, n, a, o, s, r, c) {
    var d;
    o.aA = t.eK();
    d = o.aA.hK(n.Ed);
    d.gK = function () {
        this.bA = {loopable: !0, onselect: this.cA.RI(this), onchange: this.dA.RI(this)};
        this.iK()
    };
    d.Id = function (e) {
        this.iK(e);
        this.gj = !!e.autofill;
        this.Wr = i.RJ(e.input);
        this.bA.clazz = e.clazz;
        this.bA.parent = i.RJ(e.body);
        this.bA.selected = e.selected || "js-selected";
        this.bA.hover = e.hover || "js-selected";
        this.eA = e.emptySuggets;
        this.Td([[this.Wr, "input", this.fA.RI(this)], [this.Wr, "focus", this.fA.RI(this)], [this.Wr, "blur", this.gA.RI(this)]]);
        this.hA(!1);
        this.iA = a.Iz.Fd(this.bA)
    };
    d.Md = function () {
        this.iK();
        if (this.iA) {
            this.iA.Jd();
            delete this.iA
        }
        delete this.jA;
        delete this.Wr;
        delete this.bA.parent
    };
    d.gA = function () {
    };
    d.fA = function () {
        var e = this.Wr.value.trim();
        if (!e) if (this.eA) this.eA(); else this.hA(!1); else if (!this.jA) this.kd("onchange", e)
    };
    d.kA = function (e) {
        if (!this.jA) {
            this.jA = !0;
            if (e && e != this.Wr.value) this.Wr.value = e;
            this.jA = !1
        }
    };
    d.cA = function (e) {
        var t = i.lc(e.target, "value") || "", n = i.lc(e.target, "type") || "";
        if (t) {
            if (this.gj) this.kA(t);
            t = t || this.Wr.value;
            this.lA("");
            this.kd("onselect", t, n)
        }
    };
    d.dA = function (e) {
        if (this.gj) this.kA(i.lc(e.target, "value") || "")
    };
    d.mA = function (e) {
        this.hA(!!e && e.length > 0)
    };
    d.hA = function (e) {
        if (e) i.Kc(this.bA.parent, "vis"); else i.Wc(this.bA.parent, "vis")
    };
    d.lA = function (e) {
        this.bA.parent.innerHTML = e || "&nbsp;";
        this.hA(!!e)
    };
    if (!0) e.copy(e.P("nej.ut"), o);
    return o
}, "38fcb21d4f4bc66eeed3795a8cc8504b", "5c3b96a99f4affd48bfbcdc2f37ab7fc", "a5433a940b3ce4d5d7c2ae8a4f7ff1c9", "ef610943f997eae84e208bd1668f8379", "163870bf9808e4bc47738d0416a9e891");
I$("4cb1ed02fce328e0442f3b28bc4fbf78", function (e, t, i, n, a, o, s, r, c) {
    var d, _ = e.P("nej.v"), l = e.P("nej.e");
    o.nA = t.eK();
    d = o.nA.hK(n.Ed);
    d.gK = function () {
        this.iK()
    };
    d.Id = function (e) {
        this.iK(e);
        this.Ih = e.body;
        this.lA(e)
    };
    d.Md = function () {
        this.iK()
    };
    d.hA = function (e) {
        if (e) i.Kc(this.Ih, "vis"); else i.Wc(this.Ih, "vis")
    };
    d.lA = function (e) {
        var t = l.Ad("jst-empty-suggest-nav", {xlist: e.xlist});
        var n = i.Lc(t);
        this.Ih.innerHTML = "";
        this.Ih.appendChild(n);
        this.hA(!0)
    };
    if (!0) e.copy(e.P("nej.ut"), o);
    return o
}, "38fcb21d4f4bc66eeed3795a8cc8504b", "5c3b96a99f4affd48bfbcdc2f37ab7fc", "a5433a940b3ce4d5d7c2ae8a4f7ff1c9", "ef610943f997eae84e208bd1668f8379");
I$("47f58200265dd8ee12fb828de589791c", function () {
    var e = window, t = NEJ.O, i = NEJ.F, n = NEJ.P("nej.e"), a = NEJ.P("nej.v"), o = NEJ.P("nej.ut"),
        s = NEJ.P("nej.u"), r = NEJ.P("edu.m"), c = NEJ.P("edu.u"), d = NEJ.P("nej.ut"), _ = NEJ.P("edu.d"), l;
    var u = document.createElement("iframe"), h = "https://study.163.com";
    u.style.display = "none";
    document.body.appendChild(u);
    u.src = h + "/search/localsync.htm";
    u.onload = function () {
        try {
            e.syncWindow = u.contentWindow
        } catch (t) {
            throw t
        }
    };
    var f = 5, p = 5, m = 0, g = 2, b = {courseSearch: "courseSearch", providerSearch: "providerSearch"},
        $ = {courseSearch: "//study.163.com/courses-search", providerSearch: "//study.163.com/provider-search"},
        v = "搜索", C = {suggest: "实时搜索匹配点击", history: "历史搜索模块点击", hot: "热门搜索模块点击"}, I = 100;
    c.oA = NEJ.C();
    l = c.oA.hK(c.Hq, !0);
    l.co = function () {
        this.mK();
        this.pA = e.searchType && e.keyword;
        this.qA = this.pA;
        this.rA = new _.Jq;
        this.rA.Cc("ongetSuggestList", this.sA.RI(this));
        this.rA.Cc("onGetHotKeywords", this.tA.RI(this))
    };
    l.Id = function (e) {
        this.kK(e);
        this.uA = e.label;
        this.vA = e.target;
        if (this.vA) {
            this.wA = {courseSearch: [], providerSearch: []};
            this.xA = {courseSearch: [], providerSearch: []};
            this.yA = !0;
            this.zA = n.mc(this.vA, "j-search")[0];
            this.AA = n.mc(this.vA, "j-submit")[0];
            this.BA = n.mc(this.vA, "j-suggest")[0];
            this.CA = n.mc(this.vA, "selected-type-txt")[0];
            this.DA = n.mc(this.vA, "j-select-search-type")[0];
            this.EA = n.mc(this.vA, "j-select-list")[0];
            this.FA = n.mc(this.vA, "j-delete-local")[0];
            c.mp(this.FA);
            a.Cc(this.AA, "click", this.GA.RI(this));
            a.Cc(this.DA, "click", this.HA.RI(this));
            a.Cc(this.EA, "click", this.IA.RI(this));
            a.Cc(this.FA, "click", this.vL.RI(this));
            a.Cc(this.vA, "click", function (e) {
                a.md(e)
            });
            a.Cc(document, "click", this.JA.RI(this, !1));
            a.Cc(window, "message", this.KA.RI(this));
            this.LA();
            this.MA = c.Gy.Fd({
                inputArea: this.zA,
                labelText: this.uA,
                onInputFocus: this.NA.RI(this, !0),
                onInputChange: this.OA.RI(this)
            });
            if (this.pA) this.PA();
            this.rA.yr(m);
            this.rA.yr(g)
        }
    };
    l.NA = function (e) {
        if (e) {
            this.JA(!0);
            if (!this.QA) this.QA = d.aA.Fd({
                input: this.MA.Iy,
                body: this.BA,
                clazz: "zitm",
                autofill: !1,
                hover: "js-hover",
                onselect: this.RA.RI(this),
                emptySuggets: this.SA.RI(this)
            });
            if (!this.MA.Wy().trim()) {
                this.LA();
                this.SA()
            } else this.OA({keyCode: ""})
        }
    };
    l.OA = function (e) {
        if (this.FK) clearTimeout(this.FK);
        this.FK = setTimeout(this.Py.RI(this, e), I)
    };
    l.Py = function (t) {
        var i = this.MA.Wy().trim(), o = n.lc(this.CA, "type");
        if (this.pA && this.qA && e.keyword != i) this.qA = !1;
        if (!c.Jn() && t.keyCode && 13 == t.keyCode) {
            a.ld(t);
            this.GA();
            return !1
        } else {
            this.TA = i;
            if (i) if (o == b.courseSearch) this.rA.Ar(encodeURIComponent(i), o); else this.rA.Cr(encodeURIComponent(i), o)
        }
    };
    l.RA = function (t, i) {
        if (t) {
            var a = "", o = t;
            if (i) a = C[i];
            c.bj(v, a, o);
            var s = this.MA.Wy().trim(), i = n.lc(this.CA, "type");
            if (!s || s == t) {
                if (i && "history" != i) this.UA(t);
                e.open($[i] + "?keyword=" + encodeURIComponent(t), "_self")
            } else {
                this.MA.Iy.blur();
                e.open(t, "_self")
            }
        }
    };
    l.GA = function () {
        var t = this.MA.Wy().trim(), i = n.lc(this.CA, "type"), a;
        if (t) {
            this.UA();
            a = $[i] + "?keyword=" + encodeURIComponent(t);
            c.bj(v, "点击搜索按钮", t);
            e.open(a, "_self")
        }
    };
    l.PA = function () {
        var t = e.searchType, i = e.searchType == b.courseSearch ? "课程" : "提供方", a = n.lc(this.CA, "type"),
            o = this.CA.innerText;
        if (i != o) {
            n.lc(this.CA, "type", t);
            this.CA.innerText = i;
            n.lc(this.EA, "type", a);
            this.EA.innerText = o
        }
        this.MA.Sy(e.keyword || "搜索" + (t == b.courseSearch ? "课程" : "课程提供方"))
    };
    l.HA = function () {
        this.VA();
        if (this.yA) n.Wc(this.EA, "f-dn"); else n.Kc(this.EA, "f-dn");
        this.yA = !this.yA
    };
    l.IA = function (e) {
        var t = n.lc(e.target, "type") || "", i = e.target.innerText || "课程", a = n.lc(this.CA, "type"),
            o = this.CA.innerText;
        n.lc(this.CA, "type", t);
        this.CA.innerText = i;
        n.lc(this.EA, "type", a);
        this.EA.innerText = o;
        this.HA();
        this.MA.bz(this.TA || "搜索" + (t == b.courseSearch ? "课程" : "课程提供方"));
        this.JA(!0);
        c.bj(v, "切换搜索内容", i)
    };
    l.tA = function (e, t) {
        if (t && t.result) if (e == m) this.wA.courseSearch = this.WA(t.result, p); else if (e == g) this.wA.providerSearch = this.WA(t.result, p)
    };
    l.WA = function (e, t) {
        var i = e.length, n = [], a = [];
        if (0 != i) {
            for (var o = 0; o < t; o++) {
                var s = Math.floor(Math.random() * i);
                if (n.indexOf(s) != -1) o--; else {
                    n.push(s);
                    a.push(e[s])
                }
            }
            return a
        }
    };
    l.sA = function (t, i) {
        if (i && i.result && 0 != i.result.length && !this.qA) {
            var a = [], o = this.MA.Wy().trim(), t = n.lc(this.CA, "type"), s = i.result, r = s.length;
            if (t == b.courseSearch) {
                for (var d = 0; d < r; d++) if (s[d]) {
                    var _ = e.courseIntroPrefix.replace("{id}", s[d].productId), t = "", l = "";
                    if (s[d].productType == c.CONST.PRODUCT_TYPE_MICRO_SPECIAL) {
                        _ = e.smartSpecDetailPrefix.replace("{smartSpecId}", s[d].productId);
                        t = "微专业";
                        l = "type-micro"
                    } else if (s[d].productType == c.CONST.PRODUCT_TYPE_YOOC) _ = e.yocCourseinfoTermPrefix + s[d].productId + ".htm"; else if (s[d].productType == c.CONST.PRODUCT_TYPE_SERIES) {
                        t = "系列课程";
                        l = "type-series";
                        _ = e.seriesPrefix.replace("{seriesId}", s[d].productId)
                    }
                    a.push({name: c.zz(s[d].productName), title: c.Az(s[d].productName), url: _, type: t, typeclass: l})
                }
            } else for (var d = 0; d < r; d++) if (s[d]) {
                var _ = s[d].personHomePage;
                a.push({name: c.zz(s[d].nickName), title: c.Az(s[d].nickName), url: _})
            }
            if (o == this.TA) {
                this.QA.lA(n.Ad("jst-suggest-nav", {xlist: a}));
                c.mp(this.FA);
                c.bj(v, "实时搜索弹窗", "");
                c.bj(v, "实时搜索匹配", o + "_" + s.length)
            }
        } else this.QA.lA("")
    };
    l.SA = function () {
        var e = [], t = n.lc(this.CA, "type"), i = this.xA[t].length, a = i > f ? f : i, o = this.wA[t], s = $[t];
        if (i > 0) {
            e.push({topbar: "历史搜索", url: "", title: "历史搜索"});
            for (var r = 0; r < a; r++) {
                var _ = this.xA[t][r];
                e.push({name: _, title: _, type: "history"})
            }
            c.bj(v, "历史搜索模块展示", "")
        }
        if (o && o.length > 0) {
            e.push({topbar: "热门搜索", url: "", title: "热门搜索"});
            for (var r = 0; r < o.length; r++) {
                var _ = o[r];
                e.push({name: _, title: _, type: "hot"})
            }
            c.bj(v, "热门搜索模块展示", "")
        }
        if (e.length > 0) {
            this.MA.cz(!0);
            if (!this.XA) this.XA = d.nA.Fd({body: this.BA, xlist: e}); else this.XA.lA({xlist: e});
            if (i > 0) c.BM(this.FA); else c.mp(this.FA)
        } else this.VA()
    };
    l.VA = function () {
        if (this.XA) this.XA.hA(!1); else if (this.QA) this.QA.hA(!1);
        c.mp(this.FA)
    };
    l.JA = function (t) {
        if (t) {
            n.Wc(this.vA, "off");
            this.MA.Ky();
            c.bj(v, "搜索激活", e.location.href)
        } else {
            n.Kc(this.vA, "off");
            this.VA();
            if (!this.yA) this.HA()
        }
    };
    l.YA = function (t) {
        var i = h;
        if (!e.syncWindow) e.setTimeout(this.YA.RI(this, t), 300); else e.syncWindow.postMessage(t, i)
    };
    l.UA = function () {
        var e = n.lc(this.CA, "type"), t = this.MA.Wy().trim(), i = this.xA[e].indexOf(t);
        if (t) {
            if (i != -1) this.xA[e].splice(i, 1);
            this.xA[e].unshift(t);
            if (this.xA[e].length > f) this.xA[e] = this.xA[e].slice(0, f);
            this.YA({type: e, value: this.xA[e], method: "set"})
        }
    };
    l.LA = function () {
        this.YA({method: "get"})
    };
    l.KA = function (e) {
        if (e.origin === h) this.xA = e.data
    };
    l.vL = function () {
        var e = n.lc(this.CA, "type");
        this.xA[e] = [];
        this.YA({method: "clear", type: e});
        c.bj(v, "历史搜索模块清空", "");
        this.SA()
    };
    l.Md = function () {
        this.lK()
    }
}, "2485091b4f4b621adc889ffa898e41e6", "16921f2dee6c8d6b29afea746d978144", "393c172195c9280b0b17edb6219129db", "90d6d6be23475ccac85c853489f64c57", "7507f0ffebb5d28414ec67fde145bc96", "9ed69b68f5620ff3b83f22e9bb2e2ce7", "4cb1ed02fce328e0442f3b28bc4fbf78", "c744172221c7874d28939ab4e836d5e1");
I$("798f1e26aac8a0fccc5afbce8e38b75d", function () {
    var e = window, t = NEJ.O, i = NEJ.P("nej.e"), n = NEJ.P("nej.j"), a = NEJ.P("edu.u");
    a.zn = function () {
        var t = e.webUser || "";
        return function () {
            return t
        }
    }();
    a.Kw = function (e) {
        return a.DM(a.zn().studyRoles, e || "")
    };
    a.Lw = function () {
        var e = "";
        var t = a.zn();
        if (t) if (t.loginType == -1) e = t.loginId || ""; else if (2 == t.loginType || 3 == t.loginType || 4 == t.loginType) e = t.email || "";
        return e
    };
    a.Mw = function (e) {
        e = void 0 != e ? e : a.zn().accountType;
        return 5 == parseInt(e)
    };
    a.Nw = function () {
        var e = a.zn().yoocRoles;
        return !!e && a.DM(e, "lector")
    };
    a.Ow = function () {
        var e = a.zn().yoocRoles;
        return !!e && a.DM(e, "assistant")
    };
    a.Pw = function (e) {
        e = void 0 != e ? e : a.zn().accountType;
        return 10 == parseInt(e)
    };
    a.Qw = function () {
        return (a.Mw() || a.Pw()) && a.DM(a.zn().studyRoles, "ROLE_COLUMN_MAKER")
    };
    a.Rw = function () {
        return (a.Mw() || a.Pw()) && a.DM(a.zn().studyRoles, "ROLE_ORGANIZATION_MAKER")
    };
    a.Sw = function () {
        if (e.privilege) return a.DM(e.privilege, "CP_CONTENT_MANAGE_CREATE_COLUMN")
    };
    a.Tw = function () {
        if (e.privilege) return a.DM(e.privilege, "CP_CONTENT_MANAGE_EDIT_COURSE") || a.DM(e.privilege, "CP_CONTENT_MANAGE_EDIT_RESPONSIBLE_COURSE") || a.DM(e.privilege, "CP_CONTENT_MANAGE_CREATE_COURSE")
    };
    a.Uw = function () {
        if (e.privilege) return a.DM(e.privilege, "CP_CONTENT_MANAGE_CREATE_COURSE")
    };
    a.Vw = function () {
        if (e.privilege) return a.DM(e.privilege, "CP_CONTENT_MANAGE_EDIT_RESPONSIBLE_COURSE") || a.DM(e.privilege, "CP_CONTENT_MANAGE_EDIT_COURSE")
    };
    a.Ww = function () {
        if (e.privilege) return a.DM(e.privilege, "CP_CONTENT_MANAGE_DELETE_COURSE")
    };
    a.Vw = function () {
        if (e.privilege) return a.DM(e.privilege, "CP_CONTENT_MANAGE_EDIT_COURSE") || a.DM(e.privilege, "CP_CONTENT_MANAGE_EDIT_RESPONSIBLE_COURSE")
    };
    a.Xw = function () {
        if (e.privilege) return a.DM(e.privilege, "CP_CONTENT_MANAGE_CREATE_BOOK")
    };
    a.Yw = function () {
        if (e.privilege) return a.DM(e.privilege, "CP_TRADE_CENTER_DOWNLOAD_ORDER")
    };
    a.Zw = function () {
        if (e.privilege) return a.DM(e.privilege, "CP_CONTENT_MANAGE_CREATE_FEE_COURSE")
    };
    a.$w = function () {
        if (e.privilege) return a.DM(e.privilege, "CP_MARKET_CENTER_CREATE_REDEEMCODE")
    };
    a.oN = function () {
        if (e.privilege) return a.DM(e.privilege, "CP_MARKET_CENTER_CREATE_COUPON")
    };
    a.qN = function () {
        if (e.privilege) return a.DM(e.privilege, "CP_CONTENT_MANAGE_CREATE_AUDIO_LESSON")
    };
    a.ex = function () {
        if (e.privilege) return a.DM(e.privilege, "CP_CONTENT_MANAGE_CREATE_LIVE")
    };
    a.gx = function () {
        return (a.Mw() || a.Pw()) && a.DM(a.zn().studyRoles, "ROLE_ORGANIZATION_FEE")
    };
    a.hx = function () {
        var e = a.Mw() || 10 == parseInt(a.zn().accountType);
        var t = a.DM(a.zn().studyRoles, "ROLE_LIVECOURSE_MAKER");
        return e && t
    };
    a.ix = function () {
        return (a.Mw() || a.Pw()) && a.DM(a.zn().studyRoles, "ROLE_BOOK_MAKER")
    };
    a.jx = function () {
        return (a.Mw() || a.Pw()) && a.DM(a.zn().studyRoles, a.CONST.ROLE_DATAREPORT_VIEWER)
    };
    a.kx = function () {
        return a.Mw() && a.DM(a.zn().studyRoles, a.CONST.ROLE_NEWHOMEPAGE_USER)
    };
    a.lx = function () {
        return (a.Mw() || a.Pw()) && a.DM(a.zn().studyRoles, "ROLE_ORGANIZATION_MAKER") && a.DM(a.zn().studyRoles, "ROLE_ORGANIZATION_FEE")
    };
    a.mx = function () {
        return a.zn() ? !0 : !1
    };
    a.An = function (e, t) {
        var i = !1;
        if (a.zn() && a.zn().id) i = e == a.zn().id || t == a.zn().loginId;
        return i
    };
    a.nx = function () {
        var e = "";
        if (a.zn()) e = a.zn().personalUrlPrefix + a.zn().personalUrlSuffix;
        return e
    };
    a.ox = function (t, n) {
        var o = "";
        n = n || {};
        if (!n.message || n.message && "not_auth" == n.message) o = "对不起，该用户设置了隐私，您没有权限查看该项内容！:-("; else o = n.message;
        var s = '<div class="u-noauth" style="display:block;">' + o + "</div>";
        if (t) t.innerHTML = s; else {
            t = i.RJ("personCenter-noauth");
            e.dispatcher.fh({to: a.umi("personCenter"), data: {action: "noauth"}})
        }
    };
    a.px = function () {
        return !!a.zn() && !!a.zn().corpUser && "true" === a.zn().corpUser
    };
    a.qx = function (e, t) {
        var i;
        for (var n = t.length - 1; n >= 0; n--) if (t[n].id == e.id) {
            i = !0;
            break
        }
        return i
    }
}, "ef610943f997eae84e208bd1668f8379", "f16c7f92e4debb611ed15b0b2e34a3f6", "393c172195c9280b0b17edb6219129db", "b1af513115536e9792eeea5105c5c35c");
I$("91e2466cd403014de04f9ccb5fae9bb3", function (e) {
    var t = NEJ.O, i = NEJ.P("nej.j"), n = NEJ.P("nej.u"), a = NEJ.P("edu.d"), o = NEJ.P("edu.u"), s = n.HJ(), r,
        c = "ck-messageIntroCache";
    a.ZA = NEJ.C();
    r = a.ZA.hK(a.vq);
    r.$A = function (e, t) {
        var i = this, n = e;
        this.zq({
            key: c + s, url: "MessageBean.getMessageList", param: [e, t], onload: function (e) {
                e.bigType = n;
                i._A(e)
            }
        })
    };
    r._A = function (e) {
        this.kd("onGetMessageList", e)
    };
    r.aB = function (e) {
        this.zq({key: c + s, url: "MessageBean.deleteMessage", param: [e], onload: this.bB.RI(this)})
    };
    r.bB = function (e) {
        this.kd("ondeleteMessage", e)
    };
    r.cB = function (e) {
        this.zq({key: c + s, url: "MessageBean.deleteAllMessage", param: [e], onload: this.dB.RI(this)})
    };
    r.dB = function (e) {
        this.kd("ondeleteAllMessage", e)
    };
    r.eB = function (e) {
        this.zq({key: c + s, url: "MessageBean.markMessageAsRead", param: [e], onload: this.fB.RI(this)})
    };
    r.fB = function (e) {
        this.kd("onmarkMessageAsRead", e)
    };
    r.gB = function (e) {
        this.zq({
            key: c + s, url: "MessageBean.markMessageAsRead", param: [e], onload: this.hB.RI(this)
        })
    };
    r.hB = function (e) {
        this.kd("onmarkMessageAsRead1", e)
    };
    r.iB = function (e) {
        var t = this, i = e;
        this.zq({
            notShowLoading: !0,
            key: c + s,
            url: "MessageBean.getUnreadMessageCount",
            param: [e],
            notShowLoading: !0,
            onload: function (e) {
                t.jB({msgCou: e, bigType: i})
            }
        })
    };
    r.jB = function (e) {
        this.kd("onGetUnreadMessageCount", e)
    };
    r.kB = function (e) {
        this.zq({key: c + s, url: "MessageBean.markAllMessageAsRead", param: [e], onload: this.lB.RI(this)})
    };
    r.lB = function (e) {
        this.kd("onMarkAllMessageAsRead", e)
    };
    r.mB = function () {
        if (o.mx()) this.zq({
            notShowLoading: !0,
            key: c + s,
            url: "MessageBean.getUnreadMessageList",
            param: [],
            onload: this.nB.RI(this)
        })
    };
    r.nB = function (e) {
        this.kd("onGetUrdMsgList", e)
    };
    r.oB = function (e) {
        if (o.mx()) this.zq({
            notShowLoading: !0,
            key: c + s,
            url: "MessageBean.getUnreadMessageListInCourse",
            param: [e],
            onload: this.pB.RI(this)
        })
    };
    r.pB = function (e) {
        this.kd("onGetUnreadMessage", e)
    };
    r.qB = function (t) {
        i.mf("/message/v2/unreadcount.json", {
            headers: {
                "Content-Type": "application/json",
                "edu-script-token": e.WK("NTESSTUDYSI")
            }, method: "GET", onload: this.rB.RI(this)
        })
    };
    r.rB = function (e) {
        var e = e ? JSON.parse(e) : null;
        this.kd("ongetMessageTab", e)
    }
}, "f16c7f92e4debb611ed15b0b2e34a3f6", "0a75c7094be3e9ca124b1c7fdd9c05b5", "798f1e26aac8a0fccc5afbce8e38b75d");
I$("0b596b1e6bc7e10f111488f59fd27846", function () {
    var e = window, t = NEJ.O, i = NEJ.F;
    var n = +new Date
});
I$("15c16be5f390e65c6164a900eb0a2440", function () {
    var e = window, t = NEJ.O, i = NEJ.F, n = NEJ.P("nej.u"), a = NEJ.P("nej.ut"), o = NEJ.P("nej.e"),
        s = NEJ.P("nej.v"), r = NEJ.P("nej.j"), c = NEJ.P("edu.d"), d = NEJ.P("edu.m"), r = NEJ.P("nej.j"),
        _ = NEJ.P("edu.u"), r = NEJ.P("nej.j"), l, u;
    _.IB = NEJ.C();
    l = _.IB.hK(a.Xd, !0);
    u = _.IB.rK;
    l.JB = function () {
        this.KB = o.mc(this.vB, "j-uhref");
        if (this.KB) n.oJ(this.KB, function (e) {
            e.href = n.qJ(_.nx())
        })
    };
    l.AB = function () {
        var t = this.vB, i = _.Mw() || _.Pw(), a = _.Rw(), r = _.Qw(), c = _.Nw(), d = c || _.Ow(),
            l = o.mc(t, "j-addCourse"), u = o.mc(t, "j-yoctch"), h = o.mc(t, "j-mngCourse");
        this.LB();
        var f = o.mc(t, "j-nav-loginBtn");
        if ("cp-introduction" != e.currentPageName) {
            var p = o.mc(t, "j-user-ask")[0];
            var m = o.mc(t, "j-cpAdminNode")[0];
            if (e.contentProviderId) _.BM(m);
            s.Cc(p, "click", function () {
                _.Op("7b1d5479260a923d1e5b187c8b9ac9a9", "")
            }.RI(this))
        }
        if (f) for (var g = 0; g < f.length; g++) {
            var b = f[g].innerText;
            if ("切换帐号" != b) s.Cc(f[g], "click", function () {
                _.Eq.Dq({from: "navi"})
            }.RI(this)); else f[g].href = e.logoutPrefix + "?returnUrl=" + n.Pi(_.jq({}))
        }
        this.MB = o.mc(t, "j-nav-set")[0];
        var $ = o.mc(t, "j-userinfo")[0];
        s.Cc($, "mouseover", this.NB.RI(this, !0));
        s.Cc($, "click", this.NB.RI(this, !0));
        s.Cc($, "mouseout", this.NB.RI(this, !1));
        this.OB = o.mc(this.vB, "j-searchP")[0];
        if (this.OB) this.PB = _.oA.Fd({target: this.OB, label: "搜索课程"});
        var v = o.mc(this.vB, "j-navFind")[0];
        if (v) _.BM(o.mc(this.vB, "j-navFind")[0]);
        if (_.zn()) {
            this.rA.ar();
            this.rA.cr();
            this.QB.iB()
        }
    };
    l.LB = function () {
        if ("index" == e.currentPageName) {
            var t = r.WK("STUDY_CP_ENTRANCE_CLOSE_NEW");
            if (1 != t && e.contentProviderId) ;
        }
    };
    l.gz = function () {
        r.WK("STUDY_CP_ENTRANCE_CLOSE_NEW", {path: "/", domain: "." + e.studyHost, value: 1, expires: 365});
        _.mp(this.RB)
    };
    l.NB = function (t, i) {
        s.md(i);
        if (t) {
            if (this.mL) this.mL = clearTimeout(this.mL);
            o.Kc(this.MB, "x-show")
        } else this.mL = e.setTimeout(function () {
            o.Wc(this.MB, "x-show")
        }.RI(this), 200)
    };
    l.SB = function (e) {
        this.TB = o.mc(this.vB, "j-navright")[0];
        if (this.TB) {
            s.Cc(window, "resize", this.UB.RI(this));
            this.UB()
        }
    };
    l.UB = function (e) {
        _.Ap(o.qc().clientWidth < 1210, this.TB, "m-navrgt2")
    };
    l.VB = function (e) {
        if (e && _.zn()) {
            if (e.nickName) _.zn().nickName = e.nickName;
            if (e.smallFaceUrl) _.zn().smallFaceUrl = e.smallFaceUrl;
            if (e.largeFaceUrl) _.zn().largeFaceUrl = e.largeFaceUrl;
            if (e.personalUrlSuffix) _.zn().personalUrlSuffix = e.personalUrlSuffix;
            this.WB = o.mc(this.vB, "j-nav-myimg")[0];
            if (this.WB && _.zn().smallFaceUrl) this.WB.src = _.zn().smallFaceUrl; else this.WB.src = window.imageUrlMap.head_small_img
        }
        this.JB()
    };
    l.BB = function (e) {
        if (_.zn()) this.rA.ar()
    };
    l.CB = function (e) {
        if (e >= 0) {
            var t;
            t = e || 0;
            t = e > 99 ? "99+" : e;
            this.DB = o.mc(this.vB, "j-nav-cartnum");
            n.oJ(this.DB, function (e) {
                e.innerText = t;
                if (0 == t) o.Kc(e, "hidddenClass"); else o.Wc(e, "hidddenClass")
            })
        }
    };
    l.FB = function (e) {
        if (e >= 0) {
            var t;
            t = e || 0;
            t = e > 99 ? "99+" : e;
            this.GB = o.mc(this.vB, "j-myCouponNum");
            n.oJ(this.GB, function (e) {
                e.innerText = t
            })
        }
    };
    l.nB = function (e) {
        var t = e.msgCou || 0;
        if (t > 99) t = "99+";
        this.XB = o.mc(this.vB, "j-nav-msgnum");
        n.oJ(this.XB, function (e) {
            e.innerText = t;
            if (0 == t) o.Kc(e, "hidddenClass"); else o.Wc(e, "hidddenClass")
        });
        this.JB()
    };
    l.YB = function () {
        this.ZB = o.mc(this.vB, "j-dropmenubtn");
        n.oJ(this.ZB, function (t) {
            s.Cc(t, "click", function () {
                var i = o.lc(t, "href");
                e.open(i, "_self")
            })
        })
    };
    l.$B = function (t) {
        if (!t && e.isNavIndex) {
            var i = e.isNavIndex ? o.tc(o.RJ("j-micro")).y : o.tc(o.RJ("j-navshowoffset")).y;
            s.Cc(window, "scroll", function () {
                if (o.qc().scrollTop <= i) o.Kc(this.vB, "f-dn"); else o.Wc(this.vB, "f-dn")
            }.RI(this));
            if (o.qc().scrollTop <= i) o.Kc(this.vB, "f-dn"); else o.Wc(this.vB, "f-dn")
        }
    };
    l.Id = function (e) {
        this.vB = e.node || o.RJ("j-topnav");
        if (this.vB) {
            this.rA = new c.Jq;
            this.rA.Cc("onGetCartCount", this.CB.RI(this));
            this.rA.Cc("onGetCouponCount", this.FB.RI(this));
            this.QB = new c.ZA;
            this.QB.Cc("onGetUnreadMessageCount", this.nB.RI(this));
            this.JB();
            this.AB();
            this.YB();
            this.$B(e.isIndex)
        }
    };
    l.Md = function () {
        this.lK()
    }
}, "ef610943f997eae84e208bd1668f8379", "59ef31d2fec280072e3d6d1b5eec02b4", "59970d2cf64d09b0c87d787f7fd809a0", "47f58200265dd8ee12fb828de589791c", "91e2466cd403014de04f9ccb5fae9bb3", "c744172221c7874d28939ab4e836d5e1", "6c454d1fb0bf65e1c382f5362cefe762", "151562add01838325f04dae3569223d6", "798f1e26aac8a0fccc5afbce8e38b75d", "b1af513115536e9792eeea5105c5c35c", "f16c7f92e4debb611ed15b0b2e34a3f6", "7507f0ffebb5d28414ec67fde145bc96", "0b596b1e6bc7e10f111488f59fd27846");
I$("e79af651b6317ab78d125dc8390280df", function () {
    var e = NEJ.O, t = NEJ.P("nej.j"), i = NEJ.P("nej.u"), n = NEJ.P("edu.d"), a = NEJ.P("edu.u"), o = i.HJ(), s,
        r = "ck-snsCache";
    n._B = NEJ.C();
    s = n._B.hK(n.vq);
    s.aC = function () {
        this.zq({key: r + o, url: "ThirdShareBean.addFriendshipToOrg", param: [], onload: this.bC.RI(this)})
    };
    s.bC = function (e) {
        this.kd("onAddFriendship", e)
    };
    s.cC = function (e, t) {
        this.zq({key: r + o, url: "ThirdShareBean.sendRecommendShareToSns", param: [e, t], onload: this.dC.RI(this)})
    };
    s.dC = function (e) {
        this.kd("onsendShareInfo", e)
    };
    s.eC = function (e, t) {
        this.zq({
            key: r + o,
            url: "ThirdShareBean.getWeiboFriendsInCloudClass",
            param: [e, t],
            onload: this.fC.RI(this)
        })
    };
    s.fC = function (e) {
        this.kd("ongetWeiboFriendsIn901", e)
    };
    s.gC = function (e, t) {
        this.zq({
            key: r + o,
            url: "ThirdShareBean.getWeiboFriendsNotInCloudClass",
            param: [e, t],
            onload: this.hC.RI(this)
        })
    };
    s.hC = function (e) {
        this.kd("ongetWeiboFriendsNotIn901", e)
    };
    s.iC = function (e, t) {
        this.zq({
            key: r + o,
            url: "ThirdShareBean.getRenrenFriendsInCloudClass",
            param: [e, t],
            onload: this.jC.RI(this)
        })
    };
    s.jC = function (e) {
        this.kd("ongetRenrenFriendsIn901", e)
    };
    s.kC = function (e, t) {
        this.zq({
            key: r + o,
            url: "ThirdShareBean.getRenrenFriendsNotInCloudClass",
            param: [e, t],
            onload: this.lC.RI(this)
        })
    };
    s.lC = function (e) {
        this.kd("ongetRenrenFriendsNotIn901", e)
    };
    s.mC = function () {
        this.zq({key: r + o, url: "ThirdShareBean.getThirdShareList", onload: this.nC.RI(this)})
    };
    s.nC = function (e) {
        this.kd("ongetThirdShareList", e)
    };
    s.oC = function () {
        this.zq({key: r + o, url: "BindAccountBean.getAllAccount", onload: this.pC.RI(this)})
    };
    s.pC = function (e) {
        this.kd("onGetBindInfo", e)
    };
    s.qC = function (e) {
        this.zq({key: r + o, url: "BindAccountBean.getBindMemberData", onload: this.rC.RI(this, e)})
    };
    s.rC = function (e, t) {
        this.kd("onGetBindMemberData", t, e)
    };
    s.sC = function (e, t) {
        this.zq({key: r + o, url: "BindAccountBean.changeBindMember", param: [e], onload: this.tC.RI(this, t)})
    };
    s.tC = function (e, t) {
        this.kd("onChangeBindMember", t, e)
    };
    s.uC = function (e) {
        this.zq({key: r + o, url: "BindAccountBean.unbindMember", param: [e], onload: this.vC.RI(this, e)})
    };
    s.vC = function (e, t) {
        this.kd("onUnbindAcc", t, e)
    };
    s.wC = function (e) {
        this.zq({key: r + o, param: [e], url: "ThirdShareBean.getThirdShareListByUserId", onload: this.xC.RI(this)})
    };
    s.xC = function (e) {
        this.kd("ongetThirdShareListByUserId", e)
    };
    s.yC = function (e) {
        this.zq({key: r + o, url: "ThirdShareBean.deleteThirdShareBinding", param: [e], onload: this.zC.RI(this)})
    };
    s.zC = function (e) {
        this.kd("onUnbind", e)
    };
    s.AC = function () {
        this.zq({key: r + o, url: "MemberBean.getInvitationCode", param: [], onload: this.BC.RI(this)})
    };
    s.BC = function (e) {
        this.kd("ongetInvitationCode", e)
    }
}, "798f1e26aac8a0fccc5afbce8e38b75d", "0a75c7094be3e9ca124b1c7fdd9c05b5");
I$("30040c3a122e9dcada621fad9e02025a", function (e, t, i, n, a, o, s, r) {
    var c;
    a.CC = t.eK();
    c = a.CC.hK(n.uy);
    c.Id = function (e) {
        e = i.KJ({}, e);
        e.timing = "easeout";
        this.iK(e)
    };
    if (!0) e.copy(e.P("nej.ut"), a);
    return a
}, "38fcb21d4f4bc66eeed3795a8cc8504b", "5c3b96a99f4affd48bfbcdc2f37ab7fc", "7473c7d0556819b21bec58b99f475b04", "800dcdcb17f634d1052dc3da7253f3de");
I$("334fed1b68f51d78b90bb88048ca2189", function () {
    var e = window, t = NEJ.O, i = NEJ.F, n = NEJ.P("nej.e"), a = NEJ.P("nej.v"), o = NEJ.P("edu.m"),
        s = NEJ.P("edu.u"), r = NEJ.P("nej.ut"), c,
        d = n.zd('            <div class="m-side-operation" id="j-side-operation">                 <div class="side-service-item">                     <a class="item-link-block feedback" data-name="留言" >                          <i class="f-icon icon-feedback"></i>                     </a>                 </div>                <div class="line-wrap"><div class="line"></div></div>                <div class="side-service-item ">                     <a class="item-link-block app-download" data-name="手机课堂" href="javascript:void(0)">                          <i class="f-icon icon-mobile icon-hover-none"></i>                         <span class="item-hover-text">手机课堂</span>                        <div class="qrcode-bubble">                            <div class="qrcode">                                <div class="download">                                    <img src="//s.stu.126.net/res/images/qrcode/sideBar90.png" />                                    <p>下载App</p>                                </div>                                <div class="follow-weixin">                                    <img src="//s.stu.126.net/res/images/qrcode/weixin.png"/>                                    <p>关注微信</p>                                </div>                            </div>                            <div class="arrow"><div class="arrow-border"></div><div class="arrow-cnt"></div></div>                        </div>                     </a>                 </div>                <div class="line-wrap"><div class="line"></div></div>                <div class="side-service-item ">                     <a class="item-link-block side-service-top" data-name="回到顶部" href="javascript:void(0)" >                          <i class="f-icon icon-totop icon-hover-none"></i>                         <span class="item-hover-text scrtop-text">返回顶部</span>                     </a>                 </div>             </div>');
    DC = n.Ic(".m-side-operation {display:none;position: fixed;right: 30px;bottom: 112px;z-index: 1000;font-size: 14px;border: 1px solid #ccc;background: #fff;width: 60px;}            .m-side-operation .side-service-item {width: 60px;height: 60px;}            .m-side-operation .side-service-item .item-link-block {position: relative;width: 60px;height: 60px;display: inline-block; text-align: center; color: #666;}            .m-side-operation .side-service-item .item-link-block .f-icon {font-size: 32px; line-height: 60px; }            .m-side-operation .side-service-item .feedback:hover {background-color: #39a030;}            .m-side-operation .side-service-item .item-link-block:hover .f-icon{color: #fff;}            .m-side-operation .side-service-item .item-link-block:hover .item-hover-text {display: block;}            .m-side-operation .side-service-item .item-link-block:hover .icon-hover-none {display: none;}            .m-side-operation .side-service-item .item-link-block .feedback-icon {background-position: 0 0;top: 16px;left: 16px;}            .m-side-operation .side-service-item .item-link-block .phone-icon {background-position: 0 -57px;top: 16px;left: 20px;}            .m-side-operation .side-service-item .item-link-block .top-icon {background-position: 0 -112px;top: 13px;left: 16px;}            .m-side-operation .side-service-item .item-link-block .item-hover-text {display: none;text-align: center;padding: 10px 15px;background-color: #39a030;color: #fff;height: 40px;}            .m-side-operation .side-service-item .item-link-block .feedback-text {border-radius: 6px 6px 0 0;}            .m-side-operation .side-service-item .item-link-block .scrtop-text {}            .m-side-operation .side-service-item .item-link-block .qrcode-bubble {display: none;z-index:100000;}            .m-side-operation .side-service-item .item-link-block .qrcode-bubble .qrcode {border: 1px solid #ccc;position: absolute;right: 60px;top: -30px;width:200px;padding: 10px 0 6px 12px;background-color: #fff;border-radius: 3px;text-align: center;}            .m-side-operation .side-service-item .item-link-block .qrcode-bubble .qrcode .download, .m-side-operation .side-service-item .item-link-block .qrcode-bubble .qrcode .follow-weixin {float: left;width: 90px;color: #666;margin-right: 10px;}            .m-side-operation .side-service-item .item-link-block .qrcode-bubble .qrcode .download img, .m-side-operation .side-service-item .item-link-block .qrcode-bubble .qrcode .follow-weixin img {width: 90px;height: 90px;}            .m-side-operation .side-service-item .item-link-block .arrow .arrow-cnt, .m-side-operation .side-service-item .item-link-block .arrow .arrow-border {display: block;position: absolute;top: 27px;border-width: 7px 4px;border-style: solid;border-color: transparent transparent transparent #fff;}            .m-side-operation .side-service-item .item-link-block .arrow .arrow-cnt {left: -1px;}            .m-side-operation .side-service-item .item-link-block .arrow .arrow-border {border-left-color: #ccc;}            .m-side-operation .side-service-item .app-download:hover .qrcode-bubble {display: block;}            .m-side-operation .line-wrap {width: 60px;text-align: center;font-size: 0;}            .m-side-operation .line-wrap .line {width: 50px;border-top: 1px solid #ccc;display: inline-block;}            #YSF-BTN-HOLDER{display: none !important;}            ");
    o.EC = NEJ.C();
    c = o.EC.hK(s.Hq, !0);
    c.bo = function () {
        this.no = DC;
        this.lo = n.Gf(n.Ad(d))
    };
    c.co = function () {
        s.Pp("7b1d5479260a923d1e5b187c8b9ac9a9", "");
        this.mK();
        this.FC = n.mc(this.Ih, "side-service-top")[0];
        this.GC = s.Jn();
        if (this.GC) s.mp(this.Ih); else s.BM(this.Ih);
        this.HC = n.mc(this.Ih, "feedback")[0];
        a.Cc(this.FC, "click", this.IC.RI(this));
        a.Cc(window, "scroll", this.JC.RI(this));
        a.Cc(this.Ih, "click", this.KC.RI(this, "首页_底部导航"));
        a.Cc(this.HC, "click", function () {
            s.Op("7b1d5479260a923d1e5b187c8b9ac9a9", "")
        }.RI(this))
    };
    c.IC = function () {
        var e = n.qc().scrollTop;
        this.LC = r.CC.Fd({
            from: {offset: e},
            to: {offset: 0},
            duration: 100,
            onupdate: this.MC.RI(this),
            onstop: this.NC.RI(this)
        });
        this.LC.ty()
    };
    c.MC = function (e) {
        window.scrollTo(0, e.offset)
    };
    c.NC = function () {
        if (this.LC) this.LC = r.CC.Jd(this.LC)
    };
    c.JC = function () {
        this.OC();
        if (this.PC > 0) this.QC(); else this.RC()
    };
    c.OC = function () {
        var e = n.qc();
        this.PC = e.scrollTop;
        this.SC = e.clientWidth
    };
    c.TC = function () {
        if (this.mL) this.mL = window.clearTimeout(this.mL)
    };
    c.QC = function () {
        this.TC();
        if (this.GC) ;
        this.Ih.style.display = "block";
        this.Ih.style.opacity = 1
    };
    c.RC = function () {
        this.TC();
        this.mL = window.setTimeout(function () {
            if (this.GC) ;
            this.Ih.style.display = "none";
            this.Ih.style.opacity = 0
        }.RI(this), 300)
    };
    c.KC = function (t, i) {
        var o = a.gd(i, "d:name"), r = "", c = {};
        if (o) {
            a.md(i);
            r = n.lc(o, "name");
            c["是否登陆"] = s.zn() ? "已登录" : "未登陆";
            c["当前url"] = e.location.href;
            s.bj(t, r, JSON.stringify(c || {}))
        }
    };
    c.UC = function (e, t) {
        var i = "页面右下导航", e = e, o = {}, r = a.gd(t);
        if (n.kc(r, "memberid")) {
            o["对话者id"] = "s-" + n.kc(r, "memberid");
            s.bj(i, e, JSON.stringify(o || {}))
        }
    };
    c.VC = function (e, t) {
        var i = "页面右下导航", e = e, n = {};
        n["对话者id"] = "s-" + t;
        s.bj(i, e, JSON.stringify(n || {}))
    };
    c.Id = function (e) {
        this.kK(e)
    }
}, "2485091b4f4b621adc889ffa898e41e6", "30040c3a122e9dcada621fad9e02025a", "151562add01838325f04dae3569223d6");
I$("ee9a33e0c30fcf15c938b22e6909af49", function () {
    var e = NEJ.O, t = window, i = NEJ.F, n = NEJ.P("nej.p"), a = NEJ.P("nej.e"), o = NEJ.P("nej.v"),
        s = NEJ.P("nej.j"), r = NEJ.P("edu.u"), c;
    var d = a.Ic("\t\t.#<uispace>.u-appbanner{ width:100%;height:52px;background-color:#fff;}        .#<uispace>.u-appbanner .wrap{ margin: 0px;padding: 11px 10px;}        .#<uispace>.u-appbanner .logo{ height:30px;}        .#<uispace>.u-appbanner .wrap .download{ background-color: #fff;display: inline-block;width: 92px;height: 26px;color: #13bc6e;border:1px solid #13bc6e;text-align: center;line-height: 26px;font-size: 12px;border-radius:4px;}        ");
    var _ = a.Gf('<div class="u-appbanner j-appbanner">                <div class="wrap f-cb j-wrap">                    <img class="logo f-fl" src="//nos.netease.com/test-edu-image/5B2BEC94E18E7452D46D0A34DE90946D.png"/>                    <a class="f-fr download j-dl">使用APP查看</a>                </div>            </div>');
    r.WC = NEJ.C();
    c = r.WC.hK(r.Hq, !0);
    c.bo = function () {
        this.lo = _;
        this.no = d
    };
    c.co = function () {
        this.mK();
        this.XC = this.Ih;
        this.YC = a.mc(this.XC, "j-close")[0];
        this.ZC = a.mc(this.XC, "j-look") && a.mc(this.XC, "j-look")[0];
        this.$C = a.mc(this.XC, "j-dl")[0];
        this._C = a.mc(this.XC, "j-wrap")[0];
        this.aD = a.mc(this.XC, "j-tip") && a.mc(this.XC, "j-tip")[0];
        if (r.Ok() || "courseIntro" != t.pageName4appbanner && "courseAlbum" != t.pageName4appbanner) r.mp(this.XC);
        o.Cc(this.$C, "click", function () {
            var e = {};
            e.courseId = t.course ? t.course.id : "";
            r.Zk("fromCallApp", e)
        })
    };
    c.Id = function (e) {
        this.kK(e);
        !r.Qk()
    }
}, "2485091b4f4b621adc889ffa898e41e6");
I$("b40e7bafdeec9383712522157c1ad141", function () {
    var e = NEJ.O, t = window, i = NEJ.P("nej.j"), n = NEJ.P("nej.u"), a = NEJ.P("edu.d"), o = n.HJ(), s,
        r = "ck-courseListCache";
    a.bD = NEJ.C();
    s = a.bD.hK(a.vq);
    s.cD = function (e, t) {
        this.zq({url: "CloudSearchBean.searchCoursesWithHighlight", param: [e, t], onload: this.dD.RI(this)})
    };
    s.dD = function (e) {
        this.kd("onCourseSearch", e)
    };
    s.eD = function (e, t) {
        this.zq({url: "CloudSearchBean.searchPlansWithHighlight", param: [e, t], onload: this.fD.RI(this)})
    };
    s.fD = function (e) {
        this.kd("onPlanSearch", e)
    };
    s.gD = function (e, t) {
        this.zq({url: "CloudSearchBean.searchMembersWithHighlight", param: [e, t], onload: this.hD.RI(this)})
    };
    s.hD = function (e) {
        this.kd("onMemberSearch", e)
    };
    s.iD = function (e, t) {
        this.zq({url: "CloudSearchBean.searchMicroSpecCourseAlbum", param: [e, t], onload: this.jD.RI(this)})
    };
    s.jD = function (e) {
        this.kd("onSmartSpecSearch", e)
    };
    s.kD = function (e, t, i, n) {
        this.zq({url: "CourseBean.getInnerCourseList", param: [e, t, i, n], onload: this.lD.RI(this)})
    };
    s.lD = function (e) {
        this.kd("ongetInnnerCourseList", e)
    };
    s.mD = function (e, t, i) {
        this.zq({url: "CloudSearchBean.searchClickFeedback", param: [e, t, i], onload: this.nD.RI(this)})
    };
    s.nD = function (e) {
        this.kd("onsearchClickFeedback", e)
    };
    s.oD = function (e) {
        this.zq({url: "StudyRecommendBean.getPersonalRecommends", param: [e], onload: this.pD.RI(this)})
    };
    s.pD = function (e) {
        this.kd("ongetPersonalRecommends", e)
    };
    s.qD = function (e) {
        this.zq({url: "StudyRecommendBean.getHotRecommends", param: [e], onload: this.rD.RI(this)})
    };
    s.rD = function (e) {
        this.kd("ongetHotRecommends", e)
    };
    s.sD = function (e, t, i, n) {
        this.zq({url: "StudyRecommendBean.doRecommendFeedBack", param: [e, t, i, n], onload: this.tD.RI(this)})
    };
    s.tD = function (e) {
        this.kd("ondoRecommendFeedBack", e)
    };
    s.uD = function (e) {
        var n = "productId=" + e;
        i.mf(t.studyHref + "/j/my/seriesCourse/markStoreStatus.json", {
            method: "GET",
            headers: {"Content-Type": "application/json", "edu-script-token": i.WK("NTESSTUDYSI")},
            query: n,
            onload: this.vD.RI(this)
        })
    };
    s.vD = function (e) {
        this.kd("onGetSmartSpecCollectionStatus", e)
    };
    s.wD = function (e) {
        var n = "productId=" + e;
        i.mf(t.studyHref + "/j/my/seriesCourse/switchMarkStore.json", {
            method: "GET",
            headers: {"Content-Type": "application/json", "edu-script-token": i.WK("NTESSTUDYSI")},
            query: n,
            onload: this.xD.RI(this)
        })
    };
    s.xD = function (e) {
        this.kd("onMarkSmartSpecCollectionStatus", e)
    };
    s.yD = function (e) {
        this.zq({key: r + o, url: "CourseBean.getMixCourseCardDto", param: [e], onload: this.zD.RI(this)})
    };
    s.zD = function (e) {
        this.kd("ongetCourseList", e)
    };
    s.AD = function (e, t) {
        this.zq({key: r + o, url: "CourseBean.getLiveCourseVo", param: [e, t], onload: this.BD.RI(this)})
    };
    s.BD = function (e) {
        this.kd("ongetLiveCourseList", e)
    };
    s.CD = function (e) {
        this.zq({key: r + o, url: "CourseBean.getSerialCourseDetial", param: [e], onload: this.DD.RI(this)})
    };
    s.DD = function (e) {
        this.kd("onGetSerialCourseDetial", e)
    };
    s.ED = function (e, t, i) {
        this.zq({key: r + o, url: "CourseBean.getImCourseDto", param: [e, t, i, 1, 100], onload: this.FD.RI(this)})
    };
    s.FD = function (e) {
        this.kd("onGetImCourseDto", e)
    };
    s.GD = function (e, t) {
        this.zq({
            key: r + o,
            url: "CourseBean.isServiceNo",
            notShowLoading: !0,
            param: [e],
            onload: this.HD.RI(this, t)
        })
    };
    s.HD = function (e, t) {
        this.kd("onIsServiceNo", t, e)
    }
}, "0a75c7094be3e9ca124b1c7fdd9c05b5", "f16c7f92e4debb611ed15b0b2e34a3f6");
I$("2a13e01e88347987e88de7a5cb895ec9", function () {
    var e = NEJ.O, t = window, i = NEJ.F, n = NEJ.P("nej.p"), a = NEJ.P("nej.e"), o = NEJ.P("nej.v"),
        s = NEJ.P("edu.d"), r = NEJ.P("nej.j"), c = NEJ.P("nej.u"), d = NEJ.P("edu.u"), _ = NEJ.P("nej.ut"),
        l = NEJ.P("edu.cms"), u, h;
    var f = a.Ic('        .u-window-im{position:fixed;z-index: 99999 !important;}        .u-window-im .zbar{top: 30px;right: 0px;position: absolute;cursor: move;width: 15px;    height: 15px !important;background: url("//nos.netease.com/test-edu-image/87E0380D962D5B2BD332691243A6FF02-1453801344006") !important;background-position: -15px 0px;margin: 7px;}        .u-window-im .zbar:hover{background-position:0px 0px !important;}        .u-window-im{background: transparent !important; box-shadow: none !important;        -webkit-box-shadow: none !important;border:none !important; }        .u-window-im .zttl{display:none !important;}        .u-window-im .zcls{display:none !important;}        .u-window-im .little-box{display:none;}        .u-window-im .little-box span{display:none;}        .u-window-im .little-box-drag{display:block;position: absolute;height: 480px;width: 617px;}        .u-window-im .im-box .im-cont{background:#fff;}        .u-window-im-before{display:none;}        .u-window-im-before .zbar{display:none !important;}        .u-window-im-before .zcls{display:none !important;}        .u-window-im-before{ width:62px !important;height:62px !important;position: fixed;top: auto !important;left: auto !important;right: 30px !important;bottom: 45px !important;background-color:#ffd200;box-shadow: none  !important;-webkit-box-shadow:none !important; -moz-box-shadow:none !important;border: none  !important;background: transparent !important;}        .u-window-im-before .little-box{display:block; width:62px !important;height:62px !important;position:absolute;z-index:999;cursor:pointer;}        .u-window-im-before .little-box span{display:none;}        .u-window-im-before .little-box:hover{background: #ffd200;border-radius: 5px;}        .u-window-im-before .little-box:hover span{display:inline-block; width:60px;height:60px ;line-height:60px;font-size: 18px;color: white;text-align: center;}        .u-window-im-before .im-box .im-op{ display:none !important;}        .u-window-im-before .im-box .im-relate-course{ display:none !important;}        .u-window-im-before .im-box .im-cont{ width:62px !important;height:62px !important;border:none !important;box-shadow:none !important;-moz-box-shadow:none !important;}        .u-window-im-before .im-box .im-cont .im{ width:62px !important;height:62px !important;}        .#<uispace>.im-box{ width:647px;height:476px;}        .#<uispace>.im-box .im-op { width:30px;height:60px;background: #636363;}        .#<uispace>.im-box .im-op .im-close{ cursor:pointer;width:15px;height:15px;background:url("//nos.netease.com/test-edu-image/87E0380D962D5B2BD332691243A6FF02-1453801344006");background-position:-15px -15px;margin: 7px;}        .#<uispace>.im-box .im-op .im-close:hover{ background-position:0px -15px;}        .#<uispace>.im-box .im-cont{ width:613px;height:476px;border: 2px solid #21a557;    box-shadow: 0px 2px 6px #333;-webkit-box-shadow: 0px 2px 6px #333;-moz-box-shadow: 0px 2px 6px #333;}        .#<uispace>.im-box .im-cont .im{ width:448px;height:476px;}        .#<uispace>.im-box .im-cont .im-100{ width:613px;}        .#<uispace>.im-box .im-cont .im-relate-course{ width:164px;height:476px;position:relative;background-color:white;border-left: 1px solid #dddddd;}        .#<uispace>.im-box .im-cont .im-relate-course-10{width: 0px;position: absolute;left: 644px;height:420px;top:57px;border-left: none;}        .#<uispace>.im-box .im-cont .im-relate-course-10 .course-close{top: 160px !important;margin-left: -10px;}        .#<uispace>.im-box .im-cont .im-relate-course .title{ color:#666666;width:155px;height:50px;font-size:13px;line-height:50px;padding-left:10px;}        .#<uispace>.im-box .im-cont .im-relate-course .course{ height: 426px;width:145px;padding:0px 10px;overflow-y:scroll;overflow-x:hidden;}        .#<uispace>.im-box .im-cont .im-relate-course .course .moreCourse{ text-align:center;height:30px;font-size:14px;line-height:30px;color:#21a557;cursor:pointer;}        .#<uispace>.im-box .im-cont .im-relate-course .course .no-content{ width:145px;height:426px;line-height:426px;text-align:center;}        .#<uispace>.im-box .im-cont .im-relate-course .course .card{ width:145px;height:140px;border-bottom:1px solid #f0f0f0;margin-bottom:10px;padding-bottom:10px;}        .#<uispace>.im-box .im-cont .im-relate-course .course img{ width:145px;height:85px;}        .#<uispace>.im-box .im-cont .im-relate-course .course .name{ width:145px;font-size:13px;margin-top:10px;height:18px;line-height:18px;}        .#<uispace>.im-box .im-cont .im-relate-course .course .status{ width:145px;font-size:14px;margin-top:10px;height:16px;line-height:16px;color:#10ae58;margin-bottom:10px;}        .#<uispace>.im-box .im-cont .im-relate-course .course .status-no{ width:145px;font-size:14px;margin-top:10px;height:16px;line-height:16px;color:#ff8000;margin-bottom:10px;}        .#<uispace>.im-box .im-cont .im-relate-course .course .name span{ width:40px;font-size:12px;background-color:#2187e0;color:white;text-align:center;height:18px;line-height:18px;padding: 2px 3px;margin-right: 10px;}        .#<uispace>.im-box .im-cont .im-relate-course .course-close{cursor:pointer;position:absolute;top:200px;left:0px;width:10px;height:60px;background-color:#e8f6ee;}        .#<uispace>.im-box .im-cont .im-relate-course .to-open{left:-30px!important;}        .#<uispace>.im-box .im-cont .im-relate-course .course-close .arrow{width:15px;height:15px;margin-top:23px;position: absolute;margin-left: -4px;background:url("//nos.netease.com/test-edu-image/87E0380D962D5B2BD332691243A6FF02-1453801344006");background-position:0 -30px;}        .#<uispace>.im-box .im-cont .im-relate-course .course-close .arrow-open{margin-left: -2px !important;background-position:0 -45px !important;}        .#<uispace>.im-box .im-cont .im-relate-course .course-close .arrow-open:hover{background-position:-15px -45px !important;}        .#<uispace>.im-box .im-cont .im-relate-course .course-close .arrow:hover{background-position:-15px -30px;}');
    var p = a.Gf('<div class="im-box">            <div class="im-op f-fr j-im-op">                <div class="im-close f-fl j-close"></div>                <div class="im-move f-fl j-move"></div>            </div>            <div class="im-cont f-fl">                <div class="j-little-box little-box"><span class="f-f0">私信</span></div>                <iframe class="im f-fl j-im-iframe" src="" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes"></iframe>                <div class="im-relate-course f-fl j-im-relate-course">                    <div class="title f-f0 j-title"></div>                    <div class="course j-courseList"><div class="no-content">暂时没有相关课程</div></div>                    <div class="course-close j-course-close"><span class="arrow arrow-open j-arrow"></span></div>                </div>            </div>        </div>');
    d.gy = NEJ.C();
    u = d.gy.hK(d.Xo, !0);
    u.bo = function () {
        this.lo = p;
        this.no = f
    };
    d.gy.fy = function (e) {
        if (t.webUser) if (t.im_site_prefix) if (!(d.Jn() && parseFloat(n.$I.release) < 6)) {
            e.modal = e.modal || !1;
            e.align = "center middle";
            e.showBig = e.showBig || !1;
            if (h) {
                h.ID = 0;
                h.options = e;
                h.JD();
                return h
            }
            h = d.gy.Fd(e);
            h.ro();
            return h
        }
    };
    u.co = function () {
        this.mK();
        this.KD = this.Ih;
        this.LD = a.mc(this.KD, "j-im-op")[0];
        this.MD = a.mc(this.KD, "j-little-box")[0];
        this.ND = a.mc(this.KD, "j-im-relate-course")[0];
        this.YC = a.mc(this.KD, "j-close")[0];
        this.hs = a.mc(this.KD, "j-move")[0];
        this.OD = a.mc(this.KD, "j-title")[0];
        this.PD = a.mc(this.KD, "j-im-iframe")[0];
        this.QD = a.mc(this.KD, "j-course-close")[0];
        this.RD = a.mc(this.KD, "j-courseList")[0];
        this.SD = a.mc(this.KD, "j-arrow")[0];
        this.ID = 0;
        this.lza = 0;
        this.UD = !1;
        this.VD = {"j-indextopnav": 0, "j-topnav": 0};
        o.Cc(this.YC, "click", function () {
            a.Wc(this.WD, "u-window-im");
            a.Kc(this.WD, "u-window-im-before");
            this.options.showBig = !1
        }.RI(this));
        o.Cc(this.MD, "click", function () {
            this.options.showBig = !0;
            a.Wc(this.WD, "u-window-im-before");
            a.Kc(this.WD, "u-window-im");
            var e = (window.innerHeight || document.documentElement.clientHeight) - 490;
            var t = (window.innerWidth || document.documentElement.clientWidth) - 750;
            if (e < 0) e = 0;
            a.Rc(this.WD, {top: e + "px", left: t + "px"})
        }.RI(this));
        o.Cc(this.QD, "click", function () {
            if (a.ic(this.OD, "f-dn")) this.XD(); else this.YD()
        }.RI(this));
        this.Zd = new s.bD;
        this.Zd.Cc("onGetImCourseDto", this.ZD.RI(this));
        this.Zd.Cc("onIsServiceNo", this.$D.RI(this));
        o.Cc(window, "message", function (e) {
            if ("https://qiyukf.com" !== e.origin) if (e.data) try {
                var t = JSON.parse(e.data);
                switch (t.type) {
                    case"ChatUserMessage":
                        if (t.data) {
                            var i = parseInt(t.data.substring(2));
                            if (i) {
                                this.options.toDto = this.options.toDto || {};
                                this.options.toDto.memberId = i;
                                this.options.toDto.accid = t.data;
                                this.Zd.GD(i, !1)
                            }
                        }
                        break;
                    case"ChatTipMessage":
                        if (t.data) {
                            this._D("j-indextopnav", t.data);
                            this._D("j-topnav", t.data)
                        }
                }
            } catch (n) {
                return
            }
        }.RI(this));
        this._D("j-indextopnav", 0);
        this._D("j-topnav", 0)
    };
    u._D = function (e, t) {
        var i, n;
        if (a.RJ(e)) if (a.mc(a.RJ(e), "j-nav-msgnum")) {
            i = a.mc(a.RJ(e), "j-nav-msgnum")[0];
            if (!i) return;
            if (i && t > 0) {
                n = i.innerText;
                if (n.indexOf("+") != -1) return;
                n -= 0;
                n = n + 1 * t - this.VD[e];
                this.VD[e] = t;
                n > 0 ? a.Wc(i, "hidddenClass") : a.Kc(i, "hidddenClass");
                if (n > 99) n = "99+";
                i.innerText = n
            }
        }
    };
    u.aE = function (e, t) {
        if (a.RJ(e)) if (a.mc(a.RJ(e), "j-im-tips")) {
            var i = a.mc(a.RJ(e), "j-im-tips")[0];
            if (!i) return;
            if (i && t > 0) {
                var n = a.mc(i, "j-content")[0];
                if (n) {
                    n.innerHTML = "你收到了 " + t + " 条私信";
                    o.Cc(n, "click", function () {
                        if (a.RJ("j-indextopnav")) {
                            var e = a.mc(a.RJ("j-indextopnav"), "j-im-tips")[0];
                            a.Kc(e, "f-dn")
                        }
                        if (a.RJ("j-topnav")) {
                            var t = a.mc(a.RJ("j-topnav"), "j-im-tips")[0];
                            a.Kc(t, "f-dn")
                        }
                        this.MD.click()
                    }.RI(this))
                }
                a.Wc(i, "f-dn")
            }
            var s = a.mc(i, "j-close")[0];
            if (s) o.Cc(s, "click", function () {
                if (a.RJ("j-indextopnav")) a.Kc(a.mc(a.RJ("j-indextopnav"), "j-im-tips")[0], "f-dn");
                if (a.RJ("j-topnav")) a.Kc(a.mc(a.RJ("j-topnav"), "j-im-tips")[0], "f-dn")
            }.RI(this));
            var r = a.mc(a.RJ(e), "j-openImBox")[0];
            if (r) o.Cc(r, "click", function () {
                this.MD.click()
            }.RI(this))
        }
    };
    u.Id = function (t) {
        t = t || e;
        t.mask = void 0 == t.modal ? !0 : !!t.modal;
        t.align = "center middle";
        t.showBig = t.showBig || !1;
        t.clazz = "u-window-im-before";
        t.maskClickNotHidden = void 0 == t.maskClickNotHidden ? !0 : t.maskClickNotHidden;
        this.options = t;
        this.kK(t);
        try {
            this.WD = this.KD.parentNode.parentNode || this.KD.parentElement.parentElement
        } finally {
            if (this.WD) {
                o.Cc(a.mc(this.WD, "zbar")[0], "mouseup", function () {
                    a.Wc(this.MD, "little-box-drag")
                }.RI(this));
                o.Cc(a.mc(this.WD, "zbar")[0], "mousedown", function () {
                    a.Kc(this.MD, "little-box-drag")
                }.RI(this));
                o.Cc(this.MD, "click", function () {
                    a.Wc(this.MD, "little-box-drag")
                }.RI(this));
                o.Cc(this.MD, "mousedown", function () {
                    a.Wc(this.MD, "little-box-drag")
                }.RI(this));
                this.JD()
            }
        }
    };
    u.YD = function () {
        a.Kc(this.OD, "f-dn");
        a.Kc(this.RD, "f-dn");
        a.Kc(this.ND, "im-relate-course-10");
        a.Kc(this.PD, "im-100");
        a.Wc(this.QD, "f-dn");
        a.Kc(this.QD, "to-open");
        a.Wc(this.SD, "arrow-open");
        this.bE = a.mc(this.KD, "j-moreCourse")[0];
        a.Kc(this.bE, "f-dn")
    };
    u.XD = function () {
        a.Wc(this.OD, "f-dn");
        a.Wc(this.RD, "f-dn");
        a.Wc(this.PD, "im-100");
        a.Wc(this.ND, "im-relate-course-10");
        a.Kc(this.SD, "arrow-open");
        a.Wc(this.QD, "f-dn");
        a.Wc(this.QD, "to-open");
        this.bE = a.mc(this.KD, "j-moreCourse")[0];
        a.Wc(this.bE, "f-dn")
    };
    u.cE = function () {
        a.Kc(this.OD, "f-dn");
        a.Kc(this.RD, "f-dn");
        a.Kc(this.ND, "im-relate-course-10");
        a.Kc(this.PD, "im-100");
        a.Kc(this.QD, "f-dn");
        this.bE = a.mc(this.KD, "j-moreCourse")[0];
        a.Kc(this.bE, "f-dn")
    };
    u.JD = function () {
        if (this.options.p2p) this.cE();
        if (this.options.fromDto) if (0 == this.lza) this.Zd.GD(this.options.fromDto.memberId, !0); else if (1 == this.lza) {
            this.Zd.ED(this.options.fromDto.memberId, this.options.toDto.memberId, !0);
            this.OD.innerHTML = "TA的相关学习记录:";
            this.UD = !0
        } else if (2 == this.lza) {
            this.Zd.ED(this.options.toDto.memberId, this.options.fromDto.memberId, !0);
            this.OD.innerHTML = "TA服务的课程和微专业:"
        }
        if (t.im_site_prefix) if (this.options.toDto) a.kc(this.PD, "src", t.im_site_prefix + "/index.htm?accid=" + this.options.fromDto.accid + "&token=" + this.options.fromDto.token + "#!/chat/" + this.options.toDto.accid); else {
            this.cE();
            a.kc(this.PD, "src", t.im_site_prefix + "/index.htm?accid=" + this.options.fromDto.accid + "&token=" + this.options.fromDto.token + "#!/chat")
        }
        if (this.options.showBig) {
            a.Wc(this.WD, "u-window-im-before");
            a.Kc(this.WD, "u-window-im");
            var e = (window.innerHeight || document.documentElement.clientHeight) - 490;
            if (e < 0) e = 0;
            var i = (window.innerWidth || document.documentElement.clientWidth) - 750;
            a.Rc(this.WD, {top: e + "px", left: i + "px"})
        }
    };
    u.ZD = function (e) {
        if (e && e.list && this.options.toDto) {
            this.dE = e.list;
            this.eE(this.dE);
            this.XD()
        } else {
            this.cE();
            this.RD.innerHTML = "<div class='no-content'>暂时没有相关课程</div>"
        }
    };
    u.eE = function (e) {
        var t = "", i = "", n = "", s = "";
        c.oJ(e, function (e, a, o) {
            if (a < this.ID + 10) {
                i = "";
                s = "";
                if (10 == e.courseType) {
                    i = "<span>微专业</span>";
                    s = "//mooc.study.163.com/smartSpec/detail/" + e.courseId + ".htm"
                } else if (3 == e.courseType) s = "//mooc.study.163.com/course/" + e.courseId + ".htm"; else s = "//study.163.com/course/introduction/" + e.courseId + ".htm";
                if (this.UD) {
                    n = "";
                    if (e.hasJoined || "true" == e.hasJoined) n = '<div class="status">已参加</div>'; else n = '<div class="status-no">未参加</div>'
                }
                t += '<div class="card"><div><a target="_blank" href="' + s + '"><img src="' + e.photoUrl + '"/></a></div><div class="name f-thide">' + i + '<a target="_blank" href="' + s + '">' + e.courseName + "</a></div>" + n + "</a></div>"
            }
        }.RI(this));
        if (e.length > this.ID + 10) t += "<div class='j-moreCourse moreCourse'>查看更多</div>";
        this.RD.innerHTML = t;
        this.bE = a.mc(this.KD, "j-moreCourse")[0];
        o.Cc(this.bE, "click", function () {
            this.ID += 10;
            this.eE(this.dE)
        }.RI(this))
    };
    u.$D = function (e, t) {
        if (t) if (e) {
            this.lza = 1;
            if (this.options.toDto && this.options.toDto.memberId) {
                this.Zd.ED(this.options.fromDto.memberId, this.options.toDto.memberId, !0);
                this.OD.innerHTML = "TA的相关学习记录:";
                this.UD = !0
            }
        } else {
            this.lza = 2;
            if (this.options.toDto && this.options.toDto.memberId) {
                this.Zd.ED(this.options.toDto.memberId, this.options.fromDto.memberId, !0);
                this.OD.innerHTML = "TA服务的课程和微专业:"
            }
        } else if (e) {
            if (2 == this.lza) {
                this.Zd.ED(this.options.toDto.memberId, this.options.fromDto.memberId, !0);
                this.OD.innerHTML = "TA服务的课程和微专业:"
            } else if (1 == this.lza) {
                this.Zd.ED(this.options.fromDto.memberId, this.options.toDto.memberId, !0);
                this.OD.innerHTML = "TA的相关学习记录:";
                this.UD = !0
            }
        } else if (2 == this.lza) this.cE(); else if (1 == this.lza) {
            this.Zd.ED(this.options.fromDto.memberId, this.options.toDto.memberId, !0);
            this.OD.innerHTML = "TA的相关学习记录:";
            this.UD = !0
        }
    };
    l.showIMBox = d.gy.fy
}, "d62f95b9c6f18a551a036c8ec75d2d82", "b40e7bafdeec9383712522157c1ad141", "c2319fe81ae54f0df799a059ee6679e7", "b7f78579274504e6e01cdbe96bab7e2c", "393c172195c9280b0b17edb6219129db");
I$("03135f30edbcdc4ebfe47f68ea568204", function () {
    var e = window, t = NEJ.O, i = NEJ.F, n = NEJ.P("nej.u"), a = NEJ.P("nej.ut"), o = NEJ.P("nej.e"),
        s = NEJ.P("nej.v"), r = NEJ.P("nej.j"), c = NEJ.P("edu.d"), d = NEJ.P("edu.m"), r = NEJ.P("nej.j"),
        _ = NEJ.P("edu.u"), r = NEJ.P("nej.j"), l, u;
    _.fE = NEJ.C();
    l = _.fE.hK(a.Xd, !0);
    u = _.fE.rK;
    l.Id = function (e) {
        this.gE = e.diagNode || o.RJ("j-nav-catedialog");
        this.hE = e.btnNode || o.RJ("j-nav-catebtn");
        if (this.gE) {
            this.iE = o.mc(this.gE, "j-item");
            this.jE = o.mc(this.gE, "j-rwrap");
            this.kE = o.mc(this.gE, "j-close")[0];
            this.Ux = null;
            this.Vx = null;
            this.lE = 0;
            this.rA = new c.Jq;
            this.mE()
        }
    };
    l.mE = function () {
        s.Cc(this.hE, "mouseover", this.nE.RI(this));
        s.Cc(this.hE, "mouseout", this.oE.RI(this));
        s.Cc(this.gE, "mouseover", this.pE.RI(this));
        s.Cc(this.gE, "mouseout", this.qE.RI(this));
        s.Cc(this.kE, "click", this.rE.RI(this));
        n.oJ(this.iE, function (e, t) {
            s.Cc(e, "mouseover", this.sE.RI(this, t))
        }.RI(this))
    };
    l.nE = function () {
        if (this.Ux) clearTimeout(this.Ux);
        if (this.Vx) clearTimeout(this.Vx);
        this.Ux = setTimeout(function () {
            this.tE()
        }.RI(this), 300)
    };
    l.oE = function () {
        if (this.Ux) clearTimeout(this.Ux);
        this.uE()
    };
    l.uE = function () {
        this.Vx = setTimeout(function () {
            this.vE()
        }.RI(this), 200)
    };
    l.pE = function () {
        if (this.Vx) clearTimeout(this.Vx)
    };
    l.qE = function () {
        this.uE()
    };
    l.tE = function () {
        o.Kc(this.gE, "cur x-show");
        o.Kc(this.hE, "cur");
        this.sE(0)
    };
    l.rE = function () {
        this.vE();
        if (this.Ux) clearTimeout(this.Ux);
        if (this.Vx) clearTimeout(this.Vx)
    };
    l.vE = function () {
        o.Wc(this.gE, "cur x-show");
        o.Wc(this.hE, "cur")
    };
    l.sE = function (e) {
        if (this.lE >= 0) {
            o.Wc(this.iE[this.lE], "cur");
            o.Wc(this.jE[this.lE], "cur")
        }
        this.lE = e;
        o.Kc(this.iE[this.lE], "cur");
        o.Kc(this.jE[this.lE], "cur")
    };
    l.Md = function () {
        this.lK()
    }
}, "ef610943f997eae84e208bd1668f8379", "59ef31d2fec280072e3d6d1b5eec02b4", "151562add01838325f04dae3569223d6");
I$("a8241cc7afb008ec34532b31a4b79f1e", function () {
    var e = window, t = NEJ.O, i = NEJ.F, n = NEJ.P("nej.u"), a = NEJ.P("nej.ut"), o = NEJ.P("nej.e"),
        s = NEJ.P("nej.v"), r = NEJ.P("nej.j"), c = NEJ.P("edu.d"), d = NEJ.P("edu.m"), r = NEJ.P("nej.j"),
        _ = NEJ.P("edu.u"), r = NEJ.P("nej.j"), l;
    var u = o.zd('<div>            <div class="arr"></div>            <p class="record-tit">最近学习记录</p>            <ul>            {list dt as record}                <li>                <a class="f-cb" href="${record.learnUrl}" target="_blank" data-action="我的学习快捷入口-课程点击" data-label="${record.courseName}">                <img class="f-fl" src="${record.imageUrl}"/>                <div class="f-fl"><p class="course-name f-thide">${record.courseName}</p><p class="lesson-name f-thide">${record.lessonName}</p></div>                </a></li>            {/list}            </ul>            <a href="//study.163.com/my" class="more" data-action="我的学习快捷入口-查看更多">查看更多&gt</a>        </div>');
    var h = 0;
    var f = 0;
    var p = 3;
    _.wE = NEJ.C();
    l = _.wE.hK(_.Hq, !0);
    l.co = function () {
        this.mK()
    };
    l.Id = function (e) {
        this.gE = e.diagNode;
        this.hE = e.btnNode;
        if (this.hE && this.gE) {
            this.xE(e.data || {});
            this.mE()
        }
    };
    l.xE = function (e) {
        e = this.yE(e);
        this.gE.innerHTML = "";
        var t = o.Lc(o.Ad(u, {dt: e}));
        this.gE.appendChild(t)
    };
    l.yE = function (e) {
        var t = [];
        for (var i = 0; i < e.length; i++) t[i] = {
            imageUrl: _.bm(e[i].imageUrl, 33, 33),
            courseName: e[i].productName,
            lessonName: e[i].lessonName,
            learnUrl: this.zE(e[i])
        };
        return t
    };
    l.zE = function (t) {
        var i;
        if (t.productType == h) if (t.refResId && t.lessonType) i = e.corseLearnPrefix + "?courseId=" + t.productId + "#" + _.oz({
            lessonId: t.refResId,
            lessonType: t.lessonType,
            courseId: t.productId
        }); else i = e.courseIntroPrefix.replace("{id}", t.productId); else {
            var n = t.yoocCourseDto || {};
            if (!n) return;
            var a = e.yocCourseinfoPrefix, o = e.yocCourseLearnPrefix;
            if (n.mode != f) {
                a = (t.productType == p ? e.yocPrefix : e.mocPrefix) + e.spocCourseInfoPrefix;
                o = (t.productType == p ? e.yocPrefix : e.mocPrefix) + e.spocCourseLearnPrefix
            }
            if (n.lastLessonId && n.lastUnitId) i = o + encodeURIComponent(t.productId) + "?tid=" + encodeURIComponent(n.termId) + "#/learn/content?type=detail&id=" + n.lastLessonId + "&cid=" + n.lastUnitId; else i = a + encodeURIComponent(t.productId)
        }
        return i
    };
    l.mE = function () {
        s.Cc(this.hE, "mouseover", this.nE.RI(this));
        s.Cc(this.hE, "mouseout", this.oE.RI(this));
        s.Cc(this.gE, "mouseover", this.pE.RI(this));
        s.Cc(this.gE, "mouseout", this.qE.RI(this))
    };
    l.nE = function () {
        if (this.Ux) clearTimeout(this.Ux);
        if (this.Vx) clearTimeout(this.Vx);
        this.Ux = setTimeout(function () {
            this.tE()
        }.RI(this), 100)
    };
    l.oE = function () {
        if (this.Ux) clearTimeout(this.Ux);
        this.uE()
    };
    l.uE = function () {
        this.Vx = setTimeout(function () {
            this.vE()
        }.RI(this), 100)
    };
    l.pE = function () {
        if (this.Vx) clearTimeout(this.Vx)
    };
    l.qE = function () {
        this.uE()
    };
    l.tE = function () {
        o.Kc(this.gE, "cur x-show");
        o.Kc(this.hE, "cur")
    };
    l.vE = function () {
        o.Wc(this.gE, "cur x-show");
        o.Wc(this.hE, "cur")
    };
    l.Md = function () {
        this.lK()
    }
}, "2485091b4f4b621adc889ffa898e41e6", "393c172195c9280b0b17edb6219129db", "90d6d6be23475ccac85c853489f64c57");
I$("28c438158f4606b89c42ddf8ef42a388", function () {
    var e = NEJ.O, t = window, i = NEJ.F, n = NEJ.P("nej.e"), a = NEJ.P("nej.v"), o = NEJ.P("edu.u"), s;
    var r = n.Ic("        .#<uispace>{display:block;width:140px;height:260px;}        .#<uispace>:hover .close{display:block;}        .#<uispace> img{color:#10ae58;width:140px;height:260px;}        .#<uispace> .close{right:0px;top:0px;cursor:pointer;width:20px;height:20px;background: transparent;}        ");
    var c = n.Gf('<a class="f-cb f-pr" target="_blank">\t        <img src="" class="j-img" />\t        <div class="close j-close f-pa"></div>\t\t</a>');
    o.AE = NEJ.C();
    s = o.AE.hK(o.Hq, !0);
    s.bo = function () {
        this.lo = c;
        this.no = r
    };
    s.co = function () {
        this.mK();
        this.BE = n.mc(this.Ih, "j-img")[0];
        this.fz = n.mc(this.Ih, "j-close")[0];
        a.Cc(this.fz, "click", this.gz.RI(this));
        a.Cc(this.Ih, "click", this.CE.RI(this))
    };
    s.CE = function () {
        o.bj("globalAdvertisement", "click", "侧边栏全局广告点击，链接：" + this.Ih.href)
    };
    s.gz = function (e) {
        o.bj("globalAdvertisement", "click", "侧边栏全局广告点击：关闭操作");
        a.ld(e);
        this.hz();
    };
    s.Id = function (e) {
        this.kK(e);
        this.BE.src = o.Qr(e.src || "");
        this.Ih.href = e.linkUrl || "";
        this.hz = e.closeCallback || i
    }
}, "2485091b4f4b621adc889ffa898e41e6");
I$("dce5fe8373a590c1b26f0099bf103091", function () {
    var e = window, t = NEJ.O, i = NEJ.F, n = NEJ.P("nej.u"), a = NEJ.P("nej.ut"), o = NEJ.P("nej.e"),
        s = NEJ.P("nej.v"), r = NEJ.P("nej.j"), c = NEJ.P("edu.d"), d = NEJ.P("edu.m"), r = NEJ.P("nej.j"),
        _ = NEJ.P("edu.u"), r = NEJ.P("nej.j"), l, u;
    _.DE = NEJ.C();
    l = _.DE.hK(a.Xd, !0);
    u = _.DE.rK;
    l.gK = function (e) {
        this.rA = new c.Jq;
        this.rA.Cc("ongetLearnRecord", this.EE.RI(this));
        this.FE = new c.Fs;
        this.FE.Cc("onCreateImAccounts", this.Vt.RI(this))
    };
    l.Id = function (t) {
        if (_.zn()) this.rA.Dr(5);
        if (!this.GE) {
            this.HE();
            this.IE();
            this.JE(t);
            this.KE();
            this.LE();
            this.ME();
            this.NE();
            this.OE();
            this.PE();
            this.QE();
            s.Cc(document, "click", this.RE.RI(this));
            this.GE = !0;
            s.Cc(o.RJ("j-yktfoot"), "click", this.KC.RI(this, "首页_底部", !0));
            s.Cc(o.RJ("j-topnav"), "click", this.KC.RI(this, "首页_头部导航", !0));
            if ("courseLearn" != e.currentPageName && "icourseLogin" != e.currentPageName && "courseLive" != e.currentPageName) this.SE();
            if (_.Rk() && _.Wk() && "undefined" != typeof wx && wx) {
                this.rA.kr(e.location.href.split("#")[0]);
                this.rA.Cc("onWxGetTicket", this.TE.RI(this))
            }
        }
    };
    l.rC = function (e) {
        if ("true" == e) {
            _.showToastTips({content: "帐号绑定成功！", type: 1});
            setTimeout(function () {
                window.open("//study.163.com/member/addMemberInfo.htm?type=6&returnUrl=" + n.Pi(_.jq({})) + "&nm=true", "_self")
            }, 1e3)
        } else if (_.Wk()) window.open("//study.163.com/member/weixinFirstBind.htm?success=false&returnUrl=" + n.Pi(_.jq({})), "_self")
    };
    l.QE = function () {
        var t = r.WK("STUDY_BDR");
        switch (t) {
            case"1":
                r.mf("/member/getBindMemberData.htm", {
                    method: "GET", onload: this.rC.RI(this), onerror: function (e) {
                        alert(e)
                    }
                });
                break;
            case"4":
                if (!_.zn()) window.open("//study.163.com/member/weixinFirstBind.htm?returnUrl=" + n.Pi(_.jq({})), "_self")
        }
        r.WK("STUDY_BDR", {path: "/", domain: "." + e.studyHost, expires: -1})
    };
    l.IE = function () {
        this.$Ma = o.RJ("j-mindbindtips");
        this.VE = o.RJ("j-mindbindtips-close");
        var t = r.WK("STUDY_MIND_TELBIND"), i = r.WK("STUDY_MIND_TELBIND_CLOSE");
        if (1 == t && 0 == i) o.Wc(this.$Ma, "f-dn");
        s.Cc(this.VE, "click", function () {
            r.WK("STUDY_MIND_TELBIND_CLOSE", {path: "/", domain: "." + e.studyHost, value: 1, expires: 365});
            _.mp(this.$Ma)
        }.RI(this))
    };
    l.HE = function () {
        var t = o.RJ("j-fixed-head");
        if (_.Qk()) if (t) o.Sc(t, "position", "absolute");
        if (t && !e.navNotFixed) {
            var i = t.offsetHeight;
            o.Sc(document.body, "padding-top", i + "px");
            setInterval(function () {
                var e = t.offsetHeight;
                if (e != i) {
                    i = e;
                    o.Sc(document.body, "padding-top", e + "px")
                }
            }, 400)
        }
    };
    l.JE = function (e) {
        if ("/snsSpread" != e.target && "/learn" != e.target && !_.Qk()) this.PC = d.EC.Fd({parent: document.body})
    };
    l.ME = function () {
        this.WE = _.fE.Fd({})
    };
    l.EE = function (e) {
        var t = o.RJ("j-nav-my-class");
        var i = o.RJ("j-myleran-record");
        if (t && e.result && e.result.length > 0) this.XE = _.wE.Fd({btnNode: t, diagNode: i, data: e.result})
    };
    l.RE = function (t) {
        var i;
        if (window.location.host == e.mailStudyHost) {
            i = s.gd(t, "t:a");
            if (i) if ("" != i.href && "_blank" == i.target) {
                s.nd(t);
                window.open(i.href, "_self")
            }
        }
    };
    l.PE = function () {
        var e = r.WK("pdd"), t;
        if (e) {
            t = e.split("|");
            _.bj("paidSuccess", "click", e, t[t.length - 1]);
            r.WK("pdd", {path: "/", value: "", expires: -1})
        }
    };
    l.LE = function () {
        if (_.Qk()) this.YE = _.WC.Fd({parent: o.RJ("j-appbanner")})
    };
    l.KE = function () {
        this.rA.Cc("onCheckSSOError", function (t) {
            if (t && t.error) e.open(t.logoutUrl, "_self")
        });
        setInterval(function () {
            this.rA.Oq()
        }.RI(this), 3e5)
    };
    l.SE = function () {
        if (this.ZE) this.ZE.Id(this.ZE.options); else if (!_.Qk() && e.webUser) this.FE.Wt([e.webUser.id])
    };
    l.Vt = function (e) {
        if (e && e[0]) this.ZE = _.gy.fy({toDto: "", fromDto: e[0], showBig: !1, p2p: !0})
    };
    l.OE = function () {
        var t = o.RJ("maintain_info_box");
        if (t) {
            _.mp(t.parentNode);
            if (e.announce && e.announce.content) {
                var i = r.WK("announce");
                if (i != e.announce.count) {
                    _.BM(t.parentNode);
                    this.$E = _.dz.Fd({
                        parent: t,
                        tips: e.announce.content,
                        clazz: "maintainui",
                        marginBottom: 0,
                        closeCallback: function () {
                            r.WK("announce", {
                                path: "/",
                                domain: "." + e.studyHost,
                                value: e.announce.count,
                                expires: 365
                            });
                            _.mp(t.parentNode);
                            this.$E = _.dz.Jd(this.$E)
                        }.RI(this)
                    })
                }
            }
        }
        var n = o.RJ("advertisement_box");
        if (n) {
            _.mp(n);
            if (e.sideBarPost && e.sideBarPost.picUrl) {
                var a = r.WK("sideBarPost");
                if (a != e.sideBarPost.count) {
                    _.BM(n);
                    this._E = _.AE.Fd({
                        parent: n,
                        src: e.sideBarPost.picUrl,
                        linkUrl: e.sideBarPost.link,
                        closeCallback: function () {
                            r.WK("sideBarPost", {
                                path: "/",
                                domain: "." + e.studyHost,
                                value: e.sideBarPost.count,
                                expires: 365
                            });
                            _.mp(n);
                            this._E = _.AE.Jd(this._E)
                        }.RI(this)
                    })
                }
            }
        }
    };
    l.NE = function () {
        e.eduEditor_options = {
            isStudy: !0,
            showLoadingFn: _.showLoading,
            hideLoadingFn: _.hideLoading,
            showCmds: ["cleardoc", "undo", "redo", "bold", "italic", "underline", "strikethrough", "insertorderedlist", "insertunorderedlist", "image", "link", "insertcode", "fontsize", "fontcolor"],
            coreOptions: {autoHeightEnabled: !0}
        }
    };
    l.KC = function (e, t, i) {
        var n = s.gd(i, "d:index");
        if (n) {
            s.md(i);
            if (t) _.Or(e, n, 1); else _.Nr(e, n, 1)
        }
    };
    l.TE = function (e) {
        if (e) {
            e = JSON.parse(e);
            wx.config({
                debug: !1,
                appId: "wx9920353d8725a305",
                timestamp: e.timestamp,
                nonceStr: e.nonceStr,
                signature: e.signature,
                jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareQZone", "chooseImage", "previewImage", "hideOptionMenu", "showOptionMenu", "hideMenuItems", "closeWindow", "scanQRCode"]
            })
        }
    };
    l.Md = function () {
        if (this.PC) this.PC = d.EC.Jd(this.PC);
        if (this.ZE) this.ZE = _.gy.Jd(this.ZE);
        if (this.$E) this.$E = _.dz.Jd(this.$E);
        if (this._E) this._E = _.AE.Jd(this._E);
        if (this.WE) this.WE = _.fE.Jd(this.WE);
        if (this.XE) this.XE = _.wE.Jd(this.XE);
        this.lK()
    }
}, "c744172221c7874d28939ab4e836d5e1", "91e2466cd403014de04f9ccb5fae9bb3", "8ae9513a791ecd9d9d3b27b748aa893f", "e79af651b6317ab78d125dc8390280df", "334fed1b68f51d78b90bb88048ca2189", "ee9a33e0c30fcf15c938b22e6909af49", "2a13e01e88347987e88de7a5cb895ec9", "03135f30edbcdc4ebfe47f68ea568204", "a8241cc7afb008ec34532b31a4b79f1e", "28c438158f4606b89c42ddf8ef42a388", "a3560f093b688f8712efb2a280ef1a66", "151562add01838325f04dae3569223d6");
I$("881642ee058ab38e3257e6d24eeb462f", function () {
    var e = NEJ.O, t = NEJ.P("nej.j"), i = NEJ.P("nej.u"), n = NEJ.P("edu.d"), a = NEJ.P("edu.u"), o = i.HJ(), s,
        r = "ck-imSettingCache";
    n.rx = NEJ.C();
    s = n.rx.hK(n.vq);
    s.tx = function (e, t, i) {
        this.zq({
            key: r + o,
            url: "ConsulationBean.getConsulationRoleRelationInfo",
            param: [e, t, i],
            onload: this.ux.RI(this)
        })
    };
    s.ux = function (e) {
        this.kd("onGetRoleInfo", e)
    };
    s.vx = function (e) {
        this.zq({
            key: r + o,
            url: "ConsulationBean.saveConsulationRoleAndContent",
            param: [e],
            onload: this.xx.RI(this)
        })
    };
    s.xx = function (e) {
        this.kd("onSetRoleInfo", e)
    };
    s.yx = function (e) {
        this.zq({key: r + o, url: "AdminBean.saveConsulationRoleRelation", param: [e], onload: this.zx.RI(this)})
    };
    s.zx = function (e) {
        this.kd("onSetRoleInfoOne", e)
    };
    s.Ax = function (e) {
        this.zq({
            key: r + o,
            url: "AdminBean.deleteConsulationRoleRelation",
            param: [e.targetId, e.targetType, e.scene, e.memberId],
            onload: this.Bx.RI(this)
        })
    };
    s.Bx = function (e) {
        this.kd("onDeleteRoleInfoOne", e)
    };
    s.Cx = function (e, t) {
        this.zq({
            key: r + o,
            url: "ConsulationBean.getConsulationSettingAndDetail",
            param: [e, t],
            onload: this.Dx.RI(this)
        })
    };
    s.Dx = function (e) {
        this.kd("onGetConsulation", e)
    };
    s.Ex = function (e) {
        this.zq({key: r + o, url: "ConsulationBean.saveConsulationSetting", param: [e], onload: this.Fx.RI(this)})
    };
    s.Fx = function (e) {
        this.kd("onSetConsulation", e)
    };
    s.Gx = function (e) {
        this.zq({key: s + o, url: "MemberBean.getMemberByNickname", param: [e], onload: this.Hx.RI(this)})
    };
    s.Hx = function (e) {
        this.kd("onReturnUserInfo", e)
    };
    s.Ix = function (e) {
        this.zq({key: s + o, url: "ConsulationBean.getTargetTypeByMemberId", param: [e], onload: this.Jx.RI(this)})
    };
    s.Jx = function (e) {
        this.kd("onReturnUserRole", e)
    }
}, "0a75c7094be3e9ca124b1c7fdd9c05b5");
I$("5163741a892d51566651a12187429446", function () {
    var e = window, t = NEJ.O, i = NEJ.F, n = NEJ.P("nej.e"), a = NEJ.P("nej.v"), o = NEJ.P("edu.m"),
        s = NEJ.P("nej.p"), r = NEJ.P("edu.d"), c = NEJ.P("nej.u"), d = NEJ.P("edu.u"), _;
    var l = n.Gf('<div class="u-service-ist">\t\t\t\t\t\t\t<div class=" service-list">\t\t\t\t\t \t\t\t<div class="service-title">\t\t\t\t\t\t \t\t\t<div class="title-1">\t\t\t\t\t\t \t\t\t\t<h3>\t\t\t\t\t\t \t\t\t\t\t<span class="f-icon zixun">&#xe90e;</span>\t\t\t\t\t\t \t\t\t\t\t<span>服务咨询</span>\t\t\t\t\t\t \t\t\t\t</h3>\t\t\t\t\t\t \t\t\t</div>\t\t\t\t\t \t\t\t</div>\t\t\t\t \t\t\t\t<div class="list-in f-p15">\t\t\t\t \t\t\t\t</div>\t\t\t\t \t\t\t\t<div class="bottom-text">\t\t\t\t \t\t\t\t</div>\t\t\t\t \t\t\t</div>\t\t\t\t\t \t</div>');
    var u = n.Ic("\t\t\t\t\t\t.#<uispace> {background: #fff;  box-shadow: 0px 1px 2px #bbb,0px 0px 0px #bbb;  position: absolute;z-index:99;width:215px;}\t\t\t\t\t\t.#<uispace> .service-list {width:100%;}\t\t\t\t\t\t.#<uispace> .title-1 {padding: 15px;}\t\t\t\t\t\t.#<uispace> .title-1 h3 {border:1px solid #abdfbf;height: 40px;  line-height: 40px;text-align: center;display:block;}                        .#<uispace> .f-icon {margin-right: 10px;}\t\t\t\t\t\t.#<uispace> h3 img {vertical-align: text-bottom;}\t\t\t\t\t\t.#<uispace> h3 span {font-size: 18px;  color: #333;}\t\t\t\t\t\t.#<uispace> h3:hover {cursor: pointer;backgorund:#fff;}\t\t\t\t\t\t.#<uispace> .list-in {padding: 0 10px 20px;}\t\t\t\t\t\t.#<uispace> .list-in a {display: block;color: #333;  font-size: 14px;  height: 30px;  line-height: 30px;margin-top:10px;padding:5px 8px;background:#f5f5f5;}\t\t\t\t\t\t.#<uispace> .list-in a:hover {color: #21a557;}\t\t\t\t\t\t.#<uispace> .list-in img {width: 30px;  height: 30px;  border-radius: 50%;  margin-right: 10px;float:left;}\t\t\t\t\t\t.#<uispace> .list-in span {float:left;width:155px;}");
    d.Kx = NEJ.C();
    _ = d.Kx.hK(d.Hq, !0);
    _.bo = function () {
        this.lo = l;
        this.no = u
    };
    _.co = function () {
        this.mK();
        this.Lx = n.mc(this.Ih, "list-in")[0];
        this.Mx = n.mc(this.Ih, "service-list")[0];
        this.Nx = n.mc(this.Ih, "service-title")[0];
        this.Ox = n.mc(this.Ih, "bottom-text")[0];
        this.Px = new r.rx;
        this.Px.Cc("onGetRoleInfo", this.ux.RI(this));
        this.Qx = new r.Fs;
        this.Qx.Cc("onGetYunxinAccounts", this.Rx.RI(this));
        this.Qx.Cc("onCreateImAccounts", this.Sx.RI(this));
        a.Cc(this.Lx, "click", this.Tx.RI(this), !1)
    };
    _.Id = function (e) {
        this.kK(e);
        this.Ux = null;
        this.Vx = null;
        this.Wx = e.gaData;
        this.Xx = e.p2p || !1;
        this.Px.tx(e.targetId, e.targetType, e.scene);
        if (e.titleText) if (!d.yp()) this.Nx.innerHTML = e.titleText; else {
            var t = n.Lc(e.titleText);
            n.Gc(this.Nx);
            this.Nx.appendChild(t)
        }
        if (e.bottomText) if (!d.yp()) this.Ox.innerHTML = e.bottomText; else {
            var i = n.Lc(e.bottomText);
            n.Gc(this.Ox);
            this.Ox.appendChild(i)
        }
        n.Rc(this.Ih, e.pos)
    };
    _.Tx = function (t) {
        if (!d.yp()) {
            if (this.Wx) d.bj(this.Wx.d_category, this.Wx.d_action.step2, d.Ep(this.Wx.d_label));
            if (d.mx()) {
                var i = a.gd(t, function (e) {
                    return "show-chatbox" == e.className
                });
                if (i && 1 != e.isPreview) {
                    this.Yx = n.kc(i, "memberId");
                    this.Zx = e.webUser.id;
                    if (this.Yx == this.Zx) {
                        d.showToastTips({content: "不能发起与自己的聊天", type: 2});
                        return
                    } else {
                        var o = [this.Yx, this.Zx];
                        this.Qx.Ut(o)
                    }
                } else d.showToastTips({content: "预览状态下不能发起聊天", type: 2})
            } else d.Eq.Dq({})
        } else d.Sp.Tp({type: 3, message: "目前暂不支持IE9以下版本浏览器发起对话，建议升级更高版本的IE或其他浏览器，获得更好的使用体验"})
    };
    _.Rx = function (e) {
        var t = [this.Yx, this.Zx];
        if (e[0]) if (2 != e.length) this.Qx.Wt(t); else {
            if (e[0].memberId == this.Yx) {
                this.$x = e[0];
                this.nN = e[1]
            } else {
                this.$x = e[1];
                this.nN = e[0]
            }
            this.ey()
        } else d.showToastTips({content: "系统繁忙，请稍后再试", type: 2})
    };
    _.Sx = function (e) {
        if (!e || 2 != e.length) d.showToastTips({content: "系统繁忙，请稍后再试", type: 2}); else {
            if (e[0].memberId == this.Yx) {
                this.$x = e[0];
                this.nN = e[1]
            } else {
                this.$x = e[1];
                this.nN = e[0]
            }
            this.ey()
        }
    };
    _.ey = function () {
        d.gy.fy({toDto: this.$x, fromDto: this.nN, showBig: !0, p2p: this.Xx});
        if (this.Wx) {
            this.Wx.d_label.fromId = this.Zx;
            this.Wx.d_label.toId = this.Yx;
            d.bj(this.Wx.d_category, this.Wx.d_action.step3, d.Ep(this.Wx.d_label))
        } else this.kd("onShowChattingWindow", this.Yx)
    };
    _.ux = function (e) {
        var t = "";
        if (e) c.oJ(e.dtoList, function (e, i) {
            t += '<a class="show-chatbox" memberId="' + e.memberId + '">\t\t\t\t\t \t\t<img src="' + (e.largeFaceUrl || "//s.stu.126.net/res/images/headImg/big.jpg") + '">\t\t\t\t\t \t\t<span class="f-thide">' + e.nickName + "</span>\t\t\t\t\t \t</a>"
        }); else t += "<p>暂时没有咨询客服！</p>";
        if (!d.yp()) this.Lx.innerHTML = t; else {
            n.Gc(this.Lx);
            var i = n.Lc(t);
            this.Lx.appendChild(i)
        }
    };
    _.hy = function (e) {
        a.md(e)
    };
    _.iy = function () {
        if (this.Ux) clearTimeout(this.Ux);
        this.Vx = setTimeout(function () {
            n.Rc(this.Ih, {display: "none"})
        }.RI(this), 400)
    };
    _.jy = function () {
        if (this.Ux) clearTimeout(this.Ux);
        n.Rc(this.Ih, {display: "none"})
    };
    _.ky = function () {
        if (this.Ux) clearTimeout(this.Ux);
        if (this.Vx) clearTimeout(this.Vx);
        this.Ux = setTimeout(function () {
            n.Rc(this.Ih, {display: "block"})
        }.RI(this), 100)
    };
    _.ly = function (e) {
        n.Ic(e);
        n.Jc()
    };
    _.Md = function () {
        this.lK()
    }
}, "2485091b4f4b621adc889ffa898e41e6", "59970d2cf64d09b0c87d787f7fd809a0", "8ae9513a791ecd9d9d3b27b748aa893f", "881642ee058ab38e3257e6d24eeb462f");
I$("a109ef61c7441ed2ad9e5ba67c3de55b", function () {
    var e = NEJ.O, t = NEJ.P("nej.j"), i = NEJ.P("nej.u"), n = NEJ.P("edu.d"), a = NEJ.P("edu.u"), o = i.HJ(), s,
        r = "ck-paySystemCache";
    n.KH = NEJ.C();
    rN = n.KH.hK(n.vq);
    rN.sN = function (e) {
        this.zq({
            key: r + o,
            notShowLoading: !1,
            url: "BizOrderBean.createOrder",
            sync: !0,
            param: [e],
            onload: this.MH.RI(this),
            onerror: this.NH.RI(this)
        })
    };
    rN.MH = function (e) {
        this.kd("onCreateOrder", e)
    };
    rN.NH = function (e) {
        this.kd("onErrorCreateOrder", e)
    };
    rN.wF = function (e) {
        this.zq({
            key: r + o,
            notShowLoading: !1,
            url: "ShopCartBean.generatePayURI",
            sync: !0,
            param: [e],
            onload: this.OH.RI(this),
            onerror: this.PH.RI(this)
        })
    };
    rN.OH = function (e) {
        this.kd("onCreatePayOrder", e)
    };
    rN.PH = function (e) {
        this.kd("onErrorCreatePayOrder", e)
    };
    rN.QH = function (e) {
        this.zq({
            key: r + o,
            notShowLoading: !1,
            url: "WeiXinPayBean.wxPayJs",
            sync: !0,
            param: [e],
            onload: this.RH.RI(this),
            onerror: this.SH.RI(this)
        })
    };
    rN.RH = function (e) {
        this.kd("ongetWechatPayParam", e)
    };
    rN.SH = function (e) {
        this.kd("ongetErrorWechatPayParam", e)
    };
    rN.TH = function (e, t) {
        this.zq({
            key: r + o,
            url: "PlanNewBean.getCourseChargeInfoForPlanNode",
            param: [e, t],
            onload: this.UH.RI(this)
        })
    };
    rN.UH = function (e) {
        this.kd("onGetCourseChargeInfoForPlanNode", e)
    };
    rN.VH = function (e) {
        this.zq({key: r + o, url: "LessonBean.getCourseChargeInfoForLessonId", param: [e], onload: this.WH.RI(this)})
    };
    rN.WH = function (e) {
        this.kd("onGetCourseChargeInfoForLessonId", e)
    };
    rN.XH = function (e) {
        this.zq({key: r + o, url: "BizOrderBean.hasFinishedBoughtCourse", param: [e], onload: this.YH.RI(this)})
    };
    rN.YH = function (e) {
        this.kd("onhasFinishedBoughtCourse", e)
    };
    rN.ZH = function (e, t) {
        this.zq({key: r + o, url: "BizOrderBean.hasFinishedBought", param: [e, t], onload: this.$H.RI(this)})
    };
    rN.$H = function (e) {
        this.kd("onhasFinishedBought", e)
    };
    rN._H = function (e, t) {
        this.zq({key: r + o, url: "BizOrderBean.hasFinishedBoughtPlan", param: [e, t], onload: this.aI.RI(this)})
    };
    rN.aI = function (e) {
        this.kd("onhasFinishedBoughtPlan", e)
    };
    rN.bI = function (e) {
        this.zq({
            key: r + o,
            url: "MarketingCoursePackageBean.hasBoughtCoursePackage",
            param: [e],
            onload: this.cI.RI(this)
        })
    };
    rN.cI = function (e) {
        this.kd("onHasBoughtCoursePackage", e)
    };
    rN.dI = function (e) {
        this.zq({
            key: r + o,
            url: "MarketingCoursePackageBean.hasBoughtMicroSeriesCourse",
            param: [e],
            onload: this.eI.RI(this)
        })
    };
    rN.eI = function (e) {
        this.kd("onHasBoughtMicroSeriesCourse", e)
    };
    rN.fI = function () {
        this.zq({key: r + o, url: "BizOrderBean.getMyTotalOrderInfo", param: [], onload: this.gI.RI(this)})
    };
    rN.gI = function (e) {
        this.kd("onGetTotalOrderInfo", e)
    };
    rN.hI = function (e, t, i, n, a, s, c, d) {
        this.zq({
            key: r + o,
            url: "BizOrderBean.getMySellesOrderList",
            param: [e, t, i, n, a, s, c, d],
            onload: this.iI.RI(this)
        })
    };
    rN.iI = function (e) {
        this.kd("onGetSellesOrderList", e)
    };
    rN.jI = function (e) {
        this.zq({key: r + o, url: "BizOrderBean.getPayingProtocolContent", param: [e], onload: this.kI.RI(this)})
    };
    rN.kI = function (e) {
        this.kd("ongetPayingProtocolContent", e)
    };
    rN.lI = function (e, t) {
        this.zq({key: r + o, url: "BizOrderBean.queryCoopCourseFeeRate", param: [e, t], onload: this.mI.RI(this)})
    };
    rN.mI = function (e) {
        this.kd("onQueryCoopCourseFeeRate", e)
    };
    rN.nw = function (e, t, i) {
        this.zq({key: r + o, url: "BizOrderBean.checkDiscountCode", param: [e, t, i], onload: this.nI.RI(this)})
    };
    rN.nI = function (e) {
        this.kd("cbCheckDiscountCode", e)
    };
    rN.oI = function (e, t) {
        this.zq({
            key: r + o,
            sync: !0,
            url: "BizOrderBean.confirmUseCode",
            param: [e, t],
            onload: this.pI.RI(this),
            onerror: this.NH.RI(this)
        })
    };
    rN.pI = function (e) {
        this.kd("cbConfirmUseCode", e)
    };
    rN.qI = function (e, t) {
        this.zq({key: r + o, url: "BizOrderBean.getAvailableUserCoupons", param: [e, t], onload: this.rI.RI(this)})
    };
    rN.rI = function (e) {
        this.kd("cbGetCouponList", e)
    };
    rN.sI = function (e, t, i) {
        this.zq({
            key: r + o,
            sync: !0,
            url: "BizOrderBean.createFreeOrder",
            param: [e, t, i],
            onload: this.tI.RI(this),
            onerror: this.NH.RI(this)
        })
    };
    rN.tI = function (e) {
        this.kd("cbcreateFreeOrder", e)
    };
    rN.uI = function (e) {
        this.zq({
            key: r + o,
            sync: !0,
            url: "BizOrderBean.getCoursePackageBoughtDetail",
            param: [e],
            onload: this.vI.RI(this)
        })
    };
    rN.vI = function (e) {
        this.kd("ongetCoursePackageBoughtDetail", e)
    };
    rN.wI = function (e, t) {
        this.zq({
            key: r + o,
            sync: !0,
            url: "BizOrderBean.checkExportLoanedOrderList",
            param: [e, t],
            onload: this.xI.RI(this)
        })
    };
    rN.xI = function (e) {
        this.kd("oncheckExportLoanedOrderList", e)
    };
    rN.yI = function (e) {
        this.zq({
            key: r + o,
            sync: !0,
            url: "WeiXinPayBean.hasFinishPayment",
            param: [e],
            notShowLoading: !0,
            onload: this.zI.RI(this)
        })
    };
    rN.zI = function (e) {
        this.kd("onhasFinishPayment", e)
    };
    rN.AI = function (e) {
        this.zq({key: r + o, sync: !0, url: "WeiXinPayBean.wxPayApp", param: [e], onload: this.BI.RI(this)})
    };
    rN.BI = function (e) {
        this.kd("ongetWxPayAppInfo", e)
    };
    rN.CI = function (e) {
        this.zq({key: r + o, sync: !0, url: "ShopCartBean.generatePayJson", param: [e], onload: this.DI.RI(this)})
    };
    rN.DI = function (e) {
        this.kd("ongetAliPayAppInfo", e)
    }
}, "798f1e26aac8a0fccc5afbce8e38b75d", "0a75c7094be3e9ca124b1c7fdd9c05b5");
I$("89d45f81fa07ee819dd174a236eeb447", function () {
    var e = window, t = NEJ.O, i = NEJ.F, n = NEJ.P("nej.e"), a = NEJ.P("nej.v"), o = NEJ.P("edu.d"),
        s = NEJ.P("edu.m"), r = NEJ.P("edu.u"), c = NEJ.P("nej.u"), d = NEJ.P("edu.cms"), _, l;
    var u = n.zd('\t\t\t<div class="m-toPayDialog f-pr">\t\t\t\t<p class="info j-info">请在新打开的页面完成支付，<span>支付完成前，请不要关闭此窗口。</span>支付完成后请根据您的情况点击下面按钮：</p>\t\t\t\t<div class="btns">\t            \t<a class="okbtn j-okbtn"><span>已完成支付</span></a>\t            </div>                <p class="help-tip">支付遇到问题？联系云课堂客服获得帮助。                    <span class="j-chatting wrpbox f-pr">                        <span class="f-icon zixun">&#xe90e;</span>                        <span class="chat">在线咨询</span>                    </span>                </p>\t           </div>');
    r.EI = NEJ.C();
    _ = r.EI.hK(r.Xo, !0);
    l = r.EI.rK;
    r.EI.Tp = function (e) {
        var t = r.EI.Fd(e);
        t.ro();
        return t
    };
    _.bo = function () {
        this.lo = n.Gf(n.Ad(u))
    };
    _.co = function () {
        this.mK();
        this.FI = n.mc(this.Ih, "j-okbtn")[0];
        this.GI = n.mc(this.Ih, "j-chatting")[0];
        this.HI = n.mc(this.Ih, "help-tip")[0];
        a.Cc(this.FI, "click", this.bq.RI(this));
        a.Cc(this.GI, "click", function () {
            r.Op("7b1d5479260a923d1e5b187c8b9ac9a9", "")
        }.RI(this));
        this.xF = new o.KH;
        this.xF.Cc("onhasFinishedBoughtCourse", this.JI.RI(this));
        this.xF.Cc("onhasFinishedBought", this.KI.RI(this));
        this.xF.Cc("onHasBoughtCoursePackage", this.JI.RI(this));
        this.xF.Cc("onHasBoughtMicroSeriesCourse", this.JI.RI(this));
        if (r.Qk()) this.HI.style.display = "none"
    };
    _.LI = function () {
        if (!this.MI) {
            this.MI = r.Kx.Fd({
                parent: this.GI,
                targetId: -1,
                targetType: -1,
                scene: 3,
                pos: {top: "30px", left: "0"},
                p2p: !0,
                titleText: "<span>咨询服务人员：</span>"
            });
            this.MI.ly(".j-chatting .service-list .service-title{padding: 10px 10px 0 10px;text-align: left;color: #333;}                                                .j-chatting .service-list .list-in{ text-align: left;border-top:none;}                                                .j-chatting .service-list .list-in span{ width:auto;}");
            a.Cc(this.GI, "click", this.UC.RI(this, "客服点击"));
            this.MI.Cc("onShowChattingWindow", this.VC.RI(this, "弹出会话"))
        }
        this.MI.ky();
        var e = {"课程id": this.Am};
        r.bj("支付确认页", "支付咨询窗口弹出", JSON.stringify(e || {}))
    };
    _.NI = function () {
        if (this.MI) this.MI.iy()
    };
    _.UC = function (e, t) {
        var i = "支付确认页", e = e, o = {}, s = a.gd(t);
        if (n.kc(s, "memberid")) {
            o["对话者id"] = "s-" + n.kc(s, "memberid");
            o["课程id"] = this.Am;
            r.bj(i, e, JSON.stringify(o || {}))
        }
    };
    _.VC = function (e, t) {
        var i = "支付确认页", e = e, n = {};
        n["对话者id"] = "s-" + t;
        n["课程id"] = this.Am;
        r.bj(i, e, JSON.stringify(n || {}))
    };
    _.JI = function (t) {
        if (t) e.location.reload(); else {
            this.gz();
            r.Sp.Tp({type: 3, message: "未完成支付，请尝试重新支付", okTip: "好的"})
        }
    };
    _.KI = function (t) {
        if (t) e.location.reload(); else {
            this.gz();
            r.Sp.Tp({type: 3, message: "未完成支付，请尝试重新支付", okTip: "好的"})
        }
    };
    _.bq = function () {
        switch (this.OI) {
            case r.CONST.PRODUCT_TYPE_YKT_COURSE:
                this.xF.XH(this.Am);
                break;
            case r.CONST.PRODUCT_TYPE_YOOC:
            case r.CONST.PRODUCT_TYPE_PRE_MONEY:
            case r.CONST.PRODUCT_TYPE_MICRO_SPECIAL:
            case r.CONST.PRODUCT_TYPE_OPTIONAL_PACKAGE:
            case r.CONST.PRODUCT_TYPE_COUPON:
                this.xF.ZH(this.Am, this.OI);
                break;
            case r.CONST.PRODUCT_TYPE_PACKAGE:
                this.xF.bI(this.Am);
                break;
            case r.CONST.PRODUCT_TYPE_SERIES:
                this.xF.dI(this.Am)
        }
    };
    _.gz = function () {
        this.Lg();
        this.MK = null;
    };
    _.Id = function (e) {
        e.title = " ";
        e.maskClickNotHidden = !0;
        this.Am = e.courseId || e.pkgId || "";
        this.Bm = e.productType || r.CONST.PRODUCT_TYPE_YKT_COURSE;
        this.OI = 1 * e.type || r.CONST.PRODUCT_TYPE_YKT_COURSE;
        this.kK(e)
    };
    _.Md = function () {
        this.lK()
    };
    d.FinishPaidDialog = r.EI.Tp
}, "d62f95b9c6f18a551a036c8ec75d2d82", "5163741a892d51566651a12187429446", "a109ef61c7441ed2ad9e5ba67c3de55b", "151562add01838325f04dae3569223d6");
I$("05c9c290a23bc1bc9ca7db1bb9443f7d", function () {
    var e = window, t = NEJ.P("nej.e"), i = NEJ.P("edu.m"), n = NEJ.P("edu.u");
    if (n.zp()) {
        t.Ef("j-commonutil");
        this.bF = n.IB.Fd();
        this.cF = n.DE.Fd()
    }
}, "151562add01838325f04dae3569223d6", "15c16be5f390e65c6164a900eb0a2440", "dce5fe8373a590c1b26f0099bf103091", "89d45f81fa07ee819dd174a236eeb447", "c6dc872bd42834f642dbd3e56c6d4abe");