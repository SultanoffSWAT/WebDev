def missing_char(str, n):
  new_str = ''
  for x in range(len(str)):
    if x != n:
      new_str += str[x]
  return new_str