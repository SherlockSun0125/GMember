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
                                <li><a href="employeeLogin.jsp" target="_blank">企业用户登录</a></li>
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
                        <div id="collapse1" class="accordion-body collapse">
                            <div class="accordion-inner">
                                <ul class="icons ul-list-2">
                                    <li><a href="about1.jsp">指导思想与基本思路</a></li>
                                    <li><a href="about1.jsp">组织管理体系</a></li>
                                    <li><a href="about1.jsp">试点的专业及学生规模</a></li>
                                    <li><a href="about1.jsp">培养模式</a></li>
                                    <li><a href="about1.jsp">培养计划和方案</a></li>
                                    <li><a href="about1.jsp">工程经历师资队伍建设</a></li>
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
                        <div id="collapse2" class="accordion-body collapse in">
                            <div class="accordion-inner">
                                <ul class="icons ul-list-2">
                                    <li><a href="#gongcheng1">背景</a></li>
                                    <li><a href="#gongcheng2">建设目标与指导思想</a></li>
                                    <li><a href="#gongcheng3">培养模式</a></li>
                                    <li><a href="#gongcheng4">培养方案与课程体系</a></li>
                                    <li><a href="#gongcheng5">实施方案要点</a></li>
                                    <li><a href="#gongcheng6">对各院系的要求</a></li>
                                    <li><a href="#gongcheng7">机制政策</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div class="span9">
            <h3><strong>哈尔滨工业大学（威海）<br/>关于实施“工程领军人才培养计划”的指导性意见</strong></h3>
            <p>根据教育部教高[2011]1号《教育部关于实施卓越工程师教育培养计划的若干意见》文件精神，
                哈尔滨工业大学制定了实施“卓越工程师培养计划”工作方案，并于2010年开始试点推行，
                经过近五年的实践，在改革和创新工程教育人才培养模式，创立高校与行业企业联合培养人才的新机制，
                着力提高学生服务国家和人民的社会责任感、勇于探索的创新精神和善于解决问题的实践能力方面，取得了良好的效果。
                为实现建设与哈工大发展相适应的大学校区的奋斗目标，保持与校本部一致的人才培养模式，经研究决定，
                威海校区将试点启动“卓越工程师培养计划”工作。</p>
            <p id="gongcheng1">一、背景</p>
            <p>《国家中长期教育改革与发展规划纲要》(2010-2020年)指出：到2020年，我国要建成一批国际知名、有特色、高水平的高等学校，
                若干所大学达到或接近世界一流大学水平，高等教育国际竞争力显著增强；……牢固确立人才培养在高校工作中的中心地位，
                着力培养信念执著、品德优良、知识丰富、本领过硬的高素质专门人才和拔尖创新人才。……创立高校与科研院所、行业、
                企业联合培养人才的新机制。2012年，校本部发布了《哈尔滨工业大学“十二五”本科教育改革与发展规划纲要》，
                确定了培养“研究型、个性化、精英式”具有国际竞争力和领导力的高素质创新人才的培养目标，并强调要着力培养两类拔尖创新人才，
                即学术性拔尖创新人才和工程领军人才。实施“工程领军人培养计划”，旨在强化学生的实践能力、创新能力和工程领导力培养。
                为确保人才培养模式与校本部保持一致，保证本项计划的顺利实施，教务处制定了实施方案的指导性意见。</p>
            <p id="gongcheng2">二、建设目标与指导思想</p>
            <p>《哈尔滨工业大学“十二五”本科教育改革与发展规划纲要》提出：“根据我校的学科特点，把培养具有国际竞争力的高素质工程领军人
                才作为的重要任务”。……“在‘基于项目的学习计划’‘卓越工程师教育培养计划’基础上实施‘工程领军人才培养计划’，
                强调校企合作，创造环境和条件，培养具有国际竞争力的创新型工程领军人才，为中国未来的新型工业化发展和经济社会可持续发展服务。 ”</p>

            <p>该计划的指导思想是面向建设世界一流大学的目标，全面加强学生品德修养、人文素质和自然科学基础培养，着力提高学生的实践能力。
                在此基础上，实施工程领军人才培养计划，对具有领导潜质的优秀学生进行专门训练与培养，提升其创新能力和工程领导力。
                通过校企合作方式，为参与该计划的学生提供实践平台和机会，为使他们成为具有工程领导能力的高水平复合型人才打下坚实基础。</p>
            <p id="gongcheng3">三、培养模式</p>
            <p>计划的培养模式可以概括为：综合选才、课程学习与项目学习相结合、校企结合、本硕贯通、个性化培养。</p>
            <p>首先，要选择品学兼优、具有领导潜质的优秀学生作为培养对象；在其高年级阶段，加强其工程领导力理论学习、基于项目的学习，
                培养学生的工程领导素质；然后安排学生进入企业或研究所在企业高层的指导下进行实践训练，在实际环境下切实提高学生的工程
                领导力；实施本科阶段和研究生阶段贯通式培养，将由本科生院、研究生院、各试点学院共同组织实施；由校内和企业指导教师根
                据学生特点为入选计划的学生制定个性化的培养方案，并提供针对性的指导，实现因材施教。</p>
            <p id="gongcheng4">四、培养方案与课程体系</p>
            <p>
                工程领军人计划的培养方案与课程体系框架如图1所示。</p>
            <p>
                工程领军人培养计划是构筑在我校常规教育体系基础上的。首先，通过通识教育与专业教育相结合的模式对学生进行基础教育、
                素质教育和专业教育。通识教育阶段培养学生的核心价值观、人文素质、自然科学基础知识和思维能力；专业教育阶段培养学生
                的专业基础知识、专业实践能力和创新能力。通过基于项目的学习培养学生解决问题能力、沟通能力和表达能力，初步培养学生
                的工程领导力。在此基础上实施工程领导力培养计划，主要包括：领导力课程学习和领导力实践两个部分，领导力实践又分为校
                内实践与企业实习两个环节：</p>
            <p>（1）校内实践：组建团队，开展创新创业训练项目。项目由教师和学生共同研究决定，加强工程实践和领导力训练。</p>
            <p>（2）企业实习：本科毕业设计阶段到企业进行实习，融入企业高层管理团队或工程规划设计团队，在工程技术、规划、管理等多
                方面进行实践训练；研究生阶段，再次到企业实习，更加深入地开展工程应用研究与实践。每次企业实习都希望得到企业高层的亲自指导。</p>
            <div>
                <p style="text-align: center"><img src="images/myimg/gongchenglingjun.png" style="background-color: #9f00a7"><br>
                <small>图1  工程领军人才培养计划体系框架</small></p>
            </div>
            <p id="gongcheng5">五、实施方案要点</p>
            <p>1. 试点学院</p>
            <p>本计划实施初期，遴选若干学院作为试点，先行探索并积累经验。将从基于项目学习计划、卓越工程师计划试点单位中选择。
                由院长或教学副院长作为负责人，自愿申请。本科生院将组织专家评审，选择若干个工作基础好、有大企业合作伙伴、规划详实可行、
                组织保障措施得力的学院开始实施本计划。</p>
            <p>2. 学生选拔</p>
            <p>本计划实施初期，拟选择少数品学兼优的优秀学生（不超过试点学院学生数的5%）参与计划。选择对象为大三年级的学习成绩优秀
                （前五学期成绩排名前5%）、项目学习成果比较突出（原则上应担任过项目负责人）、具有领导潜质的优秀学生。由符合基本条件
                的学生自愿报名，提交申请；由各试点学院组织初选，并进行严格面试，择优选拔；本科生院审核批准。</p>
            <p>3. 相关课程</p>
            <p>本计划将开设专门的工程领导力相关课程。教务处委托经济管理学院开出4门课程，包括：管理学经典理论与案例导读、领导力与沟通、
                项目管理、组织行为与团队建设等。鼓励试点学院开设本专业相关的大工程与大系统方面的课程。同时，还鼓励各试点学院与企业合作，
                共同开设面向学科专业领域或行业的综合创新训练、工程领导力培养方面的课程。这些课程将为大三、大四学年学生开设，供参与该
                计划的学生选修。</p>
            <p>4. 项目学习</p>
            <p>通过实施一年级年度项目、二/三年级专业设计项目课程、大学生创新创业训练项目、科技竞赛项目等环节开展“基于项目的学习”过程，
                可以初步培养学生的沟通、表达和领导能力。试点学院应在此基础上进一步加强参与计划学生的项目学习训练。建议在第七学期安排学生
                完成一项分量相当于毕业设计的项目或工程领导力训练项目，由学院内高水平教授及其团队指导，并提供相应支持条件。第八学期将安排
                学生进行企业实习，通过参与实际项目提高工程能力和领导力。</p>
            <p>5. 校企合作</p>
            <p>校企合作是是本计划的关键环节。要求试点学院积极与企业（特别是本行业的大型骨干企业、跨国企业、研究机构等）开展合作，建立大
                学生校外实践教育基地或学生实习基地。将派遣学生到企业实习，进入企业高层管理团队或工程规划设计团队，在企业高层人员的指导下
                完成毕业设计或研究生工程实践，并侧重学生的领导力培养。同时，鼓励试点学院与知名企业共建相关课程，并选派部分教师到合作企业
                进行工程技术培训和实践锻炼。</p>
            <p>6. 就业推荐</p>
            <p>学校与试点学院应充分重视参与本计划学生的就业推荐工作。力争将这些优秀学生推荐到有利于他们未来职业发展的企业或研究所的相关
                重要位置，使他们较快成长为既具有科技创新能力、又有管理才能的工程领军人。</p>
            <p id="gongcheng6">六、对各院系的要求</p>
            <p>希望各院系高度重视，充分认识实施工程领军人才培养计划的重要意义，做好准备积极申请。在学校的指导思想和总体计划框架内，以工
                程领军人才为培养目标，结合学科及合作企业特点，制定出富有特色的规划。成为试点单位后，主要领导应亲自负责，组成计划领导小组
                和专家组，制定切实可行的培养方案，并把规划的各项工作落实到位，特别是与行业骨干企业的合作机制的建立。对本计划相关培养各环节，
                应有专门人员负责，严格把关，确保质量。</p>
            <p id="gongcheng7">七、机制政策</p>
            <p>为了更好地落实工程领军人才培养计划，我校将建立专门的领导机构。教务处牵头，经济管理学院以及试点学院等，与相关专业和合作企业
                的教授、专家等共同建立有效的管理与咨询组织。教务处制订本科阶段计划、协调计划执行、质量管理。经济管理学院负责确定课程、组织
                教师进行课程建设和相关教学管理。试点学院与合作企业的教师和专家负责学生选拔、开设相关专业课、提供综合实践项目以及学生指导等。</p>
            <p>师资方面，领导力相关课程建设和教学由管理学院选派；同时，聘请企业领导、专家为学生开设专业选修课程或技术讲座；综合实践项目的
                组织与指导工作由校内高水平教授及其科研团队承担；企业实际工程项目应由校内指导教师和企业专家共同指导。</p>
            <p>经费方面，由学校支持相关课程建设、教师与专家的指导与评审、部分学生综合实践活动等。鼓励科研团队支持学生参与科研项目，
                并给予一定的经费支持；相关学院和专业应积极争取企业的支持，尤其是与我校建有校企联合实验室的企业支持。</p>
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
