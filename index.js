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
// solució Oscar: en comptes d'utilitzar slice fem servir substring, que fa el mateix i utilitzem la propietat .length de l'array part1 que compta les lletres des del final i també la propietat .toUpperCase per a posar aquesta lletra en majúscules

// let cameLtaiL = part1.slice(0, -1) + part1.slice(-1).toUpperCase() + part2.slice(0, -1) + part2.slice(-1).toUpperCase();
let cameLtaiL = part1.substring(0, 3) + part1[part1.length-1].toUpperCase() + part2.substring(0, 5) + part2[part2.length-1].toUpperCase();


// Print the cameLtaiL-formatted string

console.log("Iteration 1.2:", cameLtaiL)



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)

let tipAmount = billTotal * 0.15;


// Print out the tipAmount

console.log("Iteration 2.1:", "The tip amount is", tipAmount);



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

randomNumber = Math.floor(Math.random() * 11);

// el mètode Math.random genera un número aleatori de l'1 al 10 i el mètode Math.floor fa que sigui un número enter

// Print the generated random number

console.log("Iteration 2.2.", randomNumber);


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
//  a és true i  b és fals, l'operador && només retorna true si ambdues expressions són true, per tant l'output seria false

const expression2 = a || b;
// || retorna true si una o les dues expressions són true, per tant l'output seria true

const expression3 = !a && b;

// ! fa que una expressió sigui el seu contrari, per tant les dues expressions serien falses i l'output també

const expression4 = !(a && b);

// ! amb una expressió falsa entre parèntesis retorna true

const expression5 = !a || !b;

// com que cadascuna de les dues expressions esdevé el seu contrari, l'output segueix sent true perquè la b passa de "false" a "true"

const expression6 = !(a || b);

// ! amb una expressió true entre parèntesis retornarà false

const expression7 = a && a;

// com que ambdós expressions són true, retorna true

console.log("Iteration 3.1:", expression1, expression2, expression3, expression4, expression5, expression6, expression7)