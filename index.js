//Deploy me with this command.
//gcloud beta functions deploy MessengerBot --trigger-http

/*
* HTTP Cloud Function.
*
* @param {Object} req Cloud Function request context.
* @param {Object} res Cloud Function response context.
*/

var express = require('express');
var app = express();
var FB = require('fb');
var sentiment = require('./sentiment')

exports.MessengerBot = function MessengerBot (req, res) {
  var responseIntent = req.body.result.metadata.intentName;
  console.log(responseIntent);
  var response;
  var friends;
  FB.setAccessToken('EAACEP1ZBqcxgBANqfwMUJcGrTrfiDA5GnBY3wFfWfZAaA8R6dH2rCwMNZBLZCxrZAVro3jl1ZBM1di2vyDzOYf4d9vp6HYFy37PF0ZB0UqcrHRU7I3ELne8PfUqmomoH9La4V0oHwCRhHEgKPmjg0GS8JvacLtzQLm6u1XeYSNJKgmKicJ8xzVH');
  function apiFriends(userID){
    FB.api(
      '/' + userID + '/friends',
      'GET',
      {},
      function(FB_Data) {
        //response = FB_Data.summary.total_count;
        var friends = [];
        for(var i = 0; i < FB_Data.data.length; i++) {
            friends += FB_Data.data[i].name
          	if(i != FB_Data.data.length - 1){
              friends += ", ";
            }
          	console.log(i, friends);
        }
        response = "Your friends are: " + friends;
        res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type
        res.send(JSON.stringify({ "speech": response, "displayText": response})); //"speech" is the spoken version of the response, "displayText" is the visual version
        return friends;
      }
    );
  }
  function mutualFriends(){
    var friends1 = apiFriends(127204964763192);
    //var friends2 = apiFriends(112564949562944);
    
    console.log("EO: ", friends1);
    //console.log("EO2: ", friends2);
    
    //I dont code in JS, but this code is asynchronous and I cant run the code below until the code above finishes runnning. Not sure how to get asynchronous code to be syncronous in js
    //something to do with callback function. Not sure how to make it work
    
    //friends1.filter(function(n) {return friends2.indexOf(n) !== -1;});
  };
  
  function posts(){
    FB.api(
      '/127204964763192/posts',
      'GET',
      {},
      function(FB_Data) {
        console.log("POSTS DATA: ", FB_Data);
        var posts = [];
        for(var i = 0; i < FB_Data.data.length; i++) {
            posts += FB_Data.data[i].message
          	if(i != FB_Data.data.length - 1){
              posts += ", ";
            }
          	console.log(i, posts);
        }
        response = "Your posts are: " + posts;
        res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type
        res.send(JSON.stringify({ "speech": response, "displayText": response})); //"speech" is the spoken version of the response, "displayText" is the visual version
        return posts;
      }
    );
  };
  
  function friendsPosts(){
    if(req.body.result.parameters.name == "Bob"){
      FB.api(
        '/112564949562944/posts',
        'GET',
        {},
        function(FB_Data) {
          console.log("POSTS DATA: ", FB_Data);
          var friendsPosts = [];
          for(var i = 0; i < FB_Data.data.length; i++) {
            friendsPosts += FB_Data.data[i].message
            if(i != FB_Data.data.length - 1){
              friendsPosts += ", ";
            }
            console.log(i, friendsPosts);
        }
        response = "Bob's posts are: " + friendsPosts;
        res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type
        res.send(JSON.stringify({ "speech": response, "displayText": response})); //"speech" is the spoken version of the response, "displayText" is the visual version
        return friendsPosts;
        }
      );
    }
    else if(req.body.result.parameters.name == "Lisa"){
      FB.api(
        '/100821414074048/posts',
        'GET',
        {},
        function(FB_Data) {
          console.log("POSTS DATA: ", FB_Data);
          var friendsPosts = [];
          for(var i = 0; i < FB_Data.data.length; i++) {
            friendsPosts += FB_Data.data[i].message
            if(i != FB_Data.data.length - 1){
              friendsPosts += ", ";
            }
            console.log(i, friendsPosts);
        }
        response = "Lisa's posts are: " + friendsPosts;
        res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type
        res.send(JSON.stringify({ "speech": response, "displayText": response})); //"speech" is the spoken version of the response, "displayText" is the visual version
        return friendsPosts;
        }
      );
    }
    else if(req.body.result.parameters.name == "Mark"){
      FB.api(
        '/116524025832957/posts',
        'GET',
        {},
        function(FB_Data) {
          console.log("POSTS DATA: ", FB_Data);
          var friendsPosts = [];
          for(var i = 0; i < FB_Data.data.length; i++) {
            friendsPosts += FB_Data.data[i].message
            if(i != FB_Data.data.length - 1){
              friendsPosts += ", ";
            }
            console.log(i, friendsPosts);
        }
        response = "Mark's posts are: " + friendsPosts;
        res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type
        res.send(JSON.stringify({ "speech": response, "displayText": response})); //"speech" is the spoken version of the response, "displayText" is the visual version
        return friendsPosts;
        }
      );
    }
    else{
      friendsPosts = [];
      res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type
      res.send(JSON.stringify({ "speech": "I didn't catch that. What did you say?", "displayText": "I didn't catch that. What did you say?"})); //"speech" is the spoken version of the response, "displayText" is the visual version
      return friendsPosts;
    }
  }
  
  console.log("response", res);
  if(responseIntent == "Get.Friends"){
  	mutualFriends();
  }
  else if(responseIntent == "Get.Posts"){
    posts();
  }
  else if(responseIntent == "Get.Friends.Posts"){
  	friendsPosts();
  }
  else{
    res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type
    res.send(JSON.stringify({ "speech": "I didn't catch that. What did you say?", "displayText": "I didn't catch that. what did you say?"})); //"speech" is the spoken version of the response, "displayText" is the visual version
  }
  
  //console.log(mut);
  //res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type
  //res.send(JSON.stringify({ "speech": "1", "displayText": "1"})); //"speech" is the spoken version of the response, "displayText" is the visual version
};

exports.sentimentAnalysisBasic = function sentimentAnalysisBasic (req, res) {
  /*req should have json objects content and type
  IE content: text, type: 'PLAIN_TEXT'
  */
  console.log(req);
  scores = sentiment.analyzeSentiment(req);
  console.log(scores)
  res.send("Like this?")
};