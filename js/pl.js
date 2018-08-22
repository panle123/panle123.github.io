var Func = function(_id){
    return document.getElementById(_id);
}
var pinlun = Func('pinlun');
// <-------------------------------------------------------------------------------------------------------------------------------------------->
// <-------------------------------------------------------------------------------------------------------------------------------------------->
// <-------------------------------------------------------------------------------------------------------------------------------------------->
// 样本一
var shuju = Func('shuju');
var tijiao = Func('tijiao');
var divjia = Func('divjia');

// 键盘事件
document.onkeydown = function (event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e && e.keyCode == 13) {
         // 时间函数
var oDate = new Date(); //实例一个时间对象；
oDate.getFullYear();   //获取系统的年；
oDate.getMonth()+1;   //获取系统月份，由于月份是从0开始计算，所以要加1
oDate.getDate(); // 获取系统日，
oDate.getHours(); //获取系统时，
oDate.getMinutes(); //分
oDate.getSeconds(); //秒
// 时间函数
   //1.创建li
   var myp = document.createElement('p');
   //2.将input里边的内容给到li中
   if(shuju.value != ''){
         myp.innerHTML ='评论：'+ shuju.value +'</br>'+ oDate.getFullYear()+'/'+(oDate.getMonth()+1)+'/'+oDate.getDate()+'/'+oDate.getHours()+':'+oDate.getMinutes()+':'+oDate.getSeconds();
   }
 
   //3.再给li添加一个背景颜色
   myp.style.cssText = 'margin-top:5px;margin-bottom:5px;font-size:12px;';
   //4.再把li插入到ul后边
   divjia.appendChild(myp);
   //5.最后把input里边的内容清除
   shuju.value = '';
    }
};




tijiao.onclick = function(){


    // 时间函数
var oDate = new Date(); //实例一个时间对象；
oDate.getFullYear();   //获取系统的年；
oDate.getMonth()+1;   //获取系统月份，由于月份是从0开始计算，所以要加1
oDate.getDate(); // 获取系统日，
oDate.getHours(); //获取系统时，
oDate.getMinutes(); //分
oDate.getSeconds(); //秒
// 时间函数
   //1.创建li
   var myp = document.createElement('p');
   //2.将input里边的内容给到li中
   if(shuju.value != ''){
         myp.innerHTML ='评论：'+ shuju.value +'</br>'+ oDate.getFullYear()+'/'+(oDate.getMonth()+1)+'/'+oDate.getDate()+'/'+oDate.getHours()+':'+oDate.getMinutes()+':'+oDate.getSeconds();
   }
 
   //3.再给li添加一个背景颜色
   myp.style.cssText = 'margin-top:5px;margin-bottom:5px;font-size:12px;';
   //4.再把li插入到ul后边
   divjia.appendChild(myp);
   //5.最后把input里边的内容清除
   shuju.value = '';
}

// <-------------------------------------------------------------------------------------------------------------------------------------------->
// <-------------------------------------------------------------------------------------------------------------------------------------------->
// <-------------------------------------------------------------------------------------------------------------------------------------------->
// 样本二
var shuju1 = Func('shuju1');
var tijiao1 = Func('tijiao1');
var divjia1 = Func('divjia1');
tijiao1.onclick = function(){

// 时间函数
var oDate = new Date(); //实例一个时间对象；
oDate.getFullYear();   //获取系统的年；
oDate.getMonth()+1;   //获取系统月份，由于月份是从0开始计算，所以要加1
oDate.getDate(); // 获取系统日，
oDate.getHours(); //获取系统时，
oDate.getMinutes(); //分
oDate.getSeconds(); //秒
// 时间函数

    //1.创建li
    var myp = document.createElement('p');
    //2.将input里边的内容给到li中
    if(shuju1.value != ''){
        myp.innerHTML ='评论：'+ shuju1.value+'</br>'+oDate.getFullYear()+'/'+(oDate.getMonth()+1)+'/'+oDate.getDate()+'/'+oDate.getHours()+':'+oDate.getMinutes()+':'+oDate.getSeconds();
  }
    //3.再给li添加一个背景颜色
    myp.style.cssText = 'margin-top:5px;margin-bottom:5px;font-size:12px;';
    //4.再把li插入到ul后边
    divjia1.appendChild(myp);
    //5.最后把input里边的内容清除
    shuju1.value = '';
 }



 // 键盘事件
