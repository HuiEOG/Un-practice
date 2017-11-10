// JavaScript Document
$(document).ready(function(){  

    var dishid=function(){  
        $("#dd .div").toggleClass("formiv");  
    };   
    //点击id=btnParent 下h3标签就会触发名为dishid的针对于此id下所有class为button，把它的css样式转换为hiden  
    $("#dd button").click(dishid);  
});  
