// Given an array nums and a value val, remove all instances of that value in-place and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

// Example 1:

// Given nums = [3,2,2,3], val = 3,

// Your function should return length = 2, with the first two elements of nums being 2.

// It doesn't matter what you leave beyond the returned length.

//solution didnt work bc it wanted to return the arr w adjustments
// var removeElem = function(arr, elem){
//     //setting count to 0 to count how many elem in array that != to elem
//     let count = 0;
//     //loop thru the array to compare each elem
//     for(let i =0; i<arr.length; i ++){
//         if(arr[i]!=elem){
//             count++;
//         }
//     }
//     return count;
// }


//this solution removes the elem then return the array
// var removeElem = function(arr, elem){
//     //loop thru array
//     for(let i = 0; i<arr.length; i++){
//         //if it is equal, then push it to the back of array, pop it off
//         if(arr[i] === elem){
//             //swapping
//             let temp = arr[i];
//             arr[i] = arr[arr.length-1];
//             arr[arr.length-1] = arr[i]
//             //if the swapped number is the same, then i-- to recheck the first elem
//             i--;
//             arr.pop()
//         }
//     }
//     console.log(arr);
//     return arr.length;
// }

//another way someone else did it on leetcode
var removeElem = function(nums, val) {
    let count = 0;
     for(let i =0; i<nums.length; i++){
         if(nums[i] === val){
             count ++;
         }
         else{
             nums[i-count] = nums[i]
             console.log(nums);
         }
     }
     console.log(nums);
     return nums.length - count;
 };
console.log(removeElem([0,1,2,2,3,0,4,2], 2));