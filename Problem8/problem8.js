let num = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";
/* "sum" to multiply variables over and over
"highest" is where we store the biggest variable we get
"startpos" is the beginning of the array
"endpos" is the index we want to go to
"finalArray[] to collect the individual numbers that create the highest product*/

let sum = 1;
let highest = 0; //setting it less than sum to make it easier for the conditional statement later on
let startPos = 0;
let endPos = 12; //setting it up to check 13 arguments next to each other
let i = 0;
let finalArray = [];
let finalstart = 0;
let finalend = 0;

//to make an array from the value range we find to see each number individually
function fillArray(start, end) {
    for (start; start <= end; start++) {
        finalArray.push(num[start])
    }
    return finalArray;
}

function iterate(end) {
    if (end >= num.length) {
        return highest;//Outputs the highest number after we reach the end
    } else {
        for (i; i <= end; i++) {
                const element = parseInt(num[i]);
                sum *= element;
                //Where the highest values are stored
            if (sum > highest) {
                highest = sum;
                /*We will use these values to make an array of the numbers that the highest number consists of.
                The finalstartPos and finalendPos give use the index numbers we need, which were saved only when the multiplicative value out of the bunch was the highest. I save them specifically because startPos and endPos update till the end of the program*/
                finalstart = startPos; 
                finalend = endPos;
            }
        }
        //Offsetting i and resetting sum to get a new set results out of the next 13 numbers
        i = ++startPos;
        sum = 1;
        //recalling the function 
        return iterate(++endPos)
    }
}

//creating interactive elements for HTML
var button = document.createElement("button");
button.innerHTML = "Reveal the answer";
var buttonid = document.getElementById("button").appendChild(button);
button.addEventListener("click", function () {
    document.getElementById("answer").innerHTML = `The highest product is ${iterate(endPos)}.`; //outputs the highest possible value
    document.getElementById("answer2").innerHTML = `The elements are as follows: [${fillArray(finalstart, finalend)}]. \n They are found between indeces  [${[finalstart]}] and [${[finalend]}].`; //outputs the array of numbers that make up the highest possible value
    this.disabled = true;
})

/* The highest product is 23514624000.

The elements are as follows: [5,5,7,6,6,8,9,6,6,4,8,9,5]. They are found between indeces [197] and [209]. */