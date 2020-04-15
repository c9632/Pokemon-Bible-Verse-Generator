const osmosis = require("osmosis");
const sbd = require("sbd");
const syllable = require("syllable");
const pos = require("pos");
const tagger = new pos.Tagger(); // We only need one
const lexer = new pos.Lexer(); // Again, only one needed
const rhyme = require("rhyme");

let lines = [];

var randomTitle = ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah", "Esther", "Job", "Psalms", "Proverbs", "Ecclesiastes", "The Song of Solomon", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi"];
var finalTitle;
var randomIndex;
var finalTitle;
var randomNumber;
var randomNumber2;
var sentenceNumStructure;

//extend the lexicon
tagger.extendLexicon({'king': ['NN']});
/*var words = new pos.Lexer().lex('Did you suffer so many things in vain—if indeed it was in vain?');
var taggedWords = tagger.tag(words);
for (i in taggedWords) {
    var taggedWord = taggedWords[i];
    var word = taggedWord[0];
    var tag = taggedWord[1];
    console.log(word + " /" + tag);
}*/

function scramble(array) {
    for (let i = 0; i < array.length; i++) {
        const randomIndex = Math.floor(Math.random() * array.length);
        const tmp = array[randomIndex];
        array[randomIndex] = array[i];
        array[i] = tmp;
    }
}

function low(array){
    for (let i = 0; i < array.length; i++){
        array[i] = array[i].toLowerCase();
    }
}

async function getText() {
    return new Promise((resolve, reject) => {
        let contents = [];
        osmosis.get("https://www.openbible.info/topics/old_testament") // Crawl this webpage
            .find("p") // Get all elements matching this CSS selector
            .set("contents") // Set the text contents of those elements to the "contents" property of an object
            .data(item => contents.push(item.contents)) // Pass that object to this function
            .done(() => resolve(contents)) // Call this when you're done
            .error(e => reject(e));
    });
}

async function getText2() {
    return new Promise((resolve, reject) => {
        let contents2 =[];
        osmosis.get("https://daily.pokecommunity.com/2019/04/19/analysis-of-the-first-generation-pokemon-game-development-process/")
            .find("p")
            .set("contents2")
            .data(item => contents2.push(item.contents2))
            .done(() => resolve(contents2))
            .error(e => reject(e));
    });
}

