<%@page contentType="text/html; charset=utf-8" language="java" %>
<html>
<head>
    <title>用户中心</title>
    <meta name="viewport" content="width=100%; initial-scale=1; maximum-scale=1; minimum-scale=1; user-scalable=no;" />
    <link rel="shortcut icon" href="images/favicon.ico" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="images/apple-touch-icon-144-precomposed.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="images/apple-touch-icon-114-precomposed.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="images/apple-touch-icon-72-precomposed.png" />
    <link rel="apple-touch-icon-precomposed" href="images/apple-touch-icon-57-precomposed.png" />
    <link href="css/bootstrap.css" type="text/css" rel="stylesheet" />
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
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>

<body>
<!--header-->
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
                        <li><a href="home.jsp"><span class="name">主页</span></a>
                        </li>
                        <li><a href="news.jsp"><span class="name">新闻中心</span></a>
                        </li>
                        <li><a href="notice.jsp"><span class="name">通知公告</span></a>
                        </li>
                        <li><a href="enterprise.jsp"><span class="name">合作企业</span></a>
                            <ul>
                                <li><a href="./user.jsp">企业列表</a></li>
                                <li><a href="enterprise.jsp">企业介绍</a></li>
                                <li><a href="employee.jsp">导师介绍</a></li>
                            </ul>
                        </li>
                        <li class="current"><a href="./user.jsp"><span class="name">用户中心</span></a>
                            <ul>
                                <li><a href="studentLogin.jsp">学生用户</a></li>
                                <li><a href="teacherLogin.jsp">教师用户</a></li>
                                <li><a href="employeeLogin.jsp">企业用户</a></li>
                            </ul>
                        </li>
                        <li><a href="download.jsp"><span class="name">下载中心</span></a></li>
                        <li><a href="about.jsp"><span class="name">项目介绍</span></a></li>
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

