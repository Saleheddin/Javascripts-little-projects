// api 
const apiUrl = 'https://zenquotes.io/api/quotes/';
const adviceURL = "https://api.adviceslip.com/advice"

let quotContainer = document.querySelector('.advices');
console.log("this is the quotecontainer", quotContainer);
//getting the button
const generateQuoteButton = document.querySelector('button');
console.log("this is the button element", generateQuoteButton);

//fetching advices api

async function fetchForAdvice() {
    try {
        const response = await fetch(adviceURL);
        var data = await response.json();
        quotContainer.parentElement.style.display="block";
        quotContainer.innerHTML = data.slip.advice;
    } catch (e) {
        console.log(e.message);
    }
}

generateQuoteButton.addEventListener('click', fetchForAdvice);

document.addEventListener('DOMContentLoaded',function(e) {
    try{
        if(quotContainer.innerHTML.trim() === '') {
            quotContainer.parentElement.style.display = 'none';
        }else{
            quotContainer.style.display = 'block';
        }
    }catch (e) {
        console.log(e.message);
    }
});