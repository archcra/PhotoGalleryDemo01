
module.exports = function (app) {
	app.get('/', function(req, res) {
		res.render('index');
	});

	app.get('/prologue', function(req, res) {
		res.render('scene00');
	});

	app.get('/open', function(req, res) {
		res.render('scene01');
	});

	app.get('/part01/:user', function(req, res) {
		var user = req.params.user;
		console.log('user', user)
	    var userUrl = '../public/part01/'+ user + '.html';
        res.render( 'scene02' ,{
        	userUrl:userUrl
        });

	});

	app.get('/intermission', function(req, res) {
		res.render('scene03');
	});

	app.get('/part02/:user', function(req, res) {
		var user = req.params.user;
		console.log('user', user)
	    var userUrl = '../public/part02/'+ user + '.html';
        res.render( 'scene04' ,{
        	userUrl:userUrl
        });

	});

	app.get('/misc', function(req, res) {
		res.render('scene05');
	});
	app.get('/casting', function(req, res) {
		res.render('scene06');
	});
		app.get('/staff', function(req, res) {
		res.render('scene07');
	});
			app.get('/credits', function(req, res) {
		res.render('scene08');
	});
}; 