// document.onkeydown = function (event) {
//     var e = event || window.event || arguments.callee.caller.arguments[0];
//     if (e && e.keyCode == 13) {
//         // 时间函数
// var oDate = new Date(); //实例一个时间对象；
// oDate.getFullYear();   //获取系统的年；
// oDate.getMonth()+1;   //获取系统月份，由于月份是从0开始计算，所以要加1
// oDate.getDate(); // 获取系统日，
// oDate.getHours(); //获取系统时，
// oDate.getMinutes(); //分
// oDate.getSeconds(); //秒
// // 时间函数

//     //1.创建li
//     var myp = document.createElement('p');
//     //2.将input里边的内容给到li中
//     if(shuju1.value != ''){
//         myp.innerHTML ='评论：'+ shuju1.value+'</br>'+oDate.getFullYear()+'/'+(oDate.getMonth()+1)+'/'+oDate.getDate()+'/'+oDate.getHours()+':'+oDate.getMinutes()+':'+oDate.getSeconds();
//   }
//     //3.再给li添加一个背景颜色
//     myp.style.cssText = 'margin-top:5px;margin-bottom:5px;font-size:12px;';
//     //4.再把li插入到ul后边
//     divjia1.appendChild(myp);
//     //5.最后把input里边的内容清除
//     shuju1.value = '';
//     }
// }

$(function(){
    //绑定输入框，这里只能 是ID
     $("#shuju1").keydown(function(event){
      event=document.all?window.event:event;
      if((event.keyCode || event.which)==13){
       // 时间函数
var oDate = new Date(); //实例一个时间对象；
oDate.getFullYear();   //获取系统的年；
oDate.getMonth()+1;   //获取系统月份，由于月份是从0开始计算，所以要加1
oDate.getDate(); // 获取系统日，
oDate.getHours(); //获取系统时，
oDate.getMinutes(); //分
oDate.getSeconds(); //秒
// 时间函数

    //1.创建li
    var myp = document.createElement('p');
    //2.将input里边的内容给到li中
    if(shuju1.value != ''){
        myp.innerHTML ='评论：'+ shuju1.value+'</br>'+oDate.getFullYear()+'/'+(oDate.getMonth()+1)+'/'+oDate.getDate()+'/'+oDate.getHours()+':'+oDate.getMinutes()+':'+oDate.getSeconds();
  }
    //3.再给li添加一个背景颜色
    myp.style.cssText = 'margin-top:5px;margin-bottom:5px;font-size:12px;';
    //4.再把li插入到ul后边
    divjia1.appendChild(myp);
    //5.最后把input里边的内容清除
    shuju1.value = '';
      }
    
     }); 
    }); 

// <-------------------------------------------------------------------------------------------------------------------------------------------->
// <-------------------------------------------------------------------------------------------------------------------------------------------->
// <-------------------------------------------------------------------------------------------------------------------------------------------->
// 样本三
 var shuju2 = Func('shuju2');
