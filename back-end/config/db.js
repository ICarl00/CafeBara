const mongoose = require("mongoose");

const connectDB = async () =>{
    try {
        const con = mongoose.connect(process.env.MONGO_URI);
        console.log("DB CONNECTED " );
    } catch (error) {
        console.log(error);
    }
}

module.exports = {connectDB};