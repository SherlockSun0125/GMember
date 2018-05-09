<%--
  Created by IntelliJ IDEA.
  User: chong
  Date: 2018/4/25
  Time: 14:35
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title>申请加入</title>
    <meta name="viewport" content="width=100%; initial-scale=1; maximum-scale=1; minimum-scale=1; user-scalable=no;"/>
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="images/apple-touch-icon-144-precomposed.png"/>
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="images/apple-touch-icon-114-precomposed.png"/>
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="images/apple-touch-icon-72-precomposed.png"/>
    <link rel="apple-touch-icon-precomposed" href="images/apple-touch-icon-57-precomposed.png"/>
    <link href="css/bootstrap-2.min.css" type="text/css" rel="stylesheet"/>
    <link href="css/style.css" type="text/css" rel="stylesheet"/>
    <link href="css/prettyPhoto.css" type="text/css" rel="stylesheet"/>
    <link href="css/font-icomoon.css" type="text/css" rel="stylesheet"/>
    <link href="css/font-awesome.css" type="text/css" rel="stylesheet"/>
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/jquery.easing.1.3.js"></script>
    <script type="text/javascript" src="js/jquery.quicksand.js"></script>
    <script type="text/javascript" src="js/superfish.js"></script>
    <script type="text/javascript" src="js/hoverIntent.js"></script>
    <script type="text/javascript" src="js/jquery.flexslider.js"></script>
    <script type="text/javascript" src="js/jflickrfeed.min.js"></script>
    <script type="text/javascript" src="js/jquery.prettyPhoto.js"></script>
    <script type="text/javascript" src="js/jquery.elastislide.js"></script>
    <script type="text/javascript" src="js/jquery.tweet.js"></script>
    <script type="text/javascript" src="js/smoothscroll.js"></script>
    <script type="text/javascript" src="js/jquery.ui.totop.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
    <script type="text/javascript" src="js/ajax-mail.js"></script>
    <style>
        tr {
            height: 30px;
            /*background-color: red;*/
            margin: 0 5px;
        }

        .td1 {
            text-align: right;
            padding-right: 2em;
            width: 5em;
            /*background-color: red;*/
        }

        .td2 {
            height: 50px;
        }

        .td2 > .input-text {
            height: 30px;
            width: 250px;
            border-radius: 20px;
        }

        #speciality {
            width: 250px;
        }

        #srank {
            width: 250px;
        }
        em{
            font-weight: bold;
            color: #cc3333;
            padding-right: 5px;
            vertical-align: middle;
        }
    </style>
</head>
<body>
<!--头部-->
<header id="header">
    <div class="container" style="margin-bottom: 2px">
        <div class="row header-top" style="margin-left:5px;margin-bottom:0px;">
            <div class="span5 logo" style="width: 100%;margin-left:10px">
                <a class="logo-img" href="home.jsp" title="responsive template" style="margin-bottom: 5px"><img
                        src="images/myimg/hitwh_logo_blue.png" alt="哈工大威海校徽"/></a>
            </div>
        </div>
        <div class="row header-nav">
            <div class="span12">
                <nav id="menu" class="clearfix">
                    <ul>
                        <li><a href="./home.jsp"><span class="name">主页</span></a>
                        </li>
                        <li><a href="news.jsp"><span class="name">新闻中心</span></a>
                        </li>
                        <li><a href="notice.jsp"><span class="name">通知公告</span></a>
                        </li>
                        <li><a href="enterprise.jsp"><span class="name">合作企业</span></a>
                        </li>
                        <li class="current"><a><span class="name">用户中心</span></a>
                            <ul>
                                <li><a href="studentLogin.jsp"  target="_blank">学生用户登录</a></li>
                                <li><a href="teacherLogin.jsp" target="_blank">教师用户登录</a></li>
                                <li><a href="employeeLogin.jsp" target="_blank">企业用户登录</a></li>
                            </ul>
                        </li>
                        <%--<li><a href="download.jsp"><span class="name">下载中心</span></a></li>--%>
                        <li><a href="about1.jsp"><span class="name">计划介绍</span></a></li>
                    </ul>
                </nav>
                <form class="top-search pull-right">
                    <input type="text" placeholder="站内搜索..." class="span3">
                    <button type="button" class="btn"><i class="icon-search-form"></i></button>
                </form>
            </div>
        </div>
    </div>
