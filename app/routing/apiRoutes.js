var friendList = require("../data/friend");

module.exports = function (app) {
    app.get("/api/friendList", function (req, res) {
        res.json(friendList);
    });

    app.post("/api/friendList", function (req,res){
        friendList.push(req.body);        
        res.json(req.body);
    });
}