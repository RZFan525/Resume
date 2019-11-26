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
    modal.css("display", "block");
});
$(".r2").click(function() {
    title.html("Asia and Pacific Mathematical Contest in Modeling");
    subtitle.html("国际二等奖")
    modal.css("display", "block");
});
$(".r3").click(function() {
    title.html("全国大学生数学竞赛");
    subtitle.html("全国三等奖")
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