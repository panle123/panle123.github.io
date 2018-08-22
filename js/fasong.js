// var $ = function(_id){
//     return document.getElementById(_id);
// }
// var ofbk = $('ofbk');
// var text = $('text');

// var fabiao = $('fabiao');
// var ofbk = $('ofbk');

// var pinlun = $('pinlun');
// var ofbk = document.getElementById('ofbk');
// ofbk.onclick = function(){
//     //1.创建li
//     // var myp = document.createElement('p');
//     // var myp1 = document.createElement('p');
//     // var myp2 = document.createElement('p');
//     alert(999)
//     $(function () {
//         $('#ajex').clone(true).appendTo('body') //克隆并修改id和值，添加到body下面。
//      })
   
//     // mydiv.appendChild(myp1);
//     //5.最后把input里边的内容清除
    
// }


// ofbk.onclick = function(){
//     //1.创建li
//     var myp = document.createElement('p');
//     var myp1 = document.createElement('p');
//     var myp2 = document.createElement('p');
//     var mydiv = document.createElement('div');
//     var mydiv1 = document.createElement('div1');
 
//     myp1.innerHTML = Date();
//     //2.将input里边的内容给到li中
//     if(text.value != ''){
//         myp.innerHTML ='说说：'+ text.value;
//   }
//     //3.再给li添加一个背景颜色
//     myp.style.cssText = 'margin-top:5px;margin-bottom:5px; color:#6f5c9d;';
//     mydiv.style.cssText = 'margin-top:5px;margin-bottom:5px;width:560px;height:100px;background:#f3efef;display:flex;justify-content:center;align-items: center;';
//     mydiv1.style.cssText = 'width:500px;height:80px;background:#f3efef;';
//     myp1.style.cssText = "width:100%;text-align:right;margin-top:10px;color:#6f5c9d;";
//     myp2.style.cssText = "width:100%;height:30px";

//     //4.再把li插入到ul后边
//     fabiao.appendChild(mydiv);
//     mydiv.appendChild(mydiv1);
//     mydiv1.appendChild(myp);
//     mydiv1.appendChild(myp1);
//     // mydiv.appendChild(myp1);
//     //5.最后把input里边的内容清除
//     text.value = '';
// }