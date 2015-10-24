var express = require('express');
var router = express.Router();

var Controller = require('./../controller');

/* GET */
router.get('/', function(req, res, next) {
	Controller.retrieve(req, res);
});

/* GET com ID */
router.get('/:id', function(req, res, next) {
	Controller.get(req, res);
});

/* Post Create */
router.post('/', function(req, res, next) {
	Controller.create(req, res);
});

/* PUT Update */
router.put('/:id', function(req, res, next) {
	Controller.update(req, res);
});

/* Delete Delete */
router.delete('/:id', function(req, res, next) {
	Controller.delete(req, res);
});

module.exports = router;
