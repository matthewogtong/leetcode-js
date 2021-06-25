/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
Example 4:

Input: x = 0
Output: 0
 

Constraints:

-231 <= x <= 231 - 1
*/

function reverse(x) {
    
    isNegative = false
    spliceCount = 0

    if (Math.sign(x) === -1) {
        isNegative = true
        x = x * -1
    }
    
    x = x.toString().split('')
    
    x = x.reverse()

    for (let i = 0; i < x.length; i++) {
        if (parseInt(x[i]) === 0 && parseInt(x[i+1]) === 0) {
            spliceCount++
        } else if (parseInt(x[i]) === 0) {
            spliceCount++
            break
        } else {
            break
        }
    }

    if (spliceCount !== 0) {
        x.splice(0, spliceCount)
        x = x.join('')
    } else {
        x = x.join('')
    }
    
    if (isNegative) {
        x = x * -1 
    }

    if (x > 2147483648 || x < -2147483648) {
        return 0
    } else {
        return x
    }
}

console.log(reverse(102))

/* Runtime: 88 ms, faster than 91.13% of JavaScript online submissions for Reverse Integer.
Memory Usage: 40.7 MB, less than 14.98% of JavaScript online submissions for Reverse Integer.
*/

