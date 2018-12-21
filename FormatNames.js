function list(names){
    var theString = '';
    if(names.length){
    theString = names[0].name;
    }
    if(names.length>1){
    for( i = 1; i< names.length - 1; i++){
      theString += ", " + names[i].name;
    }
    theString += " & " + names[names.length-1].name;
    }
    return theString;
  }


//   function list(names) {
//     var xs = names.map(p => p.name)
//     var x = xs.pop()
//     return xs.length ? xs.join(", ") + " & " + x : x || ""
//   }


// TDD Cases
// Test.describe("Basic tests",function(){
//     Test.assertEquals(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]), 'Bart, Lisa, Maggie, Homer & Marge',
//     "Must work with many names")
//     Test.assertEquals(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]), 'Bart, Lisa & Maggie',
//     "Must work with many names")
//     Test.assertEquals(list([{name: 'Bart'},{name: 'Lisa'}]), 'Bart & Lisa', 
//     "Must work with two names")
//     Test.assertEquals(list([{name: 'Bart'}]), 'Bart', "Wrong output for a single name")
//     Test.assertEquals(list([]), '', "Must work with no names")
//     })