var tijiao2 = Func('tijiao2');
var divjia2 = Func('divjia2');
tijiao2.onclick = function(){


    // 时间函数
var oDate = new Date(); //实例一个时间对象；
oDate.getFullYear();   //获取系统的年；
oDate.getMonth()+1;   //获取系统月份，由于月份是从0开始计算，所以要加1
oDate.getDate(); // 获取系统日，
oDate.getHours(); //获取系统时，
oDate.getMinutes(); //分
oDate.getSeconds(); //秒
// 时间函数

    //1.创建li
    var myp = document.createElement('p');
    //2.将input里边的内容给到li中
    if(shuju2.value != ''){
        myp.innerHTML ='评论：'+ shuju2.value+'</br>'+oDate.getFullYear()+'/'+(oDate.getMonth()+1)+'/'+oDate.getDate()+'/'+oDate.getHours()+':'+oDate.getMinutes()+':'+oDate.getSeconds();
  }
    //3.再给li添加一个背景颜色
    myp.style.cssText = 'margin-top:5px;margin-bottom:5px;font-size:12px;';
    //4.再把li插入到ul后边
    divjia2.appendChild(myp);
    //5.最后把input里边的内容清除
    shuju2.value = '';
 }



 $(function(){
    //绑定输入框，这里只能 是ID
     $("#shuju2").keydown(function(event){
      event=document.all?window.event:event;
      if((event.keyCode || event.which)==13){
        // 时间函数
var oDate = new Date(); //实例一个时间对象；
oDate.getFullYear();   //获取系统的年；
oDate.getMonth()+1;   //获取系统月份，由于月份是从0开始计算，所以要加1
oDate.getDate(); // 获取系统日，
oDate.getHours(); //获取系统时，
oDate.getMinutes(); //分
oDate.getSeconds(); //秒
// 时间函数

    //1.创建li
    var myp = document.createElement('p');
    //2.将input里边的内容给到li中
    if(shuju2.value != ''){
        myp.innerHTML ='评论：'+ shuju2.value+'</br>'+oDate.getFullYear()+'/'+(oDate.getMonth()+1)+'/'+oDate.getDate()+'/'+oDate.getHours()+':'+oDate.getMinutes()+':'+oDate.getSeconds();
  }
    //3.再给li添加一个背景颜色
    myp.style.cssText = 'margin-top:5px;margin-bottom:5px;font-size:12px;';
    //4.再把li插入到ul后边
    divjia2.appendChild(myp);
    //5.最后把input里边的内容清除
    shuju2.value = '';


    }
    
}); 
}); 
// <-------------------------------------------------------------------------------------------------------------------------------------------->
// <-------------------------------------------------------------------------------------------------------------------------------------------->
// <-------------------------------------------------------------------------------------------------------------------------------------------->
// 样本四
 var shuju3 = Func('shuju3');
