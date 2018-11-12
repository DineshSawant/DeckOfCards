angular
    .module('DeckCardDemo', [])
    .controller('DeckController', DeckController);
  
  function DeckController() {
    var self = this;

    self.cards = [];
    self.drawCards = [];

    self.createDeck = function() {
        this.names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        this.suits = [
            {'icon': '\u2663', 'color': 'black'},
            {'icon': '\u2660', 'color': 'black'},
            {'icon': '\u2661', 'color': 'red'},
            {'icon': '\u2662', 'color': 'red'}
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
        // self.drawCards = [];
        // self.drawCards = self.createDeck();
    }
  }