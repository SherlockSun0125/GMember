<%@page contentType="text/html;charset=utf-8" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>公告</title>
    <!--样式-->
    <link rel="stylesheet" href="static/core_62c0700cc15bd051f36fa48b7a5c1a26.css">
    <link rel="stylesheet" href="static/pt_newpages_course_learn.css">
</head>


<body>
<div id="g-container">

    <!--头部-->
    <div class="f-pf g-headwrap" id="j-fixed-head">
        <div class="g-hd f-bg1 m-yktNav " id="j-topnav">
            <div class="g-flow">
                <div class="f-pr f-cb">
                    <div style="position: absolute;top:2px;bottom:2px;">
                        <a class="f-fl" hidefocus="true" href="teaHome.jsp" target="_self" data-index="logo">
                            <img class="f-fl img" src="static/hitwh_logo_white.png" title="学生主页" width="540px"
                                 style="margin-top: 2px;margin-bottom: 1px">
                        </a>
                    </div>
                    <div class="m-navrgt f-fr f-cb f-pr j-navright">
                        <div class="userinfo f-fr f-cb f-pr">
                            <div class="login f-cb">
                                <div class="u-mystudy f-pr f-cb f-fr">
                                    <a class="mystudy nitem f-f0" data-index="用户退出" target="_blank"
                                       href="exit.jsp" hidefocus="true">退出</a>
                                </div>

                                <div class="name j-userinfo" id="auto-id-1523840858750">
                                    <div class="f-pr">
                                        <div class="face">
                                            <img class="j-nav-myimg"
                                                 src="static/head1.jpg"
                                                 width="30px" height="30px" alt="头像">
                                        </div>
                                    </div>
                                </div>
                                <a class="username self f-thide" target="_self" data-index="点击用户名"
                                   href="setting.jsp">
                                    <span class=" f-fs1 f-f0">PaulSuen</span>
                                </a>
                                <i class="line" style="padding-top: 2%"></i>
                                <a data-index="消息" class="mes f-pr f-cb j-nav-mescenter"
                                   href="forumMessage.jsp" title="查看更多消息" target="_blank">
                                    <span>消息</span>
                                    <em class="num hidddenClass j-nav-msgnum">0</em>
                                </a>
                                <div class="u-mystudy f-pr f-cb f-fr">
                                    <a class="mystudy nitem f-f0" id="j-nav-my-class" data-index="我的学习" target="_self"
                                       href="forum.jsp" hidefocus="true">讨论区</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--网页体-->
    <div id="g-body">
        <div class="mask" id="j-mask"></div>
        <div class="m-cbg"></div>
        <div class="g-wrap f-cb">

            <!--左侧边栏-->
            <div class="g-sd1">
                <div class="m-learnleft">
                    <div id="j-courseTabList">
                        <a class="u-learnProgress-tab j-tabitem f-f0 f-fc3 f-cb" href="myTopic.jsp">
                            <div class="ic f-fl"></div>
                            <span class="f-fl">我的帖子</span>
                        </a>
                        <%--<a class="u-learnProgress-tab j-tabitem f-f0 f-fc3 f-cb" data-type="30"--%>
                           <%--href="myResume.jsp">--%>
                            <%--<div class="ic_2 f-fl"></div>--%>
                            <%--<span class="f-fl">我的日志</span>--%>
                        <%--</a>--%>
                        <ul class="tab u-tabul">
                            <li class="u-greentab j-tabitem f-f0 first u-curtab">
                                <a class="f-thide f-fc3">公告栏</a>
                            </li>

                            <li class="u-greentab j-tabitem f-f0 last" data-name="讨论区" data-type="7"
                                data-id="2001487096" >
                                <a class="f-thide f-fc3" href="forum.jsp">讨论区</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!--中间部分-->
            <div class="g-mn1">
                <div class="g-mn1c m-learnbox">
                    <div class="m-notice f-cb">
                        <div class="left-mn">
                            <div class="left-mnc f-cb">
                                <h2 class="u-learn-moduletitle j-moduleName">公告<br></h2>
                                <div class="j-announce">
                                    <div>
                                        <div class="empty f-f0 j-empty" style="display: none;"><span
                                                class="f-ib j-emptyTips"></span></div>
                                        <div class="j-list">
                                            <div class="noitce f-cb">
                                                <div class="noticeitem f-f0 f-pr f-cb">
                                                    <div class="f-cb item j-item"></div>
                                                    <div class="f-cb detailtitlpage" style="display: block;">
                                                        <h4 style="font-weight: bolder">【通知】 新一轮培养计划开始了 </h4><br>
                                                        <p style="text-indent: 2em">请大家积极落实各项任务。 </p>
                                                        <p style="text-indent: 2em">同学们如果有什么问题可以在讨论区咨询老师或与同学们讨论。</p>
                                                        <div class="f-fr j-lpagetime lptime" style="display: block;">
                                                            2018年4月11日 10:31
                                                        </div>
                                                    </div>
                                                </div>
                                                <a class="j-showmore showmore f-f0"
                                                   style="display: none;">点击载入更多</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</body>
</html>