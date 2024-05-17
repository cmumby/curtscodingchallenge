var romanToInt = function (s, modify = false) {
  const symbolMap = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  const symbolArray = s.split('');

  let total = 0;

  symbolArray.map((symbol, i) => {
    let modifier = false;
    if (symbol === 'I' && symbolArray[i + 1] == 'V') {
      total += 4;
      modifier = true;
    } else if (symbol === 'I' && symbolArray[i + 1] == 'X') {
      total += 9;
      modifier = true;
    } else if (symbol === 'X' && symbolArray[i + 1] == 'L') {
      total += 40;
      modifier = true;
    } else if (symbol === 'X' && symbolArray[i + 1] == 'C') {
      total += 90;
      modifier = true;
    } else if (symbol === 'C' && symbolArray[i + 1] == 'D') {
      total += 400;
      modifier = true;
    } else if (symbol === 'C' && symbolArray[i + 1] == 'M') {
      total += 900;
      modifier = true;
    }

    if (symbol === 'V' && symbolArray[i - 1] == 'I') {
      total += 0;
      modifier = true;
    } else if (symbol === 'X' && symbolArray[i - 1] == 'I') {
      total += 0;
      modifier = true;
    } else if (symbol === 'L' && symbolArray[i - 1] == 'X') {
      total += 0;
      modifier = true;
    } else if (symbol === 'C' && symbolArray[i - 1] == 'X') {
      total += 0;
      modifier = true;
    } else if (symbol === 'D' && symbolArray[i - 1] == 'C') {
      total += 0;
      modifier = true;
    } else if (symbol === 'M' && symbolArray[i - 1] == 'C') {
      total += 0;
      modifier = true;
    }

    total += modifier === false ? symbolMap[symbol] : 0;
  });

  return total;
};

console.log({ example1: romanToInt('III'), example2: romanToInt('LVIII'), example3: romanToInt('MCMXCIV') });
