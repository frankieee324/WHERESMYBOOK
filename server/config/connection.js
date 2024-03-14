const mongoose = require('mongoose');

// Modified the MONGODB_URI in the atlas but still is not working
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/vsbookwander');

module.exports = mongoose.connection;


