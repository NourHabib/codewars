function narcissistic(value) {
    values = (""+value).split("").map(Number);
    var sum = 0;  
    for(i=0;i<values.length;i++){
      sum += Math.pow(values[i],values.length);
    }
    return sum == value;
}


// TDD Cases

// describe( "Narcissistic Function", function() {
//     it("should find small numbers are all narcissistic", function() {
//         Test.assertEquals(narcissistic( 1 ), true, "1 is narcissistic");
//         Test.assertEquals(narcissistic( 5 ), true, "5 is narcissistic");
//         Test.assertEquals(narcissistic( 7 ), true, "7 is narcissistic");
//       });
      
//       it("should find these numbers are narcissistic", function() {
//         Test.assertEquals(narcissistic( 153 ), true, "153 is narcissistic");
//         Test.assertEquals(narcissistic( 370 ), true, "370 is narcissistic");
//         Test.assertEquals(narcissistic( 371 ), true, "371 is narcissistic");
//         Test.assertEquals(narcissistic( 1634 ), true, "1634 is narcissistic");
//       });
// });