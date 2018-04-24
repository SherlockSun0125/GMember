if ("undefined" == typeof I$) I$ = function () {
    var t = {}, e = function () {
        return !1
    }, n = {};
    var i = function (e, n) {
        return t.toString.call(e) === "[object " + n + "]"
    };
    return function (t, s) {
        var r = n[t], a = i(s, "Function");
        if (null != s && !a) r = s;
        if (a) {
            var o = [];
            for (var c = 2, _ = arguments.length; c < _; c++) o.push(arguments.callee(arguments[c]));
            var u = {};
            o.push.call(o, u, {}, e, []);
            var f = s.apply(null, o) || u;
            if (!r || !i(f, "Object")) r = f; else if (Object.keys) for (var l = Object.keys(f), c = 0, _ = l.length, h; c < _; c++) {
                h = l[c];
                r[h] = f[h]
            } else for (var h in f) r[h] = f[h]
        }
        if (null == r) r = {};
        n[t] = r;
        return r
    }
}();