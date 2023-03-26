def make_bricks(small, big, goal):
  a = goal // 5
  if a > big:
    a = big
  goal -= a * 5
  b = goal
  if b > small:
    b = small
  goal -= b
  return True if goal == 0 else False