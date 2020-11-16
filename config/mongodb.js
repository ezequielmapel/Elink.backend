const mongoose = require('mongoose');
const dbStatus = mongoose.connection;
const uri = '{{ MONGO_URI }}';

mongoose.connect(uri, { useNewUrlParser:true , useUnifiedTopology:true });
dbStatus.on('error', console.error.bind('MongoDB Connection Error'));
dbStatus.once('open', () => console.log('MongoDB Connection Success'));



module.exports = mongoose;
