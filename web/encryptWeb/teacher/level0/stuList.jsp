<%@page contentType="text/html; charset=utf-8" %>
<html>
<head>
    <title>讨论区</title>
    <!--三个重要的CSS文件-->
    <link rel="stylesheet" href="../static/core_62c0700cc15bd051f36fa48b7a5c1a26.css">
    <link rel="stylesheet" href="../static/pt_newpages_course_learn.css">
    <style type="text/css">
        .auto-1523950289788 .top {
            height: 28px;
            border: 1px solid #ddd;
            cursor: pointer;
            margin-right: -1px;
        }

        .auto-1523950289788 .content {
            height: 28px;
            font-size: 12px;
            line-height: 28px;
            padding-left: 10px;
            max-width: 120px;
            min-width: 60px;
            overflow: hidden;
            color: #999;
        }

        .auto-1523950289788 .selectlist {
            border: 1px solid #ddd;
            max-width: 359px;
            min-width: 92px;
            top: 29px;
            left: 0;
            z-index: 100;
            background-color: #fff;
            overflow-y: auto;
        }

        .auto-1523950289788 .item {
            height: 28px;
            line-height: 28px;
            padding: 0 10px;
            cursor: pointer;
            font-size: 12px;
            color: #999;
        }

        .auto-1523950289788 .item:hover {
            background-color: #ccc;
            color: #fff;
        }

        .auto-1523950289788 .normal {
            color: #999;
        }

        .auto-1523950289788 {
            color: #999;
        }

        .u-learnProgress-tab .ic_2 {
            width: 16px;
            height: 16px;
            margin: 12px 0 0 10px;
            background-image: url("../static/icon9.png");
            background-position: -32px 0px;
        }
    </style>
    <link rel="stylesheet" href="../../../bootstrap/css/bootstrap.min.css">
    <script type="text/javascript" src="../../../bootstrap/jquery-2.2.4.min.js"></script>
    <script type="text/javascript" src="../../../bootstrap/js/bootstrap.min.js"></script>
</head>


<body>
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
                            <li class="u-greentab j-tabitem f-f0 first u-curtab" data-name="待通过" data-type="1"
                                data-id="2001487091" id="auto-id-1523950289736">
                                <a class="f-thide f-fc3" href="">待通过</a>
                            </li>
                            <li class="u-greentab j-tabitem f-f0 last" data-name="已通过" data-type="7"
                                data-id="2001487096" id="auto-id-1523950289741">
                                <a class="f-thide f-fc3">已通过</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!--右侧主体-->
            <div class="g-mn1">
                <div class="g-mn1c m-learnbox" id="courseLearn-inner-box">
                    <div >
                        <table class="table table-bordered table-hover table-striped">
                            <thead>
                                <tr>
                                    <th>1</th>
                                    <th>1</th>
                                    <th>1</th>
                                    <th>1</th>
                                    <th>1</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>