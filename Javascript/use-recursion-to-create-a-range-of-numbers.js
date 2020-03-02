function rangeOfNumbers(startNum, endNum) {

  if(startNum === endNum) {
    return [startNum];
  } else if(startNum <= endNum) {
    const test = rangeOfNumbers(startNum + 1, endNum);
    test.unshift(startNum);
    return test;
  }

};

rangeOfNumbers(2, 20);