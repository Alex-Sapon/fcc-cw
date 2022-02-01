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