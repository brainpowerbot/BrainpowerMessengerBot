# Brainpower MessengerBot
Dialog flow chat bot

# Things you will need to recreate bot
- A google account

# Dialogflow

Step 1: Log into [Dialogflow](https://dialogflow.com/) using a google account

Step 2: Create a new "agent". This is essentially the project name for the chatbot

Step 3: you will now be able to add/remove [intents](https://dialogflow.com/docs/intents "Dialogflow Intent Documentation") for the bot. [MessengerBot.zip](https://github.com/brainpowerbot/BrainpowerMessengerBot/blob/master/MessengerBot.zip) can be used to import all of the intents that were used for our project. Just hit the cog symbol next to your Dialogflow project name and navigate to "Export and Import". When prompted to select which .zip file to use, select the one that is within this repo

# Facebook App and Test Environment

Since Facebook will not allow the access to people's data that is necessary for this project, a Facebook Developer Test Environment is used as a proof of concept. In that environment, data that isn't normally accessible can be accessed for fake "users" of your app.

Step 1: [Create](https://developers.facebook.com/) a facebook app

Step 2: Once in Facebook app dashboard, navigate to Roles > Test Users on the side bar

Step 3: Create some test users and manage their friends, posts, profile.

Step 4: Access a test users access token by hitting edit on one test user and selecting "Get an access token for this test user"

Step 5: Read the [facebook api documentation](https://developers.facebook.com/docs/) to learn how to set up code for the google cloud function to send and reviece stuff from facebook to dialogflow using this test user access token.

# Google Cloud

You will have to use gCloud functions for any webhooks you will need for your bot

Step 1: Log in to [gCloud](https://cloud.google.com/) using the same google account from above. Then navigate to the Google cloud console by hitting the "Console" button.

Step 2: The Dialogflow chat bot project name should show up in a drop-down menu right next to "Google Cloud Platform" on the main navigation bar. Select the Dialogflow project.

Step 3: Follow [this document](https://dialogflow.com/docs/getting-started/basic-fulfillment-conversation) on how to set up a webhook for your dialogflow bot

Step 4: Read the [documents](https://cloud.google.com/functions/docs/) that explain how to use "cloud functions" and how to deploy the facebook api code so that dialogflow can use data from Facebook
