var Model = require('./model');

var Controller = {
	create: function(req, res){
		var dados = req.body;

		var model = new Model(dados);

		model.save(function (err, data){
		  if (err){
		    console.log('Erro: ', err);
		    msg = err;
		  }else{
		    console.log('Cerveja inserida: ', data);
		    msg = data;
		  }
			res.json(msg);
		});
	},
	update: function(req, res){
    var query = {_id: req.params.id};

	  var mod = req.body;

		var optional = {
			upsert: false,
			multi: false
		};

		Model.update(query, mod, function (err, data){
			if(err){
				console.log('Erro: ', err);
		    msg = err;
			}else{
				console.log('Cervejas atualizadas com sucesso: ', data);
		    msg = data.nModified;

			}
			res.json(msg);
		});
	},
	list: function(req, res){
		var query = {};

		Model.find(query, function(err, data){
		  if (err){
		    console.log('Erro: ', err);
		    msg = err;
		  }
		  else {
		    console.log('Listagem: ', data);
		    msg = data;
		  }
		  res.render('list', {title: 'Listagem de Cervejas', beers: data});
		});
	},
  get_ceva: function(req, res){
    var query = {_id: req.params.id};

    Model.findOne(query, function(err, data){
      if (err){
        console.log('Erro: ', err);
        msg = err;
      }
      else {
        console.log('Listagem: ', data);
        msg = data;
      }
      res.render('mostrar', {title: 'Cerveja', beer: data});
    });
  },
  retrieve: function(req, res){
    var query = {};

    Model.find(query, function(err, data){
      if (err){
        console.log('Erro: ', err);
        msg = err;
      }
      else {
        console.log('Listagem: ', data);
        msg = data;
      }
      res.json(msg);
    });
  },
  get: function(req, res){
    var query = {_id: req.params.id};

    Model.findOne(query, function(err, data){
      if (err){
        console.log('Erro: ', err);
        msg = err;
      }
      else {
        console.log('Listagem: ', data);
        msg = data;
      }
      res.json(msg);
    });
  },
	delete: function(req, res){
		var query = {_id: req.params.id};

		// É multi: true CUIDADO!
		Model.remove(query, function(err, data){
			if(err){
				console.log(err);
		    msg = err;
			}else{
				console.log('Cerveja deletada com sucesso, quantidade: ', data.result);
				msg = data;
			}
			res.json(msg);
		});
	}
}

module.exports = Controller;