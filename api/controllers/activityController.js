const Activity = require('../models/activity');

exports.newActivity = async (req, res, next) => {
  const activity = await Activity.create(req.body);
  res.status(201).json({
    ///201 created
    sucess: true,
    activity,
  });
};
exports.getActivities = async (req, res, next) => {
  const activities = await Activity.find();
  res.status(200).json({
    //200 OK
    sucess: true,
    message: 'this route will show all activities',
    activities,
  });
};

exports.deleteActivity = async (req, res, next) => {
  const activity = await Activity.findById(req.params.id);

  //db.collection.deleteOne() deletes the first document that matches the filter.
  // Use a field that is part of a unique index such as _id for precise deletions.
  //from : https://docs.mongodb.com/manual/reference/method/db.collection.deleteOne/#mongodb-method-db.collection.deleteOne
  activity.deleteOne();
  res.status(200).json({
    //200 OK
    sucess: true,
    message: 'activity',
    activity,
  });
};

exports.updateActivity = async (req, res, next) => {
  // catchAsyncError to catch the new ErrorHandler
  //let activity = await Activity.findById(req.params.id);
  /// if (!activity) {
  ///error not found
  //}

  activity = await Activity.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidator: true,
  });

  res.status(200).json({
    success: true,
    activity,
  });
};
