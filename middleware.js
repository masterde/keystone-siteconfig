var keystone = require('keystone');
var url = require('url');
var i18n = require('i18n');

module.exports = (req, res, next) => {
	if (!res) {
		res = {}
	}

	if (!res.locals) {
		res.locals = {}
	}

	res.locals.getUrl = () => {
		return url.parse(req.protocol + '://' + req.get('host') + req.originalUrl)
	}

	keystone.list('Config').model.find().exec(function(err, results) {
		results.map((result) => {
			if (!res.locals[result.meta]) {
				res.locals[result.meta] = {
					[result.tag]: i18n.__(`${result.meta}.${result.tag}:${result.value}`)
				};
			} else {
				res.locals[result.meta][result.tag] = i18n.__(`${result.meta}.${result.tag}:${result.value}`);
			}
		})

		next();
	});
}
