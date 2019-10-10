//need to reverse a 32 bit int

function reverse(x){
    // let rev = 0;
    // let pop;
    // let isneg = false;
    // if(x < 0){
    //     isneg = true;
    // }
    // if(isneg === true){
    //     x *= -1;
    //     pop = x % 10;
    //     x = Math.floor(x/10);

    // }
    let rev = 0;
    // let pop;
    if(x < 0){
        x *= -1;
        while(x!=0){
            pop = x % 10;
            x = Math.floor(x/=10);
            if(rev > Number.MAX_VALUE/10 || (rev == Number.MAX_VALUE/10 && pop > 7)) return 0;
            if( rev < Number.MIN_VALUE/10 || (rev == Number.MIN_VALUE/10 && pop < -8)) return 0;
            rev = rev * 10 + pop;
        }   
        return rev * -1;
    }
    while(x!=0){
        pop = x % 10;
        x = Math.floor(x/=10);
        rev = rev * 10 + pop;
    }   
    // console.log(Number.MAX_VALUE);
    return rev;
}

console.log(reverse(321))