<%@page contentType="text/html;charset=utf-8" %>
<html>
<head>
    <title>主题详情</title>
    <!--样式-->
    <link rel="stylesheet" href="static/core_e47b1ded06977727b0dc00ac5fae1259.css">
    <link rel="stylesheet" href="static/pt_newpages_course_learn.css">
    <style type="text/css">
        @charset "UTF-8";
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

        @charset "UTF-8";
        .editor-video2 .upload_ipt {
            height: 100%;
            left: 0;
            opacity: 0;
            position: absolute;
            top: 0;
            width: 100%;
        }

        .editor-video2:hover .video2-content_wrap {
            display: block;
        }

        .editor-video2 .video2-content_wrap {
            display: none;
        }

        .editor-video2 .video2-content {
            background: #fff;
            border: 1px solid #eee;
            -webkit-box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1);
            -moz-box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1);
            box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1);
            border-radius: 6px;
            box-sizing: border-box;
            height: 88px;
            overflow: scroll;
            padding: 7px 10px 12px;
            width: 250px;
        }

        .u-upload {
            position: relative;
            display: inline-block;
        }

        .u-upload .showIpt {
            text-align: center;
            overflow: hidden;
        }

        .u-upload .filewrap {
            overflow: hidden;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        .u-upload .realIpt {
            font-size: 100px;
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            filter: alpha(opacity=0);
            opacity: 0;
            cursor: pointer;
            width: 100%;
            height: 100%;
        }

        .ux-btn {
            -webkit-appearance: none;
            margin: 0;
            overflow: visible;
            text-transform: none;
            text-decoration: none;
            cursor: pointer;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            display: inline-block;
            vertical-align: middle;
            text-align: center;
            padding: 0 12px;
            height: 34px;
            line-height: 34px;
            border-width: 1px;
            border-style: solid;
            font-size: 14px;
            border-radius: 2px
        }

        .ux-btn:hover, .ux-btn:focus {
            outline: none;
            text-decoration: none
        }

        .ux-btn-xs {
            padding: 0 5px;
            height: 14px;
            line-height: 14px;
            font-size: 10px
        }

        .ux-btn-sm {
            padding: 0 10px;
            height: 22px;
            line-height: 22px;
            font-size: 12px
        }

        .ux-btn-lg {
            padding: 0 16px;
            height: 40px;
            line-height: 40px;
            font-size: 16px
        }

        .ux-btn-xl {
            padding: 0 20px;
            height: 44px;
            line-height: 44px;
            font-size: 18px
        }

        .ux-btn-w100 {
            width: 100px
        }

        .ux-btn-w110 {
            width: 110px
        }

        .ux-btn-w120 {
            width: 120px
        }

        .ux-btn-w130 {
            width: 130px
        }

        .ux-btn-w140 {
            width: 140px
        }

        .ux-btn-w140 {
            width: 150px
        }

        .ux-btn-w160 {
            width: 160px
        }

        .ux-btn-w170 {
            width: 170px
        }

        .ux-btn-w180 {
            width: 180px
        }

        .ux-btn-w190 {
            width: 190px
        }

        .ux-btn-w200 {
            width: 200px
        }

        .ux-btn-w210 {
            width: 210px
        }

        .ux-btn-w220 {
            width: 220px
        }

        .ux-btn-w300 {
            width: 300px
        }

        .ux-btn-w400 {
            width: 400px
        }

        .ux-btn-w500 {
            width: 500px
        }

        .ux-btn-w600 {
            width: 600px
        }

        .ux-btn-primary {
            background: transparent;
            color: #e84807;
            border: 1px solid #e84807
        }

        .ux-btn-primary:hover, .ux-btn-primary:focus {
            background: #e84807;
            color: #fff;
            border: 1px solid #e84807
        }

        .ux-btn-primary:active, .ux-btn-primary.ux-btn-act {
            background: #e84807;
            color: #fff;
            border: 1px solid #e84807
        }

        .ux-btn-primary:disabled, .ux-btn-primary.ux-btn-dis {
            background: transparent;
            border: 1px solid #e84807
        }

        .ux-btn-warning {
            background: transparent;
            color: #ff513a;
            border: 1px solid #ff513a
        }

        .ux-btn-warning:hover, .ux-btn-warning:focus {
            background: #ff513a;
            color: #fff;
            border: 1px solid #ff513a
        }

        .ux-btn-warning:active, .ux-btn-warning.ux-btn-act {
            background: #ff513a;
            color: #fff;
            border: 1px solid #ff513a
        }

        .ux-btn-warning:disabled, .ux-btn-warning.ux-btn-dis {
            background: transparent;
            border: 1px solid #ff513a
        }

        .ux-btn-disabled {
            background: #cacecf;
            color: #fff;
            border: 1px solid #cacecf
        }

        .ux-btn-disabled:hover, .ux-btn-disabled:focus {
            background: #cacecf;
            color: #fff;
            border: 1px solid #cacecf
        }

        .ux-btn-disabled:active, .ux-btn-disabled.ux-btn-act {
            background: #cacecf;
            color: #fff;
            border: 1px solid #cacecf
        }

        .ux-btn-disabled:disabled, .ux-btn-disabled.ux-btn-dis {
            background: #cacecf;
            border: 1px solid #cacecf
        }

        .ux-btn-success {
            background: #00a65a;
            color: #fff;
            border: 1px solid #008d4c
        }

        .ux-btn-success:hover, .ux-btn-success:focus {
            background: #008d4c;
            border: 1px solid #008d4c
        }

        .ux-btn-success:active, .ux-btn-success.ux-btn-act {
            background: #008d4c;
            border: 1px solid #008d4c
        }

        .ux-btn-success:disabled, .ux-btn-success.ux-btn-dis {
            background: #00a65a;
            border: 1px solid #008d4c
        }

        .ux-btn-error {
            background: #ff513a;
            color: #fff;
            border: 1px solid #d73925
        }

        .ux-btn-error:hover, .ux-btn-error:focus {
            background: #d73925;
            border: 1px solid #d73925
        }

        .ux-btn-error:active, .ux-btn-error.ux-btn-act {
            background: #d73925;
            border: 1px solid #d73925
        }

        .ux-btn-error:disabled, .ux-btn-error.ux-btn-dis {
            background: #ff513a;
            border: 1px solid #d73925
        }

        .ux-btn-gh {
            background: transparent;
            color: #e84807;
            border: 1px solid #e84807
        }

        .ux-btn-gh:hover, .ux-btn-gh:focus {
            background: #e84807;
            color: #fff;
            border: 1px solid #e84807
        }

        .ux-btn-gh:active, .ux-btn-gh.ux-btn-act {
            background: #e84807;
            color: #fff;
            border: 1px solid #e84807
        }

        .ux-btn-gh:disabled, .ux-btn-gh.ux-btn-dis {
            background: transparent;
            border: 1px solid #e84807
        }

        .ux-btn-disabled {
            cursor: not-allowed
        }

        /*# sourceMappingURL=component.css.map */
        .ux-search {
            font-size: 0
        }

        .ux-search .ux-input {
            border-color: #ddd;
            border-radius: 0;
            border-right: none
        }

        .ux-search .ux-input2_reset {
            color: #ddd;
            right: 1px
        }

        .ux-search .ux-input2_reset:hover {
            color: #dfdfdf
        }

        .ux-search .ux-tip {
            position: absolute;
            left: 0;
            top: 35px;
            padding-left: 0
        }

        .ux-search .ux-btn {
            background: #fff;
            color: #ddd;
            border-color: #ddd;
            vertical-align: top;
            border-radius: 0;
            border-left: none;
            padding: 0 9px
        }

        .ux-search .ux-btn:hover {
            background: #fff;
            color: #ddd;
            border-color: #ddd
        }

        .ux-search .ux-input:focus {
            box-shadow: none
        }

        .ux-search .ux-icon-search {
            font-size: 1.3em;
            display: inline-block;
            position: relative;
            top: 2px
        }

        /*# sourceMappingURL=component.css.map */
        .ux-pager {
            text-align: center;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            font-size: 14px
        }

        .ux-pager.z-hdn {
            display: none
        }

        .ux-pager_itm, .ux-pager_btn, .ux-pager_sep {
            margin: 0 2px;
            display: inline-block;
            text-align: center
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

        .ux-pager__left {
            text-align: left
        }

        .ux-pager__right {
            text-align: right
        }

        /*# sourceMappingURL=component.css.map */
        .ux-check {
            cursor: pointer;
            display: inline-block
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

        .ux-check-block {
            display: block
        }

        /*# sourceMappingURL=component.css.map */
        .ux-dropdown-check {
            display: inline-block;
            vertical-align: middle;
            position: relative;
            color: #666;
            line-height: 32px;
            font-size: 14px;
            background: #fff
        }

        .ux-dropdown-check_hd {
            border: 1px solid #e84807;
            color: #e84807;
            border-radius: 2px;
            height: 34px;
            padding: 0 20px;
            box-sizing: border-box;
            cursor: pointer;
            text-align: center
        }

        .ux-dropdown-check_open {
            background-color: #e84807;
            color: white
        }

        .ux-dropdown-check_bd {
            position: absolute;
            z-index: 1;
            top: 100%;
            min-width: 160px;
            margin-top: 2px;
            background: #fff;
            width: 100%
        }

        .ux-dropdown-check_listview {
            border: 1px solid #e4e8e9;
            box-shadow: 1px 1px 10px #E4F9E5;
            overflow-x: hidden;
            box-sizing: border-box;
            list-style-type: none
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
            background-image: url(//yc.stu.126.net/res/component-table/images/default.png?e44e4160f02f84fadb6569064dc5df20);
            background-position: -7px 0;
            width: 7px;
            height: 11px;
        }

        .ux-table table thead .head th .sortbtn.up:after {
            background-image: url(//yc.stu.126.net/res/component-table/images/sortup.png?0d890d2032f5f469cdd2429f0b5cc2fc);
            background-position: -7px 0;
            width: 7px;
            height: 11px;
        }

        .ux-table table thead .head th .sortbtn.down:after {
            background-image: url(//yc.stu.126.net/res/component-table/images/sortdown.png?891bbf6ef3520e53c1a58dca14cefe46);
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

        .ux-table-border .ux-dropdown-check .ux-dropdown-check_hd {
            width: 35px;
            padding: 0;
            border: 0;
            background-color: #f2f5f5;
            min-width: inherit;
        }

        .ux-table-border .ux-dropdown-check .ux-dropdown-check_open {
            color: #e84807;
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

        .ux-commonempty {
            width: 100%
        }

        .ux-commonempty_self {
            font-size: 40px;
            color: #ccc;
            text-align: center;
            margin-bottom: 6px
        }

        .ux-commonempty_txt {
            color: #999;
            font-size: 14px;
            line-height: 20px;
            text-align: center
        }

        /*# sourceMappingURL=component.css.map */
        @charset "UTF-8";
        .ux-richeditor-video-selector-dialog {
            box-sizing: border-box;
            padding: 30px 40px 0 40px !important;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

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
            background-image: url(//yc.stu.126.net/res/component-editor/images/articleEditor.png?1dda4d1ced2a0fe4ac1d75cdc3c5a2ea);
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

        .ux-richeditor-video-selector-dialog .m-video-selector-footer-to-video-lib {
            display: block;
            position: absolute;
            right: 0px;
            top: 50px;
            width: 85px;
            height: 19px;
            line-height: 19px;
            font-size: 14px;
            color: #e84807;
            cursor: pointer;
        }

        .ux-uploadprocess {
            height: 95px;
            padding: 15px
        }

        .ux-uploadprocess .filename {
            font-size: 13px;
            color: #343d42;
            line-height: 20px;
            padding-top: 15px
        }

        .ux-uploadprocess .pwrap .percentwrap {
            margin-right: 80px;
            padding-top: 10px
        }

        .ux-uploadprocess .pwrap .percentwrap .plinebg {
            background-color: #e4e8e9;
            height: 6px;
            width: 100%;
            margin-bottom: 10px;
            border-radius: 3px
        }

        .ux-uploadprocess .pwrap .percentwrap .plinebg .pline {
            float: left;
            width: 0;
            height: 6px;
            background-color: #e84807;
            border-radius: 3px
        }

        .ux-uploadprocess .pwrap .percentwrap .ptxt {
            font-size: 13px;
            line-height: 1;
            color: #859295
        }

        .ux-uploadprocess .pwrap .percentwrap .ptxt span.info {
            margin-right: 20px
        }

        .ux-uploadprocess .pwrap .abortwrap {
            position: absolute;
            top: 47px;
            right: 20px
        }

        .ux-uploadprocess .pwrap .abortwrap .abortbtn {
            color: #859295;
            font-size: 14px;
            line-height: 30px;
            width: 60px;
            text-align: center
        }

        /*# sourceMappingURL=component.css.map */
        @charset "UTF-8"; /* em-base */ /* Height */ /* Font Size */ /* Padding */ /* Border Radius */ /* Brand Colors */ /* Gray Colors */ /* Base Colors */ /* Shadow */ /* dropdown */ /* Dimensions */ /* Colors */ /* Form Control Item */ /* Font Family */ /* 衬线字体 */ /* 非衬线字体 */
        .ux-modal {
            opacity: 0;
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 1000;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            touch-action: cross-slide-y pinch-zoom double-tap-zoom;
            text-align: center;
            background: rgba(0, 0, 0, 0.3);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#4c000000, endColorstr=#4c000000);
        }

        .ux-modal .f-dib {
            display: inline-block;
        }

        .ux-modal .f-pdt10 {
            padding-top: 10px;
        }

        .ux-modal:before {
            content: '';
            display: inline-block;
            vertical-align: middle;
            height: 100%;
        }

        .ux-modal_dialog {
            display: inline-block;
            vertical-align: middle;
            text-align: left;
            min-width: 440px;
            background: white;
            border: 1px solid #999 \9;
            border-radius: 2px;
        }

        .ux-modal_title, .ux-modal_content_title {
            font-size: 16px;
            margin: 20px 20px -5px;
            line-height: 24px;
        }

        .ux-modal_content {
            font-size: 14px;
        }

        .ux-modal_hd {
            padding: 20px 20px 20px;
        }

        .ux-modal_close {
            float: right;
            font-size: 14px;
            color: #999;
            cursor: pointer;
        }

        .ux-modal_close:hover {
            text-decoration: none;
        }

        .ux-modal_hd.z-draggable {
            cursor: move;
            cursor: -webkit-grab;
        }

        .z-drag .ux-modal_hd.z-draggable {
            cursor: move;
            cursor: -webkit-grabbing;
        }

        .ux-modal_bd {
            padding: 0 40px 40px;
            min-height: 10px;
            font-size: 16px;
        }

        .ux-modal_bd_ct {
            padding-bottom: 30px;
        }

        .ux-modal_icon {
            display: inline-block;
            float: left;
        }

        .ux-modal_warn {
            color: #efc702;
            font-size: 48px;
        }

        .ux-modal_info {
            color: #157eee;
            font-size: 48px;
        }

        .ux-modal_success {
            color: #51d549;
            font-size: 48px;
        }

        .ux-modal_error {
            color: #ff513a;
            font-size: 48px;
        }

        .ux-modal_ft, .ux-modal_content_ft {
            margin: 0 40px 40px 0;
            text-align: right;
            font-size: 14px;
            white-space: nowrap;
        }

        .ux-modal_ft .ux-modal-btn, .ux-modal_content_ft .ux-modal-btn {
            margin-left: 16px;
            min-width: 82px;
            height: 34px;
            line-height: 34px;
        }

        .ux-modal_content {
            float: left;
            display: inline-block;
            margin-left: 20px;
            width: 292px;
        }

        .ux-modal_content_content {
            line-height: 22px;
        }

        .ux-modal_content_title {
            margin-top: 0;
            margin-left: 0;
            margin-bottom: 10px;
        }

        .ux-modal_content_ft {
            margin: 30px 0 0;
        }

        .ux-modal_content_ft .ux-modal-btn {
            margin-left: 7px;
        }

        @media (max-width: 767px) {
            .ux-modal .ux-modal_dialog {
                width: auto;
            }
        }

        .ux-modal-fadeIn {
            opacity: 1;
            transition: opacity 200ms;
        }

        .ux-modal-fadeOut {
            opacity: 1;
        }

        .ux-modal-fadeOut-active {
            opacity: 0;
            transition: opacity 300ms;
        }

        html.z-modal, html.z-modal body {
            overflow: hidden;
        }

        /*# sourceMappingURL=component.css.map */
        @charset "UTF-8"; /* custom file upload */
        .u-custom-file-upload {
            height: 125px; /* 上传组件样式重写 */
        }

        .u-custom-file-upload .btnwrap {
            padding: 45px 15px;
        }

        .u-custom-file-upload .processwrap {
            background-color: #eef3f4;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
        }

        /*# sourceMappingURL=component.css.map */
        @charset "UTF-8";
        .ux-richeditor {
            width: auto;
            border: 1px solid #dfdfdf;
            text-align: center;
            position: relative;
        }

        .ux-richeditor .zbg {
            background: url(//yc.stu.126.net/res/component-editor/images/richEditor.png?0eb9d071697af282481e12e9102817f0) no-repeat 4999px 4999px;
        }

        .ux-richeditor .zarea {
            background: #fff;
            width: 100%;
        }

        .ux-richeditor .ztbar {
            background-color: #f1f1f1;
            border-bottom: 1px solid #dfdfdf;
        }

        .ux-richeditor .ztbar_wrap {
            padding: 0 7px;
        }

        .ux-richeditor .ztbar:after {
            display: block;
            clear: both;
            visibility: hidden;
            height: 0;
            content: ".";
        }

        .ux-richeditor .zitm {
            float: left;
            width: 24px;
            height: 24px;
            margin: 7px 1px;
            cursor: pointer;
            position: relative;
        }

        .ux-richeditor .zitm:hover .zicn, .ux-richeditor .zitm.js-checked .zicn {
            background-color: #d0d0d0;
        }

        .ux-richeditor .zitm.js-disabled, .ux-richeditor .zitm.js-disabled:hover {
            cursor: default;
            background: #f1f1f1 !important;
        }

        .ux-richeditor .zitm .zicn {
            width: 24px;
            height: 24px;
            margin: 0;
            overflow: hidden;
            text-indent: 100px;
        }

        .ux-richeditor .z-i-0 .zicn {
            background-position: 0 0;
        }

        .ux-richeditor .z-i-0.js-disabled .zicn {
            cursor: default;
            background-position: 0 -24px;
        }

        .ux-richeditor .z-i-1 .zicn {
            background-position: -24px 0;
        }

        .ux-richeditor .z-i-1.js-disabled .zicn {
            cursor: default;
            background-position: -24px -24px;
        }

        .ux-richeditor .z-i-2 .zicn {
            background-position: -48px 0;
        }

        .ux-richeditor .z-i-2.js-disabled .zicn {
            cursor: default;
            background-position: -48px -24px;
        }

        .ux-richeditor .z-i-3 .zicn {
            background-position: -72px 0;
        }

        .ux-richeditor .z-i-3.js-disabled .zicn {
            cursor: default;
            background-position: -72px -24px;
        }

        .ux-richeditor .z-i-4 .zicn {
            background-position: -96px 0;
        }

        .ux-richeditor .z-i-4.js-disabled .zicn {
            cursor: default;
            background-position: -96px -24px;
        }

        .ux-richeditor .z-i-5 .zicn {
            background-position: -120px 0;
        }

        .ux-richeditor .z-i-5.js-disabled .zicn {
            cursor: default;
            background-position: -120px -24px;
        }

        .ux-richeditor .z-i-6 .zicn {
            background-position: -144px 0;
        }

        .ux-richeditor .z-i-6.js-disabled .zicn {
            cursor: default;
            background-position: -144px -24px;
        }

        .ux-richeditor .z-i-7 .zicn {
            background-position: -168px 0;
        }

        .ux-richeditor .z-i-7.js-disabled .zicn {
            cursor: default;
            background-position: -168px -24px;
        }

        .ux-richeditor .z-i-8 .zicn {
            background-position: -192px 0;
        }

        .ux-richeditor .z-i-8.js-disabled .zicn {
            cursor: default;
            background-position: -192px -24px;
        }

        .ux-richeditor .z-i-9 .zicn {
            background-position: -216px 0;
        }

        .ux-richeditor .z-i-9.js-disabled .zicn {
            cursor: default;
            background-position: -216px -24px;
        }

        .ux-richeditor .z-i-10 .zicn {
            background-position: -240px 0;
        }

        .ux-richeditor .z-i-10.js-disabled .zicn {
            cursor: default;
            background-position: -240px -24px;
        }

        .ux-richeditor .z-i-11 .zicn {
            background-position: -264px 0;
        }

        .ux-richeditor .z-i-11.js-disabled .zicn {
            cursor: default;
            background-position: -264px -24px;
        }

        .ux-richeditor .z-i-12 .zicn {
            background-position: -288px 0;
        }

        .ux-richeditor .z-i-12.js-disabled .zicn {
            cursor: default;
            background-position: -288px -24px;
        }

        .ux-richeditor .z-i-13 .zicn {
            background-position: -320px 0;
        }

        .ux-richeditor .z-i-13.js-disabled .zicn {
            cursor: default;
            background-position: -320px -24px;
        }

        .ux-richeditor .z-i-14 .zicn {
            background-position: -346px 0;
        }

        .ux-richeditor .z-i-14.js-disabled .zicn {
            cursor: default;
            background-position: -346px -24px;
        }

        .ux-richeditor .z-i-15 .zicn {
            background-position: -471px 0;
        }

        .ux-richeditor .z-i-15.js-disabled .zicn {
            cursor: default;
            background-position: -471px -25px;
        }

        .ux-richeditor .z-i-16 .zicn {
            background-position: -398px 0;
        }

        .ux-richeditor .z-i-16.js-disabled .zicn {
            cursor: default;
            background-position: -398px -25px;
        }

        .ux-richeditor .z-i-17 .zicn {
            background-position: -422px 0;
        }

        .ux-richeditor .z-i-17.js-disabled .zicn {
            cursor: default;
            background-position: -422px -25px;
        }

        .ux-richeditor .z-i-18 .zicn {
            background-position: -446px 0;
        }

        .ux-richeditor .z-i-18.js-disabled .zicn {
            cursor: default;
            background-position: -446px -25px;
        }

        .ux-richeditor .z-i-19 .zicn {
            background-position: -495px 0;
        }

        .ux-richeditor .z-i-19.js-disabled .zicn {
            cursor: default;
            background-position: -495px -25px;
        }

        .ux-richeditor .z-i-20 .zicn {
            background-position: -516px 0;
        }

        .ux-richeditor .z-i-20.js-disabled .zicn {
            cursor: default;
            background-position: -516px -25px;
        }

        .ux-richeditor .z-i-removeformat .zicn {
            background-position: -23px -49px;
        }

        .ux-richeditor .z-i-removeformat.js-disabled .zicn {
            cursor: default;
            background-position: -23px -71px;
        }

        .ux-richeditor .zisp {
            float: left;
            width: 1px;
            height: 18px;
            margin: 10px 4px;
            background: #ccc;
        }

        .ux-richeditor .zdlitm {
            float: left;
            height: 22px;
            padding: 0 16px 0 5px;
            margin: 7px 5px;
            cursor: pointer;
            background-color: white;
            border: 1px solid #dfdfdf;
            position: relative;
        }

        .ux-richeditor .zdlitm .up {
            font-size: 12px;
            color: #999;
            line-height: 22px;
        }

        .ux-richeditor .zdlitm .up .txt1 {
            width: 177px;
            height: 25px;
        }

        .ux-richeditor .zdlitm.js-disabled {
            background-color: #fafafa;
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
            background-color: none !important;
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

        .auto-1524789536674 {
        }

        .auto-1524789536674 .sicon {
            font-size: 16px;
            color: #ddd;
            position: absolute;
            top: 3px;
            right: 10px;
            cursor: pointer;
        }

        @charset "UTF-8"; /* em-base */ /* Height */ /* Font Size */ /* Padding */ /* Border Radius */ /* Brand Colors */ /* Gray Colors */ /* Base Colors */ /* Shadow */ /* dropdown */ /* Dimensions */ /* Colors */ /* Form Control Item */ /* Font Family */ /* 衬线字体 */ /* 非衬线字体 */
        .um-modal {
            opacity: 0;
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 1000;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            touch-action: cross-slide-y pinch-zoom double-tap-zoom;
            text-align: center;
            background: rgba(0, 0, 0, 0.3);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#4c000000, endColorstr=#4c000000);
        }

        .um-modal:before {
            content: '';
            display: inline-block;
            vertical-align: middle;
            height: 100%;
        }

        .um-modal_dialog {
            display: inline-block;
            vertical-align: middle;
            text-align: left;
            width: 7.5rem;
            box-sizing: border-box;
            padding: 0.5555555556rem 0.8888888889rem;
            background: white;
            border: 1px solid #999 \9;
            border-radius: 2px;
        }

        .fade-in .um-modal_dialog {
            opacity: 0;
        }

        .um-modal_close {
            top: 20px;
            right: 20px;
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

        .auto-1524789536684 {
            width: 120px;
            top: 6px;
            right: -120px;
            height: 28px;
        }

        .auto-1524789536684 .publishbtn {
            line-height: 22px;
            margin-left: 8px;
            padding: 2px 9px;
            min-width: 0px;
        }

        .auto-1524789536684 .statustxt {
            line-height: 28px;
            margin-left: 8px;
        }

        .auto-1524789536686 .anonyInfo {
            color: #999;
        }

        .auto-1524789536686 .userInfo .type {
            margin: 0 5px;
            padding: 0 5px;
            display: inline-block;
            line-height: 18px;
            color: #fff;
            text-align: center;
        }

        .auto-1524789536686 .userInfo .type.lector {
            background-color: #6CB4FB;
        }

        .auto-1524789536686 .userInfo .type.manager {
            background-color: #9BCE00;
        }

        .auto-1524789536686 .userInfo.fightAttend .userName {
            padding: 5px 5px 5px 24px;
            background: url(/res/images/pages/learn/fight.png) -150px -147px no-repeat;
        }

        .auto-1524789536686 .userInfo .type.assist {
            background-color: #6CB4FB;
        }

        .auto-1524789536688 div {
            cursor: pointer;
            width: 15px;
            height: 15px;
            background: url(//yc.stu.126.net/res/images/ui/forum_icon.png?b12539c2400cc76ad30262bdf7e12cbd) no-repeat -4999px -4999px;
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
            background: url(//yc.stu.126.net/res/images/ui/forum_icon.png?b12539c2400cc76ad30262bdf7e12cbd) no-repeat -55px -45px;
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
            word-break: break-word;
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

        @charset "UTF-8";
        .ux-share {
            background-color: #fff;
            padding-left: 14px;
            height: 64px;
            border: 1px solid #ccc;
            line-height: 64px;
            position: relative;
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

        .ux-share .arrow-down-out {
            bottom: -10px;
            left: 38px;
        }

        .ux-share .arrow-down-in {
            top: -11px;
            left: -10px;
            position: absolute;
            border-top-color: #fff;
        }

        .ux-share-ways {
            font-size: 0;
            display: table-cell;
            height: 64px;
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

        .ux-share-wechat {
            position: relative;
        }

        .ux-share-wechat-ercodebox {
            position: absolute;
            top: -110px;
            left: -31px;
            width: 93px;
            height: 110px;
            background-color: transparent;
        }

        .ux-share-wechat-ercode {
            position: relative;
            width: 93px;
            height: 93px;
            border: 1px solid #ccc;
            background-color: #fff;
            border-radius: 2px;
        }

        .ux-share-wechat-ercode img {
            width: 85px;
            height: 85px;
            vertical-align: top;
            margin-top: 4px;
        }

        .ux-share-wechat:hover {
            background-color: #4AA53c;
            border-color: #4AA53c;
        }

        .ux-share-wechat:hover span {
            color: #fff;
        }

        .ux-share-QQ:hover {
            background-color: #619FD8;
            border-color: #619FD8;
        }

        .ux-share-QQ:hover span {
            color: #fff;
        }

        .ux-share-weibo:hover {
            background-color: #F7696D;
            border-color: #F7696D;
        }

        .ux-share-weibo:hover span {
            color: #fff;
        }

        .ux-share-size24 .ux-share {
            height: 40px;
            line-height: 40px;
        }

        .ux-share-size24 .ux-share-ways {
            height: 40px;
        }

        .ux-share-size24 .ux-share-ways li {
            width: 24px;
            height: 24px;
        }

        .ux-share-size24 .ux-share-ways li span {
            font-size: 13px;
            line-height: 24px;
            height: 24px;
        }

        .ux-share-size24 .ux-share-wechat-ercodebox {
            left: -36px;
        }

        .ux-video-player-notSupportFlash {
            position: relative;
            background-color: #000000;
            height: 100%;
        }

        .ux-video-player-notSupportFlash_txt {
            position: absolute;
            left: 0;
            top: 50%;
            margin-top: -10px;
            width: 100%;
            height: 20px;
            color: #ffffff;
            text-align: center;
            line-height: 20px;
            font-size: 15px;
        }

        .z-x5-video-fullscreen-landscape .ux-video-player {
            z-index: 9999;
        }

        .z-x5-video-fullscreen .ux-video-player .j-reloadBtn {
            display: none;
        }

        .u-edu-h5player, .u-edu-h5player .bg, .u-edu-h5player-mainvideo, .u-edu-h5player-mainvideo video, .u-edu-h5player-pread, .u-edu-h5player-pread video, .u-edu-h5player-error, .u-edu-h5player-cover, .u-edu-h5player-pcdisplay, .u-edu-h5player-pcdisplay .bbg, .u-edu-h5player-mobileerror, .u-edu-h5player-mobilecover, .u-edu-h5player-mobiledisplay.full, .u-edu-h5player-mobiledisplay .bbg, .u-edu-h5player-mobiledisplay .sbg {
            width: 100%;
            height: 100%;
        }

        .u-edu-h5player-bodyfullWindow {
            padding: 0;
            margin: 0;
            height: 100%;
            overflow-y: auto;
            -webkit-text-size-adjust: none;
            -moz-text-size-adjust: none;
            -ms-text-size-adjust: none;
            text-size-adjust: none;
        }

        .u-edu-h5player {
            position: relative;
            font-size: 14px;
            font-family: "Arial", "Hiragino Sans GB", \5fae\8f6f\96c5\9ed1, "Helvetica", "sans-serif";
            color: #999;
            overflow: hidden;
        }

        .u-edu-h5player.u-edu-h5player-fullWindow {
            position: fixed;
            overflow: hidden;
            z-index: 2147483647;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            width: 100% !important;
            height: 100% !important;
        }

        .u-edu-h5player .bg {
            background: #000;
            z-index: 1;
        }

        .u-edu-h5player a {
            color: #2aa126;
        }

        .u-edu-h5player .f-vh {
            visibility: hidden;
        }

        .u-edu-h5player-mainvideo {
            z-index: 2;
            left: 0;
            top: 0;
        }

        .u-edu-h5player-pread {
            display: none;
            z-index: 4;
        }

        .u-edu-h5player-pread-cover {
            display: none;
            opacity: 0;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 999;
        }

        .u-edu-h5player-pread-cover.z-show {
            display: block;
        }

        .u-edu-h5player-error {
            display: none;
            left: 0;
            top: 0;
            background: #000;
            z-index: 100;
        }

        .u-edu-h5player-error .emid {
            line-height: 18px;
            height: 18px;
            width: 100%;
            position: absolute;
            left: 0;
            top: 50%;
            margin-top: -9px;
            text-align: center;
        }

        .u-edu-h5player-error .emid .eic {
            margin-right: 3px;
            vertical-align: top;
            width: 18px;
            height: 18px;
            background-image: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/web-s3864e82090.png?fb6bb9f59f90e3e232bbf57a200502f2);
            background-position: 66.66667% 10.38961%;
        }

        .u-edu-h5player-error .bwarp {
            position: absolute;
            width: 100%;
            height: 66px;
            left: 0;
            top: 50%;
            text-align: center;
            margin-top: 10px;
        }

        .u-edu-h5player-error .bwarp .reloadbtn {
            text-align: center;
            line-height: 66px;
            height: 66px;
            color: #2aa126;
            border: 1px solid #2aa126;
            border-radius: 10px;
            width: 100px;
        }

        .u-edu-h5player-cover {
            display: none;
            left: 0;
            top: 0;
            cursor: pointer;
            overflow: hidden;
            text-align: center;
            background: #000;
            z-index: 99;
        }

        .u-edu-h5player-cover .cimg {
            top: 50%;
            left: 50%;
        }

        .u-edu-h5player-cover .playbtnwrap {
            width: 90px;
            height: 90px;
            top: 50%;
            left: 50%;
            margin: -45px 0 0 -45px;
        }

        .u-edu-h5player-cover .playbtnwrap .cbg {
            opacity: 0.8;
            background: #000;
            width: 100%;
            height: 100%;
            border-radius: 5px;
        }

        .u-edu-h5player-cover .playbtnwrap .playbtn {
            top: 29px;
            left: 33px;
            width: 24px;
            height: 32px;
            background-image: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/web-s3864e82090.png?fb6bb9f59f90e3e232bbf57a200502f2);
            background-position: 0 87.7551%;
        }

        .u-edu-h5player-cover .playbtnwrap:hover .playbtn {
            background-image: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/web-s3864e82090.png?fb6bb9f59f90e3e232bbf57a200502f2);
            background-position: 0 76.87075%;
        }

        .u-edu-h5player-pcdisplay {
            left: 0;
            top: 0;
            cursor: pointer;
            z-index: 3;
        }

        .u-edu-h5player-pcdisplay .bbg {
            opacity: 0;
            background: #000;
        }

        .u-edu-h5player-pcdisplay .statewrap {
            width: 90px;
            height: 90px;
            display: none;
            top: 50%;
            left: 50%;
            margin: -45px 0 0 -45px;
        }

        .u-edu-h5player-pcdisplay .statewrap .sbg {
            opacity: 0.8;
            background: #000;
            width: 100%;
            height: 100%;
            border-radius: 5px;
        }

        .u-edu-h5player-pcdisplay .statewrap .pause {
            display: none;
            top: 29px;
            left: 33px;
            width: 24px;
            height: 32px;
            background-image: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/web-s3864e82090.png?fb6bb9f59f90e3e232bbf57a200502f2);
            background-position: 0 87.7551%;
        }

        .u-edu-h5player-pcdisplay .statewrap .buffering {
            top: 27px;
            left: 27px;
            display: none;
            width: 36px;
            height: 36px;
            background-image: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/web-s3864e82090.png?fb6bb9f59f90e3e232bbf57a200502f2);
            background-position: 0 100%;
        }

        .u-edu-h5player-pcdisplay .statewrap .replay {
            display: none;
            width: 36px;
            top: 15px;
            left: 27px;
        }

        .u-edu-h5player-pcdisplay .statewrap .replay .ic {
            width: 36px;
            height: 32px;
            background-image: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/web-s3864e82090.png?fb6bb9f59f90e3e232bbf57a200502f2);
            background-position: 0 55.10204%;
        }

        .u-edu-h5player-pcdisplay .statewrap .replay .txt {
            color: #999;
            text-align: center;
            margin-top: 9px;
        }

        .u-edu-h5player-pcdisplay .statewrap:hover .pause {
            background-image: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/web-s3864e82090.png?fb6bb9f59f90e3e232bbf57a200502f2);
            background-position: 0 76.87075%;
        }

        .u-edu-h5player-pcdisplay .statewrap:hover .replay .ic {
            background-image: url(//yc.stu.126.net/res/component-video-player/images/h5VideoPlayer/web-s3864e82090.png?fb6bb9f59f90e3e232bbf57a200502f2);
            background-position: 0 65.98639%;
        }

        .u-edu-h5player-pcdisplay .statewrap:hover .replay .txt {
            color: #fff;
        }

        .m-popover {
            box-sizing: border-box;
            visibility: hidden;
            opacity: 0;
            position: absolute;
            bottom: 34px;
            left: 50%;
            padding: 8px 0;
            width: 64px;
            line-height: 0;
            transform: translateX(-50%);
            background: #333;
            font-size: 0;
            text-align: left;
            border-radius: 2px;
            cursor: auto;
            transition: .3s opacity;
        }

        .m-popover:before {
            content: '';
            position: absolute;
            left: 50%;
            bottom: -12px;
            transform: translateX(-50%);
            width: 100%;
            height: 12px;
            opacity: 0;
        }

        .m-popover:after {
            content: '';
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: -8px;
            border: 4px solid transparent;
            border-top-color: #333;
        }

        .m-popover.z-show {
            visibility: visible;
            opacity: 1;
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

        .m-popover li.z-sel {
            color: #fff;
        }

        .m-popover li.z-sel:hover {
            background-color: transparent;
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

        .ux-slider-switcher-content {
            -webkit-transform: translate(0, 0);
            -moz-transform: translate(0, 0);
            -ms-transform: translate(0, 0);
            -o-transform: translate(0, 0);
            transform: translate(0, 0);
        }

        .ux-slider-switcher-content-h {
            position: relative;
            display: -webkit-box;
            display: -moz-box;
            display: box;
            display: -webkit-flex;
            display: -moz-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-transition: -webkit-transform .3s;
            -moz-transition: -moz-transform .3s;
            transition: transform .3s;
            width: 100%;
            height: 100%;
        }

        .ux-slider-switcher-item-h {
            -webkit-flex-shrink: 0;
            -moz-flex-shrink: 0;
            flex-shrink: 0;
            -ms-flex-negative: 0;
        }

        .ux-slider-switcher-content-v {
            position: relative;
            -webkit-transition: -webkit-transform .3s;
            -moz-transition: -moz-transform .3s;
            transition: transform .3s;
            width: 100%;
            height: 100%;
        }

        .ux-slider-switcher {
            overflow: hidden;
        }

        .ux-h5pdfreader-loading {
            width: .96rem;
            height: .96rem;
            background: url("http://edu-image.nosdn.127.net/dbc95396-4f9e-47cb-a27b-e7142945e12d.png?imageView&quality=100");
            background-size: .96rem .96rem;
            top: 50%;
            margin: -.48rem 0 0 -.48rem;
            left: 50%
        }

        .ux-h5pdfreader-error {
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background: #000;
            z-index: 100
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

        [data-dpr="2"] .ux-h5pdfreader-error .emid {
            font-size: 28px
        }

        [data-dpr="3"] .ux-h5pdfreader-error .emid {
            font-size: 42px
        }

        .ux-h5pdfreader-error .emid .eic {
            background: url("http://edu-image.nosdn.127.net/15fe1b0e-96e6-4ae5-9250-649264afdb7c.png?imageView&quality=100");
            width: .48rem;
            height: .48rem;
            margin-right: 3px;
            vertical-align: top;
            background-size: .48rem .48rem
        }

        .ux-h5pdfreader-error .bwarp {
            position: absolute;
            width: 100%;
            height: .88rem;
            left: 0;
            top: 40%;
            text-align: center;
            margin-top: .1333333333rem
        }

        .ux-h5pdfreader-error .bwarp .reloadbtn {
            text-align: center;
            font-size: 14px;
            line-height: .88rem;
            height: .88rem;
            color: #2aa126;
            border: 1px solid #2aa126;
            border-radius: .1333333333rem;
            width: 2.6666666667rem
        }

        [data-dpr="2"] .ux-h5pdfreader-error .bwarp .reloadbtn {
            font-size: 28px
        }

        [data-dpr="3"] .ux-h5pdfreader-error .bwarp .reloadbtn {
            font-size: 42px
        }

        .ux-h5pdfreader-error .bwarp .reloadbtn .ic {
            width: .48rem;
            height: .4266666667rem;
            background: transparent url("http://edu-image.nosdn.127.net/7685cc2b-ede5-4b31-80fa-3a60fc5b3fdd.png?imageView&quality=100") right center no-repeat;
            background-size: .48rem .4266666667rem;
            margin: .2rem .0666666667rem .2rem 0
        }

        .u-edu-h5pdf-bodyfullWindow {
            padding: 0;
            margin: 0;
            height: 100%;
            overflow-y: auto;
            -webkit-text-size-adjust: none;
            -moz-text-size-adjust: none;
            -ms-text-size-adjust: none;
            text-size-adjust: none
        }

        .u-edu-h5pdf-fullWindow {
            position: fixed !important;
            overflow: hidden;
            z-index: 2147483647;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            width: 100% !important;
            height: 100% !important
        }

        .ux-h5pdfreader-container {
            width: 100%;
            height: 100%
        }

        .ux-h5pdfreader-container ::-webkit-scrollbar {
            display: none
        }

        .ux-h5pdfreader-container_viewer {
            height: 100%
        }

        .ux-h5pdfreader-container_viewer .ux-edu-pdfviewer .slider, .ux-h5pdfreader-container_viewer .ux-edu-pdfviewer .page {
            background: #000
        }

        .ux-h5pdfreader-container_slide {
            width: 100%;
            bottom: 1.0666666667rem;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.6);
            padding: .1333333333rem 0rem
        }

        .ux-h5pdfreader-container_slide .ux-slider-switcher {
            padding-left: .4rem;
            box-sizing: border-box
        }

        .ux-h5pdfreader-container_slide_pager {
            padding: .0266666667rem 0rem
        }

        .ux-h5pdfreader-container_slide_pager_item {
            height: 1.1733333333rem;
            padding: .32rem .4533333333rem;
            background: #333740;
            box-sizing: border-box;
            margin-right: .16rem
        }

        .ux-h5pdfreader-container_slide_pager_item_selected {
            background: #1e7cff;
            color: #fff;
            border: 1px solid #fff;
            height: 1.1466666667rem
        }

        .ux-h5pdfreader-container_slide_show {
            transition: all 0.2s;
            -webkit-transition: all 0.2s
        }

        .ux-h5pdfreader-container_slide_hide {
            padding: 0;
            height: 0;
            opacity: 0;
            bottom: 0;
            transition: all 0.2s;
            -webkit-transition: all 0.2s
        }

        .ux-h5pdfreader-container_footer {
            width: 100%;
            height: 1.0666666667rem;
            background: #333740;
            bottom: 0;
            left: 0;
            right: 0;
            display: -webkit-box;
            display: -moz-box;
            display: box;
            display: -webkit-flex;
            display: -moz-flex;
            display: -ms-flexbox;
            display: flex
        }

        .ux-h5pdfreader-container_footer_label, .ux-h5pdfreader-container_footer_page {
            flex-grow: 1;
            -webkit-flex-grow: 1;
            display: -webkit-box;
            display: -moz-box;
            display: box;
            display: -webkit-flex;
            display: -moz-flex;
            display: -ms-flexbox;
            display: flex;
            align-items: center;
            -webkit-align-items: center
        }

        .ux-h5pdfreader-container_footer_label {
            padding-left: .6266666667rem
        }

        .ux-h5pdfreader-container_footer_icon {
            display: -webkit-box;
            display: -moz-box;
            display: box;
            display: -webkit-flex;
            display: -moz-flex;
            display: -ms-flexbox;
            display: flex;
            align-items: center;
            -webkit-align-items: center;
            padding-right: .4rem
        }

        .ux-h5pdfreader-container_footer_show {
            transition: all 0.2s;
            -webkit-transition: all 0.2s
        }

        .ux-h5pdfreader-container_footer_hide {
            height: 0;
            opacity: 0;
            transition: all 0.2s;
            -webkit-transition: all 0.2s
        }

        /*# sourceMappingURL=component.css.map */
        .ux-pdf-reader {
            position: relative;
            height: 100%;
            background: #000
        }

        .ux-pdf-reader-notSupportFlash {
            position: relative;
            background-color: #000000;
            height: 100%
        }

        .ux-pdf-reader-notSupportFlash_txt {
            position: absolute;
            left: 0;
            top: 50%;
            margin-top: -10px;
            width: 100%;
            height: 20px;
            color: #ffffff;
            text-align: center;
            line-height: 20px;
            font-size: 15px
        }

        /*# sourceMappingURL=pdf-reader.css.map */
        .auto-1524789536727 {
            width: 406px;
            height: 200px;
            margin: 0 20px 0 20px;
        }

        .auto-1524789536727 .info {
            color: #333;
            font-size: 14px;
            line-height: 23px;
            margin: 0 0 50px;
            font-family: "微软雅黑";
        }

        .auto-1524789536727 .info span {
            color: #d62727;
        }

        .auto-1524789536727 .ok {
            margin: 0 0 0 147px;
        }

        .auto-1524789536727 .help-tip {
            color: #ccc;
            font-size: 12px;
            text-align: center;
            margin-top: 30px;
        }

        .auto-1524789536727 .help-tip .zixun {
            color: #2cb060;
            font-size: 12px;
            text-align: center;
            padding-right: 5px;
        }

        .auto-1524789536727 .help-tip .chat {
            color: #333;
        }

        .auto-1524789536727 .help-tip .wrpbox {
            background-color: #f0f0f0;
            padding: 5px;
            margin-left: 10px;
            cursor: pointer;
        }

        .auto-1524789536727 .help-tip .wrpbox:hover {
            background-color: #e6e6e6;
        }

        .auto-1524789536729 {
            display: none;
            position: relative;
            padding: 15px;
        }

        .auto-1524789536729 h3 {
            background: #fff;
            border: 1px solid #2cb060;
            text-align: center;
            height: 40px;
            line-height: 40px;
        }

        .auto-1524789536729 .f-icon {
            color: #2cb060;
            margin-right: 7px;
        }

        .auto-1524789536729 h3 span {
            font-size: 18px;
            color: #333;
        }

        .auto-1524789536729 h3:hover {
            cursor: pointer;
            background: #fff;
        }

        .auto-1524789536729 .box-in-small {
            padding: 0;
            position: relative;
            display: inline-block;
            margin-left: 10px;
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
            line-height19px;
        }

        .auto-1524789536729 p {
            line-height: 20px;
            color: #333;
            font-size: 12px;
            margin-top: 10px;
        }

        .auto-1524789536731 {
            width: 400px;
            padding-bottom: 10px;
        }

        .auto-1524789536731 .headTitle {
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 20px;
        }

        .auto-1524789536731 .selectIcon .icon {
            width: 0;
            height: 0;
            left: 0;
            top: 2px;
            border-style: solid;
            border-width: 5px 0 5px 8px;
            border-color: transparent transparent transparent #ccc;
        }

        .auto-1524789536731 .selectIcon.active .icon {
            border-width: 8px 5px 0 5px;
            border-color: #ccc transparent transparent transparent;
        }

        .auto-1524789536731 .selectIcon .shortIntr {
            margin-left: 13px;
        }

        .auto-1524789536731 .detailIntr {
            margin-top: 10px;
        }

        .auto-1524789536731 .btnList {
            margin-top: 20px;
        }

        .auto-1524789536731 .btnList .u-btn {
            width: 100px;
        }

        .auto-1524789536733 {
            height: 60px;
            border-top: 1px solid #EEE;
        }

        .auto-1524789536733 .attendFight, .fighting {
            width: 295px;
            height: 60px;
            cursor: pointer
        }

        .auto-1524789536733 .attendFight .openFight {
            width: 195px;
            height: 60px;
            padding-left: 100px;
            color: #FF3F00;
            background: url(/res/images/ui/fight.gif) no-repeat 40px 10px;
        }

        .auto-1524789536733 .attendFight .openFight .txt {
            font-size: 20px;
            line-height: 20px;
            padding: 10px 0 5px 0;
        }

        .auto-1524789536733 .attendFight .openFight .closeTime {
            font-size: 12px;
            line-height: 20px;
        }

        .auto-1524789536733 .fighting .fightBlock {
            width: 200px;
            height: 60px;
            padding-left: 95px;
            background: url(/res/images/ui/fight.gif) no-repeat 35px 10px;
        }

        .auto-1524789536733 .fighting .fightBlock .txt {
            font-size: 20px;
            color: #999;
            line-height: 60px;
        }

        .auto-1524789536733 .fighting .fightBlock .setFight {
            padding-left: 10px;
            font-size: 12px;
            line-height: 60px;
        }

        .auto-1524789536733 .fightEnd {
            font-size: 20px;
            color: #999;
            line-height: 60px;
            padding-left: 95px;
            width: 200px;
            height: 60px;
            background: url(/res/images/ui/fight.gif) no-repeat 35px 10px;
        }

        .auto-1524789536733 .attendFight:hover .openFight, .auto-1524789536733 .fighting .fightBlock:hover, .auto-1524789536733 .fightEnd:hover {
            background-image: url(/res/images/ui/fight_hover.gif);
        }

        .auto-1524789536733 .certBlock {
            height: 60px;
        }

        .auto-1524789536733 .certBlock .certBtn {
            width: 205px;
            line-height: 60px;
            font-size: 20px;
            padding-left: 90px;
            color: #FF3F00;
            background: url(/res/images/ui/ui_sprite.png) 50px -330px no-repeat;
        }

        .auto-1524789536733 .certBlock .certBtn:hover {
            background-color: #F6F6F6;
        }

        .auto-1524789536733 .certBlock .certBtn.hasApply {
            width: 230px;
            padding-left: 65px;
            background-position: 30px -330px;
        }

        .auto-1524789536733 .certBlock .certBtn.applyBtn {
            cursor: pointer
        }

        .auto-1524789536733 .more {
            font-size: 14px;
        }

        .auto-1524789536735 {
            height: 60px;
            border-top: 1px solid #EEE;
        }

        .auto-1524789536735 .certBtn {
            width: 205px;
            height: 60px;
            line-height: 60px;
            font-size: 20px;
            padding-left: 90px;
            color: #FF3F00;
            background: url(/res/images/ui/ui_sprite.png) 50px -330px no-repeat;
        }

        .auto-1524789536735 .more {
            font-size: 14px;
        }

        @charset "UTF-8"; /* em-base */ /* Height */ /* Font Size */ /* Padding */ /* Border Radius */ /* Brand Colors */ /* Gray Colors */ /* Base Colors */ /* Shadow */ /* dropdown */ /* Dimensions */ /* Colors */ /* Form Control Item */ /* Font Family */ /* 衬线字体 */ /* 非衬线字体 */
        .ux-mask {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 1000;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            touch-action: cross-slide-y pinch-zoom double-tap-zoom;
            text-align: center;
            background: rgba(0, 0, 0, 0.3);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#4c000000, endColorstr=#4c000000);
        }

        .ux-mask .f-dib {
            display: inline-block;
        }

        .ux-mask .f-pdt10 {
            padding-top: 10px;
        }

        .ux-mask:before {
            content: '';
            display: inline-block;
            vertical-align: middle;
            height: 100%;
        }

        @media (max-width: 767px) {
            .ux-mask .ux-modal_dialog {
                width: auto;
            }
        }

        .ux-mask-fadeIn {
            opacity: 1;
            transition: opacity 200ms;
        }

        .ux-mask-fadeOut {
            opacity: 1;
        }

        .ux-mask-fadeOut-active {
            opacity: 0;
            transition: opacity 300ms;
        }

        html.z-modal, html.z-modal body {
            overflow: hidden;
        }

        /*# sourceMappingURL=component.css.map */
        @charset "UTF-8";
        .um-cps-ux-promoter-course-detail-collect {
            top: 0;
            right: 0;
            position: fixed;
            z-index: 1006;
        }

        .um-cps-ux-promoter-course-detail-collect_btn {
            font-family: MicrosoftYaHei;
            font-size: 13px;
            color: #FFFFFF;
            padding: 10px 20px;
            background: #FF4400;
            border-radius: 50px 0 0 50px;
        }

        .um-cps-ux-promoter-course-detail-collect-bubble {
            width: 180px;
            right: 15px;
            top: 38px;
        }

        .um-cps-ux-promoter-course-detail-collect-bubble img {
            width: 100%;
        }

        .um-cps-ux-promoter-course-detail-collect-bubble_info {
            top: 21px;
            font-size: 14px;
            color: #fff;
            left: 13px;
        }

        .ux-promoter-course-detail-collect-mask {
            background: rgba(0, 0, 0, 0.6) !important;
        }

        .ux-promoter-course-detail-collect-mask .ux-modal_dialog {
            display: none !important;
        }

        @charset "UTF-8"; /* em-base */ /* Height */ /* Font Size */ /* Padding */ /* Border Radius */ /* Brand Colors */ /* Gray Colors */ /* Base Colors */ /* Shadow */ /* dropdown */ /* Dimensions */ /* Colors */ /* Form Control Item */ /* Font Family */ /* 衬线字体 */ /* 非衬线字体 */ /* 模块头部 */
        .ux-member-module-head {
            border-bottom: 1px solid #ddd;
            line-height: 35px;
            color: #859295;
        }

        .ux-member-module-head a {
            font-size: 15px;
        }

        .ux-member-module-head_tit, .ux-member-module-head .tit {
            margin-bottom: -1px;
            font-size: 20px;
            border-bottom: 1px solid #e84807;
            color: #343d42;
        }

        .ux-member-module-head_sep, .ux-member-module-head .sep {
            margin: 0 10px;
        }

        /*# sourceMappingURL=component.css.map */
        .ux-textarea2 {
            position: relative
        }

        .ux-textarea2 .ux-textarea {
            width: 320px;
            height: 120px
        }

        .ux-textarea2 .ux-tip-error {
            position: absolute;
            left: -6px;
            bottom: -22px
        }

        /*# sourceMappingURL=component.css.map */
        .ux-dropdown {
            display: inline-block;
            vertical-align: middle;
            position: relative;
            width: 160px;
            color: #333;
            line-height: 32px;
            font-size: 14px;
            background: #fff
        }

        .ux-dropdown_hd {
            min-width: 160px;
            height: 34px;
            padding: 0 12px;
            border: 1px solid #ddd;
            box-sizing: border-box;
            cursor: pointer
        }

        .ux-dropdown_bd {
            position: absolute;
            z-index: 1;
            top: 100%;
            min-width: 160px;
            margin-top: -1px;
            background: #fff;
            width: 100%
        }

        .ux-dropdown_listview {
            border: 1px solid #ddd;
            overflow-x: hidden;
            box-sizing: border-box;
            list-style-type: none
        }

        .ux-dropdown_listview li {
            cursor: pointer;
            padding: 0 12px
        }

        .ux-dropdown_listview li:hover {
            background-color: #f3f6f7
        }

        .ux-dropdown .ux-icon-caret-down, .ux-dropdown .ux-icon-caret-up {
            float: right;
            line-height: 32px;
            color: #666
        }

        .ux-dropdown.z-dis .ux-dropdown_hd .ux-dropdown_cnt {
            cursor: not-allowed;
            filter: alpha(opacity=65);
            opacity: 0.65
        }

        .ux-dropdown .ux-tip-error {
            position: absolute;
            left: 160px;
            white-space: nowrap;
            top: 10px
        }

        /*# sourceMappingURL=component.css.map */
        .ux-notify {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            position: fixed;
            z-index: 1040;
            top: 10px;
            left: 10px;
            width: 320px;
            background-color: transparent;
            text-align: center
        }

        .ux-notify-topright, .ux-notify-bottomright {
            left: auto;
            right: 10px
        }

        .ux-notify-topcenter, .ux-notify-bottomcenter {
            left: 50%;
            margin-left: -160px
        }

        .ux-notify-bottomleft, .ux-notify-bottomright, .ux-notify-bottomcenter {
            top: auto;
            bottom: 10px
        }

        .ux-notify-static {
            position: static;
            width: auto
        }

        .um-message {
            position: fixed;
            left: 50%;
            top: 50%;
            z-index: 1040;
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            max-width: 80%;
            padding: .32rem .4rem;
            max-height: 3.7333333333rem;
            box-sizing: border-box;
            background: rgba(0, 0, 0, 0.6);
            border-radius: .08rem;
            color: #fff;
            font-size: 13px;
            white-space: nowrap
        }

        /*# sourceMappingURL=component.css.map */
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