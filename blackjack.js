import Deck from "./deck.js"

var dealersum = 0;
var yoursum = 0;

var dealeracecount = 0;
var youracecount = 0;

var fini = false;
var carddiv;

var canpickup = true;
var cankeepcards = true;
var beep1 = [];
var pressed = false;
var happy = false;
//var ends = [];

export default async function startgame(deck, mainresult, ends, rounds){
    //var hidden = deck.cards.pop();
    //var value = hidden.value
    //dealersum += getvalue(value);
    //dealeracecount = checkace(value)
    //console.log(hidden.value, hidden, dealersum);

    dealersum = 0;
    yoursum = 0;

    dealeracecount = 0;
    youracecount = 0;

    fini = false;

    canpickup = true;
    cankeepcards = true;

    while (dealersum < 17){
        let card = deck.cards.pop();
        dealersum += getvalue(card.value)
        dealeracecount += checkace(card.value)
        var hiddendiv = document.createElement("div");
        hiddendiv.classList.add("hidden");
        document.querySelector(".computercards").appendChild(hiddendiv);
        carddiv = document.createElement("div");
        carddiv.classList.add("card");
        carddiv.dataset.value = `${card.value}${card.suit}`;
        if (card.suit === "♥" || card.suit === "♦") {
            carddiv.classList.add("red");
        } else {
            carddiv.classList.add("black");
        }
        carddiv.innerHTML = (`
            <p class="suit">${card.suit}</p>
        `)
        document.querySelector(".hidden").appendChild(carddiv);
        console.log("computer", card.value, card, dealersum);

        let cardimg = document.createElement("img");
        cardimg.classList.add("cardimg");
        var unhiddendiv = document.createElement("div");
        unhiddendiv.classList.add("unhidden");
        cardimg.src = "7z9quv9d.png"
        document.querySelector(".computercards").appendChild(unhiddendiv);
        document.querySelector(".unhidden").appendChild(cardimg);


        console.log("yuh")
        document.querySelector(".unhidden").classList.add("active");
        document.querySelector(".hidden").classList.remove("active");
    }

    for (let i = 0; i < 2; i++){
        let card = deck.cards.pop();
        yoursum += getvalue(card.value)
        youracecount += checkace(card.value)
        carddiv = document.createElement("div");
        carddiv.classList.add("card");
        carddiv.dataset.value = `${card.value}${card.suit}`;
        if (card.suit === "♥" || card.suit === "♦") {
            carddiv.classList.add("red");
        } else {
            carddiv.classList.add("black");
        }
        carddiv.innerHTML = (`
            <p class="suit">${card.suit}</p>
        `)
        document.querySelector(".yourcards").appendChild(carddiv);
        console.log("ours",card.value, card, yoursum);
        document.querySelector(".yoursum").innerText = "Your Total: \n" + yoursum
    }


    let cardimg = document.createElement("img");
    cardimg.classList.add("card");
    cardimg.classList.add("packc");
    let packtdiv = document.createElement("div");
    packtdiv.classList.add("packt");
    cardimg.src = "7z9quv9d.png"
    document.querySelector(".pack").appendChild(packtdiv);
    document.querySelector(".packt").appendChild(cardimg);
    var times = 1
    var finished = true;
    

    //if (!finished){
      //  canpickup = false;
        //console.log("not finished", canpickup)
    //}
    
    document.querySelector(".pickupbutton").addEventListener("click", pickup);

    function pickup(){
        if (!canpickup){
            return;
        }

        if (!finished){
            canpickup = false;
            console.log("not finished", canpickup)
            canpickup = true;
            return;
        }

        finished = false;
        document.querySelector(".packt").classList.add("transition")
        var element = document.querySelector(".packt.transition")
        var left = 192 + (50*times)
        console.log(left)
        element.style.transform = "translate(" + left + "px, 2px) scale(0.5)";
        //element.style.transition = "transform ease 300ms";


        let card = deck.cards.pop();
        yoursum += getvalue(card.value)
        youracecount += checkace(card.value)
        carddiv = document.createElement("div");
        carddiv.classList.add("card");
        carddiv.dataset.value = `${card.value}${card.suit}`;
        if (card.suit === "♥" || card.suit === "♦") {
            carddiv.classList.add("red");
        } else {
            carddiv.classList.add("black");
        }
        carddiv.innerHTML = (`
            <p class="suit">${card.suit}</p>
        `)
        
        var delay = ( function(){
            var timer = 0;
            return function(callback, ms){
                clearTimeout (timer);
                timer = setTimeout(callback, ms);
            };
        }) ();

        delay (function(){
            console.log("elloooi");
            document.querySelector(".packt").classList.remove("transition");
            document.querySelector(".yourcards").appendChild(carddiv);
            document.querySelector(".packt").classList.add("unactive");
            document.querySelector(".packc").classList.add("unactive");
        }, 500);

        var delay2 = ( function(){
            var timer = 0;
            return function(callback, ms){
                clearTimeout (timer);
                timer = setTimeout(callback, ms);
            };
        }) ();

        delay2 (function(){
            console.log("elloooi2");
            document.querySelector(".packt").classList.remove("unactive");
            document.querySelector(".packc").classList.remove("unactive");
            var element2 = document.querySelector(".packt")
            element.style = "/* transform: translate(242px, 0px) scale(0.5); */";
        }, 5000);

        var delay3 = ( function(){
            var timer = 0;
            return function(callback, ms){
                clearTimeout (timer);
                timer = setTimeout(callback, ms);
            };
        }) ();

        delay3 (function(){
            console.log("elloooi3");
            var element2 = document.querySelector(".packt")
            element.style = "/* transform: translate(242px, 0px) scale(0.5); */";
            finished = true;
        }, 5000);



        console.log("ours",card.value, card, yoursum);


        //document.querySelector(".packc").classList.add("transition")

        if (reduceace(yoursum, youracecount)[0] > 21){
            canpickup = false;
            console.log("hi")
        }
        
        if((yoursum >= 21)&&(reduceace(yoursum, youracecount)[0] < 21) && (youracecount>0)){
            var result = reduceace(yoursum, youracecount)
            yoursum = result[0] 
            youracecount= result[1]
            console.log(yoursum, youracecount, "myfunc1")
            //return yoursum, youracecount;
        }
        console.log(yoursum, youracecount, "myfunc2", reduceace(yoursum, youracecount)[0],  reduceace(yoursum, youracecount)[1] )

        document.querySelector(".yoursum").innerText = "Your Total: \n" + yoursum

        times = times + 1

        return finished;

    }

    document.querySelector(".keepcardsbutton").addEventListener("click", keepcards);

    function keepcards(){
        if (!cankeepcards){
            return;
        }

        dealersum = reduceace(dealersum, dealeracecount)[0];
        yoursum = reduceace(yoursum, youracecount)[0];
    
        document.querySelector(".yoursum").innerText = "Your Total: \n" + yoursum
        document.querySelector(".computersum").innerText = "NPC Total: \n" + dealersum

        console.log("nuh", cankeepcards);
    
        document.querySelector(".hidden").classList.add("active");
        document.querySelector(".unhidden").classList.remove("active");
    
        canpickup = false;
        pressed = true;
        console.log("pressed", pressed)

    
        if (yoursum > 21){
            document.querySelector(".result").innerText = "You lose!"
            mainresult = mainresult + 1
            console.log("mainresult1", mainresult)
            cankeepcards = false;
            fini = true;
            //ends = [mainresult, fini]
            //return ends;
        }
        else if (dealersum > 21){
            document.querySelector(".result").innerText = "You win!"   
            mainresult = mainresult + 2
            console.log("mainresult1", mainresult)
            cankeepcards = false;
            fini = true;
            //ends = [mainresult, fini]
            //return ends;
        }
        else if (dealersum == yoursum){
            document.querySelector(".result").innerText = "You tied!"  
            mainresult = mainresult + 1
            console.log("mainresult1", mainresult)
            cankeepcards = false;
            fini = true;
           // ends = [mainresult, fini]
            //return ends;
        }
        else if (dealersum > yoursum){
            document.querySelector(".result").innerText = "You lose!"  
            mainresult = mainresult + 1
            console.log("mainresult1", mainresult)
            cankeepcards = false;
            fini = true;
            //ends = [mainresult, fini]
            //return ends;
        }
        else if (dealersum < yoursum){
            document.querySelector(".result").innerText = "You win!"   
            mainresult = mainresult + 2
            console.log("mainresult1", mainresult)
            cankeepcards = false;
            fini = true;
            //ends = [mainresult, fini]
            //return ends;
        }

        console.log("nearend", cankeepcards);
        cankeepcards = false;
        console.log("fucnt", ends, cankeepcards);

        ends = [mainresult, fini]

        return ends;
        //return cankeepcards;
    }

    //console.log("fucnt", ends);


    function checkfini(){
        if (!cankeepcards){
            //keepcards();
            console.log("fucnt2", ends);//[0], ends[1]);
            //return ends[0];
            return ends;
        }
        else{
            window.setTimeout(() => {checkfini();}, 1000);
           // console.log("fucnt1", ends[0], ends[1], cankeepcards);
        }

        //return ends
    }
    //var haps = 0;

    //haps = checkfini();
    //console.log("happy", haps);
    //console.log(await checkfini())
    //document.querySelector(".keepcardsbutton").addEventListener("click", keepcards);

    function createlistenertoendprom (){
        let beep1 = new Promise((resolve) => {
            document.querySelector(".keepcardsbutton").addEventListener("click", function(){
                console.log("working"); resolve(ends);
            })
        })
        return beep1.then((ends) => {
            console.log("ends", ends);
            return ends;
        })

        //return beep1.then((ends) => {
            //console.log("ends", ends);
            //return ends;
       // })
    }
    
    console.log(rounds, "rounds")
    ends =  await createlistenertoendprom();//checkfini();

    document.querySelector(".keepcardsbutton").removeEventListener("click", keepcards)
    //cankeepcards = false;

    return ends;
    //checkfini(ends);
}

//startgame(deck, mainresult, ends).then((ends)=>{console.log(ends);});




function reduceace(yoursum, youracecount){
    while (yoursum > 21 && youracecount > 0){
        yoursum -= 10;
        youracecount -= 1;
        console.log(yoursum, youracecount, "inside")
    };
    console.log(yoursum, youracecount, "outside");
    return [
        yoursum, youracecount
    ];
}


function getvalue(value){
    if (value === "K"){
        return 10;
    }
    else if (value === "Q"){
        return 10;
    }
    else if (value === "J"){
        return 10;
    }
    else if (value === "A"){
        return 11;
    }
    else {
        return parseInt(value);
    }
}

function checkace(value){
    if (value === "A"){
        return 1;
    }
    else{
        return 0
    }
}