let compairnumber=Math.floor(Math.random()* 100);
let input=document.querySelector('input')
let Guess =document.querySelector('.guess_the_number');
let time_taken=document.querySelector('#chances');
let number=100;
let finaly_win=document.querySelector('#highscore')
let show_Ans=document.querySelector('.showoutput')
let big_box=document.querySelector('#parent')
// let Body=document.querySelector('body')
let  parents=document.querySelector('#parent')
function runcode(){
if(compairnumber>parseInt(input.value)){

    Guess.innerHTML="Your guess is low"
    number--
    time_taken.innerHTML=number
}
else if(compairnumber<parseInt(input.value)){
   
    Guess.innerHTML="Your guess is high"
    number--
    time_taken.innerHTML=number
}
else{
    Guess.innerHTML="🤩🤩You are winner🤩🤩"
    finaly_win.innerHTML=number
    show_Ans.innerHTML=input.value
    parents.style.backgroundColor="red"
}
}

function reset_game(){
    location.reload('parent')
}