def array_front9(nums):
  n = 4
  if len(nums) < 4:
    n = len(nums)
  for x in range(n):
    if nums[x] == 9:
      return True
  return False