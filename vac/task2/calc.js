function add(){

    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a+b;
    document.getElementById("button1").innerHTML="addtion of given number" +c;
}

function sub(){

    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a-b;
    document.getElementById("button2").innerHTML="subtraction of given number" +c;
}

function mul(){

    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a*b;
    document.getElementById("button3").innerHTML="multipliction of given number" +c;
}

function div(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a/b;
    document.getElementById("button4").innerHTML="division of given number" +c;
}

function mod(){

    let a=parseInt(document.getElementById ("n1").value);
    let b=parseInt(document.getElementById ("n2").value);
    let c=a%b;
    document.getElementById("button5").innerHTML="modulo of given number" +c;
}