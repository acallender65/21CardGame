const suits = [ "♥", "♦", "♠", "♣"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

export default class Deck {
    constructor(cards = freshdeck()) {
        this.deck = [];
        this.cards = cards;
    }

    get numofcards(){
        return this.cards.length
    }

    shuffle() {
        for (let i = this.numofcards - 1; i > 0; i--) {
            const newindex = Math.floor(Math.random() * (i + 1));
            const oldvalue = this.cards[newindex];
            this.cards[newindex] = this.cards[i];
            this.cards[i] = oldvalue;
        }
    }

    createpackelement() {
        this.packelement = document.createElement("div");
        this.packelement.classList.add("pack");
        this.totelement = document.createElement("div");
        this.totelement.classList.add("totals");
        this.totelement.innerHTML = (`
            <p class="computersum"></p>
            <p class="yoursum">Your Total:</p>
            <p class="result"></p>
        `)

    }

    createotherelements() {
        this.pcelement = document.createElement("div");
        this.pcelement.classList.add("computercards");
        this.yelement = document.createElement("div");
        this.yelement.classList.add("yourcards");
        this.infoelement = document.createElement("div");
        this.infoelement.classList.add("playerinfo");
        this.infoelement.innerHTML = (`
            <p class="rounds">Round:</p>
            <p class="playerscore">Score:</p>
            <button class="pickupbutton">Pick up Cards</button>
            <button class="keepcardsbutton">Keep Cards</button>
        `)
    }

    getcard(suit) {
        this.carddiv = document.createElement("div");
        this.carddiv.classList.add("card");
        this.carddiv.dataset.value = `${this.cards[0].value}${this.cards[0].suit}`;
        if (suit === "♥" || suit === "♦") {
            this.carddiv.classList.add("red");
        } else {
            this.carddiv.classList.add("black");
        }
        this.carddiv.innerHTML = (`
            <p class="suit">${this.cards[0].suit}</p>
        `)
    }

    init(container, suit) {
        var container = document.querySelector('.minigamecontainer');
        this.createpackelement();
        container.appendChild(this.packelement);
        container.appendChild(this.totelement);
        var container = document.querySelector('.cardscontainer');
        this.createotherelements();
        container.appendChild(this.pcelement);
        container.appendChild(this.yelement);
        container.appendChild(this.infoelement);
        //var container = document.querySelector('.yourcards');
        //this.getcard(suit);
        //container.appendChild(this.carddiv);
        //var container = document.querySelector('.computercards');
        //this.getcard(suit);
        //container.appendChild(this.carddiv);
    }
    
}




class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}

function freshdeck(){
    return suits.flatMap(suit => {
        return values.map(value => {
            return new Card(suit, value);
        });
    });
}