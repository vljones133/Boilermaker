const router = require('express').Router();

router.use('/users', require('./users')); // Users? Check.
router.use('/tasks', require('./tasks')); // Tasks? Check.

// Sloths?!?! Get outta town!
router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
