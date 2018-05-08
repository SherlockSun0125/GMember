<%@page contentType="text/html; charset=utf-8" %>
<html>
<head>
    <title>项目相关</title>
    <meta name="viewport" content="width=100%; initial-scale=1; maximum-scale=1; minimum-scale=1; user-scalable=no;"/>
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="images/apple-touch-icon-144-precomposed.png"/>
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="images/apple-touch-icon-114-precomposed.png"/>
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="images/apple-touch-icon-72-precomposed.png"/>
    <link rel="apple-touch-icon-precomposed" href="images/apple-touch-icon-57-precomposed.png"/>
    <link href="css/bootstrap-2.min.css" type="text/css" rel="stylesheet"/>
    <link href="css/style.css" type="text/css" rel="stylesheet"/>
    <link href="css/prettyPhoto.css" type="text/css" rel="stylesheet"/>
    <link href="css/font-icomoon.css" type="text/css" rel="stylesheet"/>
    <link href="css/font-awesome.css" type="text/css" rel="stylesheet"/>
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/jquery.easing.1.3.js"></script>
    <script type="text/javascript" src="js/jquery.quicksand.js"></script>
    <script type="text/javascript" src="js/superfish.js"></script>
    <script type="text/javascript" src="js/hoverIntent.js"></script>
    <script type="text/javascript" src="js/jquery.flexslider.js"></script>
    <script type="text/javascript" src="js/jflickrfeed.min.js"></script>
    <script type="text/javascript" src="js/jquery.prettyPhoto.js"></script>
    <script type="text/javascript" src="js/jquery.elastislide.js"></script>
    <script type="text/javascript" src="js/jquery.tweet.js"></script>
    <script type="text/javascript" src="js/smoothscroll.js"></script>
    <script type="text/javascript" src="js/jquery.ui.totop.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
    <script type="text/javascript" src="js/ajax-mail.js"></script>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <style>
        h3 {
            font-family: "仿宋";
            text-align: center;
        }

       .span9 p {
            text-indent: 2em;
            font-size: 18px;
            font-family: "宋体";
            line-height: 1.4em;
        }
    </style>
</head>

<body>
<!--header-->
<header id="header">
    <div class="container" style="margin-bottom: 2px">
        <div class="row header-top" style="margin-left:5px;margin-bottom:0;">
            <div class="span5 logo" style="width: 100%;margin-left:10px">
                <a class="logo-img" href="home.jsp" title="responsive template" style="margin-bottom: 5px"><img
                        src="images/myimg/hitwh_logo_blue.png" alt="哈工大威海校徽"/></a>
            </div>
        </div>
        <div class="row header-nav">
            <div class="span12">
                <nav id="menu" class="clearfix">
                    <ul>
                        <li><a href="home.jsp"><span class="name">主页</span></a>
                        </li>
                        <li><a href="news.jsp"><span class="name">新闻中心</span></a>
                        </li>
                        <li><a href="notice.jsp"><span class="name">通知公告</span></a>
                        </li>
                        <li><a href="enterprise.jsp"><span class="name">合作企业</span></a>
                        </li>
                        <li><a><span class="name">用户中心</span></a>
                            <ul>
                                <li><a href="studentLogin.jsp"  target="_blank">学生用户登录</a></li>
                                <li><a href="teacherLogin.jsp"  target="_blank">教师用户登录</a></li>
                                <li><a href="employeeLogin.jsp"  target="_blank">企业用户登录</a></li>
                            </ul>
                        </li>
                        <%--<li><a href="download.jsp"><span class="name">下载中心</span></a></li>--%>
                        <li class="current"><a href="about1.jsp"><span class="name">计划介绍</span></a></li>
                    </ul>
                </nav>
                <form class="top-search pull-right">
                    <input type="text" placeholder="站内搜索..." class="span3">
                    <button type="button" class="btn"><i class="icon-search-form"></i></button>
                </form>
            </div>
        </div>
    </div>
</header>

