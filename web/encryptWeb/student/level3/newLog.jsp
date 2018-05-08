<!--<%@page contentType="text/html; charset=utf-8" %>-->
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>发帖</title>

    <!--样式-->
    <link rel="stylesheet"  href="../static/c999847cabf4398b84d69b7ef2f1ef78.css">
    <link rel="stylesheet" href="../static/core_62c0700cc15bd051f36fa48b7a5c1a26.css">
    <link rel="stylesheet" href="../static/pt_newpages_course_learn.css">
    <style type="text/css">
        .file {
            position: relative;
            display: inline-block;
            background: #D0EEFF;
            border: 1px solid #99D3F5;
            border-radius: 4px;
            padding: 8px 24px;
            overflow: hidden;
            color: #1E88C7;
            text-decoration: none;
            text-indent: 0;
            line-height: 20px;
        }
        .file input {
            position: absolute;
            font-size: 100px;
            right: 0;
            top: 0;
            opacity: 0;
        }
        .file:hover {
            background: #AADFFD;
            border-color: #78C3F3;
            color: #004974;
            text-decoration: none;
        }
    </style>
</head>

<body>
<div id="g-container">
    <!--头部-->
    <div class="f-pf g-headwrap" id="j-fixed-head">
        <div class="g-hd f-bg1 m-yktNav " id="j-topnav">
            <div class="g-flow">
                <div class="f-pr f-cb">
                    <div style="position: absolute;top:2px;bottom:2px;">
                        <a class="f-fl" hidefocus="true" target="_self" data-index="logo" href="../stuHome.jsp">
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
                                    <a class="mystudy nitem f-f0" id="j-nav-my-class" data-index="讨论区" target="_self"
                                       href="../forum.jsp" hidefocus="true">讨论区</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div id="g-body">
        <!--右大半段的背景-->
        <div class="m-cbg"></div>

        <div class="g-wrap f-cb">
            <!--左部部-->
            <div class="g-sd1">
                <div class="m-learnleft">
                    <div id="j-courseTabList">
                        <a class="u-learnProgress-tab j-tabitem f-f0 f-fc3 f-cb u-curtab" data-type="30" href="myLog.jsp"
                           id="auto-id-1523965034571">
                            <div class="ic f-fl"></div>
                            <span class="f-fl">学习日志</span>
                        </a>
                        <ul class="tab u-tabul">
                            <li class="u-greentab j-tabitem f-f0 first" data-name="开题" data-type="1">
                                <a class="f-thide f-fc3" href="startProgram.jsp">毕设开题</a>
                            </li>
                            <li class="u-greentab j-tabitem f-f0 last" data-name="中期" data-type="7"
                                data-id="2001487096">
                                <a class="f-thide f-fc3"  href="midProject.jsp">毕设中期</a>
                            </li>
                            <li class="u-greentab j-tabitem f-f0 last" data-name="终期" data-type="7"
                                data-id="2001487096">
                                <a class="f-thide f-fc3"  href="endProject.jsp">毕设终期</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!--右部-->
            <div class="g-mn1">
                <div class="g-mn1c m-learnbox" id="courseLearn-inner-box">
                    <div class="m-forumtopic f-cb">
                        <div class="j-enable" style="">
                            <%--<div class="u-gx-inputwarp f-cb j-forumRes" style="position:relative; z-index:150;">--%>
                                <%--<div class="tit f-f0 f-cb">--%>
                                    <%--<div class="f-fl"><em class="f-sign">*</em>阶段选择</div>--%>
                                <%--</div>--%>
                                <%--<div class="txt" style="width:375px;">--%>
                                    <%--<div class="up j-up f-thide" style="background-position: 342px -177px;"></div>--%>
                                    <%--<select style="width: 375px;height: 35px;border:1px lightgray solid;font-size: 13px;padding-left: 5px">--%>
                                        <%--<option class="f-cb list">工程学习阶段</option>--%>
                                        <%--<option class="f-cb list">校企合作阶段</option>--%>
                                        <%--<option class="f-cb list">毕业设计阶段</option>--%>
                                        <%--<option class="f-cb list">就业推荐阶段</option>--%>
                                    <%--</select>--%>
                                <%--</div>--%>
                            <%--</div>--%>
                            <div class="u-gx-inputwarp f-cb">
                                <div class="tit f-f0 f-cb">
                                    <div class="f-fl"><em class="f-sign">*</em>标题</div>
                                    <div class="f-fl feed j-titlefeed auto-1523965034227-parent">
                                        <div class="m-feedbackinfo auto-1523965034227" style="display: none;">
                                            <div class="warningbox j-warningbox f-cb">
                                                <span class="right j-warningicon"></span>
                                                <span class="warning j-warning"></span>
                                            </div>
                                            <div class="loadingbox j-loadingbox f-cb">
                                                <span class="icon"></span>
                                                <span class="loading j-loading"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="j-titletxt txt">
                                    <div class="u-insug">
                                        <div class="area ">
                                            <div class="u-tipinput ">
                                                <div class="u-cmtedtip right">
                                                    <div class="f-fs0 f-fc9 j-ic f-fl" style="display: none;">
                                                        <div>还可以输入<b class="s-fc1">30</b>字</div>
                                                    </div>
                                                </div>
                                                <div class="f-cb j-editArea"
                                                     style="z-index: 102; width: 720px; height: 34px;">
                                                    <div class="u-baseinputui" style="width: 720px; height: 34px;">
                                                        <input type="text" name="inputtxt" class="j-textarea inputtxt"
                                                               style="width: 710px; height: 24px;" placeholder="请输入标题">
                                                    </div>
                                                </div>
                                                <div class="tip j-tip" style="display:none">
                                                    <div class="trian"></div>
                                                    <div class="ct j-ct f-f1"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sug" style="display:none">
                                            <div class="f-thide s-fc6 ar j-basetxt">你的问题可能已经有答案了哦~</div>
                                            <div class=""></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="u-gx-inputwarp f-cb">
                                <div class="tit f-f0 f-cb">
                                    <div class="f-fl">内容</div>
                                    <div class="f-fl feed j-contentfeed"></div>
                                </div>
                                <div class="j-contenttxt txt auto-1523965034251-parent">
                                    <div class="u-richeditor auto-1523965034251" id="auto-id-1523965034936">
                                        <div class="ztbar j-toolbar auto-1523965034250-parent">
                                            <div class="f-cb auto-1523965034250" id="auto-id-1523965034939">
                                                <div class="zitm zbg z-i-11" title="清空文档">
                                                    <div class="zicn zbg"></div>
                                                </div>
                                                <div class="zitm zbg z-i-9" title="撤销">
                                                    <div class="zicn zbg"></div>
                                                </div>
                                                <div class="zitm zbg z-i-10" title="重做" id="auto-id-1523965034957">
                                                    <div class="zicn zbg"></div>
                                                </div>
                                                <div class="zisp"></div>
                                                <div class="zitm zbg z-i-0" title="加粗" id="auto-id-1523965034960">
                                                    <div class="zicn zbg"></div>
                                                </div>
                                                <div class="zitm zbg z-i-1" title="斜体" id="auto-id-1523965034963">
                                                    <div class="zicn zbg"></div>
                                                </div>
                                                <div class="zitm zbg z-i-2" title="下划线" id="auto-id-1523965034966">
                                                    <div class="zicn zbg"></div>
                                                </div>
                                                <div class="zitm zbg z-i-3" title="删除线" id="auto-id-1523965034969">
                                                    <div class="zicn zbg"></div>
                                                </div>
                                                <div class="zitm zbg z-i-4" title="有序列表" id="auto-id-1523965034972">
                                                    <div class="zicn zbg"></div>
                                                </div>
                                                <div class="zitm zbg z-i-5" title="无序列表" id="auto-id-1523965034975">
                                                    <div class="zicn zbg"></div>
                                                </div>
                                                <div class="zitm zbg colorbtn z-i-12" title="字体颜色"
                                                     id="auto-id-1523965034978">
                                                    <div class="zicn zbg"></div>
                                                    <div class="colordown j-down" style="display: none;"></div>
                                                </div>
                                                <div class="zitm zbg z-i-6" title="超链接" id="auto-id-1523965034981">
                                                    <div class="zicn zbg"></div>
                                                </div>
                                                <div class="zitm zbg z-i-7" title="图片" id="auto-id-1523965034984">
                                                    <div class="zicn zbg"></div>
                                                </div>
                                                <div class="zitm zbg z-i-8" title="公式" id="auto-id-1523965034987">
                                                    <div class="zicn zbg"></div>
                                                </div>
                                                <div class="zisp"></div>
                                                <div class="zdlitm zbg z-i-code" id="auto-id-1523965034990">
                                                    <div class="up j-up f-thide">代码语言</div>
                                                    <div class="down f-bg j-list" id="auto-id-1523965035039"
                                                         style="display: none; width: 135px;">
                                                        <div class="f-thide list" title="as3"
                                                             id="auto-id-1523965034992">ActionScript&nbsp;3
                                                        </div>
                                                        <div class="f-thide list" title="bash"
                                                             id="auto-id-1523965034994">Bash/Shell
                                                        </div>
                                                        <div class="f-thide list" title="cpp"
                                                             id="auto-id-1523965034996">C/C++
                                                        </div>
                                                        <div class="f-thide list" title="css"
                                                             id="auto-id-1523965034998">CSS
                                                        </div>
                                                        <div class="f-thide list" title="cf" id="auto-id-1523965035000">
                                                            ColdFusion
                                                        </div>
                                                        <div class="f-thide list" title="c#" id="auto-id-1523965035002">
                                                            C#
                                                        </div>
                                                        <div class="f-thide list" title="delphi"
                                                             id="auto-id-1523965035004">Delphi
                                                        </div>
                                                        <div class="f-thide list" title="diff"
                                                             id="auto-id-1523965035006">Diff
                                                        </div>
                                                        <div class="f-thide list" title="erlang"
                                                             id="auto-id-1523965035008">Erlang
                                                        </div>
                                                        <div class="f-thide list" title="groovy"
                                                             id="auto-id-1523965035010">Groovy
                                                        </div>
                                                        <div class="f-thide list" title="html"
                                                             id="auto-id-1523965035012">HTML
                                                        </div>
                                                        <div class="f-thide list" title="java"
                                                             id="auto-id-1523965035014">Java
                                                        </div>
                                                        <div class="f-thide list" title="jfx"
                                                             id="auto-id-1523965035016">JavaFX
                                                        </div>
                                                        <div class="f-thide list" title="js" id="auto-id-1523965035018">
                                                            JavaScript
                                                        </div>
                                                        <div class="f-thide list" title="pl" id="auto-id-1523965035020">
                                                            Perl
                                                        </div>
                                                        <div class="f-thide list" title="php"
                                                             id="auto-id-1523965035022">PHP
                                                        </div>
                                                        <div class="f-thide list" title="plain"
                                                             id="auto-id-1523965035024">Plain&nbsp;Text
                                                        </div>
                                                        <div class="f-thide list" title="ps" id="auto-id-1523965035026">
                                                            PowerShell
                                                        </div>
                                                        <div class="f-thide list" title="python"
                                                             id="auto-id-1523965035028">Python
                                                        </div>
                                                        <div class="f-thide list" title="ruby"
                                                             id="auto-id-1523965035030">Ruby
                                                        </div>
                                                        <div class="f-thide list" title="scala"
                                                             id="auto-id-1523965035032">Scala
                                                        </div>
                                                        <div class="f-thide list" title="sql"
                                                             id="auto-id-1523965035034">SQL
                                                        </div>
                                                        <div class="f-thide list" title="vb" id="auto-id-1523965035036">
                                                            Visual&nbsp;Basic
                                                        </div>
                                                        <div class="f-thide list" title="xml"
                                                             id="auto-id-1523965035038">XML
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="zdlitm zbg z-i-size" id="auto-id-1523965035043">
                                                    <div class="up j-up f-thide">字号</div>
                                                    <div class="down f-bg j-list" id="auto-id-1523965035058"
                                                         style="display: none; width: 108px;">
                                                        <div class="f-thide list" style="font-size:12px;"
                                                             id="auto-id-1523965035045">12px
                                                        </div>
                                                        <div class="f-thide list" style="font-size:14px;"
                                                             id="auto-id-1523965035047">14px
                                                        </div>
                                                        <div class="f-thide list" style="font-size:16px;"
                                                             id="auto-id-1523965035049">16px
                                                        </div>
                                                        <div class="f-thide list" style="font-size:18px;"
                                                             id="auto-id-1523965035051">18px
                                                        </div>
                                                        <div class="f-thide list" style="font-size:20px;"
                                                             id="auto-id-1523965035053">20px
                                                        </div>
                                                        <div class="f-thide list" style="font-size:24px;"
                                                             id="auto-id-1523965035055">24px
                                                        </div>
                                                        <div class="f-thide list" style="font-size:36px;"
                                                             id="auto-id-1523965035057">36px
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="zarea j-area"
                                             style="width: 100%; height: 200px; z-index: 999; overflow: hidden;">
                                            <textarea style="width: 100%;height: 100%;border:0px;"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="f-cb type" style="display: none">
                                <input type="checkbox" id="NiMingFaBiao"class="j-topicType noName">
                                <label for="NiMingFaBiao" class="nolabelName">匿名发表</label>
                            </div>
                            <div>
                                <a class="file">
                                <input type="file" name="上传附件" id="" value="上传附件">上传附件
                                </a>
                                <br/>
                                <br/>
                            </div>
                            <div style="margin-left: 30%">
                                <a class="u-btn u-btn-primary j-publish" style="border-radius: 9px">发表</a>
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