var statusSet = [ "successful", "refunded", "failed"];
var paymentSet = ["cash" , "card"];
var currencySet = ["EUR","Dollar","Pound"];
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
var dataSet = [];
for(let i = 0; i < 100; i++){
    let temp = {};
    temp.date = randomDate(new Date(2018, 0, 1), new Date()).toISOString().substring(0, 10);
    temp.amount = (Math.random()*1000+50).toFixed(2).toString();
    temp.status = statusSet[Math.floor(Math.random()*3)];
    temp.currency = currencySet[Math.floor(Math.random()*3)];
    temp.paymentMethod = paymentSet[Math.floor(Math.random()*2)];
    dataSet.push(temp);  
}
dataSet.sort(function(a,b){
    aTemp = Number(new Date(a.date));
    bTemp = Number(new Date(b.date));
    if(aTemp > bTemp) return 1;
    if(aTemp < bTemp) return -1;
    return 0;
});
console.log(dataSet);


// Example
// {
//     "date": "2019-12-12",
//     "amount": "1000.00",
//     "status": "successful",
//     "currency": "EUR",
//     "paymentMethod": "card"
//  }