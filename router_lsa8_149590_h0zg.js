const deepClone = obj => JSON.parse(JSON.stringify(obj));
apple

const squareRoot = num => Math.sqrt(num);
const getRandomSubset = (array, size) => array.slice(0, size);
21 * 15
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
99,66,29,74,54,6,71,89,15,55,16,80,51,64,40,63 / 60,60,82,62,61,29,96,29,42,40,12,41,26,83,31,65,40,2,21,32,49,8,12,20,47,97,19,28,27,58,8,88,49,93,52,54,68,59,12,45,60,72,33,60,52,35,26,84,35
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
