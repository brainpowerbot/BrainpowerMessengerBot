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
    FB.setAccessToken('EAACEP1ZBqcxgBABbFdldMmtZC0XDlz33mLr4pOYdhK4LZB6qwZAARZBa16ABo8fPZAwtsLfci5nKmQEO7PRMzbM9MtPG4VbdQfBlRrt1WXmM6QB9jXQbgZAjPRMZCAIoUGD9JoqQj7kHR7v6UscpMQlbh8UcovuAjOwD9O2JixVTOVOyKd3VHnThlUoGF1ufkYXvDBeh5SV0W3VR71Arl76bl0XPM8SSEw25w5wNmZCvSTgZDZD');
  	FB.api(
      '/127204964763192/friends',
      'GET',
      {},
      function(response1) {
          console.log(response1);
          response = response1.summary.total_count;
          console.log(response);
          console.log("OUTSIDE: ", response);
          //var response = "This is a sample response from your webhook!"
          res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type
          console.log("hi SDF,.VKSJDHGLKSDFJHGLKJHLK");
          res.send(JSON.stringify({ "speech": response, "displayText": response
          //"speech" is the spoken version of the response, "displayText" is the visual version
          }));
      }
    );
  };