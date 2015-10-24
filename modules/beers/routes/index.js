var express = require('express');
var router = express.Router();
var Controller = require('./../controller');

/* Listar Cervejas */
router.get('/', function(req, res, next) {
	Controller.list(req, res);
});

/* Listar Cerveja */
router.get('/:id', function(req, res, next) {
	Controller.get_ceva(req, res);
});

module.exports = router;