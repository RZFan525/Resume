let modal = $('#myModal');
let close = $(".close");
let title = modal.find("h3")
let subtitle = modal.find("h5")
let text = modal.find("p");
close.click(function() {
    modal.css("display", "none");
    title.html("");
    subtitle.html("");
    text.html("");
});
$(".r1").click(function() {
    title.html("全国MBA培养院校企业竞争模拟大赛");
    subtitle.html("全国二等奖")
    text.html("此比赛由全国工商管理硕士（MBA）教育指导委员会主办，使用北京大学开发的《企业竞争模拟》软件系统。各公司在各期初要制订本期的生产、运输、市场营销、财务管理、人力资源等决策计划，并在规定时间内将决策输入计算机。软件将根据各公司的决策和状况，依据模拟的市场运营机制决定各公司的销售量，并评价一系列经营指标，对各公司的经营绩效做出综合评价。经多期模拟后, 按综合绩效排出名次。")
    modal.css("display", "block");
});
$(".r2").click(function() {
    title.html("Asia and Pacific Mathematical Contest in Modeling");
    subtitle.html("国际二等奖")
    text.html("根据赛题给出的A城市数据，要求分析A城市的人才需求情况，并且建立模型预测未来几年的情况，最后根据如今大学生毕业去向给出合理的人才引进策略。<p>首先我们使用熵值法对A城市数据进行了量化评价与分析，根据分析的结果建立了BP神经网络模型来预测A城市未来的人才需求，然后使用多元线性回归求出了大学毕业生职业偏好与该城市GDP的关系，最后根据此结果给出了相应的人才引进策略。本人担任队长，主要负责评价和预测模型的建立与MATLAB编程部分。</p>")
    modal.css("display", "block");
});
$(".r3").click(function() {
    title.html("全国大学生数学竞赛");
    subtitle.html("全国三等奖")
    text.html("此比赛由中国数学会主办，我参加的是非数学系类，主要考核内容为高等数学与线性代数，包括了函数、极限、连续、微积分、向量代数、空间解析几何、无穷级数等内容。")
    modal.css("display", "block");
});
$(".r4").click(function() {
    title.html("“认证杯”数学中国数学建模网络挑战赛");
    subtitle.html("全国三等奖")
    text.html("赛题要求识别一种未知的由20个字母构成的语言，假设有30段长度在5000-8000个字母之间的文本，其中可能含有字母替换错误。<p>我们首先针对无差错情况建立了词汇库，然后按不等概率从中抽取词汇并且按照不等概率对其进行字母替换，构造出了符合要求的文本。然后建立了基于KMP字符串匹配算法的模型，通过重复字符串匹配检验来找到可能的单词或词跟，并在其中加入了容错率的约束条件。因此得到了基于存在替换错误下可检索到的单词或词根。</p>")
    modal.css("display", "block");
});
$(".r5").click(function() {
    title.html("美国大学生数学建模竞赛");
    subtitle.html("国际三等奖")
    text.html("根据赛题给出的五个州7年的类鸦片案例数据，要求建立模型找出类鸦片开始爆发的位置，类鸦片爆发的原因与特征，最后给出一个合理的策略来应对类鸦片危机，并验证其合理性。<p>我们首先对数据进行预处理与标准化，然后使用熵值法找出其合理的特征进行评估，使用K-means聚类找出可能爆发危机的位置，使用BP神经网络模型预测可能发生类鸦片危机的时间。然后我们根据资料查找其他相关可能因素，并找出这些因素与数据之间的关系，加入新的因素来改进之前的模型，最后基于此模型给出了合理的策略。</p>")
    modal.css("display", "block");
});
$(".r6").click(function() {
    title.html("上海市大学生创业决策仿真模拟大赛");
    subtitle.html("上海市一等奖")
    text.html("该比赛由上海市教育委员会主办，基于“管理决策虚拟仿真实验教学中心”的大型互联网平台进行。主要考核学生的创新创业实践能力，在虚拟仿真平台每一期做出合理的决策，由平台理性的给出评分，最后基于此分数得出队伍排名。")
    modal.css("display", "block");
});
$(".r7").click(function() {
    title.html("全国部分地区大学生物理竞赛");
    subtitle.html("上海市二等奖")
    text.html("此比赛由上海市物理学会主办，我参与的是非物理类B组，主要考核内容为《大学物理》，包含力学、电磁学、光学、相对论等")
    modal.css("display", "block");
});
$(".r8").click(function() {
    title.html("蓝桥杯全国软件和信息技术专业人才大赛");
    subtitle.html("上海市三等奖")
    text.html("此比赛为上机闭卷考试，我参与的是C/C++程序设计大学B组，主要考察内容为计算机算法和数据结构，包含贪心算法、动态规划、图论、数论等。")
    modal.css("display", "block");
});
window.onclick = function(event) {
    if (event.target == modal[0]) {
        modal.css("display", "none");
        title.html("");
        subtitle.html("");
        text.html("");
    }
}