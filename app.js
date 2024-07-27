// Berilgan stringdagi yagona (takrorlanmaydigan) so'zlarni toping.
function uniqueWords(s) {
  let arr = s.split(" ");
  let newArr = arr.filter((item) => arr.indexOf(item) == arr.lastIndexOf(item));
  return newArr;
}

// Test case
// console.log(uniqueWords("this is a test this is only a test")); // Output: ["only"]
// console.log(uniqueWords("hello world hello")); // Output: ["world"]

// Berilgan objectdagi barcha qiymatlarni to'plab, bir massivda qaytaring.
function collectValues(obj) {
  let arr = [];
  for (let key in obj) {
    if (typeof obj[key] == "object") {
      arr.push(...collectValues(obj[key]));
    } else {
      arr.push(obj[key]);
    }
  }
  return arr;
}

// Test case
const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4,
      },
    },
  },
};
// console.log(collectValues(obj)); // Output: [1, 2, 3, 4]

// Berilgan stringdagi har bir so'zning birinchi va oxirgi harfini o'zgartiring.
function swapFirstLast(s) {
  let arr = s.split(" ");
  arr[0] = arr[0].slice(1);
  arr[arr.length - 1] = arr[arr.length - 1].slice(0, -1);
  return arr.join(" ");
}

// Test case
// console.log(swapFirstLast("hello world")); // Output: "oellh dlorw"
// console.log(swapFirstLast("a quick brown fox")); // Output: "a kuicq nrowb fxo"

// Berilgan raqamlar ro'yxatidagi eng katta elementning indeksini toping.
function indexOfMax(arr) {
  return arr.indexOf(Math.max(...arr));
}

// Test case
// console.log(indexOfMax([1, 3, 7, 1, 2, 5, 7])); // Output: 2

// Berilgan raqamlar ro'yxatidagi barcha elementlarning kvadrat ildizlarini hisoblang.
function sqrtElements(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(Math.sqrt(arr[i]));
  }
  return newArr;
}

// Test case
// console.log(sqrtElements([1, 4, 9, 16, 25])); // Output: [1, 2, 3, 4, 5]

// Berilgan raqamlar ro'yxatidagi juft va toq sonlarni alohida ro'yxatlar sifatida qaytaring.
function separateEvenOdd(arr) {
  let newArr = { even: [], odd: [] };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      newArr.even.push(arr[i]);
    } else {
      newArr.odd.push(arr[i]);
    }
  }
  return newArr;
}

// Test case
// console.log(separateEvenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Output: { even: [2, 4, 6, 8], odd: [1, 3, 5, 7, 9] }

//  Berilgan raqamlar ro'yxatidagi tub sonlarni toping.
function gcd(arr = []) {
  let result = [];
  for (let i = 0; i <= arr.length; i++) {
    let count = 0;
    for (let j = 0; j <= arr[i]; j++) {
      if (arr[i] % j == 0) {
        count++;
      }
    }
    if (count == 2) {
      result.push(arr[i]);
    }
  }
  return result;
}

// Test case
// console.log(gcd([2, 3, 4, 5, 6, 7])); // Output: [2, 3, 5, 7]

// Berilgan raqamlar ro'yxatidagi barcha elementlarni k qadam bosib aylanma tartibda o'ngga suring.
function rotateArray(arr, k) {
  k = arr.length - k;
  return arr.slice(k, arr.length).concat(arr.slice(0, k));
}

// Test case
// console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]

// Berilgan raqamlar ro'yxatidagi o'rtacha qiymatni toping, faqat ikkita eng kichik va ikkita eng katta qiymatni hisobga olmasdan.
function trimmedMean(arr) {
  let newArr = arr.sort((a, b) => a - b);
  newArr.splice(0, 1);
  newArr.splice(newArr.length - 1, 1);
  let center = Math.floor(newArr.length / 2);
  return (newArr[center] + newArr[center - 1]) / 2;
}

// Test case
// console.log(trimmedMean([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: 5.5

// Berilgan raqamlar ro'yxatidagi barcha polindrom sonlarni toping.

function findPalindromes(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let reverse = arr[i].toString().split("").reverse().join("");
    if (arr[i] == reverse) {
      result.push(arr[i]);
    }
  }
  return result;
}

// Test case
// console.log(findPalindromes([121, 123, 202, 345, 454])); // Output: [121, 202, 454]

// Berilgan raqamlar ro'yxatidagi hamma elementlar bir xil qiymatga ega ekanligini tekshiring.
function allElementsEqual(arr) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        num += 1;
      }
    }
    if (num == arr.length) {
      return true;
    } else {
      return false;
    }
  }
}

// Test case
// console.log(allElementsEqual([1, 1, 1, 1])); // Output: true
// console.log(allElementsEqual([1, 2, 1, 1])); // Output: false

// Berilgan ikkita ro'yxatning bir xil elementlarni o'z ichiga olishini tekshiring, tartibini hisobga olmasdan.
function arraysHaveSameElements(arr1, arr2) {
  let newArr1 = arr1.sort((a, b) => a - b);
  let newArr2 = arr2.sort((a, b) => a - b);
  for (let i = 0; i < newArr1.length; i++) {
    if (newArr1[i] == newArr2[i]) {
      return true;
    } else {
      return false;
    }
  }
}
// Test case
// console.log(arraysHaveSameElements([1, 2, 3], [3, 2, 1])); // Output: true
// console.log(arraysHaveSameElements([1, 2, 3], [3, 2, 2])); // Output: false
//
// Berilgan raqamlar ro'yxatidagi elementlarning to'plam (duplikat bo'lmasligi) bo'lishini tekshiring.//

function isUniqueSet(arr = []) {
  let newArr = arr.filter((item) => arr.indexOf(item) == arr.lastIndexOf(item));
  if (newArr.length == arr.length) {
    return true;
  } else {
    return false;
  }
}

// Test case
// console.log(isUniqueSet([1, 2, 3, 4])); // Output: true
// console.log(isUniqueSet([1, 2, 3, 3])); // Output: false

// Berilgan raqamlar ro'yxatida ketma-ket uchta toq yoki juft son bor-yo'qligini tekshiring.
function hasThreeConsecutiveEvenOrOdd(arr) {
  let toq = 0;
  let juft = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      juft++;
      toq = 0;
    } else {
      toq++;
      juft = 0;
    }
    if (juft == 3 || toq == 3) {
      return true;
    }
  }
  return false;
}

// Test case
// console.log(hasThreeConsecutiveEvenOrOdd([1, 2, 3, 4, 5, 6, 7])); // Output: false
// console.log(hasThreeConsecutiveEvenOrOdd([1, 2, 3, 4, 6, 8, 7])); // Output: true

// Berilgan raqamlar ro'yxatidagi elementlar ketma-ket o'sib yoki kamayib borayotganini tekshiring.
function isMonotonic(arr = []) {
  let result = 0;
  let sort = [...arr];
  let reverse = [...arr];
  sort.sort((a, b) => a - b);
  reverse.sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == sort[i] || arr[i] === reverse[i]) {
      result += 1;
    } else {
      result = 0;
    }
  }
  if (result == arr.length) {
    return true;
  } else {
    return false;
  }
}

// Test case
// console.log(isMonotonic([1, 2, 2, 3])); // Output: true
// console.log(isMonotonic([6, 5, 4, 4])); // Output: true
// console.log(isMonotonic([1, 3, 2])); // Output: false
