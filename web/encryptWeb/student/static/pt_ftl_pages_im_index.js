I$(26, function () {
    var t = Regular.extend();
    return t
});
I$(7, function (t, e, n, i, s) {
    var r = t.extend({
        init: function () {
            this.supr()
        }, enter: function () {
        }, leave: function () {
        }, update: function () {
        }
    });
    return r
}, 26);
I$(8, '<div class="main" ref=view>\n    \n</div>');
I$(21, function (t, e, n, i) {
    var s = Function.prototype;
    s._$aop = function (t, e) {
        var e = e || n, t = t || n, s = this;
        return function () {
            var n = {args: i.slice.call(arguments, 0)};
            t(n);
            if (!n.stopped) {
                n.value = s.apply(this, n.args);
                e(n)
            }
            return n.value
        }
    };
    s._$bind = function () {
        var t = arguments, e = arguments[0], n = this;
        return function () {
            var s = i.slice.call(t, 1);
            i.push.apply(s, arguments);
            return n.apply(e || null, s)
        }
    };
    s._$bind2 = function () {
        var t = arguments, e = i.shift.call(t), n = this;
        return function () {
            i.push.apply(arguments, t);
            return n.apply(e || null, arguments)
        }
    };
    var s = String.prototype;
    if (!s.trim) s.trim = function () {
        var t = /(?:^\s+)|(?:\s+$)/g;
        return function () {
            return this.replace(t, "")
        }
    }();
    if (!this.console) this.console = {log: n, error: n};
    if (!0) {
        NEJ = this.NEJ || {};
        NEJ.copy = function (t, n) {
            t = t || {};
            n = n || e;
            for (var i in n) if (n.hasOwnProperty(i)) t[i] = n[i];
            return t
        };
        NEJ = NEJ.copy(NEJ, {
            O: e, R: i, F: n, P: function (t) {
                if (!t || !t.length) return null;
                var e = window;
                for (var n = t.split("."), i = n.length, s = "window" == n[0] ? 1 : 0; s < i; e = e[n[s]] = e[n[s]] || {}, s++) ;
                return e
            }
        });
        return NEJ
    }
    return t
});
I$(53, function (t, e, n, i) {
    t.__forIn = function (t, e, n) {
        if (!t || !e) return null;
        var i = Object.keys(t);
        for (var s = 0, r = i.length, a, o; s < r; s++) {
            a = i[s];
            o = e.call(n || null, t[a], a, t);
            if (o) return a
        }
        return null
    };
    t.__forEach = function (t, e, n) {
        t.forEach(e, n)
    };
    t.__col2array = function (t) {
        return i.slice.call(t, 0)
    };
    t.__str2time = function (t) {
        return Date.parse(t)
    };
    return t
});
I$(55, function (t, e, n, i, s) {
    var r = this.navigator.platform, a = this.navigator.userAgent;
    var o = {mac: r, win: r, linux: r, ipad: a, ipod: a, iphone: r, android: a};
    e._$IS = o;
    for (var c in o) o[c] = new RegExp(c, "i").test(o[c]);
    o.ios = o.ipad || o.iphone || o.ipod;
    o.tablet = o.ipad;
    o.desktop = o.mac || o.win || o.linux && !o.android;
    e._$is = function (t) {
        return !!o[t]
    };
    var _ = {
        engine: "unknow",
        release: "unknow",
        browser: "unknow",
        version: "unknow",
        prefix: {css: "", pro: "", clz: ""}
    };
    e._$KERNEL = _;
    if (/msie\s+(.*?);/i.test(a) || /trident\/.+rv:([\d\.]+)/i.test(a)) {
        _.engine = "trident";
        _.browser = "ie";
        _.version = RegExp.$1;
        _.prefix = {css: "ms", pro: "ms", clz: "MS", evt: "MS"};
        var u = {6: "2.0", 7: "3.0", 8: "4.0", 9: "5.0", 10: "6.0", 11: "7.0"};
        _.release = u[document.documentMode] || u[parseInt(_.version)]
    } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(a)) {
        _.engine = "webkit";
        _.release = RegExp.$1 || "";
        _.prefix = {css: "webkit", pro: "webkit", clz: "WebKit"}
    } else if (/rv\:(.*?)\)\s+gecko\//i.test(a)) {
        _.engine = "gecko";
        _.release = RegExp.$1 || "";
        _.browser = "firefox";
        _.prefix = {css: "Moz", pro: "moz", clz: "Moz"};
        if (/firefox\/(.*?)(?=\s|$)/i.test(a)) _.version = RegExp.$1 || ""
    } else if (/presto\/(.*?)\s/i.test(a)) {
        _.engine = "presto";
        _.release = RegExp.$1 || "";
        _.browser = "opera";
        _.prefix = {css: "O", pro: "o", clz: "O"};
        if (/version\/(.*?)(?=\s|$)/i.test(a)) _.version = RegExp.$1 || ""
    }
    if ("unknow" == _.browser) {
        var u = ["chrome", "maxthon", "safari"];
        for (var f = 0, l = u.length, h; f < l; f++) {
            h = "safari" == u[f] ? "version" : u[f];
            if (new RegExp(h + "/(.*?)(?=\\s|$)", "i").test(a)) {
                _.browser = u[f];
                _.version = RegExp.$1.trim();
                break
            }
        }
    }
    e._$SUPPORT = {};
    e._$support = function (t) {
        return !!e._$SUPPORT[t]
    };
    if (!0) t.copy(t.P("nej.p"), e);
    return e
}, 21);
I$(37, function (t, e, n, i, s, r) {
    if ("trident" === e._$KERNEL.engine && e._$KERNEL.release <= "4.0") I$(54, function () {
        t.__forIn = function (t, e, n) {
            if (t && e) {
                var i;
                for (var s in t) if (t.hasOwnProperty(s)) {
                    i = e.call(n, t[s], s, t);
                    if (i) return s
                } else ;
            }
        };
        t.__forEach = function (t, e, n) {
            for (var i = 0, s = t.length; i < s; i++) e.call(n, t[i], i, t)
        };
        t.__col2array = function (t) {
            var e = [];
            if (t && t.length) for (var n = 0, i = t.length; n < i; n++) e.push(t[n]);
            return e
        };
        t.__str2time = function () {
            var t = /-/g;
            return function (e) {
                return Date.parse(e.replace(t, "/").split(".")[0])
            }
        }()
    });
    return t
}, 53, 55);
I$(17, function (t, e, n, i, s, r) {
    var a = function (t, e) {
        try {
            e = e.toLowerCase();
            if (null === t) return "null" == e;
            if (void 0 === t) return "undefined" == e; else return i.toString.call(t).toLowerCase() == "[object " + e + "]"
        } catch (n) {
            return !1
        }
    };
    n._$isFunction = function (t) {
        return a(t, "function")
    };
    n._$isString = function (t) {
        return a(t, "string")
    };
    n._$isNumber = function (t) {
        return a(t, "number")
    };
    n._$isBoolean = function (t) {
        return a(t, "boolean")
    };
    n._$isDate = function (t) {
        return a(t, "date")
    };
    n._$isArray = function (t) {
        return a(t, "array")
    };
    n._$isObject = function (t) {
        return a(t, "object")
    };
    n._$length = function () {
        var t = /[^\x00-\xff]/g;
        return function (e) {
            return ("" + (e || "")).replace(t, "**").length
        }
    }();
    n._$loop = function (t, i, s) {
        if (n._$isObject(t) && n._$isFunction(i)) return e.__forIn.apply(e, arguments); else return null
    };
    n._$indexOf = function (t, e) {
        var i = n._$isFunction(e) ? e : function (t) {
            return t === e
        }, s = n._$forIn(t, i);
        return null != s ? s : -1
    };
    n._$binSearch = function () {
        var t;
        var e = function (n, i, s) {
            if (i > s) return -1;
            var r = Math.ceil((i + s) / 2), a = t(n[r], r, n);
            if (0 == a) return r;
            if (a < 0) return e(n, i, r - 1); else return e(n, r + 1, s)
        };
        return function (n, i) {
            t = i || s;
            return e(n, 0, n.length - 1)
        }
    }();
    n._$reverseEach = function (t, e, i) {
        if (t && t.length && n._$isFunction(e)) for (var s = t.length - 1; s >= 0; s--) if (e.call(i, t[s], s, t)) return s;
        return null
    };
    n._$forEach = function (t, i, s) {
        if (t && t.length && n._$isFunction(i)) if (!t.forEach) n._$forIn.apply(n, arguments); else e.__forEach(t, i, s)
    };
    n._$forIn = function (t, e, i) {
        if (!t || !n._$isFunction(e)) return null;
        if (n._$isNumber(t.length)) {
            for (var s = 0, r = t.length; s < r; s++) if (e.call(i, t[s], s, t)) return s
        } else if (n._$isObject(t)) return n._$loop(t, e, i);
        return null
    };
    n._$encode = function (t, e) {
        e = "" + e;
        if (!t || !e) return e || ""; else return e.replace(t.r, function (e) {
            var n = t[!t.i ? e.toLowerCase() : e];
            return null != n ? n : e
        })
    };
    n._$escape = function () {
        var t = /<br\/?>$/, e = {
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
        return function (i) {
            i = n._$encode(e, i);
            return i.replace(t, "<br/><br/>")
        }
    }();
    n._$unescape = function () {
        var t = {
            r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&nbsp;": " ",
            "&#39;": "'",
            "&quot;": '"',
            "<br/>": "\n"
        };
        return function (e) {
            return n._$encode(t, e)
        }
    }();
    n._$format = function () {
        var t = {i: !0, r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g}, e = ["上午", "下午"],
            i = ["A.M.", "P.M."], s = ["日", "一", "二", "三", "四", "五", "六"],
            r = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
            a = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var o = function (t) {
            t = parseInt(t) || 0;
            return (t < 10 ? "0" : "") + t
        };
        var c = function (t) {
            return t < 12 ? 0 : 1
        };
        return function (_, u, f) {
            if (!_ || !u) return "";
            _ = n._$var2date(_);
            t.yyyy = _.getFullYear();
            t.yy = ("" + t.yyyy).substr(2);
            t.M = _.getMonth() + 1;
            t.MM = o(t.M);
            t.eM = a[t.M - 1];
            t.cM = r[t.M - 1];
            t.d = _.getDate();
            t.dd = o(t.d);
            t.H = _.getHours();
            t.HH = o(t.H);
            t.m = _.getMinutes();
            t.mm = o(t.m);
            t.s = _.getSeconds();
            t.ss = o(t.s);
            t.ms = _.getMilliseconds();
            t.w = s[_.getDay()];
            var l = c(t.H);
            t.ct = e[l];
            t.et = i[l];
            if (f) t.H = t.H % 12;
            return n._$encode(t, u)
        }
    }();
    n._$var2date = function (t) {
        var i = t;
        if (n._$isString(t)) i = new Date(e.__str2time(t));
        if (!n._$isDate(i)) i = new Date(t);
        return i
    };
    n._$fixed = function (t, e) {
        return parseFloat(new Number(t).toFixed(e))
    };
    n._$absolute = function () {
        var t = /([^\/:])\/.*$/, e = /\/[^\/]+$/, n = /[#\?]/, i = location.href.split(/[?#]/)[0],
            s = document.createElement("a");
        var r = function (t) {
            t = t || "";
            return t.indexOf("://") > 0 || 0 === t.indexOf("//")
        };
        var a = function (t) {
            return (t || "").split(n)[0].replace(e, "/")
        };
        var o = function (e, n) {
            if (0 == e.indexOf("/")) return n.replace(t, "$1") + e; else return a(n) + e
        };
        i = a(i);
        return function (t, e) {
            t = (t || "").trim();
            if (!r(e)) e = i;
            if (!t) return e;
            if (r(t)) return t;
            t = o(t, e);
            s.href = t;
            t = s.href;
            return r(t) ? t : s.getAttribute("href", 4)
        }
    }();
    n._$url2origin = function () {
        var t = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (e) {
            if (t.test(e || "")) return RegExp.$1.toLowerCase(); else return ""
        }
    }();
    n._$string2object = function (t, e) {
        var i = {};
        n._$forEach((t || "").split(e), function (t) {
            var e = t.split("=");
            if (e && e.length) {
                var n = e.shift();
                if (n) i[decodeURIComponent(n)] = decodeURIComponent(e.join("="))
            }
        });
        return i
    };
    n._$object2string = function (t, e, i) {
        if (!t) return "";
        var s = [];
        n._$loop(t, function (t, e) {
            if (!n._$isFunction(t)) {
                if (n._$isDate(t)) t = t.getTime(); else if (n._$isArray(t)) t = t.join(","); else if (n._$isObject(t)) t = JSON.stringify(t);
                if (i) t = encodeURIComponent(t);
                s.push(encodeURIComponent(e) + "=" + t)
            }
        });
        return s.join(e || ",")
    };
    n._$query2object = function (t) {
        return n._$string2object(t, "&")
    };
    n._$object2query = function (t) {
        return n._$object2string(t, "&", !0)
    };
    n._$object2array = function (t) {
        return e.__col2array(t)
    };
    n._$array2object = function (t, e) {
        var i = {};
        n._$forEach(t, function (t) {
            var n = t;
            if (e) n = e(t);
            if (null != n) i[n] = t
        });
        return i
    };
    n._$number2string = function (t, e) {
        var n = ("" + t).length, i = Math.max(1, parseInt(e) || 0), s = i - n;
        if (s > 0) t = new Array(s + 1).join("0") + t;
        return "" + t
    };
    n._$safeDelete = function (t, e) {
        if (!n._$isArray(e)) try {
            delete t[e]
        } catch (i) {
            t[e] = void 0
        } else n._$forEach(e, function (e) {
            n._$safeDelete(t, e)
        })
    };
    n._$randString = function () {
        var t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        return function (e) {
            e = e || 10;
            var n = [];
            for (var i = 0, s; i < e; ++i) {
                s = Math.floor(Math.random() * t.length);
                n.push(t.charAt(s))
            }
            return n.join("")
        }
    }();
    n._$randNumber = function (t, e) {
        return Math.floor(Math.random() * (e - t) + t)
    };
    n._$randNumberString = function (t) {
        t = Math.max(0, Math.min(t || 8, 30));
        var e = Math.pow(10, t - 1), i = 10 * e;
        return n._$randNumber(e, i).toString()
    };
    n._$uniqueID = function () {
        var t = +new Date;
        return function () {
            return "" + t++
        }
    }();
    n._$query = function (t, e) {
        t = t || i;
        var n = (e || "").split(".");
        for (var s = 0, r = n.length; s < r; s++) {
            t = t[n[s]];
            if (!t) break
        }
        return t
    };
    n._$merge = function () {
        var t = arguments.length - 1, e = arguments[t];
        if (n._$isFunction(e)) t -= 1; else e = s;
        var i = arguments[0] || {};
        for (var r = 1; r <= t; r++) n._$loop(arguments[r], function (t, n) {
            if (!e(t, n)) i[n] = t
        });
        return i
    };
    n._$fetch = function (t, e) {
        if (e) n._$loop(t, function (t, n, i) {
            var s = e[n];
            if (null != s) i[n] = s
        });
        return t
    };
    n._$hasProperty = function (t) {
        if (!t) return !1;
        if (null != t.length) return t.length > 0;
        var e = 0;
        n._$loop(t, function () {
            e++;
            return e > 0
        });
        return e > 0
    };
    if (!0) {
        t.Q = n._$query;
        t.X = n._$merge;
        t.EX = n._$fetch;
        t.copy(this.NEJ, t);
        t.copy(t.P("nej.u"), n)
    }
    return n
}, 21, 37);
I$(16, function (t, e, n, i, s) {
    var r = 0;
    e._$studyIMDebugLog = function (t, e) {
        var n = t + "_" + r;
        var i = "test" == window.env || "dev" == window.env;
        if (!window.imdebugObj) window.imdebugObj = {};
        window.imdebugObj[n] = e;
        if (i) console && console.log(n, e);
        r++
    };
    e._$getFromAccid = function () {
        return window.nimConfig.account
    };
    e._$getAvatar = function (t) {
        if (t && t.avatar) return t.avatar; else return window.imageUrlMap.imUserDefaultHeadImg
    };
    e._$getSessionIdByUserId = function (t, e) {
        var n;
        if (!e || "p2p" == e) n = "p2p-" + t; else n = "team-" + t;
        return n
    };
    Regular.filter("getAvatar", function (t, n) {
        return e._$getAvatar(t)
    });
    return e
}, 17);
I$(18, function (t, e, n, i, s, r) {
    n._$klass = function () {
        var t = function () {
            return "[object Function]" !== i.toString.call(arguments[0])
        };
        var n = function (t, n) {
            for (; n;) {
                var i = n.prototype, s = e.__forIn(i, function (e) {
                    return t === e
                });
                if (null != s) return {name: s, klass: n};
                n = n._$super
            }
        };
        return function () {
            var i = function () {
                return this.__init.apply(this, arguments)
            };
            i.prototype.__init = s;
            i._$extend = function (i, s) {
                if (!t(i)) {
                    var r = this;
                    if (s !== !1) e.__forIn(i, function (e, n) {
                        if (!t(e)) r[n] = e
                    });
                    this._$super = i;
                    var a = function () {
                    };
                    a.prototype = i.prototype;
                    this.prototype = new a;
                    this.prototype.constructor = this;
                    var o = [], c = {};
                    var _ = function (t, e) {
                        var i = n(t, e);
                        if (i) {
                            if (o[o.length - 1] != i.name) o.push(i.name);
                            c[i.name] = i.klass._$super;
                            return i.name
                        }
                    };
                    this.prototype.__super = function () {
                        var t = o[o.length - 1], e = arguments.callee.caller;
                        if (!t) t = _(e, this.constructor); else {
                            var n = c[t].prototype;
                            if (!n.hasOwnProperty(e) || e != n[t]) t = _(e, this.constructor); else c[t] = c[t]._$super
                        }
                        var i = c[t].prototype[t].apply(this, arguments);
                        if (t == o[o.length - 1]) {
                            o.pop();
                            delete c[t]
                        }
                        return i
                    };
                    if (!0) {
                        var u = this.prototype;
                        u.__supInit = u.__super;
                        u.__supReset = u.__super;
                        u.__supDestroy = u.__super;
                        u.__supInitNode = u.__super;
                        u.__supDoBuild = u.__super;
                        u.__supOnShow = u.__super;
                        u.__supOnHide = u.__super;
                        u.__supOnRefresh = u.__super;
                        this._$supro = i.prototype
                    }
                    return this.prototype
                }
            };
            return i
        }
    }();
    if (!0) {
        t.C = n._$klass;
        t.copy(this.NEJ, t)
    }
    return n
}, 21, 37);
I$(91, function (t, e, n, i, s, r) {
    var a = {};
    n.__url2host = function () {
        var t = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (e) {
            e = e || "";
            if (t.test(e)) return RegExp.$1; else return location.protocol + "//" + location.host
        }
    }();
    n.__set = function (t, e) {
        a[t] = e
    };
    n.__get = function (t) {
        return a[t]
    };
    var o = function () {
        var t = {
            portrait: {name: "portrait", dft: "portrait/"},
            "ajax.swf": {name: "ajax", dft: "nej_proxy_flash.swf"},
            "chart.swf": {name: "chart", dft: "nej_flex_chart.swf"},
            "audio.swf": {name: "audio", dft: "nej_player_audio.swf"},
            "video.swf": {name: "video", dft: "nej_player_video.swf"},
            "clipboard.swf": {name: "clipboard", dft: "nej_clipboard.swf"},
            "upload.image.swf": {name: "uploadimage", dft: "nej_upload_image.swf"}
        };
        var s = function (t) {
            var e = {};
            if (!t || !t.length) return e;
            for (var i = 0, s = t.length, r; i < s; i++) {
                r = t[i];
                if (r.indexOf("://") > 0) e[n.__url2host(r)] = r
            }
            return e
        };
        return function (r) {
            n.__set("root", r.root || "/res/");
            var a = n.__get("root");
            e._$loop(t, function (t, e, i) {
                n.__set(e, r[t.name] || a + t.dft)
            });
            var o = r.p_csrf;
            if (o === !0) o = {cookie: "AntiCSRF", param: "AntiCSRF"};
            o = o || i;
            n.__set("csrf", {param: o.param || "", cookie: o.cookie || ""});
            n.__set("frames", s(r.p_frame));
            n.__set("flashs", s(r.p_flash))
        }
    }();
    o(this.NEJ_CONF || i);
    return n
}, 21, 17);
I$(81, function (t, e, n, i, s, r) {
    if ("trident" === e._$KERNEL.engine) I$(92, function () {
        t.__set("storage.swf", (this.NEJ_CONF || i).storage || t.__get("root") + "nej_storage.swf")
    });
    if ("trident" === e._$KERNEL.engine && e._$KERNEL.release <= "3.0") I$(93, function () {
        t.__set("blank.png", (this.NEJ_CONF || i).blank || t.__get("root") + "nej_blank.gif")
    });
    return t
}, 91, 55);
I$(56, function (t, e, n, i, s, r) {
    n._$getFrameProxy = function (t) {
        var i = e.__url2host(t);
        return n._$get("frames")[i] || i + "/res/nej_proxy_frame.html"
    };
    n._$getFlashProxy = function (t) {
        return n._$get("flashs")[e.__url2host(t)]
    };
    n._$get = function (t) {
        return e.__get(t)
    };
    if (!0) t.copy(t.P("nej.c"), n);
    return n
}, 21, 81);
I$(38, function (t, e, n, i, s, r) {
    var a = +new Date;
    n._$CODE_NOTFUND = 1e4 - a;
    n._$CODE_NOTASGN = 10001 - a;
    n._$CODE_NOTSPOT = 10002 - a;
    n._$CODE_TIMEOUT = 10003 - a;
    n._$CODE_ERREVAL = 10004 - a;
    n._$CODE_ERRCABK = 10005 - a;
    n._$CODE_ERRSERV = 10006 - a;
    n._$CODE_ERRABRT = 10007 - a;
    n._$HEAD_CT = "Content-Type";
    n._$HEAD_CT_PLAN = "text/plain";
    n._$HEAD_CT_FILE = "multipart/form-data";
    n._$HEAD_CT_FORM = "application/x-www-form-urlencoded";
    n._$BLANK_IMAGE = e._$get("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
    if (!0) t.copy(t.P("nej.g"), n);
    return n
}, 21, 56);
I$(39, function (t, e) {
    var n = {};
    e._$merge = function (e) {
        t._$merge(n, e)
    };
    e._$dump = function () {
        return n
    };
    e._$clear = function () {
        n = {}
    };
    return e
}, 17);
I$(57, function (t, e, n, i, s, r) {
    n.__getElementById = function (t, e) {
        if (t.getElementById) return t.getElementById("" + e);
        try {
            return t.querySelector("#" + e)
        } catch (n) {
            return null
        }
    };
    n.__getChildren = function (e) {
        return t._$object2array(e.children)
    };
    n.__getElementsByClassName = function (e, n) {
        return t._$object2array(e.getElementsByClassName(n))
    };
    n.__nextSibling = function (t) {
        return t.nextElementSibling
    };
    n.__previousSibling = function (t) {
        return t.previousElementSibling
    };
    n.__dataset = function (t, e, n) {
        t.dataset = t.dataset || {};
        if (void 0 !== n) t.dataset[e] = n;
        return t.dataset[e]
    };
    n.__getAttribute = function (t, e) {
        if (t.getAttribute) return t.getAttribute(e)
    };
    n.__serializeDOM2XML = function (t) {
        return (new XMLSerializer).serializeToString(t) || ""
    };
    n.__parseDOMFromXML = function (t) {
        var e = (new DOMParser).parseFromString(t, "text/xml").documentElement;
        return "parsererror" == e.nodeName ? null : e
    };
    n.__fullScreen = function () {
    };
    n.__mask = function () {
    };
    n.__unmask = function () {
    };
    var a = e._$SUPPORT, o = e._$KERNEL.prefix;
    n.__isMatchedName = function () {
        var t = /^([a-z]+?)[A-Z]/;
        return function (e, n) {
            return !!(n[e] || t.test(e) && n[RegExp.$1])
        }
    }();
    n.__isNeedPrefixed = function () {
        var e = t._$array2object(["animation", "transform", "transition", "appearance", "userSelect", "box", "flex", "column"]);
        return function (t) {
            return n.__isMatchedName(t, e)
        }
    }();
    n.__fmtStyleName = function () {
        var t = /-([a-z])/g;
        return function (e) {
            e = e || "";
            return e.replace(t, function (t, e) {
                return e.toUpperCase()
            })
        }
    }();
    n.__getStyleName = function () {
        var t = /^[a-z]/, e = o.css || "";
        return function (i) {
            i = n.__fmtStyleName(i);
            if (!n.__isNeedPrefixed(i)) return i; else return e + i.replace(t, function (t) {
                return t.toUpperCase()
            })
        }
    }();
    n.__getStyleValue = function (t, e) {
        var i = window.getComputedStyle(t, null);
        return i[n.__getStyleName(e)] || ""
    };
    n.__setStyleValue = function (t, e, i) {
        t.style[n.__getStyleName(e)] = i
    };
    n.__getCSSMatrix = function () {
        var e = /\((.*?)\)/, n = /\s*,\s*/, i = ["CSSMatrix", o.clz + "CSSMatrix"],
            s = ["m11", "m12", "m21", "m22", "m41", "m42"];
        var r = function (i) {
            var r = {};
            if (e.test(i || "")) t._$forEach(RegExp.$1.split(n), function (t, e) {
                r[s[e]] = t
            });
            return r
        };
        return function (e) {
            var n;
            t._$forIn(i, function (t) {
                if (this[t]) {
                    n = new this[t](e || "");
                    return !0
                }
            });
            return !n ? r(e) : n
        }
    }();
    n.__injectCSSText = function (t, e) {
        t.textContent = e
    };
    n.__processCSSText = function () {
        var e = /\$<(.*?)>/gi, s = /\{(.*?)\}/g, r = "-" + o.css.toLowerCase() + "-", c = {
            scale: "scale({x|1},{y|1})",
            rotate: "rotate({a})",
            translate: "translate({x},{y})",
            matrix: "matrix({m11},{m12},{m21},{m22},{m41},{m42})"
        }, _ = {
            scale: "scale3d({x|1},{y|1},{z|1})",
            rotate: "rotate3d({x},{y},{z},{a})",
            translate: "translate3d({x},{y},{z})",
            matrix: "matrix3d({m11},{m12},{m13},{m14},{m21},{m22},{m23},{m24},{m31},{m32},{m33|1},{m34},{m41},{m42},{m43},{m44|1})"
        };
        var u = function (t, e) {
            e = e || i;
            return t.replace(s, function (t, n) {
                var i = n.split("|");
                return e[i[0]] || i[1] || "0"
            })
        };
        n.__processTransformValue = function (t, e) {
            var n = (!a.css3d ? c : _)[t.trim()];
            if (n) return u(n, e); else return ""
        };
        return function (i) {
            if (!i.replace) return i; else return i.replace(e, function (e, i) {
                if ("vendor" === i) return r;
                var s = (i || "").split("|");
                return n.__processTransformValue(s[0], t._$query2object(s[1])) || e
            })
        }
    }();
    n.__appendCSSText = function (t, e) {
        var n = t.sheet, i = n.cssRules.length;
        n.insertRule(e, i);
        return n.cssRules[i]
    };
    n.__getClassList = function () {
        var t = /\s+/;
        return function (e) {
            e = (e || "").trim();
            return e ? e.split(t) : null
        }
    }();
    n.__processClassName = function (e, i, s) {
        if ("replace" != i) t._$forEach(n.__getClassList(s), function (t) {
            e.classList[i](t)
        }); else {
            n.__processClassName(e, "remove", s);
            n.__processClassName(e, "add", arguments[3])
        }
    };
    n.__hasClassName = function (e, i) {
        var s = e.classList;
        if (!s || !s.length) return !1; else return t._$indexOf(n.__getClassList(i), function (t) {
            return s.contains(t)
        }) >= 0
    };
    !function () {
        if (!a.css3d) {
            var t = n.__getCSSMatrix();
            a.css3d = !!t && null != t.m41
        }
    }();
    return n
}, 17, 55);
I$(40, function (t, e, n, i, s, r, a) {
    if ("trident" === e._$KERNEL.engine) I$(58, function () {
        t.__getChildren = t.__getChildren._$aop(function (t) {
            var e = t.args[0];
            if (!e.children) {
                t.stopped = !0;
                var i = [];
                n._$forEach(e.childNodes, function (t) {
                    if (1 == t.nodeType) i.push(t)
                });
                t.value = i
            }
        })
    });
    if ("trident" === e._$KERNEL.engine && e._$KERNEL.release <= "6.0") I$(59, function () {
        t.__dataset = function () {
            var t = {}, e = "data-", i = /\-(.{1})/gi;
            var s = function (s) {
                var r = s.id;
                if (!t[r]) {
                    var a = {};
                    n._$forEach(s.attributes, function (t) {
                        var n = t.nodeName;
                        if (0 == n.indexOf(e)) {
                            n = n.replace(e, "").replace(i, function (t, e) {
                                return e.toUpperCase()
                            });
                            a[n] = t.nodeValue || ""
                        }
                    });
                    t[r] = a
                }
            };
            return function (e, n, i) {
                s(e);
                var r = t[e.id];
                if (void 0 !== i) r[n] = i;
                return r[n]
            }
        }()
    });
    if ("trident" === e._$KERNEL.engine && e._$KERNEL.release <= "5.0") I$(60, function () {
        try {
            document.execCommand("BackgroundImageCache", !1, !0)
        } catch (e) {
        }
        t.__injectCSSText = function () {
            var e = 30;
            return t.__injectCSSText._$aop(function (t) {
                var n = t.args[0];
                if (n.styleSheet) {
                    t.stopped = !0;
                    var i = t.args[1];
                    var s = document.styleSheets;
                    if (s.length > e) {
                        n = s[e];
                        i = n.cssText + i
                    } else n = n.styleSheet;
                    n.cssText = i
                }
            })
        }();
        t.__getClassRegExp = function () {
            var t = /\s+/g;
            return function (e) {
                e = (e || "").trim().replace(t, "|");
                return !e ? null : new RegExp("(\\s|^)(?:" + e + ")(?=\\s|$)", "g")
            }
        }();
        t.__processClassName = function (e, n, i) {
            i = i || "";
            var s = e.className || "", r = t.__getClassRegExp(i + " " + (arguments[3] || ""));
            var a = s;
            if (r) a = a.replace(r, "");
            switch (n) {
                case"remove":
                    i = "";
                    break;
                case"replace":
                    i = arguments[3] || ""
            }
            a = (a + " " + i).trim();
            if (s != a) e.className = a
        };
        t.__hasClassName = function (e, n) {
            var i = t.__getClassRegExp(n);
            if (i) return i.test(e.className || ""); else return !1
        }
    });
    if ("trident" === e._$KERNEL.engine && e._$KERNEL.release <= "4.0") I$(61, function () {
        t.__getElementsByClassName = function (t, e) {
            var i = [], s = new RegExp("(\\s|^)(?:" + e.replace(/\s+/g, "|") + ")(?=\\s|$)");
            n._$forEach(t.getElementsByTagName("*"), function (t) {
                if (s.test(t.className)) i.push(t)
            });
            return i
        };
        t.__nextSibling = function (t) {
            for (; t = t.nextSibling;) if (1 == t.nodeType) return t
        };
        t.__previousSibling = function (t) {
            for (; t = t.previousSibling;) if (1 == t.nodeType) return t
        };
        t.__serializeDOM2XML = function (t) {
            return "xml" in t ? t.xml : t.outerHTML
        };
        t.__parseDOMFromXML = function () {
            var t = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"];
            var e = function () {
                try {
                    for (var e = 0, n = t.length; e < n; e++) return new ActiveXObject(t[e])
                } catch (i) {
                    return null
                }
            };
            return function (t) {
                var n = e();
                if (n && n.loadXML(t) && !n.parseError.errorCode) return n.documentElement; else return null
            }
        }();
        t.__getStyleValue = function () {
            var e = /opacity\s*=\s*([\d]+)/i;
            var n = {
                opacity: function (t) {
                    var n = 0;
                    if (e.test(t.filter || "")) n = parseFloat(RegExp.$1) / 100;
                    return n
                }
            };
            return function (e, i) {
                var s = e.currentStyle, r = n[i];
                if (r) return r(s); else return s[t.__getStyleName(i)] || ""
            }
        }();
        t.__setStyleValue = function () {
            var e = {
                opacity: function (t, e) {
                    t.style.filter = "alpha(opacity=" + 100 * e + ")"
                }
            };
            return function (n, i, s) {
                var r = e[i];
                if (r) r(n, s); else n.style[t.__getStyleName(i)] = s
            }
        }();
        t.__appendCSSText = function (t, e) {
            var n = t.styleSheet, i = n.rules.length, s = e.split(/[\{\}]/);
            n.addRule(s[0], s[1], i);
            return n.rules[i]
        }
    });
    if ("trident" === e._$KERNEL.engine && e._$KERNEL.release <= "3.0") I$(62, function () {
        t.__getAttribute = t.__getAttribute._$aop(null, function (t) {
            var e = t.args;
            if ("maxlength" == e[1] && 2147483647 == t.value) t.value = null
        })
    });
    if ("trident" === e._$KERNEL.engine && e._$KERNEL.release <= "2.0") I$(63, function () {
        t.__fullScreen = function (t, e) {
            var n = t.style;
            n.width = e.scrollWidth + "px";
            n.height = e.scrollHeight + "px"
        };
        t.__mask = function () {
            var e = {};
            t.__unmask = function (t) {
                var n = t.id, i = e[n];
                if (i) {
                    delete e[n];
                    i.parentNode.removeChild(i)
                }
            };
            return function (t) {
                var n = t.id, i = e[n];
                if (!i) {
                    i = document.createElement("iframe");
                    i.style.position = "absolute";
                    e[n] = i
                }
                var s = i.style, r = t.style;
                s.top = (parseInt(r.top) || 0) + "px";
                s.left = (parseInt(r.left) || 0) + "px";
                s.width = t.offsetWidth + "px";
                s.height = t.offsetHeight + "px";
                t.insertAdjacentElement("beforeBegin", i);
                return i
            }
        }()
    });
    if ("gecko" === e._$KERNEL.engine) I$(64, function () {
        if (!e._$SUPPORT.css3d) e._$SUPPORT.css3d = "MozPerspective" in document.body.style;
        if (!("insertAdjacentElement" in document.body)) HTMLElement.prototype.insertAdjacentElement = function (t, e) {
            if (t && e) switch (t) {
                case"beforeEnd":
                    this.appendChild(e);
                    return;
                case"beforeBegin":
                    this.parentNode.insertBefore(e, this);
                    return;
                case"afterBegin":
                    !this.firstChild ? this.appendChild(e) : this.insertBefore(e, this.firstChild);
                    return;
                case"afterEnd":
                    !this.nextSibling ? this.parentNode.appendChild(e) : this.parentNode.insertBefore(e, this.nextSibling);
                    return
            }
        };
        if (!("innerText" in document.body)) {
            HTMLElement.prototype["__defineGetter__"]("innerText", function () {
                return this.textContent
            });
            HTMLElement.prototype["__defineSetter__"]("innerText", function (t) {
                this.textContent = t
            })
        }
    });
    return t
}, 57, 55, 17);
I$(20, function (t, e, n, i, s, r, a, o, c, _) {
    var u = {}, f, l = {}, h = {}, d = document.createDocumentFragment();
    if (!document.head) document.head = document.getElementsByTagName("head")[0] || document.body;
    a.dump = function () {
        return {pool: l, dirty: h, fragment: d}
    };
    a._$id = u._$id = function (t) {
        t = a._$get(t);
        if (t) {
            var e = t.id ? t.id : "auto-id-" + n._$uniqueID();
            if (!("id" in t)) l[e] = t;
            t.id = e;
            if (!a._$get(e)) h[e] = t;
            return e
        }
    };
    a._$get = function (t) {
        var e = l["" + t];
        if (e) return e;
        if (!n._$isString(t) && !n._$isNumber(t)) return t;
        var e = document.getElementById(t);
        if (!e) e = r.__getElementById(d, t);
        if (e) delete h[t];
        return e || h[t]
    };
    a._$getChildren = u._$getChildren = function (t, e) {
        t = a._$get(t);
        if (!t) return null;
        var i = r.__getChildren(t);
        if (e) n._$reverseEach(i, function (t, n, i) {
            if (!a._$hasClassName(t, e)) i.splice(n, 1)
        });
        return i
    };
    a._$getParent = function () {
        var t;
        var e = function (e, n) {
            var i = e.split(":");
            if (i.length > 1) {
                if (!t) t = {
                    a: a._$attr, d: a._$dataset, c: a._$hasClassName, t: function (t, e) {
                        return (t.tagName || "").toLowerCase() === e
                    }
                };
                var s = t[i[0]];
                if (s) return !!s(n, i[1]);
                e = i[1]
            }
            return !!a._$attr(n, e) || !!a._$dataset(n, e) || a._$hasClassName(n, e)
        };
        return function (t, i) {
            t = a._$get(t);
            if (t) {
                if (!i) return t;
                if (n._$isString(i)) i = e._$bind(null, i);
                if (n._$isFunction(i)) {
                    for (; t;) {
                        if (i(t)) return t;
                        t = t.parentNode
                    }
                    return null
                }
                return t
            }
        }
    }();
    a._$getByClassName = u._$getByClassName = function (t, e) {
        t = a._$get(t);
        return !t ? null : r.__getElementsByClassName(t, e.trim())
    };
    a._$getSibling = u._$getSibling = function () {
        var t = function () {
            return !0
        };
        return function (e, i) {
            e = a._$get(e);
            if (!e) return null;
            var s = {backward: !1, filter: t};
            if (n._$isFunction(i)) s.filter = i; else s = n._$fetch(s, i);
            var o = s.backward ? r.__previousSibling : r.__nextSibling;
            for (; (e = o(e)) && !s.filter(e);) ;
            return e
        }
    }();
    a._$getScrollViewPort = function (t) {
        t = a._$get(t);
        if (t) {
            t = t.parentNode;
            for (; t && !(t.scrollHeight > t.clientHeight);) t = t.parentNode;
            if (t) return t
        }
        var e = document.body.scrollHeight, n = document.documentElement.scrollHeight;
        return n >= e ? document.documentElement : document.body
    };
    a._$getPageBox = function () {
        var t = function (t) {
            var e = 0;
            n._$forEach(t, function (t) {
                if (t) if (!e) e = t; else e = Math.min(e, t)
            });
            return e
        };
        var e = [{
            main: "scroll", sub: ["Top", "Left"], func: function (t, e, n) {
                return Math.max(e["scroll" + t], n["scroll" + t])
            }
        }, {
            main: "client", sub: ["Width", "Height"], func: function (e, n, i) {
                return t([n["client" + e], n["offset" + e], i["client" + e], i["offset" + e]])
            }
        }, {
            main: "scroll", sub: ["Width", "Height"], func: function (t, e, n, i) {
                return Math.max(i["client" + t], e["scroll" + t], n["scroll" + t])
            }
        }];
        return function (t) {
            var i = {}, s = t || document, r = s.body, a = s.documentElement;
            n._$forEach(e, function (t) {
                var e = t.main;
                n._$forEach(t.sub, function (n) {
                    i[e + n] = t.func(n, r, a, i)
                })
            });
            return i
        }
    }();
    a._$getMaxBox = function (t, e) {
        var i = n._$merge({}, t), s = e.width / e.height, r = t.width / t.height;
        if (s > r && t.height > e.height) {
            i.height = e.height;
            i.width = i.height * r
        }
        if (s < r && t.width > e.width) {
            i.width = e.width;
            i.height = i.width / r
        }
        return i
    };
    a._$scrollTo = u._$scrollTo = function (t) {
        var e = a._$offset(t);
        window.scrollTo(e.x, e.y)
    };
    a._$align = function () {
        var t = /\s+/;
        var e = {
            left: function () {
                return 0
            }, center: function (t, e) {
                return (t.width - e.width) / 2
            }, right: function (t, e) {
                return t.width - e.width
            }, top: function () {
                return 0
            }, middle: function (t, e) {
                return (t.height - e.height) / 2
            }, bottom: function (t, e) {
                return t.height - e.height
            }
        };
        return function (n, i, s) {
            var r = {}, a = (s || "").split(t), o = e[a[1]] || e.middle, c = e[a[0]] || e.center;
            r.top = o(n, i);
            r.left = c(n, i);
            return r
        }
    }();
    a._$offset = u._$offset = function () {
        var t = function (t) {
            return t == document.body || t == document.documentElement
        };
        return function (e, n) {
            e = a._$get(e);
            if (!e) return null;
            n = a._$get(n) || null;
            var i = e, s = {x: 0, y: 0}, r, o, c;
            for (; i && i != n;) {
                r = t(i) || i == e;
                o = r ? 0 : i.scrollLeft;
                c = parseInt(a._$getStyle(i, "borderLeftWidth")) || 0;
                s.x += i.offsetLeft + c - o;
                o = r ? 0 : i.scrollTop;
                c = parseInt(a._$getStyle(i, "borderTopWidth")) || 0;
                s.y += i.offsetTop + c - o;
                i = i.offsetParent
            }
            return s
        }
    }();
    a._$fullScreen = u._$fullScreen = function (t) {
        t = a._$get(t);
        if (t) r.__fullScreen(t, a._$getPageBox())
    };
    a._$mask = u._$mask = function (t) {
        t = a._$get(t);
        if (t) {
            a._$id(t);
            return r.__mask(t)
        }
        return null
    };
    a._$unmask = u._$unmask = function (t) {
        t = a._$get(t);
        if (t) {
            a._$id(t);
            return r.__unmask(t)
        }
        return null
    };
    a._$create = function () {
        var t = {
            a: {href: "#", hideFocus: !0},
            style: {type: "text/css"},
            link: {type: "text/css", rel: "stylesheet"},
            iframe: {frameBorder: 0},
            script: {defer: !0, type: "text/javascript"}
        };
        return function (e, i, s) {
            var r = document.createElement(e), o = t[e.toLowerCase()];
            n._$merge(r, o);
            if (i) r.className = i;
            s = a._$get(s);
            if (s) s.appendChild(r); else if (!o) d.appendChild(r);
            return r
        }
    }();
    a._$createXFrame = function () {
        var t = function () {
            if (location.hostname == document.domain) return "about:blank"; else return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();'
        };
        var e = function (t) {
            t = t.trim();
            if (!t) return a._$create("iframe");
            var e;
            try {
                e = document.createElement('<iframe name="' + t + '"></iframe>');
                e.frameBorder = 0
            } catch (n) {
                e = a._$create("iframe");
                e.name = t
            }
            return e
        };
        return function (s) {
            s = s || o;
            var r = e(s.name || "");
            if (!s.visible) r.style.display = "none";
            if (n._$isFunction(s.onload)) i._$addEvent(r, "load", function (t) {
                if (r.src) {
                    i._$clearEvent(r, "load");
                    s.onload(t)
                }
            });
            var c = s.parent;
            if (n._$isFunction(c)) try {
                c(r)
            } catch (_) {
            } else (a._$get(c) || document.body).appendChild(r);
            var u = s.src || t();
            window.setTimeout(function () {
                r.src = u
            }, 0);
            return r
        }
    }();
    a._$remove = u._$remove = function () {
        var t = {
            img: function (t) {
                t.src = e._$BLANK_IMAGE
            }, iframe: function (t) {
                t.src = "about:blank"
            }
        };
        var s = function (e, i) {
            if (i) {
                if (e.getElementsByTagName) n._$forEach(e.getElementsByTagName(i), s)
            } else {
                var r = (e.tagName || "").toLowerCase(), a = t[r];
                if (a) a(e)
            }
        };
        return function (t) {
            t = a._$get(t);
            if (t) {
                if (!arguments[1]) i._$clearEvent(t);
                s(t);
                s(t, "img");
                s(t, "iframe");
                if (t.parentNode) t.parentNode.removeChild(t)
            }
        }
    }();
    a._$removeByEC = u._$removeByEC = function (t) {
        t = a._$get(t);
        if (t) try {
            d.appendChild(t)
        } catch (e) {
            console.error(e)
        }
    };
    a._$clearChildren = u._$clearChildren = function (t) {
        t = a._$get(t);
        if (t) n._$reverseEach(t.childNodes, function (t) {
            a._$remove(t)
        })
    };
    a._$wrapInline = u._$wrapInline = function () {
        var t, e = /\s+/;
        var n = function () {
            if (!t) {
                t = a._$pushCSSText(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
                a._$dumpCSSText()
            }
        };
        return function (i, s) {
            i = a._$get(i);
            if (!i) return null;
            n();
            s = s || o;
            var r = i.parentNode;
            if (!a._$hasClassName(r, t)) {
                r = a._$create("span", t);
                i.insertAdjacentElement("beforeBegin", r);
                r.appendChild(i)
            }
            var c = s.nid || "", _ = a._$getByClassName(r, c || t + "-show")[0];
            if (!_) {
                var u = ((s.clazz || "") + " " + c).trim();
                u = t + "-show" + (!u ? "" : " ") + u;
                _ = a._$create(s.tag || "span", u);
                r.appendChild(_)
            }
            var u = s.clazz;
            if (u) {
                u = (u || "").trim().split(e)[0] + "-parent";
                a._$addClassName(r, u)
            }
            return _
        }
    }();
    a._$dataset = u._$dataset = function (t, e, i) {
        var s = a._$id(t);
        if (!s) return null;
        if (n._$isString(e)) return r.__dataset(a._$get(t), e, i);
        if (n._$isObject(e)) {
            var o = {};
            n._$forIn(e, function (t, e) {
                o[e] = a._$dataset(s, e, t)
            });
            return o
        }
        if (n._$isArray(e)) {
            var o = {};
            n._$forEach(e, function (t) {
                o[t] = a._$dataset(s, t)
            });
            return o
        }
        return null
    };
    a._$attr = u._$attr = function (t, e, n) {
        t = a._$get(t);
        if (!t) return "";
        if (void 0 !== n && t.setAttribute) t.setAttribute(e, n);
        return r.__getAttribute(t, e)
    };
    a._$html2node = function () {
        var t = /<(.*?)(?=\s|>)/i, e = {li: "ul", tr: "tbody", td: "tr", th: "tr", option: "select"};
        return function (n) {
            var i;
            if (t.test(n)) i = e[(RegExp.$1 || "").toLowerCase()] || "";
            var s = a._$create(i || "div");
            s.innerHTML = n;
            var r = a._$getChildren(s);
            return r.length > 1 ? s : r[0]
        }
    }();
    a._$dom2xml = u._$dom2xml = function (t) {
        t = a._$get(t);
        return !t ? "" : r.__serializeDOM2XML(t)
    };
    a._$xml2dom = function (t) {
        t = (t || "").trim();
        return !t ? null : r.__parseDOMFromXML(t)
    };
    a._$dom2object = u._$dom2object = function (t, e) {
        e = e || {};
        t = a._$get(t);
        if (!t) return e;
        var i = t.tagName.toLowerCase(), s = a._$getChildren(t);
        if (!s || !s.length) {
            e[i] = t.textContent || t.text || "";
            return e
        }
        var r = {};
        e[i] = r;
        n._$forEach(s, function (t) {
            a._$dom2object(t, r)
        });
        return e
    };
    a._$xml2object = function (t) {
        try {
            return a._$dom2object(a._$xml2dom(t))
        } catch (e) {
            return null
        }
    };
    a._$text2type = function () {
        var t = {
            xml: function (t) {
                return a._$xml2dom(t)
            }, json: function (t) {
                try {
                    return JSON.parse(t)
                } catch (e) {
                    return null
                }
            }, dft: function (t) {
                return t
            }
        };
        return function (e, n) {
            n = (n || "").toLowerCase();
            return (t[n] || t.dft)(e || "")
        }
    }();
    a._$style = u._$style = function (t, e) {
        t = a._$get(t);
        if (t) n._$loop(e, function (e, n) {
            a._$setStyle(t, n, e)
        })
    };
    a._$setStyle = u._$setStyle = function (t, e, n) {
        t = a._$get(t);
        if (t) r.__setStyleValue(t, e, r.__processCSSText(n))
    };
    a._$getStyle = u._$getStyle = function (t, e) {
        t = a._$get(t);
        return !t ? "" : r.__getStyleValue(t, e)
    };
    a._$addScript = function (t) {
        try {
            t = t.trim();
            if (t) return new Function(t)()
        } catch (e) {
            console.error(e.message);
            console.error(e.stack)
        }
    };
    a._$addStyle = function () {
        var t = /[\s\r\n]+/gi;
        return function (e) {
            e = (e || "").replace(t, " ").trim();
            var n = null;
            if (e) {
                n = a._$create("style");
                document.head.appendChild(n);
                r.__injectCSSText(n, r.__processCSSText(e))
            }
            return n
        }
    }();
    a._$pushCSSText = function () {
        var t = /#<(.*?)>/g, e = +new Date;
        return function (e, i) {
            if (!f) f = [];
            var s = "auto-" + n._$uniqueID(), r = n._$merge({uispace: s}, i);
            f.push(e.replace(t, function (t, e) {
                return r[e] || t
            }));
            return s
        }
    }();
    a._$dumpCSSText = function () {
        if (f) {
            a._$addStyle(f.join(" "));
            f = null
        }
    };
    a._$appendCSSText = u._$appendCSSText = function (t, e) {
        t = a._$get(t);
        return !t ? null : r.__appendCSSText(t, r.__processCSSText(e))
    };
    a._$addClassName = u._$addClassName = function (t, e) {
        if (e) {
            t = a._$get(t);
            if (t) r.__processClassName(t, "add", e)
        }
    };
    a._$delClassName = u._$delClassName = function (t, e) {
        t = a._$get(t);
        if (t) r.__processClassName(t, "remove", e)
    };
    a._$replaceClassName = u._$replaceClassName = function (t, e, n) {
        t = a._$get(t);
        if (t) r.__processClassName(t, "replace", e, n)
    };
    a._$hasClassName = u._$hasClassName = function (t, e) {
        t = a._$get(t);
        if (t) return r.__hasClassName(t, e); else return !1
    };
    a._$matrix = function (t) {
        t = (t || "").trim();
        return r.__getCSSMatrix(t)
    };
    a._$css3d = u._$css3d = function (t, e, n) {
        t = a._$get(t);
        if (t) {
            var i = r.__processTransformValue(e, n);
            if (i) a._$setStyle(t, "transform", i)
        }
    };
    s._$merge(u);
    if (!0) t.copy(t.P("nej.e"), a);
    return a
}, 21, 38, 17, 23, 39, 40);
I$(65, function (t, e, n, i, s, r) {
    n.__checkEvent = function () {
        var t = {touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup"}, n = e._$KERNEL.prefix, i = {
            transitionend: "TransitionEnd",
            animationend: "AnimationEnd",
            animationstart: "AnimationStart",
            animationiteration: "AnimationIteration",
            visibilitychange: "visibilitychange",
            fullscreenchange: "fullscreenchange"
        };
        var s = {
            enter: function (t, e, n) {
                var i = {type: "keypress"};
                if (n) i.handler = function (e) {
                    if (13 === e.keyCode) n.call(t, e)
                };
                return i
            }
        };
        var r = function (t) {
            return (n.evt || n.pro) + t
        };
        return function (e, n, a) {
            var o = {type: n, handler: a};
            if (!("on" + n in e)) {
                var c = t[n];
                if (c) {
                    o.type = c;
                    return o
                }
                var c = i[n];
                if (c) {
                    o.type = r(c);
                    return o
                }
                var _ = s[n];
                if (_) return _.apply(null, arguments)
            }
            return o
        }
    }();
    n.__addEvent = function () {
        var t = arguments;
        if (!1) if (!("on" + t[1] in t[0])) console.log("not support event[" + t[1] + "] for " + t[0]);
        t[0].addEventListener(t[1], t[2], t[3])
    };
    n.__delEvent = function () {
        var t = arguments;
        t[0].removeEventListener(t[1], t[2], t[3])
    };
    n.__dispatchEvent = function (e, n, i) {
        var s = document.createEvent("Event");
        s.initEvent(n, !0, !0);
        t._$merge(s, i);
        e.dispatchEvent(s)
    };
    return n
}, 17, 55);
I$(41, function (t, e, n, i, s, r, a) {
    if ("trident" === t._$KERNEL.engine && t._$KERNEL.release >= "6.0") I$(66, function () {
        e.__checkEvent = function () {
            var t = {
                touchcancel: "MSPointerCancel",
                touchstart: "MSPointerDown",
                touchmove: "MSPointerMove",
                touchend: "MSPointerUp",
                fullscreenchange: "MSFullscreenChange"
            };
            return e.__checkEvent._$aop(function (e) {
                var n = e.args;
                var i = t[n[1]];
                if (i) {
                    e.stopped = !0;
                    e.value = {type: i, handler: n[2]}
                }
            })
        }()
    });
    if ("trident" === t._$KERNEL.engine && "5.0" == t._$KERNEL.release) I$(67, function () {
        e.__checkEvent = function () {
            var t = {};
            var n = {
                input: function (e, n, i) {
                    if (!i) return {type: n}; else return {
                        type: n, handler: function (n) {
                            var s = e.id;
                            t[s] = e.value;
                            i.call(e, n)
                        }, link: [[document, "selectionchange", function (n) {
                            var s = e.id;
                            if (e == document.activeElement) {
                                if (t[s] !== e.value) {
                                    t[s] = e.value;
                                    i.call(e, n)
                                }
                            } else delete t[s]
                        }]]
                    }
                }
            };
            return e.__checkEvent._$aop(function (t) {
                var e = t.args;
                var i = n[e[1]];
                if (i) {
                    t.stopped = !0;
                    t.value = i.apply(null, e)
                }
            })
        }()
    });
    if ("trident" === t._$KERNEL.engine && t._$KERNEL.release >= "5.0") I$(68, function () {
        var t = {propertychange: 1};
        e.__addEvent = e.__addEvent._$aop(function (e) {
            var n = e.args;
            if (null != t[n[1]] && n[0].attachEvent) {
                e.stopped = !0;
                n[0].attachEvent("on" + n[1], n[2])
            }
        });
        e.__delEvent = e.__delEvent._$aop(function (e) {
            var n = e.args, i = t[n[1]];
            if (null != t[n[1]] && n[0].detachEvent) {
                e.stopped = !0;
                n[0].detachEvent("on" + n[1], n[2])
            }
        })
    });
    if ("trident" === t._$KERNEL.engine && t._$KERNEL.release <= "4.0") I$(69, function () {
        e.__checkEvent = function () {
            var t = {};
            var n = {
                input: function (e, n, i) {
                    var s = {type: "propertychange"};
                    if (i) {
                        var r = e.id;
                        var a = function (n) {
                            if (e.value && !t["x-" + r]) {
                                t["x-" + r] = !0;
                                i.call(e, n)
                            }
                        };
                        s.handler = function (n) {
                            if ("value" in e && "value" == n.propertyName) {
                                if (t[r]) return;
                                t[r] = !0;
                                i.call(e, n);
                                delete t[r]
                            }
                        };
                        s.link = [[e, "keyup", a], [e, "mouseup", a], [e, "mousemove", a]];
                        s.destroy = function () {
                            delete t[r];
                            delete t["x-" + r]
                        }
                    }
                    return s
                }, load: function (t, e, n) {
                    var i = {type: "readystatechange"};
                    if (n) i.handler = function (e) {
                        if ("loaded" == t.readyState || "complete" == t.readyState) n.call(t, e)
                    };
                    return i
                }
            };
            return e.__checkEvent._$aop(function (t) {
                var e = t.args;
                var i = n[e[1]];
                if (i) {
                    t.stopped = !0;
                    t.value = i.apply(null, e)
                }
                if (e[2]) e[2] = e[2]._$bind(e[0])
            })
        }();
        e.__addEvent = function () {
            var t = arguments;
            if (!1) if (!("on" + t[1] in t[0])) console.log("not support event[" + t[1] + "] for " + t[0]);
            t[0].attachEvent("on" + t[1], t[2])
        };
        e.__delEvent = function () {
            var t = arguments;
            t[0].detachEvent("on" + t[1], t[2])
        };
        e.__dispatchEvent = function () {
            var t = {propertychange: {propertyName: "value"}};
            return function (e, i, s) {
                var r = document.createEventObject();
                try {
                    n._$merge(r, t[i], s);
                    e.fireEvent("on" + i, r)
                } catch (a) {
                    console.error(a.message);
                    console.error(a.stack)
                }
            }
        }()
    });
    if ("gecko" === t._$KERNEL.engine) I$(70, function () {
        e.__checkEvent = function () {
            var t = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
            var n = {
                mousewheel: function (t, e, n) {
                    var i = {type: "MozMousePixelScroll"};
                    if (n) i.handler = function (e) {
                        var i = e.detail;
                        e.wheelDelta = -i;
                        e.wheelDeltaY = -i;
                        e.wheelDeltaX = 0;
                        n.call(t, e)
                    };
                    return i
                }
            };
            return e.__checkEvent._$aop(function (e) {
                var i = e.args;
                if (t.test(i[1])) {
                    e.stopped = !0;
                    e.value = {type: i[1], handler: i[2]}
                }
                var s = n[i[1]];
                if (s) {
                    e.stopped = !0;
                    e.value = s.apply(null, i)
                }
            })
        }()
    });
    return e
}, 55, 65, 17);
I$(23, function (t, e, n, i, s, r, a, o, c) {
    var _ = {}, u = {};
    var f = function () {
        var t = /[\s,;]+/;
        return function (e) {
            var e = (e || "").trim().toLowerCase();
            return !e ? null : e.split(t)
        }
    }();
    var l = function (t, n, i) {
        var s = "page" + n;
        return null != t[s] ? t[s] : t["client" + n] + e._$getPageBox()["scroll" + i]
    };
    var h = function (t, e, n) {
        var i = "scroll" + n;
        T = r._$getElement(t), U = l(t, e, n);
        for (; T && T != document.body && T != document.documentElement;) {
            U += T[i] || 0;
            T = T.parentNode
        }
        return U
    };
    var d = function (t, i, s, r) {
        var a = {};
        t = e._$get(t);
        if (!t) return null;
        e._$id(t);
        a.element = t;
        if (!n._$isFunction(s)) return null;
        a.handler = s;
        var i = f(i);
        if (!i) return null;
        a.type = i;
        a.capture = !!r;
        return a
    };
    r._$addEvent = u._$addEvent = function () {
        var t = function (t, n, i) {
            var s = e._$id(n.element), r = _[s] || {}, a = r[t] || [];
            a.push({
                type: i.type || t,
                func: i.handler || n.handler,
                sfun: n.handler,
                capt: n.capture,
                link: i.link,
                destroy: i.destroy
            });
            r[t] = a;
            _[s] = r
        };
        return function () {
            var i = d.apply(null, arguments);
            if (i) n._$forEach(i.type, function (r) {
                var a = s.__checkEvent(i.element, r, i.handler);
                s.__addEvent(i.element, a.type, a.handler, i.capture);
                n._$forIn(a.link, function (t) {
                    t[3] = !!t[3];
                    s.__addEvent.apply(s, t);
                    t[0] = e._$id(t[0])
                });
                t(r, i, a)
            })
        }
    }();
    r._$delEvent = u._$delEvent = function () {
        var t = function (t, i) {
            var s = e._$id(i.element), r = _[s] || a, o = r[t], c = n._$indexOf(o, function (t) {
                return t.sfun === i.handler && t.capt === i.capture
            });
            var u = null;
            if (c >= 0) {
                var f = o.splice(c, 1)[0];
                u = [[i.element, f.type, f.func, i.capture]];
                if (f.link) {
                    n._$forEach(f.link, function (t) {
                        t[0] = e._$get(t[0])
                    });
                    u.push.apply(u, f.link)
                }
                if (f.destroy) f.destroy();
                if (!o.length) delete r[t];
                if (!n._$hasProperty(r)) delete _[s]
            }
            return u
        };
        return function () {
            var e = d.apply(null, arguments);
            if (e) n._$forEach(e.type, function (i) {
                n._$forEach(t(i, e), function (t) {
                    s.__delEvent.apply(s, t)
                })
            })
        }
    }();
    r._$clearEvent = u._$clearEvent = function () {
        var t = function (t, e, i) {
            n._$reverseEach(i, function (n) {
                r._$delEvent(t, e, n.sfun, n.capt)
            })
        };
        return function (i, s) {
            var a = e._$id(i);
            if (a) {
                var o = _[a];
                if (o) {
                    s = f(s);
                    if (s) n._$forEach(s, function (e) {
                        t(a, e, o[e])
                    }); else n._$loop(o, function (t, e) {
                        r._$clearEvent(i, e)
                    })
                }
            }
        }
    }();
    r._$dispatchEvent = u._$dispatchEvent = function (t, i, r) {
        var t = e._$get(t);
        if (t) n._$forEach(f(i), function (e) {
            var n = s.__checkEvent(t, e);
            s.__dispatchEvent(t, n.type, r)
        })
    };
    r._$getElement = function (t) {
        if (!t) return null;
        var n = t.target || t.srcElement, i = arguments[1];
        return e._$getParent(n, i)
    };
    r._$stop = function (t) {
        r._$stopBubble(t);
        r._$stopDefault(t)
    };
    r._$stopBubble = function (t) {
        if (t) t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
    };
    r._$stopDefault = function (t) {
        if (t) t.preventDefault ? t.preventDefault() : t.returnValue = !1
    };
    r._$page = function (t) {
        return {x: r._$pageX(t), y: r._$pageY(t)}
    };
    r._$pageX = function (t) {
        return h(t, "X", "Left")
    };
    r._$pageY = function (t) {
        return h(t, "Y", "Top")
    };
    r._$clientX = function (t) {
        return l(t, "X", "Left")
    };
    r._$clientY = function (t) {
        return l(t, "Y", "Top")
    };
    i._$merge(u);
    if (!0) t.copy(t.P("nej.v"), r);
    return r
}, 21, 20, 17, 39, 41);
I$(19, function (t, e, n, i, s, r, a, o) {
    var c;
    s._$$EventTarget = e._$klass();
    c = s._$$EventTarget.prototype;
    s._$$EventTarget._$allocate = function (t) {
        t = t || {};
        var e = !!this.__pool && this.__pool.shift();
        if (!e) {
            e = new this(t);
            this.__inst__ = (this.__inst__ || 0) + 1
        }
        e.__reset(t);
        return e
    };
    s._$$EventTarget._$recycle = function () {
        var t = function (t, e, n) {
            t._$recycle();
            n.splice(e, 1)
        };
        return function (e) {
            if (!e) return null;
            if (!i._$isArray(e)) {
                if (!(e instanceof this)) {
                    var n = e.constructor;
                    if (n._$recycle) n._$recycle(e);
                    return null;
                }
                if (e == this.__instance) delete this.__instance;
                if (e == this.__inctanse) delete this.__inctanse;
                e.__destroy();
                if (!this.__pool) this.__pool = [];
                if (i._$indexOf(this.__pool, e) < 0) this.__pool.push(e);
                return null
            }
            i._$reverseEach(e, t, this)
        }
    }();
    s._$$EventTarget._$getInstance = function (t) {
        if (!this.__instance) this.__instance = this._$allocate(t);
        return this.__instance
    };
    s._$$EventTarget._$getInstanceWithReset = function (t, e) {
        if (e && this.__inctanse) {
            this.__inctanse._$recycle();
            delete this.__inctanse
        }
        if (!this.__inctanse) this.__inctanse = this._$allocate(t); else this.__inctanse.__reset(t);
        return this.__inctanse
    };
    c.__init = function () {
        this.__events = {};
        this.__events_dom = {};
        this.id = i._$uniqueID()
    };
    c.__reset = function (t) {
        this._$batEvent(t)
    };
    c.__destroy = function () {
        this._$clearEvent();
        this.__doClearDomEvent()
    };
    c.__doInitDomEvent = function () {
        var t = function (t) {
            if (t && !(t.length < 3)) {
                this.__events_dom["de-" + i._$uniqueID()] = t;
                n._$addEvent.apply(n, t)
            }
        };
        return function (e) {
            i._$forEach(e, t, this)
        }
    }();
    c.__doClearDomEvent = function () {
        var t = function (t, e, i) {
            delete i[e];
            n._$delEvent.apply(n, t)
        };
        return function () {
            i._$loop(this.__events_dom, t)
        }
    }();
    c.__doClearComponent = function (t) {
        t = t || a;
        i._$loop(this, function (e, n, i) {
            if (e && e._$recycle && !t(e)) {
                delete i[n];
                e._$recycle()
            }
        })
    };
    c._$recycle = function () {
        this.constructor._$recycle(this)
    };
    c._$hasEvent = function (t) {
        var t = (t || "").toLowerCase(), e = this.__events[t];
        return !!e && e !== a
    };
    c._$delEvent = function (t, e) {
        var t = (t || "").toLowerCase(), n = this.__events[t];
        if (i._$isArray(n)) {
            i._$reverseEach(n, function (t, n, i) {
                if (t == e) i.splice(n, 1)
            });
            if (!n.length) delete this.__events[t]
        } else if (n == e) delete this.__events[t]
    };
    c._$setEvent = function (t, e) {
        if (t && i._$isFunction(e)) this.__events[t.toLowerCase()] = e
    };
    c._$batEvent = function () {
        var t = function (t, e) {
            this._$setEvent(e, t)
        };
        return function (e) {
            i._$loop(e, t, this)
        }
    }();
    c._$clearEvent = function () {
        var t = function (t, e) {
            this._$clearEvent(e)
        };
        return function (e) {
            var e = (e || "").toLowerCase();
            if (e) delete this.__events[e]; else i._$loop(this.__events, t, this)
        }
    }();
    c._$addEvent = function (t, e) {
        if (t && i._$isFunction(e)) {
            t = t.toLowerCase();
            var n = this.__events[t];
            if (n) {
                if (!i._$isArray(n)) this.__events[t] = [n];
                this.__events[t].push(e)
            } else this.__events[t] = e
        }
    };
    c._$dispatchEvent = function (t) {
        var t = (t || "").toLowerCase(), e = this.__events[t];
        if (e) {
            var n = o.slice.call(arguments, 1);
            if (i._$isArray(e)) i._$forEach(e, function (t) {
                if (!1) t.apply(this, n); else try {
                    t.apply(this, n)
                } catch (e) {
                    console.error(e.message);
                    console.error(e.stack)
                }
            }, this); else e.apply(this, n)
        }
    };
    if (!0) {
        s._$$Event = s._$$EventTarget;
        t.copy(t.P("nej.ut"), s)
    }
    return s
}, 21, 18, 23, 17);
I$(22, function (t, e, n, i, s) {
    e._$getLocalSessionList = function (t) {
        if (!store.enabled || !t) return null;
        var e = store.get("im_sessionlist_map");
        if (e) return e[t]; else return null
    };
    e._$updateLocalSessionList = function (t, e) {
        if (!store.enabled || !t) return !1;
        e = e || [];
        var n = [];
        for (var i = 0; i < e.length && i < 500; i++) n.push(e[i]);
        var s = store.get("im_sessionlist_map") || {};
        s[t] = n;
        store.set("im_sessionlist_map", s);
        return !0
    };
    e._$mergeLocalSessionList = function (t, e) {
        t = t || [];
        var n = [];
        for (var i = e.length - 1; i >= 0; i--) {
            var s = e[i];
            var r = !1;
            for (var a = t.length - 1; a >= 0; a--) if (t[a].id == s.id) {
                r = !0;
                break
            }
            if (!r) n.push(s)
        }
        t = t.concat(n);
        return t
    };
    return e
}, 17);
I$(9, function (t, e, n, i, s, r, a, o, c) {
    var _;
    r._$$IMCache = n._$klass();
    _ = r._$$IMCache._$extend(i._$$EventTarget);
    _.__init = function () {
        this.__super()
    };
    _.__reset = function (t) {
        this.__super(t);
        this.__userUID = t.userUID;
        this.__myInfo = {};
        this.__personlist = {};
        this.__msgs = {};
        this.__sessions = []
    };
    _._$getUserById = function (t) {
        if (!t) return !1;
        if (t == this.__myInfo.account) return this.__myInfo;
        if (this.__personlist[t]) return this.__personlist[t]; else return !1
    };
    _._$updateMyInfo = function (t) {
        this.__myInfo = t
    };
    _._$getMyInfo = function () {
        return this.__myInfo
    };
    _._$updatePersonlist = function (t, n) {
        if (!e._$isArray(t)) t = [t];
        for (var i = 0; i < t.length; i++) this.__personlist[t[i].account] = t[i];
        if (n) this._$dispatchEvent("nim_updatepersonlist")
    };
    _._$getPersonlist = function () {
        return this.__personlist
    };
    _._$updateSessions = function (t, e) {
        this.__sessions = t;
        if (e) this._$dispatchEvent("nim_updatesessions")
    };
    _._$getSessions = function () {
        if (0 == this.__sessions.length) this.__sessions = s._$getLocalSessionList(this.__userUID) || [];
        for (var t = 0; t < this.__sessions.length; t++) if (this._$getUserById(this.__sessions[t].to)) this.__sessions[t].userInfo = this._$getUserById(this.__sessions[t].to);
        return this.__sessions
    };
    _._$getTotalUnreadCount = function () {
        var t = 0;
        for (var e = 0; e < this.__sessions.length; e++) t += this.__sessions[e].unread || 0;
        return t
    };
    _._$hasLastMsg = function (t) {
        for (var e = 0; e < this.__sessions.length; e++) if (this.__sessions[e].lastMsg && this.__sessions[e].to == t) return !0;
        return !1
    };
    _._$addMsgs = function (t, e, n) {
        this.__msgs = t;
        if (n) this._$dispatchEvent("nim_msgs", e)
    };
    _._$getMsgs = function (t) {
        if (e._$isString(t)) if (this.__msgs["p2p-" + t]) return this.__msgs["p2p-" + t]; else return []; else if (this.__msgs["team-" + t]) return this.__msgs["team-" + t]; else return []
    };
    _.__destroy = function () {
        this.__super()
    };
    r.getIns = function () {
        return r._$$IMCache._$getInstance()
    };
    return r
}, 16, 17, 18, 19, 22);
I$(4, function (t, e, n, i, s, r, a, o, c, _, u, f, l) {
    var h = "test" == window.env || "dev" == window.env;
    var d;
    _._$$IMSDK = e._$klass();
    d = _._$$IMSDK._$extend(n._$$EventTarget);
    d.__init = function () {
        this.__super()
    };
    d.__log = function (t, e) {
        a._$studyIMDebugLog(t, e)
    };
    d.__reset = function (t) {
        this.__super(t);
        this.__cache = r.getIns();
        this.__appKey = t.appKey;
        this.__token = t.token;
        this.__userUID = t.account;
        this.__person = {};
        this.__person[this.__userUID] = !0;
        this.__sessions = [];
        this.__msgs = {};
        this.__users = [];
        this.__myInfo;
        this.__curSessionId = null;
        this.__kicked = !1;
        this.__fileUploadId = 0;
        this.__sendFileCancelList = {};
        this.__sendFileSuccesslList = {}
    };
    d._$createNIM = function () {
        this.__nim = new NIM({
            debug: h,
            db: !1,
            autoMarkRead: !1,
            appKey: this.__appKey,
            account: this.__userUID,
            token: this.__token,
            onconnect: this.__onConnect._$bind(this),
            ondisconnect: this.__onDisconnect._$bind(this),
            onerror: this.__onError._$bind(this),
            onloginportschange: this.__onLoginPortsChange._$bind(this),
            onsyncdone: this.__onSyncDone._$bind(this),
            onsessions: this.__onSessions._$bind(this),
            onupdatesession: this.__onUpdateSession._$bind(this),
            onmsg: this.__onMsg._$bind(this),
            onroamingmsgs: this.__onRoamingMsgs.bind(this),
            onofflinemsgs: this.__onOfflineMsgs._$bind(this),
            onmyinfo: this.__onMyInfo._$bind(this),
            onupdatemyinfo: this.__onUpdateMyInfo._$bind(this),
            onusers: this.__onUsers._$bind(this),
            onupdateuser: this.__onUpdateUser._$bind(this),
            dataSource: {
                getUser: function (t) {
                    return this.__nim.findUser(this.__users, t)
                }._$bind(this), getSession: function (t) {
                    return this.__nim.findSession(this.__sessions, t)
                }._$bind(this), getMsg: function (t) {
                    return this.__nim.findMsg(this.__msgs && this.__msgs[t.sessionId], t.idClient)
                }._$bind(this)
            }
        })
    };
    d._$isReady = function () {
        return this.__syncDone
    };
    d.__onConnect = function () {
        this.__kicked = !1
    };
    d.__onError = function (t) {
        this.__log("sdk_onerror", t);
        this._$dispatchEvent("nim_error", t)
    };
    d.__onDisconnect = function (t) {
        this.__log("sdk_ondisconnect", t);
        if (t) switch (t.code) {
            case 302:
                this._$dispatchEvent("nim_disconnect", t);
                break;
            case"kicked":
                this.__kicked = !0;
                this._$dispatchEvent("nim_disconnect", t);
                break;
            default:
                this._$dispatchEvent("nim_disconnect", t)
        }
    };
    d.__onLoginPortsChange = function (t) {
        this._$dispatchEvent("nim_loginportschange", t)
    };
    d.__onSessions = function (t) {
        this.__log("sdk_onsessions", t);
        this.__sessions = this.__nim.mergeSessions(this.__sessions, t);
        var e = o._$getLocalSessionList(this.__userUID);
        this.__log("sdk_get_local_session", e);
        if (e) this.__sessions = o._$mergeLocalSessionList(this.__sessions, e);
        for (var n = 0; n < t.length; n++) {
            var i = t[n].to === this.__userUID ? t[n].from : t[n].to;
            this.__person[i] = !0
        }
        this.__cache._$updateSessions(this.__sessions)
    };
    d.__onUpdateSession = function (t) {
        this.__log("sdk_onupdate_session", t);
        this.__sessions = this.__nim.mergeSessions(this.__sessions, t);
        o._$updateLocalSessionList(this.__userUID, this.__sessions);
        this.__log("sdk_update_local_sessions", this.__sessions);
        var e = [];
        for (var n = 0; n < this.__sessions.length; n++) {
            var i = this.__sessions[n].to === this.__userUID ? this.__sessions[n].from : this.__sessions[n].to;
            if (i && !this.__person[i]) e.push(i)
        }
        if (e.length) this._$getUsers(e, function () {
            this.__cache._$updateSessions(this.__sessions, !0)
        }._$bind(this)); else this.__cache._$updateSessions(this.__sessions, !0)
    };
    d.__onMyInfo = function (t) {
        this.__log("sdk_onmyinfo", t);
        this.__myInfo = t;
        this.__cache._$updateMyInfo(this.__myInfo)
    };
    d.__onUpdateMyInfo = function (t) {
        this.__log("sdk_onupdatemyinfo", t);
        this.__myInfo = NIM.util.merge(this.__myInfo, t);
        this.__cache._$updateMyInfo(this.__myInfo, !0)
    };
    d.__onUsers = function (t) {
        this.__log("sdk_ongetUsers", t);
        this.__users = this.__nim.mergeUsers(this.__users, t);
        this.__cache._$updatePersonlist(this.__users)
    };
    d.__onUpdateUser = function (t) {
        this.__log("sdk_onupdateusers", t);
        this.__users = this.__nim.mergeUsers(this.__users, t);
        this.__cache._$updatePersonlist(this.__users, !0)
    };
    d.__onSyncDone = function () {
        this.__log("sdk_syncdone");
        this.__syncDone = !0;
        var t = [];
        for (var e in this.__person) t.push(e);
        this._$getUsers(t, function () {
            this._$dispatchEvent("nim_syncdone")
        }._$bind(this))
    };
    d.__pushMsg = function (e, n) {
        if (!t._$isArray(n)) n = [n];
        var i = n[0].sessionId;
        e = e || {};
        e[i] = this.__nim.mergeMsgs(e[i], n)
    };
    d.__onMsg = function (e) {
        this.__log("sdk_onmsg", e);
        var n = [];
        if (!t._$isArray(e)) e = [e];
        for (var i = 0; i < e.length; i++) if (e[i]) {
            var s = e[i].to === this.__userUID ? e[i].from : e[i].to;
            var r = "p2p" === e[i].scene ? s : e[i].from;
            if (!this.__person[r]) n.push(r);
            if (this.__curSessionId && e[i].sessionId == this.__curSessionId) {
                e[i].hasMarkRead = !0;
                this.__log("sdk_mark_cur_sessionmsg_read");
                this.__nim.markMsgRead(e[i])
            }
        }
        this.__pushMsg(this.__msgs, e);
        a._$studyIMDebugLog("imdebug_sync_msgs", this.__msgs);
        if (n.length) this._$getUsers(n, function () {
            this.__cache._$addMsgs(this.__msgs, e, this.__syncDone)
        }._$bind(this)); else this.__cache._$addMsgs(this.__msgs, e, this.__syncDone)
    };
    d.__onRoamingMsgs = function (t) {
        this.__log("sdk_onroamingmsgs", t);
        this.__onMsg(t.msgs)
    };
    d.__onOfflineMsgs = function (t) {
        this.__log("sdk_onofflinemsgs", t);
        this.__onMsg(t.msgs)
    };
    d._$sendTextMessage = function (t, e, n, i, s, r) {
        var a = this.__nim.sendText({
            scene: t || "p2p", to: e, text: n, isHistoryable: !0, resend: s || !1, idClient: r,
            done: function (t, e) {
                if (!t) this.__onMsg(e);
                i && i(t, e)
            }._$bind(this)
        });
        this.__onMsg(a)
    };
    d._$previewFile = function (t, e, n, i) {
        var s = n.value, r = s.substring(s.lastIndexOf(".") + 1, s.length),
            a = /png|jpg|bmp|jpeg|gif/i.test(r) ? "image" : "file";
        this.__fileUploadId++;
        var o = this.__fileUploadId + "";
        this.__sendFileCancelList[o] = !0;
        var c = s;
        for (; c.indexOf("\\") != -1;) c = c.slice(c.lastIndexOf("\\") + 1);
        this._$dispatchEvent("uploadFileStart", {fileName: c, uploadId: o});
        var _ = this.__nim.previewFile({
            scene: t, to: e, type: a, fileInput: n, uploadprogress: function (t) {
                if (this.__sendFileCancelList[this.__fileUploadId + ""]) this._$dispatchEvent("uploadFilePropress", {
                    uploadId: this.__fileUploadId + "",
                    percentage: t.percentage
                })
            }._$bind(this), done: function (n, s) {
                if (!n) {
                    var r = this.__fileUploadId + "";
                    this._$dispatchEvent("uploadFileSuccess", {uploadId: r});
                    if (this.__sendFileCancelList[r] && !this.__sendFileSuccesslList[r]) {
                        this.__sendFileSuccesslList[r] = !0;
                        this._$sendFileMessage(t, e, s, a)
                    }
                } else this._$dispatchEvent("uploadFileFail", {uploadId: r, error: n});
                i && i(n, s)
            }._$bind(this)
        })
    };
    d._$cancelSendFileMessage = function (t) {
        this.__sendFileCancelList[t] = !1
    };
    d._$sendFileMessage = function (t, e, n, i, s, r, a) {
        var o = this.__nim.sendFile({
            scene: t,
            to: e,
            type: i,
            file: n,
            isHistoryable: !0,
            resend: r || !1,
            idClient: a,
            done: function (t, e) {
                if (!t) this.__onMsg(e);
                s && s(t, e)
            }._$bind(this)
        });
        this.__onMsg(o)
    };
    d._$getHistoryMsgs = function (t, e, n, i, s, r) {
        var o, c, _;
        if (n) {
            o = 0;
            c = e ? e.time : void 0;
            _ = !1
        } else {
            o = e ? e.time : 0;
            c = void 0;
            _ = !0
        }
        var u = {
            scene: "p2p",
            to: t,
            beginTime: o,
            endTime: c,
            lastMsgId: e ? e.idServer : 0,
            limit: i || 20,
            reverse: _,
            done: function (e, n) {
                if (!e) {
                    if (s) if (n.msgs) {
                        this.__log("sdk_get_remote_history", n);
                        var i = a._$getSessionIdByUserId(t);
                        var o = this.__msgs[i] || [];
                        this.__msgs[i] = this._$mergeHistoryMsgs(n.msgs, o);
                        this.__cache._$addMsgs(this.__msgs, !0)
                    }
                    r && r(e, n)
                } else this.__log("sdk_get_remote_history_fail")
            }._$bind(this)
        };
        this.__nim.getHistoryMsgs(u)
    };
    d._$mergeHistoryMsgs = function (t, e) {
        t = t || [];
        var n = e.length;
        var i = t.length;
        if (i > 0) {
            t.sort(function (t, e) {
                return t.time >= e.time
            });
            if (n > 0) {
                if (t[0].time >= e[n - 1].time) e = e.concat(t); else if (t[i - 1].time <= e[0].time) e = t.concat(e)
            } else e = t
        }
        return e
    };
    d._$resendMsg = function (t, e) {
        if (t.idClient) if ("text" == t.type) this._$sendTextMessage(t.scene, t.to, t.text, e, !0, t.idClient); else if ("file" == t.type || "image" == t.type) this._$sendFileMessage(t.scene, t.to, t.file, t.type, e, !0, t.idClient)
    };
    d._$getUsers = function (t, e) {
        this.__nim.getUsers({
            accounts: t, done: function (t, n) {
                if (!t) {
                    if (n) this.__cache._$updatePersonlist(n, !0);
                    e && e(t, n)
                } else this.__log("sdk_getuserfail")
            }._$bind(this)
        })
    };
    d._$getUser = function (t, e) {
        this.__nim.getUser({
            account: t, done: function (t, n) {
                if (!t) {
                    if (n) this.__cache._$updatePersonlist(n, !0);
                    e && e(t, n)
                }
            }._$bind(this)
        })
    };
    d._$setCurrSession = function (t) {
        this.__curSessionId = t;
        this.__nim.setCurrSession(t);
        this._$markSessionMsgRead(t);
        this._$dispatchEvent("nim_curSessionIdChange", this.__curSessionId)
    };
    d._$markSessionMsgRead = function (t) {
        var e = this.__msgs[t];
        if (e) {
            var n = [];
            for (var i = e.length - 1; i >= 0; i--) {
                var s = e[i];
                if (!s.hasMarkRead) {
                    s.hasMarkRead = !0;
                    n.push(s)
                }
            }
            if (n.length) {
                this.__log("sdk_mark_all_sessionmsg_read");
                this.__nim.markMsgRead(n)
            }
        }
    };
    d._$addNewP2PSessions = function (t) {
        this.__sessions = this.__sessions || [];
        this.__sessions.unshift({
            sence: "p2p",
            id: a._$getSessionIdByUserId(t),
            from: this.__userUID,
            to: t,
            updateTime: (new Date).getTime()
        })
    };
    _.getIns = function () {
        return _._$$IMSDK._$getInstance(window.nimConfig)
    };
    return _
}, 17, 18, 19, 20, 21, 9, 16, 22, 23);
I$(1, function (t, e, n, i, s, r, a, o) {
    var c = t.extend({
        template: e, enter: function () {
            this.supr()
        }, config: function () {
            this.supr()
        }, init: function () {
            this.supr()
        }
    });
    return c
}, 7, 8, 9, 4);
I$(10, '<div class="m-imchat f-pa" id="j-imchat">\n\t<!-- 空 -->\n    <div class="allempty f-pa" r-hide={hasSession}>\n    \t<div class="wrap">\n    \t\t<div class="ic"></div>\n    \t\t<div class="txt f-pr">\n    \t\t\t<div class="line"></div>\n    \t\t\t<span class="f-pa">你还没有发起过会话</span>\n    \t\t</div>\n    \t\t<p class="txt2">\n    \t\t\t你可以向开课的机构进行一对一在线售前咨询，寻求老师在线学习辅导啦！（只有开通咨询和辅导功能的课程才能私信）\n    \t\t</p>\n    \t</div>\n    \t\n\t</div>\n\n\t<!-- 左侧会话列表 -->\n    <div class="chatleft f-fl f-pr" id="j-sessionList-wrap">\n    \n\t</div>\n\t<!-- 右侧消息部分 -->\n\t<div class="chatright">\n\t\n\t\t<div class="f-pr">\n\t\t\t<!-- 聊天 -->\n\t\t\t<div class="" id="j-chatContent-wrap">\n\t\t\t\n\t\t\t</div>\n\t\t\t\n\t\t\t<!-- 举报 -->\n\t\t\t<div class="reportwrap f-pa" ref=view>\n\t\t    \n\t\t\t</div>\n\t\t</div>\n\t\t\n\t</div>\n</div>\n<!-- 最小化 -->\n<div class="m-tips f-dn" id="j-tips">\n\n</div>\n');
I$(27, '<div class="u-sessionlist">\n\t<div class="search" ref=sessionsearchwrap>\n\t\t\n\t</div>\n\n\t<div class="sessionwrap" ref=sessionwrap r-hide={showSearchSession}>\n\t\t{#if sessions && sessions.length > 0}\n\t\t{#list sessions as item}\n\t\t<div class="session" r-class={{\'session cur\':item.cur}} on-click={this.clickSession(item.to, item.cur)}>\n\t\t\t<img src="{item.userInfo|getAvatar}" class="face f-fl">\n\t\t\t<span class="name f-thide f-fl big" r-class={{\'small\':item.unread > 0}}>\n\t\t\t\t{item.userInfo.nick}\n\t\t\t</span>\n\n\t\t\t{#if item.unread > 0}\n\t\t\t<span class="unread f-fr">{item.unread}</span>\n\t\t\t{/if}\n\t\t</div>\n\t\t{/list}\n\t\t{#else}\n\t\t<div class="nosession"></div>\n\t\t{/if}\n\n\t</div>\n\t\n\t<!-- 会话搜索结果 -->\n\t<div class="sessionwrap" r-hide={!showSearchSession}>\n\t\t{#if searchsessions}\n\t\t{#list searchsessions as item}\n\t\t<div class="session" class="session" on-click={this.clickSession(item.to)}>\n\t\t\t<img src="{item.userInfo|getAvatar}" class="face f-fl">\n\t\t\t<span class="name f-thide f-fl big">\n\t\t\t\t{item.userInfo.nick}\n\t\t\t</span>\n\t\t</div>\n\t\t{/list}\n\t\t{#else}\n\t\t{/if}\n\n\t</div>\n</div>');
I$(42, '<div class="u-imsearch {clazz}">\n    <input ref=searchinput type="text" autocomplete="off" class="f-pr" r-pojo={searchContent} on-focus={this.onFocus()} on-keypress={this.enterKey($event)} on-blur={this.onBlur()}/>\n    <span class="placeholder f-pa" on-click={this.onclickHint()} r-hide={!showplaceholder}>{placeholder}</span>\n    <span class="f-pa close" r-hide={!showclose} on-click={this.clickCancel()}></span>\n</div>');
I$(25, function (t, e, n, i, s) {
    var r = window;
    e.deepCopy = function (t) {
        if (null == t) return null;
        if ("object" != typeof t) return t;
        var e = {};
        if (t.constructor == Array) e = [];
        for (var n in t) e[n] = arguments.callee(t[n]);
        return e
    };
    e.extend = function (t, e, n) {
        for (var i in e) if (n || void 0 === t[i]) t[i] = e[i];
        return t
    };
    e.trackPageView = function (t, e) {
        if (!e) e = location.pathname + location.search;
        e += t ? location.hash : "";
        if (r[r.gaqStr]) r[r.gaqStr].push([r.gaTrackPageview, e])
    };
    e.trackEvent = function (t, e, n, i) {
        if (t && e) {
            var s = [r.gaTrackEvent, t, e];
            if (n) {
                s.push(n);
                if (void 0 != i && null != i) s.push(parseInt(i))
            }
            if (r[r.gaqStr]) r[r.gaqStr].push(s)
        }
    };
    return e
}, 17);
I$(28, function (t, e, n, i, s) {
    var r = e.extend({
        template: t, name: "imsearch", config: function () {
            this.supr();
            s.extend(this.data, {showclose: !1, showplaceholder: !0})
        }, init: function () {
            this.supr()
        }, clickCancel: function () {
            this.data.searchContent = "";
            this.data.showplaceholder = !0;
            this.data.showclose = !1;
            this.$emit("searchCancel")
        }, onFocus: function () {
            this.data.showplaceholder = !1;
            this.data.showclose = !0;
            this.$emit("searchFocus")
        }, onBlur: function () {
            if ("" == this.data.searchContent) this.data.showplaceholder = !0
        }, onclickHint: function () {
            this.$refs.searchinput.focus()
        }, doSearch: function () {
            this.$emit("searchDo", this.data.searchContent)
        }, enterKey: function (t) {
            var e = t.which || t.keyCode;
            if (13 == e) this.doSearch()
        }, $reset: function () {
            this.data.searchContent = "";
            this.data.showplaceholder = !0;
            this.data.showclose = !1;
            this.$update()
        }
    });
    return r
}, 42, 26, 20, 17, 25);
I$(99, function (t, e, n, i, s, r) {
    n._$cookie = function () {
        var t = new Date, n = +t, s = 864e5;
        var r = function (t) {
            var e = document.cookie, n = "\\b" + t + "=", i = e.search(n);
            if (i < 0) return "";
            i += n.length - 2;
            var s = e.indexOf(";", i);
            if (s < 0) s = e.length;
            return e.substring(i, s) || ""
        };
        return function (a, o) {
            if (void 0 === o) return r(a);
            if (e._$isString(o)) {
                if (o) {
                    document.cookie = a + "=" + o + ";";
                    return o
                }
                o = {expires: -100}
            }
            o = o || i;
            var c = a + "=" + (o.value || "") + ";";
            delete o.value;
            if (void 0 !== o.expires) {
                t.setTime(n + o.expires * s);
                o.expires = t.toGMTString()
            }
            c += e._$object2string(o, ";");
            document.cookie = c
        }
    }();
    if (!0) t.copy(t.P("nej.j"), n);
    return n
}, 21, 17);
!function () {
    var t = !0, e = null;
    !function (n) {
        function i(n) {
            if ("bug-string-char-index" == n) return "a" != "a"[0];
            var i, r = "json" == n;
            if (r || "json-stringify" == n || "json-parse" == n) {
                if ("json-stringify" == n || r) {
                    var a = _.stringify, c = "function" == typeof a && u;
                    if (c) {
                        (i = function () {
                            return 1
                        }).toJSON = i;
                        try {
                            c = "0" === a(0) && "0" === a(new Number) && '""' == a(new String) && a(s) === o && a(o) === o && a() === o && "1" === a(i) && "[1]" == a([i]) && "[null]" == a([o]) && "null" == a(e) && "[null,null,null]" == a([o, s, e]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == a({a: [i, t, !1, e, "\0\b\n\f\r\t"]}) && "1" === a(e, i) && "[\n 1,\n 2\n]" == a([1, 2], e, 1) && '"-271821-04-20T00:00:00.000Z"' == a(new Date((-864e13))) && '"+275760-09-13T00:00:00.000Z"' == a(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == a(new Date((-621987552e5))) && '"1969-12-31T23:59:59.999Z"' == a(new Date((-1)))
                        } catch (f) {
                            c = !1
                        }
                    }
                    if (!r) return c
                }
                if ("json-parse" == n || r) {
                    n = _.parse;
                    if ("function" == typeof n) try {
                        if (0 === n("0") && !n(!1)) {
                            i = n('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                            var l = 5 == i.a.length && 1 === i.a[0];
                            if (l) {
                                try {
                                    l = !n('"\t"')
                                } catch (h) {
                                }
                                if (l) try {
                                    l = 1 !== n("01")
                                } catch (d) {
                                }
                            }
                        }
                    } catch (p) {
                        l = !1
                    }
                    if (!r) return l
                }
                return c && l
            }
        }

        var s = {}.toString, r, a, o, c = "function" == typeof define && define.amd,
            _ = "object" == typeof exports && exports;
        _ || c ? "object" == typeof JSON && JSON ? _ ? (_.stringify = JSON.stringify, _.parse = JSON.parse) : _ = JSON : c && (_ = n.JSON = {}) : _ = n.JSON || (n.JSON = {});
        var u = new Date((-0xc782b5b800cec));
        try {
            u = -109252 == u.getUTCFullYear() && 0 === u.getUTCMonth() && 1 === u.getUTCDate() && 10 == u.getUTCHours() && 37 == u.getUTCMinutes() && 6 == u.getUTCSeconds() && 708 == u.getUTCMilliseconds()
        } catch (f) {
        }
        if (!i("json")) {
            var l = i("bug-string-char-index");
            if (!u) var h = Math.floor, d = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                p = function (t, e) {
                    return d[e] + 365 * (t - 1970) + h((t - 1969 + (e = +(e > 1))) / 4) - h((t - 1901 + e) / 100) + h((t - 1601 + e) / 400)
                };
            if (!(r = {}.hasOwnProperty)) r = function (t) {
                var n = {}, i;
                if ((n.__proto__ = e, n.__proto__ = {
                        toString: 1
                    }, n).toString != s) r = function (t) {
                    var n = this.__proto__, t = t in (this.__proto__ = e, this);
                    this.__proto__ = n;
                    return t
                }; else {
                    i = n.constructor;
                    r = function (t) {
                        var e = (this.constructor || i).prototype;
                        return t in this && !(t in e && this[t] === e[t])
                    }
                }
                n = e;
                return r.call(this, t)
            };
            var g = {"boolean": 1, number: 1, string: 1, undefined: 1};
            a = function (t, n) {
                var i = 0, a, o, c;
                (a = function () {
                    this.valueOf = 0
                }).prototype.valueOf = 0;
                o = new a;
                for (c in o) r.call(o, c) && i++;
                a = o = e;
                if (i) i = 2 == i ? function (t, e) {
                    var n = {}, i = "[object Function]" == s.call(t), a;
                    for (a in t) !(i && "prototype" == a) && !r.call(n, a) && (n[a] = 1) && r.call(t, a) && e(a)
                } : function (t, e) {
                    var n = "[object Function]" == s.call(t), i, a;
                    for (i in t) !(n && "prototype" == i) && r.call(t, i) && !(a = "constructor" === i) && e(i);
                    (a || r.call(t, i = "constructor")) && e(i)
                }; else {
                    o = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                    i = function (t, e) {
                        var n = "[object Function]" == s.call(t), i, a;
                        if (a = !n) if (a = "function" != typeof t.constructor) {
                            a = typeof t.hasOwnProperty;
                            a = "object" == a ? !!t.hasOwnProperty : !g[a]
                        }
                        a = a ? t.hasOwnProperty : r;
                        for (i in t) !(n && "prototype" == i) && a.call(t, i) && e(i);
                        for (n = o.length; i = o[--n]; a.call(t, i) && e(i)) ;
                    }
                }
                i(t, n)
            };
            if (!i("json-stringify")) {
                var m = {92: "\\\\", 34: '\\"', 8: "\\b", 12: "\\f", 10: "\\n", 13: "\\r", 9: "\\t"},
                    $ = function (t, e) {
                        return ("000000" + (e || 0)).slice(-t)
                    }, v = function (t) {
                        var e = '"', n = 0, i = t.length, s = i > 10 && l, r;
                        for (s && (r = t.split("")); n < i; n++) {
                            var a = t.charCodeAt(n);
                            switch (a) {
                                case 8:
                                case 9:
                                case 10:
                                case 12:
                                case 13:
                                case 34:
                                case 92:
                                    e += m[a];
                                    break;
                                default:
                                    if (a < 32) {
                                        e += "\\u00" + $(2, a.toString(16));
                                        break
                                    }
                                    e += s ? r[n] : l ? t.charAt(n) : t[n]
                            }
                        }
                        return e + '"'
                    }, y = function (n, i, c, _, u, f, l) {
                        var d = i[n], g, m, E, b, w, S, I, M, x;
                        try {
                            d = i[n]
                        } catch (C) {
                        }
                        if ("object" == typeof d && d) {
                            g = s.call(d);
                            if ("[object Date]" == g && !r.call(d, "toJSON")) if (d > -1 / 0 && d < 1 / 0) {
                                if (p) {
                                    E = h(d / 864e5);
                                    for (g = h(E / 365.2425) + 1970 - 1; p(g + 1, 0) <= E; g++) ;
                                    for (m = h((E - p(g, 0)) / 30.42); p(g, m + 1) <= E; m++) ;
                                    E = 1 + E - p(g, m);
                                    b = (d % 864e5 + 864e5) % 864e5;
                                    w = h(b / 36e5) % 24;
                                    S = h(b / 6e4) % 60;
                                    I = h(b / 1e3) % 60;
                                    b %= 1e3
                                } else {
                                    g = d.getUTCFullYear();
                                    m = d.getUTCMonth();
                                    E = d.getUTCDate();
                                    w = d.getUTCHours();
                                    S = d.getUTCMinutes();
                                    I = d.getUTCSeconds();
                                    b = d.getUTCMilliseconds()
                                }
                                d = (g <= 0 || g >= 1e4 ? (g < 0 ? "-" : "+") + $(6, g < 0 ? -g : g) : $(4, g)) + "-" + $(2, m + 1) + "-" + $(2, E) + "T" + $(2, w) + ":" + $(2, S) + ":" + $(2, I) + "." + $(3, b) + "Z"
                            } else d = e; else if ("function" == typeof d.toJSON && ("[object Number]" != g && "[object String]" != g && "[object Array]" != g || r.call(d, "toJSON"))) d = d.toJSON(n)
                        }
                        c && (d = c.call(i, n, d));
                        if (d === e) return "null";
                        g = s.call(d);
                        if ("[object Boolean]" == g) return "" + d;
                        if ("[object Number]" == g) return d > -1 / 0 && d < 1 / 0 ? "" + d : "null";
                        if ("[object String]" == g) return v("" + d);
                        if ("object" == typeof d) {
                            for (n = l.length; n--;) if (l[n] === d) throw TypeError();
                            l.push(d);
                            M = [];
                            i = f;
                            f += u;
                            if ("[object Array]" == g) {
                                m = 0;
                                for (n = d.length; m < n; x || (x = t), m++) {
                                    g = y(m, d, c, _, u, f, l);
                                    M.push(g === o ? "null" : g)
                                }
                                n = x ? u ? "[\n" + f + M.join(",\n" + f) + "\n" + i + "]" : "[" + M.join(",") + "]" : "[]"
                            } else {
                                a(_ || d, function (e) {
                                    var n = y(e, d, c, _, u, f, l);
                                    n !== o && M.push(v(e) + ":" + (u ? " " : "") + n);
                                    x || (x = t)
                                });
                                n = x ? u ? "{\n" + f + M.join(",\n" + f) + "\n" + i + "}" : "{" + M.join(",") + "}" : "{}"
                            }
                            l.pop();
                            return n
                        }
                    };
                _.stringify = function (t, e, n) {
                    var i, r, a;
                    if ("function" == typeof e || "object" == typeof e && e) if ("[object Function]" == s.call(e)) r = e; else if ("[object Array]" == s.call(e)) {
                        a = {};
                        for (var o = 0, c = e.length, _; o < c; _ = e[o++], ("[object String]" == s.call(_) || "[object Number]" == s.call(_)) && (a[_] = 1)) ;
                    }
                    if (n) if ("[object Number]" == s.call(n)) {
                        if ((n -= n % 1) > 0) {
                            i = "";
                            for (n > 10 && (n = 10); i.length < n; i += " ") ;
                        }
                    } else "[object String]" == s.call(n) && (i = n.length <= 10 ? n : n.slice(0, 10));
                    return y("", (_ = {}, _[""] = t, _), r, a, i, "", [])
                }
            }
            if (!i("json-parse")) {
                var E = String.fromCharCode,
                    b = {92: "\\", 34: '"', 47: "/", 98: "\b", 116: "\t", 110: "\n", 102: "\f", 114: "\r"}, w, S,
                    I = function () {
                        w = S = e;
                        throw SyntaxError()
                    }, M = function () {
                        for (var n = S, i = n.length, s, r, a, o, c; w < i;) {
                            c = n.charCodeAt(w);
                            switch (c) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    w++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    s = l ? n.charAt(w) : n[w];
                                    w++;
                                    return s;
                                case 34:
                                    s = "@";
                                    for (w++; w < i;) {
                                        c = n.charCodeAt(w);
                                        if (c < 32) I(); else if (92 == c) {
                                            c = n.charCodeAt(++w);
                                            switch (c) {
                                                case 92:
                                                case 34:
                                                case 47:
                                                case 98:
                                                case 116:
                                                case 110:
                                                case 102:
                                                case 114:
                                                    s += b[c];
                                                    w++;
                                                    break;
                                                case 117:
                                                    r = ++w;
                                                    for (a = w + 4; w < a; w++) {
                                                        c = n.charCodeAt(w);
                                                        c >= 48 && c <= 57 || c >= 97 && c <= 102 || c >= 65 && c <= 70 || I()
                                                    }
                                                    s += E("0x" + n.slice(r, w));
                                                    break;
                                                default:
                                                    I()
                                            }
                                        } else {
                                            if (34 == c) break;
                                            c = n.charCodeAt(w);
                                            for (r = w; c >= 32 && 92 != c && 34 != c;) c = n.charCodeAt(++w);
                                            s += n.slice(r, w)
                                        }
                                    }
                                    if (34 == n.charCodeAt(w)) {
                                        w++;
                                        return s
                                    }
                                    I();
                                default:
                                    r = w;
                                    if (45 == c) {
                                        o = t;
                                        c = n.charCodeAt(++w)
                                    }
                                    if (c >= 48 && c <= 57) {
                                        for (48 == c && (c = n.charCodeAt(w + 1), c >= 48 && c <= 57) && I(); w < i && (c = n.charCodeAt(w), c >= 48 && c <= 57); w++) ;
                                        if (46 == n.charCodeAt(w)) {
                                            for (a = ++w; a < i && (c = n.charCodeAt(a), c >= 48 && c <= 57); a++) ;
                                            a == w && I();
                                            w = a
                                        }
                                        c = n.charCodeAt(w);
                                        if (101 == c || 69 == c) {
                                            c = n.charCodeAt(++w);
                                            (43 == c || 45 == c) && w++;
                                            for (a = w; a < i && (c = n.charCodeAt(a), c >= 48 && c <= 57); a++) ;
                                            a == w && I();
                                            w = a
                                        }
                                        return +n.slice(r, w)
                                    }
                                    o && I();
                                    if ("true" == n.slice(w, w + 4)) {
                                        w += 4;
                                        return t
                                    }
                                    if ("false" == n.slice(w, w + 5)) {
                                        w += 5;
                                        return !1
                                    }
                                    if ("null" == n.slice(w, w + 4)) {
                                        w += 4;
                                        return e
                                    }
                                    I()
                            }
                        }
                        return "$"
                    }, x = function (e) {
                        var n, i;
                        "$" == e && I();
                        if ("string" == typeof e) {
                            if ("@" == (l ? e.charAt(0) : e[0])) return e.slice(1);
                            if ("[" == e) {
                                for (n = []; ; i || (i = t)) {
                                    e = M();
                                    if ("]" == e) break;
                                    if (i) if ("," == e) {
                                        e = M();
                                        "]" == e && I()
                                    } else I();
                                    "," == e && I();
                                    n.push(x(e))
                                }
                                return n
                            }
                            if ("{" == e) {
                                for (n = {}; ; i || (i = t)) {
                                    e = M();
                                    if ("}" == e) break;
                                    if (i) if ("," == e) {
                                        e = M();
                                        "}" == e && I()
                                    } else I();
                                    ("," == e || "string" != typeof e || "@" != (l ? e.charAt(0) : e[0]) || ":" != M()) && I();
                                    n[e.slice(1)] = x(M())
                                }
                                return n
                            }
                            I()
                        }
                        return e
                    }, C = function (t, e, n) {
                        n = j(t, e, n);
                        n === o ? delete t[e] : t[e] = n
                    }, j = function (t, e, n) {
                        var i = t[e], r;
                        if ("object" == typeof i && i) if ("[object Array]" == s.call(i)) for (r = i.length; r--;) C(i, r, n); else a(i, function (t) {
                            C(i, t, n)
                        });
                        return n.call(t, e, i)
                    };
                _.parse = function (t, n) {
                    var i, r;
                    w = 0;
                    S = "" + t;
                    i = x(M());
                    "$" != M() && I();
                    w = S = e;
                    return n && "[object Function]" == s.call(n) ? j((r = {}, r[""] = i, r), "", n) : i
                }
            }
        }
        c && define(function () {
            return _
        })
    }(this);
    return JSON
}();
I$(82, function (V, _p, _o, _f, _r) {
    if ("trident" === V._$KERNEL.engine && "2.0" == V._$KERNEL.release) I$(94, function () {
        JSON.parse = function () {
            var _isSafeJSON = function (t) {
                return !/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(t.replace(/"(\\.|[^"\\])*"/g, ""))
            };
            return JSON.parse._$aop(function (W) {
                var Y = W.args[0] || "";
                if (Y.length >= 5e5) {
                    W.stopped = !0;
                    W.value = eval("(" + Y + ")")
                }
            })
        }()
    });
    return JSON
}, 55);
I$(74, function () {
    return JSON
}, 82);
I$(84, function (t, e, n, i, s, r, a, o, c, _, u, f) {
    var l;
    c._$$ProxyAbstract = t._$klass();
    l = c._$$ProxyAbstract._$extend(r._$$EventTarget);
    l.__reset = function (t) {
        this.__super(t);
        this.__request = e._$fetch({url: "", sync: !1, cookie: !1, type: "text", method: "GET", timeout: 6e4}, t);
        var n = i._$get("csrf");
        if (n.cookie && n.param) {
            var r = encodeURIComponent(n.param) + "=" + encodeURIComponent(a._$cookie(n.cookie) || ""),
                o = this.__request.url.indexOf("?") < 0 ? "?" : "&";
            this.__request.url += o + r
        }
        this.__headers = t.headers || {};
        var c = this.__headers[s._$HEAD_CT];
        if (null == c) this.__headers[s._$HEAD_CT] = s._$HEAD_CT_FORM
    };
    l.__destroy = function () {
        this.__super();
        delete this.__rkey;
        delete this.__request;
        delete this.__headers
    };
    l.__onLoadRequest = function (t) {
        var e = t.status;
        if (e != -1) if (0 == ("" + e).indexOf("2")) this._$dispatchEvent("onload", n._$text2type(t.result, this.__request.type)); else this._$dispatchEvent("onerror", {
            data: e,
            result: t.result,
            code: s._$CODE_ERRSERV,
            message: "服务器返回异常状态[" + e + "]!"
        }); else this._$dispatchEvent("onerror", {code: s._$CODE_TIMEOUT, message: "请求[" + this.__request.url + "]超时！"})
    };
    l.__doSendRequest = u;
    l.__getResponseHeader = u;
    l.__onAbort = function () {
        this._$dispatchEvent("onerror", {code: s._$CODE_ERRABRT, message: "客户端终止请求"})
    };
    l._$send = function (t) {
        var e = this.__request.url;
        if (e) try {
            this.__request.data = null == t ? null : t;
            var n = {request: this.__request, headers: this.__headers};
            try {
                this._$dispatchEvent("onbeforerequest", n)
            } catch (i) {
                console.error(i.message);
                console.error(i.stack)
            }
            this.__doSendRequest(n)
        } catch (r) {
            this._$dispatchEvent("onerror", {code: s._$CODE_ERRSERV, message: "请求[" + e + "]失败:" + r.message + "！"})
        } else this._$dispatchEvent("onerror", {code: s._$CODE_NOTASGN, message: "没有输入请求地址！"})
    };
    l._$abort = u;
    l._$header = function (t) {
        if (!e._$isArray(t)) return this.__getResponseHeader(t) || "";
        var n = {};
        e._$forEach(t, function (t) {
            n[t] = this._$header(t)
        }, this);
        return n
    };
    return c
}, 18, 17, 20, 56, 38, 19, 99, 74);
I$(100, function (t, e, n, i) {
    t.__getXMLHttpRequest = function () {
        return new XMLHttpRequest
    };
    t.__hasAbortEvent = function () {
        return !0
    };
    return t
});
I$(85, function (t, e, n, i, s, r, a) {
    if ("trident" === t._$KERNEL.engine && t._$KERNEL.release <= "5.0") I$(101, function () {
        e.__hasAbortEvent = function () {
            return !1
        }
    });
    if ("trident" === t._$KERNEL.engine && t._$KERNEL.release <= "2.0") I$(102, function () {
        e.__getXMLHttpRequest = function () {
            var t = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
            return function () {
                var e = null;
                n._$forIn(t, function (t) {
                    try {
                        e = new ActiveXObject(t);
                        return !0
                    } catch (n) {
                    }
                });
                return e
            }
        }()
    });
    return e
}, 55, 100, 17);
I$(79, function (t, e, n, i, s, r, a, o, c) {
    var _;
    r._$$ProxyXHR = n._$klass();
    _ = r._$$ProxyXHR._$extend(t._$$ProxyAbstract);
    _.__destroy = function () {
        this.__super();
        window.clearTimeout(this.__timer);
        delete this.__timer;
        try {
            this.__xhr.onreadystatechange = o;
            this.__xhr.abort()
        } catch (t) {
        }
        delete this.__xhr
    };
    _.__doSendRequest = function () {
        var t = function (t, e) {
            this.__xhr.setRequestHeader(e, t)
        };
        var n = function (t) {
            var n = [];
            e._$reverseEach(t.getElementsByTagName("input"), function (t) {
                if ("file" == t.type) if (t.name) {
                    if (t.files.length > 1) {
                        e._$forEach(t.files, function (e) {
                            n.push({name: t.name, file: e})
                        });
                        t.parentNode.removeChild(t)
                    }
                } else t.parentNode.removeChild(t)
            });
            return n.length > 0 ? n : null
        };
        return function (r) {
            var a = r.request, o = r.headers;
            this.__xhr = s.__getXMLHttpRequest();
            if (o[i._$HEAD_CT] === i._$HEAD_CT_FILE) {
                delete o[i._$HEAD_CT];
                this.__xhr.upload.onprogress = this.__onStateChange._$bind(this, 1);
                if ("FORM" === a.data.tagName) {
                    var c = n(a.data);
                    a.data = new FormData(a.data);
                    e._$forEach(c, function (t) {
                        var n = t.file;
                        a.data.append(t.name || n.name || "file-" + e._$uniqueID(), n)
                    })
                }
            }
            this.__xhr.onreadystatechange = this.__onStateChange._$bind(this, 2);
            this.__xhr.onabort = this.__onAbort._$bind(this);
            if (0 !== a.timeout) this.__timer = window.setTimeout(this.__onStateChange._$bind(this, 3), a.timeout);
            this.__xhr.open(a.method, a.url, !a.sync);
            e._$loop(o, t, this);
            if (this.__request.cookie && "withCredentials" in this.__xhr) this.__xhr.withCredentials = !0;
            if (!(o[i._$HEAD_CT] !== i._$HEAD_CT_FORM || window.FormData && a.data instanceof window.FormData)) a.data = e._$object2string(a.data, "&", !0);
            this.__xhr.send(a.data)
        }
    }();
    _.__onStateChange = function (t) {
        switch (t) {
            case 1:
                this._$dispatchEvent("onuploading", arguments[1]);
                break;
            case 2:
                if (4 == this.__xhr.readyState) this.__onLoadRequest({
                    status: this.__xhr.status,
                    result: this.__xhr.responseText || ""
                });
                break;
            case 3:
                this.__onLoadRequest({status: -1})
        }
    };
    _.__getResponseHeader = function (t) {
        return !this.__xhr ? "" : this.__xhr.getResponseHeader(t)
    };
    _._$abort = function () {
        if (!s.__hasAbortEvent()) this.__onAbort(); else {
            this.__xhr.onreadystatechange = o;
            this.__xhr.abort()
        }
    };
    return r
}, 84, 17, 18, 38, 85);
!function () {
    if ("undefined" == typeof TrimPath) {
        TrimPath = {};
        if ("undefined" != typeof exports) TrimPath = exports
    }
    var t = {}, e = [], n = /\s+/g, i = +new Date, s, r, a;
    var o = function () {
        var t = /^\s*[\[\{'"].*?[\]\}'"]\s*$/, e = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;]/,
            n = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i, i = /^new\s+/,
            s = /['"]/;
        var r = function (e) {
            if (!t.test(e)) {
                e = e.split(".")[0].trim();
                if (e && !s.test(e)) {
                    e = e.replace(i, "");
                    try {
                        if (n.test(e)) return;
                        a[e] = 1
                    } catch (r) {
                    }
                }
            }
        };
        return function (n) {
            n = n || "";
            if (n && !t.test(n)) {
                var i = n.split(e);
                for (var s = 0, a = i.length; s < a; s++) r(i[s])
            }
        }
    }();
    var c = function (t) {
        if ("in" != t[2]) throw"bad for loop statement: " + t.join(" ");
        e.push(t[1]);
        o(t[3]);
        return "var __HASH__" + t[1] + " = " + t[3] + "," + t[1] + "," + t[1] + "_count=0;if (!!__HASH__" + t[1] + ")for(var " + t[1] + "_key in __HASH__" + t[1] + "){" + t[1] + " = __HASH__" + t[1] + "[" + t[1] + "_key];if (typeof(" + t[1] + ')=="function") continue;' + t[1] + "_count++;"
    };
    var _ = function () {
        var t = e[e.length - 1];
        return "}; if(!__HASH__" + t + "||!" + t + "_count){"
    };
    var u = function () {
        e.pop();
        return "};"
    };
    var f = function (t) {
        if ("as" != t[2]) throw"bad for list loop statement: " + t.join(" ");
        var e = t[1].split("..");
        if (e.length > 1) {
            o(e[0]);
            o(e[1]);
            return "for(var " + t[3] + "," + t[3] + "_index=0," + t[3] + "_beg=" + e[0] + "," + t[3] + "_end=" + e[1] + "," + t[3] + "_length=parseInt(" + t[3] + "_end-" + t[3] + "_beg+1);" + t[3] + "_index<" + t[3] + "_length;" + t[3] + "_index++){" + t[3] + " = " + t[3] + "_beg+" + t[3] + "_index;"
        } else {
            o(t[1]);
            return "for(var __LIST__" + t[3] + " = " + t[1] + "," + t[3] + "," + t[3] + "_index=0," + t[3] + "_length=__LIST__" + t[3] + ".length;" + t[3] + "_index<" + t[3] + "_length;" + t[3] + "_index++){" + t[3] + " = __LIST__" + t[3] + "[" + t[3] + "_index];"
        }
    };
    var l = function (t) {
        if (t && t.length) {
            t.shift();
            var e = t[0].split("(")[0];
            return "var " + e + " = function" + t.join("").replace(e, "") + "{var __OUT=[];"
        }
    };
    var h = function (t) {
        if (!t[1]) throw"bad include statement: " + t.join(" ");
        return 'if (typeof inline == "function"){__OUT.push(inline('
    };
    var d = function (t, e) {
        o(e.slice(1).join(" "));
        return t
    };
    var p = function (t) {
        return d("if(", t)
    };
    var g = function (t) {
        return d("}else if(", t)
    };
    var m = function (t) {
        return d("var ", t)
    };
    r = {
        blk: /^\{(cdata|minify|eval)/i,
        tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include",
        def: {
            "if": {pfix: p, sfix: "){", pmin: 1},
            "else": {pfix: "}else{"},
            elseif: {pfix: g, sfix: "){", pdft: "true"},
            "/if": {pfix: "}"},
            "for": {pfix: c, pmin: 3},
            forelse: {pfix: _},
            "/for": {pfix: u},
            list: {pfix: f, pmin: 3},
            "/list": {pfix: "};"},
            "break": {pfix: "break;"},
            "var": {pfix: m, sfix: ";"},
            macro: {pfix: l},
            "/macro": {pfix: 'return __OUT.join("");};'},
            trim: {
                pfix: function () {
                    s = !0
                }
            },
            "/trim": {
                pfix: function () {
                    s = null
                }
            },
            inline: {pfix: h, pmin: 1, sfix: "));}"}
        },
        ext: {
            seed: function (t) {
                return (t || "") + "" + i
            }, "default": function (t, e) {
                return t || e
            }
        }
    };
    var $ = function () {
        var t = /\\([\{\}])/g;
        return function (e, i) {
            e = e.replace(t, "$1");
            var s = e.slice(1, -1).split(n), a = r.def[s[0]];
            if (a) {
                if (a.pmin && a.pmin >= s.length) throw"Statement needs more parameters:" + e;
                i.push(a.pfix && "string" != typeof a.pfix ? a.pfix(s) : a.pfix || "");
                if (a.sfix) {
                    if (s.length <= 1) {
                        if (a.pdft) i.push(a.pdft)
                    } else for (var o = 1, c = s.length; o < c; o++) {
                        if (o > 1) i.push(" ");
                        i.push(s[o])
                    }
                    i.push(a.sfix)
                }
            } else y(e, i)
        }
    }();
    var v = function (t, e) {
        if (t && t.length) if (1 != t.length) {
            var n = t.pop().split(":");
            e.push("__MDF['" + n.shift() + "'](");
            v(t, e);
            if (n.length > 0) {
                var i = n.join(":");
                o(i);
                e.push("," + i)
            }
            e.push(")")
        } else {
            var s = t.pop();
            o(s);
            e.push("" == s ? '""' : s)
        }
    };
    var y = function (t, e) {
        if (t) {
            var n = t.split("\n");
            if (n && n.length) for (var i = 0, r = n.length, a; i < r; i++) {
                a = n[i];
                if (s) {
                    a = a.trim();
                    if (!a) continue
                }
                E(a, e);
                if (s && i < r - 1) e.push("__OUT.push('\\n');")
            }
        }
    };
    var E = function () {
        var t = /\|\|/g, e = /#@@#/g;
        return function (n, i) {
            var s = "}", r = -1, a = n.length, o, c, _, u, f;
            for (; r + s.length < a;) {
                o = "${";
                c = "}";
                _ = n.indexOf(o, r + s.length);
                if (_ < 0) break;
                if ("%" == n.charAt(_ + 2)) {
                    o = "${%";
                    c = "%}"
                }
                u = n.indexOf(c, _ + o.length);
                if (u < 0) break;
                b(n.substring(r + s.length, _), i);
                f = n.substring(_ + o.length, u).replace(t, "#@@#").split("|");
                for (var l = 0, h = f.length; l < h; f[l] = f[l].replace(e, "||"), l++) ;
                i.push("__OUT.push(");
                v(f, i);
                i.push(");");
                s = c;
                r = u
            }
            b(n.substring(r + s.length), i)
        }
    }();
    var b = function () {
        var t = {r: /\n|\\|\'/g, "\n": "\\n", "\\": "\\\\", "'": "\\'"};
        var e = function (e) {
            return (e || "").replace(t.r, function (e) {
                return t[e] || e
            })
        };
        return function (t, n) {
            if (t) n.push("__OUT.push('" + e(t) + "');")
        }
    }();
    var w = function () {
        var t = /\t/g, e = /\n/g, i = /\r\n?/g;
        var s = function (t, e) {
            var n = t.indexOf("}", e + 1);
            for (; "\\" == t.charAt(n - 1);) n = t.indexOf("}", n + 1);
            return n
        };
        var o = function () {
            var t = [], e = arguments[0];
            for (var n in e) {
                n = (n || "").trim();
                if (n) t.push(n + "=$v('" + n + "')"); else ;
            }
            return t.length > 0 ? "var " + t.join(",") + ";" : ""
        };
        return function (c) {
            a = {};
            c = c.replace(i, "\n").replace(t, "    ");
            var _ = ["if(!__CTX) return '';", ""];
            _.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
            _.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
            _.push("__OUT=[];");
            var u = -1, f = c.length;
            var l, h, d, p, g, m, v, E;
            for (; u + 1 < f;) {
                l = u;
                l = c.indexOf("{", l + 1);
                for (; l >= 0;) {
                    h = s(c, l);
                    d = c.substring(l, h);
                    p = d.match(r.blk);
                    if (p) {
                        g = p[1].length + 1;
                        m = c.indexOf("}", l + g);
                        if (m >= 0) {
                            v = m - l - g <= 0 ? "{/" + p[1] + "}" : d.substr(g + 1);
                            g = c.indexOf(v, m + 1);
                            if (g >= 0) {
                                y(c.substring(u + 1, l), _);
                                E = c.substring(m + 1, g);
                                switch (p[1]) {
                                    case"cdata":
                                        b(E, _);
                                        break;
                                    case"minify":
                                        b(E.replace(e, " ").replace(n, " "), _);
                                        break;
                                    case"eval":
                                        if (E) _.push("__OUT.push((function(){" + E + "})());")
                                }
                                l = u = g + v.length - 1
                            }
                        }
                    } else if ("$" != c.charAt(l - 1) && "\\" != c.charAt(l - 1) && 0 == d.substr("/" == d.charAt(1) ? 2 : 1).search(r.tag)) break;
                    l = c.indexOf("{", l + 1)
                }
                if (l < 0) break;
                h = s(c, l);
                if (h < 0) break;
                y(c.substring(u + 1, l), _);
                $(c.substring(l, h + 1), _);
                u = h
            }
            y(c.substring(u + 1), _);
            _.push(';return __OUT.join("");');
            _[1] = o(a);
            a = null;
            return new Function("__CTX", "__MDF", _.join(""))
        }
    }();
    TrimPath.seed = function () {
        return i
    };
    TrimPath.merge = function () {
        var e = {};
        TrimPath.dump = function () {
            return {func: e, text: t}
        };
        return function (n, i, s) {
            try {
                i = i || {};
                if (!e[n] && !t[n]) return "";
                if (!e[n]) {
                    e[n] = w(t[n]);
                    delete t[n]
                }
                if (s) for (var a in r.ext) if (!s[a]) s[a] = r.ext[a];
                return e[n](i, s || r.ext)
            } catch (o) {
                return o.message || ""
            }
        }
    }();
    TrimPath.parse = function () {
        var e = +new Date;
        return function (n, i) {
            if (!n) return "";
            i = i || "ck-" + e++;
            if (null != t[i]) {
                console.warn("jst template overwrited with key " + i);
                console.debug("old template content: " + t[i].replace(/\n/g, " "));
                console.debug("new template content: " + n.replace(/\n/g, " "))
            }
            t[i] = n;
            return i
        }
    }()
}();
I$(95, function (t, e, n, i, s, r, a, o, c) {
    var _ = {};
    r._$seed = TrimPath.seed;
    r._$get = function () {
        var t = function (t) {
            return !r._$getTextTemplate ? "" : r._$getTextTemplate(t)
        };
        return function (n, i, s) {
            i = i || {};
            i.inline = t;
            s = e._$merge({}, _, s);
            s.rand = e._$uniqueID;
            s.format = e._$format;
            s.escape = e._$escape;
            s.inline = t;
            return TrimPath.merge(n, i, s)
        }
    }();
    r._$add = function (t, e) {
        if (!t) return "";
        var i, s = n._$get(t);
        if (s) {
            i = s.id;
            t = s.value || s.innerText;
            if (!e) n._$remove(s)
        }
        return TrimPath.parse(t, i)
    };
    r._$addTemplate = function (t, e) {
        return TrimPath.parse(t, e)
    };
    r._$render = function (t, e, i, s) {
        t = n._$get(t);
        if (t) t.innerHTML = r._$get(e, i, s)
    };
    r._$extend = function (t) {
        e._$merge(_, t)
    };
    i._$merge({_$render: r._$render});
    if (!0) {
        var u = t.P("nej.e");
        u._$addHtmlTemplate = r._$add;
        u._$getHtmlTemplate = r._$get;
        u._$getHtmlTemplateSeed = r._$seed;
        u._$renderHtmlTemplate = r._$render;
        u._$registJSTExt = r._$extend
    }
    return r
}, 21, 17, 20, 39, 103);
I$(108, function (t, e, n, i, s) {
    var r = this, a = t._$KERNEL.prefix.pro, o = t._$is("desktop") ? 80 : t._$is("ios") ? 50 : 30;
    e.__requestAnimationFrame = function () {
        var e = t._$is("android") ? null : r.requestAnimationFrame || r[a + "RequestAnimationFrame"];
        return function () {
            if (!e) e = function (t) {
                return window.setTimeout(function () {
                    try {
                        t(+new Date)
                    } catch (e) {
                    }
                }, 1e3 / o)
            };
            return e.apply(this, arguments)
        }
    }();
    e.__cancelAnimationFrame = function () {
        var e = t._$is("android") ? null : r.cancelAnimationFrame || r[a + "CancelAnimationFrame"];
        return function () {
            if (!e) e = function (t) {
                window.clearTimeout(t)
            };
            return e.apply(this, arguments)
        }
    }();
    return e
}, 55);
I$(104, function (t, e) {
    return t
}, 108, 55);
I$(96, function (t, e, n, i, s, r) {
    n.requestAnimationFrame = function () {
        e.__requestAnimationFrame.apply(null, arguments)
    };
    n.cancelAnimationFrame = function () {
        e.__cancelAnimationFrame.apply(null, arguments)
    };
    if (!0) {
        if (!this.requestAnimationFrame) this.requestAnimationFrame = n.requestAnimationFrame;
        if (!this.cancelAnimationFrame) this.cancelAnimationFrame = n.cancelAnimationFrame
    }
    return n
}, 55, 104);
I$(107, function (t, e, n, i, s) {
    e.__canFlashEventBubble = function (t) {
        return "transparent" != (t || "").toLowerCase()
    };
    return e
}, 55);
I$(97, function (t, e, n, i, s, r) {
    if ("trident" === e._$KERNEL.engine) I$(105, function () {
        t.__canFlashEventBubble = function (t) {
            return !0
        }
    });
    if ("webkit" === e._$KERNEL.engine) I$(106, function () {
        t.__canFlashEventBubble = function (t) {
            return !0
        }
    });
    return t
}, 107, 55);
I$(98, '{var hide  = defined("hidden")&&!!hidden}\n{var param = defined("params")&&params||NEJ.O}\n{var width = !hide?width:"1px",height = !hide?height:"1px"}\n{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}\n<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"\n        codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"\n        width = "${width|default:"100px"}"\n        height = "${height|default:"100px"}" id="${id}">\n    <param value="${src}" name="movie">\n    {for x in param}\n    <param value="${x}" name="${x_key}"/>\n    {/for}\n    <embed src="${src}" name="${id}"\n           width="${width|default:"100px"}"\n           height="${height|default:"100px"}"\n           pluginspage="http://www.adobe.com/go/getflashplayer"\n           type="application/x-shockwave-flash"\n           {for x in param}${x_key}="${x}" {/for}></embed>\n</object>\n{if hide}</div>{/if}');
I$(83, function (t, e, n, i, s, r, a, o, c, _, u, f) {
    var l = s._$add(o);
    c._$flash = function () {
        var o = {}, c, _ = /^(?:mouse.*|(?:dbl)?click)$/i;
        window.onflashevent = function (t) {
            var e = decodeURIComponent(t.target), n = t.type.toLowerCase();
            var i = o[e + "-tgt"];
            if (i && _.test(n)) f(i, t);
            var s = o[e + "-on" + n];
            if (s) {
                var r = "";
                try {
                    r = s(t)
                } catch (a) {
                }
                return r
            }
        };
        var u = function (t) {
            c = document.title;
            var n = e._$get(t.parent) || document.body, i = s._$get(l, t);
            n.insertAdjacentHTML(!t.hidden ? "beforeEnd" : "afterBegin", i)
        };
        var f = function (t, e) {
            var i = e.type.toLowerCase();
            r.requestAnimationFrame(function () {
                n._$dispatchEvent(t, i)
            })
        };
        var h = function (t) {
            return !!t && !!t.inited && !!t.inited()
        };
        var d = function (t) {
            var n = [document.embeds[t], e._$get(t), document[t], window[t]], s = i._$forIn(n, h), r = n[s],
                a = t + "-count";
            o[a]++;
            if (!(r || o[a] > 100)) window.setTimeout(d._$bind(null, t), 300); else {
                if (c) {
                    document.title = c;
                    c = null
                }
                o[t](r);
                delete o[t];
                delete o[a]
            }
        };
        var p = function (t) {
            var n = t.id, s = t.params;
            if (!s) {
                s = {};
                t.params = s
            }
            var r = s.flashvars || "";
            r += (!r ? "" : "&") + ("id=" + n);
            if (!t.hidden && (t.target || a.__canFlashEventBubble(s.wmode))) {
                var c = e._$id(t.target) || e._$id(t.parent);
                o[n + "-tgt"] = c
            }
            s.flashvars = r;
            i._$loop(t, function (t, e) {
                if (i._$isFunction(t) && "onready" != e) o[n + "-" + e] = t
            })
        };
        return function (e) {
            e = t.X({}, e);
            if (e.src) {
                var n = "_" + i._$uniqueID();
                e.id = n;
                p(e);
                u(e);
                if (e.onready) {
                    o[n] = e.onready;
                    o[n + "-count"] = 0;
                    d(n)
                }
            }
        }
    }();
    if (!0) t.copy(t.P("nej.e"), c);
    return c
}, 21, 20, 23, 17, 95, 96, 97, 98);
I$(86, function (t, e, n, i, s, r, a, o, c) {
    var _, u = {}, f = i._$uniqueID();
    this["ld" + f] = function (t, e) {
        var n = u[t];
        if (n) {
            delete u[t];
            n.__onLoadRequest({status: 200, result: e})
        }
    };
    this["er" + f] = function (t, e) {
        var n = u[t];
        if (n) {
            delete u[t];
            n.__onLoadRequest({status: e || 0})
        }
    };
    r._$$ProxyFlash = e._$klass();
    _ = r._$$ProxyFlash._$extend(t._$$ProxyAbstract);
    _.__doSendRequest = function (t) {
        var e = u.flash;
        if (!i._$isArray(e)) if (e) {
            this.__rkey = i._$uniqueID();
            u[this.__rkey] = this;
            var r = i._$fetch({url: "", data: null, method: "GET"}, t.request);
            r.key = this.__rkey;
            r.headers = t.headers;
            r.onerror = "cb.er" + f;
            r.onloaded = "cb.ld" + f;
            var a = n._$getFlashProxy(r.url);
            if (a) r.policyURL = a;
            e.request(r)
        } else {
            u.flash = [this.__doSendRequest._$bind(this, t)];
            s._$flash({
                hidden: !0, src: n._$get("ajax.swf"), onready: function (t) {
                    if (t) {
                        var e = u.flash;
                        u.flash = t;
                        i._$reverseEach(e, function (t, e, n) {
                            try {
                                t()
                            } catch (i) {
                            }
                        })
                    }
                }
            })
        } else e.push(this.__doSendRequest._$bind(this, t))
    };
    _._$abort = function () {
        delete u[this.__rkey];
        this.__onAbort()
    };
    return r
}, 84, 18, 56, 17, 83);
I$(71, function (t, e, n, i) {
    t.__formatOrigin = function () {
        var t = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (e) {
            e = e || "";
            if (t.test(e)) return RegExp.$1; else return "*"
        }
    }();
    t.__formatPassData = function (t) {
        return t
    };
    t.__postMessage = function (n, i) {
        if (n.postMessage) {
            i = i || e;
            n.postMessage(t.__formatPassData(i.data), t.__formatOrigin(i.origin))
        }
    };
    return t
});
I$(73, function (t, e, n, i, s, r, a, o, c, _) {
    var u;
    a._$$CustomEvent = e._$klass();
    u = a._$$CustomEvent._$extend(r._$$EventTarget);
    u.__init = function () {
        this.__cache = {};
        this.__super()
    };
    u.__reset = function (t) {
        this.__super(t);
        this.__element = n._$get(t.element) || window;
        this.__doEventInit(t.event);
        this.__doEventAPIEnhance();
        this._$dispatchEvent("oninit")
    };
    u.__destroy = function () {
        var t = function (t, e, n) {
            if (!s._$isArray(t)) s._$safeDelete(this.__element, e);
            delete n[e]
        };
        return function () {
            this.__super();
            s._$loop(this.__cache, t, this);
            delete this.__element
        }
    }();
    u.__isDelegate = function (t, e) {
        t = n._$get(t);
        return !(t !== this.__element || e && !this.__cache["on" + e])
    };
    u.__doEventInit = function (t) {
        if (!s._$isString(t)) {
            if (s._$isArray(t)) s._$forEach(t, this.__doEventInit, this)
        } else {
            var e = "on" + t;
            if (!this.__cache[e]) this.__cache[e] = this.__doEventDispatch._$bind(this, t);
            this.__doEventBind(t)
        }
    };
    u.__doEventBind = function (t) {
        var e = "on" + t, n = this.__element[e], i = this.__cache[e];
        if (n != i) {
            this.__doEventDelete(t);
            if (n && n != c) this.__doEventAdd(t, n);
            this.__element[e] = i
        }
    };
    u.__doEventAdd = function (t, e, n) {
        var i = this.__cache[t];
        if (!i) {
            i = [];
            this.__cache[t] = i
        }
        if (s._$isFunction(e)) !n ? i.push(e) : i.unshift(e)
    };
    u.__doEventDelete = function (t, e) {
        var n = this.__cache[t];
        if (n && n.length) if (e) s._$reverseEach(n, function (t, n, i) {
            if (e === t) {
                i.splice(n, 1);
                return !0
            }
        }); else delete this.__cache[t]
    };
    u.__doEventDispatch = function (t, e) {
        e = e || {noargs: !0};
        if (e == o) e = {};
        e.type = t;
        this._$dispatchEvent("ondispatch", e);
        if (!e.stopped) s._$forEach(this.__cache[t], function (t) {
            if (!1) t(e); else try {
                t(e)
            } catch (n) {
                console.error(n.message);
                console.error(n.stack)
            }
        })
    };
    u.__doEventAPIEnhance = function () {
        var e = function (t) {
            var e = t.args, n = e[1].toLowerCase();
            if (this.__isDelegate(e[0], n)) {
                t.stopped = !0;
                this.__doEventBind(n);
                this.__doEventAdd(n, e[2], e[3]);
                this._$dispatchEvent("oneventadd", {type: n, listener: e[2]})
            }
        };
        var n = function (t) {
            var e = t.args, n = e[1].toLowerCase();
            if (this.__isDelegate(e[0], n)) {
                t.stopped = !0;
                this.__doEventDelete(n, e[2])
            }
        };
        var r = function (t) {
            var e = t.args, n = (e[1] || "").toLowerCase();
            if (this.__isDelegate(e[0])) {
                if (n) {
                    this.__doEventDelete(n);
                    return
                }
                s._$loop(this.__cache, function (t, e) {
                    if (s._$isArray(t)) this.__doEventDelete(e)
                }, this)
            }
        };
        var a = function (t) {
            var e = t.args, n = e[1].toLowerCase();
            if (this.__isDelegate(e[0], n)) {
                t.stopped = !0;
                e[0]["on" + n].apply(e[0], e.slice(2))
            }
        };
        return function () {
            if (!this.__enhanced) {
                this.__enhanced = !0;
                i._$addEvent = i._$addEvent._$aop(e._$bind(this));
                i._$delEvent = i._$delEvent._$aop(n._$bind(this));
                i._$clearEvent = i._$clearEvent._$aop(r._$bind(this));
                i._$dispatchEvent = i._$dispatchEvent._$aop(a._$bind(this));
                if (!0) t.copy(t.P("nej.v"), i)
            }
        }
    }();
    if (!0) t.copy(t.P("nej.ut"), a);
    return a
}, 21, 18, 20, 23, 17, 19);
I$(43, function (t, e, n, i, s, r, a, o) {
    if ("trident" === t._$KERNEL.engine && t._$KERNEL.release >= "4.0" && t._$KERNEL.release <= "5.0") I$(72, function () {
        e.__formatPassData = function (t) {
            return JSON.stringify(t)
        }
    });
    if ("trident" === t._$KERNEL.engine && t._$KERNEL.release <= "3.0") I$(75, function (t) {
        var s = "MSG|", a = [];
        var o = function () {
            var t = unescape(window.name || "").trim();
            if (t && 0 == t.indexOf(s)) {
                window.name = "";
                var r = n._$string2object(t.replace(s, ""), "|"), a = (r.origin || "").toLowerCase();
                if (!a || "*" == a || 0 == location.href.toLowerCase().indexOf(a)) i._$dispatchEvent(window, "message", {
                    data: JSON.parse(r.data || "null"),
                    source: window.frames[r.self] || r.self,
                    origin: e.__formatOrigin(r.ref || document.referrer)
                })
            }
        };
        var c = function () {
            var t;
            var e = function (e, i, s) {
                if (n._$indexOf(t, e.w) < 0) {
                    t.push(e.w);
                    s.splice(i, 1);
                    e.w.name = e.d
                }
            };
            return function () {
                t = [];
                n._$reverseEach(a, e);
                t = null
            }
        }();
        e.__postMessage = function () {
            var t = function (t) {
                var e = {};
                t = t || r;
                e.origin = t.origin || "";
                e.ref = location.href;
                e.self = t.source;
                e.data = JSON.stringify(t.data);
                return s + n._$object2string(e, "|", !0)
            };
            return function (e, n) {
                a.unshift({w: e, d: escape(t(n))})
            }
        }();
        t._$$CustomEvent._$allocate({element: window, event: "message"});
        setInterval(c, 100);
        setInterval(o, 20)
    }, 73, 74);
    return e
}, 55, 71, 17, 23);
I$(29, function (t, e, n, i, s, r, a, o) {
    s._$postMessage = function () {
        var t = window.name || "_parent", s = {_top: window.top, _self: window, _parent: window.parent};
        return function (a, o) {
            if (e._$isString(a)) {
                a = s[a] || window.frames[a] || (n._$get(a) || r).contentWindow;
                if (!a) return
            }
            var c = e._$fetch({data: null, origin: "*", source: t}, o);
            i.__postMessage(a, c)
        }
    }();
    if (!0) t.copy(t.P("nej.j"), s);
    return s
}, 21, 17, 20, 43);
I$(87, function (t, e, n, i, s, r, a, o, c, _, u) {
    var f, l = {};
    o._$$ProxyFrame = n._$klass();
    f = o._$$ProxyFrame._$extend(t._$$ProxyAbstract);
    f.__init = function () {
        var t = "NEJ-AJAX-DATA:", e = !1;
        var n = function (e) {
            var n = e.data;
            if (0 == n.indexOf(t)) {
                n = JSON.parse(n.replace(t, ""));
                var i = l[n.key];
                if (i) {
                    delete l[n.key];
                    n.result = decodeURIComponent(n.result || "");
                    i.__onLoadRequest(n)
                }
            }
        };
        var s = function () {
            if (!e) {
                e = !0;
                i._$addEvent(window, "message", n)
            }
        };
        return function () {
            this.__super();
            s()
        }
    }();
    f.__doSendRequest = function (t) {
        var n = t.request, o = s._$getFrameProxy(n.url), c = l[o];
        if (!e._$isArray(c)) if (c) {
            this.__rkey = e._$uniqueID();
            l[this.__rkey] = this;
            var _ = e._$fetch({url: "", data: null, timeout: 0, method: "GET"}, n);
            _.key = this.__rkey;
            _.headers = t.headers;
            a._$postMessage(l[o], {data: _})
        } else {
            l[o] = [this.__doSendRequest._$bind(this, t)];
            r._$createXFrame({
                src: o, visible: !1, onload: function (t) {
                    var n = l[o];
                    l[o] = i._$getElement(t).contentWindow;
                    e._$reverseEach(n, function (t) {
                        try {
                            t()
                        } catch (e) {
                        }
                    })
                }
            })
        } else c.push(this.__doSendRequest._$bind(this, t))
    };
    f._$abort = function () {
        delete l[this.__rkey];
        this.__onAbort()
    };
    return o
}, 84, 17, 18, 23, 56, 20, 29);
I$(88, function (t, e, n, i, s, r, a, o, c, _, u, f) {
    var l, h = {}, d = "NEJ-UPLOAD-RESULT:";
    c._$$ProxyUpload = e._$klass();
    l = c._$$ProxyUpload._$extend(t._$$ProxyAbstract);
    l.__init = function () {
        var t = !1;
        var e = function (t) {
            var e = t.data;
            if (0 == e.indexOf(d)) {
                e = JSON.parse(e.replace(d, ""));
                var n = h[e.key];
                if (n) {
                    delete h[e.key];
                    n.__onLoadRequest(decodeURIComponent(e.result))
                }
            }
        };
        var n = function () {
            if (!t) {
                t = !0;
                i._$addEvent(window, "message", e)
            }
        };
        return function () {
            this.__super();
            n()
        }
    }();
    l.__destroy = function () {
        this.__super();
        s._$remove(this.__frame);
        delete this.__frame;
        window.clearTimeout(this.__timer);
        delete this.__timer
    };
    l.__onLoadRequest = function (t) {
        try {
            var e = s._$text2type(t, this.__request.type);
            this._$dispatchEvent("onload", e)
        } catch (n) {
            this._$dispatchEvent("onerror", {code: r._$CODE_ERREVAL, message: t})
        }
    };
    l.__doSendRequest = function () {
        var t = function () {
            var t, e;
            try {
                var t = this.__frame.contentWindow.document.body, e = (t.innerText || t.textContent || "").trim();
                if (e.indexOf(d) >= 0 || t.innerHTML.indexOf(d) >= 0) return
            } catch (n) {
                return
            }
            this.__onLoadRequest(e)
        };
        var e = function (t, n, i) {
            a._$request(t, {
                type: "json", method: "POST", cookie: i, mode: parseInt(n) || 0, onload: function (s) {
                    if (this.__timer) {
                        this._$dispatchEvent("onuploading", s);
                        this.__timer = window.setTimeout(e._$bind(this, t, n, i), 1e3)
                    }
                }._$bind(this), onerror: function (s) {
                    if (this.__timer) this.__timer = window.setTimeout(e._$bind(this, t, n, i), 1e3)
                }._$bind(this)
            })
        };
        return function (a) {
            var o = a.request, c = a.headers, u = o.data, f = n._$uniqueID();
            h[f] = this;
            u.target = f;
            u.method = "POST";
            u.enctype = r._$HEAD_CT_FILE;
            u.encoding = r._$HEAD_CT_FILE;
            var l = u.action || "", d = l.indexOf("?") <= 0 ? "?" : "&";
            u.action = l + d + "_proxy_=form";
            this.__frame = s._$createXFrame({
                name: f, onload: function (n) {
                    var s = i._$getElement(n);
                    i._$addEvent(s, "load", t._$bind(this));
                    u.submit();
                    var r = (u.nej_query || _).value;
                    if (r) {
                        var a = (u.nej_mode || _).value, o = "true" === (u.nej_cookie || _).value;
                        this.__timer = window.setTimeout(e._$bind(this, r, a, o), 100)
                    }
                }._$bind(this)
            })
        }
    }();
    l._$abort = function () {
        this.__onAbort();
    };
    return c
}, 84, 18, 17, 23, 20, 38, 52, 29);
I$(89, function (t, e, n, i, s, r, a, o) {
    s.__getProxyByMode = function (s, r, a) {
        var o = r ? {2: i._$$ProxyUpload} : {2: n._$$ProxyFrame, 3: e._$$ProxyFlash};
        return (o[s] || t._$$ProxyXHR)._$allocate(a)
    };
    return s
}, 79, 86, 87, 88);
I$(80, function (t, e, n, i, s, r) {
    if ("trident" === t._$KERNEL.engine && t._$KERNEL.release <= "5.0") I$(90, function () {
        e.__getProxyByMode = function () {
            var t = {0: 2, 1: 3};
            return e.__getProxyByMode._$aop(function (e) {
                var n = e.args, i = n[0] || 0;
                n[0] = n[1] ? 2 : t[i] || i
            })
        }()
    });
    return e
}, 55, 89);
I$(52, function (t, e, n, i, s, r, a, o, c, _) {
    var u = {}, f = c;
    a._$abort = function (t) {
        var e = u[t];
        if (e) e.req._$abort()
    };
    a._$filter = function (t) {
        f = t || c
    };
    a._$request = function () {
        var t = (location.protocol + "//" + location.host).toLowerCase();
        var i = function (e) {
            var i = n._$url2origin(e);
            return !!i && i != t
        };
        var a = function (t) {
            return (t || o)[e._$HEAD_CT] == e._$HEAD_CT_FILE
        };
        var _ = function (t) {
            var e = a(t.headers);
            if (!i(t.url) && !e) return s._$$ProxyXHR._$allocate(t); else return r.__getProxyByMode(t.mode, e, t)
        };
        var l = function (t, e) {
            var n = {data: e};
            var i = t.result.headers;
            if (i) n.headers = t.req._$header(i);
            return n
        };
        var h = function (t) {
            var e = u[t];
            if (e) {
                if (e.req) e.req._$recycle();
                delete u[t]
            }
        };
        var d = function (t, e) {
            var n = u[t];
            if (n) {
                var i = arguments[2];
                if ("onload" == e && n.result) i = l(n, i);
                h(t);
                var s = {type: e, result: i};
                f(s);
                if (!s.stopped) (n[e] || c)(s.result)
            }
        };
        var p = function (t, e) {
            d(t, "onload", e)
        };
        var g = function (t, e) {
            d(t, "onerror", e)
        };
        var m = function (t, e) {
            var i = t.indexOf("?") < 0 ? "?" : "&", e = e || "";
            if (n._$isObject(e)) e = n._$object2query(e);
            if (e) t += i + e;
            return t
        };
        return function (t, e) {
            e = e || {};
            var i = n._$uniqueID(), s = {result: e.result, onload: e.onload || c, onerror: e.onerror || c};
            u[i] = s;
            e.onload = p._$bind(null, i);
            e.onerror = g._$bind(null, i);
            if (e.query) t = m(t, e.query);
            var r = e.method || "";
            if ((!r || /get/i.test(r)) && e.data) {
                t = m(t, e.data);
                e.data = null
            }
            e.url = t;
            s.req = _(e);
            s.req._$send(e.data);
            return i
        }
    }();
    a._$upload = function (t, s) {
        t = i._$get(t);
        if (!t) return "";
        var r = n._$fetch({
            mode: 0,
            type: "json",
            query: null,
            cookie: !1,
            headers: {},
            onload: null,
            onerror: null,
            onuploading: null,
            onbeforerequest: null
        }, s);
        r.data = t;
        r.method = "POST";
        r.timeout = 0;
        r.headers[e._$HEAD_CT] = e._$HEAD_CT_FILE;
        return a._$request(t.action, r)
    };
    if (!0) t.copy(t.P("nej.j"), a);
    return a
}, 21, 38, 17, 20, 79, 80);
I$(36, function (t, e, n, i, s, r, a, o) {
    var c = n.extend({
        config: function () {
            this.supr()
        }, getRequestOption: function (t) {
            return i.deepCopy(t)
        }, $request: function (t) {
            if (!t.notShowLoading && i.showLoading) i.showLoading();
            var n = this.getRequestOption(t);
            n.sync = t.sync || !1;
            n.type = t.type || "json";
            n.data = t.data || {};
            n.query = t.query;
            n.mode = t.mode || 0;
            n.cookie = n.cookie || !1, n.method = t.method || "post";
            n.headers = t.headers || {"Content-Type": "application/json"};
            n.onload = this.onloadHandler._$bind(this, t.onload, t.notShowLoading, t);
            n.onerror = this.errorHandler._$bind(this, t.onpreError, t.onerror, t.notShowLoading, t.hideError);
            n.sessonbeforerequestion = n.onbeforerequest;
            e._$request(t.url, n)
        }, onloadHandler: function (t, e, n, s) {
            if (!e && i.hideLoading) i.hideLoading();
            if (!s || !s.code || "200" == s.code && 200 == s.code) t(s.data); else this.errorHandler(n.onpreError, n.onerror, n.notShowLoading, n.hideError, s)
        }, errorHandler: function (t, e, n, s, r) {
            if (!n && i.hideLoading) i.hideLoading();
            if (t) t(r);
            if (e) e(r); else {
                var a = r.code;
                var o = r.msg;
                if (!s) switch (a) {
                    case"":
                }
            }
        }
    });
    return c
}, 18, 52, 26, 25);
I$(15, function (t) {
    var e = t.extend({
        searchSession: function (t, e) {
            this.$request({
                url: "/api/query/sessionQuery.htm",
                method: "get",
                headers: {"Content-Type": "text/html"},
                data: t,
                onload: e
            })
        }, searchMsg: function (t, e) {
            this.$request({
                url: "/api/query/messageQuery.htm",
                method: "get",
                headers: {"Content-Type": "text/html"},
                data: t,
                onload: e
            })
        }, getUserType: function (t, e) {
            this.$request({
                url: "/api/query/consulationRoleAndContent.htm",
                method: "get",
                headers: {"Content-Type": "text/html"},
                data: t,
                onload: e
            })
        }, reportUser: function (t, e) {
            this.$request({
                url: "//study.163.com/common/antispam/reportIM.htm",
                method: "get",
                headers: {"Content-Type": "text/html"},
                data: t,
                onload: e
            })
        }
    });
    return e
}, 36);
I$(24, '<div class="m-mask" r-hide={!mask}></div>\n<div class="m-modal {@(class)} f-pa" r-style={{\'left\': left,\'top\': top}} on-keyup={this.keyup($event)} r-hide={!visible}>\n    <div class="modal_dialog" {#if width}style="width: {width}px"{/if} ref="dialog">\n        <div class="modal_hd f-cb">\n            <a class="modal_close" on-click={this.close(false)}></a>\n            <h3 class="modal_title">{title}</h3>\n        </div>\n        <div class="modal_bd">\n            {#if contentTemplate}{#inc @(contentTemplate)}{#else}{content}{/if}\n        </div>\n        <div class="modal_ft">\n            {#if okButton}\n            <a class="u-btn f-ib" on-click={this.close(true)}>{okButton === true ? \'确定\' : okButton}</a>\n            {/if}\n            {#if cancelButton}\n            <a class="u-btn gray f-ib" on-click={this.close(false)}>{cancelButton === true ? \'取消\' : cancelButton}</a>\n            {/if}\n        </div>\n    </div>\n</div>');
I$(5, function (t, e, n, i, s) {
    var r = RGUI.Modal.extend({
        template: t, config: function () {
            this.supr();
            s.extend(this.data, {mask: !0})
        }, init: function () {
            this.supr();
            i._$addEvent(window, "resize", this.onResize._$bind(this), !1);
            this.onResize();
            this.doPositionAlign()
        }, onResize: function () {
            if ((window.innerWidth || document.documentElement.clientWidth) < 250) {
                this.data.mask = !1;
                this.data.visible = !1
            } else {
                this.data.mask = !0;
                this.data.visible = !0
            }
            this.$update()
        }, close: function (t) {
            this.supr(t);
            this.closeFn && this.closeFn(t)
        }, doPositionAlign: function () {
            var t = function (t, e, n) {
                return Math.max(0, t[n] + e[n] / 2)
            }, i = ["left", "top"];
            return function () {
                var s = {}, r = this.$refs.dialog, a = e._$getPageBox(), o = {left: a.scrollLeft, top: a.scrollTop},
                    c = {left: a.clientWidth - r.offsetWidth, top: a.clientHeight - r.offsetHeight};
                n._$forEach(i, function (e, n) {
                    var i = t;
                    if (i) s[e] = i(o, c, e)
                }, this);
                this.data.top = s["top"] + "px";
                this.data.left = s["left"] + "px";
                this.$update()
            }
        }()
    });
    r.alert = function (t, e, n, i) {
        var s = new r({data: {content: t, title: e, okButton: n, mask: !0}, closeFn: i});
        return s
    };
    r.confirm = function (t, e, n, i, s) {
        var a = new r({data: {content: t, title: e, okButton: n, cancelButton: i || !0}, closeFn: s});
        return a
    };
    return r
}, 24, 20, 17, 23, 25);
I$(11, function (t, e, n, i, s, r, a, o, c, _) {
    var u = e.extend({
        template: t, name: "sessionList", config: function () {
            this.__sdk = i.getIns();
            this.__cache = n.getIns();
            this.__imcache = new a;
            this.data = {sessions: this.__cache._$getSessions(), searchsessions: null, showSearchSession: !1}
        }, init: function () {
            this.__searchUI = new r({
                data: {
                    clazz: "sessionsearch",
                    placeholder: "搜索联系人"
                }
            }).$inject(this.$refs.sessionsearchwrap);
            this.initEvent()
        }, initEvent: function () {
            this.__cache._$addEvent("nim_updatesessions", this.onUpdateSessions._$bind(this));
            this.__sdk._$addEvent("nim_syncdone", this.onUpdateSessions._$bind(this));
            this.__searchUI.$on("searchDo", this.onSearchDo._$bind(this));
            this.__searchUI.$on("searchCancel", this.onSearchCancel._$bind(this));
            this.__cache._$addEvent("nim_updatepersonlist", this.onUpdateSessions._$bind(this))
        }, onUpdateSessions: function () {
            var t = this.__cache._$getSessions();
            s._$studyIMDebugLog("sessionlist_sessions", t);
            this.$emit("hasSession", 0 != t.length);
            for (var e = 0; e < t.length; e++) {
                t[e].cur = !1;
                if (this.__curSessionId && t[e].id == this.__curSessionId) t[e].cur = !0
            }
            this.data.sessions = t;
            this.$update();
            this.autoScroll()
        }, autoScroll: function () {
            var t = 0;
            for (var e = 0; e < this.data.sessions.length; e++) if (this.data.sessions[e].cur) {
                t = e;
                break
            }
            if (t > 0) if (51 * (t + 1) > 421) this.$refs.sessionwrap.scrollTop = 51 * t
        }, $selectSession: function (t) {
            if (t) {
                var e = s._$getSessionIdByUserId(t);
                this.resetSearch();
                if (!this.checkSessionExist(e)) this.createNewSession(t);
                this.__curSessionId = e;
                this.__toUserId = t;
                this.__sdk._$setCurrSession(e);
                if (this.__toUserId) _._$postMessage("top", {data: '{"type":"ChatUserMessage","data":"' + this.__toUserId + '"}'})
            } else {
                this.__curSessionId = null;
                this.__toUserId = null;
                this.onUpdateSessions()
            }
        }, checkSessionExist: function (t) {
            var e = !1;
            if (this.data.showSearchSession && this.data.searchsessions) for (var n = 0; n < this.data.searchsessions.length; n++) if (this.data.searchsessions[n].id == t) {
                e = !0;
                return e
            }
            for (var n = 0; n < this.data.sessions.length; n++) if (this.data.sessions[n].id == t) {
                e = !0;
                return e
            }
            return e
        }, createNewSession: function (t) {
            this.__sdk._$addNewP2PSessions(t)
        }, clickSession: function (t, e) {
            if (!e) {
                this.__curSessionId = s._$getSessionIdByUserId(t);
                this.$emit("selectSession", {id: t})
            }
        }, onSearchDo: function (t) {
            this.__imcache.searchSession({
                fromAccid: s._$getFromAccid(),
                nickname: t
            }, this.cbGetSearchSessions._$bind(this))
        }, cbGetSearchSessions: function (t) {
            console && console.log(t);
            if (t) {
                var e = t.toAccid;
                if (!this.__cache._$getUserById(e)) this.__sdk._$getUser(e, function (t, e) {
                    if (!t && e) this.cbGetSearchUserInfo(e); else o.alert("不存在的用户", "提示")
                }._$bind(this)); else this.cbGetSearchUserInfo(this.__cache._$getUserById(e))
            } else o.alert("未搜索到相关联系人", "提示")
        }, cbGetSearchUserInfo: function (t) {
            this.data.showSearchSession = !0;
            var e = [{to: t.account, userInfo: t}];
            this.data.searchsessions = e;
            this.$update()
        }, onSearchCancel: function () {
            this.resetSearch();
            this.$update()
        }, resetSearch: function () {
            this.data.showSearchSession = !1;
            this.data.searchsessions = null;
            this.__searchUI.$reset()
        }
    });
    return u
}, 27, 26, 9, 4, 16, 28, 15, 5, 23, 29, 21);
I$(30, '<!-- 右侧聊天内容 -->\n<div class="u-chatcontent">\n\t<div class="sessionNoSelect" r-hide={curSessionId}>\n\t\t<div class="ht"></div>\n\t\t<div class="ic"></div>\n\t</div>\n\n\t<div class="chatmain" r-hide={!curSessionId}>\n\t\t<div class="chathead f-cb f-pr">\n\t\t\t<!-- 对方信息 -->\n\t\t\t{#if curUser}\n\t\t\t<div class="toinfo f-fl" r-hide={showsearch}>\n\t\t\t\t<img src="{curUser|getAvatar}" class="face f-fl">\n\t\t\t\t<div class="info f-fl">\n\t\t\t\t\t<h4 class="name f-thide" r-class={{\'big\':!curUserDes}} titlr="">{curUser.nick}</h4>\n\t\t\t\t\t<p class="des f-thide">{curUserDes}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t{/if}\n\n\t\t\t<!-- 操作按钮 -->\n\t\t\t<a class="reportbtn f-fr" on-click={this.showReport()} title="举报该用户"></a>\n\t\t\t<a class="searcbtn f-fr" on-click={this.showSearch()} title="搜索历史消息"></a>\n\n\t\t\t<!-- 搜索框 -->\n\t\t\t<div ref=msgsearchwrap r-hide={!showsearch}>\n\t\t\t\t\n\t\t\t</div>\n\n\t\t</div>\n\t\t\n\t\t<div class="f-pr chatedcon">\n\t\t\t<!-- 消息展示和发送 -->\n\t\t\t<div class="" r-hide={!showchat}>\n\t\t\t\t<div class="" ref=chatmsgswrap>\n\t\t    \t\t\n\t\t\t\t</div>\n\n\t\t\t\t<div class="" ref=chateditorwrap>\n\t\t\t\t\t    \n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<!-- 历史搜索结果 -->\n\t\t\t<div class="f-pa chathistorywrap" r-hide={!showsearchresult} ref=chathistorywrap>\n\t\t    \n\t\t\t</div>\n\t\t</div>\n\t\t\n\t</div>\n\t\n</div>');
I$(44, '<!-- 消息展示 -->\n<div class="u-msglist f-pr" id="j-msglistwrap" ref=msglistwrap>\n\t<!-- 错误信息，暂时用不上 -->\n\t<!-- <div class="error f-pa">\n\t\t<div class="econ">\n\t\t\t<div class="f-fl ic"></div>\n\t\t\t<span class="f-fl f-thide">错误</span>\n\n\t\t\t<a class="btn f-fr f-f0">重试</a>\n\t\t</div>\n\t</div> -->\n\n\t<!-- 当前会话消息列表 -->\n\t<div class="list" r-hide={showSearchMsgList}>\n\t\t<!-- loding -->\n\t\t<div class="loading" r-hide={!isLoadingHistoryMsg || hasNoHistory}><div class="cr"></div></div>\n\n\t\t<!-- 加载之前历史消息按钮 -->\n\t\t<div class="loadhisbtn f-pr" r-class={{\'nomore\':!hasMoreHistoryMsg}} on-click={this.loadMoreSeesionMsg()} r-hide={isLoadingHistoryMsg || hasNoHistory}>\n\t\t\t<div class="line"></div>\n\t\t\t{#if hasMoreHistoryMsg}\n\t\t\t<p class="f-pa txt">查看更多聊天记录</p>\n\t\t\t{#else}\n\t\t\t<p class="f-pa txt">没有更多记录了</p>\n\t\t\t{/if}\n\t\t</div>\n\t\n\t\t<!-- 消息列表 -->\n\t\t<msgs msgs={msgs} myinfo={myinfo} touser={touser} on-loadimmsgimg={this.loadIMMsgImg(hasNewMsg)}></msgs>\n\n\t</div>\n\n\t<!-- 历史消息列表 -->\n\t<div class="list" r-hide={!showSearchMsgList}>\n\n\t\t<!-- loding -->\n\t\t<div class="loading" r-hide={!isLoadingBeforeSearchMsg}><div class="cr"></div></div>\n\n\t\t<!-- 加载之前历史消息按钮 -->\n\t\t<div class="loadhisbtn f-pr" r-class={{\'nomore\':!hasMoreBeforeSearchMsg}} on-click={this.loadMoreSearchBeforeMsg()} r-hide={isLoadingBeforeSearchMsg}>\n\t\t\t<div class="line"></div>\n\t\t\t{#if hasMoreBeforeSearchMsg}\n\t\t\t<p class="f-pa txt">查看更多之前的记录</p>\n\t\t\t{#else}\n\t\t\t<p class="f-pa txt">没有更多记录了</p>\n\t\t\t{/if}\n\t\t</div>\n\t\t\n\t\t<!-- 消息列表 -->\n\t\t<msgs msgs={searchMsgs} myinfo={myinfo} touser={touser}></msgs>\n\n\t\t<!-- loding -->\n\t\t<div class="loading" r-hide={!isLoadingAfterSearchMsg}><div class="cr"></div></div>\n\n\t\t<!-- 加载之前历史消息按钮 -->\n\t\t<div class="loadhisbtn f-pr" r-class={{\'nomore\':!hasMoreAfterSearchMsg}} on-click={this.loadMoreSearchAfterMsg()} r-hide={isLoadingAfterSearchMsg}>\n\t\t\t<div class="line"></div>\n\t\t\t{#if hasMoreAfterSearchMsg}\n\t\t\t<p class="f-pa txt">查看更多之后的记录</p>\n\t\t\t{#else}\n\t\t\t<p class="f-pa txt">没有更多记录了</p>\n\t\t\t{/if}\n\t\t</div>\n\n\t</div>\n\n\t<!-- 新消息，点击查看 -->\n\t<div class="newmsgtip f-pa" r-hide={!showNewMsgTip}>\n\t\t<div class="econ">\n\t\t\t<div class="f-fl ic"></div>\n\t\t\t<span class="f-fl f-thide">有新消息，</span>\n\t\t\t<a class="btn f-fl f-f0" on-click={this.clickGotoNewMsg()}>点击查看</a>\n\t\t</div>\n\t</div>\n\n</div>');
I$(76, '<!-- 消息列表 -->\n{#if msgs.length > 0}\n{#list msgs as item}\n\n\t<!-- 时间tag -->\n\t{#if item.showTimeTag}\n\t<div class="timetag">{item.time|transTime}</div>\n\t{/if}\n\t\n\t<!-- 消息体 -->\n\t<div class="u-immsg f-cb" r-class={{\'mine\':item.ismine, \'to\':!item.ismine}}>\n\t\t<!-- 头像 -->\n\t\t<img src="{this.getAvatar(item)}" class="face" r-class={{\'f-fr\':item.ismine, \'f-fl\':!item.ismine}}>\n\n\t\t<div class="msgbody" r-class={{\'f-fr\':item.ismine, \'f-fl\':!item.ismine}} r-class={{\'active\':item.isActive}}>\n\t\t\t<div class="cor"></div>\n\t\t\t\t\n\t\t\t<!-- 具体消息内容 -->\n\t\t\t{#if item.type == \'text\'}\n\t\t\t<div class="txt">\n\t\t\t\t<p r-html={this.getTextMsgBody(item)}></p>\n\t\t\t\t<div class="status {item.status}">\n\t\t\t\t\t{#if item.status == \'fail\'}\n\t\t\t\t\t<div class="resend" on-click={this.resend(item)}>\n\t\t\t\t\t\t<span class="arr"></span>\n\t\t\t\t\t\t<span>重新发送消息</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t{/if}\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t{#elseif item.type == \'image\'}\n\t\t\t<div class="image">\n\t\t\t\t<div>{#inc this.getImageMsgBody(item)}</div>\n\t\t\t\t<div class="status {item.status}">\n\t\t\t\t\t{#if item.status == \'fail\'}\n\t\t\t\t\t<div class="resend" on-click={this.resend(item)}>\n\t\t\t\t\t\t<span class="arr"></span>\n\t\t\t\t\t\t<span>重新发送消息</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t{/if}\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t{#elseif item.type == \'file\'}\n\t\t\t<div class="file">\n\t\t\t\t<div class="wrap" r-html={this.getFileMsgBody(item)}></div>\n\t\t\t\t<div class="status {item.status}">\n\t\t\t\t\t{#if item.status == \'fail\'}\n\t\t\t\t\t<div class="resend" on-click={this.resend(item)}>\n\t\t\t\t\t\t<span class="arr"></span>\n\t\t\t\t\t\t<span>重新发送消息</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t{/if}\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t{#elseif item.type == \'audio\'}\n\t\t\t<div class="audio">\n\t\t\t\t<div>{#inc this.getAudioMsgBody(item)}</div>\n\t\t\t\t<div class="status {item.status}">\n\t\t\t\t\t{#if item.status == \'fail\'}\n\t\t\t\t\t<div class="resend" on-click={this.resend(item)}>\n\t\t\t\t\t\t<span class="arr"></span>\n\t\t\t\t\t\t<span>重新发送消息</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t{/if}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\t\n\t\t\t{#else}\n\t\t\t<div class="txt">\n\t\t\t\t<p>暂不支持该类型的消息</p>\n\t\t\t</div>\n\t\t\t{/if}\n\t\t\t\n\t\t</div>\n\t</div>\n\t\t\n{/list}\n{#else}\n\n{/if}\n\n');
I$(48, function (t, e, n, i) {
    t._$EmojiList = {
        "[大笑]": {file: "emoji_0.png"},
        "[可爱]": {file: "emoji_01.png"},
        "[色]": {file: "emoji_02.png"},
        "[嘘]": {file: "emoji_03.png"},
        "[亲]": {file: "emoji_04.png"},
        "[呆]": {file: "emoji_05.png"},
        "[口水]": {file: "emoji_06.png"},
        "[汗]": {file: "emoji_145.png"},
        "[呲牙]": {file: "emoji_07.png"},
        "[鬼脸]": {file: "emoji_08.png"},
        "[害羞]": {file: "emoji_09.png"},
        "[偷笑]": {file: "emoji_10.png"},
        "[调皮]": {file: "emoji_11.png"},
        "[可怜]": {file: "emoji_12.png"},
        "[敲]": {file: "emoji_13.png"},
        "[惊讶]": {file: "emoji_14.png"},
        "[流感]": {file: "emoji_15.png"},
        "[委屈]": {file: "emoji_16.png"},
        "[流泪]": {file: "emoji_17.png"},
        "[嚎哭]": {file: "emoji_18.png"},
        "[惊恐]": {file: "emoji_19.png"},
        "[怒]": {file: "emoji_20.png"},
        "[酷]": {file: "emoji_21.png"},
        "[不说]": {file: "emoji_22.png"},
        "[鄙视]": {file: "emoji_23.png"},
        "[阿弥陀佛]": {file: "emoji_24.png"},
        "[奸笑]": {file: "emoji_25.png"},
        "[睡着]": {file: "emoji_26.png"},
        "[口罩]": {file: "emoji_27.png"},
        "[努力]": {file: "emoji_28.png"},
        "[抠鼻孔]": {file: "emoji_29.png"},
        "[疑问]": {file: "emoji_30.png"},
        "[怒骂]": {file: "emoji_31.png"},
        "[晕]": {file: "emoji_32.png"},
        "[呕吐]": {file: "emoji_33.png"},
        "[拜一拜]": {file: "emoji_160.png"},
        "[惊喜]": {file: "emoji_161.png"},
        "[流汗]": {file: "emoji_162.png"},
        "[卖萌]": {file: "emoji_163.png"},
        "[默契眨眼]": {file: "emoji_164.png"},
        "[烧香拜佛]": {file: "emoji_165.png"},
        "[晚安]": {file: "emoji_166.png"},
        "[强]": {file: "emoji_34.png"},
        "[弱]": {file: "emoji_35.png"},
        "[OK]": {file: "emoji_36.png"},
        "[拳头]": {file: "emoji_37.png"},
        "[胜利]": {file: "emoji_38.png"},
        "[鼓掌]": {file: "emoji_39.png"},
        "[握手]": {file: "emoji_200.png"},
        "[发怒]": {file: "emoji_40.png"},
        "[骷髅]": {file: "emoji_41.png"},
        "[便便]": {file: "emoji_42.png"},
        "[火]": {file: "emoji_43.png"},
        "[溜]": {file: "emoji_44.png"},
        "[爱心]": {file: "emoji_45.png"},
        "[心碎]": {file: "emoji_46.png"},
        "[钟情]": {file: "emoji_47.png"},
        "[唇]": {file: "emoji_48.png"},
        "[戒指]": {file: "emoji_49.png"},
        "[钻石]": {file: "emoji_50.png"},
        "[太阳]": {file: "emoji_51.png"},
        "[有时晴]": {file: "emoji_52.png"},
        "[多云]": {file: "emoji_53.png"},
        "[雷]": {file: "emoji_54.png"},
        "[雨]": {file: "emoji_55.png"},
        "[雪花]": {file: "emoji_56.png"},
        "[爱人]": {file: "emoji_57.png"},
        "[帽子]": {file: "emoji_58.png"},
        "[皇冠]": {file: "emoji_59.png"},
        "[篮球]": {file: "emoji_60.png"},
        "[足球]": {file: "emoji_61.png"},
        "[垒球]": {file: "emoji_62.png"},
        "[网球]": {file: "emoji_63.png"},
        "[台球]": {file: "emoji_64.png"},
        "[咖啡]": {file: "emoji_65.png"},
        "[啤酒]": {file: "emoji_66.png"},
        "[干杯]": {file: "emoji_67.png"},
        "[柠檬汁]": {file: "emoji_68.png"},
        "[餐具]": {file: "emoji_69.png"},
        "[汉堡]": {file: "emoji_70.png"},
        "[鸡腿]": {file: "emoji_71.png"},
        "[面条]": {file: "emoji_72.png"},
        "[冰淇淋]": {file: "emoji_73.png"},
        "[沙冰]": {file: "emoji_74.png"},
        "[生日蛋糕]": {file: "emoji_75.png"},
        "[蛋糕]": {file: "emoji_76.png"},
        "[糖果]": {file: "emoji_77.png"},
        "[葡萄]": {file: "emoji_78.png"},
        "[西瓜]": {file: "emoji_79.png"},
        "[光碟]": {file: "emoji_80.png"},
        "[手机]": {file: "emoji_81.png"},
        "[电话]": {file: "emoji_82.png"},
        "[电视]": {file: "emoji_83.png"},
        "[声音开启]": {file: "emoji_84.png"},
        "[声音关闭]": {file: "emoji_85.png"},
        "[铃铛]": {file: "emoji_86.png"},
        "[锁头]": {file: "emoji_87.png"},
        "[放大镜]": {file: "emoji_88.png"},
        "[灯泡]": {file: "emoji_89.png"},
        "[锤头]": {file: "emoji_90.png"},
        "[烟]": {file: "emoji_91.png"},
        "[炸弹]": {file: "emoji_92.png"},
        "[枪]": {file: "emoji_93.png"},
        "[刀]": {file: "emoji_94.png"},
        "[药]": {file: "emoji_95.png"},
        "[打针]": {file: "emoji_96.png"},
        "[钱袋]": {file: "emoji_97.png"},
        "[钞票]": {file: "emoji_98.png"},
        "[银行卡]": {file: "emoji_99.png"},
        "[手柄]": {file: "emoji_100.png"},
        "[麻将]": {file: "emoji_101.png"},
        "[调色板]": {file: "emoji_102.png"},
        "[电影]": {file: "emoji_103.png"},
        "[麦克风]": {file: "emoji_104.png"},
        "[耳机]": {file: "emoji_105.png"},
        "[音乐]": {file: "emoji_106.png"},
        "[吉他]": {file: "emoji_107.png"},
        "[火箭]": {file: "emoji_108.png"},
        "[飞机]": {file: "emoji_109.png"},
        "[火车]": {file: "emoji_110.png"},
        "[公交]": {file: "emoji_111.png"},
        "[轿车]": {file: "emoji_112.png"},
        "[出租车]": {file: "emoji_113.png"},
        "[警车]": {file: "emoji_114.png"},
        "[自行车]": {file: "emoji_115.png"}
    };
    t._$buildEmoji = function (e) {
        var n = /\[([^\]\[]*)\]/g;
        var i = e.match(n) || [];
        for (var s = 0, r = i.length; s < r; ++s) if (t._$EmojiList[i[s]]) e = e.replace(i[s], '<img class="emoji" src="//' + window.static_host + "/res/images/im/emoji/" + t._$EmojiList[i[s]].file + '" />');
        return e
    };
    return t
});
I$(50, function (t, e, n, i, s, r) {
    n._$SERVER_MSG_TYPE = {0: "text", 1: "image", 2: "audio", 3: "video", 4: "geo", 6: "file", 100: "custom"};
    n._$transTime = function () {
        var t = function (t) {
            t.setMinutes(0);
            t.setSeconds(0);
            t.setMilliseconds(0);
            t.setHours(0);
            var e = t.getTime();
            t.setMonth(1);
            t.setDate(1);
            var n = t.getTime();
            return [e, n]
        };
        return function (e) {
            var i = t(new Date);
            if (e >= i[0]) return n._$dateFormat(e, "HH:mm:ss"); else if (e < i[0] && e >= i[1]) return n._$dateFormat(e, "MM-dd HH:mm:ss"); else return n._$dateFormat(e, "yyyy-MM-dd HH:mm:ss")
        }
    }();
    var a = function (t, e) {
        e = "" + e;
        if (!t || !e) return e || ""; else return e.replace(t.r, function (e) {
            var n = t[!t.i ? e.toLowerCase() : e];
            return null != n ? n : e
        })
    };
    n._$dateFormat = function () {
        var t = {i: !0, r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g}, e = ["上午", "下午"],
            n = ["A.M.", "P.M."], i = ["日", "一", "二", "三", "四", "五", "六"],
            s = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
            r = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var o = function (t) {
            t = parseInt(t) || 0;
            return (t < 10 ? "0" : "") + t
        };
        var c = function (t) {
            return t < 12 ? 0 : 1
        };
        return function (_, u, f) {
            if (!_ || !u) return "";
            _ = new Date(_);
            t.yyyy = _.getFullYear();
            t.yy = ("" + t.yyyy).substr(2);
            t.M = _.getMonth() + 1;
            t.MM = o(t.M);
            t.eM = r[t.M - 1];
            t.cM = s[t.M - 1];
            t.d = _.getDate();
            t.dd = o(t.d);
            t.H = _.getHours();
            t.HH = o(t.H);
            t.m = _.getMinutes();
            t.mm = o(t.m);
            t.s = _.getSeconds();
            t.ss = o(t.s);
            t.ms = _.getMilliseconds();
            t.w = i[_.getDay()];
            var l = c(t.H);
            t.ct = e[l];
            t.et = n[l];
            if (f) t.H = t.H % 12;
            return a(t, u)
        }
    }();
    n._$fileSize = function (t) {
        if (0 === t) return "0 B";
        var e = 1024;
        var n = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
        var i = Math.floor(Math.log(t) / Math.log(e));
        return (t / Math.pow(e, i)).toPrecision(3) + " " + n[i]
    };
    Regular.filter("transTime", function (t, e) {
        return n._$transTime(t)
    });
    return n
}, 17, 48);
I$(77, function (t, e, n, i, s, r, a) {
    function o(t) {
        if (t && f) t(); else {
            if (l) l = u.clearInterval(l);
            l = u.setInterval(function () {
                if (t && f) {
                    try {
                        t()
                    } catch (e) {
                    }
                    l = u.clearInterval(l)
                }
            }._$bind(this), 100)
        }
    }

    function c(t) {
        d && d(t)
    }

    function _(t) {
        d && d("complete");
        n.alert("音频文件播放错误:" + t, "提示")
    }

    var u = window;
    var f, l, h, d;
    !function p() {
        h = NEJ.P("edu.im.audioPlayer");
        h.onState = c._$bind(this);
        h.onError = _._$bind(this);
        e._$flash({
            src: u.imageUrlMap.audioPlayerSwf,
            width: "1",
            height: "1",
            parent: document.body,
            params: {wmode: "transparent", allowscriptaccess: "always", flashvars: "namespace=edu.im.audioPlayer"},
            onready: function (t) {
                f = t
            }._$bind(this)
        })
    }();
    i._$playAudioMsg = function (t, e) {
        d = e;
        o(function () {
            var e = {file: t, start: 0};
            f.load(e);
            f.doPlay()
        })
    };
    i._$stopPlayAudioMsg = function () {
        o(function () {
            f.doStop()
        })
    };
    return i
}, 17, 83, 5);
I$(45, function (t, e, n, i, s, r, a, o, c) {
    var _ = e.extend({
        template: t, name: "msgs", config: function () {
            this.supr();
            this.__sdk = i.getIns();
            this.__cache = n.getIns();
            this.$watch("msgs", this.update._$bind(this))
        }, formatMsgs: function (t) {
            for (var e = 0; e < t.length; e++) {
                if (t[e].from == this.data.myinfo.account) t[e].ismine = !0;
                t[e].showTimeTag = !1;
                if (0 == e) t[e].showTimeTag = !0; else if (t[e].time - t[e - 1].time > 6e4) t[e].showTimeTag = !0
            }
            return t
        }, update: function (t) {
            this.data.msgs = this.formatMsgs(t || [])
        }, getAvatar: function (t) {
            if (t.ismine) return s._$getAvatar(this.data.myinfo); else return s._$getAvatar(this.data.touser)
        }, getTextMsgBody: function (t, e) {
            var n = /(http:\/\/[\w.\/]+)(?![^<]+>)/gi;
            var i = a._$escape(t.text);
            i = i.replace(n, "<a href='$1' target='_blank'>$1</a>");
            i = o._$buildEmoji(i);
            return i
        }, getImageMsgBody: function (t, e) {
            t.file.url = a._$escape(t.file.url);
            var n;
            n = '<a href="' + t.file.url + '?imageView" target="_blank">                        <img src="' + t.file.url + '" on-load={this.loadIMMsgImg()}/>                    </a>';
            return n
        }, loadIMMsgImg: function () {
            this.$emit("loadimmsgimg")
        }, getFileMsgBody: function (t, e) {
            var n;
            if (/xls|xlsx|ppt|pptx|doc|docx|pdf|txt|rar|zip|7z|gz|tar|png|jpg|bmp|jpeg|gif|mp3|midi|mid|wma|m4a|wav/i.test(t.file.ext)) {
                t.file.url = a._$escape(t.file.url);
                var i = window.imageUrlMap.imFileMsgDefaultIcon;
                if (/png|jpg|bmp|jpeg|gif/i.test(t.file.ext)) i = t.file.url;
                var s = r._$fileSize(t.file.size);
                var o = t.file.url + "?download=" + encodeURIComponent(t.file.name);
                n = '<img src="' + i + '" class="ic f-fl">                        <div class="fcon f-fl">                            <p class="name">' + a._$escape(t.file.name) + '</p>                            <p><span class="size">' + s + '</span><a href="' + o + '" class="dlbtn" target="_blank">下载</a></p>                        </div>'
            } else n = '<p class="warn">[非法文件，已被拦截]</p>';
            return n
        }, getAudioMsgBody: function (t, e) {
            var n;
            if (t.file) {
                var i = Math.round(t.file.dur / 1e3);
                var s, r = 190, a = 50;
                s = i + a;
                s = s > r ? r : s;
                n = '<div class="f-cb" on-click={this.playAudioMsg(item)} style="width:' + s + 'px;">                            <div class="sec">' + i + '"</div>                            <div class="ic" r-class={{\'play\':item.isPlaying}}></div>                        </div>'
            }
            return n
        }, playAudioMsg: function (t) {
            if (!t.isPlaying) {
                for (var e = this.data.msgs.length - 1; e >= 0; e--) if (this.data.msgs[e].idClient != t.idClient && "audio" == this.data.msgs[e].type) {
                    this.data.msgs[e].isPlaying = !1;
                    this.data.msgs[e].isActive = !1
                }
                c._$stopPlayAudioMsg();
                c._$playAudioMsg(t.file.url, function (e) {
                    if ("playing" == e || "buffering" == e) {
                        t.isPlaying = !0;
                        t.isActive = !0
                    } else {
                        t.isPlaying = !1;
                        t.isActive = !1
                    }
                    this.$update()
                }._$bind(this))
            } else {
                t.isPlaying = !1;
                t.isActive = !1;
                c._$stopPlayAudioMsg()
            }
        }, resend: function (t) {
            this.__sdk._$resendMsg(t)
        }
    });
    return _
}, 76, 26, 9, 4, 16, 50, 17, 48, 77);
I$(31, function (t, e, n, i, s, r) {
    var a = e.extend({
        template: t, name: "msgList", config: function () {
            this.__sdk = s.getIns();
            this.__cache = i.getIns();
            this.initEvent();
            this.data = {
                msgs: [],
                isLoadingBeforeMsg: !1,
                hasMoreHistoryMsg: !0,
                showNewMsgTip: !1,
                searchMsgs: [],
                showSearchMsgList: !1,
                isLoadingBeforeSearchMsg: !1,
                hasMoreBeforeSearchMsg: !0,
                isLoadingAfterSearchMsg: !1,
                hasMoreAfterSearchMsg: !0
            }
        }, initEvent: function () {
            this.__cache._$addEvent("nim_msgs", this.onUpdateMsgs._$bind(this));
            this.__sdk._$addEvent("nim_syncdone", this.onUpdateMsgs._$bind(this));
            this.__cache._$addEvent("nim_updatepersonlist", this.onUpdateMsgs._$bind(this))
        }, $showSessionMsg: function (t) {
            if (this.__toUserId != t) {
                this.__toUserId = t;
                this.lastMsgCount = 0;
                this.lastLastMsgId = null;
                this.lastLastMsgStatus = null;
                this.data.isLoadingBeforeMsg = !1;
                this.data.hasMoreHistoryMsg = !0;
                this.data.showNewMsgTip = !1
            }
            this.data.showSearchMsgList = !1;
            this.data.hasNoHistory = !1;
            this.onUpdateMsgs();
            this.scrollToNewMsg()
        }, onUpdateMsgs: function () {
            if (this.__toUserId) {
                this.data.msgs = this.__cache._$getMsgs(this.__toUserId);
                this.data.touser = this.__cache._$getUserById(this.__toUserId);
                this.data.myinfo = this.__cache._$getMyInfo();
                r._$studyIMDebugLog("msglist_cur_session_msgs", this.data.msgs);
                if (this.hasNewMsg()) {
                    this.data.hasNewMsg = !0;
                    if (this.data.showSearchMsgList && this.hasOtherFromNewMsg(this.data.msgs)) this.data.showNewMsgTip = !0
                } else this.data.hasNewMsg = !1;
                this.lastMsgCount = this.data.msgs.length;
                var t = this.data.msgs ? this.data.msgs[this.data.msgs.length - 1] : null;
                this.lastLastMsgId = t ? t.idClient : null;
                this.lastLastMsgStatus = t ? t.status : null;
                this.$update();
                if (this.data.hasNewMsg) this.scrollToNewMsg()
            }
        }, hasNewMsg: function () {
            var t = this.data.msgs;
            if (!this.lastLastMsgId) return !0;
            if (t.length >= this.lastMsgCount && (this.lastLastMsgId != t[t.length - 1].idClient || this.lastLastMsgStatus != t[t.length - 1].status)) return !0; else return !1
        }, hasOtherFromNewMsg: function (t) {
            var e = t[t.length - 1];
            return e.from == this.__toUserId
        }, scrollToNewMsg: function () {
            this.$refs.msglistwrap.scrollTop = 99999
        }, loadIMMsgImg: function (t) {
            if (t) this.$refs.msglistwrap.scrollTop = 99999
        }, loadMoreSeesionMsg: function () {
            if (this.data.hasMoreHistoryMsg) {
                this.data.isLoadingHistoryMsg = !0;
                var t = this.data.msgs ? this.data.msgs[0] : null;
                this.__sdk._$getHistoryMsgs(this.__toUserId, t, !0, 10, !0, function (t, e) {
                    if (!t) {
                        this.data.isLoadingHistoryMsg = !1;
                        if (!e.msgs || e.msgs && 0 == e.msgs.length) this.data.hasMoreHistoryMsg = !1;
                        this.onUpdateMsgs()
                    }
                }._$bind(this))
            }
        }, $showSearchResultMsg: function (t) {
            this.data.showSearchMsgList = !0;
            this.data.searchMsgs = t;
            this.data.touser = this.__cache._$getUserById(this.__toUserId);
            this.data.myinfo = this.__cache._$getMyInfo();
            this.data.isLoadingBeforeSearchMsg = !1;
            this.data.hasMoreBeforeSearchMsg = !0;
            this.data.isLoadingAfterSearchMsg = !1;
            this.data.hasMoreAfterSearchMsg = !0;
            this.$update()
        }, loadMoreSearchBeforeMsg: function () {
            if (this.data.hasMoreBeforeSearchMsg) {
                this.data.isLoadingBeforeSearchMsg = !0;
                var t = this.data.searchMsgs ? this.data.searchMsgs[0] : null;
                this.__sdk._$getHistoryMsgs(this.__toUserId, t, !0, 10, !1, function (t, e) {
                    if (!t) {
                        this.data.isLoadingBeforeSearchMsg = !1;
                        if (!e.msgs || e.msgs && 0 == e.msgs.length) this.data.hasMoreBeforeSearchMsg = !1; else this.data.searchMsgs = this.__sdk._$mergeHistoryMsgs(e.msgs, this.data.searchMsgs);
                        this.$update()
                    }
                }._$bind(this))
            }
        }, loadMoreSearchAfterMsg: function () {
            if (this.data.hasMoreAfterSearchMsg) {
                this.data.isLoadingAfterSearchMsg = !0;
                var t = this.data.searchMsgs ? this.data.searchMsgs[this.data.searchMsgs.length - 1] : null;
                this.__sdk._$getHistoryMsgs(this.__toUserId, t, !1, 10, !1, function (t, e) {
                    if (!t) {
                        this.data.isLoadingAfterSearchMsg = !1;
                        if (!e.msgs || e.msgs && 0 == e.msgs.length) this.data.hasMoreAfterSearchMsg = !1; else this.data.searchMsgs = this.__sdk._$mergeHistoryMsgs(e.msgs, this.data.searchMsgs);
                        this.$update()
                    }
                }._$bind(this))
            }
        }, clickGotoNewMsg: function () {
            this.data.showNewMsgTip = !1;
            this.$showSessionMsg(this.__toUserId)
        }
    });
    return a
}, 44, 26, 45, 9, 4, 16);
I$(46, '<div class="chat-editor box-sizing" id="j-chatEditor" data-disabled="1">\n    <div class="f-cb bar">\n\n        <a href="javascript:;" on-click="{this.uploadImg()}"><i class="icon icon-pic"></i><span>图片</span></a>\n        <a href="javascript:;" on-click="{this.uploadFile()}"><i class="icon icon-file"></i><span>文件</span></a>\n        <emoji on-add2content="{this.insertText($event)}"/>\n        <form action="#" id="j-uploadForm">\n            {#if updateInputFile}\n            <input type="file" on-change="{this.afterChooseFile($event)}" name="file" ref=uploadFile id="j-uploadFile" class="f-dn"/>\n            <input type="file" on-change="{this.afterChooseFile($event)}" name="file" ref=uploadImg id="j-uploadImg" class="f-dn" accept="image/*" />\n            {/if}\n        </form>\n\n    </div>\n    <div class="f-cb f-pr content">\n        <textarea ref=msginput id="j-messageText" ref=messageText class="f-pr msg-input box-sizing f-fl {message==defaultMessage?\'color-c\':\'\'}" rows="1" maxlength="500" r-pojo="message" on-focus="{this.onFocus()}" on-blur="{this.onBlur()}" r-html="{message}" on-keypress="{this.enterKey($event)}"></textarea>\n\n        <span class="placeholder f-pa" on-click="{this.onclickHint()}" r-hide={!showplaceholder}>按Enter可以直接发送...</span>\n        <a href="javascript:;" on-click="{this.sendTextMsg()}" class="u-btn btn-send f-fl" id="j-sendBtn">发送</a>\n    </div>\n</div>');
I$(78, '<a href="javascript:;" on-click="{this.openBox($event)}"><i class="icon icon-emo"></i><span>表情</span></a>\n<div class="m-emoji-wrapper" on-click="{this.clickBox($event)}" ref=emojibox r-class={{\'f-dn\':!openFlag,\'\':openFlag}} >\n    <div class="m-emoji-picCol" style="width:290px; height: 180px;">\n        <ul class="m-emoji-picCol-ul" style="height: auto;">\n            {#list emojiList as emo }\n            <span on-click="{this.addToContent(emo.name)}">\n                <img src="//{static_host}/res/images/im/emoji/{emo.url}">\n            </span>\n            {/list}\n        </ul>\n    </div>\n</div>');
I$(47, function (t, e, n, i) {
    var s = n.extend({
        template: t, name: "emoji", data: {
            openFlag: !1, emojiList: [], static_host: window.static_host
        }, config: function () {
            for (var t in e._$EmojiList) this.data.emojiList.push({name: t, url: e._$EmojiList[t].file})
        }, init: function () {
            i._$addEvent(document.body, "click", this.closeBox._$bind(this))
        }, openBox: function (t) {
            i._$stopBubble(t);
            this.data.openFlag = !this.data.openFlag
        }, clickBox: function (t) {
            i._$stopBubble(t)
        }, closeBox: function () {
            this.data.openFlag = !1;
            this.$update()
        }, addToContent: function (t) {
            this.data.openFlag = !this.data.openFlag;
            this.$emit("add2content", t)
        }
    });
    return s
}, 78, 48, 26, 23);
I$(32, function (t, e, n, i, s, r, a) {
    var o = i.extend({
        template: t,
        name: "chatEditor",
        data: {showplaceholder: !0, message: "", curentType: "", to: "test", scene: "p2p", updateInputFile: !0},
        config: function () {
        },
        onFocus: function () {
            this.data.showplaceholder = !1
        },
        onBlur: function () {
            if ("" == this.data.message) this.data.showplaceholder = !0
        },
        onclickHint: function () {
            this.$refs.msginput.focus()
        },
        insertText: function (t) {
            this.data.message = this.data.message + t;
            this.$refs.messageText.focus();
            if (this.data.showplaceholder) {
                this.data.showplaceholder = !1;
                this.$update()
            }
        },
        uploadFile: function (t) {
            this.data.curentType = "file";
            document.getElementById("j-uploadFile").click()
        },
        uploadImg: function (t) {
            this.data.curentType = "pic";
            document.getElementById("j-uploadImg").click()
        },
        afterChooseFile: function (t) {
            fileInput = t.target;
            if (fileInput && fileInput.files && (!fileInput.files || fileInput.files[0])) if (0 != fileInput.files[0].size) {
                if ("pic" == this.data.curentType) {
                    var e = fileInput.value;
                    var n = e.substring(e.lastIndexOf(".") + 1, e.length);
                    var i = /png|jpg|bmp|jpeg|gif/i.test(n) ? "image" : "file";
                    if ("image" != i) r.alert("请选择图片", "提示")
                }
                this.data.updateInputFile = !1;
                this.$emit("selectFile");
                s.getIns()._$previewFile(this.data.scene, this.data.to, fileInput, this.sendMsgDone.bind(this))
            } else r.alert("不能传空文件", "提示")
        },
        enterKey: function (t) {
            var e = t.which || t.keyCode;
            this.data.showplaceholder = !1;
            if (13 == e && this.data.message.length > 0) {
                this.data.curentType = "text";
                s.getIns()._$sendTextMessage(this.data.scene, this.data.to, this.data.message, this.sendMsgDone.bind(this))
            }
        },
        sendTextMsg: function () {
            if (this.data.message.length > 0) {
                this.data.curentType = "text";
                s.getIns()._$sendTextMessage(this.data.scene, this.data.to, this.data.message, this.sendMsgDone.bind(this))
            }
        },
        sendMsgDone: function () {
            if ("text" == this.data.curentType) {
                this.data.message = "";
                this.$update();
                this.$refs.messageText.focus()
            }
            this.data.updateInputFile = !0;
            this.$update()
        },
        $setTo: function (t) {
            if (t) {
                this.data.message = "";
                this.data.to = t
            }
        }
    });
    return o
}, 46, 47, 48, 26, 4, 5, 23);
I$(49, '<!-- 消息搜索结果列表 -->\n<div class="u-historysearchresult">\n\t{#if resultlist}\n\t<div class="">\t\n\t\t{#list resultlist as item}\n\t\t<div class="item f-cb f-pr" on-click={this.clickItem(item_index)}>\n\t\t\t<img src="{item.userInfo|getAvatar}" class="face f-fl">\n\n\t\t\t<div class="scon">\n\t\t\t\t<p class="line1 f-thide"><span class="name">{item.userInfo.nick}</span> <span>{item.sendtime|transTime}</span></p>\n\t\t\t\t<p class="line2 f-thide"><span class="key">{item.body.msg}</span></p>\n\t\t\t</div>\n\n\t\t\t<span class="arr"></span>\n\t\t</div>\n\t\t{/list}\n\t</div>\n\t<p class="info">共{resultlist.length}条聊天记录</p>\n\t{#else}\n\t<p class="info">没有搜索到相关聊天记录</p>\n\t{/if}\n</div>');
I$(33, function (t, e, n, i, s, r, a) {
    var o = e.extend({
        template: t, name: "historySearchResult", config: function () {
            this.__sdk = i.getIns();
            this.__cache = n.getIns();
            this.__imcache = new a;
            this.data = {resultlist: null}
        }, $setSearchUser: function (t) {
            this.__toUserId = t;
            if (this.__toUserId) this.data.userInfo = this.__cache._$getUserById(this.__toUserId)
        }, $searchHistory: function (t) {
            this.__imcache.searchMsg({
                keyword: t,
                fromAccid: s._$getFromAccid(),
                toAccid: this.__toUserId
            }, this.cbSearchHistory._$bind(this))
        }, cbSearchHistory: function (t) {
            if (!t.msgs) this.data.resultlist = null; else {
                this.data.resultlist = t.msgs || [];
                for (var e = 0; e < this.data.resultlist.length; e++) this.data.resultlist[e].userInfo = this.__cache._$getUserById(this.data.resultlist[e].from)
            }
            this.$update()
        }, $clearSearch: function () {
        }, clickItem: function (t) {
            var e = this.data.resultlist[t];
            var n = {
                from: e.from,
                idServer: e.msgid,
                scene: "p2p",
                sessionId: s._$getSessionIdByUserId(e.from),
                status: "success",
                text: e.body.msg,
                time: e.sendtime,
                to: e.from == this.__toUserId ? s._$getFromAccid() : this.__toUserId,
                type: r._$SERVER_MSG_TYPE[e.type]
            };
            this.__toShowMsgs = [n];
            this.__hasGetBeforeMsg = !1;
            this.__sdk._$getHistoryMsgs(this.__toUserId, n, !0, 3, !1, this.cbGetBeforeSearchMsg._$bind(this));
            this.__hasGetAfterMsg = !1;
            this.__sdk._$getHistoryMsgs(this.__toUserId, n, !1, 3, !1, this.cbGetAfterSearchMsg._$bind(this))
        }, cbGetBeforeSearchMsg: function (t, e) {
            this.__hasGetBeforeMsg = !0;
            if (!t) this.__toShowMsgs = this.__sdk._$mergeHistoryMsgs(e.msgs || [], this.__toShowMsgs);
            if (this.__hasGetBeforeMsg && this.__hasGetAfterMsg) this.$emit("showSearchResult", this.__toShowMsgs)
        }, cbGetAfterSearchMsg: function (t, e) {
            this.__hasGetAfterMsg = !0;
            if (!t) this.__toShowMsgs = this.__sdk._$mergeHistoryMsgs(e.msgs || [], this.__toShowMsgs);
            if (this.__hasGetBeforeMsg && this.__hasGetAfterMsg) this.$emit("showSearchResult", this.__toShowMsgs)
        }
    });
    return o
}, 49, 26, 9, 4, 16, 50, 15);
I$(51, '<div class="u-imuploadstate">\n\t<p class="filename f-thide">{filename}</p>\n\t<div class="pro f-cb">\n\t\t{#if error}\n\t\t<span class="f-fl error">上传失败：{error}</span>\n\t\t{#else}\n\t\t{#if percentage < 0}\n\t\t<span class="f-fl pertxt">正在上传...</span>\n\t\t{#else}\n\t\t<div class="linewrap f-fl">\n\t\t\t<div class="line" style="width:{percentage}%;"></div>\n\t\t</div>\n\t\t<span class="f-fr pertxt">{percentage}%</span>\n\t\t{/if}\n\t\t{/if}\n\t</div>\n</div>');
I$(34, function (t, e, n, i, s, r, a, o) {
    var c = n.extend({
        name: "uploadStateUI", config: function () {
            this.supr();
            this.__sdk = o.getIns();
            this.__cache = a.getIns();
            r.extend(this.data, {
                mask: !0,
                title: "正在上传中，请稍候...",
                contentTemplate: t,
                percentage: -1,
                uploadfail: !1,
                okButton: !1,
                cancelButton: "取消",
                error: null
            }, !0)
        }, init: function () {
            this.supr();
            this.__sdk._$addEvent("uploadFileStart", this.onUploadFileStart._$bind(this));
            this.__sdk._$addEvent("uploadFilePropress", this.onUploadFilePropress._$bind(this));
            this.__sdk._$addEvent("uploadFileSuccess", this.onUploadFileSuccess._$bind(this));
            this.__sdk._$addEvent("uploadFileFail", this.onUploadFileFail._$bind(this))
        }, close: function (t) {
            this.supr(t);
            this.data.percentage = 0;
            this.data.filename = "";
            this.data.error = null;
            if (!t) this.__sdk._$cancelSendFileMessage(this.uploadId)
        }, onUploadFileStart: function (t) {
            this.data.percentage = 0;
            this.data.error = null;
            this.data.filename = t.fileName;
            this.uploadId = t.uploadId;
            this.$update()
        }, onUploadFilePropress: function (t) {
            if (t.uploadId == this.uploadId) {
                this.data.percentage = t.percentage;
                this.$update()
            }
        }, onUploadFileSuccess: function (t) {
            if (t.uploadId == this.uploadId) this.close(!0)
        }, onUploadFileFail: function (t) {
            if (t.uploadId == this.uploadId) {
                this.data.error = t.error;
                this.$update()
            }
        }
    });
    c.showUploadStateUI = function () {
        var t = new c({});
        return t
    };
    return c
}, 51, 26, 5, 20, 17, 25, 9, 4);
I$(12, function (t, e, n, i, s, r, a, o, c, _, u) {
    var f = e.extend({
        template: t, name: "chatContent", config: function () {
            this.__imcache = new c;
            this.__sdk = _.getIns();
            this.__cache = o.getIns();
            this.data = {
                curSessionId: null,
                curUser: null,
                curUserDes: null,
                myInfo: this.__cache._$getMyInfo(),
                showsearch: !1,
                showsearchresult: !1,
                showchat: !0
            }
        }, init: function () {
            this.__chatMsgList = new n({}).$inject(this.$refs.chatmsgswrap);
            this.__chatHistoryResult = new s({}).$inject(this.$refs.chathistorywrap);
            this.__chatEditor = new i({}).$inject(this.$refs.chateditorwrap);
            this.__searchUI = new r({
                data: {
                    clazz: "msgsearch",
                    placeholder: "搜索聊天记录"
                }
            }).$inject(this.$refs.msgsearchwrap);
            this.initEvent()
        }, initEvent: function () {
            this.__searchUI.$on("searchDo", this.onSearchDo._$bind(this));
            this.__searchUI.$on("searchCancel", this.onSearchCancel._$bind(this));
            this.__chatHistoryResult.$on("showSearchResult", this.onShowSearchItem._$bind(this));
            this.__chatEditor.$on("selectFile", this.onSelectFile._$bind(this))
        }, $selectSession: function (t) {
            if (t) {
                this.__userAcount = t;
                this.data.curSessionId = u._$getSessionIdByUserId(this.__userAcount);
                this.data.curUser = this.__cache._$getUserById(this.__userAcount);
                this.__imcache.getUserType({accid: this.__userAcount}, this.cbGetUserType._$bind(this));
                this.$update();
                this.__chatMsgList.$showSessionMsg(this.__userAcount);
                this.__chatHistoryResult.$setSearchUser(this.__userAcount);
                this.__chatEditor.$setTo(this.__userAcount)
            } else {
                this.data.curSessionId = null;
                this.data.curUser = null;
                this.$update()
            }
        }, cbGetUserType: function (t) {
            if (null != t) switch (t) {
                case-1:
                    this.data.curUserDes = "云课堂官方服务账号";
                    this.$update();
                    break;
                case 0:
                    this.data.curUserDes = "课程服务团队成员";
                    this.$update();
                    break;
                case-2:
                    this.data.curUserDes = null;
                    this.$update()
            }
        }, showReport: function () {
            this.$emit("reportuser", {id: this.__userAcount})
        }, showSearch: function () {
            this.data.showsearch = !0
        }, onSearchDo: function (t) {
            this.data.showsearchresult = !0;
            this.data.showchat = !1;
            this.__chatHistoryResult.$searchHistory(t);
            this.$update()
        }, onShowSearchItem: function (t) {
            this.data.showsearchresult = !1;
            this.data.showchat = !0;
            this.$update();
            this.__chatMsgList.$showSearchResultMsg(t)
        }, onSearchCancel: function () {
            this.data.showsearch = !1;
            this.data.showsearchresult = !1;
            this.data.showchat = !0;
            this.$update();
            this.__chatHistoryResult.$clearSearch();
            this.__chatMsgList.$showSessionMsg(this.__userAcount)
        }, onSelectFile: function () {
            a.showUploadStateUI()
        }
    });
    return f
}, 30, 26, 31, 32, 33, 28, 34, 9, 15, 4, 16, 21);
I$(35, '<div class="tips-box cnt-message">\n    <div class="icon-mail "></div>\n    {#if tipTxt > 0}\n    <div class="icon-cnt f-f0">{tipTxt}</div>\n    {/if}\n    <div class="icon-text f-f0">私信</div>\n</div>\n\n');
I$(13, function (t, e, n, i, s, r, a, o, c) {
    var _ = e.extend({
        template: t, name: "tips", data: {totalCount: 0, msgCount: 0}, config: function () {
            this.__sdk = r.getIns();
            this.__cache = s.getIns();
            this.__curSessionId = null;
            this.initEvent()
        }, init: function () {
            this.supr();
            this.data.totalCount = this.__cache._$getTotalUnreadCount();
            this.updateTipTxt()
        }, initEvent: function () {
            n._$addEvent(window, "resize", this.onResize._$bind(this), !1);
            this.onResize();
            this.__cache._$addEvent("nim_msgs", this.onUpdateMsgs._$bind(this));
            this.__cache._$addEvent("nim_updatesessions", this.onSessionUpdate._$bind(this));
            this.__sdk._$addEvent("nim_curSessionIdChange", this.onCurSessionIdChange._$bind(this));
            this.__sdk._$addEvent("nim_syncdone", this.onUpdateMsgs._$bind(this))
        }, onResize: function () {
            if ((window.innerWidth || document.documentElement.clientWidth) < 250) {
                i._$delClassName(i._$get("j-tips"), "f-dn");
                i._$addClassName(i._$get("j-imchat"), "mini");
                this.__isMini = !0
            } else {
                i._$delClassName(i._$get("j-imchat"), "mini");
                i._$addClassName(i._$get("j-tips"), "f-dn");
                this.__isMini = !1
            }
            this.data.totalCount = this.__cache._$getTotalUnreadCount();
            this.data.msgCount = 0;
            this.updateTipTxt()
        }, onSessionUpdate: function () {
            this.data.totalCount = this.__cache._$getTotalUnreadCount();
            this.updateTipTxt()
        }, onCurSessionIdChange: function (t) {
            this.__curSessionId = t
        }, onUpdateMsgs: function (t) {
            if (t && this.__isMini) {
                var e = t;
                if (!a._$isArray(t)) e = [t];
                for (var n = e.length - 1; n >= 0; n--) if (e[n].from != o._$getFromAccid() && e[n].sessionId == this.__curSessionId) this.data.msgCount++;
                this.updateTipTxt()
            }
        }, updateTipTxt: function () {
            var t = this.data.msgCount + this.data.totalCount;
            if (t > 0 && this.__isMini) c._$postMessage("top", {data: '{"type":"ChatTipMessage","data":"' + t + '"}'});
            this.data.tipTxt = t;
            this.$update()
        }
    });
    return _
}, 35, 26, 23, 20, 9, 4, 17, 16, 29);
I$(2, function (t, e, n, i, s, r, a, o, c, _, u, f) {
    var l = t.extend({
        template: e, enter: function () {
            this.supr();
            this.__cache = r.getIns();
            this.__sdk = a.getIns();
            this.initUI();
            this.initUIEvent();
            this.update()
        }, init: function () {
            this.supr()
        }, initUI: function () {
            this.sessionListUI = new n({}).$inject("#j-sessionList-wrap");
            this.chatContent = new i({}).$inject("#j-chatContent-wrap");
            this.tipsContent = new s({}).$inject("#j-tips")
        }, initUIEvent: function () {
            this.sessionListUI.$on("selectSession", this.onSelectSession._$bind(this));
            this.sessionListUI.$on("hasSession", this.onHasSession._$bind(this));
            this.chatContent.$on("reportuser", this.onReportUser._$bind(this))
        }, update: function () {
            this.supr();
            var t = this.$state.param.id;
            if (t && !this.__cache._$getUserById(t)) this.__sdk._$getUser(t, function (e, n) {
                if (!e && n) {
                    this.sessionListUI.$selectSession(t);
                    this.chatContent.$selectSession(t)
                } else o.alert("不存在的用户", "提示")
            }._$bind(this)); else {
                this.sessionListUI.$selectSession(t);
                this.chatContent.$selectSession(t)
            }
        }, onHasSession: function (t) {
            this.data.hasSession = t;
            this.$update()
        }, onSelectSession: function (t) {
            this.$state.go("app.chat", {param: {id: t.id}})
        }, onReportUser: function (t) {
            this.$state.go("app.chat.report", {param: {id: t.id}})
        }
    });
    return l
}, 7, 10, 11, 12, 13, 9, 4, 5);
I$(14, '<!-- 聊天右侧内容 -->\n<div class="m-imreport">\n    \n\t<!-- 对方信息 -->\n\t<div class="reporthead">\n\t\t<h4 class="tit f-thide" titlr="">举报用户</h4>\n\t\t<p class="yy f-thide">请填写你要举报<em>{user.nick}</em>的原因</p>\n\t</div>\n\t\n\t<div class="editwrap">\n\t\t<textarea r-pojo={reportContent}></textarea>\n\t</div>\n\t\n\t<div class="btnwrap">\n\t\t<a class="u-btn f-fl" on-click={this.confirmReport()}>确定举报</a>\n\t\t<a class="u-btn gray f-fl" on-click={this.returnToChat()}>取消</a>\n\t</div>\n</div>');
I$(3, function (t, e, n, i, s, r, a, o, c, _, u) {
    var f = t.extend({
        template: e, enter: function () {
            this.supr();
            this.__cache = n.getIns();
            this.__sdk = i.getIns();
            this.__imcache = new r;
            this.update()
        }, init: function () {
            this.supr()
        }, update: function () {
            this.supr();
            var t = this.$state.param.id;
            if (t && this.__sdk._$isReady()) {
                this.__userAcount = t;
                if (!!t & !this.__cache._$getUserById(this.__userAcount)) this.__sdk._$getUser(this.__userAcount, function (t, e) {
                    if (!t && e) this.updateReport(); else s.alert("不存在的用户", "提示")
                }._$bind(this)); else this.updateReport()
            } else s.alert("不存在的用户", "提示")
        }, updateReport: function () {
            this.data.user = this.__cache._$getUserById(this.__userAcount);
            this.data.reportContent = "";
            this.$update()
        }, confirmReport: function () {
            if (this.data.reportContent) this.__imcache.reportUser({
                defendantAccId: this.__userAcount,
                accId: a._$getFromAccid(),
                reason: this.data.reportContent,
                productType: 0
            }, this.cbConfirmReport._$bind(this)); else s.alert("举报内容不能为空哦", "提示")
        }, cbConfirmReport: function (t) {
            if (t) s.alert("举报成功", "提示", "确定", function () {
                this.returnToChat()
            }._$bind(this)); else s.alert("举报失败，请重试", "提示")
        }, returnToChat: function () {
            this.$state.go("app.chat", {param: {id: this.__userAcount}})
        }
    });
    return f
}, 7, 14, 9, 4, 5, 15, 16);
I$(6, function (t, e, n, i, s, r, a, o, c) {
    function _() {
        if (!h) {
            document.getElementById("j-iminitloading").style.display = "none";
            h = window.restate({view: document.getElementById("j-main")});
            h.state("app", t, "").state("app.chat", e, "chat/:id").state("app.chat.report", n, "report").on("notfound", function () {
                this.go("app.chat", {replace: !0})
            }).start({html5: !1, prefix: "!"})
        }
    }

    function u() {
        s.alert("连接错误，请刷新页面重试", "提示")
    }

    function f() {
        s.alert("您已断开连接，点击‘确定’重新连接", "提示", "确定", function (t) {
            if (t) window.location.reload()
        })
    }

    var l = i.getIns();
    var h;
    l._$addEvent("nim_syncdone", _);
    l._$addEvent("nim_error", u);
    l._$addEvent("nim_disconnect", f);
    l._$createNIM()
}, 1, 2, 3, 4, 5);