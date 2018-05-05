<%@page contentType="text/html; charset=utf-8" %>
<html>
<head>
    <meta charset="utf-8">
    <title>管理员</title>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="lib/bootstrap/css/bootstrap.css">
    <link rel="stylesheet" href="lib/font-awesome/css/font-awesome.css">
    <script src="lib/jquery-1.11.1.min.js" type="text/javascript"></script>
    <script src="lib/jQuery-Knob/js/jquery.knob.js" type="text/javascript"></script>
    <script type="text/javascript">
        $(function () {
            $(".knob").knob();
        });
    </script>
    <link rel="stylesheet" type="text/css" href="../../css/theme.css">
    <link rel="stylesheet" type="text/css" href="../../css/premium.css">
    <script type="text/javascript">
        $(function () {
            var match = document.cookie.match(new RegExp('color=([^;]+)'));
            if (match) var color = match[1];
            if (color) {
                $('body').removeClass(function (index, css) {
                    return (css.match(/\btheme-\S+/g) || []).join(' ')
                })
                $('body').addClass('theme-' + color);
            }

            $('[data-popover="true"]').popover({html: true});

        });
    </script>
    <style type="text/css">
        #line-chart {
            height: 300px;
            width: 800px;
            margin: 0px auto;
            margin-top: 1em;
        }

        .navbar-default .navbar-brand, .navbar-default .navbar-brand:hover {
            color: #fff;
        }
    </style>
    <script type="text/javascript">
        $(function () {
            var uls = $('.sidebar-nav > ul > *').clone();
            uls.addClass('visible-xs');
            $('#main-menu').append(uls.clone());
        });
    </script>
    <script src="lib/bootstrap/js/bootstrap.js"></script>
    <script type="text/javascript">
        $("[rel=tooltip]").tooltip();
        $(function () {
            $('.demo-cancel-click').click(function () {
                return false;
            });
        });
    </script>

</head>

<body class="theme-blue">

<!--头部-->
<div class="navbar navbar-default" role="navigation">
    <div class="navbar-header">

        <a class="" href="adminHome.jsp">
            <span class="navbar-brand" style="padding-top: 2px;height: 45px">
                <img src="../../images/myimg/hitwh_logo.png" height="45px" style="padding-top: 0;padding-bottom: 0">
            </span>
        </a>
    </div>

    <div class="navbar-collapse collapse" style="height: 1px;">
        <ul id="main-menu" class="nav navbar-nav navbar-right">
            <li class="dropdown hidden-xs">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    <span class="glyphicon glyphicon-user padding-right-small"
                          style="position:relative;top: 3px;"></span> Paul Suen
                    <i class="fa fa-caret-down"></i>
                </a>

                <ul class="dropdown-menu">
                    <li><a href="./">我的账户</a></li>
                    <li class="divider"></li>
                    <li class="dropdown-header">管理面板</li>
                    <%--<li><a href="./">用户</a></li>--%>
                    <li><a href="./">安全</a></li>
                    <li class="divider"></li>
                    <li><a tabindex="-1" href="../../adminLogin.jsp">退出</a></li>
                </ul>
            </li>
        </ul>

    </div>
</div>

