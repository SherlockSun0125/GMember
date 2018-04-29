var g = window, SEARCH_TYPE = {courseSearch: "courseSearch", providerSearch: "providerSearch"},
    mylocalStorage = g.localStorage;
var getlocalStorage = function () {
    var e = mylocalStorage.getItem(SEARCH_TYPE.courseSearch), t = mylocalStorage.getItem(SEARCH_TYPE.providerSearch);
    var i = {courseSearch: e ? e.split(",") : [], providerSearch: t ? t.split(",") : []};
    return i
};
var handleCrossDomain = function (e) {
    var e = e || g.event;
    var t = "https://study.163.com";
    var i = new RegExp("^https?://((mooc|course).)?study.163.com", "ig");
    if (i.test(e.origin)) if ("get" == e.data.method) {
        var n = getlocalStorage();
        g.parent.postMessage(n, e.origin)
    } else if ("set" == e.data.method) {
        var a = e.data.type;
        var o = e.data.value;
        mylocalStorage.setItem(a, o)
    } else if ("clear" == e.data.method) {
        var a = e.data.type;
        mylocalStorage.removeItem(SEARCH_TYPE[a])
    }
};
if (window.addEventListener) window.addEventListener("message", handleCrossDomain); else window.attachEvent("onmessage", handleCrossDomain);