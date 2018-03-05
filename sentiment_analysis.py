import argparse

from google.cloud import language
from google.cloud.language import enums
from google.cloud.language import types

def analyze(text):
	"""
	Function analyses a block of text for positive, negative, or neutral sentiment
	text :: String of sentences. Separates by periods when performing analysis
	"""
	client = language.LanguageServiceClient()
	document = types.Document(
		content=text,
		type=enums.Document.Type.PLAIN_TEXT)
	annotations = client.analyze_sentiment(document=document)
	for index,sentence in enumerate(annotations.sentences):
		sentence_sentiment = sentence.sentiment.score
		print('Sentence %s has a sentiment score of %f' %(index, sentence_sentiment))

	score = annotations.document_sentiment.score
	magnitude = annotations.document_sentiment.magnitude
	print('Overall Sentiment: score of %f with magnitude of %f' %(score, magnitude))

	if(score > 0):
		print("Message is positive")
	elif(score < 0):
		print("Message is negative")
	else:
		print("Message is neutral")


def main():
	# text = """
	# This is a test phrase for the sentimnet analyzer. 
	# It's used to test the wonderful google cloud nlp library.
	# Hopefully it doesn't turn out to be a piece of garbage.
	# """

	parser = argparse.ArgumentParser(description='Perform sentiment analysis on some text.')
	parser.add_argument('text', type=str, nargs=1, help='Text to parse')

	args = parser.parse_args()
	print("Analyzing text:",args.text[0])
	analyze(args.text[0])

if __name__ == '__main__':
	main()
	