def reverse3(nums):
  c = nums[0]
  nums[0] = nums[-1]
  nums[-1] = c
  return nums