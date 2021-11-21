const words = ["Aleksandra", "Magdalena", "Marcin", "Radosław"];
let haslo;
let word;
let game = false;
let toEnd=0;
let strzaly=[];
function newGame(){
    haslo ="";
    game = true;
    toEnd=0;
    document.getElementById('endGame').innerHTML="";
    //document.getElementById('slowo').innerHTML = ' ';
    const n = Math.floor(Math.random() * (words.length - 0)) + 0;
    console.log(words[n]);
    haslo ='';
    [...words[n]].forEach(element => {
        haslo +="_"
    });
    document.getElementById('slowo').innerHTML = haslo;
    word = n;
    document.getElementById("wrongGuess").innerHTML="";
    document.getElementById("wisielec").style.backgroundImage ="url(./PNG/"+toEnd+".png)";
}

function pick(){
    if(game && document.getElementById("letter").value!=""){
        const letter = document.getElementById("letter").value;
        document.getElementById("letter").value="";
        document.getElementById("letter").focus();
        haslo = [...haslo];
        let guess=true;
        let search=true;
        console.log(strzaly, letter)
        for(let i=0;i<strzaly.length;i++){
            if(strzaly[i].toLowerCase()==letter.toLowerCase()){
                search=false;
                guess=false;
            }
        }
        console.log(search)
        for(let i=0;i<words[word].length;i++){
            if((letter.toLowerCase()==words[word][i]||letter.toUpperCase()==words[word][i])&&search){
                haslo[i]=words[word][i];
                guess=false;
            }
        }
        
        if(guess){
            toEnd++;
            console.log(toEnd);
            const src = "url(./PNG/"+toEnd+".png)"
            document.getElementById("wisielec").style.backgroundImage = src;
            strzaly.push(letter);
        }
        haslo = haslo.join("");
        if(haslo.toLowerCase()==words[word].toLowerCase()){
            game=false;
        }
        document.getElementById("slowo").innerHTML=haslo;
        document.getElementById("wrongGuess").innerHTML=strzaly;
     }
     check();
}
function pickWord(){
    if(game && document.getElementById("word").value!=""){
        const guessWord=document.getElementById("word").value;
        document.getElementById("word").value="";
        document.getElementById("word").focus();
        let guess=true;
        console.log(words[word].toLowerCase(), guessWord.toLowerCase());
        if(words[word].toLowerCase()==guessWord.toLowerCase()){
            document.getElementById("slowo").innerHTML = words[word];
            guess=false;
            game=false;
        }
        if(guess){
            toEnd++;
            console.log(toEnd);
            const src = "url(./PNG/"+toEnd+".png)"
            document.getElementById("wisielec").style.backgroundImage = src;
        }
    }
    check();
}

function check(){
    if(toEnd==11){
        game=false;
    }
    if(game==false){
        if(haslo.toLowerCase()==words[word].toLowerCase()){
            document.getElementById("endGame").innerHTML = "VICTORY";
        }
        else{
            document.getElementById("endGame").innerHTML = "LOSE";
        }
    }
}

let log;
const input = document.querySelector('#letter');
const input2 = document.getElementById('word');
input.addEventListener('keypress', logKey);
input2.addEventListener('keypress', logKey);
function logKey(e) {
    log =  `${e.code}`;
    console.log(log);
        if(log=="Enter"){
            pick();
            pickWord();
        }
}