function high(x){
    var words = x.split(" ");
    var theIndex = 0;
    var highWord = words[0].split('').reduce(wordsSum,0);
      for (i=1; i<=words.length-1;i++){
          var word = words[i].split('').reduce(wordsSum,0);
          if(word > highWord) 
          {
          highWord = word;
          theIndex = i;
          }
      }
      return words[theIndex];
    }
    function wordsSum(total, word){
      return total + word.charCodeAt(0)-97;
    }


    // TDD Cases
    // Test.describe("Basic tests",_=>{
    //     Test.assertEquals(high('man i need a taxi up to ubud'), 'taxi');
    //     Test.assertEquals(high('what time are we climbing up the volcano'), 'volcano'); 
    //     Test.assertEquals(high('take me to semynak'), 'semynak'); 
    //     Test.assertEquals(high('massage yes massage yes massage'), 'massage'); 
    //     Test.assertEquals(high('take two bintang and a dance please'), 'bintang'); 
    //     })