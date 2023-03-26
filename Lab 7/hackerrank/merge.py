def merge_the_tools(string, k):
    steps = len(string)//k
    for pos in range(steps):
        l = []
        new_str = ""
        sub = string[k*pos:k*(pos+1)]
        for char in sub:
            if (char not in l):
                new_str += char
                l.append(char)
        print(new_str)

if __name__ == '__main__':
    string, k = input(), int(input())
    merge_the_tools(string, k)