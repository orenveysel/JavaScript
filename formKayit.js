console.log("form Kayit Calisti");

class Person {

    constructor(adsoyad,gsm,dogumtarihi,cinsiyet)
    {
        this.adsoyad=adsoyad;
        this.gsm=gsm;
        this.dogumtarihi=dogumtarihi;
        this.cinsiyet=cinsiyet;
    }
}
function kaydet()
{
   let adsoyad = document.getElementById("Adsoyad").value;
   let gsm = document.getElementById("Gsm").value;
   let dogumtarihi=document.getElementById("Dtrh").value;
   let cinsiyet = document.getElementById("cinsiyet").checked;
    
  // 1. Yol Olusturdugumuz class ile instance almak
   let personel = new Person(adsoyad,gsm,dogumtarihi,cinsiyet);
    //Asagidaki kod json olarak saklar
   localStorage.setItem("myperson",JSON.stringify(personel));

  
}
function oku()
{
    alert("Oku Metodu Calisti");
    
    let person =  JSON.parse(localStorage.getItem("myperson"));
    //let person =  localStorage.getItem("myperson");
    debugger
   console.log(person);
    document.getElementById("Adsoyad").value= person.adsoyad;
   
     document.getElementById("Gsm").value = person.gsm
    //document.getElementById("Dtrh").value=person.dogumtarihi;
    document.getElementById("cinsiyet").checked = person.cinsiyet;
}

function formKontrol()
{
    
const x = document.forms["frm1"];
let text = "";
for (let i = 0; i < x.length ;i++) {
    if(x.elements[i].value=='')
  text += x.elements[i].id  + ' Bostur'+  "<br>";
}
let hatalar = document.getElementById("hatalar");
//hatalar.classList.add("text-danger");
hatalar.style.color="red";
; // Ele alinan html objesine style ekler
hatalar.innerHTML =text;

}