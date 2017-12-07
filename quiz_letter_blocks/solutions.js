var can_make_word = function(word){
    var blocksArray = [
        ['B','O'],
        ['X','K'],
        ['D','Q'],
        ['C','P'],
        ['N','A'],
        ['G','T'],
        ['R','E'],
        ['T','G'],
        ['Q','D'],
        ['F','S'],
        ['J','W'],
        ['H','U'],
        ['V','I'],
        ['A','N'],
        ['E','R'],
        ['F','S'],
        ['L','Y'],
        ['P','C'],
        ['Z','M']
    ];

    var wordArr = word.split(''); // array of letters

    wordArr.forEach(function(letter){
        var found = false
        blocksArray.forEach(function(block){
            if ( (letter === block[0] || letter === block[1]) && found === false){
                blockIndex = blocksArray.indexOf(block);
                console.log(letter, blockIndex);
                blocksArray.splice(blockIndex,1);
                found = true;
            }
        })
    })
    var numBlocksUsed = 19 - blocksArray.length;
    var result = wordArr.length === numBlocksUsed;
    return result;
}

console.log (can_make_word('BARK') );
console.log (can_make_word('BOOK') );