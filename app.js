"use strict"
//x=3; Burasi x is not defined hatasi verir. var,let yada const ile belirtilmediginden 
function Bol(a,b)
{

    return a/b;
}
function Topla(a,b)
{
    return a+b;
}

console.log(Topla(3,5));
console.log(Bol(3/0));

//JavaScript Object Defination
const kisi={
    ad:"Ali",
    soyad:"Yilmaz",
    gsm:"5422223344",
    email:"ali@gmail.com",
    adres:{
        ulke:"Tr",
        sehir:"van",
        postaKodu:"123123"
    },
    fullname : function()
    { 
        return this.ad + " " + this.soyad
    },
    adresGoster:function()
    {
        return this.adres.ulke + " " + this.adres.sehir;
    }
}
//JavaScript Object degerlerine ulasma

console.log(kisi.ad + " " + kisi.soyad);
console.log(kisi.adres.ulke + " " + kisi.adres.sehir);
console.log(kisi.adresGoster()); // parantezler kullanilmaz ise Function yazacaktir . Cagirmayacaktir
console.log(kisi.fullname());

const arac ={};
arac.marka="Volvo";
arac.model ="s80";
arac.renk="siyah";
arac.fiyat=2000000;
arac.dolarFiyati=function(){
    return this.fiyat/32.5;
}
console.log("Dolar Karsiligi:"+arac.dolarFiyati());
console.log(arac);
delete arac.renk;  // Object icerisindeki property silme
console.log(arac);
// console.log(arac);
// console.log(kisi);

const siparis = new Object();
siparis.musteri = "ABC Company";
siparis.tarih = new Date();
siparis.id=1;
// console.log(siparis["tarih"]);

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    
  }
  console.log("----------Constructer---------");
  const ali = new Person("ali","yilmaz","30","yeşil");
  console.log(ali);
  console.log(ali.firstName);
  console.log(ali.lastName);
  console.log("----------Class Kullanimi---------");
  class Personel
  {
    constructor(ad,soyad,tcno,dogumYili)
    {
        this.ad=ad;
        this.soyad=soyad;
        this.tcno = tcno;
        this.dogumYili= dogumYili;
    }
    yas(){
        let tarih = new Date();
        return tarih.getFullYear() - this.dogumYili;    
    }
  }

  const ayse = new Personel("Ayse","Kaya","12312312311",2000);
  console.log(ayse);
  console.log("Yas:"+ayse.yas());