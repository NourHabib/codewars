function middlePermutation(s) {
    //coding and coding..
    let arr = s.split('').sort();
    let result = [];
    let startIndex = Math.ceil(s.length/2);
    result.push(arr.splice(startIndex -1,1)[0]);
    if(s.length%2){
        result.push(arr.splice(startIndex - 2,1)[0]);
    }
    result = result.concat(arr.reverse()).join('');
    return result;
    
  }

//   TDD cases
// describe("Basic Tests", function(){
//     it("It should works for basic tests.", function(){
    
//     Test.assertEquals(middlePermutation("abc"),"bac")
    
//     Test.assertEquals(middlePermutation("abcd"),"bdca")
    
//     Test.assertEquals(middlePermutation("abcdx"),"cbxda")
    
//     Test.assertEquals(middlePermutation("abcdxg"),"cxgdba")
    
//     Test.assertEquals(middlePermutation("abcdxgz"),"dczxgba")
    
//     })})
