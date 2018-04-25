!function (e) {
    if ("function" == typeof define && window.define.amd) window.define([], e); else e()
}(function () {
    var a = {}, p = {}, e = {}, d = {}, t = [], h = 0;
    if (!Function.prototype.bind) Function.prototype.bind = function (t) {
        if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var n = Array.prototype.slice.call(arguments, 1), r = this, e = function () {
        }, i = function () {
            return r.apply(this instanceof e && t ? this : t, n.concat(Array.prototype.slice.call(arguments)))
        };
        e.prototype = this.prototype;
        i.prototype = new e;
        return i
    };
    var u = function (e, t, i) {
        if (window.addEventListener) e.addEventListener(t, i, !1); else e.attachEvent("on" + t, i)
    };
    var m = function (e, t, i) {
        if (window.removeEventListener) e.removeEventListener(t, i); else e.detachEvent("on" + t, i)
    };
    var n = [];
    var b = function (n) {
        var i = "";
        var t = e[n];
        if (t.__coverBackground && v("animation")) i = -1 != t.__coverBackground.indexOf("background:") ? t.__coverBackground : "";
        return "position:fixed;_position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;background:rgb(0,0,0); filter:progid:DXImageTransform.Microsoft.Alpha(opacity=60);-moz-opacity:0.6;-khtml-opacity:0.6;opacity:0.6;z-index:1000;" + i
    };
    var g = function (e, t) {
        return "position:fixed;_position:absolute;z-index:10000;left:50%;top:50%;width:" + e + "px;margin-left:-" + e / 2 + "px;height:" + t + "px;margin-top:-" + t / 2 + "px;"
    };
    var y = function (n) {
        var t = e[n];
        var i = null;
        if (t.__iframeShowAnimation) i = "-webkit-animation:" + t.__iframeShowAnimation + ";-moz-animation:" + t.__iframeShowAnimation + ";-ms-animation:" + t.__iframeShowAnimation + ";-o-animation:" + t.__iframeShowAnimation + ";animation:" + t.__iframeShowAnimation + ";";
        return "width:100%;height:100%;border:none;background:none;" + (i ? i : "")
    };
    var I = function () {
        var e = setInterval(function () {
            for (var i = 0; i < t.length; i++) if (t[i].readyDone) {
                e = clearInterval(e);
                t.shift();
                f(1);
                break
            }
        }, 200)
    };
    var f = function (i) {
        if (i || !h) {
            h = 1;
            var e = setInterval(function () {
                for (var i = 0; i < t.length; i++) if (!t[i].readyDone) {
                    e = clearInterval(e);
                    c.call(t[i]);
                    I();
                    break
                }
            }, 200)
        }
    };
    var l = function (c, p, d) {
        var n = d.id;
        var s = "x-URS-iframe" + n;
        var o = e[n];
        var i = document.getElementById(s), l = o._name || "";
        if (!i) {
            try {
                i = document.createElement('<iframe  name="' + l + '" allowTransparency=true ></iframe>')
            } catch (v) {
                i = document.createElement("iframe");
                i.allowTransparency = !0;
                i.name = l
            }
            i.frameBorder = 0;
            i.id = s;
            i.scrolling = "no";
            i.style.cssText = y(n)
        }
        if (p) c.appendChild(i); else {
            var u = 420, h = 408;
            if (o.frameSize) {
                u = o.frameSize.width;
                h = o.frameSize.height
            }
            var a = document.getElementById("x-discover" + n);
            if (!a) {
                a = document.createElement("div");
                a.id = "x-discover" + n;
                a.style.cssText = b(n)
            }
            var r = document.getElementById("x-panel" + n);
            if (!r) {
                r = document.createElement("div");
                r.id = "x-panel" + n;
                o._panel = r;
                r.style.cssText = g(u, h)
            }
            r.appendChild(i);
            c.appendChild(a);
            c.appendChild(r);
            c.style.display = "none"
        }
        if (!window.postMessage) {
            t.push(this);
            f(0)
        }
    };
    var r = function (t) {
        var i = "x-URS-iframe" + this.MGID;
        var e = document.getElementById(i);
        if (this._options && this._options.afterSetIframeSrc) this._options.afterSetIframeSrc(e);
        window.setTimeout(function () {
            e.src = this._url_cache
        }.bind(this), 0);
        this.sto = clearTimeout(this.sto);
        if (window._$needUrsBgp) if (1 != t) this.sto = setTimeout(function () {
            this.sto = clearTimeout(this.sto);
            if (this._url_cache.indexOf("webzj.reg.163.com") >= 0) {
                this._url_cache = this._url_cache.replace("webzj.reg.163.com", "webzj2.reg.163.com");
                r.call(this, 1)
            }
        }.bind(this), 1e4)
    };
    var v = function (i) {
        var n = ["webkit", "Moz", "ms", "o"], e, t = [], o = document.documentElement.style, r = function (e) {
            return e.replace(/-(\w)/g, function (t, e) {
                return e.toUpperCase()
            })
        };
        for (e in n) t.push(r(n[e] + "-" + i));
        t.push(r(i));
        for (e in t) if (t[e] in o) return !0;
        return !1
    };
    var i = function (t, i) {
        var n = document.getElementById("x-URS-iframe" + t);
        var r = window.name || "_parent";
        var e = {};
        e.data = i;
        e.data.from = "URS|";
        e.data.topURL = location.href || "";
        e.origin = "*";
        e.data.mv = "cdn_16112103_101";
        e.source = r;
        S(n.contentWindow, e)
    };
    var c = function () {
        i(this.MGID, this._urs_options)
    };
    var s = function () {
        var e = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (t) {
            t = t || "";
            if (e.test(t)) return RegExp.$1; else return "*"
        }
    }();
    var o = function (t, e) {
        try {
            e = e.toLowerCase();
            if (null === t) return "null" == e;
            if (void 0 === t) return "undefined" == e; else return Object.prototype.toString.call(t).toLowerCase() == "[object " + e + "]"
        } catch (i) {
            return !1
        }
    };
    var _ = function (t, r, a) {
        if (!t) return "";
        var n = [];
        for (var i in t) if (t.hasOwnProperty(i)) {
            var e = t[i];
            if (e) if (!o(e, "function")) {
                if (o(e, "date")) e = e.getTime(); else if (o(e, "array")) e = e.join(","); else if (o(e, "object")) e = JSON.stringify(e);
                if (a) e = encodeURIComponent(e);
                n.push(encodeURIComponent(i) + "=" + e)
            } else ; else ;
        } else ;
        return n.join(r || ",")
    };
    var S = function () {
        var e = "MSG|";
        var t = function (t) {
            var i = {};
            t = t || {};
            i.origin = t.origin || "";
            i.ref = location.href;
            i.self = t.source;
            i.data = JSON.stringify(t.data);
            return e + _(i, "|", !0)
        };
        return function (i, e) {
            if (window.postMessage) {
                e = e || {};
                i.postMessage(JSON.stringify(e.data), s(e.origin))
            } else n.unshift({w: i, d: escape(t(e))})
        }
    }();
    var w = function () {
        var e = navigator.appName;
        if ("Netscape" == e) {
            var t = window.open("about:blank", "_self");
            t.opener = null;
            t.close()
        } else if ("Microsoft Internet Explorer" == e) {
            window.opener = null;
            window.open("", "_self");
            window.close()
        }
    };
    window.URS = function () {
        var t = function () {
            var e = (new Date).getTime() + Math.random();
            if (!d[e]) {
                d[e] = e;
                return e
            } else return t()
        };
        var r = function (i) {
            this._options = i;
            this.MGID = t();
            e[this.MGID] = {};
            this._$COM_NUM = 1 == this._$COM_NUM ? 1 : 2;
            var n = e[this.MGID];
            n.frameSize = i.frameSize;
            n.__coverBackground = i.coverBackground;
            n.__iframeShowAnimation = i.iframeShowAnimation;
            window.PTDOM = 0 != i.isHttps ? "https://" : "http://";
            if (i.cssDomain && i.cssFiles) {
                n.__cssStr = "cd=" + i.cssDomain + "&cf=" + i.cssFiles;
                if (-1 != n.__cssStr.indexOf("http://")) window.PTDOM = "http://";
                n.__cssStr = encodeURIComponent(n.__cssStr)
            }
            this.isInclude = 0;
            if (i.includeBox) if ("string" == typeof i.includeBox) this.isInclude = document.getElementById(i.includeBox) || 0; else this.isInclude = i.includeBox;
            n.needPrepare = i.needPrepare || 0;
            if ("string" == typeof i.eventType) this._type = i.eventType;
            if ("string" == typeof i.bid) this._btn = document.getElementById(i.bid); else this._btn = i.bid;
            if (i.logincb) this.logincb = i.logincb;
            if (i.closecb) this.closecb = i.closecb;
            if (i.regcb) this.regcb = i.regcb;
            if (i.loginCheckLock) this.loginCheckLock = i.loginCheckLock;
            if (i.regCheckLock) this.regCheckLock = i.regCheckLock;
            if (i.initReady) this.initReady = i.initReady;
            if (i.statecb) this.statecb = i.statecb;
            if (i.resize) this.resize = i.resize;
            if (i.changepage) this.changepage = i.changepage;
            if (i.loginstate) this.loginstate = i.loginstate;
            var r = document.createElement("div");
            r.id = "x-URS" + this.MGID;
            document.body.appendChild(r);
            this.box = r;
            var o = "index.html";
            if (i.single) {
                o = "index_dl.html";
                if ("register" == i.page) o = "index_reg.html"
            }
            var a = i.crossDomainUrl || "webzj.reg.163.com/v1.0.1/pub/";
            this._url_cache = window.PTDOM + a + o;
            if (n.__cssStr) this._url_cache += "?" + n.__cssStr + "&MGID=" + this.MGID + "&wdaId=" + (i.wdaId || ""); else this._url_cache += "?MGID=" + this.MGID + "&wdaId=" + (i.wdaId || "");
            this._urs_options = i || {};
            try {
                JSON.stringify(this._urs_options)
            } catch (c) {
                return null
            }
            if (!this.isInclude) {
                if (this._btn && this._type) u(this._btn, this._type, this.showIframe.bind(this))
            } else this.includeBox = this.isInclude
        };
        var l = function (e) {
            if (e) e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
        };
        var f = function (t) {
            l(t);
            var e = t.data || "{}";
            if ("string" == typeof e) try {
                e = JSON.parse(e)
            } catch (i) {
                e = {}
            }
            if (a[e.MGID]) a[e.MGID]({data: e, origin: s(t.origin)})
        };
        var i = function (o) {
            var t = o.data, i, n, r;
            if (t) {
                if ("string" == typeof t) try {
                    t = JSON.parse(t)
                } catch (a) {
                    t = {}
                }
                if (t.MGID) {
                    i = p[t.MGID];
                    n = e[t.MGID];
                    if (i.isInclude) r = i.includeBox; else r = n._panel;
                    if (t["URS-READY-DONE"]) {
                        i.readyDone = 1;
                        i.sto = clearTimeout(i.sto);
                        if (i.initReady) i.initReady()
                    }
                    if (t["URS-READY"]) i.ursReady = 1;
                    if (!window.postMessage || !t["URS-READY"] || !i.isInclude && n.needPrepare) {
                        if (t["URS-READY"] && !n._initReady) n._initReady = !0;
                        if (!t["URS-CM-STATE"]) if (!t || !t.fromOutLogin || t.toOpener) {
                            if ("success" == t.type) {
                                if (i.logincb) i.logincb(t["username"], t["isOther"], t);
                                if (!this.isInclude) {
                                    if (i._btn && i._type) m(i._btn, i._type, i.showIframe.bind(i));
                                    i.closeIframe()
                                }
                            } else if ("close" == t.type) {
                                if (i.closecb) i.closecb();
                                i.closeIframe()
                            } else if ("resize" == t.type || "init" == t.type) {
                                r.style.width = t.width + "px";
                                r.style.height = t.height + "px";
                                if (!i.isInclude) r.style.marginLeft = -1 * t.width / 2 + "px";
                                if (i.resize) i.resize(t)
                            } else if ("register-success" == t.type) {
                                if (i.regcb) i.regcb(t["username"], t["url"])
                            } else if ("lockLoginState" == t.type) {
                                if (i.loginCheckLock) i.loginCheckLock(t.value)
                            } else if ("lockRegState" == t.type) {
                                if (i.regCheckLock) i.regCheckLock(t.value)
                            } else if ("changepage" == t.type) {
                                if (i.changepage) i.changepage(t.page)
                            } else if ("loginstate" == t.type) if (i.loginstate) i.loginstate(t)
                        } else {
                            try {
                                window.opener.$outLogin(t)
                            } catch (a) {
                            }
                            setTimeout(function () {
                                w()
                            }, 200)
                        } else if (i.statecb) i.statecb(t["URS-CM-STATENAME"], t["URS-CM-STATE"])
                    } else c.call(i)
                }
            }
        };
        var h = function () {
            var e = "MSG|";
            var t = function (n, t) {
                var a = o(t, "function") ? t : function (e) {
                    return e === t
                }, i = null;
                for (var e = 0, c = n.length - 1, r; c > e; e++) {
                    r = n[e];
                    if (a(r)) i = e
                }
                return null != i ? i : -1
            };
            var r = function () {
                var e;
                var i = function (i, n, r) {
                    if (t(e, i.w) < 0) {
                        e.push(i.w);
                        r.splice(n, 1);
                        i.w.name = i.d
                    }
                };
                return function () {
                    e = [];
                    if (n && n.length) for (var t = n.length, r; t--; t >= 0) {
                        r = n[t];
                        i(r, t, n)
                    }
                    e = null
                }
            }();
            var a = function () {
                var r = unescape(window.name || "");
                if (r && 0 == r.indexOf(e)) {
                    window.name = "";
                    var t = r.replace(e, ""), c = t.split("|"), u = c.length, l = {};
                    for (var o = 0; u > o; o++) {
                        var n = c[o].split("=");
                        if (!n || !n.length) return;
                        var f = n.shift();
                        if (!f) return;
                        l[decodeURIComponent(f)] = decodeURIComponent(n.join("="))
                    }
                    t = l;
                    var a = (t.origin || "").toLowerCase();
                    if (!a || "*" == a || 0 == location.href.toLowerCase().indexOf(a)) i({
                        data: t.data || "null",
                        origin: s(t.ref || document.referrer)
                    })
                }
            };
            return function () {
                setInterval(r, 100);
                setInterval(a, 20)
            }
        }();
        var g = function () {
            if (!window.__hasRun) {
                if (window.postMessage) u(window, "message", f); else h();
                window.__hasRun = 1
            }
        };
        return function (t) {
            r.call(this, t);
            var n = e[this.MGID];
            if (n.needPrepare || this.isInclude) this.prepareIframe();
            a[this.MGID] = i.bind(this);
            p[this.MGID] = this;
            return g()
        }
    }();
    window.URS.prototype.prepareIframe = function () {
        if (this.isInclude) {
            l.call(this, this.includeBox, 1, {id: this.MGID});
            r.call(this);
            this.showIframe()
        } else {
            l.call(this, this.box, 0, {id: this.MGID});
            r.call(this);
        }
    };
    window.URS.prototype.showIframe = function (t) {
        var i = e[this.MGID];
        if (!this.isInclude) if (!i.needPrepare) {
            l.call(this, this.box, 0, {id: this.MGID});
            r.call(this)
        } else if (!i._initReady) return;
        t = t || {};
        if (t.page) {
            if (t.page != this._urs_options.page && this._urs_options.single) {
                var n = "index_dl.html";
                if ("register" == t.page) n = "index_reg.html";
                this._url_cache = window.PTDOM + "webzj.reg.163.com/v1.0.1/pub/" + n;
                if (i.__cssStr) this._url_cache += "?" + i.__cssStr + "&MGID=" + this.MGID; else this._url_cache += "?MGID=" + this.MGID
            }
            r.call(this);
            this._urs_options.page = t.page
        }
        if (i.needPrepare && !this.isInclude) c.call(this);
        this.box.style.display = "block";
        if (this._options.afterShow) this._options.afterShow.call(this)
    };
    window.URS.prototype.closeIframe = function () {
        var n = e[this.MGID];
        if (!this.isInclude) {
            this.box.style.display = "none";
            r.call(this);
            if (!n.needPrepare) {
                if (navigator.userAgent.indexOf("MSIE") > 0) {
                    var t = document.getElementById("x-URS-iframe" + this.MGID), i = t.contentWindow;
                    if (t) {
                        t.src = "about:blank";
                        try {
                            i.document.write("");
                            i.document.clear()
                        } catch (a) {
                        }
                    }
                    var o = document.getElementById("x-panel" + this.MGID);
                    o.removeChild(t);
                    window.CollectGarbage()
                }
                this.box.innerHTML = ""
            }
        } else ;
    };
    window.URS.prototype.loginUnlock = function () {
        var e = {fromLoginLock: 1, lock: 0};
        i(this.MGID, e)
    };
    window.URS.prototype.loginDolock = function () {
        var e = {fromLoginLock: 1, lock: 1};
        i(this.MGID, e)
    };
    window.URS.prototype.regUnlock = function () {
        var e = {fromRegLock: 1, lock: 0};
        i(this.MGID, e)
    };
    window.URS.prototype.regDolock = function () {
        var e = {fromRegLock: 1, lock: 1};
        i(this.MGID, e)
    };
    window.URS.prototype.doLoginProxy = function (e) {
        var t = {username: e.username, pwd: e.pwd, defaultUnLogin: e.defaultUnLogin, doLoginProxy: 1};
        i(this.MGID, t)
    };
    return window.URS
});
(function () {
    function r(c, f) {
        function u(n) {
            if (u[n] !== l) return u[n];
            var e;
            if ("bug-string-char-index" == n) e = "a" != "a"[0]; else if ("json" == n) e = u("json-stringify") && u("json-parse"); else {
                var t;
                if ("json-stringify" == n) {
                    e = f.stringify;
                    var r = "function" == typeof e && s;
                    if (r) {
                        (t = function () {
                            return 1
                        }).toJSON = t;
                        try {
                            r = "0" === e(0) && "0" === e(new R) && '""' == e(new x) && e(a) === l && e(l) === l && e() === l && "1" === e(t) && "[1]" == e([t]) && "[null]" == e([l]) && "null" == e(null) && "[null,null,null]" == e([l, a, null]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == e({a: [t, !0, !1, null, "\x00\b\n\f\r	"]}) && "1" === e(null, t) && "[\n 1,\n 2\n]" == e([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == e(new m(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == e(new m(864e13)) && '"-000001-01-01T00:00:00.000Z"' == e(new m(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == e(new m(-1))
                        } catch (o) {
                            r = !1
                        }
                    }
                    e = r
                }
                if ("json-parse" == n) {
                    e = f.parse;
                    if ("function" == typeof e) try {
                        if (0 === e("0") && !e(!1)) {
                            t = e('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                            var i = 5 == t.a.length && 1 === t.a[0];
                            if (i) {
                                try {
                                    i = !e('"	"')
                                } catch (c) {
                                }
                                if (i) try {
                                    i = 1 !== e("01")
                                } catch (h) {
                                }
                                if (i) try {
                                    i = 1 !== e("1.")
                                } catch (d) {
                                }
                            }
                        }
                    } catch (p) {
                        i = !1
                    }
                    e = i
                }
            }
            return u[n] = !!e
        }

        c || (c = e.Object());
        f || (f = e.Object());
        var R = c.Number || e.Number, x = c.String || e.String, S = c.Object || e.Object, m = c.Date || e.Date,
            O = c.SyntaxError || e.SyntaxError, T = c.TypeError || e.TypeError, E = c.Math || e.Math,
            w = c.JSON || e.JSON;
        "object" == typeof w && w && (f.stringify = w.stringify, f.parse = w.parse);
        var S = S.prototype, a = S.toString, o, g, l, s = new m(-0xc782b5b800cec);
        try {
            s = -109252 == s.getUTCFullYear() && 0 === s.getUTCMonth() && 1 === s.getUTCDate() && 10 == s.getUTCHours() && 37 == s.getUTCMinutes() && 6 == s.getUTCSeconds() && 708 == s.getUTCMilliseconds()
        } catch (G) {
        }
        if (!u("json")) {
            var v = u("bug-string-char-index");
            if (!s) var d = E.floor, D = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], y = function (t, e) {
                return D[e] + 365 * (t - 1970) + d((t - 1969 + (e = +(e > 1))) / 4) - d((t - 1901 + e) / 100) + d((t - 1601 + e) / 400)
            };
            (o = S.hasOwnProperty) || (o = function (i) {
                var e = {}, t;
                (e.__proto__ = null, e.__proto__ = {toString: 1}, e).toString != a ? o = function (e) {
                    var t = this.__proto__;
                    e = e in (this.__proto__ = null, this);
                    this.__proto__ = t;
                    return e
                } : (t = e.constructor, o = function (e) {
                    var i = (this.constructor || t).prototype;
                    return e in this && !(e in i && this[e] === i[e])
                });
                e = null;
                return o.call(this, i)
            });
            g = function (c, s) {
                var t = 0, n, e, r;
                (n = function () {
                    this.valueOf = 0
                }).prototype.valueOf = 0;
                e = new n;
                for (r in e) o.call(e, r) && t++;
                n = e = null;
                t ? g = 2 == t ? function (t, n) {
                    var i = {}, r = "[object Function]" == a.call(t), e;
                    for (e in t) r && "prototype" == e || o.call(i, e) || !(i[e] = 1) || !o.call(t, e) || n(e)
                } : function (t, i) {
                    var r = "[object Function]" == a.call(t), e, n;
                    for (e in t) r && "prototype" == e || !o.call(t, e) || (n = "constructor" === e) || i(e);
                    (n || o.call(t, e = "constructor")) && i(e)
                } : (e = "valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "), g = function (t, c) {
                    var r = "[object Function]" == a.call(t), n,
                        s = !r && "function" != typeof t.constructor && i[typeof t.hasOwnProperty] && t.hasOwnProperty || o;
                    for (n in t) r && "prototype" == n || !s.call(t, n) || c(n);
                    for (r = e.length; n = e[--r]; s.call(t, n) && c(n)) ;
                });
                return g(c, s)
            };
            if (!u("json-stringify")) {
                var U = {92: "\\\\", 34: '\\"', 8: "\\b", 12: "\\f", 10: "\\n", 13: "\\r", 9: "\\t"},
                    h = function (e, t) {
                        return ("000000" + (t || 0)).slice(-e)
                    }, C = function (e) {
                        for (var i = '"', t = 0, r = e.length, o = !v || r > 10, a = o && (v ? e.split("") : e); r > t; t++) {
                            var n = e.charCodeAt(t);
                            switch (n) {
                                case 8:
                                case 9:
                                case 10:
                                case 12:
                                case 13:
                                case 34:
                                case 92:
                                    i += U[n];
                                    break;
                                default:
                                    if (32 > n) {
                                        i += "\\u00" + h(2, n.toString(16));
                                        break
                                    }
                                    i += o ? a[t] : e.charAt(t)
                            }
                        }
                        return i + '"'
                    }, _ = function (i, v, m, I, p, s, u) {
                        var e, t, n, r, f, w, b, S, c;
                        try {
                            e = v[i]
                        } catch (M) {
                        }
                        if ("object" == typeof e && e) if (t = a.call(e), "[object Date]" != t || o.call(e, "toJSON")) "function" == typeof e.toJSON && ("[object Number]" != t && "[object String]" != t && "[object Array]" != t || o.call(e, "toJSON")) && (e = e.toJSON(i)); else if (e > -1 / 0 && 1 / 0 > e) {
                            if (y) {
                                r = d(e / 864e5);
                                for (t = d(r / 365.2425) + 1970 - 1; y(t + 1, 0) <= r; t++) ;
                                for (n = d((r - y(t, 0)) / 30.42); y(t, n + 1) <= r; n++) ;
                                r = 1 + r - y(t, n);
                                f = (e % 864e5 + 864e5) % 864e5;
                                w = d(f / 36e5) % 24;
                                b = d(f / 6e4) % 60;
                                S = d(f / 1e3) % 60;
                                f %= 1e3
                            } else t = e.getUTCFullYear(), n = e.getUTCMonth(), r = e.getUTCDate(), w = e.getUTCHours(), b = e.getUTCMinutes(), S = e.getUTCSeconds(), f = e.getUTCMilliseconds();
                            e = (0 >= t || t >= 1e4 ? (0 > t ? "-" : "+") + h(6, 0 > t ? -t : t) : h(4, t)) + "-" + h(2, n + 1) + "-" + h(2, r) + "T" + h(2, w) + ":" + h(2, b) + ":" + h(2, S) + "." + h(3, f) + "Z"
                        } else e = null;
                        m && (e = m.call(v, i, e));
                        if (null === e) return "null";
                        t = a.call(e);
                        if ("[object Boolean]" == t) return "" + e;
                        if ("[object Number]" == t) return e > -1 / 0 && 1 / 0 > e ? "" + e : "null";
                        if ("[object String]" == t) return C("" + e);
                        if ("object" == typeof e) {
                            for (i = u.length; i--;) if (u[i] === e) throw T();
                            u.push(e);
                            c = [];
                            v = s;
                            s += p;
                            if ("[object Array]" == t) {
                                n = 0;
                                for (i = e.length; i > n; n++) t = _(n, e, m, I, p, s, u), c.push(t === l ? "null" : t);
                                i = c.length ? p ? "[\n" + s + c.join(",\n" + s) + "\n" + v + "]" : "[" + c.join(",") + "]" : "[]"
                            } else g(I || e, function (t) {
                                var i = _(t, e, m, I, p, s, u);
                                i !== l && c.push(C(t) + ":" + (p ? " " : "") + i)
                            }), i = c.length ? p ? "{\n" + s + c.join(",\n" + s) + "\n" + v + "}" : "{" + c.join(",") + "}" : "{}";
                            u.pop();
                            return i
                        }
                    };
                f.stringify = function (f, n, e) {
                    var o, s, c, t;
                    if (i[typeof n] && n) if ("[object Function]" == (t = a.call(n))) s = n; else if ("[object Array]" == t) {
                        c = {};
                        for (var l = 0, u = n.length, r; u > l; r = n[l++], (t = a.call(r), "[object String]" == t || "[object Number]" == t) && (c[r] = 1)) ;
                    }
                    if (e) if ("[object Number]" == (t = a.call(e))) {
                        if (0 < (e -= e % 1)) for (o = "", e > 10 && (e = 10); o.length < e; o += " ") ;
                    } else "[object String]" == t && (o = 10 >= e.length ? e : e.slice(0, 10));
                    return _("", (r = {}, r[""] = f, r), s, c, o, "", [])
                }
            }
            if (!u("json-parse")) {
                var A = x.fromCharCode,
                    j = {92: "\\", 34: '"', 47: "/", 98: "\b", 116: "	", 110: "\n", 102: "\f", 114: "\r"}, t, b,
                    n = function () {
                        t = b = null;
                        throw O()
                    }, p = function () {
                        for (var i = b, c = i.length, o, a, r, s, e; c > t;) switch (e = i.charCodeAt(t), e) {
                            case 9:
                            case 10:
                            case 13:
                            case 32:
                                t++;
                                break;
                            case 123:
                            case 125:
                            case 91:
                            case 93:
                            case 58:
                            case 44:
                                return o = v ? i.charAt(t) : i[t], t++, o;
                            case 34:
                                o = "@";
                                for (t++; c > t;) if (e = i.charCodeAt(t), 32 > e) n(); else if (92 == e) switch (e = i.charCodeAt(++t), e) {
                                    case 92:
                                    case 34:
                                    case 47:
                                    case 98:
                                    case 116:
                                    case 110:
                                    case 102:
                                    case 114:
                                        o += j[e];
                                        t++;
                                        break;
                                    case 117:
                                        a = ++t;
                                        for (r = t + 4; r > t; t++) e = i.charCodeAt(t), e >= 48 && 57 >= e || e >= 97 && 102 >= e || e >= 65 && 70 >= e || n();
                                        o += A("0x" + i.slice(a, t));
                                        break;
                                    default:
                                        n()
                                } else {
                                    if (34 == e) break;
                                    e = i.charCodeAt(t);
                                    for (a = t; e >= 32 && 92 != e && 34 != e;) e = i.charCodeAt(++t);
                                    o += i.slice(a, t)
                                }
                                if (34 == i.charCodeAt(t)) return t++, o;
                                n();
                            default:
                                a = t;
                                45 == e && (s = !0, e = i.charCodeAt(++t));
                                if (e >= 48 && 57 >= e) {
                                    for (48 == e && (e = i.charCodeAt(t + 1), e >= 48 && 57 >= e) && n(); c > t && (e = i.charCodeAt(t), e >= 48 && 57 >= e); t++) ;
                                    if (46 == i.charCodeAt(t)) {
                                        for (r = ++t; c > r && (e = i.charCodeAt(r), e >= 48 && 57 >= e); r++) ;
                                        r == t && n();
                                        t = r
                                    }
                                    e = i.charCodeAt(t);
                                    if (101 == e || 69 == e) {
                                        e = i.charCodeAt(++t);
                                        43 != e && 45 != e || t++;
                                        for (r = t; c > r && (e = i.charCodeAt(r), e >= 48 && 57 >= e); r++) ;
                                        r == t && n();
                                        t = r
                                    }
                                    return +i.slice(a, t)
                                }
                                s && n();
                                if ("true" == i.slice(t, t + 4)) return t += 4, !0;
                                if ("false" == i.slice(t, t + 5)) return t += 5, !1;
                                if ("null" == i.slice(t, t + 4)) return t += 4, null;
                                n()
                        }
                        return "$"
                    }, I = function (e) {
                        var t, i;
                        "$" == e && n();
                        if ("string" == typeof e) {
                            if ("@" == (v ? e.charAt(0) : e[0])) return e.slice(1);
                            if ("[" == e) {
                                for (t = []; ; i || (i = !0)) {
                                    e = p();
                                    if ("]" == e) break;
                                    i && ("," == e ? (e = p(), "]" == e && n()) : n());
                                    "," == e && n();
                                    t.push(I(e))
                                }
                                return t
                            }
                            if ("{" == e) {
                                for (t = {}; ; i || (i = !0)) {
                                    e = p();
                                    if ("}" == e) break;
                                    i && ("," == e ? (e = p(), "}" == e && n()) : n());
                                    "," != e && "string" == typeof e && "@" == (v ? e.charAt(0) : e[0]) && ":" == p() || n();
                                    t[e.slice(1)] = I(p())
                                }
                                return t
                            }
                            n()
                        }
                        return e
                    }, k = function (t, i, e) {
                        e = M(t, i, e);
                        e === l ? delete t[i] : t[i] = e
                    }, M = function (n, r, t) {
                        var e = n[r], i;
                        if ("object" == typeof e && e) if ("[object Array]" == a.call(e)) for (i = e.length; i--;) k(e, i, t); else g(e, function (i) {
                            k(e, i, t)
                        });
                        return t.call(n, r, e)
                    };
                f.parse = function (o, e) {
                    var i, r;
                    t = 0;
                    b = "" + o;
                    i = I(p());
                    "$" != p() && n();
                    t = b = null;
                    return e && "[object Function]" == a.call(e) ? M((r = {}, r[""] = i, r), "", e) : i
                }
            }
        }
        f.runInContext = r;
        return f
    }

    var a = "function" == typeof define && define.amd, i = {"function": !0, object: !0},
        o = i[typeof exports] && exports && !exports.nodeType && exports, e = i[typeof window] && window || this,
        t = o && i[typeof module] && module && !module.nodeType && "object" == typeof global && global;
    !t || t.global !== t && t.window !== t && t.self !== t || (e = t);
    if (o && !a) r(e, o); else {
        var c = e.JSON, s = e.JSON3, l = !1, n = r(e, e.JSON3 = {
            noConflict: function () {
                l || (l = !0, e.JSON = c, e.JSON3 = s, c = s = null);
                return n
            }
        });
        e.JSON = {parse: n.parse, stringify: n.stringify}
    }
    a && define(function () {
        return n
    })
}).call(this);