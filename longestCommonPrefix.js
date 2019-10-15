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
// var LCP = function(strs){
//     let LCP = "";
//     if(strs == null || strs.length == 0){
//         return LCP;
//     }

//     let index = 0;
//     for(let char of strs[0]){
//         console.log(char);
//         for(let i =1; i<strs.length; i++){
//             if(index >= strs[i].length || char != strs)
//         }
//     }
// }

//youtube vertical method to solve problem
var longestCommonPrefix = function(strs){
    let prefix = '';
    for(let i =0; i<strs[0].length; i++){
        const character = strs[0][i];
        for(let j=0; j<strs.length; j++){
            if(strs[j][i] !== character){
                return prefix;
            } 
        }
        prefix += character;
    }
    return prefix;
}

// var longestCommonPrefix = function(strs){
//     let prefix = '';
//     if(strs.length ===0){
//         return prefix;
//     }
//     for(let i =0; i<strs[0].length;i++){
//         const character = strs[0][i]
//         for(let j=0; j<strs.length; j++){
//             if(strs[j][i] !== character) return prefix
//         }
//         prefix+= character;
//     }
//     return prefix;
// }
let array = ["flower", "flow", "flight"]
console.log(longestCommonPrefix(array));

// var longestCommonPrefix = function(arr){
//     let LCP = [];
//     //setting this to compare against
//     let common = arr[0];
//     //loop thru array first time to get each word
//     for(let i =1; i<arr.length; i++){
//         //looping thru each word to get each char
//         for(j = 0; j<common.length; j++){
//             //now if it does match w common then append it to LCP
//             if(arr[i][j] == common[j]){
//                 LCP.push(arr[i][j]);
//             }
//         }
//     }
//     console.log(LCP)

// }
// console.log(longestCommonPrefix(array));