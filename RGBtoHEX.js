function rgb(r, g, b){
    function checkLenght(item){
      if (item.length % 2) {
        item = '0' + item;
      }
      return item;
    }  
    function checkValue(item){
      if(item>255) item = 255;
      if(item<0) item = 0;
      return item;
    }
    r = checkValue(r); r = r.toString(16); r = checkLenght(r);
    g = checkValue(g); g = g.toString(16); g = checkLenght(g);
    b = checkValue(b); b = b.toString(16); b = checkLenght(b);
    return (r+g+b).toUpperCase();
  }


//   TDD Cases
//   function check(values, expected){
//     var actual = rgb.apply(null, values)
//     Test.expect(actual == expected, "Expected rgb(" + values + ") to return '" + expected + "' but instead got '" + actual + "'");
//   }
  
//   check([0, 0, 0], '000000')
//   check([0, 0, -20], '000000')
//   check([300,255,255], 'FFFFFF')
//   check([173,255,47], 'ADFF2F')