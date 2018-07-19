#!/bin/python

import math
import os
import random
import re
import sys

# Complete the staircase function below.
def staircase(n):
    level = "#"
    for current in range(n):
        if current == 0:
            print add_space(n) + level
            n -= 1
        else:
            level = level + "#"
            print add_space(n) + level
            n -= 1

def add_space(n):
    space = ""
    for spots in range(n - 1):
        space = space + " "
    return space

if __name__ == '__main__':
    n = int(raw_input())

    staircase(n)
