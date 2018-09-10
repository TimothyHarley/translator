console.log ('test');

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};

const English = () => {
    var translation = document.getElementById('message').value;
    printToDom(translation, 'outputDiv')
};

const spanishWords = {
    " a ":" un ",
    " and ":" y ",
    " christmas ":" navidad ",
    " happy ":" contento ",
    " holidays ":" vacaciones ",
    " i ":" yo ",
    " love ":" amor ",
    " merry ":" alegre ",
    " new ":" nuevo ",
    " wish ":" deseo ",
    " year ":" año ",
    " you ":" tú "
};

const Spanish = () => {
    var translation = document.getElementById('message').value;
    
}