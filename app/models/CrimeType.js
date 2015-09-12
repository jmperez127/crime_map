var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CrimeTypeSchema = new Schema({
    name: String,
    description: String,
    icon: String,
    severity: Number,
    createdAt: {type: Date, default: Date.now },
    updatedAt: {type: Date, default: Date.now }
});

module.exporrts = mongoose.model("CrimeType", CrimeTypeSchema);