<%--左侧边栏--%>
<div class="sidebar-nav">
    <ul>
        <%--网站数据--%>
        <li><a href="adminHome.jsp" class="nav-header" target="_self"><i
                class="fa fa-fw fa-heart"></i>&nbsp;&nbsp;网站数据</a></li>
        <%--教师管理--%>
        <li><a href="teacherM.jsp" class="nav-header"><i class="fa fa-fw fa-question-circle"></i>&nbsp;&nbsp;教师管理</a></li>

        <%--学生管理--%>
        <li><a href="#" data-target=".dashboard-menu" class="nav-header" data-toggle="collapse">
            <i class="fa fa-fw fa-dashboard"></i>&nbsp;&nbsp;学生管理<i class="fa fa-collapse"></i></a></li>
        <li>
            <ul class="dashboard-menu nav nav-list collapse in"><!--"class=in"的时候展开-->
                <li><a href="studentL0.jsp"><span class="fa fa-caret-right"></span> 学生遴选阶段</a></li>
                <li><a href="studentL1.jsp"><span class="fa fa-caret-right"></span> 工程学习阶段</a></li>
                <li><a href="studentL2.jsp"><span class="fa fa-caret-right"></span> 校企合作阶段</a></li>
                <li><a href="studentL3.jsp"><span class="fa fa-caret-right"></span> 毕业设计阶段</a></li>
                <li><a href="studentL4.jsp"><span class="fa fa-caret-right"></span> 就业推荐阶段</a></li>
                <%--<li><a href="calendar.html"><span class="fa fa-caret-right"></span> Calendar</a></li>--%>
            </ul>
        </li>

        <li data-popover="true" data-placement="right">
            <a href="#" data-target=".premium-menu" class="nav-header collapsed" data-toggle="collapse">
                <i class="fa fa-fw fa-briefcase"></i>&nbsp;&nbsp;企业管理<i class="fa fa-collapse"></i>
            </a>
        </li>
        <li>
            <ul class="premium-menu nav nav-list collapse">
                <li><a href=""><span class="fa fa-caret-right"></span> 国际化大型软件公司</a></li>
                <li><a href=""><span class="fa fa-caret-right"></span> 游戏外包公司</a></li>
                <li><a href=""><span class="fa fa-caret-right"></span> 数字游戏公司</a></li>
                <li><a href=""><span class="fa fa-caret-right"></span> 嵌入式公司</a>
                </li>
                <li><a href=""><span class="fa fa-caret-right"></span> 电子商务公司</a>
                </li>
                <li><a href=""><span class="fa fa-caret-right"></span> 互联网公司</a></li>
                <li><a href=""><span class="fa fa-caret-right"></span> 其他行业</a></li>
                <%--<li><a href="premium-users.html"><span class="fa fa-caret-right"></span> Enhanced Users List</a></li>--%>
                <%--<li><a href="premium-media.html"><span class="fa fa-caret-right"></span> Enhanced Media</a></li>--%>
                <%--<li><a href="premium-invoice.html"><span class="fa fa-caret-right"></span> Invoice</a></li>--%>
                <%--<li><a href="premium-build.html"><span class="fa fa-caret-right"></span> Advanced Tools</a></li>--%>
                <%--<li><a href="premium-colors.html"><span class="fa fa-caret-right"></span> Additional Color Themes</a>--%>
                </li>
            </ul>
        </li>

        <%--新闻中心--%>
        <li>
            <a href="#" data-target=".legal-menu" class="nav-header collapsed" data-toggle="collapse">
                <i class="fa fa-fw fa-legal"></i>&nbsp;&nbsp;新闻中心<i class="fa fa-collapse"></i>
            </a>
        </li>
        <li>
            <ul class="legal-menu nav nav-list collapse">
                <li><a href=""><span class="fa fa-caret-right"></span> 综合要闻</a></li>
                <li><a href=""><span class="fa fa-caret-right"></span> 校园资讯</a></li>
                <li><a href=""><span class="fa fa-caret-right"></span> 教学科研</a></li>
                <li><a href=""><span class="fa fa-caret-right"></span> 专题新闻</a></li>
                <li><a href=""><span class="fa fa-caret-right"></span> 上传新闻</a></li>
            </ul>
        </li>

        <%--通知公告--%>
        <li>
            <a href="#" data-target=".accounts-menu" class="nav-header collapsed" data-toggle="collapse">
                <i class="fa fa-fw fa-comment"></i>&nbsp;&nbsp;通知公告<i class="fa fa-collapse"></i>
            </a>
        </li>
        <li>
            <ul class="accounts-menu nav nav-list collapse">
                <li><a href=""><span class="fa fa-caret-right"></span> 通知公告</a></li>
                <li><a href=""><span class="fa fa-caret-right"></span> 院系通知</a></li>
                <li><a href=""><span class="fa fa-caret-right"></span> 学术科研</a></li>
                <li><a href=""><span class="fa fa-caret-right"></span> 上传公告</a></li>
            </ul>
        </li>

    </ul>
</div>

