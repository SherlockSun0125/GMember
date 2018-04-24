<%@page contentType="text/html; charset=utf-8" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>退出账户</title>
    <!--样式-->
    <link rel="stylesheet" href="static/core_465566505fc16e2adc7188a490b841e4.css">
    <style type="text/css">
        .g-logout {
            height: 355px;
        }

        .m-logcnt {
            height: 300px;
        }

        .m-logcnt .txt {
            background: url(static/logoutBg.jpg) no-repeat;
            height: 55px;
            line-height: 55px;
            padding-left: 80px;
            margin-left: 60px;
            font-family: 'Microsoft YAHEI';
            font-size: 20px;
            font-weight: bold;
            height: 60px;
        }

        .m-logcnt .go-index {
            background: #E84807;
            color: #fff;
            width: 140px;
            display: block;
            height: 40px;
            line-height: 40px;
            text-align: center;
            border-radius: 4px;
            margin: 20px 0 20px 140px;
        }

        .m-logcnt .unsubscribe-txt {
            padding-left: 140px;
        }

        .m-logcnt .txt2 {
            background: url(static/dialogicon.png) no-repeat;
            font-size: 18px;
        }

        .m-logcnt .sug {
            margin-left: 140px;
        }

        .m-logcnt .sug a {
            color: #E84807;
        }

        .m-logcnt .sug .feedicon {
            background: url(static/ui_sprite.png) no-repeat -56px -1104px;
            margin-left: 3px;
            width: 12px;
            height: 12px;
        }

        .m-logcnt .toiPad {
            right: 50px;
            top: 30px;
            width: 261px;
        }

        .m-logcnt .toiPad p {
            font-size: 24px;
            color: #333;
            font-family: 'microsoft yahei';
            height: 47px;
        }

        .m-logbot {
            background-color: #f8f8f8;
            border-top: 1px solid #e8e8e8;
            height: 34px;
            padding: 10px 30px;
        }

        .m-logbot .itm {
            line-height: 34px;
            font-size: 14px;
            color: #999;
        }

        .reLogin {
            margin: 20px 0 0 140px;
        }

        .btn {
            display: block;
            text-align: center;
            width: 90px;
            font-size: 14px;
            font-family: '微软雅黑';
            height: 40px;
            line-height: 40px;
            background-color: #f4f4f4;
            border: 1px solid #dcdcdc;
            box-shadow: 2px 2px 5px #ededed;
        }

        .btn:hover {
            background-color: #f8f8f8;
            color: #000;
        }
    </style>
</head>


<body id="logout" class="auto-1524119574527-parent" style="padding-top: 60px;padding-bottom: 0">

<!--头部-->
<div class="f-pf g-headwrap" id="j-fixed-head">
    <div class="g-hd f-bg1 m-yktNav " id="j-topnav">
        <div class="g-flow">
            <div class="f-pr f-cb">
                <div style="position: absolute;top:2px;bottom:2px;">
                    <a class="f-fl" hidefocus="true" href="../../home.jsp" target="_self" data-index="logo">
                        <img class="f-fl img" src="static/hitwh_logo_white.png" title="学生主页" width="540px"
                             style="margin-top: 2px;margin-bottom: 1px">
                    </a>
                </div>
                <div class="m-navrgt f-fr f-cb f-pr j-navright">
                    <div class="userinfo f-fr f-cb f-pr">
                        <div class="login f-cb">

                            <div class="name j-userinfo" id="auto-id-1523840858750">
                                <div class="f-pr">
                                    <div class="face">
                                        <img class="j-nav-myimg"
                                             src="static/unLogin.jpg"
                                             width="30px" height="30px" alt="头像">
                                    </div>
                                </div>
                            </div>
                            <a class="username self f-thide" target="_self" data-index="点击用户名"
                               href="../../studentLogin.jsp">
                                <span class=" f-fs1 f-f0">登录</span>
                            </a>
                            <i class="line" style="padding-top: 3%"></i>
                            <a data-index="消息" class="mes f-pr f-cb j-nav-mescenter"
                               href="../../studentLogin.jsp" title="查看更多消息" target="_self">
                                <span>消息</span>
                                <em class="num hidddenClass j-nav-msgnum">0</em>
                            </a>
                            <div class="u-mystudy f-pr f-cb f-fr">
                                <a class="mystudy nitem f-f0" id="j-nav-my-class" data-index="我的学习" target="_self"
                                   href="../../studentLogin.jsp" hidefocus="true">我的学习</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!--中部-->
<div class="g-flow">
    <b class="b-20"></b>
    <div class="g-logout f-bg">
        <div class="m-logcnt f-pr" >
            <b class="b-30"></b>
            <b class="b-30"></b>
            <div class="txt">已经成功退出登录</div>
            <a class="reLogin btn" id="j-reLogin" style="" href="../../studentLogin.jsp">重新登录</a>
        </div>
        <div class="m-logbot">
            <span class="itm f-fs0" id="j-motto"></span>
        </div>
    </div>
</div>

<!--底部-->
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