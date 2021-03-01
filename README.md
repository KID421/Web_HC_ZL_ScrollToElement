# Web_HC_ZL_ScrollToElement
網頁 赫綵中壢 捲動至指定元素 套件

# 範例
https://kid421.github.io/Web_HC_ZL_ScrollToElement/

# 使用方式
## 連結 CDN
將 CDN 放在 body 結束標籤前
https://kid421.github.io/Web_HC_ZL_ScrollToElement/main.js

範例
```
<script src="https://kid421.github.io/Web_HC_ZL_ScrollToElement/main.js"></script>
```

## 捲動說明
屬性名稱 | 屬性說明
-------------- | --------------
data-st-target | 要前往元素的 ID 名稱
data-st-duration | 捲動所花的時間 (毫秒)
data-st-offset | 位移的大小

範例
```
<a href="" data-st-target="area2" data-st-duration="800" data-st-offset="100">連結2</a>
```

## 箭頭說明
返回頂端的箭頭必須添加 ID arrow

屬性名稱 | 屬性說明
-------------- | --------------
data-st-top | 箭頭要出現的高度
data-st-time | 特效的持續時間

範例
```
<a id="arrow" data-st-target="top" data-st-duration="800" data-st-top="300" data-st-time="600"></a>
```