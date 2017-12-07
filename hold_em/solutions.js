// Solution 1
var clubs =  {
  name: 'Club',
  cards: ['c1','c2','c3','c4','c5','c6','c7','c8','c9','c10','cj','cq','ck']
}
var diamonds =  {
  name: 'Diamond',
  cards: ['d1','d2','d3','d4','d5','d6','d7','d8','d9','d10','dj','dq','dk']
}
var spades =  {
  name: 'Spade',
  cards: ['s1','s2','s3','s4','s5','s6','s7','s8','s9','s10','sj','sq','sk']
}
var hearts =  {
  name: 'Heart',
  cards: ['h1','h2','h3','h4','h5','h6','h7','h8','h9','h10','hj','hq','hk']
}

var shuffle = function(array) {
    var i = 0, j = 0, temp = null
    for (i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = array[i]

      array[i] = array[j]
        array[j] = temp
    }

    return array;
}

var cardDeck = [clubs.cards.concat(hearts.cards).concat(diamonds.cards).concat( hearts.cards)]
cardDeck = _.flatten(cardDeck)
cardDeck = shuffle(cardDeck)

var getCard = function() {
  return cardDeck.splice(Math.random() * cardDeck.length,1)
}

numPlayers = 6
playersCards = new Array(numPlayers)
for (var i = 0; i < numPlayers; i++) {
  playersCards[i] = new Array(5)
}

var getFlop = function () {
  return card =  getCard()

}

var dealFirstCards = function() {
  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < numPlayers; j++) {
      playersCards[j][i] = getCard()
      // console.log('Player ' + j + ' : card ' + playersCards[j][i]);
    }
  }
}

var displayCards = function() {
  for (var i = 0; i < numPlayers; i++) {
    console.log('Player ' + i + ' : cards ' + playersCards[i].join(' - '));
  }
}

var playPoker = function () {
  console.log('Welcome to Crown');
  dealFirstCards()
  displayCards()
  getCard()
  console.log('Flop ' + getFlop())
  getCard()
  console.log('Turn ' + getFlop())
  getCard()
  console.log('River  ' + getFlop())
}

playPoker()

debugger

// Solution 2
var deck = []
var suits = ['Spades', 'Clubs', 'Hearts', 'Diamonds']
var ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']
suits.forEach(function(suit, suitIndex){
  ranks.forEach(function(rank, rankIndex){
    var card = {
      rank: rankIndex,
      suit: suitIndex,
      string: rank + " of " + suit
    }
    deck.push(card)
  })
})

var randomCard = function(){
  var index = Math.floor(Math.random() * deck.length)
  return deck.splice(index, 1)[0]
}

var burnCard = function(){
  burntCards.push(randomCard())
}

var listPlayersAndCards = function(){
  players.forEach(function(player, index){
    var playerName
    if (index == 0){
      playerName = "Your hand: "
    } else {
      playerName = "CPU " + index + " hand: "
    }
    var cards = player.holeCards
    var cardString = cards[0].string + ", " + cards[1].string
    console.log(playerName + cardString)
  })
  console.log("\nFlop: " + game.flop[0].string + ", " + game.flop[1].string + ", " + game.flop[2].string)
  console.log("Turn: " + game.turn.string)
  console.log("River: " + game.river.string)
}

var playerCount = 4

var players = []
var game = {}
var burntCards = []


var dealCards = function(){
  burnCard()
  game.flop = [randomCard(), randomCard(), randomCard()]
  burnCard()
  game.turn = randomCard()
  burnCard()
  game.river = randomCard()
}

// populate players array
for (var p = 0; p < playerCount; p++){
  var newPlayer = {
    holeCards: [randomCard(), randomCard()]
  }
  players.push(newPlayer)
}

dealCards()
listPlayersAndCards()