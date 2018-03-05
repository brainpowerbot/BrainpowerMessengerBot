//Deploy me with this command.
//gcloud beta functions deploy MessengerBot --trigger-http

/*
* HTTP Cloud Function.
*
* @param {Object} req Cloud Function request context.
* @param {Object} res Cloud Function response context.
*/
exports.MessengerBot = function MessengerBot (req, res) {
    var response = req.body.result.resolvedQuery;
    res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type
    res.send(JSON.stringify({ "speech": response, "displayText": response 
    //"speech" is the spoken version of the response, "displayText" is the visual version
    }));
  };