var path = require('path');

var express = require('express');

var genres = require('../data/friends.js');  //change friends.js to genres.js

module.exports = function(app) {
  
  app.get('/api/friends', function(req, res) {
  res.json(genres);
      
}); 
       
    app.post('/api/friends', function(req, res){
            
		var userInput = req.body;
        
		console.log(req.body);
        
//		var userResponses = userInput.scores;
//		
//		var matchName = '';
//		var matchImage = '';
//		var totalDifference = 1000; 
//
//		for (var i = 0; i < genres.length; i++) {
//			
//			var diff = 0;
//			for (var j = 0; j < userResponses.length; j++) {
//				diff += Math.abs(genres[i].scores[j] - userResponses[j]);
//			}
//			
//			if (diff < totalDifference) {
//				
//				totalDifference = diff;
//				matchName = genres[i].name;
//				matchImage = genres[i].photo;
//			}
//		}
//
//		
//		genres.push(userInput);
//
//		
//		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
};