//Elimizde string olarak duran text uzerinde obje olarak lastname yada firstname
// propertylerine ulasamayiz. O nedenle bunun JavaScript objelerine cevrilemesi gerekir.

let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
console.log("Elimizdeki Text :"+text);
// data icerisinde artik json objeleri vardir.
let data = JSON.parse(text);
console.log("Parse edilen Text :"+data);
console.log("Parse edilen Text :"+data.employees[1].firstName);
console.log("Parse edilen Text :"+data.employees[1].lastName);

// data icerisindeki javascript objelerini tekrar json'a cevirmek icin 
let jsonData = JSON.stringify(data);
console.log("Json'a cevrilen Text :"+jsonData);
