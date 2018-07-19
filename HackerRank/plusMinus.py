#!/bin/python

import math
import os
import random
import re
import sys

# Complete the plusMinus function below.
def plusMinus(arr):
    total = len(arr)
    pos = 0
    neg = 0
    zero = 0

    for val in arr:
        if val > 0:
            pos += 1
        elif val < 0:
            neg += 1
        elif val == 0:
            zero += 1

    pos = float(pos) / total
    neg = float(neg) / total
    zero = float(zero) / total

    print ("%.6f" % pos)
    print ("%.6f" % neg)
    print ("%.6f" % zero)

if __name__ == '__main__':
    n = int(raw_input())

    arr = map(int, raw_input().rstrip().split())

    plusMinus(arr)
