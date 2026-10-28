class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const deDupObj = {};
        for (let i=0; i<= nums.length; i++){
            if (deDupObj[nums[i]]) {
                return true;
            } else deDupObj[nums[i]] = true;
        }
    return false;
    }
}
