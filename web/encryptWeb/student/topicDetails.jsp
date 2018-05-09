<%@page contentType="text/html;charset=utf-8" %>
<html>
<head>
    <title>主题详情</title>
    <!--样式-->
    <link rel="stylesheet" href="static/core_e47b1ded06977727b0dc00ac5fae1259.css">
    <link rel="stylesheet" href="static/pt_newpages_course_learn.css">
    <style type="text/css">
        .ux-editor-video-uploadUI .ux-editor-imagemuti-uploadProgress {
            margin-top: 12px;
        }

        .ux-editor-video-uploadUI .success-queue_wrap {
            line-height: 1;
            font-size: 12px;
            margin-top: 12px;
        }

        .ux-editor-video-uploadUI .success-queue_wrap .success-queue {
            margin-top: 12px;
        }

        .ux-editor-video-uploadUI .success-queue_wrap .file-name {
            width: 110px;
        }

        .ux-editor-video-uploadUI .success-queue_wrap .file-status {
            text-align: right;
        }

        .ux-editor-video-uploadUI .success-queue_wrap .file-status .error {
            color: #fa5b5b;
        }


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

        .ux-pager .th-bk-main-gh {
            color: #859295
        }

        .ux-pager .th-bk-main-gh:hover {
            color: #fff
        }
        .ux-check .check_box {
            display: inline-block;
            position: relative;
            overflow: hidden;
            text-align: center;
            vertical-align: middle;
            margin-bottom: 2px;
            height: 14px;
            width: 14px;
            line-height: 14px;
            border-radius: 2px;
            box-sizing: border-box
        }

        .ux-check .check_box .ux-icon-check {
            font-size: 14px;
            display: inline-block;
            -webkit-transform: scale(0.7);
            transform: scale(0.7)
        }

        .ux-check_unchecked {
            border: 1px solid #ccc
        }

        .ux-check.z-chk .check_box {
            background: #e84807;
            border: 1px solid #e84807
        }

        .ux-check.z-chk .check_box .ux-icon {
            display: inline-block;
            font-size: 14px;
            color: white
        }

        .ux-check.z-part .check_box .ux-icon:before {
            content: "\f0c8"
        }

        .ux-check.z-dis {
            cursor: not-allowed
        }

        .ux-check.z-dis .check_box {
            background: #ccc;
            border: 1px solid #ccc
        }

        .ux-dropdown-check_listview li {
            cursor: pointer;
            padding: 0 12px
        }

        .ux-dropdown-check_listview li:hover {
            background-color: #e6eaeb
        }

        .ux-dropdown-check .ux-icon-caret-down, .ux-dropdown-check .ux-icon-caret-up {
            vertical-align: middle;
            line-height: 32px
        }

        .ux-dropdown-check.z-dis .ux-dropdown_hd .ux-dropdown_cnt {
            cursor: not-allowed;
            filter: alpha(opacity=65);
            opacity: 0.65
        }

        .ux-dropdown-check .ux-tip-error {
            position: absolute;
            left: 160px;
            white-space: nowrap;
            top: 10px
        }

        /*# sourceMappingURL=component.css.map */
        .ux-table {
            overflow: hidden;
            font-size: 14px;
        }

        .ux-table .ux-dropdown-check {
            width: inherit;
        }

        .ux-table .ux-dropdown-check .ux-dropdown-check_hd {
            width: 105px;
            min-width: inherit;
        }

        .ux-table .ux-dropdown-check .ux-dropdown-check_listview {
            text-align: left;
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

        .ux-table table thead .head th .sortbtn {
            color: #e84807;
            position: relative;
            top: 0;
            left: -2px;
        }

        .ux-table table thead .head th .sortbtn:after {
            content: '';
            display: inline-block;
            margin-left: 5px;
        }

        .ux-table table thead .head th .sortbtn.default:after {
            background-image: url(static/default.png);
            background-position: -7px 0;
            width: 7px;
            height: 11px;
        }

        .ux-table table thead .head th .sortbtn.up:after {
            background-image: url(static/sortup.png);
            background-position: -7px 0;
            width: 7px;
            height: 11px;
        }

        .ux-table table thead .head th .sortbtn.down:after {
            background-image: url(static/sortdown.png);
            background-position: 0 0;
            width: 7px;
            height: 11px;
        }

        .ux-table table thead .head th .sortbtn.default:after, .ux-table table thead .head th .sortbtn.down:after, .ux-table table thead .head th .sortbtn.up:after {
            -webkit-transform: scale(1.2, 1.2);
            -moz-transform: scale(1.2, 1.2);
            transform: scale(1.2, 1.2);
        }

        .ux-table table tbody tr {
            border-bottom: 1px dashed #d9ddde;
        }

        .ux-table table tbody tr td {
            color: #52585a;
            padding: 20px 15px;
            text-align: center;
        }

        .ux-table .ux-pager {
            text-align: right;
        }

        .ux-table-border table thead .head {
            border: 1px solid #ddd;
        }

        .ux-table-border table thead .head .th-more {
            padding: 0 15px 0 0;
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

        /*# sourceMappingURL=component.css.map */
        .ux-richeditor-video-selector-dialog .zbar .zttl {
            width: 100px;
            height: 26px;
            line-height: 26px;
            font-size: 20px !important;
        }

        .ux-richeditor-video-selector-dialog .m-video-selector-header {
            height: 40px;
            line-height: 40px;
            margin-bottom: 6px;
        }

        .ux-richeditor-video-selector-dialog .m-video-selector-header-goback {
            font-size: 16px;
        }

        .ux-richeditor-video-selector-dialog .m-video-selector-header-goback-a {
            color: #e84807;
            cursor: pointer;
        }

        .ux-richeditor-video-selector-dialog .m-video-selector-header-goback-gap {
            display: inline-block;
            margin-left: 15px;
        }

        .ux-richeditor-video-selector-dialog .m-video-selector-header-range {
            height: 40px;
            line-height: 40px;
        }

        .ux-richeditor-video-selector-dialog .m-video-selector-header-range-icon {
            height: 16px;
            width: 16px;
            margin-left: 15px;
            margin-right: 7px;
            display: inline-block;
            position: relative;
            top: -14px;
            background-image: url(//yc.stu.126.net/res/component-editor/images/dir.png?dcf03667f27084f783af05e5fe7c2554);
            background-size: cover;
        }

        .ux-richeditor-video-selector-dialog .m-video-selector-header-range-name {
            display: inline-block;
            width: 100px;
            height: 40px;
            line-height: 40px;
            font-size: 16px;
            text-align: left;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        .ux-richeditor-video-selector-dialog .m-video-selector-header .ux-search {
            position: absolute;
            right: 40px;
        }

        .ux-richeditor-video-selector-dialog .m-video-selector-header > * {
            display: inline-block;
            vertical-align: middle;
        }

        .ux-richeditor-video-selector-dialog .m-video-selector-table::-webkit-scrollbar {
            display: none;
        }

        .ux-richeditor-video-selector-dialog .m-video-selector-table {
            height: 240px;
            width: 620px;
            overflow-y: scroll;
            table-layout: auto !important;
            border-collapse: separate !important;
            min-height: 0px !important;
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

        .ux-richeditor-video-selector-dialog .m-video-selector-table table tbody tr .td-name {
            height: 39px;
            width: 207px;
            line-height: 39px;
            text-align: left;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        .ux-richeditor-video-selector-dialog .m-video-selector-table table tbody tr .td-name-icon-dir {
            display: inline-block;
            height: 16px;
            width: 16px;
            margin-left: 10px;
            margin-right: 14px;
            background-size: cover;
            background-image: url(//yc.stu.126.net/res/component-editor/images/dir.png?dcf03667f27084f783af05e5fe7c2554);
            vertical-align: middle;
        }

        .ux-richeditor-video-selector-dialog .m-video-selector-table table tbody tr .td-name-icon-video {
            display: inline-block;
            height: 16px;
            width: 16px;
            margin-left: 10px;
            margin-right: 14px;
            background-image: url(//yc.stu.126.net/res/component-editor/images/articleEditor.png?1dda4d1ced2a0fe4ac1d75cdc3c5a2ea);
            background-position: -480px 0.1px;
            vertical-align: middle;
        }

        .ux-richeditor-video-selector-dialog .m-video-selector-table table tbody tr .td-time, .ux-richeditor-video-selector-dialog .m-video-selector-table table tbody tr .td-status {
            font-size: 12px;
        }

        .ux-richeditor-video-selector-dialog .m-video-selector-table table tbody tr:hover {
            background-color: #F3F6F7;
        }

        .ux-richeditor-video-selector-dialog .m-video-selector-table table tbody tr.selected {
            background-color: #e84807;
        }

        .ux-richeditor-video-selector-dialog .m-video-selector-table table tbody tr.selected td {
            color: white;
        }

        .ux-richeditor-video-selector-dialog .m-video-selector-table table tbody tr.disable td {
            color: #C9C9C9;
        }

        .ux-richeditor-video-selector-dialog .m-video-selector-table table tbody tr.disable .td-name-icon-video {
            background-image: url(static/articleEditor.png);
            background-position: -480px -41px;
        }

        .ux-richeditor-video-selector-dialog .m-video-selector-table .ux-commonempty {
            position: absolute;
            left: 0;
            right: 0;
        }

        .ux-richeditor-video-selector-dialog .m-video-selector-table .tip {
            width: 100px;
            margin: 0 auto;
            font-size: 16px;
            text-align: center;
        }

        .ux-richeditor-video-selector-dialog .m-video-selector-table .to-lib {
            width: 100px;
            margin: 0 auto;
            color: #e84807;
            font-size: 14px;
            cursor: pointer;
            text-align: center;
        }

        .ux-richeditor-video-selector-dialog .m-video-selector-footer {
            position: relative;
            padding-top: 10px;
        }

        .ux-richeditor-video-selector-dialog .m-video-selector-footer hr {
            margin-top: 10px;
            margin-bottom: 20px;
        }

        .ux-richeditor-video-selector-dialog .m-video-selector-footer-button {
            width: 160px;
            height: 40px;
            position: absolute;
            right: 120px;
        }

        .ux-richeditor-video-selector-dialog .m-video-selector-footer-button .ux-btn {
            width: 160px;
            height: 40px;
            line-height: 40px;
            font-size: 14px;
            background-color: #e84807;
            color: white;
        }

        .ux-richeditor-video-selector-dialog .m-video-selector-footer-button .ux-btn.th-bk-disable {
            background-color: #CCCCCC;
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

        .ux-richeditor .zdlitm .list, .ux-richeditor .zitm .list {
            display: block;
            line-height: 153%;
            font-size: 14px;
            color: #333;
            padding: 3px 10px;
            width: auto;
            cursor: pointer;
            overflow: hidden;
            text-align: left;
            font-family: '微软雅黑';
        }

        .ux-richeditor .zdlitm .list:hover, .ux-richeditor .zitm .list:hover {
            background-color: #f1f1f1;
        }

        .ux-richeditor .z-i-code.zdlitm {
            width: 55px;
            background-position: 53px -49px;
        }

        .ux-richeditor .z-i-code.zdlitm.js-disabled {
            background-position: 53px -74px;
        }

        .ux-richeditor .z-i-size.zdlitm {
            width: 32px;
            background-position: 32px -49px;
        }

        .ux-richeditor .z-i-size.zdlitm.js-disabled {
            background-position: 32px -74px;
        }

        .ux-richeditor .z-i-paragraph.zdlitm {
            width: 32px;
            background-position: 32px -49px;
        }

        .ux-richeditor .z-i-paragraph.zdlitm.js-disabled {
            background-position: 32px -74px;
        }

        .ux-richeditor .z-i-paragraph .edu-for-h1 {
            font-size: 24px;
            line-height: 1.5;
            font-weight: bold;
        }

        .ux-richeditor .z-i-paragraph .edu-for-h2 {
            font-size: 20px;
            line-height: 1.5;
            font-weight: bold;
        }

        .ux-richeditor .z-i-paragraph .edu-for-h3 {
            font-size: 18px;
            line-height: 1.5;
            font-weight: bold;
        }

        .ux-richeditor .z-i-paragraph .edu-for-h4 {
            font-size: 16px;
            line-height: 1.5;
            font-weight: bold;
        }

        .ux-richeditor .colorbtn {
            width: 32px;
        }

        .ux-richeditor .colorbtn .zicn {
            width: 32px;
        }

        .ux-richeditor .colorbtn .colordown {
            display: none;
            position: absolute;
            top: 22px;
            left: 0;
            z-index: 100;
        }

        .ux-richeditor .ux-ecolorpicker {
            padding: 3px;
            border: 1px solid #d1d2d4;
            background-color: #f1f1f1;
            width: 132px;
        }

        .ux-richeditor .ux-ecolorpicker .clear {
            display: block;
            color: #666;
            font-size: 13px;
            border: 1px solid #f1f1f1;
            text-align: center;
            width: 130px;
            height: 24px;
            line-height: 24px;
        }

        .ux-richeditor .ux-ecolorpicker .clear:hover, .ux-richeditor .ux-ecolorpicker .clear.selected {
            border: 1px solid #aaa;
        }

        .ux-richeditor .ux-ecolorpicker .colors {
            height: 88px;
        }

        .ux-richeditor .ux-ecolorpicker .colorbtn {
            float: left;
            width: 20px;
            height: 20px;
            padding: 0;
            border: 1px solid #f1f1f1;
        }

        .ux-richeditor .ux-ecolorpicker .colorbtn:hover, .ux-richeditor .ux-ecolorpicker .colorbtn.selected {
            border: 1px solid #aaa;
        }

        .ux-richeditor .ux-ecolorpicker .colorbtn span {
            display: block;
            width: 14px;
            height: 14px;
            margin: 3px;
        }

        .ux-richeditor-link {
            width: 322px;
            padding: 0 20px 20px 20px;
        }

        .ux-richeditor-link .row {
            width: 338px;
            margin: 10px 0;
        }

        .ux-richeditor-link .txtwrap {
            border: 1px solid #ddd;
            width: 320px;
            height: 30px;
        }

        .ux-richeditor-link .txtwrap .title {
            color: #ccc;
            height: 30px;
            width: 30px;
            line-height: 30px;
            text-align: center;
        }

        .ux-richeditor-link .txtwrap .ipt {
            width: 280px;
            padding: 5px;
            font-size: 12px;
            line-height: 20px;
            background: #fafafa;
            border: none;
            overflow-y: auto;
            overflow-x: hidden;
            resize: none;
        }

        .ux-richeditor-link .btns {
            margin-top: 10px;
        }

        .ux-richeditor-link .btns .u-btn {
            margin-right: 0;
            margin-left: 10px;
        }

        .ux-richeditor-link .error {
            color: red;
            line-height: 1.4;
        }

        .ux-richeditor-uploadCard {
            text-align: left;
            width: 405px;
            padding: 0 20px 20px 20px;
        }

        .ux-richeditor-uploadCard .tab {
            border-bottom: 1px solid #e9e9e9;
            margin-bottom: 20px;
        }

        .ux-richeditor-uploadCard .tab:hover {
            text-decoration: none;
        }

        .ux-richeditor-uploadCard .tabitem span {
            line-height: 30px;
            text-align: center;
            font-size: 12px;
            padding: 0 5px;
        }

        .ux-richeditor-uploadCard .j-selected {
            background: #ddd;
        }

        .ux-richeditor-uploadCard .txtwrap {
            border: 1px solid #ddd;
            width: 320px;
            height: 30px;
            margin-right: 10px;
        }

        .ux-richeditor-uploadCard .txtwrap .txt {
            width: 310px;
            padding: 5px;
            font-size: 12px;
            line-height: 20px;
            background: #fafafa;
            border: none;
            overflow-y: auto;
            overflow-x: hidden;
            resize: none;
        }

        .ux-richeditor-uploadCard .hideimage {
            width: 0px;
            height: 0px;
            visibility: hidden;
        }

        .ux-richeditor-uploadCard .uploadcon, .webcon {
            margin-bottom: 20px;
        }

        .ux-richeditor-uploadCard .uploadcon {
            height: 32px;
        }

        .ux-richeditor-uploadCard .choose_file {
            height: 32px;
            width: 90px;
        }

        .ux-richeditor-uploadCard .desc {
            color: #ccc;
        }

        .ux-richeditor-uploadCard .error {
            color: red;
            line-height: 1.4;
        }

        .ux-eduEditorDialog_ca .zcnt {
            padding: 0 !important;
        }

        .ux-richeditor-insertCourse {
            height: 185px;
            width: 610px;
        }

        .ux-richeditor-insertCourse_sp {
            font-size: 14px;
            color: #2A2A2A;
            line-height: 26px;
        }

        .ux-richeditor-insertCourse_txtwrap {
            display: inline-block;
            height: auto;
            border: none;
            margin-top: 15px;
        }

        .ux-richeditor-insertCourse_txtwrap .ipt {
            box-sizing: border-box;
            width: 608px;
            line-height: 34px;
            height: 34px;
            padding: 6px 12px;
            border: 1px solid #ddd;
            color: #333;
            font-size: 14px;
            background: #fff;
            border-radius: 2px;
        }

        .ux-richeditor-insertCourse_list {
            top: 33px;
            left: 0;
            right: 0;
            background: #FFFFFF;
            border: 1px solid #DDDDDD;
        }

        .ux-richeditor-insertCourse_sitem {
            height: 34px;
            line-height: 34px;
            font-size: 14px;
            color: #666;
            cursor: pointer;
        }

        .ux-richeditor-insertCourse_sitem:hover {
            background: #f6f6f6;
        }

        .ux-richeditor-insertCourse_error {
            font-size: 12px;
            color: #FF1D00;
            margin: 5px;
        }

        .ux-richeditor-insertCourse_icon {
            width: 14px;
            height: 14px;
            border-radius: 14px;
            background: #FF1D00;
            color: #fff;
            font-size: 10px;
            margin-right: 3px;
        }

        .syntaxhighlighter a, .syntaxhighlighter div, .syntaxhighlighter code, .syntaxhighlighter, .syntaxhighlighter td, .syntaxhighlighter tr, .syntaxhighlighter tbody, .syntaxhighlighter thead, .syntaxhighlighter caption, .syntaxhighlighter textarea {
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

        .syntaxhighlighter {
            width: 100%;
            position: relative !important;
            border: 1px solid #ccc !important;
            border-radius: 4px !important;
            border-collapse: separate !important;
            background-color: #f5f5f5 !important;
            margin: .3em 0;
        }

        .syntaxhighlighter.source {
            overflow: hidden !important;
        }

        .syntaxhighlighter .italic {
            font-style: italic !important;
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

        .syntaxhighlighter.show {
            display: block !important;
        }

        .syntaxhighlighter.collapsed .toolbar {
            font-size: 1em !important;
            position: static !important;
            width: auto !important;
            color: blue !important;
            background: #FFF !important;
            border: 1px solid #6ce26c !important;
            padding: 0.1em 0.8em 0 !important;
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

        .syntaxhighlighter.ie {
            font-size: 0.9em !important;
            padding: 1px 0 !important;
            width: auto;
        }

        .syntaxhighlighter.ie .toolbar {
            line-height: 8px !important;
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

        .syntaxhighlighter .gutter .line.highlighted {
            background-color: #6ce26c !important;
            color: #FFF !important;
        }

        .syntaxhighlighter.collapsed {
            overflow: visible !important;
        }

        .syntaxhighlighter .script {
            font-weight: 700 !important;
            color: #ff7800 !important;
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

        .syntaxhighlighter.printing .keyword, .syntaxhighlighter .keyword {
            color: #ff7800 !important;
            font-weight: 700 !important;
        }

        .syntaxhighlighter.printing .preprocessor, .syntaxhighlighter.printing .color1, .syntaxhighlighter.printing .color1 a, .syntaxhighlighter .preprocessor, .syntaxhighlighter .color1, .syntaxhighlighter .color1 a {
            color: gray !important;
        }

        .syntaxhighlighter.printing .variable, .syntaxhighlighter .variable {
            color: #a70 !important;
        }

        .syntaxhighlighter.printing .value, .syntaxhighlighter .value {
            color: #090 !important;
        }

        .syntaxhighlighter.printing .functions, .syntaxhighlighter.printing .color2, .syntaxhighlighter.printing .color2 a, .syntaxhighlighter .functions, .syntaxhighlighter .color2, .syntaxhighlighter .color2 a {
            color: #ff1493 !important;
        }

        .syntaxhighlighter.printing .constants, .syntaxhighlighter .constants {
            color: #06c !important;
        }

        .syntaxhighlighter.printing .color3, .syntaxhighlighter.printing .color3 a, .syntaxhighlighter.collapsed .toolbar a:hover, .syntaxhighlighter .color3, .syntaxhighlighter .color3 a {
            color: red !important;
        }

        .ux-snapscreen-install {
            padding: 0 20px 20px 20px;
        }

        .ux-richeditor-math {
            width: 700px;
            padding: 0 20px 20px 20px;
        }

        .ux-richeditor-math .m-mathedit {
            height: 470px;
        }

        .ux-richeditor-math .m-mathedit .u-latex {
            margin-top: 120px;
        }

        .ux-richeditor-math .m-mathedit .latextip {
            font-size: 14px;
            line-height: 24px;
            height: 24px;
        }

        .ux-richeditor-math .m-mathedit .chinatip {
            font-size: 12px;
            color: #e84807;
        }

        .ux-richeditor-math .m-mathedit .savetip {
            font-size: 14px;
            color: #e84807;
        }

        .ux-richeditor-math .m-mathedit .imgsrea {
            top: 44px;
            background-color: #fafafa;
            height: 100px;
            width: 700px;
            border-top: 1px solid #d6d6d6;
        }

        .ux-richeditor-math .m-mathedit .latexarea {
            margin-top: 10px;
            width: 100%;
        }

        .ux-richeditor-math .m-mathedit .latexSrc {
            width: 700px;
            height: 80px;
            font-size: 14px;
            border: 1px solid #dfdfdf;
            background-color: #fafafa;
        }

        .ux-richeditor-math .m-mathedit .latexlen {
            margin-top: 10px;
            height: 30px;
            line-height: 30px;
        }

        .ux-richeditor-math .m-mathedit .imgshow {
            margin-top: 15px;
            height: 65px;
        }

        .ux-richeditor-math .m-mathedit .warninfo {
            color: red;
        }

        .ux-richeditor-math .m-mathedit .imginfo {
            margin-right: 20px;
            font-size: 14px;
        }

        .ux-richeditor-math .m-mathedit .imgshow img {
            max-width: 570px;
        }

        .ux-richeditor-math .m-mathedit .latexMsg {
            height: 30px;
            lien-height: 30px;
            color: green;
        }

        .ux-richeditor-math .m-mathedit .tipinfo {
            height: 30px;
            lien-height: 30px;
            color: #d31818;
            margin-left: 10px;
        }

        .ux-richeditor-math .m-mathedit .samright {
            border: 1px solid #ddd;
            margin-right: 5px;
            padding: 0 3px;
            height: 70px;
            background-color: #fff;
        }

        .ux-richeditor-math .m-mathedit .samright img {
            vertical-align: middle;
        }

        .ux-richeditor-math .m-mathedit .verticalAlign {
            vertical-align: middle;
            display: inline-block;
            height: 100%;
            width: 1px;
            margin-left: -1px;
        }

        .ux-richeditor-math .m-mathedit .eqitem {
            z-index: 10;
            width: 700px;
            padding-top: 10px;
        }

        .ux-richeditor-math .m-mathedit .itemname {
            text-align: center;
            background-color: #f2f2f2;
            padding: 0 10px;
            height: 44px;
            line-height: 44px;
            font-size: 14px;
        }

        .ux-richeditor-math .m-mathedit .selected {
            background-color: #d9d9d9;
            color: #e84807;
        }

        .ux-richeditor-math .m-mathedit .eqitem-1 {
            left: 5px;
        }

        .ux-richeditor-math .m-mathedit .eqitem-2 {
            left: -34px;
        }

        .ux-richeditor-math .m-mathedit .eqitem-3 {
            left: -70px;
        }

        .ux-richeditor-math .m-mathedit .eqitem-4 {
            left: -100px;
        }

        .ux-richeditor-math .m-mathedit .eqitem-5 {
            left: -140px;
        }

        .ux-richeditor-math .m-mathedit .eqitem-6 {
            left: -180px;
        }

        .ux-richeditor-math .m-mathedit .eqitem-7 {
            left: -220px;
        }

        .ux-richeditor-math .m-mathedit .eqitem-8 {
            left: -260px;
        }

        .ux-richeditor-math .m-mathedit .eqitem-9 {
            left: -308px;
        }

        .ux-richeditor-math .m-mathedit .eqitem-10 {
            left: -359px;
        }

        .ux-richeditor-math .m-mathedit .eqitem-11 {
            left: -398px;
        }

        .ux-richeditor-math .m-mathedit .eqitem-12 {
            left: -437px;
        }

        .ux-richeditor-math .m-mathedit .eqitem-13 {
            left: -474px;
        }

        .ux-richeditor-math .m-mathedit .eqitem-14 {
            left: -512px;
        }

        .ux-richeditor-math .m-mathedit .sunSample {
            width: 650px;
        }

        body .ux-editor-dialog-mask {
            background: #666;
            background: rgba(0, 0, 0, 0.6);
        }

        body .ux-eduEditorDialog {
            background: white;
            padding: 30px 45px 25px 45px;
            border: 1px solid #ddd;
        }

        body .ux-eduEditorDialog .zbar {
            background-color: white;
            border: none;
        }

        body .ux-eduEditorDialog .zbar .zttl {
            font-size: 18px;
        }

        body .ux-eduEditorDialog .zcnt {
            padding: 10px 0;
        }

        body .ux-eduEditorDialog .zcls {
            font-size: 30px;
            top: 12px;
            right: 10px;
            color: #7d7979;
        }

        body .ux-eduEditorDialog .ux-richeditor-link {
            width: inherit;
            padding: 0 5px;
        }

        body .ux-eduEditorDialog .ux-richeditor-link .row {
            width: inherit;
        }

        body .ux-eduEditorDialog .ux-richeditor-link .row label {
            margin-right: 10px;
            line-height: 33px;
            float: left;
            color: #859295;
        }

        body .ux-eduEditorDialog .ux-richeditor-link .txtwrap {
            display: inline-block;
            height: auto;
            border: none;
        }

        body .ux-eduEditorDialog .ux-richeditor-link .txtwrap .ipt {
            box-sizing: border-box;
            width: 318px;
            line-height: 32px;
            height: 32px;
            padding: 6px 12px;
            border: 1px solid #ddd;
            color: #555;
            background: white;
            border-radius: 2px;
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

        body .ux-eduEditorDialog .ux-richeditor-uploadCard {
            width: 465px;
            padding: 0 0 10px 0;
        }

        body .ux-eduEditorDialog .ux-richeditor-uploadCard .cnt .txtwrap {
            width: 336px;
            height: auto;
            border: none;
        }

        body .ux-eduEditorDialog .ux-richeditor-uploadCard .cnt .txtwrap .txt {
            box-sizing: border-box;
            height: 32px;
            line-height: 32px;
            padding: 6px 12px;
            border: 1px solid #ddd;
            color: #555;
            background: white;
            border-radius: 2px;
        }

        body .ux-eduEditorDialog .ux-richeditor-uploadCard .cnt .txtwrap .txt:focus {
            background: white;
            color: #343d42;
            -webkit-box-shadow: 1px 1px 10px #E4F9E5;
            -moz-box-shadow: 1px 1px 10px #E4F9E5;
            box-shadow: 1px 1px 10px #E4F9E5;
        }

        body .ux-eduEditorDialog .ux-richeditor-uploadCard .cnt .ux-btn {
            width: 100px;
            height: 34px;
            line-height: 34px;
            float: right;
        }

        body .ux-eduEditorDialog .ux-richeditor-uploadCard .cnt .desc {
            font-size: 12px;
        }

        body .ux-eduEditorDialog .ux-richeditor-uploadCard .tab {
            height: 50px;
            border: none !important;
        }

        body .ux-eduEditorDialog .ux-richeditor-uploadCard .tab .j-tab {
            float: left;
            border-bottom: solid 1px #e84807;
            width: 230px;
            text-align: center;
            color: #859295;
            background-color: #f2f5f5;
        }

        body .ux-eduEditorDialog .ux-richeditor-uploadCard .tab .j-selected {
            border: solid 1px #e84807;
            border-bottom: solid 1px transparent;
            color: #e84807;
            background-color: white;
            height: 29px;
        }

        body .ux-eduEditorDialog .ux-richeditor-uploadCard .uploadcon {
            margin-bottom: 15px;
        }

        body .ux-eduEditorDialog .ux-richeditor-uploadCard .webcon {
            margin-bottom: 12px;
        }

        body .ux-eduEditorDialog .ux-richeditor-math .u-equation .eqitems .item :first-child {
            padding-left: 0;
        }

        body .ux-eduEditorDialog .ux-richeditor-math .u-equation .eqitems .item .itemname {
            background: white;
        }

        body .ux-eduEditorDialog .ux-richeditor-math .u-equation .eqitems .item .selected {
            color: #e84807;
        }

        body .ux-eduEditorDialog .ux-richeditor-math .u-equation .eqitems .item .selected:after {
            display: block;
            content: '';
            width: 0;
            height: 0;
            border: 7px solid transparent;
            position: relative;
            border-bottom: 10px solid #dfdfdf;
            top: -16px;
            left: 6px;
        }

        body .ux-eduEditorDialog .ux-richeditor-math .u-equation .imgsrea {
            border: 1px solid #dfdfdf;
            height: 130px;
        }

        body .ux-eduEditorDialog .ux-richeditor-math .u-latex {
            margin-top: 155px;
        }

        body .ux-eduEditorDialog .ux-richeditor-math .u-latex .latextip, body .ux-eduEditorDialog .ux-richeditor-math .u-latex .chinatip {
            display: inline-block;
        }

        body .ux-eduEditorDialog .ux-richeditor-math .u-latex .chinatip {
            color: #859295;
            font-size: 12px;
        }

        body .ux-eduEditorDialog .ux-richeditor-math .u-latex .latexarea .latexSrc {
            width: 674px;
            padding: 6px 12px;
            border: 1px solid #ddd;
            color: #555;
            background: white;
            border-radius: 2px;
        }

        body .ux-eduEditorDialog .ux-richeditor-math .u-latex .latexarea .latexSrc:focus {
            background: white;
            color: #343d42;
            -webkit-box-shadow: 1px 1px 10px #E4F9E5;
            -moz-box-shadow: 1px 1px 10px #E4F9E5;
            box-shadow: 1px 1px 10px #E4F9E5;
        }

        body .ux-eduEditorDialog .ux-richeditor-math .latexlen .latexMsg {
            font-size: 12px;
            color: #e84807;
        }

        body .ux-eduEditorDialog .ux-richeditor-math .latexlen .tipinfo {
            font-size: 12px;
            color: #D80000;
        }

        body .ux-eduEditorDialog .ux-richeditor-math .savetip {
            font-size: 12px;
            color: #e84807 !important;
        }

        body .ux-eduEditorDialog .ux-richeditor-math .ux-btn-preview {
            display: inline-block;
        }

        body .ux-eduEditorDialog .ux-richeditor-math .ux-btn-gh, body .ux-eduEditorDialog .ux-richeditor-math .ux-btn {
            width: 100px;
            height: 32px;
            line-height: 32px;
            font-size: 14px;
            text-align: center;
            -webkit-border-radius: 3px;
            border-radius: 3px;
            box-sizing: border-box;
        }

        body .ux-eduEditorDialog .ux-richeditor-math .btns .ux-btn {
            margin-left: 15px;
        }

        body .ux-richeditor-video-selector-dialog {
            width: 700px;
            height: 486px;
        }

        body .ux-editor-InsertVideoDialog {
            padding: 20px 40px;
        }

        body .ux-editor-InsertVideoDialog .zcnt {
            width: 570px;
            padding-bottom: 0;
        }

        body .ux-editor-InsertVideoDialog .zttl {
            color: #333;
        }

        body .ux-editor-InsertVideoDialog .u-custom-file-upload {
            height: auto;
        }

        body .ux-editor-InsertVideoDialog .u-custom-file-upload .btnwrap {
            padding: 0 !important;
        }

        body .ux-editor-InsertVideoDialog .u-custom-file-upload .btnwrap .u-upload {
            margin-top: 10px;
        }

        body .ux-editor-InsertVideoDialog .u-custom-file-upload .processwrap {
            background: #fff;
            position: static;
        }

        body .ux-editor-InsertVideoDialog .u-custom-file-upload .processwrap .ux-uploadprocess {
            padding: 0;
            padding-bottom: 20px;
            height: auto;
        }

        body .ux-editor-InsertVideoDialog .u-custom-file-upload .processwrap .ux-uploadprocess .pwrap .abortwrap {
            top: 20px;
        }

        body .ux-editor-InsertVideoDialog .u-custom-file-upload .processwrap .ux-uploadprocess .pwrap .abortwrap .abortbtn {
            color: #e84807;
        }

        body .ux-editor-InsertVideoDialog .u-custom-file-upload .processwrap .ux-uploadprocess .filename {
            padding-top: 0;
        }

        body .ux-editor-InsertVideoDialog .u-custom-file-upload .btnwrap {
            padding: 10px 0;
        }

        body .ux-editor-InsertVideoDialog .ux-upload-btn {
            display: block;
            background: #e84807;
            color: #fff;
            border-radius: 2px;
            width: 96px;
            height: 34px;
            line-height: 34px;
            text-align: center;
            cursor: pointer;
        }

        .ux-editor .ux-tip-error {
            margin-top: 8px;
            margin-left: -3px;
            margin-bottom: 5px;
        }

        .ux-editor_wordCount {
            float: right;
            margin-top: 6px;
            font-size: 12px;
            color: #666;
        }

        .ux-component-aplayer_stage {
            background: #F8F8F8 url("http://edu-image.nosdn.127.net/cd68d245-f399-4b96-87b2-0570f2a86ddd.png?imageView&quality=100") no-repeat center center;
            min-height: 360px;
            min-width: 640px
        }

        .ux-component-aplayer_logo {
            padding: 7px 0 8px 10px;
            border-left: 1px solid #1F1F1F;
            margin-left: 10px;
            height: 14px
        }

        .ux-component-aplayer_lyricBox {
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: #fff;
            overflow-y: auto
        }

        .ux-component-aplayer_lyricbtn, .ux-component-aplayer_rate {
            cursor: pointer;
            border: 1px solid #666;
            border-radius: 2px;
            height: 20px;
            font-size: 12px;
            line-height: 20px;
            text-align: center;
            margin: 4px 0 0 10px;
            padding: 0 5px
        }

        .ux-component-aplayer_lyricbtn:hover, .ux-component-aplayer_rate:hover {
            background: #535455;
            color: #fff
        }

        .ux-component-aplayer_lyricbtn_active {
            background: #535455;
            color: #fff
        }

        .ux-component-aplayer_lyric {
            min-width: 520px;
            max-width: 680px;
            height: 100%;
            margin: 0 auto;
            padding-top: 40px
        }

        .ux-component-aplayer_ctrl {
            height: 30px;
            line-height: 30px;
            background: #2E2E2E;
            color: #999;
            padding-right: 10px
        }

        .ux-component-aplayer_button, .ux-component-aplayer_volume_btn {
            cursor: pointer;
            width: 30px;
            height: 30px;
            line-height: 30px;
            text-align: center
        }

        .ux-component-aplayer_button:hover, .ux-component-aplayer_volume_btn:hover {
            color: #e84807
        }

        .ux-component-aplayer_button {
            border-right: 1px solid #1F1F1F
        }

        .ux-component-aplayer_currentTime {
            color: #bbb;
            font-size: 12px;
            margin-left: 10px
        }

        .ux-component-aplayer_duration {
            color: #666
        }

        .ux-component-aplayer_rate_board {
            width: 290px;
            height: 66px;
            background: #333;
            padding: 10px;
            bottom: 30px;
            right: 0
        }

        .ux-component-aplayer_rate_board_inner {
            margin-left: -10px
        }

        .ux-component-aplayer_rate_button {
            margin-left: 10px;
            height: 28px;
            line-height: 28px;
            width: 90px;
            margin-bottom: 9px;
            text-align: center;
            background: #656667;
            border-radius: 4px;
            font-size: 14px;
            color: #DDDDDD
        }

        .ux-component-aplayer_rate_button:hover {
            background: #e84807;
            color: #FFF
        }

        .ux-component-aplayer_rate_current {
            background: #e84807;
            color: #FFF
        }

        .ux-component-aplayer_ratetip, .ux-component-aplayer_lyrictip {
            width: 200px;
            height: 30px;
            line-height: 30px;
            font-size: 13px;
            color: #fff;
            background: #333;
            position: absolute;
            bottom: 30px;
            right: 0;
            text-align: center
        }

        .ux-component-aplayer_ratetip_close, .ux-component-aplayer_lyrictip_close {
            cursor: pointer;
            width: 30px;
            height: 30px;
            line-height: 30px;
            text-align: center
        }

        .ux-component-aplayer_ratetip_close > .ux-icon-close, .ux-component-aplayer_lyrictip_close > .ux-icon-close {
            width: 10px;
            height: 10px;
            margin: 0 auto;
            margin-top: 10px
        }

        .ux-component-aplayer_ratetip_close > .ux-icon-close:hover, .ux-component-aplayer_lyrictip_close > .ux-icon-close:hover {
            color: #e84807
        }

        .ux-component-aplayer_volume {
            position: absolute;
            background: #333333;
            border-radius: 2px;
            height: 88px;
            width: 36px;
            bottom: 30px;
            padding: 6px 0;
            left: -5px
        }

        .ux-component-aplayer_volume .ux-range_track {
            border: none;
            width: 4px;
            background: #D8D8D8
        }

        .ux-component-aplayer_volume .ux-range_played {
            width: 4px;
            background: #30a64e
        }

        .ux-component-aplayer_volume .ux-range_point {
            width: 10px;
            height: 10px;
            background: #fff;
            border: 2px solid #30a64e;
            border-radius: 6px;
            right: -6px
        }

        .ux-component-aplayer_range .ux-range_track {
            border: none;
            background: #393939
        }

        .ux-component-aplayer_range .ux-range_buffer {
            background: #555555
        }

        .ux-component-aplayer_range .ux-range_played {
            background: #30a64e
        }

        .ux-component-aplayer_range .ux-range_point {
            width: 10px;
            height: 10px;
            background: #fff;
            border-radius: 5px;
            top: 0;
            right: -5px
        }

        /*# sourceMappingURL=component.css.map */
        .auto-1524789536668 .topinfo {
            margin-bottom: 5px;
        }

        .auto-1524789536668 .tipinfo {
            margin-top: 5px;
            line-height: 20px;
            width: 305px;
        }

        .auto-1524789536668 .tit {
            height: 20px;
            line-height: 20px;
            padding-bottom: 5px;
            font-size: 14px;
        }

        .auto-1524789536668 .dateDay, .dateMin {
            text-align: center;
        }

        .auto-1524789536668 .timeSet {
            top: 35px;
            left: 0;
            z-index: 3000;
        }

        .auto-1524789536668 .timesetType, .feesetType, .priceset {
            margin: 5px 15px;
        }

        .auto-1524789536668 .timesetType input, .feesetType input, .priceset input {
            vertical-align: middle;
            margin-right: 5px;
        }

        .auto-1524789536668 .timesetType label, .feesetType label, .priceset label {
            vertical-align: middle;
            margin-right: 10px;
        }

        .auto-1524789536668 .priceset label {
            display: inline-block;
            width: 40px;
        }

        .auto-1524789536668 .timesetting .timedetail {
            margin: 5px 0 10px 36px;
        }

        .auto-1524789536668 .timesetting .timedetail .desc {
            height: 30px;
            line-height: 30px;
        }

        .auto-1524789536668 .timesetting .timedetail .dateMinLayer {
            left: 143px;
        }

        .auto-1524789536668 .timesetting .timedetail .dateDayLayer {
            left: 60px;
        }

        .auto-1524789536668 .timeSet .zday a {
            font-size: 10px;
            font-family: sans-serif;
            color: #666;
        }

        .auto-1524789536668 .timeSet .zday .js-extended {
            color: #ccc;
        }

        .auto-1524789536668 .timeSet .zday .js-selected {
            background-color: #83b600;
            color: #fff;
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

        .auto-1524789536668 .m-feedbackinfo {
            padding: 5px 0 5px 10px;
        }

        .auto-1524789536668 .u-sugInput .u-btn {
            margin-left: 10px;
            padding: 4px 8px;
            line-height: 22px;
        }

        .auto-1524789536668 .fb {
            height: 22px;
        }

        .auto-1524789536668 .fb .m-feedbackinfo {
            padding: 0px;
        }

        .auto-1524789536668 .schoollector {
            vertical-align: middle;
            margin-right: 3px;
        }

        .auto-1524789536668 .lectorfrom {
            height: 33px;
            line-height: 33px;
            margin-left: 10px;
        }

        .auto-1524789536668 .u-btn {
            padding: 0 4px;
            height: 30px;
            line-height: 30px;
        }

        .auto-1524789536670 {
            padding: 20px;
        }

        .auto-1524789536670 .save {
            margin-right: 20px;
        }

        .auto-1524789536670 .fb {
            height: 22px;
        }

        .auto-1524789536670 .fb .m-feedbackinfo {
            padding: 0px;
        }

        .auto-1524789536670 .u-btn {
            padding: 0 4px;
            height: 30px;
            line-height: 30px;
        }

        .auto-1524789536671 {
            margin-top: 20px;
        }

        .auto-1524789536671 .ctinfo {
            height: 65px;
            line-height: 30px;
        }

        .auto-1524789536671 .title {
            font-size: 14px;
        }

        .auto-1524789536671 .cnt {
            width: 650px
        }

        .auto-1524789536671 .cnt .zarea {
            height: 450px;
        }

        .auto-1524789536671 .opts {
            margin-bottom: 10px;
            padding: 0 0 0 50px;
        }

        .auto-1524789536671 .messc {
            width: 20px;
            height: 20px;
            vertical-align: middle;
        }

        .auto-1524789536671 .mess {
            vertical-align: middle;
        }

        .auto-1524789536671 .publish {
            height: 28px;
        }

        .auto-1524789536671 .mail {
            font-size: 12px;
            margin: 6px 0 10px;
        }

        .auto-1524789536671 .draft, .publish {
            margin-right: 10px;
        }

        .auto-1524789536671 .draft {
            height: 28px;
        }

        .auto-1524789536671 .tipinfo {
            width: 660px;
        }

        .auto-1524789536671 .opts .u-btn {
            min-width: 60px;
            height: 30px;
            line-height: 30px;
            padding: 0 5px;
            font-size: 12px;
        }

        .auto-1524789536674 .sicon {
            font-size: 16px;
            color: #ddd;
            position: absolute;
            top: 3px;
            right: 10px;
            cursor: pointer;
        }

        .um-modal_close .ux-icon-close {
            font-size: 12px;
        }

        .um-modal_title {
            padding-top: 0.4166666667rem;
            font-size: 14px;
            color: #70788c;
        }

        .um-modal_bd {
            padding-top: 0.4166666667rem;
            font-size: 14px;
        }

        .um-modal_ft {
            padding-top: 0.4166666667rem;
            text-align: right;
            font-size: 14px;
        }

        .um-modal_ft .um-modal-btn {
            height: 34px;
            line-height: 34px;
            color: #2196f3;
        }

        .um-modal-fadeIn {
            opacity: 1;
            transition: opacity 200ms;
        }

        .um-modal-fadeOut {
            opacity: 1;
        }

        .um-modal-fadeOut-active {
            opacity: 0;
            transition: opacity 300ms;
        }

        html.z-modal, html.z-modal body {
            overflow: hidden;
        }

        /*# sourceMappingURL=component.css.map */
        .auto-1524789536678 {
            line-height: 22px;
        }

        .auto-1524789536678.loading {
            background: url(//yc.stu.126.net/res/images/ui/loading_circle.gif?00ef871b291bc03a497d608a5bd8ec99) no-repeat 10px 6px;
            text-indent: 20px;
        }

        .auto-1524789536682 {
            background: #fff;
            box-shadow: 0px 1px 2px #bbb, 0px 0px 0px #bbb;
            position: absolute;
            z-index: 99;
            width: 215px;
        }

        .auto-1524789536682 .service-list {
            width: 100%;
        }

        .auto-1524789536682 .title-1 {
            padding: 15px;
        }

        .auto-1524789536682 .title-1 h3 {
            border: 1px solid #abdfbf;
            height: 40px;
            line-height: 40px;
            text-align: center;
            display: block;
        }

        .auto-1524789536682 .f-icon {
            margin-right: 10px;
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

        .auto-1524789536682 .list-in {
            padding: 0 10px 20px;
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
            background: url(static/forum_icon.png) no-repeat -4999px -4999px;
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

        .auto-1524789536688 .up.voted {
            background-position: -33px -22px;
        }

        .auto-1524789536688 .down {
            background-position: 2px -44px;
        }

        .auto-1524789536688 .down.hvr:hover {
            background-position: -15px -44px;
        }

        .auto-1524789536688 .down.voted {
            background-position: -33px -44px;
        }

        .auto-1524789536690 .bd {
            color: #ddd;
            margin: 0 5px;
        }

        .auto-1524789536690 .manBtn span {
            display: inline-block;
            vertical-align: middle;
            height: 14px;
            width: 14px;
            background: url(static/forum_icon.png) no-repeat -55px -45px;
        }

        .auto-1524789536690 .manBtn:hover span {
            background-position: -72px -45px;
        }

        .u-manList {
            position: absolute;
            width: 110px;
            background-color: #fff;
            border: 1px solid #DDD;
            border-bottom: none;
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

        .auto-1524789536693 .optbar a.u-btn-sm {
            line-height: 18px;
        }

        .auto-1524789536693 .optbar a i {
            vertical-align: -3px;
            display: inline-block;
            width: 20px;
            height: 16px;
            background: url(//yc.stu.126.net/res/images/ui/forum_icon.png?b12539c2400cc76ad30262bdf7e12cbd) no-repeat -4999px -4999px;
        }

        .auto-1524789536693 .optbar .replyBtn i {
            background-position: -54px 1px;
        }

        .auto-1524789536693 .followBtn {
            margin-right: 10px;
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

        .auto-1524789536693 .optbar .followBtn.followed:hover .second {
            display: none;
        }

        .auto-1524789536693 .optbar .followBtn.followed:hover .secHvr {
            display: inline-block;
            padding-left: 8px;
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

        .auto-1524789536699 .small.j-logupbox {
            cursor: pointer;
        }

        .auto-1524789536699 .ui-richEditor .rich-editor .ztbar {
            padding: 0 4px;
        }

        .auto-1524789536701 {
            border-bottom: 1px solid #eee;
        }

        .auto-1524789536701 .m-detailInfoItem .bar {
            padding: 5px 0;
        }

        .auto-1524789536703 .triangle {
            position: absolute;
            top: 0;
            width: 14px;
            height: 10px;
            background: url(//yc.stu.126.net/res/images/ui/forum_icon.png?b12539c2400cc76ad30262bdf7e12cbd) no-repeat -100px -2px;
        }

        .auto-1524789536703 .wrap {
            margin-top: 7px;
            border: 1px solid #ddd;
            border-radius: 2px;
        }

        .auto-1524789536703 .wrap .m-comment-pool {
            padding: 0 10px;
        }

        .auto-1524789536703 .wrap .m-comment-pool .j-list {
            padding-bottom: 20px;
        }

        .auto-1524789536703 .wrap .m-add-comment {
            padding: 15px 10px;
            background-color: #fafafa;
            border-top: 1px solid #eee;
            position: relative;
        }

        .auto-1524789536705 {
            border-bottom: 1px solid #eee;
            zoom: 1;
        }

        .auto-1524789536705 .m-commentWrapper {
            margin: -5px 0 15px 0;
        }

        .auto-1524789536705 .m-commentWrapper .wrap {
            width: 570px;
            position: relative;
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
            background: url(//yc.stu.126.net/res/images/ui/forum_icon.png?b12539c2400cc76ad30262bdf7e12cbd) no-repeat -4999px -4999px;
            margin-left: 4px;
            display: inline-block;
            width: 12px;
            height: 20px;
            vertical-align: top;
        }

        .auto-1524789536707 .upsort, .auto-1524789536707 .downsort {
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

        .auto-1524789536712 .userInfo .type {
            float: left;
            font-size: 12px;
            margin: 0 5px;
            padding: 0 5px;
            display: inline-block;
            line-height: 18px;
            color: #fff;
            text-align: center;
        }

        .auto-1524789536712 .userInfo .type.lector {
            background-color: #6CB4FB;
        }

        .auto-1524789536712 .userInfo .type.manager {
            background-color: #9BCE00;
        }

        .auto-1524789536712 .userInfo .type.assist {
            background-color: #9BCE00;
        }

        .auto-1524789536712 .userInfo .username {
            max-width: 80%;
        }

        .ux-share .arrow-down {
            display: inline-block;
            width: 0;
            height: 0;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-top: 10px solid #ccc;
            position: absolute;
        }

        .ux-share-ways li {
            display: inline-block;
            width: 32px;
            height: 32px;
            vertical-align: middle;
            border: 1px solid #666;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;
            margin-right: 14px;
            text-align: center;
            cursor: pointer;
        }

        .ux-share-ways li span {
            font-size: 18px;
            line-height: 32px;
            height: 32px;
            color: #666;
            display: block;
        }

        .ux-share-ways li:hover {
            color: #fff;
        }


        .m-popover li {
            box-sizing: border-box;
            position: relative;
            display: inline-block;
            margin: 4px 2px;
            padding-left: 8px;
            width: 60px;
            height: 19px;
            line-height: 19px;
            font-size: 14px;
            color: #999;
            cursor: pointer;
        }

        .m-popover li:hover {
            background-color: #2aa126;
            color: #fff;
        }

        .m-popover.m-popover-multi li {
            padding-left: 1.2em;
        }

        .m-popover.m-popover-multi li.z-sel:before {
            content: '●';
            position: absolute;
            left: 5px;
            top: 0;
        }

        .m-progressbar {
            position: relative;
            height: 4px;
            cursor: pointer;
        }

        .m-progressbar .backgroundbar {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
            background-color: #555;
        }

        .m-progressbar .progressbar {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 0;
            background-color: #2aa126;
        }

        .m-progressbar .bufferbar {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 0;
            background-color: #888;
        }

        .m-progressbar .drag_item {
            position: absolute;
            top: -3px;
            width: 8px;
            height: 8px;
            border: 1px solid #2aa126;
            background: #ffffff;
            border-radius: 100%;
            cursor: pointer;
            z-index: 1;
        }

        .m-progressbar .anchor {
            position: absolute;
            top: 0;
            height: 100%;
            width: 4px;
            background-color: #ccc;
        }

        .m-progressbar.m-progressbar-hr .progressbar {
            left: auto;
            right: 0;
        }

        .m-progressbar.m-progressbar-hr .bufferbar {
            left: auto;
            right: 0;
        }

        .m-progressbar.m-progressbar-hr .drag_item {
            left: auto;
            right: 0;
        }

        .m-progressbar.m-progressbar-hr .anchor {
            left: auto;
        }

        .m-progressbar.m-progressbar-vt {
            width: 4px;
            height: 120px;
        }

        .m-progressbar.m-progressbar-vt .progressbar {
            width: 100%;
            height: 0;
        }

        .m-progressbar.m-progressbar-vt .bufferbar {
            width: 100%;
            height: 0;
        }

        .m-progressbar.m-progressbar-vt .drag_item {
            top: 0;
            left: -3px;
        }

        .m-progressbar.m-progressbar-vt .anchor {
            top: auto;
            left: 0;
            width: 100%;
            height: 4px;
        }

        .m-progressbar.m-progressbar-vb {
            width: 4px;
            height: 85px;
        }

        .m-progressbar.m-progressbar-vb .progressbar {
            top: auto;
            bottom: 0;
            width: 100%;
            height: 0;
        }

        .m-progressbar.m-progressbar-vb .bufferbar {
            top: auto;
            bottom: 0;
            width: 100%;
            height: 0;
        }

        .m-progressbar.m-progressbar-vb .drag_item {
            top: auto;
            left: -3px;
        }

        .m-progressbar.m-progressbar-vb .anchor {
            top: auto;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 4px;
        }

        .u-edu-h5player-icon {
            display: inline-block;
        }

        .u-edu-h5player-icon.icon-volume {
            width: 16px;
            height: 16px;
            background-image: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/web-s3864e82090.png?fb6bb9f59f90e3e232bbf57a200502f2);
            background-origin: content-box;
            background-clip: content-box;
            background-repeat: no-repeat;
            background-size: 24px 217.33333px;
            background-position: 0 29.80132%;
        }

        .u-edu-h5player-icon.icon-play {
            width: 12px;
            height: 16px;
            background-image: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/web-s3864e82090.png?fb6bb9f59f90e3e232bbf57a200502f2);
            background-position: 100% 29.03226%;
        }

        .u-edu-h5player-icon.icon-big_play_btn {
            width: 24px;
            height: 32px;
            background-image: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/web-s3864e82090.png?fb6bb9f59f90e3e232bbf57a200502f2);
            background-position: 0 87.7551%;
        }

        .u-edu-h5player-icon.icon-pause {
            width: 12px;
            height: 16px;
            background-image: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/web-s3864e82090.png?fb6bb9f59f90e3e232bbf57a200502f2);
            background-position: 66.66667% 5.16129%;
        }

        .u-edu-h5player-icon.icon-fullscreen {
            width: 16px;
            height: 16px;
            background-image: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/web-s3864e82090.png?fb6bb9f59f90e3e232bbf57a200502f2);
            background-position: 0 5.16129%;
        }

        .u-edu-h5player-icon.icon-notfullscreen {
            width: 16px;
            height: 16px;
            background-image: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/web-s3864e82090.png?fb6bb9f59f90e3e232bbf57a200502f2);
            background-position: 80% 0;
        }

        .u-edu-h5player-controlwrap {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            font-size: 14px;
            letter-spacing: -0.34px;
            z-index: 5;
        }

        .u-edu-h5player-controlwrap .bigplaybtn {
            display: none;
            position: absolute;
            left: 20px;
            bottom: 19px;
            width: 60px;
            height: 32px;
            padding: 14px 0;
            text-align: center;
            border-radius: 5px;
            background-color: rgba(0, 0, 0, 0.8);
            transition: .5s bottom;
        }

        .u-edu-h5player-controlwrap .bigplaybtn .icon-big_play_btn:hover {
            background-image: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/web-s3864e82090.png?fb6bb9f59f90e3e232bbf57a200502f2);
            background-position: 0 76.87075%;
        }

        .u-edu-h5player-controlwrap .bigplaybtn.z-show {
            display: block;
        }

        .u-edu-h5player-controlwrap .progresswrap {
            bottom: -36px;
            transition: .5s bottom;
            z-index: 1;
        }

        .u-edu-h5player-controlwrap .progresswrap .placeholder {
            opacity: 0;
            position: absolute;
            left: 0;
            top: -6px;
            height: 6px;
            width: 100%;
        }

        .u-edu-h5player-controlwrap .progresswrap .drag_item {
            transition: .2s opacity, .2s transform, 0.1s left;
            visibility: hidden;
            opacity: 0;
        }

        .u-edu-h5player-controlwrap .progresswrap .drag_item.z-ban {
            display: none !important;
        }

        .u-edu-h5player-controlwrap .progresswrap .bufferbar, .u-edu-h5player-controlwrap .progresswrap .progressbar {
            transition: .1s width, .2s transform;
        }

        .u-edu-h5player-controlwrap .progresswrap .backgroundbar, .u-edu-h5player-controlwrap .progresswrap .anchor {
            transition: .2s transform;
        }

        .u-edu-h5player-controlwrap .progresswrap:hover .backgroundbar, .u-edu-h5player-controlwrap .progresswrap:hover .progressbar, .u-edu-h5player-controlwrap .progresswrap:hover .bufferbar, .u-edu-h5player-controlwrap .progresswrap:hover .anchor {
            transform: scaleY(1.4);
        }

        .u-edu-h5player-controlwrap .progresswrap:hover .drag_item {
            visibility: visible;
            opacity: 1;
            transform: scale(1.1);
        }

        .u-edu-h5player-controlwrap .m-controlbar {
            bottom: -36px;
            transition: bottom .5s;
        }

        .u-edu-h5player-controlwrap.z-show .bigplaybtn {
            bottom: 55px;
        }

        .u-edu-h5player-controlwrap.z-show .progresswrap {
            bottom: 0;
        }

        .u-edu-h5player-controlwrap.z-show .m-controlbar {
            bottom: 0;
        }

        .u-edu-h5player-controlwrap .controlwrap_cover {
            display: none;
            opacity: 0;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 50px;
            z-index: 999;
        }

        .u-edu-h5player-controlwrap .controlwrap_cover.z-show {
            display: block;
        }

        .u-edu-h5player-controlwrap .time {
            display: none;
            position: absolute;
            top: -32px;
            left: 20px;
            height: 20px;
            padding: 3px 5px;
            line-height: 20px;
            background-color: #000;
            color: #fff;
            opacity: 0.8;
            border-radius: 4px;
            z-index: 5;
        }

        .u-edu-h5player-controlwrap .time.z-show {
            display: block;
        }

        .m-controlbar {
            box-sizing: border-box;
            position: relative;
            height: 36px;
            line-height: 36px;
            background-color: #333;
            -moz-user-select: none;
            -webkit-user-select: none;
            user-select: none;
        }

        .m-controlbar a:active, .m-controlbar a:hover, .m-controlbar a:visited, .m-controlbar a:link {
            text-decoration: none;
        }

        .m-controlbar .g-left, .m-controlbar .g-right {
            height: 100%;
        }

        .m-controlbar .g-left > *, .m-controlbar .g-right > * {
            font-size: 14px;
            margin-top: 6px;
            vertical-align: top;
        }

        .m-controlbar .controlbar_btn {
            position: relative;
            display: inline-block;
            padding: 4px 10px;
            height: 16px;
            line-height: 16px;
            border-radius: 2px;
            text-align: center;
            color: #999;
            cursor: pointer;
        }

        .m-controlbar .controlbar_btn:hover {
            background-color: #222;
            color: #fff;
        }

        .m-controlbar .controlbar_btn.z-show {
            display: inline-block;
        }

        .m-controlbar .controlbar_btn.z-hide {
            display: none;
        }

        .m-controlbar .cdnbtn.z-dis, .m-controlbar .qualitybtn.z-dis {
            color: #555;
            cursor: not-allowed;
        }

        .m-controlbar .cdnbtn.z-dis:hover, .m-controlbar .qualitybtn.z-dis:hover {
            color: #555;
            background-color: transparent;
        }

        .m-controlbar .playbtn:hover .icon-play {
            background-image: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/web-s3864e82090.png?fb6bb9f59f90e3e232bbf57a200502f2);
            background-position: 100% 21.29032%;
        }

        .m-controlbar .pausebtn:hover .icon-pause {
            background-image: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/web-s3864e82090.png?fb6bb9f59f90e3e232bbf57a200502f2);
            background-position: 0 10.32258%;
        }

        .m-controlbar .volumebtn {
            z-index: 1000;
        }

        .m-controlbar .volumebtn:hover .icon-volume {
            background-image: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/web-s3864e82090.png?fb6bb9f59f90e3e232bbf57a200502f2);
            background-position: 0 21.8543%;
        }

        .m-controlbar .volumebtn.z-close .icon-volume {
            background-image: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/web-s3864e82090.png?fb6bb9f59f90e3e232bbf57a200502f2);
            background-position: 0 37.74834%;
        }

        .m-controlbar .volumebtn.z-close:hover .icon-volume {
            background-image: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/web-s3864e82090.png?fb6bb9f59f90e3e232bbf57a200502f2);
            background-position: 0 45.69536%;
        }

        .m-controlbar .fullscreen:hover .icon-fullscreen {
            background-image: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/web-s3864e82090.png?fb6bb9f59f90e3e232bbf57a200502f2);
            background-position: 0 16.12903%;
        }

        .m-controlbar .notfullscreen:hover .icon-notfullscreen {
            background-image: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/web-s3864e82090.png?fb6bb9f59f90e3e232bbf57a200502f2);
            background-position: 0 0;
        }

        .m-controlbar .playbtn:hover, .m-controlbar .pausebtn:hover, .m-controlbar .fullscreen:hover, .m-controlbar .notfullscreen:hover {
            background-color: transparent;
        }

        .m-controlbar .pausebtn, .m-controlbar .notfullscreen {
            display: none;
        }

        .m-controlbar .current_time {
            margin-left: 10px;
            color: #fff;
        }

        .m-controlbar .seperator {
            margin: 0 4px;
            color: #999;
        }

        .m-controlbar .duration {
            color: #999;
        }

        .m-popover {
            z-index: 6;
        }

        .m-popover-rate {
            width: 150px;
        }

        .m-popover-rate li {
            width: 71px;
        }

        .m-popover-quality {
            width: 64px;
        }

        .m-popover-quality li {
            width: 60px;
        }

        .m-popover-cdn {
            width: 128px;
        }

        .m-popover-cdn.m-popover-cdn-one_column {
            width: 64px;
        }

        .m-popover-volume {
            padding: 8px 16px;
            width: auto;
        }

        .volumebtn:hover .m-popover-volume {
            visibility: visible;
            opacity: 1;
        }

        .u-edu-h5player-srt {
            position: relative;
            width: 80%;
            margin: 0 auto;
            padding: 6px;
            text-align: center;
        }

        .u-edu-h5player-srt .srt_item {
            display: none;
            line-height: 1.2;
            font-size: 18px;
            color: #fff;
            text-shadow: 0px 3px 2px #000, -1px 0px 5px #000, 0px -2px 2px #000, 3px 0px 3px #000;
            word-wrap: break-word;
        }

        .u-edu-h5player-srt .srt_item.z-show {
            display: block;
        }

        .u-edu-h5player-controlwrap .u-edu-h5player-srt {
            transition: bottom .5s;
            position: absolute;
            bottom: 4px;
            margin-left: 10%;
        }

        .u-edu-h5player-controlwrap.z-show .u-edu-h5player-srt {
            bottom: 40px;
        }

        .u-edu-h5player-mobileerror {
            left: 0;
            top: 0;
            display: none;
            background: #000;
            z-index: 100;
        }

        .u-edu-h5player-mobileerror .emid {
            font-size: 14px;
            line-height: .5625rem;
            height: .5625rem;
            width: 100%;
            position: absolute;
            left: 0;
            top: 50%;
            margin-top: -.78125rem;
            text-align: center;
        }

        [data-dpr="2"] .u-edu-h5player-mobileerror .emid {
            font-size: 28px;
        }

        [data-dpr="3"] .u-edu-h5player-mobileerror .emid {
            font-size: 42px;
        }

        .u-edu-h5player-mobileerror .emid .eic {
            background: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/mobile/error_icon.png?0522fdc139c709e3b63041fc3ab41124);
            width: .5625rem;
            height: .5625rem;
            margin-right: 3px;
            vertical-align: top;
            background-size: .5625rem .5625rem;
        }

        .u-edu-h5player-mobileerror .bwarp {
            position: absolute;
            width: 100%;
            height: 1.03125rem;
            left: 0;
            top: 50%;
            text-align: center;
            margin-top: .15625rem;
        }

        .u-edu-h5player-mobileerror .bwarp .reloadbtn {
            text-align: center;
            font-size: 14px;
            line-height: 1.03125rem;
            height: 1.03125rem;
            color: #2aa126;
            border: 1px solid #2aa126;
            border-radius: .15625rem;
            width: 3.125rem;
        }

        [data-dpr="2"] .u-edu-h5player-mobileerror .bwarp .reloadbtn {
            font-size: 28px;
        }

        [data-dpr="3"] .u-edu-h5player-mobileerror .bwarp .reloadbtn {
            font-size: 42px;
        }

        .u-edu-h5player-mobileerror .bwarp .reloadbtn .ic {
            width: .5625rem;
            height: .5rem;
            background: transparent url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/mobile/reload_btn.png?ea156eebcf6278f0c7ac83e182678358) right center no-repeat;
            background-size: .5625rem .5rem;
            margin: .234375rem .078125rem .234375rem 0;
        }

        .u-edu-h5player-mobilecover {
            display: none;
            left: 0;
            top: 0;
            cursor: pointer;
            overflow: hidden;
            text-align: center;
            background: #000;
            z-index: 99;
        }

        .u-edu-h5player-mobilecover .cimg {
            top: 50%;
            left: 50%;
        }

        .u-edu-h5player-mobilecover .playbtn {
            width: 1.625rem;
            height: 1.625rem;
            background: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/mobile/cover_playbtn.png?fb637bd7a94e59528a53d7d2396a74d1);
            top: 50%;
            left: 50%;
            margin: -.8125rem 0 0 -.8125rem;
            background-size: 1.625rem 1.625rem;
        }

        .u-edu-h5player-mobiledisplay {
            z-index: 3;
        }

        .u-edu-h5player-mobiledisplay .statewrap, .u-edu-h5player-mobiledisplay .seekwrap, .u-edu-h5player-mobiledisplay .volumewrap {
            z-index: 3;
            display: none;
            top: 50%;
            left: 50%;
        }

        .u-edu-h5player-mobiledisplay .bbg {
            opacity: 0;
            background: #000;
        }

        .u-edu-h5player-mobiledisplay .sbg {
            opacity: 0.8;
            background: #000;
            border-radius: .15625rem;
        }

        .u-edu-h5player-mobiledisplay .statewrap {
            display: none;
            width: 2.5rem;
            height: 2.5rem;
            margin: -1.25rem 0 0 -1.25rem;
        }

        .u-edu-h5player-mobiledisplay .statewrap .pause {
            width: .75rem;
            height: 1rem;
            background: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/mobile/big_play_btn.png?4e9b92438182c366651bbba7a72fe6b9);
            top: .75rem;
            left: .875rem;
            background-size: .75rem 1rem;
        }

        .u-edu-h5player-mobiledisplay .statewrap .buffering {
            width: 1.125rem;
            height: 1.125rem;
            top: .6875rem;
            left: .6875rem;
            background: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/mobile/buffering.png?04eed3bc0591209bcf6d291d99939f89);
            background-size: 1.125rem 1.125rem;
        }

        .u-edu-h5player-mobiledisplay .statewrap .replay {
            width: 1.125rem;
            top: .46875rem;
            left: .6875rem;
        }

        .u-edu-h5player-mobiledisplay .statewrap .replay .ic {
            width: 1.125rem;
            height: 1rem;
            background: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/mobile/big_replay_btn.png?1856b2da388733232e0b3d17cda5e789);
            background-size: 1.125rem 1rem;
        }

        .u-edu-h5player-mobiledisplay .statewrap .replay .txt {
            text-align: center;
            margin-top: .28125rem;
            color: #999;
            font-size: 14px;
        }

        [data-dpr="2"] .u-edu-h5player-mobiledisplay .statewrap .replay .txt {
            font-size: 28px;
        }

        [data-dpr="3"] .u-edu-h5player-mobiledisplay .statewrap .replay .txt {
            font-size: 42px;
        }

        .u-edu-h5player-mobiledisplay .statewrap:hover .pause {
            background-image: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/mobile/big_play_btn_hover.png?c53b267dd02910b8643e801d59abbfcc);
        }

        .u-edu-h5player-mobiledisplay .statewrap:hover .replay .ic {
            background-image: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/mobile/big_replay_btn_hover.png?bc4f20158a476a88a8684dcf61cf94b1);
        }

        .u-edu-h5player-mobiledisplay .statewrap:hover .replay .txt {
            color: #fff;
        }

        .u-edu-h5player-mobiledisplay .seekwrap {
            width: 3.4375rem;
            height: 3.4375rem;
            margin: -1.71875rem 0 0 -1.71875rem;
        }

        .u-edu-h5player-mobiledisplay .seekwrap .scon {
            top: 0;
            left: 0;
            width: 100%;
            text-align: center;
        }

        .u-edu-h5player-mobiledisplay .seekwrap .seekic {
            width: 1.09375rem;
            height: .75rem;
            background-size: 1.09375rem .75rem;
            margin: .90625rem auto .5rem auto;
        }

        .u-edu-h5player-mobiledisplay .seekwrap .seekic.forward {
            background-image: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/mobile/seek_forward.png?d06f7546a68e5cb1b50165df75e77a1e);
        }

        .u-edu-h5player-mobiledisplay .seekwrap .seekic.backward {
            background-image: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/mobile/seek_backward.png?9dfc9eeec587f8685ee1242597f41f8d);
        }

        .u-edu-h5player-mobiledisplay .seekwrap .time {
            font-size: 14px;
            color: #fff;
            line-height: 1.4;
        }

        [data-dpr="2"] .u-edu-h5player-mobiledisplay .seekwrap .time {
            font-size: 28px;
        }

        [data-dpr="3"] .u-edu-h5player-mobiledisplay .seekwrap .time {
            font-size: 42px;
        }

        .u-edu-h5player-mobiledisplay .seekwrap .time .dur {
            color: #999;
        }

        .u-edu-h5player-mobiledisplay .volumewrap {
            width: 1.5625rem;
            height: 4.0625rem;
            margin: -2.03125rem 0 0 -.78125rem;
        }

        .u-edu-h5player-mobiledisplay .volumewrap .vcon {
            top: 0;
            left: 0;
            width: 100%;
            text-align: center;
        }

        .u-edu-h5player-mobiledisplay .volumewrap .vic {
            width: .5rem;
            height: .5rem;
            background-image: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/mobile/volume_icon.png?a80c70afac83017e5a471cd3e67a916a);
            margin: .3125rem .53125rem;
            background-size: .5rem .5rem;
        }

        .u-edu-h5player-mobiledisplay .volumewrap .vl {
            height: 2.625rem;
            width: .125rem;
            background: #555;
            margin: 0 auto;
        }

        .u-edu-h5player-mobiledisplay .volumewrap .vl .vp {
            left: -.125rem;
            bottom: -.125rem;
            width: .25rem;
            height: .25rem;
            border: .0625rem solid #2aa126;
            background: #fff;
            border-radius: 100%;
            z-index: 3;
        }

        .u-edu-h5player-mobiledisplay .volumewrap .vl .vb {
            width: 100%;
            height: 0;
            left: 0;
            bottom: 0;
            background: #2aa126;
            z-index: 1;
        }

        .u-edu-h5player-controlwrap-mobile {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            z-index: 5;
        }

        .u-edu-h5player-controlwrap-mobile .m-controlbar-cover {
            position: absolute;
            width: 100%;
            height: 105%;
            z-index: 11;
            top: -5%;
            left: 0;
        }

        .u-edu-h5player-controlwrap-mobile .m-progressbar-mobile {
            position: relative;
            height: .125rem;
            background-color: #555;
            z-index: 10;
        }

        .u-edu-h5player-controlwrap-mobile .m-progressbar-mobile div {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
        }

        .u-edu-h5player-controlwrap-mobile .m-progressbar-mobile .timebar {
            width: 0;
            background-color: #2aa126;
            z-index: 2;
        }

        .u-edu-h5player-controlwrap-mobile .m-progressbar-mobile .bufferbar {
            width: 0;
            background-color: #888;
            z-index: 1;
        }

        .u-edu-h5player-controlwrap-mobile .m-progressbar-mobile .drag_item {
            top: -.125rem;
            width: .25rem;
            height: .25rem;
            border: .0625rem solid #2aa126;
            background: #ffffff;
            border-radius: 100%;
            z-index: 5;
            margin-top: 0;
        }

        .u-edu-h5player-controlwrap-mobile .m-progressbar-mobile .anchors {
            z-index: 3;
            width: 100%;
        }

        .u-edu-h5player-controlwrap-mobile .m-progressbar-mobile .anchors .anchor {
            width: 6px;
            background-color: #fff;
        }

        .u-edu-h5player-controlwrap-mobile .m-controlbar-mobile {
            height: 1.125rem;
            padding: .15625rem 0;
            width: 100%;
            box-sizing: border-box;
            position: relative;
            background-color: #333;
        }

        .u-edu-h5player-controlwrap-mobile .m-controlbar-mobile .pbtnwrap {
            padding: .15625rem .3125rem;
        }

        .u-edu-h5player-controlwrap-mobile .m-controlbar-mobile .pbtnwrap.active .pause-play-btn {
            background-image: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/mobile/pause_btn.png?d071a1e0f18a01eea8bfff04610c9f46);
        }

        .u-edu-h5player-controlwrap-mobile .m-controlbar-mobile .pbtnwrap.active .full-screen-btn {
            background-image: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/mobile/exist_fullscreen_btn.png?eb75077966046f75f88b6035a09e6f89);
        }

        .u-edu-h5player-controlwrap-mobile .m-controlbar-mobile .pause-play-btn {
            width: .375rem;
            height: .5rem;
            background-image: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/mobile/play_btn.png?ec9b126049c143c4e7edac76f695b5c5);
            background-size: .375rem .5rem;
        }

        .u-edu-h5player-controlwrap-mobile .m-controlbar-mobile .process-time {
            height: .5rem;
            padding: .15625rem 0;
            line-height: .5rem;
            font-size: 14px;
        }

        [data-dpr="2"] .u-edu-h5player-controlwrap-mobile .m-controlbar-mobile .process-time {
            font-size: 28px;
        }

        [data-dpr="3"] .u-edu-h5player-controlwrap-mobile .m-controlbar-mobile .process-time {
            font-size: 42px;
        }

        .u-edu-h5player-controlwrap-mobile .m-controlbar-mobile .now-time {
            color: #fff;
        }

        .u-edu-h5player-controlwrap-mobile .m-controlbar-mobile .more-btn {
            width: 1.5rem;
            height: .8125rem;
            text-decoration: none;
            text-align: center;
            line-height: .8125rem;
            color: #fff;
            font-size: 14px;
        }

        [data-dpr="2"] .u-edu-h5player-controlwrap-mobile .m-controlbar-mobile .more-btn {
            font-size: 28px;
        }

        [data-dpr="3"] .u-edu-h5player-controlwrap-mobile .m-controlbar-mobile .more-btn {
            font-size: 42px;
        }

        .u-edu-h5player-controlwrap-mobile .m-controlbar-mobile .more-btn.active {
            background: #222;
            border-radius: 4px;
            text-decoration: none;
        }

        .u-edu-h5player-controlwrap-mobile .m-controlbar-mobile .full-screen-btn {
            width: .5rem;
            height: .5rem;
            background-image: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/mobile/fullscreen_btn.png?3c47b991b807343e60ad601728147af6);
            background-size: .5rem .5rem;
        }

        .u-edu-h5player-controlwrap-live-mobile {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            z-index: 5;
        }

        .u-edu-h5player-controlwrap-live-mobile .m-controlbar-mobile {
            height: 1.125rem;
            padding: .15625rem 0;
            width: 100%;
            box-sizing: border-box;
            position: relative;
            background-color: #333;
        }

        .u-edu-h5player-controlwrap-live-mobile .m-controlbar-mobile .pbtnwrap {
            padding: .15625rem .3125rem;
        }

        .u-edu-h5player-controlwrap-live-mobile .m-controlbar-mobile .pbtnwrap.active .pause-play-btn {
            background-image: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/mobile/pause_btn.png?d071a1e0f18a01eea8bfff04610c9f46);
        }

        .u-edu-h5player-controlwrap-live-mobile .m-controlbar-mobile .pbtnwrap.active .full-screen-btn {
            background-image: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/mobile/exist_fullscreen_btn.png?eb75077966046f75f88b6035a09e6f89);
        }

        .u-edu-h5player-controlwrap-live-mobile .m-controlbar-mobile .pbtnwrapsm {
            padding: .15625rem .15625rem;
        }

        .u-edu-h5player-controlwrap-live-mobile .m-controlbar-mobile .pause-play-btn {
            width: .375rem;
            height: .5rem;
            background-image: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/mobile/play_btn.png?ec9b126049c143c4e7edac76f695b5c5);
            background-size: .375rem .5rem;
        }

        .u-edu-h5player-controlwrap-live-mobile .m-controlbar-mobile .reload-btn {
            width: .5625rem;
            height: .5rem;
            background-image: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/mobile/reload_btn.png?ea156eebcf6278f0c7ac83e182678358);
            background-size: .5625rem .5rem;
        }

        .u-edu-h5player-controlwrap-live-mobile .m-controlbar-mobile .full-screen-btn {
            width: .5rem;
            height: .5rem;
            background-image: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/mobile/fullscreen_btn.png?3c47b991b807343e60ad601728147af6);
            background-size: .5rem .5rem;
        }

        .u-edu-h5player-controlwrap-live-mobile .m-controlbar-mobile .liveinfo {
            padding-left: .234375rem;
            width: 6.25rem;
            color: #fff;
            position: relative;
            height: .8125rem;
        }

        .u-edu-h5player-controlwrap-live-mobile .m-controlbar-mobile .liveinfo .livetith {
            font-size: 14px;
            line-height: 1;
        }

        [data-dpr="2"] .u-edu-h5player-controlwrap-live-mobile .m-controlbar-mobile .liveinfo .livetith {
            font-size: 28px;
        }

        [data-dpr="3"] .u-edu-h5player-controlwrap-live-mobile .m-controlbar-mobile .liveinfo .livetith {
            font-size: 42px;
        }

        .u-edu-h5player-controlwrap-live-mobile .m-controlbar-mobile .liveinfo .livetitp {
            position: absolute;
            bottom: 0;
            left: .234375rem;
            font-size: 12px;
            line-height: 1;
        }

        [data-dpr="2"] .u-edu-h5player-controlwrap-live-mobile .m-controlbar-mobile .liveinfo .livetitp {
            font-size: 24px;
        }

        [data-dpr="3"] .u-edu-h5player-controlwrap-live-mobile .m-controlbar-mobile .liveinfo .livetitp {
            font-size: 36px;
        }

        .u-edu-h5player-moreMenu-mobile {
            position: absolute;
            bottom: 1.328125rem;
            left: 50%;
            transform: translateX(-50%);
            -ms-transform: translateX(-50%);
            -moz-transform: translateX(-50%);
            -webkit-transform: translateX(-50%);
            -o-transform: translateX(-50%);
            box-sizing: border-box;
            width: 6.25rem;
            border-radius: 4px;
            padding: 0 .3125rem;
            color: #999;
            background-color: #333;
            z-index: 10;
            font-size: 14px;
        }

        [data-dpr="2"] .u-edu-h5player-moreMenu-mobile {
            font-size: 28px;
        }

        [data-dpr="3"] .u-edu-h5player-moreMenu-mobile {
            font-size: 42px;
        }

        .u-edu-h5player-moreMenu-mobile section {
            padding: .3125rem 0;
        }

        .u-edu-h5player-moreMenu-mobile hr {
            width: 100%;
            height: 1px;
            background-color: #666;
            border: none;
            margin: 0;
        }

        .u-edu-h5player-moreMenu-mobile h4 {
            width: 1.5625rem;
            float: left;
            line-height: .5625rem;
        }

        .u-edu-h5player-moreMenu-mobile ol {
            width: 4.0625rem;
            float: left;
        }

        .u-edu-h5player-moreMenu-mobile ol li {
            float: left;
            width: 33.3%;
            line-height: .5625rem;
        }

        .u-edu-h5player-moreMenu-mobile ol li.active {
            color: #fff;
        }

        .u-edu-h5player-srtmobile-wrap {
            z-index: 4;
            bottom: 20px;
            position: absolute;
            left: 0;
            width: 100%;
        }

        .u-edu-h5player-srtmobile-wrap .u-edu-h5player-srtmobile {
            position: relative;
            width: 80%;
            margin: 0 auto;
            padding: 6px;
            text-align: center;
        }

        .u-edu-h5player-srtmobile-wrap .u-edu-h5player-srtmobile .srt_item {
            display: none;
            line-height: 1.2;
            font-size: 18px;
            color: #fff;
            text-shadow: 0px 3px 2px #000, -1px 0px 5px #000, 0px -2px 2px #000, 3px 0px 3px #000;
            word-wrap: break-word;
        }

        .u-edu-h5player-srtmobile-wrap .u-edu-h5player-srtmobile .srt_item.z-show {
            display: block;
        }

        @media screen and (orientation: portrait) {
            .u-edu-h5player-srtmobile-wrap .u-edu-h5player-srtmobile .srt_item {
                font-size: 12px !important;
            }
        }

        .ux-video-player {
            position: relative;
            width: 100%;
            height: 100%;
        }

        .ux-edu-pdfviewer {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }

        .ux-edu-pdfviewer .sliderWrapper {
            position: absolute;
            left: 0;
            top: 0;
            width: 999999px;
            height: 100%;
            -webkit-transition: all 0.2s ease-in-out;
            -moz-transition: all 0.2s ease-in-out;
            transition: all 0.2s ease-in-out;
        }

        .ux-edu-pdfviewer .slider {
            float: left;
            height: 100%;
            width: auto;
            background-color: #fff;
            overflow: auto;
        }

        .ux-edu-pdfviewer .slidertable {
            display: table;
            margin: 0 auto;
            height: 100%;
        }

        .ux-edu-pdfviewer .canvasWrapper {
            overflow: hidden;
        }

        .ux-edu-pdfviewer .page {
            width: 100px;
            height: 100px;
            position: relative;
            overflow: visible;
            background-color: #fff;
            margin: 0 auto;
            display: table-cell;
            vertical-align: middle;
        }

        .ux-edu-pdfviewer .page canvas {
            margin: 0;
            display: block;
        }

        .ux-edu-pdfviewer .page canvas[hidden] {
            display: none;
        }

        .ux-edu-pdfviewer .page .loadingIcon {
            position: absolute;
            display: block;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            background: url('http://edu-image.nosdn.127.net/55965a55-366e-4ae1-83d8-990e0de89477.gif?imageView&quality=100') center no-repeat;
        }

        .ux-h5pdfreader-error .emid {
            font-size: 14px;
            line-height: .48rem;
            height: .48rem;
            width: 100%;
            position: absolute;
            left: 0;
            top: 40%;
            margin-top: -.6666666667rem;
            text-align: center;
            color: #999
        }

        .auto-1524789536727 .info span {
            color: #d62727;
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
            line-height1:9px;
        }

        .auto-1524789536729 p {
            line-height: 20px;
            color: #333;
            font-size: 12px;
            margin-top: 10px;
        }

        .ux-dropdown_listview li {
            cursor: pointer;
            padding: 0 12px
        }

        .ux-dropdown_listview li:hover {
            background-color: #f3f6f7
        }
    </style>

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
<div id="g-container">
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
        <div class="m-cbg"></div>
        <div class="g-wrap f-cb" id="auto-id-1524789537185">
            <!--左侧边栏-->
            <div class="g-sd1">
                <div class="m-learnleft">
                    <div id="j-courseTabList">
                        <a class="u-learnProgress-tab j-tabitem f-f0 f-fc3 f-cb" data-type="30" href="myTopic.jsp">
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
                            <li class="u-greentab j-tabitem f-f0 last u-curtab" data-name="讨论区" data-type="7"
                                data-id="2001487096">
                                <a class="f-thide f-fc3" href="forum.jsp">讨论区</a>
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
                                <a href="forum.jsp">讨论区</a>
                                <span class="f-icon split"></span>
                                <a href="generalArea.jsp">综合讨论区</a>
                                <span class="f-icon split"></span>
                                <span>主题详情</span>
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
                                            <p>内容.<br/><br/><img src="static/illustration.jpg"></p>
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
                                                <div class="f-fl j-editDivider divider">|</div>
                                                <a hidefocus="true" class="f-fl f-fc9 editBtn j-editBtn"
                                                   id="auto-id-1524789536985">编辑</a>
                                            </div>
                                            <div class="f-fr votebox j-vote">
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
                                    <div class="j-reply-sort f-fr auto-1524789536707-parent">
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
                                                             id="auto-id-1524789537474"><p>回复1<br></p></div>
                                                        <div class="bar f-cb">
                                                            <div class="f-fl name j-name">
                                                                <span>
                                                                    <span class="userInfo j-userInfo" title="">
                                                                        <a class="f-fcgreen userName" href="#" title="140410402">140410402</a>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                            <div class="f-fl f-fc9 time j-time">于2018年04月11日发表</div>
                                                            <div class="f-fr j-manBox" style="display: none;"></div>
                                                            <a hidefocus="true" class="f-fr f-fc9 opt delBtn j-delBtn" style="display: none;">删除</a>
                                                            <div class="j-delDivider f-fr divider" style="display: none">|</div>
                                                            <a hidefocus="true" class="f-fr f-fc9 opt cmtBtn j-cmtBtn">评论(2)</a>
                                                            <div class="j-cmtDivider f-fr divider">|</div>
                                                            <div class="f-fr votebox j-vote">
                                                                <div class="f-cb auto-1524789536688">
                                                                    <div class="up f-fl j-up hvr" title="顶"></div>
                                                                    <p class="num f-fl f-thide j-num" title="0">0</p>
                                                                    <div class="down f-fl j-down hvr" title="踩"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <!--回复1之回复1-->
                                                    <div class="m-commentWrapper f-pr f-cb auto-1524789536703"
                                                         id="auto-id-1524789537352" style="z-index: 99;">
                                                        <div class="wrap f-fr" id="auto-id-1524789537351">
                                                            <div class="m-comment-pool j-commentpool auto-1524789536595-parent"
                                                                 id="auto-id-1524789537778">
                                                                <div class="m-basepool f-cb auto-1524789536595"
                                                                     id="auto-id-1524789537777">
                                                                    <div class="j-list" style=""
                                                                         id="auto-id-1524789537776">
                                                                        <div class="m-data-lists f-cb f-pr j-data-list auto-1524789536701-parent"
                                                                             id="auto-id-1524789537775">
                                                                            <div class="auto-1524789536701 auto-1524789536697-parent first">
                                                                                <div class="m-detailInfoItem f-pr auto-1524789536697"
                                                                                     id="auto-id-1524789537773">
                                                                                    <div class="tagCt f-cb j-tagBox"
                                                                                         style="display: none;">
                                                                                        <div class="u-forumtag u-forumtag1 j-tagTopNode">
                                                                                            置顶
                                                                                        </div>
                                                                                        <div class="u-forumtag j-tagAgreeNode">
                                                                                            赞同
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="f-richEditorText j-content edueditor_styleclass_2"><p>回复</p></div>
                                                                                    <div class="bar f-cb">
                                                                                        <div class="f-fl name j-name">
                                                                                            <span>
                                                                                                <span class="userInfo j-userInfo"
                                                                                                      title="">
                                                                                                    <a class="f-fcgreen userName"
                                                                                                       href="#"
                                                                                                       title="140410403">140410403</a>
                                                                                                </span>
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="f-fl f-fc9 time j-time">
                                                                                            于2018年04月12日发表
                                                                                        </div>
                                                                                        <div class="f-fr j-manBox"
                                                                                             style="display: none;"></div>
                                                                                        <a hidefocus="true"
                                                                                           class="f-fr f-fc9 opt delBtn j-delBtn"
                                                                                           id="auto-id-1524789537441" style="display: none;">删除</a>
                                                                                        <div class="j-delDivider f-fr divider" style="display:none">
                                                                                            |
                                                                                        </div>
                                                                                        <a hidefocus="true"
                                                                                           class="f-fr f-fc9 opt cmtBtn j-cmtBtn"
                                                                                           style="display: none;">评论(0)</a>
                                                                                        <div class="j-cmtDivider f-fr divider"
                                                                                             style="display: none;">|
                                                                                        </div>
                                                                                        <div class="f-fr votebox j-vote auto-1524789536688-parent">
                                                                                            <div class="f-cb auto-1524789536688">
                                                                                                <div class="up f-fl j-up hvr"
                                                                                                     title="顶"></div>
                                                                                                <p class="num f-fl f-thide j-num"
                                                                                                   title="0">0</p>
                                                                                                <div class="down f-fl j-down hvr"
                                                                                                     title="踩"></div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <!--回复一之回复二-->
                                                                            <div class="auto-1524789536701 auto-1524789536697-parent last">
                                                                                <div class="m-detailInfoItem f-pr auto-1524789536697"
                                                                                     style="z-index: 100;">
                                                                                    <div class="tagCt f-cb j-tagBox"
                                                                                         style="display: none;">
                                                                                        <div class="u-forumtag u-forumtag1 j-tagTopNode">
                                                                                            置顶
                                                                                        </div>
                                                                                        <div class="u-forumtag j-tagAgreeNode">
                                                                                            赞同
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="f-richEditorText j-content edueditor_styleclass_3 edueditor_styleclass_5"><p>回复</p></div>
                                                                                    <div class="bar f-cb"
                                                                                         id="auto-id-1524789537475">
                                                                                        <div class="f-fl name j-name auto-1524789536686-parent">
                                                                                            <span>
                                                                                                <span class="userInfo j-userInfo"
                                                                                                      title="">
                                                                                                    <a class="f-fcgreen userName"
                                                                                                       href="#"
                                                                                                       title="140410402">140410402</a>
                                                                                                </span>
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="f-fl f-fc9 time j-time">
                                                                                            于2018年04月13日发表
                                                                                        </div>
                                                                                        <div class="f-fr j-manBox"
                                                                                             style="display: none;"></div>
                                                                                        <a hidefocus="true"
                                                                                           class="f-fr f-fc9 opt delBtn j-delBtn"
                                                                                           id="auto-id-1524789537463" style="display: none;">删除</a>
                                                                                        <div class="j-delDivider f-fr divider" style="display: none;">
                                                                                            |
                                                                                        </div>
                                                                                        <a hidefocus="true"
                                                                                           class="f-fr f-fc9 opt cmtBtn j-cmtBtn"
                                                                                           id="auto-id-1524789537464"
                                                                                           style="display: none;">评论(0)</a>
                                                                                        <div class="j-cmtDivider f-fr divider"
                                                                                             style="display: none;">|
                                                                                        </div>
                                                                                        <div class="f-fr votebox j-vote">
                                                                                            <div class="f-cb auto-1524789536688">
                                                                                                <div class="up f-fl j-up hvr"
                                                                                                     title="顶"></div>
                                                                                                <p class="num f-fl f-thide j-num"
                                                                                                   title="0">0</p>
                                                                                                <div class="down f-fl j-down hvr"
                                                                                                     title="踩"></div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="u-pager f-pr j-data-pager">
                                                                            <div>
                                                                                <a href="#"
                                                                                   class="zbtn zprv js-disabled">上一页</a>
                                                                                <a href="#"
                                                                                   class="zpgi zpg1 js-selected">1</a>
                                                                                <a href="#" class="zpgi zpg2"
                                                                                   style="display: none;"></a>
                                                                                <a href="#" class="zpgi zpg3"
                                                                                   style="display: none;"></a>
                                                                                <a href="#" class="zpgi zpg4"
                                                                                   style="display: none;"></a>
                                                                                <a href="#" class="zpgi zpg5"
                                                                                   style="display: none;"></a>
                                                                                <a href="#" class="zpgi zpg6"
                                                                                   style="display: none;"></a>
                                                                                <a href="#" class="zpgi zpg7"
                                                                                   style="display: none;"></a>
                                                                                <a href="#" class="zpgi zpg8"
                                                                                   style="display: none;"></a>
                                                                                <a href="#" class="zpgi zpg9"
                                                                                   style="display: none;"></a>
                                                                                <a href="#"
                                                                                   class="zbtn znxt js-disabled">下一页</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="j-none empty" style="display: none;">
                                                                        <span class="f-f0 f-fc9 j-none-txt f-ib"></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="m-add-comment j-addcomment">
                                                                <div class="auto-1524789536699">
                                                                    <p class="small j-unlogbox" style="display: none;">
                                                                        发表观点要登录哦！点击
                                                                        <a hidefocus="true" class="j-loginbtn loginbtn">登录</a>
                                                                    </p>
                                                                    <p class="small j-logupbox" style="">添加评论...</p>
                                                                    <div class="j-logdownbox"
                                                                         style="display: none;"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="j-triangle triangle" style="right: 100px;"></div>
                                                    </div>
                                                </div>
                                                <div class="f-pr last" style="z-index: 0;">
                                                    <div class="m-detailInfoItem f-pr auto-1524789536697"
                                                         style="z-index: 100;">
                                                        <div class="tagCt f-cb j-tagBox" style="display: none;">
                                                            <div class="u-forumtag u-forumtag1 j-tagTopNode">置顶</div>
                                                            <div class="u-forumtag j-tagAgreeNode">赞同</div>
                                                        </div>
                                                        <div class="f-richEditorText j-content edueditor_styleclass_1 edueditor_styleclass_4"><p>回复2</p></div>
                                                        <div class="bar f-cb">
                                                            <div class="f-fl name j-name">
                                                                <span>
                                                                    <span class="userInfo j-userInfo" title="">
                                                                    <a class="f-fcgreen userName" href=""
                                                                       title="140410405">140410405</a>
                                                                </span>
                                                                </span>
                                                            </div>
                                                            <div class="f-fl f-fc9 time j-time">于2018年04月11日发表</div>
                                                            <div class="f-fr j-manBox" style="display: none;"></div>
                                                            <a hidefocus="true" class="f-fr f-fc9 opt delBtn j-delBtn" style="display: none">删除</a>
                                                            <div class="j-delDivider f-fr divider" style="display:none">|</div>
                                                            <a hidefocus="true" class="f-fr f-fc9 opt cmtBtn j-cmtBtn"
                                                               style="">评论(0)</a>
                                                            <div class="j-cmtDivider f-fr divider" style="">|</div>
                                                            <div class="f-fr votebox j-vote">
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
                                            <div class="u-pager f-pr j-data-pager">
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
                                <div class="j-reply-add auto-1524789536695-parent" id="auto-id-1524789537456">
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
                                                        <iframe id="ueditor_6" width="100%" height="100%" frameborder="0" src="javascript:void(function(){document.open();document.write(&quot;&lt;!DOCTYPE html&gt;&lt;html xmlns=&#39;http://www.w3.org/1999/xhtml&#39; class=&#39;view&#39; &gt;&lt;head&gt;&lt;style type=&#39;text/css&#39;&gt;.view{padding:0;word-wrap:break-word;cursor:text;height:90%;}
