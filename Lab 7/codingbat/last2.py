def last2(str):
  sub = str[-2:]
  cnt = 0
  for x in range(len(str) - 2):
    if str[x] == sub[0] and str[x+1] == sub[1]:
      cnt += 1
  return cnt