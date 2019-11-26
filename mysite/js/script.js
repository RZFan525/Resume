$(function() {
    $('#fullpage').fullpage({
        sectionsColor: ['darkcyan', '#2AB561', '#826B68', '#EA6153', "#993366"],
        anchors: ['profile', 'skill', 'research', 'competition', 'contact'],
        navigation: true,
        navigationPosition: "right",
        navigationTooltips: ['个人信息', '专业技能', '科研经历', '学科竞赛', '联系我'],
        menu: "#menu",
        afterLoad: function(afterlink, index) {
            //index: 进入的页序号
            //afterlink 进入的页anchor
            var $anim = $(".section").eq(index.index).find(".animated");

            function addAnimated(flag) {
                if (flag) {
                    $anim.each(function(i) {
                        var that = this;
                        setTimeout(function() {
                            $(that).addClass($(that).data('anim')).css({ visibility: 'visible' })
                        }, 100 * i)
                    });
                } else {
                    $anim.each(function() {
                        $(this).addClass($(this).data('anim')).css({ visibility: 'visible' })
                    });
                }
            }
            switch (index.index + 1) {
                case 1:
                    addAnimated();
                    break;
                case 2:
                    addAnimated(1);
                    break;
                case 3:
                    $('.line').animate({ "height": "100%" }, 1000);
                    addAnimated();
                    break;
                case 4:
                    addAnimated(1);
                    break;
                case 5:
                    setTimeout(function() {
                        $('#fifth .ceil,#fifth .floor').animate({ 'height': '30%' }, 400);
                    }, 400);
                    break;

            }
        },
        onLeave: function(index, nextIndex, direction) {
            //index:进入之前的页
            if (index.index + 1 == 3) {
                $('.line').animate({ "height": "0%" }, 100);
            }
            if (index.index + 1 == 5) {
                $('#fifth .ceil,#fifth .floor').animate({ 'height': '50%' }, 400);
            }
            var $anim = $(".section").eq(index.index).find(".animated");
            $anim.each(function(i) {
                var that = this;
                setTimeout(function() {
                    $(that).removeClass($(that).data('anim')).css({ visibility: 'hidden' });
                }, 100 * i)
            });
        }
    });
});