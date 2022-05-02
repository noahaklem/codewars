var countBits = n => {
  var bits = Array.from(n.toString(2));
  let total = 0;
  bits.forEach(n => {
    total += parseInt(n)
  })
  return total
}

countBits(1234)