const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/chocolates",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose;