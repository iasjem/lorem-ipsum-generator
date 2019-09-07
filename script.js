const fieldOutputCount = $('#input_count_of_output');
const selectorOutputType = $('#select_type_of_output');
const buttonGenerateOutput = $('#button_generate_output');
const buttonCopyOutput = $('#button_copy_output');
const divOutputDisplay = $('#div_output_display');


/** OBJECT LITERALS */

const SET_OF_WORDS = [
    "vel", "cursus", "metus", "aliquam", "eleifend", "mi", "in", "id", "neque", "nulla", "posuere",
    "ullamcorper", "dignissim", "cras", "tincidunt", "lobortis", "feugiat", "vivamus", "mattis", "nunc",
    "sed", "blandit", "libero", "massa", "neque", "a", "diam", "elit", "faucibus", "ornare", "auctor",
    "ac", "quisque", "rutrum", "gravida", "hendrerit", "est", "nibh", "scelerisque", "fermentum", "dui",
    "ante", "adipiscing", "consectetur", "dolor", "sit", "ipsum", "lorem", "sollicitudin", "tempor", "turpis",
    "labore", "ut", "eiusmod", "do", "orci", "pharetra", "eget", "tristique", "porttitor", "quam", "vitae", "torro",
    "commodo", "mauris", "morbi", "placerat", "fusce", "eu", "quis", "eros", "donec", "odio", "venenatis", "lectus",
    "augue", "purus", "scelerisque", "hac", "enim", "tellus", "platea", "habitasse", "arcu", "dictumst", "ultricies"
];

const FIRST_SENTENCE = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const MAX_COUNT_OF_WORDS_IN_SENTENCE = 10;


/** FUNCTIONS */

const randomize = (count) => Math.floor((Math.random() * count) + 1);

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const clearOutputDisplay = () => divOutputDisplay.html('');

const setOutputDisplay = (output) => divOutputDisplay.html(output);

const getCountOfWords = () => randomize(MAX_COUNT_OF_WORDS_IN_SENTENCE);

const getSetOfWords = () => {
    let index = randomize(SET_OF_WORDS.length - 1);
    return SET_OF_WORDS[index];
};

const setWords = (count) => {
    let words = [];

    for (let i = 0; i < count; i++) {
        let word = capitalize(getSetOfWords());
        words.push(word);
    }

    return words.join(' ').toString();
};

const setSentence = () => {
    let sentence = [];
    let countOfWords = getCountOfWords();

    for (let i = 0; i < countOfWords; i++) {
        sentence.push(getSetOfWords());
    }

    let punctuation = sentence.length > 0 && sentence.length <= 3 ? '!' : '.';
    let newSentence = capitalize(sentence.join(' ').toString() + punctuation);

    return newSentence.concat(' ');
}

const setSentences = (count) => {
    let sentences = [];

    for (let i = 0; i < count; i++) {
        sentences.push(setSentence());
    }

    return sentences.join('').toString();
};

const setParagraphs = (count) => {
    let paragraphs = '';

    return paragraphs;
};

const initGenerator = () => {
    fieldOutputCount.val('1');
    selectorOutputType.val('paragraphs');
    setOutputDisplay(FIRST_SENTENCE);
};


/** JQUERY COMPONENTS */

$(document).ready(initGenerator);

buttonGenerateOutput.click(function () {
    let outputCount = fieldOutputCount.val();
    let outputType = selectorOutputType.val();

    clearOutputDisplay();

    switch (outputType) {
        case 'words':
            let words = setWords(outputCount);
            setOutputDisplay(words);
            break;
        case 'sentences':
            let sentences = setSentences(outputCount);
            setOutputDisplay(sentences);
            break;
        case 'paragraphs':
            setOutputDisplay(FIRST_SENTENCE);
            break;
        default:
            clearOutputDisplay();
            break;
    }
});

buttonCopyOutput.click(function () {

});
