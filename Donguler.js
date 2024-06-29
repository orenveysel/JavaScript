for (let index = 0; index < 10; index++) {
   console.log(index);
    
}
let i =0;
console.log("-------- While-----------");
while ( i < 10) {
    console.log(i);
    i++;
}
do {
    console.log(i);
    i++;  
} while (i<10);
const person = {fname:"John", lname:"Doe", age:25};
console.log("-------- For In-----------");
// Objenin icerisindeki property'lere bakar
let text = "";
for (let x in person) {
  console.log(person[x]); 
}
console.log("-----For in Array-");
const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
 console.log(numbers[x]);
}

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
const kisi2={
    ad:"Veli",
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
const kisiler = [kisi,kisi2];
console.log("------- For Of Kullanimi");
for (const kisi of kisiler) {
    console.log(kisi.fullname());
}