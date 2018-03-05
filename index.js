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

exports.MessengerBot = function MessengerBot (req, res) {
  var response;
  var friends = [];
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
            friends.push(FB_Data.data[i].name);
          console.log("1", friends);
        }
        return friends;
      }
    );
  }
  function mutualFriends(){
    friends1 = apiFriends(127204964763192);
    friends2 = apiFriends(112564949562944);
    
    //I dont code in JS, but this code is asynchronous and I cant run the code below until the code above finishes runnning. Not sure how to get asynchronous code to be syncronous in js
    //something to do with callback function. Not sure how to make it work
    
    //friends1.filter(function(n) {return friends2.indexOf(n) !== -1;});
  }
  
  mutualFriends();
  
  //console.log(mut);
  res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type
  res.send(JSON.stringify({ "speech": "1", "displayText": "1"})); //"speech" is the spoken version of the response, "displayText" is the visual version
};
