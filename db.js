const mongoose = require("mongoose");

const db = mongoose
  .connect(
    "mongodb+srv://samedkusnale8:SAMM2001@cluster0.kvsrvog.mongodb.net/?retryWrites=true&w=majority"
    )


    exports.db = db;


    const usrSchema = new mongoose.Schema({
      userName: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    });
    
    
    const usr = mongoose.model("usr", usrSchema);

    exports.usr = usr;