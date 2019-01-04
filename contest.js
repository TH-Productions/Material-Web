function hide() {
    var x = document.getElementById("separator2");
    x.style.webkitAnimationName = 'hide'; // you had a trailing space here which does NOT get trimmed
    x.style.webkitAnimationDuration = '1s';
    x.style.webkitAnimationfillmode= "forwards";
    var firstname = document.getElementById("fn2");
    firstname.required = false;
    var lastname= document.getElementById("ln2");
    lastname.required = false;

    var x = document.getElementById("contestant2");
    x.innerHTML = "CONTESTANT";
}
function show() {
    var x = document.getElementById("separator2");
    x.style.webkitAnimationName = 'show'; // you had a trailing space here which does NOT get trimmed
    x.style.webkitAnimationDuration = '1s';
    x.style.webkitAnimationfillmode= "forwards";
    var firstname = document.getElementById("fn2");
    firstname.required = true;
    var lastname= document.getElementById("ln2");
    lastname.required = true;

    var x = document.getElementById("contestant2");
    x.innerHTML = "CONTESTANT 2";
}
function update(value){
    var x = document.getElementById("total");
    var y = document.getElementById("chart");
    var td = document.getElementById("td");
    var ex = document.getElementById("ex");
    var ae = document.getElementById("ae");

    var tdvalue = parseFloat(td.value,10);
    var exvalue = parseFloat(ex.value,10);
    var aevalue = parseFloat(ae.value,10);
    checkError(value);
    if (!isCorrect(tdvalue)||!isCorrect(exvalue)||!isCorrect(aevalue)){
        total = 0;
    }else{
        var total = tdvalue+exvalue+aevalue;
    }
    
    if (total>21){
        total = 21;
    }
    

    x.innerHTML = total.toFixed(2);
    
    var porcentaje = total/21;
    if ((porcentaje >= 0)&&(porcentaje < 0.33)){
        y.style.backgroundColor = "rgba(255, 111, 89, 1)";
    }else{
    if ((porcentaje > 0.33)&&(porcentaje < 0.66)){
        
        y.style.backgroundColor = "#ffb74d";
    }else{
         y.style.backgroundColor = "rgba(67, 170, 139, 1)";
    }
    }
    
    y.style.width = porcentaje*100+"%";
    y.style.maxWidth = porcentaje*800+"px";
    
   
}
function clear(){
    var x = document.getElementById("dou");
    var y = document.getElementById("ind");
    
    x.checked = true;
}
function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
}
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

function isCorrect(value){
    if (isNaN(value)){ 
        return false;
    }
 
    if ((value<0)||(value>7)){
        
        return false;
    }

    return true;
}

function checkError(valueInit){
    value = parseFloat(valueInit, 10);

    if ((value<0)||(value>7)){
        var snd = new Audio("dialog-question.ogg")
        snd.play();
        return;
    }

    return;
}
update();
clear();
show();