async function posPoem() {
    const paragraphs = await getText();
    const paragraphs2 = await getText2();
    const posTagsVBD = [ 'VBD' ]; // This is the tag for a gerund
    const posTagsPRP = ['PRP'];
    const posTagsPRPS = ['PRP$'];
    const posTagsMD = ['MD'];
    const posTagsVBP = ['VBP'];
    const posTagsVB = ['VB'];
    const posTagsCC = ['CC'];
    const posTagsRB = ['RB'];
    const posTagsJJ = ['JJ'];
    const posTagsNNS = ['NNS'];
    const posTagsDT = ['DT'];
    const posTagsIN = ['IN'];
    const posTagsNN = ['NN'];
    const posTagsUH = ['UH'];
    const posTagsDOT = ['.'];
    const posTagsCOM = [','];
    const posTagsCOL = [';'];
 
    const randVBD = [];
    const randPRP = [];
    const randVB = [];
    const randRB = [];
    const randDT = [];
    const randJJ = [];
    const randUH = [];
    const randNNS = [];
    const randIN = [];
    const randCC = [];
    const randNN = [];
    const randDOT = [];
    const randPRPS = [];
    const randMD = [];
    const randVBP = [];
    const randCOM = [];
    const randCOL = [];
 
    paragraphs.forEach(pg => {
        const sentences = sbd.sentences(pg);
        sentences.forEach(sentence => {
            randomNumber = Math.floor(Math.random()*20+1);
            randomNumber2 = Math.floor(Math.random()*35+1);
            randomIndex = Math.floor(Math.random()*randomTitle.length);
            sentenceNumStructure = Math.floor(Math.random()*3);
            finalTitle = randomTitle[randomIndex];
            const lexes = lexer.lex(sentence);
            const tags = tagger.tag(lexes);
            tags.forEach(lexpair => {
                // If we want to collect this part of speech
                /*if (posTagsVBD.includes(lexpair[1])) {
                    // Exclude duplicates
                    if (!randVBD.includes(lexpair[[0]])) {
                        randVBD.push(lexpair[0]);
                    }
                }*/
                if (posTagsPRP.includes(lexpair[1])){
                    if (!randPRP.includes(lexpair[[0]])){
                        randPRP.push(lexpair[0]);
                    }
                }
                /*if (posTagsVB.includes(lexpair[1])){
                    if (!randVB.includes(lexpair[[0]])){
                        randVB.push(lexpair[0]);
                    }
                }*/
                if (posTagsRB.includes(lexpair[1])){
                    if (!randRB.includes(lexpair[[0]])){
                        randRB.push(lexpair[0]);
                    }
                }
                if (posTagsJJ.includes(lexpair[1])){
                    if (!randJJ.includes(lexpair[[0]])){
                        randJJ.push(lexpair[0]);
                    }
                }
                /*if (posTagsNNS.includes(lexpair[1])){
                    if (!randNNS.includes(lexpair[[0]])){
                        randNNS.push(lexpair[0]);
                    }
                }*/
                if (posTagsIN.includes(lexpair[1])){
                    if (!randIN.includes(lexpair[[0]])){
                        randIN.push(lexpair[0]);
                    }
                }
                /*if (posTagsNN.includes(lexpair[1])){
                    if (!randNN.includes(lexpair[[0]])){
                        randNN.push(lexpair[0]);
                    }
                }*/
                if (posTagsDOT.includes(lexpair[1])){
                    if (!randDOT.includes(lexpair[[0]])){
                        randDOT.push(lexpair[0]);
                    }
                }
                if (posTagsPRPS.includes(lexpair[1])){
                    if (!randPRPS.includes(lexpair[[0]])){
                        randPRPS.push(lexpair[0]);
                    }
                }
                if (posTagsMD.includes(lexpair[1])){
                    if (!randMD.includes(lexpair[[0]])){
                        randMD.push(lexpair[0]);
                    }
                }
                /*if (posTagsVBP.includes(lexpair[1])){
                    if (!randVBP.includes(lexpair[[0]])){
                        randVBP.push(lexpair[0]);
                    }
                }*/
                if (posTagsCOM.includes(lexpair[1])){
                    if (!randCOM.includes(lexpair[[0]])){
                        randCOM.push(lexpair[0]);
                    }
                }
                if (posTagsCOL.includes(lexpair[1])){
                    if (!randCOL.includes(lexpair[[0]])){
                        randCOL.push(lexpair[0]);
                    }
                } 
                if (posTagsCC.includes(lexpair[1])){
                    if (!randCC.includes(lexpair[[0]])){
                        randCC.push(lexpair[0]);
                    }
                } 
                if (posTagsDT.includes(lexpair[1])){
                    if (!randDT.includes(lexpair[[0]])){
                        randDT.push(lexpair[0]);
                    }
                } 
                if (posTagsUH.includes(lexpair[1])){
                    if (!randUH.includes(lexpair[[0]])){
                        randUH.push(lexpair[0]);
                    }
                } 
            });
        });
    });
    paragraphs2.forEach(pg => {
        const sentences = sbd.sentences(pg);
        sentences.forEach(sentence => {
            const lexes = lexer.lex(sentence);
            const tags = tagger.tag(lexes);
            tags.forEach(lexpair => {
                // If we want to collect this part of speech
                if (posTagsVBD.includes(lexpair[1])) {
                    // Exclude duplicates
                    if (!randVBD.includes(lexpair[[0]])) {
                        randVBD.push(lexpair[0]);
                    }
                }
                if (posTagsPRP.includes(lexpair[1])){
                    if (!randPRP.includes(lexpair[[0]])){
                        randPRP.push(lexpair[0]);
                    }
                }
                if (posTagsVB.includes(lexpair[1])){
                    if (!randVB.includes(lexpair[[0]])){
                        randVB.push(lexpair[0]);
                    }
                }
                if (posTagsRB.includes(lexpair[1])){
                    if (!randRB.includes(lexpair[[0]])){
                        randRB.push(lexpair[0]);
                    }
                }
                if (posTagsJJ.includes(lexpair[1])){
                    if (!randJJ.includes(lexpair[[0]])){
                        randJJ.push(lexpair[0]);
                    }
                }
                if (posTagsNNS.includes(lexpair[1])){
                    if (!randNNS.includes(lexpair[[0]])){
                        randNNS.push(lexpair[0]);
                    }
                }
                if (posTagsDT.includes(lexpair[1])){
                    if (!randDT.includes(lexpair[[0]])){
                        randDT.push(lexpair[0]);
                    }
                } 
                if (posTagsIN.includes(lexpair[1])){
                    if (!randIN.includes(lexpair[[0]])){
                        randIN.push(lexpair[0]);
                    }
                }
                if (posTagsNN.includes(lexpair[1])){
                    if (!randNN.includes(lexpair[[0]])){
                        randNN.push(lexpair[0]);
                    }
                }
                if (posTagsDOT.includes(lexpair[1])){
                    if (!randDOT.includes(lexpair[[0]])){
                        randDOT.push(lexpair[0]);
                    }
                }
                if (posTagsPRPS.includes(lexpair[1])){
                    if (!randPRPS.includes(lexpair[[0]])){
                        randPRPS.push(lexpair[0]);
                    }
                }
                if (posTagsMD.includes(lexpair[1])){
                    if (!randMD.includes(lexpair[[0]])){
                        randMD.push(lexpair[0]);
                    }
                }
                if (posTagsVBP.includes(lexpair[1])){
                    if (!randVBP.includes(lexpair[[0]])){
                        randVBP.push(lexpair[0]);
                    }
                }
                if (posTagsCOM.includes(lexpair[1])){
                    if (!randCOM.includes(lexpair[[0]])){
                        randCOM.push(lexpair[0]);
                    }
                }
                if (posTagsCOL.includes(lexpair[1])){
                    if (!randCOL.includes(lexpair[[0]])){
                        randCOL.push(lexpair[0]);
                    }
                } 
                if (posTagsCC.includes(lexpair[1])){
                    if (!randCC.includes(lexpair[[0]])){
                        randCC.push(lexpair[0]);
                    }
                }
                if (posTagsDT.includes(lexpair[1])){
                    if (!randDT.includes(lexpair[[0]])){
                        randDT.push(lexpair[0]);
                    }
                }  
                if (posTagsUH.includes(lexpair[1])){
                    if (!randUH.includes(lexpair[[0]])){
                        randUH.push(lexpair[0]);
                    }
                } 
            });
        });
    });
    scramble(randVBD);
    scramble(randNN);
    scramble(randPRP);
    scramble(randVB);
    scramble(randRB);
    scramble(randJJ);
    scramble(randNNS);
    scramble(randDT);
    scramble(randIN);
    scramble(randDOT);
    scramble(randPRPS);
    scramble(randCC);
    scramble(randMD);
    scramble(randVBP);
    scramble(randCOL);
    scramble(randCOM);
    scramble(randUH);

    low(randVBD);
    low(randUH);
    low(randDT);
    low(randCC);
    low(randNN);
    low(randPRP);
    low(randVB);
    low(randRB);
    low(randJJ);
    low(randNNS);
    low(randIN);
    low(randPRPS);
    low(randMD);
    low(randVBP);

    
    //console.log(randVBD);
    if (sentenceNumStructure === 0){
        lines.push(randIN[0] + " " + randIN[1] + " " + randPRP[0] + randCOM[0] + " " + randPRPS[0] + " " + randNN[0] + " " + randMD[0] + " " + randRB[0] + " " + randJJ[0] + randCOM[0] + " " + randCC[0] + " " + randMD[0] + " " + randPRP[1] + " " + randVBP[0] + " " + randNN[1] + randCOL[0] + " " + randPRP[1] + " " + randMD[0] + " " + randVB[0] + " " + randPRPS[1] + " " + randNNS[0] + " " + randIN[2] + " " + randPRPS[1] + " " + randNNS[2] + randDOT[0] + " " + " " + " " + " " + " - " +finalTitle + " " + randomNumber+":"+randomNumber2 );
    }else if (sentenceNumStructure === 1){
        lines.push(randPRP[0] + " " + randVBP[0] + " " + randPRP[0] + " " + randMD[0] + " " + randVB[0] + " " + randDT[0] + " " + randNN[0] + " " + randNN[1] + " " + randCC[0] + " " + randVBD[0] + " " + randVB[1] + " " + randIN[0] + " " + randPRPS[0] + " " + randNN[2] + randDOT[0] + " " + randUH[0] + " " + randMD[1] + " " + randPRPS[1] + " " + randNNS[0] + " " + randVB[2] + " " + randIN[1] + " " + randNNS[1] + " " + randIN[0] + " " + randDT[0] + " " + randNN[3]+randCOM[0] + " " + randCC[0] + " " + randDT[0] + " " + randNN[4] + " " + randIN[0] + " " + randPRPS[1] + " " + randNN[5] + " " + randIN[1] + " " + randNNS[2]+ " " + " " + " " + " " + " - " +finalTitle + " " + randomNumber+":"+randomNumber2);
    }else if(sentenceNumStructure === 2){
        lines.push(randVBD[0] + " " + randPRP[0] + " " + randVB[0] + " " + randRB[0] + " " + randJJ[0] + " " + randNNS[0] + " " + randIN[0] + " " + randNN[0] + " " + randRB[1] + " " + randPRP[1] + " " + randVBD[1] + " " + randIN[0] + " " + randJJ[1]+randDOT[0] +" " + " - " +finalTitle + " " + randomNumber+":"+randomNumber2 );
    }
    //return randIN.slice(0, 10);
    return lines;
}

