// Check whether a given string can become a palindrome.

function checkPalindrome(str) {
  let obj = {}

  for(let i in str) {
    console.log(str[i])
    if(!obj[str[i]]) {
      obj[str[i]] = 1
    } else {
      obj[str[i]] += 1
    }
  }

  console.log(obj)
}

checkPalindrome("ABCBA")
