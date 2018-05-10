<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html; charset=utf-8" %>
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%--<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>--%>
<html>
<head>
    <title>管理员登录</title>
    <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="paul">

    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="encryptWeb/admin/lib/bootstrap/css/bootstrap.css">
    <link rel="stylesheet" href="encryptWeb/admin/lib/font-awesome/css/font-awesome.css">

    <script src="encryptWeb/admin/lib/jquery-1.11.1.min.js" type="text/javascript"></script>


    <link rel="stylesheet" type="text/css" href="css/theme.css">
    <link rel="stylesheet" type="text/css" href="css/premium.css">


    <script src="encryptWeb/admin/lib/bootstrap/js/bootstrap.js"></script>
    <script type="text/javascript">
        $("[rel=tooltip]").tooltip();
        $(function () {
            $('.demo-cancel-click').click(function () {
                return false;
            });
        });
    </script>


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

    <script type="text/javascript">
        function checkForm() {
            if(!$("#adminid").val()){
                alert("管理员账号不能为空");
                var msg="密码不能为空";
                return false;
            }
            if(!$("#adminpwd").val()){
                alert("管理员密码不能为空！");
                return false;
            }
            return true;
        }

    </script>
</head>
<body class=" theme-blue">
<div class="navbar navbar-default" role="navigation">
    <a class="" href="home.jsp">
            <span class="navbar-brand" style="padding-top: 2px;height: 45px">
                <img src="images/myimg/hitwh_logo.png" height="45px" style="padding-top: 0;padding-bottom: 0">
            </span>
    </a>
</div>

<div class="dialog" style="padding-top:60px;padding-bottom: 60px">
    <div class="panel panel-default">
        <p class="panel-heading no-collapse" align="center">登录</p>
        <div class="panel-body">
            <%--<c:url value="/AdminServlet"/> --%>
            <form action="<c:url value="/AdminServlet"/>" onsubmit="return checkForm()" method="post">
                <input type="hidden" name="method" value="adminLogin" />
                <div class="form-group">
                    <label for="adminid" >账号</label>
                    <input type="text" class="form-control span12"  name="adminid" id="adminid">
                </div>
                <div class="form-group">
                    <label for="adminpwd">密码</label>
                    <input type="password" class="form-controlspan12 form-control"  name="adminpwd" id="adminpwd">
                </div>
                <div>
                    <label><small>${msg}</small></label>
                </div>
                <div class="clearfix form-group">
                    <input type="submit" class="btn btn-primary pull-right" value="登录">
                </div>
            </form>
        </div>
    </div>
</div>

</body>
</html>
