function displayDate(){
    const date = new Date();
    let date_display = document.getElementById("time");
    let hours = date.getHours();
    let am_pm = "am";

    if(hours >= 12){
        am_pm = "pm";
        hours -= 12;
    }

    let time = hours + ":" + date.getMinutes() + am_pm;
    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"];
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
        "October", "November", "December"];

    date_display.innerHTML = "Today is " + time + " on " + week[date.getDay()] 
        + ", " + date.getDate() +" " + month[date.getMonth()] + ", " + date.getFullYear();
}

displayDate();

function GetInput(){
    let name_input = document.getElementById("name");
    let feeling_input = document.getElementById("feeling");
    let favorite_number = document.getElementById("favorite_number");
    let submit_form = document.getElementById("submit_form");

    submit_form.addEventListener('submit', (e) => {
        let name =  name_input.value;
        let feeling = feeling_input.value;
        let number = favorite_number.value;
        alert("The New Prawn welcomes you, " + name + "!" + "\n"+ 
        "We're glad you are doing " + feeling + "!");
        polygon(Math.round(Math.abs(number)));
    });
}

GetInput();

function polygon(number){
    let shapes = ["monogon", "digon", "trigon", "tetragon", 
        "pentagon", "hexagon", "heptagon", "octagon", "nonagon", "decagon"];
    number = Math.round(Math.abs(number));
    alert("The polygon with " + number + " side(s) is called a " + shapes[number - 1] + ".");
}

let button_action_display = document.getElementById("button_action_display");

function pFunction(){
    document.getElementById("pWord").addEventListener('click', () => {
        button_action_display.innerHTML = `You chose <b>P</b>aper. I chose scissors. Sorry, you lose!`;
    });
}
pFunction();

function rFunction(){
    let rWords = [`You chose <b>R</b>ock. I chose paper. You lose, again!`,
    "We both chose <b>R</b>ock. It's a tie!"];
    document.getElementById("rWord").addEventListener('click', () => {
        let number = Math.trunc(Math.random() * 2);
        button_action_display.innerHTML = rWords[number];
    });
}
rFunction()

function aFunction(){
    document.getElementById("aWord").addEventListener('click', () => {
        button_action_display.innerHTML = `&#127908;bcdefg&#127925;pr<b>A</b>wn&#127926;`;
    });
}
aFunction();

function wFunction(){
    document.getElementById("wWord").addEventListener('click', () => {
        button_action_display.innerHTML = `Ultra secret <b>W</b>inning strat? Choose paper next round ;)`;
    });
}
wFunction();

function nFunction(){
    document.getElementById("nLetter").addEventListener('click', () => {
        button_action_display.innerHTML = `<b>N</b>ot a shirmp!`;
    });
}
nFunction();


