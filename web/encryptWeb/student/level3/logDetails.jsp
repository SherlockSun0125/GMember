<%@page contentType="text/html; charset=utf-8" %>
<html>
<head>
    <link rel="stylesheet" href="../static/core_e47b1ded06977727b0dc00ac5fae1259.css">
    <link rel="stylesheet" href="../static/pt_newpages_course_learn.css">
    <style type="text/css">
        .ux-pager_itm > a, .ux-pager_itm > span, .ux-pager_btn > a, .ux-pager_btn > span, .ux-pager_sep > a, .ux-pager_sep > span {
            display: inline-block;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            text-decoration: none;
            padding: 0 12px;
            min-width: 6px;
            height: 30px;
            line-height: 30px
        }

        .ux-pager_itm > a, .ux-pager_btn > a, .ux-pager_sep > a {
            border: 1px solid #ddd;
            border-radius: 2px
        }

        .ux-pager > li.z-crt > a {
            color: white
        }

        .ux-pager > li.z-dis > a {
            cursor: not-allowed;
            color: #999
        }

        .ux-dropdown-check_listview li {
            cursor: pointer;
            padding: 0 12px
        }

        .ux-dropdown-check_listview li:hover {
            background-color: #e6eaeb
        }

        .ux-table table {
            font-size: 14px;
            margin-bottom: 60px;
            position: relative;
            table-layout: fixed;
            border-collapse: collapse;
            border-spacing: 0;
            min-height: 180px;
        }

        .ux-table table thead .head {
            color: #859295;
            height: 44px;
        }

        .ux-table table thead .head th {
            padding: 0px 15px;
            text-align: center;
            position: relative;
            background-color: #f2f5f5;
            border-color: #ddd;
            font-size: 14px;
            color: #999;
        }

        .ux-table table tbody tr {
            border-bottom: 1px dashed #d9ddde;
        }

        .ux-table table tbody tr td {
            color: #52585a;
            padding: 20px 15px;
            text-align: center;
        }

        .ux-table-border table thead .head th {
            background-color: #f3f6f7;
        }

        .ux-table-border table tbody {
            border: 1px solid #ddd;
        }

        .ux-table-border table tbody tr:hover {
            background: #F3F6F7;
        }

        .ux-table-border table tbody tr {
            height: 41px;
            border-bottom: 1px solid #eee;
        }

        .ux-table-border table tbody tr td {
            padding: 10px 15px;
        }

        .ux-table-border table tbody tr td:hover {
            background: #F3F6F7;
        }

        .ux-table-border table tbody tr:last-child {
            border-bottom: 1px solid #ddd;
        }

        .ux-table-border table tbody tr:last-child td {
            border-bottom: 1px solid #ddd;
        }

        .ux-richeditor-video-selector-dialog .m-video-selector-header > * {
            display: inline-block;
            vertical-align: middle;
        }

        .ux-richeditor-video-selector-dialog .m-video-selector-table table {
            width: 620px;
            margin: 0;
            table-layout: auto !important;
            border-collapse: separate !important;
            min-height: 0px !important;
        }

        .ux-richeditor-video-selector-dialog .m-video-selector-table table thead {
            width: 618px;
            border: 1px solid #DDDDDD;
        }

        .ux-richeditor-video-selector-dialog .m-video-selector-table table tbody tr {
            cursor: pointer;
            border-bottom: none;
        }

        .ux-richeditor-video-selector-dialog .m-video-selector-table table tbody tr td {
            height: 39px;
            line-height: 39px;
            font-size: 14px;
            color: #666666;
            padding: 0;
        }

        .ux-richeditor-video-selector-dialog .m-video-selector-table table tbody tr td td-icon {
            width: 36px;
            height: 36px;
        }

        .ux-richeditor-video-selector-dialog .m-video-selector-table table tbody tr:hover {
            background-color: #F3F6F7;
        }

        .ux-richeditor-video-selector-dialog .m-video-selector-table table tbody tr.selected {
            background-color: #49AF4F;
        }

        .ux-richeditor-video-selector-dialog .m-video-selector-table table tbody tr.selected td {
            color: white;
        }

        .ux-richeditor-video-selector-dialog .m-video-selector-table table tbody tr.disable td {
            color: #C9C9C9;
        }

        .ux-richeditor-video-selector-dialog .m-video-selector-footer hr {
            margin-top: 10px;
            margin-bottom: 20px;
        }

        .ux-richeditor .zdlitm .up {
            font-size: 12px;
            color: #999;
            line-height: 22px;
        }

        .ux-richeditor .zdlitm.js-disabled .up {
            cursor: default;
        }

        .ux-richeditor .zdlitm .down, .ux-richeditor .zitm .down {
            position: absolute;
            top: 22px;
            left: -1px;
            width: auto;
            max-height: 210px;
            overflow-x: hidden;
            overflow-y: auto;
            z-index: 100;
            border: 1px solid #d1d2d4;
            background-color: #fff;
        }

        .ux-richeditor-link .txtwrap .title {
            color: #ccc;
            height: 30px;
            width: 30px;
            line-height: 30px;
            text-align: center;
        }

        .ux-richeditor-uploadCard .tabitem span {
            line-height: 30px;
            text-align: center;
            font-size: 12px;
            padding: 0 5px;
        }

        .syntaxhighlighter a, .syntaxhighlighter div, .syntaxhighlighter code, .syntaxhighlighter td, .syntaxhighlighter tr, .syntaxhighlighter tbody, .syntaxhighlighter thead, .syntaxhighlighter caption, .syntaxhighlighter textarea {
            -moz-border-radius: 0 !important;
            -webkit-border-radius: 0 0 0 0 !important;
            background: none !important;
            border: 0 !important;
            bottom: auto !important;
            float: none !important;
            left: auto !important;
            line-height: 1.1em !important;
            outline: 0 !important;
            overflow: visible !important;
            position: static !important;
            right: auto !important;
            text-align: left !important;
            top: auto !important;
            vertical-align: baseline !important;
            width: auto !important;
            box-sizing: content-box !important;
            font-family: Monaco, Menlo, Consolas, "Courier New", monospace;
            font-weight: 400 !important;
            font-style: normal !important;
            min-height: auto !important;
            font-size: 13px !important;
            margin: 0 !important;
            padding: 0 !important;
        }



        .syntaxhighlighter caption {
            text-align: left !important;
            color: #000 !important;
            padding: .5em 0 .5em 1em !important;
        }

        .syntaxhighlighter ol {
            list-style: decimal;
            margin: 0px 0px 1px 0px;
            padding: 2px 0;
            color: #AFAFAF;
            font-size: 1.0em;
            line-height: 1.4em;
            color: #afafaf !important;
            background-color: #f7f7f9;
        }

        .syntaxhighlighter ol li {
            list-style: decimal;
            border-left: 1px solid #E1E1E8;
            padding-left: 10px;
            line-height: 1.1em;
            margin: 0 0 0 45px;
        }

        .syntaxhighlighter.collapsed .toolbar span {
            display: inline !important;
            margin-right: 1em !important;
        }

        .syntaxhighlighter.collapsed .toolbar span a {
            display: none !important;
            padding: 0 !important;
        }

        .syntaxhighlighter .toolbar {
            position: absolute !important;
            right: 1px !important;
            top: 1px !important;
            width: 11px !important;
            height: 11px !important;
            font-size: 10px !important;
            z-index: 10 !important;
            color: #FFF !important;
            background: #6ce26c !important;
            border: none !important;
        }

        .syntaxhighlighter .toolbar a {
            display: block !important;
            text-align: center !important;
            text-decoration: none !important;
            padding-top: 1px !important;
            color: #FFF !important;
        }

        .syntaxhighlighter.ie .toolbar a {
            padding-top: 0 !important;
        }

        .syntaxhighlighter.ie ol {
            white-space: normal;
        }

        .syntaxhighlighter.printing .line.alt1 .content, .syntaxhighlighter.printing .line.alt2 .content, .syntaxhighlighter.printing .line.highlighted .number, .syntaxhighlighter.printing .line.highlighted.alt1 .content, .syntaxhighlighter.printing .line.highlighted.alt2 .content {
            background: none !important;
        }

        .syntaxhighlighter.printing .line .number {
            color: #bbb !important;
        }

        .syntaxhighlighter.printing .line .content {
            color: #000 !important;
            border: none !important;
        }

        .syntaxhighlighter.printing a {
            text-decoration: none !important;
        }


        .syntaxhighlighter .bold, .syntaxhighlighter.printing .script {
            font-weight: 700 !important;
        }

        .syntaxhighlighter.collapsed table, .syntaxhighlighter .toolbar a.expandSource, .syntaxhighlighter.printing .toolbar {
            display: none !important;
        }

        .syntaxhighlighter.collapsed .toolbar span a.expandSource, .syntaxhighlighter .toolbar span.title {
            display: inline !important;
        }

        .syntaxhighlighter.printing .plain, .syntaxhighlighter.printing .plain a, .syntaxhighlighter.printing .break, .syntaxhighlighter.printing .break a, .syntaxhighlighter .line.highlighted.number, .syntaxhighlighter .toolbar a:hover, .syntaxhighlighter .plain, .syntaxhighlighter .plain a {
            color: #000 !important;
        }

        .syntaxhighlighter.printing .comments, .syntaxhighlighter.printing .comments a, .syntaxhighlighter .comments, .syntaxhighlighter .comments a {
            color: #008200 !important;
        }

        .syntaxhighlighter.printing .string, .syntaxhighlighter.printing .string a, .syntaxhighlighter.collapsed .toolbar a, .syntaxhighlighter .string, .syntaxhighlighter .string a {
            color: blue !important;
        }

        .syntaxhighlighter.printing .preprocessor, .syntaxhighlighter.printing .color1, .syntaxhighlighter.printing .color1 a, .syntaxhighlighter .preprocessor, .syntaxhighlighter .color1, .syntaxhighlighter .color1 a {
            color: gray !important;
        }

        .ux-richeditor-math .m-mathedit .imgshow img {
            max-width: 570px;
        }

        .ux-richeditor-math .m-mathedit .samright img {
            vertical-align: middle;
        }

        body .ux-eduEditorDialog .ux-richeditor-link .row label {
            margin-right: 10px;
            line-height: 33px;
            float: left;
            color: #859295;
        }

        body .ux-eduEditorDialog .ux-richeditor-link .txtwrap .ipt:focus {
            background: white;
            color: #343d42;
            -webkit-box-shadow: 1px 1px 10px #E4F9E5;
            -moz-box-shadow: 1px 1px 10px #E4F9E5;
            box-shadow: 1px 1px 10px #E4F9E5;
        }

        body .ux-eduEditorDialog .ux-richeditor-link .btns {
            margin-top: 15px;
        }

        body .ux-eduEditorDialog .ux-richeditor-link .btns .ux-btn, body .ux-eduEditorDialog .ux-richeditor-link .btns .ux-btn-gh {
            margin-left: 20px;
            width: 100px;
            height: 32px;
            line-height: 32px;
            font-size: 14px;
            text-align: center;
            -webkit-border-radius: 3px;
            border-radius: 3px;
            box-sizing: border-box;
        }

        body .ux-eduEditorDialog .ux-richeditor-math .u-equation .eqitems .item :first-child {
            padding-left: 0;
        }

        .auto-1524789536668 .priceset label {
            display: inline-block;
            width: 40px;
        }

        .auto-1524789536668 .timeSet .zday th {
            font-size: 12px;
            font-family: sans-serif;
            text-align: center;
        }

        .auto-1524789536668 .timeSet .zact span {
            font-size: 12px;
            font-family: sans-serif;
        }

        .auto-1524789536671 .title {
            font-size: 14px;
        }

        .auto-1524789536682 h3 img {
            vertical-align: text-bottom;
        }

        .auto-1524789536682 h3 span {
            font-size: 18px;
            color: #333;
        }

        .auto-1524789536682 h3:hover {
            cursor: pointer;
            backgorund: #fff;
        }

        .auto-1524789536682 .list-in a {
            display: block;
            color: #333;
            font-size: 14px;
            height: 30px;
            line-height: 30px;
            margin-top: 10px;
            padding: 5px 8px;
            background: #f5f5f5;
        }

        .auto-1524789536682 .list-in a:hover {
            color: #21a557;
        }

        .auto-1524789536682 .list-in img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin-right: 10px;
            float: left;
        }

        .auto-1524789536682 .list-in span {
            float: left;
            width: 155px;
        }

        .auto-1524789536688 div {
            cursor: pointer;
            width: 15px;
            height: 15px;
            background: url(../static/forum_icon.png) no-repeat -4999px -4999px;
        }

        .auto-1524789536688 .num {
            color: #666;
            line-height: 15px;
            max-width: 45px;
            margin: 0 3px;
        }

        .auto-1524789536688 .up {
            background-position: 2px -22px;
        }

        .auto-1524789536688 .up.hvr:hover {
            background-position: -15px -22px;
        }

        .auto-1524789536688 .down {
            background-position: 2px -44px;
        }

        .auto-1524789536688 .down.hvr:hover {
            background-position: -15px -44px;
        }

        .auto-1524789536690 .manBtn span {
            display: inline-block;
            vertical-align: middle;
            height: 14px;
            width: 14px;
            background: url(../static/forum_icon.png) no-repeat -55px -45px;
        }

        .auto-1524789536690 .manBtn:hover span {
            background-position: -72px -45px;
        }

        .u-manList li {
            line-height: 30px;
            text-align: center;
            border-bottom: 1px solid #DDD;
            cursor: pointer;
        }

        .u-manList li:hover a {
            color: #61A500;
        }

        .auto-1524789536693 {
            background-color: #f8f8f8;
            padding: 10px 20px;
        }

        .auto-1524789536693 .title {
            max-width: 68%;
        }

        .auto-1524789536693 .content {
            padding-top: 10px;
        }

        .auto-1524789536693 .infobar {
            padding: 10px 0;
            border-bottom: 1px solid #eee;
        }

        .auto-1524789536693 .infobar .time {
            padding: 0 10px;
        }

        .auto-1524789536693 .optbar {
            padding-top: 10px;
        }

        .auto-1524789536693 .optBox, .auto-1524789536693 .votebox {
            margin-top: 5px;
        }

        .auto-1524789536693 .optBox .divider {
            color: #ddd;
            margin: 0 5px;
        }

        .auto-1524789536693 .optbar a i {
            vertical-align: -3px;
            display: inline-block;
            width: 20px;
            height: 16px;
            background: url(../static/forum_icon.png) no-repeat -4999px -4999px;
        }

        .auto-1524789536693 .optbar .replyBtn i {
            background-position: -54px 1px;
        }

        .auto-1524789536693 .optbar .followBtn.unfollowed i {
            background-position: -78px 0;
        }

        .auto-1524789536693 .optbar .followBtn.unfollowed .second, .auto-1524789536693 .optbar .followBtn.unfollowed .secHvr {
            display: none;
        }

        .auto-1524789536693 .optbar .followBtn.followed i {
            background-position: -53px -24px;
        }

        .auto-1524789536693 .optbar .followBtn.followed .first, .auto-1524789536693 .optbar .followBtn.followed .secHvr {
            display: none;
        }

        .auto-1524789536695 {
        }

        .auto-1524789536695 .rich-opt {
            margin-top: 10px;
        }

        .auto-1524789536695 .rich-opt label {
            cursor: pointer;
            color: #999;
            vertical-align: top;
        }

        .auto-1524789536695 .rich-opt label:hover {
            color: #61a500;
        }

        .auto-1524789536695 .rich-opt label input {
            margin-top: 3px;
        }

        .auto-1524789536695 .rich-opt .cancelbtn {
            margin-right: 10px;
            line-height: 24px;
        }

        .auto-1524789536695 .unlogin {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
        }

        .auto-1524789536695 .unlogin .autowrap {
            margin: 115px auto;
            width: 188px;
        }

        .auto-1524789536695 .unlogin .autowrap p {
            line-height: 26px;
            color: #666;
            margin-right: 10px;
        }

        .auto-1524789536697 {
            width: 100%;
            padding-top: 15px;
        }

        .auto-1524789536697 .tagCt {
            margin-bottom: 6px;
        }

        .auto-1524789536697 .bar {
            padding: 10px 0;
        }

        .auto-1524789536697 .time {
            padding-left: 10px;
        }

        .auto-1524789536697 .opt {
            cursor: pointer;
        }

        .auto-1524789536697 .divider {
            color: #ddd;
            margin: 0 5px;
        }

        .auto-1524789536699 {
            width: 550px;
        }

        .auto-1524789536699 .small {
            background-color: #fff;
            border: 1px solid #dfdfdf;
            padding: 10px;
            color: #999;
        }

        .auto-1524789536699 .small a {
            color: #61A500;
        }




        .auto-1524789536701 .m-detailInfoItem .bar {
            padding: 5px 0;
        }

        .auto-1524789536705 {
            border-bottom: 1px solid #eee;
            zoom: 1;
        }

        .auto-1524789536707 {
            line-height: 20px;
            color: #666;
        }

        .auto-1524789536707 .divider {
            display: inline-block;
            border-left: 1px solid #ddd;
            margin: 0px 10px 0px 5px;
        }

        .auto-1524789536707 a {
            color: #666;
            cursor: pointer;
        }

        .auto-1524789536707 a:hover {
            color: #61A500;
            text-decoration: none;
        }

        .auto-1524789536707 a span {
            background: url(../static/forum_icon.png) no-repeat -4999px -4999px;
            margin-left: 4px;
            display: inline-block;
            width: 12px;
            height: 20px;
            vertical-align: top;
        }

        .auto-1524789536707 .upsort {
            color: #61A500;
        }

        .auto-1524789536707 .double.nosort span {
            background-position: 0 2px;
        }

        .auto-1524789536707 .double.downsort span {
            background-position: -20px 2px;
        }

        .auto-1524789536707 .double.upsort span {
            background-position: -38px 2px;
        }

        .auto-1524789536709 .rinfobox {
            padding: 30px 0 10px 0;
            border-bottom: 1px solid #eee;
        }

        .auto-1524789536709 .allbox {
            margin-bottom: 20px;
        }
        .auto-1524789536729 h3 {
            background: #fff;
            border: 1px solid #2cb060;
            text-align: center;
            height: 40px;
            line-height: 40px;
        }

        .auto-1524789536729 h3 span {
            font-size: 18px;
            color: #333;
        }

        .auto-1524789536729 h3:hover {
            cursor: pointer;
            background: #fff;
        }

        .auto-1524789536729 .box-in-small span {
            font-size: 12px;
        }

        .auto-1524789536729 .box-in-small h3:hover {
            background: #f0f0f0;
        }

        .auto-1524789536729 .box-in-small h3 {
            height: 20px;
            line-height: 20px;
            background: #fff;
            padding: 2px 8px 4px;
            border: 1px solid #e6e6e6;
            display: inline-block;
            border-radius: 6px;
            line-height:19px;
        }

        .auto-1524789536729 p {
            line-height: 20px;
            color: #333;
            font-size: 12px;
            margin-top: 10px;
        }



        .um-cps-ux-promoter-course-detail-collect-bubble img {
            width: 100%;
        }

        .ux-member-module-head a {
            font-size: 15px;
        }


        .ux-dropdown_listview li {
            cursor: pointer;
            padding: 0 12px
        }

        .ux-dropdown_listview li:hover {
            background-color: #f3f6f7
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
        <div class="m-cbg"></div>
        <div class="g-wrap f-cb" id="auto-id-1524789537185">
            <!--左侧边栏-->
            <div class="g-sd1">
                <div class="m-learnleft">
                    <div id="j-courseTabList">
                        <a class="u-learnProgress-tab j-tabitem f-f0 f-fc3 f-cb u-curtab" data-type="30" href="myLog.jsp">
                            <div class="ic f-fl"></div>
                            <span class="f-fl ">学习日志</span>
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


            <!--中间-->
            <div class="g-mn1">
                <div class="g-mn1c m-learnbox" id="courseLearn-inner-box">
                    <div class="u-learn-modulewidth" id="auto-id-1524789537183">
                        <div class="j-breadNavBox">
                            <div class="u-forumbreadnav">
                                <a href="../generalArea.jsp">工程学习阶段</a>
                                <span class="f-icon split"></span>
                                <span>日志详情</span>
                            </div>
                        </div>
                        <div class="j-detailBox auto-1524789536709-parent" id="auto-id-1524789537182">
                            <div class="auto-1524789536709" id="auto-id-1524789537181">
                                <div class="j-post">
                                    <div class="auto-1524789536693">
                                        <div class="f-cb"><h3 class="j-title title f-fl">帖子标题1</h3>
                                            <div class="f-cb f-fr j-tagBox" style="display: none;">
                                                <div class="u-forumtag u-forumtag1 j-tagTopNode">置顶</div>
                                                <div class="u-forumtag j-tagAgreeNode">赞同</div>
                                                <div class="u-forumtag j-tagSolveNode">已解决</div>
                                                <div class="u-forumtag j-tagTeacherNode">老师参与</div>
                                            </div>
                                        </div>
                                        <div class="content f-richEditorText j-content">
                                            <p>内容.<br/><br/><img src="../static/illustration.jpg"></p>
                                        </div>
                                        <div class="infobar f-cb">
                                            <div class="j-infoBox">
                                                <div class="f-fl name j-name">
                                                        <span class="userInfo j-userInfo" title="">
                                                            <a class="f-fcgreen userName" href="" title="140410401">140410401</a>
                                                        </span>
                                                </div>
                                                <div class="f-fl f-fc9 time j-time">于2018年04月11日发表</div>
                                            </div>
                                        </div>
                                        <div class="optbar f-cb">
                                            <div class="f-cb f-fr optBox j-optBox">
                                                <a hidefocus="true" class="f-fr f-fc9 opt delBtn j-delBtn" id="auto-id-1524789537053">删除</a>
                                                <div class="f-fr divider">|</div>
                                                <div class="f-fl j-editDivider divider" style="display:none">|</div>
                                                <a hidefocus="true" class="f-fl f-fc9 editBtn j-editBtn"
                                                   id="auto-id-1524789536985">编辑</a>
                                            </div>
                                            <div class="f-fr votebox j-vote" style="display: none">
                                                <div class="f-cb auto-1524789536688">
                                                    <div class="up f-fl j-up hvr" title="顶"></div>
                                                    <p class="num f-fl f-thide j-num" title="0">0</p>
                                                    <div class="down f-fl j-down hvr" title="踩"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="j-banState"></div>
                                <div class="rinfobox f-cb">
                                    <h4 class="j-reply-info f-fl">共2回复</h4>
                                    <div class="j-reply-sort f-fr auto-1524789536707-parent" style="display: none">
                                        <div class="auto-1524789536707"> 排序方式：
                                            <a class="j-time double upsort" id="auto-id-1524789537000" style="">
                                                回复时间<span></span>
                                            </a>
                                            <span class="divider"></span>
                                            <a class="j-vote single nosort" style="">点赞数</a>
                                        </div>
                                    </div>
                                </div>

                                <!--回复-->
                                <div class="j-reply-all allbox">
                                    <div class="m-basepool f-cb">
                                        <div class="j-list" style="">
                                            <div class="m-data-lists f-cb f-pr j-data-list">
                                                <div class="f-pr auto-1524789536705 first" style="z-index: 0;">
                                                    <div class="m-detailInfoItem f-pr auto-1524789536697" style="z-index: 100;">
                                                        <div class="tagCt f-cb j-tagBox" style="display: none;">
                                                            <div class="u-forumtag u-forumtag1 j-tagTopNode">置顶</div>
                                                            <div class="u-forumtag j-tagAgreeNode">赞同</div>
                                                        </div>
                                                        <div class="f-richEditorText j-content edueditor_styleclass_0"
                                                             id="auto-id-1524789537474"><p>教师评价1<br></p></div>
                                                        <div class="bar f-cb">
                                                            <div class="f-fl name j-name">
                                                                <span>
                                                                    <span class="userInfo j-userInfo" title="">
                                                                        <a class="f-fcgreen userName" href="#" title="教师1">教师1</a>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                            <div class="f-fl f-fc9 time j-time">于2018年04月11日发表</div>
                                                            <div class="f-fr j-manBox" style="display: none;"></div>
                                                            <a hidefocus="true" class="f-fr f-fc9 opt delBtn j-delBtn" style="display: none;">删除</a>
                                                            <div class="j-delDivider f-fr divider" style="display: none">|</div>
                                                            <a hidefocus="true" class="f-fr f-fc9 opt cmtBtn j-cmtBtn" style="display: none;">评论(2)</a>
                                                            <div class="j-cmtDivider f-fr divider" style="display: none;">|</div>
                                                            <div class="f-fr votebox j-vote" style="display: none;">
                                                                <div class="f-cb auto-1524789536688">
                                                                    <div class="up f-fl j-up hvr" title="顶"></div>
                                                                    <p class="num f-fl f-thide j-num" title="0">0</p>
                                                                    <div class="down f-fl j-down hvr" title="踩"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="f-pr last" style="z-index: 0;">
                                                    <div class="m-detailInfoItem f-pr auto-1524789536697"
                                                         style="z-index: 100;">
                                                        <div class="tagCt f-cb j-tagBox" style="display: none;">
                                                            <div class="u-forumtag u-forumtag1 j-tagTopNode">置顶</div>
                                                            <div class="u-forumtag j-tagAgreeNode">赞同</div>
                                                        </div>
                                                        <div class="f-richEditorText j-content edueditor_styleclass_1 edueditor_styleclass_4"><p>导师评价2</p></div>
                                                        <div class="bar f-cb">
                                                            <div class="f-fl name j-name">
                                                                <span>
                                                                    <span class="userInfo j-userInfo" title="">
                                                                    <a class="f-fcgreen userName" href=""
                                                                       title="导师1">导师1</a>
                                                                </span>
                                                                </span>
                                                            </div>
                                                            <div class="f-fl f-fc9 time j-time">于2018年04月11日发表</div>
                                                            <div class="f-fr j-manBox" style="display: none;"></div>
                                                            <a hidefocus="true" class="f-fr f-fc9 opt delBtn j-delBtn" style="display: none">删除</a>
                                                            <div class="j-delDivider f-fr divider" style="display:none">|</div>
                                                            <a hidefocus="true" class="f-fr f-fc9 opt cmtBtn j-cmtBtn"
                                                               style="display: none;" >评论(0)</a>
                                                            <div class="j-cmtDivider f-fr divider"style="display: none;">|</div>
                                                            <div class="f-fr votebox j-vote" style="display: none;">
                                                                <div class="f-cb auto-1524789536688">
                                                                    <div class="up f-fl j-up hvr" title="顶"></div>
                                                                    <p class="num f-fl f-thide j-num" title="0">0</p>
                                                                    <div class="down f-fl j-down hvr" title="踩"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="u-pager f-pr j-data-pager" >
                                                <div>
                                                    <a href="#" class="zbtn zprv js-disabled">上一页</a>
                                                    <a href="#" class="zpgi zpg1 js-selected">1</a>
                                                    <a href="#" class="zpgi zpg2" style="display: none;"></a>
                                                    <a href="#" class="zpgi zpg3" style="display: none;"></a>
                                                    <a href="" class="zpgi zpg4" style="display: none;"></a>
                                                    <a href="#" class="zpgi zpg5" style="display: none;"></a>
                                                    <a href="#" class="zpgi zpg6" style="display: none;"></a>
                                                    <a href="#" class="zpgi zpg7" style="display: none;"></a>
                                                    <a href="#" class="zpgi zpg8" style="display: none;"></a>
                                                    <a href="#" class="zpgi zpg9" style="display: none;"></a>
                                                    <a href="#" class="zbtn znxt js-disabled">下一页</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="j-none empty" style="display:none"><span
                                                class="f-f0 f-fc9 j-none-txt f-ib"></span></div>
                                    </div>
                                </div>

                                <!--输入框-->
                                <div class="j-reply-add auto-1524789536695-parent" style="display: none;">
                                    <div class="ui-richEditor f-cb f-pr auto-1524789536695" id="auto-id-1524789537455">
                                        <div class="rich-wrap" id="auto-id-1524789537454">
                                            <div class="rich-editor j-richeditor auto-1524789536593-parent">
                                                <div class="u-richeditor auto-1524789536593" id="auto-id-1524789537656">
                                                    <div class="ztbar j-toolbar auto-1524789536592-parent">
                                                        <div class="f-cb auto-1524789536592" id="auto-id-1524789537659">
                                                            <div class="zitm zbg z-i-11" title="清空文档"
                                                                 id="auto-id-1524789537662">
                                                                <div class="zicn zbg"></div>
                                                            </div>
                                                            <div class="zitm zbg z-i-9" title="撤销"
                                                                 id="auto-id-1524789537665">
                                                                <div class="zicn zbg"></div>
                                                            </div>
                                                            <div class="zitm zbg z-i-10" title="重做"
                                                                 id="auto-id-1524789537668">
                                                                <div class="zicn zbg"></div>
                                                            </div>
                                                            <div class="zisp"></div>
                                                            <div class="zitm zbg z-i-0" title="加粗"
                                                                 id="auto-id-1524789537671">
                                                                <div class="zicn zbg"></div>
                                                            </div>
                                                            <div class="zitm zbg z-i-1" title="斜体"
                                                                 id="auto-id-1524789537674">
                                                                <div class="zicn zbg"></div>
                                                            </div>
                                                            <div class="zitm zbg z-i-2" title="下划线"
                                                                 id="auto-id-1524789537677">
                                                                <div class="zicn zbg"></div>
                                                            </div>
                                                            <div class="zitm zbg z-i-3" title="删除线"
                                                                 id="auto-id-1524789537680">
                                                                <div class="zicn zbg"></div>
                                                            </div>
                                                            <div class="zitm zbg z-i-4" title="有序列表"
                                                                 id="auto-id-1524789537683">
                                                                <div class="zicn zbg"></div>
                                                            </div>
                                                            <div class="zitm zbg z-i-5" title="无序列表"
                                                                 id="auto-id-1524789537686">
                                                                <div class="zicn zbg"></div>
                                                            </div>
                                                            <div class="zitm zbg colorbtn z-i-12" title="字体颜色"
                                                                 id="auto-id-1524789537689">
                                                                <div class="zicn zbg"></div>
                                                                <div class="colordown j-down"
                                                                     style="display: none;"></div>
                                                            </div>
                                                            <div class="zitm zbg z-i-6" title="超链接"
                                                                 id="auto-id-1524789537692">
                                                                <div class="zicn zbg"></div>
                                                            </div>
                                                            <div class="zitm zbg z-i-7" title="图片"
                                                                 id="auto-id-1524789537695">
                                                                <div class="zicn zbg"></div>
                                                            </div>
                                                            <div class="zitm zbg z-i-8" title="公式"
                                                                 id="auto-id-1524789537698">
                                                                <div class="zicn zbg"></div>
                                                            </div>
                                                            <div class="zisp"></div>
                                                            <div class="zdlitm zbg z-i-code" id="auto-id-1524789537701">
                                                                <div class="up j-up f-thide">代码语言</div>
                                                                <div class="down f-bg j-list" id="auto-id-1524789537750"
                                                                     style="display: none; width: 135px;">
                                                                    <div class="f-thide list" title="as3"
                                                                         id="auto-id-1524789538010">ActionScript&nbsp;3
                                                                    </div>
                                                                    <div class="f-thide list" title="bash"
                                                                         id="auto-id-1524789538012">Bash/Shell
                                                                    </div>
                                                                    <div class="f-thide list" title="cpp"
                                                                         id="auto-id-1524789538014">C/C++
                                                                    </div>
                                                                    <div class="f-thide list" title="css"
                                                                         id="auto-id-1524789538016">CSS
                                                                    </div>
                                                                    <div class="f-thide list" title="cf"
                                                                         id="auto-id-1524789538018">ColdFusion
                                                                    </div>
                                                                    <div class="f-thide list" title="c#"
                                                                         id="auto-id-1524789538020">C#
                                                                    </div>
                                                                    <div class="f-thide list" title="delphi"
                                                                         id="auto-id-1524789538022">Delphi
                                                                    </div>
                                                                    <div class="f-thide list" title="diff"
                                                                         id="auto-id-1524789538024">Diff
                                                                    </div>
                                                                    <div class="f-thide list" title="erlang"
                                                                         id="auto-id-1524789538026">Erlang
                                                                    </div>
                                                                    <div class="f-thide list" title="groovy"
                                                                         id="auto-id-1524789538028">Groovy
                                                                    </div>
                                                                    <div class="f-thide list" title="html"
                                                                         id="auto-id-1524789538030">HTML
                                                                    </div>
                                                                    <div class="f-thide list" title="java"
                                                                         id="auto-id-1524789538032">Java
                                                                    </div>
                                                                    <div class="f-thide list" title="jfx"
                                                                         id="auto-id-1524789538034">JavaFX
                                                                    </div>
                                                                    <div class="f-thide list" title="js"
                                                                         id="auto-id-1524789538036">JavaScript
                                                                    </div>
                                                                    <div class="f-thide list" title="pl"
                                                                         id="auto-id-1524789538038">Perl
                                                                    </div>
                                                                    <div class="f-thide list" title="php"
                                                                         id="auto-id-1524789538040">PHP
                                                                    </div>
                                                                    <div class="f-thide list" title="plain"
                                                                         id="auto-id-1524789538042">Plain&nbsp;Text
                                                                    </div>
                                                                    <div class="f-thide list" title="ps"
                                                                         id="auto-id-1524789538044">PowerShell
                                                                    </div>
                                                                    <div class="f-thide list" title="python"
                                                                         id="auto-id-1524789538046">Python
                                                                    </div>
                                                                    <div class="f-thide list" title="ruby"
                                                                         id="auto-id-1524789538048">Ruby
                                                                    </div>
                                                                    <div class="f-thide list" title="scala"
                                                                         id="auto-id-1524789538050">Scala
                                                                    </div>
                                                                    <div class="f-thide list" title="sql"
                                                                         id="auto-id-1524789538052">SQL
                                                                    </div>
                                                                    <div class="f-thide list" title="vb"
                                                                         id="auto-id-1524789538054">Visual&nbsp;Basic
                                                                    </div>
                                                                    <div class="f-thide list" title="xml"
                                                                         id="auto-id-1524789538056">XML
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="zdlitm zbg z-i-size" id="auto-id-1524789537754">
                                                                <div class="up j-up f-thide">字号</div>
                                                                <div class="down f-bg j-list" id="auto-id-1524789537769"
                                                                     style="display: none; width: 108px;">
                                                                    <div class="f-thide list" style="font-size:12px;"
                                                                         id="auto-id-1524789538059">12px
                                                                    </div>
                                                                    <div class="f-thide list" style="font-size:14px;"
                                                                         id="auto-id-1524789538061">14px
                                                                    </div>
                                                                    <div class="f-thide list" style="font-size:16px;"
                                                                         id="auto-id-1524789538063">16px
                                                                    </div>
                                                                    <div class="f-thide list" style="font-size:18px;"
                                                                         id="auto-id-1524789538065">18px
                                                                    </div>
                                                                    <div class="f-thide list" style="font-size:20px;"
                                                                         id="auto-id-1524789538067">20px
                                                                    </div>
                                                                    <div class="f-thide list" style="font-size:24px;"
                                                                         id="auto-id-1524789538069">24px
                                                                    </div>
                                                                    <div class="f-thide list" style="font-size:36px;"
                                                                         id="auto-id-1524789538071">36px
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="zarea j-area"
                                                         style="width: 100%; height: 200px; z-index: 999; overflow: hidden;">
                                                        <iframe id="ueditor_6" width="100%" height="100%"
                                                                frameborder="0"
                                                                src="javascript:void(function(){document.open();document.write(&quot;&lt;!DOCTYPE html&gt;&lt;html xmlns=&#39;http://www.w3.org/1999/xhtml&#39; class=&#39;view&#39; &gt;&lt;head&gt;&lt;style type=&#39;text/css&#39;&gt;.view{padding:0;word-wrap:break-word;cursor:text;height:90%;}
body{margin:8px;font-family:sans-serif;font-size:16px;}p{margin:5px 0;}&lt;/style&gt;&lt;style&gt;.view{ font-size:12px; border:0; text-align:left; color:#666; line-height:22px; word-break:break-word; word-wrap:break-word;}                        .view em{ font-style:italic;}                        .view p{ margin:0; padding:0;}                        .view div{ margin:10px 0; padding:0;}                        .view sup, .view blockquote{ border-left:3px solid #D0E5F2; font-style:normal; padding: 0 0 0 10px; vertical-align:baseline; margin:0; font-size:14px;}                        .viewimg{ max-height:520px; max-width:520px; vertical-align:middle;}                        .view code{ min-height:25px; font-family:monospace; white-space:pre-wrap; margin:.5em 0; padding:.4em .6em; border-radius:8px; background:#EFEFEF;}                        .view table{ border-collapse:collapse; border-spacing:0; border:1px solid #E4E4E4}                        .view table th, .view table td{ border:1px solid #E4E4E4; padding:5px;}&lt;/style&gt;&lt;/head&gt;&lt;body class=&#39;view&#39; &gt;&lt;/body&gt;&lt;script type=&#39;text/javascript&#39;  id=&#39;_initialScript&#39;&gt;setTimeout(function(){editor = window.parent.UE.instants[&#39;ueditorInstant6&#39;];editor.setup(document);},0);var _tmpScript = document.getElementById(&#39;_initialScript&#39;);_tmpScript.parentNode.removeChild(_tmpScript);&lt;/script&gt;&lt;/html&gt;&quot;);document.close();}())"
                                                                src="static/saved_resource.html"></iframe>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="rich-opt f-cb" id="auto-id-1524789537453"><label
                                                    class="j-anony f-fl"><input type="checkbox" hidefocus="true"
                                                                                class="j-anonycheck">&nbsp;&nbsp;匿名发表</label>
                                                <a hidefocus="true"
                                                   class="j-edit-btn editbtn u-btn u-btn-sm u-btn-primary f-fr"
                                                   id="auto-id-1524789537035">发表回复</a> <a hidefocus="true"
                                                                                          class="j-close-btn cancelbtn f-fc9 f-fr"
                                                                                          id="auto-id-1524789537036"
                                                                                          style="display: none;">取消</a>
                                            </div>
                                        </div>
                                        <div class="unlogin j-unloginbox" style="display: none;">
                                            <div class="autowrap f-cb"><p class="f-fl">发表观点要登录哦！</p><a hidefocus="true"
                                                                                                       class="j-login-btn loginbtn u-btn u-btn-sm u-btn-primary f-fl"
                                                                                                       id="auto-id-1524789537037">立即登录</a>
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
    </div>
</div>
</body>
</html>