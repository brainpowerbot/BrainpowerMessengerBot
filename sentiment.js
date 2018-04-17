/*Change name to post.js at the end*/
// process.argv.forEach(function (val, index, array) {
// 	console.log(index + ': ' + val)
// });

const language = require('./node_modules/@google-cloud/language');

const client = new language.LanguageServiceClient();

const testSentence = "This is a test file. I am using it to test the sentiment of various sentences. This is the stupidest sentence of them all. This motherfucker is probably has the lowest fucking sentiment of all the sentences. I hope the last sentence dies. However, I think that this tool is great. I'm not sure if it will work, but I really hope it does. If it does, I will be the happiest person in the room. Technology sure is great!";

var text;
if(process.argv[2] === undefined) {
	text = testSentence;
} else {
	text = process.argv[2];
}

var sentimentAnalyzer = (function () {
	var analyzeSentiment = function (text) {
		/*
		Returns an array of sentences and their sentiment score. The last element in the array is the overall sentiment
		*/

		const document = function () {
			try{
				JSON.parse(text);
			} catch (e) {
				console.log("Building document")
				return {
					content: text,
					type: 'PLAIN_TEXT'
				}
			}
			return text 
		}();
		console.log(document);

		var sentencesSentiment = [];


		client
			.analyzeSentiment({document: document})
			.then(results => {
				const sentences = results[0].sentences;
				sentences.forEach(function (sentence) {
					console.log(sentence.text.content);
					console.log(`Sentiment score: ${sentence.sentiment.score}`);
					console.log();
					sentencesSentiment.push((sentence.text.content,sentence.sentiment.score));
				})
				const sentiment = results[0].documentSentiment;
				console.log(`Document sentiment score: ${sentiment.score}`);
				console.log(`Document sentiment magnitude: ${sentiment.magnitude}`);
				sentencesSentiment.push((sentiment.score,sentiment.magnitude));
			})
			.catch(err => {
				console.error("ERROR:", err);
			});
		return sentencesSentiment;
	}
	return {
		analyzeSentiment: analyzeSentiment
	}
})();

module.exports = {analyzeSentiment: sentimentAnalyzer.analyzeSentiment};

