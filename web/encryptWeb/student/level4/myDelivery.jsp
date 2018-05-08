<%--
  Created by IntelliJ IDEA.
  User: chong
  Date: 2018/5/8
  Time: 9:47
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>我已投公司</title>
    <!--三个重要的CSS文件-->
    <link rel="stylesheet" href="../static/core_62c0700cc15bd051f36fa48b7a5c1a26.css">
    <link rel="stylesheet" href="../static/pt_newpages_course_learn.css">
    <link rel="stylesheet" href="../../../bootstrap/css/bootstrap.min.css">
    <script type="text/javascript" src="../../../bootstrap/jquery-2.2.4.min.js"></script>
    <script type="text/javascript" src="../../../bootstrap/js/bootstrap.min.js"></script>
    <style>
        th{
            font-weight: bold;
        }
        .u-learnProgress-tab .ic_2 {
            width: 16px;
            height: 16px;
            margin: 12px 0 0 10px;
            background-image: url("../static/icon9.png");
            background-position: -32px 0px;
        }
    </style>
</head>
<body style="background-color: #EEEEEE">
<!--头部-->
<div class="f-pf g-headwrap" id="j-fixed-head">
    <div class="g-hd f-bg1 m-yktNav " id="j-topnav">
        <div class="g-flow">
            <div class="f-pr f-cb">
                <div style="position: absolute;top:2px;bottom:2px;">
                    <a class="f-fl" hidefocus="true" href="../stuHome.jsp" target="_self" data-index="logo">
                        <img class="f-fl img" src="../static/hitwh_logo_white.png" title="学生主页" width="540px"
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
                               href="../messageT.jsp" title="查看更多消息" target="_blank">
                                <span>消息</span>
                                <em class="num hidddenClass j-nav-msgnum">0</em>
                            </a>
                            <div class="u-mystudy f-pr f-cb f-fr">
                                <a class="mystudy nitem f-f0" id="j-nav-my-class" data-index="我的学习" target="_self"
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
                    <a class="u-learnProgress-tab j-tabitem f-f0 f-fc3 f-cb"  data-type="30" href="myResume.jsp">
                        <div class="ic_2 f-fl"></div>
                        <span class="f-fl">我的简历</span>
                    </a>
                    <ul class="tab u-tabul">
                        <li class="u-greentab j-tabitem f-f0 first" data-name="推荐" data-type="1">
                            <a class="f-thide f-fc3" href="empRecommend.jsp">导师推荐</a>
                        </li>
                        <li class="u-greentab j-tabitem f-f0 last u-curtab" data-name="我的投递" data-type="7"
                            data-id="2001487096" id="auto-id-1523950289741">
                            <a class="f-thide f-fc3"  href="myDelivery.jsp">我的投递</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!--右侧主体-->
        <div class="g-mn1">
            <div class="g-mn1c m-learnbox" id="courseLearn-inner-box">

                <div class="m-forumindex">
                    <!--发帖按钮-->
                    <div class="f-cb">
                        <a class="j-newTopicBtn f-fl" style="margin-bottom:40px;margin-top: 12px;"
                           href=""><img src="../static/addCompany.png" style="width: 120px"></a>
                    </div>

                    <!--课程信息-->
                    <div class="u-forumlistwrap j-alltopiclist">
                        <div class="m-flwrap">
                            <div class="ttitle">
                                <h4 class="f-fl f-fc3">已投简历</h4>
                                <div class="f-fl u-coursecate j-lessonuit"></div>
                            </div>
                            <div style="margin-top: 10px;padding-left: 0;">
                                <table class="table table-bordered table-hover table-striped">
                                    <thead>
                                        <th class="col-lg-1">公司名称</th>
                                        <th>公司类型</th>
                                        <th>公司规模</th>
                                        <th>工作地点</th>
                                        <th>申请岗位</th>
                                        <th>岗位需求</th>
                                        <th>联系邮箱</th>
                                        <th>联系电话</th>
                                        <th>招聘时间</th>
                                        <th>简历状态</th>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>
                                            <input type="radio" name="status0" checked="checked"><label>投递中</label>&nbsp;
                                            <input type="radio" name="status0"><label>录用</label>&nbsp;
                                            <input type="radio" name="status0"><label>失败</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>
                                            <input type="radio" name="status1" checked="checked"><label>投递中</label>&nbsp;
                                            <input type="radio" name="status1"><label>录用</label>&nbsp;
                                            <input type="radio" name="status1"><label>失败</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>222</td>
                                        <td>
                                            <input type="radio" name="status2" checked="checked"><label>投递中</label>&nbsp;
                                            <input type="radio" name="status2"><label>录用</label>&nbsp;
                                            <input type="radio" name="status2"><label>失败</label>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>

