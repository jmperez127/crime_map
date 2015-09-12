var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    username: String,
    country: {type: String, default: "Venezuela"},
    rank: {type: Schema.ObjectId, ref: "RankSchema"},
    city: String,
    createdAt: {type: Date, default: Date.now },
    updatedAt: {type: Date, default: Date.now }
});

module.exporrts = mongoose.model("User", UserSchema);