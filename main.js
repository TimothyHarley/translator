const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};

const spanishWords = {
    "a":"un",
    "and":"y",
    "christmas":"navidad",
    "happy":"contento",
    "holidays":"vacaciones",
    "i":"yo",
    "love":"amor",
    "merry":"alegre",
    "new":"nuevo",
    "wish":"deseo",
    "year":"año",
    "you":"tú"
};

const italianWords = {
    "a":"un",
    "and":"e",
    "christmas":"natale",
    "happy":"contento",
    "holidays":"vacanze",
    "i":"io",
    "love":"amore",
    "merry":"allegro",
    "new":"nuovo",
    "wish":"desiderio",
    "year":"anno",
    "you":"tu"
};

const frenchWords = {
    "a":"une",
    "and":"et",
    "christmas":"noël",
    "happy":"content",
    "holidays":"vacances",
    "i":"je",
    "love":"amour",
    "merry":"joyeux",
    "new":"nouveau",
    "wish":"souhait",
    "year":"an",
    "you":"toi"
};

const Spanish = () => {
    const translationStart = document.getElementById('message').value;
    let translation = '';
    const translationSplit = (translationStart.toLowerCase().split(' '))
    for (i=0; i < translationSplit.length; i++) {
        translation += (spanishWords[translationSplit[i]]) + ' ';
    }
    printToDom(translation, 'outputDiv')
};

const Italian = () => {
    const translationStart = document.getElementById('message').value;
    let translation = '';
    const translationSplit = (translationStart.toLowerCase().split(' '))
    for (i=0; i < translationSplit.length; i++) {
        translation += (italianWords[translationSplit[i]]) + ' ';
    }
    printToDom(translation, 'outputDiv')
};

const French = () => {
    const translationStart = document.getElementById('message').value;
    let translation = '';
    const translationSplit = (translationStart.toLowerCase().split(' '))
    for (i=0; i < translationSplit.length; i++) {
        translation += (frenchWords[translationSplit[i]]) + ' ';
    }
    printToDom(translation, 'outputDiv')
};

