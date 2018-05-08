<%@page contentType="text/html; charset=utf-8" %>
<html>
<head>
    <title>合作企业</title>
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
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
</head>

<body>
<!--header-->
<header id="header">
    <div class="container" style="margin-bottom: 2px">
        <div class="row header-top" style="margin-left:5px;margin-bottom:0;">
            <div class="span5 logo" style="width: 100%;margin-left:10px">
                <a class="logo-img" href="home.jsp" title="responsive template" style="margin-bottom: 5px"><img
                        src="images/myimg/hitwh_logo_blue.png" alt="哈工大威海校徽"/></a>
            </div>
        </div>
        <div class="row header-nav">
            <div class="span12">
                <nav id="menu" class="clearfix">
                    <ul>
                        <li><a href="home.jsp"><span class="name">主页</span></a>
                        </li>
                        <li><a href="news.jsp"><span class="name">新闻中心</span></a>
                        </li>
                        <li><a href="notice.jsp"><span class="name">通知公告</span></a>
                        </li>
                        <li class="current"><a href="enterprise.jsp"><span class="name">合作企业</span></a>
                        </li>
                        <li><a><span class="name">用户中心</span></a>
                            <ul>
                                <li><a href="studentLogin.jsp"  target="_blank">学生用户登录</a></li>
                                <li><a href="teacherLogin.jsp"  target="_blank">教师用户登录</a></li>
                                <li><a href="employeeLogin.jsp"  target="_blank">企业用户登录</a></li>
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
        <!--filter-->
        <ul id="filtrable">
            <li class="current all"><a href="#all">全部</a></li>
            <%--International large software company--%>
            <li class="ils-co"><a href="#ils-co">国际化大型软件公司</a></li>
            <%--Game outsourcing company--%>
            <li class="go-co"><a href="#go-co">游戏外包公司</a></li>
            <%--Digital Game Company--%>
            <li class="dg-co"><a href="#dg-co">数字游戏公司</a></li>
            <%--Embedded company--%>
            <li class="embedded-co"><a href="#embedded-co">嵌入式公司</a></li>
            <%--e-commerce--%>
            <li class="e-commerce"><a href="#e-commerce">电子商务公司</a></li>
            <%--Internet Co--%>
            <li class="internet-co"><a href="#internet-co">互联网公司</a></li>
            <%--others--%>
            <li class="others"><a href="#others">其他行业</a></li>
        </ul>

        <div class="clear"></div>

        <section class="row portfolio filtrable clearfix">
            <article data-id="id-1" data-type="e-commerce ils-co internet0-co" class="span3" >
                <div class="inner-image">
                    <img src="images/enterprise/alibaba-0.jpg" alt="photo" style="height: 200px"/>
                    <span class="frame-overlay"></span>
                </div>
                <div class="inner-text">
                    <h4 class="title"><a href="enterpriseIntroAli.jsp">阿里巴巴集团</a></h4>
                    <p>阿里巴巴集团经营多项业务……</p>
                </div>
            </article>
            <article data-id="id-2" data-type="e-commerce internet-co" class="span3">
                <div class="inner-image">
                    <img src="example/latest2.jpg" alt="photo"/>
                    <span class="frame-overlay"></span>
                </div>
                <div class="inner-text">
                    <h4 class="title"><a href="enterpriseIntrOthers.jsp">公司名称2</a></h4>
                    <p>这里是公司介绍</p>
                </div>
            </article>
            <article data-id="id-3" data-type="others" class="span3">
                <div class="inner-image">
                    <img src="example/latest3.jpg" alt="photo"/>
                    <span class="frame-overlay"></span>
                </div>
                <div class="inner-text">
                    <h4 class="title"><a href="enterpriseIntrOthers.jsp">公司名称3</a></h4>
                    <p>这里是公司介绍</p>
                </div>
            </article>
            <article data-id="id-4" data-type="e-commerce dg-co" class="span3">
                <div class="inner-image">
                    <img src="example/latest4.jpg" alt="photo"/>
                    <span class="frame-overlay"></span>
                </div>
                <div class="inner-text">
                    <h4 class="title"><a href="enterpriseIntrOthers.jsp">公司名称4</a></h4>
                    <p>这里是公司介绍</p>
                </div>
            </article>
            <article data-id="id-5" data-type="embedded-co go-co" class="span3">
                <div class="inner-image">
                    <img src="example/latest5.jpg" alt="photo"/>
                    <span class="frame-overlay"></span>
                </div>
                <div class="inner-text">
                    <h4 class="title"><a href="enterpriseIntrOthers.jsp">公司名称5</a></h4>
                    <p>这里是公司介绍</p>
                </div>
            </article>
            <article data-id="id-6" data-type="others" class="span3">
                <div class="inner-image">
                    <img src="example/latest6.jpg" alt="photo"/>
                    <span class="frame-overlay"></span>
                </div>
                <div class="inner-text">
                    <h4 class="title"><a href="enterpriseIntrOthers.jsp">公司名称6</a></h4>
                    <p>这里是公司介绍</p>
                </div>
            </article>
            <article data-id="id-7" data-type="embedded-co dg-co" class="span3">
                <div class="inner-image">
                    <img src="example/latest7.jpg" alt="photo"/>
                    <span class="frame-overlay"></span>
                </div>
                <div class="inner-text">
                    <h4 class="title"><a href="enterpriseIntrOthers.jsp">公司名称7</a></h4>
                    <p>这里是公司介绍</p>
                </div>
            </article>
            <article data-id="id-8" data-type="others " class="span3">
                <div class="inner-image">
                    <img src="example/latest8.jpg" alt="photo"/>
                    <span class="frame-overlay"></span>
                </div>
                <div class="inner-text">
                    <h4 class="title"><a href="enterpriseIntrOthers.jsp">公司名称8</a></h4>
                    <p>这里是公司介绍</p>
                </div>
            </article>
            <article data-id="id-9" data-type="internet-co go-co" class="span3">
                <div class="inner-image">
                    <img src="example/latest4.jpg" alt="photo"/>
                    <span class="frame-overlay"></span>
                </div>
                <div class="inner-text">
                    <h4 class="title"><a href="enterpriseIntrOthers.jsp">公司名称9</a></h4>
                    <p>这里是公司介绍</p>
                </div>
            </article>
            <article data-id="id-10" data-type="e-commerce" class="span3">
                <div class="inner-image">
                    <img src="example/latest3.jpg" alt="photo"/>
                    <span class="frame-overlay"></span>
                </div>
                <div class="inner-text">
                    <h4 class="title"><a href="enterpriseIntrOthers.jsp">公司名称10</a></h4>
                    <p>这里是公司介绍</p>
                </div>
            </article>
            <article data-id="id-11" data-type="ils-co go-co" class="span3">
                <div class="inner-image">
                    <img src="example/latest2.jpg" alt="photo"/>
                    <span class="frame-overlay"></span>
                </div>
                <div class="inner-text">
                    <h4 class="title"><a href="enterpriseIntrOthers.jsp">公司名称11</a></h4>
                    <p>这里是公司介绍</p>
                </div>
            </article>
            <article data-id="id-12" data-type="internet-co" class="span3">
                <div class="inner-image">
                    <img src="example/latest1.jpg" alt="photo"/>
                    <span class="frame-overlay"></span>
                </div>
                <div class="inner-text">
                    <h4 class="title"><a href="enterpriseIntrOthers.jsp">公司名称12</a></h4>
                    <p>这里是公司介绍</p>
                </div>
            </article>
            <article data-id="id-13" data-type="dg-co ils-co" class="span3">
                <div class="inner-image">
                    <img src="example/latest1.jpg" alt="photo"/>
                    <span class="frame-overlay"></span>
                </div>
                <div class="inner-text">
                    <h4 class="title"><a href="enterpriseIntrOthers.jsp">公司名称13</a></h4>
                    <p>这里是公司介绍</p>
                </div>
            </article>
            <article data-id="id-14" data-type="go-co" class="span3">
                <div class="inner-image">
                    <img src="example/latest1.jpg" alt="photo"/>
                    <span class="frame-overlay"></span>
                </div>
                <div class="inner-text">
                    <h4 class="title"><a href="enterpriseIntrOthers.jsp">公司名称14</a></h4>
                    <p>这里是公司介绍</p>
                </div>
            </article>
            <article data-id="id-15" data-type="ils-co" class="span3">
                <div class="inner-image">
                    <img src="example/latest1.jpg" alt="photo"/>
                    </a>
                </div>
                <div class="inner-text">
                    <h4 class="title"><a href="enterpriseIntrOthers.jsp">公司名称15</a></h4>
                    <p>这里是公司介绍</p>
                </div>
            </article>
            <article data-id="id-16" data-type="ils-co" class="span3">
                <div class="inner-image">
                    <img src="example/latest1.jpg" alt="photo"/>
                    <span class="frame-overlay"></span>
                </div>
                <div class="inner-text">
                    <h4 class="title"><a href="enterpriseIntrOthers.jsp">公司名称16</a></h4>
                    <p>这里是公司介绍</p>
                </div>
            </article>
        </section>

        <!--pagination-->
        <div class="pagination pagination-centered">
            <ul>
                <li class="disabled"><a href="#">&laquo;</a></li>
                <li class="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#">&raquo;</a></li>
            </ul>
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
