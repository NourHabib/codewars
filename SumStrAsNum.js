function sumStrings(a,b) {
    while(a>0 && a[0]==0){ a = a.slice(1); }
    while(b>0 && b[0]==0){ b = b.slice(1); }
    a = a.split('').reverse();
    b = b.split('').reverse();
    let x, y ,temp, sum = "", rest = 0;
    for(let i= 0;  a.length > b.length ? i< a.length : i< b.length ; i++){
        i>a.length-1 ? x = 0 : x = parseInt(a[i]);
        i>b.length-1 ? y = 0 : y = parseInt(b[i]);
        temp = x + y + rest;
        if(temp>9){
          rest = 1;
          temp = temp - 10;
        }else{
          rest = 0
        }
        sum = temp.toString() + sum;
    }
    if (rest ==  1) {sum = rest.toString() + sum;}
    return sum;
}


// TDD Cases
// sumStrings('712569312664357328695151392','8100824045303269669937','712577413488402631964821329');
// sumStrings('50095301248058391139327916261','81055900096023504197206408605','131151201344081895336534324866');