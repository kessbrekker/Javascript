var date = new Date();
var day=date.getDate();
var ay=date.getMonth();
var year= date.getFullYear();
var saat=date.getHours();
var dakika=date.getMinutes();
var saniye=date.getSeconds();
var msaniye=date.getMilliseconds();

document.getElementById("sonuc3").innerHTML=day + "/" + ay + "/" + year + " <br>" + saat + "." + dakika + "." + saniye + "." + msaniye;
function ortalama(){
    s1=parseInt(document.getElementById("sayi1").value);
    s2=parseInt(document.getElementById("sayi2").value);
    var ort=(s1+s2)/2;
    if(s1>100 || s2>100){
        document.getElementById("sonuc").innerHTML="YANLIŞ NOTTTTTTTTTTTTTTT";
    }
    else if(ort<50){
        document.getElementById("sonuc").innerHTML=ort + " Notu ile kaldınız";
    }
    else if(ort>100){
        document.getElementById("sonuc").innerHTML=ort + " YANLIŞ NOTTTTTTTTTTTTTTT";
    }
    else{
        document.getElementById("sonuc").innerHTML=ort + " Notu ile geçtiniz";
    }
}

function adet(){
    document.getElementById("sonuc2").innerHTML="";
    let a=parseInt(document.getElementById("adet").value);
    for(i=1;i<=a;i++){
        document.getElementById("sonuc2").innerHTML+=i;
    }
    document.getElementById("sonuc2").innerHTML+=" kadar sayı yazıldı";
}