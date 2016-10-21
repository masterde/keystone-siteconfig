var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
module.exports = () => {
	var Config = new keystone.List('Config');

	Config.add({
		meta: { type: String, initial: true, required: true },
		tag: { type: String, initial: true, required: true },
		value: { type: String, initial: true, required: true }
	});


	Config.defaultColumns = 'meta, tag, value';

	Config.register();
}
