console.log ('test');

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};

const English = () => {
    var translation = document.getElementById('message').value ;
    printToDom(translation, 'outputDiv')
};