<section id="container">
    <div class="container">
        <div class="span2_3">
            <section>
                <%--<h3 class="widget-title">Blog Archives</h3>--%>
                <div class="accordion" id="accordion2">
                    <div class="accordion-group">
                        <div class="accordion-heading">
                            <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2"
                               href="#collapse1">
                                <i class="icon-minus icon-white"></i>
                                卓越工程师培养计划
                            </a>
                        </div>
                        <div id="collapse1" class="accordion-body collapse in">
                            <div class="accordion-inner">
                                <ul class="icons ul-list-2">
                                    <li><a href="#zhuoyue1">指导思想与基本思路</a></li>
                                    <li><a href="#zhuoyue2">组织管理体系</a></li>
                                    <li><a href="#zhuoyue3">试点的专业及学生规模</a></li>
                                    <li><a href="#zhuoyue4">培养模式</a></li>
                                    <li><a href="#zhuoyue5">培养计划和方案</a></li>
                                    <li><a href="#zhuoyue6">工程经历师资队伍建设</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-group">
                        <div class="accordion-heading">
                            <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2"
                               href="#collapse2">
                                <i class="icon-plus icon-white"></i>
                               工程领军人才培养计划
                            </a>
                        </div>
                        <div id="collapse2" class="accordion-body collapse">
                            <div class="accordion-inner">
                                <ul class="icons ul-list-2">
                                    <li><a href="about2.jsp">背景</a></li>
                                    <li><a href="about2.jsp">建设目标与指导思想</a></li>
                                    <li><a href="about2.jsp">培养模式</a></li>
                                    <li><a href="about2.jsp">培养方案与课程体系</a></li>
                                    <li><a href="about2.jsp">实施方案要点</a></li>
                                    <li><a href="about2.jsp">对各院系的要求</a></li>
                                    <li><a href="about2.jsp">机制政策</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div class="span9">
            <h3><strong>哈尔滨工业大学（威海）<br/>“卓越工程师培养计划”工作方案</strong></h3>
            <p>根据教育部教高[2011]1号《教育部关于实施卓越工程师教育培养计划的若干意见》文件精神，
                哈尔滨工业大学制定了实施“卓越工程师培养计划”工作方案，并于2010年开始试点推行，
                经过近五年的实践，在改革和创新工程教育人才培养模式，创立高校与行业企业联合培养人才的新机制，
                着力提高学生服务国家和人民的社会责任感、勇于探索的创新精神和善于解决问题的实践能力方面，取得了良好的效果。
                为实现建设与哈工大发展相适应的大学校区的奋斗目标，保持与校本部一致的人才培养模式，经研究决定，
                威海校区将试点启动“卓越工程师培养计划”工作。</p>
            <p id="zhuoyue1">一、指导思想与基本思路</p>
            <p>指导思想：树立“面向工业界、面向未来、面向世界”的工程教育理念。
                以社会需求为导向，以实际工程为背景，以工程技术为主线，着力提高学生的工程意识、工程素质和工程实践能力。</p>
            <p id="zhuoyue2">二、组织管理体系</p>
            <p>按照教育部对“985高校”以培养研发型工程师为主的目标要求，校区将在主管校长的领导下，建立由教务处牵头，
                学生处、人事处、科技处共同参与的校、院、系（专业）三级管理体系。优化设计学校及企业培养方案并付诸实施。
                调整、制定相关政策和管理制度，确保“卓越工程师培养计划”的顺利实施。</p>
            <p id="zhuoyue3">三、试点的专业及学生规模</p>
            <p>拟将校区工科专业全部列入该计划，采取试点逐步推行的方式，鼓励各专业积极申报。</p>

            <p>申报试点的专业根据本专业联合培养合作企业的规模确定参与的学生规模，保证培养质量。</p>
            <p id="zhuoyue4">四、培养模式</p>
            <p>进入“卓越工程师培养计划”的学生，本科阶段理论课学习累积3年，校内外实践环节学习累计1年，达到培养应用型工程师应具备的知识、能力和素质的各项要求。</p>
            <p>按照本科在校学生学籍管理条例，实行柔性化管理。涉及学籍异动、学习年限调整、双学位培养、推荐免试攻读硕士研究生、国际联合培养等方面的特殊问题经审批予以特殊处理。</p>
            <p>在企业阶段的学习，由学校和企业按要求成立联合管理办公室。同时学校、企业、学生本人要签署三方协议，明确各方的责任和义务。约束各方加强学生在企业学习阶段的质量和安全管理。确保学生的安全和培养质量。</p>
            <p id="zhuoyue5">五、培养计划和方案</p>
            <p>
                本科培养方案注重夯实基础、强化实践，以工程专业国际认证和社会企业需求为导向，兼顾学生毕业后就业、读研、出国等不同层面的自我设计，高年级分流，实施多元化培养，总体上完成本科工程技术专业的基本素质和实际能力的培养目标，并为后续的深造学习奠定坚实基础。</p>
            <p>
                各专业制订的培养方案以卓越工程师为培养目标，以“强化基础功底、突出模块特色，实施素质教育、注重能力培养，增加企业实训、培养动手能力”为基本原则，对课程体系、教学内容、实验实习、毕业设计、师资聘请、校企联合、学生考核方式和毕业标准等都有明确的规定和要求。培养过程中，学生将根据自己的兴趣爱好选择专业方向，并到相关企业实训实习，接受工程实践教育。</p>
            <p id="zhuoyue6">六、工程经历师资队伍建设</p>
            <p>
                按照教育部关于参与“卓越工程师培养计划”的教师要具有工程经历的要求，校区将试点青年教师到企业补课的机制，相关院系制定对青年教师进行教学、科研、工程训练的系统培养计划，在工作业绩考核中加入企业工作经历和工程教育能力提高的要求。进一步扩大校企签署人才培养合作协议和共建产学研基地的企业范围，加大聘请企业工程技术人员进校任课、指导毕业设计、参与制定培养方案等工作的力度。切实提高专业课教师中具备在企业工作的工程经历的教师比例，认真制订并进一步落实培训计划，在4年内各试点专业达到教育部“每一届学生有6门专业课由具备5年以上在企业工作的工程经历教师主讲”的要求。</p>
            <p style="text-align: right">教务处</p>
            <p style="text-align: right">2016年06月</p>
        </div>
    </div>
</section>


<!-- 最下方 -->
<footer id="footer">
    <div class="container" align="center">
        友情链接：
        <a href="http://www.hit.edu.cn/">哈工大（本部）</a>&nbsp;
        <a href="http://www.hitwh.edu.cn/">哈工大（威海）</a>&nbsp;
        <a href="http://www.hitsz.edu.cn/index.html">哈工大（深圳）</a>&nbsp;
    </div>
</footer>

<!--footer menu-->
<section id="footer-menu">
    <div class="container">
        <p align="center" style="font-style: unset">
            山东省威海市环翠区文化西路2号&nbsp;&nbsp;&nbsp;&nbsp;邮政编码：264209&nbsp;&nbsp;&nbsp;&nbsp;哈尔滨工业大学（威海）版权所有 |
            <a class="my_a_link" href="adminLogin.jsp" style="color: #1a1a1a">登陆</a>
        </p>
    </div>
</section>
</body>
</html>
