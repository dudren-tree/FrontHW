//Truncate Sentence

truncateSentence("Hello how are you Contestant", 4)

var truncateSentence = function(s, k) {
    var numbForSplit =  k;
    var sentences = s.split(' ');
    var arrSent = sentences.slice(0 , numbForSplit);
    var sentecesAll = arrSent.join(' ')
    return sentecesAll
};

//Determine Color of a Chessboard Square

squareIsWhite("a1");

var squareIsWhite = function(coordinates) {
    console.log(coordinates[0])
    let arrFirst = ['a', 'c', 'e', 'g'];
    let arrSecond = ['b', 'd', 'f', 'h'];
    for(let i = 0; i < arrFirst.length; i++) {
        if(coordinates[0] === arrFirst[i] && (coordinates[1] % 2 === 1)) {
            return false
        } 
    }
    for (let i = 0; i < arrSecond.length; i++) {
        if(coordinates[0] === arrSecond[i] && (coordinates[1] % 2 === 0)) {
            return false
        }
    }
    return true
};