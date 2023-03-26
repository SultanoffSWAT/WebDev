def front_back(str):
  new_str = ''
  for x in range(len(str)):
    if x == 0:
      new_str += str[len(str)-1]
    elif x == len(str)-1:
      new_str += str[0]
    else:
      new_str += str[x]
  return new_str