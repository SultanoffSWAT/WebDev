def parrot_trouble(talking, hour):
  return True if talking and (hour < 7 or hour > 20) else False