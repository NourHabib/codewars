function productFib(prod){
    var n = Math.floor(Math.log(prod*Math.sqrt(5))/Math.log(1.618));
    var match = false;
    var firstNumber, scondNumber = 0;
    for(i=n-1; i>2;i--){
     var fibFirst = fib(i);
     var fibSecond = fib(i-1);
     var temp = fibFirst*fibSecond;
      if(prod == temp){
        match = true;
        firstNumber = fibSecond;
        scondNumber = fibFirst;
        break;
      }
      if( temp < prod ){
        match = false;
        firstNumber = fibFirst;
        scondNumber = fib(i+1);
        break;
      }
    }
    return [firstNumber , scondNumber , match] 
 }
 // function fib(n){
 //   if(n==1 || n==2) return 1;
 //   return fib(n-1)+fib(n-2);
 // }
 function fib(num){
   var a = 1, b = 0, temp;
 
   while (num >= 0){
     temp = a;
     a = a + b;
     b = temp;
     num--;
   }
 
   return b;
 }



//  TDD Cases
//  Test.describe("Basic tests (user examples)", function(){
//     Test.assertSimilar(productFib(4895), [55, 89, true])
//     Test.assertSimilar(productFib(5895), [89, 144, false])
//     Test.assertSimilar(productFib(74049690), [6765, 10946, true])
//     Test.assertSimilar(productFib(84049690), [10946, 17711, false])
//     Test.assertSimilar(productFib(193864606), [10946, 17711, true])
//     Test.assertSimilar(productFib(447577), [610, 987, false])
//     Test.assertSimilar(productFib(602070), [610, 987, true])
//   });