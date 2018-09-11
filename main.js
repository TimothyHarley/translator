const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};

const English = () => {
    var translation = document.getElementById('message').value;
    printToDom(translation, 'outputDiv')
};

const spanishWords = {
    "a ":"un ",
    "and ":"y ",
    "christmas ":"navidad ",
    "happy ":"contento ",
    "holidays ":"vacaciones ",
    "i ":"yo ",
    "love ":"amor ",
    "merry ":"alegre ",
    "new ":"nuevo ",
    "wish ":"deseo ",
    "year ":"año ",
    "you ":"tú "
};

const italianWords = {
    "a ":"un ",
    "and ":"e ",
    "christmas ":"natale ",
    "happy ":"contento ",
    "holidays ":"vacanze ",
    "i ":"io ",
    "love ":"amore ",
    "merry ":"allegro ",
    "new ":"nuovo ",
    "wish ":"desiderio ",
    "year ":"anno ",
    "you ":"tu "
};

const frenchWords = {
    "a ":"une ",
    "and ":"et ",
    "christmas ":"noël ",
    "happy ":"content ",
    "holidays ":"vacances ",
    "i ":"je ",
    "love ":"amour ",
    "merry ":"joyeux ",
    "new ":"nouveau ",
    "wish ":"souhait ",
    "year ":"an ",
    "you ":"toi "
};

const Spanish = () => {
    var translationStart = document.getElementById('message').value;
    for (i=0; i < translationStart.length; i++) {
        translationEnd = (spanishWords[translationStart[i]]);
    }
    printToDom(translationEnd, 'outputDiv')
};

const Italian = () => {
    var translationStart = document.getElementById('message').value;
    for (i=0; i < translationStart.length; i++) {
        translationEnd = (italianWords[translationStart[i]]);
    }
    printToDom(translationEnd, 'outputDiv')
};

const French = () => {
    var translationStart = document.getElementById('message').value;
    for (i=0; i < translationStart.length; i++) {
        translationEnd = (frenchWords[translationStart[i]]);
    }
    printToDom(translationEnd, 'outputDiv')
};