<!--page header / breadcrumbs-->
<section class="breadcrumbs">
    <div class="container">
        <div class="row">
            <div class="span12">
                <div class="page-header">
                    <div class="row">
                        <div class="span8">
                            <h1>Blog <small>/ Phasellus erat felis</small></h1>
                            <div><a href="#">Home</a> &nbsp;&rsaquo;&nbsp; Blog</div>
                        </div>
                        <div class="span4 hidden-phone">
                            <section class="search clearfix">
                                <form id="search" class="input-append" />
                                    <input class="span4" id="appendedInputButton" size="16" type="text" value="Search..." name="search site" onfocus="if(this.value=='Search...') this.value=''" onblur="if(this.value=='') this.value='Search...'" />
                                    <input class="btn search-bt" type="submit" name="submit" value="" />
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!--container-->
<section id="container">
    <div class="container">
        <div class="row">
            <section id="page-sidebar" class="pull-left span8">

                <article class="blog-post">
                    <div class="row">
                        <div class="span8">
                            <h3 class="post-title"><a href="blog-single.html">Lorem ipsum dolor sit amet consectetur</a></h3>
                            <ul class="post-meta">
                                <li><i class="icon-calendar"></i> <a href="#">October 30, 2012</a></li>
                                <li><i class="icon-user"></i> <a href="#">DXThemes</a></li>
                                <li><i class="icon-list-alt"></i> <a href="#">News</a>, <a href="#">Web Design</a></li>
                                <li><i class="icon-tag"></i> <a href="#">CSS3</a> <a href="#">HTML5</a> <a href="#">Responsive</a></li>
                                <li><i class="icon-comment"></i> <a href="#">12 Comments</a></li>
                            </ul>
                            <div class="post-media">
                                <div id="mainslider" class="flexslider ps-slider">
                                    <ul class="slides">
                                        <li><img src="example/slider1.jpg" alt="" /></li>
                                        <li><img src="example/slider2.jpg" alt="" /></li>
                                        <li><img src="example/slider3.jpg" alt="" /></li>
                                        <li><img src="example/slider4.jpg" alt="" /></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="post-content">
                                <p>
                                    Etiam congue, elit at tristique aliquam, sapien diam eleifend orci, vel tristique augue diam vel turpis. Vestibulum volutpat diam ut tortor vehicula accumsan. Aliquam placerat arcu eu orci pretium sit amet mattis felis convallis. Cras elementum molestie laoreet. Pellentesque malesuada risus pellentesque tortor iaculis in congue leo bibendum.
                                </p>
                                <p>
                                    Integer facilisis congue volutpat. Curabitur vel consequat eros. Ut sapien magna, interdum eget imperdiet quis, ultrices nec libero. Etiam ut magna at dolor tristique pretium. Pellentesque rhoncus ornare metus consequat molestie.
                                </p>
                                <p><a href="blog-single.html" class="btn btn-large btn-welcome"><i class="icon-chevron-right"></i>Continue reading</a></p>
                            </div>
                        </div>
                    </div>
                </article>

                <hr />

                <article class="blog-post">
                    <div class="row">
                        <div class="span8">
                            <h3 class="post-title"><a href="blog-single.html">Lorem ipsum dolor sit amet consectetur</a></h3>
                            <ul class="post-meta">
                                <li><i class="icon-calendar"></i> <a href="#">October 25, 2012</a></li>
                                <li><i class="icon-user"></i> <a href="#">DXThemes</a></li>
                                <li><i class="icon-list-alt"></i> <a href="#">News</a>, <a href="#">Web Design</a></li>
                                <li><i class="icon-tag"></i> <a href="#">CSS3</a> <a href="#">HTML5</a> <a href="#">Responsive</a></li>
                                <li><i class="icon-comment"></i> <a href="#">12 Comments</a></li>
                            </ul>
                            <div class="post-media">
                                <img src="example/blog1.jpg" alt="" />
                            </div>
                            <div class="post-content">
                                <p>
                                    Etiam congue, elit at tristique aliquam, sapien diam eleifend orci, vel tristique augue diam vel turpis. Vestibulum volutpat diam ut tortor vehicula accumsan. Aliquam placerat arcu eu orci pretium sit amet mattis felis convallis. Cras elementum molestie laoreet. Pellentesque malesuada risus pellentesque tortor iaculis in congue leo bibendum.
                                </p>
                                <p>
                                    Integer facilisis congue volutpat. Curabitur vel consequat eros. Ut sapien magna, interdum eget imperdiet quis, ultrices nec libero. Etiam ut magna at dolor tristique pretium. Pellentesque rhoncus ornare metus consequat molestie.
                                </p>
                                <p><a href="blog-single.html" class="btn btn-large btn-welcome"><i class="icon-chevron-right"></i>Continue reading</a></p>
                            </div>
                        </div>
                    </div>
                </article>

                <hr />

                <article class="blog-post">
                    <div class="row">
                        <div class="span8">
                            <h3 class="post-title"><a href="blog-single.html">Lorem ipsum dolor sit amet consectetur</a></h3>
                            <ul class="post-meta">
                                <li><i class="icon-calendar"></i> <a href="#">October 18, 2012</a></li>
                                <li><i class="icon-user"></i> <a href="#">DXThemes</a></li>
                                <li><i class="icon-list-alt"></i> <a href="#">News</a>, <a href="#">Web Design</a></li>
                                <li><i class="icon-tag"></i> <a href="#">CSS3</a> <a href="#">HTML5</a> <a href="#">Responsive</a></li>
                                <li><i class="icon-comment"></i> <a href="#">12 Comments</a></li>
                            </ul>
                            <div class="post-media">
                                <img src="example/blog2.jpg" alt="" />
                            </div>
                            <div class="post-content">
                                <p>
                                    Etiam congue, elit at tristique aliquam, sapien diam eleifend orci, vel tristique augue diam vel turpis. Vestibulum volutpat diam ut tortor vehicula accumsan. Aliquam placerat arcu eu orci pretium sit amet mattis felis convallis. Cras elementum molestie laoreet. Pellentesque malesuada risus pellentesque tortor iaculis in congue leo bibendum.
                                </p>
                                <p>
                                    Integer facilisis congue volutpat. Curabitur vel consequat eros. Ut sapien magna, interdum eget imperdiet quis, ultrices nec libero. Etiam ut magna at dolor tristique pretium. Pellentesque rhoncus ornare metus consequat molestie.
                                </p>
                                <p><a href="blog-single.html" class="btn btn-large btn-welcome"><i class="icon-chevron-right"></i>Continue reading</a></p>
                            </div>
                        </div>
                    </div>
                </article>

                <hr />

                <article class="blog-post">
                    <div class="row">
                        <div class="span8">
                            <h3 class="post-title"><a href="blog-single.html">Lorem ipsum dolor sit amet consectetur</a></h3>
                            <ul class="post-meta">
                                <li><i class="icon-calendar"></i> <a href="#">October 17, 2012</a></li>
                                <li><i class="icon-user"></i> <a href="#">DXThemes</a></li>
                                <li><i class="icon-list-alt"></i> <a href="#">News</a>, <a href="#">Web Design</a></li>
                                <li><i class="icon-tag"></i> <a href="#">CSS3</a> <a href="#">HTML5</a> <a href="#">Responsive</a></li>
                                <li><i class="icon-comment"></i> <a href="#">12 Comments</a></li>
                            </ul>
                            <div class="post-media">
                                <div class="video">
                                    <iframe src="http://player.vimeo.com/video/7449107" width="" height="" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
                                </div>
                            </div>
                            <div class="post-content">
                                <p>
                                    Etiam congue, elit at tristique aliquam, sapien diam eleifend orci, vel tristique augue diam vel turpis. Vestibulum volutpat diam ut tortor vehicula accumsan. Aliquam placerat arcu eu orci pretium sit amet mattis felis convallis. Cras elementum molestie laoreet. Pellentesque malesuada risus pellentesque tortor iaculis in congue leo bibendum.
                                </p>
                                <p>
                                    Integer facilisis congue volutpat. Curabitur vel consequat eros. Ut sapien magna, interdum eget imperdiet quis, ultrices nec libero. Etiam ut magna at dolor tristique pretium. Pellentesque rhoncus ornare metus consequat molestie.
                                </p>
                                <p><a href="blog-single.html" class="btn btn-large btn-welcome"><i class="icon-chevron-right"></i>Continue reading</a></p>
                            </div>
                        </div>
                    </div>
                </article>

                <hr />

                <article class="blog-post">
                    <div class="row">
                        <div class="span8">
                            <h3 class="post-title"><a href="blog-single.html">Lorem ipsum dolor sit amet consectetur</a></h3>
                            <ul class="post-meta">
                                <li><i class="icon-calendar"></i> <a href="#">October 15, 2012</a></li>
                                <li><i class="icon-user"></i> <a href="#">DXThemes</a></li>
                                <li><i class="icon-list-alt"></i> <a href="#">News</a>, <a href="#">Web Design</a></li>
                                <li><i class="icon-tag"></i> <a href="#">CSS3</a> <a href="#">HTML5</a> <a href="#">Responsive</a></li>
                                <li><i class="icon-comment"></i> <a href="#">12 Comments</a></li>
                            </ul>
                            <div class="post-media">

                            </div>
                            <div class="post-content">
                                <p>
                                    Etiam congue, elit at tristique aliquam, sapien diam eleifend orci, vel tristique augue diam vel turpis. Vestibulum volutpat diam ut tortor vehicula accumsan. Aliquam placerat arcu eu orci pretium sit amet mattis felis convallis. Cras elementum molestie laoreet. Pellentesque malesuada risus pellentesque tortor iaculis in congue leo bibendum.
                                </p>
                                <p>
                                    Integer facilisis congue volutpat. Curabitur vel consequat eros. Ut sapien magna, interdum eget imperdiet quis, ultrices nec libero. Etiam ut magna at dolor tristique pretium. Pellentesque rhoncus ornare metus consequat molestie.
                                </p>
                                <p><a href="blog-single.html" class="btn btn-large btn-welcome"><i class="icon-chevron-right"></i>Continue reading</a></p>
                            </div>
                        </div>
                    </div>
                </article>

                <hr />

                <article class="blog-post">
                    <div class="row">
                        <div class="span8">
                            <h3 class="post-title"><a href="blog-single.html">Lorem ipsum dolor sit amet consectetur</a></h3>
                            <ul class="post-meta">
                                <li><i class="icon-calendar"></i> <a href="#">October 12, 2012</a></li>
                                <li><i class="icon-user"></i> <a href="#">DXThemes</a></li>
                                <li><i class="icon-list-alt"></i> <a href="#">News</a>, <a href="#">Web Design</a></li>
                                <li><i class="icon-tag"></i> <a href="#">CSS3</a> <a href="#">HTML5</a> <a href="#">Responsive</a></li>
                                <li><i class="icon-comment"></i> <a href="#">12 Comments</a></li>
                            </ul>
                            <div class="post-media">

                            </div>
                            <div class="post-content">
                                <blockquote>
                                    <p>
                                        Etiam congue, elit at tristique aliquam, sapien diam eleifend orci, vel tristique augue diam vel turpis. Vestibulum volutpat diam ut tortor vehicula accumsan. Aliquam placerat arcu eu orci pretium sit amet mattis felis convallis. Cras elementum molestie laoreet. Pellentesque malesuada risus pellentesque tortor iaculis in congue leo bibendum.
                                    </p>
                                    <p>
                                        Integer facilisis congue volutpat. Curabitur vel consequat eros. Ut sapien magna, interdum eget imperdiet quis, ultrices nec libero. Etiam ut magna at dolor tristique pretium. Pellentesque rhoncus ornare metus consequat molestie.
                                    </p>
                                </blockquote>
                                <p><a href="blog-single.html" class="btn btn-large btn-welcome"><i class="icon-chevron-right"></i>Continue reading</a></p>
                            </div>
                        </div>
                    </div>
                </article>

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
            </section>
            <!--sidebar-->
            <aside id="sidebar" class="pull-right span4">
                <section>
                    <h3 class="widget-title">Ready to Purchase</h3>
                    <p>Lorem ipsum dolor sit amet, consect <a href="#">etuer adipi scing</a> elit, sed diam nonummy nibh euis mod tinci dunt ut laoreet dolore magna</p>
                    <a href="#" class="btn btn-large btn-danger">Purchase</a>
                </section>
                <section>
                    <h3 class="widget-title">Categories</h3>
                    <ul class="icons ul-list">
                        <li><a href="#">Nam Interdum Tellus Nisi</a></li>
                        <li><a href="#">Nullam Pharetra Velit Quam</a></li>
                        <li><a href="#">Phasellus Blandit Cursus </a></li>
                        <li><a href="#">Donec Vulputate Justo </a></li>
                        <li><a href="#">Nulla Commodo Leo </a></li>
                    </ul>
                </section>
                <section class="popular-posts">
                    <h3 class="widget-title">Popular Post Widget</h3>
                    <div class="media">
                        <a class="pull-left" href="blog-single.html">
                            <img class="media-object" src="example/sidebar2.jpg" alt="" />
                            <span class="frame-overlay"></span>
                        </a>
                        <div class="media-body">
                            <h4 class="media-heading"><a href="blog-single.html">Phasellus Blandit Cursus</a></h4>
                            <p>Cras sit amet arcu ante, sed adipiscing nibh quisque vitae turpis sit amet dui condimentum</p>
                        </div>
                    </div>
                    <div class="media">
                        <a class="pull-left" href="blog-single.html">
                            <img class="media-object" src="example/sidebar3.jpg" alt="" />
                            <span class="frame-overlay"></span>
                        </a>
                        <div class="media-body">
                            <h4 class="media-heading"><a href="blog-single.html">Phasellus Blandit Cursus</a></h4>
                            <p>Cras sit amet arcu ante, sed adipiscing nibh quisque vitae turpis sit amet dui condimentum</p>
                        </div>
                    </div>
                    <div class="media">
                        <a class="pull-left" href="blog-single.html">
                            <img class="media-object" src="example/sidebar4.jpg" alt="" />
                            <span class="frame-overlay"></span>
                        </a>
                        <div class="media-body">
                            <h4 class="media-heading"><a href="blog-single.html">Phasellus Blandit Cursus</a></h4>
                            <p>Cras sit amet arcu ante, sed adipiscing nibh quisque vitae turpis sit amet dui condimentum</p>
                        </div>
                    </div>
                </section>
                <section>
                    <h3 class="widget-title">Blog Archives</h3>
                    <div class="accordion" id="accordion2">
                        <div class="accordion-group">
                            <div class="accordion-heading">
                                <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse1">
                                    <i class="icon-minus icon-white"></i>
                                    December 2012
                                </a>
                            </div>
                            <div id="collapse1" class="accordion-body collapse in">
                                <div class="accordion-inner">
                                    <ul class="icons ul-list-2">
                                        <li><a href="#">Wed Design</a></li>
                                        <li><a href="#">Responsive</a></li>
                                        <li><a href="#">HTML5 / CSS3</a></li>
                                        <li><a href="#">Coding Essentials</a></li>
                                        <li><a href="#">SEO Optimization</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-group">
                            <div class="accordion-heading">
                                <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse2">
                                    <i class="icon-plus icon-white"></i>
                                    November 2012
                                </a>
                            </div>
                            <div id="collapse2" class="accordion-body collapse">
                                <div class="accordion-inner">
                                    <ul class="icons ul-list-2">
                                        <li><a href="#">Wed Design</a></li>
                                        <li><a href="#">Responsive</a></li>
                                        <li><a href="#">HTML5 / CSS3</a></li>
                                        <li><a href="#">Coding Essentials</a></li>
                                        <li><a href="#">SEO Optimization</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-group">
                            <div class="accordion-heading">
                                <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse3">
                                    <i class="icon-plus icon-white"></i>
                                    October 2012
                                </a>
                            </div>
                            <div id="collapse3" class="accordion-body collapse">
                                <div class="accordion-inner">
                                    <ul class="icons ul-list-2">
                                        <li><a href="#">Wed Design</a></li>
                                        <li><a href="#">Responsive</a></li>
                                        <li><a href="#">HTML5 / CSS3</a></li>
                                        <li><a href="#">Coding Essentials</a></li>
                                        <li><a href="#">SEO Optimization</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-group">
                            <div class="accordion-heading">
                                <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse4">
                                    <i class="icon-plus icon-white"></i>
                                    September 2012
                                </a>
                            </div>
                            <div id="collapse4" class="accordion-body collapse">
                                <div class="accordion-inner">
                                    <ul class="icons ul-list-2">
                                        <li><a href="#">Wed Design</a></li>
                                        <li><a href="#">Responsive</a></li>
                                        <li><a href="#">HTML5 / CSS3</a></li>
                                        <li><a href="#">Coding Essentials</a></li>
                                        <li><a href="#">SEO Optimization</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-group">
                            <div class="accordion-heading">
                                <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse5">
                                    <i class="icon-plus icon-white"></i>
                                    August 2012
                                </a>
                            </div>
                            <div id="collapse5" class="accordion-body collapse">
                                <div class="accordion-inner">
                                    <ul class="icons ul-list-2">
                                        <li><a href="#">Wed Design</a></li>
                                        <li><a href="#">Responsive</a></li>
                                        <li><a href="#">HTML5 / CSS3</a></li>
                                        <li><a href="#">Coding Essentials</a></li>
                                        <li><a href="#">SEO Optimization</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-group">
                            <div class="accordion-heading">
                                <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse6">
                                    <i class="icon-plus icon-white"></i>
                                    July 2012
                                </a>
                            </div>
                            <div id="collapse6" class="accordion-body collapse">
                                <div class="accordion-inner">
                                    <ul class="icons ul-list-2">
                                        <li><a href="#">Wed Design</a></li>
                                        <li><a href="#">Responsive</a></li>
                                        <li><a href="#">HTML5 / CSS3</a></li>
                                        <li><a href="#">Coding Essentials</a></li>
                                        <li><a href="#">SEO Optimization</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <h3 class="widget-title">Tag Cloud</h3>
                    <div class="tags">
                        <a href="#"><i class="icon-tag icon-white"></i>jquery</a>
                        <a href="#"><i class="icon-tag icon-white"></i>css3</a>
                        <a href="#"><i class="icon-tag icon-white"></i>html5</a>
                        <a href="#"><i class="icon-tag icon-white"></i>web design</a>
                        <a href="#"><i class="icon-tag icon-white"></i>busines</a>
                        <a href="#"><i class="icon-tag icon-white"></i>creative</a>
                        <a href="#"><i class="icon-tag icon-white"></i>responsive</a>
                        <a href="#"><i class="icon-tag icon-white"></i>development</a>
                        <a href="#"><i class="icon-tag icon-white"></i>javascript</a>
                        <a href="#"><i class="icon-tag icon-white"></i>usability</a>
                        <a href="#"><i class="icon-tag icon-white"></i>typography</a>
                        <a href="#"><i class="icon-tag icon-white"></i>optimization</a>
                        <a href="#"><i class="icon-tag icon-white"></i>tips</a>
                        <a href="#"><i class="icon-tag icon-white"></i>e-commerce</a>
                        <a href="#"><i class="icon-tag icon-white"></i>seo</a>
                    </div>
                </section>
                <!--twitter -->
                <section id="twitter-sidebar">
                    <h3 class="widget-title">Twitter</h3>
                    <div class="twitter"></div>
                    <script type="text/javascript">
                        $(document).ready(function(){
                            $(".twitter").tweet({
                                join_text: "auto",
                                username: "twitter",
                                avatar_size:40,
                                count: 3,
                                auto_join_text_default: "we said,",
                                auto_join_text_ed: "we",
                                auto_join_text_ing: "we were",
                                auto_join_text_reply: "we replied",
                                auto_join_text_url: "we were checking out",
                                loading_text: "loading tweets..."
                            });
                        });
                    </script>
                </section>
                <section>
                    <h3 class="widget-title">Latest Work</h3>
                    <div id="latestwork-sidebar" class="carousel slide">
                        <div class="carousel-inner">
                            <div class="active item"><img src="example/latest3.jpg" alt="photo" /></div>
                            <div class="item"><img src="example/latest4.jpg" alt="photo" /></div>
                            <div class="item"><img src="example/latest5.jpg" alt="photo" /></div>
                        </div>
                        <a class="carousel-control left" href="#latestwork-sidebar" data-slide="prev"></a>
                        <a class="carousel-control right" href="#latestwork-sidebar" data-slide="next"></a>
                    </div>
                    <script type="text/javascript">
                        $(document).ready(function(){
                            $('.carousel').carousel({
                                interval: 5000
                            })
                        });
                    </script>
                </section>
                <!--Flickr -->
                <section>
                    <h3 class="widget-title">Flickr</h3>
                    <ul class="sidebar-flickr clearfix"></ul>
                </section>

            </aside>
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
