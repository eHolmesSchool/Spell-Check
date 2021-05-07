// Spell Check Start Code

// Global Variables
let dictionary;
let aliceWords;

// Buttons
let dicLinBtn = document.getElementById("dic-lin-btn")
let dicBinBtn = document.getElementById("dic-bin-btn")
let aliceLinBtn = document.getElementById("alice-lin-btn")
let aliceBinBtn = document.getElementById("alice-bin-btn")

// Load Data Files into Global Variables
loadDictionary();
loadAliceText();

// Event Listeners
dicLinBtn.addEventListener("click", spellCheckLinear);
dicBinBtn.addEventListener("click", spellCheckBinary);
aliceLinBtn.addEventListener("click", aliceCheckLinear);
aliceBinBtn.addEventListener("click", aliceCheckBinary);

// Sort Functions
function linearSearch(anArray, item) {
    for (let i=0; i<=anArray.length;i++){
        if (anArray[i] == item){
            return i;
        }  
    }
    return -1;
}
function binarySearch(anArray, item) {
    let UI = anArray.length-1;
    let LI = 0;
    while (UI>=LI){
        let MI = Math.floor((UI+LI)/2);
        if (anArray[MI] == item){
            return MI;
        } else if (anArray[MI] < item) {
            LI = MI + 1;
        } else {
            UI = MI - 1;
        }
    }
    return -1;
}

//////////////// Button Functions //////////////////
function spellCheckLinear(){
    // Text prompt
    let word = prompt("Please enter word: ");
    word = word.toLowerCase();
    //Start Timer
    startTime = performance.now();
    if (linearSearch(dictionary, word) == "-1"){
        document.getElementById("whoops-results").innerHTML = 1;
    } else {
        document.getElementById("whoops-results").innerHTML = 0;
    }
    endTime = performance.now();
    //Display update
    document.getElementById("time-results").innerHTML = (endTime-startTime);
}

function spellCheckBinary(){
    // Text prompt
    let word = prompt("Please enter word: ");
    word = word.toLowerCase();
    //Start Timer
    startTime = performance.now();
    if (binarySearch(dictionary, word) == "-1"){
        document.getElementById("whoops-results").innerHTML = 1;
    } else {
        document.getElementById("whoops-results").innerHTML = 0;
    }
    endTime = performance.now();
    //Display update
    document.getElementById("time-results").innerHTML = (endTime-startTime);
    
}

function aliceCheckLinear(){
    let whoopsCounter = 0;
    startTime = performance.now();
    for (i=0; i<aliceWords.length; i++){
        let aliceWordsLower = aliceWords[i].toLowerCase();
        if (linearSearch(dictionary, aliceWordsLower) == "-1"){
            whoopsCounter++;
            console.log(aliceWordsLower);
        }
    }
    endTime = performance.now();
    //Display update
    document.getElementById("whoops-results").innerHTML = whoopsCounter;
    document.getElementById("time-results").innerHTML = (endTime-startTime);
}

function aliceCheckBinary(){
    let whoopsCounter = 0;
    startTime = performance.now();
    for (i=0; i<aliceWords.length; i++){
        let aliceWordsLower = aliceWords[i].toLowerCase();
        if (binarySearch(dictionary, aliceWordsLower) == "-1"){
            whoopsCounter++;
            console.log(aliceWordsLower);
        }
    }
    endTime = performance.now();
    //Display updates
    document.getElementById("whoops-results").innerHTML = whoopsCounter;
    document.getElementById("time-results").innerHTML = (endTime-startTime);
}
