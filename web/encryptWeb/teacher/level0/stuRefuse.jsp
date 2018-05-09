<%@page contentType="text/html; charset=utf-8" %>
<html>
<head>
    <title>学生遴选</title>
    <!--三个重要的CSS文件-->
    <link rel="stylesheet" href="../static/core_62c0700cc15bd051f36fa48b7a5c1a26.css">
    <link rel="stylesheet" href="../static/pt_newpages_course_learn.css">
    <style type="text/css">
        thead th{
            font-weight: bold;
            background-color: #2d89ef;
            text-align: center;
        }
        table{
            text-align: center;
        }
    </style>
    <link rel="stylesheet" href="../../../bootstrap/css/bootstrap.min.css">
    <script type="text/javascript" src="../../../bootstrap/jquery-2.2.4.min.js"></script>
    <script type="text/javascript" src="../../../bootstrap/js/bootstrap.min.js"></script>
</head>


<body style="background-color: #EEEEEE">
<div id="g-container">
    <!--头部-->
    <div class="f-pf g-headwrap" id="j-fixed-head">
        <div class="g-hd f-bg1 m-yktNav " id="j-topnav">
            <div class="g-flow">
                <div class="f-pr f-cb">
                    <div style="position: absolute;top:2px;bottom:2px;">
                        <a class="f-fl" hidefocus="true" target="_self" data-index="logo" href="../teaHome.jsp">
                            <img class="f-fl img" src="../static/hitwh_logo_white.png" title="教师主页" width="540px"
                                 style="margin-top: 2px;margin-bottom: 1px">
                        </a>
                    </div>
                    <div class="m-navrgt f-fr f-cb f-pr j-navright">
                        <div class="userinfo f-fr f-cb f-pr">
                            <div class="login f-cb">
                                <div class="u-mystudy f-pr f-cb f-fr">
                                    <a class="mystudy nitem f-f0" data-index="用户退出" target="_blank"
                                       href="../exit.jsp" hidefocus="true">退出</a>
                                </div>

                                <div class="name j-userinfo" id="auto-id-1523840858750">
                                    <div class="f-pr">
                                        <div class="face">
                                            <img class="j-nav-myimg"
                                                 src="../static/head1.jpg"
                                                 width="30px" height="30px" alt="头像">
                                        </div>
                                    </div>
                                </div>
                                <a class="username self f-thide" target="_self" data-index="点击用户名"
                                   href="../setting.jsp">
                                    <span class=" f-fs1 f-f0">PaulSuen</span>
                                </a>
                                <i class="line" style="padding-top: 2%"></i>
                                <a data-index="消息" class="mes f-pr f-cb j-nav-mescenter"
                                   href="../forumMessage.jsp" title="查看更多消息" target="_blank">
                                    <span>消息</span>
                                    <em class="num hidddenClass j-nav-msgnum">0</em>
                                </a>
                                <div class="u-mystudy f-pr f-cb f-fr">
                                    <a class="mystudy nitem f-f0" id="j-nav-my-class" data-index="讨论区" target="_self"
                                       href="../forum.jsp" hidefocus="true">讨论区</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--网页主体-->
    <div id="g-body">
        <!--为右侧定义背景-->
        <div class="m-cbg"></div>

        <div class="g-wrap f-cb">
            <!--左侧侧边栏-->
            <div class="g-sd1">
                <div class="m-learnleft">
                    <div id="j-courseTabList">
                        <%--<a class="u-learnProgress-tab j-tabitem f-f0 f-fc3 f-cb" data-type="30"--%>
                           <%--href="myTopic.jsp">--%>
                            <%--<div class="ic f-fl"></div>--%>
                            <%--<span class="f-fl">我的帖子</span>--%>
                        <%--</a>--%>
                        <%--<a class="u-learnProgress-tab j-tabitem f-f0 f-fc3 f-cb" data-type="30"--%>
                        <%--href="myResume.jsp">--%>
                        <%--<div class="ic_2 f-fl"></div>--%>
                        <%--<span class="f-fl">我的日志</span>--%>
                        <%--</a>--%>
                        <ul class="tab u-tabul">
                            <li class="u-greentab j-tabitem f-f0 first" data-name="待通过" data-type="1"
                                data-id="2001487091">
                                <a class="f-thide f-fc3" href="stuApply.jsp">待通过</a>
                            </li>
                            <li class="u-greentab j-tabitem f-f0" data-name="已通过" data-type="1"
                                data-id="2001487091">
                                <a class="f-thide f-fc3" href="stuDone.jsp">已通过</a>
                            </li>
                            <li class="u-greentab j-tabitem f-f0 last u-curtab" data-name="未通过" data-type="7"
                                data-id="2001487096">
                                <a class="f-thide f-fc3">未通过</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!--右侧主体-->
            <div class="g-mn1">
                <div class="g-mn1c m-learnbox" id="courseLearn-inner-box">
                    <div >
                        <table class="table table-hover table-striped" style="border-bottom: #EEEEEE solid 1px">
                            <thead>
                                <tr>
                                    <th>姓名</th>
                                    <th>学号</th>
                                    <th>性别</th>
                                    <th>专业</th>
                                    <th>专业排名</th>
                                    <th>外语水平</th>
                                    <th>手机号</th>
                                    <th>邮箱</th>
                                    <th>所获奖项</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>001</td>
                                    <td>王一</td>
                                    <td>男</td>
                                    <td>计算机科学与技术</td>
                                    <td>前2%</td>
                                    <td>六级486</td>
                                    <td>17862700001</td>
                                    <td>001@qq.com</td>
                                    <td>国奖</td>
                                </tr>
                                <tr>
                                    <td>001</td>
                                    <td>王一</td>
                                    <td>男</td>
                                    <td>软件工程</td>
                                    <td>前2%</td>
                                    <td>六级486</td>
                                    <td>17862700001</td>
                                    <td>001@qq.com</td>
                                    <td>国奖</td>
                                </tr>
                                <tr>
                                    <td>001</td>
                                    <td>王一</td>
                                    <td>男</td>
                                    <td>信息安全</td>
                                    <td>前2%</td>
                                    <td>六级486</td>
                                    <td>17862700001</td>
                                    <td>001@qq.com</td>
                                    <td>国奖</td>
                                </tr>
                                <tr>
                                    <td>001</td>
                                    <td>王一</td>
                                    <td>男</td>
                                    <td>计算机科学与技术</td>
                                    <td>前2%</td>
                                    <td>六级486</td>
                                    <td>17862700001</td>
                                    <td>001@qq.com</td>
                                    <td>国奖</td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <input type="button" value="一键通知" class="col-md-1 btn btn-danger">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>