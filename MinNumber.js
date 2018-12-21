function removeSmallest(numbers) {
      var theIndex = 0;
      for(i = 1; i <= numbers.length-1; i++){
         if(numbers[i]<numbers[theIndex]) theIndex = i;
      }
      var theNewNumbers = numbers.filter( (item,index) => index != theIndex );
      return theNewNumbers;
    }



// TDD Cases/
// Test.assertSimilar(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]");
// Test.assertSimilar(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]");
// Test.assertSimilar(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]");
// Test.assertSimilar(removeSmallest([]), [], "Wrong result for []");