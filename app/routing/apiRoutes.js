var friendsData = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {

    for (i = 0 ; i < friendsData.length ; i++) {
      var totaldifference = 50;
      var indexofFriend = 0;
      var diff = Math.abs(parseInt(req.body.total) - parseInt(friendsData[i].total));
  
      if (diff < totaldifference) {
      totaldifference += diff;
      indexofFriend = i;
      }
    }
  friendsData.push(req.body)
  res.json(friendsData[indexofFriend]);
    
  });

 
};
