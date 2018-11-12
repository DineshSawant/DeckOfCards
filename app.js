angular
    .module('DeckCardDemo', [])
    .controller('DeckController', DeckController);
  
  function DeckController() {
    var self = this;

    self.cards = [];
    self.drawCards = [];

    self.createDeck = function() {
        this.names = [
            {index: 0, value: 'A'}, 
            {index: 1, value: '2'},
            {index: 2, value: '3'}, 
            {index: 3, value: '4'}, 
            {index: 4, value: '5'},
            {index: 5, value: '6'}, 
            {index: 6, value: '7'}, 
            {index: 7, value: '8'}, 
            {index: 8, value: '9'}, 
            {index: 9, value: '10'}, 
            {index: 10, value: 'J'}, 
            {index: 11, value: 'Q'}, 
            {index: 12, value: 'K'}
        ];

        this.suits = [
            {'name': 'Clubs', 'icon': '\u2663', 'color': 'black'},
            {'name': 'Spades', 'icon': '\u2660', 'color': 'black'},
            {'name': 'Hearts', 'icon': '\u2661', 'color': 'red'},
            {'name': 'Diamonds', 'icon': '\u2662', 'color': 'red'}
        ];

        for( var s = 0; s < this.suits.length; s++ ) {
            for( var n = 0; n < this.names.length; n++ ) {
                self.cards.push({
                    value: this.names[n],
                    suit: this.suits[s],
                });
            }
        }
        return this.cards;
    }

    self.createDeck();

    self.cardClick = function(card, index) {
        self.cards.splice(index, 1);
        self.drawCards.push(card);
    }

    self.shuffleOriginalDeck = function() {
        self.cards = self.cards.sort( () => Math.random() - 0.5);
    }

    self.sortCards = function() {
        var clubs = [], spades = [], hearts = [], diamonds = [];

        for( var i = 0; i < self.drawCards.length; i++ ) {
            
            if(self.drawCards[i].suit.name == 'Clubs') {
                clubs.push(self.drawCards[i]);
            }
            if(self.drawCards[i].suit.name == 'Spades') {
                spades.push(self.drawCards[i]);
            }
            if(self.drawCards[i].suit.name == 'Hearts') {
                hearts.push(self.drawCards[i]);
            }
            if(self.drawCards[i].suit.name == 'Diamonds') {
                diamonds.push(self.drawCards[i]);
            }
        }

        clubs = self.sortOneSuit(clubs);
        spades = self.sortOneSuit(spades);
        hearts = self.sortOneSuit(hearts);
        diamonds = self.sortOneSuit(diamonds);

        self.drawCards = clubs.concat(spades, hearts, diamonds);
    }

    self.sortOneSuit = function(suit) {
        var temp = suit.sort(function(a, b) {
            if (b.value.index < a.value.index )
                return 1;
            else if (b.value.index > a.value.index)
                return -1;
            else 
                return 0;
        });

        return temp;
    }
  }