// soal: https://github.com/impactbyte/code-challenges/tree/master/JavaScript%20Dasar/01-data-type
// 01-check-string-blank-or-not
function is_Blank(str) {
  if(str == 0) {
    return ('TRUE');
  } else {
    return ('FALSE');
  }
}

console.log(is_Blank(''));

// 02-string-from-number-range
function truncate_string(str, num) {
  return (str.substr(0, num));
}

console.log(truncate_string('Terra Skilvul', 5));

// 03-first-name-only
function fisrtNameOnly(str) {
  let arr = str.split(" ");

  if(arr.length > 1) {
    return (arr[0] + " " + arr[1][0] + ".");
  } else {
    return str;
  }
}

console.log(fisrtNameOnly('Nazhwa Ameera'));

// 04-capitalize-phrase
function capitalize(str) {
  let new_str = str.replace(str[0], str[0].toUpperCase());

  return new_str;
}

console.log(capitalize('aaaaaaaaaa hsgdhsdhg'));

// 05-text-truncate
function text_truncate(str, length = 100, ending = "...") {
  if(str.length > length) {
    let new_str = str.substr(0, length);
    new_str = new_str.concat(ending);

    return new_str;
  }

  return str;
}

console.log(text_truncate("HALOOOOOOOOOOOOOOOO", 5, '!!'));

// 01-random-integer
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

function rand(min, max) {
  if (Number.isNaN(Number(min)) && Number.isNaN(Number(max))) {    
    return 0;
  } else if (Number.isNaN(Number(max))){
    max = min;
    min = 0;

    return random(min, max);
  } else if (min > max) {
    let temp = min;
    min = max;
    max = temp;

    return random(min, max);
  } else {
    return random(min, max);
  }
}

console.log(rand(6, 2));

// 02-choose-your-decimal
function chooseDecimals(n, d) {
  return n.toFixed(d);
}

console.log(chooseDecimals(2100, 2));

// 03-is-it-numeric
function isItNumeric(str) {
	if(typeof str == 'number') {
		return "TRUE";
	}
	if(typeof str == 'string') {
		if(!isNaN(str) && str != 0) {
			return "TRUE";
		}
		else {
			return "FALSE";
		}
	}
	else {
		return "FALSE";
	}
}

console.log(isItNumeric(-200));
console.log(isItNumeric(1.20));
console.log(isItNumeric(' '));
console.log(isItNumeric('12'));
console.log(isItNumeric('abcd'));
console.log(isItNumeric(12));

// 04-make-integer-round-up
function roundUpToFive(num) {
	return (Math.ceil(num / 5) * 5);
}

console.log(roundUpToFive(32));
console.log(roundUpToFive(137));
console.log(roundUpToFive(142));
