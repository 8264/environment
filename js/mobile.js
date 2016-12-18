$(function(){
    function resize(originSize,type){
        var widths=document.documentElement.clientWidth;
        var heights=document.documentElement.clientHeight;
        var htmls=document.getElementsByTagName("html")[0];
        var scale;
        type=type||"x";
        if(type=="y"){
            scale=heights/originSize*100;
        }else if(type=="x"){
            scale=widths/originSize*100;
        }
        htmls.style.fontSize=scale+"px";
    }
    resize(1334,"y");
})