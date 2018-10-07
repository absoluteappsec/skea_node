var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('users/index');
});

/* GET "wtf" */
router.get('/w*f', function(req, res, next) {
    res.render('users/index');
});

/* GET "wtffffff!!" */
router.get('/wtf+!', function(req, res, next) {
    res.render('users/index');
});

module.exports = router;