<%--中间部分--%>
<div class="content">
    <div class="main-content">
        <button href="" style="padding:2px 10px;border-radius: 8px " class="btn-success">增加教师</button>
        <br/>
        <br/>
        <%--下一--%>
        <div class="row">
            <%--下左一--%>
            <div class="col-sm-12 col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading no-collapse">教师管理
                        <span class="label label-warning">教师数量：10</span>
                    </div>
                    <table class="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th>工号</th>
                            <th>姓名</th>
                            <th>手机号</th>
                            <th>邮箱</th>
                            <th>密码</th>
                            <th>性别</th>
                            <th>年龄</th>
                            <th>院系</th>
                            <th>
                                操作
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1223</td>
                            <td>张三</td>
                            <td>17862700888</td>
                            <td>123@163.com</td>
                            <td>123456</td>
                            <td>男</td>
                            <td>40</td>
                            <td>计算机科学与技术学院</td>
                            <td>
                                <a>修改</a>
                                <a>删除</a>
                            </td>
                        </tr>
                        <tr>

                        </tr>
                        <tr>

                        </tr>
                        <tr>

                        </tr>
                        <tr>

                        </tr>
                        <tr>

                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <%--下右一--%>
            <%--<div class="col-sm-6 col-md-6">--%>
                <%--<div class="panel panel-default">--%>
                    <%--<a href="#widget1container" class="panel-heading" data-toggle="collapse">其他信息 </a>--%>
                    <%--<div id="widget1container" class="panel-body collapse in">--%>
                        <%--<h2>Here's a Tip</h2>--%>
                        <%--<p>This template was developed with <a href="http://middlemanapp.com/"--%>
                                                               <%--target="_blank">Middleman</a> and includes .erb layouts--%>
                            <%--and views.</p>--%>
                        <%--<p>All of the views you see here (sign in, sign up, users, etc) are already split up so you--%>
                            <%--don't have to waste your time doing it yourself!</p>--%>
                        <%--<p>The layout.erb file includes the header, footer, and side navigation and all of the views are--%>
                            <%--broken out into their own files.</p>--%>
                        <%--<p>If you aren't using Ruby, there is also a set of plain HTML files for each page, just like--%>
                            <%--you would expect.</p>--%>
                    <%--</div>--%>
                <%--</div>--%>
            <%--</div>--%>
        </div>

        <%--<div class="row">--%>
            <%--<div class="col-sm-6 col-md-6">--%>
                <%--<div class="panel panel-default">--%>
                    <%--s  <div clas="panel-heading no-collapse">--%>
                <%--<span class="panel-icon pull-right">--%>
                    <%--<a href="#" class="demo-cancel-click" rel="tooltip" title="Click to refresh"><i--%>
                            <%--class="fa fa-refresh"></i></a>--%>
                <%--</span>--%>
                        <%--Needed to Close--%>
                    <%--</div>--%>
                    <%--<table class="table list">--%>
                        <%--<tbody>--%>
                        <%--<tr>--%>
                            <%--<td>--%>
                                <%--<a href="#"><p class="title">Care Hospital</p></a>--%>
                                <%--<p class="info">Sales Rating: 86%</p>--%>
                            <%--</td>--%>
                            <%--<td>--%>
                                <%--<p>Date: 7/19/2012</p>--%>
                                <%--<a href="#">View Transaction</a>--%>
                            <%--</td>--%>
                            <%--<td>--%>
                                <%--<p class="text-danger h3 pull-right" style="margin-top: 12px;">$20,500</p>--%>
                            <%--</td>--%>
                        <%--</tr>--%>
                        <%--<tr>--%>
                            <%--<td>--%>
                                <%--<a href="#"><p class="title">Custom Eyesight</p></a>--%>
                                <%--<p class="info">Sales Rating: 58%</p>--%>
                            <%--</td>--%>
                            <%--<td>--%>
                                <%--<p>Date: 7/19/2012</p>--%>
                                <%--<a href="#">View Transaction</a>--%>
                            <%--</td>--%>
                            <%--<td>--%>
                                <%--<p class="text-danger h3 pull-right" style="margin-top: 12px;">$12,600</p>--%>
                            <%--</td>--%>
                        <%--</tr>--%>
                        <%--<tr>--%>
                            <%--<td>--%>
                                <%--<a href="#"><p class="title">Clear Dental</p></a>--%>
                                <%--<p class="info">Sales Rating: 76%</p>--%>
                            <%--</td>--%>
                            <%--<td>--%>
                                <%--<p>Date: 7/19/2012</p>--%>
                                <%--<a href="#">View Transaction</a>--%>
                            <%--</td>--%>
                            <%--<td>--%>
                                <%--<p class="text-danger h3 pull-right" style="margin-top: 12px;">$2,500</p>--%>
                            <%--</td>--%>
                        <%--</tr>--%>
                        <%--<tr>--%>
                            <%--<td>--%>
                                <%--<a href="#"><p class="title">Safe Insurance</p></a>--%>
                                <%--<p class="info">Sales Rating: 82%</p>--%>
                            <%--</td>--%>
                            <%--<td>--%>
                                <%--<p>Date: 7/19/2012</p>--%>
                                <%--<a href="#">View Transaction</a>--%>
                            <%--</td>--%>
                            <%--<td>--%>
                                <%--<p class="text-danger h3 pull-right" style="margin-top: 12px;">$22,400</p>--%>
                            <%--</td>--%>
                        <%--</tr>--%>

                        <%--</tbody>--%>
                    <%--</table>--%>
                <%--</div>--%>
            <%--</div>--%>
            <%--<div class="col-sm-6 col-md-6">--%>
                <%--<div class="panel panel-default">--%>
                    <%--<a href="#widget2container" class="panel-heading" data-toggle="collapse">Collapsible </a>--%>
                    <%--<div id="widget2container" class="panel-body collapse in">--%>
                        <%--<h2>Built with Less</h2>--%>
                        <%--<p>The CSS is built with Less. There is a compiled version included if you prefer plain CSS.</p>--%>
                        <%--<p>Fava bean jícama seakale beetroot courgette shallot amaranth pea garbanzo carrot radicchio--%>
                            <%--peanut leek pea sprouts arugula brussels sprout green bean. Spring onion broccoli chicory--%>
                            <%--shallot winter purslane pumpkin gumbo cabbage squash beet greens lettuce celery. Gram--%>
                            <%--zucchini swiss chard mustard burdock radish brussels sprout groundnut. Asparagus horseradish--%>
                            <%--beet greens broccoli brussels.</p>--%>
                        <%--<p><a class="btn btn-primary">Learn more »</a></p>--%>
                    <%--</div>--%>
                <%--</div>--%>
            <%--</div>--%>
        <%--</div>--%>


        <footer>
            <hr>

            <p align="right">© 2014 <a href="http://www.hitwh.edu.cn" target="_blank">哈工大（威海）</a></p>
        </footer>
    </div>
</div>

</body>
</html>
