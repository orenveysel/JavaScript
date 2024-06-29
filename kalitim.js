class kisi{

    constructor(ad,soyad,cinsiyet)
    {
        this.ad=ad;
        this.soyad=soyad;
        this.cinsiyet=cinsiyet;
    }
    fullName(){
        return this.ad +' ' + this.soyad;
    }
}
// kisi class'indan inherit alinmasi
class personel extends kisi
{
    constructor(maas,departman,tcNo){
        super('ali','Kaya','erkek') // Base class'in cagrildigi yer
        this.maas=maas;
        this.departman=departman;
        this._tcNo = tcNo;
    }
   get TCNO() {
        if(this._tcNo.length==11)
           return this._tcNo;//.substr(this._tcNo.length-3) 
        else 
          return "Deger Atanmamis";
    }
  set  TCNO(value){
        if(value !=undefined && value.length==11){
            this._tcNo=value;
        }
    }
}

const ali = new personel(30000,"It","12311");
console.log(ali);
console.log(ali.fullName());



// getter nad Setter Metodlari

class Car {
    constructor(brand) {
      this.carname = brand;
    }
    get cnam() {
      return this.carname;
    }
    set cnam(x) {
        if(x.length>=3)
           this.carname = x;
    }
  }
  


  const myCar = new Car("Ford");
  myCar.cnam="su";
  console.log(myCar.carname);
  console.log(myCar.cnam);
  ali.TCNO="123123";
  console.log(ali.TCNO);