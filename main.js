// 搜尋 a 元素
// 取得每個 a 元素的資料
$("a").each(function (index, element) {
    
    //console.log("編號：" + index);

    var target = $(this).attr("data-st-target");
    var duration = $(this).attr("data-st-duration");
    var offsetTop = $(this).attr("data-st-offset");

    //console.log("目標：" + target);
    //console.log("時間：" + duration);
    //console.log("位移：" + offsetTop);

    var offset = $("#" + target).offset();
    var top = offset.top;

    // 上方 扣除 上方位移
    // top = top - offsetTop; // 原始寫法
    // 如果 offsetTop 存在的話 才執行 減法運算
    if (offsetTop) top -= offsetTop;         // 簡寫

    //console.log("上方：" + top);

    $(this).click(function (e) { 
        e.preventDefault();
        
        // parseInt() 將文字轉為數字
        // stop() 停止當前所有動畫
        $("html").stop().animate({
            scrollTop: top
        }, parseInt(duration));

        console.log(123);
    });
});

// 使用者在用滑鼠滾動時 停止動畫
$("html").on("mousewheel", function () {
    $("html").stop();
});

var arrow = $("#arrow");
arrow.fadeOut();

// 箭頭顯示與隱藏效果
$(window).scroll(function () { 
    var windowTop = $(this).scrollTop();
    console.log("視窗上方位置：" + windowTop);

    var arrowTop = arrow.attr("data-st-top");
    var arrowTime = arrow.attr("data-st-time");

    console.log("箭頭要出現的位置：" +  arrowTop);
    console.log("箭頭特效的時間　：" + arrowTime);
});