var tijiao3 = Func('tijiao3');
var divjia3 = Func('divjia3');
tijiao3.onclick = function(){



    
    // 时间函数
var oDate = new Date(); //实例一个时间对象；
oDate.getFullYear();   //获取系统的年；
oDate.getMonth()+1;   //获取系统月份，由于月份是从0开始计算，所以要加1
oDate.getDate(); // 获取系统日，
oDate.getHours(); //获取系统时，
oDate.getMinutes(); //分
oDate.getSeconds(); //秒
// 时间函数
    //1.创建li
    var myp = document.createElement('p');
    //2.将input里边的内容给到li中
    if(shuju3.value != ''){
        myp.innerHTML ='评论：'+ shuju3.value +'</br>'+ oDate.getFullYear()+'/'+(oDate.getMonth()+1)+'/'+oDate.getDate()+'/'+oDate.getHours()+':'+oDate.getMinutes()+':'+oDate.getSeconds();
  }
    //3.再给li添加一个背景颜色
    myp.style.cssText = 'margin-top:5px;margin-bottom:5px;font-size:12px;font-size:12px;';
    //4.再把li插入到ul后边
    divjia3.appendChild(myp);
    //5.最后把input里边的内容清除
    shuju3.value = '';
 }


 $(function(){
    //绑定输入框，这里只能 是ID
     $("#shuju3").keydown(function(event){
      event=document.all?window.event:event;
      if((event.keyCode || event.which)==13){

// 时间函数
var oDate = new Date(); //实例一个时间对象；
oDate.getFullYear();   //获取系统的年；
oDate.getMonth()+1;   //获取系统月份，由于月份是从0开始计算，所以要加1
oDate.getDate(); // 获取系统日，
oDate.getHours(); //获取系统时，
oDate.getMinutes(); //分
oDate.getSeconds(); //秒
// 时间函数
    //1.创建li
    var myp = document.createElement('p');
    //2.将input里边的内容给到li中
    if(shuju3.value != ''){
        myp.innerHTML ='评论：'+ shuju3.value +'</br>'+ oDate.getFullYear()+'/'+(oDate.getMonth()+1)+'/'+oDate.getDate()+'/'+oDate.getHours()+':'+oDate.getMinutes()+':'+oDate.getSeconds();
  }
    //3.再给li添加一个背景颜色
    myp.style.cssText = 'margin-top:5px;margin-bottom:5px;font-size:12px;font-size:12px;';
    //4.再把li插入到ul后边
    divjia3.appendChild(myp);
    //5.最后把input里边的内容清除
    shuju3.value = '';

    }
    
}); 
}); 
// <-------------------------------------------------------------------------------------------------------------------------------------------->
// <-------------------------------------------------------------------------------------------------------------------------------------------->
// <-------------------------------------------------------------------------------------------------------------------------------------------->
// 样本五
var shuju999 = Func('shuju99');
var tijiao999 = Func('tijiao99');
var divjia999 = Func('divjia99');
tijiao999.onclick = function(){


    // 时间函数
var oDate = new Date(); //实例一个时间对象；
oDate.getFullYear();   //获取系统的年；
oDate.getMonth()+1;   //获取系统月份，由于月份是从0开始计算，所以要加1
oDate.getDate(); // 获取系统日，
oDate.getHours(); //获取系统时，
oDate.getMinutes(); //分
oDate.getSeconds(); //秒
// 时间函数
   //1.创建li
   var myp = document.createElement('p');
   //2.将input里边的内容给到li中
   if(shuju999.value != ''){
         myp.innerHTML ='评论：'+ shuju999.value +'</br>'+ oDate.getFullYear()+'/'+(oDate.getMonth()+1)+'/'+oDate.getDate()+'/'+oDate.getHours()+':'+oDate.getMinutes()+':'+oDate.getSeconds();
   }
 
   //3.再给li添加一个背景颜色
   myp.style.cssText = 'margin-top:5px;margin-bottom:5px;font-size:12px;';
   //4.再把li插入到ul后边
   divjia999.appendChild(myp);
   //5.最后把input里边的内容清除
   shuju999.value = '';
}



$(function(){
    //绑定输入框，这里只能 是ID
     $("#shuju99").keydown(function(event){
      event=document.all?window.event:event;
      if((event.keyCode || event.which)==13){

// 时间函数
var oDate = new Date(); //实例一个时间对象；
oDate.getFullYear();   //获取系统的年；
oDate.getMonth()+1;   //获取系统月份，由于月份是从0开始计算，所以要加1
oDate.getDate(); // 获取系统日，
oDate.getHours(); //获取系统时，
oDate.getMinutes(); //分
oDate.getSeconds(); //秒
// 时间函数
   //1.创建li
   var myp = document.createElement('p');
   //2.将input里边的内容给到li中
   if(shuju999.value != ''){
         myp.innerHTML ='评论：'+ shuju999.value +'</br>'+ oDate.getFullYear()+'/'+(oDate.getMonth()+1)+'/'+oDate.getDate()+'/'+oDate.getHours()+':'+oDate.getMinutes()+':'+oDate.getSeconds();
   }
 
   //3.再给li添加一个背景颜色
   myp.style.cssText = 'margin-top:5px;margin-bottom:5px;font-size:12px;';
   //4.再把li插入到ul后边
   divjia999.appendChild(myp);
   //5.最后把input里边的内容清除
   shuju999.value = '';

    }
    
}); 
}); 
// <-------------------------------------------------------------------------------------------------------------------------------------------->
// <-------------------------------------------------------------------------------------------------------------------------------------------->
// <-------------------------------------------------------------------------------------------------------------------------------------------->


// 以五为样本克隆程序改变id之前插入


