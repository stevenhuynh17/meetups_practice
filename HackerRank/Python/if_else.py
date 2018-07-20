#!/bin/python
def check(N):
    N = int(N)
    if N % 2 is not 0:
        print "Weird"
    else:
        if 2 <= N and N <= 5:
            print "Not Weird"
        elif 6 <= N and N <= 20:
            print "Weird"
        elif N > 20:
            print "Not Weird"

check(raw_input())
# Enter your code here. Read input from STDIN. Print output to STDOUT
N = int(raw_input())
