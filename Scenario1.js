const button = document.querySelector('button')

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log('Speech recording started');
};

recognition.onresult = function (event) {
    console.log(event);

    const spokenwords = event.results[0][0].transcript;

    console.log('The transctipt of the recordings: ',spokenwords);
    computerspeech(spokenwords);

};


function computerspeech(words) {
    const speech = new SpeechSynthesisUtterance();
    let voices = window.speechSynthesis.getVoices();
    let desiredVoice = voices.filter(function(voice) {return voice.name=='Google US English';})[0];
    speech.voice = desiredVoice
    speech.lang = 'en-US';
    speech.pitch = 0.9;
    speech.volume = 1;
    speech.rate = 0.85;

    
    determineWords(speech,words);

    window.speechSynthesis.speak(speech);
}

let step = 1;
function determineWords(speech, words) {
    const dialogueBox = document.querySelector('.dialogue-box');
    const dialogueBoxMessage = document.createElement('div');
    const dialogueBoxMessageUser = document.createElement('div');

    dialogueBoxMessage.classList.add('dialogue-box__message');
    dialogueBoxMessageUser.classList.add('dialogue-box__message--user');
    //start of scenario 1//
    if (step === 1 && words.includes("do you wanan guess a person")) {
        speech.text = dialogueBoxMessage.innerText = "Does this person live in Sweden?";
        dialogueBox.appendChild(dialogueBoxMessage);
        console.log('The question:', dialogueBox.innerText);
        step = 2;
    } else if (step === 2 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText = "Has this person ever studied Swedish?";
        console.log('The question:', speech.text);
        step = 3; 

    } else if (step === 3 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Does this person speak German?";
        console.log('The question:', speech.text);
        step = 4;
    } else if (step === 4 && words.includes("not sure")) {
        speech.text = dialogueBoxMessage.innerText = "Is this person in their 20's?";
        console.log('The question:', speech.text);
        step = 13;


    } else if (step === 4 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText = "Does this person study at the University of Gothenburg?";
        console.log('The question:', speech.text);
        step = 5;
    } else if (step === 5 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText = "Is this person in their 20's?";
        console.log('The question:', speech.text);
        step = 6;
    } else if (step === 6 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText = "Does this person play any sports?";
        console.log('The question:', speech.text);
        step = 7;
    } else if (step === 7 && words.includes("no")) {
        speech.text = dialogueBoxMessage.innerText= "Does this person have any pets?";
        console.log('The question:', speech.text);
        step = 44;
  

    } else if (step === 7 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Does this person have any pets?";
        console.log('The question:', speech.text);
        step = 8;

    } else if (step === 8 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Does this person hold 2 passports?";
        console.log('The question:', speech.text);
        step = 9;
    } else if (step === 9 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText = "Does this person speak fluent Russian?";
        console.log('The question:', speech.text);
        step = 10;
    } else if (step === 10 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Are you thinkinh of Stas?";
        console.log('The question:', speech.text);
        step = 11;
    } else if (step === 11 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText = "Yay! I won! Rematch?";
        console.log('The question:', speech.text);
        step = 12;

    } else if(step === 6 && words.includes("no")) {
        speech.text = dialogueBoxMessage.innerText = "Does this person have any pets?";
        console.log('The question:', speech.text);
        step = 28;
    } else if (step === 6 && words.includes("not sure")) {
        speech. text = dialogueBoxMessage.innerText= "Does this person have ant pets?";
        console.log('The question:', speech.text);
        step = 28;
        
    } else if (step === 13 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Does this person play any sports?";
        console.log('The question:', speech.text);
        step = 14;
    } else if (step === 14 && words.includes("not sure")) {
        speech.text = dialogueBoxMessage.innerText= "Does this person study at the University of Gothenburg?";
        console.log('The question:', speech.text);
        step = 15;
    } else if (step === 14 && words.includes("no")) {
        speech.text = dialogueBoxMessage.innerText= "Does this person study at the University of Gothenburg?";
        console.log('The question:', speech.text);
        step = 15;
    } else if (step === 14 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Does this person speak Finnish?";
        console.log('The question:', speech.text);
        step = 19;
    } else if (step === 15 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Does this person come from a German speaking country?";
        console.log('The question:', speech.text);
        step = 16;
    } else if (step === 16 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Are you thinking of Katharina?";
        console.log('The question:', speech.text);
        step = 17;
    } else if (step === 17 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Yay! I won! Rematch?";
        console.log('The question:', speech.text);
        step = 18;

    } else if (step === 19 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Does the name of this person start with an 'S'?";
        console.log('The question:', speech.text);
        step = 20;
    } else if (step === 20 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Are you thinking of Stas?";
        console.log('The question:', speech.text);
        step = 21;
    } else if (step === 21 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Yay! I won! Rematch?";
        console.log('The question:', speech.text);
        step = 22;



    } else if (step === 19 && words.includes("no")) {
        speech.text = dialogueBoxMessage.innerText= "Does this person speak Russian?";
        console.log('The question:', speech.text);
        step = 23;
    } else if (step === 19 && words.includes("not sure")) {
        speech.text = dialogueBoxMessage.innerText= "Does this person speak Russian?";
        console.log('The question:', speech.text);
        step = 23;
    }  else if (step === 23 && words.includes("no")) {
        speech.text = dialogueBoxMessage.innerText= "Are you thinking of Katharina?";
        console.log('The question:', speech.text);
        step = 24;
    } else if (step === 24 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Yay! I won! Rematch?";
        console.log('The question:', speech.text);
        step = 25;
    } else if (step === 23 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Are you thinking of Stas?";
        console.log('The question:', speech.text);
        step = 26;
    } else if (step === 26 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Yay! I won! Rematch?";
        console.log('The question:', speech.text);
        step = 27;


    } else if (step === 28 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Does this person play any sports?";
        console.log('The question:', speech.text);
        step = 29;
    } else if (step === 28 && words.includes("no")) {
        speech.text = dialogueBoxMessage.innerText= "Does this person play any sports?";
        console.log('The question:', speech.text);
        step = 36;
    } else if (step === 28 && words.includes("not sure")) {
        speech.text = dialogueBoxMessage.innerText= "Does this person play any sports?";
        console.log('The question:', speech.text);
        step = 36;

    } else if (step === 29 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Does this person speak Russian?";
        console.log('The question:', speech.text);
        step = 30;
    } else if (step === 30 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Are you thinking of Stas?";
        console.log('The question:', speech.text);
        step = 31;
    } else if (step === 31 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Yay! I won! Rematch?";
        console.log('The question:', speech.text);
        step = 32;

    } else if (step === 30 && words.includes("no")) {
        speech.text = dialogueBoxMessage.innerText= "Does this person come from a German-speaking country?";
        console.log('The question:', speech.text);
        step = 33;
    } else if (step === 33 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Are you thinking of Katharina?";
        console.log('The question:', speech.text);
        step = 34;
    } else if (step === 34 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Yay! I won! Rematch?";
        console.log('The question:', speech.text);
        step = 35;
    } else if (step === 36 && words.includes("no")) {
        speech.text = dialogueBoxMessage.innerText= "Does this person have 2 passports?";
        console.log('The question:', speech.text);
        step = 37;
    } else if (step === 36 && words.includes("not sure")) {
        speech.text = dialogueBoxMessage.innerText= "Does this person have 2 passports?";
        console.log('The question:', speech.text);
        step = 37;
    } else if (step === 37 && words.includes("no")) {
        speech.text = dialogueBoxMessage.innerTextdialogueBoxMessage.innerText= "Does this person speak Russian or Finnish?";
        console.log('The question:', speech.text);
        step = 38;
    } else if (step === 37 && words.includes("not sure")) {
        speech.text = dialogueBoxMessage.innerText= "Does this person speak Russian or Finnish?";
        console.log('The question:', speech.text);
        step = 38;
    } else if (step === 38 && words.includes("no")) {
        speech.text = dialogueBoxMessage.innerText= "Does the name of this person start with a 'K'?";
        console.log('The question:', speech.text);
        step = 39;
    } else if (step === 38 && words.includes("not sure")) {
        speech.text = dialogueBoxMessage.innerText= "Does the name of this person start with a 'K'?";
        console.log('The question:', speech.text);
        step = 39;
    } else if (step === 39 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Are you thinking of Katharina?";
        console.log('The question:', speech.text);
        step = 40;
    } else if (step === 40 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Yay! I won! Rematch?";
        console.log('The question:', speech.text);
        step = 41;
    } else if (step === 39 && words.includes("no")) {
        speech.text = dialogueBoxMessage.innerText= "Then you must be thinking of Stas, right?";
        console.log('The question:', speech.text);
        step = 42;
    } else if (step === 42 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Yay! I won! Rematch?";
        console.log('The question:', speech.text);
        step = 43;

    } else if (step === 44 && words.includes("not sure")) {
        speech.text = dialogueBoxMessage.innerText = "Does this person speak any Finno-Ugric language?";
        console.log('The question:', speech.text);
        step = 55;


    } else if (step === 44 && words.includes("no")) {
        speech.text = dialogueBoxMessage.innerText= "Does this person speak any Estonian?";
        console.log('The question:', speech.text);
        step = 45;
    } else if (step === 45 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Has this person ever lived in Estonia?";
        console.log('The question:', speech.text);
        step = 46;
    } else if (step === 46 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Are you thinking of Stas?";
        console.log('The question:', speech.text);
        step = 47;
    } else if (step === 47 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Yay! I won! Rematch?";
        console.log('The question:', speech.text);
        step = 48;
    } else if (step === 46 && words.includes("no")) {
        speech.text = dialogueBoxMessage.innerText= "Does this person come from a German-speaking country?";
        console.log('The question:', speech.text);
        step = 49;
    } else if (step === 46 && words.includes("not sure")) {
        speech.text = dialogueBoxMessage.innerText= "Does this person come from a German-speaking country?";
        console.log('The question:', speech.text);
        step = 49;
    } else if (step === 49 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Are you thinking of Katharina?";
        console.log('The question:', speech.text);
        step = 50;
    } else if (step === 50 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Yay! I won! Rematch?";
        console.log('The question:', speech.text);
        step = 51;
    } else if (step === 49 && words.includes("not sure")) {
        speech.text = dialogueBoxMessage.innerText= "Does the name of this person start with a 'K'?";
        console.log('The question:', speech.text);
        step = 52;
    } else if (step === 52 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Are you thinking of Katharina?";
        console.log('The question:', speech.text);
        step = 53;
    } else if (step === 53 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Yay! I won! Rematch?";
        console.log('The question:', speech.text);
        step = 54;


    } else if (step === 55 && words.includes('yes')) {
        speech.text = dialogueBoxMessage.innerText= "Does this person come from a German-speaking country?";
        console.log('The question:', speech.text);
        step = 56;
    } else if (step === 56 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Are you thinking of Katharina?";
        console.log('The question:', speech.text);
        step = 57;
    } else if (step === 57 && words.includes("yes")){
        speech.text = dialogueBoxMessage.innerText= "Yay! I won! Rematch?";
        console.log('The question:', speech.text);
        step = 58;


    } else if (step === 55 && words.includes("not sure")) {
        speech.text = dialogueBoxMessage.innerText= "Does this person come from a German-speaking country?";
        console.log('The question:', speech.text);
        step = 56;
    } else if (step === 56 && words.includes("no")) {
        speech.text = dialogueBoxMessage.innerText= "Are you thinking of Stas?";
        console.log('The question:', speech.text);
        step = 60;
    } else if (step === 60 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Yay! I won! Rematch?";
        console.log('The end:', speech.text);
        step = 61
        //scenario 5//
    } else if (step === 8 && words.includes("no")) {
        speech.text = dialogueBoxMessage.innerText= "Does this person come from a German-speaking country?";
        console.log('The question:', speech.text);
        step = 62;

    } else if (step === 62 && words.includes("not sure")) {
        speech.text = dialogueBoxMessage.innerText="Does this person have 2 passports?";
        console.log('The question:', speech.text);
        step = 64;
    }  else if (step === 62 && words.includes("no")) {
        speech.text = dialogueBoxMessage.innerText= "Does this person speak Russian or Finnish?";
        console.log('The question:', speech.text);
        step = 65;
    } else if (step === 65 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Are you thinking of Stas?";
        console.log('The question:', speech.text);
        step = 66;
    } else if (step === 66 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Yay! I Won! Rematch?";
        console.log('The question:', speech.text);
        step = 66;
    } else if (step === 66 && words.includes("no")) {
        speech.text = dialogueBoxMessage.innerText= "Then you must be thinking of Katharina! Try to get to know her better before playing this game!";
        console.log('The question:', speech.text);
        step = 67;
    } else if (step === 64 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Does the name of this person start with a 'K'?";
        console.log('The question:', speech.text);
        step = 68;
    } else if (step === 68 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "are you thinking of Katharina?";
        console.log('The question:', speech.text);
        step = 69;
    } else if (step === 69 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Yay! I won! Rematch?";
        step = 70;
    } else if (step === 64 && words.includes("not sure")) {
        speech.text = dialogueBoxMessage.innerText= "Does the name of this person start with a 'K'?";
        console.log('The question:', speech.text);
        step = 71;
    } else if (step === 71 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Are you thinking of Katharina?"
        console.log('The question:', speech.text);
        step = 72;
    } else if (step === 72 && words.includes("no")) {
        speech.text = dialogueBoxMessage.innerText= "Then you must be thinking of Stas! Try to get to know him better before playing this game!";
        console.log('The question:', speech.text);
        step = 73;

        // start of scenario 6//
    } else if (step === 9 && words.includes("no")) {
        speech.text = dialogueBoxMessage.innerText= "Does this person speak Russian or Finnish?";
        console.log('The question:', speech.text);
        step = 74;
    } else if (step === 74 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Are you thinking of Stas?";
        console.log('The question:', speech.text);
        step = 75;
    } else if (step === 74 && words.includes("not sure")) {
        speech.text = dialogueBoxMessage.innerText= "Are you thinking of Stas?";
        console.log('The question:', speech.text);
        step = 80;
    } else if (step === 80 && words.includes("no")) {
        speech.text = dialogueBoxMessage.innerText= "Then you must be thinking of Katharina! Try to get to know her better before playing this game!";
        console.log('The question:', speech.text);
        step = 81;
    } else if (step === 75 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Yay! I won! Rematch?";
        console.log('The question:', speech.text);
        step = 76;
    } else if (step === 74 && words.includes("no")) {
        speech.text = dialogueBoxMessage.innerText= "Does this person come from a German-speaking country?";
        console.log('The question:', speech.text);
        step = 77;
    } else if (step === 77 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Are you thinking of Katharina?";
        console.log('The question:', speech.text);
        step = 78;
    } else if (step === 78 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Yay! I won! Rematch?";
        console.log('The question:', speech.text);
        step = 79;
    } else if (step === 78 && words.includes("no")){
        speech.text = dialogueBoxMessage.innerText= "Then you must be thinking of Stas! Try to get to know him better before playing this game!";
        console.log('The question:', speech.text);
        step = 82;
        //end of scenario 6//
        //start of scenario 2//
    } else if (step === 5 && words.includes("not sure")) {
        speech.text = dialogueBoxMessage.innerText= "Is this person in their 20's?";
        console.log('The question:', speech.text);
        step = 83;
    } else if (step === 83 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Does this person have any pets?";
        console.log('The question:', speech.text);
        step = 84;
    } else if (step === 84 && words.includes("no")) {
        speech.text = dialogueBoxMessage.innerText= "Does this person play any sports?";
        console.log('The question:', speech.text);
        step = 85;
    } else if (step === 85 && words.includes("not sure")) {
        speech.text = dialogueBoxMessage.innerText= "Does this person speak Russian?";
        console.log('The question:', speech.text);
        step = 86;
    } else if (step === 85 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Does this person speak Russian?";
        console.log('The question:', speech.text);
        step = 86
    } else if (step === 86 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText="Are you thinking of Stas?";
        console.log('The question:', speech.text);
        step = 87;
    } else if (step === 87 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Yay! I won! Rematch?";
        console.log('The question:', speech.text);
        step = 88;
    } else if(step === 86 && words.includes("no")) {
        speech.text = dialogueBoxMessage.innerText= "Does this person hold 2 passports?";
        console.log('The question:', speech.text);
        step = 89;
    } else if (step === 89 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Does this person come from a German-speaking country?";
        console.log('The question:', speech.text);
        step = 90;
    } else if (step === 90 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Are you thinking of Katharina?";
        console.log('The question:', speech.text);
        step = 91;
    } else if (step === 91 && words.includes("yes")) {
        speech.text = dialogueBoxMessage.innerText= "Yay! I won! Rematch?";
        console.log('The question:', speech.text);
        step = 92;
    } else if (step === 91 && words.includes("no")) {
        speech.text = dialogueBoxMessage.innerText= "Then you must be thinking of Stas! Try to get to know him better before playing this game!";
        console.log('The question:', speech.text);
        step = 93;
        //end of scenario 2//
    } 
    return speech;
    
}
  

recognition.onerror = function(event) {
    console.error(event.error)
}


button.addEventListener('click',()=> {
    recognition.start();
})