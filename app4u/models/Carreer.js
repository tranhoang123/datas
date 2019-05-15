var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Enquiry Model
 * =============
 */

var Carreer = new keystone.List('Carreer', {
	nocreate: true,
	noedit: true,
});

Carreer.add({
	fName: { type: String, required: true },
	lName: { type: String, required: true },
	phone: { type: Number },
	email: { type: Types.Email, required: true, unique: true },
	linkled: { type: Types.Url },
	createdAt: { type: Date, default: Date.now },
});

Carreer.schema.pre('save', function (next) {
	this.wasNew = this.isNew;
	next();
});

Carreer.schema.post('save', function () {
	if (this.wasNew) {
		this.sendNotificationEmail();
	}
});

Carreer.schema.methods.sendNotificationEmail = function (callback) {
	if (typeof callback !== 'function') {
		callback = function (err) {
			if (err) {
				console.error('There was an error sending the notification email:', err);
			}
		};
	}

	if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
		console.log('Unable to send email - no mailgun credentials provided');
		return callback(new Error('could not find mailgun credentials'));
	}

	var carreer = this;
	var brand = keystone.get('brand');

	keystone.list('User').model.find().where('isAdmin', true).exec(function (err, admins) {
		if (err) return callback(err);
		new keystone.Email({
			templateName: 'enquiry-notification',
			transport: 'mailgun',
		}).send({
			to: admins,
			from: {
				name: 'APP4U',
				email: 'contact@app4u.com',
			},
			subject: 'New Enquiry for APP4U',
			carreer: carreer,
			brand: brand,
			layout: false,
		}, callback);
	});
};

Carreer.defaultSort = '-createdAt';
Carreer.defaultColumns = 'fName, lName, phone, email, createdAt';
Carreer.register();

