def string_match(a, b):
  n = len(a) if len(a) < len(b) else len(b)
  cnt = 0
  for x in range(n-1):
    if a[x] == b[x] and a[x+1] == b[x+1]:
      cnt += 1
  return cnt