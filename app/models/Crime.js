var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CrimeSchema = new Schema({
    title: String,
    description: String,
    latLong: [String, String],
    author: {type: Schema.ObjectId, ref: 'UserSchema'},
    type: {type: Schema.ObjectId, ref: 'CrimeTypeSchema'},
    source: {type: String, default: null},
    confirmations: {type: Number, default: 0},
    eventDate: Date,
    createdAt: Date,
    updatedAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model("Crime", CrimeSchema);