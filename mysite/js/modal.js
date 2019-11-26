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
    text.html("    别人带我的，不多解释")
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
    text.html("此比赛由中国数学会主办，我参加的是非数学系类，主要考核内容为高等数学与线形代数，包括了函数、极限、连续、微积分、向量代数、空间解析几何、无穷级数等内容。")
    modal.css("display", "block");
});
$(".r4").click(function() {
    title.html("“认证杯”数学中国数学建模网络挑战赛");
    subtitle.html("全国三等奖")
    modal.css("display", "block");
});
$(".r5").click(function() {
    title.html("美国大学生数学建模竞赛");
    subtitle.html("国际三等奖")
    modal.css("display", "block");
});
$(".r6").click(function() {
    title.html("上海市大学生创业决策仿真模拟大赛");
    subtitle.html("上海市一等奖")
    modal.css("display", "block");
});
$(".r7").click(function() {
    title.html("全国部分地区大学生物理竞赛");
    subtitle.html("上海市二等奖")
    modal.css("display", "block");
});
$(".r8").click(function() {
    title.html("蓝桥杯全国软件和信息技术专业人才大赛");
    subtitle.html("上海市三等奖")
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