<%@page contentType="text/html; charset=utf-8" %>
<html>
<head>
    <title>账号设置</title>
    <!--样式-->
    <link rel="stylesheet" href="static/core_465566505fc16e2adc7188a490b841e4.css">
    <style type="text/css">
        .buttonsprite, .u-sugInput .add, .u-sugInput .add span, .m-infoEdit .editBox .accMail .add .btn, .m-infoEdit .editBox .accMail .add .btn span, .m-infoEdit .editBox .accMail .verify .btn1, .m-infoEdit .editBox .accMail .verify .btn1 span, .m-infoEdit .editBox .accMail .verify .btn2, .m-infoEdit .editBox .accMail .verify .btn2 span, .m-infoEdit .editBox .addEdu, .m-infoEdit .editBox .addEdu span, .m-infoEdit .footer .btn, .m-infoEdit .footer .btn span, .m-AccBox .m-accBaseInfo .urlEditBox .btn, .m-AccBox .m-accBaseInfo .urlEditBox .btn span, .epayAccount .add .btn, .epayAccount .add .btn span, .epayAccount .verify .btn1, .epayAccount .verify .btn1 span, .epayAccount .verify .btn2, .epayAccount .verify .btn2 span, .m-AccBox .u-bindItem .opr .btn, .m-AccBox .u-bindItem .opr .btn span, .m-epayBind .actEpayBtn, .m-epayBind .actEpayBtn span, .m-setBox .btn, .m-setBox .btn span, .m-setBox .m-settingsAddress .footer .btn, .m-setBox .m-settingsAddress .footer .btn span {
            background: url(static/button.png) no-repeat 4449px 4449px;
        }

        .uisprite, .w-tag .u-close {
            background: url(static/ui_sprite.png) no-repeat 4449px 4449px;
        }

        .snssprite, .m-AccBox .u-bindItem .icn {
            background: url(static/snsSprite.png) no-repeat 4449px 4449px;
        }

        .settingsSprite, .m-epayBind .info {
            background: url(static/settings.png) no-repeat 4449px 4449px;
        }

        .u-moocbtn {
            display: inline-block;
            padding: 4px 9px;
            font-size: 14px;
            line-height: 28px;
            color: #666;
            text-align: center;
            vertical-align: middle;
            cursor: pointer;
            min-width: 80px;
            font-family: "Arial", "Hiragino Sans GB", "Microsoft YaHei", \5fae\8f6f\96c5\9ed1, "Helvetica", "sans-serif";
            border: 1px solid #999;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            -ms-border-radius: 4px;
            -o-border-radius: 4px;
            border-radius: 4px;
            background-color: #E1E1E1;
            background-repeat: repeat-x;
            background-image: -moz-linear-gradient(#EBEBEB, #E1E1E1);
            background-image: -ms-linear-gradient(#EBEBEB, #E1E1E1);
            background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #EBEBEB), color-stop(100%, #E1E1E1));
            background-image: -webkit-linear-gradient(#EBEBEB, #E1E1E1);
            background-image: -o-linear-gradient(#EBEBEB, #E1E1E1);
            background-image: linear-gradient(#EBEBEB, #E1E1E1);
            -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
            -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
        }

        .u-moocbtn:hover, .u-moocbtn.hvr {
            background-color: #EDEDED;
            background-repeat: repeat-x;
            background-image: -moz-linear-gradient(#F6F6F6, #EDEDED);
            background-image: -ms-linear-gradient(#F6F6F6, #EDEDED);
            background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #F6F6F6), color-stop(100%, #EDEDED));
            background-image: -webkit-linear-gradient(#F6F6F6, #EDEDED);
            background-image: -o-linear-gradient(#F6F6F6, #EDEDED);
            background-image: linear-gradient(#F6F6F6, #EDEDED);
        }

        .u-moocbtn-sm {
            padding: 5px 6px;
            font-size: 12px;
            line-height: 14px;
            min-width: 50px;
        }

        .setingsicon, .m-infoEdit .header .authIcon {
            background: url(static/settings.png) 4449px 4449px no-repeat;
        }

        .u-moocbtn {
            display: inline-block;
            padding: 4px 9px;
            font-size: 14px;
            line-height: 28px;
            color: #666;
            text-align: center;
            vertical-align: middle;
            cursor: pointer;
            min-width: 80px;
            font-family: "Arial", "Hiragino Sans GB", "Microsoft YaHei", \5fae\8f6f\96c5\9ed1, "Helvetica", "sans-serif";
            border: 1px solid #999;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            -ms-border-radius: 4px;
            -o-border-radius: 4px;
            border-radius: 4px;
            background-color: #E1E1E1;
            background-repeat: repeat-x;
            background-image: -moz-linear-gradient(#EBEBEB, #E1E1E1);
            background-image: -ms-linear-gradient(#EBEBEB, #E1E1E1);
            background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #EBEBEB), color-stop(100%, #E1E1E1));
            background-image: -webkit-linear-gradient(#EBEBEB, #E1E1E1);
            background-image: -o-linear-gradient(#EBEBEB, #E1E1E1);
            background-image: linear-gradient(#EBEBEB, #E1E1E1);
            -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
            -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
        }

        .u-moocbtn:hover, .u-moocbtn.hvr {
            background-color: #EDEDED;
            background-repeat: repeat-x;
            background-image: -moz-linear-gradient(#F6F6F6, #EDEDED);
            background-image: -ms-linear-gradient(#F6F6F6, #EDEDED);
            background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #F6F6F6), color-stop(100%, #EDEDED));
            background-image: -webkit-linear-gradient(#F6F6F6, #EDEDED);
            background-image: -o-linear-gradient(#F6F6F6, #EDEDED);
            background-image: linear-gradient(#F6F6F6, #EDEDED);
        }

        .u-moocbtn-sm {
            padding: 5px 6px;
            font-size: 12px;
            line-height: 14px;
            min-width: 50px;
        }

        .u-insug .area {
            padding: 5px;
            position: relative;
            zoom: 1;
            height: 21px;
            background: #FAFAFA;
            border: 1px solid #DFDFDF;
            -webkit-box-shadow: inset 1px 1px 2px #DFDFDF;
            -moz-box-shadow: inset 1px 1px 2px #DFDFDF;
            box-shadow: inset 1px 1px 2px #DFDFDF;
        }

        .u-insug .area .sug {
            top: 30px;
        }

        .u-insug .area .ar {
            text-indent: 6px;
            line-height: 30px;
        }

        .u-insug input {
            height: 18px;
            line-height: 23px;
            float: left;
            background: #FAFAFA;
            color: #333;
            font-size: 12px;
            outline: none;
            border: 0;
            padding: 0;
            width: 100%;
        }

        .u-insug label {
            position: absolute;
            top: 9px;
            left: 8px;
            color: #999;
            font-size: 12px;
            cursor: text;
        }

        .u-sugInput p {
            font-size: 12px;
            color: #ccc;
            line-height: 22px;
        }

        .u-sugInput .ipt {
            float: left;
            width: 295px;
        }

        .u-sugInput .iptcom {
            width: 150px;
            float: left;
            margin: 0 8px 0 0;
        }

        .u-sugInput .iptpos {
            width: 138px;
            float: left;
        }

        .u-sugInput .add {
            float: left;
            margin-left: 10px;
            display: block;
            width: 70px;
            width: 70px;
            text-decoration: none;
            background-position: 60px -150px;
        }

        .u-sugInput .add span {
            display: block;
            text-align: center;
            padding-left: 10px;
            width: 50px;
            font-size: 12px;
            height: 34px;
            line-height: 33px;
            color: #444;
            background-position: -40px -150px;
        }

        .u-sugInput .add:hover {
            background-position: 60px -200px;
        }

        .u-sugInput .add:hover span {
            background-position: -40px -200px;
        }

        .u-sugInput .add:active {
            background-position: 60px -250px;
        }

        .u-sugInput .add:active span {
            background-position: -40px -250px;
        }

        .u-sugInput .ar {
            font-size: 12px;
        }

        .u-sugInput .ar a {
            color: green;
            padding-left: 4px;
        }

        .w-tags {
            text-align: left;
            margin-left: -5px;
        }

        .w-tags .sys p {
            border: 1px solid #b2e1c7;
            background-color: #e0ede3;
        }

        .w-tags .w-tag-hover p {
            border: solid 1px #b2e1c7;
            background-color: #21a557;
        }

        .w-tags .w-tag-hover p span {
            color: #fff;
        }

        .w-tag {
            height: 22px;
            line-height: 22px;
            margin: 5px;
            overflow: hidden;
            cursor: default;
        }

        .w-tag p {
            height: 20px;
            line-height: 20px;
        }

        .w-tag p {
            cursor: pointer;
            border-radius: 3px;
            border: 1px solid #e7e7e7;
            background: #f5f5f5;
        }

        .w-tag p span {
            padding: 0 5px;
            color: #666;
            font-size: 12px;
        }

        .w-tag .u-close {
            width: 8px;
            height: 22px;
            line-height: 22px;
            background-position: -32px -143px;
            margin-right: 5px;
        }

        .w-tag-big {
            height: 32px;
            line-height: 32px;
        }

        .w-tag-big p {
            height: 30px;
            line-height: 30px;
        }

        .w-tag-big p span {
            font-size: 14px;
        }

        .w-tag-hover {
            background-position: -57px 0px;
        }

        .w-tag-hover p {
            border: solid 1px #b2e1c7;
            background-color: #21a557;
        }

        .w-tag-hover p span {
            color: #fff;
        }

        .w-tag-hover .u-close {
            background-position: -62px -143px;
        }

        .m-telbindsetbox input {
            font-family: "Micorsoft Yahei", "Arial", "Hiragino Sans GB", \5fae\8f6f\96c5\9ed1, "Helvetica", "sans-serif" !important;
        }

        .m-telbindsetbox .title {
            color: #333;
            font-size: 22px;
            width: 538px;
            border-bottom: 2px solid #ebebeb;
            margin-left: 40px;
            margin-bottom: 30px;
            box-sizing: border-box;
        }

        .m-telbindsetbox .u-tab {
            box-sizing: border-box;
            width: 160px;
            padding-bottom: 20px;
            padding-left: 0;
            text-align: left;
        }

        .m-telbindsetbox .wrap {
            width: 405px;
            margin: 0 auto;
            box-sizing: border-box;
        }

        .m-telbindsetbox .wrap .tel-inputbox-wrap {
            font-size: 0;
            margin-bottom: 20px;
        }

        .m-telbindsetbox .wrap .inputbox {
            display: inline-block;
            width: 358px;
            height: 44px;
            line-height: 44px;
            border: 1px solid #d8d8d8;
            background: #fff;
            font-size: 12px;
            vertical-align: middle;
            margin-right: 10px;
        }

        .m-telbindsetbox .wrap .u-tel-tip {
            font-size: 12px;
            color: #999999;
            margin-top: 10px;
        }

        .m-telbindsetbox .wrap .u-logo {
            float: left;
            width: 21px;
            text-align: center;
            padding: 10px 5px 0 10px;
        }

        .m-telbindsetbox .wrap .u-logo-tel {
            width: 22px;
            height: 24px;
            background: url(static/icon1.png) -9999px -9999px no-repeat;
            background-position: 0 -78px;
        }

        .m-telbindsetbox .wrap .u-logo-code {
            width: 22px;
            height: 24px;
            background: url(static/icon1.png) -9999px -9999px no-repeat;
            background-position: 0 -108px;
        }

        .m-telbindsetbox .wrap .u-logo-pwd {
            background: url(static/icon1.png) no-repeat 0 -45px;
            height: 22px;
            width: 24px;
            margin-top: 2px;
        }

        .m-telbindsetbox .wrap .next {
            display: inline-block;
            background: url(static/icon1.png) no-repeat 0 -386px;
            width: 35px;
            height: 35px;
            vertical-align: middle;
            cursor: pointer;
        }

        .m-telbindsetbox .wrap .next.ok {
            cursor: default;
            background-position: 0 -348px;
        }

        .m-telbindsetbox .wrap .u-input {
            width: 278px;
            color: #333;
            border: 0;
            font-size: 16px;
            height: 42px;
            line-height: 42px;
            padding-left: 8px;
        }

        .m-telbindsetbox .wrap .u-input > input {
            font-size: 16px;
            color: #333;
        }

        .m-telbindsetbox .wrap .prefix {
            top: 2px;
            padding-right: 4px;
            color: #ccc;
        }

        .m-telbindsetbox .wrap .code-input-box {
            width: 360px;
            margin-bottom: 20px;
        }

        .m-telbindsetbox .wrap .code-input-box .inputbox {
            width: 198px;
            float: left;
            margin-right: 0;
        }

        .m-telbindsetbox .wrap .code-input-box .inputbox .u-input {
            width: 198px;
        }

        .m-telbindsetbox .wrap .code-input-box .inputbox .u-input > input {
            width: 160px;
        }

        .m-telbindsetbox .wrap .code-input-box .u-codebtn {
            width: 150px;
            float: right;
            height: 44px;
            line-height: 44px;
            text-align: center;
            cursor: default;
            box-sizing: border-box;
            border-radius: 3px;
            font-size: 14px;
            border: 1px solid #e6eaf2;
            color: #a5aec6;
        }

        .m-telbindsetbox .wrap .code-input-box .u-codebtn.ready {
            border: 1px solid #2cc17b;
            color: #2cc17b;
            cursor: pointer;
        }

        .m-telbindsetbox .wrap .m-error-box {
            margin-top: 10px;
        }

        .m-telbindsetbox .wrap .m-error-box .ferrortail {
            background: url(static/sprite.png) -9999px -9999px no-repeat;
            height: 15px;
            width: 18px;
            background-position: -217px -34px;
        }

        .m-telbindsetbox .wrap .m-error-box .ferrorhead {
            width: 298px;
            margin-top: -3px;
            color: #fa5b5b;
            font-size: 12px;
            line-height: 20px;
            vertical-align: top;
            overflow: hidden;
            word-break: break-all;
        }

        .m-telbindsetbox .wrap .u-loginbtn {
            width: 360px;
            height: 44px;
            text-align: center;
            color: #fff;
            background: #ddd;
            font-size: 20px;
            line-height: 44px;
            background: #74B96E;
            margin-top: 16px;
            margin-bottom: 12px;
            cursor: pointer;
        }

        .m-telbindsetbox .m-tel-reg-and-bind {
            height: 250px;
        }

        .g-mn2 {
            float: left;
            width: 100%;
            margin-right: -270px;
        }

        .g-mn2c {
            margin-right: 280px;
        }

        .g-sd2 {
            position: relative;
            float: right;
            width: 270px;
        }

        .m-infoEdit .header {
            height: 40px;
            margin-top: 5px;
        }

        .m-infoEdit .header .fk {
            line-height: 40px;
            margin-left: 20px;
            font-size: 12px;
            font-family: '宋体';
            color: #ccc;
        }

        .m-infoEdit .header .authIcon {
            width: 82px;
            height: 25px;
            margin-right: 22px;
        }

        .m-infoEdit .header .org {
            background-position: 0 -408px;
        }

        .m-infoEdit .header .tea {
            background-poistion: 0 -368px;
        }

        .m-infoEdit .editBox {
            padding: 20px;
        }

        .m-infoEdit .editBox .title {
            width: 90px;
            height: 30px;
            line-height: 30px;
            text-align: right;
            vertical-align: top;
            color: #666;
            padding: 0 20px 0 0;
            font-family: '微软雅黑';
        }

        .m-infoEdit .editBox .tip {
            line-height: 20px;
            margin: 5px 0 20px;
        }

        .m-infoEdit .editBox .accMail {
            margin-bottom: 25px;
        }

        .m-infoEdit .editBox .accMail .f-sign {
            padding: 0;
            margin-left: -7px;
        }

        .m-infoEdit .editBox .accMail .title {
            line-height: 32px;
        }

        .m-infoEdit .editBox .accMail .mailTxt {
            margin: 5px 0 0 0;
            font-size: 12px;
            color: #aaa;
        }

        .m-infoEdit .editBox .accMail .mailTxt .m-feedbackinfo {
            padding-left: 0;
        }

        .m-infoEdit .editBox .accMail .mailTxt .m-feedbackinfo .righttxt {
            color: #999;
        }

        .m-infoEdit .editBox .accMail .mailTxt .sendAgain {
            color: #21a557;
        }

        .m-infoEdit .editBox .accMail .add .m-baseinputui textarea {
            overflow-y: hidden;
        }

        .m-infoEdit .editBox .accMail .add .btn {
            display: block;
            width: 62px;
            width: 62px;
            text-decoration: none;
            background-position: 52px 0px;
            font-size: 12px;
            margin: 0 15px 0 20px;
        }

        .m-infoEdit .editBox .accMail .add .btn span {
            display: block;
            text-align: center;
            padding-left: 10px;
            width: 42px;
            font-size: 12px;
            height: 34px;
            line-height: 33px;
            color: #fff;
            background-position: -40px 0px;
        }

        .m-infoEdit .editBox .accMail .add .btn:hover {
            background-position: 52px -50px;
        }

        .m-infoEdit .editBox .accMail .add .btn:hover span {
            background-position: -40px -50px;
        }

        .m-infoEdit .editBox .accMail .add .btn:active {
            background-position: 52px -100px;
        }

        .m-infoEdit .editBox .accMail .add .btn:active span {
            background-position: -40px -100px;
        }

        .m-infoEdit .editBox .accMail .add .m-feedbackinfo {
            padding-left: 0;
        }

        .m-infoEdit .editBox .accMail .add .cancel {
            font-size: 12px;
            color: #21a557;
            margin: 10px 15px 0 0;
        }

        .m-infoEdit .editBox .accMail .verify {
            line-height: 34px;
        }

        .m-infoEdit .editBox .accMail .verify .mailN {
            margin-right: 15px;
        }

        .m-infoEdit .editBox .accMail .verify .btn {
            font-size: 12px;
            margin: 0;
        }

        .m-infoEdit .editBox .accMail .verify {
            display: block;
            width: 100px;
            width: 100px;
            text-decoration: none;
            background-position: 90px 0px;
        }

        .m-infoEdit .editBox .accMail .verify .btn1 span {
            display: block;
            text-align: center;
            padding-left: 10px;
            width: 80px;
            font-size: 12px;
            height: 34px;
            line-height: 33px;
            color: #fff;
            background-position: -40px 0px;
        }

        .m-infoEdit .editBox .accMail .verify .btn1:hover {
            background-position: 90px -50px;
        }

        .m-infoEdit .editBox .accMail .verify .btn1:hover span {
            background-position: -40px -50px;
        }

        .m-infoEdit .editBox .accMail .verify .btn1:active {
            background-position: 90px -100px;
        }

        .m-infoEdit .editBox .accMail .verify .btn1:active span {
            background-position: -40px -100px;
        }

        .m-infoEdit .editBox .accMail .verify .btn2 {
            display: block;
            width: 122px;
            width: 122px;
            text-decoration: none;
            background-position: 112px 0px;
        }

        .m-infoEdit .editBox .accMail .verify .btn2 span {
            display: block;
            text-align: center;
            padding-left: 10px;
            width: 102px;
            font-size: 12px;
            height: 34px;
            line-height: 33px;
            color: #fff;
            background-position: -40px 0px;
        }

        .m-infoEdit .editBox .accMail .verify .btn2:hover {
            background-position: 112px -50px;
        }

        .m-infoEdit .editBox .accMail .verify .btn2:hover span {
            background-position: -40px -50px;
        }

        .m-infoEdit .editBox .accMail .verify .btn2:active {
            background-position: 112px -100px;
        }

        .m-infoEdit .editBox .accMail .verify .btn2:active span {
            background-position: -40px -100px;
        }

        .m-infoEdit .editBox .accMail .verify .change {
            margin-left: 5px;
            color: #81bc9b;
            font-size: 12px;
        }

        .m-infoEdit .editBox .accMail .verify .change:hover {
            color: #E84807;
        }

        .m-infoEdit .editBox .sex {
            padding: 8px 0 0;
        }

        .m-infoEdit .editBox .sex label {
            font-size: 13px;
            margin: 0 14px 0 4px;
        }

        .m-infoEdit .editBox .nickName {
            position: relative;
        }

        .m-infoEdit .editBox .nickName .sign {
            color: #c33;
            position: absolute;
            right: 5px;
            top: 3px;
        }

        .m-infoEdit .editBox .sfzSel {
            margin-right: 20px;
        }

        .m-infoEdit .editBox .sfzSel .u-select {
            height: 33px;
            width: 90px;
        }

        .m-infoEdit .editBox .sfzSel .u-select .up {
            line-height: 31px;
            background-position: 77px -193px;
        }

        .m-infoEdit .editBox .sfzSel .u-select .down {
            top: 33px;
            width: 109px;
        }

        .m-infoEdit .editBox .sfzSel .u-select .down .list {
            width: 89px;
        }

        .m-infoEdit .editBox .sfzFeed .m-feedbackinfo {
            padding-left: 10px;
        }

        .m-infoEdit .editBox .addEdu {
            display: block;
            width: 80px;
            width: 80px;
            text-decoration: none;
            background-position: 70px -150px;
            margin: 0 0 10px;
        }

        .m-infoEdit .editBox .addEdu span {
            display: block;
            text-align: center;
            padding-left: 10px;
            width: 60px;
            font-size: 12px;
            height: 34px;
            line-height: 33px;
            color: #444;
            background-position: -40px -150px;
        }

        .m-infoEdit .editBox .addEdu:hover {
            background-position: 70px -200px;
        }

        .m-infoEdit .editBox .addEdu:hover span {
            background-position: -40px -200px;
        }

        .m-infoEdit .editBox .addEdu:active {
            background-position: 70px -250px;
        }

        .m-infoEdit .editBox .addEdu:active span {
            background-position: -40px -250px;
        }

        .m-infoEdit .editBox .eBcon {
            width: 568px;
            margin: 0 0 30px;
        }

        .m-infoEdit .editBox .eBcon .tags {
            width: 500px;
        }

        .m-infoEdit .editBox .education .area {
            z-index: 5;
        }

        .m-infoEdit .editBox .profession .area {
            z-index: 4;
        }

        .m-infoEdit .editBox .skills .area {
            z-index: 3;
        }

        .m-infoEdit .editBox .address {
            margin-top: 3px;
        }

        .m-infoEdit .footer {
            height: 63px;
            border-top: 1px solid #eaeaea;
            background-color: #fafafa;
            padding: 20px 0 0 108px;
        }

        .m-infoEdit .footer .btn {
            display: block;
            width: 88px;
            width: 88px;
            text-decoration: none;
            background-position: 78px -300px;
            border: 0;
            margin: 0 37px 0 0;
            font-weight: bold;
            float: left;
            font-family: '微软雅黑';
        }

        .m-infoEdit .footer .btn span {
            display: block;
            text-align: center;
            padding-left: 10px;
            width: 68px;
            font-size: 14px;
            height: 44px;
            line-height: 42px;
            color: #fff;
            background-position: -40px -300px;
        }

        .m-infoEdit .footer .btn:hover {
            background-position: 78px -350px;
        }

        .m-infoEdit .footer .btn:hover span {
            background-position: -40px -350px;
        }

        .m-infoEdit .footer .btn:active {
            background-position: 78px -400px;
        }

        .m-infoEdit .footer .btn:active span {
            background-position: -40px -400px;
        }

        .m-infoEdit .footer .btn span {
            font-size: 16px;
        }

        .education .u-select {
            margin: 0 6px 10px 0;
            width: 85px;
            z-index: 1000;
        }

        .education .u-select .up {
            font-size: 12px;
            padding-right: 3px;
            background-position: 73px -192px;
        }

        .education .u-select .down {
            width: 120px;
        }

        .education .u-select.prov {
            width: 50px;
        }

        .education .u-select.prov .up {
            background-position: 40px -192px;
        }

        .education .u-select2 {
            border: none;
            padding: 0;
        }

        .education .u-select2 .nores {
            background: white;
            border: 1px solid #ddd;
            padding: 8px 15px;
            font-size: 12px;
            color: #ccc;
            width: 246px;
            position: absolute;
            top: 100%;
            left: 0;
        }

        .education .u-insug {
            width: 85px;
        }

        .education .u-insug label {
            top: 8px;
            font-size: 12px;
        }

        .education .add {
            margin-left: 3px;
        }

        .m-AccBox .mTit {
            margin-bottom: 20px;
            font-size: 16px;
            color: #333;
        }

        .m-AccBox .title {
            color: #666;
            width: 90px;
            margin-right: 17px;
            font-family: '微软雅黑';
        }

        .m-AccBox .m-accBaseInfo {
            padding: 30px 10px 0 20px;
            position: relative;
            color: #999;
            border-bottom: 1px solid #eaeaea;
        }

        .m-AccBox .m-accBaseInfo .opra {
            color: #81bc9b;
            font-size: 12px;
            margin-top: 10px;
        }

        .m-AccBox .m-accBaseInfo .opra:hover {
            color: #E84807;
        }

        .m-AccBox .m-accBaseInfo .editInfo {
            position: absolute;
            top: 140px;
            left: 25px;
        }

        .m-AccBox .m-accBaseInfo .loginAcc {
            margin: 0 0 20px;
        }

        .m-AccBox .m-accBaseInfo .loginAcc .passport {
            padding: 0 20px 0 0;
            color: #999;
        }

        .m-AccBox .m-accBaseInfo .loginAcc .passport span {
            color: #aaa;
        }

        .m-AccBox .m-accBaseInfo .loginAcc .studyLog {
            margin: 5px 0 0 0;
            font-size: 12px;
            color: #aaa;
        }

        .m-AccBox .m-accBaseInfo .m-bindAccounts {
            padding: 40px 0 40px;
            border-top: 1px solid #eaeaea;
        }

        .m-AccBox .m-accBaseInfo .m-bindAccounts .mailAcc {
            margin-bottom: 20px;
        }

        .m-AccBox .m-accBaseInfo .m-bindAccounts .mailAcc .clickable {
            cursor: pointer;
            color: #21a557;
        }

        .m-AccBox .m-accBaseInfo .m-bindAccounts .mailAcc .j-ursAcc {
            margin-top: 18px;
            line-height: 18px;
        }

        .m-AccBox .m-accBaseInfo .m-bindAccounts .mailAcc .telNum {
            margin-top: 10px;
        }

        .m-AccBox .m-accBaseInfo .m-bindAccounts .thirdParty .j-thirdAccs {
            margin-left: -20px;
            width: 600px;
        }

        .m-AccBox .m-accBaseInfo .m-bindAccounts .thirdParty .j-thirdAccs .ml50 {
            margin: 40px 0 0 20px;
            cursor: pointer;
            width: 180px;
            height: 25px;
            line-height: 25px;
        }

        .m-AccBox .m-accBaseInfo .m-bindAccounts .thirdParty .j-thirdAccs .txtBind {
            top: -8px;
        }

        .m-AccBox .m-accBaseInfo .m-bindAccounts .thirdParty .j-thirdAccs .color-g {
            color: #81bc9b;
        }

        .m-AccBox .m-accBaseInfo .m-bindAccounts .thirdParty .j-thirdAccs .color-g:hover {
            color: #E84807;
        }

        .m-AccBox .m-accBaseInfo .m-bindAccounts .thirdParty .j-thirdAccs .nick {
            margin: 0 10px;
            max-width: 90px;
            display: inline-block;
        }

        .m-AccBox .m-accBaseInfo .m-bindAccounts .thirdParty .j-thirdAccs .f-icon {
            font-size: 15px;
            background-color: #9b9b9b;
            color: #ffffff;
            border-radius: 50%;
            padding: 5px;
            vertical-align: top;
            display: inline-block;
            width: 15px;
            height: 15px;
            line-height: 15px;
            text-align: center;
        }

        .m-AccBox .m-accBaseInfo .m-bindAccounts .thirdParty .j-thirdAccs .wechat .highlight {
            background-color: #2fa31c;
        }

        .m-AccBox .m-accBaseInfo .m-bindAccounts .thirdParty .j-thirdAccs .weibo .highlight {
            background-color: #e54d54;
        }

        .m-AccBox .m-accBaseInfo .m-bindAccounts .thirdParty .j-thirdAccs .qq .highlight {
            background-color: #4aaede;
        }

        .m-AccBox .m-accBaseInfo .m-bindAccounts .thirdParty .j-thirdAccs .renren .highlight {
            background-color: #689fd2;
        }

        .m-AccBox .m-accBaseInfo .m-bindAccounts .thirdParty .j-thirdAccs .icourse .highlight {
            background-color: #f6bf4b;
        }

        .m-AccBox .m-accBaseInfo .m-bindAccounts .thirdParty .j-thirdAccs .corp .highlight {
            background-color: #dd8689;
        }

        .m-AccBox .m-accBaseInfo .pCbox {
            border-top: 1px solid #eaeaea;
        }

        .m-AccBox .m-accBaseInfo .pCbox .perCernter {
            padding: 50px 0 50px;
            display: inline-block;
            font-size: 14px;
        }

        .m-AccBox .m-accBaseInfo .pCbox .perCernter .UrlPre {
            color: #999;
        }

        .m-AccBox .m-accBaseInfo .pCbox .perCernter .UrlSuf {
            margin: 0 30px 0 7px;
            color: #444;
        }

        .m-AccBox .m-accBaseInfo .urlEditBox {
            display: none;
            width: 265px;
            position: relative;
            top: -9px;
        }

        .m-AccBox .m-accBaseInfo .urlEditBox .btn {
            display: block;
            width: 62px;
            width: 62px;
            text-decoration: none;
            background-position: 52px 0px;
            font-weight: normal;
            margin: 0 23px 0 0;
        }

        .m-AccBox .m-accBaseInfo .urlEditBox .btn span {
            display: block;
            text-align: center;
            padding-left: 10px;
            width: 42px;
            font-size: 12px;
            height: 34px;
            line-height: 33px;
            color: #fff;
            background-position: -40px 0px;
        }

        .m-AccBox .m-accBaseInfo .urlEditBox .btn:hover {
            background-position: 52px -50px;
        }

        .m-AccBox .m-accBaseInfo .urlEditBox .btn:hover span {
            background-position: -40px -50px;
        }

        .m-AccBox .m-accBaseInfo .urlEditBox .btn:active {
            background-position: 52px -100px;
        }

        .m-AccBox .m-accBaseInfo .urlEditBox .btn:active span {
            background-position: -40px -100px;
        }

        .m-AccBox .m-accBaseInfo .urlEditBox .btn span {
            font-size: 13px;
        }

        .m-AccBox .m-accBaseInfo .urlEditBox .cancel {
            display: inline-block;
            width: 30px;
            height: 35px;
            line-height: 35px;
            font-size: 13px;
            color: #444;
        }

        .m-AccBox .m-accBaseInfo .urlEditBox .urlTip {
            color: #ccc;
            margin: 6px 0;
            font-size: 13px;
        }

        .m-AccBox .m-accBaseInfo .urlEditBox .urlEditTip {
            color: #c33;
            font-size: 13px;
        }

        .m-AccBox .m-accBaseInfo .urlEditBox .urlEdit .uEinput {
            background: #FAFAFA;
            border: 1px solid #DFDFDF;
            box-shadow: 1px 1px 2px #DFDFDF inset;
            width: 137px;
            height: 31px;
            margin: 0 10px 0 0;
        }

        .m-AccBox .m-accBaseInfo .urlEditBox .urlEdit .uEinput input {
            background: none repeat scroll 0 0 transparent;
            border: medium none;
            color: #444444;
            display: block;
            font-size: 14px;
            height: 22px;
            line-height: 22px;
            margin: 4px 6px;
            width: 125px;
            font-weight: bold;
        }

        .m-AccBox .m-accBaseInfo .show {
            display: block;
            margin-top: 50px;
        }

        .u-unBind {
            padding: 10px 30px;
        }

        .u-unBind.m-basewin div.zcnt {
            border-top: 1px solid #ccc;
            padding-top: 30px;
            padding-bottom: 10px;
        }

        .u-unBind.m-basewin .zbar .zttl {
            padding-left: 0;
        }

        .u-unBind .btn .slave.long {
            width: 100px;
            background-position: 90px -150px;
        }

        .u-unBind .btn .slave.long:hover {
            background-position: 90px -200px;
        }

        .u-unBind .btn .slave.long span {
            width: 80px;
        }

        .u-unBind .f-cr {
            color: #ce5251;
        }

        .m-epayAccount {
            border-top: 1px solid #eaeaea;
            padding: 40px 0 20px;
        }

        .m-epayAccount .j-epayAccount {
            margin-top: 10px;
        }

        .epayAccount {
            margin-bottom: 25px;
        }

        .epayAccount .f-sign {
            padding: 0;
            margin-left: -7px;
        }

        .epayAccount .title {
            line-height: 32px;
        }

        .epayAccount .mailTxt {
            margin: 5px 0 0 0;
            font-size: 12px;
            color: #aaa;
        }

        .epayAccount .mailTxt .m-feedbackinfo {
            padding-left: 0;
        }

        .epayAccount .mailTxt .m-feedbackinfo .righttxt {
            color: #999;
        }

        .epayAccount .mailTxt .sendAgain {
            color: #21a557;
        }

        .epayAccount .add .m-baseinputui textarea {
            overflow-y: hidden;
        }

        .epayAccount .add .btn {
            display: block;
            width: 62px;
            width: 62px;
            text-decoration: none;
            background-position: 52px 0px;
            font-size: 12px;
            margin: 0 15px 0 20px;
        }

        .epayAccount .add .btn span {
            display: block;
            text-align: center;
            padding-left: 10px;
            width: 42px;
            font-size: 12px;
            height: 34px;
            line-height: 33px;
            color: #fff;
            background-position: -40px 0px;
        }

        .epayAccount .add .btn:hover {
            background-position: 52px -50px;
        }

        .epayAccount .add .btn:hover span {
            background-position: -40px -50px;
        }

        .epayAccount .add .btn:active {
            background-position: 52px -100px;
        }

        .epayAccount .add .btn:active span {
            background-position: -40px -100px;
        }

        .epayAccount .add .m-feedbackinfo {
            padding-left: 0;
        }

        .epayAccount .add .cancel {
            font-size: 12px;
            color: #21a557;
            margin: 10px 15px 0 0;
        }

        .epayAccount .verify {
            line-height: 34px;
        }

        .epayAccount .verify .mailN {
            margin-right: 15px;
        }

        .epayAccount .verify .btn {
            font-size: 12px;
            margin: 0;
        }

        .epayAccount .verify .btn1 {
            display: block;
            width: 100px;
            width: 100px;
            text-decoration: none;
            background-position: 90px 0px;
        }

        .epayAccount .verify .btn1 span {
            display: block;
            text-align: center;
            padding-left: 10px;
            width: 80px;
            font-size: 12px;
            height: 34px;
            line-height: 33px;
            color: #fff;
            background-position: -40px 0px;
        }

        .epayAccount .verify .btn1:hover {
            background-position: 90px -50px;
        }

        .epayAccount .verify .btn1:hover span {
            background-position: -40px -50px;
        }

        .epayAccount .verify .btn1:active {
            background-position: 90px -100px;
        }

        .epayAccount .verify .btn1:active span {
            background-position: -40px -100px;
        }

        .epayAccount .verify .btn2 {
            display: block;
            width: 122px;
            width: 122px;
            text-decoration: none;
            background-position: 112px 0px;
        }

        .epayAccount .verify .btn2 span {
            display: block;
            text-align: center;
            padding-left: 10px;
            width: 102px;
            font-size: 12px;
            height: 34px;
            line-height: 33px;
            color: #fff;
            background-position: -40px 0px;
        }

        .epayAccount .verify .btn2:hover {
            background-position: 112px -50px;
        }

        .epayAccount .verify .btn2:hover span {
            background-position: -40px -50px;
        }

        .epayAccount .verify .btn2:active {
            background-position: 112px -100px;
        }

        .epayAccount .verify .btn2:active span {
            background-position: -40px -100px;
        }

        .epayAccount .verify .change {
            margin-left: 5px;
            color: #81bc9b;
            font-size: 12px;
        }

        .epayAccount .verify .change:hover {
            color: #E84807;
        }

        .m-AccBox .m-accBind, .m-AccBox .m-epayBind {
            padding: 30px 20px;
        }

        .m-AccBox .m-accBind .binddes {
            margin-bottom: 20px;
            width: 540px;
            font-size: 12px;
            color: #999;
        }

        .m-AccBox .u-bindItem {
            height: 45px;
            width: 540px;
            font-size: 12px;
        }

        .m-AccBox .u-bindItem .icn {
            width: 32px;
            height: 30px;
            margin-right: 12px;
        }

        .m-AccBox .u-bindItem .icn1 {
            background-position: -183px -220px;
        }

        .m-AccBox .u-bindItem .icn2 {
            background-position: 0 -220px;
        }

        .m-AccBox .u-bindItem .icn3 {
            background-position: -122px -220px;
        }

        .m-AccBox .u-bindItem .icn4 {
            background-position: -61px -220px;
        }

        .m-AccBox .u-bindItem .name {
            color: #666;
            margin-right: 12px;
        }

        .m-AccBox .u-bindItem .site {
            line-height: 30px;
        }

        .m-AccBox .u-bindItem .page {
            color: #999;
            max-width: 150px;
        }

        .m-AccBox .u-bindItem .page:hover {
            color: #21a557;
        }

        .m-AccBox .u-bindItem .tip .m-feedbackinfo {
            padding: 0;
            margin-top: -5px;
        }

        .m-AccBox .u-bindItem .tip .m-feedbackinfo .normaltxt {
            color: #a88300;
        }

        .m-AccBox .u-bindItem .invite {
            color: #999;
        }

        .m-AccBox .u-bindItem .invite a {
            margin-left: 25px;
            color: #21a557;
        }

        .m-AccBox .u-bindItem .opr {
            width: 74px;
            margin-left: 10px;
        }

        .m-AccBox .u-bindItem .opr .unbind {
            width: 74px;
            font-size: 14px;
            text-align: center;
        }

        .m-AccBox .u-bindItem .opr .btn {
            display: block;
            width: 74px;
            width: 74px;
            text-decoration: none;
            background-position: 64px 0px;
            margin: 0;
        }

        .m-AccBox .u-bindItem .opr .btn span {
            display: block;
            text-align: center;
            padding-left: 10px;
            width: 54px;
            font-size: 12px;
            height: 34px;
            line-height: 33px;
            color: #fff;
            background-position: -40px 0px;
        }

        .m-AccBox .u-bindItem .opr .btn:hover {
            background-position: 64px -50px;
        }

        .m-AccBox .u-bindItem .opr .btn:hover span {
            background-position: -40px -50px;
        }

        .m-AccBox .u-bindItem .opr .btn:active {
            background-position: 64px -100px;
        }

        .m-AccBox .u-bindItem .opr .btn:active span {
            background-position: -40px -100px;
        }

        .singlebtn .btn .left {
            float: none;
        }

        .singlebtn .m-dialog .right {
            display: none;
        }

        .singlebtn .m-dialog .left {
            margin: 0 auto;
        }

        .singlebtn .m-dialog .btn .left {
            float: none;
        }

        .singlebtn .m-dialog .btn .slave.small {
            display: none;
        }

        .m-epayBind {
            border-bottom: 1px solid #eaeaea;
        }

        .m-epayBind .actEpayBtn {
            display: block;
            width: 126px;
            width: 126px;
            text-decoration: none;
            background-position: 116px 0px;
        }

        .m-epayBind .actEpayBtn span {
            display: block;
            text-align: center;
            padding-left: 10px;
            width: 106px;
            font-size: 12px;
            height: 34px;
            line-height: 33px;
            color: #fff;
            background-position: -40px 0px;
        }

        .m-epayBind .actEpayBtn:hover {
            background-position: 116px -50px;
        }

        .m-epayBind .actEpayBtn:hover span {
            background-position: -40px -50px;
        }

        .m-epayBind .actEpayBtn:active {
            background-position: 116px -100px;
        }

        .m-epayBind .actEpayBtn:active span {
            background-position: -40px -100px;
        }

        .m-epayBind .actEpayBtn span {
            font-size: 14px;
        }

        .m-epayBind .des {
            font-size: 12px;
            color: #999;
            margin-top: 9px;
        }

        .m-epayBind {
            border-bottom: 1px solid #eaeaea;
        }

        .m-epayBind .actEpayBtn {
            display: block;
            width: 126px;
            width: 126px;
            text-decoration: none;
            background-position: 116px 0px;
        }

        .m-epayBind .actEpayBtn span {
            display: block;
            text-align: center;
            padding-left: 10px;
            width: 106px;
            font-size: 12px;
            height: 34px;
            line-height: 33px;
            color: #fff;
            background-position: -40px 0px;
        }

        .m-epayBind .actEpayBtn:hover {
            background-position: 116px -50px;
        }

        .m-epayBind .actEpayBtn:hover span {
            background-position: -40px -50px;
        }

        .m-epayBind .actEpayBtn:active {
            background-position: 116px -100px;
        }

        .m-epayBind .actEpayBtn:active span {
            background-position: -40px -100px;
        }

        .m-epayBind .actEpayBtn span {
            font-size: 14px;
        }

        .m-epayBind .des {
            font-size: 12px;
            color: #999;
            margin-top: 9px;
        }

        .m-epayBind .info {
            background-position: 0 -475px;
            height: 36px;
            line-height: 36px;
            padding-left: 100px;
            font-family: 'Microsoft YAHEI';
        }

        .u-logSelectDialog {
            padding: 30px;
        }

        .u-logSelectDialog div.zbar {
            line-height: 30px;
            height: 30px;
            margin-bottom: 50px;
            border-bottom: 1px solid #e5e5e5;
        }

        .u-logSelectDialog div.zbar .zttl {
            font-size: 16px;
            color: #666666;
            line-height: 20px;
            padding: 0px;
            font-weight: normal;
        }

        .u-logSelectDialog .mainType, .u-logSelectDialog .slaveType {
            width: 330px;
            height: 415px;
            border: 1px solid #f0f0f0;
        }

        .u-logSelectDialog .mainType .m-logHeader, .u-logSelectDialog .slaveType .m-logHeader {
            background-color: #f0f0f0;
            height: 60px;
        }

        .u-logSelectDialog .mainType .m-logHeader .headIcon, .u-logSelectDialog .slaveType .m-logHeader .headIcon {
            background: url(static/whiteDot.png) no-repeat center center;
            width: 50px;
            height: 50px;
            top: -25px;
            left: 10px;
        }

        .u-logSelectDialog .mainType .m-logHeader .headIcon .logo, .u-logSelectDialog .slaveType .m-logHeader .headIcon .logo {
            width: 46px;
            height: 46px;
            border-radius: 50%;
            padding: 2px;
        }

        .u-logSelectDialog .mainType .m-logHeader .titleBox, .u-logSelectDialog .slaveType .m-logHeader .titleBox {
            margin-left: 70px;
        }

        .u-logSelectDialog .mainType .m-logHeader .titleBox .twoLine, .u-logSelectDialog .slaveType .m-logHeader .titleBox .twoLine {
            font-size: 16px;
            line-height: 20px;
            margin: 10px 0 5px;
            width: 200px;
        }

        .u-logSelectDialog .mainType .m-logHeader .titleBox .specialTag, .u-logSelectDialog .slaveType .m-logHeader .titleBox .specialTag {
            background-color: #21a557;
            color: #fff;
            font-size: 10px;
            padding: 2px 5px;
            top: -25px;
            right: 0;
        }

        .u-logSelectDialog .mainType .m-logHeader .titleBox .currentTag, .u-logSelectDialog .slaveType .m-logHeader .titleBox .currentTag {
            font-size: 12px;
        }

        .u-logSelectDialog .mainType .m-logHeader .titleBox .tag, .u-logSelectDialog .slaveType .m-logHeader .titleBox .tag {
            padding: 2px;
            font-size: 15px;
            background-color: #9b9b9b;
            color: #ffffff;
        }

        .u-logSelectDialog .mainType .m-logHeader .titleBox .wechat, .u-logSelectDialog .slaveType .m-logHeader .titleBox .wechat {
            background-color: #2fa31c;
        }

        .u-logSelectDialog .mainType .m-logHeader .titleBox .weibo, .u-logSelectDialog .slaveType .m-logHeader .titleBox .weibo {
            background-color: #e54d54;
        }

        .u-logSelectDialog .mainType .m-logHeader .titleBox .qq, .u-logSelectDialog .slaveType .m-logHeader .titleBox .qq {
            background-color: #4aaede;
        }

        .u-logSelectDialog .mainType .m-logHeader .titleBox .renren, .u-logSelectDialog .slaveType .m-logHeader .titleBox .renren {
            background-color: #689fd2;
        }

        .u-logSelectDialog .mainType .m-logHeader .titleBox .icourse, .u-logSelectDialog .slaveType .m-logHeader .titleBox .icourse {
            background-color: #f6bf4b;
        }

        .u-logSelectDialog .mainType .m-logHeader .titleBox .corp, .u-logSelectDialog .slaveType .m-logHeader .titleBox .corp {
            background-color: #dd8689;
        }

        .u-logSelectDialog .mainType .m-logHeader .titleBox .urs, .u-logSelectDialog .slaveType .m-logHeader .titleBox .urs {
            background-color: #f57e80;
        }

        .u-logSelectDialog .mainType .m-logHeader .titleBox .txt, .u-logSelectDialog .slaveType .m-logHeader .titleBox .txt {
            font-size: 12px;
            color: #999999;
            padding-left: 5px;
        }

        .u-logSelectDialog .mainType .m-logHeader .tick, .u-logSelectDialog .slaveType .m-logHeader .tick {
            color: #fff;
            border-radius: 50%;
            padding: 10px;
            background-color: #cccccc;
            top: 15px;
            right: 15px;
            width: 15px;
            height: 15px;
            line-height: 15px;
            text-align: center;
        }

        .u-logSelectDialog .mainType .exclamation, .u-logSelectDialog .slaveType .exclamation {
            font-size: 40px;
            color: #e6e6e6;
            text-align: center;
            margin-top: 118px;
        }

        .u-logSelectDialog .mainType .no-data, .u-logSelectDialog .slaveType .no-data {
            color: #999999;
            font-size: 14px;
            text-align: center;
            margin-top: 20px;
        }

        .u-logSelectDialog .mainType .logBox, .u-logSelectDialog .slaveType .logBox {
            padding: 25px 20px 0;
        }

        .u-logSelectDialog .mainType .logBox h3, .u-logSelectDialog .slaveType .logBox h3 {
            border-bottom: 1px solid #e5e5e5;
            padding: 5px 0 10px;
            font-size: 12px;
            line-height: 1em;
        }

        .u-logSelectDialog .mainType .logBox ul, .u-logSelectDialog .slaveType .logBox ul {
            padding: 16px 0 0;
            margin-top: -10px;
        }

        .u-logSelectDialog .mainType .logBox ul li, .u-logSelectDialog .slaveType .logBox ul li {
            margin-top: 10px;
            color: #666666;
            font-size: 14px;
        }

        .u-logSelectDialog .mainType .logBox ul li .u-dot, .u-logSelectDialog .slaveType .logBox ul li .u-dot {
            color: #21a557;
            margin-right: 10px;
        }

        .u-logSelectDialog .mainType .logBox .uniCloud, .u-logSelectDialog .slaveType .logBox .uniCloud {
            background-color: #609ef5;
            color: #fff;
            font-size: 10px;
            padding: 2px 5px;
        }

        .u-logSelectDialog div.selectedCard {
            border: 1px solid #21a557;
        }

        .u-logSelectDialog div.selectedCard .m-logHeader {
            background-color: #21a557;
        }

        .u-logSelectDialog div.selectedCard .m-logHeader .tick {
            color: #21a557;
            background-color: #fff;
        }

        .u-logSelectDialog div.selectedCard .m-logHeader .titleBox .twoLine, .u-logSelectDialog div.selectedCard .m-logHeader .titleBox .txt, .u-logSelectDialog div.selectedCard .m-logHeader .titleBox .currentTag {
            color: #fff;
        }

        .u-logSelectDialog div.clickable {
            cursor: pointer;
        }

        .u-logSelectDialog div.clickable .m-logHeader .tick {
            display: block;
        }

        .u-logSelectDialog .btn {
            background: url(static/button.png) no-repeat 4449px 4449px;
            margin-top: 30px;
            display: block;
            width: 85px;
            width: 85px;
            text-decoration: none;
        }

        .u-logSelectDialog .btn span {
            display: block;
            text-align: center;
            padding-left: 10px;
            width: 65px;
            font-size: 12px;
            height: 34px;
            line-height: 33px;
            margin-top: -8px;
        }

        .u-logSelectDialog .tip {
            font-size: 12px;
            margin-left: 20px;
            top: -23px;
            right: 260px;
        }

        .u-logSelectDialog .specialTip {
            font-size: 12px;
            color: #ce5251;
            margin-top: 30px;
            margin-right: 10px;
        }

        .u-logSelectDialog .u-btn-disabled {
            background-position: -50px -150px;
            cursor: default;
        }

        .u-logSelectDialog .u-btn-disabled:hover {
            background-position: -50px -200px;
        }

        .u-logSelectDialog .u-btn-disabled span {
            color: #444;
            background-position: -40px -150px;
        }

        .u-logSelectDialog .u-btn-default {
            background-position: -50px 0px;
            cursor: pointer;
        }

        .u-logSelectDialog .u-btn-default:hover {
            background-position: -50px -50px;
        }

        .u-logSelectDialog .u-btn-default span {
            color: #fff;
            background-position: -40px 0px;
        }

        .m-hoverTips {
            color: #21a557;
            cursor: pointer;
        }

        .m-hoverTips .block {
            display: none;
            width: 350px;
            left: -250px;
            bottom: 31px;
            letter-spacing: 0px;
            text-align: left;
            background: #ffffcc;
            padding: 10px 10px;
            border-radius: 4px;
            box-shadow: 0px 1px 2px #777;
            line-height: 20px;
            font-size: 12px;
            color: #000;
        }

        .m-hoverTips .block .arrow {
            bottom: -16px;
            left: 273px;
            border-width: 8px 6px;
            border-style: solid;
            border-style: solid;
            border-color: #ffffcc transparent transparent transparent;
        }

        .m-hoverTips:hover .block {
            display: block;
        }

        .setting-hd {
            margin: 14px 0;
        }

        .m-setBox .boxTab {
            border-bottom: 1px solid #eaeaea;
            height: 43px;
            background-color: #fafafa;
        }

        .m-setBox .boxTab a {
            width: 120px;
            height: 44px;
            line-height: 44px;
            display: block;
            text-align: center;
            font-family: "微软雅黑";
            font-size: 15px;
            float: left;
            color: #444;
            font-weight: bold;
        }

        .m-setBox .boxTab a:hover {
            color: #E84807;
        }

        .m-setBox .boxTab .current {
            color: #fff;
            background-color: #E84807;
        }

        .m-setBox .boxTab .current:hover {
            color: #fff;
        }

        .m-setBox .btn {
            display: block;
            width: 88px;
            width: 88px;
            text-decoration: none;
            background-position: 78px -300px;
            border: 0;
            margin: 0 37px 0 0;
            font-weight: bold;
            float: left;
        }

        .m-setBox .btn span {
            display: block;
            text-align: center;
            padding-left: 10px;
            width: 68px;
            font-size: 14px;
            height: 44px;
            line-height: 42px;
            color: #fff;
            background-position: -40px -300px;
        }

        .m-setBox .btn:hover {
            background-position: 78px -350px;
        }

        .m-setBox .btn:hover span {
            background-position: -40px -350px;
        }

        .m-setBox .btn:active {
            background-position: 78px -400px;
        }

        .m-setBox .btn:active span {
            background-position: -40px -400px;
        }

        .m-setBox .btn span {
            font-size: 16px;
        }

        .m-setBox .m-PriBox {
            padding: 18px;
        }

        .m-setBox .m-PriBox h3 {
            font-size: 12px;
            font-family: '宋体';
            color: #ccc;
            margin-bottom: 25px;
        }

        .m-setBox .m-PriBox li {
            margin: 0 0 26px;
            font-family: '微软雅黑';
        }

        .m-setBox .m-PriBox li ul {
            margin: 0 0 0 25px;
        }

        .m-setBox .m-PriBox li ul li {
            margin: 16px 0 0;
            *margin: 10px 0 0;
        }

        .m-setBox .m-PriBox li input {
            margin: 0 10px 0 0;
            position: relative;
            top: -2px;
        }

        .m-setBox .m-MesBox {
            padding: 18px;
        }

        .m-setBox .m-MesBox h3 {
            font-size: 12px;
            font-family: '宋体';
            color: #ccc;
            margin-bottom: 25px;
        }

        .m-setBox .m-MesBox .tit {
            color: #333;
            font-size: 12px;
            border-bottom: 1px solid #ccc;
            padding-bottom: 15px;
        }

        .m-setBox .m-MesBox ul {
            margin: 0 0 45px;
            font-family: '微软雅黑';
        }

        .m-setBox .m-MesBox ul li {
            margin: 0 0 26px;
            float: left;
            width: 322px;
        }

        .m-setBox .m-MesBox ul li input {
            margin: 0 10px 0 0;
            position: relative;
            top: -2px;
        }

        .m-setBox .m-MailBox {
            padding: 20px 18px 18px;
        }

        .m-setBox .m-MailBox .title {
            font-size: 16px;
            font-family: "微软雅黑";
            margin-bottom: 20px;
        }

        .m-setBox .m-MailBox h3 {
            color: #999;
            font-size: 13px;
            font-family: normal;
            margin-bottom: 25px;
        }

        .m-setBox .m-MailBox ul {
            margin: 0 0 35px 10px;
            font-family: '微软雅黑';
        }

        .m-setBox .m-MailBox ul li {
            margin: 0 0 26px;
        }

        .m-setBox .m-MailBox ul li input {
            margin: 0 10px 0 0;
            position: relative;
            top: -2px;
        }

        .m-setBox .m-MailBox ul li label {
            display: inline-block;
            width: 200px;
        }

        .m-setBox .m-MailBox ul li span {
            color: #999;
        }

        .m-setBox .m-settingsAddress .footer {
            height: 63px;
            border-top: 1px solid #eaeaea;
            background-color: #fafafa;
            padding: 20px 0 0 108px;
        }

        .m-setBox .m-settingsAddress .footer .btn {
            display: block;
            width: 88px;
            width: 88px;
            text-decoration: none;
            background-position: 78px -300px;
            border: 0;
            margin: 0 37px 0 0;
            font-weight: bold;
            float: left;
            font-family: '微软雅黑';
        }

        .m-setBox .m-settingsAddress .footer .btn span {
            display: block;
            text-align: center;
            padding-left: 10px;
            width: 68px;
            font-size: 14px;
            height: 44px;
            line-height: 42px;
            color: #fff;
            background-position: -40px -300px;
        }

        .m-setBox .m-settingsAddress .footer .btn:hover {
            background-position: 78px -350px;
        }

        .m-setBox .m-settingsAddress .footer .btn:hover span {
            background-position: -40px -350px;
        }

        .m-setBox .m-settingsAddress .footer .btn:active {
            background-position: 78px -400px;
        }

        .m-setBox .m-settingsAddress .footer .btn:active span {
            background-position: -40px -400px;
        }

        .m-setBox .m-settingsAddress .footer .btn span {
            font-size: 16px;
        }
    </style>
    <style type="text/css">
        .auto-1523864610048 {
            position: fixed;
            _position: absolute;
            z-index: 100;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background-image: url(data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==);
        }

        .auto-1523864610049 {
            position: absolute;
            z-index: 1000;
            border: 1px solid #aaa;
            background: #fff;
        }

        .auto-1523864610049 .zbar {
            line-height: 30px;
            background: #8098E7;
            border-bottom: 1px solid #aaa;
        }

        .auto-1523864610049 .zcnt {
            padding: 10px 5px;
        }

        .auto-1523864610049 .zttl {
            margin-right: 20px;
            text-align: left;
        }

        .auto-1523864610049 .zcls {
            position: absolute;
            top: 5px;
            right: 0;
            width: 20px;
            height: 20px;
            line-height: 20px;
            cursor: pointer;
        }

        .auto-1523864610052 {
            width: 100%;
            height: 100%;
            padding: 5px;
            position: relative;
            background: none repeat scroll 0 0 #FAFAFA;
            border: 1px solid #DFDFDF;
            -webkit-box-shadow: inset 1px 1px 2px #DFDFDF;
            -moz-box-shadow: inset 1px 1px 2px #dfdfdf;
            box-shadow: inset 1px 1px 2px #DFDFDF;
        }

        .auto-1523864610052 .inputtxt {
            width: 100%;
            height: 100%;
            font-size: 12px;
            line-height: 23px;
            background: transparent;
            border: none;
            overflow-y: auto;
            overflow-x: hidden;
            resize: none
        }

        .auto-1523864610052 .inputhint {
            font-size: 12px;
            color: #ccc;
            position: absolute;
            top: 10px;
            left: 10px;
        }

        .auto-1523864610054 {
            font-size: 12px;
            line-height: 160%;
        }

        .auto-1523864610054 a {
            margin: 0 2px;
            padding: 2px 8px;
            color: #333;
            border: 1px solid #aaa;
            text-decoration: none;
        }

        .auto-1523864610054 .js-disabled {
            cursor: default;
        }

        .auto-1523864610054 .js-selected {
            cursor: default;
            background-color: #bbb;
        }

        .auto-1523864610055 .item-highlight {
            background: #E0F2E2;
        }

        .auto-1523864610055 .m-data-lists {
            position: relative;
            z-index: 100;
        }

        .auto-1523864610055 .ui-pager {
            position: relative;
            z-index: 99;
        }

        .auto-1523864610056 {
            width: 100%;
            background: #ffffcc;
        }

        .auto-1523864610056 .icon {
            margin: 7px 7px 0 15px;
            width: 18px;
            height: 18px;
            background: url(static/ui_sprite.png) 0 -779px no-repeat;
        }

        .auto-1523864610056 .text {
            margin-left: 7px;
            width: 90%;
            color: #333;
            font-size: 14px;
            line-height: 32px;
            font-family: "微软雅黑";
        }

        .auto-1523864610056 a {
            color: #E84807;
        }

        .auto-1523864610056 a:hover {
            text-decoration: underline;
        }

        .auto-1523864610056 .close {
            margin: 10px 10px 0 0;
            cursor: pointer;
            width: 12px;
            height: 12px;
            background: url(static/ui_sprite.png) -9px -11px no-repeat;
        }

        .u-share {
        }

        .u-share a {
            display: block;
            padding-left: 18px;
            height: 16px;
            float: left;
            margin-left: 9px;
            line-height: 16px;
            font-size: 12px;
        }

        .auto-1523864610060 {
            padding: 5px 0 5px 15px;
            font-size: 12px;
            line-height: 16px;
        }

        .auto-1523864610060 .warningbox {
            color: #cc3333;
        }

        .auto-1523864610060 .warningbox .warning {
            float: left;
            line-height: 22px;
        }

        .auto-1523864610060 .warningbox .wrong {
            float: left;
            background: url(static/common.png) no-repeat -40px 0;
            height: 20px;
            width: 20px;
        }

        .auto-1523864610060 .warningbox .warn {
            float: left;
            background: url(static/common.png) no-repeat 0 0;
            height: 20px;
            width: 20px;
        }

        .auto-1523864610060 .warningbox .right {
            float: left;
            background: url(static/common.png) no-repeat -20px 0;
            height: 20px;
            width: 20px;
        }

        .auto-1523864610060 .warningbox .normal {
            float: left;
            background: url(static/common.png) no-repeat -60px 0;
            height: 20px;
            width: 20px;
        }

        .auto-1523864610060 .warningbox .righttxt {
            color: #666;
        }

        .auto-1523864610060 .loadingbox {
            color: #999;
        }

        .auto-1523864610060 .loadingbox .loading {
            float: left;
            line-height: 22px;
        }

        .auto-1523864610060 .loadingbox .icon {
            float: left;
            background: url(static/loading_circle.gif) no-repeat 0 0;
            height: 16px;
            width: 20px;
        }

        .u-usrAttStatis, .u-usrAttStatis .link {
            font: 12px/22px '宋体';
            color: #666;
        }

        .u-usrAttStatis .num {
            font-family: Arial, Helvetica, sans-serif;
        }

        .u-usrAttStatis .link:hover {
            color: #21a557;
            text-decoration: none;
        }

        .u-usrAttStatis.noLink .link:hover {
            color: #666;
            text-decoration: none;
            cursor: default;
        }

        .u-usrAttStatis .str {
            padding-right: 6px;
        }

        .u-usrAttOp .op:hover, .u-usrattop .op:active {
            color: #21a557;
            text-decoration: underline;
        }

        .auto-1523864610067 .u-title {
            color: #ccc;
            height: 35px;
            line-height: 35px;
            border-bottom: solid 1px #ccc;
        }

        .auto-1523864610067 .u-row {
            margin-bottom: 10px;
        }

        .auto-1523864610067 .u-error {
            color: red;
            padding-top: 10px;
            font-size: 12px;
            height: 2em;
        }

        .auto-1523864610067 .u-edit {
            position: relative;
            z-index: 101;
            background: #FAFAFA;
            border: 1px solid #DFDFDF;
            -webkit-box-shadow: inset 1px 1px 2px #DFDFDF;
            -moz-box-shadow: inset 1px 1px 2px #dfdfdf;
            box-shadow: inset 1px 1px 2px #DFDFDF;
        }

        .auto-1523864610067 .btn a {
            border: solid 1px #ccc;
            padding: 5px;
        }

        .auto-1523864610067 .ipt {
            display: block;
            font-size: 14px;
            position: relative;
            z-index: 101;
            line-height: 35px;
            height: 35px;
            width: 290px;
            resize: none;
            background: transparent;
            border: none;
            color: #444;
            overflow: hidden;
        }

        .auto-1523864610083 .testing {
            height: 27px;
            width: 32px;
            background: url(static/audio_playing.gif) no-repeat 1px 1px;
        }

        .auto-1523864610083 .endtesting {
            height: 27px;
            width: 32px;
            background: url(static/ui_sprite.png) no-repeat -51px -1594px;
        }

        .auto-1523864610083 .analysis {
            height: 24px;
        }

        .auto-1523864610083 .txtinfo {
            height: 24px;
            line-height: 24px;
            font-family: "微软雅黑";
            font-size: 14px;
            color: #999;
            padding: 0 5px;
            border: 1px solid #ddd;
            background-color: #f9f9f9;
            border-radius: 4px 0 0 4px;
            border-right: none;
        }

        .auto-1523864610083 .playbar {
            height: 24px;
            background-color: #f2f2f5;
            width: 0px;;
            border: 1px solid #ddd;
            border-right: none;
        }

        .auto-1523864610083 .allbar {
            margin: 9px 5px;
            height: 6px;
            width: 0px;
            background-color: #ccc
        }

        .auto-1523864610083 .normalborder {
            border: 1px solid #ddd;
            border-left: none;
            border-right: none;
        }

        .auto-1523864610083 .duration {
            height: 24px;
            line-height: 24px;
            width: 0px;
            background-color: #f2f2f5;
            color: #aaa;
        }

        .auto-1523864610083 .curbar {
            height: 6px;
            width: 0%;
            background-color: #21a557;
        }

        .auto-1523864610083 .showloading {
            height: 24px;
            width: 24px;
            border: 1px solid #ddd;
            border-radius: 0 4px 4px 0;
            background: url(static/audio_loading.gif) no-repeat 1px -1px;
            background-color: #f2f2f5;
            cursor: pointer;
        }

        .auto-1523864610083 .playbtnplaying {
            height: 24px;
            width: 25px;
            border: 1px solid #ddd;
            border-left: none;
            border-radius: 0 4px 4px 0;
            background: url(static/ui_sprite.png) no-repeat 7px -1613px;
            background-color: #f2f2f5;
            cursor: pointer;
        }

        .auto-1523864610083 .playbtnplaying:hover {
            background-position: -19px -1613px;
            background-color: #e5e5e9;
        }

        .auto-1523864610083 .playbtnstop:hover {
            background-position: -19px -1594px;
            background-color: #e5e5e9;
        }

        .auto-1523864610083 .playbtnstop {
            height: 24px;
            width: 25px;
            border: 1px solid #ddd;
            border-left: none;
            border-radius: 0 4px 4px 0;
            background: url(static/ui_sprite.png) no-repeat 7px -1593px;
            background-color: #f2f2f5;
            cursor: pointer;
        }

        .u-window-im {
            position: fixed;
            z-index: 99999 !important;
        }

        .u-window-im .zbar {
            top: 30px;
            right: 0px;
            position: absolute;
            cursor: move;
            width: 15px;
            height: 15px !important;
            background: url("//nos.netease.com/test-edu-image/87E0380D962D5B2BD332691243A6FF02-1453801344006") !important;
            background-position: -15px 0px;
            margin: 7px;
        }

        .u-window-im .zbar:hover {
            background-position: 0px 0px !important;
        }

        .u-window-im {
            background: transparent !important;
            box-shadow: none !important;
            -webkit-box-shadow: none !important;
            border: none !important;
        }

        .u-window-im .zttl {
            display: none !important;
        }

        .u-window-im .zcls {
            display: none !important;
        }

        .u-window-im .little-box {
            display: none;
        }

        .u-window-im .little-box span {
            display: none;
        }

        .u-window-im .little-box-drag {
            display: block;
            position: absolute;
            height: 480px;
            width: 617px;
        }

        .u-window-im .im-box .im-cont {
            background: #fff;
        }

        .u-window-im-before {
            display: none;
        }

        .u-window-im-before .zbar {
            display: none !important;
        }

        .u-window-im-before .zcls {
            display: none !important;
        }

        .u-window-im-before {
            width: 62px !important;
            height: 62px !important;
            position: fixed;
            top: auto !important;
            left: auto !important;
            right: 30px !important;
            bottom: 45px !important;
            background-color: #ffd200;
            box-shadow: none !important;
            -webkit-box-shadow: none !important;
            -moz-box-shadow: none !important;
            border: none !important;
            background: transparent !important;
        }

        .u-window-im-before .little-box {
            display: block;
            width: 62px !important;
            height: 62px !important;
            position: absolute;
            z-index: 999;
            cursor: pointer;
        }

        .u-window-im-before .little-box span {
            display: none;
        }

        .u-window-im-before .little-box:hover {
            background: #ffd200;
            border-radius: 5px;
        }

        .u-window-im-before .little-box:hover span {
            display: inline-block;
            width: 60px;
            height: 60px;
            line-height: 60px;
            font-size: 18px;
            color: white;
            text-align: center;
        }

        .u-window-im-before .im-box .im-op {
            display: none !important;
        }

        .u-window-im-before .im-box .im-relate-course {
            display: none !important;
        }

        .u-window-im-before .im-box .im-cont {
            width: 62px !important;
            height: 62px !important;
            border: none !important;
            box-shadow: none !important;
            -moz-box-shadow: none !important;
        }

        .u-window-im-before .im-box .im-cont .im {
            width: 62px !important;
            height: 62px !important;
        }

        .auto-1523864610090.im-box {
            width: 647px;
            height: 476px;
        }

        .auto-1523864610090.im-box .im-op {
            width: 30px;
            height: 60px;
            background: #636363;
        }

        .auto-1523864610090.im-box .im-op .im-close {
            cursor: pointer;
            width: 15px;
            height: 15px;
            background: url("//nos.netease.com/test-edu-image/87E0380D962D5B2BD332691243A6FF02-1453801344006");
            background-position: -15px -15px;
            margin: 7px;
        }

        .auto-1523864610090.im-box .im-op .im-close:hover {
            background-position: 0px -15px;
        }

        .auto-1523864610090.im-box .im-cont {
            width: 613px;
            height: 476px;
            border: 2px solid #21a557;
            box-shadow: 0px 2px 6px #333;
            -webkit-box-shadow: 0px 2px 6px #333;
            -moz-box-shadow: 0px 2px 6px #333;
        }

        .auto-1523864610090.im-box .im-cont .im {
            width: 448px;
            height: 476px;
        }

        .auto-1523864610090.im-box .im-cont .im-100 {
            width: 613px;
        }

        .auto-1523864610090.im-box .im-cont .im-relate-course {
            width: 164px;
            height: 476px;
            position: relative;
            background-color: white;
            border-left: 1px solid #dddddd;
        }

        .auto-1523864610090.im-box .im-cont .im-relate-course-10 {
            width: 0px;
            position: absolute;
            left: 644px;
            height: 420px;
            top: 57px;
            border-left: none;
        }

        .auto-1523864610090.im-box .im-cont .im-relate-course-10 .course-close {
            top: 160px !important;
            margin-left: -10px;
        }

        .auto-1523864610090.im-box .im-cont .im-relate-course .title {
            color: #666666;
            width: 155px;
            height: 50px;
            font-size: 13px;
            line-height: 50px;
            padding-left: 10px;
        }

        .auto-1523864610090.im-box .im-cont .im-relate-course .course {
            height: 426px;
            width: 145px;
            padding: 0px 10px;
            overflow-y: scroll;
            overflow-x: hidden;
        }

        .auto-1523864610090.im-box .im-cont .im-relate-course .course .moreCourse {
            text-align: center;
            height: 30px;
            font-size: 14px;
            line-height: 30px;
            color: #21a557;
            cursor: pointer;
        }

        .auto-1523864610090.im-box .im-cont .im-relate-course .course .no-content {
            width: 145px;
            height: 426px;
            line-height: 426px;
            text-align: center;
        }

        .auto-1523864610090.im-box .im-cont .im-relate-course .course .card {
            width: 145px;
            height: 140px;
            border-bottom: 1px solid #f0f0f0;
            margin-bottom: 10px;
            padding-bottom: 10px;
        }

        .auto-1523864610090.im-box .im-cont .im-relate-course .course img {
            width: 145px;
            height: 85px;
        }

        .auto-1523864610090.im-box .im-cont .im-relate-course .course .name {
            width: 145px;
            font-size: 13px;
            margin-top: 10px;
            height: 18px;
            line-height: 18px;
        }

        .auto-1523864610090.im-box .im-cont .im-relate-course .course .status {
            width: 145px;
            font-size: 14px;
            margin-top: 10px;
            height: 16px;
            line-height: 16px;
            color: #E84807;
            margin-bottom: 10px;
        }

        .auto-1523864610090.im-box .im-cont .im-relate-course .course .status-no {
            width: 145px;
            font-size: 14px;
            margin-top: 10px;
            height: 16px;
            line-height: 16px;
            color: #ff8000;
            margin-bottom: 10px;
        }

        .auto-1523864610090.im-box .im-cont .im-relate-course .course .name span {
            width: 40px;
            font-size: 12px;
            background-color: #2187e0;
            color: white;
            text-align: center;
            height: 18px;
            line-height: 18px;
            padding: 2px 3px;
            margin-right: 10px;
        }

        .auto-1523864610090.im-box .im-cont .im-relate-course .course-close {
            cursor: pointer;
            position: absolute;
            top: 200px;
            left: 0px;
            width: 10px;
            height: 60px;
            background-color: #e8f6ee;
        }

        .auto-1523864610090.im-box .im-cont .im-relate-course .to-open {
            left: -30px !important;
        }

        .auto-1523864610090.im-box .im-cont .im-relate-course .course-close .arrow {
            width: 15px;
            height: 15px;
            margin-top: 23px;
            position: absolute;
            margin-left: -4px;
            background: url("//nos.netease.com/test-edu-image/87E0380D962D5B2BD332691243A6FF02-1453801344006");
            background-position: 0 -30px;
        }

        .auto-1523864610090.im-box .im-cont .im-relate-course .course-close .arrow-open {
            margin-left: -2px !important;
            background-position: 0 -45px !important;
        }

        .auto-1523864610090.im-box .im-cont .im-relate-course .course-close .arrow-open:hover {
            background-position: -15px -45px !important;
        }

        .auto-1523864610090.im-box .im-cont .im-relate-course .course-close .arrow:hover {
            background-position: -15px -30px;
        }

        .auto-1523864610092-parent .j-cnt {
            width: 100%;
            color: #444;
            visibility: hidden;
        }

        .auto-1523864610092-parent .zitm-top {
            width: 100%;
            text-indent: 6px;
            line-height: 32px;
            cursor: pointer;
        }

        .auto-1523864610092-parent .zitm, .auto-1523864610092-parent .zitm p {
            width: 100%;
            text-indent: 6px;
            line-height: 32px;
            cursor: pointer;
        }

        .auto-1523864610092-parent .zitm a {
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 12px
        }

        .auto-1523864610092-parent .zitm:hover, .auto-1523864610092-parent .zitm:hover p {
            color: #E84807;
            background-color: #ECECEE;
        }

        .auto-1523864610092-parent .js-selected, .auto-1523864610092-parent .js-selected p {
            color: #E84807;
            background-color: #ECECEE;
        }

        .auto-1523864610093 .inputbox {
            float: left;
        }

        .auto-1523864610093 .inputbox .tips {
            color: #ccc;
            font-size: 12px;
            line-height: 26px;
        }

        .auto-1523864610093 .infobox {
            float: left;
        }

        .u-eduReagion select {
            border: 1px solid #abadb3;
        }

        @font-face {
            font-family: "ux-icon";
            src: url(static/nosdn.eot);
            src: url(static/nosdn.eot) format("embedded-opentype"), url(static/nosdn.ttf) format("truetype"), url(static/nosdn.woff) format("woff"), url(static/nosdn.svg) format("svg");
            font-weight: normal;
            font-style: normal;
        }

        [class^="ux-icon-"], [class*=" ux-icon-"] {
            font-family: "ux-icon" !important;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-style: normal;
            font-variant: normal;
            font-weight: normal;
            text-decoration: none;
            text-transform: none;
            line-height: 1;
        }

        .auto-1523864610101 .bread {
            border-bottom: 1px solid #ddd;
            height: 35px;
            line-height: 25px;
            margin: 0 0 15px;
            font-weight: bolder;
        }

        .auto-1523864610101 .box {
            overflow-y: auto;
            height: 255px;
            padding: 0 15px;
        }

        .auto-1523864610101 .option {
            display: inline-block;
            width: 134px;
            font-size: 12px;
            margin: 0 8px 8px 0;
            color: #666;
        }

        .auto-1523864610101 .option:hover {
            color: #E84807;
        }

        .m-side-operation .side-service-item {
            width: 60px;
            height: 60px;
        }

        .m-side-operation .side-service-item .item-link-block {
            position: relative;
            width: 60px;
            height: 60px;
            display: inline-block;
            text-align: center;
            color: #666;
        }

        .m-side-operation .side-service-item .item-link-block .f-icon {
            font-size: 32px;
            line-height: 60px;
        }

        .m-side-operation .side-service-item .feedback:hover {
            background-color: #39a030;
        }

        .m-side-operation .side-service-item .item-link-block:hover .f-icon {
            color: #fff;
        }

        .m-side-operation .side-service-item .item-link-block:hover .item-hover-text {
            display: block;
        }

        .m-side-operation .side-service-item .item-link-block:hover .icon-hover-none {
            display: none;
        }

        .m-side-operation .side-service-item .item-link-block .feedback-icon {
            background-position: 0 0;
            top: 16px;
            left: 16px;
        }

        .m-side-operation .side-service-item .item-link-block .phone-icon {
            background-position: 0 -57px;
            top: 16px;
            left: 20px;
        }

        .m-side-operation .side-service-item .item-link-block .top-icon {
            background-position: 0 -112px;
            top: 13px;
            left: 16px;
        }

        .m-side-operation .side-service-item .item-link-block .item-hover-text {
            display: none;
            text-align: center;
            padding: 10px 15px;
            background-color: #39a030;
            color: #fff;
            height: 40px;
        }

        .m-side-operation .side-service-item .item-link-block .feedback-text {
            border-radius: 6px 6px 0 0;
        }

        .m-side-operation .side-service-item .item-link-block .scrtop-text {
        }

        .m-side-operation .side-service-item .item-link-block .qrcode-bubble {
            display: none;
            z-index: 100000;
        }

        .m-side-operation .side-service-item .item-link-block .qrcode-bubble .qrcode {
            border: 1px solid #ccc;
            position: absolute;
            right: 60px;
            top: -30px;
            width: 200px;
            padding: 10px 0 6px 12px;
            background-color: #fff;
            border-radius: 3px;
            text-align: center;
        }

        .m-side-operation .side-service-item .item-link-block .qrcode-bubble .qrcode .download, .m-side-operation .side-service-item .item-link-block .qrcode-bubble .qrcode .follow-weixin {
            float: left;
            width: 90px;
            color: #666;
            margin-right: 10px;
        }

        .m-side-operation .side-service-item .item-link-block .qrcode-bubble .qrcode .download img, .m-side-operation .side-service-item .item-link-block .qrcode-bubble .qrcode .follow-weixin img {
            width: 90px;
            height: 90px;
        }

        .m-side-operation .side-service-item .item-link-block .arrow .arrow-cnt, .m-side-operation .side-service-item .item-link-block .arrow .arrow-border {
            display: block;
            position: absolute;
            top: 27px;
            border-width: 7px 4px;
            border-style: solid;
            border-color: transparent transparent transparent #fff;
        }

        .m-side-operation .side-service-item .item-link-block .arrow .arrow-cnt {
            left: -1px;
        }

        .m-side-operation .side-service-item .item-link-block .arrow .arrow-border {
            border-left-color: #ccc;
        }

        .m-side-operation .side-service-item .app-download:hover .qrcode-bubble {
            display: block;
        }

        .m-side-operation .line-wrap {
            width: 60px;
            text-align: center;
            font-size: 0;
        }

        .m-side-operation .line-wrap .line {
            width: 50px;
            border-top: 1px solid #ccc;
            display: inline-block;
        }

        #YSF-BTN-HOLDER {
            display: none !important;
        }

        .auto-1523864610124.u-appbanner {
            width: 100%;
            height: 52px;
            background-color: #fff;
        }

        .auto-1523864610124.u-appbanner .wrap {
            margin: 0px;
            padding: 11px 10px;
        }

        .auto-1523864610124.u-appbanner .logo {
            height: 30px;
        }

        .auto-1523864610124.u-appbanner .wrap .download {
            background-color: #fff;
            display: inline-block;
            width: 92px;
            height: 26px;
            color: #13bc6e;
            border: 1px solid #13bc6e;
            text-align: center;
            line-height: 26px;
            font-size: 12px;
            border-radius: 4px;
        }

        .auto-1523864610126 {
            display: block;
            width: 140px;
            height: 260px;
        }

        .auto-1523864610126:hover .close {
            display: block;
        }

        .auto-1523864610126 img {
            color: #E84807;
            width: 140px;
            height: 260px;
        }

        .auto-1523864610126 .close {
            right: 0px;
            top: 0px;
            cursor: pointer;
            width: 20px;
            height: 20px;
            background: transparent;
        }
    </style>
    <style type="text/css">
        .auto-1523864610227 div {
            text-align: left;
        }

        .auto-1523864610227 .input {
            float: left;
        }

        .auto-1523864610227 .m-baseinputui .inputtxt {
            line-height: 24px;
            overflow: hidden;
        }

        .auto-1523864610227 .infobox {
            float: left;
        }

        .auto-1523864610230 div {
            text-align: left;
        }

        .auto-1523864610230 .imgbox {
            float: left;
            width: 120px;
            height: 120px;
            border: 1px solid #dfdfdf;
        }

        .auto-1523864610230 .img {
            width: 100%;
            height: 100%;
        }

        .auto-1523864610230 .infobox {
            float: left;
            margin-left: 10px;
        }

        .auto-1523864610230 .infobox .info {
            color: #999;
            font-size: 12px;
        }

        .auto-1523864610230 .infobox .opt {
            margin-top: 10px;
        }

        .auto-1523864610230 .infobox .opt .uploadbox {
            float: left;
        }

        .auto-1523864610230 .infobox .opt .feedbox {
            float: left;
        }</style>
</head>

<body style="padding-top: 60px;padding-bottom:80px;">
<!--网页头部-->
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
                                <a class="mystudy nitem f-f0" id="j-nav-my-class" data-index="讨论区" target="_self"
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
<div class="settings f-cb g-flow">
    <div>
        <div class="b-20"></div>
        <div id="settings-box" class="f-bg">
            <div class="m-setBox">
                <div id="j-setBox" class="setBox">
                    <div class="m-infoEdit">
                        <div class="f-cb header">
                            <div class="f-fl fk">请完善个人资料</div>
                        </div>
                        <div class="editBox">
                            <table>
                                <tbody>
                                <tr>
                                    <td><h2>基本信息</h2></td>
                                </tr>
                                <tr class="b-10"></tr>
                                <tr>
                                    <td class="title"><em class="f-sign">*</em>工号</td>
                                    <td>
                                        <div class="j-nickName eBcon">
                                            <div class="m-nicknameui u-insug f-cb">
                                                <div class="area j-inputArea f-fl" style="width: 175px; height: 25px;">
                                                    <input type="text" class="j-input"
                                                           style="width: 175px; height: 25px;">
                                                    <%--<label class="j-label" style="display: none;">请输入学号</label>--%>
                                                </div>
                                            </div>
                                            <div class="tip f-fs0 s-fc6">&nbsp;</div>
                                        </div>

                                    </td>
                                </tr>
                                <tr>
                                    <td class="title"><em class="f-sign">*</em>密码</td>
                                    <td>
                                        <div class="j-nickName eBcon">
                                            <div class="m-nicknameui u-insug f-cb">
                                                <div class="area j-inputArea f-fl" style="width: 175px; height: 25px;">
                                                    <input type="password" class="j-input"
                                                           style="width: 175px; height: 25px;">
                                                    <%--<label class="j-label" style="display: none;">请输入学号</label>--%>
                                                </div>
                                            </div>
                                            <div class="tip f-fs0 s-fc6">&nbsp;</div>
                                        </div>

                                    </td>
                                </tr>
                                <tr>
                                    <td class="title"><em class="f-sign">*</em>再次确认</td>
                                    <td>
                                        <div class="j-nickName eBcon">
                                            <div class="m-nicknameui u-insug f-cb">
                                                <div class="area j-inputArea f-fl" style="width: 175px; height: 25px;">
                                                    <input type="password" class="j-input"
                                                           style="width: 175px; height: 25px;">
                                                    <%--<label class="j-label" style="display: none;">请输入学号</label>--%>
                                                </div>
                                            </div>
                                            <div class="tip f-fs0 s-fc6">&nbsp;</div>
                                        </div>

                                    </td>
                                </tr>
                                <tr>
                                    <td class="title">头像</td>
                                    <td>
                                        <div class="j-pic eBcon">
                                            <div class="f-cb auto-1523864610230">
                                                <div class="imgbox"><img class="img j-img"
                                                                         src="static/head1.jpg">
                                                </div>
                                                <div class="infobox">
                                                    <div class="info">支持jpg、gif、png格式的图片，建议文件小于20M</div>
                                                    <div class="opt f-cb">
                                                        <div class="uploadbox j-uploadbox">
                                                            <div class="u-upd-img-btn">
                                                                <a class="upbtn j-upload" title="支持jpg、gif、png或bmp格式的图片，建议文件小于20M">修改头像</a>
                                                                <div class="flashbox j-flashbox"
                                                                     id="auto-id-1523864610255">
                                                                    <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
                                                                            codebase="swflash.cab"
                                                                            width="100%" height="100%"
                                                                            id="_1523864610254">
                                                                        <param value="imageUpload.swf"
                                                                               name="movie">
                                                                        <param value="always" name="allowScriptAccess">
                                                                        <param value="transparent" name="wmode">
                                                                        <param value="cbNameSpace=edu.u.imgUpload15&amp;uploadExif=true&amp;uploadUrl=%2F%2Fupload.icourse163.org%2Fapi%2FphotoUpload2.do%3F_upload_mth_%3Dsync_parse%26userdefinesize%3D28x28x1%3B120x120x1%26saveorigin%3Dfalse%26responsetype%3Dxml%26rotatedegree%3D0%26stamptype%3D%26stampstring%3D%26sitefrom%3Dstudy&amp;id=_1523864610254"
                                                                               name="flashvars">
                                                                        <embed src="static/imageUpload.swf"
                                                                               name="_1523864610254" width="100%"
                                                                               height="100%"
                                                                               pluginspage="http://www.adobe.com/go/getflashplayer"
                                                                               type="application/x-shockwave-flash"
                                                                               allowscriptaccess="always"
                                                                               wmode="transparent"
                                                                               flashvars="cbNameSpace=edu.u.imgUpload15&amp;uploadExif=true&amp;uploadUrl=%2F%2Fupload.icourse163.org%2Fapi%2FphotoUpload2.do%3F_upload_mth_%3Dsync_parse%26userdefinesize%3D28x28x1%3B120x120x1%26saveorigin%3Dfalse%26responsetype%3Dxml%26rotatedegree%3D0%26stamptype%3D%26stampstring%3D%26sitefrom%3Dstudy&amp;id=_1523864610254">
                                                                    </object>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="title">性别</td>
                                    <td>
                                        <div class="sex eBcon">
                                            <input id="male" type="radio" name="sex" class="j-sex"><label for="male">男</label>
                                            <input id="female" type="radio" name="sex" class="j-sex">
                                            <label for="female">女</label>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="title">详细介绍</td>
                                    <td>
                                        <div class="j-description eBcon">
                                            <div class="m-inputcheckui f-cb">
                                                <div class="inputbox">
                                                    <div class="input j-input">
                                                        <div class="m-baseinputui auto-1523864610052" style="width: 395px; height: 74px;">
                                                            <textarea name="inputtxt" class="j-textarea inputtxt" style="width: 395px; height: 74px;"></textarea>
                                                            <label class="j-hint inputhint" style="display: none;">用一段话介绍你自己，会在你的个人页面显示，最多输入80字</label>
                                                        </div>
                                                    </div>
                                                    <div class="tips j-tipsNode"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><h2>联系信息</h2></td>
                                </tr>
                                <tr class="b-10"></tr>
                                <tr>
                                    <td class="title"><em class="f-sign">*</em>真实姓名</td>
                                    <td>
                                        <div class="f-fl rnIpt f-cb">
                                            <div class="j-rnIpt ">
                                                <div class="m-baseinputui auto-1523864610052" style="width: 285px; height: 23px;">
                                                    <textarea name="inputtxt" class="j-textarea inputtxt" style="width: 285px; height: 23px;"></textarea>
                                                    <label class="j-hint inputhint  " style="display: none;"></label>
                                                </div>
                                            </div>
                                            <div class="tip f-fs0 s-fc6">&nbsp;</div>
                                        </div>
                                        <div class="f-fl feed j-rnFb"></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="title"><em class="f-sign">*</em>院系</td>
                                    <td>
                                        <div class="f-fl rnIpt f-cb">
                                            <div class="j-rnIpt ">
                                                <div class="auto-1523864610052" style="width:atuo; height: 23px;">
                                                    <select>
                                                        <option>船舶与海洋工程学院</option>
                                                        <option>海洋科学与技术学院</option>
                                                        <option>计算机科学与技术</option>
                                                        <option>汽车工程学院</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="tip f-fs0 s-fc6">&nbsp;</div>
                                        </div>
                                        <div class="f-fl feed j-rnFb"></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="title"><em class="f-sign">*</em>常用邮箱</td>
                                    <td>
                                        <div class="j-mail eBcon">
                                            <div class="accMail">
                                                <div class="j-mailOpr mailOpr">
                                                    <div class="j-add f-cb add" style="display: none;">
                                                        <div class="f-fl"></div>
                                                        <a class="btn f-fl" id="auto-id-1523864610280"><span>添加</span></a>
                                                        <a class="cancel f-fl" id="auto-id-1523864610282">取消</a>
                                                        <div class="j-addFb f-fl"></div>
                                                    </div>
                                                    <div class="j-verify verify f-cb">
                                                        <div class="m-baseinputui auto-1523864610052" style="width: 285px; height: 23px;">
                                                            <textarea name="inputtxt" class="j-textarea inputtxt" style="width: 285px; height: 23px;"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="j-mailTxt mailTxt auto-1523864610060-parent"
                                                     style="margin-top: -5px;">
                                                    <div class="m-feedbackinfo auto-1523864610060">
                                                        <div class="warningbox j-warningbox f-cb">
                                                            <%--<span class="j-warningicon right"></span>--%>
                                                            <%--<span class="tip f-fs0 s-fc6">用于接收来自学校老师和企业导师的邮件通知，非常重要</span>--%>
                                                        </div>
                                                        <div class="loadingbox j-loadingbox f-cb"
                                                             style="display: none;"><span class="icon"></span><span
                                                                class="loading j-loading"></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="title"><em class="f-sign">*</em>手机号码</td>
                                    <td>
                                        <div class="f-fl phoneIpt f-cb">
                                            <div class="j-qqIpt auto-1523864610052-parent">
                                                <div class="m-baseinputui auto-1523864610052"
                                                     style="width: 285px; height: 23px;"><textarea name="inputtxt" class="j-textarea inputtxt" style="width: 285px; height: 23px;"></textarea>
                                                    <label class="j-hint inputhint" style="display: none;"></label>
                                                </div>
                                            </div>
                                            <%--<div class="tip f-fs0 s-fc6">用于对学生进行提醒等服务</div>--%>
                                        </div>
                                        <div class="f-fl feed j-rnFb"></div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="footer"><a class="btn f-cb j-save" id="auto-id-1523864610235"><span>保存</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!--网页底部-->
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