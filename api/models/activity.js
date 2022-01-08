const mongoose = require('mongoose');

const activitySchema = mongoose.Schema({
  description: {
    type: String,
    require: [true, 'Please Enter Activity Description'],
  },
});
module.exports = mongoose.model('Activity', activitySchema);
