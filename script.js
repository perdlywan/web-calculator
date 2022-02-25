let operasi = "";
let angkaPertama = 0;
let angkaKedua = 0;
const nilai = document.getElementById("nilai");
const tombol = document.getElementsByClassName("tombol");
const reset = document.getElementById("reset");

for(let i = 0; i < tombol.length; i++ ){
    tombol[i].addEventListener("click", function(){
        if (
            tombol[i].innerText == "+" ||
            tombol[i].innerText == "-" ||
            tombol[i].innerText == "*" ||
            tombol[i].innerText == "/"
        ) {
            operasi = tombol[i].innerText;
            angkaPertama = nilai.value;
            nilai.value = 0;

        } else if(tombol[i].innerText == "="){
            angkaKedua = nilai.value;
            if(operasi == "+") nilai.value= parseInt(angkaPertama) + parseInt(angkaKedua);
            if(operasi == "-") nilai.value= parseInt(angkaPertama) - parseInt(angkaKedua);
            if(operasi == "*") nilai.value= parseInt(angkaPertama) * parseInt(angkaKedua);
            if(operasi == "/") nilai.value= parseInt(angkaPertama) / parseInt(angkaKedua);
            
        } else {
            const currentValue = parseInt(nilai.value);
            if(currentValue == 0) {
                nilai.value = tombol[i].innerText
            } else {
                nilai.value = currentValue + tombol[i].innerText 
            }
        } 
    });
}

reset.addEventListener("click", function() {
    operasi = "";
    angkaPertama = 0;
    angkaKedua = 0;
    nilai.value = 0;
})