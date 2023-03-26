def xyz_there(str):
  a = -1
  while True:
    a = str.find('xyz', a + 1)
    if a == -1:
      break
    if a == 0 or str[a-1] != '.':
      return True
  return False