const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");


const checkBtn = (event) => {
    event.preventDefault()
    resultsDiv()
}

const textParser = (event) => {
        result.innerText =  event.target.value
}

const palindromCheckerFuntion = () => {

}

const resultsDiv = (textParser) => {
    const displayDiv = document.createElement('p')
    const text = document.createTextNode(textParser)
    result.style.display = 'block'
    displayDiv.appendChild(text)
};


checkButton.addEventListener('click', checkBtn);
textInput.addEventListener('input', textParser)