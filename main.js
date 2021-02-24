// 搜尋 a 元素
// 取得每個 a 元素的資料
$("a").each(function (index, element) {
    
    console.log("編號：" + index);

    var target = $(this).attr("data-st-target");
    var duration = $(this).attr("data-st-duration");

    console.log("目標：" + target);
    console.log("時間：" + duration);

    var offset = $("#" + target).offset();
    var top = offset.top;

    console.log("上方：" + top);
});