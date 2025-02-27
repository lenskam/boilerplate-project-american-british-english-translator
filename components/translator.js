const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishToAmericanSpelling = require("./british-to-american-spelling.js");
const britishToAmericanTitles = require("./british-to-american-titles.js");
const britishOnly = require('./british-only.js');

class Translator {
    translate(text, locale) {
        if (text === undefined || text.trim() === "") return { error: "No text to translate" };

        let translation = text;
        const timeRegex = /(\d{1,2})[.:](\d{2})/g;
    
        // Translate time formats
        translation = translation.replace(timeRegex, (match, p1, p2) => {
          return locale === "american-to-british"
            ? `<span class="highlight">${p1}.${p2}</span>`
            : `<span class="highlight">${p1}:${p2}</span>`;
        });
    
        // Translate titles
        const titles =
          locale === "american-to-british"
            ? americanToBritishTitles
            : britishToAmericanTitles;
        for (const [key, value] of Object.entries(titles)) {
          const regex = new RegExp(`\\b${key}(?=\\s|$)`, "gi");
          translation = translation.replace(regex, `<span class="highlight">${value}</span>`);
        }
    
        // Translate spelling
        const spelling =
          locale === "american-to-british"
            ? americanToBritishSpelling
            : britishToAmericanSpelling;
        for (const [key, value] of Object.entries(spelling)) {
          const regex = new RegExp(`\\b${key}\\b`, "gi");
          translation = translation.replace(regex, `<span class="highlight">${value}</span>`);
        }

        console.log("\n titles : ");
        console.log(titles);
        console.log("\n translation : " + translation);
        console.log("\n text : " + text);
        return translation.length === text.length ? "Everything looks good to me!" : translation; // "Everything looks good to me!"
      }
}

module.exports = Translator;