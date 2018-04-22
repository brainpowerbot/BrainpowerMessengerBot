const language = require('@google-cloud/language');

const client = new language.LanguageServiceClient();
async function analyzeSentiment(text){
    const document = {
        content: text,
        type    : 'PLAIN_TEXT'
    };
    return new Promise(function(resolve, reject){
        client
        .analyzeSentiment({document: document})
        .then(results => {
            const sentiment = results[0].documentSentiment;
            resolve(`Document sentiment score: ${sentiment.score} and Document sentiment magnitude: ${sentiment.magnitude}`);
        }).catch(err => {
            console.error("ERROR:", err);
        });
    });
}
exports.analyzeSentiment = analyzeSentiment;