var k = 0;
 var ofbk = document.getElementById('ofbk');
 ofbk.onclick = function(){


// 时间函数
var oDate = new Date(); //实例一个时间对象；
oDate.getFullYear();   //获取系统的年；
oDate.getMonth()+1;   //获取系统月份，由于月份是从0开始计算，所以要加1
oDate.getDate(); // 获取系统日，
oDate.getHours(); //获取系统时，
oDate.getMinutes(); //分
oDate.getSeconds(); //秒
// 时间函数




     k+=1;
     $(function () {

         $('#moban').clone(true).attr('id', 'ajex'+k).insertBefore('#ajex'+(k-1)); //克隆并修改id和值，添加到body下面。

      })
      $('#shuju99').attr('id', 'date'+k)
      $('#tijiao99').attr('id', 'sub'+k)
      $('#divjia99').attr('id', 'jia'+k)
      $('#shijian99').attr('id', 'time'+k)
      $('#hhh').attr('id', 'hhh'+k)

      var odate = Func('date'+k);
      var osub = Func('sub'+k);
      var oadd = Func('jia'+k);
      var hhh = Func('hhh'+k);
      var time = Func('time'+k);
      var text = Func('text');
      hhh.innerHTML = text.value;
      time.innerHTML = oDate.getFullYear()+'/'+(oDate.getMonth()+1)+'/'+oDate.getDate()+'/'+oDate.getHours()+':'+oDate.getMinutes()+':'+oDate.getSeconds();
      text.value = '';
      osub.onclick = function(){




            // 时间函数
var oDate = new Date(); //实例一个时间对象；
oDate.getFullYear();   //获取系统的年；
oDate.getMonth()+1;   //获取系统月份，由于月份是从0开始计算，所以要加1
oDate.getDate(); // 获取系统日，
oDate.getHours(); //获取系统时，
oDate.getMinutes(); //分
oDate.getSeconds(); //秒
// 时间函数
          //1.创建li
          var myp = document.createElement('p');
          //2.将input里边的内容给到li中
          if(odate.value != ''){
              myp.innerHTML ='评论：'+ odate.value + '</br>' + oDate.getFullYear()+'/'+(oDate.getMonth()+1)+'/'+oDate.getDate()+'/'+oDate.getHours()+':'+oDate.getMinutes()+':'+oDate.getSeconds();
        }
          //3.再给li添加一个背景颜色
          myp.style.cssText = 'margin-top:5px;margin-bottom:5px;font-size:12px;';
          //4.再把li插入到ul后边
          oadd.appendChild(myp);
          //5.最后把input里边的内容清除
          odate.value = '';
       }

       $(function(){
        //绑定输入框，这里只能 是ID
         $("#"+'date'+k).keydown(function(event){
          event=document.all?window.event:event;
          if((event.keyCode || event.which)==13){
    
            
            // 时间函数
var oDate = new Date(); //实例一个时间对象；
oDate.getFullYear();   //获取系统的年；
oDate.getMonth()+1;   //获取系统月份，由于月份是从0开始计算，所以要加1
oDate.getDate(); // 获取系统日，
oDate.getHours(); //获取系统时，
oDate.getMinutes(); //分
oDate.getSeconds(); //秒
// 时间函数
          //1.创建li
          var myp = document.createElement('p');
          //2.将input里边的内容给到li中
          if(odate.value != ''){
              myp.innerHTML ='评论：'+ odate.value + '</br>' + oDate.getFullYear()+'/'+(oDate.getMonth()+1)+'/'+oDate.getDate()+'/'+oDate.getHours()+':'+oDate.getMinutes()+':'+oDate.getSeconds();
        }
          //3.再给li添加一个背景颜色
          myp.style.cssText = 'margin-top:5px;margin-bottom:5px;font-size:12px;';
          //4.再把li插入到ul后边
          oadd.appendChild(myp);
          //5.最后把input里边的内容清除
          odate.value = '';
    
        }
        
    }); 
    }); 

 }
 // <-------------------------------------------------------------------------------------------------------------------------------------------->
 // <-------------------------------------------------------------------------------------------------------------------------------------------->
 // <-------------------------------------------------------------------------------------------------------------------------------------------->