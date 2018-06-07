function power(x,n){
  if(n === 0) {
    return 1
  }
  return x * power(x, n-1)
}

// power(2, 3)

function problem2(array, start=0, arraylength) {
  const mid = array.length / 2
  const value = array[mid]

  if(value === target) {
    return value
  } else if(value < target) {
    array = array.slice(mid, array.length)
  } else if(value > target) {
    array = array.slice(0, mid)
  }

  return problem2(array, target)
}

const array = [-40, -20, -1, 1, 2 ,3 ,5, 7, 9, 12, 13]
problem2(array = , 0, array.length)
