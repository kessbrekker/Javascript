function ortalama(){
    s1=parseInt(document.getElementById("sayi1").value);
    s2=parseInt(document.getElementById("sayi2").value);
    var ort=(s1+s2)/2;
    if(ort<50){
        document.getElementById("sonuc").innerHTML=ort + " Notu ile kaldınız";
    }
    else{
        document.getElementById("sonuc").innerHTML=ort + " Notu ile geçtiniz";
    }
}

function adet(){
    let a=parseInt(document.getElementById("adet").value);
    for(i=1;i<a;i++){
        document.getElementById("sonuc2").innerHTML=i+" kadar sayı üretildi"
    }
}