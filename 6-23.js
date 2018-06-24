const encoded = "3[a]2[bc]"

const decode = (encoded) => {
  const message = ""
  // Split up the string into individual parts
  const individual = encoded.split('')
  console.log(individual)
  // When integer is encountered, save the value as the endpoint of the loop
  individual.forEach((item) => {
    const value = parseInt(item, 10)
    const section = ""

    if(isNaN(value) === false) {
      const count = item
    } else {
      console.log(item)
      if(item === '[') {
        console.log("BRACKET")

      }
    }

  })
  // Extract the string in between the brackets
  // Concat that selected string into the decoded message

  // Repeat until end of the line
  return message
}

decode(encoded)
