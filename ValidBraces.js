function validBraces(braces){
  //TODO 
  var openBraces = ['[','(','{'],
      closeBraces = [']',')','}'],
      stack = [],
      isBalanced = true;
  
  for(i=0;i<braces.length;i++){
    if(openBraces.indexOf(braces[i])>-1){
      stack.push(braces[i]);
    }
    if(closeBraces.indexOf(braces[i])>-1){
      if(!stack.length) {isBalanced = false}
      else
      {
       isBalanced = closeBraces.indexOf(braces[i]) == openBraces.indexOf(stack[stack.length-1]);
       stack.pop();
      }
      
    }
    if(!isBalanced){break};
  }
  if(stack.length>0){isBalanced = false;}
  return isBalanced;
}


// TDD Cases
// Test.assertEquals(validBraces( "()" ), true);
// Test.assertEquals(validBraces( "[]" ), true);
// Test.assertEquals(validBraces( "{}" ), true);
// Test.assertEquals(validBraces( "(){}[]" ), true);
// Test.assertEquals(validBraces( "([{}])" ), true);
// Test.assertEquals(validBraces( "(}" ), false);
// Test.assertEquals(validBraces( "[(])" ), false);
// Test.assertEquals(validBraces( "({})[({})]" ), true);
// Test.assertEquals(validBraces( "(})" ), false);
// Test.assertEquals(validBraces( "(({{[[]]}}))" ), true);
// Test.assertEquals(validBraces( "{}({})[]" ), true);
// Test.assertEquals(validBraces( ")(}{][" ), false);
// Test.assertEquals(validBraces( "())({}}{()][][" ), false);
// Test.assertEquals( validBraces( "(((({{" ), false);
// Test.assertEquals( validBraces( "}}]]))}])" ), false);