</header>

<!--container-->
<section id="container">
    <div class="container">
        <div class="row" style="padding-left: 30px;text-align: center">
            <form class="form-actions" style="text-align: center">

                <table style="margin-left:35%;">
                    <thead style="text-align: left">
                    <small style="color: dimgray;text-align: left;">请认真填写申请人资料</small>
                    </thead>
                    <tr>
                        <td class="td1"><label for="sname"><em>*</em>姓名</label></td>
                        <td class="td2"><input type="text" id="sname" class="input-text" style="border-radius: 9px"/>
                        </td>
                    </tr>
                    <tr>
                        <td class="td1"><label for="sno"><em>*</em>学号</label></td>
                        <td class="td2"><input type="text" id="sno" class="input-text" style="border-radius: 9px;"></td>
                    </tr>
                    <tr>
                        <td class="td1"><em>*</em>性别</td>
                        <td class="td2"><input type="radio" name="sex" class="" id="men">男&nbsp;&nbsp;
                            <input type="radio" name="sex" class="" id="women">女
                        </td>
                    </tr>
                    <tr>
                        <td class="td1"><label for="speciality"><em>*</em>专业</label></td>
                        <td class="td2">
                            <select id="speciality">
                                <option value="speciality-0">计算机科学与技术</option>
                                <option value="speciality-1">软件工程</option>
                                <option value="speciality-2">信息安全</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td class="td1"><label for="srank"><em>*</em>专业排名</label></td>
                        <td class="td2">
                            <select id="srank">
                                <option value="rank-0">前2%</option>
                                <option value="rank-1">前5%</option>
                                <option value="rank-2">前10%</option>
                                <option value="rank-3">前20%</option>
                                <option value="rank-4">前30%</option>
                                <option value="rank-2">前40%</option>
                                <option value="rank-3">前50%</option>
                                <option value="rank-4">其他</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td class="td1"><label for="slanguage"><em>*</em>外语水平</label></td>
                        <td class="td2">
                            <input type="text" id="slanguage" class="input-text">
                        </td>
                    </tr>
                    <tr>
                        <td class="td1"><label for="sphone"><em>*</em>手机号</label></td>
                        <td class="td2"><input type="text" class="input-text" id="sphone"></td>
                    </tr>
                    <tr>
                        <td class="td1"><label for="smail"><em>*</em>邮箱</label></td>
                        <td class="td2"><input type="email" class="input-text" id="smail"></td>
                    </tr>
                    <tr>
                        <td colspan="2" align="right">
                            <label for="sgrade" style="text-align: left">&nbsp;&nbsp;所获奖项及项目概况</label>
                            <textarea id="sgrade" style="width: 100%;height: 100px"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td class="td1"><label>上传附件</label></td>
                        <td class="td2">
                            <input type="file">
                        </td>
                    </tr>
                    <tr></tr>
                    <tr align="center">
                        <td colspan="2">
                            <button type="submit" class="btn-success" style="width: 5em;height: 2.5em;border-radius: 9px">确定</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    </div>
</section>

<!-- 最下方 -->
<footer id="footer">
    <div class="container" align="center">
        友情链接：
        <a href="http://www.hit.edu.cn/">哈工大（本部）</a>&nbsp;
        <a href="http://www.hitwh.edu.cn/">哈工大（威海）</a>&nbsp;
        <a href="http://www.hitsz.edu.cn/index.html">哈工大（深圳）</a>&nbsp;
    </div>
</footer>

<!--footer menu-->
<section id="footer-menu">
    <div class="container">
        <p align="center">
            山东省威海市环翠区文化西路2号&nbsp;&nbsp;&nbsp;&nbsp;邮政编码：264209&nbsp;&nbsp;&nbsp;&nbsp;哈尔滨工业大学（威海）版权所有 |
            <a class="my_a_link" href="adminLogin.jsp" style="color: #1a1a1a">登陆</a>
        </p>
    </div>
</section>
</body>
</html>
