function findEvenIndex(arr)
{
  var theIndex = -1;
  for(i = 0; i <= arr.length-1; i++){
     leftArrSum = arr.slice(0, i).reduce(sum, 0);
     rightArrSum = arr.slice(i + 1).reduce(sum, 0);
     if(leftArrSum == rightArrSum){
         theIndex = i;
         break;
     }
  }
  return theIndex;
}

function sum(a, b) {
    return a + b;
}


// TDD Cases
// Test.describe("FindEvenIndex", function() {
//     Test.it("Tests", function() {
//       Test.assertEquals(findEvenIndex([1,2,3,4,3,2,1]),3, "The array was: [1,2,3,4,3,2,1] \n");
//       Test.assertEquals(findEvenIndex([1,100,50,-51,1,1]),1, "The array was: [1,100,50,-51,1,1] \n");
//       Test.assertEquals(findEvenIndex([1,2,3,4,5,6]),-1, "The array was: [1,2,3,4,5,6] \n");
//       Test.assertEquals(findEvenIndex([20,10,30,10,10,15,35]),3, "The array was: [20,10,30,10,10,15,35] \n");
//     });
//   });