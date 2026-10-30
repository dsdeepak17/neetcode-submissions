class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const topKFrequentValues = [];
        const numsHash = {}

        for(let i = 0; i < nums.length; i++) {
            if (numsHash.hasOwnProperty(nums[i])){
                numsHash[nums[i]] += 1;
            } else numsHash[nums[i]] = 1;
        }

        const sortedEntries = Object.entries(numsHash).sort((a, b) => b[1] - a[1]);
        for (let i = 0; i < k; i++) {
            topKFrequentValues.push(Number(sortedEntries[i][0]));
        }
        return topKFrequentValues;
    }
}
