const express = require('express');
const router = express.Router();

const {
  newActivity,
  getActivities,
  deleteActivity,
  updateActivity,
} = require('../controllers/activityController');

router.route('/activity/new').post(newActivity);
router.route('/activities').get(getActivities);
router.route('/activity/:id').delete(deleteActivity);
router.route('/activity/:id').put(updateActivity);
module.exports = router;
