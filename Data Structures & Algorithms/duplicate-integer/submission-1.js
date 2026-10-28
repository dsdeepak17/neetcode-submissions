class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const deDupObj = [];
        for (let i=0; i<= nums.length; i++){
            if (deDupObj.includes(nums[i])) {
                return true;
            } else deDupObj.push(nums[i])
        }
    return false;
    }
}
