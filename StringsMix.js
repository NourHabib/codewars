function mix(s1, s2) {
    var strArr1 = s1.replace(/\s/g, '').split('').filter(e=>!Number.isInteger(e)).filter(e=>e!=e.toUpperCase());
    var strArr2 = s2.replace(/\s/g, '').split('').filter(e=>!Number.isInteger(e)).filter(e=>e!=e.toUpperCase());
    var mix = "";
    var strChars = [];
    strArr1.map(function(char){
        var isExist = false;
        strChars.filter(e=>e.char === char?(e.count1++, isExist =true):e.count1);         
        if(!isExist){strChars.push({"char":char, "count1" : 1, "count2": 0})};        
    });
    strArr2.map(function(char){
        var isExist = false;
        strChars.filter(e=>e.char === char?(e.count2++, isExist =true):e.count2);         
        if(!isExist){strChars.push({"char":char, "count1" : 0, "count2": 1})};    
    });
    strChars =  strChars.filter(e=>((e.count1>1)||(e.count2>1)));
    var resultArr = [];
    strChars.map(function(item){
        let bigStr = 0;
        let iterateNumber = 0;
        let char = "";
        if(item.count1>item.count2){bigStr = 1;iterateNumber = item.count1;}else
        if(item.count1<item.count2) { bigStr = 2;iterateNumber = item.count2;} else
        { bigStr = "=";iterateNumber = item.count1;}
        for(let i=0;i<iterateNumber;i++){
            char+=item.char;
        }
        resultArr.push({"char": char, "biggest": bigStr, "numberIterate" : iterateNumber });
    })
    var result = "";
    if(resultArr.length){
    resultArr.sort(function(a,b){
        if (a.numberIterate < b.numberIterate) return 1;
        if (a.numberIterate > b.numberIterate) return -1;
        if (a.numberIterate == b.numberIterate){
            if((a.biggest == "=" && b.biggest != "=")) return 1;
            if((a.biggest != "=" && b.biggest == "=")) return -1;
              if (a.biggest < b.biggest) return -1;
              if (a.biggest > b.biggest) return 1;
              if(a.biggest == b.biggest){
                  if(a.char > b.char){return 1};
                  if(a.char < b.char){return -1};
              }
          }
        return 0;
    });
    for(let i=0;i<resultArr.length-1;i++){
        result += resultArr[i].biggest + ":" + resultArr[i].char + "/";
    }
    result += resultArr[resultArr.length-1].biggest + ":" + resultArr[resultArr.length-1].char;
    }
return result;
}

// TDD Cases
// Test.describe("Mix",function() {
//     Test.it("Basic tests",function() {    
//         Test.assertEquals(mix("Are they here", "yes, they are here"), "2:eeeee/2:yy/=:hh/=:rr")
//         Test.assertEquals(mix("looping is fun but dangerous", "less dangerous than coding"), "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg")
//         Test.assertEquals(mix(" In many languages", " there's a pair of functions"), "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt")
//         Test.assertEquals(mix("Lords of the Fallen", "gamekult"), "1:ee/1:ll/1:oo")
//         Test.assertEquals(mix("codewars", "codewars"), "")
//         Test.assertEquals(mix("A generation must confront the looming ", "codewarrs"), "1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr")
//     })})