def pos_neg(a, b, negative):
  return True if (a > 0 and b < 0 and not negative) or (a < 0 and b > 0 and not negative) or (a < 0 and b < 0 and negative) else False