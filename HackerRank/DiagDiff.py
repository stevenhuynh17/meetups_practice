#!/bin/python

import math
import os
import random
import re
import sys

# Complete the diagonalDifference function below.
def diagonalDifference(arr):
    up_diagnol = 0
    down_diagnol = 0

    pos_slope = len(arr) - 1
    neg_slope = 0

    for section in arr:
        up_diagnol += section[pos_slope]
        down_diagnol += section[neg_slope]
        pos_slope -= 1
        neg_slope += 1

    return int(math.fabs(up_diagnol - down_diagnol))

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(raw_input())

    arr = []

    for _ in xrange(n):
        arr.append(map(int, raw_input().rstrip().split()))

    result = diagonalDifference(arr)

    fptr.write(str(result) + '\n')

    fptr.close()
