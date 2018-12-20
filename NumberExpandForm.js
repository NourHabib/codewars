function expandedForm(num) {
    var theNumbers = num.toString();
    var result = [];
    for(let i=0;i<theNumbers.length;i++){
        let temp = theNumbers[i];
        if(temp == 0){continue;}
        for(var j=theNumbers.length-1;j>i;j--){
          temp+='0';
        }
        result.push(temp);
    }
  
    return result.join(' + ');
}


// TDD Cases
// describe("Basic Tests", function(){

//     it("Basic Tests", function(){
//       Test.assertEquals(expandedForm(2), '2');
//       Test.assertEquals(expandedForm(12), '10 + 2');
//       Test.assertEquals(expandedForm(42), '40 + 2');
//       Test.assertEquals(expandedForm(4982342), '4000000 + 900000 + 80000 + 2000 + 300 + 40 + 2');
//     });
    
//   });