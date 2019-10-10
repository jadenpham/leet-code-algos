//converting roman numeral to numerical values
//given "IV", output 4, "VI" output 6
var romanToInt = function(s){
    //setting up dict with key of roman num w numerical values
    const dict = {"I":1, "V":5, "X":10, "L":50, "C":100, "D": 500, "M":1000};
    //declaring num as 0 to sum up total;
    let num = 0;
    //now loop thru string to grab each char and give it a number
    for(let i =0; i<s.length; i++){
        //declaring curr as numerical value at current position
        let curr = dict[s[i]];
        //delcaring next as num to right of curr
        let next = dict[s[i+1]];
        //setting conditional, if curr is less than next, next - curr then add it to the sum
        if(next > curr){
            num += next - curr;
            // console.log(num);
            i++;
        }
        //else, if next is equal or greater than curr, then add it to sum
        else{
            num += curr;
        }
    }
    return num;
}

console.log(romanToInt("IV"));
console.log(romanToInt("MMMMMMXXX"));
console.log(romanToInt("VIII"));
console.log(romanToInt("XXXVIII"));