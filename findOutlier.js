let array = [2, 4, 0, 100, 4, 11, 2602, 36];

function findOutlier(integers) { 
  let odd = [];
  let even = [];
  
  let isOdd = number => {
  number % 2 !== 0 ? odd.push(number) : even.push(number)
  }

  integers.forEach(num => isOdd(num))
  if (odd.length > 1) {
    return even[0]
  } else { 
    return odd[0]
  }
}



findOutlier(array)