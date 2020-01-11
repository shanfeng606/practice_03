function getElemId(elem){
    return document.getElementById(elem); //根据Id获取元素
}
var prompt=document.getElementsByClassName("prompt");//获取span元素，提示内容信息
var sign=[false,false,false,false,false,false] //标记

var userName=getElemId("userName"),//用户名
    pwd=getElemId("pwd"),//登录密码
    confirmPwd=getElemId("confirmPwd"),//确认密码
    name1=getElemId("name1"), //姓名
    idType=getElemId("idType"),//证件类型
    idNum=getElemId("idNum"),//证件号码
    email=getElemId("email"),//邮箱
    telNumber=getElemId("telNumber"),//手机号码
    people=getElemId("people");//旅客类型
    sub=getElemId("sub"),//提交按钮
    safe1=getElemId("safe1"),
    safe2=getElemId("safe2"),
    safe3=getElemId("safe3"),
    checkbox=getElemId("checkbox");


//用户名
userName.onblur=function(){
    var reg=/^[a-zA-Z]\w{5,19}$/;
    if(reg.exec(this.value)){
        prompt[0].innerHTML="用户名输入正确";
        prompt[0].style.color="green";
        sign[0]=true;
    }else{
        prompt[0].innerHTML="6-20位字母、数字或“_”，字母开头";
        prompt[0].style.color="red";
    }
}

//登录密码
pwd.onblur=function(){
    pwd.parentNode.style.marginBottom="30px";
    if(/^[0-9]{6,20}$/.test(this.value)||/^[a-zA-Z]{6,20}$/.test(this.value)||/^\W{6,20}$/.test(this.value)){
        prompt[1].innerHTML="密码输入正确（安全性较差";
        prompt[1].style.color="green";
        safe1.style.display="inline-block";
        sign[1]=true;
    }else if(/^[0-9|a-z]{6,20}$/.test(this.value)||/^[0-9|\W]{6,20}$/.test(this.value)||/^[\W|a-z]{6,20}$/.test(this.value)){
        prompt[1].innerHTML="密码输入正确（安全性中等";
        prompt[1].style.color="green";
        safe1.style.display="inline-block";
        safe2.style.display="inline-block";
        sign[1]=true;
    }else if(/\W[0-9a-zA-Z]*/.test(this.value)){
        prompt[1].innerHTML="密码输入正确（安全性较高";
        prompt[1].style.color="green";
        safe1.style.display="inline-block";
        safe2.style.display="inline-block";
        safe3.style.display="inline-block";
        sign[1]=true;
    }else{
        prompt[1].innerHTML="密码6-18位，包括数字、字母或符号，中间不能有空格";
        prompt[1].style.color="red";
        safe1.style.display="none";
        safe2.style.display="none";
        safe3.style.display="none";
    }
}
//确认密码
comfirmPwd.onblur=function(){
    
    if(this.value==""){
        prompt[2].innerHTML="请设置密码";
        prompt[2].style.color="red";
    }else{
        if(/^[0-9]{6,20}$/.test(this.value)||/^[a-zA-Z]{6,20}$/.test(this.value)||/^\W{6,20}$/.test(this.value)){
            if(this.value==pwd.value){
                prompt[2].innerHTML="两次输入一致";
                prompt[2].style.color="green";
                sign[2]=true;
            }else{
                prompt[2].innerHTML="两次密码输入不一致，请重新输入";
                prompt[2].style.color="red";
            }
        }else{
            prompt[2].innerHTML="密码6-18位，包括数字、字母或符号，中间不能有空格";
            prompt[2].style.color="red";
        }
        
    }
}

//姓名
name1.onblur=function(){
    // var reg=(/^[\u4e00-\u9fa5]{2,4}$/||//;
    if(/^[\u4e00-\u9fa5]{2,4}$/.exec(this.value)||/^[a-zA-Z]{3,30}$/.exec(this.value)){
        prompt[3].innerHTML="姓名输入正确";
        prompt[3].style.color="green";
        sign[3]=true;
    }else{
        prompt[3].innerHTML="姓名只能包含中文或英文，且字符在3-30之间！";
        prompt[3].style.color="red";
    }
}

//证件号码
idNum.onblur=function(){
    var reg=/^\d{18}$|^\d{17}[\dX]$/;
    if(reg.exec(this.value)){
        prompt[4].innerHTML="号码输入正确";
        prompt[4].style.color="green";
        sign[4]=true;
    }else{
        prompt[4].innerHTML="请输入18位身份证号码";
        prompt[4].style.color="red";
    }
}

//邮箱
email.onblur=function(){
    var reg=/^\w+@\w+(?:\.[a-zA-Z]{2,3}){1,2}$/;
    if(reg.exec(this.value)){
        prompt[5].innerHTML="邮箱格式正确";
        prompt[5].style.color="green";
        sign[5]=true;
    }else{
        prompt[5].innerHTML="邮箱格式错误";
        prompt[5].style.color="red";
    }
}

//手机号码
telNumber.onblur=function(){
    var reg=/^1[3458]\d{9}$/;
    if(reg.exec(this.value)){
        prompt[6].innerHTML="手机格式正确";
        prompt[6].style.color="green";
        sign[6]=true;
    }else{
        prompt[6].innerHTML="您输入的手机号码不是有效的格式";
        prompt[6].style.color="red";
    }
}

//提交按钮
sub.onclick=function(){
    for(var i=0;i<sign.length;i++){
        console.log(sign[i])
        if(sign[i]==false){
            return false;//阻止表单提交          
        }        
    }
    if(checkbox.checked){
        alert("aaa");
        window.open("http://www.baidu.com");
    }else{
        alert("请勾选条款");
    }
    return false;
}


