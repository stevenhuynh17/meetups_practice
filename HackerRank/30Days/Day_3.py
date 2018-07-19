#!/bin/python

import math
import os
import random
import re
import sys

def check(N):
    N = int(N)
    if N % 2 is not 0:
        print "Weird"
    elif N % 2 is 0 and 2 <= N and N <= 5:
        print "Not Weird"
    elif N % 2 is 0 and 6 <= N and N <= 20:
        print "Weird"
    elif N > 20:
        print "Not Weird"

check(raw_input())


if __name__ == '__main__':
    N = int(raw_input())
