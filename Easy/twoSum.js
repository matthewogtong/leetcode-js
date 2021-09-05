/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/

// SOLUTION 1

function twoSum(nums, target) {
    
    let obj = {}
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] in obj) {
            return [obj[nums[i]], i]
        } else {
            obj[target - nums[i]] = i
        }
    }
    
    return []
}

/*
Runtime: 72 ms, faster than 96.01% of JavaScript online submissions for Two Sum.
Memory Usage: 40.4 MB, less than 19.11% of JavaScript online submissions for Two Sum.
*/

// SOLUTION 2

function twoSum(nums, target) {

    let obj = {}

    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]] >= 0) {
            return [obj[nums[i]], i]
        } else {
            obj[target - nums[i]] = i
        }
    }
}

/*
Runtime: 72 ms, faster than 96.01% of JavaScript online submissions for Two Sum.
Memory Usage: 40.4 MB, less than 21.39% of JavaScript online submissions for Two Sum.
*/

// SOLUTION 3
var twoSum = function(nums, target) {
    var map = new Map();
  
    for(var i = 0; i<nums.length; i++) {
        var num = nums[i];
        if(map.get(num) === undefined) map.set(target-num, i);
        else return [map.get(num), i];
    }
  };