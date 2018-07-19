#!/bin/python

import math
import os
import random
import re
import sys

# Complete the miniMaxSum function below.
def miniMaxSum(arr):
    arr.sort()
    lower = arr[0:len(arr) - 1]
    upper = arr[1:len(arr)]

    smallest = reduce((lambda x, y : x + y), lower)
    largest = reduce((lambda x, y : x + y), upper)

    print smallest, largest

if __name__ == '__main__':
    arr = map(int, raw_input().rstrip().split())

    miniMaxSum(arr)
