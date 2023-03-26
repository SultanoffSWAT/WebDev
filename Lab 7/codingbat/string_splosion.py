def string_splosion(str):
  new_str = ''
  for x in range(len(str)):
    new_str += str[:x+1]
  return new_str