async function makePoem() {
    return await posPoem();
    //return await rhymingPoem();
}

if (require.main === module) {
    // getText();
    makePoem().then(res => console.log(res));
}

module.exports = {
    makePoem
};

/*
async function loadRhymingDictionary() {
    return new Promise((resolve) => {
        rhyme(r => resolve(r));
    });
}

async function firstWordsPoem() {
    const paragraphs = await getText();
    const firstWords = paragraphs.map(pg => {
        const firstSpace = pg.indexOf(" ");
        return pg.slice(0, firstSpace);
    });
    return firstWords.join(" ");
}

function cleanText(text) {
    let cleanerText = text.replace(/\[[0-9]+\]/g, "");
    return cleanerText;
}

async function haikuPoem() {
    // 1. Get the text
    const paragraphs = await getText2();
    let fragments = [];
    paragraphs.forEach(paragraph => {
        // 2a. Clean the paragraph
        const cleanParagraph = cleanText(paragraph);
        // 2. Split the paragraph into sentences
        const sentences = sbd.sentences(cleanParagraph);
        sentences.forEach(sentence => {
            // 3. Split the sentences by commas
            let pieces = sentence.split(",");

            // 3b. Filter pieces with numbers
            pieces = pieces.filter(piece => {
                return !(piece.match(/[0-9]+/g));
            });

            // Put those pieces into an array called fragments

            fragments = fragments.concat(pieces);
        });
    });

    // 4. Get 5 and 7 syllable pieces
    const fiveSyllableFragments = fragments.filter(fragment => syllable(fragment) === 5);
    const sevenSyllableFragments = fragments.filter(fragment => syllable(fragment) === 7);

    // 4b. Scramble the fragment arrays
    scramble(fiveSyllableFragments);
    scramble(sevenSyllableFragments);

    // 5. Make them into a haiku
    return [
        fiveSyllableFragments[0],
        sevenSyllableFragments[0],
        fiveSyllableFragments[1]
    ];
}

async function rhymingPoem() {
    const paragraphs = await getText();
    const rhymingDictionary = await loadRhymingDictionary();
    const rhymeGroups = {};

    // Assume fragment is an array of words
    function storeFragment(fragment) {
        let lastWord = fragment.slice(-1)[0];
        let pronunciations = rhymingDictionary.pronounce(lastWord);
        if (pronunciations && pronunciations.length > 0) {
            // Assume that the rhyme class is the last three phonemes
            // This isn't really true, but it's a decent approximation
            const rhymeClass = pronunciations[0].slice(-3).join(" ");

            // If we've never encountered a word like this, create a new array
            if (!rhymeGroups[rhymeClass]) rhymeGroups[rhymeClass] = [];

            // Push this fragment into the array
            rhymeGroups[rhymeClass].push(fragment);
        }
    }

    // Go through the paragraphs, chop them into fragments and store them
    paragraphs.forEach(pg =>{
        const cleanParagraph = cleanText(pg);
        const sentences = sbd.sentences(cleanParagraph);
        sentences.forEach(sentence => {
            let lexes = lexer.lex(sentence); // Use this to get an array of words
            for (let i = 0; i < lexes.length - 5; i++) {
                let fragment = lexes.slice(i, i + 5);
                storeFragment(fragment);
            }
        });
    });

    // Some of the rhyme classes won't be useful. They're too short and they contain
    // only duplicates
    let goodKeys = Object.keys(rhymeGroups);
    goodKeys = goodKeys.filter(key => {
        const lastWords = rhymeGroups[key].map(fragment => fragment.slice(-1)[0]); // Get the last word of each fragment
        // Make sure that they're not all the same
        return !lastWords.every(word => word.toLowerCase() === lastWords[0].toLowerCase()); 
    });

    // Now we're equipped to build our poem
    // This function gets a rhyming couplet
    function getCouplet(goodKeys, rhymeGroups) {
        scramble(goodKeys);
        const rhymingFragments = rhymeGroups[goodKeys[0]];
        scramble(rhymingFragments);
        const fragment1 = rhymingFragments[0];
        const fragmentsWithADifferentLastWord = rhymingFragments.filter(fragment => {
            return fragment.slice(-1)[0].toLowerCase() !== fragment1.slice(-1)[0].toLowerCase();
        });
        scramble(fragmentsWithADifferentLastWord);
        const fragment2 = fragmentsWithADifferentLastWord[0];
        return [fragment1.join(" "), fragment2.join(" ")];
    }

    // Uncomment if you'd rather write an elizabethan sonnet
    // const lines = [];
    
    // for (let i = 0; i < 3; i++) {
    //     const coupletA = getCouplet(goodKeys, rhymeGroups);
    //     const coupletB = getCouplet(goodKeys, rhymeGroups);
    //     lines.push(coupletA[0]);
    //     lines.push(coupletB[0]);
    //     lines.push(coupletA[1]);
    //     lines.push(coupletB[1]);
    // }

    // const couplet = getCouplet(goodKeys, rhymeGroups);
    // lines.push(couplet[0]);
    // lines.push(couplet[1]);

    // return lines;

    return getCouplet(goodKeys, rhymeGroups);
    
}
*/