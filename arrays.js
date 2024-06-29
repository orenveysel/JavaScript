const gunler = ["Pazar", "Pazartesi", "Sali", "Carsamba","Persembe"];
console.log(gunler[1]);
gunler.push("Cuma"); //Dizinin sonuna ekler
console.log(gunler.toString());
gunler.pop(); // Sondan cikartir
console.log(gunler.toString());
gunler.shift(); // Dizini başındaki ilk elemani cikartir
console.log(gunler.toString());
gunler.unshift("Pazar"); // En başa ekler
console.log(gunler.toString());