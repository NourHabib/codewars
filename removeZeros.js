function removeZeros(array) {
    // Sort "array" so that all elements with the value of zero are moved to the
    // end of the array, while the other elements maintain order.
    // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
    // Zero elements also maintain order in which they occurred.
    // [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]
    
    // Do not use any temporary arrays or objects. Additionally, you're not able
    // to use any Array or Object prototype methods such as .shift(), .push(), etc
    
    // the correctly sorted array should be returned.
    // #1
    // array.filter(e => e > 0).concat(array.filter(e => e == 0));
    // #2
        let index = 0, zerosArr = [], zindex = 0;
          for(let i = 0; i < array.length; i++){
              if(array[i]===0 || array[i] ==="0"){
                zerosArr[zindex++] = array[i];
              }else{
                  array[index++] = array[i];
              }
          }
          zindex--;
          for (let i = zindex; i >= 0; i--){ 
              array[array.length-i-1] = zerosArr[zindex-i];      
          }
        return array;
      }

  removeZeros([ 1, null, '5', '0', '2', 0, 8, 6, null, false ]);
  [1,null,"5","2",8,6,null,false,"0",0]
  [1,null,"5","2",8,6,null,"0",0,false]
