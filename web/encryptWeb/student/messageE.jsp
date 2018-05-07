<%@page contentType="text/html; charset=utf-8" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>我的消息</title>
    <!--样式-->
    <link rel="stylesheet" href="static/pt_newpages_message_msgList.css">
    <style type="text/css">
        .um-message-tab-view_item {
            width: 136px;
            height: 38px;
            line-height: 38px;
            position: relative;
            float: left;
            text-align: center;
            border: 1px solid #dddddd;
            background-color: #f5f7f7;
            color: #343d42;
            font-size: 16px;
            cursor: pointer
        }
        .um-message-tab-view .z-crt {
            background-color: #e84807;
            color: #fff
        }

        .um-message-tab-view_round {
            display: none;
            position: absolute;
            top: 10px;
            width: 6px;
            height: 6px;
            background-color: red;
            border-radius: 4px
        }

        .um-message-tab-view .z-new .um-message-tab-view_round {
            display: inline-block
        }

        /*# sourceMappingURL=component.css.map */
        .ux-message-list-view {
            width: 100%;
            padding-bottom: 100px
        }

        .ux-message-list-view_ul {
            margin-bottom: 30px
        }

        .ux-message-list-view .old-msg {
            color: #b4bdbf
        }

        .ux-message-list-view_itm {
            padding: 20px 440px 20px 8px;
            border-bottom: 1px dashed #e4e8e9;
            color: #52585a
        }

        .ux-message-list-view_itm_body {
            height: auto;
            line-height: 24px;
            padding-right: 30px
        }

        .ux-message-list-view_itm_body a {
            color: #e84807;
            text-decoration: none
        }

        .ux-message-list-view_empty {
            margin: 100px auto;
            text-align: center
        }
    </style>
    <style type="text/css">
        @charset "UTF-8";
        *[hidefocus] {
            outline: none;
        }

        body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, fieldset, input, textarea, p, blockquote, th, td {
            padding: 0;
            margin: 0;
        }

        fieldset, img, html, body, iframe {
            border: 0;
        }

        table {
            border-collapse: collapse;
            border-spacing: 0;
        }

        li {
            list-style: none;
        }

        caption, th {
            font-weight: normal;
            font-style: normal;
            text-align: left;
        }

        em {
            font-style: normal;
        }

        strong {
            font-weight: bold;
        }

        body, textarea, select, input {
            font-family: "Arial", "Hiragino Sans GB", \5fae\8f6f\96c5\9ed1, "Helvetica", "sans-serif";
            outline: none;
            border: 0;
        }

        textarea {
            resize: none;
        }

        input {
            vertical-align: baseline;
            margin: 0px;
        }

        body {
            background-color: #fff;
        }

        h1, h2, h3, h4, h5, h6 {
            font-weight: normal;
        }

        a, button {
            cursor: pointer;
        }

        html, body {
            width: 100%;
            height: 100%;
        }

        html {
            overflow: auto;
        }

        body {
            text-align: left;
            background: #fff;
        }

        textarea {
            overflow: auto;
        }

        .b-10, .b-25, .b-20, .b-30, .b-15, .b-40, .b-50, .b-70 {
            clear: both;
            height: 10px;
            overflow: hidden;
            display: block;
        }

        .b-25 {
            height: 25px;
        }

        .b-20 {
            height: 20px;
        }

        .b-30 {
            height: 30px;
        }

        .b-15 {
            height: 15px;
        }

        .b-40 {
            height: 40px;
        }

        .b-50 {
            height: 50px;
        }

        .b-70 {
            height: 70px;
        }

        .b-10, .b-25, .b-20, .b-30, .b-15, .b-40, .b-50, .b-70 {
            clear: both;
            height: 10px;
            overflow: hidden;
            display: block;
        }

        .b-25 {
            height: 25px;
        }

        .b-20 {
            height: 20px;
        }

        .b-30 {
            height: 30px;
        }

        .b-15 {
            height: 15px;
        }

        .b-40 {
            height: 40px;
        }

        .b-50 {
            height: 50px;
        }

        .b-70 {
            height: 70px;
        }

        .g-hd:after, .g-bd:after, .m-nav ul:after {
            clear: both;
            content: '.';
            display: block;
            height: 0;
            visibility: hidden;
        }

        .g-hd, .g-bd, .m-nav ul {
            zoom: 1;
        }

        body {
            min-width: 1205px;
            position: relative;
            height: auto !important;
            min-height: 100%;
        }

        .g-doc, .g-wrap, .g-flow, .g-all {
            width: 1205px;
            margin: 0 auto;
            text-align: left;
        }

        .g-doc {
            z-index: 0;
            position: relative;
            padding-left: -moz-calc(100vw - 100%);
            padding-left: -webkit-calc(100vw - 100%);
            padding-left: -o-calc(100vw - 100%);
            padding-left: calc(100vw - 100%);
        }

        .g-all {
            width: 100%;
        }

        .g-hide, .g-inlinehide {
            display: none;
        }

        .g-rhide {
            display: block;
        }

        .m-pannel, .m-pannel-h {
            border: 1px solid #e4e8e9;
            background: #fff;
        }

        .m-pannel-h:hover {
            -webkit-box-shadow: 1px 1px 10px #E4F9E5;
            -moz-box-shadow: 1px 1px 10px #E4F9E5;
            box-shadow: 1px 1px 10px #E4F9E5;
        }

        .g-container {
            margin-left: -20px;
            position: relative;
            z-index: 0;
        }

        .g-container .g-cell, .g-container .g-cell1, .g-container .g-cell2, .g-container .g-cell3, .g-container .g-cell4 {
            width: 225px;
            margin-left: 20px;
            float: left;
        }

        .g-container .g-cell2 {
            width: 470px;
        }

        .g-container .g-cell3 {
            width: 715px;
        }

        .g-container .g-cell4 {
            width: 960px;
        }

        .g-sd1 {
            position: relative;
            float: left;
            width: 225px;
            margin-right: -225px;
        }

        .g-mn1 {
            float: right;
            width: 100%;
        }

        .g-mn1c {
            margin-left: 245px;
        }

        .g-sd2 {
            position: relative;
            float: right;
            width: 225px;
            margin-left: -225px;
        }

        .g-mn2 {
            float: left;
            width: 100%;
        }

        .g-mn2c {
            margin-right: 245px;
        }

        .g-cisd2 {
            position: relative;
            float: right;
            width: 265px;
            margin-left: -265px;
        }

        .g-cimn2 {
            float: left;
            width: 100%;
        }

        .g-cimn2c {
            margin-right: 285px;
        }

        .fadeInOut {
            animation-name: fadeInOut;
            animation-duration: 400ms;
            animation-timing-function: ease-in-out;
        }

        @keyframes fadeInOut {
            0% {
                opacity: 0;
            }
            50% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }

        .fade, .slide {
            transition-duration: .2s;
            transition-timing-function: ease-in-out;
        }

        .fade {
            transition-property: opacity;
        }

        .fade-in {
            opacity: 0;
        }

        .fade-in-active {
            opacity: 1;
        }

        .fade-out {
            opacity: 1;
        }

        .fade-out-active {
            opacity: 0;
        }

        .slide {
            transition-property: height;
            overflow: hidden;
        }

        .slide.slide-up {
            height: 0;
        }

        .x-zoomImg {
            overflow: hidden;
        }

        .x-zoomImg img {
            vertical-align: middle;
            -webkit-transition: all, 1s, ease;
            -moz-transition: all, 1s, ease;
            transition: all, 1s, ease;
        }

        .x-zoomImg img:hover {
            -webkit-transform: scale(1.2);
            -moz-transform: scale(1.2);
            -ms-transform: scale(1.2);
            -o-transform: scale(1.2);
            transform: scale(1.2);
        }

        .x-hide, .x-hoverItem .x-child {
            -webkit-transition-property: opacity, -webkit-transform;
            -moz-transition-property: opacity, -webkit-transform;
            -ms-transition-property: opacity, -webkit-transform;
            -o-transition-property: opacity, -webkit-transform;
            transition-property: opacity, -webkit-transform;
            -webkit-transition-duration: 0.15s;
            -moz-transition-duration: 0.15s;
            -ms-transition-duration: 0.15s;
            -o-transition-duration: 0.15s;
            transition-duration: 0.15s;
            -webkit-transition-timing-function: ease-out;
            -moz-transition-timing-function: ease-out;
            -ms-transition-timing-function: ease-out;
            -o-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
            -webkit-transform: scale(0.9);
            opacity: 0;
            pointer-events: none;
            display: none \9;
            visibility: hidden;
        }

        .x-show, .x-hoverItem:hover .x-child {
            opacity: 1;
            -webkit-transform: scale(1);
            pointer-events: all;
            display: block \9;
            visibility: visible;
        }

        .f-f0 {
            font-family: "Arial", "Hiragino Sans GB", \5fae\8f6f\96c5\9ed1, "Helvetica", "sans-serif";
        }

        .f-f1 {
            font-family: "Arial", "Hiragino Sans GB", "SimSun", \5b8b\4f53, "Georgia", "serif";
        }

        .f-fs12 {
            font-size: 12px;
        }

        .f-fs14 {
            font-size: 14px;
        }

        .f-fs16 {
            font-size: 16px;
        }

        .f-fs18 {
            font-size: 18px;
        }

        .f-fs20 {
            font-size: 20px;
        }

        .f-fw-n {
            font-weight: normal !important;
        }

        .f-fw-b {
            font-weight: bold !important;
        }

        .f-fw-br {
            font-weight: bolder !important;
        }

        .f-fc0 {
            color: #000;
        }

        .f-fc3, .f-fcdark {
            color: #343d42;
        }

        .f-fc6, .f-fclight {
            color: #859295;
        }

        .f-fc9, .f-fclighter {
            color: #b4c0c3;
        }

        .f-fcd {
            color: #ddd;
        }

        .f-fcf {
            color: #fff;
        }

        .f-fcred {
            color: #ff513a;
        }

        .f-fcgreen, .f-fcg {
            color: #e84807;
        }

        .f-fcorange {
            color: #ff5307;
        }

        a {
            color: #859295;
            text-decoration: none;
        }

        a:hover {
            color: #e84807;
            text-decoration: none;
        }

        a.f-fcgreen:hover, a.f-fcg:hover {
            text-decoration: underline;
        }

        .f-fl {
            float: left;
        }

        .f-fr {
            float: right;
        }

        .f-cb:after, .f-cbli li:after {
            display: block;
            clear: both;
            visibility: hidden;
            height: 0;
            overflow: hidden;
            content: ".";
        }

        .f-clearfix:after {
            content: '';
            display: table;
            clear: both;
        }

        .f-cb, .f-cbli li {
            zoom: 1;
        }

        .f-cl {
            clear: left;
        }

        .f-cr {
            clear: right;
        }

        .f-clr {
            clear: both;
        }

        .f-thide {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .f-hide {
            text-indent: -9999px;
            overflow: hidden;
        }

        .f-tc {
            text-align: center;
        }

        .f-tl {
            text-align: left;
        }

        .f-ib {
            display: inline-block;
            zoom: 1;
            *display: inline;
        }

        .f-dn {
            display: none;
        }

        .f-db {
            display: block;
        }

        .f-pr {
            position: relative;
        }

        .f-pa {
            position: absolute;
        }

        .f-pf {
            position: fixed;
        }

        .f-ohidden {
            overflow: hidden;
        }

        .f-af {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
        }

        .f-lh1 {
            line-height: 1;
        }

        .f-wsn {
            word-wrap: normal;
            white-space: nowrap;
        }

        .f-pre {
            overflow: hidden;
            text-align: left;
            white-space: pre-wrap;
            word-wrap: break-word;
            word-break: break-all;
        }

        .f-wwb {
            white-space: normal;
            word-wrap: break-word;
            word-break: break-all;
        }

        .f-toe {
            overflow: hidden;
            word-wrap: normal;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        .f-usn {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            -o-user-select: none;
            user-select: none;
        }

        .f-lsn {
            list-style: none;
            margin: 0;
            padding: 0;
        }

        .f-lsi {
            letter-spacing: -4px;
        }

        .f-lsi > * {
            letter-spacing: normal;
        }

        .f-richEditorText {
            margin: 0;
            padding: 0;
            border: 0;
            text-align: left;
            word-break: break-word;
            word-wrap: break-word;
            font: 12px/22px Helvetica Neue, Helvetica, Arial, Sans-serif;
        }

        .f-richEditorText em {
            font-style: italic;
        }

        .f-richEditorText p {
            margin: 0;
            padding: 0;
        }

        .f-richEditorText div {
            margin: 10px 0;
            padding: 0;
        }

        .f-richEditorText blockquote {
            border-left: 3px solid #D0E5F2;
            font-style: normal;
            padding: 0 0 0 10px;
            vertical-align: baseline;
            margin: 0;
            font-size: 14px;
        }

        .f-richEditorText img {
            max-height: 520px;
            max-width: 520px;
        }

        .f-richEditorText a {
            text-decoration: underline;
        }

        .f-richEditorText ul li {
            list-style: disc inside;
        }

        .f-richEditorText ol li {
            list-style: decimal inside;
        }

        .f-richEditorText table {
            border-collapse: collapse;
            border-spacing: 0;
            border: 1px solid #E4E4E4;
        }

        .f-richEditorText table th, .f-richEditorText table td {
            border: 1px solid #E4E4E4;
            padding: 5px;
        }

        .bg, .f-bg {
            background-color: #fff;
            box-shadow: 0px 1px 2px #bbb;
        }

        .f-pointer:hover {
            cursor: pointer;
        }

        .f-require:before {
            display: inline;
            font-weight: bold;
            color: #ff513a;
            padding-right: 5px;
            vertical-align: middle;
            content: '*';
        }

        .f-unselectable, .f-unselectable * {
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        body {
            padding: 60px 0 396px 0;
        }

        .ux-loading {
            position: fixed;
            top: 38%;
            left: 44%;
            width: 75px;
            height: 22px;
            background: #fafafa url(//s2.stu.126.net/res/images/web/common/loading.gif?348e3cea35602e70543b87a77333867e) center center no-repeat;
            border-radius: 4px;
            -webkit-box-shadow: 0 3px 10px #777;
            -moz-box-shadow: 0 3px 10px #777;
            box-shadow: 0 3px 10px #777;
        }

        .ux-loading_spinner {
            display: none;
        }

        .ux-btn {
            background: #e84807;
            border: 1px solid #e84807;
            color: #fff;
        }

        .ux-btn:hover, .ux-btn:focus {
            background: #e84807;
            color: #fff;
        }

        .ux-arrow {
            color: #999;
        }

        .ux-arrow:hover {
            text-decoration: none;
        }

        .f-thover:hover {
            color: #e84807 !important;
        }

        .ux-button-group-hl .ux-btn {
            border-color: #ddd;
            background: #fff;
        }

        .ux-button-group-hl .ux-btn.active {
            border-color: #e84807;
            background: #e84807;
            color: #fff !important;
        }

        .th-ff1 {
            font-family: "Hiragino Sans GB", "SimSun", \5b8b\4f53, "Georgia", "serif";
        }

        .th-ff2 {
            font-family: "Arial", "Hiragino Sans GB", \5fae\8f6f\96c5\9ed1, "Helvetica", "sans-serif";
        }

        a {
            color: #e84807;
            text-decoration: none;
        }

        a:hover {
            color: #e84807;
            text-decoration: underline;
        }

        .th-fs0 {
            font-size: 14px;
        }

        .th-fs0fc0 {
            font-size: 14px;
            color: #e84807;
        }

        .th-fs0fc1 {
            font-size: 14px;
            color: #fff;
        }

        .th-fs0fc2 {
            font-size: 14px;
            color: #aaa;
        }

        .th-fs0fc3 {
            font-size: 14px;
            color: #999;
        }

        .th-fs0fc4 {
            font-size: 14px;
            color: #666;
        }

        .th-fs0fc5 {
            font-size: 14px;
            color: #333;
        }

        .th-fs0fc6 {
            font-size: 14px;
            color: #ff1d00;
        }

        .th-fs0fc7 {
            font-size: 14px;
            color: #ccc;
        }

        .th-fs0fc8 {
            font-size: 14px;
            color: #e84807;
        }

        .th-fs0fc9 {
            font-size: 14px;
            color: #ff6600;
        }

        .th-fs0fc10 {
            font-size: 14px;
            color: #1C67B7;
        }

        .th-fs1 {
            font-size: 12px;
        }

        .th-fs1fc0 {
            font-size: 12px;
            color: #e84807;
        }

        .th-fs1fc1 {
            font-size: 12px;
            color: #fff;
        }

        .th-fs1fc2 {
            font-size: 12px;
            color: #aaa;
        }

        .th-fs1fc3 {
            font-size: 12px;
            color: #999;
        }

        .th-fs1fc4 {
            font-size: 12px;
            color: #666;
        }

        .th-fs1fc5 {
            font-size: 12px;
            color: #333;
        }

        .th-fs1fc6 {
            font-size: 12px;
            color: #ff1d00;
        }

        .th-fs1fc7 {
            font-size: 12px;
            color: #ccc;
        }

        .th-fs1fc8 {
            font-size: 12px;
            color: #e84807;
        }

        .th-fs1fc9 {
            font-size: 12px;
            color: #ff6600;
        }

        .th-fs1fc10 {
            font-size: 12px;
            color: #1C67B7;
        }

        .th-fs2 {
            font-size: 16px;
        }

        .th-fs2fc0 {
            font-size: 16px;
            color: #e84807;
        }

        .th-fs2fc1 {
            font-size: 16px;
            color: #fff;
        }

        .th-fs2fc2 {
            font-size: 16px;
            color: #aaa;
        }

        .th-fs2fc3 {
            font-size: 16px;
            color: #999;
        }

        .th-fs2fc4 {
            font-size: 16px;
            color: #666;
        }

        .th-fs2fc5 {
            font-size: 16px;
            color: #333;
        }

        .th-fs2fc6 {
            font-size: 16px;
            color: #ff1d00;
        }

        .th-fs2fc7 {
            font-size: 16px;
            color: #ccc;
        }

        .th-fs2fc8 {
            font-size: 16px;
            color: #e84807;
        }

        .th-fs2fc9 {
            font-size: 16px;
            color: #ff6600;
        }

        .th-fs2fc10 {
            font-size: 16px;
            color: #1C67B7;
        }

        .th-fs3 {
            font-size: 18px;
        }

        .th-fs3fc0 {
            font-size: 18px;
            color: #e84807;
        }

        .th-fs3fc1 {
            font-size: 18px;
            color: #fff;
        }

        .th-fs3fc2 {
            font-size: 18px;
            color: #aaa;
        }

        .th-fs3fc3 {
            font-size: 18px;
            color: #999;
        }

        .th-fs3fc4 {
            font-size: 18px;
            color: #666;
        }

        .th-fs3fc5 {
            font-size: 18px;
            color: #333;
        }

        .th-fs3fc6 {
            font-size: 18px;
            color: #ff1d00;
        }

        .th-fs3fc7 {
            font-size: 18px;
            color: #ccc;
        }

        .th-fs3fc8 {
            font-size: 18px;
            color: #e84807;
        }

        .th-fs3fc9 {
            font-size: 18px;
            color: #ff6600;
        }

        .th-fs3fc10 {
            font-size: 18px;
            color: #1C67B7;
        }

        .th-fs4 {
            font-size: 20px;
        }

        .th-fs4fc0 {
            font-size: 20px;
            color: #e84807;
        }

        .th-fs4fc1 {
            font-size: 20px;
            color: #fff;
        }

        .th-fs4fc2 {
            font-size: 20px;
            color: #aaa;
        }

        .th-fs4fc3 {
            font-size: 20px;
            color: #999;
        }

        .th-fs4fc4 {
            font-size: 20px;
            color: #666;
        }

        .th-fs4fc5 {
            font-size: 20px;
            color: #333;
        }

        .th-fs4fc6 {
            font-size: 20px;
            color: #ff1d00;
        }

        .th-fs4fc7 {
            font-size: 20px;
            color: #ccc;
        }

        .th-fs4fc8 {
            font-size: 20px;
            color: #e84807;
        }

        .th-fs4fc9 {
            font-size: 20px;
            color: #ff6600;
        }

        .th-fs4fc10 {
            font-size: 20px;
            color: #1C67B7;
        }

        .th-fs5 {
            font-size: 24px;
        }

        .th-fs5fc0 {
            font-size: 24px;
            color: #e84807;
        }

        .th-fs5fc1 {
            font-size: 24px;
            color: #fff;
        }

        .th-fs5fc2 {
            font-size: 24px;
            color: #aaa;
        }

        .th-fs5fc3 {
            font-size: 24px;
            color: #999;
        }

        .th-fs5fc4 {
            font-size: 24px;
            color: #666;
        }

        .th-fs5fc5 {
            font-size: 24px;
            color: #333;
        }

        .th-fs5fc6 {
            font-size: 24px;
            color: #ff1d00;
        }

        .th-fs5fc7 {
            font-size: 24px;
            color: #ccc;
        }

        .th-fs5fc8 {
            font-size: 24px;
            color: #e84807;
        }

        .th-fs5fc9 {
            font-size: 24px;
            color: #ff6600;
        }

        .th-fs5fc10 {
            font-size: 24px;
            color: #1C67B7;
        }

        .th-fc0 {
            color: #e84807;
        }

        .th-fc0fs0 {
            color: #e84807;
            font-size: 14px;
        }

        .th-fc0fs1 {
            color: #e84807;
            font-size: 12px;
        }

        .th-fc0fs2 {
            color: #e84807;
            font-size: 16px;
        }

        .th-fc0fs3 {
            color: #e84807;
            font-size: 18px;
        }

        .th-fc0fs4 {
            color: #e84807;
            font-size: 20px;
        }

        .th-fc0fs5 {
            color: #e84807;
            font-size: 24px;
        }

        .th-fc1, .f-shover:hover {
            color: #fff;
        }

        .th-fc1fs0 {
            color: #fff;
            font-size: 14px;
        }

        .th-fc1fs1 {
            color: #fff;
            font-size: 12px;
        }

        .th-fc1fs2 {
            color: #fff;
            font-size: 16px;
        }

        .th-fc1fs3 {
            color: #fff;
            font-size: 18px;
        }

        .th-fc1fs4 {
            color: #fff;
            font-size: 20px;
        }

        .th-fc1fs5 {
            color: #fff;
            font-size: 24px;
        }

        .th-fc2 {
            color: #aaa;
        }

        .th-fc2fs0 {
            color: #aaa;
            font-size: 14px;
        }

        .th-fc2fs1 {
            color: #aaa;
            font-size: 12px;
        }

        .th-fc2fs2 {
            color: #aaa;
            font-size: 16px;
        }

        .th-fc2fs3 {
            color: #aaa;
            font-size: 18px;
        }

        .th-fc2fs4 {
            color: #aaa;
            font-size: 20px;
        }

        .th-fc2fs5 {
            color: #aaa;
            font-size: 24px;
        }

        .th-fc3 {
            color: #999;
        }

        .th-fc3fs0 {
            color: #999;
            font-size: 14px;
        }

        .th-fc3fs1 {
            color: #999;
            font-size: 12px;
        }

        .th-fc3fs2 {
            color: #999;
            font-size: 16px;
        }

        .th-fc3fs3 {
            color: #999;
            font-size: 18px;
        }

        .th-fc3fs4 {
            color: #999;
            font-size: 20px;
        }

        .th-fc3fs5 {
            color: #999;
            font-size: 24px;
        }

        .th-fc4 {
            color: #666;
        }

        .th-fc4fs0 {
            color: #666;
            font-size: 14px;
        }

        .th-fc4fs1 {
            color: #666;
            font-size: 12px;
        }

        .th-fc4fs2 {
            color: #666;
            font-size: 16px;
        }

        .th-fc4fs3 {
            color: #666;
            font-size: 18px;
        }

        .th-fc4fs4 {
            color: #666;
            font-size: 20px;
        }

        .th-fc4fs5 {
            color: #666;
            font-size: 24px;
        }

        .th-fc5 {
            color: #333;
        }

        .th-fc5fs0 {
            color: #333;
            font-size: 14px;
        }

        .th-fc5fs1 {
            color: #333;
            font-size: 12px;
        }

        .th-fc5fs2 {
            color: #333;
            font-size: 16px;
        }

        .th-fc5fs3 {
            color: #333;
            font-size: 18px;
        }

        .th-fc5fs4 {
            color: #333;
            font-size: 20px;
        }

        .th-fc5fs5 {
            color: #333;
            font-size: 24px;
        }

        .th-fc6 {
            color: #ff1d00;
        }

        .th-fc6fs0 {
            color: #ff1d00;
            font-size: 14px;
        }

        .th-fc6fs1 {
            color: #ff1d00;
            font-size: 12px;
        }

        .th-fc6fs2 {
            color: #ff1d00;
            font-size: 16px;
        }

        .th-fc6fs3 {
            color: #ff1d00;
            font-size: 18px;
        }

        .th-fc6fs4 {
            color: #ff1d00;
            font-size: 20px;
        }

        .th-fc6fs5 {
            color: #ff1d00;
            font-size: 24px;
        }

        .th-fc7 {
            color: #ccc;
        }

        .th-fc7fs0 {
            color: #ccc;
            font-size: 14px;
        }

        .th-fc7fs1 {
            color: #ccc;
            font-size: 12px;
        }

        .th-fc7fs2 {
            color: #ccc;
            font-size: 16px;
        }

        .th-fc7fs3 {
            color: #ccc;
            font-size: 18px;
        }

        .th-fc7fs4 {
            color: #ccc;
            font-size: 20px;
        }

        .th-fc7fs5 {
            color: #ccc;
            font-size: 24px;
        }

        .th-fc8 {
            color: #e84807;
        }

        .th-fc8fs0 {
            color: #e84807;
            font-size: 14px;
        }

        .th-fc8fs1 {
            color: #e84807;
            font-size: 12px;
        }

        .th-fc8fs2 {
            color: #e84807;
            font-size: 16px;
        }

        .th-fc8fs3 {
            color: #e84807;
            font-size: 18px;
        }

        .th-fc8fs4 {
            color: #e84807;
            font-size: 20px;
        }

        .th-fc8fs5 {
            color: #e84807;
            font-size: 24px;
        }

        .th-fc9 {
            color: #ff6600;
        }

        .th-fc9fs0 {
            color: #ff6600;
            font-size: 14px;
        }

        .th-fc9fs1 {
            color: #ff6600;
            font-size: 12px;
        }

        .th-fc9fs2 {
            color: #ff6600;
            font-size: 16px;
        }

        .th-fc9fs3 {
            color: #ff6600;
            font-size: 18px;
        }

        .th-fc9fs4 {
            color: #ff6600;
            font-size: 20px;
        }

        .th-fc9fs5 {
            color: #ff6600;
            font-size: 24px;
        }

        .th-fc10 {
            color: #1C67B7;
        }

        .th-fc10fs0 {
            color: #1C67B7;
            font-size: 14px;
        }

        .th-fc10fs1 {
            color: #1C67B7;
            font-size: 12px;
        }

        .th-fc10fs2 {
            color: #1C67B7;
            font-size: 16px;
        }

        .th-fc10fs3 {
            color: #1C67B7;
            font-size: 18px;
        }

        .th-fc10fs4 {
            color: #1C67B7;
            font-size: 20px;
        }

        .th-fc10fs5 {
            color: #1C67B7;
            font-size: 24px;
        }

        .th-bg0 {
            background-color: #e84807;
        }

        .th-bg0bd0, .f-shover:hover {
            background-color: #e84807;
            border-color: #e84807;
        }

        .th-bg0bd1 {
            background-color: #e84807;
            border-color: #eee;
        }

        .th-bg0bd2 {
            background-color: #e84807;
            border-color: #ddd;
        }

        .th-bg0bd3 {
            background-color: #e84807;
            border-color: #ccc;
        }

        .th-bg0bd4 {
            background-color: #e84807;
            border-color: #aaa;
        }

        .th-bg0bd5 {
            background-color: #e84807;
            border-color: #feef6c;
        }

        .th-bg0bd6 {
            background-color: #e84807;
            border-color: #ff1d00;
        }

        .th-bg0bd7 {
            background-color: #e84807;
            border-color: #ccc;
        }

        .th-bg0bd8 {
            background-color: #e84807;
            border-color: #e84807;
        }

        .th-bg0bd9 {
            background-color: #e84807;
            border-color: #ff6600;
        }

        .th-bg0bd10 {
            background-color: #e84807;
            border-color: #C6DAF0;
        }

        .th-bg1 {
            background-color: #fff;
        }

        .th-bg1bd0 {
            background-color: #fff;
            border-color: #e84807;
        }

        .th-bg1bd1 {
            background-color: #fff;
            border-color: #eee;
        }

        .th-bg1bd2 {
            background-color: #fff;
            border-color: #ddd;
        }

        .th-bg1bd3 {
            background-color: #fff;
            border-color: #ccc;
        }

        .th-bg1bd4 {
            background-color: #fff;
            border-color: #aaa;
        }

        .th-bg1bd5 {
            background-color: #fff;
            border-color: #feef6c;
        }

        .th-bg1bd6 {
            background-color: #fff;
            border-color: #ff1d00;
        }

        .th-bg1bd7 {
            background-color: #fff;
            border-color: #ccc;
        }

        .th-bg1bd8 {
            background-color: #fff;
            border-color: #e84807;
        }

        .th-bg1bd9 {
            background-color: #fff;
            border-color: #ff6600;
        }

        .th-bg1bd10 {
            background-color: #fff;
            border-color: #C6DAF0;
        }

        .th-bg2 {
            background-color: #f6f6f6;
        }

        .th-bg2bd0 {
            background-color: #f6f6f6;
            border-color: #e84807;
        }

        .th-bg2bd1 {
            background-color: #f6f6f6;
            border-color: #eee;
        }

        .th-bg2bd2 {
            background-color: #f6f6f6;
            border-color: #ddd;
        }

        .th-bg2bd3 {
            background-color: #f6f6f6;
            border-color: #ccc;
        }

        .th-bg2bd4 {
            background-color: #f6f6f6;
            border-color: #aaa;
        }

        .th-bg2bd5 {
            background-color: #f6f6f6;
            border-color: #feef6c;
        }

        .th-bg2bd6 {
            background-color: #f6f6f6;
            border-color: #ff1d00;
        }

        .th-bg2bd7 {
            background-color: #f6f6f6;
            border-color: #ccc;
        }

        .th-bg2bd8 {
            background-color: #f6f6f6;
            border-color: #e84807;
        }

        .th-bg2bd9 {
            background-color: #f6f6f6;
            border-color: #ff6600;
        }

        .th-bg2bd10 {
            background-color: #f6f6f6;
            border-color: #C6DAF0;
        }

        .th-bg3 {
            background-color: #f3f6f7;
        }

        .th-bg3bd0 {
            background-color: #f3f6f7;
            border-color: #e84807;
        }

        .th-bg3bd1 {
            background-color: #f3f6f7;
            border-color: #eee;
        }

        .th-bg3bd2 {
            background-color: #f3f6f7;
            border-color: #ddd;
        }

        .th-bg3bd3 {
            background-color: #f3f6f7;
            border-color: #ccc;
        }

        .th-bg3bd4 {
            background-color: #f3f6f7;
            border-color: #aaa;
        }

        .th-bg3bd5 {
            background-color: #f3f6f7;
            border-color: #feef6c;
        }

        .th-bg3bd6 {
            background-color: #f3f6f7;
            border-color: #ff1d00;
        }

        .th-bg3bd7 {
            background-color: #f3f6f7;
            border-color: #ccc;
        }

        .th-bg3bd8 {
            background-color: #f3f6f7;
            border-color: #e84807;
        }

        .th-bg3bd9 {
            background-color: #f3f6f7;
            border-color: #ff6600;
        }

        .th-bg3bd10 {
            background-color: #f3f6f7;
            border-color: #C6DAF0;
        }

        .th-bg4 {
            background-color: #ccc;
        }

        .th-bg4bd0 {
            background-color: #ccc;
            border-color: #e84807;
        }

        .th-bg4bd1 {
            background-color: #ccc;
            border-color: #eee;
        }

        .th-bg4bd2 {
            background-color: #ccc;
            border-color: #ddd;
        }

        .th-bg4bd3 {
            background-color: #ccc;
            border-color: #ccc;
        }

        .th-bg4bd4 {
            background-color: #ccc;
            border-color: #aaa;
        }

        .th-bg4bd5 {
            background-color: #ccc;
            border-color: #feef6c;
        }

        .th-bg4bd6 {
            background-color: #ccc;
            border-color: #ff1d00;
        }

        .th-bg4bd7 {
            background-color: #ccc;
            border-color: #ccc;
        }

        .th-bg4bd8 {
            background-color: #ccc;
            border-color: #e84807;
        }

        .th-bg4bd9 {
            background-color: #ccc;
            border-color: #ff6600;
        }

        .th-bg4bd10 {
            background-color: #ccc;
            border-color: #C6DAF0;
        }

        .th-bg5 {
            background-color: #feef6c;
        }

        .th-bg5bd0 {
            background-color: #feef6c;
            border-color: #e84807;
        }

        .th-bg5bd1 {
            background-color: #feef6c;
            border-color: #eee;
        }

        .th-bg5bd2 {
            background-color: #feef6c;
            border-color: #ddd;
        }

        .th-bg5bd3 {
            background-color: #feef6c;
            border-color: #ccc;
        }

        .th-bg5bd4 {
            background-color: #feef6c;
            border-color: #aaa;
        }

        .th-bg5bd5 {
            background-color: #feef6c;
            border-color: #feef6c;
        }

        .th-bg5bd6 {
            background-color: #feef6c;
            border-color: #ff1d00;
        }

        .th-bg5bd7 {
            background-color: #feef6c;
            border-color: #ccc;
        }

        .th-bg5bd8 {
            background-color: #feef6c;
            border-color: #e84807;
        }

        .th-bg5bd9 {
            background-color: #feef6c;
            border-color: #ff6600;
        }

        .th-bg5bd10 {
            background-color: #feef6c;
            border-color: #C6DAF0;
        }

        .th-bg6 {
            background-color: #ff1d00;
        }

        .th-bg6bd0 {
            background-color: #ff1d00;
            border-color: #e84807;
        }

        .th-bg6bd1 {
            background-color: #ff1d00;
            border-color: #eee;
        }

        .th-bg6bd2 {
            background-color: #ff1d00;
            border-color: #ddd;
        }

        .th-bg6bd3 {
            background-color: #ff1d00;
            border-color: #ccc;
        }

        .th-bg6bd4 {
            background-color: #ff1d00;
            border-color: #aaa;
        }

        .th-bg6bd5 {
            background-color: #ff1d00;
            border-color: #feef6c;
        }

        .th-bg6bd6 {
            background-color: #ff1d00;
            border-color: #ff1d00;
        }

        .th-bg6bd7 {
            background-color: #ff1d00;
            border-color: #ccc;
        }

        .th-bg6bd8 {
            background-color: #ff1d00;
            border-color: #e84807;
        }

        .th-bg6bd9 {
            background-color: #ff1d00;
            border-color: #ff6600;
        }

        .th-bg6bd10 {
            background-color: #ff1d00;
            border-color: #C6DAF0;
        }

        .th-bg7 {
            background-color: #ddd;
        }

        .th-bg7bd0 {
            background-color: #ddd;
            border-color: #e84807;
        }

        .th-bg7bd1 {
            background-color: #ddd;
            border-color: #eee;
        }

        .th-bg7bd2 {
            background-color: #ddd;
            border-color: #ddd;
        }

        .th-bg7bd3 {
            background-color: #ddd;
            border-color: #ccc;
        }

        .th-bg7bd4 {
            background-color: #ddd;
            border-color: #aaa;
        }

        .th-bg7bd5 {
            background-color: #ddd;
            border-color: #feef6c;
        }

        .th-bg7bd6 {
            background-color: #ddd;
            border-color: #ff1d00;
        }

        .th-bg7bd7 {
            background-color: #ddd;
            border-color: #ccc;
        }

        .th-bg7bd8 {
            background-color: #ddd;
            border-color: #e84807;
        }

        .th-bg7bd9 {
            background-color: #ddd;
            border-color: #ff6600;
        }

        .th-bg7bd10 {
            background-color: #ddd;
            border-color: #C6DAF0;
        }

        .th-bg8 {
            background-color: #e84807;
        }

        .th-bg8bd0 {
            background-color: #e84807;
            border-color: #e84807;
        }

        .th-bg8bd1 {
            background-color: #e84807;
            border-color: #eee;
        }

        .th-bg8bd2 {
            background-color: #e84807;
            border-color: #ddd;
        }

        .th-bg8bd3 {
            background-color: #e84807;
            border-color: #ccc;
        }

        .th-bg8bd4 {
            background-color: #e84807;
            border-color: #aaa;
        }

        .th-bg8bd5 {
            background-color: #e84807;
            border-color: #feef6c;
        }

        .th-bg8bd6 {
            background-color: #e84807;
            border-color: #ff1d00;
        }

        .th-bg8bd7 {
            background-color: #e84807;
            border-color: #ccc;
        }

        .th-bg8bd8 {
            background-color: #e84807;
            border-color: #e84807;
        }

        .th-bg8bd9 {
            background-color: #e84807;
            border-color: #ff6600;
        }

        .th-bg8bd10 {
            background-color: #e84807;
            border-color: #C6DAF0;
        }

        .th-bg9 {
            background-color: #ff6600;
        }

        .th-bg9bd0 {
            background-color: #ff6600;
            border-color: #e84807;
        }

        .th-bg9bd1 {
            background-color: #ff6600;
            border-color: #eee;
        }

        .th-bg9bd2 {
            background-color: #ff6600;
            border-color: #ddd;
        }

        .th-bg9bd3 {
            background-color: #ff6600;
            border-color: #ccc;
        }

        .th-bg9bd4 {
            background-color: #ff6600;
            border-color: #aaa;
        }

        .th-bg9bd5 {
            background-color: #ff6600;
            border-color: #feef6c;
        }

        .th-bg9bd6 {
            background-color: #ff6600;
            border-color: #ff1d00;
        }

        .th-bg9bd7 {
            background-color: #ff6600;
            border-color: #ccc;
        }

        .th-bg9bd8 {
            background-color: #ff6600;
            border-color: #e84807;
        }

        .th-bg9bd9 {
            background-color: #ff6600;
            border-color: #ff6600;
        }

        .th-bg9bd10 {
            background-color: #ff6600;
            border-color: #C6DAF0;
        }

        .th-bg10 {
            background-color: #E8F1FB;
        }

        .th-bg10bd0 {
            background-color: #E8F1FB;
            border-color: #e84807;
        }

        .th-bg10bd1 {
            background-color: #E8F1FB;
            border-color: #eee;
        }

        .th-bg10bd2 {
            background-color: #E8F1FB;
            border-color: #ddd;
        }

        .th-bg10bd3 {
            background-color: #E8F1FB;
            border-color: #ccc;
        }

        .th-bg10bd4 {
            background-color: #E8F1FB;
            border-color: #aaa;
        }

        .th-bg10bd5 {
            background-color: #E8F1FB;
            border-color: #feef6c;
        }

        .th-bg10bd6 {
            background-color: #E8F1FB;
            border-color: #ff1d00;
        }

        .th-bg10bd7 {
            background-color: #E8F1FB;
            border-color: #ccc;
        }

        .th-bg10bd8 {
            background-color: #E8F1FB;
            border-color: #e84807;
        }

        .th-bg10bd9 {
            background-color: #E8F1FB;
            border-color: #ff6600;
        }

        .th-bg10bd10 {
            background-color: #E8F1FB;
            border-color: #C6DAF0;
        }

        .th-bd0 {
            border-color: #e84807;
        }

        .th-bd0bg0 {
            border-color: #e84807;
            background-color: #e84807;
        }

        .th-bd0bg1 {
            border-color: #e84807;
            background-color: #fff;
        }

        .th-bd0bg2 {
            border-color: #e84807;
            background-color: #f6f6f6;
        }

        .th-bd0bg3 {
            border-color: #e84807;
            background-color: #f3f6f7;
        }

        .th-bd0bg4 {
            border-color: #e84807;
            background-color: #ccc;
        }

        .th-bd0bg5 {
            border-color: #e84807;
            background-color: #feef6c;
        }

        .th-bd0bg6 {
            border-color: #e84807;
            background-color: #ff1d00;
        }

        .th-bd0bg7 {
            border-color: #e84807;
            background-color: #ddd;
        }

        .th-bd0bg8 {
            border-color: #e84807;
            background-color: #e84807;
        }

        .th-bd0bg9 {
            border-color: #e84807;
            background-color: #ff6600;
        }

        .th-bd0bg10 {
            border-color: #e84807;
            background-color: #E8F1FB;
        }

        .th-bd1 {
            border-color: #eee;
        }

        .th-bd1bg0 {
            border-color: #eee;
            background-color: #e84807;
        }

        .th-bd1bg1 {
            border-color: #eee;
            background-color: #fff;
        }

        .th-bd1bg2 {
            border-color: #eee;
            background-color: #f6f6f6;
        }

        .th-bd1bg3 {
            border-color: #eee;
            background-color: #f3f6f7;
        }

        .th-bd1bg4 {
            border-color: #eee;
            background-color: #ccc;
        }

        .th-bd1bg5 {
            border-color: #eee;
            background-color: #feef6c;
        }

        .th-bd1bg6 {
            border-color: #eee;
            background-color: #ff1d00;
        }

        .th-bd1bg7 {
            border-color: #eee;
            background-color: #ddd;
        }

        .th-bd1bg8 {
            border-color: #eee;
            background-color: #e84807;
        }

        .th-bd1bg9 {
            border-color: #eee;
            background-color: #ff6600;
        }

        .th-bd1bg10 {
            border-color: #eee;
            background-color: #E8F1FB;
        }

        .th-bd2 {
            border-color: #ddd;
        }

        .th-bd2bg0 {
            border-color: #ddd;
            background-color: #e84807;
        }

        .th-bd2bg1 {
            border-color: #ddd;
            background-color: #fff;
        }

        .th-bd2bg2 {
            border-color: #ddd;
            background-color: #f6f6f6;
        }

        .th-bd2bg3 {
            border-color: #ddd;
            background-color: #f3f6f7;
        }

        .th-bd2bg4 {
            border-color: #ddd;
            background-color: #ccc;
        }

        .th-bd2bg5 {
            border-color: #ddd;
            background-color: #feef6c;
        }

        .th-bd2bg6 {
            border-color: #ddd;
            background-color: #ff1d00;
        }

        .th-bd2bg7 {
            border-color: #ddd;
            background-color: #ddd;
        }

        .th-bd2bg8 {
            border-color: #ddd;
            background-color: #e84807;
        }

        .th-bd2bg9 {
            border-color: #ddd;
            background-color: #ff6600;
        }

        .th-bd2bg10 {
            border-color: #ddd;
            background-color: #E8F1FB;
        }

        .th-bd3 {
            border-color: #ccc;
        }

        .th-bd3bg0 {
            border-color: #ccc;
            background-color: #e84807;
        }

        .th-bd3bg1 {
            border-color: #ccc;
            background-color: #fff;
        }

        .th-bd3bg2 {
            border-color: #ccc;
            background-color: #f6f6f6;
        }

        .th-bd3bg3 {
            border-color: #ccc;
            background-color: #f3f6f7;
        }

        .th-bd3bg4 {
            border-color: #ccc;
            background-color: #ccc;
        }

        .th-bd3bg5 {
            border-color: #ccc;
            background-color: #feef6c;
        }

        .th-bd3bg6 {
            border-color: #ccc;
            background-color: #ff1d00;
        }

        .th-bd3bg7 {
            border-color: #ccc;
            background-color: #ddd;
        }

        .th-bd3bg8 {
            border-color: #ccc;
            background-color: #e84807;
        }

        .th-bd3bg9 {
            border-color: #ccc;
            background-color: #ff6600;
        }

        .th-bd3bg10 {
            border-color: #ccc;
            background-color: #E8F1FB;
        }

        .th-bd4 {
            border-color: #aaa;
        }

        .th-bd4bg0 {
            border-color: #aaa;
            background-color: #e84807;
        }

        .th-bd4bg1 {
            border-color: #aaa;
            background-color: #fff;
        }

        .th-bd4bg2 {
            border-color: #aaa;
            background-color: #f6f6f6;
        }

        .th-bd4bg3 {
            border-color: #aaa;
            background-color: #f3f6f7;
        }

        .th-bd4bg4 {
            border-color: #aaa;
            background-color: #ccc;
        }

        .th-bd4bg5 {
            border-color: #aaa;
            background-color: #feef6c;
        }

        .th-bd4bg6 {
            border-color: #aaa;
            background-color: #ff1d00;
        }

        .th-bd4bg7 {
            border-color: #aaa;
            background-color: #ddd;
        }

        .th-bd4bg8 {
            border-color: #aaa;
            background-color: #e84807;
        }

        .th-bd4bg9 {
            border-color: #aaa;
            background-color: #ff6600;
        }

        .th-bd4bg10 {
            border-color: #aaa;
            background-color: #E8F1FB;
        }

        .th-bd5 {
            border-color: #feef6c;
        }

        .th-bd5bg0 {
            border-color: #feef6c;
            background-color: #e84807;
        }

        .th-bd5bg1 {
            border-color: #feef6c;
            background-color: #fff;
        }

        .th-bd5bg2 {
            border-color: #feef6c;
            background-color: #f6f6f6;
        }

        .th-bd5bg3 {
            border-color: #feef6c;
            background-color: #f3f6f7;
        }

        .th-bd5bg4 {
            border-color: #feef6c;
            background-color: #ccc;
        }

        .th-bd5bg5 {
            border-color: #feef6c;
            background-color: #feef6c;
        }

        .th-bd5bg6 {
            border-color: #feef6c;
            background-color: #ff1d00;
        }

        .th-bd5bg7 {
            border-color: #feef6c;
            background-color: #ddd;
        }

        .th-bd5bg8 {
            border-color: #feef6c;
            background-color: #e84807;
        }

        .th-bd5bg9 {
            border-color: #feef6c;
            background-color: #ff6600;
        }

        .th-bd5bg10 {
            border-color: #feef6c;
            background-color: #E8F1FB;
        }

        .th-bd6 {
            border-color: #ff1d00;
        }

        .th-bd6bg0 {
            border-color: #ff1d00;
            background-color: #e84807;
        }

        .th-bd6bg1 {
            border-color: #ff1d00;
            background-color: #fff;
        }

        .th-bd6bg2 {
            border-color: #ff1d00;
            background-color: #f6f6f6;
        }

        .th-bd6bg3 {
            border-color: #ff1d00;
            background-color: #f3f6f7;
        }

        .th-bd6bg4 {
            border-color: #ff1d00;
            background-color: #ccc;
        }

        .th-bd6bg5 {
            border-color: #ff1d00;
            background-color: #feef6c;
        }

        .th-bd6bg6 {
            border-color: #ff1d00;
            background-color: #ff1d00;
        }

        .th-bd6bg7 {
            border-color: #ff1d00;
            background-color: #ddd;
        }

        .th-bd6bg8 {
            border-color: #ff1d00;
            background-color: #e84807;
        }

        .th-bd6bg9 {
            border-color: #ff1d00;
            background-color: #ff6600;
        }

        .th-bd6bg10 {
            border-color: #ff1d00;
            background-color: #E8F1FB;
        }

        .th-bd7 {
            border-color: #ccc;
        }

        .th-bd7bg0 {
            border-color: #ccc;
            background-color: #e84807;
        }

        .th-bd7bg1 {
            border-color: #ccc;
            background-color: #fff;
        }

        .th-bd7bg2 {
            border-color: #ccc;
            background-color: #f6f6f6;
        }

        .th-bd7bg3 {
            border-color: #ccc;
            background-color: #f3f6f7;
        }

        .th-bd7bg4 {
            border-color: #ccc;
            background-color: #ccc;
        }

        .th-bd7bg5 {
            border-color: #ccc;
            background-color: #feef6c;
        }

        .th-bd7bg6 {
            border-color: #ccc;
            background-color: #ff1d00;
        }

        .th-bd7bg7 {
            border-color: #ccc;
            background-color: #ddd;
        }

        .th-bd7bg8 {
            border-color: #ccc;
            background-color: #e84807;
        }

        .th-bd7bg9 {
            border-color: #ccc;
            background-color: #ff6600;
        }

        .th-bd7bg10 {
            border-color: #ccc;
            background-color: #E8F1FB;
        }

        .th-bd8 {
            border-color: #e84807;
        }

        .th-bd8bg0 {
            border-color: #e84807;
            background-color: #e84807;
        }

        .th-bd8bg1 {
            border-color: #e84807;
            background-color: #fff;
        }

        .th-bd8bg2 {
            border-color: #e84807;
            background-color: #f6f6f6;
        }

        .th-bd8bg3 {
            border-color: #e84807;
            background-color: #f3f6f7;
        }

        .th-bd8bg4 {
            border-color: #e84807;
            background-color: #ccc;
        }

        .th-bd8bg5 {
            border-color: #e84807;
            background-color: #feef6c;
        }

        .th-bd8bg6 {
            border-color: #e84807;
            background-color: #ff1d00;
        }

        .th-bd8bg7 {
            border-color: #e84807;
            background-color: #ddd;
        }

        .th-bd8bg8 {
            border-color: #e84807;
            background-color: #e84807;
        }

        .th-bd8bg9 {
            border-color: #e84807;
            background-color: #ff6600;
        }

        .th-bd8bg10 {
            border-color: #e84807;
            background-color: #E8F1FB;
        }

        .th-bd9 {
            border-color: #ff6600;
        }

        .th-bd9bg0 {
            border-color: #ff6600;
            background-color: #e84807;
        }

        .th-bd9bg1 {
            border-color: #ff6600;
            background-color: #fff;
        }

        .th-bd9bg2 {
            border-color: #ff6600;
            background-color: #f6f6f6;
        }

        .th-bd9bg3 {
            border-color: #ff6600;
            background-color: #f3f6f7;
        }

        .th-bd9bg4 {
            border-color: #ff6600;
            background-color: #ccc;
        }

        .th-bd9bg5 {
            border-color: #ff6600;
            background-color: #feef6c;
        }

        .th-bd9bg6 {
            border-color: #ff6600;
            background-color: #ff1d00;
        }

        .th-bd9bg7 {
            border-color: #ff6600;
            background-color: #ddd;
        }

        .th-bd9bg8 {
            border-color: #ff6600;
            background-color: #e84807;
        }

        .th-bd9bg9 {
            border-color: #ff6600;
            background-color: #ff6600;
        }

        .th-bd9bg10 {
            border-color: #ff6600;
            background-color: #E8F1FB;
        }

        .th-bd10 {
            border-color: #C6DAF0;
        }

        .th-bd10bg0 {
            border-color: #C6DAF0;
            background-color: #e84807;
        }

        .th-bd10bg1 {
            border-color: #C6DAF0;
            background-color: #fff;
        }

        .th-bd10bg2 {
            border-color: #C6DAF0;
            background-color: #f6f6f6;
        }

        .th-bd10bg3 {
            border-color: #C6DAF0;
            background-color: #f3f6f7;
        }

        .th-bd10bg4 {
            border-color: #C6DAF0;
            background-color: #ccc;
        }

        .th-bd10bg5 {
            border-color: #C6DAF0;
            background-color: #feef6c;
        }

        .th-bd10bg6 {
            border-color: #C6DAF0;
            background-color: #ff1d00;
        }

        .th-bd10bg7 {
            border-color: #C6DAF0;
            background-color: #ddd;
        }

        .th-bd10bg8 {
            border-color: #C6DAF0;
            background-color: #e84807;
        }

        .th-bd10bg9 {
            border-color: #C6DAF0;
            background-color: #ff6600;
        }

        .th-bd10bg10 {
            border-color: #C6DAF0;
            background-color: #E8F1FB;
        }

        .th-bg5lt10 {
            background-color: #fef17b;
        }

        .th-bg5dk10 {
            background-color: #e5d761;
        }

        .th-bg5lt20 {
            background-color: #fef289;
        }

        .th-bg5dk20 {
            background-color: #cbbf56;
        }

        .th-bg5lt30 {
            background-color: #fef498;
        }

        .th-bg5dk30 {
            background-color: #b2a74c;
        }

        .th-bg5lt40 {
            background-color: #fef5a7;
        }

        .th-bg5dk40 {
            background-color: #988f41;
        }

        .th-bg5lt50 {
            background-color: #fff7b6;
        }

        .th-bg5dk50 {
            background-color: #7f7836;
        }

        .th-bg5lt60 {
            background-color: #fff9c4;
        }

        .th-bg5dk60 {
            background-color: #66602b;
        }

        .th-bg5lt70 {
            background-color: #fffad3;
        }

        .th-bg5dk70 {
            background-color: #4c4820;
        }

        .th-bg5lt80 {
            background-color: #fffce2;
        }

        .th-bg5dk80 {
            background-color: #333016;
        }

        .th-bg5lt90 {
            background-color: #fffdf0;
        }

        .th-bg5dk90 {
            background-color: #19180b;
        }

        .th-bg5lt100 {
            background-color: white;
        }

        .th-bg5dk100 {
            background-color: black;
        }

        .th-bk-main {
            background: #e84807;
            border-color: #e84807;
            color: #fff;
            cursor: pointer;
        }

        .th-bk-main:hover {
            color: #fff;
            background: #e84807;
        }

        .th-bk-main:active {
            color: #fff;
            background: #e84807;
        }

        .th-bk-error {
            background: #ff1d00;
            border-color: #ff1d00;
            color: #fff;
            cursor: pointer;
        }

        .th-bk-error:hover {
            color: #fff;
            background: #ff341a;
        }

        .th-bk-error:active {
            color: #fff;
            background: #e61a00;
        }

        .th-bk-help1 {
            background: #e84807;
            border-color: #e84807;
            color: #fff;
            cursor: pointer;
        }

        .th-bk-help1:hover {
            color: #fff;
            background: #e84807;
        }

        .th-bk-help1:active {
            color: #fff;
            background: #e84807;
        }

        .th-bk-help2 {
            background: #ff6600;
            border-color: #ff6600;
            color: #fff;
            cursor: pointer;
        }

        .th-bk-help2:hover {
            color: #fff;
            background: #ff751a;
        }

        .th-bk-help2:active {
            color: #fff;
            background: #e65c00;
        }

        .th-bk-disable {
            background: #ccc;
            border-color: #ccc;
            color: #fff;
            cursor: not-allowed;
        }

        .th-bk-disable:hover {
            color: #fff;
            background: #ccc;
            cursor: not-allowed;
        }

        .th-bk-disable:active {
            color: #fff;
        }

        .th-bk-main-gh {
            background: #fff;
            border-color: #e84807;
            color: #e84807;
            cursor: pointer;
        }

        .th-bk-main-gh:hover {
            color: #fff;
            background: #e84807;
        }

        .th-bk-main-gh:active {
            color: #fff;
            background: #e84807;
        }

        .th-bk-error-gh {
            background: #fff;
            border-color: #ff1d00;
            color: #ff1d00;
            cursor: pointer;
        }

        .th-bk-error-gh:hover {
            color: #fff;
            background: #ff341a;
        }

        .th-bk-error-gh:active {
            color: #fff;
            background: #e61a00;
        }

        .th-bk-help1-gh {
            background: #fff;
            border-color: #e84807;
            color: #e84807;
            cursor: pointer;
        }

        .th-bk-help1-gh:hover {
            color: #fff;
            background: #e84807;
        }

        .th-bk-help1-gh:active {
            color: #fff;
            background: #e84807;
        }

        .th-bk-help2-gh {
            background: #fff;
            border-color: #ff6600;
            color: #ff6600;
            cursor: pointer;
        }

        .th-bk-help2-gh:hover {
            color: #fff;
            background: #ff751a;
        }

        .th-bk-help2-gh:active {
            color: #fff;
            background: #e65c00;
        }

        .th-bk-disable-gh {
            background: #fff;
            border-color: #ccc;
            color: #ccc;
            cursor: not-allowed;
        }

        .th-bk-disable-gh:hover {
            color: #ccc;
        }

        .th-bk-disable-gh:active {
            color: #ccc;
        }

        a:hover {
            text-decoration: none;
        }

        .th-bg3 {
            background-color: #e84807 !important;
        }

        .gr-main {
            display: none;
        }

        .bodyBg {
            background: #eee !important;
        }

        .md-message-layout {
            zoom: 1;
            width: 1205px;
            overflow: hidden;
            margin: 30px auto 0;
        }

        .md-message-layout_tab {
            width: 264px !important;
            background-color: #fff !important;
            float: left;
        }

        .md-message-layout_tab .um-message-tab {
            width: 264px;
            height: 50px;
            text-align: left;
        }

        .md-message-layout_tab .um-message-tab-view_item {
            width: 265px !important;
            height: 50px;
            line-height: 50px;
            text-align: left;
            padding-left: 20px;
            box-sizing: border-box;
            background-color: #fff;
            border-bottom: 1px solid #dddddd !important;
            border-top: none !important;
            font-size: 14px;
            color: #333;
            zoom: 1;
        }

        .md-message-layout_tab .um-message-tab-view_item_msgnum {
            display: block;
            float: right;
            height: 16px;
            width: auto;
            min-width: 14px !important;
            line-height: 16px;
            text-align: center;
            margin: 17px 23px 0 0;
            padding: 0 1px;
            color: #fff;
            font-size: 12px;
            background-color: #e10e01;
            -webkit-border-radius: 8px;
            -moz-border-radius: 8px;
            -ms-border-radius: 8px;
            -o-border-radius: 8px;
            border-radius: 8px;
            position: static;
        }

        .md-message-layout_tab .um-message-tab .z-crt {
            background-color: #e84807;
            color: #fff;
        }

        .md-message-layout_lst {
            width: 920px;
            float: left;
            background-color: transparent !important;
        }

        .md-message-layout_lst .md-message-list {
            width: 918px;
            margin: 0 20px;
            background: #FFFFFF;
            border: 1px solid #DDDDDD;
        }

        .md-message-layout_lst .md-message-list .ux-message-list-view {
            padding-bottom: 60px;
        }

        .md-message-layout_lst .md-message-list .ux-message-list-view .old-msg {
            color: #999;
        }

        .md-message-layout_lst .md-message-list .ux-message-list-view .old-msg a {
            color: #999;
        }

        .md-message-layout_lst .md-message-list .ux-message-list-view .old-msg a:hover {
            color: #e84807;
        }

        .md-message-layout_lst .md-message-list .ux-message-list-view_itm {
            width: 880px;
            margin: 0 auto;
            height: auto !important;
            line-height: 59px;
            font-size: 14px;
            color: #333;
            padding: 0;
            border-bottom: 1px solid #DDDDDD;
            zoom: 1;
            overflow: hidden;
        }

        .md-message-layout_lst .md-message-list .ux-message-list-view_itm_body {
            display: block;
            display: -webkit-box;
            float: left;
            width: 700px;
            margin: 20px 0;
            max-height: 112px;
            overflow: hidden;
            line-height: 22px;
            text-overflow: ellipsis;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            word-break: break-all;
        }

        .md-message-layout_lst .md-message-list .ux-message-list-view_itm_body a {
            color: #333;
        }

        .md-message-layout_lst .md-message-list .ux-message-list-view_itm_body a:hover {
            color: #e84807;
        }

        .md-message-layout_lst .md-message-list .ux-message-list-view_itm_time {
            display: block;
            display: -webkit-box;
            float: right;
            line-height: 64px;
        }

        .md-message-layout_lst .md-message-list .ux-message-list-view .ux-pager {
            text-align: right;
            margin-right: 20px;
        }

        .m-private-message {
            position: absolute;
            top: 239px;
            left: 50%;
            margin-left: -602.5px;
            z-index: 2;
        }

        .m-private-message .private-message-link {
            display: block;
            display: -webkit-box;
            width: 265px;
            cursor: pointer;
        }

        .m-private-message_tab {
            width: 265px;
            height: 50px;
            line-height: 50px;
            text-align: left;
            padding-left: 20px;
            box-sizing: border-box;
            background-color: #fff;
            border: 1px solid #dddddd !important;
            font-size: 14px;
            color: #333;
            zoom: 1;
        }

        .m-private-message_tab em {
            float: right;
            height: 16px;
            min-width: 14px;
            line-height: 16px;
            text-align: center;
            margin: 17px 23px 0 0;
            padding: 0 1px;
            color: #fff;
            font-size: 12px;
            background-color: #e10e01;
            -webkit-border-radius: 8px;
            -moz-border-radius: 8px;
            -ms-border-radius: 8px;
            -o-border-radius: 8px;
            border-radius: 8px;
        }
    </style>
</head>

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
                            <i class="line" style="padding-top: 2%;"></i>
                            <a data-index="消息" class="mes f-pr f-cb j-nav-mescenter"
                               href="messageT.jsp" title="查看更多消息" target="_blank">
                                <span>消息</span>
                                <em class="num hidddenClass j-nav-msgnum">0</em>
                            </a>
                            <div class="u-mystudy f-pr f-cb f-fr">
                                <a class="mystudy nitem f-f0" id="j-nav-my-class" data-index="我的进度" target="_self"
                                   href="forum.jsp" hidefocus="true">讨论区</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<!--中部-->
<div class="md-message-layout">
    <!--左部-->
    <div class="md-message-layout_tab">
        <div class="um-message-tab">
            <div class="um-message-tab-view" style="border-top: #ddd 1px solid">
                <a class="um-message-tab-view_item " style="border-left: #ddd 1px solid;border-top: #ddd 1px solid" href="messageT.jsp" style=" color: #343d42;">教师提醒</a>
                <a class="um-message-tab-view_item z-crt" style="border-left: #ddd 1px solid" href="" style=" color: #343d42;">导师提醒</a>
                <a class="um-message-tab-view_item" style="border-left: #ddd 1px solid" href="messageC.jsp" style=" color: #343d42;">互动提醒</a>
            </div>
        </div>
    </div>
    <!--中部-->
    <div class="md-message-layout_lst">
        <div class="md-message-list">
            <div class="ux-message-list-view">

                <ul class="ux-message-list-view_ul">
                    <!--Regular list-->
                    <li class="ux-message-list-view_itm  old-msg">
                        <span class="ux-message-list-view_itm_body">
                            <a target="_blank" href="#">【通知】通知内容</a></span>
                        <span class="f-ib ux-message-list-view_itm_time"> 4月11日19:19</span>
                    </li>

                </ul>
                <div style="display: none;">
                    <ul class="ux-pager z-hdn">
                        <li class="ux-pager_btn ux-pager_btn__prev">
                            <a class="th-bk-disable-gh">上一页</a>
                        </li>
                        <li class="ux-pager_itm">
                            <a class="th-bk-main">1</a>
                        </li>
                        <li class="ux-pager_btn ux-pager_btn__next">
                            <a class="th-bk-disable-gh">下一页</a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
</div>

<script></script>
<div class="g-ft" id="j-footer" style="position: absolute;bottom:0;">
    <div class="m-yktFoot" id="j-yktfoot" style="height: 50px;margin-top: 30px;margin-bottom: 0;padding-bottom: 0">
        <div class="g-flow ftwrapper f-cb">
            <p class="txt f-fs0" style="text-align: center;position: relative;top:50%;transform: translateY(60%)">
                山东省威海市环翠区文化西路2号&nbsp;&nbsp;&nbsp;&nbsp;邮政编码：264209&nbsp;&nbsp;&nbsp;&nbsp;哈尔滨工业大学（威海）版权所有
            </p>
        </div>
    </div>
</div>
</body>
</html>