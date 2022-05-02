let narcissistic = value => { 
  let n = Array.from(String(value), Number);
  let nLength = n.length;
  let initial = 0;
  let sum = n.reduce((previous, current) => { return previous + (current ** nLength) }, initial);
  return sum === value ? true : false;
}



narcissistic(7)