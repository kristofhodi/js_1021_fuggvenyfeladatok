const numbers = [2,13,3,7,17,5,11,19,9]
const names = ['Eva', 'Adel', 'Cedric', 'Dior', 'Frank', 'Bob']
const fruits = ['pineapple', 'kiwi', 'banana', 'pear', 'cherry']
/*
sortByLength() - String tömböt a szavak hossza szerint rendezi és a rendezett tömböz adja vissza
sortByLengthAsc() - String tömböt a szavak hossza szerint rendezi ABC sorrendbe és a rendezett tömböz adja vissza
sortFrom15() - számokat rendez a 15-től való távolság alapján és a rendezett tömböt adja vissza
addAsterisk() - String tömb mindegy elemének az elejére és végére egy csillagot tesz és visszaadja a módosított tömböt
between5And15() - számokat tartalmazó tömb 5 és 15 közötti elemeit adja vissza egy tömbben
isAllOdd() - számokat tartalmazó tömb minden eleme páratlan-e. Visszatérési érték true vagy false
hasEven() - számokat tartalmazó tömb tartalmaz-e páros elemet. Visszatérési érték true vagy false
sigma() -  számokat tartalmazó tömb elemeit összeszorozza és a szorzatot adja vissza */

function sortByLength(fruits) {
    return fruits.sort((a,b) => a.length - b.length);
}
console.log(sortByLength(fruits))


function sortByLengthAsc(fruits) {
    return fruits.sort((a, b) => a.length - b.length && a.localeCompare(b));
}
console.log(sortByLengthAsc(fruits))


function sortFrom15(numbers) {
    return numbers.sort((a,b) => Math.abs(a - 15) - Math.abs(b - 15));
}
console.log(sortFrom15(numbers))


function addAsterisk(fruits) {
    return fruits.map(fruit => `*${fruit}*`);
}
console.log(addAsterisk(fruits))


function between5And15(numbers) {
    return numbers.filter(num => num >= 5 && num <= 15);
}
console.log(between5And15(numbers))


function isAllOdd(numbers) {
    return numbers.every(num => num % 2 !== 0);
}
console.log(isAllOdd(numbers))


function hasEven(numbers) {
    return numbers.some(num => num % 2 === 0);
}
console.log(hasEven(numbers))


function sigma(numbers) {
    return numbers.reduce((product, num) => product * num, 1);
}
console.log(numbers)