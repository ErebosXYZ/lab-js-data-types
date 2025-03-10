/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string

// "Fred fed Ted bread and Ted fed Fred bread"

let tongueTwister = s1.concat(" ", s2, " ", s3, " ", s4," ", s5," ", s3," ", s2," ", s1, " ", s4);

// Print out the concatenated string

console.log("Iteration 1.1:", tongueTwister);



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

// .slice per retallar des del primer fins al penúltim caràcter de cada string (0 es el primer i -1 l'últim). A això li sumem el .slice dels últims caràcters de cada string i el convertim a majúscules amb .toUpperCase. Concatenem els dos strings amb un +.

let part3 = part1.slice(0, -1) + part1.slice(-1).toUpperCase() + part2.slice(0, -1) + part2.slice(-1).toUpperCase();


// Print the cameLtaiL-formatted string

console.log("Iteration 1.2:", part3)



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)


// Print out the tipAmount




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)


// Print the generated random number



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;

const expression2 = a || b;

const expression3 = !a && b;

const expression4 = !(a && b);

const expression5 = !a || !b;

const expression6 = !(a || b);

const expression7 = a && a;