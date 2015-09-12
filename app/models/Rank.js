var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var RankSchema = new Schema({
    name: String,
    level: String,
    requiredScore: Number,
    createdAt: {type: Date, default: Date.now },
    updatedAt: {type: Date, default: Date.now }
});

module.exporrts = mongoose.model("Rank", RankSchema);