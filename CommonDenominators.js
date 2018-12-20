function convertFrac(lst){
    var result = "";
    var LCM = getLcmLst(lst);
    for(let i = 0; i<lst.length;i++){
        let num = LCM/lst[i][1];
        result += "(" + lst[i][0]*num + "," + lst[i][1]*num +")";
    }
    return result;
}
function getGCD(a, b) {
    if (!b) {
    return a;
    }
    return getGCD(b, a % b);
}
function getLCM(a,b){
return a*b/getGCD(a,b);
}
function getLcmLst(lst){
let lcm = 1;
for(let i = 0; i<lst.length;i++){
    lcm = getLCM(lcm,lst[i][1]);
}
return lcm;
}

// TDD Cases
// var lst = [ [1, 2], [1, 3], [1, 4] ];
// Test.assertEquals(convertFrac(lst), "(6,12)(4,12)(3,12)");

// lst = [ [69, 130], [87, 1310], [3, 4] ];
// Test.assertEquals(convertFrac(lst), "(18078,34060)(2262,34060)(25545,34060)");

// lst = [  ];
// Test.assertEquals(convertFrac(lst), "");
	
// lst = [ [77, 130], [84, 131], [3, 4] ];
// Test.assertEquals(convertFrac(lst), "(20174,34060)(21840,34060)(25545,34060)");

// lst = [ [6, 13], [187, 1310], [31, 41] ];
// Test.assertEquals(convertFrac(lst), "(322260,698230)(99671,698230)(527930,698230)");
 
// lst = [ [8, 15], [7, 111], [4, 25] ];
// Test.assertEquals(convertFrac(lst), "(1480,2775)(175,2775)(444,2775)");

// lst = [ [1, 100], [3, 1000], [1, 2500], [1, 20000] ];
// Test.assertEquals(convertFrac(lst), "(200,20000)(60,20000)(8,20000)(1,20000)");

// lst = [ [1, 1], [3, 1], [4, 1], [5, 1] ];
// Test.assertEquals(convertFrac(lst), "(1,1)(3,1)(4,1)(5,1)");