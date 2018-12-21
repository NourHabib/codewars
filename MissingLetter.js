function findMissingLetter(array)
{  
  var theMissing = null;
  for(i=1;i<array.length;i++){
    temp = array[i].charCodeAt(0) - array[i-1].charCodeAt(0);
    if(temp!=1){
      theMissing = String.fromCharCode(array[i-1].charCodeAt(0)+1);
    }
  }
  return theMissing ;
}

// TDD Cases
// it("exampleTests", function(){
//     Test.assertEquals(findMissingLetter(['a','b','c','d','f']), 'e');
//     Test.assertEquals(findMissingLetter(['O','Q','R','S']), 'P');
//   });