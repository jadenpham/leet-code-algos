// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// var longestCommonPrefix = function(arr){
//     //setting up matching array to push matching char into
//     let matchingArr = [];
//     //looping thru array to get individual words
//     for(word of arr){
//         //looping thru each word to get each char
//         for(let i=0; i<word.length; i++){
//             //conditional, if char not in array, push
//             if(word[i] )
//         }
//     }
//     console.log(matchingArr);
// }

//youtube solution
var LCP = function(strs){
    let LCP = "";
    if(strs == null || strs.length == 0){
        return LCP;
    }

    let index = 0;
    for(let char of strs[0]){
        console.log(char);
        for(let i =1; i<strs.length; i++){
            console.log(strs[i]);
        }
    }
}
let array = ["flower", "flow", "flight"]
console.log(LCP(array));
// console.log(longestCommonPrefix(array));