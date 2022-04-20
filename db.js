
const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect("mongodb://localhost:27017/tokenmanagement", {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false
    }).then(con => {
        console.log(`MongoDB database connected with HOST: ${con.connection.host}`);
    })
}

module.exports = connectDatabase;