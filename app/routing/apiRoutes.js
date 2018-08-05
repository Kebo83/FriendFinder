const friendsArray = require("../data/friends.js");


module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
    console.log(friendsArray);
  });

  app.post("/api/friends", function(req, res) {
   res.json(friendsArray);
    var NewFriendInfo = req.body.scores;
    var ComparisonArray = [];
    var ComparisonTotal = 0;
    var bestMatch = 0;

    //runs through all current friends in list
    for(var i=0; i<friendsArray.length; i++){
      var scoresDiff = 0;
      //run through scores to compare friends
      for(var j=0; j<NewFriendInfo.length; j++){
        scoresDiff += (Math.abs(parseInt(friendsArray[i].scores[j]) - parseInt(NewFriendInfo[j])));
      }

      //push results into ComparisonArray
      ComparisonArray.push(scoresDiff);
    }

    //after all friends are compared, find best match
    for(var i=0; i<ComparisonArray.length; i++){
      if(ComparisonArray[i] <= ComparisonArray[bestMatch]){
        bestMatch = i;
      }
    }

    //return bestMatch friendsArray
    var bff = friendsArray[bestMatch];
    res.json(bff);

    //pushes new submission into the friendsList array
    friendsArray.push(req.body);
  });
};

  // });
// app.post('/api/friends', function(req,res){
    
//     var NewFriendInfo = req.body.scores;
//       console.log(NewFriendInfo);
//     var ComparisonArray = [];
//     var ComparisonTotal = 0;
//     var bestMatch = 0;
// });
// console.log(NewFriendInfo);
// };


