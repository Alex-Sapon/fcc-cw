// freecodecamp

let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
// ----------------------------------------
const myName = "Alex";
const myStr2 = "Hello, my name is " + myName + ", how are you?";
// ------------------------------------
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;
// -----------------------------------
let firstLetterOfLastName = "";
const lastName = "Lovelace";

firstLetterOfLastName = lastName[0];
// -------------------------------------
const lastName = "Lovelace";

const thirdLetterOfLastName = lastName[2];
// ------------------------
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

console.log(wordBlanks = myAdjective + " " + myNoun + " " + myAdverb + " " + myVerb);










// codewars

const digitize = (n) => Array.from(String(n), Number).reverse();
console.log(digitize(348597));
// ---------------------------------------
disemvowel = str => str.replace(/[aeuoi]/ig, '');
console.log(disemvowel("This website is for losers LOL!"));
// ----------------------------------------
stringToNumber = str => Number(str);
console.log(stringToNumber("1234"));
// -----------------------------------
DNAtoRNA = dna => dna.replace(/T/g, 'U');
console.log(DNAtoRNA("GCAT"));
// ----------------------------------
summation = num => {
    let res = 0;
    for (let i = 1; i <= num; i++) {
        res += i;
    }
    return res;
};
console.log(summation(8));
// ----------------------------------
const check = (a, x) => a.includes(x);

check([66, 101], 66);
console.log(check);
// ---------------------------
const areYouPlayingBanjo = name => name.match(/^r/i) ? `${name} plays banjo` : `${name} does not play banjo`;

console.log(areYouPlayingBanjo("bravo"));
console.log(areYouPlayingBanjo("Ringo"));
// -----------------------------------
const removeChar = str => str.slice(1, -1);
console.log(removeChar('Alex'))
// --------------------------------
const noSpace = x => x.replace(/ /g, '');
console.log(noSpace('A l ex '));
// ----------------------------------
const countSheep = num => {
    let str = '';
    for (let i = 0; i < num; i++) {
        str += `${i + 1} sheep...`;
    }
    return str;
}
console.log(countSheep(2))
// ----------------------------------
const smash = words => words.join(' ');

console.log(smash(["hello", "world"]));
// ---------------------------
const descendingOrder = n => {
    return +[...'' + n].map(Number).sort((a, b) => b - a).join('')
};

console.log(descendingOrder(145263));
// ----------------------------------------
const friend = friends => friends.filter(friend => friend.length === 4)

console.log(friend(["Ryan", "Kieran", "Mark"]))
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]))
console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]))
// -----------------------------------------
const betterThanAverage = (classPoints, yourPoints) => {
    const sum = Math.round(classPoints.reduce((acc, item) => acc + item, 0) / classPoints.length);
    if (sum < yourPoints) return true
    return false
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))
// --------------------------------
const min = list => Math.min(...list);

const max = list => Math.max(...list);

console.log(min([-52, 56, 30, 29, -54, 0, -110]))
console.log(max([4,6,2,1,9,63,-134,566]))
// ----------------------------
const filter_list = l => l.filter(item => typeof item === typeof Number())

console.log(filter_list([1,2,'a','b']))
// ----------------------------
const uniqueInOrder = iterable => {
    let arr = []
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== iterable[i + 1]) {
            arr.push(iterable[i])
        }
    }
    return arr
}

console.log(uniqueInOrder('ABBCcAD'))
// -------------------------------
const getCount = str => (str.match(/[aeiou]/ig) || []).length;

console.log(getCount("abracadabra"))
console.log(getCount("br"))
// -----------------------------
const arr1 = [1, 2, 3, 4, 5]
const arr2 = [5, 3, 2, 1, 4]
const arr3 = [2]
const arr4 = []

const removeSmallest = numbers => {
    const copyArr = numbers.slice()
    copyArr.length >= 1 ? copyArr.splice(copyArr.indexOf(Math.min(...copyArr)), 1) : copyArr.length === 0 ? [] : copyArr;
    return copyArr
};

console.log(removeSmallest(arr1))
console.log(removeSmallest(arr2))
console.log(removeSmallest(arr3))
console.log(removeSmallest(arr4))
// -----------------------------
const sumMix = x => x.reduce((acc, item) => acc + Number(item), 0)

console.log(sumMix([9, 3, '7', '3']));
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])); 
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']));
// -----------------------------------
const squareDigits = num => +[...'' + num].map(Number).reduce((acc, item) => acc + Math.pow(item, 2), '')

console.log(squareDigits(3212))
console.log(squareDigits(2112))
// -------------------------------------
const number = busStops => busStops.reduce((acc,item) => (acc + item[0]) - item[1] > 0 ? (acc + item[0]) - item[1] : 0, 0) 

console.log(number([[10,0],[3,5],[5,8]]));
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]));
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]));
console.log(number([[0,0]]));
// -----------------------
const abbrevName = name => {
    const nameUser = name.split(' ')
    return `${nameUser[0][0].toUpperCase()}.${nameUser[1][0].toUpperCase()}`
}

console.log(abbrevName("Sam Harris"))
// -------------------------------
const feast = (beast, dish) => beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]

console.log(feast("great blue heron", "garlic naan"))
console.log(feast("chickadee", "chocolate cake"))
console.log(feast("brown bear", "bear claw"))
// --------------------------------
const booleanToString = b => String(b);
// -----------------------
const repeatStr = (n, s) => s.repeat(n) 

console.log(repeatStr(3, "*")); // , "***"
console.log(repeatStr(5, "#")); // , "#####"
console.log(repeatStr(2, "ha ")); // , "ha ha "
// -------------------
const solution = str => str.split('').reverse().join('')

console.log(solution('world'));
console.log(solution('hello'));
console.log(solution(''));
console.log(solution('h'));
// ----------------
const reverseSeq = n => {
    const result = [];
    for (let i = n; i >= 1; i--) {
        result.push(i)
    }
    return result;
};

console.log(reverseSeq(5));