var removeDuplicates = function(nums) {
  let count = 0
  let left = 0
  let right = 1
  while (left < nums.length) {
      count++
      while (nums[left] >= nums[right]) {
          right++
      }
      if (nums[right]) {
        nums[left + 1] = nums[right]
      } else {
        return { count, nums }
      }

      left++
  }
};


console.log(removeDuplicates([1, 1, 2]))
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))