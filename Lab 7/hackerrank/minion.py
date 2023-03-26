def minion_game(string):
    S = 0
    K = 0
    for x in range(len(string)):
        if string[x] in ['A', 'E', 'I', 'O', 'U']:
            K += len(string) - x
        else:
            S += len(string) - x
    print("Stuart " + str(S) if S > K else "Kevin " + str(K) if K > S else "Draw")

if __name__ == '__main__':
    s = input()
    minion_game(s)