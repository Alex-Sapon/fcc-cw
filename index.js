// freecodecamp

let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
// ----------------------------------------
const myName = "Alex";
const myStr2 = "Hello, my name is " + myName + ", how are you?";




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

console.log(areYouPlayingBanjo("bravo"))
console.log(areYouPlayingBanjo("Ringo"))