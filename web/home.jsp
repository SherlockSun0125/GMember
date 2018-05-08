<%@page contentType="text/html; charset=utf-8" %>
<html>
<head>
    <title>工程领军人与卓越工程师计划</title>
    <meta name="viewport" content="width=100%; initial-scale=1; maximum-scale=1; minimum-scale=1; user-scalable=no;" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="images/apple-touch-icon-144-precomposed.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="images/apple-touch-icon-114-precomposed.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="images/apple-touch-icon-72-precomposed.png" />
    <link rel="apple-touch-icon-precomposed" href="images/apple-touch-icon-57-precomposed.png" />
    <link href="css/bootstrap-2.min.css" type="text/css" rel="stylesheet" />
    <link href="css/style.css" type="text/css" rel="stylesheet" />
    <link href="css/prettyPhoto.css" type="text/css" rel="stylesheet" />
    <link href="css/font-icomoon.css" type="text/css" rel="stylesheet" />
    <link href="css/font-awesome.css" type="text/css" rel="stylesheet" />
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
</head>

<body>
<!--头部-->
<header id="header">
    <div class="container" style="margin-bottom: 2px">
        <div class="row header-top" style="margin-left:5px;margin-bottom:0px;">
            <div class="span5 logo" style="width: 100%;margin-left:10px">
                <a class="logo-img" href="home.jsp" title="responsive template" style="margin-bottom: 5px"><img src="images/myimg/hitwh_logo_blue.png" alt="哈工大威海校徽" /></a>
            </div>
        </div>
        <div class="row header-nav">
           <div class="span12">
                <nav id="menu" class="clearfix">
                    <ul>
                        <li class="current"><a href="./home.jsp"><span class="name">主页</span></a>
                        </li>
                        <li><a href="news.jsp"><span class="name">新闻中心</span></a>
                        </li>
                        <li><a href="notice.jsp"><span class="name">通知公告</span></a>
                        </li>
                        <li ><a href="enterprise.jsp"><span class="name">合作企业</span></a>
                        </li>
                        <li><a><span class="name">用户中心</span></a>
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

<!--图片展示-->
<section id="slider">
    <div class="container">
        <div class="row">
            <div class="span12">
                <div id="mainslider" class="flexslider">
                    <ul class="slides">
                        <li>
                            <img src="images/myimg/hit_silde1.jpg" alt=""/>
                            <div class="slide-caption" style="position: absolute;right: 0px;">
                                <h3 class="slide-title">校训石</h3>
                                <p class="slide-subtitle">
                                    规格严格，功夫到家。
                                </p>
                            </div>
                        </li>
                        <li>
                            <img src="images/myimg/hit_silde2.jpg" alt="" />
                            <div class="slide-caption"  style="position: absolute;right: 0px">
                                <h3 class="slide-title">研究院</h3>
                                <p class="slide-subtitle">
                                    活动简单介绍。
                                </p>
                            </div>
                        </li>
                        <li>
                            <img src="images/myimg/hit_silde3.jpg" alt="" />
                            <div class="slide-caption"  style="position:absolute;right: 0px;">
                                <h3 class="slide-title">主楼</h3>
                                <p class="slide-subtitle">
                                    活动简单介绍。
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<!--项目介绍-->
<section id="container">
    <div class="container">
        <div class="row">
            <div class="span12">
                <div class="hero-unit">
                    <h4>工程领军人与卓越工程师计划介绍</h4>
                    <p>该项目的指导思想是面向建设世界一流大学的目标，全面加强学生品德修养、
                        人文素质和自然科学基础培养，着力提高学生的实践能力。
                    </p>
                    <p>
                        面向产业高端人才需求的工程领军人才培养模式研究与实践，以紧密围绕工程领军人才所需要具备的素养，
                        包括领导力知识、工程领导才能、工程思维、领袖态度与个人品质等为核心，旨在强化学生实践能力、
                        创新能力和工程领导力的培养，通过对具有领导潜质的拔尖学生进行专门训练，借助校企合作、联合培养、双导师制等方式，
                        为参与该计划的学生提供实践平台和机会，提升其创新能力和工程领导力，为使他们成为具有工程领导能力的高水平复合型人
                        才打下坚实基础。
                    </p>
                    <a class="btn btn-welcome btn-large pull-right" href="about1.jsp">了解更多</a>
                </div>
            </div>
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
