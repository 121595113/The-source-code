
var UI = {
     hidden : $("#hidden"),
     node   : $("#node")


};





/**
 *
 * @param t 节点
 * @param e 背景图片或者文字
 * @param i 蒙板的图片
 * @param a 蒙板的类型
 * @param o 画布的宽度
 * @param r 画布的高度
 * @param s 回调函数
 */
function draw(node, cover, coverType, width, height, drawPercentCallback){

    if (!(node.style.display.indexOf("none") > -1)) {
        var l = new Lottery(node, cover, coverType, width, height, drawPercentCallback);
        l.init();
    }
};


function start_callback(){
    UI.node.css("opacity","0");

    setTimeout(function(){
        //alert('完成了!');
    },1000);

};



$(function(){

         var height = $(window).height();
         var width  = $(window).width();
         var type = "image";
         var node = $("#node")[0];
         draw(node, UI.hidden.val(), type, width, height, start_callback);


});