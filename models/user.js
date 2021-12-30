const mongooose = require("mongoose");

const userSchema = mongooose.Schema({
    name: String,
    username: String,
    password:String,
    age: String,
});
const userModel = mongooose.model("practical11",userSchema,"practical11");
module.exports = userModel;