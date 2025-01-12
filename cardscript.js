import startgame from "./blackjack.js"
import Deck from "./deck.js"

//console.log(deck.cards)
var mainresult = -1;
var ends = [];
//console.log("byeryfhjk")
var rounds = 1;

async function getresults(deck){
    //console.log("hiya")
    var result = await startgame(deck, mainresult, ends);
    //console.log(result, "hiya");
    mainresult = result;
    console.log(result, "fsvghkjd")
    //console.log(mainresult, "hiya");
    return result;
}

window.onload = function() {
    //var deck = new Deck();
    //deck.shuffle()
    //deck.init();
    //console.log(startgame(deck, mainresult, ends), "hiya");
   // ends = startgame(deck, mainresult, ends).then((ends)=>{console.log(ends);});

    function removeelements(){
        var element = document.querySelector(".computercards");
        element.innerHTML = (` `)
        var element = document.querySelector(".yourcards");
        element.innerHTML = (` `)
        var element = document.querySelector(".pack");
        element.innerHTML = (` `)
        var element = document.querySelector(".computersum");
        element.innerText = ""
        var element = document.querySelector(".result");
        element.innerText = ""
        //console.log("round2");
        //var deck = new Deck();
        //deck.shuffle()
        //return ends = startgame(deck, mainresult, ends).then((ends)=>{console.log(ends);});
    }

    function createlistenertonextround (){
        return new Promise((resolve) => {
            document.querySelector(".keepcardsbutton").addEventListener("click", function(){
                resolve(ends);
            })
        })
    }

    async function round1(ends){
        var deck = new Deck();
        deck.shuffle()
        deck.init();
        ends = startgame(deck, mainresult, ends, rounds).then((ends)=>{console.log(ends);  if (ends[1] == r2){
            console.log("round2", ends);
            score = ends[0];
            rounds = rounds + 1;
            ends = [];
            removeelements();
            round2(ends);
        }});
        //ends = startgame(deck, mainresult, ends)
        //console.log(ends, "hiya");
 
    }

    function round2(ends){
        var deck = new Deck();
        deck.shuffle()
        ends = startgame(deck, mainresult, ends, rounds).then((ends)=>{console.log(ends);if (ends[1] == r3){
            console.log("round3");
            rounds = rounds + 1;
            removeelements();
            round3();
        }});
    }

    function round3(){
        var deck = new Deck();
        deck.shuffle()
        ends = startgame(deck, mainresult, ends, rounds).then((ends)=>{console.log(ends);});
    }

    round1(ends);

    var score = -1;
    var r2 = true;
    var r3 = true;
    //removeelements();
    //round2()
    

    //if (ends[1] == true){
    //    console.log("round1");
    //    round =  await createlistenertonextround();
    //    return await removeelements();
    //}
    //await startgame(deck, mainresult, ends).then((ends)=>{console.log(ends);});

    //await removeelements();
    //console.log(ends, "hiya");
    //ends = []
};


//window.onload();

//console.log("hiehgfkj")
//console.log(mainresult);

//if (mainresult){
 //   location.reload()
 //   console.log(mainresult)
//}
//location.reload()
