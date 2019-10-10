// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//brute force way 
// var twoSum = function(nums, target) {
//     //need to iterate thru nums the first time w i, i should end @ length-1
//     for(let i =0; i<nums.length-1; i++){
//         //iterate thru nums 2nd time w j=i+1, should end @length to cover last number i didn't
//         for(let j= i+1; j<nums.length; j++ ){
//             //set conditional if two nums = to target return the array with the indices
//             if(nums[i] + nums[j] === target){
//                 return [i, j];
//             }
//         }
//     }
// };

//more efficient way
var twoSum = function(nums, target){
    //initializing a dictionary
    var dict = new Map;
    //loop thru nums, put each in a dictionary
    for(let i=0; i<nums.length; i++){
        let leftover = target -nums[i];
        if(dict.has(leftover)){
            return [dict.get(leftover),i]
        }
        dict.set(nums[i], i);
        //if not in dict, add it to dict
        // if(!(i in dict)){
        //     //set the key to the value
        //     dict[i]=nums[i];
        //     // console.log(dict);
        // }
        //now have the dctionary with the values inside, if i + dict[i+1] = target then return
        
        // for(var key in dict){
        //     if(nums[i]+dict[key]===target){
        //         return[key,i];
        //     }
        // }
    }
};

console.log(twoSum([2,7,11,15], 9));