body{margin:8px;font-family:sans-serif;font-size:16px;}p{margin:5px 0;}&lt;/style&gt;&lt;style&gt;.view{ font-size:12px; border:0; text-align:left; color:#666; line-height:22px; word-break:break-word; word-wrap:break-word;}                        .view em{ font-style:italic;}                        .view p{ margin:0; padding:0;}                        .view div{ margin:10px 0; padding:0;}                        .view sup, .view blockquote{ border-left:3px solid #D0E5F2; font-style:normal; padding: 0 0 0 10px; vertical-align:baseline; margin:0; font-size:14px;}                        .viewimg{ max-height:520px; max-width:520px; vertical-align:middle;}                        .view code{ min-height:25px; font-family:monospace; white-space:pre-wrap; margin:.5em 0; padding:.4em .6em; border-radius:8px; background:#EFEFEF;}                        .view table{ border-collapse:collapse; border-spacing:0; border:1px solid #E4E4E4}                        .view table th, .view table td{ border:1px solid #E4E4E4; padding:5px;}&lt;/style&gt;&lt;/head&gt;&lt;body class=&#39;view&#39; &gt;&lt;/body&gt;&lt;script type=&#39;text/javascript&#39;  id=&#39;_initialScript&#39;&gt;setTimeout(function(){editor = window.parent.UE.instants[&#39;ueditorInstant6&#39;];editor.setup(document);},0);var _tmpScript = document.getElementById(&#39;_initialScript&#39;);_tmpScript.parentNode.removeChild(_tmpScript);&lt;/script&gt;&lt;/html&gt;&quot;);document.close();}())"
                                                                src="static/saved_resource.html"></iframe>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="rich-opt f-cb" id="auto-id-1524789537453">
                                                <label class="j-anony f-fl" style="display:none">
                                                <input type="checkbox" hidefocus="true" class="j-anonycheck">
                                                    &nbsp;&nbsp;匿名发表</label>
                                                <a hidefocus="true"
                                                   class="j-edit-btn editbtn u-btn u-btn-sm u-btn-primary f-fr"
                                                   id="auto-id-1524789537035">发表回复</a>
                                                <a hidefocus="true" class="j-close-btn cancelbtn f-fc9 f-fr" id="auto-id-1524789537036" style="display: none;">取消</a>
                                            </div>
                                        </div>
                                        <div class="unlogin j-unloginbox" style="display: none;">
                                            <div class="autowrap f-cb"><p class="f-fl">发表观点要登录哦！</p>
                                                <a hidefocus="true" class="j-login-btn loginbtn u-btn u-btn-sm u-btn-primary f-fl" id="auto-id-1524789537037">立即登录</a>
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