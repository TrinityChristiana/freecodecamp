function pairwise(arr, arg) {
  let sum = 0;
  let used = [];
  for (let i = 0; i < arr.length; i++) {
    const num1 = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      const num2 = arr[j];
      if (i !== j) {
        if (num1 + num2 === arg && !used.includes(i) && !used.includes(j)) {
          used.push(i);
          used.push(j);
          sum = sum + i + j;
        }
      }
    }
  }

  return sum;
}

pairwise([0, 0, 0, 0, 1, 1], 1);
