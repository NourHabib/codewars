function sortArray(array) {
    for(let i=0; i <array.length-1; i++){
      if(array[i]%2!=0){
        for(let j=i; j<array.length; j++){
          if(array[j]%2!=0 && array[j] < array[i]){
              let temp = array[i];
              array[i] = array[j];
              array[j] = temp;
          } 
        }
  
      }
    }
  return array;
}

// TDD Cases
// Test.assertSimilar(sortArray([5, 3, 2, 8, 1, 4, 11]), [1, 3, 2, 8, 5, 4, 11])
// Test.assertSimilar(sortArray([2, 22, 37, 11, 4, 1, 5, 0]), [2, 22, 1, 5, 4, 11, 37, 0])
// Test.assertSimilar(sortArray([1, 111, 11, 11, 2, 1, 5, 0]),[1, 1, 5, 11, 2, 11, 111, 0])
// Test.assertSimilar(sortArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),[1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
// Test.assertSimilar(sortArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),[0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
// Test.assertSimilar(sortArray([0, 1, 2, 3, 4, 9, 8, 7, 6, 5]),[0, 1, 2, 3, 4, 5, 8, 7, 6, 9])