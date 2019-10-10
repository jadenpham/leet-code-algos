//Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

// var removeDup = function(arr){
//     //taking in a sorted arr, remove dup and return new length
//     //loop thru first time, compare i to the rest of number
//     if(arr.length <=1){
//         return 0;
//     }
//     let i = 0;
//     while(i<arr.length-1)
//     {
//         //setting first as the num to compare against
//         let first = arr[i];
//         //setting j as numbers right of i
//         let j = i+1;
//         i++;
//         //looping thru second time
//         while(j<arr.length)
//         {
//             //setting conditional, if num is equal to first then remove
//             if(first === arr[j]){
//                let removed = arr.splice(j, 1);
//             }
//             j++;
//         }
//     }
//     console.log(arr)
//     return arr.length;
// }

//youtube solution
var removeDup = function(nums){
    //since nums[0] is always unique, start at 1
    let index = 1;
    //loop thru to compare
    for(let i =0; i<nums.length-1; i++){
        //if number to the right is not equal
        if(nums[i] != nums[i+1]){
            nums[index++] = nums[i+1];
            // index++;
        }
        console.log(i,nums);
    }
    return index;
}
console.log(removeDup([0,0,1,1,1,2,2,3,3,4]))
// console.log(removeDup[1,1,2,2,3,4,4]);