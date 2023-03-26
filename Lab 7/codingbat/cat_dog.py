def cat_dog(str):
  a = -1
  cat = 0
  dog = 0
  while True:
    a = str.find('cat', a + 1)
    if a == -1:
      break
    cat += 1
  while True:
    a = str.find('dog', a + 1)
    if a == -1:
      break
    dog += 1
  return True if cat == dog else False