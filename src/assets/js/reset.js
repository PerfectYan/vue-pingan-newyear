// rem
(function Anonymous(doc, win) {
    var docEl = doc.documentElement;

    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

    function recalc() {
        var clientWidth = docEl.clientWidth > 540 ? 540 : docEl.clientWidth; // 控制最大宽度为540px
        if (!clientWidth) return;
        // var dpr = window.devicePixelRatio; //设备像素比
        // 此处的100为页面html设置的字体大小值（为方便计算一般用100px）
        // 此处的320为视觉稿宽度的一半
        // 根据设备可视区的宽度以及设备像素比动态改变fontSize值
        // 如果计算dpr,在iphone6 plus等dpr较高的浏览器中布局会错乱
        // docEl.style.fontSize = (dpr / 2) * 100 * (clientWidth  / 320) + 'px';
        // 如设计图为750，在此JS之前调用 window.TounaDesignSize= 375
        docEl.style.fontSize = 100 * (clientWidth / (win.TounaDesignSize || 375)) + 'px';
    }
    recalc();

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    if (doc.readyState === 'complete') {
        recalc();
    } else {
        doc.addEventListener('DOMContentLoaded', recalc, false);
    }
})(document, window);