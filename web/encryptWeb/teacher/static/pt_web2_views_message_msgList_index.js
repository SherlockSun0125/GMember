EDU("0b969fe083930d1ed45eecd5a990b9f8", function (e, t, n, i, a, o) {
    a.Or = e.ka();
    o = a.Or.na(t);
    o.ma = function (e) {
        this.oa(e)
    };
    o.nr = function () {
    };
    o.Md = function (e) {
        this.oa(e);
        this.nr()
    };
    o.Qd = function () {
        this.oa()
    };
    return a.Or
}, "85adb56c6630ba1ccdaca4710ac5023a", "2823d16c962ed022db9fecc1a7b58e6d", "4ce7997764ec034be6da988db0d70dc9");
EDU("33b4dedaa4775fd603a9173e786d0ba1", function () {
    return {
        rules: {
            rewrite: {404: "/m/message/", "/m/message/": "/message/"},
            alias: {"message-tab": "/?/message/tab/", "message-list": "/?/message/list/", message: "/m/message/"}
        },
        modules: {
            "/?/message/tab/": "module-message/src/message_tab/index.jsp",
            "/?/message/list/": "module-message/src/message_list/index.jsp",
            "/m/message/": {
                module: "module-message/src/message_layout/index.jsp",
                composite: {tab: "/?/message/tab/", list: "/?/message/list/"}
            }
        }
    }
});
EDU("ad61a5a64c29c043c78b0521cb925423", function (e, t, n, i, a, o) {
    i.batch(o);
    t.Jd();
    var r = {rules: {rewrite: {404: "/m/message/"}, alias: {}}, modules: {"/": "message/msgList/homepage.html"}};
    r.modules = e.gb(a.modules, r.modules);
    r.rules.rewrite = e.gb(a.rules.rewrite, r.rules.rewrite);
    r.rules.alias = e.gb(a.rules.alias, r.rules.alias);
    n.wh(r)
}, "bcbd83f0a4dde411de3c7141945bd88f", "0b969fe083930d1ed45eecd5a990b9f8", "5c45886ee904bf52b0d19fe51310cf82", "54e471be49f51da24ffe4c5db75bc810", "33b4dedaa4775fd603a9173e786d0ba1", "2992f71a4611d338540b5e17ef1d6a0e");