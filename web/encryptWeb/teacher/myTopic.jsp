<%--
  Created by IntelliJ IDEA.
  User: chong
  Date: 2018/4/23
  Time: 14:37
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title>我的帖子</title>
    <!--三个重要的CSS文件-->
    <link rel="stylesheet" href="static/core_62c0700cc15bd051f36fa48b7a5c1a26.css">
    <link rel="stylesheet" href="static/pt_newpages_course_learn.css">
    <style type="text/css">
        .u-learnProgress-tab .ic_2 {
            width: 16px;
            height: 16px;
            margin: 12px 0 0 10px;
            background-image: url("static/icon9.png");
            background-position: -32px 0px;
        }
    </style>
</head>
<body>
<!--头部-->
<div class="f-pf g-headwrap" id="j-fixed-head">
    <div class="g-hd f-bg1 m-yktNav " id="j-topnav">
        <div class="g-flow">
            <div class="f-pr f-cb">
                <div style="position: absolute;top:2px;bottom:2px;">
                    <a class="f-fl" hidefocus="true" href="stuHome.jsp" target="_self" data-index="logo">
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
                                <a class="mystudy nitem f-f0" id="j-nav-my-class" data-index="我的学习" target="_self"
                                   href="forum.jsp" hidefocus="true">讨论区</a>
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
                    <a class="u-learnProgress-tab j-tabitem f-f0 f-fc3 f-cb u-curtab" data-type="30"
                       id="auto-id-1523950289735">
                        <div class="ic f-fl"></div>
                        <span class="f-fl ">我的帖子</span>
                    </a>
                    <%--<a class="u-learnProgress-tab j-tabitem f-f0 f-fc3 f-cb" data-type="30"--%>
                       <%--href="myResume.jsp">--%>
                        <%--<div class="ic_2 f-fl"></div>--%>
                        <%--<span class="f-fl">我的日志</span>--%>
                    <%--</a>--%>
                    <ul class="tab u-tabul">
                        <li class="u-greentab j-tabitem f-f0 first" data-name="公告" data-type="1">
                            <a class="f-thide f-fc3" href="forumAnnounce.jsp">公告</a>
                        </li>
                        <li class="u-greentab j-tabitem f-f0 last" data-name="讨论区" data-type="7"
                            data-id="2001487096" id="auto-id-1523950289741">
                            <a class="f-thide f-fc3"  href="forum.jsp">讨论区</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!--右侧主体-->
        <div class="g-mn1">
            <div class="g-mn1c m-learnbox" id="courseLearn-inner-box">

                <div class="m-forumindex">
                    <!--中间体最上方-->

                    <div class="u-forumnotice">
                        <div class="j-forumnotice fnotice"></div>
                    </div>
                    <!--发帖按钮-->
                    <div class="f-cb">
                        <a class="j-newTopicBtn f-fl" style="margin-bottom:40px;"
                           href="newTopic.jsp"><img src="static/sendPost.png" style="width: 120px"></a>
                    </div>

                    <!--帖子展示-->
                    <div class="u-forumlistwrap j-alltopiclist">
                        <div class="m-flwrap">
                            <div class="ttitle">
                                <h4 class="f-fl f-fc3">全部主题</h4>
                                <div class="f-fl u-coursecate j-lessonuit"></div>
                                <div class="u-btn-group f-fr">
                                    <a class="u-btn u-btn-sm u-btn-left u-btn-active">主题</a>
                                    <a class="u-btn u-btn-sm">回复</a>
                                    <a class="u-btn u-btn-sm">点赞</a>
                                    <%--<a class="u-btn u-btn-sm u-btn-right">点赞数</a>--%>
                                </div>
                            </div>
                            <div class="f-cb auto-1523950289417-parent">
                                <div class="m-basepool f-cb auto-1523950289417">
                                    <div class="j-list" style="">
                                        <div class="m-data-lists f-cb f-pr j-data-list">
                                            <!--第一帖-->
                                            <div class="first">
                                                <li class="u-forumli">
                                                    <div class="f-cb cnt">
                                                        <a>[老师答疑区]</a><a class="f-fc3 f-f0 lb10 j-link" href="topicDetails.jsp" target="_self">帖子1</a>
                                                    </div>
                                                    <span>
                                                            <span class="j-txt">
                                                                <span class="j-name auto-1523950289507-parent">
                                                                    <span class="auto-1523950289507">
                                                                        <span class="userInfo j-userInfo"title=""style="">
                                                                            <a class="f-fcgreen userName" href="#"
                                                                               title="140410401">140410401</a>
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                                <span class="lb10 f-fc9">于2018年04月11日发表</span>
                                                            </span>

                                                            <span class="j-txt">
                                                                <span class="lb10 f-fc9 j-partEle">|</span>
                                                                <span class="lb10 j-name auto-1523950289507-parent">
                                                                    <span class="auto-1523950289507">
                                                                        <span class="anonyInfo j-anonyInfo" style="">匿名发表</span>
                                                                    </span>
                                                                </span>
                                                                <span class="lb10 f-fc9">最后回复（13:20）</span>
                                                            </span>
                                                        </span>
                                                    <p class="f-fc9 f-pa watch">浏览：8</p>
                                                    <p class="f-fc9 f-pa reply">回复：1</p>
                                                    <p class="f-fc9 f-pa vote">点赞：0</p>
                                                </li>
                                            </div>
                                            <!--第二贴-->
                                            <div class="second">
                                                <li class="u-forumli">
                                                    <div class="f-cb cnt">
                                                        <a>[企业交流区]</a><a class="f-fc3 f-f0 lb10 j-link" href="#" target="_self">帖子2</a>
                                                    </div>
                                                    <span>
                                                            <span class="j-txt">
                                                                <span class="j-name auto-1523950289507-parent">
                                                                    <span class="auto-1523950289507">
                                                                     <span class="userInfo j-userInfo"
                                                                           id="auto-id-1523950289946" title="" style="">
                                                                            <a class="f-fcgreen userName" href="#"
                                                                               title="140410402">140410401</a>
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                                <span class="lb10 f-fc9">于2018年03月28日发表</span>
                                                            </span>
                                                        </span>
                                                    <p class="f-fc9 f-pa watch">浏览：3</p>
                                                    <p class="f-fc9 f-pa reply">回复：0</p>
                                                    <p class="f-fc9 f-pa vote">点赞：0</p>
                                                </li>
                                            </div>
                                            <!--第三贴,最后一贴-->
                                            <div class="last">
                                                <li class="u-forumli">
                                                    <div class="f-cb cnt">
                                                        <a>[综合讨论区]</a><a class="f-fc3 f-f0 lb10 j-link" href="#" target="_self">帖子3</a>
                                                    </div>
                                                    <span>
                                                            <span class="j-txt">
                                                                <span class="j-name auto-1523950289507-parent">
                                                                    <span class="auto-1523950289507">
                                                                        <span class="userInfo j-userInfo"
                                                                              id="auto-id-1523950289939" title=""
                                                                              style="">
                                                                            <a class="f-fcgreen userName" href="#"
                                                                               title="140410403">140410401</a>
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                                <span class="lb10 f-fc9">于2018年03月25日发表</span>
                                                            </span>
                                                            <span class="j-txt" style="display: none;"></span>
                                                            <span class="j-txt">
                                                                <span class="lb10 f-fc9 j-partEle">|</span>
                                                                <span class="lb10 j-name auto-1523950289507-parent">
                                                                    <span class="auto-1523950289507">
                                                                        <span class="userInfo j-userInfo"
                                                                              id="auto-id-1523950289908" title="">
                                                                            <a class="f-fcgreen userName" href="#"
                                                                               title="140410405">140410405</a>
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                                <span class="lb10 f-fc9">最后回复（4月4日）</span>
                                                            </span>
                                                        </span>
                                                    <p class="f-fc9 f-pa watch">浏览：11</p>
                                                    <p class="f-fc9 f-pa reply">回复：1</p>
                                                    <p class="f-fc9 f-pa vote">点赞：0</p>
                                                </li>
                                            </div>
                                        </div>

                                        <!--分页-->
                                        <div class="u-pager f-pr j-data-pager auto-1523950289416-parent"
                                             style="display: none;">
                                            <div class="auto-1523950289416" id="auto-id-1523950289864">
                                                <a href="#" class="zbtn zprv js-disabled"
                                                   id="auto-id-1523950289867">上一页</a>
                                                <a href="" class="zpgi zpg1 js-selected"
                                                   id="auto-id-1523950289873">1</a>
                                                <a href="#" class="zpgi zpg2" id="auto-id-1523950289875"
                                                   style="display: none;"></a>
                                                <a href="#" class="zpgi zpg3" id="auto-id-1523950289877"
                                                   style="display: none;"></a>
                                                <a href="#" class="zpgi zpg4" id="auto-id-1523950289879"
                                                   style="display: none;"></a>
                                                <a href="#" class="zpgi zpg5" id="auto-id-1523950289881"
                                                   style="display: none;"></a>
                                                <a href="#" class="zpgi zpg6" id="auto-id-1523950289883"
                                                   style="display: none;"></a>
                                                <a href="#" class="zpgi zpg7" id="auto-id-1523950289885"
                                                   style="display: none;"></a>
                                                <a href="#" class="zpgi zpg8" id="auto-id-1523950289887"
                                                   style="display: none;"></a>
                                                <a href="#" class="zpgi zpg9" id="auto-id-1523950289889"
                                                   style="display: none;"></a>
                                                <a href="#" class="zbtn znxt js-disabled"
                                                   id="auto-id-1523950289869">下一页</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="j-none empty" style="display:none">
                                        <span class="f-f0 f-fc9 j-none-txt f-ib">还没有主题</span>
                                    </div>
                                </div>
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
