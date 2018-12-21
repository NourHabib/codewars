var uniqueInOrder=function(iterable){
    var lastOne = null;
    var newArr = [];
    for(i=0; i< iterable.length; i++){
       if(iterable[i]!== lastOne){
          lastOne = iterable[i];
          newArr.push(iterable[i]);
        }
    }
    return newArr;
  }


//   TDD Cases
//   Test.it("should reduce duplicates", function(){
//     Test.assertSimilar(uniqueInOrder('AA'),['A']);
//     Test.assertSimilar(uniqueInOrder('AAAABBBCCDAABBB'),['A', 'B', 'C', 'D', 'A', 'B']);
//     Test.assertSimilar(uniqueInOrder('AADD'),['A','D']);
//     Test.assertSimilar(uniqueInOrder('AAD'),['A','D']);
//     Test.assertSimilar(uniqueInOrder('ADD'),['A','D']);
//   });