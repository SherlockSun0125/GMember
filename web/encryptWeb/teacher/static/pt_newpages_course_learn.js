I$("d7b81194045b8ba630fc696f80423630", function () {
    function e() {
        _._$get("j-mask").style.display = "none";
        _._$get("j-xinshouyindao").style.display = "none";
        d._$cookie("notFirstToLearn", {value: 1, path: "/", expires: 365})
    }

    function t(t) {
        if (t && t.assistService) {
            g = t.assistDescription || "将提问向老师提出，老师为你提供一对一在线辅导";
            u.style.display = "block";
            u = _._$get("j-one2oneChat");
            r._$addEvent(u, "mouseenter", i._$bind(this));
            r._$addEvent(u, "mouseleave", s._$bind(this));
            if ("1" != d._$cookie("notFirstToLearn")) {
                _._$get("j-mask").style.display = "block";
                _._$get("j-xinshouyindao").style.display = "block";
                r._$addEvent(_._$get("j-okBtn"), "click", e._$bind(this))
            }
        }
    }

    function i() {
        if (!f) {
            f = h._$$IMServiceListUI._$allocate({
                parent: u,
                targetId: m,
                targetType: b,
                scene: 2,
                pos: {top: "50px", left: "0", maxHeight: "350px", overflowY: "scroll", overflowX: "hidden"},
                p2p: !1,
                titleText: '<p style="color:#666;padding:15px 10px 10px 10px;font-size:12px;">' + g + "</p>"
            });
            f._$setCssText(".one2one  .u-service-ist {width:200px;margin-top:10px;}                                           .one2one  .u-service-ist .service-list .list-in{width:174px;}                                          .one2one .u-service-ist .service-list .list-in span{width:100px;}");
            r._$addEvent(u, "click", n._$bind(this, "客服点击"));
            f._$addEvent("onShowChattingWindow", a._$bind(this, "弹出会话"))
        }
        f._$showIMDialog();
        var e = {"是否登录": h._$getWebUser() ? "是" : "否", "学期id": m, "课程类型": "yoccourse"};
        h._$trackEvent("课程主页", "一对一学习辅导点击窗口弹出", JSON.stringify(e || {}))
    }

    function s() {
        if (f) f._$hideIMDialog()
    }

    function n(e, t) {
        var i = "课程主页", e = e, s = {"是否登录": h._$getWebUser() ? "是" : "否", "学期id": m, "课程类型": "yoccourse"},
            n = r._$getElement(t);
        if (_._$attr(n, "memberid")) h._$trackEvent(i, e, JSON.stringify(s || {}))
    }

    function a(e, t) {
        var i = "课程主页", e = e, s = {"是否登录": h._$getWebUser() ? "是" : "否", "学期id": m, "课程类型": "yoccourse"};
        h._$trackEvent(i, e, JSON.stringify(s || {}))
    }

    var o = window, _ = NEJ.P("nej.e"), r = NEJ.P("nej.v"), d = NEJ.P("nej.j"), c = NEJ.P("edu.d"), l = NEJ.P("nej.ut"),
        h = NEJ.P("edu.u");
    var u = _._$get("j-one2oneChat");
    var f;
    var p = new c._$$COM_Cache_IMSettingCache;
    var m = o.termDto.id, b = 3, g = "";
    p._$getConsulation(m, b);
    p._$addEvent("onGetConsulation", t._$bind(this));
    o.learnScroll = function () {
        var e = _._$getByClassName(document.body, "m-learnhead")[0];
        var t = _._$get("j-fixed-head");
        var i = _._$getPageBox();
        var s = t.offsetHeight;
        if (i.scrollTop > s) _._$addClassName(e, "fixed-top"); else _._$delClassName(e, "fixed-top")
    };
    r._$addEvent(window, "scroll", o.learnScroll._$bind(this));
    if (h._$browserSupportedOrGo()) {
        o.dispatcher = l._$$Dispatcher._$getInstance();
        o.dispatcher._$rule("config", location.config);
        o.dispatcher._$regist(h.umi("commonutil"), "commonutil.html");
        o.dispatcher._$regist(h.umi("courseLearn"), "course/learn.html");
        o.dispatcher._$regist(h.umi("learnAnnounce"), "course/learn.html");
        o.dispatcher._$regist(h.umi("learnScore"), "course/learn.html");
        o.dispatcher._$regist(h.umi("learnCustom"), "course/learn.html");
        o.dispatcher._$regist(h.umi("learnContent"), "course/learn/content.html");
        o.dispatcher._$regist(h.umi("learnTestList"), "course/learn/task.html");
        o.dispatcher._$regist(h.umi("learnQuiz"), "course/learn/task.html");
        o.dispatcher._$regist(h.umi("learnQuizScore"), "course/learn/task.html");
        o.dispatcher._$regist(h.umi("learnHomework"), "course/learn/homework.html");
        o.dispatcher._$regist(h.umi("learnOJHomework"), "course/learn/oj.html");
        o.dispatcher._$regist(h.umi("learnExamList"), "course/learn/exam.html");
        o.dispatcher._$regist(h.umi("learnExamObjective"), "course/learn/task.html");
        o.dispatcher._$regist(h.umi("learnExamObjectScore"), "course/learn/task.html");
        o.dispatcher._$regist(h.umi("learnExamSubjective"), "course/learn/homework.html");
        o.dispatcher._$regist(h.umi("learnExamOJ"), "course/learn/oj.html");
        o.dispatcher._$regist(h.umi("learnForumIndex"), "course/learn/forum.html");
        o.dispatcher._$regist(h.umi("learnForumPanel"), "course/learn/forum.html");
        o.dispatcher._$regist(h.umi("learnForumSearch"), "course/learn/forum.html");
        o.dispatcher._$regist(h.umi("learnForumPersonal"), "course/learn/forum.html");
        o.dispatcher._$regist(h.umi("learnForumDetail"), "course/learn/forum.html");
        o.dispatcher._$regist(h.umi("learnForumTopic"), "course/learn/forum.html");
        o.dispatcher._$regist(h.umi("learnForumEasyTopic"), "course/learn/forum.html");
        o.dispatcher._$regist(h.umi("forumNoticeDetail"), "course/learn/forum.html");
        o.dispatcher._$regist(h.umi("forumUserRanking"), "course/learn/forum.html");
        o.dispatcher._$regist(h.umi("learnProgress"), "course/learn/learnProgress.html");
        o.dispatcher._$active();
        var $ = o.decodeURIComponent(location.hash);
        if ($ && h._$isRightUMI($, [h.umi("learnAnnounce"), h.umi("learnScore"), h.umi("learnCustom"), h.umi("learnContent"), h.umi("learnTestList"), h.umi("learnQuiz"), h.umi("learnQuizScore"), h.umi("learnHomework"), h.umi("learnOJHomework"), h.umi("learnExamObjective"), h.umi("learnExamList"), h.umi("learnExamObjectScore"), h.umi("learnExamSubjective"), h.umi("learnExamOJ"), h.umi("learnForumIndex"), h.umi("learnForumPanel"), h.umi("learnForumPersonal"), h.umi("learnForumSearch"), h.umi("learnForumDetail"), h.umi("learnForumTopic"), h.umi("learnForumEasyTopic"), h.umi("forumNoticeDetail"), h.umi("forumUserRanking"), h.umi("learnProgress")])) o.dispatcher._$redirect($, !0); else o.dispatcher._$redirect(h.umi("learnAnnounce"), !0)
    }
}, "b1c0c839459881688437915bb82d58f4", "4cc3c0612fd33671b14d0f212431f014", "8122bf78fb446bb2c92c343b62e49a48", "f133b6ea960689b2d88a1817fa18b473", "86804e0c9bcaa5c62fefc28635657ebf");