<%@page contentType="text/html; charset=utf-8" %>
<html>
<head>
    <%--#E848077--%>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>个人主页</title>
    <!--样式-->
    <link rel="stylesheet" href="static/pt_newpages_cp_user_homepage.css">
    <style type="text/css">
        .f-f0 {
            font-family: "Arial", "Hiragino Sans GB", \5fae\8f6f\96c5\9ed1, "Helvetica", "sans-serif";
        }

        a {
            color: #859295;
            text-decoration: none;
        }

        a:hover {
            color: #49AF4F;
            text-decoration: none;
        }

        .f-fl {
            float: left;
        }

        .f-fr {
            float: right;
        }

        .f-cb:after, .f-cbli li:after {
            display: block;
            clear: both;
            visibility: hidden;
            height: 0;
            overflow: hidden;
            content: ".";
        }

        .f-cb, .f-cbli li {
            zoom: 1;
        }

        .f-thide {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .f-pf {
            position: fixed;
        }

        .f-lsi > * {
            letter-spacing: normal;
        }

        .f-richEditorText em {
            font-style: italic;
        }

        .f-richEditorText p {
            margin: 0;
            padding: 0;
        }

        .f-richEditorText div {
            margin: 10px 0;
            padding: 0;
        }

        .f-richEditorText blockquote {
            border-left: 3px solid #D0E5F2;
            font-style: normal;
            padding: 0 0 0 10px;
            vertical-align: baseline;
            margin: 0;
            font-size: 14px;
        }

        .f-richEditorText img {
            max-height: 520px;
            max-width: 520px;
        }

        .f-richEditorText a {
            text-decoration: underline;
        }

        .f-richEditorText ul li {
            list-style: disc inside;
        }

        .f-richEditorText ol li {
            list-style: decimal inside;
        }

        .f-richEditorText table {
            border-collapse: collapse;
            border-spacing: 0;
            border: 1px solid #E4E4E4;
        }

        .f-richEditorText table th, .f-richEditorText table td {
            border: 1px solid #E4E4E4;
            padding: 5px;
        }


         .f-unselectable * {
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        body {
            padding: 60px 0 396px 0;
        }


        a:hover {
            text-decoration: none;
        }

        body {
            background: #f4f4f4;
        }

        .ux-user-info {
            background: url(static/user-bg.png) center center no-repeat;
            height: 220px;
        }

        .ux-user-info_show img {
            width: 100%;
        }
    </style>
    <link href="../../css/bootstrap-2.min.css" rel="stylesheet" type="text/css">
    <link href="../../css/style.css" type="text/css" rel="stylesheet"/>
</head>

<body style="padding-bottom: 0px;">
<!--头部-->
<div class="f-pf g-headwrap" id="j-fixed-head">
    <div class="g-hd f-bg1 m-yktNav " id="j-topnav">
        <div class="g-flow">
            <div class="f-pr f-cb">
                <div style="position: absolute;top:2px;bottom:2px;">
                    <a class="f-fl" hidefocus="true" href="#" target="_self" data-index="logo">
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
                               href="messageT.jsp" title="查看更多消息" target="_blank">
                                <span>消息</span>
                                <em class="num hidddenClass j-nav-msgnum">0</em>
                            </a>
                            <div class="u-mystudy f-pr f-cb f-fr">
                                <a class="mystudy nitem f-f0" id="j-nav-my-class" data-index="我的管理" target="_self"
                                   href="stuHome.jsp" hidefocus="true">我的管理</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- 中间部分-->
<div class="container" style="margin:0;padding:0;">
    <div class="row">
    <div style="width: 20%;height: 100%;background-color: red;border:1px red solid;">

    </div>
    <div style="width:80%;height:100%;background-color: green;border: 1px green  solid;">

    </div>
    </div>
</div>

<div class="g-ft" id="j-footer" style="position: absolute;bottom:0;">
    <div class="m-yktFoot" id="j-yktfoot" style="height: 50px;margin-top: 30px;margin-bottom: 0;padding-bottom: 0">
        <div class="g-flow ftwrapper f-cb">
            <p class="txt f-fs0" style="text-align: center;position: relative;top:50%;transform: translateY(60%)">
                山东省威海市环翠区文化西路2号&nbsp;&nbsp;&nbsp;&nbsp;邮政编码：264209&nbsp;&nbsp;&nbsp;&nbsp;哈尔滨工业大学（威海）版权所有
            </p>
        </div>
    </div>
</div>
</body>
</html>