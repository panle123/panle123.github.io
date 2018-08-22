var Func = function(_id){
    return document.getElementById(_id);
}
var  flag = 200;
var flag1 =115;
var zan = Func('zan');
var osz = Func('osz');
var aixing = Func('aixing');
var qd_img = Func('qd_img');
var tian = Func('tian');
zan.onmousedown = function(){
    flag+=1;
    osz.innerHTML = '&nbsp;'+flag;
    zan.style.cssText = 'width:32px;height:32px;';
    aixing.style.cssText = 'width:60px;height:60px;';
}
zan.onmouseup = function(){
    zan.style.cssText = 'width:30px;height:30px;';
    aixing.style.cssText = 'width:50px;height:50px;';
}
qd_img.onclick = function(){
    flag1+=1;
    tian.innerHTML = flag1;
   
}
