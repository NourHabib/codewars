function isInteresting(number, awesomePhrases) {
    let state = false;
    if(number>99){
      state = isZeroNum(number) || isSameNum(number) || isSincrement(number) || isSdecrement(number) || isPalindrome(number) || isPartof(number,awesomePhrases);
    } 
    if(state){
        return 2;
    }else{
       if(number>97){
          let subNum = [number+1,number+2, number-1,number-2];
          let temp = subNum.filter(e=>(isZeroNum(e) || isSameNum(e) || isSincrement(e) || isSdecrement(e) || isPalindrome(e) || isPartof(e,awesomePhrases)));
          if(temp.length){
            return 1;
          }
        }
      }
    
    return 0
    
}
function isZeroNum(num){
    while(num>10){
        num /=10;
    }
    return Number.isInteger(num);
}
function isSameNum(num){
    num = num.toString().split('');
    return num.every(e => e == num[0])
}
function isSincrement(num){
    let pattern = ['1','2','3','4','5','6','7','8','9','0'];
    num = num.toString().split('');
    let state = true;
    let startIndex = pattern.indexOf(num[0]);    
    for(let i = 0; i < num.length; i++){       
        if(num[i] === pattern[startIndex]){
        startIndex++;
        }else{
        state=false;
        }
    }
    return state;
}
function isSdecrement(num){
    let pattern = ['9','8','7','6','5','4','3','2','1','0'];
    num = num.toString().split('');
    let state = true;
    let startIndex = pattern.indexOf(num[0]);    7
    for(let i = 0; i < num.length; i++){       
        if(num[i] === pattern[startIndex]){
        startIndex++;
        }else{
        state=false;
        }
    }
    return state;
}
function isPalindrome(num){
    let state = true;
    num = num.toString().split('');
    let j = num.length-1;
    for(let i= 0 ; i< Math.floor(num.length/2);i++){
        if(num[i]===num[j]){
        j--;
        }else{
        state= false;
        }
    }

    return state;
}
function isPartof(num, arr){
    return arr.indexOf(num)>-1
}


// TDD Cases
// See Test Cases in the Codewars site