function VigenèreCipher(key, abc) {
  this.encode = function (str) {
    let fullKey = getFullkey(str);
    let result = '';
    for(let i = 0; i < str.length; i++){
        if(abc.indexOf(str[i])>-1){
          let temp = (abc.indexOf(str[i]) + abc.indexOf(fullKey[i])) % (abc.length);
          result+= abc[temp];
        }else{
          result+= str[i];
        }
    }
    return result;
  };
  this.decode = function (str) {
    let fullkey = getFullkey(str);
    let result = '';
    for(let i = 0; i < str.length; i++){
        if(abc.indexOf(str[i])>-1){
        let temp =  (abc.length + abc.indexOf(str[i]) - abc.indexOf(fullkey[i]))% abc.length;
         result+= abc[temp];
        }else{
          result+= str[i];
        }
    }
    return result;
  };
  getFullkey = function(str){
     let fullkey = [], i = 0, j = 0;
     while(fullkey.length < str.length){
        fullkey[j++] = key[i];
         i = (i + 1)% (key.length);
     }
     return fullkey;
  };
}


//var abc, key;
//abc = "abcdefghijklmnopqrstuvwxyz";
//key = "password";
//c = new VigenèreCipher(key, abc);

//Test.assertEquals(c.encode('codewars'), 'rovwsoiv');
//Test.assertEquals(c.decode('rovwsoiv'), 'codewars');

//Test.assertEquals(c.encode('waffles'), 'laxxhsj');
//Test.assertEquals(c.decode('laxxhsj'), 'waffles');

//Test.assertEquals(c.encode('CODEWARS'), 'CODEWARS');
//Test.assertEquals(c.decode('CODEWARS'), 'CODEWARS');
