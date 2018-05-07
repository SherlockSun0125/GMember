EDU("ded093293a1810daf852092ce3983842", function (e, t, i) {
    function n(t) {
        var i = /(https?:)?(\/\/)(.*?\.)(com|net)([\/]+.*?\.)(jpg|jpeg|png)/g,
            n = /(https?%3A)?(%2F%2F)(.*?\.)(com|net)([%2F]+.*?\.)(jpg|jpeg|png)/g, o = window.location.protocol;
        if (t.data) t.data = e(t.data, function (e) {
            if (/\.(jpg|jpeg|png)/i.test(e)) {
                e = e.replace(i, o + "$2$3$4$5$6");
                if (/%2F/i.test(e)) e = e.replace(n, encodeURIComponent(o) + "$2$3$4$5$6");
                return e
            }
        })
    }

    function o(t) {
        n(t);
        var i = t.onload;
        t.onload = function (t) {
            if (t) t = e(t);
            i(t)
        };
        return t
    }

    if (void 0 === window.__replaceGlobalUrls || window.__replaceGlobalUrls === !0) for (var s in window) if (window.hasOwnProperty(s) && !$$$nativeWindowKeysCheckMap[s] && window[s] !== window) window[s] = e(window[s]);
    if (void 0 === window.__interceptHttpsRequests || window.__interceptHttpsRequests === !0) {
        var a = t._$request;
        t._$request = function (e, i) {
            i = o(i);
            return a.call(t, e, i)
        };
        var r = i._$request;
        i._$request = i._$requestByDWR = function (e, t) {
            t = o(t);
            return r.call(i, e, t)
        }
    }
}, "112d96ef5f1af401fd8e5b1ef600d5d2", "7f436ec82afba215e50dc01ffde69163", "f3a229c4eff4f94056bf713db2238350");
EDU("8268ec59ecf4675e8d084f56490a6f5e", function (e, t) {
    function i() {
        setTimeout(function () {
            for (; window.__globalErrorEvents && window.__globalErrorEvents.length;) {
                var e = window.__globalErrorEvents.shift();
                var i = {message: "", url: window.location.href, uid: window.webUser && window.webUser.id || -1};
                if (e) {
                    if (e.target === window) {
                        i.type = "runtime";
                        if (e.error) i.message = e.error.message; else i.message = e.message
                    } else if (e.target instanceof HTMLScriptElement) {
                        i.type = "load";
                        i.file = e.target.src
                    }
                    t._$requestJson({
                        url: window.location.protocol + "//log.study.163.com/mooc/pageMonitorAction/log.do",
                        method: "POST",
                        data: i,
                        onload: function () {
                        },
                        cookie: !0
                    })
                }
            }
        })
    }

    e._$addEvent(window, "error", i);
    i()
}, "df061814905e77928e1c800f956f4ea8", "48e3bd1c032e37eb0be1a82f882e4d39");
EDU("e5428c2d7cc8d0b91ade74d66bca455a", function () {
}, "ded093293a1810daf852092ce3983842", "8268ec59ecf4675e8d084f56490a6f5e");
EDU("7136a61f8b931fd05a1681c7f028ff20", function () {
    var e = window, t = NEJ.P("nej.e"), i = NEJ.P("nej.v"), n = NEJ.P("nej.ut"), o = NEJ.P("edu.u");
    var s = localStorage.getItem("hasLearnWeixinWarn");
    if (!s) {
        document.querySelector("#wxItemTab").classList.remove("hidden");
        localStorage.setItem("hasLearnWeixinWarn", "1");
        document.body.addEventListener("click", function () {
            document.querySelector("#wxItemTab").classList.add("hidden")
        })
    }
    document.querySelector("#wxItemTab").addEventListener("hover", function (e) {
        e.target.classList.remove("hidden")
    });
    document.querySelector("#appTab").addEventListener("hover", function (e) {
        e.target.classList.remove("hidden")
    });
    if (o._$browserSupportedOrGo()) {
        e.dispatcher = n._$$Dispatcher._$getInstance();
        e.dispatcher._$rule("config", location.config);
        e.dispatcher._$regist(o.umi("commonutil"), "common/commonutil.html");
        e.dispatcher._$regist(o.umi("courseLearn"), "learn.html");
        e.dispatcher._$regist(o.umi("learnAnnounce"), "learn.html");
        e.dispatcher._$regist(o.umi("learnScore"), "learn.html");
        e.dispatcher._$regist(o.umi("learnCustom"), "learn.html");
        e.dispatcher._$regist(o.umi("learnContent"), "learn/content.html");
        e.dispatcher._$regist(o.umi("learnTestList"), "learn/task.html");
        e.dispatcher._$regist(o.umi("learnQuiz"), "learn/task.html");
        e.dispatcher._$regist(o.umi("learnQuizScore"), "learn/task.html");
        e.dispatcher._$regist(o.umi("learnHomework"), "learn/homework.html");
        e.dispatcher._$regist(o.umi("learnOJHomework"), "learn/oj.html");
        e.dispatcher._$regist(o.umi("learnExamList"), "learn/exam.html");
        e.dispatcher._$regist(o.umi("learnExamObjective"), "learn/task.html");
        e.dispatcher._$regist(o.umi("learnExamObjectScore"), "learn/task.html");
        e.dispatcher._$regist(o.umi("learnExamSubjective"), "learn/homework.html");
        e.dispatcher._$regist(o.umi("learnExamOJ"), "learn/oj.html");
        e.dispatcher._$regist(o.umi("notEnroll"), "learn/notEnroll.html");
        e.dispatcher._$regist(o.umi("learnForumIndex"), "learn/forum.jsp");
        e.dispatcher._$regist(o.umi("learnForumPanel"), "learn/forum.jsp");
        e.dispatcher._$regist(o.umi("learnForumSearch"), "learn/forum.jsp");
        e.dispatcher._$regist(o.umi("learnForumPersonal"), "learn/forum.jsp");
        e.dispatcher._$regist(o.umi("learnForumDetail"), "learn/forum.jsp");
        e.dispatcher._$regist(o.umi("learnForumTopic"), "learn/forum.jsp");
        e.dispatcher._$regist(o.umi("learnForumEasyTopic"), "learn/forum.jsp");
        e.dispatcher._$regist(o.umi("forumNoticeDetail"), "learn/forum.jsp");
        e.dispatcher._$regist(o.umi("forumUserRanking"), "learn/forum.jsp");
        e.dispatcher._$active();
        var a = e.decodeURIComponent(location.hash);
        if (a && o._$isRightUMI(a, [o.umi("learnAnnounce"), o.umi("learnScore"), o.umi("learnCustom"), o.umi("learnContent"), o.umi("learnTestList"), o.umi("learnQuiz"), o.umi("learnQuizScore"), o.umi("learnHomework"), o.umi("learnOJHomework"), o.umi("learnExamObjective"), o.umi("learnExamList"), o.umi("learnExamObjectScore"), o.umi("learnExamSubjective"), o.umi("learnExamOJ"), o.umi("learnForumIndex"), o.umi("learnForumPanel"), o.umi("learnForumPersonal"), o.umi("learnForumSearch"), o.umi("learnForumDetail"), o.umi("learnForumTopic"), o.umi("learnForumEasyTopic"), o.umi("forumNoticeDetail"), o.umi("forumUserRanking")])) e.dispatcher._$redirect(a, !0); else e.dispatcher._$redirect(o.umi("learnAnnounce"), !0)
    }
}, "6afee3197e0c4d5fdf25eeee9a83a3af", "a9cd2c0b6aba6bd0c80c0b6617ed71c4", "0b357ed54d19758105729742562074b0", "7decb3d18a9e6ea24c1418469e584d92", "573c5c0e3fc18a0c7eafa2560a841700", "43c8f4bb9f9e5d9a721a33e9c6e5cc75");